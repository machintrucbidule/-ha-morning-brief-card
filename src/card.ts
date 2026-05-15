// rationale: the main LitElement orchestrator. State management
// (current brief + history index + loading + error) plus the full render
// composition. Splitting would scatter the data-flow across files.
import { LitElement, html, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";

import { CARD_NAME, type SupportedLanguage } from "./constants";
import { cardStyles } from "./styles/card.css";
import type { CanonicalBrief, MorningBriefCardConfig } from "./types";
import { resolveLanguage, t } from "./i18n";
import { readBrief } from "./utils/data";
import { loadHistorical, navigationState } from "./utils/history";

import "./components/header";
import "./components/alerts";
import "./components/category";
import "./components/weather";
import "./components/verdict";
import "./components/footer";

@customElement(CARD_NAME)
export class MorningBriefCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: MorningBriefCardConfig;
  @state() private _brief: CanonicalBrief | null = null;
  @state() private _historyIndex = 0;
  @state() private _loading = false;
  @state() private _error: string | null = null;

  static styles = cardStyles;

  /** Lovelace contract — Lovelace calls this with the YAML config. */
  public setConfig(config: MorningBriefCardConfig): void {
    if (!config?.entity) {
      throw new Error("morning-brief-card: `entity` is required.");
    }
    this._config = { ...config };
  }

  /** Lovelace contract — UI editor for `getConfigElement`. */
  public static async getConfigElement(): Promise<HTMLElement> {
    await import("./editor");
    return document.createElement(`${CARD_NAME}-editor`);
  }

  /** Sensible default config when the user first drops the card. */
  public static getStubConfig(): Partial<MorningBriefCardConfig> {
    return {
      type: `custom:${CARD_NAME}`,
      entity: "",
      compact_mode: false,
      show_history_nav: true,
      show_ai_sections: true,
      show_alerts: true,
      show_weather: true,
      show_footer: true,
    };
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has("hass") || changed.has("_config")) {
      void this._loadCurrent();
    }
  }

  protected render(): TemplateResult {
    if (this._loading) return html`<ha-card><div>${t(this._lang, "card.loading")}</div></ha-card>`;
    if (this._error) {
      return html`<ha-card>
        <div>${t(this._lang, "card.error_prefix")}${this._error}</div>
      </ha-card>`;
    }
    if (!this._brief) {
      return html`<ha-card>
        <mbc-header
          .brief=${this._stubBrief()}
          .lang=${this._lang}
          ?show-nav=${false}
          @mbc-refresh=${this._refresh}
        ></mbc-header>
        <div>${t(this._lang, "card.no_data")}</div>
      </ha-card>`;
    }
    return this._renderFull(this._brief);
  }

  private _renderFull(brief: CanonicalBrief): TemplateResult {
    const cfg = this._config;
    const refs = brief.previous_briefs_refs ?? [];
    const nav = navigationState(refs, this._historyIndex);
    const isWeekly = brief.meta.report_type === "weekly";
    const insights = brief.ai_output?.category_insights ?? {};
    const categoriesToShow = (brief.categories ?? []).filter((c) =>
      !cfg.show_categories?.length ? true : cfg.show_categories.includes(c.id),
    );
    return html`
      <ha-card>
        <mbc-header
          .brief=${brief}
          .lang=${this._lang}
          ?show-nav=${cfg.show_history_nav !== false}
          ?can-prev=${nav.canGoPrev}
          ?can-next=${nav.canGoNext}
          @mbc-prev=${this._navigatePrev}
          @mbc-next=${this._navigateNext}
          @mbc-refresh=${this._refresh}
        ></mbc-header>
        ${cfg.show_alerts !== false && (brief.alerts ?? []).length
          ? html`<mbc-alerts .alerts=${brief.alerts} .lang=${this._lang}></mbc-alerts>`
          : ""}
        ${categoriesToShow.map(
          (c) => html`<mbc-category
            .category=${c}
            .lang=${this._lang}
            ?compact=${!!cfg.compact_mode}
            ?show-sparkline=${isWeekly}
            .insight=${cfg.show_ai_sections === false ? "" : insights[c.id] ?? ""}
          ></mbc-category>`,
        )}
        ${cfg.show_weather !== false && brief.ai_output?.weather_synthesis
          ? html`<mbc-weather
              .synthesis=${brief.ai_output.weather_synthesis}
              .lang=${this._lang}
            ></mbc-weather>`
          : ""}
        ${cfg.show_ai_sections !== false && brief.ai_output?.verdict
          ? html`<mbc-verdict
              .verdict=${brief.ai_output.verdict}
              .lang=${this._lang}
            ></mbc-verdict>`
          : ""}
        ${cfg.show_footer !== false && !cfg.compact_mode
          ? html`<mbc-footer .brief=${brief} .lang=${this._lang}></mbc-footer>`
          : ""}
      </ha-card>
    `;
  }

  private async _loadCurrent(): Promise<void> {
    if (!this.hass || !this._config) return;
    this._loading = true;
    this._error = null;
    try {
      this._historyIndex = 0;
      this._brief = await readBrief(this.hass, this._config.entity);
    } catch (err) {
      this._error = (err as Error).message ?? String(err);
    } finally {
      this._loading = false;
    }
  }

  private async _navigatePrev(): Promise<void> {
    if (!this._brief) return;
    const next = this._historyIndex + 1;
    await this._jumpTo(next);
  }

  private async _navigateNext(): Promise<void> {
    if (!this._brief) return;
    const next = this._historyIndex - 1;
    if (next < 0) {
      await this._loadCurrent();
      return;
    }
    await this._jumpTo(next);
  }

  private async _jumpTo(index: number): Promise<void> {
    if (!this._brief) return;
    const refs = this._brief.previous_briefs_refs ?? [];
    const instanceId = this._brief.meta.instance_id;
    this._loading = true;
    try {
      const brief = await loadHistorical(this.hass, instanceId, refs, index);
      if (brief) {
        this._brief = brief;
        this._historyIndex = index;
      }
    } catch (err) {
      this._error = (err as Error).message ?? String(err);
    } finally {
      this._loading = false;
    }
  }

  private async _refresh(): Promise<void> {
    if (!this._brief) return;
    await this.hass.callService("morning_brief", "generate", {
      instance_id: this._brief.meta.instance_id,
      force: true,
    });
    await this._loadCurrent();
  }

  private get _lang(): SupportedLanguage {
    return resolveLanguage(this.hass?.language);
  }

  private _stubBrief(): CanonicalBrief {
    return {
      schema_version: 1,
      meta: {
        instance_id: "",
        instance_name: "Morning Brief",
        report_type: "morning",
        language: "en",
        generated_at: "",
        calendar_date: "",
        logical_date: "",
        logical_day_strategy: "",
        logical_day_offset: 0,
        ai_status: "disabled",
        ai_provider: null,
        ai_error: null,
        duration_ms: 0,
      },
      alerts: [],
      categories: [],
      ai_output: { category_insights: {}, weather_synthesis: "", verdict: "" },
      ha_health: { status: "ok", alerts: [], data: {} },
      previous_briefs_refs: [],
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "morning-brief-card": MorningBriefCard;
  }
}
