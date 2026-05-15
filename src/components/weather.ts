import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { SupportedLanguage } from "../constants";
import { t } from "../i18n";

@customElement("mbc-weather")
export class MbcWeather extends LitElement {
  @property({ type: String }) public synthesis = "";
  @property({ type: String }) public lang: SupportedLanguage = "en";

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    if (!this.synthesis.trim()) return html``;
    return html`
      <div class="weather">
        <strong>${t(this.lang, "card.weather")}</strong> — ${this.synthesis}
      </div>
    `;
  }
}
