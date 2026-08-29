# Vertex Systems — Truck Dispatching Website (React JS)

Frontend-only React website for Vertex Systems, a truck dispatching company.
No backend, database, or real APIs — everything is static/dummy data.

## Quick Start

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready static files will be in the `dist/` folder — upload that
folder to any static host (Vercel, Netlify, GitHub Pages, etc).

## Structure

- `src/components` — reusable UI pieces (Header, Footer, Button, cards, etc.)
- `src/pages` — Home, About, Services, Contact
- `src/data/siteData.js` — all repeated content (services, testimonials, stats,
  equipment, nav links) in one place — edit this file to change copy quickly.

## Notes

- Hero/CTA/mission background photos are pulled from Unsplash URLs in the CSS
  files (`Home.css`, `About.css`, `CTASection.css`) — swap those `url(...)`
  values for your own images any time.
- The contact form validates client-side only and never sends data anywhere.
