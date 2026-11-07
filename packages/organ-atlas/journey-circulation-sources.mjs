import {cardiacSource} from './journey-cardiac-sources.mjs';
import {journeyStartGroups} from './src/journey/learning-data.js';

// Reuse reviewed source branches in their original frame. Deduplicate the
// aortic/caval roots so a continuous wall/field replaces overlapping end caps.
export function circulationSource(sources){
 const result=structuredClone(cardiacSource);
 result.title='심장 · 동맥 · 정맥';
 for(const key of ['vessels','veins','thoracic-veins']){
  const source=sources[key],map=new Map(),kind=key==='vessels'?'artery':'vein';
  const groups=journeyStartGroups({...source,key,parts:source.parts.map((p,i)=>({...p,id:i+1}))});
  for(const [index,part] of source.parts.entries()){
   const file=part.sourceFile||source.file;
   let id=result.parts.findIndex(p=>p.source===part.source&&(p.sourceFile||result.file)===file)+1;
   if(id)result.parts[id-1].sourceSeamRadius=source.sourceSeamRadius||source.spacing*2;
   if(!id){
    const crop=source.crop&&part.crop?{min:source.crop.min.map((v,i)=>Math.max(v,part.crop.min[i])),max:source.crop.max.map((v,i)=>Math.min(v,part.crop.max[i]))}:part.crop||source.crop;
    result.parts.push({...part,sourceFile:file,...(crop?{crop}:{}),sourceSeamRadius:source.sourceSeamRadius||source.spacing*2,kind,circuit:kind==='artery'?'left':'right',group:groups.find(g=>g.parts.some(p=>p.id===index+1)).label,lessonKey:key,lessonId:index+1});
    id=result.parts.length;
   }
   map.set(index+1,id);
  }
  const pairs=source.connections.map(pair=>pair.map(id=>map.get(id)));
  result.connections.push(...pairs);
  result.flowConnections.push(...pairs.map(([a,b])=>kind==='vein'?[b,a]:[a,b]));
  result.forks.push(...(source.forks||[]).map(([id,children])=>[map.get(id),children.map(id=>map.get(id))]));
  for(const [id,seed]of Object.entries(source.seeds||{}))result.seeds[map.get(Number(id))]??=seed;
  for(const property of ['junctionAnchors','junctionWindows'])for(const [pair,value]of Object.entries(source[property]||{}))result[property][pair.split(':').map(id=>map.get(Number(id))).join(':')]=value;
 }
 result.bridges=result.connections;
 return result;
}
