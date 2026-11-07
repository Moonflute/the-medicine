import assert from 'node:assert/strict';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import {gunzipSync} from 'node:zlib';
import * as T from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {JourneyVolume,moveInLumen} from './src/journey/volume.js';
import {createBrainAsset} from './src/journey/brain-field.js';
import {destinationPose} from './src/journey/destinations.js';
import {examplesFor,structureLesson} from './src/journey/learning-data.js';
import {regionTransitions,regionTransitionPose} from './src/journey/region-transitions.js';
const directory=fileURLToPath(new URL('./static/models/current/',import.meta.url));
function load(key){const manifest=JSON.parse(fs.readFileSync(directory+'journey-'+key+'.json')),bytes=Uint8Array.from(gunzipSync(fs.readFileSync(directory+'journey-'+key+'-surface.bin.gz'))),n=manifest.vertices,geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(new Float32Array(bytes.buffer,0,n*3),3));geometry.setIndex(new T.BufferAttribute(new Uint32Array(bytes.slice(n*27).buffer),1));if(key==='brain')return createBrainAsset(manifest,geometry);const field=new JourneyVolume(manifest,gunzipSync(fs.readFileSync(directory+'journey-'+key+'-volume.bin.gz')));return {manifest,field,geometry};}
let central;
for(const key of process.argv.slice(2).length?process.argv.slice(2):['urinary','renal-right','renal-left','urinary-outlet','biliary','head-artery','arm-right','arm-left','leg-right-artery','leg-right-vein','leg-left-artery','leg-left-vein','brain','brain-csf']){
 const asset=load(key),{manifest:m,field,geometry}=asset;
 for(const part of m.parts){assert(structureLesson(m,part).description.length>20);if(['urinary','biliary','brain','csf'].includes(m.kind))assert.deepEqual(examplesFor(m,part),[]);}
 if(key==='brain'){
  let starts=0,steps=0;for(const part of m.parts.filter(p=>p.navigable))for(const radius of [.0016,.0008,.0004,.0002,.0001]){const pose=destinationPose(asset,part.id,radius);assert(pose,part.name+' start');field.setMode(pose.mode,pose.side);field.place(pose);assert(field.clearance(pose.position)>=pose.radius);starts++;if(pose.mode==='surface'){let p=pose.position;for(let i=0;i<40;i++){const result=field.move(p,pose.direction.map(v=>v*.00025),pose.radius);assert(field.clearance(result.position)>=pose.radius-1e-8,'cortical clearance');assert(Math.hypot(...result.position.map((v,k)=>v-p[k]))<.003,'no cortical gap teleport');p=result.position;steps++;}}else{const move=field.move(pose.position,pose.direction.map(v=>v*.025),pose.radius);assert(field.clearance(move.position)>=pose.radius-1e-8,'deep tissue collision');}}
  console.log(JSON.stringify({key,sourceParts:m.parts.length,accessibleParts:m.parts.filter(p=>p.navigable).length,starts,surfaceSteps:steps,triangles:m.triangles}));asset.dispose();continue;
 }
 const bvh=new MeshBVH(geometry,{indirect:true});let sampled=0,seen=0,cells=0;field.forEachVoxel((x,y,z,id,value)=>{if(value>=Math.ceil((m.minRadius||.0004)/field.unit))cells++;if(value<3||seen++%71)return;const p=[x,y,z].map((v,k)=>field.origin[k]+v*field.step),distance=bvh.closestPointToPoint(new T.Vector3(...p)).distance;assert(distance+1e-6>=field.clearance(p),key+' wall/clearance disagreement');sampled++;});
 const radius=m.minRadius||.0004,minimum=Math.ceil(radius/field.unit);const [nx,ny,nz]=field.dimensions,world=i=>[i%nx,Math.floor(i/nx)%ny,Math.floor(i/(nx*ny))].map((v,k)=>field.origin[k]+v*field.step),index=p=>field.offset(...p.map((v,k)=>Math.round((v-field.origin[k])/field.step)));
 const groups=new Map();for(const part of m.parts){assert(destinationPose(asset,part.id,radius),part.name+' safe start');const circuit=part.circuit||'all';if(!groups.has(circuit))groups.set(circuit,[]);groups.get(circuit).push(part);}
 let walked=0;for(const parts of groups.values()){
  const targets=new Set(parts.map(p=>index(p.position))),start=index(parts[0].position),queue=new Uint32Array(cells),previous=new Map([[start,start]]);queue[0]=start;let head=0,tail=1;
  while(head<tail&&targets.size){const at=queue[head++];targets.delete(at);const x=at%nx,y=Math.floor(at/nx)%ny,z=Math.floor(at/(nx*ny));for(const [dx,dy,dz]of [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const next=field.offset(x+dx,y+dy,z+dz);if(next<0||previous.has(next)||field.value(x+dx,y+dy,z+dz)<minimum)continue;previous.set(next,at);queue[tail++]=next;}}
  assert.equal(targets.size,0,key+' usable lumen must connect all source parts');
  for(const part of parts){let at=index(part.position),path=[at];while(at!==start){at=previous.get(at);path.push(at);}for(const route of [path,path.toReversed()]){let p=world(route[0]);for(const next of route.slice(1)){const target=world(next),result=moveInLumen(field,p,target.map((v,k)=>v-p[k]),radius);assert(Math.hypot(...result.position.map((v,k)=>v-target[k]))<1e-7,key+' forward/reverse navigation');p=result.position;walked++;}}}
 }
 let portals=0,transfers=0;if(/^(arm|leg)-/.test(key)){
  central??=load('circulation');
  for(const boundary of central.manifest.boundaries){const option=regionTransitions(central.manifest,boundary.part).find(o=>o.key===key);if(!option)continue;let valid=0;for(let i=0;i<=20;i++){const position=boundary.position.map((v,k)=>v+(boundary.returnPoint[k]-v)*i/20),view={key:'circulation',position,radius:.0004,yaw:.43,pitch:-.24};if(central.field.clearance(position)<view.radius)continue;const pose=regionTransitionPose(central,asset,option,view);if(pose){assert.deepEqual(pose.position,position);assert.equal(pose.yaw,view.yaw);assert.equal(pose.radius,view.radius);valid++;}}assert(valid,option.name+' shared source portal');portals++;}
  assert.equal(portals,key.startsWith('arm')?2:1,key+' vascular streaming');
  if(key.startsWith('leg')){
   const other=load(key.replace(/(artery|vein)$/,(key.endsWith('artery')?'vein':'artery')));
   for(const boundary of m.boundaries)for(const option of regionTransitions(m,boundary.part).filter(o=>o.type==='capillary')){
    let landed=0;
    // A terminal lies on the cap: find a real nearby interior point first.
    const sources=[];field.forEachVoxel((x,y,z,id,value)=>{if(id!==boundary.part||value*field.unit<.0002)return;const position=[x,y,z].map((v,k)=>field.origin[k]+v*field.step);if(Math.hypot(...position.map((v,k)=>v-boundary.position[k]))<boundary.range)sources.push(position);});
    for(const position of sources){
     const view={key,position,radius:.0002,yaw:.43,pitch:-.24},pose=regionTransitionPose(asset,other,option,view);
     if(pose){assert.equal(other.field.region(pose.position),pose.id);assert(other.field.clearance(pose.position)>=pose.radius);assert.equal(pose.yaw,view.yaw);assert.equal(pose.radius,view.radius);const end=other.manifest.boundaries.find(b=>b.part===pose.id);assert(Math.hypot(...pose.position.map((v,k)=>v-end.position[k]))<end.range);landed++;break;}
    }
    assert(landed,option.fromName+' distal artery/vein transition');transfers++;
   }
   assert.equal(transfers,4,key+' four reviewed terminal territories');other.geometry.dispose();
  }
 }
 console.log(JSON.stringify({key,parts:m.parts.length,surfaceSamples:sampled,bidirectionalSteps:walked,portals,transfers,collisionMemoryBytes:field.memoryBytes,triangles:m.triangles}));geometry.dispose();
}
