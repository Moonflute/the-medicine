import {moveInLumen} from './volume.js';

// Region-level transitions over omitted distal branches AND microcirculation.
// These are navigation actions, never anatomical lumen/mesh connections.
// A shared arterial trunk does not specify a lobar/segmental perfusion territory.
export const transferReferences={
 lung:'https://www.ncbi.nlm.nih.gov/books/NBK545205/',
 kidney:'https://www.ncbi.nlm.nih.gov/books/NBK482385/',
 pelvis:'https://www.ncbi.nlm.nih.gov/books/NBK554574/',
 arm:'https://www.ncbi.nlm.nih.gov/books/NBK507841/'
};
const definitions=[];
for(const side of ['Right','Left']){
 const ko=side==='Right'?'우측':'좌측';
 for(const level of ['superior','inferior'])definitions.push({artery:`${side} pulmonary artery`,vein:`${side} ${level} pulmonary vein`,territory:`${ko} 폐`,system:'lung',omitted:'폐동맥 분지 · 폐포 모세혈관 · 폐정맥 분지'});
 for(const division of ['Anterior','Posterior'])definitions.push({artery:`${division} division of ${side.toLowerCase()} renal artery`,vein:`${side} renal vein`,territory:`${ko} 신장`,system:'kidney',omitted:'신장 내 분지 · 사구체 · 세뇨관 주위/직혈관 모세혈관 · 정맥 분지'});
 for(const area of ['internal','external'])definitions.push({artery:`${side} ${area} iliac artery`,vein:`${side} ${area} iliac vein`,territory:`${ko} ${area==='internal'?'골반':'하지'}`,system:'pelvis',omitted:'말초 동맥 분지 · 조직 모세혈관 · 정맥 분지'});
 definitions.push({artery:`${side} subclavian artery`,vein:`${side} axillary vein`,territory:`${ko} 상지`,system:'arm',omitted:'겨드랑·상지 동맥 분지 · 조직 모세혈관 · 정맥 분지'});
}

export class CapillaryTransfers{
 constructor(manifest){
  this.manifest=manifest;this.links=[];this.byPart=new Map();
  if(manifest.key!=='circulation')return;
  const names=new Map(manifest.parts.map(part=>[part.name,part])),ends=new Set((manifest.boundaries||[]).map(b=>b.part));
  for(const definition of definitions){
   const from=names.get(definition.artery),to=names.get(definition.vein);
   if(from?.kind!=='artery'||to?.kind!=='vein'||!ends.has(from.id)||!ends.has(to.id))continue;
   const link={...definition,from:from.id,to:to.id,reference:transferReferences[definition.system]};this.links.push(link);
   for(const forward of [true,false]){
    const option={...link,from:forward?from.id:to.id,to:forward?to.id:from.id,forward};
    if(!this.byPart.has(option.from))this.byPart.set(option.from,[]);this.byPart.get(option.from).push(option);
   }
  }
 }
 options(part){return this.byPart.get(part)||[];}
 get(from,to){return this.options(from).find(link=>link.to===to)||null;}
 boundary(part){return this.manifest.boundaries?.find(b=>b.part===part);}
 available(from,to,position){
  const link=this.get(from,to),boundary=this.boundary(from);
  return link&&boundary&&Math.hypot(...position.map((v,i)=>v-boundary.position[i]))<boundary.range?link:null;
 }
}

// Land just inside the existing distal end; never place the camera in a void
// between vessels or extrapolate missing capillaries. Preserve the chosen
// size and world-space gaze. If they cannot fit, leave the current view alone.
export function transferPose({manifest,field},transfer,view){
 const part=manifest.parts.find(p=>p.id===transfer.to),boundary=manifest.boundaries?.find(b=>b.part===transfer.to);
 if(!part||!boundary||view?.key!==manifest.key||![view.radius,view.yaw,view.pitch].every(Number.isFinite)||![.0016,.0008,.0004].includes(view.radius))return null;
 const radius=view.radius;
 // Search only the reviewed terminal/return/start points of this vessel.
 // Prefer a nearby point with usable inward travel, not merely a spot that
 // fits the camera but traps it against the terminal cap on arrival.
 for(const target of [boundary.returnPoint,part.position])for(let step=0;step<=32;step++){
  const position=boundary.position.map((v,i)=>v+(target[i]-v)*step/32);
  if(field.region(position)!==part.id||field.clearance(position)<radius+.00015)continue;
  let inwardDirection=boundary.returnPoint.map((v,i)=>v-position[i]),length=Math.hypot(...inwardDirection);
  if(length<radius){inwardDirection=boundary.returnPoint.map((v,i)=>v-boundary.position[i]);length=Math.hypot(...inwardDirection);}
  if(length<1e-8)continue;
  inwardDirection=inwardDirection.map(v=>v/length);
  const distance=radius*2,move=moveInLumen(field,position,inwardDirection.map(v=>v*distance),radius);
  if(move.position.reduce((sum,v,i)=>sum+(v-position[i])*inwardDirection[i],0)<distance*.75)continue;
  return {key:manifest.key,id:part.id,name:part.name,position,radius,yaw:view.yaw,pitch:view.pitch,projection:view.projection,inwardDirection};
 }
 return null;
}
