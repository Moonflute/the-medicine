import * as T from 'three';import assert from 'node:assert/strict';import {projectedPickingIndex} from './src/projected-picking-index.js';
import {nearestVisibleHit} from './src/nearest-visible-hit.js';
const scene=new T.Scene(),meshes=[],geometry=new T.BoxGeometry(.1,.1,.1),material=new T.MeshBasicMaterial({side:T.DoubleSide});
for(let y=-10;y<=10;y++)for(let x=-10;x<=10;x++){const mesh=new T.Mesh(geometry,material);mesh.position.set(x*.16,y*.16,0);scene.add(mesh);meshes.push(mesh);}
// Include a large box crossing the near plane to exercise the conservative fallback.
const crossing=new T.Mesh(geometry,material);crossing.position.set(.7,0,3.9);crossing.scale.set(2,2,4);scene.add(crossing);meshes.push(crossing);
scene.updateMatrixWorld(true);const camera=new T.PerspectiveCamera(45,1,.1,100);camera.position.z=4;camera.updateMatrixWorld(true);
const index=projectedPickingIndex(meshes,camera),ray=new T.Raycaster();let totalCandidates=0,totalRays=0;
for(let y=-.95;y<1;y+=.095)for(let x=-.95;x<1;x+=.095){ray.setFromCamera(new T.Vector2(x,y),camera);const candidates=index(x,y),expected=ray.intersectObjects(meshes,false),actual=ray.intersectObjects(candidates,false);assert.deepEqual(actual.map(h=>h.object.uuid),expected.map(h=>h.object.uuid));totalCandidates+=candidates.length;totalRays++;}
assert.ok(totalCandidates<totalRays*meshes.length*.2);
for(const clipped of [false,true]){
 material.clippingPlanes=clipped?[new T.Plane(new T.Vector3(0,0,-1),0)]:[];
 for(let y=-.95;y<1;y+=.095)for(let x=-.95;x<1;x+=.095){
  ray.setFromCamera(new T.Vector2(x,y),camera);
  const expected=ray.intersectObjects(meshes,false).find(h=>!material.clippingPlanes.some(p=>p.distanceToPoint(h.point)<0));
  const actual=nearestVisibleHit(ray,index(x,y));
  assert.equal(actual?.object.uuid,expected?.object.uuid);
  if(expected)assert.ok(Math.abs(actual.distance-expected.distance)<1e-8);
 }
}
console.log(JSON.stringify({rays:totalRays,allMeshCandidates:totalRays*meshes.length,indexedCandidates:totalCandidates,hitSequences:'identical'}));geometry.dispose();material.dispose();
