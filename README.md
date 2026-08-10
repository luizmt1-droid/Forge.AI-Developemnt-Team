# FORGE — Adaptive Multi-Agent Development Team

*A lean full-cycle virtual engineering squad that forges software from research to
approved delivery.*

FORGE is a virtual full-cycle engineering team for AI coding assistants
(Cursor, Claude Code, GitHub Copilot). Instead of one assistant improvising,
FORGE splits the work across independent logical agents — research, product,
architecture, five full-stack dev benches, UX/UI, design critique, evidence-based
QA, data, security and analytics — and materializes them as real subagents,
Tasks or MCP tools whenever the platform supports it.

The whole team is defined by a single specification file: [`Forge.Team.MD`](Forge.Team.MD).

## Why it exists

A single AI agent handling a whole feature tends to skip the unglamorous parts:
it does not benchmark competitors, it does not challenge its own complexity, it
does not run the app before declaring it done, and it happily ships a generic
admin-panel UI. FORGE turns those responsibilities into separate roles that
cannot silently overwrite each other, and puts blocking gates between the work
and the word "done".

## Core ideas

- **Single source of truth.** `Forge.Team.MD` is the spec. On every invocation
  FORGE inspects the environment, creates missing agents, updates drifted ones
  and reports the diff — so editing the spec triggers an automatic migration
  instead of a manual reinstall.
- **Adaptive Mode.** Every request is classified from Level 1 (a script or a bug
  fix) to Level 4 (a regulated, distributed enterprise system), and FORGE runs
  the smallest process that still produces professional work.
- **Assume more, ask less.** Requirements are inferred and labeled as
  assumptions; the human (DONO) is only asked when a decision materially changes
  architecture, business, regulatory risk or cost.
- **Backlog autonomy (anti–prompt-tax).** After a master task, BÚSSOLA generates
  the full board and FACILITADOR pulls P0 until QA approval — the owner should
  not have to name role + metric. Owner work requests become Kanban cards in the
  same turn (`priority` 0|1|2, default 0). Meta-commands (`status`, `termine`,
  `encerre`, `melhoria contínua`, `desinstale`) do not create cards.
- **Role integrity.** No agent rewrites another agent's output. Changes flow
  through review, critique, bug tickets or PR comments.
- **Gates, not vibes.** Evidence-based QA exercises the real system, captures
  proof, and has someone who did not produce the work review it. UI at Level 2+
  clears Prototype / UX / Visual Excellence gates. Interactive products clear a
  Playable Gate. UI that consumes APIs also clears a **Connected Runtime Gate**
  (authenticated run against the real stack — mocks alone never close Done).
- **Mission Control.** The owner follows work in chat (Chat Surface) and on a
  local Live Kanban site projected from `board.md` — not only from assistant
  narration.
- **Controlled continuous improvement.** Default mode is `NORMAL`. Explicit
  `FORGE, melhoria contínua` turns on `CONTINUOUS` (team exercises the system,
  captures screenshots, lists bugs/improvements). `FORGE, termine` drains active
  work; `FORGE, encerre` hard-stops.
- **Clean uninstall.** `FORGE, desinstale` removes FORGE artifacts, Cursor
  rules/hooks and `btg-*` MCP keys from the requested scope — never product code.

## Adaptive Mode levels

| Level | Typical request | Process |
|-------|-----------------|---------|
| 1 — Micro | Script, bug fix, migration, isolated component | Product → Dev → QA, light Scrumban (`board.md`), minimal artifacts (+ short VITRINE/CURADOR cycle if UI) |
| 2 — Small system | CRUD, dashboard, internal tool, MVP | Light research, Asset Gate when needed, architecture, Design System, **prototypes + Prototype Gate**, Dev → gate columns → UX → QA; Mission Control |
| 3 — Medium system | Multi-module product | Discovery, Epic→Feature→PBI→Task backlog, full gates + Scrumban ceremonies + separate QA squad roles |
| 4 — Enterprise | Financial, ERP, SaaS, distributed, regulated, AI-heavy | Full process, stakeholders, security, data and AI governance |

The level is chosen automatically, announced with a one-paragraph rationale, and
re-evaluated during the project.

## How the owner follows a sprint

| Surface | What you see |
|---------|----------------|
| `forge/02-especificacao/board.md` | Kanban SSOT — columns: Backlog → Ready → In Progress → Review → **Ready for QA** → QA → User Validation → Done |
| Live Kanban (`FORGE, abra o kanban`) | Browser board ≤2s behind the projection (`forge/09-mission-control/`) |
| Chat / `FORGE, status` | Chat Surface: executive summary + P0 in flight + mode |
| `forge/08-diretor/` | Briefs + `status-projection.json` |
| `forge/06-loop/loop-state.md` | Mode: `NORMAL` \| `CONTINUOUS` \| `DRAINING` \| `BLOCKED_CB` \| `STOPPED` |

**Flow (Level 2+):** one adjacent column advance per card per publish (REGRA DE
OURO). Dev closes only `In Progress → Review` in the same turn; gates advance
with evidence. Skipping Review / Ready for QA / QA is process failure (prompt tax).

## Useful commands

