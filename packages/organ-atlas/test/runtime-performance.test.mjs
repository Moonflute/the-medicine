import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import * as T from 'three';
import {ModelRepository} from '../src/reference-models.js';
import {accelerateSourceModel} from '../src/source-mesh-bvh.js';
import {nearestModelHit,visibleModelHits} from '../src/visible-picking.js';
import {matchesBodyScope,scopeLayers} from '../src/body-browse.js';
import {AtlasScene} from '../src/scene.js';
import {createBodyLayerAssembly} from '../src/body-layer-assembly.js';

const deferred=()=>{let resolve,reject;const promise=new Promise((yes,no)=>{resolve=yes;reject=no;});return {promise,resolve,reject};};
function fixture(id){
 const root=new T.Group(),geometry=new T.BoxGeometry(),material=new T.MeshStandardMaterial(),mesh=new T.Mesh(geometry,material);
 let disposals=0;geometry.addEventListener('dispose',()=>disposals++);
 mesh.name=id;mesh.userData={partId:id,organId:'skeleton',baseColor:new T.Color('#cc3333'),restOpacity:1};root.add(mesh);
 return {root,mesh,geometry,disposals:()=>disposals};
}
function controlledRepository(){
 const repository=new ModelRepository(),loads=new Map(),sources=new Map();
 repository.loadOrgan=async id=>{const gate=deferred();loads.set(id,gate);await gate.promise;const source=fixture(id);sources.set(id,source);repository.raws.set(id,source.root);return repository.normalize(source.root);};
 return {repository,loads,sources};
}
test('late previous organ releases its buffers without touching the current view',async()=>{
 const {repository,loads,sources}=controlledRepository();
 const releaseOld=repository.beginRequest('brain'),old=repository.get('brain');
 const releaseCurrent=repository.beginRequest('heart'),current=repository.get('heart');
 loads.get('heart').resolve();const active=await current;repository.releaseInactive('heart',active);releaseCurrent();
 loads.get('brain').resolve();await old;releaseOld();
 assert.deepEqual([...repository.raws.keys()],['heart']);assert.deepEqual(Object.keys(repository.models),['heart']);
 assert.equal(sources.get('brain').disposals(),1);assert.equal(sources.get('heart').disposals(),0);
 repository.dispose();assert.equal(sources.get('heart').disposals(),1);
});
test('coalesced requests keep shared buffers alive until the last request or view releases them',async()=>{
 const {repository,loads,sources}=controlledRepository(),releaseA=repository.beginRequest('heart'),a=repository.get('heart');
 const releaseB=repository.beginRequest('heart'),b=repository.get('heart');assert.equal(loads.size,1);
 loads.get('heart').resolve();const first=await a,second=await b;assert.equal(first,second);
 releaseA();assert.equal(sources.get('heart').disposals(),0);
 repository.releaseInactive('heart',second);releaseB();assert.equal(sources.get('heart').disposals(),0);
 repository.dispose();assert.equal(sources.get('heart').disposals(),1);
});
test('replaced quality repository cannot retain a later download',async()=>{
 const {repository,loads,sources}=controlledRepository(),release=repository.beginRequest('heart'),pending=repository.get('heart');
 repository.dispose();loads.get('heart').resolve();await pending;release();
 assert.equal(repository.raws.size,0);assert.equal(Object.keys(repository.models).length,0);assert.equal(sources.get('heart').disposals(),1);
});
test('a full-body request retains its assembly until the view commits',async()=>{
 const repository=new ModelRepository(),source=fixture('body');repository.loadBody=async()=>source.root;
 const release=repository.beginRequest('body'),model=await repository.get('body');assert.equal(source.disposals(),0);
 repository.releaseInactive('body',model);release();assert.equal(source.disposals(),0);repository.dispose();assert.equal(source.disposals(),1);
});
test('urinary requests share one assembly and discard redundant standalone materials',async()=>{
 const {repository,loads,sources}=controlledRepository();
 const releaseA=repository.beginRequest('kidneys',{context:true}),a=repository.getAnatomicalContext('kidneys');
 const releaseB=repository.beginRequest('bladder',{context:true}),b=repository.getAnatomicalContext('bladder');
 assert.equal(loads.size,4);for(const gate of loads.values())gate.resolve();
 const first=await a,second=await b;assert.equal(first,second);
 repository.releaseInactive('bladder',second);releaseA();releaseB();
 assert.equal(repository.contextModels.size,1);assert.equal(repository.raws.size,4);assert.equal(Object.keys(repository.models).length,0);
 assert([...sources.values()].every(source=>source.disposals()===0));repository.dispose();assert([...sources.values()].every(source=>source.disposals()===1));
});
test('failed assembly also releases components that finish after the failure',async()=>{
 const {repository,loads,sources}=controlledRepository(),release=repository.beginRequest('heart',{context:true});
 const pending=repository.getAnatomicalContext('heart');loads.get('heart').reject(Error('offline'));await assert.rejects(pending,/offline/);release();
 const remaining=repository.pending.get('lungs');loads.get('lungs').resolve();await remaining;
 assert.equal(repository.raws.size,0);assert.equal(Object.keys(repository.models).length,0);assert.equal(sources.get('lungs').disposals(),1);
});
test('clones reuse BVH and cutaway picking can select the farther surviving surface',async()=>{
 const repository=new ModelRepository(),source=fixture('heart'),positions=source.geometry.attributes.position.array.slice(),indices=source.geometry.index.array.slice();
 source.mesh.material.side=T.DoubleSide;await accelerateSourceModel(source.root);const copy=repository.copy(source.root),mesh=copy.children[0];
 assert.equal(mesh.geometry.boundsTree,source.geometry.boundsTree);assert.equal(mesh.raycast,source.mesh.raycast);
 assert.deepEqual(source.geometry.attributes.position.array,positions);assert.deepEqual(source.geometry.index.array,indices);
 copy.updateMatrixWorld(true);const ray=new T.Raycaster(new T.Vector3(0,0,3),new T.Vector3(0,0,-1));
 for(const planes of [[],[new T.Plane(new T.Vector3(0,0,-1),0)]]){
  mesh.material.clippingPlanes=planes;const expected=visibleModelHits(ray,copy)[0],actual=nearestModelHit(ray,copy);
  assert(actual);assert.equal(actual.object,expected.object);assert.ok(Math.abs(actual.distance-expected.distance)<1e-9);assert.equal(ray.firstHitOnly,undefined);
 }
 assert.equal(nearestModelHit(ray,copy).point.z,-.5);source.geometry.dispose();source.mesh.material.dispose();mesh.material.dispose();
});
test('region filtering reuses immutable geometry bounds and loading skips only disjoint layers',()=>{
 const source=fixture('leg');source.mesh.userData.detail={layer:'skeleton',system:'skeleton',sourceMesh:'Tibia.r'};
 let computations=0;const original=source.geometry.computeBoundingBox.bind(source.geometry);source.geometry.computeBoundingBox=()=>{computations++;original();};
 for(let i=0;i<100;i++)assert(matchesBodyScope(source.mesh,{mode:'region',value:'lower-limbs'},{displayScale:1,displayCenter:[0,0,0]}));
 assert.equal(computations,1);
 const manifest=JSON.parse(fs.readFileSync(new URL('../static/models/current/z-whole-manifest.json',import.meta.url),'utf8'));
 const all=scopeLayers('region','lower-limbs'),needed=scopeLayers('region','lower-limbs',manifest.assets);
 assert.deepEqual(needed,['skeleton','muscles','arteries','veins','nerves']);
 assert.deepEqual(scopeLayers('region','thorax',manifest.assets),all);
 assert.deepEqual(scopeLayers('system','digestive',manifest.assets),['organs']);
 source.geometry.dispose();source.mesh.material.dispose();
});
test('hidden layer and isolated meshes bypass frame material and pathology work',()=>{
 const visible=fixture('visible'),hidden=fixture('hidden'),model=new T.Group(),hiddenParent=new T.Group();
 model.add(visible.mesh,hiddenParent);hiddenParent.add(hidden.mesh);hiddenParent.visible=false;
 visible.mesh.material.color.set('#000000');hidden.mesh.material.color.set('#000000');
 let hiddenBounds=0;hidden.geometry.computeBoundingBox=()=>{hiddenBounds++;throw Error('Hidden geometry should not be processed');};
 const scene=Object.assign(Object.create(AtlasScene.prototype),{active:'skeleton',models:{skeleton:model},last:0,progress:1,dirty:true,reduced:true,focused:false,
  controls:{target:new T.Vector3(),update(){}},camera:new T.PerspectiveCamera(),renderer:{render(){},info:{memory:{geometries:2},render:{calls:1,triangles:12}}},
  effect:{effect:'normal',intensity:.65},stage:new T.Group(),scene:new T.Scene(),host:{dataset:{}},sectionCaps:{update(){},visibleCount:0},indications:{update(){return false;}},
  restPoses:new WeakMap(),pathologyStates:{},normalComparison:false,motionPlaying:false,motionTime:0,motionSpeed:1,inspection:{},targetColor:new T.Color(),pathologyColor:new T.Color(),poseOffset:new T.Vector3()});
 scene.frame(16);assert.equal(scene.host.dataset.updatedParts,'1');assert.equal(hiddenBounds,0);assert.equal(hidden.mesh.material.color.getHexString(),'000000');
 hiddenParent.visible=true;hidden.geometry.computeBoundingBox=T.BufferGeometry.prototype.computeBoundingBox;scene.dirty=true;scene.frame(32);
 assert.equal(scene.host.dataset.updatedParts,'2');assert.equal(hidden.mesh.material.color.getHexString(),'cc3333');
 for(const source of [visible,hidden]){source.geometry.dispose();source.mesh.material.dispose();}
});
test('changing whole-body scope can release hidden layers and reload them on demand',async()=>{
 const sources=[],manifest={source:{url:'source'},status:'test',displayFrame:{center:[0,0,0],scale:1},identities:{},assets:['skeleton','organs'].map(layer=>({layer,file:layer,count:1}))};
 const assembly=createBodyLayerAssembly(manifest,{load:async region=>{const source=fixture(region.id);source.root.userData.detail={assets:[{renderingAsset:region.file}]};sources.push(source);return source.root;}});
 await assembly.setVisible('skeleton',true);await assembly.setVisible('organs',true);await assembly.setVisible('skeleton',false);assembly.releaseHidden();
 assert.equal(sources[0].disposals(),1);assert.equal(assembly.root.children.length,1);assert.equal(assembly.getState()[0].loaded,false);
 await assembly.setVisible('skeleton',true);assert.equal(sources.length,3);assembly.dispose();assert(sources.every(source=>source.disposals()===1));
});
test('scope changes also release hidden layers whose downloads are still pending',async()=>{
 const source=fixture('skeleton'),gate=deferred(),manifest={source:{url:'source'},status:'test',displayFrame:{center:[0,0,0],scale:1},identities:{},assets:[{layer:'skeleton',file:'skeleton',count:1}]};
 source.root.userData.detail={assets:[]};
 const assembly=createBodyLayerAssembly(manifest,{load:()=>gate.promise}),pending=assembly.setVisible('skeleton',true);
 await assembly.setVisible('skeleton',false);assembly.releaseHidden();gate.resolve(source.root);assert.equal(await pending,null);
 assert.equal(source.disposals(),1);assert.equal(assembly.root.children.length,0);assert.equal(assembly.getState()[0].loaded,false);assembly.dispose();
});
