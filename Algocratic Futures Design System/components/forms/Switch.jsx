import React from "react";
export function Switch({checked,onChange,label,style}){
 return <label style={{display:"inline-flex",alignItems:"center",gap:10,fontFamily:"var(--font-sans)",fontSize:14,cursor:"pointer",...style}} onClick={()=>onChange&&onChange(!checked)}>
  <span style={{width:34,height:19,borderRadius:999,background:checked?"var(--prism-green)":"#C6C9CE",position:"relative",transition:"background var(--dur-med) var(--ease-brand)",flex:"0 0 34px"}}>
   <i style={{position:"absolute",top:2,left:checked?17:2,width:15,height:15,borderRadius:"50%",background:"#fff",transition:"left var(--dur-med) var(--ease-brand)",boxShadow:"0 1px 2px rgba(13,27,42,.25)"}}></i>
  </span>{label}
 </label>;
}
