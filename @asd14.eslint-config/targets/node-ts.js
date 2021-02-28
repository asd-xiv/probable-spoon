/* eslint-env node */

module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    // Modern ECMAScript features
    ecmaVersion: 2020,

    // Use of imports
    sourceType: "module",
  },

  env: {
    browser: false,
    es6: true,
    node: true,
  },

  extends: [
    ...[
      "../rules/json",
      "../rules/best.practices",
      "../rules/comments",
      "../rules/errors",
      "../rules/es6",
      "../rules/import",
      "../rules/import-ts",
      "../rules/jsdoc",
      "../rules/node",
      "../rules/promise",
      "../rules/style",
      "../rules/unicorn",
      "../rules/variables",
      "../rules/prettier",
    ].map(require.resolve),

    "plugin:@typescript-eslint/recommended",
  ],

  plugins: ["no-inferred-method-name"],

  ignorePatterns: ["dist/*.js", "*.d.ts"],

  rules: {
    "@typescript-eslint/no-var-requires": "off",

    // disable, it gives false positives. let eslint/no-unused-vars
    "@typescript-eslint/no-unused-vars": "off",

    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        varsIgnorePattern: "debug",
      },
    ],
  },
}
