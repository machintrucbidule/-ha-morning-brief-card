# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-rc.1] — 2026-05-15

First release candidate. Build phases 10 + 11 + 12 all complete. Final
`v1.0.0` is gated on a manual browser-rendered test of the card on a
live HA dashboard (per Section 37 acceptance criteria) and replacement
of the placeholder preview screenshot.

### Added

- Phase 12 — Polish & release prep: `docs/img/preview.png` placeholder
  added, `MORNING_BRIEF_SPEC.md` removed from this repo (kept in the
  integration repo + project root) to keep the HACS payload lean,
  CLAUDE.md session log reordered chronologically, Open questions /
  blockers refreshed for v1.0.0-rc.1 cut.
- Initial repo scaffolding.
- Phase 10 — Frontend card V1: full LitElement card that renders the canonical brief from a `sensor.morning_brief_*` entity, with D18/G13 truncation fallback via `morning_brief.get_last_brief`. Components: sparkline, header (← → refresh), alerts, category, field (with comparisons + sparkline for weekly), weather, verdict, footer. History navigation through `previous_briefs_refs`. Card editor exposes 8 config fields. i18n: EN + FR (32 keys parity). Builds to a 37 KB minified bundle at `dist/morning-brief-card.js` (committed for HACS).
- Phase 11 — Docs: full README (10 sections, badges + theming + history nav + i18n + dev), CHANGELOG, `docs/examples/basic.yaml`, `docs/examples/compact.yaml`.
