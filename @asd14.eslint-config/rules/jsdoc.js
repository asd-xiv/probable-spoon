/* eslint-env node */

module.exports = {
  plugins: ["jsdoc"],

  extends: ["plugin:eslint-plugin-jsdoc/recommended"],

  rules: {
    /*
     * JSDoc is a JavaScript API documentation generator. It uses
     * specially-formatted comments inside of code to generate API
     * documentation automatically.
     */
    "require-jsdoc": [
      "error",
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          FunctionDeclaration: true,
          MethodDefinition: false,
        },
      },
    ],

    // Leave it up to jsdoc plugin
    "valid-jsdoc": [
      "error",
      {
        requireParamType: true,
        requireParamDescription: false,
        requireReturnType: true,
        requireReturnDescription: false,

        prefer: {
          arg: "param",
          argument: "param",
          class: "constructor",
          return: "returns",
          virtual: "abstract",
        },

        preferType: {
          Boolean: "boolean",
          Number: "number",
          object: "Object",
          String: "string",
        },
      },
    ],

    "jsdoc/check-tag-names": [
      "warn",
      {
        definedTags: [
          "api",
          "apiDefine",
          "apiDeprecated",
          "apiDescription",
          "apiError",
          "apiErrorExample",
          "apiExample",
          "apiGroup",
          "apiHeader",
          "apiHeaderExample",
          "apiIgnore",
          "apiName",
          "apiParam",
          "apiParamExample",
          "apiPermission",
          "apiPrivate",
          "apiSampleRequest",
          "apiSuccess",
          "apiSuccessExample",
          "apiUse",
          "apiVersion",
        ],
      },
    ],

    // Noise
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",
    "jsdoc/require-property-description": "off",
    "jsdoc/check-types": "off",

    "jsdoc/check-indentation": [
      "error",
      { excludeTags: ["example", "type", "typedef"] },
    ],

    "jsdoc/check-line-alignment": ["error", "always"],
  },
}
