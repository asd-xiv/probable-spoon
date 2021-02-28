/* eslint-env node */

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    es6: true,
    node: false,
  },

  extends: [
    ...[
      "../rules/json",
      "../rules/best.practices",
      "../rules/comments",
      "../rules/errors",
      "../rules/es6",
      "../rules/html",
      "../rules/import",
      "../rules/import-ts",
      "../rules/jsdoc",
      "../rules/promise",
      "../rules/react",
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
    "react/prop-types": "off",

    // Ensure JSDoc comments are valid
    "valid-jsdoc": [
      "error",
      {
        requireReturn: false,
        requireReturnDescription: false,
        requireReturnType: true,
      },
    ],

    "@typescript-eslint/no-var-requires": "off",

    // Disable, it gives false positives. let eslint/no-unused-vars
    "@typescript-eslint/no-unused-vars": "off",

    // Restrict file extensions that may contain JSX
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".tsx", ".ts"] },
    ],

    // Let Typescript handle it
    "@typescript-eslint/no-use-before-define": "error",
    "no-use-before-define": "off",

    /*
     * A list of file extensions that will be parsed as modules and
     * inspected for exports.
     */
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        ts: "never",
        jsx: "never",
        tsx: "never",
      },
    ],

    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        varsIgnorePattern: "debug",
      },
    ],
  },

  settings: {
    react: {
      version: "detect",
    },

    /*
     * A list of regex strings that, if matched by a path, will not report
     * the matching module if no exports are found.
     */
    "import/ignore": [".(sass|scss|less|css)$"],

    /*
     * A list of file extensions that will be parsed as modules and
     * inspected for exports.
     */
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        ts: "never",
        jsx: "never",
        tsx: "never",
      },
    ],

    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        varsIgnorePattern: "debug",
      },
    ],
  },
}
