import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser, // Isso reconhece variáveis do navegador (document, window, etc.)
        ...globals.node     // E variáveis do Node.js
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "off",      // Desliga erro de variáveis não usadas
      "no-undef": "off"            // Desliga erro de variáveis não definidas
    }
  }
];