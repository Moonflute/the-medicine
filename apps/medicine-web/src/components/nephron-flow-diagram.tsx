"use client";
import { getNephronSegment, type NephronState, type NephronSegmentId, type NephronSolute } from "@/lib/nephron-model";

const geometry: { id: NephronSegmentId; d: string; x: number; y: number; label: string }[] = [
  {id:"glomerulus",d:"M90 80 A27 27 0 1 1 89 80",x:50,y:47,label:"사구체"},
  {id:"proximal",d:"M115 98 C165 40 175 145 210 90 S255 155 205 161",x:170,y:64,label:"PCT · CA"},
  {id:"descending",d:"M205 161 C185 220 202 320 210 375",x:102,y:279,label:"하행각"},
  {id:"thin-ascending",d:"M210 375 Q235 430 255 370 L262 298",x:276,y:399,label:"얇은 상행각"},
  {id:"thick-ascending",d:"M262 298 L272 174 Q275 130 300 115",x:282,y:252,label:"TAL · NKCC2"},
  {id:"distal",d:"M300 115 C315 60 365 70 345 110 S325 160 385 136",x:314,y:52,label:"DCT · NCC"},
  {id:"collecting",d:"M385 136 Q400 134 400 180 L410 420",x:408,y:322,label:"집합관"},
];
const colors: Record<NephronSolute,string> = {"Na+":"#0369a1","K+":"#be185d","Cl-":"#4338ca","HCO3-":"#a16207","Ca2+":"#7e22ce","Mg2+":"#047857",H2O:"#0284c7"};
export function NephronFlowDiagram({ state, solute, selected, onSelect }: { state: NephronState; solute: NephronSolute; selected: NephronSegmentId; onSelect: (id: NephronSegmentId)=>void }) {
  const segment = getNephronSegment(state, selected), routes = segment.routes.filter(r=>r.solute===solute);
  return <div className="nephron-board">
    <svg className="clinical-svg" viewBox="0 0 500 470" aria-label="분절을 선택하는 네프론 지도">
      <rect x="10" y="12" width="480" height="175" rx="10" fill="#fdf4e9"/><rect x="10" y="187" width="480" height="125" fill="#eff6ff"/><rect x="10" y="312" width="480" height="140" rx="10" fill="#e0eaf4"/>
      <text x="23" y="34" fontSize="11">피질</text><text x="23" y="207" fontSize="11">외수질</text><text x="23" y="332" fontSize="11">내수질</text>
      {geometry.map(g=>{const part=getNephronSegment(state,g.id); const active=g.id===selected;return <g key={g.id} role="button" tabIndex={0} aria-label={`${g.label}, ${solute} 잔존 ${part.remaining[solute].toFixed(1)}%`} aria-pressed={active} onClick={()=>onSelect(g.id)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();onSelect(g.id);}}}>
        <path d={g.d} fill="none" stroke={active?"#0f766e":"#bd8d75"} strokeWidth={active?20:15} strokeLinecap="round"/><path d={g.d} fill="none" stroke="#fff7ed" strokeWidth="8" strokeLinecap="round"/>
        <text x={g.x} y={g.y} fontSize="12" fontWeight="700">{g.label}</text><text x={g.x} y={g.y+17} fontSize="12" style={{fill:colors[solute]}}>{part.remaining[solute].toFixed(1)}%</text>
      </g>;})}
      <text x="25" y="466" fontSize="11">표시값: 처음 여과된 {solute} 중 관강 잔존량</text>
    </svg>
    <section className="nephron-inspector" aria-label="선택 분절의 수송">
      <div><p className="text-xs text-[var(--muted)]">{solute} · 작용 부위</p><h2>{segment.label}</h2><p>{segment.note}</p></div>
      <div className="nephron-transfer"><span>관강</span><span>상피 / 세포 사이</span><span>혈액</span></div>
      {routes.length ? routes.map(route=><div className="nephron-route" key={route.id}>
        <div className="nephron-transfer"><b>{route.apical??(route.path==="paracellular"?"세포 사이":"여과막")}</b><strong style={{color:colors[solute]}}>{route.direction==="secrete"?"←":route.direction==="recycle"?"↶":"→"} {solute}</strong><b>{route.basolateral??route.coupled??"간질·모세혈관"}</b></div>
        <p>{route.detail}</p>
      </div>):<p className="nephron-route">이 분절의 주요 {solute} 순수송 없음</p>}
      <div className="nephron-handling"><div>도달 <b>{segment.delivered[solute].toFixed(1)}%</b></div><div>{segment.handled[solute]<0?"분비":"재흡수"} <b>{Math.abs(segment.handled[solute]).toFixed(1)}%</b></div><div>잔존 <b>{segment.remaining[solute].toFixed(1)}%</b></div></div>
      <p className="text-xs text-[var(--muted)]">각 비율의 분모는 처음 여과된 양입니다. 혈중 농도와 구분합니다.</p>
    </section>
  </div>;
}
