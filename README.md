# Marketing site

A one-page marketing site built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), available in English, French and Dutch.

## Structure

- `src/pages/en`, `src/pages/fr`, `src/pages/nl` — one page per locale (`/en/`, `/fr/`, `/nl/`)
- `src/pages/index.astro` — redirects `/` to `/en/`
- `src/i18n/*.json` — translation strings per language
- `src/i18n/ui.ts` — small translation helper (`useTranslations`, `getLocalizedPath`)
- `src/components/` — Hero, About, Features, Contact, Header (with language switcher), Footer
- `public/images/` — placeholder SVGs, swap these for real photography/illustrations

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321 — it redirects to `/en/`. Try `/fr/` and `/nl/` directly.

## Editing content

- Text: edit `src/i18n/en.json`, `fr.json`, `nl.json` — keys match across all three files.
- Images: replace files in `public/images/` (keep the same filenames, or update the `src` in the components).
- Company name / email: search for "Joyous Studio" and "hello@joyouscoding.com" in `src/components/`.

## Build

```bash
npm run build
```

Static output goes to `dist/`. `npm run preview` serves that build locally.

## Deploy

This is a fully static site — no server required. Easiest options:

### Cloudflare Pages
1. Push this project to a GitHub repo.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → connect the repo.
3. Build command: `npm run build`, output directory: `dist`.
4. Every push to `main` auto-deploys. Add a custom domain under the project's "Custom domains" tab.

### Netlify
1. Push to GitHub.
2. New site from Git → select the repo.
3. Build command: `npm run build`, publish directory: `dist`.
4. Auto-deploys on push; custom domain under Site settings → Domain management.

Both are free for a site like this and give you HTTPS + a CDN out of the box.
