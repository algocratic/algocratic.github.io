/** Native select styled to the form language. */
export interface SelectProps {
  label?: string;
  options?: (string | { label: string; value: string })[];
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
