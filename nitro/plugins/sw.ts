// https://nuxt.com/docs/api/contribution/nitro-plugins
export default defineNitroPlugin(({ app, event }) => {
  // Register service worker for PWA offline support
  if (import.meta.client && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.error('SW registration failed:', err)
      })
    })
  }
})