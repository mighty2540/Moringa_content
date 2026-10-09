//standard eslint or default eslint
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);



// customized eslint 
// import globals from "globals";
// import pluginJs from "@eslint/js";

// export default [
//   {
//     languageOptions: { globals: globals.browser }
//   },
//   pluginJs.configs.recommended,
//   {
//     rules: {
//       'no-undef': 'error', // Ensure variables are defined
//       'semi': ['error', 'always'],
//       'curly': 'error',
//       // Add more rules as needed
//     }
//   }
// ];
