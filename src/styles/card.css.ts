import { css } from "lit";

export const cardStyles = css`
  :host {
    --mbc-spacing: 0.75rem;
    --mbc-radius: 0.5rem;
  }
  ha-card {
    padding: var(--mbc-spacing);
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: var(--mbc-spacing);
  }
  .header .title {
    flex: 1;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .header .subtitle {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
  }
  .header button {
    background: transparent;
    border: 0;
    cursor: pointer;
    color: var(--primary-text-color);
    padding: 0.25rem;
  }
  .header button[disabled] {
    opacity: 0.4;
    cursor: default;
  }
  .alerts {
    background: var(--warning-color, #f39c12);
    color: var(--text-on-warning-color, #fff);
    border-radius: var(--mbc-radius);
    padding: var(--mbc-spacing);
    margin-bottom: var(--mbc-spacing);
  }
  .alerts.critical {
    background: var(--error-color, #e74c3c);
  }
  .alerts ul {
    margin: 0;
    padding-left: 1.25rem;
  }
  .category {
    border: 1px solid var(--divider-color);
    border-radius: var(--mbc-radius);
    margin-bottom: var(--mbc-spacing);
    overflow: hidden;
  }
  .category-header {
    background: var(--secondary-background-color);
    padding: 0.5rem var(--mbc-spacing);
    font-weight: 600;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .category-body {
    padding: var(--mbc-spacing);
  }
  .field {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--divider-color);
  }
  .field:last-child {
    border-bottom: 0;
  }
  .field .icon {
    font-size: 1.1rem;
  }
  .field .body {
    flex: 1;
  }
  .field .label {
    font-weight: 500;
  }
  .field .comparisons {
    font-size: 0.78rem;
    color: var(--secondary-text-color);
    margin-top: 0.15rem;
  }
  .field .value {
    font-size: 1.2rem;
    font-weight: 600;
    min-width: 4rem;
    text-align: right;
  }
  .field .stale {
    color: var(--secondary-text-color);
    font-style: italic;
  }
  .insight {
    margin-top: 0.5rem;
    padding: 0.4rem var(--mbc-spacing);
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-radius: var(--mbc-radius);
    font-style: italic;
    opacity: 0.85;
  }
  .verdict {
    padding: var(--mbc-spacing);
    border-left: 4px solid var(--primary-color);
    background: var(--secondary-background-color);
    border-radius: var(--mbc-radius);
    margin-bottom: var(--mbc-spacing);
  }
  .weather {
    margin-bottom: var(--mbc-spacing);
  }
  .footer {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    border-top: 1px solid var(--divider-color);
    padding-top: 0.5rem;
    margin-top: 0.5rem;
  }
  .sparkline {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.5rem;
  }
`;
