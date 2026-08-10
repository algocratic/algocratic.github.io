/** Text input with uppercase micro-label and mono hint line. */
export interface InputProps {
  label?: string;
  /** Mono helper line below, e.g. a source attribution */
  hint?: string;
  /** Mono input text (ids, timestamps) */
  mono?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
