/* @ds-bundle: {"format":4,"namespace":"AlgocraticFuturesDesignSystem_7c8cb8","components":[{"name":"BrandMark","sourcePath":"components/brand/BrandMark.jsx"},{"name":"BANDS","sourcePath":"components/brand/ClearanceBadge.jsx"},{"name":"ClearanceBadge","sourcePath":"components/brand/ClearanceBadge.jsx"},{"name":"ClearanceLadder","sourcePath":"components/brand/ClearanceLadder.jsx"},{"name":"LadderHinge","sourcePath":"components/brand/ClearanceLadder.jsx"},{"name":"FinePrint","sourcePath":"components/brand/FinePrint.jsx"},{"name":"StripeRail","sourcePath":"components/brand/StripeRail.jsx"},{"name":"PrismRail","sourcePath":"components/brand/StripeRail.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KPI","sourcePath":"components/data/KPI.jsx"},{"name":"StatBar","sourcePath":"components/data/StatBar.jsx"},{"name":"StatusDot","sourcePath":"components/data/StatusDot.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/BrandMark.jsx":"4257a662628b","components/brand/ClearanceBadge.jsx":"18712fad8ff5","components/brand/ClearanceLadder.jsx":"eaea66994c91","components/brand/FinePrint.jsx":"059c236cdbf4","components/brand/StripeRail.jsx":"ecddfd2a09a6","components/core/Badge.jsx":"201411e80878","components/core/Button.jsx":"c227f9a5e6d7","components/core/Card.jsx":"90ee680a055a","components/data/DataTable.jsx":"9fe3279c13b5","components/data/KPI.jsx":"8ac8a71e432c","components/data/StatBar.jsx":"73e68f9d4891","components/data/StatusDot.jsx":"ff29876ae738","components/feedback/Dialog.jsx":"b45cc5024d9f","components/feedback/Toast.jsx":"d2ef59658cf4","components/feedback/Tooltip.jsx":"b9b54a5e613b","components/forms/Checkbox.jsx":"3851ef853c1e","components/forms/Input.jsx":"83a93029fa5b","components/forms/Select.jsx":"907634ac1ccf","components/forms/Switch.jsx":"f88d15c17ab9","components/navigation/Tabs.jsx":"c861dc1761b8","ui_kits/documents/Report.jsx":"c9c5d0d26f41","ui_kits/teacherbot/Teacherbot.jsx":"d24bc8673227"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlgocraticFuturesDesignSystem_7c8cb8 = window.AlgocraticFuturesDesignSystem_7c8cb8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrandMark.jsx
try { (() => {
const M = {
  "logo-eye": "AF_Logo_Eye",
  "logo-alx": "AF_Logo_AL-X",
  lettermark: "AF_Lettermark",
  eye: "AF_A_Eye",
  "eye-notcult": "AF_A_Eye_NotCult",
  alx: "AF_AL-X",
  heptagram: "Heptagram_Black",
  "heptagram-gradient": "Heptagram_Gradient",
  "heptagram-flow": "Heptagram_FlowChart"
};
function BrandMark({
  mark = "logo-eye",
  height = 48,
  base = "",
  invert,
  style
}) {
  const stem = M[mark] || M["logo-eye"];
  return /*#__PURE__*/React.createElement("img", {
    src: `${base}assets/brand/${stem}.png`,
    height: height,
    alt: stem,
    style: {
      display: "block",
      filter: invert ? "invert(1)" : "none",
      ...style
    }
  });
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/ClearanceBadge.jsx
try { (() => {
const BANDS = {
  INFRARED: {
    c: "var(--prism-infrared)",
    fg: "#fff"
  },
  RED: {
    c: "var(--prism-red)",
    fg: "#fff"
  },
  ORANGE: {
    c: "var(--prism-orange)",
    fg: "#fff"
  },
  YELLOW: {
    c: "var(--prism-yellow)",
    fg: "#3A2D00"
  },
  GREEN: {
    c: "var(--prism-green)",
    fg: "#fff"
  },
  BLUE: {
    c: "var(--prism-blue)",
    fg: "#fff"
  },
  INDIGO: {
    c: "var(--prism-indigo)",
    fg: "#fff"
  },
  VIOLET: {
    c: "var(--prism-violet)",
    fg: "#fff"
  },
  ULTRAVIOLET: {
    c: "var(--prism-ultraviolet)",
    fg: "#fff"
  },
  GRAY: {
    c: "var(--prism-gray)",
    fg: "#fff"
  }
};
function ClearanceBadge({
  band = "GRAY",
  outline,
  style
}) {
  const b = BANDS[band] || BANDS.GRAY;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: ".06em",
      padding: "3px 11px",
      borderRadius: "var(--radius-xs)",
      background: outline ? "transparent" : b.c,
      color: outline ? b.c : b.fg,
      border: `1.5px solid ${b.c}`,
      ...style
    }
  }, band);
}
Object.assign(__ds_scope, { BANDS, ClearanceBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ClearanceBadge.jsx", error: String((e && e.message) || e) }); }

// components/brand/ClearanceLadder.jsx
try { (() => {
function ClearanceLadder({
  rungs = [],
  style
}) {
  const [hov, setHov] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rungs.map((r, i) => {
    const b = __ds_scope.BANDS[r.band] || __ds_scope.BANDS.GRAY;
    return /*#__PURE__*/React.createElement("div", {
      key: r.band + i,
      onMouseEnter: () => setHov(i),
      onMouseLeave: () => setHov(-1),
      style: {
        display: "flex",
        alignItems: "stretch",
        border: `1px ${r.edge ? "dashed" : "solid"} var(--border-hairline)`,
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--surface-card)",
        boxShadow: hov === i ? "-3px 0 0 0 var(--af-gold)" : "none",
        transition: "box-shadow .16s ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 150px",
        padding: "13px 15px",
        background: b.c,
        color: b.fg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: ".05em"
      }
    }, r.band), r.role && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        opacity: .95,
        lineHeight: 1.2
      }
    }, r.role)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: "12px 16px",
        fontSize: 14.2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, r.does), r.chips && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 600,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        color: "var(--text-secondary)"
      }
    }, "Module Zero +"), r.chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        fontSize: 12.5,
        padding: "3px 9px",
        borderRadius: 7,
        background: "#F1F0EC",
        color: "#3F4145"
      }
    }, c)))), r.banks && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 34%",
        padding: "12px 16px",
        fontSize: 13,
        color: "var(--text-secondary)",
        display: "flex",
        alignItems: "center",
        borderLeft: "1px solid #F0EFEC"
      }
    }, r.banks));
  }));
}
function LadderHinge({
  children = "green is the ship-it pivot · makers below · orchestrators above · same ladder, wider scope"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "3px 0",
      padding: "7px 14px",
      fontSize: 12,
      fontWeight: 500,
      color: "var(--text-secondary)",
      borderTop: "1px dashed var(--border-hairline)",
      borderBottom: "1px dashed var(--border-hairline)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      flex: "0 0 10px",
      height: 10,
      borderRadius: "50%",
      background: "var(--prism-green)"
    }
  }), children);
}
Object.assign(__ds_scope, { ClearanceLadder, LadderHinge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ClearanceLadder.jsx", error: String((e && e.message) || e) }); }

// components/brand/FinePrint.jsx
try { (() => {
function FinePrint({
  slogan = "THE ALGORITHM PROVIDES.",
  children,
  dark = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      background: dark ? "var(--af-charcoal)" : "transparent",
      color: dark ? "var(--af-cream)" : "var(--text-body)",
      padding: dark ? "16px 20px" : "0",
      ...style
    }
  }, slogan && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 13,
      letterSpacing: ".03em"
    }
  }, slogan), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 8,
      borderTop: `1px solid ${dark ? "rgba(242,236,217,.25)" : "var(--border-hairline)"}`,
      fontSize: 9.5,
      lineHeight: 1.55,
      fontStyle: "italic",
      color: dark ? "#A8AEB9" : "var(--text-secondary)"
    }
  }, children));
}
Object.assign(__ds_scope, { FinePrint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FinePrint.jsx", error: String((e && e.message) || e) }); }

// components/brand/StripeRail.jsx
try { (() => {
function StripeRail({
  height = 26,
  angle = -20,
  gap = 5,
  width = "100%",
  style
}) {
  const cs = ["var(--stripe-1)", "var(--stripe-2)", "var(--stripe-3)", "var(--stripe-4)", "var(--stripe-5)"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      width,
      display: "flex",
      gap,
      transform: `skewX(${angle}deg)`,
      ...style
    }
  }, cs.map(c => /*#__PURE__*/React.createElement("i", {
    key: c,
    style: {
      flex: 1,
      background: c,
      display: "block"
    }
  })));
}
function PrismRail({
  height = 8,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: height / 2,
      background: "var(--prism-rail)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { StripeRail, PrismRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StripeRail.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const C = {
  neutral: ["var(--af-paper-2)", "var(--af-slate)", "var(--af-silver)"],
  info: ["#EAF2FA", "var(--prism-blue)", "#CBDFF2"],
  success: ["#EAF6EC", "var(--prism-green)", "#CBE8D1"],
  warning: ["#FCF4DC", "#8A6A0E", "#F2E2AC"],
  danger: ["#FDECEC", "var(--prism-red)", "#F5C9C9"],
  navy: ["var(--af-navy)", "#fff", "var(--af-navy)"]
};
function Badge({
  tone = "neutral",
  children,
  style
}) {
  const [bg, fg, bd] = C[tone] || C.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      padding: "2px 9px",
      borderRadius: "var(--radius-xs)",
      background: bg,
      color: fg,
      border: `1px solid ${bd}`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: "var(--af-navy)",
    bgH: "var(--af-navy-deep)",
    fg: "#fff",
    bd: "transparent"
  },
  secondary: {
    bg: "var(--af-paper)",
    bgH: "var(--af-paper-2)",
    fg: "var(--af-ink)",
    bd: "var(--af-silver)"
  },
  ghost: {
    bg: "transparent",
    bgH: "var(--af-paper-2)",
    fg: "var(--af-navy)",
    bd: "transparent"
  },
  danger: {
    bg: "var(--prism-red)",
    bgH: "#C22626",
    fg: "#fff",
    bd: "transparent"
  },
  gold: {
    bg: "var(--af-gold)",
    bgH: "#DDA61F",
    fg: "var(--af-ink)",
    bd: "transparent"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled,
  children,
  style,
  ...rest
}) {
  const v = V[variant] || V.primary;
  const [hov, setHov] = React.useState(false),
    [act, setAct] = React.useState(false);
  const pad = size === "sm" ? "5px 12px" : "8px 18px",
    fs = size === "sm" ? 13 : 14.5;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setAct(false);
    },
    onMouseDown: () => setAct(true),
    onMouseUp: () => setAct(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: fs,
      padding: pad,
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${v.bd}`,
      background: act ? v.bgH : hov ? v.bgH : v.bg,
      color: v.fg,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      letterSpacing: ".01em",
      transition: "background var(--dur-fast) var(--ease-brand)",
      filter: act ? "brightness(.92)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  spine,
  tag,
  title,
  footer,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "17px 19px",
      boxShadow: "var(--shadow-card)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, spine && /*#__PURE__*/React.createElement("i", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: spine
    }
  }), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-secondary)",
      letterSpacing: ".04em",
      display: "block",
      marginBottom: 9
    }
  }, tag), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      fontSize: 16.5,
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.2,
      lineHeight: 1.55,
      color: "#26282B"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 11,
      paddingTop: 9,
      borderTop: "1px dashed var(--border-hairline)",
      fontSize: 12.5,
      color: "var(--text-secondary)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      textAlign: "left",
      background: "var(--af-navy)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 10.5,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      padding: "9px 14px"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? "var(--surface-tint)" : "var(--surface-card)"
    }
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: "10px 14px",
      borderBottom: "1px solid #ECEBE7",
      verticalAlign: "top",
      lineHeight: 1.45,
      color: "#26282B"
    }
  }, cell))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KPI.jsx
try { (() => {
function KPI({
  value,
  unit,
  caption,
  dark,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? "var(--ops-panel)" : "var(--surface-card)",
      border: `1px solid ${dark ? "var(--ops-line)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-md)",
      padding: "18px 20px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: "-.02em",
      lineHeight: 1,
      color: dark ? "var(--ops-ink)" : "var(--text-body)"
    }
  }, value, unit && /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 16,
      color: dark ? "var(--ops-ink-3)" : "var(--text-secondary)",
      fontWeight: 400
    }
  }, " ", unit)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: dark ? "var(--ops-ink-2)" : "var(--text-secondary)",
      marginTop: 6
    }
  }, caption));
}
Object.assign(__ds_scope, { KPI });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KPI.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBar.jsx
try { (() => {
function StatBar({
  name,
  fig,
  note,
  segments = [],
  child,
  dark,
  style
}) {
  const ink = dark ? "var(--ops-ink)" : "var(--text-body)",
    ink3 = dark ? "var(--ops-ink-3)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0",
      borderBottom: `1px solid ${dark ? "var(--ops-line)" : "var(--border-hairline)"}`,
      paddingLeft: child ? 22 : 0,
      borderLeft: child ? `1px solid ${dark ? "var(--ops-line)" : "var(--border-hairline)"}` : "none",
      marginLeft: child ? 6 : 0,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      color: ink
    }
  }, name), fig && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: ink3,
      whiteSpace: "nowrap"
    }
  }, fig)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 9,
      borderRadius: 5,
      overflow: "hidden",
      background: dark ? "var(--ops-panel-2)" : "#EDECE8"
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      display: "block",
      height: "100%",
      width: `${s.pct}%`,
      background: s.color || "var(--ops-series-1)"
    }
  }))), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: dark ? "var(--ops-ink-2)" : "var(--text-secondary)",
      marginTop: 6
    }
  }, note));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusDot.jsx
