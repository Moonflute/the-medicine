// Reuse reviewed source geometry, including its incompleteness. No inferred
// chordae, leaflet replacements or mucosal folds are generated here.
import fs from 'node:fs';
import {gunzipSync,gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import * as T from 'three';
import {FBXLoader} from 'three/addons/loaders/FBXLoader.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {MeshBVH} from 'three-mesh-bvh';
import {Document,NodeIO} from '@gltf-transform/core';

const dir='static/models/current/',sha=b=>createHash('sha256').update(b).digest('hex');
const sourcePath='sources/journey/CardioVascular41.fbx',bytes=fs.readFileSync(sourcePath),audit=JSON.parse(fs.readFileSync('journey-cardiac-source-audit.json'));
if(sha(bytes)!==audit.sourceSha256)throw Error('Unreviewed cardiac source');
const root=new FBXLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.length),'');root.updateMatrixWorld(true);
const definitions=[
 ['Anterior semilunar leaflet of pulmonary valve',2,'2:5'],['Left semilunar leaflet of pulmonary valve',2,'2:5'],['Right semilunar leaflet of pulmonary valve',2,'2:5'],
 ['Posterior leaflet of left atrioventricular valve',4,'3:4'],['Inferior leaflet of right atrioventricular valve',2,'1:2'],['Septal leaflet of right atrioventricular valve',2,'1:2']
];
const circulation=JSON.parse(fs.readFileSync(dir+'journey-circulation.json'));
const doc=new Document(),buffer=doc.createBuffer(),scene=doc.createScene(),material=doc.createMaterial().setBaseColorFactor([.79,.67,.53,1]).setDoubleSided(true);let triangles=0;
for(const [name,part,valve]of definitions){
 const sourceId=name.replaceAll(' ','_'),mesh=root.getObjectByName(sourceId);if(!mesh?.geometry.attributes.position.count)throw Error('Missing source leaflet '+name);
 const g=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld).scale(.01,.01,.01);g.computeBoundingBox();const center=g.boundingBox.getCenter(new T.Vector3()),orifice=circulation.valvePassages[valve].center;
 if(center.distanceTo(new T.Vector3(...orifice))>.032)throw Error('Leaflet outside reviewed source valve '+name);
 const p=g.attributes.position.array,index=g.index?.array||Uint32Array.from({length:p.length/3},(_,i)=>i);triangles+=index.length/3;
 const primitive=doc.createPrimitive().setAttribute('POSITION',doc.createAccessor().setType('VEC3').setArray(p).setBuffer(buffer)).setIndices(doc.createAccessor().setType('SCALAR').setArray(index).setBuffer(buffer)).setMaterial(material);
 scene.addChild(doc.createNode(sourceId).setExtras({name,part,valve,sourceId,position:center.toArray(),representation:'source-static-leaflet-subset'}).setMesh(doc.createMesh().addPrimitive(primitive)));g.dispose();
}
const detailFile='journey-cardiac-details.glb.gz',output=gzipSync(await new NodeIO().writeBinary(doc),{level:9});fs.writeFileSync(dir+detailFile,output);
circulation.detailAsset='./models/current/'+detailFile;
circulation.detailSource={url:audit.sourceURL,sha256:audit.sourceSha256,triangles,scope:'Six original static leaflets, including all three pulmonary leaflets. The AV leaflet set and chordae are incomplete. Optional solid inspection layer, not a physiological valve phase.'};
fs.writeFileSync(dir+'journey-circulation.json',JSON.stringify(circulation));

async function load(file){const b=gunzipSync(fs.readFileSync(dir+file)),scene=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.length),'')).scene;scene.updateMatrixWorld(true);return scene;}
const selections={
 circulation:{file:'z-cardiac-source.glb.gz',items:circulation.landmarks.map(l=>({...l,sourceId:l.sourceId}))},
 urinary:{file:'bladder.glb.gz',items:[{sourceId:'VH_M_trigone_of_urinary_bladder',name:'Trigone of urinary bladder',part:3}]},
 'urinary-outlet':{file:'bladder.glb.gz',items:[{sourceId:'VH_M_trigone_of_urinary_bladder',name:'Trigone of urinary bladder',part:1}]}
};
const reports=[];
for(const [key,selection]of Object.entries(selections)){
 const m=JSON.parse(fs.readFileSync(dir+'journey-'+key+'.json')),raw=gunzipSync(fs.readFileSync(dir+'journey-'+key+'-surface.bin.gz')),p=new Float32Array(raw.buffer,raw.byteOffset,m.vertices*3),source=await load(selection.file),features=[],runs=[],ids=new Uint8Array(m.vertices),v=new T.Vector3();
 for(const [j,item]of selection.items.entries()){
  const mesh=source.getObjectByName(item.sourceId);if(!mesh)throw Error('Missing source landmark '+item.sourceId);
  const g=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld),tree=new MeshBVH(g,{indirect:true});g.computeBoundingBox();const box=g.boundingBox.clone().expandByScalar(.0015);let count=0;
  for(let i=0;i<m.vertices;i++){v.fromArray(p,i*3);if(!box.containsPoint(v))continue;const hit=tree.closestPointToPoint(v,{},0,.0015);if(hit&&hit.distance<=.0015){ids[i]=j+1;count++;}}
  if(!count)throw Error('No matching reconstructed surface '+item.name);
  features.push({id:j+1,sourceId:item.sourceId,name:item.name,part:item.part,position:item.position||g.boundingBox.getCenter(new T.Vector3()).toArray(),vertices:count});g.dispose();
 }
 for(let i=0;i<ids.length;){if(!ids[i]){i++;continue;}const start=i,id=ids[i];while(i<ids.length&&ids[i]===id)i++;runs.push(start,i-start,id);}
 m.surfaceFeatures={sourceFile:selection.file,sourceSha256:sha(fs.readFileSync(dir+selection.file)),toleranceMetres:.0015,features,runs};
 fs.writeFileSync(dir+'journey-'+key+'.json',JSON.stringify(m));source.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});reports.push({key,features:features.length,markedVertices:ids.filter(x=>x).length,runBytes:JSON.stringify(runs).length});
}
console.log(JSON.stringify({detailFile,bytes:output.length,triangles,sourcePreserved:true,reports}));
