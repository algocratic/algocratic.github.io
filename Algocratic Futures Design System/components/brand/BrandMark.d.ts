/** Real brand asset renderer — never redraw marks. */
export interface BrandMarkProps {
  mark?: "logo-eye" | "logo-alx" | "lettermark" | "eye" | "eye-notcult" | "alx" | "heptagram" | "heptagram-gradient" | "heptagram-flow";
  height?: number;
  /** Relative path prefix to project root, e.g. "../../" */
  base?: string;
  /** Invert black marks for dark surfaces */
  invert?: boolean;
  style?: React.CSSProperties;
}
