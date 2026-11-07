// Source blood-space audit. Does not treat the myocardium as a navigable solid.
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {spawnSync} from 'node:child_process';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {MeshBVH} from 'three-mesh-bvh';
const dir='static/models/current/',raw=gunzipSync(fs.readFileSync(dir+'z-whole-organs.glb.gz'));
const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length),'')).scene;root.updateMatrixWorld(true);
const identities=JSON.parse(fs.readFileSync(dir+'z-whole-manifest.json')).identities;
const step=.0006,origin=[-.05,1.23,-.045],dimensions=[242,210,235],n=dimensions.reduce((a,b)=>a*b,1),volumes=[],reports=[];
for(const name of ['Right atrium','Right ventricle','Left atrium','Left ventricle']){
 const id=Object.entries(identities).find(([,v])=>v.sourceMesh===name)[0],mesh=root.getObjectByName(id),g=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);g.computeBoundingBox();
 const tree=new MeshBVH(g,{indirect:true}),votes=new Uint8Array(n),tissue=new Uint8Array(n),surface=new Uint8Array(n),box=g.boundingBox,lo=box.min.toArray().map((v,i)=>Math.max(0,Math.floor((v-origin[i])/step))),hi=box.max.toArray().map((v,i)=>Math.min(dimensions[i]-1,Math.ceil((v-origin[i])/step))),ray=new T.Ray(),counts={rays:0,odd:0,bloodIntervals:0};
 for(let axis=0;axis<3;axis++){const u=(axis+1)%3,v=(axis+2)%3;ray.direction.set(0,0,0).setComponent(axis,1);
  for(let a=lo[u];a<=hi[u];a++)for(let b=lo[v];b<=hi[v];b++){
   const q=[0,0,0];q[u]=a;q[v]=b;ray.origin.fromArray(q.map((x,i)=>origin[i]+x*step));ray.origin.setComponent(axis,box.min.getComponent(axis)-.005);
   const hits=[];for(const hit of tree.raycast(ray,T.DoubleSide).sort((a,b)=>a.distance-b.distance)){if(hits.length&&Math.abs(hit.distance-hits.at(-1).distance)<1e-7)continue;hits.push(hit);q[axis]=Math.round((hit.point.getComponent(axis)-origin[axis])/step);surface[q[0]+dimensions[0]*(q[1]+dimensions[1]*q[2])]=1;}
   counts.rays++;if(hits.length%2)counts.odd++;
   for(let j=0;j<hits.length-1;j++){
    const first=hits[j],second=hits[j+1],out=first.face.normal.getComponent(axis)>1e-6,into=second.face.normal.getComponent(axis)<-1e-6;
    const blood=out&&into,wall=!out&&!into;if(!blood&&!wall)continue;if(blood)counts.bloodIntervals++;
    const from=Math.max(lo[axis],Math.ceil((first.point.getComponent(axis)-origin[axis])/step)),to=Math.min(hi[axis],Math.floor((second.point.getComponent(axis)-origin[axis])/step));
    for(let k=from;k<=to;k++){q[axis]=k;(blood?votes:tissue)[q[0]+dimensions[0]*(q[1]+dimensions[1]*q[2])]|=1<<axis;}
   }
  }
 }
 volumes.push(Buffer.from(votes),Buffer.from(tissue),Buffer.from(surface));reports.push({name,...counts});g.dispose();
}
const header={step,origin,dimensions,reports};const result=spawnSync('python',['-X','utf8','audit-journey-cardiac.py'],{input:Buffer.concat([Buffer.from(JSON.stringify(header)+'\n'),...volumes]),maxBuffer:2e6});if(result.status!==0)throw Error(result.stderr.toString());console.log(result.stdout.toString());
