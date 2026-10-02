import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://basaltwebs.pages.dev',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ca', locales: { ca: 'ca-ES', es: 'es-ES' } },
    }),
  ],
});
