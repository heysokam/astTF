// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService  : {
          allowDefaultProject: ['src/*.{js,jsx,ts,tsx}', 'src/tools/*.{js,jsx,ts,tsx}']
        },
        tsconfigRootDir : import.meta.dirname,
      }
    },
    rules: {
      // Stylistic Disables
      "@typescript-eslint/consistent-type-definitions": "off"
    },
  },

  {
    ignores: ["public/**",  "eslint.config.mjs"],
  }
);

