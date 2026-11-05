// Reconstruct the source tube's own ordered rings, never a hand-drawn bowel path.
import * as T from 'three';

export function sourceBowelPath(geometry){
 const p=geometry.attributes.position,ix=geometry.index.array,edges=new Map(),adj=Array.from({length:p.count},()=>new Set());
 for(let i=0;i<ix.length;i+=3)for(const [a,b]of [[ix[i],ix[i+1]],[ix[i+1],ix[i+2]],[ix[i+2],ix[i]]]){const k=a<b?a+','+b:b+','+a;edges.set(k,(edges.get(k)||0)+1);adj[a].add(b);adj[b].add(a);}
 const boundary=[...edges].filter(([,n])=>n===1).map(([k])=>k.split(',').map(Number)),boundaryAdj=new Map();
 for(const [a,b]of boundary){if(!boundaryAdj.has(a))boundaryAdj.set(a,[]);if(!boundaryAdj.has(b))boundaryAdj.set(b,[]);boundaryAdj.get(a).push(b);boundaryAdj.get(b).push(a);}
 const unused=new Set(boundary.flat()),ends=[];
 while(unused.size){const q=[unused.values().next().value],vertices=[];unused.delete(q[0]);while(q.length){const a=q.pop();vertices.push(a);for(const b of boundaryAdj.get(a))if(unused.delete(b))q.push(b);}ends.push(vertices);}
 if(ends.length!==2||ends.some(v=>v.length!==12))throw Error('Source bowel no longer has two 12-vertex end rings');
 const levels=new Int32Array(p.count).fill(-1),queue=[...ends[0]];for(const i of queue)levels[i]=0;
 for(let h=0;h<queue.length;h++)for(const j of adj[queue[h]])if(levels[j]<0){levels[j]=levels[queue[h]]+1;queue.push(j);}
 const rings=[];for(let i=0;i<p.count;i++){if(levels[i]<0)throw Error('Disconnected bowel source');(rings[levels[i]]??=[]).push(i);}
 if(rings.some(r=>r.length!==12))throw Error('Source bowel ring topology changed');
 let points=rings.map(r=>{const center=r.reduce((v,i)=>v.add(new T.Vector3().fromBufferAttribute(p,i)),new T.Vector3()).multiplyScalar(1/r.length);const radius=Math.min(...r.map(i=>new T.Vector3().fromBufferAttribute(p,i).distanceTo(center)))-.0015;if(radius<.002)throw Error('Source bowel too narrow');return [...center.toArray(),radius].map(x=>Number(x.toFixed(6)));});
 // The proximal source opening is superior and left of the ileocecal opening.
 if(points[0][1]<points.at(-1)[1])points.reverse();
 let length=0;for(let i=1;i<points.length;i++)length+=Math.hypot(...points[i].slice(0,3).map((x,k)=>x-points[i-1][k]));
 return {part:10,points,lengthMetres:length,sourceRings:rings.length,wallInsetMetres:.0015,representation:'source-ring-derived navigation cavity; wall inset is schematic, not measured tissue thickness'};
}

export function applySourcePathStarts(manifest,routes,field){
 for(const route of routes){const part=manifest.parts.find(p=>p.id===route.part);if(!part)continue;route.minimumCenterlineClearanceMetres=Infinity;for(let i=0;i<route.points.length;i++){const clear=field.clearance(route.points[i].slice(0,3));if(clear<.0004)throw Error('Blocked source bowel station '+i);route.minimumCenterlineClearanceMetres=Math.min(route.minimumCenterlineClearanceMetres,clear);}const index=route.points.findIndex((p,i)=>i>=6&&i<80&&field.region(p.slice(0,3))===route.part&&field.clearance(p.slice(0,3))>=.0016);if(index<0)continue;part.position=route.points[index].slice(0,3);part.clearance=field.clearance(part.position);const before=route.points[Math.max(0,index-3)],after=route.points[Math.min(route.points.length-1,index+3)];part.lookDirection=after.slice(0,3).map((v,k)=>v-before[k]);}
}
