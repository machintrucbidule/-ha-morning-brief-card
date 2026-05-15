import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { SupportedLanguage } from "../constants";
import { t } from "../i18n";

@customElement("mbc-verdict")
export class MbcVerdict extends LitElement {
  @property({ type: String }) public verdict = "";
  @property({ type: String }) public lang: SupportedLanguage = "en";

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    if (!this.verdict.trim()) return html``;
    return html`
      <div class="verdict">
        <strong>${t(this.lang, "card.verdict")}</strong> — ${this.verdict}
      </div>
    `;
  }
}
