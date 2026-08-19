import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { expect, test } from 'vitest';

import defaultConfig from '../src/index.ts';

const oxlintPackageDir = path.dirname(
  fileURLToPath(import.meta.resolve('oxlint/package.json')),
);
const oxlintBin = path.join(oxlintPackageDir, 'bin/oxlint');
const packageRoot = path.join(import.meta.dirname, '..');
const fixtureConfig = path.join(
  import.meta.dirname,
  'fixtures/extendsWithPlugins.ts',
);

test('extending the default config keeps its plugins even when the consumer declares its own', () => {
  const output = execFileSync(
    process.execPath,
    [oxlintBin, '-c', fixtureConfig, '--print-config'],
    { cwd: packageRoot, encoding: 'utf8' },
  );

  // oxlint-disable-next-line typescript/no-unsafe-assignment
  const { plugins } = JSON.parse(output);

  expect(plugins).toBeDefined();

  for (const plugin of defaultConfig.plugins) {
    expect(plugins).toContain(plugin);
  }
  expect(plugins).toContain('react');
});
