/** Status badge — uppercase, square-ish, tinted wash + hairline. */
export interface BadgeProps {
  tone?: "neutral" | "info" | "success" | "warning" | "danger" | "navy";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
