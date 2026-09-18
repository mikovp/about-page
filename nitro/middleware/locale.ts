// https://nuxt.com/docs/api/contribution/nitro-middleware
import { defineNitroMiddleware } from 'nitro'
import { useCookie } from '#imports'

export default defineNitroMiddleware(async ({ event, redirect }) => {
  // This middleware runs on the server side; locale detection via cookie
  const cookieLocale = useCookie('i18n_redirected', {
    default: '',
    maxAge: 365 * 24 * 60 * 60
  }).value

  const { locales } = event.nitro.app.i18n || { locales: [{ code: 'en' }] }
  const preferredLocale = locales.find((l) =>
    l.language.toLowerCase().startsWith(event.request.headers.get('accept-language')?.toLowerCase() || 'en')
  )?.code

  // Redirect if user is on the root locale and server detected a preferred language
  if (event.request.path === '/' && preferredLocale && !cookieLocale) {
    const targetLocale = preferredLocale === 'en-US' ? 'en' : 'ru'
    redirect(`//${targetLocale}/`, { preserveHop: true })
  }
})