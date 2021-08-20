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
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
    'react/no-did-update-set-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/button-has-type': [
      1,
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  ignorePatterns: ['src/add-react-to-a-website/**'],
};
