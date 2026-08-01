import React from "react";
export function Card({spine,tag,title,footer,children,style}){
 return <div style={{position:"relative",overflow:"hidden",background:"var(--surface-card)",border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",padding:"17px 19px",boxShadow:"var(--shadow-card)",fontFamily:"var(--font-sans)",...style}}>
  {spine&&<i style={{position:"absolute",left:0,top:0,bottom:0,width:4,background:spine}}></i>}
  {tag&&<span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-secondary)",letterSpacing:".04em",display:"block",marginBottom:9}}>{tag}</span>}
  {title&&<h3 style={{margin:"0 0 6px",fontSize:16.5,fontWeight:600,color:"var(--text-body)"}}>{title}</h3>}
  <div style={{fontSize:14.2,lineHeight:1.55,color:"#26282B"}}>{children}</div>
  {footer&&<div style={{marginTop:11,paddingTop:9,borderTop:"1px dashed var(--border-hairline)",fontSize:12.5,color:"var(--text-secondary)"}}>{footer}</div>}
 </div>;
}
