// Build-time reuse of existing source anatomy. No hand-drawn epiglottis.
import fs from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {MeshBVH} from 'three-mesh-bvh';

const directory='static/models/current/';
async function load(file){const bytes=fs.readFileSync(directory+file),raw=gunzipSync(bytes),root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length),'')).scene;root.updateMatrixWorld(true);return {root,file,sha256:createHash('sha256').update(bytes).digest('hex')};}
const worldGeometry=mesh=>mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
function release(root){root.traverse(mesh=>{mesh.geometry?.dispose();for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material])material?.dispose();});}

export function cardiacJourneyLandmarks(root,parts){
 const records=[];
 for(const [i,name]of ['Inferior papillary muscle of left ventricle','Inferior papillary muscle of right ventricle','Anterior papillary muscle of right ventricle','Septal papillary muscle of right ventricle'].entries()){
  const sourceId=name.replaceAll(' ','_'),mesh=root.getObjectByName(sourceId)||root.getObjectByName(name);if(!mesh)throw Error('Missing reviewed papillary source '+name);
  const part=parts.findIndex(p=>p.name===(name.includes('left')?'Left ventricle':'Right ventricle'))+1,geometry=worldGeometry(mesh);geometry.computeBoundingBox();
  const bvh=new MeshBVH(geometry,{indirect:true}),center=geometry.boundingBox.getCenter(new T.Vector3()),position=bvh.closestPointToPoint(center.clone().add(new T.Vector3(0,.02,.015))).point.toArray();
  records.push({id:10+i,name,sourceId:mesh.name,sourceFile:'z-cardiac-source.glb.gz',part,color:parts[part-1].color,position,geometry,bvh,representation:'source-coordinate-preserved'});
 }
 return {meshes:records,landmarks:records.map(({geometry,bvh,...record})=>record)};
}

export async function journeyLandmarks(organRoot){
 const skeleton=await load('z-whole-skeleton-optimized.glb.gz'),larynx=await load('larynx-bodyparts-light.glb.gz');
 try{
  const pairs=[['ZA_9cf0878d5d75e9180dbb','FJ2808_Thyroid_cartilage'],['ZA_888a529f443eff42ea23','FJ2769_Cricoid_cartilage'],['ZA_8916df7ed01210d98343','FJ2792_Right_arytenoid_cartilage'],['ZA_d51cc9b557c9b4ad6fbb','FJ2775_Left_arytenoid_cartilage']];
  // The datasets share axes but differ in origin. Fit translation on thyroid
  // and cricoid only; validate independently on both arytenoid surfaces.
  const translation=new T.Vector3();for(const [z,bp]of pairs.slice(0,2))translation.add(new T.Box3().setFromObject(skeleton.root.getObjectByName(z)).getCenter(new T.Vector3()).sub(new T.Box3().setFromObject(larynx.root.getObjectByName(bp)).getCenter(new T.Vector3())));translation.multiplyScalar(.5);
  const registration=[];
  for(const [z,bp]of pairs){const target=worldGeometry(skeleton.root.getObjectByName(z)),source=worldGeometry(larynx.root.getObjectByName(bp)),tree=new MeshBVH(target),p=source.attributes.position,distances=[];for(let i=0;i<p.count;i++)distances.push(tree.closestPointToPoint(new T.Vector3().fromBufferAttribute(p,i).add(translation)).distance);distances.sort((a,b)=>a-b);const rms=Math.sqrt(distances.reduce((n,d)=>n+d*d,0)/distances.length),p95=distances[Math.floor(distances.length*.95)];if(rms>.001||p95>.002)throw Error('Unreviewed laryngeal registration: '+bp);registration.push({source:bp,target:z,rmsMetres:rms,p95Metres:p95,role:registration.length<2?'fit':'held-out-check'});target.dispose();source.dispose();}
  const records=[
   {id:1,name:'Tongue',color:'#b9757e',sourceId:'ZA_583338262d372979bea5',sourceFile:'z-whole-organs.glb.gz',geometry:worldGeometry(organRoot.getObjectByName('ZA_583338262d372979bea5')),query:[0,1.541,.054],representation:'source-coordinate-preserved'},
   {id:2,name:'Epiglottis',color:'#e5aaa0',sourceId:'FJ2770_Epiglottis',sourceFile:larynx.file,geometry:worldGeometry(larynx.root.getObjectByName('FJ2770_Epiglottis')).translate(...translation.toArray()),query:[0,1.502,.014],representation:'registered-source-landmark'}
  ];
  for(const record of records){record.bvh=new MeshBVH(record.geometry,{indirect:true});record.geometry.computeBoundingBox();record.position=record.bvh.closestPointToPoint(new T.Vector3(...record.query)).point.toArray();}
  return {meshes:records.map(r=>({id:r.id,geometry:r.geometry,bvh:r.bvh})),landmarks:records.map(({geometry,bvh,query,...r})=>r),registration:{method:'translation-only; thyroid/cricoid fit, bilateral arytenoid holdout',translation:translation.toArray(),checks:registration,sources:[{file:skeleton.file,sha256:skeleton.sha256},{file:larynx.file,sha256:larynx.sha256}],notice:'후두개는 기존 BodyParts3D 연골 표면을 좌표 정합한 표지입니다. 정합 오차는 해부학적 내강·점막의 임상 검증을 의미하지 않습니다.'}};
 }finally{release(skeleton.root);release(larynx.root);}
}
