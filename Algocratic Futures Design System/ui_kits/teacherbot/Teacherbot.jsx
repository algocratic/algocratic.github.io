const {KPI,StatBar,StatusDot}=window.AlgocraticFuturesDesignSystem_7c8cb8;
const tbStyles={
 wrap:{maxWidth:960,margin:"0 auto",padding:"32px 20px 72px"},
 h2:{fontSize:12,textTransform:"uppercase",letterSpacing:".13em",color:"var(--ops-ink-2)",fontWeight:600,margin:"0 0 4px"},
 track:{color:"var(--ops-ink-3)",fontWeight:400},
 sub:{fontSize:12.5,color:"var(--ops-ink-3)",margin:"0 0 14px"},
 h3:{fontSize:13,fontWeight:600,color:"var(--ops-ink-2)",margin:"26px 0 10px",letterSpacing:".01em"},
};
function Row({when,rel,dot,title,note,src,urgent}){
 return <div style={{display:"grid",gridTemplateColumns:"78px 26px 1fr",gap:"0 12px",padding:"11px 12px",borderBottom:"1px solid var(--ops-line)",alignItems:"start",background:urgent?"var(--ops-urgent-wash)":"transparent"}}>
  <div style={{fontFamily:"var(--font-mono)",fontSize:11.5,color:"var(--ops-ink-2)",paddingTop:2}}><b style={{display:"block",color:"var(--ops-ink)",fontWeight:600,fontSize:12}}>{when}</b>{rel}</div>
  <div style={{paddingTop:7,textAlign:"center"}}><StatusDot status={dot||"none"} dark/></div>
  <div>
   <div style={{fontSize:14,fontWeight:500}}>{title}</div>
   {note&&<div style={{fontSize:12.5,color:"var(--ops-ink-2)",marginTop:2}}>{note}</div>}
   {src&&<div style={{fontFamily:"var(--font-mono)",fontSize:10.5,color:"var(--ops-ink-3)",marginTop:4,letterSpacing:".01em"}}>{src}</div>}
  </div>
 </div>;
}
function Aside({children}){
 return <aside style={{background:"var(--ops-panel)",borderLeft:"2px solid var(--ops-line)",padding:"12px 16px",marginTop:16,fontSize:12.5,color:"var(--ops-ink-2)",borderRadius:"0 6px 6px 0"}}>{children}</aside>;
}
function Track1(){
 return <section>
  <h2 style={tbStyles.h2}><span style={tbStyles.track}>Track 1 ·</span> COMING DUE</h2>
  <p style={tbStyles.sub}>Calendar, dated deadlines stated in mail, and scheduled-task output another item depends on. Next 90 days, one date-sorted list.</p>
  <div style={{borderTop:"1px solid var(--ops-line)"}}>
   <Row urgent when="Jul 31" rel="today" dot="critical" title="OpenRouter credits expire" note="Notice states credits are forfeited if there is no account activity before July 31, 2026." src="Gmail · notifications@openrouter.ai · sent Jul 24"/>
   <Row urgent when="Aug 1" rel="1 day" dot="warning" title="Esther's medicine" note="Monthly recurring all-day reminder." src="Google Calendar · primary (ftccanalytics17@gmail.com)"/>
   <Row urgent when="Aug 2" rel="2 days" dot="warning" title="Weekly Project Doc Sweep runs — writes PROJECT-INDEX.md" note="Aug 5 is blocked until it lands." src='Scheduled tasks · "Weekly Project Doc Sweep — Sunday 6 PM ET"'/>
   <Row when="Aug 27" rel="27 days" dot="critical" title="Slack trial expires — algocratic workspace" note="The Claude Slack connector needs a paid workspace. Decide before then: upgrade, or disable the task." src="Google Calendar · primary; corroborated by Gmail · no-reply@slack.com"/>
   <Row when="Oct 22" rel="83 days" title="AGNTCon + MCPCon North America — San Jose" note="Event date only; no registration deadline given." src="Gmail · no-reply@linuxfoundation.org · sent Jul 22"/>
  </div>
  <h3 style={tbStyles.h3}>Open loops — no date attached</h3>
  <div style={{borderTop:"1px solid var(--ops-line)"}}>
   <Row when="7 days" rel="since" dot="critical" title="Two deliveries failed to example.com — never read by anyone" note="Placeholder addresses that were never replaced. No resend found." src="Gmail · mailer-daemon@googlemail.com · Jul 24"/>
   <Row when="31 days" rel="unread" dot="warning" title='Andrew Norris — "Google AI Lab experiments"' note="Still unread, no reply." src="Gmail · norrisa@faytechcc.edu · Jun 30"/>
  </div>
  <Aside>Over the last 30 days you started <b style={{color:"var(--ops-ink)"}}>28 threads to faytechcc.edu addresses and received 0 back</b>. The channel is running one direction.</Aside>
 </section>;
}
function Track2(){
 return <section>
  <h2 style={tbStyles.h2}><span style={tbStyles.track}>Track 2 ·</span> PROJECT &amp; DOC ACTIVITY</h2>
  <p style={tbStyles.sub}>The 26fa intake folder tree, plus loose files at the top level of My Drive touched in the last 7 days.</p>
  <KPI dark value="19" unit="of 121 files" caption="Redundant copies across the scanned locations — 16 percent. Nearly all of it sits in one folder." style={{marginBottom:20}}/>
  <div style={{display:"flex",gap:18,fontSize:11.5,color:"var(--ops-ink-2)",margin:"12px 0 4px"}}>
   <span style={{display:"flex",alignItems:"center",gap:6}}><i style={{width:10,height:10,borderRadius:2,background:"var(--ops-series-1)"}}></i> distinct documents</span>
   <span style={{display:"flex",alignItems:"center",gap:6}}><i style={{width:10,height:10,borderRadius:2,background:"var(--ops-series-2)"}}></i> redundant copies</span>
  </div>
  <StatBar dark name="26fa intake (folder root)" fig="19 files · 18 distinct · 1 redundant" segments={[{pct:94.7},{pct:5.3,color:"var(--ops-series-2)"}]} note="One repeat: the-algorithm-v2-SKILL.md saved twice, six minutes apart on Jul 28."/>
  <StatBar dark child name="!bartleby" fig="26 files · 11 distinct · 15 redundant" segments={[{pct:42.3},{pct:57.7,color:"var(--ops-series-2)"}]} note="The whole set was dropped in three times within 25 minutes on Jul 28."/>
  <StatBar dark child name="Spectrum dev · new" fig="32 files · 32 distinct · 0 redundant" segments={[{pct:100}]} note="Created today at 10:44 AM ET and filled in one pass. Versioned by name rather than by copy."/>
  <StatBar dark name="My Drive top level — last 7 days" fig="29 files · 26 distinct · 3 redundant" segments={[{pct:89.7},{pct:10.3,color:"var(--ops-series-2)"}]} note="AlgoCratic Media Curriculum exists three times as separate Google Docs."/>
  <h3 style={tbStyles.h3}>Folders idle 30+ days</h3>
  <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
   <thead><tr>{["Folder","Last modified","Idle"].map(h=><th key={h} style={{textAlign:"left",fontSize:10.5,textTransform:"uppercase",letterSpacing:".1em",color:"var(--ops-ink-3)",fontWeight:600,padding:"0 10px 8px 0",borderBottom:"1px solid var(--ops-line)"}}>{h}</th>)}</tr></thead>
   <tbody>{[["img","2023-01-23","1284 d"],["slides","2023-03-07","1241 d"],["dev","2025-09-23","310 d"],["cts285","2025-10-21","282 d"],["prof-dev","2026-06-05","55 d"]].map(r=><tr key={r[0]}>
    <td style={{padding:"7px 10px 7px 0",borderBottom:"1px solid var(--ops-line)",color:"var(--ops-ink)"}}>{r[0]}</td>
    <td style={{padding:"7px 10px 7px 0",borderBottom:"1px solid var(--ops-line)",color:"var(--ops-ink-2)",fontFamily:"var(--font-mono)",fontSize:12}}>{r[1]}</td>
    <td style={{padding:"7px 10px 7px 0",borderBottom:"1px solid var(--ops-line)",color:"var(--ops-ink-2)",fontFamily:"var(--font-mono)",fontSize:12}}>{r[2]}</td></tr>)}</tbody>
  </table>
  <Aside>22 of the 26 top-level folders read as idle. Caveat: a folder's modified time is the folder record's own — <b style={{color:"var(--ops-ink)"}}>cts285</b> at 282 days is the clearest case; the work moved to 26fa intake.</Aside>
 </section>;
}
function Honesty(){
 const p={margin:"0 0 11px"};
 return <div style={{background:"var(--ops-panel)",border:"1px solid var(--ops-line)",borderRadius:8,padding:"20px 22px",fontSize:13,color:"var(--ops-ink-2)"}}>
  <h2 style={{...tbStyles.h2,marginBottom:12}}>WHAT IS MEASURED, AND HOW FAR TO TRUST IT</h2>
  <p style={p}><b style={{color:"var(--ops-ink)"}}>Sample data: none.</b> Every figure on this page came from a live call to Google Calendar, Gmail, Google Drive, or the scheduled-task list during this run.</p>
  <p style={p}><b style={{color:"var(--ops-ink)"}}>Redundancy is filename-based, not byte-level.</b> Contents were never compared. Two files with the same name may differ; two files with different names may be identical.</p>
  <p style={p}><b style={{color:"var(--ops-ink)"}}>Any duplicate inferred from file size is inferred.</b> That is a hypothesis worth one minute of checking, not a finding.</p>
  <p style={{margin:0}}><b style={{color:"var(--ops-ink)"}}>Notion: <span style={{color:"var(--ops-ok)",fontWeight:600}}>this changed.</span></b> A search for "project" now returns real pages. First run where Notion holds something worth reading.</p>
 </div>;
}
function App(){
 const[tab,setTab]=React.useState("Track 1 · Coming due");
 const tabs=["Track 1 · Coming due","Track 2 · Docs","Honesty box"];
 return <div style={tbStyles.wrap}>
  <header style={{borderBottom:"1px solid var(--ops-line)",paddingBottom:18,marginBottom:20}}>
   <h1 style={{margin:"0 0 6px",fontSize:23,letterSpacing:"-.01em",fontWeight:600}}>Teacherbot — live dashboard</h1>
   <div style={{fontFamily:"var(--font-mono)",fontSize:11.5,color:"var(--ops-ink-3)",letterSpacing:".02em"}}>Data pulled Fri Jul 31 2026, 7:11 AM America/New_York</div>
  </header>
  <div style={{display:"flex",gap:2,borderBottom:"1px solid var(--ops-line)",marginBottom:24}}>
   {tabs.map(t=><button key={t} onClick={()=>setTab(t)} style={{appearance:"none",background:"none",border:"none",borderBottom:`2px solid ${t===tab?"var(--ops-series-1)":"transparent"}`,marginBottom:-1,padding:"8px 14px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:600,color:t===tab?"var(--ops-ink)":"var(--ops-ink-3)",cursor:"pointer"}}>{t}</button>)}
  </div>
  {tab===tabs[0]&&<Track1/>}
  {tab===tabs[1]&&<Track2/>}
  {tab===tabs[2]&&<Honesty/>}
  <footer style={{marginTop:40,paddingTop:16,borderTop:"1px solid var(--ops-line)",fontFamily:"var(--font-mono)",fontSize:10.5,color:"var(--ops-ink-3)"}}>
   Sources this run — Google Calendar (primary), Gmail (search_threads, 4 queries), Google Drive (search_files, 8 queries), Claude scheduled tasks (88 tasks). Counts asserted before render: distinct + redundant == files.
  </footer>
 </div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
