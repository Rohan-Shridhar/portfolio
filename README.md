# Rohan S. Mirjankar — Portfolio

Single‑page personal portfolio built with React (UMD) and Babel directly in the browser. Showcases projects, skills, and contact links with a playful, scrollable layout.

**Live site:** https://rohan-shridhar.github.io/portfolio/

## Features

- Responsive single-page layout with anchored navigation
- About, Skills, Projects (cards), and Contact sections
- Iconography via Font Awesome CDN
- Zero-build setup: runs straight from `index.html` with in-browser Babel

## Quick start

```bash
# Clone
git clone https://github.com/Rohan-Shridhar/portfolio.git
cd portfolio

# Run a static server (recommended to avoid CORS/file issues)
npx serve .           # or: python -m http.server 8000

# Then open:
# http://localhost:3000 (serve) or http://localhost:8000 (python)
```

You can also open `index.html` directly in your browser, but a local server ensures fonts/icons load correctly.

## Project structure

- `index.html` — loads styles, fonts, React/Babel CDNs, and mounts the app
- `style.css` — global styles and section theming
- `*.jsx` — React components loaded via `<script type="text/babel">`
- `images/` — asset files for hero/skills/project cards

## Development notes

- Uses React 18 UMD builds from CDN; no bundler or build step needed.
- Update content by editing the JSX component files (e.g., `Home.jsx`, `Skills.jsx`, `Contact.jsx`).
- Keep sections lightweight to preserve fast load over CDNs.

## Contributing

Improvements are welcome! Please:

1. Fork and branch from `main`.
2. Make changes (docs or UI tweaks).
3. Open a PR with a short description; mention related issue numbers if applicable.

## License

MIT
