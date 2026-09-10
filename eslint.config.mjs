import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: false
  },
  dirs: {
    src: [
      './components',
      './composables',
      './constants',
      './layouts',
      './pages',
      './plugins',
      './types',
      './utils'
    ]
  }
}).append({
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  }
})
