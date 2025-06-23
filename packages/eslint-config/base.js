import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import onlyWarn from 'eslint-plugin-only-warn'
import turboPlugin from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      // 'prettier/prettier': 'warn',
      curly: ['error', 'multi-line'],
      'no-console': ['off'],
      'max-len': [
        'warn',
        {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreTrailingComments: true,
          ignoreStrings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': ['off'],
      'no-html-link-for-pages': ['off'],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['wagmi'],
              importNames: ['useAccount'],
              message: 'Use useUserAccount instead',
            },
            {
              group: ['wagmi'],
              importNames: ['useWaitForTransactionReceipt'],
              message:
                'Use useWaitForTransactionReceipt from @repo/web3 instead, includs safe tx hash support.',
            },
            {
              group: ['@reown/appkit/react'],
              importNames: ['useAppKitAccount', 'useAppKitNetwork'],
              message: 'Use useUserAccount instead',
            },
            {
              group: ['wagmi/dist'],
              message: 'Invalid import: remove dist from import path',
            },
            {
              group: ['act'],
              importNames: ['react-dom/test-utils'],
              message: "Invalid import: import from '@testing-library/react' instead",
            },
          ],
        },
      ],
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**', 'node_modules', '.next/**'],
  },
]
