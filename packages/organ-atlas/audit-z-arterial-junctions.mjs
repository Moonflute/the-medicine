import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';import assert from 'node:assert/strict';import * as T from 'three';
import {surfaceTree,distanceToSurface} from './mesh-surface-screen.mjs';
const directory=path.resolve('../../tmp/atlas-qa/z-system-evaluated');
const audit=JSON.parse(fs.readFileSync(path.join(directory,'audit.json'))),records=new Map(audit.records.map(r=>[r.name,r])),cache=new Map();
const pairs=[['Ascending aorta','Aortic arch'],['Aortic arch','Thoracic aorta'],['Thoracic aorta','Abdominal aorta'],
 ...['Brachiocephalic trunk','Left common carotid artery','Left subclavian artery'].map(n=>['Aortic arch',n]),
 ...['Right common carotid artery','Right subclavian artery'].map(n=>['Brachiocephalic trunk',n]),
 ...['Coeliac trunk','Superior mesenteric artery','Inferior mesenteric artery','Right renal artery','Left renal artery','Common iliac artery.r','Common iliac artery.l'].map(n=>['Abdominal aorta',n])];
function geometry(name){if(cache.has(name))return cache.get(name);const r=records.get(name);assert.ok(r,'Missing '+name);const b=fs.readFileSync(path.join(directory,r.file));assert.equal(createHash('sha256').update(b).digest('hex'),r.sha256);const p=new Float32Array(b.buffer.slice(b.byteOffset,b.byteOffset+r.vertices*12)),i=new Uint32Array(b.buffer.slice(b.byteOffset+r.vertices*12,b.byteOffset+b.length));const result={p,tree:surfaceTree(p,i)};cache.set(name,result);return result;}
const results=[];
for(const [parent,child]of pairs){const a=geometry(parent),b=geometry(child),point=new T.Vector3();let distance=Infinity,at;
 for(let i=0;i<b.p.length;i+=3){point.fromArray(b.p,i);const d=distanceToSurface(a.tree,point);if(d<distance){distance=d;at=point.toArray();}}
 results.push({parent,child,minimumChildVertexToParentSurfaceMm:distance*1000,childPoint:at,status:distance>.001?'review-gap':'close-surfaces-only'});
 console.log(parent,'->',child,(distance*1000).toFixed(4),'mm');
}
const byChild=new Map(results.map(r=>[r.child,r]));
const order=[['Coeliac trunk','Superior mesenteric artery'],['Superior mesenteric artery','Right renal artery'],['Superior mesenteric artery','Left renal artery'],['Right renal artery','Inferior mesenteric artery'],['Left renal artery','Inferior mesenteric artery'],['Inferior mesenteric artery','Common iliac artery.r'],['Inferior mesenteric artery','Common iliac artery.l']].map(([superior,inferior])=>({superior,inferior,superiorZ:byChild.get(superior).childPoint[2],inferiorZ:byChild.get(inferior).childPoint[2],consistent:byChild.get(superior).childPoint[2]>byChild.get(inferior).childPoint[2]}));
fs.writeFileSync('../../tmp/atlas-qa/z-arterial-junction-screen.json',JSON.stringify({method:'Minimum child vertex to parent triangle surface in evaluated source meters; not watertightness, lumen connectivity, correct branch origin or full course validation. Order uses nearest-surface candidate points, not a verified centerline ostium.',references:['https://www.ncbi.nlm.nih.gov/books/NBK499911/','https://pubmed.ncbi.nlm.nih.gov/16177834/'],results,order},null,2));
