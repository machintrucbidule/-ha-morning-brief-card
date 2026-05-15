// Card entry point — loaded by HA via a Lovelace resource declaration.
import "./card";
import { CARD_NAME, CARD_VERSION } from "./constants";

interface WindowWithCustomCards extends Window {
  customCards?: Array<{
    type: string;
    name: string;
    description: string;
    preview?: boolean;
  }>;
}

const w = window as WindowWithCustomCards;
w.customCards = w.customCards ?? [];
if (!w.customCards.some((c) => c.type === CARD_NAME)) {
  w.customCards.push({
    type: CARD_NAME,
    name: "Morning Brief Card",
    description: "Renders the canonical JSON produced by home-assistant-morning-brief.",
    preview: true,
  });
}

// Log version on load (Console aid).
// eslint-disable-next-line no-console
console.info(
  `%c MORNING-BRIEF-CARD %c v${CARD_VERSION} `,
  "color:white; background:#3478e8; font-weight:700",
  "color:#3478e8; background:white; font-weight:700",
);
