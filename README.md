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