import { LitElement, html, svg, css, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Tiny SVG sparkline — Section 25.5. 7 points, ~80×20.
 */
@customElement("mbc-sparkline")
export class MbcSparkline extends LitElement {
  @property({ type: Array }) public data: number[] = [];
  @property({ type: Number }) public width = 80;
  @property({ type: Number }) public height = 20;

  static styles = css`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `;

  protected render(): TemplateResult {
    if (this.data.length < 2) return html`<span></span>`;
    const min = Math.min(...this.data);
    const max = Math.max(...this.data);
    const range = max - min || 1;
    const step = this.width / (this.data.length - 1);
    const points = this.data
      .map((v, i) => {
        const x = i * step;
        const y = this.height - ((v - min) / range) * this.height;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
    return html`${svg`
      <svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
        <polyline
          fill="none"
          stroke="var(--primary-color)"
          stroke-width="1.5"
          points="${points}"
        />
      </svg>
    `}`;
  }
}
