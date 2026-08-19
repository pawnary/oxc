import type { PawnaryOxfmtConfig } from './types.ts';

const defaultConfig: PawnaryOxfmtConfig = {
  arrowParens: 'always',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'strict',
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/CHANGELOG*.md',
    '**/LICENSE*',
    '**/pnpm-lock.yaml',
  ],
  insertFinalNewline: true,
  jsdoc: {
    addDefaultToDescription: true,
    bracketSpacing: false,
    capitalizeDescriptions: true,
    commentLineStrategy: 'singleLine',
    descriptionWithDot: true,
    keepUnparsableExampleIndent: false,
    lineWrappingStyle: 'greedy',
    preferCodeFences: true,
    separateReturnsFromParam: true,
    separateTagGroups: true,
  },
  jsxSingleQuote: true,
  objectWrap: 'preserve',
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
} as const;

export default defaultConfig;
