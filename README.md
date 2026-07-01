# Irina CV Website

A brutalist-styled, single-page CV/portfolio site for Irina-Gabriela Teșcureanu, a Bucharest-based front end developer.

Built with [TanStack Start](https://tanstack.com/start), React 19, and Tailwind CSS v4.

## Tech stack

- **Framework:** TanStack Start (React + TanStack Router, SSR)
- **Styling:** Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) components
- **Build tool:** Vite
- **Deployment target:** Cloudflare (via Nitro's `cloudflare-module` preset)

## Getting started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:8080` (or the next available port).

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the dev server               |
| `npm run build`     | Production build                   |
| `npm run build:dev` | Development-mode build             |
| `npm run preview`   | Preview a production build locally |
| `npm run lint`      | Run ESLint                         |
| `npm run format`    | Format the codebase with Prettier  |

## Project structure

```
src/
  routes/       # Pages (TanStack Router file-based routes)
  lib/
    cv-data.ts  # All CV content (profile, jobs, skills, education, ...)
  styles.css    # Global styles / Tailwind layer
public/         # Static assets (resume PDF, photo, robots.txt)
```

Site content is data-driven — update `src/lib/cv-data.ts` to change the CV's content without touching layout code.
