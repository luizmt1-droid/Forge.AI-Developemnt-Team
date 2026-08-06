# FORGE — Adaptive Multi-Agent Development Team

*A lean full-cycle virtual engineering squad that forges software from research to
approved delivery.*

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
  UI at Level 2+ must clear a **Prototype Gate** (VITRINE designs; CURADOR
  critiques beauty, layout philosophy and flows until Pass) **before** front-end
  implementation starts; the implemented UI then clears a design-critique loop
  and a blocking UX gate before QA. Screenshots from the running app are stored
  under `forge/05-qa/evidencias/` and compared against the revalidated
  prototypes.
- **Runs to completion.** Once invoked, the team loops on bugs and critiques
  until QA signs off, with output throttling for long sprints and a circuit
  breaker that stops runaway loops.
- **Scrum like a real team.** The FACILITADOR (scrum master) runs at every
  Adaptive Mode level: distributes tasks and keeps WIP honest; executors also
  pull free Ready cards. Progress lives in `forge/02-especificacao/sprint-N.md`
  (what was done, time spent, impediments) plus `board.md`. Blocked work goes to
  FUNDAÇÃO (tech lead) to unblock — not only to chat status.

## Adaptive Mode levels

| Level | Typical request | Process |
|-------|-----------------|---------|
| 1 — Micro | Script, bug fix, migration, isolated component | Product → Dev → QA, minimal artifacts (+ short VITRINE/CURADOR cycle if UI) |
| 2 — Small system | CRUD, dashboard, internal tool, MVP | Light research, light architecture, Design System, **static prototypes + Prototype Gate**, then Dev → UX → QA |
| 3 — Medium system | Multi-module product | Discovery, Epic→Feature→PBI→Task backlog, **navigable prototypes + Prototype Gate**, full gates |
| 4 — Enterprise | Financial, ERP, SaaS, distributed, regulated, AI-heavy | Full process, stakeholders, security, data and AI governance, navigable Prototype Gate |

The level is chosen automatically, announced with a one-paragraph rationale, and
re-evaluated during the project — FORGE escalates when complexity grows and
de-escalates when it over-engineered.

## The roster

Only the roles a level requires are activated.

| Group | Agents |
|-------|--------|
| Governance | **DIRETOR** (program director, reports to the human owner) |
| Research | **ORÁCULO** (domain, market and visual benchmark) |
| Product & flow | **BÚSSOLA** (product owner), **FACILITADOR** (scrum master — all levels: assign + pull, board, sprint diary) |
| Architecture | **FUNDAÇÃO** (tech lead + impediment unblock), with optional **CÂNONE** / **PRAGMA** lenses |
| Dev bench | **BIGORNA** (front-end), **MALHO** (back-end), **ENGRENAGEM** (integration), **CALDEIRA** (platform & DX), **TORNO** (complexity & performance) |
| Design | **VITRINE** (UX/UI + prototypes), **CURADOR** (art director / critic — Prototype Gate + UX Gate) |
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
  02-especificacao/  backlog, board, sprint diary (sprint-N.md), design system,
                       prototypes, Gherkin
  03-arquitetura/    ADRs, data modeling
  04-ia/             AI core
  05-qa/             QA reports, prototype curation, design curation,
                     screenshots (evidencias/), bugs
  06-metricas/       KPIs
  07-retrospectivas/ retrospectives
  08-diretor/        executive briefs
```

Under `02-especificacao/`: `board.md` is the column SSOT; `sprint-N.md` is the
living sprint diary the owner opens for progress (updates, time, impediments).
Under `02-especificacao/prototipos/`: index + flow map, static screens (Level 2)
or navigable HTML/CSS (Levels 3–4). Approved prototypes are the visual reference
for QA comparison — they are never accepted as execution evidence (E3).
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
