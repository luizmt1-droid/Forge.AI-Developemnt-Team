# Contributing to FORGE

Contributions are welcome, but this project has a single maintainer who reviews
and approves every change before it lands. By participating you agree to follow
the [Code of Conduct](CODE_OF_CONDUCT.md).

## Where to start

- Read the [roadmap](ROADMAP.md). The highest-signal work right now is listed
  under **Now** and **Next**.
- Prefer a [Discussion](https://github.com/luizmt1-droid/Forge.AI-Developemnt-Team/discussions)
  for questions and early ideas. Promote mature ideas to an Enhancement issue.
- Use the issue templates for bugs, enhancements and documentation fixes.
  Blank issues are disabled on purpose.
- Look for issues labeled `good first issue` or `help wanted` if you want a
  bounded first contribution.

## How changes get in

1. **Open an issue first** for anything beyond a typo. Describe the problem you
   are solving, not just the change you want to make. Changes to the team
   structure, the Adaptive Mode levels or the quality gates need agreement on
   the intent before code is written.
2. **Fork the repository** and work on a branch in your fork. Nobody but the
   maintainer pushes directly to `main`; contributors always go through a pull
   request.
3. **Open a pull request** against `main`. Keep it focused — one concern per
   pull request. Fill in the pull request template.
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

Surrounding documentation (README, this file, Code of Conduct, Security Policy,
Roadmap, issue and PR templates) is written in English. The specification
(`Forge.Team.MD`) is currently in Portuguese; translating its body text to
English — while keeping the Portuguese role names as protocol identifiers — is
the top item on the roadmap and an explicitly welcome contribution.

Match the surrounding formatting: tables for rosters and levels, short
imperative bullets for rules. Do not reformat untouched paragraphs.

## Licensing of contributions

By submitting a pull request you agree that your contribution is licensed under
the Apache License 2.0, as described in [LICENSE](LICENSE), and that you have
the right to license it. You keep the copyright on what you wrote.

The name "FORGE" is a trademark of the author and is not licensed under Apache
2.0 — see [NOTICE](NOTICE).

## Security

Do not open a public issue for security-sensitive reports. Follow
[SECURITY.md](SECURITY.md).