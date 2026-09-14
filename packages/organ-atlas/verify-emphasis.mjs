import assert from 'node:assert/strict';
import * as T from 'three';
import {AtlasScene} from './src/scene.js';
import {resolveOpacity} from './src/material-state.js';
const root=new T.Group();
for(const id of ['selected','surrounding']){const m=new T.Mesh(new T.BoxGeometry(),new T.MeshStandardMaterial());m.userData={partId:id,organId:'test',restOpacity:.3};root.add(m);}
const scene={models:{test:root},active:'test',host:{dataset:{}},inspection:{},baseSide:'',getParts:()=>[],restPoses:new WeakMap(),pathologyStates:{},motionTime:0,reduced:true};
AtlasScene.prototype.inspect.call(scene,{mode:'context',part:'selected',cut:50});
for(const step of [()=>{},()=>AtlasScene.prototype.applyPathology.call(scene,0)]){step();for(const m of root.children){assert.equal(m.visible,true);assert.equal(m.material.opacity,1);assert.equal(m.material.transparent,false);assert.equal(m.material.depthWrite,true);assert.equal(m.renderOrder,0);}}
AtlasScene.prototype.inspect.call(scene,{mode:'isolate',part:'selected'});assert.equal(root.children[1].visible,false);
AtlasScene.prototype.inspect.call(scene,{mode:'all',part:''});assert.equal(root.children[1].material.opacity,.3);
assert.equal(resolveOpacity({pathologyOpacity:.2}),.2);
console.log('Emphasis keeps surfaces opaque through animation; isolation and native/pathological transparency restore correctly');
