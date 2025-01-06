import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import babelParser from '@babel/eslint-parser';
import studio from '@sanity/eslint-config-studio'

export default [...studio,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [require.resolve('@babel/preset-env')],
        },
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
            paths: ['src'],
        },
      },
    },
  }
]