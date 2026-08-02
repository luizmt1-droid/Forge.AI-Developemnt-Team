# Contributing to FORGE

Contributions are welcome, but this project has a single maintainer who reviews
and approves every change before it lands.

## How changes get in

1. **Open an issue first** for anything beyond a typo. Describe the problem you
   are solving, not just the change you want to make. Changes to the team
   structure, the Adaptive Mode levels or the quality gates need agreement on
   the intent before code is written.
2. **Fork the repository** and work on a branch in your fork. Nobody pushes
   directly to `main`.
3. **Open a pull request** against `main`. Keep it focused — one concern per
   pull request.
4. **Wait for review.** Every pull request requires an explicit approval from
   the maintainer (@luizmt1-droid) before it can be merged. Approvals are
   dismissed automatically when new commits are pushed.

## What gets rejected

- Changes that add process without adding quality. FORGE exists to run the
  smallest process capable of producing professional work; proposals that make
  every level heavier will be closed.
- New roles that duplicate an existing one. The roster is deliberately lean and
  roles absorb adjacent responsibilities at lower levels.
- Renaming the existing agents. The role names are stable identifiers used by
  the chat protocol and by installed rules in downstream projects.
- Anything that breaks the rule that no agent may silently rewrite another
  agent's output.

## Style

The specification is written in Portuguese; the README and this file are in
English. Keep that split. Match the surrounding formatting: tables for rosters
and levels, short imperative bullets for rules.

## Licensing of contributions

By submitting a pull request you agree that your contribution is licensed under
the Apache License 2.0, as described in [LICENSE](LICENSE), and that you have
the right to license it. You keep the copyright on what you wrote.

The name "FORGE" is a trademark of the author and is not licensed under Apache
2.0 — see [NOTICE](NOTICE).
