module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript',
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': 'off',
    'prettier/prettier': 'error'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
