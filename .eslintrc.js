module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'max-classes-per-file': 'warn',
    'max-len': 'warn',
    'no-undef': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'react/jsx-filename-extension': [1,
      {
        extensions: [
          '.tsx',
          '.jsx',
          '.js',
        ],
      },
    ],
    'react/no-did-update-set-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
  },
};
