import {regionTransitions,regionTransitionPose} from './region-transitions.js';

// Find an actual missing neighbour at the shared source structure. Mere
// proximity to another organ or vascular compartment never creates a portal.
export function continuationEntrances(current,next,option){
 const shared=next.parts.find(p=>p.name===option.name),existing=current.parts.find(p=>p.name===option.name),present=new Set(current.parts.flatMap(p=>p.sourceIds||[p.sourceId]));
 if(!shared)return [];
 return next.junctions.flatMap(j=>{
  const id=j.from===shared.id?j.to:j.to===shared.id?j.from:null,part=next.parts.find(p=>p.id===id);
  if(!part||(part.sourceIds||[part.sourceId]).some(id=>present.has(id)))return [];
  const point=j.from===shared.id?j.start:j.end,inside=j.from===shared.id?j.end:j.start,crop=existing?.crop||current.crop,boundary=current.boundaries.find(b=>b.part===existing?.id);
  // The central atlas deliberately crops carotids below their bifurcation.
  // Switch at that current dataset boundary while still in the SAME artery;
  // waiting at the distal branch would trap the camera behind the crop cap.
  if(crop&&boundary&&point.some((v,i)=>v<crop.min[i]||v>crop.max[i]))return [{point:boundary.position,inside:point,part}];
  return [{point,inside,part}];
 });
}
export function approachingEntrance(entrance,position,direction,radius){
 const delta=entrance.point.map((v,i)=>v-position[i]),distance=Math.hypot(...delta),length=Math.hypot(...direction);
 if(!length||distance>Math.max(.006,radius*5))return false;
 const toward=distance>radius*2?delta:entrance.inside.map((v,i)=>v-position[i]);
 return toward.reduce((n,v,i)=>n+v*direction[i],0)>Math.hypot(...toward)*length*.15;
}

// At most ONE neighbour is decoded ahead. The current world remains intact
// on failure; obsolete requests dispose their geometry immediately on arrival.
export class JourneyRegionStreamer{
 constructor(load){this.load=load;this.token=0;this.ready=null;this.pending=null;this.failed=new Map();this.cooldown=0;}
 setManifests(manifests){this.manifests=new Map(manifests.map(m=>[m.key,m]));}
 options(current,id){return regionTransitions(current,id).filter(o=>o.type!=='capillary'&&this.manifests?.has(o.key));}
 prefetch(key){
  if(this.ready?.manifest.key===key||this.pending===key||Date.now()-(this.failed.get(key)||0)<15000)return;
  this.clear();const token=this.token;this.pending=key;
  this.load(key).then(asset=>{if(this.token!==token){asset.dispose();return;}this.ready=asset;this.pending=null;}).catch(()=>{if(this.token===token){this.pending=null;this.failed.set(key,Date.now());}});
 }
 choose(current,view,direction,preferred){
  const id=current.field.region(view.position),options=this.options(current.manifest,id),ranked=[];
  for(const option of options)for(const entrance of continuationEntrances(current.manifest,this.manifests.get(option.key),option)){
   const distance=Math.hypot(...entrance.point.map((v,i)=>v-view.position[i]));ranked.push({option,entrance,distance,priority:option.key===preferred?-1:0});
  }
  ranked.sort((a,b)=>a.priority-b.priority||a.distance-b.distance);return ranked;
 }
 update(current,view,direction,preferred){
  const candidates=this.choose(current,view,direction,preferred),candidate=candidates[0];
  if(!candidate){if(this.ready||this.pending)this.clear();return null;}
  this.prefetch(candidate.option.key);
  if(!this.ready||performance.now()<this.cooldown)return null;
  for(const c of candidates.filter(c=>c.option.key===this.ready.manifest.key)){
   if(!approachingEntrance(c.entrance,view.position,direction,view.radius)||!regionTransitionPose(current,this.ready,c.option,view))continue;
   return c.option;
  }
  return null;
 }
 take(key){if(this.ready?.manifest.key!==key)return null;const result=this.ready;this.ready=null;this.token++;this.pending=null;this.cooldown=performance.now()+900;return result;}
 clear(){this.token++;this.ready?.dispose();this.ready=null;this.pending=null;}
 dispose(){this.clear();this.manifests?.clear();}
}
