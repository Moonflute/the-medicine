// Reproducible source checks; does not alter source assets or align specimens.
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {MeshBVH} from 'three-mesh-bvh';
import {journeySources} from './journey-sources.mjs';
const dir='static/models/current/',identities=JSON.parse(fs.readFileSync(dir+'z-whole-manifest.json')).identities,cache=new Map();
async function load(file){
 if(cache.has(file))return cache.get(file);
 const bytes=fs.readFileSync(dir+file),raw=gunzipSync(bytes),root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length),'')).scene;root.updateMatrixWorld(true);
 const meshes=new Map();root.traverse(mesh=>{if(!mesh.isMesh)return;const geometry=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);geometry.computeBoundingBox();meshes.set(identities[mesh.name]?.sourceMesh||mesh.name,{geometry,bvh:new MeshBVH(geometry,{indirect:true}),id:mesh.name});});
 const asset={file,sha256:createHash('sha256').update(bytes).digest('hex'),meshes};cache.set(file,asset);return asset;
}
function closest(a,b){
 let gap=Infinity,source,target;const v=new T.Vector3(),p=a.geometry.attributes.position;
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const hit=b.bvh.closestPointToPoint(v);if(hit.distance<gap){gap=hit.distance;source=v.toArray();target=hit.point.toArray();}}
 return {gapMetres:gap,source,target};
}
function surfaceChecks(mesh){
 const g=mesh.geometry,p=g.attributes.position,ids=[],vertices=new Map(),edges=new Map();
 for(let i=0;i<p.count;i++){const key=[p.getX(i),p.getY(i),p.getZ(i)].map(v=>v.toFixed(7)).join(',');if(!vertices.has(key))vertices.set(key,vertices.size);ids.push(vertices.get(key));}
 const index=g.index?.array||Array.from({length:p.count},(_,i)=>i);
 for(let i=0;i<index.length;i+=3)for(const [a,b]of [[0,1],[1,2],[2,0]]){const u=ids[index[i+a]],v=ids[index[i+b]];if(u===v)continue;const key=u<v?u+':'+v:v+':'+u;edges.set(key,(edges.get(key)||0)+1);}
 const box=g.boundingBox,center=box.getCenter(new T.Vector3()),crossings=[];
 for(let axis=0;axis<3;axis++){const origin=center.clone().setComponent(axis,box.min.getComponent(axis)-.01),direction=new T.Vector3().setComponent(axis,1),hits=mesh.bvh.raycast(new T.Ray(origin,direction),T.DoubleSide).sort((a,b)=>a.distance-b.distance),unique=[];for(const hit of hits)if(!unique.length||hit.distance-unique.at(-1)>1e-7)unique.push(hit.distance);crossings.push(unique.length);}
 return {boundaryEdges:[...edges.values()].filter(n=>n===1).length,nonManifoldEdges:[...edges.values()].filter(n=>n>2).length,centralAxisCrossingCounts:crossings};
}
const report={method:'Original world-space vertices to source triangle surface; no cross-specimen alignment',modes:{}};
for(const key of ['airways','thoracic-veins','vessels']){
 const cfg=journeySources[key],asset=await load(cfg.file),pairs=key==='vessels'?cfg.connections.filter(([a,b])=>a>=30||b>=30):cfg.connections;
 const junctions=pairs.map(([a,b])=>{const left=asset.meshes.get(cfg.parts[a-1].source),right=asset.meshes.get(cfg.parts[b-1].source);if(!left||!right)throw Error('Missing source '+a+' '+b);return {from:a,to:b,fromName:cfg.parts[a-1].name,toName:cfg.parts[b-1].name,...closest(left,right)};});
 report.modes[key]={file:asset.file,sha256:asset.sha256,coordinateFrame:cfg.coordinateFrame,parts:cfg.parts.length,junctions,junctionAnchors:cfg.junctionAnchors||{},...(key==='airways'?{trachealWall:surfaceChecks(asset.meshes.get('VH_M_trachea')),interpretation:'Trachea has inner/outer crossings: use the inner lumen. Bronchial source surfaces are navigation reconstructions; not measured mucosa.'}:{})};
 console.log(JSON.stringify({key,parts:cfg.parts.length,junctions:junctions.map(({from,to,gapMetres})=>({from,to,gapMm:+(gapMetres*1000).toFixed(3)}))}));
}
const heart=await load('heart.glb.gz'),names=['left_cardiac_atrium','right_cardiac_atrium','heart_left_ventricle','heart_right_ventricle','mitral_valve','tricuspid_valve','aortic_valve','pulmonary_valve'];
report.heart={file:heart.file,sha256:heart.sha256,coordinateFrame:'hra-united-male-v1.10',status:'source-available; endocardial cavity and moving-valve collision not yet validated',parts:names.map(name=>{const m=heart.meshes.get('VH_M_'+name),box=m.geometry.boundingBox;return {name,sourceId:m.id,vertices:m.geometry.attributes.position.count,center:box.getCenter(new T.Vector3()).toArray(),extent:box.getSize(new T.Vector3()).toArray(),...surfaceChecks(m)};}),nextChecks:['Identify enclosed blood-space separately from myocardium','Review each AV/outflow ostium and septal separation','Preserve valve tissue as an obstacle and validate an open-phase passage','Register to Z-Anatomy only if independent landmarks pass; otherwise retain a separate specimen']};
fs.writeFileSync('journey-expansion-audit.json',JSON.stringify(report,null,2)+'\n');
