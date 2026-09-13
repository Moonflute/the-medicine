import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {gunzipSync} from 'node:zlib';
import {NodeIO} from '@gltf-transform/core';
import {createBodyLayerAssembly} from './src/body-layer-assembly.js';
import * as T from 'three';
import {projectedPickingIndex} from './src/projected-picking-index.js';
import {nearestVisibleHit} from './src/nearest-visible-hit.js';
import {skeletalTypeColors} from './src/skeletal-structure-type.js';

const directory=path.resolve('../../tmp/atlas-qa/z-system-evaluated');
const manifest=JSON.parse(fs.readFileSync(path.join(directory,'runtime-manifest.json')));
globalThis.window=globalThis;globalThis.document={baseURI:'http://atlas.local/'};
globalThis.fetch=async url=>new Response(fs.readFileSync(path.join(directory,path.basename(String(url)))));
const io=new NodeIO();let checked=0,maxError=0;
const assembly=createBodyLayerAssembly(manifest);
for(const asset of manifest.assets){
 const root=await assembly.setVisible(asset.layer,true);
 const doc=await io.readBinary(gunzipSync(fs.readFileSync(path.join(directory,asset.file))));
 const expected=new Map(doc.getRoot().listNodes().filter(n=>n.getMesh()).map(n=>[n.getName(),n]));
 let count=0;
 root.traverse(mesh=>{
  if(!mesh.isMesh)return;count++;
  const node=expected.get(mesh.userData.detail.sourcePartId);assert.ok(node);
  assert.equal(mesh.userData.detail.layer,asset.layer);
  if(asset.layer==='skeleton')assert.equal(mesh.material.color.getHexString(),skeletalTypeColors[mesh.userData.detail.structureType].slice(1));
  if(mesh.userData.detail.representation==='cavity-surface')assert.equal(mesh.material.color.getHexString(),'a6bbb3');
  const matrix=node.getWorldMatrix(),positions=node.getMesh().listPrimitives()[0].getAttribute('POSITION').getArray(),actual=mesh.geometry.attributes.position;
  assert.equal(actual.count*3,positions.length);
  for(let i=0;i<positions.length;i+=3){
   for(let axis=0;axis<3;axis++){
    const world=matrix[axis]*positions[i]+matrix[axis+4]*positions[i+1]+matrix[axis+8]*positions[i+2]+matrix[axis+12];
    const normalized=(world-manifest.displayFrame.center[axis])*manifest.displayFrame.scale;
    const value=axis===0?actual.getX(i/3):axis===1?actual.getY(i/3):actual.getZ(i/3);
    const error=Math.abs(normalized-value);maxError=Math.max(maxError,error);assert.ok(error<5e-7);
   }
   checked++;
  }
 });
 assert.equal(count,asset.count);
 console.log(`${asset.layer}: ${count} structures retain the same skeletal display frame`);
}
assert.equal(assembly.root.children.length,manifest.assets.length);
assert.equal(assembly.root.userData.detail.assets.length,manifest.assets.length);
assembly.root.updateMatrixWorld(true);
const visible=[];assembly.root.traverseVisible(m=>{if(m.isMesh)visible.push(m);});
const camera=new T.PerspectiveCamera(35,1,.1,100),ray=new T.Raycaster();let checkedRays=0;
for(const position of [[0,0,5],[5,0,0],[0,5,.01]]){
 camera.position.fromArray(position);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);const index=projectedPickingIndex(visible,camera);
 for(const [x,y]of [[0,0],[.1,.4],[-.1,.4],[.1,-.4],[-.1,-.4],[0,.7],[0,-.7]]){
  ray.setFromCamera(new T.Vector2(x,y),camera);
  const accelerated=visible.map(m=>m.raycast);
  visible.forEach(m=>{m.raycast=T.Mesh.prototype.raycast;});
  const expected=ray.intersectObjects(visible,false);
  visible.forEach((m,i)=>{m.raycast=accelerated[i];});
  assert.deepEqual(ray.intersectObjects(index(x,y),false).map(h=>h.object.name),expected.map(h=>h.object.name));
  const nearest=nearestVisibleHit(ray,index(x,y));
  assert.equal(nearest?.object.uuid,expected[0]?.object.uuid);
  if(nearest)assert.ok(Math.abs(nearest.distance-expected[0].distance)<1e-8);
  // A cut can remove the first surface while leaving a deeper structure.
  const plane=new T.Plane(new T.Vector3(0,0,-1),0);
  for(const mesh of visible)mesh.material.clippingPlanes=[plane];
  const cutExpected=expected.find(h=>plane.distanceToPoint(h.point)>=0),cut=nearestVisibleHit(ray,index(x,y));
  assert.equal(cut?.object.uuid,cutExpected?.object.uuid);
  if(cut)assert.ok(Math.abs(cut.distance-cutExpected.distance)<1e-8);
  for(const mesh of visible)mesh.material.clippingPlanes=[];
  checkedRays++;
 }
}
console.log('Actual whole-body indexed ray hit sequences match full search:',checkedRays);
await assembly.setVisible('muscles',false);
assert.equal(assembly.getState().find(s=>s.layer==='muscles').visible,false);
assert.equal(assembly.getState().find(s=>s.layer==='skeleton').visible,true);
assembly.dispose();
console.log(JSON.stringify({vertices:checked,maxError}));
