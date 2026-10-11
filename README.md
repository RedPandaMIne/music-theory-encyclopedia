# Resonance — Music Theory Encyclopedia

A responsive static website built with HTML, CSS, and vanilla JavaScript.

## Features
- Search article titles, summaries, definitions, and keywords
- Browse by category
- Read articles in a modal dialog
- Follow related-topic links between articles
- View musical examples in each entry
- Play a C major scale using the browser's Web Audio API
- Responsive layout for desktop and mobile

## Run locally
1. Download and unzip the project folder.
2. Open `index.html` in a modern browser.
3. For the best development experience, use a local server such as VS Code's **Live Server** extension. No build step or package installation is required.

## Publish online (GitHub Pages)
1. Sign in to GitHub and create a new repository, for example `music-theory-encyclopedia`.
2. Upload `index.html`, `styles.css`, `script.js`, and optionally `README.md` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under the build/deployment settings, select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The Pages screen will show the live URL.

## Customize the site
- Add or edit encyclopedia entries in the `articles` array at the top of `script.js`.
- Each article has: `id`, `title`, `category`, `level`, `summary`, `definition`, `details`, `example`, and `related`.
- `related` must use the `id` of another article to create a working related-topic link.
- Categories must match one of the existing category buttons, or you can add a new category button in `index.html`.
- Colors, spacing, typography, and responsive breakpoints are in `styles.css`.
- The fonts are loaded from Google Fonts; the site will fall back to system fonts if those fonts cannot load.

## Notes
This is a front-end starter project: it does not require a database or user accounts. The current entries are introductory educational summaries; review and expand them as the encyclopedia grows.
