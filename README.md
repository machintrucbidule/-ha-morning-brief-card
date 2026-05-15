# morning-brief-card

> Lovelace custom card that renders the canonical JSON produced by the
> `home-assistant-morning-brief` integration.

Distributed via HACS. See the companion integration repo:
<https://github.com/machintrucbidule/ha-morning-brief>.

## Status

`v0.1.0` — first end-to-end render of the canonical brief. Editor is
functional. Tests + polish in upcoming phases.

## Usage

1. Install via HACS (Frontend → custom repositories → add this URL,
   category Lovelace).
2. Add the card to a dashboard:

```yaml
type: custom:morning-brief-card
entity: sensor.morning_brief_default
```

See `docs/examples/basic.yaml` and `docs/examples/compact.yaml`.

## Configuration

| Key | Type | Default | Description |
|---|---|---|---|
| `entity` | string | (required) | A `sensor.morning_brief_*` produced by the integration |
| `compact_mode` | bool | `false` | Hide comparisons, AI insights, sparklines, footer |
| `show_history_nav` | bool | `true` | Show ← → buttons |
| `show_ai_sections` | bool | `true` | Show AI insights + verdict |
| `show_alerts` | bool | `true` | Show alerts banner |
| `show_weather` | bool | `true` | Show weather synthesis |
| `show_footer` | bool | `true` | Show footer (AI status + logical date) |
| `theme_override` | string | (optional) | Accent CSS colour |

## Development

```sh
npm install
npm run typecheck
npm run lint
npm run build  # produces dist/morning-brief-card.js
```

## License

MIT — see [LICENSE](LICENSE).
