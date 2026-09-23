import * as T from 'three';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {registerDetailController} from './detail-resources.js';
import {fetchModelManifest,fetchModelResponse} from './local-model-store.js';
import {loadCompressedGlb} from './load-glb.js';
import {parseNrrdVolume,SLICE_PLANES} from './imaging/nrrd-volume.js';
import {centerCrosshair,clampCrosshair,createCtWindowPresets,crosshairPixel,drawCrosshair,indexForPlane,planeIndices,rasFromIJK,setPlaneIndex} from './imaging/mpr-state.js';

const BASE='./imaging/spl-abdomen/';
const MANIFEST=BASE+'spl-abdomen-manifest.json';
const SOURCE='https://www.openanatomy.org/atlas-pages/atlas-spl-abdomen.html';
const MEDICAL_LABELS=new Map([
 [3,['Liver','liver']],
 [4,['Spleen','spleen']],
 [6,['Pancreas','pancreas']],
 [7,['Abdominal aorta','vasculature']],
 [8,['Inferior vena cava','vasculature']],
 [9,['Colon and ileum','colon']],
 [10,['Gallbladder','gallbladder']],
 [12,['Portal vein and superior mesenteric vein','vasculature']],
 [13,['Stomach and duodenum','stomach']],
 [51,['Right kidney','kidneys']],
 [52,['Left kidney','kidneys']],
]);

const sameArray=(a,b,tolerance=1e-6)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every((value,index)=>Math.abs(value-b[index])<=tolerance);
function assertManifest(manifest){
 if(manifest?.schemaVersion!==1||manifest.atlas?.id!=='spl-abdomen-2016-09')throw Error('지원하지 않는 복부 영상 명세입니다.');
 const {ct,seg}=manifest.volume||{};
 if(!ct||!seg||!sameArray(ct.dimensions,seg.dimensions,0)||!sameArray(ct.spacing,seg.spacing)||!sameArray(ct.ijkToRas,seg.ijkToRas))throw Error('CT와 장기 분할의 좌표가 일치하지 않습니다.');
 if(ct.type!=='int16'||seg.type!=='int16')throw Error('CT와 장기 분할의 원본 Int16 형식이 유지되지 않았습니다.');
 if(!manifest.segmentation?.unmappedLabelValues?.includes(699))throw Error('알 수 없는 원본 분할값 699가 명시되지 않았습니다.');
 if(manifest.labelMap?.some(label=>label.labelValue===699))throw Error('알 수 없는 원본 분할값 699에 임의 이름이 지정되었습니다.');
}

function assetPath(file){
 if(typeof file!=='string'||file.includes('..')||file.includes('\\')||file.startsWith('/'))throw Error('잘못된 복부 영상 자산 경로입니다.');
 return BASE+file;
}

async function fetchBytes(url){
 const response=await fetchModelResponse(url);
 if(!response.ok)throw Error('영상 자료 요청 실패: '+response.status);
 return response.arrayBuffer();
}

function colorFor(label){
 const rgba=label?.rgba||label?.atlasRgba;
 if(!Array.isArray(rgba)||rgba.length<3)return '#b78b72';
 return new T.Color().setRGB(rgba[0]/255,rgba[1]/255,rgba[2]/255,T.SRGBColorSpace);
}

function planeCorners(volume,plane,index){
 const {width,height}=volume.getPlaneShape(plane);
 return [[0,0],[width-1,0],[width-1,height-1],[0,height-1]].map(([x,y])=>volume.voxelToRas(...volume.sliceToIJK(plane,index,x,y)));
}

function setPlaneGeometry(mesh,volume,plane,index){
 const positions=new Float32Array(planeCorners(volume,plane,index).flat());
 const geometry=new T.BufferGeometry();
 geometry.setAttribute('position',new T.BufferAttribute(positions,3));
 geometry.setAttribute('uv',new T.Float32BufferAttribute([0,0,1,0,1,1,0,1],2));
 geometry.setIndex([0,1,2,0,2,3]);
 geometry.computeVertexNormals();
 mesh.geometry.dispose();
 mesh.geometry=geometry;
}

function labelColors(manifest){
 const unmapped=new Set(manifest.segmentation.unmappedLabelValues||[]),colors=new Map();
 for(const label of manifest.labelMap||[]){
  if(label.labelValue===manifest.segmentation.backgroundLabelValue||unmapped.has(label.labelValue))continue;
  const rgba=label.rgba||label.atlasRgba;
  if(Array.isArray(rgba)&&rgba.length>=3)colors.set(label.labelValue,[rgba[0],rgba[1],rgba[2],rgba[3]??255]);
 }
 return colors;
}

