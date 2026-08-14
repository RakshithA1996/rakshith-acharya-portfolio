# Rakshith Acharya — Portfolio

A premium, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (scroll reveals, page-load sequence, mobile menu)
- Lucide React (icons)

## Project structure

```text
src/
├── components/
│   ├── layout/      Navbar, Footer
│   ├── sections/    Hero, About, Experience, Skills, EngineeringHighlights, Education, Contact
│   └── ui/           Button, SectionHeading, SkillBadge, GlassCard, AnimatedSection
├── data/             profile.ts, experience.ts, skills.ts, education.ts (all content lives here)
├── hooks/            useActiveSection.ts (IntersectionObserver nav highlighting)
└── lib/              utils.ts
```

All page copy is data-driven — edit the files in `src/data/` to update content; you shouldn't need to touch component JSX for text changes.

## Local development

**Requirements:** Node `^20.19.0 || >=22.12.0` (Vite 7's minimum). If `node -v` shows something older or in between (e.g. 22.5.x), upgrade Node first — via [nvm](https://github.com/nvm-sh/nvm) (`nvm install --lts`) or your OS package manager.

```bash
npm install
npm run dev       # start the dev server
npm run build      # type-check + production build to dist/
npm run lint        # ESLint
npm run preview    # preview the production build locally
```

> **Why Vite 7, not 8?** Vite 8 (stable since March 2026) ships Rolldown, a Rust bundler, as its only engine — and installing its platform-specific native binary currently trips a widespread, still-open npm bug ([npm/cli#4828](https://github.com/npm/cli/issues/4828)), causing a `Cannot find native binding` crash on `npm run dev` for many users across Linux/Mac/Windows. This project pins `vite` to the mature, Rollup-based 7.x line (with a matching `@vitejs/plugin-react@5.x`) to avoid that whole class of install issues. If you hit install trouble anyway, delete `node_modules` and `package-lock.json` and run `npm install` again.

## Deploying to GitHub Pages

This repo includes a ready-to-go GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. **Push this project to a GitHub repository** (public or private, Pages works with both on paid plans; public repos get Pages for free).
2. In the repo, go to **Settings → Pages** and under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to your `main` branch (or run the workflow manually from the **Actions** tab). The workflow will:
   - install dependencies
   - lint
   - build
   - deploy the `dist/` output to Pages
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Base path:** `vite.config.ts` automatically detects the correct base path during the GitHub Actions build using the `GITHUB_REPOSITORY` variable GitHub provides — no manual edits needed for a normal project repo (`username/repo-name`). If you instead deploy this as a **user/org root site** (a repo literally named `<username>.github.io`), the base automatically resolves to `/` as well. Local `npm run build` always uses `/`.

**After your first deploy:** open `index.html` and fill in the two `TODO` placeholders (`canonical` and `og:url`) with your live Pages URL, and optionally add a `public/og-image.png` (1200×630) and uncomment the two Open Graph/Twitter image tags — these were intentionally left out rather than pointing at a URL or image that doesn't exist yet.

## CV download

The résumé PDF lives at `public/Rakshith-Acharya-Senior-Software-Engineer-CV.pdf` and is linked from the navbar and hero "Download CV" buttons via `import.meta.env.BASE_URL`, so the link resolves correctly both locally and under the GitHub Pages subpath.

## Content accuracy

All experience, skills, and education content is sourced directly from the provided CV. No employers, dates, metrics, or credentials have been invented.
