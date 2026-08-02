const {DataTable,Badge,ClearanceLadder,Card,PrismRail,BrandMark}=window.AlgocraticFuturesDesignSystem_7c8cb8;
const docStyles={
 page:{width:"min(920px,94vw)",margin:"22px auto",background:"var(--af-paper)",color:"var(--text-body)",boxShadow:"0 10px 34px rgba(0,0,0,.35)",padding:"56px 64px 110px",boxSizing:"border-box",minHeight:820,position:"relative"},
 kick:{fontStyle:"italic",fontWeight:600,fontSize:12,letterSpacing:".06em",textTransform:"uppercase",color:"var(--af-slate)"},
 display:{fontFamily:"var(--font-display)",fontWeight:400,color:"var(--af-ink)",lineHeight:1.2},
 h2:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:26,color:"var(--af-navy)",margin:"0 0 18px"},
 h3:{fontFamily:"var(--font-display)",fontSize:15,fontWeight:400,color:"var(--af-slate)",margin:"28px 0 10px",letterSpacing:".04em"},
 body:{fontSize:15,lineHeight:1.65,color:"#26282B",margin:"0 0 12px"},
 ghost:{position:"absolute",bottom:26,left:64,right:110,fontFamily:"var(--font-display)",fontSize:12,color:"rgba(83,86,90,.28)",letterSpacing:".03em"},
};
function PageNum({n}){
 return <div style={{position:"absolute",bottom:16,right:40,width:44,height:44}}>
  <BrandMark mark="heptagram" height={44} base="../../"/>
  <span style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-mono)",fontSize:11,fontWeight:700,color:"var(--af-ink)"}}>{n}</span>
 </div>;
}
function Cover(){
 return <div style={docStyles.page}>
  <div style={{display:"flex",justifyContent:"flex-end"}}><BrandMark mark="logo-eye" height={54} base="../../"/></div>
  <div style={{textAlign:"right",fontStyle:"italic",fontWeight:600,fontSize:12.5,letterSpacing:".05em",color:"var(--af-slate)",marginTop:10}}>ALGOCRATIC FUTURES™ · INSTITUTIONAL EFFECTIVENESS DIVISION</div>
  <h1 style={{...docStyles.display,fontSize:44,margin:"170px 0 0"}}>CITIZEN PERFORMANCE TRAJECTORY ANALYSIS</h1>
  <hr style={{border:"none",borderTop:"2px solid var(--af-navy)",margin:"22px 0"}}/>
  <div style={{fontWeight:700,fontSize:24,color:"var(--af-navy)"}}>Spring 2026 · Full Compliance Documentation</div>
  <div style={{fontStyle:"italic",fontSize:14,color:"var(--af-slate)",marginTop:8}}>Objectives Assigned: 3 · Objectives Completed: 4 · Variance: Documented</div>
  <div style={{marginTop:96,display:"grid",gap:8}}>{[26,7,12,5,9,4].map((h,i)=><div key={i} style={{height:h,background:"var(--af-navy-deep)"}}></div>)}</div>
  <p style={{position:"absolute",bottom:30,left:64,right:64,margin:0,textAlign:"right",fontStyle:"italic",fontSize:10.5,lineHeight:1.6,color:"var(--af-slate)"}}>Produced in cooperation with the Office of Retroactive Objective Assignment, the Bureau of Discrepancy Reconciliation, and the Division of Documenting Things That Should Have Been Obvious. Special thanks to the Committee for Deciding Whether This Counts, which met once and reached no consensus.</p>
 </div>;
}
function Deliverables(){
 return <div style={docStyles.page}>
  <h2 style={docStyles.h2}>Key Deliverables</h2>
  <DataTable columns={["Deliverable","Status","Institutional function"]} rows={[
   ["AlgoCratic Futures™ world and clearance system",<Badge tone="success">Complete</Badge>,"Identity / environment architecture"],
   ["CTS 285 full assignment library",<Badge tone="success">Complete</Badge>,"Capability curriculum, INFRARED–YELLOW"],
   ["Sacred Workflow™ documentation",<Badge tone="success">Complete</Badge>,"Behavior-level norm embedding"],
   ["System 1: Flask app, auth, context injection, logging",<Badge tone="info">Built & deployed</Badge>,"Per-group AI access infrastructure"],
   ["Growth gamification system (GitHub Actions + METRICS.md)",<Badge tone="warning">In progress</Badge>,"Learning velocity measurement"],
   ["GRAY Clearance instructional design onboarding brief",<Badge tone="success">Complete</Badge>,"Cross-disciplinary integration"],
   ["AlgoCratic GitHub Pages site",<Badge tone="warning">In progress</Badge>,"Public-facing program identity"],
  ]}/>
  <h3 style={docStyles.h3}>RUBRIC STRUCTURE</h3>
  <DataTable columns={["Category","Points","What it measures"]} rows={[
   ["Communication Quality","20","Clarity of briefs, responsiveness, professionalism, documentation completeness"],
   ["Deliverable Integration","25","Technical spec adherence, asset quality, integration success, fidelity"],
   ["Collaboration Process","20","Milestone adherence, iteration responsiveness, problem-solving approach"],
   ["Final Product Quality","35","UX enhancement, professional polish, technical implementation, completeness"],
  ]}/>
  <p style={docStyles.ghost}>All paths lead to optimization. Even the wrong ones. Especially the wrong ones.</p>
  <PageNum n="11"/>
 </div>;
}
function Plan(){
 return <div style={docStyles.page}>
  <p style={{fontFamily:"var(--font-doc-sans)",fontSize:12,fontWeight:600,letterSpacing:".15em",textTransform:"uppercase",color:"var(--af-slate)",margin:"0 0 12px"}}><b style={{color:"var(--prism-ultraviolet)"}}>ULTRAVIOLET</b> · plan of action · 2026-07-30</p>
  <h1 style={{fontFamily:"var(--font-doc-serif)",fontWeight:600,fontSize:46,lineHeight:1,letterSpacing:"-.015em",margin:0,color:"var(--af-ink)"}}>The Algorithm<span style={{color:"var(--af-gold)",fontStyle:"italic",padding:"0 .12em"}}>×</span>The Estate</h1>
  <p style={{fontFamily:"var(--font-doc-serif)",fontSize:18,color:"var(--af-slate)",maxWidth:"64ch",margin:"16px 0 0",lineHeight:1.5}}>Two systems built in different rooms, for different reasons, arriving at the same discipline. The plan is not to integrate them. It is to stop pretending they are two things.</p>
  <PrismRail style={{margin:"24px 0 26px"}}/>
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
   <Card spine="var(--prism-ultraviolet)" tag="MOVE 01 · this week" title="Adopt one vocabulary" footer={<span><b>Owner:</b> Neo · <b>Cost:</b> one editing pass over six prompts</span>}>Stop maintaining two dialects of the same discipline. The estate speaks Algorithm.</Card>
   <Card spine="var(--prism-indigo)" tag="MOVE 02 · the real prize" title="Probe the seats" footer={<span><b>Owner:</b> Auditor · <b>Blocked on:</b> the Almanac fault</span>}>Turn SEATS.md from priors into evidence. The estate is the only thing in either system that wakes up on its own.</Card>
  </div>
  <h3 style={{...docStyles.h3,fontFamily:"var(--font-doc-serif)",fontSize:22,color:"var(--af-ink)",letterSpacing:"-.01em",textTransform:"none"}}>The Algorithm on the PRISM ladder</h3>
  <ClearanceLadder rungs={[
   {band:"GREEN",does:<span><b>Ships from a frozen contract.</b> Executes exactly; never re-optimizes past the gate.</span>,banks:"banks: deployed product + its contract"},
   {band:"YELLOW",does:"Runs ASSAY on a peer's document. Locates the operative sentence.",banks:"banks: an assay + a mentoring case"},
   {band:"ORANGE",does:"Handles gaps under ambiguity — three or fewer asked, the rest stated as assumptions.",banks:"banks: ADRs + a gap log"},
   {band:"RED",does:"Runs one PROVIDE pass solo. Produces a real cut log.",banks:"banks: first frozen contract + PR trail"},
  ]}/>
  <p style={{fontFamily:"var(--font-doc-serif)",fontSize:19,lineHeight:1.4,margin:"26px 0 0",padding:"0 0 0 22px",borderLeft:"4px solid var(--af-gold)",color:"var(--af-ink)"}}>The string is a checksum. The invariant is not the string — it is that a human bears the cost of saying it.<cite style={{display:"block",fontFamily:"var(--font-doc-sans)",fontSize:13,fontStyle:"normal",color:"var(--af-slate)",marginTop:10,letterSpacing:".03em"}}>SKILL.md · Invariants</cite></p>
  <p style={docStyles.ghost}>The Algorithm provides. Everything you need. Nothing you want.</p>
  <PageNum n="20"/>
 </div>;
}
function App(){
 const pages=["Cover","Key Deliverables","Plan of Action"];
 const[p,setP]=React.useState(0);
 return <div style={{paddingBottom:30}}>
  <div style={{position:"sticky",top:0,zIndex:10,display:"flex",gap:2,justifyContent:"center",padding:"12px 0",background:"rgba(43,47,54,.92)"}}>
   {pages.map((t,i)=><button key={t} onClick={()=>setP(i)} style={{appearance:"none",border:"none",borderRadius:5,padding:"7px 15px",fontFamily:"var(--font-sans)",fontSize:12.5,fontWeight:600,cursor:"pointer",background:i===p?"var(--af-gold)":"transparent",color:i===p?"var(--af-ink)":"var(--af-cream)"}}>{t}</button>)}
  </div>
  {p===0&&<Cover/>}{p===1&&<Deliverables/>}{p===2&&<Plan/>}
 </div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