function calculateCentroids(volume,labelValues){
 const wanted=new Set(labelValues),sums=new Map([...wanted].map(value=>[value,[0,0,0,0]]));
 const [nx,ny]=volume.dimensions;
 for(let index=0;index<volume.data.length;index++){
  const value=volume.data[index],sum=sums.get(value);if(!sum)continue;
  const i=index%nx,j=Math.floor(index/nx)%ny,k=Math.floor(index/(nx*ny));sum[0]+=i;sum[1]+=j;sum[2]+=k;sum[3]++;
 }
 return new Map([...sums].filter(([,sum])=>sum[3]>0).map(([value,sum])=>[value,sum.slice(0,3).map(axis=>Math.round(axis/sum[3]))]));
}

function normalizeSourceName(label){
 const official=MEDICAL_LABELS.get(label.labelValue)?.[0];
 if(official)return official;
 const name=label.name||label.ctblName||`Structure ${label.labelValue}`;
 return name.replaceAll('_',' ').replace(/\s+/g,' ').trim().replace(/^./,letter=>letter.toUpperCase());
}

function disposeTree(root){
 const geometries=new Set(),materials=new Set(),textures=new Set();
 root.traverse(object=>{if(object.geometry)geometries.add(object.geometry);for(const material of Array.isArray(object.material)?object.material:[object.material])if(material){materials.add(material);if(material.map)textures.add(material.map)}});
 textures.forEach(texture=>texture.dispose());geometries.forEach(geometry=>geometry.dispose());materials.forEach(material=>material.dispose());
}

