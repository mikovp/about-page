// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-particles"
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    detectBrowserLanguage: false
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/about-page/' : '/'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})