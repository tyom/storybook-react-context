import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist', 'example/storybook-static'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        fixture: false,
        test: false,
      },
    },
  },
);
