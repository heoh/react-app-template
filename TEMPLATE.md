# Template Guide

This repository is a template for quickly starting a typical React web application.
It includes the verification scripts and GitHub Pages deployment flow needed for a `Vite + React + TypeScript` app.

## Stack

- `pnpm`
- `Vite + React + TypeScript`
- `Vitest`
- `Playwright`
- `ESLint`
- `Prettier`
- `GitHub Actions`
- `GitHub Pages`

The template intentionally does not include routing, state management, a UI framework, or a design system.
Choose those explicitly when the app needs them.

## Quick Start

1. Open this template repository on GitHub.
2. Select **Use this template** and then **Create a new repository**.
3. Choose the owner, repository name, visibility, and whether to include all branches.
4. Create the repository, then clone the new app repository locally.
5. Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

6. Replace the app-specific placeholders listed in [After Creating an App](#after-creating-an-app).
7. In the new repository, open **Settings** → **Pages** and set **Source** to **GitHub Actions**.
8. Push to `main` or `master` to publish the main demo, or push a feature branch to publish a branch preview.

## Document Roles

- `README.md`: Starter README for the app created from this template. Replace the app name and description with real app content.
- `CONTRIBUTING.md`: Contribution guide that should remain in the app repository. It covers PR, testing, and review expectations.
- `TEMPLATE.md`: Guide for the template itself. Delete it or move it to internal docs once the app is stable.

## Project Structure

- `src/App.tsx`: Template app shell
- `src/templateData.ts`: Example data shared by the screen and tests
- `src/index.css`: Basic responsive styles
- `tests`: Browser smoke tests
- `.github/ISSUE_TEMPLATE`: Guided issue templates with `General` as the fallback
- `.github/workflows`: CI, main Pages deployment, and branch preview deployment

## After Creating an App

- Replace the app name, description, and demo URL in `README.md`.
- Update `package.json` `name` for the new repository or app.
- Replace the sample content in `src/App.tsx`, `src/templateData.ts`, and `src/templateData.test.ts`.
- Choose routing, state management, UI framework, and design system only when the app needs them.

## GitHub Pages

- Main demo: `https://<owner>.github.io/<repo>/`
- Branch preview: `https://<owner>.github.io/<repo>/__preview/<branch-slug>/`

The template assumes GitHub Pages project site deployment.
Because this template deploys with Pages Actions workflows, configure the repository's Pages source as **GitHub Actions** rather than a branch source.
Deployment workflows inject `VITE_BASE_PATH` at build time, so do not commit Vite base path changes just to make branch previews work.

## CI/CD

- `CI` runs format check, lint, typecheck, unit tests, e2e smoke tests, and build on PRs and `main`/`master` pushes.
- `Deploy Pages` updates the main demo at the Pages root on `main`/`master` push or manual dispatch.
- `Deploy Preview` publishes regular branch pushes under `__preview/<branch-slug>/`.
- The preview URL is also written to the `Deploy Preview` GitHub Actions run summary.
- When a branch is deleted, its preview directory is removed by the cleanup workflow.

## Verification Commands

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```
