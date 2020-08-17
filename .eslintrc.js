module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'comma-dangle': ['warn', 'always-multiline'],
  },
}
