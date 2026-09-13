import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';import assert from 'node:assert/strict';import * as T from 'three';
import {surfaceTree,distanceToSurface} from './mesh-surface-screen.mjs';
const directory=path.resolve('../../tmp/atlas-qa/z-system-evaluated');
const audit=JSON.parse(fs.readFileSync(path.join(directory,'audit.json'))),records=new Map(audit.records.map(r=>[r.name,r])),cache=new Map();
const patterns=[['Tibial nerve','Common fibular nerve'],['Posterior cord of brachial plexus','Radial nerve'],['Radial nerve','Deep branch of radial nerve'],['Radial nerve','Superficial branch of radial nerve'],['Sciatic nerve','Tibial nerve'],['Sciatic nerve','Common fibular nerve'],['Common fibular nerve','Deep fibular nerve'],['Common fibular nerve','Superficial fibular nerve'],['Obturator nerve','Anterior branch of obturator nerve'],['Obturator nerve','Posterior branch of obturator nerve'],['Femoral nerve','Anterior cutaneous branches of femoral nerve']];
function geometry(name){if(cache.has(name))return cache.get(name);const r=records.get(name);assert.ok(r,'Missing '+name);const b=fs.readFileSync(path.join(directory,r.file));assert.equal(createHash('sha256').update(b).digest('hex'),r.sha256);const p=new Float32Array(b.buffer.slice(b.byteOffset,b.byteOffset+r.vertices*12)),i=new Uint32Array(b.buffer.slice(b.byteOffset+r.vertices*12,b.byteOffset+b.length));const result={p,tree:surfaceTree(p,i)};cache.set(name,result);return result;}
const results=[];
for(const side of ['l','r'])for(const pattern of patterns){const [parent,child]=pattern.map(n=>n+'.'+side),a=geometry(parent),b=geometry(child),point=new T.Vector3();let distance=Infinity,at;
 for(let i=0;i<b.p.length;i+=3){point.fromArray(b.p,i);const d=distanceToSurface(a.tree,point);if(d<distance){distance=d;at=point.toArray();}}
 let reverse=Infinity;
 for(let i=0;i<a.p.length;i+=3){point.fromArray(a.p,i);reverse=Math.min(reverse,distanceToSurface(b.tree,point));}
 results.push({parent,child,relationship:parent.startsWith('Tibial nerve')?'source-surface-contact-only; NOT an anatomical parent-child assertion':'expected anatomical branch relation',minimumChildVertexToParentSurfaceMm:distance*1000,minimumParentVertexToChildSurfaceMm:reverse*1000,childPoint:at,status:Math.min(distance,reverse)>.001?'review-gap':'close-surfaces-only'});
 console.log(parent,'->',child,(distance*1000).toFixed(4),'mm');
}
fs.writeFileSync('../../tmp/atlas-qa/z-nerve-junction-screen.json',JSON.stringify({method:'Minimum child vertex to parent triangle surface in evaluated source meters; not branch endpoint, axonal continuity or full anatomical course validation.',references:['https://www.ncbi.nlm.nih.gov/books/NBK534840/','https://www.ncbi.nlm.nih.gov/books/NBK482431/'],results},null,2));
