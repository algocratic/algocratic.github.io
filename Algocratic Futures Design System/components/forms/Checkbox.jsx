import React from "react";
function Box({on,shape}){
 return <span style={{width:16,height:16,flex:"0 0 16px",borderRadius:shape==="circle"?"50%":4,border:`1px solid ${on?"var(--af-navy)":"#B9BCC2"}`,background:on?"var(--af-navy)":"var(--surface-card)",display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background var(--dur-fast)"}}>
  {on&&(shape==="circle"?<i style={{width:6,height:6,borderRadius:"50%",background:"#fff"}}></i>:<svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5.2 4 7.7 8.5 2.6" fill="none" stroke="#fff" strokeWidth="1.8"/></svg>)}
 </span>;
}
export function Checkbox({checked,onChange,label,style}){
 return <label style={{display:"inline-flex",alignItems:"center",gap:9,fontFamily:"var(--font-sans)",fontSize:14,cursor:"pointer",...style}} onClick={()=>onChange&&onChange(!checked)}><Box on={checked}/>{label}</label>;
}
export function Radio({checked,onChange,label,style}){
 return <label style={{display:"inline-flex",alignItems:"center",gap:9,fontFamily:"var(--font-sans)",fontSize:14,cursor:"pointer",...style}} onClick={()=>onChange&&onChange(true)}><Box on={checked} shape="circle"/>{label}</label>;
}
