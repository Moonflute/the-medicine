import {loadCompressedGlb} from './load-glb.js';
import {lightModels} from './light-model-manifest.js';
import {anatomicalColor} from './anatomy-colors.js';
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
const labels={VH_M_left_cardiac_atrium:'좌심방',VH_M_right_cardiac_atrium:'우심방',VH_M_heart_right_ventricle:'우심실',VH_M_heart_left_ventricle:'좌심실',VH_M_mitral_valve:'승모판',VH_M_tricuspid_valve:'삼첨판',VH_M_aortic_valve:'대동맥판',VH_M_pulmonary_valve:'폐동맥판',VH_M_aortic_arch:'대동맥활',VH_M_ascending_aorta:'상행대동맥',VH_M_pulmonary_trunk:'폐동맥줄기',VH_M_superior_vena_cava:'상대정맥',VH_M_inferior_vena_cava_a:'하대정맥',VH_M_trachea:'기관',VH_M_left_main_bronchus:'좌주기관지',VH_M_right_main_bronchus:'우주기관지',VH_M_falciform_ligament:'낫인대',VH_M_caudate_lobe_of_liver:'꼬리엽',VH_M_quadrate_lobe_of_liver:'네모엽'};
// Model cache coalesces requests and only loads a model when selected.
export class ModelRepository {
 constructor(){this.quality=new URLSearchParams(location.search).get("quality")==="original"?"original":"light";this.loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);this.pending=new Map();this.raws=new Map();this.models={};}
 async get(id,onProgress=()=>{}){
  if(this.models[id])return this.models[id];if(this.pending.has(id))return this.pending.get(id);
  const task=(id==='body'?this.loadBody(onProgress):this.loadOrgan(id)).then(model=>{this.models[id]=model;this.pending.delete(id);return model}).catch(error=>{this.pending.delete(id);throw error});this.pending.set(id,task);return task;
 }
 async getAnatomicalContext(id){
  this.contextModels??=new Map();if(this.contextModels.has(id))return this.contextModels.get(id);
  const context=contextGroupFor(id);if(!context)throw Error('Unsupported context');const ids=context.members;
  await Promise.all(ids.map(key=>this.get(key)));
  const assembled=new T.Group();for(const key of ids)assembled.add(this.copy(this.raws.get(key)));
  const contextAudit=deduplicateContext(assembled);assembled.userData.contextAudit=contextAudit;assembled.updateMatrixWorld(true);const box=new T.Box3().setFromObject(assembled),center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());assembled.position.sub(center);
  const norm=new T.Group();norm.add(assembled);norm.scale.setScalar(2.7/Math.max(size.x,size.y,size.z));const wrapper=new T.Group();wrapper.add(norm);wrapper.userData.context=context.id;this.contextModels.set(id,wrapper);return wrapper;
 }
 async loadOrgan(id){
  const o=organs.find(o=>o.id===id);if(!o)throw Error('Unknown organ: '+id);const url=this.quality==="light"&&lightModels[id]?lightModels[id].url:modelSources[id].url;let gltf;
  gltf=await loadCompressedGlb(url,this.loader);
  const raw=gltf.scene;if(id==='brain')raw.scale.x*=-1;if(id==='heart'||id==='vasculature')raw.userData.shadingSeams=smoothVesselSeamNormals(raw);
  raw.traverse(m=>{if(!m.isMesh)return;const name=m.name;let color=anatomicalColor(id,name,o.color);
   const translucent=(id==='spinal-cord'&&/vertebra|intervertebral/.test(name))||id==='eyes'&&/cornea|conjunctiva|aqueous_humor|vitreous_humor|lens/.test(name)&&!/ligament|junction/.test(name);
   if(['knees','pelvis'].includes(id)){if(/cartilage|meniscus/.test(name))color='#91aaa6';else if(/ligament/.test(name))color='#bba580';}
   const old=m.material;m.material=new T.MeshStandardMaterial({color,roughness:.85,metalness:0,flatShading:false,transparent:translucent,opacity:translucent?.08:1,depthWrite:!translucent});if(Array.isArray(old))old.forEach(m=>m.dispose());else old.dispose();m.userData={organId:id,partId:name,label:labels[name]||name.replace(/^(VH_[MF]_|Allen_|SBU_[MF]_)/,'').replaceAll('_',' '),baseColor:m.material.color.clone(),source:modelSources[id].sources[0].url};m.userData.structureIdentity=getStructureIdentity(id,name);m.userData.label=partLabel(name,m.userData.label);m.userData.restOpacity=m.material.opacity;m.userData.restTransparent=m.material.transparent;m.userData.restDepthWrite=m.material.depthWrite;m.castShadow=!translucent;m.receiveShadow=true;
  });
  raw.updateMatrixWorld(true);this.raws.set(id,raw);const inner=this.copy(raw),box=new T.Box3().setFromObject(inner),center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());inner.position.sub(center);const norm=new T.Group();norm.add(inner);norm.scale.setScalar(2.7/Math.max(size.x,size.y,size.z));const wrapper=new T.Group();wrapper.add(norm);return wrapper;
 }
 releaseInactive(id,active){
 const keepRawIds=active.userData.context?contextGroupFor(id).members:[id];const retained=[active,...keepRawIds.map(key=>this.raws.get(key)).filter(Boolean)];const geometries=new Set(),materials=new Set();for(const root of retained)root.traverse(m=>{if(m.geometry)geometries.add(m.geometry);if(m.material)materials.add(m.material)});
 const discarded=[...Object.values(this.models),...this.raws.values(),...this.contextModels?.values()||[]].filter(root=>!retained.includes(root));const disposedG=new Set(),disposedM=new Set();for(const root of discarded)root.traverse(m=>{if(m.geometry&&!geometries.has(m.geometry)&&!disposedG.has(m.geometry)){m.geometry.dispose();disposedG.add(m.geometry)}if(m.material&&!materials.has(m.material)&&!disposedM.has(m.material)){m.material.dispose();disposedM.add(m.material)}});
 for(const key of Object.keys(this.models))if(this.models[key]!==active)delete this.models[key];for(const key of this.raws.keys())if(!keepRawIds.includes(key))this.raws.delete(key);if(this.contextModels)for(const [key,value]of this.contextModels)if(value!==active)this.contextModels.delete(key);
 }
 copy(raw){const g=raw.clone(true);g.traverse(m=>{if(m.isMesh){m.material=m.material.clone();m.userData.baseColor=m.material.color.clone()}});return g;}
 async loadBody(onProgress){const eligible=organs.filter(o=>o.overview!==false||o.id==='vasculature'),queue=[...eligible];let count=0;await Promise.all(Array.from({length:3},async()=>{while(queue.length){await this.get(queue.shift().id);onProgress(++count,eligible.length)}}));
  const body=new T.Group(),owners=new Map();for(const o of eligible)this.raws.get(o.id).traverse(m=>{if(m.isMesh&&!owners.has(m.name))owners.set(m.name,o.id)});for(const id of ['ureters','urethra','vasculature'])this.raws.get(id)?.traverse(m=>{if(m.isMesh)owners.set(m.name,id)});
  for(const o of eligible){const source=this.copy(this.raws.get(o.id)),wrapper=new T.Group();wrapper.userData={organId:o.id,system:o.system,isShell:o.id==='skin'};const duplicates=[];source.traverse(m=>{if(m.isMesh&&owners.get(m.name)!==o.id)duplicates.push(m)});duplicates.forEach(m=>m.removeFromParent());
   if(o.id==='skin')source.traverse(m=>{if(m.isMesh){m.material.color.set('#d9d7c9');m.material.transparent=true;m.material.opacity=.22;m.material.depthWrite=false;m.castShadow=false;m.raycast=()=>{};delete m.userData.baseColor;}});
   wrapper.add(source);wrapper.scale.setScalar(2.5);wrapper.position.y=.09;body.add(wrapper);
  }return body;
 }
}
