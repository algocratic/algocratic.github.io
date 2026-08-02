import React from "react";
export function Input({label,hint,mono,style,...rest}){
 const[f,setF]=React.useState(false);
 return <label style={{display:"block",fontFamily:"var(--font-sans)",...style}}>
  {label&&<span style={{display:"block",fontSize:11.5,fontWeight:600,letterSpacing:".09em",textTransform:"uppercase",color:"var(--text-secondary)",marginBottom:5}}>{label}</span>}
  <input onFocus={()=>setF(true)} onBlur={()=>setF(false)}
   style={{width:"100%",boxSizing:"border-box",fontFamily:mono?"var(--font-mono)":"var(--font-sans)",fontSize:mono?13:14.5,padding:"8px 11px",borderRadius:"var(--radius-sm)",border:`1px solid ${f?"var(--af-navy)":"var(--border-hairline)"}`,outline:"none",background:"var(--surface-card)",color:"var(--text-body)",boxShadow:f?"0 0 0 3px rgba(22,48,95,.12)":"none",transition:"border-color var(--dur-fast), box-shadow var(--dur-fast)"}} {...rest}/>
  {hint&&<span style={{display:"block",fontFamily:"var(--font-mono)",fontSize:10.5,color:"var(--text-secondary)",marginTop:4}}>{hint}</span>}
 </label>;
}
