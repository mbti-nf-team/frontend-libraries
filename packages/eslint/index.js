module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'unused-imports',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
  rules: {
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'],
        ['^react'],
        ['^next'],
        ['^@?\\w'],
        ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
        ['^\\u0000'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ['^.+\\.svg$'],
        ['^.+\\.s?css$'],
      ],
    }],
    'react/jsx-no-useless-fragment': ['error', {
      allowExpressions: true,
    }],
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    }],
  },
};
