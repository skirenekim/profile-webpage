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

## Design system (muted editorial)
Tokens live in `src/styles/theme.css` (`@theme`) and are used as Tailwind utilities (`text-ink`, `bg-paper`, `border-line`, …). Do not reintroduce raw hex values or Tailwind `slate-*` colors in components.

- `paper` `#F5EFE6` page bg · `paper-2` `#EDE6D9` · `line` `#DFD6C5` hairlines
- `ink` `#2C3A48` headings · `ink-soft` `#566270` body · `ink-muted` `#646C76` metadata/labels
- `accent` `#4C6A8B` — the only interactive/emphasis hue (links, upcoming tag, focus ring)
- `hero` `#34475C` hero background
- `amber` `#826639` — reserved for awards/honors only · `sage` `#5A6F5B` — reserved for the CV download button only
- All text tokens pass WCAG AA (≥4.5:1) on `paper`; keep it that way when adjusting.

Fonts: Fraunces (h1/h2, serif) + Inter (body) + Noto Sans KR fallback, loaded via `<link>` in `index.html`.

Layout rules: single-page scroll with sticky anchor nav (`App.tsx`); every section uses the shared primitives in `src/app/components/primitives.tsx` (`Section`, `Row` with a 220px left column, `Label`, `Chip`, `Meta`, `DashList`). No nested cards, no per-item accent colors, one section-level fade only.

## Deployment
Push to `main` → GitHub Actions builds and deploys to `gh-pages` branch automatically.
