/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"],
  },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "warn",
    semi: 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["CustomInput"],
      },
    ],
  },
};
