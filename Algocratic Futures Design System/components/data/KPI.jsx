import React from "react";
export function KPI({value,unit,caption,dark,style}){
 return <div style={{background:dark?"var(--ops-panel)":"var(--surface-card)",border:`1px solid ${dark?"var(--ops-line)":"var(--border-hairline)"}`,borderRadius:"var(--radius-md)",padding:"18px 20px",fontFamily:"var(--font-sans)",...style}}>
  <div style={{fontSize:34,fontWeight:600,letterSpacing:"-.02em",lineHeight:1,color:dark?"var(--ops-ink)":"var(--text-body)"}}>{value}{unit&&<small style={{fontSize:16,color:dark?"var(--ops-ink-3)":"var(--text-secondary)",fontWeight:400}}> {unit}</small>}</div>
  {caption&&<div style={{fontSize:12.5,color:dark?"var(--ops-ink-2)":"var(--text-secondary)",marginTop:6}}>{caption}</div>}
 </div>;
}
