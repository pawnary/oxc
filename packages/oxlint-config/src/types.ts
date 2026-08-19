import type { OxlintConfig } from 'oxlint';

export interface PawnaryOxlintConfig extends OxlintConfig {
  options: NonNullable<OxlintConfig['options']>;
  plugins: NonNullable<OxlintConfig['plugins']>;
}
