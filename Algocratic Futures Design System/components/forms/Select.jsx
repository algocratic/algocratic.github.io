import React from "react";
export function Select({label,options=[],style,...rest}){
 return <label style={{display:"block",fontFamily:"var(--font-sans)",...style}}>
  {label&&<span style={{display:"block",fontSize:11.5,fontWeight:600,letterSpacing:".09em",textTransform:"uppercase",color:"var(--text-secondary)",marginBottom:5}}>{label}</span>}
  <select style={{width:"100%",fontFamily:"var(--font-sans)",fontSize:14.5,padding:"8px 11px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-hairline)",background:"var(--surface-card)",color:"var(--text-body)",outline:"none"}} {...rest}>
   {options.map(o=>typeof o==="string"?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}
  </select>
 </label>;
}
