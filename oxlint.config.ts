import { defineConfig } from 'oxlint';

import pawnary from './packages/oxlint-config/src/index.ts';

export default defineConfig({
  env: {
    node: true,
  },
  extends: [pawnary],
  globals: {
    process: 'readonly',
  },
});
