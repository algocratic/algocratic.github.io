/** Move-card: hairline panel with optional band spine, mono tag, dashed footer. */
export interface CardProps {
  /** Left spine color, e.g. "var(--prism-indigo)" */
  spine?: string;
  /** Mono kicker, e.g. "MOVE 02 · the real prize" */
  tag?: string;
  title?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
