import React from "react";
const M={"logo-eye":"AF_Logo_Eye","logo-alx":"AF_Logo_AL-X",lettermark:"AF_Lettermark",eye:"AF_A_Eye","eye-notcult":"AF_A_Eye_NotCult",alx:"AF_AL-X",heptagram:"Heptagram_Black","heptagram-gradient":"Heptagram_Gradient","heptagram-flow":"Heptagram_FlowChart"};
export function BrandMark({mark="logo-eye",height=48,base="",invert,style}){
 const stem=M[mark]||M["logo-eye"];
 return <img src={`${base}assets/brand/${stem}.png`} height={height} alt={stem}
  style={{display:"block",filter:invert?"invert(1)":"none",...style}}/>;
}
