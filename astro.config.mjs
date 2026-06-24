// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to the production domain before deploying.
// It drives canonical URLs, sitemap entries and absolute OG image URLs.
const SITE = 'https://pilarmartinez.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Static output (default) — deploys cleanly to Vercel or Cloudflare Pages.
  // Tailwind v4 is wired through PostCSS (see postcss.config.mjs).
  integrations: [vue(), sitemap()],
});
