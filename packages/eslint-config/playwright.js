import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import { config as baseConfig } from './base.js'

/**
 * A custom ESLint configuration for playwright end-to-end testing packages.
 *
 * @type {import("eslint").Linter.Config} */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ignores: ['test-results/**', 'playwright-report/**'],
  },
]
