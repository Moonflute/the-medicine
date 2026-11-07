import {compatibleJourneyFrames} from './context.js';
import {transferPose} from './capillary-transfers.js';
const definitions=[];
for(const side of ['Right','Left'])for(const area of ['arm','leg']){
 const key=area+'-'+side.toLowerCase(),label=(side==='Right'?'우측 ':'좌측 ')+(area==='arm'?'팔':'다리');
 for(const name of area==='arm'?[`${side} subclavian artery`,`${side} axillary vein`]:[`${side} external iliac artery`,`${side} external iliac vein`])definitions.push({key:area==='leg'?key+(name.endsWith('artery')?'-artery':'-vein'):key,name,label});
}
export function regionTransitions(manifest,partId){
 const part=manifest.parts.find(p=>p.id===partId);if(!part||manifest.coordinateFrame!=='z-anatomy')return [];
 const options=definitions.filter(d=>d.name===part.name&&(manifest.key==='circulation'||manifest.key===d.key)).map(d=>({key:manifest.key==='circulation'?d.key:'circulation',name:d.name,label:manifest.key==='circulation'?d.label+' 혈관 계속':'심장 쪽 혈관 계속'}));
 if(/^leg-(right|left)-(artery|vein)$/.test(manifest.key)){
  const side=manifest.key.includes('right')?'Right':'Left',out=part.kind==='artery';
  for(const stem of ['deep femoral','anterior tibial','posterior tibial','fibular']){
   const a=`${side} ${stem} artery`,v=`${side} ${stem} vein${stem==='deep femoral'?'':'s'}`;
   if(part.name===(out?a:v))options.push({key:manifest.key.replace(/(artery|vein)$/,(out?'vein':'artery')),name:out?v:a,fromName:part.name,type:'capillary',label:'미세순환 생략 → '+(out?'정맥':'동맥 · 역방향'),territory:(side==='Right'?'우측 ':'좌측 ')+(stem==='deep femoral'?'넓적다리':'하퇴 · 발')});
  }
 }
 return options;
}
// Stream at the SAME anatomical position, radius and orientation. Never snap
// to the next vessel's centroid or join different specimens/vascular circuits.
export function regionTransitionPose(current,next,option,view){
 if(!compatibleJourneyFrames(current.manifest,next.manifest)||next.manifest.key!==option.key)return null;
 const from=current.manifest.parts.find(p=>p.id===current.field.region(view.position)),to=next.manifest.parts.find(p=>p.name===option.name);
 if(option.type==='capillary'){
  if(!from||!to||from.name!==option.fromName||from.kind===to.kind||!regionTransitions(current.manifest,from.id).some(o=>o.type==='capillary'&&o.key===option.key&&o.name===option.name))return null;
  const boundary=current.manifest.boundaries.find(b=>b.part===from.id);if(!boundary||Math.hypot(...view.position.map((v,i)=>v-boundary.position[i]))>=boundary.range)return null;
  return transferPose(next,{to:to.id},{...view,key:next.manifest.key});
 }
 if(!from||!to||from.name!==to.name||from.kind!==to.kind||from.sourceId!==to.sourceId)return null;
 if(next.field.region(view.position)!==to.id||next.field.clearance(view.position)<view.radius+.00003)return null;
 return {...view,key:next.manifest.key,id:to.id,name:to.name,position:[...view.position]};
}
