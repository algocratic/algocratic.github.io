import React from "react";
export function Tabs({tabs=[],active,onChange,style}){
 return <div style={{display:"flex",gap:2,borderBottom:"1px solid var(--border-hairline)",fontFamily:"var(--font-sans)",...style}}>
  {tabs.map(t=>{const on=t===active;
   return <button key={t} onClick={()=>onChange&&onChange(t)}
    style={{appearance:"none",background:"none",border:"none",borderBottom:`2px solid ${on?"var(--af-navy)":"transparent"}`,marginBottom:-1,padding:"8px 14px",fontFamily:"inherit",fontSize:13.5,fontWeight:600,letterSpacing:".02em",color:on?"var(--af-navy)":"var(--text-secondary)",cursor:"pointer"}}>{t}</button>;})}
 </div>;
}
