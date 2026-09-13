import assert from 'node:assert/strict';import * as T from 'three';import {visibleModelHits} from './src/visible-picking.js';
const root=new T.Group(),hidden=new T.Group();root.add(hidden);hidden.visible=false;
const geometry=new T.BoxGeometry(),material=new T.MeshBasicMaterial();let hiddenCalls=0;
for(let i=0;i<2000;i++){const mesh=new T.Mesh(geometry,material);mesh.raycast=()=>hiddenCalls++;hidden.add(mesh);}
const front=new T.Mesh(geometry,material),back=new T.Mesh(geometry,material.clone());back.position.z=-2;root.add(front,back);root.updateMatrixWorld(true);
const ray=new T.Raycaster(new T.Vector3(0,0,5),new T.Vector3(0,0,-1));
assert.equal(visibleModelHits(ray,root)[0].object,front);assert.equal(hiddenCalls,0);
front.visible=false;assert.equal(visibleModelHits(ray,root)[0].object,back);
back.material.clippingPlanes=[new T.Plane(new T.Vector3(0,0,1),1)];assert.equal(visibleModelHits(ray,root).length,0);
assert.deepEqual(visibleModelHits(ray,null),[]);
root.visible=false;assert.deepEqual(visibleModelHits(ray,root),[]);
geometry.dispose();material.dispose();back.material.dispose();
console.log('2000 hidden meshes bypass triangle picking; visible ordering, hidden root and clipping preserved');
