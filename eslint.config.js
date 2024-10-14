import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single'], // Enforces single quotes
      'no-trailing-spaces': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'quote-props': ['error', 'as-needed'],
      'no-extra-semi': 'error',
    },
  },
];
