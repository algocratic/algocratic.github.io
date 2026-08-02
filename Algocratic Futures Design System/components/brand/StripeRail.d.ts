/** Retro banner stripes (also exports PrismRail — the 8px spectrum bar). */
export interface StripeRailProps {
  height?: number;
  /** skewX degrees; banners use ~-20 */
  angle?: number;
  gap?: number;
  width?: string | number;
  style?: React.CSSProperties;
}
