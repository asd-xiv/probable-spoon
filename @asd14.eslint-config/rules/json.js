/* eslint-env node */

module.exports = {
  plugins: ["json"],

  extends: ["plugin:json/recommended"],

  rules: {
    "json/colon-expected": "error",
  },
}
