/** PRISM rung ladder — canonical anatomy from the-prism.html (Westmoreland): 150px band cell w/ role, gold hover spine, dashed edge bands, Module Zero + chips. Also exports LadderHinge. */
export interface ClearanceLadderProps {
  rungs?: {
    band: string;
    /** Role subtitle in band cell, e.g. "shipping engineer" */
    role?: string;
    does?: React.ReactNode;
    /** Right "banks:" evidence column (estate-plan variant) */
    banks?: React.ReactNode;
    /** "Module Zero +" chips (PRISM variant) */
    chips?: string[];
    /** Dashed border — the invisible ends (INFRARED / ULTRAVIOLET) */
    edge?: boolean;
  }[];
  style?: React.CSSProperties;
}
