# Pilar Martinez Montiel — personal site

## Tech stack

- **[Astro 6](https://astro.build/)** + **TypeScript** (strict), static output
- **Tailwind CSS v4** (via PostCSS)
- **Vue** — one small island, the light/dark theme toggle (everything else is static)
- **Content Collections** for the work history and articles
- **@astrojs/sitemap** + Open Graph meta + JSON-LD `Person` schema for SEO
- Self-hosted **Geist** variable font (Latin subset, no third-party requests)

## Local development

Requires Node 18+ (built on Node 22).

```bash
npm install
npm run dev      # dev server with hot reload → http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the production build locally
```

## Before deploying

1. **Set the domain.** Replace the placeholder `https://pilarmartinez.dev` in
   `astro.config.mjs` (the `SITE` constant) and `public/robots.txt`. This drives
   canonical URLs, the sitemap, and absolute OG image URLs.
2. **Analytics (optional).** Uncomment the Plausible / Cloudflare Web Analytics
   block in `src/layouts/Base.astro` and add your own key/domain.

## Deploy to Vercel

The repo includes `vercel.json` (framework, build command, output dir, security
headers, and long-cache headers for hashed assets), so deployment is essentially
zero-config:

1. Push to GitHub (already done on this branch).
2. In Vercel: **Add New… → Project → Import** this repository.
3. Vercel auto-detects Astro. Keep the defaults (build `astro build`, output
   `dist`) and click **Deploy**.
4. Add your custom domain under **Settings → Domains** and point its DNS at
   Vercel.

Every push then triggers a production build, and pull requests get preview
deploys automatically.

> Also deployable to **Cloudflare Pages**: build command `npm run build`,
> output directory `dist`.
