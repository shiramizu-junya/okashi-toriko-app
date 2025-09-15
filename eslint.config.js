// eslint.config.js
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import a11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import prettier from 'eslint-config-prettier'

export default [
  { ignores: ['dist', 'build', 'coverage', 'eslint.config.js'] },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { react, 'react-hooks': hooks, a11y },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/jsx-key': 'error',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  prettier,
]
