import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {loadCompressedGlb} from './load-glb.js';
import {disposeDetailModel} from './detail-resources.js';
import {accelerateSourceMesh} from './source-mesh-bvh.js';
import {skeletalTypeColors} from './skeletal-structure-type.js';

// One frame for both systems: never normalize a muscle region independently.
export async function loadBodySystemDetail(region,identities,notice){
 const key=region.id;
 const files=[...new Set([...(region.includeBase===false?[]:['body-skeleton-light.glb.gz']),...(region.files||[region.file])])];
 const root=new T.Group(),seen=new Set();let skeletonCount=0;
 const sourceReference=region.source||{url:'https://lifesciencedb.jp/bp3d/info_en/index.html',version:'4.3'};
 const references=[sourceReference.url];
 root.userData.detail={id:key,kind:'source-surface',revision:1,title:region.label,
  renderingQuality:'light',references,
  assets:files.map(file=>({organId:'skeleton',renderingAsset:'./models/current/'+file,sources:[sourceReference]})),
  notice};
 try{
  for(const file of files){
   const source=(await loadCompressedGlb('./models/current/'+file,new GLTFLoader())).scene;
   source.updateMatrixWorld(true);root.add(source);
   const meshes=[],oldMaterials=new Set();source.traverse(m=>{if(m.isMesh){meshes.push(m);oldMaterials.add(m.material)}});
   for(const m of meshes){
    const identity=identities[m.name];
    if(!identity)throw Error('Unmapped source structure: '+m.name);
    if(seen.has(m.name))throw Error('Duplicate source structure: '+m.name);seen.add(m.name);
    if(file==='body-skeleton-light.glb.gz')skeletonCount++;
    m.geometry.applyMatrix4(m.matrixWorld);
    m.position.set(0,0,0);m.quaternion.identity();m.scale.set(1,1,1);
    const sourceName=m.name;
    m.name='detail:'+key+':'+sourceName;
    // Materials may be shared by the GLB. Clone before giving each selectable
    // structure independent highlight/opacity state.
    const original=m.material;m.material=original.clone();
    m.material.color.set(identity.representation==='cavity-surface'?'#a6bbb3':identity.system==='nerves'?(identity.representation==='cavity-surface'?'#a6bbb3':'#d2b979'):identity.system==='vessels'?(/vein|vena|venous/i.test(identity.englishLabel)?'#82a4ad':'#c5896d'):identity.system==='skeleton'?(/cartilage|disc/i.test(identity.englishLabel)?'#a6bbb3':'#d4c6ab'):(/tendon|membrane|retinaculum|aponeurosis/i.test(identity.englishLabel)?'#d4c6ab':'#b98079'));
    m.material.roughness=.85;
    if(identity.layer==='skeleton'&&skeletalTypeColors[identity.structureType])m.material.color.set(skeletalTypeColors[identity.structureType]);
    m.userData={organId:'skeleton',partId:m.name,label:identity.englishLabel,baseColor:m.material.color.clone(),restOpacity:1,
     detail:{...identity,layer:identity.layer??(identity.system==='vessels'?(/vein|vena|venous/i.test(identity.englishLabel)?'veins':'arteries'):identity.system),id:m.name,kind:'source-surface',sourceVersion:sourceReference.version,sourcePartId:sourceName,references}};
    root.add(m);
   }
   // GLB materials have no textures in these audited assets.
   oldMaterials.forEach(m=>m.dispose());source.removeFromParent();
  }
  if(seen.size!==skeletonCount+region.count)throw Error('Incomplete body-system asset: '+key);
  root.updateMatrixWorld(true);
  const box=new T.Box3().setFromObject(root),center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());
  let scale=2.7/Math.max(size.x,size.y,size.z);
  // Independently loaded whole-body layers must retain one skeletal display frame.
  if(region.displayFrame){
   const frame=region.displayFrame;
   if(!Array.isArray(frame.center)||frame.center.length!==3||!frame.center.every(Number.isFinite)||!Number.isFinite(frame.scale)||frame.scale<=0)throw Error('Invalid shared body frame');
   center.fromArray(frame.center);scale=frame.scale;
  }
  root.traverse(m=>{if(m.isMesh){m.geometry.translate(-center.x,-center.y,-center.z);m.geometry.scale(scale,scale,scale)}});
  const sourceMeshes=[];root.traverse(m=>{if(m.isMesh)sourceMeshes.push(m);});
  let yieldedAt=performance.now();
  for(const mesh of sourceMeshes){
   accelerateSourceMesh(mesh);
   if(performance.now()-yieldedAt>8){await new Promise(resolve=>setTimeout(resolve,0));yieldedAt=performance.now();}
  }
  root.userData.detail.sourceFrame={rotationX:-Math.PI/2,unitScale:region.unitScale??.001,displayCenter:center.toArray(),displayScale:scale};
  return root;
 }catch(error){disposeDetailModel(root);throw error;}
}
