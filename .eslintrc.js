module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/attributes-order': [
      'warn',
      {
        order: ['GLOBAL', 'DEFINITION', 'UNIQUE', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'],
      },
    ],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/singleline-html-element-content-newline': [
      'warn',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
  },
}
