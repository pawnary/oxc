<!-- prettier-ignore-start -->
> [!WARNING]
> This is a Work In Progress, and the API is not stable yet. Breaking changes
> may be introduced at any time.
<!-- prettier-ignore-end -->

# `@pawnary/oxlint-config`

Shared [Oxlint](https://oxc.rs) configuration used across Pawnary projects.

## Installation

```sh
pnpm add -D oxlint oxlint-tsgolint @pawnary/oxlint-config
```

`oxlint-tsgolint` is required because this package enables type-aware linting
(`options.typeAware` and `options.typeCheck`) by default — Oxlint needs it
installed to run those checks.

## Usage

Create an `oxlint.config.ts` at the root of your project:

```ts
import { defineConfig } from 'oxlint';
import pawnary from '@pawnary/oxlint-config';

export default defineConfig({
  extends: [pawnary],
});
```

`extends` is native to Oxlint's own config format — configs listed there are
merged in order, with later entries overriding earlier ones. Add your own
`rules`, `overrides`, or `plugins` alongside `extends` to layer project-specific
tweaks on top of Pawnary's defaults.

Plugins you declare alongside `extends` are added to the inherited set, not used
to replace it — so enabling an extra plugin is as simple as
`plugins: ['react']`, no need to relist Pawnary's defaults.

## Defaults

- Almost everything runs at error severity; the handful of stylistic nitpicks
  left at warning severity still fail the run — warnings are denied and the max
  warning count is `0`, so nothing slips through silently.
- Type-aware checks are on out of the box, powered by `oxlint-tsgolint`, which
  is why it's a required install alongside this package.
- Plugins enabled: Unicorn's best-practice rules, TypeScript-specific checks,
  OXC's own native rules, import hygiene, and Vitest conventions.
- Both default and named exports are allowed freely.
- Comments don't need to start with a capital letter.
- Filenames are enforced as `camelCase`.
- Readonly parameter types aren't required.
- Consecutive variable declarations don't need to be combined into one
  statement.
- Importing Node.js builtin modules (`node:fs`, `node:path`, etc.) is allowed.

Curious about the exact rules? [`src/index.ts`](src/index.ts) is the real,
always-up-to-date source.

## API

| Export                       | Description                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| `default`                    | Pawnary's raw default configuration object — pass it into `extends`.                   |
| `PawnaryOxlintConfig` (type) | The config type this package works with. Exported from `@pawnary/oxlint-config/types`. |

## License

MIT
