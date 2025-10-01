import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      jest,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      react,
      'react-hooks': reactHooks,
      storybook,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'eol-last': ['error', 'always'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
      'no-console': 'error',
      'import/no-duplicates': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
      'jest/expect-expect': 'off',
      'jest/require-top-level-describe': 'error',
      'jest/no-disabled-tests': 'off',
      'jest/consistent-test-it': [
        'error',
        {
          fn: 'it',
        },
      ],
    },
  },
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}'],
    plugins: {
      storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
    },
  },
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'public/**',
      '.dist/**',
      'storybook-static/**',
      '*.config.js',
      '*.config.mjs',
      'coverage/**',
    ],
  },
];