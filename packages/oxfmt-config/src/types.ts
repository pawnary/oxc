import type { JsdocConfig, OxfmtConfig, SortPackageJsonConfig } from 'oxfmt';

export interface PawnaryOxfmtConfig extends OxfmtConfig {
  jsdoc: JsdocConfig;
  sortPackageJson: SortPackageJsonConfig;
  ignorePatterns: string[];
}
