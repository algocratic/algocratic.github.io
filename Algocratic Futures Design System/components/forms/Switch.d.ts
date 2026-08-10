/** Toggle switch — PRISM green when on. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
