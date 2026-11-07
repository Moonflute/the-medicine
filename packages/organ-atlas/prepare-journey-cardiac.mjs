// Same-specimen pulmonary vessels and papillary surfaces. No fitted transform.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {gunzipSync,gzipSync} from 'node:zlib';
import * as T from 'three';
import {FBXLoader} from 'three/addons/loaders/FBXLoader.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshBVH} from 'three-mesh-bvh';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {Document,NodeIO} from '@gltf-transform/core';
const sourceURL='https://raw.githubusercontent.com/LluisV/Z-Anatomy/PC-Version/Resources/Models/FBX/CardioVascular41.fbx',sourceBlob='aa5bbcb63ae6e9ace8051111b3a85ea87f00c4f3',path='sources/journey/CardioVascular41.fbx',dir='static/models/current/';
let bytes;if(fs.existsSync(path))bytes=fs.readFileSync(path);else{const response=await fetch(sourceURL);if(!response.ok)throw Error('Cardiac source download: '+response.status);bytes=Buffer.from(await response.arrayBuffer());}
if(createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex')!==sourceBlob)throw Error('Unreviewed cardiac source revision');
if(!fs.existsSync(path)){fs.mkdirSync('sources/journey',{recursive:true});fs.writeFileSync(path,bytes);}
const root=new FBXLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.length),'');root.updateMatrixWorld(true);
const geometry=name=>{const mesh=root.getObjectByName(name);if(!mesh?.isMesh)throw Error('Missing source '+name);return mesh.geometry.clone().applyMatrix4(mesh.matrixWorld).scale(.01,.01,.01);};
const raw=gunzipSync(fs.readFileSync(dir+'z-whole-organs.glb.gz')),current=(await new GLTFLoader().parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length),'')).scene;current.updateMatrixWorld(true);
const identities=JSON.parse(fs.readFileSync(dir+'z-whole-manifest.json')).identities;
function surfaceDistance(a,b){const tree=new MeshBVH(b,{indirect:true}),p=a.attributes.position,v=new T.Vector3(),d=[];for(let i=0;i<p.count;i++)d.push(tree.closestPointToPoint(v.fromBufferAttribute(p,i)).distance);d.sort((a,b)=>a-b);return {maxMetres:d.at(-1),p95Metres:d[Math.floor(d.length*.95)],rmsMetres:Math.sqrt(d.reduce((s,x)=>s+x*x,0)/d.length)};}
const checks=[];
for(const name of ['Right atrium','Right ventricle','Left atrium','Left ventricle']){
 const id=Object.entries(identities).find(([,v])=>v.sourceMesh===name)[0],mesh=current.getObjectByName(id),a=geometry(name.replaceAll(' ','_')),b=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld),forward=surfaceDistance(a,b),reverse=surfaceDistance(b,a);
 if(Math.max(forward.maxMetres,reverse.maxMetres)>.0006||Math.max(forward.p95Metres,reverse.p95Metres)>.0002)throw Error('Source frame or revision mismatch: '+name);checks.push({name,forward,reverse});a.dispose();b.dispose();
}
const rows=[
 ['Pulmonary trunk',['Pulmonary_trunk','Bifurcation_of_pulmonary_trunk']],
 ...['Right_pulmonary_artery','Left_pulmonary_artery','Right_superior_pulmonary_vein','Right_inferior_pulmonary_vein','Left_superior_pulmonary_vein','Left_inferior_pulmonary_vein',
 'Inferior_papillary_muscle_of_left_ventricle','Inferior_papillary_muscle_of_right_ventricle','Anterior_papillary_muscle_of_right_ventricle','Septal_papillary_muscle_of_right_ventricle'].map(name=>[name.replaceAll('_',' '),[name]])
];
const doc=new Document(),buffer=doc.createBuffer(),scene=doc.createScene(),material=doc.createMaterial().setBaseColorFactor([.65,.4,.4,1]).setDoubleSided(true),parts=[];
for(const [name,members]of rows){
 const inputs=members.map(geometry);for(const g of inputs)for(const key of Object.keys(g.attributes))if(key!=='position')g.deleteAttribute(key);const g=inputs.length===1?inputs[0]:mergeGeometries(inputs);g.computeBoundingBox();
 const p=g.attributes.position.array,index=g.index?.array||Uint32Array.from({length:p.length/3},(_,i)=>i),primitive=doc.createPrimitive().setAttribute('POSITION',doc.createAccessor().setType('VEC3').setArray(p).setBuffer(buffer)).setIndices(doc.createAccessor().setType('SCALAR').setArray(index).setBuffer(buffer)).setMaterial(material);
 scene.addChild(doc.createNode(name).setMesh(doc.createMesh().addPrimitive(primitive)));parts.push({name,sourceMeshes:members,bounds:[g.boundingBox.min.toArray(),g.boundingBox.max.toArray()],vertices:p.length/3});g.dispose();
}
const file='z-cardiac-source.glb.gz',output=gzipSync(await new NodeIO().writeBinary(doc),{level:9});fs.writeFileSync(dir+file,output);
const audit={sourceURL,sourceBlob,sourceSha256:createHash('sha256').update(bytes).digest('hex'),coordinateFrame:'z-anatomy',method:'FBX world coordinates converted from cm to m; no fitted translation, rotation or scaling beyond unit conversion. Four chambers independently compared against the existing unmodified high-resolution Z-Anatomy asset.',checks,parts,output:{file,bytes:output.length,sha256:createHash('sha256').update(output).digest('hex')},limits:'Original leaflet meshes are incomplete and some hierarchy labels are inconsistent. Do not infer complete moving valves from this export.'};
fs.writeFileSync('journey-cardiac-source-audit.json',JSON.stringify(audit,null,2)+'\n');console.log(JSON.stringify({file,bytes:output.length,parts:parts.length,maxDifferenceMm:Math.max(...checks.flatMap(c=>[c.forward.maxMetres,c.reverse.maxMetres]))*1000}));
