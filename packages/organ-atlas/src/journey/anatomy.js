import * as T from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {unpack} from './assets.js';

// A source-surface mask changes colour only; neighbouring tissue stays opaque.
export class JourneyAnatomyFocus{
 constructor(asset){
  this.asset=asset;this.selected={value:0};const brain=asset.manifest.kind==='brain',g=brain?asset.geometry:asset.mesh.geometry;
  if(!g||!brain&&!asset.manifest.surfaceFeatures)return;
  if(!brain){const ids=new Uint8Array(g.attributes.position.count);for(let i=0;i<asset.manifest.surfaceFeatures.runs.length;i+=3){const [start,count,id]=asset.manifest.surfaceFeatures.runs.slice(i,i+3);ids.fill(id,start,start+count);}g.setAttribute('anatomyFeature',new T.BufferAttribute(ids,1));}
  const material=brain?asset.mesh.children[0].material:asset.mesh.material,previous=material.onBeforeCompile,key=material.customProgramCacheKey();
  material.onBeforeCompile=shader=>{previous(shader);shader.uniforms.anatomySelected=this.selected;
   shader.vertexShader='attribute float '+(brain?'region':'anatomyFeature')+'; varying float anatomyId;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nanatomyId='+(brain?'region':'anatomyFeature')+';');
   shader.fragmentShader='varying float anatomyId; uniform float anatomySelected;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    ${brain?'':'if(anatomyId>0.5)diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.58,0.29,0.23),0.28);'}
    if(anatomySelected>0.5){float selected=1.0-smoothstep(0.15,0.45,abs(anatomyId-anatomySelected));float grey=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));diffuseColor.rgb=mix(mix(diffuseColor.rgb,vec3(grey)*.85,.45),vec3(.84,.57,.24),selected*.75);}`);
  };material.customProgramCacheKey=()=>key+'-source-features-v1';
 }
 select(sourceId){const feature=this.asset.manifest.kind==='brain'?this.asset.manifest.parts.find(p=>p.id===Number(sourceId)):this.asset.manifest.surfaceFeatures?.features.find(f=>f.sourceId===sourceId);this.selected.value=feature?.id||0;return feature;}
 reset(){this.selected.value=0;}
}

// Optional original static leaflets. The same geometry supplies rendering and
// swept collision; opening the layer never moves the camera or closes a valve.
export class JourneyNativeDetails{
 constructor(asset,scene,{load=unpack}={}){
  this.asset=asset;this.scene=scene;this.load=load;this.enabled=false;this.disposed=false;this.mesh=null;this.records=[];this.point=new T.Vector3();this.target={};
  const base=asset.field;this.field={step:base.step,region:p=>base.region(p),clearance:p=>Math.min(base.clearance(p),this.distance(p)),gradient:p=>{
   if(!this.enabled||this.distance(p)>=base.clearance(p))return base.gradient(p);
   const h=.00005;return [0,1,2].map(i=>{const a=[...p],b=[...p];a[i]+=h;b[i]-=h;return (this.distance(a)-this.distance(b))/(2*h);});
  }};
 }
 distance(p){if(!this.enabled||!this.tree)return Infinity;this.point.fromArray(p);const box=this.mesh.geometry.boundingBox.distanceToPoint(this.point);if(box>.012)return box;const hit=this.tree.closestPointToPoint(this.point,this.target);return hit.distance-.00008;}
 async setEnabled(value,position,radius){
  if(!value){this.enabled=false;if(this.mesh)this.mesh.visible=false;return {ok:true};}
  if(!this.asset.manifest.detailAsset)return {ok:false,message:'이 영역에는 원본 판엽 자료가 없어요.'};
  if(!this.mesh){
   const raw=await this.load(this.asset.manifest.detailAsset),root=(await new GLTFLoader().parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length),'')).scene;root.updateMatrixWorld(true);const geometries=[],records=[];
   root.traverse(o=>{if(o.isMesh){const g=o.geometry.clone().applyMatrix4(o.matrixWorld);for(const key of Object.keys(g.attributes))if(key!=='position')g.deleteAttribute(key);geometries.push(g);records.push({...o.userData,name:o.userData.name||o.name});}});
   const geometry=mergeGeometries(geometries);geometry.computeVertexNormals();geometry.computeBoundingBox();geometries.forEach(g=>g.dispose());root.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
   if(this.disposed){geometry.dispose();return {ok:false};}
   this.records=records;this.mesh=new T.Mesh(geometry,new T.MeshStandardMaterial({color:'#c8ac86',side:T.DoubleSide,roughness:.8}));this.mesh.visible=false;this.tree=new MeshBVH(geometry,{indirect:true});this.scene.add(this.mesh);
  }
  this.enabled=true;if(this.field.clearance(position)<radius+.0001){this.enabled=false;return {ok:false,message:'원본 판엽과 겹치는 위치예요. 조금 뒤로 이동한 뒤 켜주세요.'};}
  this.mesh.visible=true;return {ok:true};
 }
 dispose(){this.disposed=true;this.mesh?.removeFromParent();this.mesh?.geometry.dispose();this.mesh?.material.dispose();this.tree=null;}
}
