// Pull the canonical brief out of a HA state object — with support for the
// 16 KB truncation fallback (D18, G13).

import type { HomeAssistant } from "custom-card-helpers";
import type { CanonicalBrief } from "../types";

const SERVICE_DOMAIN = "morning_brief";
const SERVICE_GET_LAST = "get_last_brief";
const SERVICE_GET_BY_UUID = "get_brief_by_uuid";

interface CallServiceResponse {
  response?: { brief?: { canonical_json?: CanonicalBrief } };
}

/**
 * Read the canonical JSON from `hass.states[entity].attributes`. When the
 * attributes carry `_truncated: true`, call the integration service to fetch
 * the full payload (D18).
 */
export async function readBrief(
  hass: HomeAssistant,
  entity: string,
): Promise<CanonicalBrief | null> {
  const state = hass.states[entity];
  if (!state) return null;
  const attrs = (state.attributes ?? {}) as Record<string, unknown>;
  if (attrs._truncated !== true) {
    return attrs as unknown as CanonicalBrief;
  }
  const meta = attrs.meta as { instance_id?: string } | undefined;
  if (!meta?.instance_id) return null;
  return _callBriefService(hass, SERVICE_GET_LAST, { instance_id: meta.instance_id });
}

/**
 * Fetch a historical brief by UUID. Used by the `<` / `>` navigation.
 */
export async function readBriefByUuid(
  hass: HomeAssistant,
  instanceId: string,
  uuid: string,
): Promise<CanonicalBrief | null> {
  return _callBriefService(hass, SERVICE_GET_BY_UUID, {
    instance_id: instanceId,
    uuid,
  });
}

/**
 * Invoke a morning_brief service that returns a brief via the WebSocket
 * `call_service` message with `return_response: true`. Returns null when no
 * brief is in the response (e.g. empty store).
 */
async function _callBriefService(
  hass: HomeAssistant,
  service: string,
  serviceData: Record<string, unknown>,
): Promise<CanonicalBrief | null> {
  try {
    const result = await hass.connection.sendMessagePromise<CallServiceResponse>({
      type: "call_service",
      domain: SERVICE_DOMAIN,
      service,
      service_data: serviceData,
      return_response: true,
    });
    return result?.response?.brief?.canonical_json ?? null;
  } catch {
    return null;
  }
}
