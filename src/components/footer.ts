import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { CanonicalBrief } from "../types";
import type { SupportedLanguage } from "../constants";
import { t } from "../i18n";

@customElement("mbc-footer")
export class MbcFooter extends LitElement {
  @property({ attribute: false }) public brief!: CanonicalBrief;
  @property({ type: String }) public lang: SupportedLanguage = "en";

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    const meta = this.brief.meta;
    const aiKey = `card.ai_status_${meta.ai_status}`;
    return html`
      <div class="footer">
        ${t(this.lang, aiKey)} ·
        ${t(this.lang, "card.logical_date")} ${meta.logical_date}
      </div>
    `;
  }
}
