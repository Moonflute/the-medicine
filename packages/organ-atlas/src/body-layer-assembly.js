import {Group} from 'three';
import {loadBodySystemDetail} from './body-system-detail.js';
import {disposeDetailModel,registerDetailController,unregisterDetailController} from './detail-resources.js';

// Owns asynchronously loaded layers in one immutable skeletal display frame.
// Visibility requests are last-write-wins, including while a download is pending.
export function createBodyLayerAssembly(manifest,{load=loadBodySystemDetail}={}){
 const root=new Group(),loaded=new Map(),pending=new Map(),desired=new Map();
 const assets=new Map(manifest.assets.map(asset=>[asset.layer,asset]));
 let disposed=false,fasciaVisible=false;
 root.userData.detail={id:'whole-source-body',kind:'source-surface',title:'전신 계통',revision:1,
  renderingQuality:'light',references:[manifest.source.url],assets:[],notice:manifest.status,
  sourceFrame:{unitScale:1,displayCenter:[...manifest.displayFrame.center],displayScale:manifest.displayFrame.scale}};
 function syncAssets(){root.userData.detail.assets=[...loaded.values()].flatMap(model=>model.userData.detail.assets);root.userData.detail.layerState=manifest.assets.map(({layer})=>({layer,loaded:loaded.has(layer),visible:desired.get(layer)===true}));}
 function applyCategories(model){model.traverse(mesh=>{if(mesh.isMesh&&mesh.userData.detail?.displayCategory==='fascia')mesh.visible=fasciaVisible;});}
 function setFasciaVisible(visible){
  if(disposed)throw Error('Body assembly disposed');
  fasciaVisible=!!visible;loaded.forEach(applyCategories);
  root.userData.detail.fasciaVisible=fasciaVisible;
 }
 async function setVisible(layer,visible){
  if(disposed)throw Error('Body assembly disposed');
  const asset=assets.get(layer);if(!asset)throw Error('Unknown body layer: '+layer);
  desired.set(layer,!!visible);syncAssets();
  if(loaded.has(layer)){loaded.get(layer).visible=!!visible;return loaded.get(layer);}
  if(!visible)return null;
  if(pending.has(layer))return pending.get(layer);
  const request=(async()=>{
   const model=await load({id:'whole-source-'+layer,label:layer,file:asset.file,count:asset.count,
    includeBase:false,unitScale:1,source:manifest.source,displayFrame:manifest.displayFrame},manifest.identities,manifest.status);
   if(disposed){disposeDetailModel(model);return null;}
   applyCategories(model);model.visible=desired.get(layer)===true;loaded.set(layer,model);root.add(model);delete root.userData.groupedExplosion;syncAssets();return model;
  })();
  pending.set(layer,request);
  try{return await request;}catch(error){desired.set(layer,false);syncAssets();throw error;}finally{if(pending.get(layer)===request)pending.delete(layer);}
 }
 async function restore(state){
  if(!Array.isArray(state?.layers))throw Error('Invalid saved body layers');
  const seen=new Set();
  for(const row of state.layers){if(!assets.has(row.layer)||seen.has(row.layer)||typeof row.loaded!=='boolean'||typeof row.visible!=='boolean'||row.visible&&!row.loaded)throw Error('Invalid saved body layer');seen.add(row.layer);}
  // Resolve only assets from the current trusted manifest, never saved URLs.
  for(const row of state.layers){if(row.loaded)await setVisible(row.layer,true);await setVisible(row.layer,row.visible);}
  for(const layer of assets.keys())if(!seen.has(layer))await setVisible(layer,false);
  setFasciaVisible(state.fasciaVisible===true);
 }
 function dispose(){
  if(disposed)return;disposed=true;unregisterDetailController(root);
  for(const model of loaded.values()){disposeDetailModel(model);model.removeFromParent();}
  loaded.clear();desired.clear();syncAssets();
 }
 const controller={root,setVisible,setFasciaVisible,restore,dispose,getState:()=>manifest.assets.map(({layer})=>({layer,
  loaded:loaded.has(layer),loading:pending.has(layer),visible:desired.get(layer)===true}))};
 registerDetailController(root,controller);return controller;
}
