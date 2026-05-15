// Map an `interpretation` to a CSS variable name. The card relies on HA's
// theme tokens so colours follow the user's theme automatically.
export type Interpretation = "improvement" | "worsening" | "neutral";

const CSS_VAR_BY_INTERPRETATION: Record<Interpretation, string> = {
  improvement: "var(--success-color, #4caf50)",
  worsening: "var(--error-color, #e74c3c)",
  neutral: "var(--secondary-text-color, #999)",
};

/** Return the CSS colour to use for a given comparison interpretation. */
export function interpretationColor(interpretation: Interpretation | string): string {
  return (
    CSS_VAR_BY_INTERPRETATION[interpretation as Interpretation] ??
    CSS_VAR_BY_INTERPRETATION.neutral
  );
}

/** Map a severity ('critical' | 'warning' | 'info') to a CSS colour. */
export function severityColor(severity: string): string {
  if (severity === "critical") return "var(--error-color, #e74c3c)";
  if (severity === "warning") return "var(--warning-color, #f39c12)";
  return "var(--info-color, #3498db)";
}
