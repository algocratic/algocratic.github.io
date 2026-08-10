/** Modal dialog — the only surface allowed --shadow-pop. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  /** Mono kicker above title */
  kicker?: string;
  onClose?: () => void;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}
