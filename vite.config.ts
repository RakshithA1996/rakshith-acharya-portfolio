import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/,
// so the build needs that repo name as its base path. When this runs inside
// the included GitHub Actions workflow, GITHUB_REPOSITORY (e.g. "user/repo")
// is set automatically and the base is derived from it. A user/org root site
// (a repo literally named <user>.github.io) is served from "/" instead.
// Building locally falls back to "/".
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgSite = repoName?.toLowerCase().endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgSite ? `/${repoName}/` : '/';

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
});
