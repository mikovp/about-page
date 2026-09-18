// https://nuxt.com/docs/api/contribution/nitro-plugins
export default defineNitroPlugin(({ event }) => {
  // Inject robots.txt into the response for SSR
  event.context.public.robots = {
    'User-Agent': '*',
    'Allow': '/',
    'Sitemap': '/sitemap.xml',
    'Follow': 'yes',
    'Bot-Timeout': '30',
    'Index': 'follow',
    'Block': [
      {
        'Agent': '-mediapartners-google',
        'Disallow': '/about-page/sitemap.xml'
      }
    ]
  }
})