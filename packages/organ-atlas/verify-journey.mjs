import assert from 'node:assert/strict';
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import * as T from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {JourneyVolume,moveInLumen,packJourneyBricks} from './src/journey/volume.js';
import {entranceHints,visibleThroughLumen} from './src/journey/wayfinding.js';

// A right-angle fork, a thin wall, and a disconnected parallel channel.
const synthetic={step:.001,clearance:([x,y,z])=>Math.max(Math.min(.03-Math.abs(x),.005-Math.abs(y),.005-Math.abs(z)),Math.min(.005-Math.abs(x),.03-Math.abs(y),.005-Math.abs(z)),Math.min(.03-Math.abs(x),.002-Math.abs(y-.011),.005-Math.abs(z)))};
synthetic.gradient=p=>[0,1,2].map(i=>{const a=[...p],b=[...p];a[i]+=.0001;b[i]-=.0001;return (synthetic.clearance(a)-synthetic.clearance(b))/.0002;});
let move=moveInLumen(synthetic,[0,0,0],[.02,0,0],.0016);assert(Math.abs(move.position[0]-.02)<1e-8);
move=moveInLumen(synthetic,move.position,[-.02,0,0],.0016);assert(Math.hypot(...move.position)<1e-7,'backtracking');
move=moveInLumen(synthetic,[0,0,0],[0,.025,0],.0016);assert(move.position[1]>.0249,'turn into a branch');
move=moveInLumen(synthetic,[.02,0,0],[0,10,0],.0016);assert(move.position[1]<.0035,'large frame cannot tunnel through to another channel');
move=moveInLumen(synthetic,[.02,0,0],[.01,.01,0],.0016);assert(synthetic.clearance(move.position)>=.0016&&move.position[0]>.02,'wall sliding');
assert.deepEqual(moveInLumen(synthetic,[.02,0,0],[0,.005,0],.006).position,[.02,0,0],'no invalid-size teleport');
assert(visibleThroughLumen(synthetic,[0,0,0],[.02,0,0]),'visible hint inside the same lumen');
assert(!visibleThroughLumen(synthetic,[.02,0,0],[.02,.011,0]),'hide hints beyond the intervening wall');

