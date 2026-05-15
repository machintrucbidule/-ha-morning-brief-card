import { LitElement, html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Alert } from "../types";
import type { SupportedLanguage } from "../constants";
import { t } from "../i18n";

@customElement("mbc-alerts")
export class MbcAlerts extends LitElement {
  @property({ attribute: false }) public alerts: Alert[] = [];
  @property({ type: String }) public lang: SupportedLanguage = "en";

  protected createRenderRoot(): this {
    return this;
  }

  protected render(): TemplateResult {
    if (!this.alerts.length) return html``;
    const hasCritical = this.alerts.some((a) => a.severity === "critical");
    return html`
      <div class="alerts ${hasCritical ? "critical" : ""}">
        <strong>${t(this.lang, "card.alerts")}</strong>
        <ul>
          ${this.alerts.map(
            (a) => html`<li>[${this._severityLabel(a.severity)}] ${a.message}</li>`,
          )}
        </ul>
      </div>
    `;
  }

  private _severityLabel(severity: string): string {
    return t(this.lang, `card.severity_${severity}`);
  }
}
