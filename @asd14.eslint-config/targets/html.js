/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false,
  },

  extends: [
    "../rules/json",
    "../rules/best.practices",
    "../rules/comments",
    "../rules/errors",
    "../rules/es6",
    "../rules/html",
    "../rules/import",
    "../rules/jsdoc",
    "../rules/promise",
    "../rules/style",
    "../rules/unicorn",
    "../rules/variables",
    "../rules/prettier",
  ].map(require.resolve),

  parserOptions: {
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
    },
    ecmaVersion: 7,
    sourceType: "module",
  },

  plugins: ["no-inferred-method-name"],

  settings: {
    /*
     * A list of regex strings that, if matched by a path, will not report
     * the matching module if no exports are found.
     */
    "import/ignore": [".(sass|scss|less|css)$"],

    /*
     * Can add a path segment here that will act like a source root, for
     * in-project aliasing (i.e. `import MyStore from 'stores/my-store'`)
     */
    "import/resolver": {
      node: {
        extensions: [".js"],

        /*
         * Can add a path segment here that will act like a source root, for
         * in-project aliasing (i.e. `import MyStore from 'stores/my-store'`)
         */
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
}
