import React from "react";
export function Tooltip({label,children}){
 const[on,setOn]=React.useState(false);
 return <span style={{position:"relative",display:"inline-block"}} onMouseEnter={()=>setOn(true)} onMouseLeave={()=>setOn(false)}>
  {children}
  {on&&<span style={{position:"absolute",bottom:"calc(100% + 7px)",left:"50%",transform:"translateX(-50%)",background:"var(--af-ink)",color:"var(--af-cream)",fontFamily:"var(--font-sans)",fontSize:11.5,lineHeight:1.4,padding:"5px 9px",borderRadius:"var(--radius-xs)",whiteSpace:"nowrap",zIndex:40}}>{label}</span>}
 </span>;
}
