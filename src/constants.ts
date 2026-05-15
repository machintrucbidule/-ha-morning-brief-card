// Card-level constants.
export const CARD_NAME = "morning-brief-card";
export const CARD_VERSION = "0.1.0";
export const DEFAULT_LANGUAGE = "en" as const;
export const SUPPORTED_LANGUAGES = ["en", "fr"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
