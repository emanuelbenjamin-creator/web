// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Sitio estático: Vercel lo detecta solo (build `npm run build`, salida `dist`).
export default defineConfig({
  site: 'https://automatizastudio.com',
  trailingSlash: 'always',
  // Español en la raíz y la versión en inglés en /en/.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (pagina) => !pagina.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-PE', en: 'en-US' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
