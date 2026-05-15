# CLAUDE.md — morning-brief-card

## Read this first, every session

This file is your persistent memory. Read it at the start of every session BEFORE doing anything else. Update the "Current status", "Open questions", and "Session log" sections at the END of every session.

The full specification lives in `MORNING_BRIEF_SPEC.md` (committed at the project root next to this repo's parent folder). When in doubt about ANY behavior, refer to the spec. Do not infer.

## Project context

TypeScript/Lit Lovelace custom card for Home Assistant. Consumes the canonical JSON produced by the `home-assistant-morning-brief` integration. HACS-public. Standalone repo but tightly coupled to the integration's JSON schema (see Section 15 of `MORNING_BRIEF_SPEC.md`).

## Architecture decisions (IMMUTABLE — do not change without user approval logged in DECISIONS.md)

Same decisions D1–D25 from `MORNING_BRIEF_SPEC.md` Section 4 — see the integration repo's CLAUDE.md for the full list. The decisions most relevant to the card:

- **D1.** Two separate HACS repos; independent versioning.
- **D10/D17.** The card consumes the canonical JSON only. No alternate source of truth.
- **D18.** When canonical JSON >16KB, attributes carry only meta + alerts + `_truncated: true`. Card falls back to `morning_brief.get_last_brief` service.
- **D19.** Card is not auto-installed; user adds it manually. YAML examples shipped.
- **D20.** Multilanguage FR + EN at launch. `hass.language` drives loader, fallback EN.
- **D21.** Reorder via dedicated step (backend). No drag&drop in V1.

## Coding rules (NON-NEGOTIABLE)

R1–R15 from `MORNING_BRIEF_SPEC.md` Section 5 apply where relevant. Frontend-specific additions:

- **F1. Strict TypeScript.** No `any`. Run `tsc --strict` clean.
- **F2. No HTTP calls from the card.** All data comes from `hass.states[entity_id]` or from `hass.callService("morning_brief", "get_last_brief", ...)`.
- **F3. All strings via `src/i18n/<lang>.json`.** Loader picks language based on `hass.language`. Fallback EN.
- **F4. LitElement only.** No React/Vue/Svelte.
- **F5. Use Lit primitives.** `ifDefined`, `repeat`, etc. — no manual DOM manipulation.

## Gotchas (READ BEFORE TOUCHING the relevant subsystem)

Spec gotchas G1–G15 apply where relevant. Frontend-specific additions:

- **FG1.** The card receives JSON >16KB cap via service `morning_brief.get_last_brief` not via entity attributes. Detect by inspecting `value._truncated` flag.
- **FG2.** `hass.language` may be `null` during initial load. Always fallback gracefully (default `en`).
- **G10.** Card NEVER makes direct HTTP calls. Only `hass.states[...]` and `hass.callService(...)`.
- **G12.** Lit reactive properties — reassign objects, don't mutate in place: `this._data = {...this._data, key: newValue}`.

## Current status

- [x] Step 0: memory files created
- [x] Step 1: repo scaffolding
- [x] Phase 10: Frontend card (V1 — first end-to-end render of the canonical brief)
- [x] Phase 11: Docs (README expanded, CHANGELOG, info.md, examples)

## Open questions / blockers

- The card implementation does not start until backend Phase 9 (services / sensor entity) is done, since the card needs a working `sensor.morning_brief_*` and the `morning_brief.get_last_brief` service to drive against. Frontend repo is scaffolded only for now.
- Card-repo HACS Validate will continue to fail until Phase 10 produces `dist/morning-brief-card.js` (HACS plugin repos must ship a JS bundle).
- Card-repo Lint & Build will continue to fail until Phase 10 fills `package.json` with real dependencies.

## Session log

- 2026-05-15 — Created memory files (CLAUDE.md, DECISIONS.md, PROGRESS.md). Scaffolded the frontend repo file tree per Section 3.2 with stub files (`src/*.ts`, `src/components/*.ts`, `src/utils/*.ts`, `src/styles/*.ts`, `src/i18n/{en,fr}.json` + loader, `tests/*.test.ts`, `dist/.gitkeep`, `docs/`). No code yet — Phase 10 starts only after backend Phase 9 lands.
- 2026-05-15 — Initial push of scaffolding. Repo created by user as `-ha-morning-brief-card`, renamed to `ha-morning-brief-card` shortly after; local remote URL updated. `hacs.json` `country` field corrected to `["FR", "US", "GB"]` (geography for FR + EN-speaking audiences). Note that the EN language support of the project lives in `src/i18n/en.json` independently of this field.
- 2026-05-15 — Phase 11 (Docs) shipped for the card repo. README expanded from the badges-only stub to the full Section 31 10-section structure (what / requirements / install via HACS + manual / usage with minimal + compact YAML / config table / theming / history navigation / multilanguage / development / license). `docs/examples/basic.yaml` and `docs/examples/compact.yaml` populated (matching `docs/examples/lovelace_*.yaml` from the integration repo, but kept here too for HACS discoverability). `info.md` and `CHANGELOG.md` updated. No code changes; bundle untouched.
- 2026-05-15 — Phase 10 (Frontend card V1) shipped. `package.json` finalised with lit 3 + custom-card-helpers + rollup toolchain. `src/types.ts` mirrors Section 15 canonical JSON. `src/i18n/{en,fr}.json` populated to 32 keys with parity. `src/utils/` covers locale formatting, theme-aware colour mapping, brief parsing with D18/G13 truncation fallback via `connection.sendMessagePromise({ type: "call_service", return_response: true })`, and history navigation. `src/components/` exposes 8 LitElement custom elements (sparkline, header, alerts, category, field, weather, verdict, footer) — all use `createRenderRoot: this` for theming so HA CSS variables (`--primary-color`, etc.) apply. `src/styles/card.css.ts` carries the shared styles. `src/card.ts` (rationale: orchestrator) handles state (current brief + history index + loading + error), wires the components, drives the `< >` nav (prev/next via `loadHistorical` from the previous_briefs_refs list, refresh via `morning_brief.generate(force=true)`), and exposes `setConfig` / `getConfigElement` / `getStubConfig`. `src/editor.ts` exposes the 8 config fields (entity, compact_mode, show_*, theme_override). `src/index.ts` registers the customCard and logs version. `npm install` + `tsc --noEmit` + `eslint` + `rollup` all green locally: bundle is 37 KB minified, committed to `dist/morning-brief-card.js` with sourcemap. .gitignore updated to allow the dist bundle through (HACS plugin convention).
