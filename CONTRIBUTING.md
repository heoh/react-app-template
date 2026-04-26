# Contributing

This document describes how to open issues and pull requests in this repository.
Contributors should leave enough context for reviewers to reproduce the purpose, verification steps, and remaining risks.

## Before You Start

- Check whether a related issue already exists.
- If there is no issue, open one with the goal, expected behavior, non-goals, and open questions.
- Choose the most specific issue template when opening a new issue; if unsure, use `General`.
- Keep each implementation PR focused on one purpose.
- Discuss large design, CI/CD, or deployment changes in an issue before implementation.
- Follow the deployment and CI/CD rules in this document.

## Local Development

```bash
pnpm install
pnpm dev
```

The local development server uses the default Vite dev server.

## Test Case Guidelines

New features and bug fixes should describe the expected behavior with tests.
When automation is practical, include the relevant tests in the PR.

Prefer tests for:

- Pure data transformations and state calculations
- User-visible screen states
- Routing or deployment base path changes
- Browser smoke coverage that confirms the app loads

Documentation-only PRs may have no automated tests.
In that case, state that the change is documentation-only in the PR body.

## Pull Request Body

Use `.github/pull_request_template.md` when opening a PR.
Fill in every section, including verification evidence and any remaining risks.

## Documentation Guidelines

Repository documentation and source comments should make sense without knowing issue or PR numbers.
GitHub references are useful for discussion tracking, but long-lived docs should stand on their own.

- Prefer current decisions and relevant document paths over issue number lists in durable docs.
- Use issue or PR numbers in PR bodies, review replies, and release notes where traceability matters.
- If a GitHub number appears in docs, the sentence should still be understandable without it.
- Do not use example strings that look like real issue or PR numbers.

## Deployment and CI/CD

- GitHub Actions CI runs format check, lint, typecheck, unit tests, e2e smoke tests, and build on PRs and `main`/`master` pushes.
- The main demo is deployed as a GitHub Pages project site: `https://<owner>.github.io/<repo>/`.
- Branch previews are deployed at `https://<owner>.github.io/<repo>/__preview/<branch-slug>/`.
- The preview URL is available in the `Deploy Preview` GitHub Actions run summary.
- The branch preview slug is a URL-safe form of the branch name using lowercase alphanumerics and `-`.
- Do not commit Vite base path changes just to make a preview deployment work.
- Deployment workflows inject `VITE_BASE_PATH` at build time.
- Deployment workflows run fast static checks and build; e2e smoke coverage is handled by CI.
- When a branch is deleted, its preview directory is removed by the cleanup workflow.

## Local Verification

Implementation PRs should pass these checks when possible:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

If a documentation-only PR has no automated verification, state that in the PR body.

## Review Checklist

Reviewers should focus on:

- Whether the change matches the expected behavior from the issue
- Whether tests describe the core behavior or regression risk
- Whether app code and infrastructure changes are unnecessarily mixed
- Whether CI/CD changes conflict with the deployment and CI/CD rules in this document
- Whether missing automated tests have a clear reason and manual verification path
