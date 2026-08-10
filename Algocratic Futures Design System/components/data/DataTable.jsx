import React from "react";
export function DataTable({columns=[],rows=[],style}){
 return <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"var(--font-sans)",fontSize:14,...style}}>
  <thead><tr>{columns.map(c=><th key={c} style={{textAlign:"left",background:"var(--af-navy)",color:"#fff",fontFamily:"var(--font-display)",fontWeight:400,fontSize:10.5,letterSpacing:".12em",textTransform:"uppercase",padding:"9px 14px"}}>{c}</th>)}</tr></thead>
  <tbody>{rows.map((r,i)=><tr key={i} style={{background:i%2?"var(--surface-tint)":"var(--surface-card)"}}>
   {r.map((cell,j)=><td key={j} style={{padding:"10px 14px",borderBottom:"1px solid #ECEBE7",verticalAlign:"top",lineHeight:1.45,color:"#26282B"}}>{cell}</td>)}
  </tr>)}</tbody>
 </table>;
}
