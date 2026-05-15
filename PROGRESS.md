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
- [x] README.md (10 sections per Section 31)
- [x] CHANGELOG.md
- [x] info.md
- [x] docs/examples/basic.yaml
- [x] docs/examples/compact.yaml

## Phase 12 — Polish & release prep
- [x] tsc --strict clean (CI Lint & Build)
- [x] ESLint clean (CI)
- [x] npm run build produces dist (CI; committed at dist/morning-brief-card.js, 37 KB minified)
- [x] HACS validation passes
- [x] preview.png placeholder generated in docs/img/
- [x] MORNING_BRIEF_SPEC.md removed from this repo per release decision (kept in integration repo)
- [x] CLAUDE.md + PROGRESS.md updated to reflect v1.0.0-rc.1 state
- [x] Tag v1.0.0-rc.1 (release candidate — final v1.0.0 pending manual HA validation)
- [ ] Tag v1.0.0 (after user validates: live HA install, browser-rendered manual test, real screenshot)
