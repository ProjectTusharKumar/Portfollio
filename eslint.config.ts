import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname, // Ensure Node.js v20.11.0+ for import.meta.dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ["next"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "prefer-const": "off", // Disable 'prefer-const' rule
      "@typescript-eslint/no-explicit-any": "off", // Disable 'no-explicit-any' rule
    },
  }),
];

export default eslintConfig;
