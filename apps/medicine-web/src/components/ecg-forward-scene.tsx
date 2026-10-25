"use client";

import { useId, useMemo, useRef, type KeyboardEvent, type PointerEvent } from "react";
import { electrodePosition, ELECTRODE_IDS, HEART_CENTER, leadFieldAtCenter, pickSceneSurface, projectScenePosition, type Electrode, type ElectrodeId, type ElectrodeMap, type ForwardRecording, type LeadPlacement, type StandardLead } from "@/lib/ecg-forward-model";
import { displayGeometry, heartPoint, recordingFrame, visibleCurrents, type HeartPart } from "@/lib/ecg-forward-display";

type Props = {
  readRecording:()=>ForwardRecording; electrodes:ElectrodeMap; placement:LeadPlacement; lead:StandardLead;
  timeMs:number; yaw:number; selected:ElectrodeId; showCurrents:boolean; showVectors:boolean;
  part:HeartPart; onPart:(part:HeartPart)=>void;
  onMove:(id:ElectrodeId,electrode:Electrode)=>void; onSelect:(id:ElectrodeId)=>void;
};
const CHAMBERS = [
  {id:"RA",x:192,y:128,d:"M179 62C147 60 131 88 143 129L156 171C175 192 213 184 249 169L253 120C246 85 197 75 179 62Z",cavity:"M177 91C159 91 159 122 169 143Q191 165 225 151L225 124Q207 98 177 91Z"},
  {id:"LA",x:345,y:128,d:"M294 73C329 43 384 62 398 94C417 131 386 175 348 176L289 173Q265 120 294 73Z",cavity:"M309 91Q346 69 375 99Q392 127 358 151L309 147Q288 122 309 91Z"},
  {id:"RV",x:196,y:263,d:"M160 182C134 210 143 277 196 326C223 355 260 382 307 396C268 339 273 281 278 222L254 183Z",cavity:"M179 203Q156 236 192 282Q220 320 263 348Q244 286 252 224L239 204Z"},
  {id:"LV",x:352,y:272,d:"M288 183C341 166 397 168 419 210C450 279 406 376 330 410C304 421 286 392 280 348L270 228Z",cavity:"M310 211Q371 190 390 227C410 279 373 351 331 376Q305 350 305 296Z"},
] as const;
const CALLOUTS:Record<string,{x:number;y:number;anchor:"start"|"end";label:string}>={
  "SA node":{x:117,y:62,anchor:"end",label:"SA node"},
  "AV node":{x:429,y:161,anchor:"start",label:"AV node"},
  His:{x:429,y:207,anchor:"start",label:"His bundle"},
  RBB:{x:122,y:231,anchor:"end",label:"RBB"},LBB:{x:429,y:256,anchor:"start",label:"LBB"},
  "RV Purkinje":{x:123,y:362,anchor:"end",label:"RV Purkinje"},"LV Purkinje":{x:429,y:366,anchor:"start",label:"LV Purkinje"},
};
const activate=(event:KeyboardEvent<SVGElement>,action:()=>void)=>{
  if(event.key==="Enter"||event.key===" "){event.preventDefault();event.stopPropagation();action();}
};
const tissueColor=(voltage:number,falling:boolean)=>voltage<.08?"#dfc4bd":falling?`hsl(270 46% ${86-voltage*27}%)`:`hsl(${40-voltage*18} 92% ${88-voltage*35}%)`;

