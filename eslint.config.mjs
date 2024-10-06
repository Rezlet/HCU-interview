import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { rules } from "@eslint/js/src/configs/eslint-all";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  settings: {
    react: {
      version: 'detect',
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    }
  }},

  {
    ignores: ["src/api/*", "src/mocks/*", "*.config.js",]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];