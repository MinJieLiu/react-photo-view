module.exports = {
  extends: [require.resolve('@micro-web/standard/eslint.cjs')],
  rules: {
    'no-return-assign': 0,
    'no-restricted-globals': 0,
    'max-lines-per-function': ['error', { 'max': 400 }]
  },
};
