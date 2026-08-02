/** Underline tabs — navy active rule on hairline baseline. */
export interface TabsProps {
  tabs?: string[];
  active?: string;
  onChange?: (tab: string) => void;
  style?: React.CSSProperties;
}
