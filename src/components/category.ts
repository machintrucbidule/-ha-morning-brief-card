import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Category } from "../types";
import type { SupportedLanguage } from "../constants";
import "./field";

@customElement("mbc-category")
export class MbcCategory extends LitElement {
  @property({ attribute: false }) public category!: Category;
  @property({ type: String }) public lang: SupportedLanguage = "en";
  @property({ type: Boolean }) public compact = false;
  @property({ type: Boolean, attribute: "show-sparkline" }) public showSparkline = false;
  @property({ type: String }) public insight = "";

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    const c = this.category;
    return html`
      <div class="category">
        <div class="category-header">
          ${c.icon ? html`<span>${c.icon}</span>` : ""}
          <span>${c.label}</span>
          <span style="margin-left:auto; opacity:.7">${c.fields.length}</span>
        </div>
        <div class="category-body">
          ${c.fields.map(
            (f) => html`<mbc-field
              .field=${f}
              .lang=${this.lang}
              ?compact=${this.compact}
              ?show-sparkline=${this.showSparkline}
            ></mbc-field>`,
          )}
          ${!this.compact && this.insight ? html`<div class="insight">${this.insight}</div>` : ""}
        </div>
      </div>
    `;
  }
}
