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
- [ ] Phase 10: Frontend card (not yet started — waits until backend Phase 9 is complete)

## Open questions / blockers

- The card implementation does not start until backend Phase 9 (services / sensor entity) is done, since the card needs a working `sensor.morning_brief_*` and the `morning_brief.get_last_brief` service to drive against. Frontend repo is scaffolded only for now.
- `git init` for this subrepo is deferred until the user is ready to commit / push.

## Session log

- 2026-05-15 — Created memory files (CLAUDE.md, DECISIONS.md, PROGRESS.md). Scaffolded the frontend repo file tree per Section 3.2 with stub files (`src/*.ts`, `src/components/*.ts`, `src/utils/*.ts`, `src/styles/*.ts`, `src/i18n/{en,fr}.json` + loader, `tests/*.test.ts`, `dist/.gitkeep`, `docs/`). No code yet — Phase 10 starts only after backend Phase 9 lands.
