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
      'comma-spacing': ['error', {
 before: false, after: true,
}],
      'keyword-spacing': ['error', {
 before: true, after: true,
}],
      'object-curly-newline': ['error', {
      ObjectExpression: {
 multiline: true, minProperties: 1,
},
      ObjectPattern: {
 multiline: true, minProperties: 1,
},
      ImportDeclaration: {
 multiline: true, minProperties: 1,
},
      ExportDeclaration: {
 multiline: true, minProperties: 1,
},
    }],
    },
  },
];
