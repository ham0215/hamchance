module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'prettier', 'next/core-web-vitals', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'simple-import-sort',
    'unused-imports',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      ignoreRestSiblings: true
    }],
    'jest/expect-expect': 'off',
    'jest/require-top-level-describe': 'error',
    'jest/no-disabled-tests': 'off',
    'no-console': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'jest/consistent-test-it': [
      'error',
      {
        'fn': 'it'
      }
    ]
  }
};
