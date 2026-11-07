// Source-only preparation. FBX is parsed as geometry; no embedded code is run.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import * as T from 'three';
import {FBXLoader} from 'three/addons/loaders/FBXLoader.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshBVH} from 'three-mesh-bvh';
import {gunzipSync,gzipSync} from 'node:zlib';
import {Document,NodeIO} from '@gltf-transform/core';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {continuousBronchi,bronchialConnections,bronchialSourceFile} from './journey-continuity-sources.mjs';

const directory=path.dirname(fileURLToPath(import.meta.url));
const sourceURL='https://raw.githubusercontent.com/LluisV/Z-Anatomy/PC-Version/Z-Anatomy%20PC/Assets/Models/1.0%20Models/VisceralSystem100.fbx';
const expectedBlob='355770ae46123044c85deca03de3fb880b8f7301';
const sourcePath=path.join(directory,'sources/journey/VisceralSystem100.fbx');
let bytes;
if(fs.existsSync(sourcePath))bytes=fs.readFileSync(sourcePath);
else{
 const response=await fetch(sourceURL);if(!response.ok)throw Error('Source download failed: '+response.status);
 bytes=Buffer.from(await response.arrayBuffer());
}
const blob=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
if(blob!==expectedBlob)throw Error('Source revision does not match reviewed repository blob');
if(!fs.existsSync(sourcePath)){fs.mkdirSync(path.dirname(sourcePath),{recursive:true});fs.writeFileSync(sourcePath,bytes);}
const root=new FBXLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.length),'');root.updateMatrixWorld(true);
const models=path.join(directory,'static/models/current/'),raw=gunzipSync(fs.readFileSync(models+'z-whole-organs.glb.gz'));
const current=(await new GLTFLoader().parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length),'')).scene;current.updateMatrixWorld(true);
const identities=JSON.parse(fs.readFileSync(models+'z-whole-manifest.json')).identities;
const geometry=mesh=>mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
const sourceGeometry=name=>geometry(root.getObjectByName(name)).scale(.01,.01,.01);
function distances(a,b){const tree=new MeshBVH(b,{indirect:true}),p=a.attributes.position,v=new T.Vector3(),d=[];for(let i=0;i<p.count;i++)d.push(tree.closestPointToPoint(v.fromBufferAttribute(p,i)).distance);return {maximumMetres:Math.max(...d),rmsMetres:Math.sqrt(d.reduce((s,x)=>s+x*x,0)/d.length)};}
const checks=[];
for(const name of ['Trachea','Left main bronchus','Right main bronchus','Tongue','Superior lobe of left lung','Inferior lobe of right lung']){
 const id=Object.entries(identities).find(([,v])=>v.sourceMesh===name)[0],a=sourceGeometry(name.replaceAll(' ','_')),b=geometry(current.getObjectByName(id)),forward=distances(a,b),reverse=distances(b,a);
 if(Math.max(forward.maximumMetres,reverse.maximumMetres)>.000002)throw Error('Source coordinate mismatch: '+name);
 checks.push({name,target:id,forward,reverse});a.dispose();b.dispose();
}
const doc=new Document(),buffer=doc.createBuffer(),scene=doc.createScene(),mat=doc.createMaterial('Bronchial source').setBaseColorFactor([.75,.62,.53,1]).setDoubleSided(true).setRoughnessFactor(.85),records=[],geometries=new Map();
geometries.set(8,sourceGeometry('Left_main_bronchus'));geometries.set(9,sourceGeometry('Right_main_bronchus'));
for(const [i,part]of continuousBronchi.entries()){
 const expectedParent=part.parent===8?'Left_main_bronchus':part.parent===9?'Right_main_bronchus':continuousBronchi[part.parent-15].source;
 const members=part.sourceMeshes||[part.source];
 const memberGeometries=members.map(name=>{const mesh=root.getObjectByName(name);if(!mesh)throw Error('Missing source '+name);if(mesh.parent.name!==expectedParent)throw Error('Unexpected source branch parent '+name);const g=sourceGeometry(name);for(const key of Object.keys(g.attributes))if(key!=='position')g.deleteAttribute(key);return g;});
 const g=memberGeometries.length===1?memberGeometries[0]:mergeGeometries(memberGeometries);g.computeVertexNormals();g.computeBoundingBox();geometries.set(i+15,g);
 const p=g.attributes.position.array,indices=g.index?.array||Uint32Array.from({length:g.attributes.position.count},(_,n)=>n);
 const prim=doc.createPrimitive().setAttribute('POSITION',doc.createAccessor().setType('VEC3').setArray(p).setBuffer(buffer)).setAttribute('NORMAL',doc.createAccessor().setType('VEC3').setArray(g.attributes.normal.array).setBuffer(buffer)).setIndices(doc.createAccessor().setType('SCALAR').setArray(indices).setBuffer(buffer)).setMaterial(mat);
 scene.addChild(doc.createNode(part.source).setMesh(doc.createMesh().addPrimitive(prim)));
 records.push({id:i+15,source:part.source,sourceMeshes:members,parent:expectedParent,vertices:p.length/3,bounds:[g.boundingBox.min.toArray(),g.boundingBox.max.toArray()],...(part.scopeNote?{scopeNote:part.scopeNote}:{})});
}
const contacts=bronchialConnections.map(([a,b])=>{
 const left=geometries.get(a),right=geometries.get(b),tree=new MeshBVH(right,{indirect:true}),v=new T.Vector3();let best;
 for(let i=0;i<left.attributes.position.count;i++){const p=v.fromBufferAttribute(left.attributes.position,i),near=tree.closestPointToPoint(p);if(!best||near.distance<best.gapMetres)best={gapMetres:near.distance,source:p.toArray(),target:near.point.toArray()};}
 if(best.gapMetres>.004)throw Error('Unreviewed source branch gap '+a+'→'+b);
 return {from:a,to:b,...best};
});
const output=gzipSync(await new NodeIO().writeBinary(doc),{level:9});fs.writeFileSync(models+bronchialSourceFile,output);
const report={sourceURL,sourceBlob:blob,sourceSha256:createHash('sha256').update(bytes).digest('hex'),license:'CC BY-SA 4.0; original separate attribution retained',method:'FBX evaluated world coordinates converted from centimetres to metres; no fitted translation, rotation, or deformation',coordinateFrame:'z-anatomy',checks,records,contacts,grouping:'Left basal branches are grouped: direct left-lobar-to-B8/B10 surface gaps are 5.75/20.76 mm, while the supplied common basal stems contact them. Do not bridge across those gaps or infer a universal individual subdivision.',output:{file:bronchialSourceFile,bytes:output.length,sha256:createHash('sha256').update(output).digest('hex')}};
fs.writeFileSync(path.join(directory,'journey-continuity-source-audit.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({sourceParts:records.length,anchorChecks:checks.length,maxAnchorErrorMm:Math.max(...checks.flatMap(c=>[c.forward.maximumMetres,c.reverse.maximumMetres]))*1000,maxContactGapMm:Math.max(...contacts.map(c=>c.gapMetres))*1000,bytes:output.length}));
