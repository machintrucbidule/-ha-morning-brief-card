# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial repo scaffolding.
- Phase 10 — Frontend card V1: full LitElement card that renders the canonical brief from a `sensor.morning_brief_*` entity, with D18/G13 truncation fallback via `morning_brief.get_last_brief`. Components: sparkline, header (← → refresh), alerts, category, field (with comparisons + sparkline for weekly), weather, verdict, footer. History navigation through `previous_briefs_refs`. Card editor exposes 8 config fields. i18n: EN + FR (32 keys parity). Builds to a 37 KB minified bundle at `dist/morning-brief-card.js` (committed for HACS).
- Phase 11 — Docs: full README (10 sections, badges + theming + history nav + i18n + dev), CHANGELOG, `docs/examples/basic.yaml`, `docs/examples/compact.yaml`.
