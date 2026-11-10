# AGENTS.md — Lulu Animaciones

Spanish-language (es-CL) marketing landing: React 19 + Vite 6 + Tailwind v4 + DaisyUI + Motion. Two routes.

## Commands

- Install: `pnpm install` (pnpm 10.14.0 via `packageManager`; Node 22)
- Dev server: `pnpm dev`
- Verify: `pnpm build` (`tsc -b && vite build`). There is **no** `lint`, `typecheck`, or test script — use `pnpm build` (or `pnpm exec tsc -b`) as the check.
- Preview build: `pnpm preview`
- Optimize photos: `pnpm images`

## Content and routing

- Routes in `src/App.tsx`: `/` and `/trabajos`, plus 404. Router `basename` comes from `import.meta.env.BASE_URL` in `src/main.tsx`.
- All user-facing copy is Spanish. Edit content in `src/data/{site,services,events,gallery}.ts` rather than inline in components.
- Page title/description are duplicated in `index.html` meta and `src/lib/usePageMeta.ts`; update both. OG/canonical/JSON-LD only exist in `index.html`.
- Import Motion from `motion/react` (not `framer-motion`). `App.tsx` wraps the tree in `MotionConfig reducedMotion="user"`.

## Assets and base path (easy to get wrong)

- Vite `base` is `/` when `VERCEL` is set, otherwise `/luluanimaciones/`; override with `VITE_BASE` (`vite.config.ts`).
- Never hardcode leading-slash public asset URLs. Use `asset()` from `src/lib/asset.ts`; `index.html` uses relative `href`s on purpose so it works under the subpath.
- Generated `public/images/galeria/<slug>-{640,1080}.webp` are committed. Sources in `fotos/` are gitignored, so a fresh clone cannot regenerate them — do not delete the generated WebPs.
- Add a gallery photo: copy a JPEG/PNG/WebP into `fotos/`, run `pnpm images` (slugifies filename, dedupes by SHA-1, skips HEIC, writes 640/1080 WebP), then append an item in `src/data/gallery.ts` using the generated slug.

## Styling

- Tailwind v4 is configured in `src/index.css` with `@theme` and `@plugin "daisyui"`; there is no `tailwind.config.js`.
- Use brand tokens (`rosa`, `rosa-suave`, `crema`, `azul`, `azul-suave`, `amarillo`, `amarillo-suave`, `tinta`, `tinta-suave`, `borde`, `font-display`, `font-sans`) instead of raw colors.
- `tsconfig.json` is strict with `noUnusedLocals`/`noUnusedParameters`: unused imports or vars fail `pnpm build`.

## Deploy

- Every push to `main` auto-deploys both Vercel (root, primary) and GitHub Pages (subpath) via `.github/workflows/deploy.yml`.
- SPA deep links: Vercel uses the `vercel.json` rewrite; the Pages workflow copies `dist/index.html` to `dist/404.html`.
