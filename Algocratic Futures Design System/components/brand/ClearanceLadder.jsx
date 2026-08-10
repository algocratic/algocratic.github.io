import React from "react";
import {BANDS} from "./ClearanceBadge.jsx";
export function ClearanceLadder({rungs=[],style}){
 const[hov,setHov]=React.useState(-1);
 return <div style={{display:"flex",flexDirection:"column",gap:8,fontFamily:"var(--font-sans)",...style}}>
  {rungs.map((r,i)=>{const b=BANDS[r.band]||BANDS.GRAY;
   return <div key={r.band+i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(-1)}
    style={{display:"flex",alignItems:"stretch",border:`1px ${r.edge?"dashed":"solid"} var(--border-hairline)`,borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--surface-card)",boxShadow:hov===i?"-3px 0 0 0 var(--af-gold)":"none",transition:"box-shadow .16s ease"}}>
    <div style={{flex:"0 0 150px",padding:"13px 15px",background:b.c,color:b.fg,display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>
     <span style={{fontSize:15,fontWeight:600,letterSpacing:".05em"}}>{r.band}</span>
     {r.role&&<span style={{fontSize:12.5,opacity:.95,lineHeight:1.2}}>{r.role}</span>}
    </div>
    <div style={{flex:1,padding:"12px 16px",fontSize:14.2,display:"flex",flexDirection:"column",justifyContent:"center",gap:6}}>
     <span>{r.does}</span>
     {r.chips&&<span style={{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"}}>
      <span style={{fontSize:11.5,fontWeight:600,letterSpacing:".04em",textTransform:"uppercase",color:"var(--text-secondary)"}}>Module Zero +</span>
      {r.chips.map(c=><span key={c} style={{fontSize:12.5,padding:"3px 9px",borderRadius:7,background:"#F1F0EC",color:"#3F4145"}}>{c}</span>)}
     </span>}
    </div>
    {r.banks&&<div style={{flex:"0 0 34%",padding:"12px 16px",fontSize:13,color:"var(--text-secondary)",display:"flex",alignItems:"center",borderLeft:"1px solid #F0EFEC"}}>{r.banks}</div>}
   </div>;})}
 </div>;
}
export function LadderHinge({children="green is the ship-it pivot · makers below · orchestrators above · same ladder, wider scope"}){
 return <div style={{display:"flex",alignItems:"center",gap:10,margin:"3px 0",padding:"7px 14px",fontSize:12,fontWeight:500,color:"var(--text-secondary)",borderTop:"1px dashed var(--border-hairline)",borderBottom:"1px dashed var(--border-hairline)",fontFamily:"var(--font-sans)"}}>
  <i style={{flex:"0 0 10px",height:10,borderRadius:"50%",background:"var(--prism-green)"}}></i>{children}
 </div>;
}
