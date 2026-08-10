/** Teacherbot bar row: name + mono figure, segmented 9px bar, note. */
export interface StatBarProps {
  name?: string;
  /** Mono figure, e.g. "212 msgs · 61%" */
  fig?: string;
  note?: string;
  /** [{pct: 61, color: "var(--ops-series-1)"}] */
  segments?: { pct: number; color?: string }[];
  /** Indented child row */
  child?: boolean;
  /** Ops (dark) surface */
  dark?: boolean;
  style?: React.CSSProperties;
}
