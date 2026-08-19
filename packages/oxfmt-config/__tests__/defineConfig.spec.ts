import { expect, test } from 'vitest';

import defaultConfig from '../src/defaultConfig.ts';
import defineConfig from '../src/defineConfig.ts';

test('should merge the default configuration with the provided configuration', () => {
  expect(defaultConfig.arrowParens).toBe('always');
  expect(defaultConfig.ignorePatterns).not.toContain('foo');
  expect(defaultConfig.jsdoc.addDefaultToDescription).toBe(true);
  expect(defaultConfig.sortPackageJson.sortScripts).toBe(true);

  const config = defineConfig({
    arrowParens: 'avoid',
    ignorePatterns: ['foo'],
    jsdoc: {
      addDefaultToDescription: false,
    },
    sortPackageJson: {
      sortScripts: false,
    },
  });

  expect(config.arrowParens).toBe('avoid');
  expect(config.ignorePatterns).toContain('foo');
  expect(config.jsdoc.addDefaultToDescription).toBe(false);
  expect(config.sortPackageJson.sortScripts).toBe(false);
});
