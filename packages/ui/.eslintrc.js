module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: [
    'node_modules/',
    'public/',
  ],
  extends: ['custom'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
