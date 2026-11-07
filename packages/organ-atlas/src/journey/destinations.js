import {fittingRadius,journeyFrame} from './context.js';
import {entranceHints,visibleThroughLumen} from './wayfinding.js';

export const destinationSystems=[
 {id:'digestive',label:'입 · 소화관',aliases:'소화기 위장관'},
 {id:'airway',label:'기도 · 기관지',aliases:'호흡기 폐'},
 {id:'heart',label:'심장',aliases:'순환기'},
 {id:'artery',label:'동맥',aliases:'혈관 순환기'},
 {id:'vein',label:'정맥',aliases:'혈관 순환기'},
 {id:'urinary',label:'비뇨기계',aliases:'신장 신우 요관 방광'},
 {id:'biliary',label:'담도 · 췌관',aliases:'간담췌 담낭 담즙'},
 {id:'brain',label:'뇌',aliases:'신경계 대뇌피질 뇌실 해마 시상'}
];
const normalize=text=>text.normalize('NFKC').toLocaleLowerCase().replace(/[\s·—–+()]/g,'');
export function journeyDestinations(manifests){
 return manifests.flatMap(manifest=>manifest.parts.filter(part=>part.navigable!==false).map(part=>{
  const system=part.kind==='csf'?'brain':part.kind||(['입 · 인두','소화관'].includes(part.group)?'digestive':'airway');
  return {key:manifest.key,id:part.id,name:part.name,korean:part.korean,group:part.group,system};
 }));
}
export function filterDestinations(destinations,query='',system=''){
 const terms=query.trim().split(/\s+/).map(normalize).filter(Boolean);
 return destinations.filter(part=>{
  if(system&&part.system!==system)return false;
  const category=destinationSystems.find(item=>item.id===part.system);
  const bowel=part.key==='upper'?(part.id===10?'소장':part.id>=11&&part.id<=14?'대장':''):'';
  const text=normalize([part.name,part.korean,part.group,part.system,category?.label,category?.aliases,bowel].join(' '));
  return terms.every(term=>text.includes(term));
 });
}

const toward=(point,position)=>point.map((v,i)=>v-position[i]);
// Only an explicit destination action can aim the camera. It reuses reviewed
// start points and rejects a landing before changing the current scene/pose.
export function destinationPose({manifest,field},id,requested=.0016){
 if(manifest.kind==='brain'){const mode=field.mode,side=field.side,walkState=field.walkState;try{return field.destination(id,requested);}finally{field.setMode(mode,side);field.walkState=walkState;}}
 const part=manifest.parts.find(p=>p.id===Number(id));
 if(!part||field.region(part.position)!==part.id)return null;
 const radius=fittingRadius(field,part.position,requested);if(!radius)return null;
 let direction;
 if(manifest.key==='upper'){
  const forward=manifest.junctions.find(j=>j.from===part.id),parent=part.id>=15&&manifest.junctions.find(j=>j.to===part.id),target=forward?.start||parent?.start;
  direction=target?toward(target,part.position):[0,-1,-.15];
  if(part.id===2){const hints=entranceHints(manifest).filter(h=>['laryngeal-inlet','esophagus'].includes(h.id));if(hints.length===2)direction=toward(hints[0].point.map((v,i)=>(v+hints[1].point[i])/2),part.position);}
 }else{
  const connections=manifest.flowConnections||manifest.connections;
  const outgoing=connections.find(([from])=>from===part.id),neighbor=outgoing?.[1]||connections.find(([,to])=>to===part.id)?.[0];
  const junction=manifest.junctions.find(j=>(j.from===part.id&&j.to===neighbor)||(j.to===part.id&&j.from===neighbor));
  const preferred=junction?(junction.from===part.id?junction.end:junction.start):manifest.parts.find(p=>p.id===neighbor)?.position;
  const visible=entranceHints(manifest).filter(h=>h.regions.includes(part.id)).find(h=>visibleThroughLumen(field,part.position,h.point));
  const target=preferred&&visibleThroughLumen(field,part.position,preferred)?preferred:visible?.point||preferred;
  if(target)direction=toward(target,part.position);
 }
 direction=part.lookDirection||direction||[0,-1,0];
 if(!direction.every(Number.isFinite)||Math.hypot(...direction)<1e-9)direction=[0,-1,0];
 return {key:manifest.key,id:part.id,name:part.name,position:[...part.position],radius,direction};
}

export function restoreJourneyPose({manifest,field},view){
 if(!view||view.key!==manifest.key||view.frame!==journeyFrame(manifest)||!view.position?.every(Number.isFinite)||!Number.isFinite(view.yaw)||!Number.isFinite(view.pitch))return null;
 if(manifest.kind==='brain'){const mode=field.mode,side=field.side,walkState=field.walkState;try{field.setMode(view.mode,view.side);return field.clearance(view.position)>=view.radius-1e-12?{...view,position:[...view.position]}:null;}finally{field.setMode(mode,side);field.walkState=walkState;}}
 const radius=fittingRadius(field,view.position,view.radius);
 return radius&&field.region(view.position)?{...view,position:[...view.position],radius}:null;
}
