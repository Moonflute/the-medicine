// Source-derived location silhouettes. No new 3D model loads at runtime.
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Vector3} from 'three';
const dir='static/models/current/',identities=JSON.parse(fs.readFileSync(dir+'z-whole-manifest.json','utf8')).identities;
const layers=[],buffers=[],sources=[];
for(const file of ['z-whole-skeleton-optimized.glb.gz','z-whole-organs.glb.gz']){
 const bytes=fs.readFileSync(dir+file),raw=gunzipSync(bytes),root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length),'')).scene;root.updateMatrixWorld(true);sources.push({file,sha256:createHash('sha256').update(bytes).digest('hex')});
 root.traverse(mesh=>{if(!mesh.isMesh)return;const name=identities[mesh.name]?.sourceMesh||'',bone=file.includes('skeleton'),color=bone?'#738792':/lobe.*lung/.test(name)?'#aa7c80':/atrium|ventricle/.test(name)?'#b56866':name==='Liver'?'#94736b':/Kidney/.test(name)?'#a5756b':/Stomach|Duodenum|Jejunum|colon|Oesophagus/.test(name)?'#a8947b':null;if(!color)return;
  // Optimized bones use normalized integer attributes. Decode to float before
  // transforming; writing world metres back to an integer accessor loses them.
  const attribute=mesh.geometry.attributes.position,p=new Float32Array(attribute.count*3),v=new Vector3();for(let i=0;i<attribute.count;i++){v.fromBufferAttribute(attribute,i).applyMatrix4(mesh.matrixWorld);if(!Number.isFinite(v.x)||v.y<-.02||v.y>1.8)throw Error('Invalid world coordinates: '+name);v.toArray(p,i*3);}
  const index=mesh.geometry.index?.array||Uint32Array.from({length:attribute.count},(_,i)=>i),indices=Uint32Array.from(index);layers.push({name,color,positions:p.length,indices:indices.length});buffers.push(Buffer.from(p.buffer),Buffer.from(indices.buffer));
 });root.traverse(m=>{m.geometry?.dispose();m.material?.dispose();});
}
const bounds={min:[-.36,0,-.15],max:[.36,1.74,.18]},header={layers,bounds,width:288,height:672};
const result=spawnSync('python',['-X','utf8','prepare-journey-context.py'],{input:Buffer.concat([Buffer.from(JSON.stringify(header)+'\n'),...buffers]),maxBuffer:8*1024*1024});if(result.status!==0)throw Error(result.stderr.toString());
const images=JSON.parse(result.stdout),files={};for(const axis of ['front','side']){const file='journey-context-'+axis+'.png',bytes=Buffer.from(images[axis],'base64');fs.writeFileSync(dir+file,bytes);files[axis]='./models/current/'+file;}
fs.writeFileSync('src/journey/body-context-data.js','// Generated from attributed Z-Anatomy surfaces by prepare-journey-context.mjs.\nexport const bodyContext='+JSON.stringify({bounds,files,coordinateFrame:'z-anatomy',sources})+';\n');
console.log('Prepared exact-coordinate front/side context:',Object.values(files).map(f=>fs.statSync('static/'+f.slice(2)).size),'bytes');
