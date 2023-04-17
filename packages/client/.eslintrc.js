module.exports = {
  extends: '../../.eslintrc.js',
  overrides: [
    {
      files: ['*.vue', '*.ts'],
      globals: {
        ENV: true,
      },
    },
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/vue3-strongly-recommended',
        '@vue/typescript/recommended',
      ],
      rules: {
        'vue/v-on-event-hyphenation': ['error', 'never'],
        'vue/no-unused-vars': 'error',
        'vue/valid-v-for': 'error',
        'vue/require-v-for-key': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
          registeredComponentsOnly: false,
        }],
        'vue/this-in-template': 'error',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/html-closing-bracket-spacing': ['error', {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'never',
        }],
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/html-self-closing': ['error', {
          'html': {
            'void': 'always',
            'normal': 'always',
            'component': 'always',
          },
        }],
        'vue/html-indent': ['error', 2, {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
        }],
        'vue/max-attributes-per-line': ['error', {
          singleline: 3,
          multiline: 1,
        }],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
      },
    },
  ],
}
