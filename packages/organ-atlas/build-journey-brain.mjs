// Select existing HRA/Allen reference meshes. No procedural replacement brain.
import fs from 'node:fs';
import {gunzipSync,gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {createBrainAsset} from './src/journey/brain-field.js';
const directory='static/models/current/',file='brain-light.glb.gz',bytes=fs.readFileSync(directory+file),raw=gunzipSync(bytes);
const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.byteLength),'')).scene;
// Matches the atlas's documented source reflection, not a new registration.
root.scale.x*=-1;root.updateMatrixWorld(true);
const reference='https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system';
const cortex=[
 ['primary_motor_cortex','Precentral gyrus (primary motor cortex)','중심앞이랑','#d7b77c'],
 ['superior_frontal_gyrus','Superior frontal gyrus','위전두이랑','#dcc18d'],
 ['middle_frontal_gyrus','Middle frontal gyrus','중간전두이랑','#d7b983'],
 ['inferior_frontal_gyrus_triangular_part','Inferior frontal gyrus — pars triangularis','아래전두이랑 삼각부','#cfad77'],
 ['inferior_frontal_gyrus_opercular_part','Inferior frontal gyrus — pars opercularis','아래전두이랑 덮개부','#d4b582'],
 ['postcentral_gyrus','Postcentral gyrus','중심뒤이랑','#d3bc8b'],
 ['supraparietal_lobule','Superior parietal lobule','위두정소엽','#d9c79d'],
 ['supramarginal_gyrus','Supramarginal gyrus','모서리위이랑','#cbb484'],
 ['angular_gyrus','Angular gyrus','각이랑','#d9bd8e'],
 ['precuneus','Precuneus','쐐기앞소엽','#d8c49c'],
 ['superior_temporal_gyrus','Superior temporal gyrus','위측두이랑','#d6b285'],
 ['middle_temporal_gyrus','Middle temporal gyrus','중간측두이랑','#d1ad7d'],
 ['inferior_temporal_gyrus','Inferior temporal gyrus','아래측두이랑','#cba778'],
 ['cuneus','Cuneus','쐐기소엽','#cabb92'],
 ['superior_occipital_gyrus','Superior occipital gyrus','위후두이랑','#c9b88e'],
 ['inferior_occipital_gyrus','Inferior occipital gyrus','아래후두이랑','#d4bf94'],
 ['lingual_gyrus_medial_occipitotemporal_gyrus','Lingual gyrus','혀이랑','#c8b28a'],
 ['cingulate_gyrus_rostral_anterior_part','Anterior cingulate gyrus','앞띠이랑','#d0bb96'],
 ['cingulate_gyrus_caudal_posterior_part','Posterior cingulate gyrus','뒤띠이랑','#c8b18c'],
 ['paracentral_lobule_rostral_part','Paracentral lobule — anterior part','중심주위소엽 앞부분','#d4c298'],
 ['paracentral_lobule_caudal_part','Paracentral lobule — posterior part','중심주위소엽 뒷부분','#ccb98c'],
 ['gyrus_rectus_straight_gyrus','Gyrus rectus','곧은이랑','#cbb58d'],
 ['medial_orbital_gyrus','Medial orbital gyrus','안쪽안와이랑','#d6bf96'],
 ['lateral_orbital_gyrus','Lateral orbital gyrus','가쪽안와이랑','#d3b68d'],
 ['anterior_parahippocampal_gyrus','Parahippocampal gyrus — anterior part','해마곁이랑 앞부분','#c4ad87'],
 ['posterior_parahippocampal_gyrus','Parahippocampal gyrus — posterior part','해마곁이랑 뒷부분','#cdb48c']
];
const deep=[
 ['thalamus','Thalamus','시상','#bd9b9f'],['putamen','Putamen','조가비핵','#b59b84'],
 ['head_of_caudate','Head of caudate nucleus','꼬리핵 머리','#d4aa88'],['body_of_caudate','Body of caudate nucleus','꼬리핵 몸통','#d4aa88'],['tail_of_caudate','Tail of caudate nucleus','꼬리핵 꼬리','#d4aa88'],
 ['external_segment_of_globus_pallidus','Globus pallidus — external segment','창백핵 바깥분절','#dbc9a0'],['internal_segment_of_globus_pallidus','Globus pallidus — internal segment','창백핵 안쪽분절','#d7c59b'],
 ['corpus_callosum','Corpus callosum','뇌량','#ebe4ca'],
 ['head_of_hippocampus','Hippocampus — head','해마 머리','#cda18b'],['body_of_hippocampus','Hippocampus — body','해마 몸통','#cda18b'],['tail_of_hippocampus','Hippocampus — tail','해마 꼬리','#cda18b'],
 ['anterior_horn_of_lateral_ventricle','Lateral ventricle — anterior horn','가쪽뇌실 앞뿔','#94bcc9'],['body_of_lateral_ventricle','Lateral ventricle — body','가쪽뇌실 몸통','#94bcc9'],['posterior_horn_of_lateral_ventricle','Lateral ventricle — posterior horn','가쪽뇌실 뒤뿔','#94bcc9'],['inferior_horn_of_lateral_ventricle','Lateral ventricle — inferior horn','가쪽뇌실 아래뿔','#94bcc9'],['atrium_of_lateral_ventricle','Lateral ventricle — atrium','가쪽뇌실 방','#94bcc9'],
 ['third_ventricle','Third ventricle','셋째뇌실','#94bcc9'],['cerebral_aqueduct','Cerebral aqueduct','중뇌수도관','#94bcc9'],['fourth_ventricle','Fourth ventricle','넷째뇌실','#94bcc9'],
 ['basilar_part_of_pons','Basilar pons','교뇌 바닥부분','#cbb2a0'],['pontine_tegmentum','Pontine tegmentum','교뇌 피개','#c6aa96'],['pyramidal_part_of_medulla_oblongata','Medulla oblongata — pyramidal part','연수 피라미드부분','#c9b5a0'],['tegmentum_of_medulla_oblongata','Medulla oblongata — tegmentum','연수 피개','#c9b5a0'],
 ['cerebellar_vermis','Cerebellar vermis','소뇌 벌레','#c6ae87'],['paravermis_of_cerebellum','Paravermal cerebellum','소뇌 벌레곁영역','#ceb58e'],['lateral_hemisphere_of_cerebellum','Cerebellar hemisphere — lateral part','소뇌반구 가쪽부분','#d1b98d']
];
const midline=new Set(['corpus_callosum','third_ventricle','cerebral_aqueduct','fourth_ventricle','cerebellar_vermis']);
const selections=[];for(const [layer,list]of [[0,cortex],[1,deep]])for(const side of ['L','R'])for(const [stem,name,korean,color]of list){if(midline.has(stem)&&side==='R')continue;const sourceIds=(midline.has(stem)?['L','R']:[side]).map(s=>'Allen_'+stem+'_'+s);selections.push({sourceId:sourceIds[0],sourceIds,name:(midline.has(stem)?'':side==='L'?'Left ':'Right ')+name,korean:(midline.has(stem)?'':side==='L'?'좌 ':'우 ')+korean,color,layer,hemisphere:side,midline:midline.has(stem)});}
const meshes=new Map();root.traverse(m=>{if(m.isMesh)meshes.set(m.name,m);});
const positions=[],normals=[],colors=[],indices=[],parts=[];let offset=0;
for(const selection of selections){
 const patches=selection.sourceIds.map(id=>{const mesh=meshes.get(id);if(!mesh)throw Error('Missing source '+id);return mesh;}),input={count:patches.reduce((n,m)=>n+m.geometry.attributes.position.count,0)},position=new Float32Array(input.count*3),index=new Uint32Array(patches.reduce((n,m)=>n+(m.geometry.index?.count||m.geometry.attributes.position.count),0));const indexRanges=[];let vertexAt=0,indexAt=0;
 for(const mesh of patches){const source=mesh.geometry.attributes.position;for(let i=0;i<source.count;i++)new T.Vector3().fromBufferAttribute(source,i).applyMatrix4(mesh.matrixWorld).toArray(position,(vertexAt+i)*3);const count=mesh.geometry.index?.count||source.count;for(let i=0;i<count;i++)index[indexAt+i]=(mesh.geometry.index?.getX(i)??i)+vertexAt;indexRanges.push({start:indexAt,count});vertexAt+=source.count;indexAt+=count;}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(position,3));
 // Every closed source patch gets consistent outward winding, including the
 // reflected hemisphere. This also supports signed nearest-surface collision.
 const a=new T.Vector3(),b=new T.Vector3(),c=new T.Vector3();for(const range of indexRanges){let signed=0;for(let i=range.start;i<range.start+range.count;i+=3){a.fromArray(position,index[i]*3);b.fromArray(position,index[i+1]*3);c.fromArray(position,index[i+2]*3);signed+=a.dot(b.cross(c));}if(signed<0)for(let i=range.start;i<range.start+range.count;i+=3)[index[i+1],index[i+2]]=[index[i+2],index[i+1]];}
 geometry.setIndex(new T.BufferAttribute(index,1));geometry.computeVertexNormals();geometry.computeBoundingBox();
 const color=selection.color.match(/\w\w/g).map(v=>parseInt(v,16)),rgb=new Uint8Array(input.count*3);for(let i=0;i<input.count;i++)rgb.set(color,i*3);
 const center=geometry.boundingBox.getCenter(new T.Vector3()).toArray();parts.push({...selection,id:parts.length+1,kind:'brain',group:selection.layer?'깊은 구조 · 뇌실':'대뇌피질',vertexStart:offset,vertexCount:input.count,indexStart:indices.length,indexCount:index.length,center,bounds:{min:geometry.boundingBox.min.toArray(),max:geometry.boundingBox.max.toArray()},clearance:.012,position:center,description:selection.layer?'원본 위치의 깊은 구조를 절개 모드로 살펴봅니다. 뇌실은 공간의 모양을 표시한 모형이며, 뇌 조직 전체가 빈 통로라는 뜻은 아닙니다.':'원본의 대뇌피질 표면입니다. 이랑의 융기와 고랑의 위치 관계를 보면서 표면을 따라 이동합니다.',reference});
 positions.push(position);normals.push(geometry.attributes.normal.array);colors.push(rgb);for(const value of index)indices.push(value+offset);offset+=input.count;geometry.dispose();
}
const concat=(arrays,Type)=>{const out=new Type(arrays.reduce((n,a)=>n+a.length,0));let at=0;for(const a of arrays){out.set(a,at);at+=a.length;}return out;};
const surface=Buffer.concat([Buffer.from(concat(positions,Float32Array).buffer),Buffer.from(concat(normals,Float32Array).buffer),Buffer.from(concat(colors,Uint8Array).buffer),Buffer.from(Uint32Array.from(indices).buffer)]),geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(concat(positions,Float32Array),3));geometry.computeBoundingBox();
const manifest={key:'brain',title:'뇌 · 피질 걷기 · 내부 해부',kind:'brain',coordinateFrame:'hra-allen-brain-atlas-reflected',representation:'source-surface-exploration',source:{name:'HRA · Allen brain',url:'https://purl.humanatlas.io/ref-organ/united-male/v1.10'},sourceAssets:[{file,sha256:createHash('sha256').update(bytes).digest('hex')}],license:'CC BY 4.0',references:[reference],sourceReflectionX:true,vertices:offset,triangles:indices.length/3,parts,connections:[],junctions:[],boundaries:[],landmarks:[],bounds:{min:geometry.boundingBox.min.toArray(),max:geometry.boundingBox.max.toArray()},surface:'./models/current/journey-brain-surface.bin.gz',notice:'HRA/Allen 원본의 구조별 표면과 상대 위치를 재사용합니다. 피질 걷기는 표면 위 이동이며, 내부 해부는 겉부분을 걷어낸 관찰 공간입니다. 뇌 실질을 빈 통로로 표현하거나 모든 신경 섬유를 재현하지 않습니다. 반대쪽 반구는 원본의 반사 구성을 따르므로 개인별 비대칭을 나타내지 않습니다.'};
geometry.setIndex(new T.BufferAttribute(Uint32Array.from(indices),1));geometry.setAttribute('normal',new T.BufferAttribute(concat(normals,Float32Array),3));const asset=createBrainAsset(manifest,geometry);
for(const part of parts){part.starts=[.0016,.0008,.0004,.0002,.0001].map(radius=>asset.field.destination(part.id,radius)).filter(Boolean);part.navigable=part.starts.length>0;}
asset.dispose();
fs.writeFileSync(directory+'journey-brain-surface.bin.gz',gzipSync(surface,{level:9}));fs.writeFileSync(directory+'journey-brain.json',JSON.stringify(manifest));console.log(JSON.stringify({parts:parts.length,navigable:parts.filter(p=>p.navigable).length,triangles:manifest.triangles,bytes:fs.statSync(directory+'journey-brain-surface.bin.gz').size}));
