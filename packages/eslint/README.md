# @nft-team/eslint-config

<a href="https://github.com/mbti-nf-team/frontend-libraries/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">
  <img src="https://img.shields.io/github/issues/mbti-nf-team/frontend-libraries?style=flat-square" />
</a>

<a href="https://github.com/mbti-nf-team/frontend-libraries/blob/main/LICENSE">
  <img src="https://img.shields.io/github/license/mbti-nf-team/frontend-libraries?style=flat-square" />
</a>

## 🚀 Quick Overview

Install `@nft-team/eslint-config` dependency

```bash
npm install --save-dev @nft-team/eslint-config
```

Add `@nft-team/eslint-config` to `extends` in your `.eslintrc`

```js
module.exports = {
  // ...
  extends: ['@nft-team/eslint-config'],
  rules: {
    // ...
  },
};
```

## 🤔 What eslint extensions does `@nft-team/eslint-config` have?
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports)

[View more extensions..](https://github.com/mbti-nf-team/frontend-libraries/blob/main/packages/eslint/index.js)

### 👉 Sort default imports
This is the default value for the `groups` option:

```js
[
  // Side effect imports.
  ['^\\u0000'],
  // Node.js builtins. You could also generate this regex if you use a `.js` config.
  // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
  // OR Node.js builtins prefixed with `node:`.
  ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)', '^node:'],
  // Packages. `react` related packages
  ['^react'],
  // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.
  ['^@?\\w'],
  // Parent imports. Put `..` last.
  ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  // Other relative imports. Put same-folder imports and `.` last.
  ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
  // Svg file imports.
  ['^.+\\.svg$'],
  // Style imports.
  ['^.+\\.s?css$'],
]
```

## 🐛 Bug reporting
[Issues](https://github.com/mbti-nf-team/frontend-libraries/issues)

## 🔒 LICENSE
This Project is [MIT licensed](https://github.com/mbti-nf-team/frontend-libraries/blob/main/LICENSE).
