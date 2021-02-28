<!-- markdownlint-disable first-line-h1 line-length -->

[![CircleCI](https://circleci.com/gh/asd-xiv/eslint-config.svg?style=svg)](https://circleci.com/gh/asd-xiv/eslint-config)
[![npm version](https://badge.fury.io/js/%40asd14%2Feslint-config.svg)](https://badge.fury.io/js/%40asd14%2Feslint-config)
[![peer-badge](https://david-dm.org/asd14-xyz/eslint-config/peer-status.svg)](https://david-dm.org/asd14-xyz/eslint-config?type=peer)

# JavaScript ESLint rules

JavaScript ESLint bundle with best practices and common use rules for writing more consistent code.

Other similar bundles: [XO](https://www.npmjs.com/package/xo), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-config-google](https://github.com/google/eslint-config-google), [more](https://www.npmjs.com/search?q=+eslint-config-)

---

<!-- vim-markdown-toc GFM -->

* [Install](#install)
* [Targets](#targets)
  * [Node.js](#nodejs)
  * [Node.js with Typescript](#nodejs-with-typescript)
  * [HTML](#html)
  * [React](#react)
* [Inside](#inside)
* [Example config](#example-config)
* [Changelog](#changelog)

<!-- vim-markdown-toc -->

## Install

```bash
npm install @asd14/eslint-config --save-dev
```

## Targets

Run `npm info "@asd14/eslint-config@latest" peerDependencies` to get the base packages needed.

It should be something like:

```javascript
"eslint": "^7.20.0",
"eslint-config-prettier": "^8.0.0",
"eslint-plugin-import": "^2.22.1",
"eslint-plugin-jsdoc": "^32.2.0",
"eslint-plugin-json": "^2.1.2",
"eslint-plugin-no-inferred-method-name": "^2.0.0",
"eslint-plugin-prettier": "^3.3.1",
"eslint-plugin-promise": "^4.3.1",
"eslint-plugin-unicorn": "^28.0.2",
"prettier": "^2.2.1"
```

Add these packages to your `devDependencies` in `package.json`.

### Node.js

Link ESLint to `node` target.

```javascript
// .eslintrc
{
  "extends": [
    "@asd14/eslint-config/targets/node",
  ]
}
```

### Node.js with Typescript

Install additional packages:

```bash
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

Link ESLint to `node-ts` target.

```javascript
// .eslintrc
{
  "extends": [
    "@asd14/eslint-config/targets/node-ts",
  ]
}
```

### HTML

Link ESLint to `html` target.

```javascript
// .eslintrc
{
  "extends": [
    "@asd14/eslint-config/targets/html",
  ]
}
```

### React

Install additional packages:

```bash
npm install -D eslint-plugin-html eslint-plugin-react eslint-plugin-react-hooks
```

Link ESLint to `react` target.

```javascript
// .eslintrc
{
  "extends": [
    "@asd14/eslint-config/targets/react",
  ]
}
```

## Inside

* [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc) -  JSDoc specific linting rules
* [eslint-plugin-import](https://www.npmjs.org/package/eslint-plugin-import) - Support for ES2015+ (ES6+) import/export syntax
* [eslint-plugin-promise](https://www.npmjs.org/package/eslint-plugin-promise) - Enforce best practices for JavaScript promises
* [eslint-plugin-unicorn](https://www.npmjs.org/package/eslint-plugin-unicorn) - Various awesome ESLint rules
* [eslint-plugin-html](https://www.npmjs.org/package/eslint-plugin-html) - Allows linting and fixing inline scripts contained in HTML files
* [eslint-plugin-react](https://www.npmjs.org/package/eslint-plugin-react) - React specific linting rules
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Linting rules rules of React Hooks.
* [eslint-plugin-no-inferred-method-name](https://www.npmjs.org/package/eslint-plugin-no-inferred-method-name) - In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead. This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.
* [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) - ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
* [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) - ESLint plugin which provides lint rules for TypeScript codebases.

## Example config

Using [`babel-eslint`](https://github.com/babel/babel-eslint) and [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack)

`.eslintrc`

```js
{
    "root"  : true,
    "parser": "babel-eslint",

    "extends": [ "@asd14/eslint-config/targets/react" ],

    "settings": {
        // Use webpack to resolve modules in imports
        "import/resolver": {
            "webpack": {
                "config": "./webpack.config.js",
            },
        },

        // Recommended if you use eslint_d
        "import/cache": {
            "lifetime": 5,
        },

        // List of regex strings that, if matched by a path, will not report
        // the matching module if no exports are found.
        "import/ignore": [ "\\.(sass|scss|less|css)$" ],
    },

    // Custom rules
    "rules": {
    },
}
```

`.prettierrc`

```js
{
  "semi": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid"
}
```

Optional `.editorconfig`

```bash
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## Changelog

See the [releases section](https://github.com/asd14-xyz/eslint-config/releases) for details.
