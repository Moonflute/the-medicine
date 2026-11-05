import {trimStandaloneHeart} from './heart-view.js';
import {smoothTestisSurface} from './testis-shading.js';
import {loadCompressedGlb} from './load-glb.js';
import {lightModels} from './light-model-manifest.js';
import {anatomicalColor} from './anatomy-colors.js';
import {organPalette} from './anatomy-palette.js';
import {accelerateSourceModel,attachSourceRaycast} from './source-mesh-bvh.js';
import {smoothVesselSeamNormals} from './vessel-seam-normals.js';
import {deduplicateContext} from './context-geometry.js';
import {contextGroupFor} from './context-groups.js';
import {getStructureIdentity} from './structure-identifiers.js';
import {modelSources} from './model-sources.js';
import {partLabel} from './inspection-data.js';
import * as T from 'three';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {organs} from './data.js';
const overviewOrgans=organs.filter(o=>o.overview!==false||o.id==='vasculature');
const labels={VH_M_left_cardiac_atrium:'좌심방',VH_M_right_cardiac_atrium:'우심방',VH_M_heart_right_ventricle:'우심실',VH_M_heart_left_ventricle:'좌심실',VH_M_mitral_valve:'승모판',VH_M_tricuspid_valve:'삼첨판',VH_M_aortic_valve:'대동맥판',VH_M_pulmonary_valve:'폐동맥판',VH_M_aortic_arch:'대동맥활',VH_M_ascending_aorta:'상행대동맥',VH_M_pulmonary_trunk:'폐동맥줄기',VH_M_superior_vena_cava:'상대정맥',VH_M_inferior_vena_cava_a:'하대정맥',VH_M_trachea:'기관',VH_M_left_main_bronchus:'좌주기관지',VH_M_right_main_bronchus:'우주기관지',VH_M_falciform_ligament:'낫인대',VH_M_caudate_lobe_of_liver:'꼬리엽',VH_M_quadrate_lobe_of_liver:'네모엽'};
// Model cache coalesces requests and only loads a model when selected.
export class ModelRepository {
 constructor({quality=new URLSearchParams(globalThis.location?.search||'').get('quality')}={}){this.quality=quality==='original'?'original':'light';this.loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);this.pending=new Map();this.pendingContexts=new Map();this.contextModels=new Map();this.raws=new Map();this.models={};this.requests=new Map();this.active=null;this.disposed=false;}
 // Pin shared resources until the requesting view commits or is superseded.
 beginRequest(id,{context=false,detail=false}={}){
  if(this.disposed)throw Error('Model repository disposed');
  const token=Symbol(id),group=context?contextGroupFor(id):null;
  this.retentionEnabled=true;
  const ids=detail?[]:id==='body'?['body',...overviewOrgans.map(o=>o.id)]:group?.members||[id];
  this.requests.set(token,{ids,context:group?.id});
  return ()=>{this.requests.delete(token);this.sweep();};
 }
 async get(id,onProgress=()=>{}){
  if(this.models[id])return this.models[id];if(this.pending.has(id))return this.pending.get(id);
  if(this.disposed)throw Error('Model repository disposed');
  const task=(id==='body'?this.loadBody(onProgress):this.loadOrgan(id)).then(model=>{this.models[id]=model;this.pending.delete(id);if(this.disposed||this.retentionEnabled)this.sweep();return model}).catch(error=>{this.pending.delete(id);throw error});this.pending.set(id,task);return task;
 }
 async getAnatomicalContext(id){
  if(this.disposed)throw Error('Model repository disposed');
  const context=contextGroupFor(id);if(!context)throw Error('Unsupported context');const ids=context.members,key=context.id;
  if(this.contextModels.has(key))return this.contextModels.get(key);if(this.pendingContexts.has(key))return this.pendingContexts.get(key);
  const request=(async()=>{
  await Promise.all(ids.map(key=>this.get(key)));
  if(this.disposed)throw Error('Model repository disposed');
  const assembled=new T.Group();try{for(const key of ids)assembled.add(this.copy(this.raws.get(key)));
  const contextAudit=deduplicateContext(assembled);assembled.userData.contextAudit=contextAudit;assembled.updateMatrixWorld(true);const box=new T.Box3().setFromObject(assembled),center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());assembled.position.sub(center);
  const norm=new T.Group();norm.add(assembled);norm.scale.setScalar(2.7/Math.max(size.x,size.y,size.z));const wrapper=new T.Group();wrapper.add(norm);wrapper.userData.context=context.id;this.contextModels.set(key,wrapper);return wrapper;
  }catch(error){assembled.traverse(mesh=>{if(mesh.isMesh)mesh.material.dispose()});throw error;}
  })();this.pendingContexts.set(key,request);
  try{return await request;}finally{if(this.pendingContexts.get(key)===request)this.pendingContexts.delete(key);}
 }
 async loadOrgan(id){
  if(this.raws.has(id))return this.normalize(this.raws.get(id));
  const o=organs.find(o=>o.id===id);if(!o)throw Error('Unknown organ: '+id);const url=this.quality==="light"&&lightModels[id]?lightModels[id].url:modelSources[id].url;let gltf;
  gltf=await loadCompressedGlb(url,this.loader);
  const raw=gltf.scene;if(id==='testes')raw.userData.shading=smoothTestisSurface(raw);if(id==='brain')raw.scale.x*=-1;if(id==='heart'||id==='vasculature')raw.userData.shadingSeams=smoothVesselSeamNormals(raw);
  raw.traverse(m=>{if(!m.isMesh)return;const name=m.name,color=anatomicalColor(id,name,o.color);
   const earContext=id==='ears'&&/Dural_venous_sinus|Internal_carotid_artery/.test(name),earCanal=id==='ears'&&/External_acoustic_meatus|Tympanic_membrane/.test(name);
   const nasalContext=id==='nose'&&/FJ3269|FJ3375|FJ3273|FJ3379/.test(name);const translucent=nasalContext||earContext||earCanal||(id==='spinal-cord'&&/vertebra|intervertebral/.test(name))||id==='eyes'&&/cornea|conjunctiva|aqueous_humor|vitreous_humor|lens/.test(name)&&!/ligament|junction/.test(name);
   const old=m.material;m.material=new T.MeshStandardMaterial({color,roughness:.85,metalness:0,flatShading:false,transparent:translucent,opacity:nasalContext?.18:earCanal?.22:translucent?.08:1,depthWrite:!translucent});if(Array.isArray(old))old.forEach(m=>m.dispose());else old.dispose();m.userData={organId:id,partId:name,label:labels[name]||name.replace(/^(VH_[MF]_|Allen_|SBU_[MF]_)/,'').replaceAll('_',' '),baseColor:m.material.color.clone(),source:modelSources[id].sources[0].url};m.userData.structureIdentity=getStructureIdentity(id,name);m.userData.label=partLabel(name,m.userData.label);m.userData.contextStructure=earContext||nasalContext;m.userData.restOpacity=m.material.opacity;m.userData.restTransparent=m.material.transparent;m.userData.restDepthWrite=m.material.depthWrite;m.castShadow=!translucent;m.receiveShadow=true;
  });
  await accelerateSourceModel(raw);raw.updateMatrixWorld(true);this.raws.set(id,raw);return this.normalize(raw);
 }
 normalize(raw){const inner=this.copy(raw),box=new T.Box3();if(raw===this.raws.get('heart'))trimStandaloneHeart(inner);inner.updateMatrixWorld(true);inner.traverse(m=>{if(m.isMesh&&!m.userData.contextStructure)box.expandByObject(m)});const center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());inner.position.sub(center);const norm=new T.Group();norm.add(inner);norm.scale.setScalar(2.7/Math.max(size.x,size.y,size.z));const wrapper=new T.Group();wrapper.add(norm);return wrapper;}
 releaseInactive(id,active){
 this.active={id,model:active};this.sweep();
 }
 sweep(){
 const active=this.active?.model,id=this.active?.id;
 const keepRawIds=new Set(active&&!active.userData.detail?(active.userData.context?contextGroupFor(id).members:id==='body'?overviewOrgans.map(o=>o.id):[id]):[]);
 const pendingContexts=new Set(),pendingIds=new Set();for(const request of this.requests.values()){request.ids.forEach(id=>{keepRawIds.add(id);pendingIds.add(id)});if(request.context)pendingContexts.add(request.context);}
 const retained=[active,...[...keepRawIds].map(key=>this.raws.get(key)),...[...pendingIds].map(key=>this.models[key]),...[...pendingContexts].map(key=>this.contextModels.get(key))].filter(Boolean);
 const geometries=new Set(),materials=new Set();for(const root of retained)root.traverse(m=>{if(m.geometry)geometries.add(m.geometry);for(const material of Array.isArray(m.material)?m.material:[m.material])if(material)materials.add(material)});
 const discarded=[...Object.values(this.models),...this.raws.values(),...this.contextModels.values()].filter(root=>!retained.includes(root));const disposedG=new Set(),disposedM=new Set();for(const root of discarded)root.traverse(m=>{if(m.geometry&&!geometries.has(m.geometry)&&!disposedG.has(m.geometry)){m.geometry.dispose();disposedG.add(m.geometry)}for(const material of Array.isArray(m.material)?m.material:[m.material])if(material&&!materials.has(material)&&!disposedM.has(material)){material.dispose();disposedM.add(material)}});
 for(const key of Object.keys(this.models))if(!retained.includes(this.models[key]))delete this.models[key];for(const key of this.raws.keys())if(!keepRawIds.has(key))this.raws.delete(key);for(const [key,value]of this.contextModels)if(!retained.includes(value))this.contextModels.delete(key);
 }
 dispose(){this.disposed=true;this.requests.clear();this.active=null;this.sweep();}
 copy(raw){const g=raw.clone(true);g.traverse(m=>{if(m.isMesh){m.material=m.material.clone();m.userData.baseColor=m.material.color.clone();attachSourceRaycast(m)}});return g;}
 async loadBody(onProgress){const eligible=overviewOrgans,queue=[...eligible];let count=0;await Promise.all(Array.from({length:3},async()=>{while(queue.length){await this.get(queue.shift().id);onProgress(++count,eligible.length)}}));
  const body=new T.Group(),owners=new Map();for(const o of eligible)this.raws.get(o.id).traverse(m=>{if(m.isMesh&&!owners.has(m.name))owners.set(m.name,o.id)});for(const id of ['ureters','urethra','vasculature'])this.raws.get(id)?.traverse(m=>{if(m.isMesh)owners.set(m.name,id)});
  for(const o of eligible){const source=this.copy(this.raws.get(o.id)),wrapper=new T.Group();wrapper.userData={organId:o.id,system:o.system,isShell:o.id==='skin'};const duplicates=[];source.traverse(m=>{if(m.isMesh&&owners.get(m.name)!==o.id)duplicates.push(m)});duplicates.forEach(m=>m.removeFromParent());
   if(o.id==='skin')source.traverse(m=>{if(m.isMesh){m.material.color.set(organPalette.skin);m.material.transparent=true;m.material.opacity=.22;m.material.depthWrite=false;m.castShadow=false;m.raycast=()=>{};delete m.userData.baseColor;}});
   wrapper.add(source);wrapper.scale.setScalar(2.5);wrapper.position.y=.09;body.add(wrapper);
  }return body;
 }
}


