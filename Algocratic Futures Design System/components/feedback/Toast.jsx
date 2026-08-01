import React from "react";
const T={info:"var(--prism-blue)",success:"var(--prism-green)",warning:"var(--prism-yellow)",danger:"var(--prism-red)"};
export function Toast({tone="info",title,children,style}){
 return <div style={{display:"flex",gap:12,alignItems:"flex-start",background:"var(--af-charcoal)",color:"var(--af-cream)",borderRadius:"var(--radius-md)",borderLeft:`4px solid ${T[tone]||T.info}`,padding:"12px 16px",fontFamily:"var(--font-sans)",maxWidth:420,boxShadow:"var(--shadow-pop)",...style}}>
  <div>
   {title&&<div style={{fontWeight:700,fontSize:13.5,marginBottom:2}}>{title}</div>}
   <div style={{fontSize:12.8,lineHeight:1.5,color:"#C9CED8"}}>{children}</div>
  </div>
 </div>;
}
