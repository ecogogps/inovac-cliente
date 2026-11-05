# Inovac Construcciones Website

Website for Inovac Construcciones, built by Bercostudio.

## Stack

- Next.js 15 (App Router), React 19 and TypeScript
- Tailwind CSS 4
- Page content and blog posts managed with Decap CMS (admin at `/admin`)
- Contact form delivered through Netlify Forms
- Deployed on Netlify (`netlify.toml`)

## Getting started

```bash
yarn install
cp .env.example .env.local   # then fill in the values
yarn dev
```

The site runs at http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Local dev server |
| `yarn build` | Production build |
| `yarn check` | Type-check, lint and format |

## Structure

- `src/app` – pages and routes
- `src/ui` – UI components
- `src/lib` – helpers
- `src/css` – global styles
- `public/content` – editable page content and blog posts (JSON)
- `public/admin` – Decap CMS configuration
- `public` – images and static assets

## Notes

- The Google Tag Manager and Google Analytics IDs in `src/app/layout.tsx` belong
  to Inovac's Google account.
- The contact form only works when deployed on Netlify (see `public/__forms.html`).
- `src/lib/wordpress.ts`, `src/lib/wordpress.d.ts`, `src/app/__posts` and
  `src/ui/components/posts/post-card.tsx` come from the starter template. They
  are a WordPress client that is commented out and not used by the site.

## Environment variables

See `.env.example`. Real values are not included in this handover and must be
supplied through your hosting provider's settings.
