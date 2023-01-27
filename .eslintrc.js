/* eslint-env node */

require('@uniswap/eslint-config/load')

module.exports = {
  extends: '@uniswap/eslint-config/react',
}

module.rules = {
  'prettier/prettier': ['off', { singleQuote: true }],
  'prettier/prettier': ['error', {endOfLine: 'auto'}],
}
