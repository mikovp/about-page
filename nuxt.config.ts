// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n"
  ],

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ru', language: 'ru-RU' }
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    },
    localesPath: '/locales.json'
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? '/about-page/' : '/',
      siteUrl: 'https://mikovp.github.io/about-page/'
    }
  },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/about-page/' : '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      generate: ['sitemap.xml']
    },
    h3: {
      'defaultHeaders': {
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'index, follow'
      }
    }
  },

  middleware: ['nitro/middleware/locale.ts'],
  typescript: {
    strict: true,
    typeCheck: false
  },

  compatibilityDate: '2024-09-10'
})
