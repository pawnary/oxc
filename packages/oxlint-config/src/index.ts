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
  overrides: [
    {
      files: ['**/*.spec.ts'],
      plugins: ['vitest'],
      rules: {
        'typescript/no-unnecessary-condition': 'off',
        'typescript/no-unsafe-assignment': 'off',
        'vitest/consistent-test-filename': [
          'error',
          { pattern: '.*\\.spec\\.ts' },
        ],
        'vitest/max-expects': 'off',
        'vitest/no-commented-out-tests': 'warn',
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-focused-tests': 'warn',
        'vitest/no-hooks': 'off',
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-called-times': 'off',
        'vitest/prefer-expect-assertions': 'off',
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/require-test-timeout': 'off',
        'vitest/require-top-level-describe': 'off',
      },
    },
  ],
  plugins: ['unicorn', 'typescript', 'oxc', 'import'],
  rules: {
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'eslint/func-style': [
      'error',
      'declaration',
      { allowArrowFunctions: true },
    ],
    'eslint/init-declarations': 'off',
    'eslint/max-params': ['error', { max: 4 }],
    'eslint/no-console': 'warn',
    'eslint/no-continue': 'off',
    'eslint/no-inline-comments': 'off',
    'eslint/no-magic-numbers': 'off',
    'eslint/no-plusplus': 'off',
    'eslint/no-undefined': 'off',
    'eslint/no-warning-comments': 'warn',
    'eslint/one-var': 'off',
    'eslint/prefer-destructuring': 'off',
    'import/consistent-type-specifier-style': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { checkTypeImports: true },
    ],
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-unassigned-import': 'off',
    'oxc/no-async-await': 'off',
    'oxc/no-optional-chaining': 'off',
    'oxc/no-rest-spread-properties': 'off',
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'typescript/explicit-member-accessibility': 'off',
    'typescript/method-signature-style': ['error', 'method'],
    'typescript/no-unnecessary-type-parameters': 'off',
    'typescript/prefer-nullish-coalescing': [
      'error',
      {
        ignoreIfStatements: true,
      },
    ],
    'typescript/prefer-readonly-parameter-types': 'off',
    'typescript/restrict-template-expressions': [
      'error',
      {
        allow: ['unknown'],
        allowNever: true,
      },
    ],
    'typescript/strict-boolean-expressions': [
      'error',
      {
        allowNullableBoolean: true,
      },
    ],
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'unicorn/no-new-array': 'off',
    'unicorn/no-null': 'off',
    'unicorn/number-literal-case': 'off', // https://github.com/oxc-project/oxc/issues/21949
    'unicorn/prefer-global-this': 'error',
    'unicorn/prefer-ternary': 'off',
  },
} as const;

export default defaultConfig;
