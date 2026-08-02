# FORGE — Adaptive Multi-Agent Development Team

FORGE is a virtual full-cycle engineering team for AI coding assistants
(Cursor, Claude Code, GitHub Copilot). Instead of one assistant improvising,
FORGE splits the work across independent logical agents — research, product,
architecture, five full-stack dev benches, UX/UI, design critique, QA, data,
security and analytics — and materializes them as real subagents, Tasks or MCP
tools whenever the platform supports it.

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
  the smallest process that still produces professional work. More ceremony is
  not more quality.
- **Assume more, ask less.** Requirements are inferred and explicitly labeled as
  assumptions; the human is only asked when a decision materially changes
  architecture, business, regulatory risk or cost.
- **Role integrity.** No agent rewrites another agent's output. Changes flow
  through review, critique, bug tickets or PR comments. The design critic does
  not edit CSS — it files defects, and the front-end agent fixes them.
- **Gates, not vibes.** Functional QA boots the real system and runs every
  Gherkin scenario, filing bugs on the board for each failure. Anything with a
  UI must also clear a design-critique loop and a blocking UX gate before QA
  even starts.
- **Runs to completion.** Once invoked, the team loops on bugs and critiques
  until QA signs off, with output throttling for long sprints and a circuit
  breaker that stops runaway loops.

## Adaptive Mode levels

| Level | Typical request | Process |
|-------|-----------------|---------|
| 1 — Micro | Script, bug fix, migration, isolated component | Product → Dev → QA, minimal artifacts |
| 2 — Small system | CRUD, dashboard, internal tool, MVP | Light research, light architecture, mandatory design system if there is UI |
| 3 — Medium system | Multi-module product | Discovery, Epic→Feature→PBI→Task backlog, full gates |
| 4 — Enterprise | Financial, ERP, SaaS, distributed, regulated, AI-heavy | Full process, stakeholders, security, data and AI governance |

The level is chosen automatically, announced with a one-paragraph rationale, and
re-evaluated during the project — FORGE escalates when complexity grows and
de-escalates when it over-engineered.

## The roster

Only the roles a level requires are activated.

| Group | Agents |
|-------|--------|
| Governance | **DIRETOR** (program director, reports to the human owner) |
| Research | **ORÁCULO** (domain, market and visual benchmark) |
| Product & flow | **BÚSSOLA** (product owner), **FACILITADOR** (scrum master) |
| Architecture | **FUNDAÇÃO** (tech lead), with optional **CÂNONE** / **PRAGMA** lenses |
| Dev bench | **BIGORNA** (front-end), **MALHO** (back-end), **ENGRENAGEM** (integration), **CALDEIRA** (platform & DX), **TORNO** (complexity & performance) |
| Design | **VITRINE** (UX/UI), **CURADOR** (art director / critic) |
| Quality | **GUARDIÃO** (QA lead), **CINZEL** (simplicity guardian), **ARGUS** (multi-area critic) |
| Data & AI | **COFRE** (DBA), **LUPA** (analytics), **ALQUIMISTA** (ML/RAG), **SUSSURRADOR** (prompts & agents), **SENTINELA** (AI evaluation & governance) |

## Installation

1. Copy `Forge.Team.MD` into your project (for Cursor, `.cursor/forge/Forge.Team.MD` works well).
2. Register the consolidated prompt from section 5 of the spec as a system rule:
   - **Cursor** — a file under `.cursor/rules/`
   - **Claude Code** — `CLAUDE.md`
   - **GitHub Copilot** — custom instructions
3. Start a message with `FORGE,` followed by your task.

On the first invocation FORGE runs its sync routine, reports what it created or
updated, sizes the request, and starts working.

## Artifacts

FORGE writes its own artifacts under `forge/`, never mixed with product code:

```text
forge/
  00-intake/         inferred assumptions, sizing, sync report
  01-pesquisa/       domain dossier, visual benchmark
  02-especificacao/  backlog, board, design system, Gherkin
  03-arquitetura/    ADRs, data modeling
  04-ia/             AI core
  05-qa/             QA reports, design curation, screenshots, bugs
  06-metricas/       KPIs
  07-retrospectivas/ retrospectives
  08-diretor/        executive briefs
```

Every artifact is proportional to the level — FORGE will not generate dozens of
pages for a shell script.

## Language note

The specification is written in Portuguese and the role names are Portuguese
words (ORÁCULO, BIGORNA, GUARDIÃO). This is intentional: the names are stable
identifiers used in the chat protocol. The agents themselves respond in whatever
language you use.

## License

Apache License 2.0 — see [LICENSE](LICENSE) and [NOTICE](NOTICE).

Copyright 2026 Luiz Henrique Lima. The name "FORGE" is a trademark of the author
and is not licensed under Apache 2.0.
