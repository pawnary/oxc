<!-- prettier-ignore-start -->
> [!WARNING]
> This is a Work In Progress, and the API is not stable yet. Breaking changes
> may be introduced at any time.
<!-- prettier-ignore-end -->

# Pawnary 0xc

Shared [Oxfmt](https://oxc.rs) and [Oxlint](https://oxc.rs) configurations,
distributed as two independent npm packages:

| Package                                            | Purpose                                      |
| -------------------------------------------------- | -------------------------------------------- |
| [`@pawnary/oxfmt-config`](packages/oxfmt-config)   | Shared formatting rules for Oxfmt.           |
| [`@pawnary/oxlint-config`](packages/oxlint-config) | Shared linting rules and plugins for Oxlint. |

This repository is the monorepo that builds, tests, and publishes both packages.
If you're looking to _use_ one of them in your own project, head straight to its
README linked above. Keep reading if you want to work on this repository itself.

## Requirements

- [pnpm](https://pnpm.io) `^11.21.0` (declared in `devEngines`; Corepack will
  fetch the right version automatically if you don't have it).
- Node.js (a recent version — see `@types/node` in
  [`pnpm-workspace.yaml`](pnpm-workspace.yaml) for the version this repo is
  typed against).

## Getting started

```sh
git clone https://github.com/pawnary/oxc.git
cd oxc
pnpm install
```

## Scripts

Run from the repository root:

| Script                   | What it does                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `pnpm build`             | Builds every package with [tsdown](https://tsdown.dev) (ESM + CJS + `.d.ts`, exports map, `publint` checks). |
| `pnpm lint`              | Lints the whole workspace with Oxlint, using this repo's own `@pawnary/oxlint-config`.                       |
| `pnpm lint:fix`          | Same as above, applying auto-fixes.                                                                          |
| `pnpm fmt`               | Checks formatting with Oxfmt, using this repo's own `@pawnary/oxfmt-config`.                                 |
| `pnpm fmt:fix`           | Same as above, applying fixes.                                                                               |
| `pnpm test`              | Runs the test suite with [Vitest](https://vitest.dev).                                                       |
| `pnpm changeset`         | Records an intent to release (see [CONTRIBUTING.md](CONTRIBUTING.md)).                                       |
| `pnpm changeset:version` | Consumes pending changesets into version bumps and changelogs.                                               |
| `pnpm changeset:publish` | Builds and publishes packages to npm.                                                                        |
| `pnpm clean`             | Removes build output and `node_modules` across the workspace.                                                |

This repository lints and formats itself with the same packages it publishes —
`oxlint.config.ts` and `oxfmt.config.ts` at the root consume `packages/*/src`
directly, so any change to a shared config is immediately in effect here too.

## Project structure

```
.
├── oxfmt.config.ts        # Root Oxfmt config, built on @pawnary/oxfmt-config
├── oxlint.config.ts       # Root Oxlint config, extends @pawnary/oxlint-config
├── tsdown.config.ts       # Shared build config for every package
├── packages/
│   ├── oxfmt-config/      # @pawnary/oxfmt-config source
│   └── oxlint-config/     # @pawnary/oxlint-config source
└── pnpm-workspace.yaml    # Workspace + shared dependency version catalog
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full development workflow,
including how to propose changes to a shared config and how releases work.

Agents (Claude Code and similar) working in this repository should also read
[AGENTS.md](AGENTS.md).

## License

MIT © [Pawnary](https://github.com/pawnary)
