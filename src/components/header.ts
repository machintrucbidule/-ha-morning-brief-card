import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { CanonicalBrief } from "../types";
import type { SupportedLanguage } from "../constants";
import { formatDate, formatTime } from "../utils/format";
import { t } from "../i18n";

@customElement("mbc-header")
export class MbcHeader extends LitElement {
  @property({ attribute: false }) public brief!: CanonicalBrief;
  @property({ type: String }) public lang: SupportedLanguage = "en";
  @property({ type: Boolean, attribute: "show-nav" }) public showNav = true;
  @property({ type: Boolean, attribute: "can-prev" }) public canPrev = false;
  @property({ type: Boolean, attribute: "can-next" }) public canNext = false;

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    const meta = this.brief.meta;
    return html`
      <div class="header">
        ${this.showNav
          ? html`<button
              ?disabled=${!this.canPrev}
              @click=${() => this.dispatchEvent(new CustomEvent("mbc-prev"))}
              aria-label=${t(this.lang, "card.navigate_prev")}
              title=${t(this.lang, "card.navigate_prev")}
            >
              ‹
            </button>`
          : ""}
        <div class="title">${meta.instance_name}</div>
        <div class="subtitle">
          ${formatDate(meta.logical_date, this.lang)} ${formatTime(meta.generated_at, this.lang)}
        </div>
        ${this.showNav
          ? html`<button
              ?disabled=${!this.canNext}
              @click=${() => this.dispatchEvent(new CustomEvent("mbc-next"))}
              aria-label=${t(this.lang, "card.navigate_next")}
              title=${t(this.lang, "card.navigate_next")}
            >
              ›
            </button>`
          : ""}
        <button
          @click=${() => this.dispatchEvent(new CustomEvent("mbc-refresh"))}
          aria-label=${t(this.lang, "card.refresh")}
          title=${t(this.lang, "card.refresh")}
        >
          ↻
        </button>
      </div>
    `;
  }
}
