# Profile Webpage — Claude Instructions

## Project
Personal portfolio site for Seong Kyung Kim (Data Scientist).
- **Stack:** React 18 + TypeScript + Tailwind CSS 4 + Vite 6
- **Deployed:** GitHub Pages at `skirenekim.github.io/profile-webpage`
- **PDF CV:** Auto-generated in-browser via `@react-pdf/renderer`

## Mandatory design review rule

**Before completing any task that involves visual changes to the site or CV, you MUST invoke the `web-designer` agent (for UI/web changes) or the `cv-formatter` agent (for CV/PDF changes) to review the work.**

This applies to:
- Any change to a `.tsx` component file in `src/app/components/`
- Any change to `cvStyles.ts` or `CVDocument.tsx`
- Any new section, layout change, or color/typography modification

Do not skip this step even for small changes. Present the agent's feedback to the user before finalizing.

## Available agents

| Agent | When to use |
|---|---|
| `web-designer` | UI layout, typography, color, spacing, component design, Figma-level review |
| `cv-formatter` | CV PDF structure, academic formatting, writing quality, react-pdf layout |

## Auto git workflow
Changes are automatically committed and pushed to GitHub when a session ends (Stop hook). You do not need to manually run git commands unless the user explicitly asks.

## Key data files
- `src/data/experienceData.ts` — shared by web + CV, edit here to update both
- `src/data/educationData.ts` — shared by web + CV, edit here to update both

## Commit style
- No "Co-Authored-By: Claude" lines in commits
- Concise commit messages describing what changed, not how

## Design system (soft pastel + aurora backdrop)
Tokens live in `src/styles/theme.css` (`@theme`) and are used as Tailwind utilities. Do not reintroduce raw hex values, Tailwind `slate-*` colors, or any navy/dark blocks — the user explicitly rejected navy.

- Base: `cream` `#FBF8F3` · text `ink` `#36342F` / `ink-soft` `#5B5953` / `ink-muted` `#67645C` · neutral hairline `line`
- `honor` `#6E5C34` — reserved for awards/honors only
- Section tones (class `tone-*` on each `<Section>`): `sand` · `mist` sage · `lilac` · `cream` neutral (`blush`/`aqua` exist but are unused — keep to 3 hues to avoid a rainbow). Inside a section use `bg-tone-bg`, `border-tone-line`, `text-tone-accent`; they resolve to that section's hue. Current mapping: About sand · Experience mist · Projects cream · Updates lilac · Education sand · Contact cream. Labels stay neutral (`ink-muted`); the accent is only for links, dashes, the upcoming tag and the CV button.
- Every accent passes WCAG AA (≥4.5:1) on its own tint; verify with a contrast check when changing values.
- "Shader" feel comes from the fixed `.aurora` layer (pastel radial-gradient mesh + grain overlay; 48s drift only on desktop pointer devices) behind translucent section bands (`bg-tone-bg/60` with a 1px white inset highlight) and a soft white radial highlight under the hero. Keep it the only animated element besides the one-time section fade.

Fonts: Fraunces (h1/h2, serif) + DM Sans (body) + Noto Sans KR fallback, loaded via `<link>` in `index.html`.

Layout rules: single-page scroll with sticky anchor nav (`App.tsx`); every section uses the shared primitives in `src/app/components/primitives.tsx` (`Section` with `tone`, `Row` with a 220px left column, `Label`, `Chip`, `Meta`, `DashList`, `glassPill`). No nested cards, no icon-in-colored-box patterns, no hover scale effects.

## Deployment
Push to `main` → GitHub Actions builds and deploys to `gh-pages` branch automatically.
