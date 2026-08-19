# Contributing to Pawnary 0xc

Thanks for taking the time to contribute. This document covers everything you
need to develop, test, and release changes to `@pawnary/oxfmt-config` and
`@pawnary/oxlint-config`.

## Prerequisites

- Node.js
- [pnpm](https://pnpm.io) `^11.21.0` — if you have
  [Corepack](https://nodejs.org/api/corepack.html) enabled, it will fetch the
  right version for you automatically the first time you run a `pnpm` command in
  this repo.

## Setup

```sh
git clone https://github.com/pawnary/oxc.git
cd oxc
pnpm install
```

## Development workflow

| Command                       | What it does                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `pnpm build`                  | Builds every package with tsdown (ESM + CJS + `.d.ts`, exports map, `publint` checks).      |
| `pnpm lint` / `pnpm lint:fix` | Lints the workspace with Oxlint.                                                            |
| `pnpm fmt` / `pnpm fmt:fix`   | Checks/fixes formatting with Oxfmt.                                                         |
| `pnpm test`                   | Runs the test suite with Vitest.                                                            |
| `pnpm clean`                  | Removes `dist/` and `node_modules` across the workspace — use it if you need a clean slate. |

Before opening a pull request, run:

```sh
pnpm lint && pnpm fmt && pnpm build && pnpm test
```

### Making a change to a shared config

1. Edit the relevant file under `packages/oxfmt-config/src/` or
   `packages/oxlint-config/src/`.
2. Run `pnpm build` — this regenerates each package's `dist/` and its
   `package.json` `exports` map. Never hand-edit those generated fields.
3. Run `pnpm lint` and `pnpm fmt`. This repository's own root
   `oxlint.config.ts`/`oxfmt.config.ts` consume your packages directly from
   `src/`, so any change is immediately validated against the repo itself.
4. Add a changeset (see [Releasing](#releasing) below) describing the change
   from a consumer's point of view.

### Code style

Formatting and linting are enforced by this repo's own packages — there's
nothing to configure manually. If you use VS Code, the recommended
`oxc.oxc-vscode` extension (see `.vscode/extensions.json`) formats and fixes on
save using the same config.

### Commit messages

This repo doesn't enforce a commit message format with tooling, but please
follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`,
`fix:`, `chore:`, `docs:`, `refactor:`, ...) where it makes sense. It keeps
`git log` scannable and pairs naturally with the changeset summary you'll write
for the same change.

### Pre-commit checks

`.lintstagedrc` runs `pnpm run lint` on staged `.ts` files via
[lint-staged](https://github.com/lint-staged/lint-staged). Note that no Git hook
is currently wired up to run it automatically on commit (no Husky /
`simple-git-hooks` installed yet) — run `pnpm lint` yourself before committing,
or trigger `lint-staged` manually if you have it globally available.

## Releasing

Versioning and publishing are handled with
[Changesets](https://github.com/changesets/changesets).

### 1. Add a changeset

Whenever you make a change to `packages/oxfmt-config` or
`packages/oxlint-config` that consumers should know about, run:

```sh
pnpm changeset
```

Pick the affected package(s), choose a semver bump, and write a short summary of
the change from a consumer's perspective (this becomes the changelog entry).
Commit the generated file under `.changeset/` together with your change.

Rule of thumb for the bump type:

- **patch** — bug fixes, or a default rule/option change unlikely to break
  anyone's lint/format run.
- **minor** — a new default rule/option that could newly flag existing code, or
  a new export.
- **major** — anything that removes or fundamentally changes existing behavior
  (e.g., dropping a plugin, disabling a category, changing what `defineConfig`
  merges).

Not every PR needs a changeset — docs-only or internal tooling changes (like
this file) don't affect either published package.

### 2. Version and publish (maintainers)

```sh
pnpm changeset:version   # consumes pending changesets into version bumps + CHANGELOGs
pnpm changeset:publish   # builds and publishes the updated packages to npm
```

Both packages currently sit at `0.0.0` (unreleased). There is no CI-driven
release pipeline yet — publishing is a manual, maintainer-run step for now.

## Opening a pull request

- Keep PRs focused on one change (a config tweak, a docs update, a tooling
  change) — it makes review and changelog entries clearer.
- Include a changeset if the change affects either published package (see
  above).
- Describe _why_ the change is needed, not just what changed — that context is
  what future contributors (and changelog readers) actually need.

## Questions

Open an issue at
[github.com/pawnary/oxc/issues](https://github.com/pawnary/oxc/issues) if
anything here is unclear or out of date.
