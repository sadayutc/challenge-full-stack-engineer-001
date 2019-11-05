module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // es
    semi: 'warn',
    'max-len': 'off',
    'consistent-return': 'off',
    'global-require': 'warn',
    'no-empty': 'warn',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'warn',
    'no-underscore-dangle': 'off',
    'padded-blocks': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'object-curly-newline': 'off',
    'quote-props': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'no-lonely-if': 'off',
    'no-restricted-globals': 'warn',
    'no-shadow': 'warn',
  },
};
