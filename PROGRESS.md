# PROGRESS.md — morning-brief-card

Live checklist for the frontend repo. Updated continuously. The card phase (Phase 10) only starts after the integration's Phase 9 ships.

## Step 0 — Memory files
- [x] CLAUDE.md
- [x] DECISIONS.md
- [x] PROGRESS.md

## Step 1 — Repo scaffolding
- [x] Root files (README.md stub, CHANGELOG.md, hacs.json, package.json, tsconfig.json, rollup.config.js, .eslintrc.json, .prettierrc, .gitignore, LICENSE)
- [x] .github/workflows stubs (hacs-validate, lint-build)
- [x] src/ tree (index.ts, card.ts, editor.ts, types.ts, constants.ts, i18n/, components/, styles/, utils/)
- [x] tests/ tree (card.test.ts, format.test.ts, history.test.ts)
- [x] dist/ tree (.gitkeep)
- [x] docs/ tree (img/, examples/)

## Phase 10 — Frontend card
- [ ] package.json deps + scripts (lit, rollup plugins, eslint, prettier, ts)
- [ ] tsconfig.json (strict, target ES2020, lib DOM)
- [ ] rollup.config.js (bundle to dist/morning-brief-card.js)
- [ ] src/types.ts (mirror canonical JSON)
- [ ] src/i18n/{en,fr}.json + src/i18n/index.ts loader
- [ ] src/utils/format.ts
- [ ] src/utils/colors.ts
- [ ] src/utils/data.ts (parsing, truncation detection)
- [ ] src/utils/history.ts (history navigation)
- [ ] src/components/sparkline.ts
- [ ] src/components/header.ts
- [ ] src/components/footer.ts
- [ ] src/components/alerts.ts
- [ ] src/components/field.ts
- [ ] src/components/category.ts
- [ ] src/components/weather.ts
- [ ] src/components/verdict.ts
- [ ] src/styles/card.css.ts
- [ ] src/card.ts (MorningBriefCard)
- [ ] src/editor.ts (MorningBriefCardEditor)
- [ ] src/index.ts (registration)
- [ ] Bundle config + dist output
- [ ] Tests on utils + card smoke test
- [ ] Manual test against a real running integration

## Phase 11 — Docs & examples
- [ ] README.md
- [ ] CHANGELOG.md
- [ ] docs/examples/basic.yaml
- [ ] docs/examples/compact.yaml

## Phase 12 — Polish & release prep
- [ ] tsc --strict clean
- [ ] ESLint clean
- [ ] npm run build produces dist
- [ ] HACS validation passes
- [ ] Tag v1.0.0