for(const key of process.argv[2]?[process.argv[2]]:['upper','vessels','veins']){
 const prefix=new URL('./static/models/current/journey-'+key,import.meta.url).pathname.replace(/^\/(?=[A-Za-z]:)/,'');
 const path=decodeURIComponent(prefix),m=JSON.parse(fs.readFileSync(path+'.json','utf8')),packed=Uint8Array.from(gunzipSync(fs.readFileSync(path+'-volume.bin.gz'))),field=new JourneyVolume(m,packed),count=m.dimensions.reduce((a,b)=>a*b,1),raw=m.volumeFormat==='bricks-v1'?new Uint8Array(count*2):packed;
 if(m.volumeFormat==='bricks-v1')field.forEachVoxel((x,y,z,id,value)=>{const i=field.offset(x,y,z);raw[i]=value;raw[count+i]=id;});
 const restored=new JourneyVolume({...m,volumeFormat:'bricks-v1'},packJourneyBricks(field));
 for(const part of m.parts){assert.equal(restored.region(part.position),field.region(part.position));assert.equal(restored.clearance(part.position),field.clearance(part.position));}
 if(key==='upper'){
  assert.deepEqual(m.landmarks.map(p=>p.name),['Tongue','Epiglottis']);
  const registration=m.landmarkRegistration;assert.equal(registration.checks.filter(c=>c.role==='held-out-check').length,2);
  for(const c of registration.checks)assert(c.rmsMetres<.001&&c.p95Metres<.002,'registered laryngeal cartilage tolerance');
  // Known source tissue positions must remain obstacles after remeshing.
  for(const [name,p]of [['tongue',[0,1.530,.054]],['epiglottis',[.001,1.500,.020]]])assert.equal(field.clearance(p),0,name+' cannot be traversed');
  const hints=entranceHints(m),larynx=hints.find(h=>h.id==='laryngeal-inlet'),esophagus=hints.find(h=>h.id==='esophagus');
  assert(larynx.point[2]>esophagus.point[2],'airway entrance lies anterior to the esophageal entrance');
  for(const hint of [larynx,esophagus])assert(visibleThroughLumen(field,m.parts[1].position,hint.point),hint.name+' is visible from the pharynx');
 }
 const surface=Uint8Array.from(gunzipSync(fs.readFileSync(path+'-surface.bin.gz'))),n=m.vertices,g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(new Float32Array(surface.buffer,0,n*3),3));g.setIndex(new T.BufferAttribute(new Uint32Array(surface.slice(n*27).buffer),1));const bvh=new MeshBVH(g,{indirect:true});
 let sampled=0,moves=0,worstMargin=Infinity;const [nx,ny]=field.dimensions;
 for(let i=0;i<raw.length/2;i+=137){if(raw[i]<7)continue;const x=i%nx,y=Math.floor(i/nx)%ny,z=Math.floor(i/(nx*ny)),p=[x,y,z].map((v,k)=>field.origin[k]+v*field.step),clear=field.clearance(p),nearest=bvh.closestPointToPoint(new T.Vector3(...p));assert.equal(field.value(x,y,z),raw[i]);worstMargin=Math.min(worstMargin,nearest.distance-clear);assert(nearest.distance+1e-6>=clear,`${key}: rendered wall lies inside claimed clearance`);sampled++;
  for(const delta of [[.007,.003,-.002],[-.003,-.009,.002],[.1,-.05,.03]]){const result=moveInLumen(field,p,delta,.0016);assert(field.clearance(result.position)>=.0016-1e-8);moves++;}
 }
 for(const part of m.parts)assert(field.clearance(part.position)>=.0004,`${key}: unsafe start ${part.name}`);
 // Reconstruct actual voxel routes, then traverse each with the production
 // swept-sphere controller in both directions. These are tests, not rail paths.
 const nvox=raw.length/2,previous=new Int32Array(nvox),queue=new Int32Array(raw.subarray(0,nvox).reduce((n,v)=>n+(v>=2),0)),cell=p=>p.map((v,i)=>Math.round((v-m.origin[i])/m.spacing)),index=p=>field.offset(...cell(p)),start=index(m.parts[key==='upper'?0:1].position),targets=new Set(m.parts.map(p=>index(p.position)));let head=0,tail=1;queue[0]=start;previous[start]=start+1;
 while(head<tail&&targets.size){const i=queue[head++];targets.delete(i);const x=i%nx,y=Math.floor(i/nx)%ny,z=Math.floor(i/(nx*ny));for(const [j,valid]of [[i-1,x>0],[i+1,x<nx-1],[i-nx,y>0],[i+nx,y<ny-1],[i-nx*ny,z>0],[i+nx*ny,z<m.dimensions[2]-1]])if(valid&&!previous[j]&&raw[j]>=2){previous[j]=i+1;queue[tail++]=j;}}
 assert.equal(targets.size,0,`${key}: unreachable destination`);let walked=0;
 const world=i=>[i%nx,Math.floor(i/nx)%ny,Math.floor(i/(nx*ny))].map((v,k)=>m.origin[k]+v*m.spacing);
 for(const part of m.parts){let cursor=index(part.position),path=[cursor];while(cursor!==start){cursor=previous[cursor]-1;path.push(cursor);}for(const route of [path,[...path].reverse()]){let p=world(route[0]);for(const next of route.slice(1)){const dest=world(next),move=moveInLumen(field,p,dest.map((v,k)=>v-p[k]),.0004);assert(Math.hypot(...move.position.map((v,k)=>v-dest[k]))<1e-7,`${key}: blocked along connected path to ${part.name}`);p=move.position;walked++;}}}
 console.log(JSON.stringify({key,surfaceSamples:sampled,sweptMoves:moves,forwardReverseRouteSteps:walked,collisionMemoryBytes:field.memoryBytes,minConservativeMarginMm:Number((worstMargin*1000).toFixed(3))}));g.dispose();
}
console.log('PASS: reverse movement, fork entry, wall sliding, high-speed collision, and source surface/field agreement.');