export function EcgForwardScene({readRecording,electrodes,placement,lead,timeMs,yaw,selected,showCurrents,showVectors,part,onPart,onMove,onSelect}:Props) {
  const recording=readRecording();
  const id=useId().replaceAll(":",""),dragging=useRef<ElectrodeId|null>(null);
  const geometry=useMemo(()=>displayGeometry(recording.mesh),[recording.mesh]);
  const frame=recordingFrame(recording,timeMs),n=recording.mesh.cells.length,cells=recording.mesh.cells;
  const currents=showCurrents?visibleCurrents(recording,geometry.groups,frame):[];
  const origin=projectScenePosition(HEART_CENTER,yaw),dipole=recording.dipole.subarray(frame*3,frame*3+3),field=leadFieldAtCenter(placement);
  const positiveId:ElectrodeId=lead.startsWith("V")?lead as ElectrodeId:lead==="I"||lead==="aVL"?"LA":lead==="aVR"?"RA":"LL";
  const negativeId=lead==="III"?"LA":"RA";
  const coordinates=(event:PointerEvent<SVGSVGElement>)=>{
    const matrix=event.currentTarget.getScreenCTM();return matrix?new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse()):null;
  };
  const move=(event:PointerEvent<SVGSVGElement>)=>{
    if(!dragging.current)return;const point=coordinates(event);if(!point)return;
    const next=pickSceneSurface(point.x,point.y,yaw);if(next)onMove(dragging.current,next);
  };
  return <div className="ecg-integrated-scene">
    <div className="ecg-integrated-heading"><h2>심장 · 전극 위치</h2><span>심장 확대 절개도</span></div>
    <svg viewBox="0 25 620 500" role="group" tabIndex={0} className="ecg-integrated-drawing"
      aria-label="심장 구조와 9개 측정 전극. 전극을 선택해 끌거나 흉곽 표면을 누르세요. 방향키로 선택 전극을 움직입니다."
      onPointerDown={event=>{
        if((event.target as Element).closest("[data-heart-part]"))return;
        const point=coordinates(event);if(!point)return;
        event.preventDefault();
        const marker=(event.target as Element).closest("[data-electrode]")?.getAttribute("data-electrode") as ElectrodeId|null;
        if(marker){dragging.current=marker;onSelect(marker);event.currentTarget.setPointerCapture(event.pointerId);return;}
        if(!pickSceneSurface(point.x,point.y,yaw))return;
        dragging.current=selected;event.currentTarget.setPointerCapture(event.pointerId);move(event);
      }} onPointerMove={move}
      onPointerUp={event=>{dragging.current=null;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);}}
      onPointerCancel={()=>{dragging.current=null;}} onLostPointerCapture={()=>{dragging.current=null;}}
      onKeyDown={event=>{
        if(event.target!==event.currentTarget||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(event.key))return;
        event.preventDefault();const e=electrodes[selected],step=event.shiftKey?10:2;
        onMove(selected,{longitude:((e.longitude+(event.key==="ArrowRight"?step:event.key==="ArrowLeft"?-step:0)+540)%360)-180,latitude:Math.max(-80,Math.min(80,e.latitude+(event.key==="ArrowUp"?step:event.key==="ArrowDown"?-step:0)))});
      }}>
      <defs>
        <clipPath id={`${id}-heart`}>{CHAMBERS.map(c=><path key={c.id} d={c.d}/>)}</clipPath>
        <filter id={`${id}-tissue`}><feGaussianBlur stdDeviation="2.2"/></filter>
        <marker id={`${id}-current`} viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#087f70"/></marker>
        {["dipole","field"].map((key,i)=><marker key={key} id={`${id}-${key}`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill={i?"#087f70":"#7c3aed"}/></marker>)}
      </defs>
      <path d="M266 17L264 55Q215 75 156 82Q82 101 58 166L36 380Q51 396 68 379L101 233L108 392L129 548H491L512 392L519 233L552 379Q569 396 584 380L562 166Q538 101 464 82Q405 75 356 55L354 17" fill="#f4f1ed" stroke="#d1c6be" strokeWidth="1.5"/>
      <ellipse cx="310" cy="300" rx={Math.hypot(16*Math.cos(yaw*Math.PI/180),10*Math.sin(yaw*Math.PI/180))*14} ry={26*8.8} fill="#edf4f5" fillOpacity=".8" stroke="#aabec7" strokeWidth="1.3"/>
      {[-50,0,50].map(latitude=><path key={latitude} d={Array.from({length:91},(_,i)=>{const p=projectScenePosition(electrodePosition({longitude:i*4-180,latitude}),yaw);return `${i?"L":"M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;}).join(" ")} fill="none" stroke="#c8d8de" strokeWidth=".8" pointerEvents="none"/>)}
      <text x="28" y="41" className="ecg-scene-orientation">환자 오른쪽</text><text x="509" y="41" className="ecg-scene-orientation">환자 왼쪽</text>
      <g transform="translate(-10.6 .6) scale(1.17)">
        <path d="M169 23L169 84M309 88L307 48Q311 22 333 23L357 25M365 32L365 58" fill="none" stroke="#ceb9b9" strokeWidth="23"/>
        <path d="M169 23L169 84M309 88L307 48Q311 22 333 23L357 25" fill="none" stroke="#f6e4df" strokeWidth="15"/>
        {CHAMBERS.map(c=><g key={c.id} data-heart-part={c.id}>
          <path d={c.d} fill="#dfc4bd" stroke={part===c.id?"#087f70":"#ad7e77"} strokeWidth={part===c.id?4:2.5}/>
          <path d={c.cavity} fill="#fffaf7" fillOpacity=".85" stroke="#bd9185" strokeWidth="1.3"/>
        </g>)}
        <g clipPath={`url(#${id}-heart)`} filter={`url(#${id}-tissue)`} pointerEvents="none">
          {geometry.columns.map((column,index)=>{
            const voltage=Math.max(...column.cells.map(cell=>recording.voltage[frame*n+cell]));
            const before=Math.max(...column.cells.map(cell=>recording.voltage[Math.max(0,frame-2)*n+cell]));
            return <rect key={index} x={column.x-8} y={column.y-8} width="17" height="17" rx="5" fill={tissueColor(voltage,voltage<before-.001)} fillOpacity={voltage>.08?.84:.22}/>;
          })}
        </g>
        <path d="M274 184Q261 266 286 346Q300 382 324 400" fill="none" stroke="#ab7773" strokeWidth="7" opacity=".65" pointerEvents="none"/>
        <path d="M153 179L257 181M291 180L407 178" stroke="#faf8f5" strokeWidth="9" pointerEvents="none"/>
        <path d="M153 179L257 181M291 180L407 178" stroke="#987e79" strokeWidth="1.6" strokeDasharray="4 4" pointerEvents="none"/>
        <text x="315" y="327" transform="rotate(-78 315 327)" className="ecg-septum-label">Septum</text>
        {geometry.groups.filter(group=>!recording.mesh.edges[group[0]].source).map(group=>{
          const edge=recording.mesh.edges[group[0]],a=heartPoint(cells[edge.a].position),b=heartPoint(cells[edge.b].position);
          const junction=cells[edge.a].chamber!=="node"||cells[edge.b].chamber!=="node",blocked=edge.conductance===0;
          return <g key={group[0]} pointerEvents="none"><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="white" strokeWidth={junction?3:6}/><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={blocked?"#b91c1c":"#997034"} strokeWidth={junction?1.1:3.2} strokeDasharray={blocked?"4 3":undefined}/>{blocked?<text x={(a.x+b.x)/2} y={(a.y+b.y)/2+5} fill="#b91c1c" fontSize="22" fontWeight="800">×</text>:null}</g>;
        })}
        {currents.map(({index,value,edge})=>{
          const a=heartPoint(cells[value>0?edge.a:edge.b].position),b=heartPoint(cells[value>0?edge.b:edge.a].position),width=Math.min(3.5,1.1+Math.sqrt(Math.abs(value))*8);
          return <g key={index} pointerEvents="none" data-current-edge={index} data-current={value.toFixed(5)}><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="white" strokeWidth={width+1.5}/><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#087f70" strokeWidth={width} markerEnd={`url(#${id}-current)`}/></g>;
        })}
        {CHAMBERS.map(c=><g key={c.id} data-heart-part={c.id} className="ecg-anatomy-hit" role="button" tabIndex={0} aria-label={`${c.id} 구조 설명`} aria-pressed={part===c.id} onClick={()=>onPart(c.id)} onKeyDown={event=>activate(event,()=>onPart(c.id))}>
          <rect x={c.x-24} y={c.y-20} width="48" height="31" rx="7" fill="white" fillOpacity=".96" stroke={part===c.id?"#087f70":"#d3bab1"}/><text x={c.x} y={c.y+2} textAnchor="middle" className="ecg-chamber-label">{c.id}</text>
        </g>)}
        {recording.mesh.landmarks.map(landmark=>{
          const c=CALLOUTS[landmark.label];if(!c)return null;const p=heartPoint(cells[landmark.index].position),x=c.anchor==="end"?c.x-103:c.x-6;
          return <g key={landmark.label} data-heart-part={landmark.label} role="button" tabIndex={0} aria-label={`${landmark.label} 구조 설명`} aria-pressed={part===landmark.label} className="ecg-anatomy-hit" onClick={()=>onPart(landmark.label as HeartPart)} onKeyDown={event=>activate(event,()=>onPart(landmark.label as HeartPart))}>
            <path d={`M${p.x} ${p.y}L${c.anchor==="end"?136:431} ${c.y-6}L${c.x} ${c.y-6}`} fill="none" stroke="#7d919c" strokeWidth="1"/>
            <circle cx={p.x} cy={p.y} r="4.5" fill={recording.voltage[frame*n+landmark.index]>.5?"#f2ac32":"#997034"} stroke="white" strokeWidth="1.5"/>
            <rect x={x} y={c.y-23} width="110" height="30" rx="5" fill={part===landmark.label?"#d6f4ee":"#ffffff"} stroke={part===landmark.label?"#087f70":"#dce4e6"}/>
            <text x={c.x} y={c.y-2} textAnchor={c.anchor} className="ecg-path-label">{c.label}</text>
          </g>;
        })}
        <text x="334" y="435" className="ecg-anatomy-orientation">Apex</text>
      </g>
      {showVectors?[dipole,field].map((vector,index)=>{
        const length=Math.hypot(...vector);if(length<(index?1e-8:.03))return null;
        const p=projectScenePosition([HEART_CENTER[0]+vector[0]/length*5,HEART_CENTER[1]+vector[1]/length*5,HEART_CENTER[2]+vector[2]/length*5],yaw);
        return <line key={index} x1={origin.x} y1={origin.y} x2={p.x} y2={p.y} stroke={index?"#087f70":"#7c3aed"} strokeWidth="2.4" strokeDasharray={index?"5 3":undefined} markerEnd={`url(#${id}-${index?"field":"dipole"})`} pointerEvents="none"/>;
      }):null}
      {ELECTRODE_IDS.map(name=>{
        const p=projectScenePosition(electrodePosition(electrodes[name]),yaw),active=name===selected,positive=name===positiveId,negative=placement.reference==="bipolar"&&name===negativeId;
        const color=active?"#155eef":positive?"#b42342":negative?"#155eef":"#4b6474";
        return <g key={name} data-electrode={name} className="ecg-electrode-marker" role="button" tabIndex={0} aria-label={`${name} 전극 선택${!p.front?" · 뒤쪽 표면":""}`} aria-pressed={active} onClick={()=>onSelect(name)} onKeyDown={event=>activate(event,()=>onSelect(name))}>
          {active?<circle cx={p.x} cy={p.y} r="20" fill="#dbeafe" fillOpacity=".65"/>:null}
          <circle cx={p.x} cy={p.y} r={active?12:8} fill="white" stroke={color} strokeWidth={active?3:2} strokeDasharray={!p.front?"3 2":undefined}/><circle cx={p.x} cy={p.y} r={active?4:2.5} fill={color}/>
          <text x={p.x+(p.x<310?-16:16)} y={p.y-(active?19:12)} textAnchor={p.x<310?"end":"start"} className="ecg-electrode-label" style={{fontSize:name.startsWith("V")&&!active?12:15}} fill={color}>{name}{positive?" +":negative?" −":""}</text>
        </g>;
      })}
    </svg>
    <div className="ecg-heart-key"><span><i className="ecg-key-conduction"/>전도</span><span><i className="ecg-key-current"/>전류</span><span><i className="ecg-key-active"/>흥분</span><span><i className="ecg-key-recovery"/>회복</span><span className="ecg-vector-key">보라: dipole · 초록 점선: Lead field</span></div>
  </div>;
}
