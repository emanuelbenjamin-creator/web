// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sitio estático: Vercel lo detecta solo (build `npm run build`, salida `dist`).
export default defineConfig({
  site: 'https://automatizastudio.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
