// https://nuxt.com/docs/api/contribution/nitro-plugins
import { defineNitroPlugin } from 'nitro'
import { useRuntimeConfig } from '#imports'

export default defineNitroPlugin(() => {
  const { public: publicConfig } = useRuntimeConfig()

  // Generate sitemap.xml on the fly for SSR
  app.middleware.sitemap({
    route: '**/sitemap.xml',
    handler: async (event) => {
      const baseUrl = publicConfig.siteUrl || '/'
      const links = [
        { loc: baseUrl, lastmod: new Date().toISOString() },
        { loc: `${baseUrl}/`, lastmod: new Date().toISOString() }
      ]

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${links
        .map(
          (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>`
        )
        .join('\n')}
</urlset>`

      event.res.setHeader('Content-Type', 'application/xml')
      event.res.send(sitemap)
    }
  })
})