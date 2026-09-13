import {anatomicalColor} from './anatomy-colors.js';
import {explosionAssembly} from './explosion-assemblies.js';
import {larynxAssembly} from './larynx-assemblies.js';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {loadCompressedGlb} from './load-glb.js';
import {larynxBodypartsIdentities} from './larynx-bodyparts-identities.js';
import {bodypartsExpansionIdentities} from './bodyparts-expansion-identities.js';
export async function loadLarynxDetail(organId,key){
 const thyroid=key==='thyroid-larynx',combined=key==='pharynx-larynx',root=new T.Group(),references=['https://lifesciencedb.jp/bp3d/','https://openstax.org/books/anatomy-and-physiology/pages/22-1-organs-and-structures-of-the-respiratory-system'];
 const files=thyroid?['larynx-bodyparts','thyroid']:combined?['larynx-bodyparts','pharynx']:['larynx-bodyparts'];
 const groups=new Map();
 try {
 for(const file of files){const source=(await loadCompressedGlb('./models/current/'+file+'-light.glb.gz',new GLTFLoader().setMeshoptDecoder(MeshoptDecoder))).scene;try {source.updateMatrixWorld(true);source.traverse(m=>{if(!m.isMesh)return;const identity=(file!=='larynx-bodyparts'?bodypartsExpansionIdentities:larynxBodypartsIdentities)[file+'/'+m.name];if(!identity)throw Error('Unmapped laryngeal source '+m.name);const id=identity.ontologyId;let g=groups.get(id);if(!g){g={identity,geometries:[],sourceMeshes:[],region:file};groups.set(id,g)}const geometry=m.geometry.clone();geometry.applyMatrix4(m.matrixWorld);g.geometries.push(geometry);g.sourceMeshes.push(m.name);});} finally {const geometries=new Set(),materials=new Set();source.traverse(m=>{if(!m.isMesh)return;geometries.add(m.geometry);for(const material of Array.isArray(m.material)?m.material:[m.material])if(material)materials.add(material)});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}}
 for(const [id,g]of groups){const geometry=mergeGeometries(g.geometries);if(!geometry)throw Error('Incompatible source geometry: '+id);g.geometries.forEach(x=>x.dispose());g.geometries=[];const label=g.identity.ontologyLabel,color=g.region==='thyroid'?anatomicalColor('thyroid',label,'#bf8d91'):/cartilage|Epiglottis/.test(label)?'#a6bfba':/ligament|membrane|conus/.test(label)?'#dbc7a5':/bone/.test(label)?'#ddceb0':'#c4948b';const material=new T.MeshStandardMaterial({color,roughness:.85,side:T.DoubleSide});const mesh=new T.Mesh(geometry,material);mesh.name='detail:'+key+':'+id.replace(':','-');mesh.userData={organId,partId:mesh.name,label,baseColor:material.color.clone(),restOpacity:1,detail:{id:mesh.name,englishLabel:label,label,kind:'source-surface',ontologyId:id,sourceMeshes:g.sourceMeshes,sourceRegion:g.region,assembly:g.region==='thyroid'?explosionAssembly('thyroid',label.replaceAll(' ','_')).replace(/^thyroid:/,''):larynxAssembly(label,g.region),references}};root.add(mesh);}
 const box=new T.Box3().setFromObject(root),center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());for(const mesh of root.children)mesh.geometry.translate(-center.x,-center.y,-center.z);const scale=2.7/Math.max(size.x,size.y,size.z);for(const mesh of root.children)mesh.geometry.scale(scale,scale,scale);root.userData.detail={id:key,explodeLayout:thyroid?'regional-tray-v1':'anatomical-assemblies-v1',kind:'source-surface',revision:1,renderingQuality:'light',assets:files.map(file=>({organId:file==='larynx-bodyparts'?'larynx':file,renderingAsset:'./models/current/'+file+'-light.glb.gz',sources:[{url:'https://lifesciencedb.jp/bp3d/',version:'4.3'}]})),title:thyroid?'Thyroid, larynx and recurrent laryngeal nerves':combined?'Pharynx and larynx':'Laryngeal framework and ligaments',references,notice:'BodyParts3D의 원본 좌표를 유지한 경량 표면입니다. 성대인대·성대근·연골·막을 구분하며 성대 점막, 전정주름과 기도 내강은 분할되어 있지 않습니다. 같은 해부 ID의 갑상피열근 원본 2개는 하나로 선택합니다. 이 표본은 기본 HRA 후두와 별도이며 실제 발성 운동을 재현하지 않습니다.'};return root;
 } catch(error) {root.traverse(m=>{m.geometry?.dispose();m.material?.dispose()});throw error;} finally {for(const g of groups.values())g.geometries.forEach(geometry=>geometry.dispose());}
}



