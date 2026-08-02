import React from "react";
const S={critical:"var(--ops-crit)",warning:"var(--ops-warn)",ok:"var(--ops-ok)",none:"transparent"};
export function StatusDot({status="none",dark,style}){
 return <i style={{display:"inline-block",width:8,height:8,borderRadius:"50%",background:S[status]||S.none,border:`1px solid ${status==="none"?(dark?"var(--ops-line)":"var(--border-hairline)"):S[status]}`,...style}}></i>;
}
