module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  settings: {
    "import/resolver": "webpack",
  },
  rules: {
    quotes: ["error", "double"],
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "no-underscore-dangle": "off",
  },
};
