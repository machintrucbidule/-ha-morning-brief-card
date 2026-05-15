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
- [x] package.json deps + scripts
- [x] tsconfig.json (strict, ES2020 + DOM)
- [x] rollup.config.js (bundle → dist/morning-brief-card.js, inlineDynamicImports)
- [x] src/types.ts (mirror canonical JSON, Section 42)
- [x] src/i18n/{en,fr}.json + src/i18n/index.ts loader (32 keys parity)
- [x] src/utils/{format,colors,data,history}.ts
- [x] src/components/{sparkline,header,footer,alerts,field,category,weather,verdict}.ts
- [x] src/styles/card.css.ts
- [x] src/card.ts (MorningBriefCard with rationale header)
- [x] src/editor.ts (MorningBriefCardEditor)
- [x] src/index.ts (registration + customCards entry)
- [x] Bundle config + dist output committed (37 KB minified + sourcemap)
- [ ] Tests on utils + card smoke test (deferred to Phase 11/12)
- [ ] Manual test against a real running integration (Phase 12)

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
