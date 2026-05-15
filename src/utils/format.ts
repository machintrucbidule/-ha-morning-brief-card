// Locale-aware formatting helpers. Numbers default to the user's HA
// locale; durations are rendered in days/hours/minutes depending on size.

import type { SupportedLanguage } from "../constants";

/** Format a number with up to 2 fractional digits. */
export function formatNumber(value: number | null | undefined, lang: SupportedLanguage): string {
  if (value === null || value === undefined || !isFinite(value)) return "—";
  return new Intl.NumberFormat(lang, { maximumFractionDigits: 2 }).format(value);
}

/** Render a delta with explicit sign. */
export function formatSignedDelta(
  delta: number | null | undefined,
  unit: string | null,
  lang: SupportedLanguage,
): string {
  if (delta === null || delta === undefined || !isFinite(delta)) return "";
  const sign = delta > 0 ? "+" : "";
  const body = `${sign}${formatNumber(delta, lang)}`;
  return unit ? `${body} ${unit}` : body;
}

/** Format an ISO date or datetime as a friendly short string. */
export function formatDate(iso: string | null | undefined, lang: SupportedLanguage): string {
  if (!iso) return "";
  const dt = new Date(iso);
  if (isNaN(dt.getTime())) return iso;
  return dt.toLocaleDateString(lang, { weekday: "short", day: "numeric", month: "short" });
}

/** Format an ISO datetime as a HH:MM clock string. */
export function formatTime(iso: string | null | undefined, lang: SupportedLanguage): string {
  if (!iso) return "";
  const dt = new Date(iso);
  if (isNaN(dt.getTime())) return iso;
  return dt.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });
}