| Command | Effect |
|---------|--------|
| `FORGE, …` | Invoke the team on a task |
| `FORGE, status` / `como está?` | Refresh Chat Surface + brief |
| `FORGE, abra o kanban` / `feche o kanban` | Start/stop Live Kanban site |
| `FORGE, melhoria contínua` | Enter `CONTINUOUS` |
| `FORGE, termine` / `termine aí` | Enter `DRAINING` (finish active queue only) |
| `FORGE, encerre` | Hard stop |
| `FORGE, desinstale` | Uninstall FORGE from project/Cursor (§0.05) |

## The roster

Only the roles a level requires are activated.

| Group | Agents |
|-------|--------|
| Governance | **DIRETOR** (program director → DONO; Sync, sizing, Mission Control chat, uninstall) |
| Research | **ORÁCULO** (domain, benchmark, category fluency, asset hunt); **VIGIA** (continuous-improvement sentinel — `CONTINUOUS` only; ≠ SENTINELA) |
| Product & flow | **BÚSSOLA** (PO — autonomous board, DONO-request cards, intake dedup); **FACILITADOR** (scrum master — pull P0, gate columns, loop-state, Mission Control publish) |
| Architecture | **FUNDAÇÃO** (tech lead, domain invariants, asset wiring), optional **CÂNONE** / **PRAGMA** lenses |
| Dev bench | **BIGORNA** (front-end), **MALHO** (back-end), **ENGRENAGEM** (integration), **CALDEIRA** (platform, probes, smoke pack, ship, Live Kanban, autopilot hook), **TORNO** (complexity & performance) |
| Design | **VITRINE** (UX/UI + prototypes), **CURADOR** (art director / critic) |
| Quality | **GUARDIÃO** (QA lead), **ÍRIS** (automation & capture), **PERITO** (blind evidence review), **CINZEL** (simplicity), **ARGUS** (multi-area critic) |
| Data & AI | **COFRE** (DBA), **LUPA** (analytics), **ALQUIMISTA** (ML/RAG), **SUSSURRADOR** (prompts & agents), **SENTINELA** (AI evaluation & governance) |

## Installation

Fastest path: copy from [`packs/`](packs/) (generated from section 5):

| Pack | Drop into |
|------|-----------|
| [`packs/cursor/`](packs/cursor/) | `.cursor/forge/`, `.cursor/rules/`, `.cursor/agents/`, `.cursor/hooks/` (+ merge `hooks.json`) |
| [`packs/claude/`](packs/claude/) | `CLAUDE.md` |
| [`packs/copilot/`](packs/copilot/) | Copilot custom instructions / `.github/copilot-instructions.md` |

Or manually:

1. Copy `Forge.Team.MD` into your project (for Cursor, `.cursor/forge/Forge.Team.MD`).
2. Register the consolidated prompt from **section 5** of the spec as a system rule.
3. Optional for continuous improvement: Cursor `stop` hook
   `.cursor/hooks/forge-autopilot-stop.mjs` + BTG MCP Dev Suite (`btg-*`) — see §0.03.
4. Start a message with `FORGE,` followed by your task.

On the first invocation FORGE runs its sync routine, reports what it created or
updated, sizes the request, and starts working.

## Artifacts

FORGE writes its own artifacts under `forge/`, never mixed with product code:

```text
forge/
  00-intake/         hypotheses, sizing, sync-report, prompt-tax
  01-pesquisa/       dossier, visual benchmark, category-fluency, asset-board
  02-especificacao/  board.md, design system, prototypes, Gherkin, mission-control-spec
  03-arquitetura/    ADRs, domain-invariants, data modeling
  04-ia/             AI core
  05-qa/             capabilities, evidencias/<run-id>/, laudos, baseline, session-smoke
  06-loop/           loop-state, intake-queue, discovery-log, cycle-log, debt-register
  06-metricas/       KPIs
  07-retrospectivas/ retrospectives
  08-diretor/        briefs, status-brief, status-projection, publish-projection.js
  09-mission-control/ Live Kanban site (server + public/index.html)
```

Every artifact is proportional to the level — FORGE will not generate dozens of
pages for a shell script.

## Language note

The surrounding documentation is in English. The specification itself
(`Forge.Team.MD`) is currently in Portuguese; translating it is the top item on
the [roadmap](ROADMAP.md). Role names (ORÁCULO, BIGORNA, GUARDIÃO, ...) stay as
stable protocol identifiers regardless of the language of the body text. The
agents themselves respond in whatever language you use.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before
opening a pull request, and follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

- **Questions** go to [Discussions](https://github.com/luizmt1-droid/Forge.AI-Developemnt-Team/discussions).
- **Bugs and enhancements** use the issue templates.
- **Direction of the project** is sketched in [ROADMAP.md](ROADMAP.md).
- **Security-sensitive reports** follow [SECURITY.md](SECURITY.md) — do not open
  a public issue for those.

Every pull request needs an explicit approval from the maintainer before it can
merge. Direct pushes to `main` are reserved for the maintainer.

## License

Apache License 2.0 — see [LICENSE](LICENSE) and [NOTICE](NOTICE).

Copyright 2026 Luiz Henrique Lima. The name "FORGE" is a trademark of the author
and is not licensed under Apache 2.0.
