# Security Policy

## Supported versions

FORGE is a living specification. Security-relevant changes apply to the latest
commit on `main`. Older snapshots of `Forge.Team.MD` are not maintained.

## Reporting a vulnerability

Please do **not** open a public issue for security-sensitive reports.

Email **luizmt1@gmail.com** with:

- a description of the issue and where it lives in the specification or
  repository tooling
- steps to reproduce, if applicable
- the impact you expect

You should receive an acknowledgement within a few days. Once the issue is
understood, a fix will land on `main` and you will be credited in the
corresponding pull request unless you ask otherwise.

## Scope

This repository contains a team specification and the documents that govern how
it is contributed to. There is no shipped application binary. Reports that
matter here include:

- social-engineering content that the specification tells an agent to produce
- prompts that instruct an agent to leak secrets, disable gates or rewrite
  another agent's output silently
- supply-chain concerns in repository tooling (for example a future CI workflow)

Reports about third-party products that FORGE integrates with (Cursor, Claude
Code, GitHub Copilot, Playwright, and so on) should go to those products'
security channels.
