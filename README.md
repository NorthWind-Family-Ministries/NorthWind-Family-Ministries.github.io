# NorthWind Family Ministries Website

This repository contains a React-based website scaffolded with Vite and styled using Material UI (MUI).

## Project Structure

- `site/` — Vite + React app source
  - `src/App.jsx` — Main app layout using MUI components
  - `src/main.jsx` — MUI theme provider and app bootstrap
  - `index.html` — Root HTML file
  - `vite.config.js` — Vite config with React plugin

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install and Run

```bash
cd site
npm install
npm run dev
```

Open the local URL printed in the terminal (typically `http://localhost:5173`).

### Build and Preview

```bash
cd site
npm run build
npm run preview
```

### Notes
- Material UI packages are already included in `package.json`.
- Customize the theme in `src/main.jsx` and the layout in `src/App.jsx`.
