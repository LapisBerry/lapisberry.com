import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "indent": ["error", 2], // Enforce 2-space indentation
      "quotes": ["error", "double"], // Enforce double quotes for strings
      "semi": ["error", "always"], // Enforce semicolons
      "comma-dangle": ["error", "always-multiline"], // Trailing commas where valid
      "arrow-parens": ["error", "always"], // Always require parens in arrow functions
      "eqeqeq": ["error", "always"], // Require strict equality
      "no-unused-vars": ["warn"], // Warn on unused variables
      "no-console": ["warn"], // Warn on console usage
    },
  },
];

export default eslintConfig;
