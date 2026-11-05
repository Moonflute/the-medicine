// Build-time only. Reuses the shipped, attributed source meshes; never edits them.
// Python requirements: numpy, scipy, scikit-image. No dependency is sent to browsers.
import fs from 'node:fs';
import {gunzipSync,gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshBVH} from 'three-mesh-bvh';
import {MeshoptSimplifier} from 'meshoptimizer';
import {journeySources} from './journey-sources.mjs';
import {journeyLandmarks} from './journey-landmarks.mjs';
const directory='static/models/current/',sourceManifest=JSON.parse(fs.readFileSync(directory+'z-whole-manifest.json','utf8'));
if(process.argv[2]&&!Object.hasOwn(journeySources,process.argv[2]))throw Error('Unknown journey region: '+process.argv[2]);
await MeshoptSimplifier.ready;
function compactSurface(raw,report){
 const n=report.vertices,buffer=Uint8Array.from(raw),positions=new Float32Array(buffer.buffer,0,n*3),normals=new Float32Array(buffer.buffer,n*12,n*3),colors=buffer.subarray(n*24,n*27),indices=new Uint32Array(buffer.slice(n*27).buffer);
 let [reduced,error]=MeshoptSimplifier.simplify(indices,positions,3,Math.floor(indices.length*.24/3)*3,.00012,['ErrorAbsolute','LockBorder']);
 // Collapse can leave opposite, coincident triangle pairs on zero-volume fins.
 // Cancel the pair; retaining one would introduce an open surface edge.
 const duplicates=new Map(),cancelled=new Set();for(let i=0;i<reduced.length;i+=3){const tri=[reduced[i],reduced[i+1],reduced[i+2]],key=[...tri].sort((a,b)=>a-b).join(',');if(duplicates.has(key)){cancelled.add(i);cancelled.add(duplicates.get(key));}else duplicates.set(key,i);}
 if(cancelled.size)reduced=Uint32Array.from([...reduced].filter((_,i)=>!cancelled.has(i-i%3)));
 const edgeCounts=new Map();for(let i=0;i<reduced.length;i+=3)for(const [a,b]of [[reduced[i],reduced[i+1]],[reduced[i+1],reduced[i+2]],[reduced[i+2],reduced[i]]]){const key=a<b?a+','+b:b+','+a;edgeCounts.set(key,(edgeCounts.get(key)||0)+1);}
 // A topology-preserving source is preferable to an aggressive reduction that
 // creates a pinched edge. This fallback is bounded by the voxel surface size.
 if([...edgeCounts.values()].some(count=>count!==2)){reduced=indices;error=0;}
 const [remap,count]=MeshoptSimplifier.compactMesh(reduced),p=new Float32Array(count*3),normal=new Float32Array(count*3),color=new Uint8Array(count*3);
 for(let i=0;i<n;i++){const j=remap[i];if(j===0xffffffff||j===undefined)continue;p.set(positions.subarray(i*3,i*3+3),j*3);normal.set(normals.subarray(i*3,i*3+3),j*3);color.set(colors.subarray(i*3,i*3+3),j*3);}
 const result=Buffer.concat([Buffer.from(p.buffer),Buffer.from(normal.buffer),Buffer.from(color.buffer),Buffer.from(reduced.buffer)]);
 report.sourceTriangles=report.triangles;report.triangles=reduced.length/3;report.vertices=count;report.surfaceBytes=result.length;report.simplificationErrorMetres=error;
 return result;
}
for(const [key,config]of Object.entries(journeySources)){
 if(process.argv[2]&&process.argv[2]!==key)continue;
 const bytes=fs.readFileSync(directory+config.file),raw=gunzipSync(bytes),root=(await new GLTFLoader().parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.byteLength),'')).scene;
 root.updateMatrixWorld(true);const meshes=[],bounds=new T.Box3();
 root.traverse(mesh=>{if(!mesh.isMesh)return;const identity=sourceManifest.identities[mesh.name],index=config.parts.findIndex(p=>p.source===identity?.sourceMesh);if(index<0)return;const geometry=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);geometry.computeBoundingBox();bounds.union(geometry.boundingBox);meshes.push({id:index+1,name:mesh.name,geometry,bvh:new MeshBVH(geometry,{indirect:true})});config.parts[index].sourceId=mesh.name;});
 if(config.crop){bounds.min.fromArray(config.crop.min);bounds.max.fromArray(config.crop.max);}
 if(key==='upper')bounds.expandByPoint(new T.Vector3(0,1.58,.105));
 bounds.expandByScalar(.006);const step=config.spacing,origin=bounds.min.toArray().map(v=>Math.floor(v/step)*step),dimensions=bounds.max.toArray().map((v,i)=>Math.ceil((v-origin[i])/step)+1);
 const [nx,ny,nz]=dimensions,labels=new Uint8Array(nx*ny*nz),obstacles=new Uint8Array(labels.length),ray=new T.Ray(new T.Vector3(),new T.Vector3(1,0,0));let oddRays=0,castRays=0;
 const anatomy=key==='upper'?await journeyLandmarks(root):null;
 for(const {id,geometry,bvh,obstacle=false}of [...meshes,...(anatomy?.meshes||[]).map(m=>({...m,obstacle:true}))]){
  const box=geometry.boundingBox,min=box.min.toArray(),max=box.max.toArray();
  // Source surfaces have small open seams. Combine independent orthogonal
  // interior scans so a missed ray cannot create a slab across a real lumen.
  for(let axis=0;axis<3;axis++){const u=(axis+1)%3,v=(axis+2)%3,lo=min.map((x,i)=>Math.max(0,Math.floor((x-origin[i])/step))),hi=max.map((x,i)=>Math.min(dimensions[i]-1,Math.ceil((x-origin[i])/step)));ray.direction.set(0,0,0).setComponent(axis,1);
  for(let a=lo[u];a<=hi[u];a++)for(let b=lo[v];b<=hi[v];b++){
   const coordinate=[0,0,0];coordinate[u]=a;coordinate[v]=b;ray.origin.fromArray(coordinate.map((x,i)=>origin[i]+x*step));ray.origin.setComponent(axis,min[axis]-.01);const hits=bvh.raycast(ray,T.DoubleSide).sort((a,b)=>a.distance-b.distance),xs=[];
   for(const hit of hits){const x=hit.point.getComponent(axis);if(!xs.length||Math.abs(x-xs.at(-1))>1e-7)xs.push(x);}castRays++;if(xs.length%2){oddRays++;continue;}
   // The source esophagus has paired inner/outer wall surfaces. Navigate the
   // space between its inner crossings, never the tissue inside the wall.
   const hollow=!obstacle&&config.parts[id-1].hollowShell,target=obstacle?obstacles:labels;
   for(let h=hollow?1:0;h<xs.length-(hollow?2:0);h+=2){const start=Math.max(0,Math.ceil((xs[h]-origin[axis])/step)),end=Math.min(dimensions[axis]-1,Math.floor((xs[h+1]-origin[axis])/step));for(let x=start;x<=end;x++){coordinate[axis]=x;target[coordinate[0]+nx*(coordinate[1]+ny*coordinate[2])]=id;}}
  }
  }
  geometry.dispose();
 }
 const header={key,...config,origin,dimensions,castRays,oddRays,sourceSha256:createHash('sha256').update(bytes).digest('hex'),landmarks:anatomy?.landmarks||[],landmarkRegistration:anatomy?.registration||null};
 const result=spawnSync('python',['build-journey-surface.py'],{input:Buffer.concat([Buffer.from(JSON.stringify(header)+'\n'),Buffer.from(labels),Buffer.from(obstacles)]),maxBuffer:128*1024*1024});
 if(result.stderr.length)console.error(result.stderr.toString());if(result.status!==0)throw Error('Surface build failed');
 const separator=result.stdout.indexOf(10),report=JSON.parse(result.stdout.subarray(0,separator)),surface=result.stdout.subarray(separator+1,separator+1+report.surfaceBytes),volume=result.stdout.subarray(separator+1+report.surfaceBytes);
 const optimized=compactSurface(surface,report);
 fs.writeFileSync(directory+'journey-'+key+'-surface.bin.gz',gzipSync(optimized,{level:9}));fs.writeFileSync(directory+'journey-'+key+'-volume.bin.gz',gzipSync(volume,{level:9}));
 const notice='기존 원본의 외형·좌표를 바탕으로 만든 내부 탐색용 재구성입니다. 실제 점막·벽 두께·생리적 개폐를 분할한 자료가 아닙니다. 구강·인두·후두 연결부는 참고 해부학에 따른 모식 보강이며, 표시된 끝은 모델 제공 범위입니다.';
 const manifest={...header,...report,surface:'./models/current/journey-'+key+'-surface.bin.gz',volume:'./models/current/journey-'+key+'-volume.bin.gz',source:sourceManifest.source,representation:'source-derived-navigation-reconstruction',license:'CC BY-SA 4.0',notice:notice+(anatomy?' 혀는 기존 좌표의 표면을, 후두개는 연골 기준으로 좌표 정합한 기존 BodyParts3D 표면을 재사용했습니다.':'')};
 fs.writeFileSync(directory+'journey-'+key+'.json',JSON.stringify(manifest));
 root.traverse(m=>{m.geometry?.dispose();m.material?.dispose();});console.log(JSON.stringify({key,dimensions,vertices:report.vertices,triangles:report.triangles,bytes:fs.statSync(directory+'journey-'+key+'-surface.bin.gz').size+fs.statSync(directory+'journey-'+key+'-volume.bin.gz').size}));
}
