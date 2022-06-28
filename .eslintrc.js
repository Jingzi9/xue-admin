module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }]
  },
  overrides: [// 重写某些文件的规则
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
}
