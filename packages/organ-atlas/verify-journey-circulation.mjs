import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import * as T from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {JourneyVolume,moveInLumen} from './src/journey/volume.js';
import {examplesFor,connectedStructures} from './src/journey/learning-data.js';
import {entranceHints} from './src/journey/wayfinding.js';

const directory=new URL('./static/models/current/',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('journey-circulation.json',directory))),field=new JourneyVolume(manifest,Uint8Array.from(gunzipSync(fs.readFileSync(new URL('journey-circulation-volume.bin.gz',directory)))));
const [nx,ny]=field.dimensions,[bx,by]=field.brickDimensions,slot=(x,y,z)=>{
 if(field.offset(x,y,z)<0)return -1;
 const brick=field.brickIndex[(x>>3)+bx*((y>>3)+by*(z>>3))];return brick<0?-1:brick*512+(x&7)+8*((y&7)+8*(z&7));
};
const starts=manifest.parts.map(p=>p.position.map((v,i)=>Math.round((v-field.origin[i])/field.step))),visited=new Uint8Array(field.bricks.length*512),queue=new Uint32Array(visited.length),previous=new Uint32Array(visited.length),expected=new Set(manifest.connections.map(pair=>pair.slice().sort((a,b)=>a-b).join(':'))),observed=new Set();
const cell=i=>[i%nx,Math.floor(i/nx)%ny,Math.floor(i/(nx*ny))],world=i=>cell(i).map((v,k)=>field.origin[k]+v*field.step);let walked=0;
field.forEachVoxel((x,y,z,id)=>{for(const [xx,yy,zz]of [[x+1,y,z],[x,y+1,z],[x,y,z+1]]){const next=field.value(xx,yy,zz,true);if(next&&next!==id)observed.add([id,next].sort((a,b)=>a-b).join(':'));}});
assert.deepEqual([...observed].sort(),[...expected].sort(),'actual voxel contacts equal anatomical whitelist, including no septal or artery–vein shortcut');
let total=0;
for(const [component,circuit]of [[1,'right'],[2,'left']]){
 const parts=manifest.parts.filter(p=>p.circuit===circuit),first=starts[parts[0].id-1],root=field.offset(...first);let head=0,tail=1;queue[0]=root;visited[slot(...first)]=component;previous[slot(...first)]=root+1;
 while(head<tail){
  const point=queue[head++],x=point%nx,y=Math.floor(point/nx)%ny,z=Math.floor(point/(nx*ny));
  assert.equal(manifest.parts[field.value(x,y,z,true)-1].circuit,circuit,'reachable volume cannot cross the cardiac septum or capillary gap');
  for(const [xx,yy,zz]of [[x-1,y,z],[x+1,y,z],[x,y-1,z],[x,y+1,z],[x,y,z-1],[x,y,z+1]]){
   const index=slot(xx,yy,zz);if(index<0||visited[index]===component||field.value(xx,yy,zz)*field.unit<.0004)continue;
   assert.equal(visited[index],0,'circuits must remain disjoint');visited[index]=component;previous[index]=point+1;queue[tail++]=field.offset(xx,yy,zz);
  }
 }
 for(const part of parts){
  assert.equal(visited[slot(...starts[part.id-1])],component,part.name+' can be reached continuously from its heart chamber');
  let cursor=field.offset(...starts[part.id-1]);const path=[cursor];while(cursor!==root){cursor=previous[slot(...cell(cursor))]-1;assert(cursor>=0);path.push(cursor);}
  for(const route of [path,path.slice().reverse()]){let p=world(route[0]);for(const next of route.slice(1)){const dest=world(next),move=moveInLumen(field,p,dest.map((v,k)=>v-p[k]),.0004);assert(Math.hypot(...move.position.map((v,k)=>v-dest[k]))<1e-7,'production collision permits both directions to '+part.name);p=move.position;walked++;}}
 }
 total+=tail;
}
const byName=name=>manifest.parts.find(p=>p.name===name),flow=(a,b)=>assert(manifest.flowConnections.some(([from,to])=>from===byName(a).id&&to===byName(b).id),a+' → '+b);
for(const [a,b]of [['Superior vena cava','Right atrium'],['Inferior vena cava — upper segment','Right atrium'],['Coronary sinus','Right atrium'],['Right atrium','Right ventricle'],['Right ventricle','Pulmonary trunk'],['Pulmonary trunk','Right pulmonary artery'],['Pulmonary trunk','Left pulmonary artery'],['Left atrium','Left ventricle'],['Left ventricle','Ascending aorta']])flow(a,b);
for(const p of manifest.parts.filter(p=>p.name.includes('pulmonary vein')))flow(p.name,'Left atrium');
const hints=entranceHints(manifest);
assert.equal(manifest.junctions.filter(j=>j.valve).length,4);
for(const j of manifest.junctions.filter(j=>j.valve))assert(hints.filter(h=>h.name===j.valve.name).length===2,'both directions identify the valve passage');
for(const p of manifest.parts){assert.equal(connectedStructures(manifest,p.id).length,manifest.connections.filter(pair=>pair.includes(p.id)).length);if(p.kind==='heart')assert.deepEqual(examplesFor(manifest,p),[],'heart chambers must not inherit bowel/plaque examples from reused numeric IDs');}
assert(field.memoryBytes<32*1024*1024,'connected field remains sparse and below the runtime navigation memory budget');
assert(manifest.triangles<500000,'connected surface stays within the existing interactive rendering budget');
const surface=Uint8Array.from(gunzipSync(fs.readFileSync(new URL('journey-circulation-surface.bin.gz',directory)))),n=manifest.vertices,geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(new Float32Array(surface.buffer,0,n*3),3));geometry.setIndex(new T.BufferAttribute(new Uint32Array(surface.slice(n*27).buffer),1));const bvh=new MeshBVH(geometry,{indirect:true});let samples=0,count=0,minMargin=Infinity;
field.forEachVoxel((x,y,z,id,value)=>{if(value<7||count++%521)return;const p=[x,y,z].map((v,k)=>field.origin[k]+v*field.step),clear=field.clearance(p),nearest=bvh.closestPointToPoint(new T.Vector3(...p));assert(nearest.distance+1e-6>=clear,'rendered wall remains outside the conservative collision space');minMargin=Math.min(minMargin,nearest.distance-clear);samples++;});geometry.dispose();
console.log(JSON.stringify({parts:manifest.parts.length,anatomicalConnections:expected.size,reachableVoxels:total,separateCircuits:2,fourValvePassages:true,navigationMemoryBytes:field.memoryBytes,triangles:manifest.triangles,forwardReverseRouteSteps:walked,surfaceSamples:samples,minMarginMm:Math.round(minMargin*1e6)/1000}));
