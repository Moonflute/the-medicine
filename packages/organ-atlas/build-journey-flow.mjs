// Offline paths in the shipped collision field; no runtime pathfinding and no
// invented capillary tube. A bounded A* keeps the build memory predictable.
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {JourneyVolume} from './src/journey/volume.js';
import {journeyModes} from './src/journey/learning-data.js';
const dir='static/models/current/';
class Heap{
 constructor(){this.a=[];}
 push(item){let i=this.a.length;this.a.push(item);while(i){const p=(i-1)>>1;if(this.a[p][0]<=item[0])break;this.a[i]=this.a[p];i=p;}this.a[i]=item;}
 pop(){const top=this.a[0],last=this.a.pop();if(this.a.length){let i=0;while(i*2+1<this.a.length){let c=i*2+1;if(c+1<this.a.length&&this.a[c+1][0]<this.a[c][0])c++;if(this.a[c][0]>=last[0])break;this.a[i]=this.a[c];i=c;}this.a[i]=last;}return top;}
}
export function flowPath(field,start,end,allowed){
 const [nx,ny]=field.dimensions,xyz=i=>[i%nx,Math.floor(i/nx)%ny,Math.floor(i/(nx*ny))],world=q=>q.map((v,k)=>field.origin[k]+v*field.step),at=p=>field.offset(...p.map((v,k)=>Math.round((v-field.origin[k])/field.step))),from=at(start),to=at(end),target=xyz(to),queue=new Heap(),previous=new Map([[from,from]]),cost=new Map([[from,0]]),minimum=.0001;
 const heuristic=q=>q.reduce((n,v,k)=>n+Math.abs(v-target[k]),0);
 queue.push([heuristic(xyz(from)),from,0]);let count=0;
 while(queue.a.length&&count++<300000){
  const [,i,g]=queue.pop();if(g!==cost.get(i))continue;if(i===to){const result=[];for(let at=to;;at=previous.get(at)){result.push(world(xyz(at)));if(at===from)break;}return result.reverse();}
  const q=xyz(i);
  for(const [dx,dy,dz]of [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){
   const p=[q[0]+dx,q[1]+dy,q[2]+dz],next=field.offset(...p),clearance=field.value(...p)*field.unit;
   if(next<0||clearance<minimum||!allowed.has(field.value(...p,true)))continue;
   const ng=g+1+Math.min(4,.00025/clearance);if(ng>=(cost.get(next)??Infinity))continue;
   cost.set(next,ng);previous.set(next,i);queue.push([ng+heuristic(p),next,ng]);
  }
 }
 return null;
}
export function simplifyFlowPath(field,path){
 const safe=(a,b)=>{const n=Math.ceil(Math.hypot(...a.map((v,i)=>v-b[i]))/(field.step*.4));for(let j=0;j<=n;j++)if(field.clearance(a.map((v,i)=>v+(b[i]-v)*j/Math.max(n,1)))<.00008)return false;return true;};
 const out=[path[0]];let i=0;while(i<path.length-1){let end=Math.min(path.length-1,i+40);while(end>i+1&&!safe(path[i],path[end]))end--;out.push(path[end]);i=end;}return out.map(p=>p.map(v=>+v.toFixed(7)));
}
for(const key of process.argv.slice(2).length?process.argv.slice(2):journeyModes.map(m=>m.id)){
 const path=dir+'journey-'+key+'.json',m=JSON.parse(fs.readFileSync(path));if(!m.flowConnections?.length||!m.volume)continue;
 const field=new JourneyVolume(m,gunzipSync(fs.readFileSync(dir+m.volume.split('/').at(-1)))),paths=[],omitted=[];
 for(const [from,to]of m.flowConnections){
  const a=m.parts.find(p=>p.id===from),b=m.parts.find(p=>p.id===to),allowed=new Set([from,to]);
  let route=flowPath(field,a.position,b.position,allowed),scope='part-centres';
  // A complex source part can contain narrow subregions. Keep a valid local
  // junction cue rather than drawing a straight line through that tissue.
  if(!route){const j=m.junctions.find(j=>j.from===from&&j.to===to||j.from===to&&j.to===from);if(j){route=flowPath(field,j.from===from?j.start:j.end,j.from===from?j.end:j.start,allowed);scope='junction-only';}}
  if(route?.length>1)paths.push({from,to,kind:a.system==='respiratory'||b.system==='respiratory'?'airway':a.kind||m.kind,scope,points:simplifyFlowPath(field,route)});else omitted.push([from,to]);
 }
 m.flowPaths=paths;m.flowAudit={method:'bounded-A-star-in-shipped-lumen; wall-checked simplification',minimumClearanceMetres:.00008,omitted,meaning:'Illustrative transport direction, not simulated rate, pressure or pulsatility.'};
 fs.writeFileSync(path,JSON.stringify(m));console.log(JSON.stringify({key,paths:paths.length,points:paths.reduce((n,p)=>n+p.points.length,0),localOnly:paths.filter(p=>p.scope==='junction-only').length,omitted}));
}
