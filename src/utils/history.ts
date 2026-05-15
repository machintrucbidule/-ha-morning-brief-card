// Helpers to navigate the previous_briefs_refs list.

import type { HomeAssistant } from "custom-card-helpers";
import type { CanonicalBrief } from "../types";
import { readBriefByUuid } from "./data";

/**
 * Compute the navigation state given the current index + the refs list.
 *
 * - `canGoNext` is true when index > 0 (newer briefs exist).
 * - `canGoPrev` is true when index + 1 < refs.length (older briefs exist).
 * - `currentRef` is the UUID at `index` (the previous_briefs_refs are
 *   ordered newest-first per the spec).
 */
export interface NavigationState {
  index: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  currentRef: string | null;
}

export function navigationState(refs: string[], index: number): NavigationState {
  const safe = Math.max(0, Math.min(index, Math.max(0, refs.length - 1)));
  return {
    index: safe,
    canGoPrev: safe < refs.length - 1,
    canGoNext: safe > 0,
    currentRef: refs[safe] ?? null,
  };
}

/**
 * Resolve a brief from a previous_briefs_refs index by calling the service.
 * Returns null when no ref exists at that position.
 */
export async function loadHistorical(
  hass: HomeAssistant,
  instanceId: string,
  refs: string[],
  index: number,
): Promise<CanonicalBrief | null> {
  const state = navigationState(refs, index);
  if (state.currentRef === null) return null;
  return readBriefByUuid(hass, instanceId, state.currentRef);
}
