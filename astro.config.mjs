// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Sitio estático: Vercel lo detecta solo (build `npm run build`, salida `dist`).
export default defineConfig({
  site: 'https://automatizastudio.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (pagina) => !pagina.includes('/404') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
