import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Comparison, Field } from "../types";
import type { SupportedLanguage } from "../constants";
import { t } from "../i18n";
import { interpretationColor } from "../utils/colors";
import "./sparkline";

@customElement("mbc-field")
export class MbcField extends LitElement {
  @property({ attribute: false }) public field!: Field;
  @property({ type: String }) public lang: SupportedLanguage = "en";
  @property({ type: Boolean }) public compact = false;
  @property({ type: Boolean, attribute: "show-sparkline" }) public showSparkline = false;

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    const f = this.field;
    const stale = f.value.stale;
    const staleKey = f.value.stale_reason
      ? `card.stale_${f.value.stale_reason}`
      : "card.stale_no_data";
    return html`
      <div class="field">
        ${f.icon ? html`<span class="icon">${f.icon}</span>` : ""}
        <div class="body">
          <div class="label">
            ${f.label}
            ${this.showSparkline && f.sparkline_data.length > 1
              ? html`<mbc-sparkline class="sparkline" .data=${f.sparkline_data}></mbc-sparkline>`
              : ""}
          </div>
          ${!this.compact && f.comparisons.length ? this._renderComparisons(f.comparisons) : ""}
        </div>
        <div class="value ${stale ? "stale" : ""}">
          ${stale && f.value.raw === null ? t(this.lang, staleKey) : f.value.formatted}
        </div>
      </div>
    `;
  }

  private _renderComparisons(comparisons: Comparison[]): TemplateResult {
    return html`
      <div class="comparisons">
        ${comparisons
          .filter((c) => c.status !== "not_applicable" && c.delta_formatted)
          .map(
            (c) => html`
              <span style="color: ${interpretationColor(c.interpretation)}">
                ${c.type}: ${c.delta_formatted}
              </span>
              &nbsp;
            `,
          )}
      </div>
    `;
  }
}
