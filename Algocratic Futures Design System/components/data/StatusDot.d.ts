/** 8px status dot — the brand's only "icon" for state. */
export interface StatusDotProps {
  status?: "critical" | "warning" | "ok" | "none";
  dark?: boolean;
  style?: React.CSSProperties;
}
