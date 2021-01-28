module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended'
  ],
  plugins: ['react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-magic-numbers': 'off',
    'import/newline-after-import': 2,
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    __dirname: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint'
};
