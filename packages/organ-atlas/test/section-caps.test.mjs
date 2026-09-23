import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {auditWatertightGeometry,SectionCapManager} from '../src/section-caps.js';

function sourceMesh(geometry,color='#c86c61'){
 const material=new T.MeshStandardMaterial({color,opacity:1});
 const mesh=new T.Mesh(geometry,material);mesh.name='test-organ';mesh.userData={partId:'test:organ',baseColor:new T.Color(color)};return mesh;
}

test('only closed, consistently oriented triangle surfaces are eligible for section caps',()=>{
 const closed=auditWatertightGeometry(new T.BoxGeometry(2,2,2));
 assert.equal(closed.watertight,true);
 assert.equal(closed.reason,'closed-oriented-surface');
 assert.ok(closed.triangles>0);
 const open=auditWatertightGeometry(new T.PlaneGeometry(2,2));
 assert.equal(open.watertight,false);
 assert.equal(open.reason,'open-or-nonmanifold');
});

test('nested/disconnected and zero-volume shells fall back instead of inventing tissue',()=>{
 const boxA=new T.BoxGeometry(1,1,1).toNonIndexed(),boxB=new T.BoxGeometry(1,1,1).toNonIndexed();boxB.translate(3,0,0);
 const a=boxA.getAttribute('position').array,b=boxB.getAttribute('position').array,disconnected=new T.BufferGeometry();disconnected.setAttribute('position',new T.Float32BufferAttribute([...a,...b],3));
 assert.equal(auditWatertightGeometry(disconnected).reason,'multiple-surface-components');
 const flat=new T.BufferGeometry();flat.setAttribute('position',new T.Float32BufferAttribute([0,0,0,1,0,0,0,1,0,1,1,0],3));flat.setIndex([0,2,1,0,1,3,1,2,3,2,0,3]);
 assert.equal(auditWatertightGeometry(flat).reason,'zero-volume-surface');
 boxA.dispose();boxB.dispose();disconnected.dispose();flat.dispose();
});

test('section manager adds a tissue-derived flat cap and safely falls back for an open mesh',()=>{
 const scene=new T.Scene(),model=new T.Group(),closed=sourceMesh(new T.BoxGeometry(2,2,2),'#c86c61'),open=sourceMesh(new T.PlaneGeometry(2,2),'#5d8db4');
 model.add(closed,open);scene.add(model);model.updateMatrixWorld(true);
 const manager=new SectionCapManager(scene),plane=new T.Plane(new T.Vector3(0,0,-1),0);closed.material.clippingPlanes=[plane];open.material.clippingPlanes=[plane];
 const stats=manager.set({model,enabled:true,plane});
 assert.deepEqual(stats,{active:1,eligible:1,fallback:1,limited:0,triangles:12});
 assert.equal(manager.root.children.length,3);
 const cap=manager.root.children.find(child=>child.name.startsWith('section-cap:'));
 assert.ok(cap);
 assert.equal(cap.userData.representation,'homogeneous-section-cap');
 assert.equal(cap.userData.anatomicalDetail,false);
 assert.equal(cap.material.stencilFunc,T.NotEqualStencilFunc);
 assert.equal(cap.material.color.getHexString(),new T.Color('#c86c61').multiplyScalar(.78).getHexString());
 assert.equal(cap.raycast(),undefined);
 manager.dispose();closed.geometry.dispose();closed.material.dispose();open.geometry.dispose();open.material.dispose();
});

test('disabling a section removes all cap render work without moving scene objects',()=>{
 const scene=new T.Scene(),model=new T.Group(),mesh=sourceMesh(new T.SphereGeometry(1,12,8));model.add(mesh);scene.add(model);model.updateMatrixWorld(true);
 const beforePosition=mesh.position.clone(),manager=new SectionCapManager(scene),plane=new T.Plane(new T.Vector3(1,0,0),0);mesh.material.clippingPlanes=[plane];
 assert.ok(manager.set({model,enabled:true,plane}).active>0);
 const stats=manager.set({model,enabled:false,plane});
 assert.deepEqual(stats,{active:0,eligible:0,fallback:0,limited:0,triangles:0});
 assert.equal(manager.root.visible,false);assert.equal(manager.root.children.length,0);assert.deepEqual(mesh.position,beforePosition);
 manager.dispose();mesh.geometry.dispose();mesh.material.dispose();
});

test('plane prefilter and bounded records keep dense scenes lightweight',()=>{
 const scene=new T.Scene(),model=new T.Group(),plane=new T.Plane(new T.Vector3(1,0,0),0),meshes=[];
 for(let i=0;i<20;i++){const mesh=sourceMesh(new T.BoxGeometry(1,1,1));mesh.position.y=i*.01;mesh.material.clippingPlanes=[plane];meshes.push(mesh);model.add(mesh);}
 const distant=sourceMesh(new T.BoxGeometry(1,1,1));distant.position.x=20;distant.material.clippingPlanes=[plane];model.add(distant);scene.add(model);model.updateMatrixWorld(true);
 const manager=new SectionCapManager(scene),stats=manager.set({model,enabled:true,plane});
 assert.equal(stats.active,16);assert.equal(stats.limited,4);assert.equal(stats.fallback,4);assert.equal(manager.records.has(distant),false);
 const oldGeometry=meshes[0].geometry,newGeometry=new T.SphereGeometry(.5,8,6);meshes[0].geometry=newGeometry;meshes[0].userData.inspectionSelected=true;model.updateMatrixWorld(true);manager.set({model,enabled:true,plane});
 assert.equal(manager.records.get(meshes[0]).back.geometry,newGeometry,'in-place source geometry replacement left a stale stencil mesh');
 manager.dispose();oldGeometry.dispose();for(const mesh of meshes){if(mesh.geometry!==oldGeometry)mesh.geometry.dispose();mesh.material.dispose();}distant.geometry.dispose();distant.material.dispose();
});
