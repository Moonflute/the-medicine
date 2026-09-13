import fs from 'node:fs';import assert from 'node:assert/strict';import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';import {gunzipSync} from 'node:zlib';
import {loadMusculoskeletalDetail} from './src/body-muscle-detail.js';import {disposeDetailModel} from './src/detail-resources.js';
globalThis.window=globalThis;globalThis.document={baseURI:'http://atlas.local/'};
globalThis.fetch=async url=>new Response(fs.readFileSync('static/'+String(url).replace(/^\.\//,'')));
let checked=0,maxError=0;
for(const region of ['neck','lower-limb-left']){
 const root=await loadMusculoskeletalDetail('musculoskeletal-'+region),frame=root.userData.detail.sourceFrame;
 const actual=new Map();root.traverse(m=>{if(m.isMesh)actual.set(m.userData.detail.sourcePartId,m)});
 for(const file of ['body-skeleton-light.glb.gz','body-muscles-'+region+'.glb.gz']){
  const bytes=gunzipSync(fs.readFileSync('static/models/current/'+file));const source=(await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'' )).scene;
  source.updateMatrixWorld(true);
  source.traverse(m=>{if(!m.isMesh)return;const dst=actual.get(m.name);assert.ok(dst);const p=m.geometry.attributes.position,q=dst.geometry.attributes.position;assert.equal(p.count,q.count);
   const v=new T.Vector3();for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(m.matrixWorld).sub(new T.Vector3(...frame.displayCenter)).multiplyScalar(frame.displayScale);const error=v.distanceTo(new T.Vector3().fromBufferAttribute(q,i));maxError=Math.max(maxError,error);assert.ok(error<5e-7, m.name+' transformed vertex error '+error);checked++;}
  });
 }
 disposeDetailModel(root);
}
console.log(JSON.stringify({checkedVertices:checked,maxDisplayCoordinateError:maxError,commonFramePreserved:true}));
