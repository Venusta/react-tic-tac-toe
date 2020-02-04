module.exports = {
  parser: "@typescript-eslint/parser",  // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",  // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: "module",  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,  // Allows for the parsing of JSX
    },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  rules: {
    "quotes": [
      "error",
      "double",
    ],
    "linebreak-style": [
      "error",
      "windows",
    ],
    "react/state-in-constructor": ["error", "never"],
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/explicit-function-return-type": "off",

    "import/extensions": ["error", "ignorePackages", {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    }],
  },
  settings: {
    react: {
      version: "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};