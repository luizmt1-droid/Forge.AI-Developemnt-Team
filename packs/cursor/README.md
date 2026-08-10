# FORGE — Cursor install pack

Drop-in materialization of `Forge.Team.MD` for Cursor product repos.

## Install

```text
packs/cursor/ssot/Forge.Team.MD  →  <repo>/.cursor/forge/Forge.Team.MD
packs/cursor/rules/equipe-forge.mdc  →  <repo>/.cursor/rules/equipe-forge.mdc
packs/cursor/agents/forge-*.md  →  <repo>/.cursor/agents/
packs/cursor/hooks/forge-autopilot-stop.mjs  →  <repo>/.cursor/hooks/
```

Merge the `stop` entry from `hooks.json` into `<repo>/.cursor/hooks.json`
(preserve other hooks such as impeccable). Then open the product in Cursor and
invoke `FORGE, …` — Sync creates `/forge/` artifacts on first run.

## Notes

- Do not mix FORGE artifacts with product source beyond `.cursor/` and `forge/`.
- Approve Cursor Hooks (Settings → Hooks) so the autopilot `stop` hook can fire.
- BTG MCP Dev Suite (`btg-*`) is optional; Continuous Improvement Probe installs
  it when `MCP-Agents` is on disk (see Forge.Team.MD §0.03).
- Regenerate this pack from ForgeTeam after editing section 5 of the SSOT.

## Uninstall

`FORGE, desinstale` — see Forge.Team.MD §0.05.