export async function loadSplAbdomenDetail(){
 const manifestResponse=await fetchModelManifest(MANIFEST);
 if(!manifestResponse.ok)throw Error('복부 영상 명세를 불러오지 못했습니다.');
 const manifest=await manifestResponse.json();assertManifest(manifest);
 const ctUrl=assetPath(manifest.volume.ct.file),segUrl=assetPath(manifest.volume.seg.file),surfaceUrl=assetPath(manifest.assets[0].file);
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 const [ctBytes,segBytes,gltf]=await Promise.all([fetchBytes(ctUrl),fetchBytes(segUrl),loadCompressedGlb(surfaceUrl,loader)]);
 const [ct,seg]=await Promise.all([parseNrrdVolume(ctBytes),parseNrrdVolume(segBytes)]);
 if(!sameArray(ct.dimensions,seg.dimensions,0)||!sameArray(ct.ijkToRas,seg.ijkToRas))throw Error('불러온 CT와 분할 지도의 좌표가 일치하지 않습니다.');

 const labelByValue=new Map(manifest.labelMap.map(label=>[label.labelValue,label]));
 const coreLabels=manifest.core.configuredLabelValues;
 const centroids=calculateCentroids(seg,coreLabels);
 const surfaces=gltf.scene;
 surfaces.traverse(mesh=>{
  if(!mesh.isMesh)return;
  const match=/spl-abdomen-label-(\d+)$/.exec(mesh.userData.partId||mesh.name),labelValue=Number(mesh.userData.labelValue??match?.[1]);
  const label=labelByValue.get(labelValue),medical=MEDICAL_LABELS.get(labelValue),englishLabel=normalizeSourceName({...label,labelValue});
  const old=mesh.material;mesh.material=new T.MeshStandardMaterial({color:colorFor(label),roughness:.82,metalness:0,side:T.DoubleSide});
  if(Array.isArray(old))old.forEach(material=>material.dispose());else old?.dispose();
  mesh.name=`spl-abdomen-label-${labelValue}`;
  mesh.userData={...mesh.userData,partId:mesh.name,organId:medical?.[1]||'body',label:englishLabel,labelValue,baseColor:mesh.material.color.clone(),restOpacity:1,detail:{id:mesh.name,label:englishLabel,englishLabel,kind:'source-surface',labelValue,references:[SOURCE]}};
  mesh.castShadow=true;mesh.receiveShadow=true;
 });

 const initialPlane='axial';
 const placeholder=new T.DataTexture(new Uint8Array([0,0,0,255]),1,1,T.RGBAFormat);placeholder.needsUpdate=true;
 const planeMesh=new T.Mesh(new T.BufferGeometry(),new T.MeshBasicMaterial({map:placeholder,side:T.DoubleSide,transparent:true,opacity:.9,depthWrite:false,toneMapped:false}));
 planeMesh.name='spl-abdomen-ct-plane';planeMesh.renderOrder=8;planeMesh.userData.contextStructure=true;
 const aligned=new T.Group();aligned.name='spl-abdomen-ras';aligned.add(surfaces,planeMesh);
 aligned.applyMatrix4(new T.Matrix4().set(-1,0,0,0, 0,0,1,0, 0,1,0,0, 0,0,0,1));

 const bounds=new T.Box3();
 for(const i of [0,ct.dimensions[0]-1])for(const j of [0,ct.dimensions[1]-1])for(const k of [0,ct.dimensions[2]-1]){
  const [x,y,z]=ct.voxelToRas(i,j,k);bounds.expandByPoint(new T.Vector3(-x,z,y));
 }
 const center=bounds.getCenter(new T.Vector3()),size=bounds.getSize(new T.Vector3());
 const centered=new T.Group();centered.add(aligned);centered.position.sub(center);
 const normalized=new T.Group();normalized.add(centered);normalized.scale.setScalar(2.9/Math.max(size.x,size.y,size.z));
 // AtlasScene animates the outer model scale. Keep source normalization on an
 // inner group so that animation never replaces the millimetre-to-scene scale.
 const root=new T.Group();root.add(normalized);
 const sourceReference={url:SOURCE,version:'September 2015 / 2016-09 archive',license:'3D Slicer License, Part B'};
 root.userData.detail={id:'spl-abdomen-ct',kind:'linked-imaging',revision:1,renderingQuality:'source-aligned',title:'Abdominal CT and segmented anatomy',references:[SOURCE],assets:[
  {organId:'abdomen',renderingAsset:MANIFEST,sources:[sourceReference]},
  {organId:'abdomen',renderingAsset:ctUrl,sources:[sourceReference]},
  {organId:'abdomen',renderingAsset:segUrl,sources:[sourceReference]},
  {organId:'abdomen',renderingAsset:surfaceUrl,sources:[sourceReference]},
 ],notice:'동일 대상의 복부 CT, Int16 분할 지도와 3D 표면을 같은 RAS 좌표로 표시합니다. 교육·연구용 자료이며 진단용 영상 뷰어가 아닙니다.',imaging:true};

 const colors=labelColors(manifest),windowPresets=createCtWindowPresets({sourceLevel:manifest.windowLevel.level,sourceWidth:manifest.windowLevel.window,storedValueOffset:1024}),presetById=new Map(windowPresets.map(preset=>[preset.id,preset]));
 const sourcePreset=presetById.get('source'),state={plane:initialPlane,crosshairIJK:centerCrosshair(ct.dimensions),overlay:true,selectedLabel:null,windowPreset:sourcePreset.id,windowLevel:{level:sourcePreset.level,width:sourcePreset.width}};let listener=()=>{};
 function snapshot(){const indices=planeIndices(state.crosshairIJK);return {plane:state.plane,index:indices[state.plane],indices,crosshairIJK:[...state.crosshairIJK],crosshairRas:rasFromIJK(state.crosshairIJK,ct.ijkToRas),overlay:state.overlay,selectedLabel:state.selectedLabel,length:ct.getPlaneLength(state.plane),dimensions:[...ct.dimensions],spacingMm:[...ct.spacingMm],windowPreset:state.windowPreset,windowLevel:{...state.windowLevel,units:'stored-value',huOffset:-1024},windowPresets:windowPresets.map(preset=>({...preset}))};}
 function renderSlice(){
  const index=indexForPlane(state.crosshairIJK,state.plane),image=ct.renderSliceRGBA(state.plane,index,{level:state.windowLevel.level,windowWidth:state.windowLevel.width,...(state.overlay?{labelVolume:seg,labelColors:colors,labelOpacity:.42}:{})});
  drawCrosshair(image.data,image.width,image.height,{...crosshairPixel(state.crosshairIJK,state.plane)});
  const texture=new T.DataTexture(image.data,image.width,image.height,T.RGBAFormat,T.UnsignedByteType);texture.colorSpace=T.SRGBColorSpace;texture.minFilter=T.LinearFilter;texture.magFilter=T.LinearFilter;texture.generateMipmaps=false;texture.needsUpdate=true;
  planeMesh.material.map?.dispose();planeMesh.material.map=texture;planeMesh.material.needsUpdate=true;setPlaneGeometry(planeMesh,ct,state.plane,index);listener(snapshot());
 }
 function setPlane(plane){if(!SLICE_PLANES.includes(plane))return;state.plane=plane;renderSlice();}
 function setSlice(index,plane=state.plane){if(!SLICE_PLANES.includes(plane))return;state.crosshairIJK=setPlaneIndex(state.crosshairIJK,plane,index,ct.dimensions);renderSlice();}
 function setCrosshairIJK(ijk){state.crosshairIJK=clampCrosshair(ijk,ct.dimensions);renderSlice();}
 function setWindowPreset(id){const preset=presetById.get(id);if(!preset)return;state.windowPreset=preset.id;state.windowLevel={level:preset.level,width:preset.width};renderSlice();}
 function setOverlay(visible){state.overlay=!!visible;renderSlice();}
 function selectPart(partId){const value=Number(/spl-abdomen-label-(\d+)$/.exec(partId)?.[1]);if(!centroids.has(value))return;state.selectedLabel=value;state.crosshairIJK=clampCrosshair(centroids.get(value),ct.dimensions);renderSlice();}
 const controller={root,getState:()=>[],getImagingState:snapshot,setPlane,setSlice,setCrosshairIJK,setWindowPreset,setOverlay,selectPart,subscribe(callback){listener=typeof callback==='function'?callback:()=>{};listener(snapshot());return()=>{listener=()=>{}}},dispose(){listener=()=>{};ct.dispose();seg.dispose();disposeTree(root)}};
 registerDetailController(root,controller);renderSlice();return root;
}
