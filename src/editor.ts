import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";

import { CARD_NAME } from "./constants";
import { resolveLanguage, t } from "./i18n";
import type { MorningBriefCardConfig } from "./types";

interface ValueChangedEvent {
  detail?: { value?: string | boolean };
  target?: { value?: string; checked?: boolean; configValue?: string };
}

@customElement(`${CARD_NAME}-editor`)
export class MorningBriefCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: MorningBriefCardConfig;

  public setConfig(config: MorningBriefCardConfig): void {
    this._config = { ...config };
  }

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    if (!this._config) return html``;
    const lang = resolveLanguage(this.hass?.language);
    return html`
      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        <label>
          ${t(lang, "editor.entity")}
          <input
            type="text"
            data-config-value="entity"
            .value=${this._config.entity ?? ""}
            @input=${this._onTextInput}
          />
        </label>
        <small>${t(lang, "editor.entity_help")}</small>
        ${this._checkbox(lang, "compact_mode", "editor.compact_mode")}
        ${this._checkbox(lang, "show_history_nav", "editor.show_history_nav", true)}
        ${this._checkbox(lang, "show_ai_sections", "editor.show_ai_sections", true)}
        ${this._checkbox(lang, "show_alerts", "editor.show_alerts", true)}
        ${this._checkbox(lang, "show_weather", "editor.show_weather", true)}
        ${this._checkbox(lang, "show_footer", "editor.show_footer", true)}
        <label>
          ${t(lang, "editor.theme_override")}
          <input
            type="text"
            data-config-value="theme_override"
            .value=${this._config.theme_override ?? ""}
            @input=${this._onTextInput}
          />
        </label>
      </div>
    `;
  }

  private _checkbox(
    lang: ReturnType<typeof resolveLanguage>,
    key: keyof MorningBriefCardConfig,
    labelKey: string,
    defaultOn = false,
  ): TemplateResult {
    const checked = (this._config[key] ?? defaultOn) as boolean;
    return html`
      <label>
        <input
          type="checkbox"
          data-config-value="${key}"
          .checked=${checked}
          @change=${this._onCheckboxInput}
        />
        ${t(lang, labelKey)}
      </label>
    `;
  }

  private _onTextInput(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    const key = target.dataset.configValue as keyof MorningBriefCardConfig | undefined;
    if (!key) return;
    this._emit({ ...this._config, [key]: target.value });
  }

  private _onCheckboxInput(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    const key = target.dataset.configValue as keyof MorningBriefCardConfig | undefined;
    if (!key) return;
    this._emit({ ...this._config, [key]: target.checked });
  }

  private _emit(next: MorningBriefCardConfig): void {
    this._config = next;
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }),
    );
  }
}

// Silence unused-type warning — ValueChangedEvent left for future structured handlers.
type _ValueChangedReserved = ValueChangedEvent;
declare const _valueChangedReserved: _ValueChangedReserved | undefined;
void _valueChangedReserved;

declare global {
  interface HTMLElementTagNameMap {
    "morning-brief-card-editor": MorningBriefCardEditor;
  }
}
