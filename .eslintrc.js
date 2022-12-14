module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: ["warn", 2],
    semi: ["error", "always"],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "single"],
  },
};
