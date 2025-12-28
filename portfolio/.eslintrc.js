module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jsx-a11y",
    "prettier",
  ],
  rules: {
    // React rules
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",

    // TypeScript rules
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",

    // General rules
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
    "prefer-const": "warn",
    "no-var": "error",

    // Prettier integration
    "prettier/prettier": "warn",

    // JSX Accessibility
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
  },
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx", "*.spec.ts", "*.spec.tsx"],
      env: {
        jest: true,
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};




