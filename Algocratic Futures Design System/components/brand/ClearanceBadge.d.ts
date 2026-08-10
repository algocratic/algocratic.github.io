/** PRISM clearance chip — solid band color, exact canonical hex. @startingPoint section="Components" subtitle="PRISM band chip, 10 bands" viewport="700x210" */
export interface ClearanceBadgeProps {
  band?: "INFRARED" | "RED" | "ORANGE" | "YELLOW" | "GREEN" | "BLUE" | "INDIGO" | "VIOLET" | "ULTRAVIOLET" | "GRAY";
  /** Hollow variant */
  outline?: boolean;
  style?: React.CSSProperties;
}
