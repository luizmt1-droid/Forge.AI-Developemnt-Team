#!/usr/bin/env node
// FORGE autopilot — Cursor `stop` hook.
// Auto-continua os ciclos de melhoria contínua (§0.03) SEM depender de shell
// em background / notify watcher. Gatilho = fim do turno do Agent.
//
// Contrato do evento `stop` (Cursor hooks):
//   input:  { "status": "completed"|"aborted"|"error", "loop_count": <n> }
//   output: { "followup_message": "<texto>" }  // vazio => turno encerra normal
//
// Controles (fail-open: qualquer erro => encerra normal, nunca bloqueia):
//   - loop-state.md `autopilot: on`
//   - loop-state.md `mode:` ∈ {CONTINUOUS, DRAINING}
//   - freshness: `updated:` dentro de STALE_HOURS
//   - HARD_CAP via loop_count
//   - .cycle.lock fresco = outro ciclo ainda trabalhando → este stop cede
//
// BUGFIX (2026-08-09): o stop hook NÃO deve criar o lock. Criar no stop e
// esperar o próximo turno apagar no fim fazia o *próximo* stop ver EEXIST e
// silenciar a continuidade (Kanban “congelado” com CONTINUOUS ainda ON).
// Contrato novo: o ciclo AGENT cria o lock no INÍCIO e apaga no FIM.

import { readFileSync, existsSync, unlinkSync, statSync } from 'node:fs';
import { join } from 'node:path';

const STALE_HOURS = 24;
const HARD_CAP = 200;
const LOCK_STALE_MS = 3 * 60 * 1000; // 3 min — processo morto / turno abandonado

function resolveLoopDir(cwd) {
  // Windows: Forge/ (tooling clone) e forge/ (artefatos) podem colidir por case.
  // Preferir a pasta que já tem loop-state.md.
  const candidates = [
    join(cwd, 'forge', '06-loop'),
    join(cwd, 'Forge', '06-loop'),
  ];
  for (const dir of candidates) {
    if (existsSync(join(dir, 'loop-state.md'))) return dir;
  }
  return candidates[0];
}

function lockPathFor(cwd) {
  return join(resolveLoopDir(cwd), '.cycle.lock');
}

/** true = outro ciclo ativo → este stop não deve emitir followup */
function isOtherCycleRunning(cwd) {
  const lockPath = lockPathFor(cwd);
  if (!existsSync(lockPath)) return false;
  try {
    const age = Date.now() - statSync(lockPath).mtimeMs;
    if (age > LOCK_STALE_MS) {
      unlinkSync(lockPath);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function emitStop() {
  process.stdout.write('{}');
  process.exit(0);
}

function emitContinue(message) {
  process.stdout.write(JSON.stringify({ followup_message: message }));
  process.exit(0);
}

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function parseUpdated(raw) {
  const m = raw.match(/updated:\s*(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/i);
  if (!m) return null;
  const [, y, mo, d, h, mi] = m;
  const dt = new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi));
  return Number.isNaN(dt.getTime()) ? null : dt;
}

function readLoopState(cwd) {
  const dir = resolveLoopDir(cwd);
  return readFileSync(join(dir, 'loop-state.md'), 'utf8');
}

const CONTINUATION_PROMPT = [
  '[FORGE — Continuação da Sprint] Autopilot ON (Cursor stop hook). NÃO peça autorização ao DONO.',
  '0) LOCK: no INÍCIO do turno, criar `forge/06-loop/.cycle.lock` (ou `Forge/06-loop/.cycle.lock` se for a pasta com loop-state). Se o arquivo já existir e for fresco (<3 min), ENCERRAR sem editar board (outro ciclo ativo). Ao FINAL do turno (após publish + loop-state), DELETE o lock — senão a continuidade para.',
  '1) Ler forge/06-loop/loop-state.md e forge/02-especificacao/board.md (Windows: pasta Forge/ pode ser a SSOT).',
  '2) Se `autopilot` != on OU mode ∈ {NORMAL, STOPPED, BLOCKED_CB}: apenas confirme e encerre o turno sem puxar cards.',
  '3) Modo DRAINING: concluir só a fila ativa congelada; ao esvaziar → gravar `mode: STOPPED` + `autopilot: off` e parar.',
  '4) Modo CONTINUOUS — Kanban VISÍVEL (fail-closed §3.3/§9d):',
  '   a) ANTES de codar: FACILITADOR move P0 Backlog→Ready→In Progress (ou Ready→In Progress), grava board.md e roda `node forge/08-diretor/publish-projection.js` (ou Forge/…) para o DONO VER o card em In Progress. Só então MOTOR trabalha.',
  '   b) REGRA DE OURO — 1 AVANÇO DE COLUNA POR WRITE+PUBLISH. Em um único update de board.md, cada card sobe no máximo UMA raia adjacente. Proibido colapsar In Progress→Done / Ready for QA→Done / Backlog→Done no mesmo turno.',
  '   c) Ao fechar Dev neste turno: mover só In Progress→Review (+publish). NÃO promover Review→…→Done na mesma resposta.',
  '   d) Spot/QA: avançar no máx. UMA raia de gate por card por turno + publish. Laudo obrigatório para QA→UV e UV→Done.',
  '   e) VIGIA: varredura curta com evidência → discovery-log.md + intake-queue.md.',
  '   f) BÚSSOLA: dedup + top-up (§3.3.1) se Ready vazio OU Backlog+Ready < piso — promover ≥3 cards P0/P1 elegíveis para Ready.',
  '   g) WIP: manter 1–2 cards em In Progress; fechar turno com gates vazios e só Backlog+Done = `[FACILITADOR — prompt tax]`.',
  '   h) Consistência: board.md ≡ loop-state active_queue. Publicar projection. Atualizar loop-state (`updated` fresco obrigatório — senão o hook fica stale).',
  '5) Se NÃO houver trabalho elegível (active_queue vazio, intake vazio, Backlog+Ready vazio e sem gate pendente): gravar `mode: STOPPED` + `autopilot: off`, registrar em cycle-log.md, DELETE lock, e parar.',
].join('\n');

function main() {
  let input = {};
  try {
    input = JSON.parse(readStdin() || '{}');
  } catch {
    input = {};
  }

  if (input.status && input.status !== 'completed') return emitStop();

  const loopCount = Number(input.loop_count) || 0;
  if (loopCount >= HARD_CAP) return emitStop();

  const cwd = process.cwd();
  let raw;
  try {
    raw = readLoopState(cwd);
  } catch {
    return emitStop();
  }

  const armed = /autopilot:\s*on\b/i.test(raw);
  if (!armed) return emitStop();

  const modeMatch = raw.match(/mode:\s*([A-Z_]+)/i);
  const mode = modeMatch ? modeMatch[1].toUpperCase() : '';
  if (mode !== 'CONTINUOUS' && mode !== 'DRAINING') return emitStop();

  const updated = parseUpdated(raw);
  if (updated) {
    const ageHours = (Date.now() - updated.getTime()) / 3_600_000;
    if (ageHours > STALE_HOURS) return emitStop();
  }

  // Outro ciclo ainda segurando o lock → ceder (não emitir followup).
  if (isOtherCycleRunning(cwd)) return emitStop();

  return emitContinue(CONTINUATION_PROMPT);
}

try {
  main();
} catch {
  emitStop();
}
