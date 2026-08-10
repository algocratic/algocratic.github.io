import React from "react";
export function StatBar({name,fig,note,segments=[],child,dark,style}){
 const ink=dark?"var(--ops-ink)":"var(--text-body)",ink3=dark?"var(--ops-ink-3)":"var(--text-secondary)";
 return <div style={{padding:"10px 0",borderBottom:`1px solid ${dark?"var(--ops-line)":"var(--border-hairline)"}`,paddingLeft:child?22:0,borderLeft:child?`1px solid ${dark?"var(--ops-line)":"var(--border-hairline)"}`:"none",marginLeft:child?6:0,fontFamily:"var(--font-sans)",...style}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,marginBottom:6}}>
   <span style={{fontSize:13.5,fontWeight:500,color:ink}}>{name}</span>
   {fig&&<span style={{fontFamily:"var(--font-mono)",fontSize:11,color:ink3,whiteSpace:"nowrap"}}>{fig}</span>}
  </div>
  <div style={{display:"flex",height:9,borderRadius:5,overflow:"hidden",background:dark?"var(--ops-panel-2)":"#EDECE8"}}>
   {segments.map((s,i)=><i key={i} style={{display:"block",height:"100%",width:`${s.pct}%`,background:s.color||"var(--ops-series-1)"}}></i>)}
  </div>
  {note&&<div style={{fontSize:12,color:dark?"var(--ops-ink-2)":"var(--text-secondary)",marginTop:6}}>{note}</div>}
 </div>;
}
