/** Brand button. Flat, small radius, darkens on hover/press — never shrinks. @startingPoint section="Components" subtitle="Flat corporate button, 5 variants" viewport="700x230" */
export interface ButtonProps {
  /** Visual style */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "gold";
  size?: "sm" | "md";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
