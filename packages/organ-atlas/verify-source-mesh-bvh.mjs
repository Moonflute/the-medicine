import assert from 'node:assert/strict';
import * as T from 'three';
import {accelerateSourceMesh} from './src/source-mesh-bvh.js';
const geometry=new T.TorusKnotGeometry(1,.2,160,12),mesh=new T.Mesh(geometry,new T.MeshBasicMaterial({side:T.DoubleSide}));
const positions=geometry.attributes.position.array.slice(),indices=geometry.index.array.slice();
accelerateSourceMesh(mesh);
assert.deepEqual(geometry.attributes.position.array,positions);
assert.deepEqual(geometry.index.array,indices);
const tree=geometry.boundsTree;accelerateSourceMesh(mesh);assert.equal(geometry.boundsTree,tree);
mesh.position.set(.3,-.2,.1);mesh.scale.set(1.2,.8,1.1);mesh.rotation.set(.2,.3,.4);mesh.updateMatrixWorld(true);
const accelerated=mesh.raycast,ray=new T.Raycaster();
for(let x=-1.5;x<=1.5;x+=.1){
 ray.set(new T.Vector3(x,0,5),new T.Vector3(0,0,-1));
 mesh.raycast=T.Mesh.prototype.raycast;const expected=ray.intersectObject(mesh,false);
 mesh.raycast=accelerated;const actual=ray.intersectObject(mesh,false);
 assert.equal(actual.length,expected.length);
 actual.forEach((hit,i)=>{assert.ok(Math.abs(hit.distance-expected[i].distance)<1e-7);assert.equal(hit.faceIndex,expected[i].faceIndex);});
}
geometry.dispose();assert.equal(geometry.boundsTree,null);mesh.material.dispose();
console.log('BVH preserves vertices, indices, transformed intersections, face identity and disposal');
