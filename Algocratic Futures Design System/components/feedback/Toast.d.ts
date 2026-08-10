/** Charcoal toast with status spine. */
export interface ToastProps {
  tone?: "info" | "success" | "warning" | "danger";
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
