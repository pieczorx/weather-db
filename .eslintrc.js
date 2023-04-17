module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      experimentalDecorators: true,
    },
  },
  rules: {
    'space-before-blocks': ['error','always'],
    'quotes': ['error', 'single', 'avoid-escape'],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing': ['error', {
      'afterColon': true,
    }],
    'semi': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'no-spaced-func': ['error'],
    'space-infix-ops': ['error', {
      'int32Hint': false,
    }],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {
      'allowAllPropertiesOnSameLine': false,
    }],
    'brace-style': ['error'],
    'indent': ['error', 2, {
      'SwitchCase': 2,
    }],
    'object-curly-newline': ['error', {
      'ObjectExpression': {
        'multiline': true,
        'consistent': true,
      },
      'ObjectPattern': {
        'multiline': true,
        'consistent': true,
      },
    }],
    'no-return-await': ['off'],
  },
  overrides: [{
    files: ['*.ts'],
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      'object-property-newline': ['error', {
        'allowAllPropertiesOnSameLine': false,
      }],
      'semi': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'no-spaced-func': ['error'],
      'space-infix-ops': ['error', {
        'int32Hint': false,
      }],
      'object-curly-spacing': ['error', 'never'],
      'brace-style': ['error'],
      'indent': ['error', 2],
      'object-curly-newline': ['error', {
        'ObjectExpression': {
          'multiline': true,
          'consistent': true,
        },
        'ObjectPattern': {
          'multiline': true,
          'consistent': true,
        },
      }],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/adjacent-overload-signatures': 'off',
    },
  }],
}
