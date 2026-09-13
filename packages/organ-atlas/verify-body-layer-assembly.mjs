import assert from 'node:assert/strict';
import {Group,Mesh,BoxGeometry,MeshBasicMaterial} from 'three';
import {createBodyLayerAssembly} from './src/body-layer-assembly.js';
import {disposeDetailModel,getDetailController} from './src/detail-resources.js';

const manifest={source:{url:'source'},status:'research',displayFrame:{center:[0,1,0],scale:1.5},identities:{},assets:['skeleton','muscles','nerves'].map(layer=>({layer,file:layer,count:1}))};
let calls=0,disposed=0;
const resolvers=[];
const load=region=>{calls++;assert.equal(region.displayFrame,manifest.displayFrame);return new Promise((resolve,reject)=>resolvers.push({resolve:()=>{
 const model=new Group();model.userData.detail={assets:[{renderingAsset:region.file}]};
 const geometry=new BoxGeometry();geometry.addEventListener('dispose',()=>disposed++);
 model.add(new Mesh(geometry,new MeshBasicMaterial()));resolve(model);
},reject}));};
const assembly=createBodyLayerAssembly(manifest,{load});
assert.equal(calls,0);
const first=assembly.setVisible('skeleton',true),duplicate=assembly.setVisible('skeleton',true);
assert.equal(calls,1);await assembly.setVisible('skeleton',false);resolvers.shift().resolve();
const model=await first;assert.equal(await duplicate,model);assert.equal(model.visible,false);
await assembly.setVisible('skeleton',true);assert.equal(calls,1);assert.equal(model.visible,true);
const failure=assembly.setVisible('muscles',true);resolvers.shift().reject(Error('offline'));
await assert.rejects(failure,/offline/);assert.equal(assembly.getState()[1].loading,false);
const retry=assembly.setVisible('muscles',true);resolvers.shift().resolve();await retry;
assert.equal(assembly.root.children.length,2);assert.equal(assembly.root.userData.detail.assets.length,2);
assert.equal(getDetailController(assembly.root),assembly);
const late=assembly.setVisible('nerves',true);disposeDetailModel(assembly.root);resolvers.shift().resolve();await late;
assert.equal(getDetailController(assembly.root),undefined);
assert.equal(disposed,3);assert.equal(assembly.root.children.length,0);
await assert.rejects(assembly.setVisible('skeleton',true),/disposed/);
console.log('Lazy load, request deduplication, pending visibility, retry, source frame, export assets and late disposal passed');
