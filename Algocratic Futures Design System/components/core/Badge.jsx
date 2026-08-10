import React from "react";
const C={neutral:["var(--af-paper-2)","var(--af-slate)","var(--af-silver)"],info:["#EAF2FA","var(--prism-blue)","#CBDFF2"],success:["#EAF6EC","var(--prism-green)","#CBE8D1"],warning:["#FCF4DC","#8A6A0E","#F2E2AC"],danger:["#FDECEC","var(--prism-red)","#F5C9C9"],navy:["var(--af-navy)","#fff","var(--af-navy)"]};
export function Badge({tone="neutral",children,style}){
 const[bg,fg,bd]=C[tone]||C.neutral;
 return <span style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-sans)",fontWeight:600,fontSize:11,letterSpacing:".04em",textTransform:"uppercase",padding:"2px 9px",borderRadius:"var(--radius-xs)",background:bg,color:fg,border:`1px solid ${bd}`,...style}}>{children}</span>;
}
