module.exports = {
  extends: [
    'eslint-config-formidable',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react-hooks', 'jsx-a11y'],
  rules: {
    'filenames/match-regex': 'off',
    'filenames/no-index': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-magic-numbers': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true
  },
  globals: {
    __dirname: true
  }
};
