/** Checkbox (also exports Radio). Navy fill when on. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
