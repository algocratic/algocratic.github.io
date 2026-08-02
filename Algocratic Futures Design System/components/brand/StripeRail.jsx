import React from "react";
export function StripeRail({height=26,angle=-20,gap=5,width="100%",style}){
 const cs=["var(--stripe-1)","var(--stripe-2)","var(--stripe-3)","var(--stripe-4)","var(--stripe-5)"];
 return <div style={{height,width,display:"flex",gap,transform:`skewX(${angle}deg)`,...style}}>
  {cs.map(c=><i key={c} style={{flex:1,background:c,display:"block"}}></i>)}
 </div>;
}
export function PrismRail({height=8,style}){
 return <div style={{height,borderRadius:height/2,background:"var(--prism-rail)",...style}}></div>;
}
