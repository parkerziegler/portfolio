module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-magic-numbers': 'off'
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
