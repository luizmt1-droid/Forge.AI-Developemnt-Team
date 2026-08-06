# Roadmap

This is a living draft of where FORGE is headed. Nothing here is a commitment;
items move as the community and the maintainer learn what actually matters.

Status legend: **now** / **next** / **later** / **done**.

## Now

- **English translation of `Forge.Team.MD`.** The specification is currently in
  Portuguese. Translating it is the single largest barrier to a global
  contributor base. Role names (ORACULO, BIGORNA, GUARDIAO, ...) stay as stable
  protocol identifiers; body text and headings move to English. Tracked as the
  first community-facing piece of work — see issues labeled `translation`.
- **Community onboarding.** Discussions, issue templates, Code of Conduct and
  branch protection are being put in place so a first-time contributor knows
  where to ask, what to open, and how a change lands.

## Next

- **Reference installation packs.** Ready-to-drop rule files for Cursor
  (`.cursor/rules/`), Claude Code (`CLAUDE.md`) and GitHub Copilot custom
  instructions, generated from section 5 of the spec so they cannot drift.
- **Example runs.** Short, anonymized transcripts of Level 1 and Level 2
  sessions that show Adaptive Mode sizing, hybrid assign/pull, a `sprint-N.md`
  work-log update, the UX Gate and a closed bug loop. These are the fastest way
  for a newcomer to understand what "done" looks like.
- **Capability Probe adapters.** Harden the evidence adapters in section 3.6
  (Playwright / desktop / API) with concrete, copy-pasteable snippets that work
  on a fresh machine.

## Later

- **Automated sync tooling.** A small CLI or agent skill that materializes the
  roster from `Forge.Team.MD` into the host platform and reports the diff, so
  the SSOT sync routine is not a manual checklist.
- **Metrics pack.** Default product KPI templates under `forge/06-metricas/`
  that a Level 3+ run can fill without inventing the shape each time (not a
  replacement for the Scrum work log in `sprint-N.md`).
- **Translations of the surrounding docs.** Once the specification is in
  English, community translations of the README into other languages are welcome.

## Done

- **Scrumban like a real team (spec + README).** FACILITADOR at every Adaptive
  Mode level; hybrid assign + pull; `board.md` + `sprint-N.md` work logs (done /
  time / impediment); **Blocked** column with FUNDAÇÃO as tech-lead unblocker;
  DIRETOR briefs point the owner at the sprint diary.

## Out of scope (for now)

- Renaming the existing agents. The Portuguese role names are protocol
  identifiers used by installed rules in downstream projects.
- Turning FORGE into a hosted SaaS or a closed platform. It stays a
  specification that any AI coding assistant can run.
- Expanding the roster with roles that duplicate an existing one. Lower levels
  absorb adjacent responsibilities on purpose.

## How to influence this list

Open a Discussion under **Ideas**, or an Enhancement issue once the idea has
enough shape. Pull requests that move a **now** or **next** item forward are
the highest-signal contributions.
