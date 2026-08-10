import React from "react";
export const BANDS={INFRARED:{c:"var(--prism-infrared)",fg:"#fff"},RED:{c:"var(--prism-red)",fg:"#fff"},ORANGE:{c:"var(--prism-orange)",fg:"#fff"},YELLOW:{c:"var(--prism-yellow)",fg:"#3A2D00"},GREEN:{c:"var(--prism-green)",fg:"#fff"},BLUE:{c:"var(--prism-blue)",fg:"#fff"},INDIGO:{c:"var(--prism-indigo)",fg:"#fff"},VIOLET:{c:"var(--prism-violet)",fg:"#fff"},ULTRAVIOLET:{c:"var(--prism-ultraviolet)",fg:"#fff"},GRAY:{c:"var(--prism-gray)",fg:"#fff"}};
export function ClearanceBadge({band="GRAY",outline,style}){
 const b=BANDS[band]||BANDS.GRAY;
 return <span style={{display:"inline-block",fontFamily:"var(--font-sans)",fontWeight:600,fontSize:12,letterSpacing:".06em",padding:"3px 11px",borderRadius:"var(--radius-xs)",background:outline?"transparent":b.c,color:outline?b.c:b.fg,border:`1.5px solid ${b.c}`,...style}}>{band}</span>;
}
