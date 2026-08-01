import React from "react";
export function FinePrint({slogan="THE ALGORITHM PROVIDES.",children,dark=true,style}){
 return <div style={{fontFamily:"var(--font-sans)",background:dark?"var(--af-charcoal)":"transparent",color:dark?"var(--af-cream)":"var(--text-body)",padding:dark?"16px 20px":"0",...style}}>
  {slogan&&<div style={{fontFamily:"var(--font-display)",fontSize:13,letterSpacing:".03em"}}>{slogan}</div>}
  <div style={{marginTop:8,paddingTop:8,borderTop:`1px solid ${dark?"rgba(242,236,217,.25)":"var(--border-hairline)"}`,fontSize:9.5,lineHeight:1.55,fontStyle:"italic",color:dark?"#A8AEB9":"var(--text-secondary)"}}>{children}</div>
 </div>;
}
