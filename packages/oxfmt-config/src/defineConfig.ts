import { defineConfig as oxfmtDefineConfig } from 'oxfmt';

import defaultConfig from './defaultConfig.ts';
import type { PawnaryOxfmtConfig } from './types.ts';

/**
 * Define an Oxfmt configuration with type inference.
 *
 * Passed configuration will be merged with the default configuration.
 *
 * @param config - Custom configuration to override/merge with the default
 *   configuration.
 *
 * @returns The merged configuration.
 */
export default function defineConfig(
  config: Partial<PawnaryOxfmtConfig>,
): PawnaryOxfmtConfig {
  const {
    jsdoc = {},
    ignorePatterns = [],
    sortPackageJson = {},
    ...userConfig
  } = config;

  return oxfmtDefineConfig<PawnaryOxfmtConfig>({
    ...defaultConfig,
    ignorePatterns: [...defaultConfig.ignorePatterns, ...ignorePatterns],
    jsdoc: {
      ...defaultConfig.jsdoc,
      ...jsdoc,
    },
    sortPackageJson: {
      ...defaultConfig.sortPackageJson,
      ...sortPackageJson,
    },
    ...userConfig,
  });
}
