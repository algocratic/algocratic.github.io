import React from "react";
const V={
 primary:{bg:"var(--af-navy)",bgH:"var(--af-navy-deep)",fg:"#fff",bd:"transparent"},
 secondary:{bg:"var(--af-paper)",bgH:"var(--af-paper-2)",fg:"var(--af-ink)",bd:"var(--af-silver)"},
 ghost:{bg:"transparent",bgH:"var(--af-paper-2)",fg:"var(--af-navy)",bd:"transparent"},
 danger:{bg:"var(--prism-red)",bgH:"#C22626",fg:"#fff",bd:"transparent"},
 gold:{bg:"var(--af-gold)",bgH:"#DDA61F",fg:"var(--af-ink)",bd:"transparent"},
};
export function Button({variant="primary",size="md",disabled,children,style,...rest}){
 const v=V[variant]||V.primary;
 const [hov,setHov]=React.useState(false),[act,setAct]=React.useState(false);
 const pad=size==="sm"?"5px 12px":"8px 18px",fs=size==="sm"?13:14.5;
 return <button disabled={disabled} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>{setHov(false);setAct(false)}} onMouseDown={()=>setAct(true)} onMouseUp={()=>setAct(false)}
  style={{fontFamily:"var(--font-sans)",fontWeight:600,fontSize:fs,padding:pad,borderRadius:"var(--radius-sm)",border:`1px solid ${v.bd}`,background:act?v.bgH:hov?v.bgH:v.bg,color:v.fg,cursor:disabled?"not-allowed":"pointer",opacity:disabled?.45:1,letterSpacing:".01em",transition:"background var(--dur-fast) var(--ease-brand)",filter:act?"brightness(.92)":"none",...style}} {...rest}>{children}</button>;
}
