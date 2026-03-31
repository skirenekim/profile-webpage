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

## Color palette
`#2a4f7c` hero · `#6D94C5` accent · `#CBDCEB` light blue · `#F5EFE6` page bg · `#E8DFCA` warm sand · `#7A9E7E` sage · `#C4785A` terracotta · `#9B8EA8` purple · `#C49A6C` amber

## Deployment
Push to `main` → GitHub Actions builds and deploys to `gh-pages` branch automatically.
