# Yonex — Demo Site

This is a small demo site (Vite + React + Tailwind) showcasing a simple landing page for Yonex-style performance gear.

Quick start

```bash
# install deps
npm install

# run dev server (port 8000)
npm run dev -- --port 8000

# build for production
npm run build

# preview the production build
npm run preview -- --port 8000
```

Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds the site and deploys the `dist` folder to the `gh-pages` branch on every push to `main`.

Notes
- The site is intentionally minimal and intended as a starter.
- If you want Vercel/Netlify instead, I can add a config for that.

License: MIT (you can change as needed)
# Yonex — Figma-based landing (Vite + React + Tailwind)

This repo contains a starter Vite + React + Tailwind project scaffolded to implement the landing page from your Figma slide.

Next steps

1. Install dependencies (I assumed npm; if you prefer pnpm or yarn tell me and I'll adjust):

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. The starter app includes a placeholder hero and a link to your Figma design. To match the slide precisely:

- Export images/SVGs from Figma and place them in `src/assets/`.
- Replace placeholder copy in `src/App.tsx`.
- If a custom font is used in Figma, add it in `index.html` (I included Inter as a default).

Assumptions made

- Using TypeScript + npm (feel free to request JavaScript or a different package manager).
- I haven't imported any Figma assets — please upload exported images (PNG/SVG) or tell me which elements to embed and I will add them.

What I'll do next when you confirm or upload assets

- Implement the precise layout and spacing from the slide.
- Add exported fonts and images.
- Polish responsive breakpoints and accessibility.
# yonex