import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://basaltwebs.pages.dev',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  // three.js es carrega a demanda (només escriptori), per això el tros és gran
  vite: { build: { chunkSizeWarningLimit: 700 } },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ca', locales: { ca: 'ca-ES', es: 'es-ES' } },
    }),
  ],
});
