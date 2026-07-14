# Ramakrishna Vutakonda Portfolio

This project is a polished, responsive personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Run locally

### Option 1: VS Code Live Server
- Open the workspace folder in VS Code.
- Install the Live Server extension if needed.
- Right-click the file [portfolio/index.html](portfolio/index.html) and choose "Open with Live Server".
- The site should open at a local URL such as http://127.0.0.1:5500/portfolio/index.html.

### Option 2: Python static server
From the workspace root, run:

```bash
python3 -m http.server 8000
```

Then open http://127.0.0.1:8000/ to see the redirect page, or http://127.0.0.1:8000/portfolio/index.html for the portfolio.

## Deploy

The site is static and works on common hosts such as GitHub Pages, Netlify, and Vercel.

- GitHub Pages: publish the workspace root or upload the contents of the portfolio folder to the Pages directory.
- Netlify / Vercel: deploy the workspace root as a static site.

The root [index.html](index.html) redirects to [portfolio/index.html](portfolio/index.html), which makes the site easy to serve from a standard web root.
