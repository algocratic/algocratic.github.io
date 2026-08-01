import React from "react";
export function Dialog({open,title,kicker,onClose,actions,children}){
 if(!open)return null;
 return <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(13,27,42,.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50}}>
  <div onClick={e=>e.stopPropagation()} style={{width:"min(480px,92vw)",background:"var(--surface-card)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-pop)",padding:"22px 24px",fontFamily:"var(--font-sans)"}}>
   {kicker&&<div style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-secondary)",letterSpacing:".05em",marginBottom:6}}>{kicker}</div>}
   {title&&<h2 style={{margin:"0 0 10px",fontSize:19,fontWeight:700,color:"var(--text-heading)"}}>{title}</h2>}
   <div style={{fontSize:14.3,lineHeight:1.55,color:"#26282B"}}>{children}</div>
   {actions&&<div style={{display:"flex",justifyContent:"flex-end",gap:10,marginTop:18}}>{actions}</div>}
  </div>
 </div>;
}
