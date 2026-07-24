## Rohan S. Mirjankar — Portfolio

Single‑page personal portfolio built with React (UMD) and Babel directly in the browser. Showcases projects, skills, and contact links with a playful, scrollable layout.

**Live site:** https://rohan-mirjankar.is-a-good.dev/

<img alt="image" src="https://github.com/user-attachments/assets/2e63af1d-0043-4ea6-88f9-d95027e25395" />


## Features


- Responsive single-page layout with anchored navigation
- About, Skills, Projects (cards), and Contact sections
- Iconography via Font Awesome CDN
- Zero-build setup: runs straight from `index.html` with in-browser Babel

## Quick start

```bash

git clone https://github.com/Rohan-Shridhar/portfolio.git
cd portfolio

npm install

npm run dev

open localhost link in browser
```

You can also open `index.html` directly in your browser, but a local server ensures fonts/icons load correctly.

## Project structure

- `index.html` — loads styles, fonts, React/Babel CDNs, and mounts the app
- `style.css` — global styles and section theming
- `*.jsx` — React components 
- `images/` — asset files for hero/skills/project cards


## Contributing

Improvements are welcome! Please:

1. Fork and branch from `main`.
2. Make changes (docs or UI tweaks).
3. Open a PR with a short description; mention related issue numbers if applicable.

## License

MIT
