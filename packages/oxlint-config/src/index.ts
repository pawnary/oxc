import type { PawnaryOxlintConfig } from './types.ts';

const defaultConfig: PawnaryOxlintConfig = {
  categories: {
    correctness: 'error',
    nursery: 'error',
    pedantic: 'error',
    perf: 'error',
    restriction: 'error',
    style: 'warn',
    suspicious: 'error',
  },
  options: {
    denyWarnings: true,
    maxWarnings: 0,
    typeAware: true,
    typeCheck: true,
  },
  plugins: ['unicorn', 'typescript', 'oxc', 'import', 'vitest'],
  rules: {
    'capitalized-comments': 'off',
    'eslint/one-var': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'oxc/no-rest-spread-properties': 'off',
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'typescript/prefer-readonly-parameter-types': 'off',
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'vitest/consistent-test-filename': ['error', { pattern: '.*\\.spec\\.ts' }],
    'vitest/max-expects': 'off',
    'vitest/no-importing-vitest-globals': 'off',
    'vitest/prefer-expect-assertions': 'off',
    'vitest/prefer-to-be-falsy': 'off',
    'vitest/prefer-to-be-truthy': 'off',
    'vitest/require-test-timeout': 'off',
    'vitest/require-top-level-describe': 'off',
  },
} as const;

export default defaultConfig;
