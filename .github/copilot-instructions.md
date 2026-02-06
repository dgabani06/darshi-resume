<!-- Copilot instructions for the darshi-resume repo -->
# AI Coding Assistant Instructions

This repository is a small React + Vite personal site using Tailwind CSS. Keep guidance concrete and tied to the project files below.

- Project entry: `src/main.jsx` mounts the app into `index.html`'s `#root` element.
- Routing: routes are declared in `src/App.jsx` using `react-router-dom` (`Routes` / `Route`). Use `NavLink` (see `src/components/Navbar.jsx`) for active link styling.
- Pages/components: page components live in `src/pages/*` and UI components in `src/components/*` (e.g., `Navbar.jsx`). Prefer small, presentational components and add new pages under `src/pages`.

- Styling: Tailwind is used. The active Tailwind config is `src/tailwind.config.js` (note: root `tailwind.config.js` is present but not authoritative). Global Tailwind entrypoint is `src/index.css` (imports `@tailwind base/components/utilities`). Keep `content` globs in `src/tailwind.config.js` up-to-date when adding new file extensions.

- Build & dev commands (run from repo root):
  - `npm run dev` — start Vite dev server (HMR)
  - `npm run build` — produce production build
  - `npm run preview` — preview built output
  - `npm run lint` — run ESLint across the project

- Dependency note: `package.json` contains an `overrides` mapping that pins `vite` to `npm:rolldown-vite@7.2.5`. If dev or build fails, check `package.json` and `node_modules` for this alias as it can change behavior compared to upstream Vite.

- Conventions & patterns discovered in code:
  - Utility-first styling: prefer Tailwind utility classes within `className` (see `src/pages/Home.jsx`).
  - Small, focused pages: pages return small JSX trees and rely on Tailwind for spacing/typography.
  - Named files end in `.jsx` (not `.js`) across `src/`.
  - Router usage: `NavLink` uses the `className={({ isActive }) => isActive ? active : base}` pattern to switch styles.

- Files to inspect when making UI or routing changes:
  - `src/App.jsx` — route registration
  - `src/components/Navbar.jsx` — top navigation and example `NavLink` usage
  - `src/pages/*` — page content
  - `src/index.css` and `src/tailwind.config.js` — styling pipeline

- Linting & formatting:
  - `npm run lint` is available; repository uses `eslint` devDependency. There is no project-level ESLint config file in the repo root—follow existing code style when making minimal changes.

- When adding features or debugging:
  - Keep Tailwind `content` globs updated in `src/tailwind.config.js` to avoid missing styles.
  - For routing changes, update `src/App.jsx` and add new page files under `src/pages`.
  - For layout or persistent UI, update `src/components/Navbar.jsx` or add new components in `src/components` and import them in `src/App.jsx` or specific pages.

- Known small quirks to be aware of:
  - Two `tailwind.config.js` files exist (root and `src/`); the project uses the `src` config. Edit that one.
  - `vite` is overridden via `package.json` — if you see unexpected Vite behavior, inspect the override mapping.

If any part of this guidance is unclear or you'd like me to expand examples (e.g., adding a new page, updating Tailwind config, or adding ESLint rules), tell me which area and I'll update this file.
