import { defineConfig } from 'oxlint';

import pawnary from '../../src/index.ts';

export default defineConfig({
  extends: [pawnary],
  plugins: ['react'],
});