try { (() => {
const S = {
  critical: "var(--ops-crit)",
  warning: "var(--ops-warn)",
  ok: "var(--ops-ok)",
  none: "transparent"
};
function StatusDot({
  status = "none",
  dark,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    style: {
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: S[status] || S.none,
      border: `1px solid ${status === "none" ? dark ? "var(--ops-line)" : "var(--border-hairline)" : S[status]}`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  kicker,
  onClose,
  actions,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(13,27,42,.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(480px,92vw)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-pop)",
      padding: "22px 24px",
      fontFamily: "var(--font-sans)"
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-secondary)",
      letterSpacing: ".05em",
      marginBottom: 6
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 10px",
      fontSize: 19,
      fontWeight: 700,
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.3,
      lineHeight: 1.55,
      color: "#26282B"
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      marginTop: 18
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  info: "var(--prism-blue)",
  success: "var(--prism-green)",
  warning: "var(--prism-yellow)",
  danger: "var(--prism-red)"
};
function Toast({
  tone = "info",
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: "var(--af-charcoal)",
      color: "var(--af-cream)",
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${T[tone] || T.info}`,
      padding: "12px 16px",
      fontFamily: "var(--font-sans)",
      maxWidth: 420,
      boxShadow: "var(--shadow-pop)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.8,
      lineHeight: 1.5,
      color: "#C9CED8"
    }
  }, children)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false)
  }, children, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 7px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--af-ink)",
      color: "var(--af-cream)",
      fontFamily: "var(--font-sans)",
      fontSize: 11.5,
      lineHeight: 1.4,
      padding: "5px 9px",
      borderRadius: "var(--radius-xs)",
      whiteSpace: "nowrap",
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Box({
  on,
  shape
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      flex: "0 0 16px",
      borderRadius: shape === "circle" ? "50%" : 4,
      border: `1px solid ${on ? "var(--af-navy)" : "#B9BCC2"}`,
      background: on ? "var(--af-navy)" : "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast)"
    }
  }, on && (shape === "circle" ? /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#fff"
    }
  }) : /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 5.2 4 7.7 8.5 2.6",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8"
  }))));
}
function Checkbox({
  checked,
  onChange,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      cursor: "pointer",
      ...style
    },
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement(Box, {
    on: checked
  }), label);
}
function Radio({
  checked,
  onChange,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      cursor: "pointer",
      ...style
    },
    onClick: () => onChange && onChange(true)
  }, /*#__PURE__*/React.createElement(Box, {
    on: checked,
    shape: "circle"
  }), label);
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  mono,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: ".09em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontSize: mono ? 13 : 14.5,
      padding: "8px 11px",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${f ? "var(--af-navy)" : "var(--border-hairline)"}`,
      outline: "none",
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: f ? "0 0 0 3px rgba(22,48,95,.12)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: ".09em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      padding: "8px 11px",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-hairline)",
      background: "var(--surface-card)",
      color: "var(--text-body)",
      outline: "none"
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      cursor: "pointer",
      ...style
    },
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 19,
      borderRadius: 999,
      background: checked ? "var(--prism-green)" : "#C6C9CE",
      position: "relative",
      transition: "background var(--dur-med) var(--ease-brand)",
      flex: "0 0 34px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 17 : 2,
      width: 15,
      height: 15,
      borderRadius: "50%",
      background: "#fff",
      transition: "left var(--dur-med) var(--ease-brand)",
      boxShadow: "0 1px 2px rgba(13,27,42,.25)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      borderBottom: "1px solid var(--border-hairline)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tabs.map(t => {
    const on = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange && onChange(t),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        borderBottom: `2px solid ${on ? "var(--af-navy)" : "transparent"}`,
        marginBottom: -1,
        padding: "8px 14px",
        fontFamily: "inherit",
        fontSize: 13.5,
        fontWeight: 600,
        letterSpacing: ".02em",
        color: on ? "var(--af-navy)" : "var(--text-secondary)",
        cursor: "pointer"
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/Report.jsx
try { (() => {
const {
  DataTable,
  Badge,
  ClearanceLadder,
  Card,
  PrismRail,
  BrandMark
} = window.AlgocraticFuturesDesignSystem_7c8cb8;
const docStyles = {
  page: {
    width: "min(920px,94vw)",
    margin: "22px auto",
    background: "var(--af-paper)",
    color: "var(--text-body)",
    boxShadow: "0 10px 34px rgba(0,0,0,.35)",
    padding: "56px 64px 110px",
    boxSizing: "border-box",
    minHeight: 820,
    position: "relative"
  },
  kick: {
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "var(--af-slate)"
  },
  display: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    color: "var(--af-ink)",
    lineHeight: 1.2
  },
  h2: {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: 26,
    color: "var(--af-navy)",
    margin: "0 0 18px"
  },
  h3: {
    fontFamily: "var(--font-display)",
    fontSize: 15,
    fontWeight: 400,
    color: "var(--af-slate)",
    margin: "28px 0 10px",
    letterSpacing: ".04em"
  },
  body: {
    fontSize: 15,
    lineHeight: 1.65,
    color: "#26282B",
    margin: "0 0 12px"
  },
  ghost: {
    position: "absolute",
    bottom: 26,
    left: 64,
    right: 110,
    fontFamily: "var(--font-display)",
    fontSize: 12,
    color: "rgba(83,86,90,.28)",
    letterSpacing: ".03em"
  }
};
function PageNum({
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 16,
      right: 40,
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    mark: "heptagram",
    height: 44,
    base: "../../"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--af-ink)"
    }
  }, n));
}
function Cover() {
  return /*#__PURE__*/React.createElement("div", {
    style: docStyles.page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    mark: "logo-eye",
    height: 54,
    base: "../../"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: 12.5,
      letterSpacing: ".05em",
      color: "var(--af-slate)",
      marginTop: 10
    }
  }, "ALGOCRATIC FUTURES\u2122 \xB7 INSTITUTIONAL EFFECTIVENESS DIVISION"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...docStyles.display,
      fontSize: 44,
      margin: "170px 0 0"
    }
  }, "CITIZEN PERFORMANCE TRAJECTORY ANALYSIS"), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "2px solid var(--af-navy)",
      margin: "22px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 24,
      color: "var(--af-navy)"
    }
  }, "Spring 2026 \xB7 Full Compliance Documentation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: "italic",
      fontSize: 14,
      color: "var(--af-slate)",
      marginTop: 8
    }
  }, "Objectives Assigned: 3 \xB7 Objectives Completed: 4 \xB7 Variance: Documented"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      display: "grid",
      gap: 8
    }
  }, [26, 7, 12, 5, 9, 4].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: h,
      background: "var(--af-navy-deep)"
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      bottom: 30,
      left: 64,
      right: 64,
      margin: 0,
      textAlign: "right",
      fontStyle: "italic",
      fontSize: 10.5,
      lineHeight: 1.6,
      color: "var(--af-slate)"
    }
  }, "Produced in cooperation with the Office of Retroactive Objective Assignment, the Bureau of Discrepancy Reconciliation, and the Division of Documenting Things That Should Have Been Obvious. Special thanks to the Committee for Deciding Whether This Counts, which met once and reached no consensus."));
}
function Deliverables() {
  return /*#__PURE__*/React.createElement("div", {
    style: docStyles.page
  }, /*#__PURE__*/React.createElement("h2", {
    style: docStyles.h2
  }, "Key Deliverables"), /*#__PURE__*/React.createElement(DataTable, {
    columns: ["Deliverable", "Status", "Institutional function"],
    rows: [["AlgoCratic Futures™ world and clearance system", /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Complete"), "Identity / environment architecture"], ["CTS 285 full assignment library", /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Complete"), "Capability curriculum, INFRARED–YELLOW"], ["Sacred Workflow™ documentation", /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Complete"), "Behavior-level norm embedding"], ["System 1: Flask app, auth, context injection, logging", /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, "Built & deployed"), "Per-group AI access infrastructure"], ["Growth gamification system (GitHub Actions + METRICS.md)", /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "In progress"), "Learning velocity measurement"], ["GRAY Clearance instructional design onboarding brief", /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Complete"), "Cross-disciplinary integration"], ["AlgoCratic GitHub Pages site", /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "In progress"), "Public-facing program identity"]]
  }), /*#__PURE__*/React.createElement("h3", {
    style: docStyles.h3
  }, "RUBRIC STRUCTURE"), /*#__PURE__*/React.createElement(DataTable, {
    columns: ["Category", "Points", "What it measures"],
    rows: [["Communication Quality", "20", "Clarity of briefs, responsiveness, professionalism, documentation completeness"], ["Deliverable Integration", "25", "Technical spec adherence, asset quality, integration success, fidelity"], ["Collaboration Process", "20", "Milestone adherence, iteration responsiveness, problem-solving approach"], ["Final Product Quality", "35", "UX enhancement, professional polish, technical implementation, completeness"]]
  }), /*#__PURE__*/React.createElement("p", {
    style: docStyles.ghost
  }, "All paths lead to optimization. Even the wrong ones. Especially the wrong ones."), /*#__PURE__*/React.createElement(PageNum, {
    n: "11"
  }));
}
function Plan() {
  return /*#__PURE__*/React.createElement("div", {
    style: docStyles.page
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-doc-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".15em",
      textTransform: "uppercase",
      color: "var(--af-slate)",
      margin: "0 0 12px"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--prism-ultraviolet)"
    }
  }, "ULTRAVIOLET"), " \xB7 plan of action \xB7 2026-07-30"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-doc-serif)",
      fontWeight: 600,
      fontSize: 46,
      lineHeight: 1,
      letterSpacing: "-.015em",
      margin: 0,
      color: "var(--af-ink)"
    }
  }, "The Algorithm", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--af-gold)",
      fontStyle: "italic",
      padding: "0 .12em"
    }
  }, "\xD7"), "The Estate"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-doc-serif)",
      fontSize: 18,
      color: "var(--af-slate)",
      maxWidth: "64ch",
      margin: "16px 0 0",
      lineHeight: 1.5
    }
  }, "Two systems built in different rooms, for different reasons, arriving at the same discipline. The plan is not to integrate them. It is to stop pretending they are two things."), /*#__PURE__*/React.createElement(PrismRail, {
    style: {
      margin: "24px 0 26px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    spine: "var(--prism-ultraviolet)",
    tag: "MOVE 01 \xB7 this week",
    title: "Adopt one vocabulary",
    footer: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Owner:"), " Neo \xB7 ", /*#__PURE__*/React.createElement("b", null, "Cost:"), " one editing pass over six prompts")
  }, "Stop maintaining two dialects of the same discipline. The estate speaks Algorithm."), /*#__PURE__*/React.createElement(Card, {
    spine: "var(--prism-indigo)",
    tag: "MOVE 02 \xB7 the real prize",
    title: "Probe the seats",
    footer: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Owner:"), " Auditor \xB7 ", /*#__PURE__*/React.createElement("b", null, "Blocked on:"), " the Almanac fault")
  }, "Turn SEATS.md from priors into evidence. The estate is the only thing in either system that wakes up on its own.")), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...docStyles.h3,
      fontFamily: "var(--font-doc-serif)",
      fontSize: 22,
      color: "var(--af-ink)",
      letterSpacing: "-.01em",
      textTransform: "none"
    }
  }, "The Algorithm on the PRISM ladder"), /*#__PURE__*/React.createElement(ClearanceLadder, {
    rungs: [{
      band: "GREEN",
      does: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Ships from a frozen contract."), " Executes exactly; never re-optimizes past the gate."),
      banks: "banks: deployed product + its contract"
    }, {
      band: "YELLOW",
      does: "Runs ASSAY on a peer's document. Locates the operative sentence.",
      banks: "banks: an assay + a mentoring case"
    }, {
      band: "ORANGE",
      does: "Handles gaps under ambiguity — three or fewer asked, the rest stated as assumptions.",
      banks: "banks: ADRs + a gap log"
    }, {
      band: "RED",
      does: "Runs one PROVIDE pass solo. Produces a real cut log.",
      banks: "banks: first frozen contract + PR trail"
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-doc-serif)",
      fontSize: 19,
      lineHeight: 1.4,
      margin: "26px 0 0",
      padding: "0 0 0 22px",
      borderLeft: "4px solid var(--af-gold)",
      color: "var(--af-ink)"
    }
  }, "The string is a checksum. The invariant is not the string \u2014 it is that a human bears the cost of saying it.", /*#__PURE__*/React.createElement("cite", {
    style: {
      display: "block",
      fontFamily: "var(--font-doc-sans)",
      fontSize: 13,
      fontStyle: "normal",
      color: "var(--af-slate)",
      marginTop: 10,
      letterSpacing: ".03em"
    }
  }, "SKILL.md \xB7 Invariants")), /*#__PURE__*/React.createElement("p", {
    style: docStyles.ghost
  }, "The Algorithm provides. Everything you need. Nothing you want."), /*#__PURE__*/React.createElement(PageNum, {
    n: "20"
  }));
}
function App() {
  const pages = ["Cover", "Key Deliverables", "Plan of Action"];
  const [p, setP] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      display: "flex",
      gap: 2,
      justifyContent: "center",
      padding: "12px 0",
      background: "rgba(43,47,54,.92)"
    }
  }, pages.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setP(i),
    style: {
      appearance: "none",
      border: "none",
      borderRadius: 5,
      padding: "7px 15px",
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      fontWeight: 600,
      cursor: "pointer",
      background: i === p ? "var(--af-gold)" : "transparent",
      color: i === p ? "var(--af-ink)" : "var(--af-cream)"
    }
  }, t))), p === 0 && /*#__PURE__*/React.createElement(Cover, null), p === 1 && /*#__PURE__*/React.createElement(Deliverables, null), p === 2 && /*#__PURE__*/React.createElement(Plan, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/Report.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teacherbot/Teacherbot.jsx
try { (() => {
const {
  KPI,
  StatBar,
  StatusDot
} = window.AlgocraticFuturesDesignSystem_7c8cb8;
const tbStyles = {
  wrap: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "32px 20px 72px"
  },
  h2: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: ".13em",
    color: "var(--ops-ink-2)",
    fontWeight: 600,
    margin: "0 0 4px"
  },
  track: {
    color: "var(--ops-ink-3)",
    fontWeight: 400
  },
  sub: {
    fontSize: 12.5,
    color: "var(--ops-ink-3)",
    margin: "0 0 14px"
  },
  h3: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--ops-ink-2)",
    margin: "26px 0 10px",
    letterSpacing: ".01em"
  }
};
function Row({
  when,
  rel,
  dot,
  title,
  note,
  src,
  urgent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "78px 26px 1fr",
      gap: "0 12px",
      padding: "11px 12px",
      borderBottom: "1px solid var(--ops-line)",
      alignItems: "start",
      background: urgent ? "var(--ops-urgent-wash)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--ops-ink-2)",
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      color: "var(--ops-ink)",
      fontWeight: 600,
      fontSize: 12
    }
  }, when), rel), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 7,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: dot || "none",
    dark: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, title), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ops-ink-2)",
      marginTop: 2
    }
  }, note), src && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--ops-ink-3)",
      marginTop: 4,
      letterSpacing: ".01em"
    }
  }, src)));
}
function Aside({
  children
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--ops-panel)",
      borderLeft: "2px solid var(--ops-line)",
      padding: "12px 16px",
      marginTop: 16,
      fontSize: 12.5,
      color: "var(--ops-ink-2)",
      borderRadius: "0 6px 6px 0"
    }
  }, children);
}
function Track1() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: tbStyles.h2
  }, /*#__PURE__*/React.createElement("span", {
    style: tbStyles.track
  }, "Track 1 \xB7"), " COMING DUE"), /*#__PURE__*/React.createElement("p", {
    style: tbStyles.sub
  }, "Calendar, dated deadlines stated in mail, and scheduled-task output another item depends on. Next 90 days, one date-sorted list."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ops-line)"
    }
  }, /*#__PURE__*/React.createElement(Row, {
    urgent: true,
    when: "Jul 31",
    rel: "today",
    dot: "critical",
    title: "OpenRouter credits expire",
    note: "Notice states credits are forfeited if there is no account activity before July 31, 2026.",
    src: "Gmail \xB7 notifications@openrouter.ai \xB7 sent Jul 24"
  }), /*#__PURE__*/React.createElement(Row, {
    urgent: true,
    when: "Aug 1",
    rel: "1 day",
    dot: "warning",
    title: "Esther's medicine",
    note: "Monthly recurring all-day reminder.",
    src: "Google Calendar \xB7 primary (ftccanalytics17@gmail.com)"
  }), /*#__PURE__*/React.createElement(Row, {
    urgent: true,
    when: "Aug 2",
    rel: "2 days",
    dot: "warning",
    title: "Weekly Project Doc Sweep runs \u2014 writes PROJECT-INDEX.md",
    note: "Aug 5 is blocked until it lands.",
    src: "Scheduled tasks \xB7 \"Weekly Project Doc Sweep \u2014 Sunday 6 PM ET\""
  }), /*#__PURE__*/React.createElement(Row, {
    when: "Aug 27",
    rel: "27 days",
    dot: "critical",
    title: "Slack trial expires \u2014 algocratic workspace",
    note: "The Claude Slack connector needs a paid workspace. Decide before then: upgrade, or disable the task.",
    src: "Google Calendar \xB7 primary; corroborated by Gmail \xB7 no-reply@slack.com"
  }), /*#__PURE__*/React.createElement(Row, {
    when: "Oct 22",
    rel: "83 days",
    title: "AGNTCon + MCPCon North America \u2014 San Jose",
    note: "Event date only; no registration deadline given.",
    src: "Gmail \xB7 no-reply@linuxfoundation.org \xB7 sent Jul 22"
  })), /*#__PURE__*/React.createElement("h3", {
    style: tbStyles.h3
  }, "Open loops \u2014 no date attached"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ops-line)"
    }
  }, /*#__PURE__*/React.createElement(Row, {
    when: "7 days",
    rel: "since",
    dot: "critical",
    title: "Two deliveries failed to example.com \u2014 never read by anyone",
    note: "Placeholder addresses that were never replaced. No resend found.",
    src: "Gmail \xB7 mailer-daemon@googlemail.com \xB7 Jul 24"
  }), /*#__PURE__*/React.createElement(Row, {
    when: "31 days",
    rel: "unread",
    dot: "warning",
    title: "Andrew Norris \u2014 \"Google AI Lab experiments\"",
    note: "Still unread, no reply.",
    src: "Gmail \xB7 norrisa@faytechcc.edu \xB7 Jun 30"
  })), /*#__PURE__*/React.createElement(Aside, null, "Over the last 30 days you started ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ops-ink)"
    }
  }, "28 threads to faytechcc.edu addresses and received 0 back"), ". The channel is running one direction."));
}
function Track2() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: tbStyles.h2
  }, /*#__PURE__*/React.createElement("span", {
    style: tbStyles.track
  }, "Track 2 \xB7"), " PROJECT & DOC ACTIVITY"), /*#__PURE__*/React.createElement("p", {
    style: tbStyles.sub
  }, "The 26fa intake folder tree, plus loose files at the top level of My Drive touched in the last 7 days."), /*#__PURE__*/React.createElement(KPI, {
    dark: true,
    value: "19",
    unit: "of 121 files",
    caption: "Redundant copies across the scanned locations \u2014 16 percent. Nearly all of it sits in one folder.",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      fontSize: 11.5,
      color: "var(--ops-ink-2)",
      margin: "12px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: "var(--ops-series-1)"
    }
  }), " distinct documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: "var(--ops-series-2)"
    }
  }), " redundant copies")), /*#__PURE__*/React.createElement(StatBar, {
    dark: true,
    name: "26fa intake (folder root)",
    fig: "19 files \xB7 18 distinct \xB7 1 redundant",
    segments: [{
      pct: 94.7
    }, {
      pct: 5.3,
      color: "var(--ops-series-2)"
    }],
    note: "One repeat: the-algorithm-v2-SKILL.md saved twice, six minutes apart on Jul 28."
  }), /*#__PURE__*/React.createElement(StatBar, {
    dark: true,
    child: true,
    name: "!bartleby",
    fig: "26 files \xB7 11 distinct \xB7 15 redundant",
    segments: [{
      pct: 42.3
    }, {
      pct: 57.7,
      color: "var(--ops-series-2)"
    }],
    note: "The whole set was dropped in three times within 25 minutes on Jul 28."
  }), /*#__PURE__*/React.createElement(StatBar, {
    dark: true,
    child: true,
    name: "Spectrum dev \xB7 new",
    fig: "32 files \xB7 32 distinct \xB7 0 redundant",
    segments: [{
      pct: 100
    }],
    note: "Created today at 10:44 AM ET and filled in one pass. Versioned by name rather than by copy."
  }), /*#__PURE__*/React.createElement(StatBar, {
    dark: true,
    name: "My Drive top level \u2014 last 7 days",
    fig: "29 files \xB7 26 distinct \xB7 3 redundant",
    segments: [{
      pct: 89.7
    }, {
      pct: 10.3,
      color: "var(--ops-series-2)"
    }],
    note: "AlgoCratic Media Curriculum exists three times as separate Google Docs."
  }), /*#__PURE__*/React.createElement("h3", {
    style: tbStyles.h3
  }, "Folders idle 30+ days"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Folder", "Last modified", "Idle"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: "left",
      fontSize: 10.5,
      textTransform: "uppercase",
      letterSpacing: ".1em",
      color: "var(--ops-ink-3)",
      fontWeight: 600,
      padding: "0 10px 8px 0",
      borderBottom: "1px solid var(--ops-line)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, [["img", "2023-01-23", "1284 d"], ["slides", "2023-03-07", "1241 d"], ["dev", "2025-09-23", "310 d"], ["cts285", "2025-10-21", "282 d"], ["prof-dev", "2026-06-05", "55 d"]].map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 10px 7px 0",
      borderBottom: "1px solid var(--ops-line)",
      color: "var(--ops-ink)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 10px 7px 0",
      borderBottom: "1px solid var(--ops-line)",
      color: "var(--ops-ink-2)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 10px 7px 0",
      borderBottom: "1px solid var(--ops-line)",
      color: "var(--ops-ink-2)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, r[2]))))), /*#__PURE__*/React.createElement(Aside, null, "22 of the 26 top-level folders read as idle. Caveat: a folder's modified time is the folder record's own \u2014 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ops-ink)"
    }
  }, "cts285"), " at 282 days is the clearest case; the work moved to 26fa intake."));
}
function Honesty() {
  const p = {
    margin: "0 0 11px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ops-panel)",
      border: "1px solid var(--ops-line)",
      borderRadius: 8,
      padding: "20px 22px",
      fontSize: 13,
      color: "var(--ops-ink-2)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...tbStyles.h2,
      marginBottom: 12
    }
  }, "WHAT IS MEASURED, AND HOW FAR TO TRUST IT"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ops-ink)"
    }
  }, "Sample data: none."), " Every figure on this page came from a live call to Google Calendar, Gmail, Google Drive, or the scheduled-task list during this run."), /*#__PURE__*/React.createElement("p", {
    style: p
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ops-ink)"
    }
  }, "Redundancy is filename-based, not byte-level."), " Contents were never compared. Two files with the same name may differ; two files with different names may be identical."), /*#__PURE__*/React.createElement("p", {
    style: p
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ops-ink)"
    }
  }, "Any duplicate inferred from file size is inferred."), " That is a hypothesis worth one minute of checking, not a finding."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ops-ink)"
    }
  }, "Notion: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ops-ok)",
      fontWeight: 600
    }
  }, "this changed.")), " A search for \"project\" now returns real pages. First run where Notion holds something worth reading."));
}
function App() {
  const [tab, setTab] = React.useState("Track 1 · Coming due");
  const tabs = ["Track 1 · Coming due", "Track 2 · Docs", "Honesty box"];
  return /*#__PURE__*/React.createElement("div", {
    style: tbStyles.wrap
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--ops-line)",
      paddingBottom: 18,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 23,
      letterSpacing: "-.01em",
      fontWeight: 600
    }
  }, "Teacherbot \u2014 live dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--ops-ink-3)",
      letterSpacing: ".02em"
    }
  }, "Data pulled Fri Jul 31 2026, 7:11 AM America/New_York")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      borderBottom: "1px solid var(--ops-line)",
      marginBottom: 24
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      appearance: "none",
      background: "none",
      border: "none",
      borderBottom: `2px solid ${t === tab ? "var(--ops-series-1)" : "transparent"}`,
      marginBottom: -1,
      padding: "8px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: t === tab ? "var(--ops-ink)" : "var(--ops-ink-3)",
      cursor: "pointer"
    }
  }, t))), tab === tabs[0] && /*#__PURE__*/React.createElement(Track1, null), tab === tabs[1] && /*#__PURE__*/React.createElement(Track2, null), tab === tabs[2] && /*#__PURE__*/React.createElement(Honesty, null), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 40,
      paddingTop: 16,
      borderTop: "1px solid var(--ops-line)",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--ops-ink-3)"
    }
  }, "Sources this run \u2014 Google Calendar (primary), Gmail (search_threads, 4 queries), Google Drive (search_files, 8 queries), Claude scheduled tasks (88 tasks). Counts asserted before render: distinct + redundant == files."));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teacherbot/Teacherbot.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.BANDS = __ds_scope.BANDS;

__ds_ns.ClearanceBadge = __ds_scope.ClearanceBadge;

__ds_ns.ClearanceLadder = __ds_scope.ClearanceLadder;

__ds_ns.LadderHinge = __ds_scope.LadderHinge;

__ds_ns.FinePrint = __ds_scope.FinePrint;

__ds_ns.StripeRail = __ds_scope.StripeRail;

__ds_ns.PrismRail = __ds_scope.PrismRail;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KPI = __ds_scope.KPI;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
