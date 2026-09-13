import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';import assert from 'node:assert/strict';import * as T from 'three';
import {surfaceTree,distanceToSurface} from './mesh-surface-screen.mjs';
const directory=path.resolve('../../tmp/atlas-qa/z-system-evaluated');
const records=new Map(JSON.parse(fs.readFileSync(path.join(directory,'audit.json'))).records.map(r=>[r.name,r])),cache=new Map();
// Direction describes venous drainage, not an arterial parent/child tree.
const pairs=[['Azygos vein','Superior vena cava'],['Inferior vena cava (abdominal part)','Inferior vena cava (thoracic part)'],['Hepatic veins','Inferior vena cava (abdominal part)']];
for(const [side,suffix] of [['Right','r'],['Left','l']]){
 pairs.push([side+' brachiocephalic vein','Superior vena cava'],['Internal jugular vein.'+suffix,side+' brachiocephalic vein'],[side+' subclavian vein',side+' brachiocephalic vein'],[side+' renal vein','Inferior vena cava (abdominal part)'],['Common iliac vein.'+suffix,'Inferior vena cava (abdominal part)'],['Internal iliac vein.'+suffix,'Common iliac vein.'+suffix],['External iliac vein.'+suffix,'Common iliac vein.'+suffix],['Femoral vein.'+suffix,'External iliac vein.'+suffix],['Deep femoral vein.'+suffix,'Femoral vein.'+suffix],['Popliteal vein.'+suffix,'Femoral vein.'+suffix]);
}
function geometry(name){
 if(cache.has(name))return cache.get(name);
 const record=records.get(name);assert.ok(record,'Missing source '+name);
 const b=fs.readFileSync(path.join(directory,record.file));assert.equal(createHash('sha256').update(b).digest('hex'),record.sha256);
 const positions=new Float32Array(b.buffer.slice(b.byteOffset,b.byteOffset+record.vertices*12)),indices=new Uint32Array(b.buffer.slice(b.byteOffset+record.vertices*12,b.byteOffset+b.length));
 const result={positions,tree:surfaceTree(positions,indices)};cache.set(name,result);return result;
}
const results=[];
for(const [tributary,recipient] of [...pairs,['Hepatic veins','Inferior vena cava (thoracic part)']]){
 const a=geometry(tributary),b=geometry(recipient),point=new T.Vector3();let distance=Infinity,candidate;
 for(let i=0;i<a.positions.length;i+=3){point.fromArray(a.positions,i);const d=distanceToSurface(b.tree,point);if(d<distance){distance=d;candidate=point.toArray();}}
 results.push({tributary,recipient,minimumTributaryVertexToRecipientSurfaceMm:distance*1000,candidatePoint:candidate,status:distance>.001?'review-separation':'close-surfaces-only'});
 console.log(tributary,'->',recipient,(distance*1000).toFixed(4),'mm');
}
fs.writeFileSync('../../tmp/atlas-qa/z-venous-junction-screen.json',JSON.stringify({method:'Hash-verified original evaluated source coordinates. Minimum vertex-to-triangle distance screens local surface proximity only; it does not validate lumen continuity, exact confluence level, complete venous course or variants. More than 1 mm flags visual review, not automatic correction.',references:['https://www.ncbi.nlm.nih.gov/books/NBK544339/','https://www.ncbi.nlm.nih.gov/books/NBK545255/','https://www.ncbi.nlm.nih.gov/books/NBK482353/','https://www.ncbi.nlm.nih.gov/books/NBK554574/'],results},null,2));
