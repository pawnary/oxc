# `@pawnary/oxfmt-config`

Shared [Oxfmt](https://oxc.rs) configuration used across Pawnary projects.

## Installation

```sh
pnpm add -D oxfmt @pawnary/oxfmt-config
```

`oxfmt` is a dependency of this package, but pnpm doesn't expose transitive
dependencies' binaries in your project's `node_modules/.bin`. Install it
directly alongside `@pawnary/oxfmt-config` so the `oxfmt` CLI (and any editor
integration that shells out to it) is available.

## Usage

Create an `oxfmt.config.ts` at the root of your project:

```ts
import { defineConfig } from '@pawnary/oxfmt-config';

export default defineConfig({
  // Your overrides, merged on top of Pawnary's defaults.
});
```

Or use the defaults as-is, with no overrides:

```ts
export { default } from '@pawnary/oxfmt-config/defaultConfig';
```

### A note on `defineConfig`

Oxlint lets you compose configs with an `extends` array, but Oxfmt has no
equivalent built into its own config format. So instead of `extends`,
`defineConfig()` takes whatever you pass it and merges it on top of Pawnary's
defaults for you — your overrides win, and defaults you didn't touch are kept
as-is.

## Defaults

- Single quotes, semicolons, and trailing commas everywhere.
- Two-space indentation, Unix line endings, lines wrapped at 80 columns.
- Imports and `package.json` scripts are sorted automatically.
- JSDoc comments are cleaned up — capitalized, ended with a period, and
  collapsed onto one line when they're short enough to fit.
- Generated and vendored files are left alone (`node_modules`, build output,
  changelogs, license files, the lockfile).

Curious about the exact values? [`src/defaultConfig.ts`](src/defaultConfig.ts)
is the real, always-up-to-date source.

## API

| Export                      | Description                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| `defineConfig(config)`      | Merges `config` on top of Pawnary's defaults. Default export of `@pawnary/oxfmt-config/defineConfig`. |
| `defaultConfig`             | Pawnary's raw default configuration object. Default export of `@pawnary/oxfmt-config/defaultConfig`.  |
| `PawnaryOxfmtConfig` (type) | The config type this package works with. Exported from `@pawnary/oxfmt-config/types`.                 |

## License

MIT
