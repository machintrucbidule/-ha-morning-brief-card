// i18n loader for the card. Picks language based on `hass.language`,
// falls back to EN (G11, D20).
import enMessages from "./en.json";
import frMessages from "./fr.json";
import { DEFAULT_LANGUAGE, type SupportedLanguage } from "../constants";

type Messages = typeof enMessages;

const MESSAGES: Record<SupportedLanguage, Messages> = {
  en: enMessages,
  fr: frMessages,
};

/** Pick the supported language for `hass.language` (default EN). */
export function resolveLanguage(hassLanguage: string | null | undefined): SupportedLanguage {
  if (!hassLanguage) return DEFAULT_LANGUAGE;
  const short = hassLanguage.slice(0, 2).toLowerCase();
  return (short in MESSAGES ? short : DEFAULT_LANGUAGE) as SupportedLanguage;
}

/**
 * Look up a dotted key in the chosen language's messages, falling back to EN
 * and then to the key itself. Never throws.
 */
export function t(language: SupportedLanguage, key: string): string {
  const direct = lookup(MESSAGES[language], key);
  if (direct !== undefined) return direct;
  const fallback = lookup(MESSAGES[DEFAULT_LANGUAGE], key);
  return fallback ?? key;
}

function lookup(source: unknown, key: string): string | undefined {
  let cur: unknown = source;
  for (const part of key.split(".")) {
    if (cur && typeof cur === "object" && part in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof cur === "string" ? cur : undefined;
}
