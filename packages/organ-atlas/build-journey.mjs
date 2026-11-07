// Build-time only. Reuses the shipped, attributed source meshes; never edits them.
// Python requirements: numpy, scipy, scikit-image. No dependency is sent to browsers.
import fs from 'node:fs';
import {gunzipSync,gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {MeshBVH} from 'three-mesh-bvh';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {compactJourneySurface} from './journey-surface-compact.mjs';
import {journeySources,journeyNotice} from './journey-sources.mjs';
import {journeyLandmarks} from './journey-landmarks.mjs';
import {sourceBowelPath,applySourcePathStarts} from './journey-bowel.mjs';
import {JourneyVolume,packJourneyBricks} from './src/journey/volume.js';
import {sampleCardiacBloodSpace} from './journey-cardiac-lumen.mjs';
import {constrainSurfaceClearance} from './journey-surface-clearance.mjs';
const directory='static/models/current/',sourceManifest=JSON.parse(fs.readFileSync(directory+'z-whole-manifest.json','utf8'));
if(process.argv[2]&&!Object.hasOwn(journeySources,process.argv[2]))throw Error('Unknown journey region: '+process.argv[2]);
if(process.argv.includes('--surface-only')){
 const key=process.argv[2];if(key!=='circulation')throw Error('Surface-only rebuild requires the reviewed circulation field');
 const manifest=JSON.parse(fs.readFileSync(directory+'journey-'+key+'.json','utf8'));
 for(const asset of manifest.sourceAssets)if(createHash('sha256').update(fs.readFileSync(directory+asset.file)).digest('hex')!==asset.sha256)throw Error('Source changed; a complete reconstruction is required');
 const result=spawnSync('python',['-X','utf8','rebuild-journey-mesh.py'],{input:JSON.stringify(manifest)+'\n',maxBuffer:128*1024*1024});
 if(result.status!==0)throw Error(result.stderr.toString()||result.error?.message||'Surface rebuild failed');
 const separator=result.stdout.indexOf(10),report=JSON.parse(result.stdout.subarray(0,separator)),raw=result.stdout.subarray(separator+1);
 if(raw.length!==report.surfaceBytes)throw Error('Incomplete surface rebuild');
 const optimized=await compactJourneySurface(raw,report);
 fs.writeFileSync(directory+'journey-'+key+'-surface.bin.gz',gzipSync(optimized,{level:9}));
 fs.writeFileSync(directory+'journey-'+key+'.json',JSON.stringify({...manifest,...report}));
 console.log(JSON.stringify({key,...report,compressedSurfaceBytes:fs.statSync(directory+'journey-'+key+'-surface.bin.gz').size,collisionFieldUnchanged:true}));
 process.exit(0);
}
for(const [key,config]of Object.entries(journeySources)){
 if(process.argv[2]&&process.argv[2]!==key)continue;
 console.error('Building '+key+': source surfaces');
 const meshes=[],bounds=new T.Box3(),roots=[],sourceAssets=[];
 for(const file of new Set([config.file,...config.parts.map(p=>p.sourceFile).filter(Boolean)])){
  const bytes=fs.readFileSync(directory+file),raw=gunzipSync(bytes),root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.byteLength),'')).scene;
  root.updateMatrixWorld(true);roots.push(root);sourceAssets.push({file,sha256:createHash('sha256').update(bytes).digest('hex')});
  const grouped=new Map();
  root.traverse(mesh=>{
   if(!mesh.isMesh)return;const sourceName=sourceManifest.identities[mesh.name]?.sourceMesh||mesh.name,index=config.parts.findIndex(p=>(p.source===sourceName||p.sources?.includes(sourceName))&&(p.sourceFile||config.file)===file);if(index<0)return;
   // Decode normalized/quantised source positions before applying metre-space
   // transforms. Source anatomical patches can form one closed organ shell.
   const input=mesh.geometry.attributes.position,position=new Float32Array(input.count*3);for(let i=0;i<input.count;i++){position[i*3]=input.getX(i);position[i*3+1]=input.getY(i);position[i*3+2]=input.getZ(i);}
   const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(position,3));if(mesh.geometry.index)geometry.setIndex(mesh.geometry.index.clone());else geometry.setIndex(Array.from({length:input.count},(_,i)=>i));geometry.applyMatrix4(mesh.matrixWorld);
   if(!grouped.has(index))grouped.set(index,[]);grouped.get(index).push(geometry);config.parts[index].sourceIds??=[];config.parts[index].sourceIds.push(mesh.name);config.parts[index].sourceId??=mesh.name;
  });
  for(const [index,patches]of grouped){const geometry=patches.length===1?patches[0]:mergeGeometries(patches);if(patches.length>1)patches.forEach(g=>g.dispose());geometry.computeBoundingBox();const box=geometry.boundingBox.clone(),crop=config.parts[index].crop;if(crop)box.intersect(new T.Box3(new T.Vector3(...crop.min),new T.Vector3(...crop.max)));bounds.union(box);meshes.push({id:index+1,name:config.parts[index].name,geometry,bvh:new MeshBVH(geometry,{indirect:true})});}
 }
 const root=roots[0];
 const continuity=key==='upper'?JSON.parse(fs.readFileSync('journey-continuity-source-audit.json','utf8')):null;
 if(continuity&&sourceAssets.find(a=>a.file===continuity.output.file)?.sha256!==continuity.output.sha256)throw Error('Unreviewed bronchial source revision');
 const sourceContinuity=continuity&&Object.fromEntries(['sourceURL','sourceBlob','sourceSha256','method','coordinateFrame','checks','grouping'].map(k=>[k,continuity[k]]));
 const sourceCardiac=config.parts.some(p=>p.bloodSpace)?JSON.parse(fs.readFileSync('journey-cardiac-source-audit.json','utf8')):null;
 if(sourceCardiac&&sourceAssets.find(a=>a.file===sourceCardiac.output.file)?.sha256!==sourceCardiac.output.sha256)throw Error('Unreviewed cardiac source revision');
 for(const part of config.parts)if((part.source||part.sources)&&!part.sourceId)throw Error('Missing source mesh: '+part.name);
 if(config.crop){bounds.min.fromArray(config.crop.min);bounds.max.fromArray(config.crop.max);}
 if(key==='upper')bounds.expandByPoint(new T.Vector3(0,1.58,.105));
 bounds.expandByScalar(.006);const step=config.spacing,origin=bounds.min.toArray().map(v=>Math.floor(v/step)*step),dimensions=bounds.max.toArray().map((v,i)=>Math.ceil((v-origin[i])/step)+1);
 const [nx,ny,nz]=dimensions,labels=new Uint8Array(nx*ny*nz),obstacles=new Uint8Array(labels.length),forkOverlaps=new Uint8Array(labels.length),forkParents=new Map(),ray=new T.Ray(new T.Vector3(),new T.Vector3(1,0,0));let oddRays=0,castRays=0;
 for(const [parent,children]of config.forks||[])for(let i=0;i<children.length;i++)for(let j=i+1;j<children.length;j++)forkParents.set([children[i],children[j]].sort((a,b)=>a-b).join(':'),parent);
 const anatomy=key==='upper'?await journeyLandmarks(root):null;
 const centerlines=key==='upper'?[sourceBowelPath(meshes.find(m=>m.id===10).geometry)]:[],bloodSpaceAudit=[];
 for(const {id,geometry,bvh,obstacle=false}of [...meshes,...(anatomy?.meshes||[]).map(m=>({...m,obstacle:true}))]){
  if(!obstacle&&config.parts[id-1].sourceSweep){geometry.dispose();continue;}
  if(!obstacle&&config.parts[id-1].bloodSpace){bloodSpaceAudit.push(sampleCardiacBloodSpace({id,geometry,bvh},{origin,dimensions,step,labels,obstacles}));geometry.dispose();continue;}
  const votes=!obstacle&&(id>=11||['urinary','biliary'].includes(config.kind))&&config.parts[id-1].hollowShell?new Uint8Array(labels.length):null;
  const sourceMin=geometry.boundingBox.min.toArray(),box=geometry.boundingBox.clone(),crop=!obstacle&&config.parts[id-1].crop;if(crop){box.min.max(new T.Vector3(...crop.min));box.max.min(new T.Vector3(...crop.max));}const min=box.min.toArray(),max=box.max.toArray();
  // Source surfaces have small open seams. Combine independent orthogonal
  // interior scans so a missed ray cannot create a slab across a real lumen.
  for(let axis=0;axis<3;axis++){const u=(axis+1)%3,v=(axis+2)%3,lo=min.map((x,i)=>Math.max(0,Math.floor((x-origin[i])/step))),hi=max.map((x,i)=>Math.min(dimensions[i]-1,Math.ceil((x-origin[i])/step)));ray.direction.set(0,0,0).setComponent(axis,1);
  for(let a=lo[u];a<=hi[u];a++)for(let b=lo[v];b<=hi[v];b++){
   const coordinate=[0,0,0];coordinate[u]=a;coordinate[v]=b;ray.origin.fromArray(coordinate.map((x,i)=>origin[i]+x*step));ray.origin.setComponent(axis,sourceMin[axis]-.01);const hits=bvh.raycast(ray,T.DoubleSide).sort((a,b)=>a.distance-b.distance),xs=[];
   for(const hit of hits){const x=hit.point.getComponent(axis);if(!xs.length||Math.abs(x-xs.at(-1))>1e-7)xs.push(x);}castRays++;if(xs.length%2){oddRays++;continue;}
   // The source esophagus has paired inner/outer wall surfaces. Navigate the
   // space between its inner crossings, never the tissue inside the wall.
   const hollow=!obstacle&&config.parts[id-1].hollowShell,target=obstacle?obstacles:labels;
   // Four crossings form one hollow wall (outer, inner, inner, outer).
   // Do not fill the exterior interval between separate turns of that wall.
   for(let h=hollow?1:0;h<xs.length-(hollow?2:0);h+=hollow?4:2){const start=Math.max(lo[axis],Math.ceil((xs[h]-origin[axis])/step)),end=Math.min(hi[axis],Math.floor((xs[h+1]-origin[axis])/step));for(let x=start;x<=end;x++){coordinate[axis]=x;const at=coordinate[0]+nx*(coordinate[1]+ny*coordinate[2]);if(votes)votes[at]|=1<<axis;else{if(!obstacle&&target[at]&&target[at]!==id){const parent=forkParents.get([target[at],id].sort((a,b)=>a-b).join(':'));if(parent)forkOverlaps[at]=parent;}target[at]=id;}}}
  }
  }
  if(votes)for(let i=0;i<votes.length;i++)if(votes[i]&&(votes[i]&(votes[i]-1)))labels[i]=id;
  geometry.dispose();
 }
 // Some source daughters duplicate their proximal stem. Its shared volume is
 // the parent fork, not two adjacent channels with a manufactured divider.
 let sharedBranchVoxels=0;for(let i=0;i<labels.length;i++)if(forkOverlaps[i]){labels[i]=forkOverlaps[i];sharedBranchVoxels++;}
 // Source-segmented vessels can run within myocardium (notably coronaries).
 // The conservative chamber-wall approximation must not erase those actual
 // vessel interiors. Later adjacency barriers still prohibit septal shortcuts.
 let sourceVesselWallOverlapVoxels=0;
 if(config.kind==='circulation')for(let i=0;i<labels.length;i++)if(obstacles[i]&&labels[i]&&!config.parts[labels[i]-1].bloodSpace){obstacles[i]=0;sourceVesselWallOverlapVoxels++;}
 const header={key,...config,origin,dimensions,castRays,oddRays,sharedBranchVoxels,sourceVesselWallOverlapVoxels,sourceSha256:sourceAssets[0].sha256,sourceAssets,...(sourceContinuity?{sourceContinuity}:{}),...(sourceCardiac?{sourceCardiac}:{}),...(bloodSpaceAudit.length?{bloodSpaceAudit}:{}),centerlines,landmarks:anatomy?.landmarks||[],landmarkRegistration:anatomy?.registration||null};
 console.error('Building '+key+': connections, surface and collision field');
 const result=spawnSync('python',['build-journey-surface.py'],{input:Buffer.concat([Buffer.from(JSON.stringify(header)+'\n'),Buffer.from(labels),Buffer.from(obstacles)]),maxBuffer:Math.max(128*1024*1024,labels.length*2+64*1024*1024)});
 if(result.stderr.length)console.error(result.stderr.toString());if(result.status!==0)throw Error('Surface build failed: '+(result.error?.message||result.signal||result.status));
 const separator=result.stdout.indexOf(10),report=JSON.parse(result.stdout.subarray(0,separator)),surface=result.stdout.subarray(separator+1,separator+1+report.surfaceBytes),volume=result.stdout.subarray(separator+1+report.surfaceBytes);
 const optimized=await compactJourneySurface(surface,report);
 console.error('Building '+key+': compact sparse volume');
 const field=new JourneyVolume({...header,...report},volume);if(config.enforceSurfaceClearance)report.surfaceClearance=constrainSurfaceClearance(field,optimized,report);applySourcePathStarts(report,centerlines,field);const packed=packJourneyBricks(field);
 fs.writeFileSync(directory+'journey-'+key+'-surface.bin.gz',gzipSync(optimized,{level:9}));fs.writeFileSync(directory+'journey-'+key+'-volume.bin.gz',gzipSync(packed,{level:9}));

 const manifest={...header,...report,centerlines:undefined,sourcePaths:centerlines.map(({points,...audit})=>({...audit,ends:[points[0].slice(0,3),points.at(-1).slice(0,3)]})),volumeFormat:'bricks-v1',volumeBytes:packed.byteLength,surface:'./models/current/journey-'+key+'-surface.bin.gz',volume:'./models/current/journey-'+key+'-volume.bin.gz',source:config.source||sourceManifest.source,representation:'source-derived-navigation-reconstruction',license:config.license||'CC BY-SA 4.0',notice:journeyNotice(key)};
 fs.writeFileSync(directory+'journey-'+key+'.json',JSON.stringify(manifest));
 for(const source of roots)source.traverse(m=>{m.geometry?.dispose();m.material?.dispose();});console.log(JSON.stringify({key,dimensions,vertices:report.vertices,triangles:report.triangles,bytes:fs.statSync(directory+'journey-'+key+'-surface.bin.gz').size+fs.statSync(directory+'journey-'+key+'-volume.bin.gz').size}));
}
