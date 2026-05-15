// TypeScript types mirroring the backend canonical JSON (Section 15 + 42).
// Keep these in lockstep with the integration's `types.py` — they are the
// shared contract (D17).

export interface CanonicalBrief {
  schema_version: number;
  meta: BriefMeta;
  alerts: Alert[];
  categories: Category[];
  ai_output: AIOutput;
  ha_health: HAHealth;
  previous_briefs_refs: string[];
}

export interface BriefMeta {
  instance_id: string;
  instance_name: string;
  report_type: "morning" | "evening" | "weekly";
  language: string;
  generated_at: string;
  calendar_date: string;
  logical_date: string;
  logical_day_strategy: string;
  logical_day_offset: number;
  ai_status: "ok" | "degraded" | "disabled";
  ai_provider: string | null;
  ai_error: string | null;
  duration_ms: number;
  _truncated?: boolean;
}

export interface Alert {
  severity: "critical" | "warning" | "info";
  source: string;
  field_id: string | null;
  message: string;
  raw_value: number | null;
  threshold: number | null;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  order: number;
  display_when_empty: boolean;
  fields: Field[];
}

export interface Field {
  id: string;
  label: string;
  icon: string;
  order: number;
  provider_type: string;
  value: FieldValue;
  extra: Record<string, unknown>;
  comparisons: Comparison[];
  anomaly: AnomalyResult | null;
  sparkline_data: number[];
  direction_preference: "higher_is_better" | "lower_is_better" | "neutral";
}

export interface FieldValue {
  raw: number | string | null;
  formatted: string;
  unit: string | null;
  stale: boolean;
  stale_reason: string | null;
  as_of: string | null;
}

export interface Comparison {
  type: string;
  window_days: number | null;
  value: number | null;
  formatted: string;
  delta: number | null;
  delta_formatted: string;
  direction: "up" | "down" | "flat";
  interpretation: "improvement" | "worsening" | "neutral";
  status: "ok" | "partial" | "insufficient_history" | "unreliable" | "not_applicable";
  days_used: number | null;
}

export interface AnomalyResult {
  detected: boolean;
  severity: "info" | "warning" | "critical";
  mode: string;
  message: string;
  raw_value: number;
  threshold: number;
}

export interface AIOutput {
  category_insights: Record<string, string>;
  weather_synthesis: string;
  verdict: string;
}

export interface HAHealth {
  status: "ok" | "warning" | "critical";
  alerts: unknown[];
  data: {
    cpu_pct?: number;
    ram_pct?: number;
    db_size_mib?: number;
  };
}

export interface MorningBriefCardConfig {
  type: "custom:morning-brief-card";
  entity: string;
  compact_mode?: boolean;
  show_categories?: string[];
  hide_fields?: string[];
  show_history_nav?: boolean;
  show_ai_sections?: boolean;
  show_alerts?: boolean;
  show_weather?: boolean;
  show_footer?: boolean;
  theme_override?: string;
}
