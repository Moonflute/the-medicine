import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {loadCompressedGlb} from './load-glb.js';
// A separate specimen view: never register this donor onto OpenEar ZETA.
export async function loadAuricleDetail(key){
 const side=key==='auricle-left'?'left':'right';
 const loaded=await loadCompressedGlb('./models/current/auricles.glb.gz',new GLTFLoader());
 const source=loaded.scene;source.updateMatrixWorld(true);
 const mesh=source.getObjectByName('BP3D_FJ2811_'+side+'_auricle');
 if(!mesh)throw Error('Missing source auricle');
 mesh.geometry.applyMatrix4(mesh.matrixWorld);mesh.position.set(0,0,0);mesh.rotation.set(0,0,0);mesh.scale.set(1,1,1);
 source.traverse(m=>{if(m.isMesh&&m!==mesh){m.geometry.dispose();m.material.dispose()}});
 mesh.removeFromParent();mesh.geometry.center();
 const box=new T.Box3().setFromBufferAttribute(mesh.geometry.attributes.position),size=box.getSize(new T.Vector3());
 mesh.geometry.scale(...Array(3).fill(2.7/Math.max(size.x,size.y,size.z)));
 // Rotate the lateral surface toward the initial camera, retaining source shape.
 mesh.rotation.y=side==='left'?-Math.PI/2:Math.PI/2;
 const label=(side==='left'?'Left':'Right')+' auricle';
 const references=['https://lifesciencedb.jp/bp3d/','https://openstax.org/books/anatomy-and-physiology-2e/pages/14-1-sensory-perception'];
 mesh.name='detail:'+key+':auricle';mesh.userData={organId:'ears',partId:mesh.name,label,baseColor:mesh.material.color.clone(),restOpacity:1,detail:{id:mesh.name,englishLabel:label,label,kind:'source-surface',sourceMesh:'FJ2811',sourceConcept:'FMA:52781',laterality:side,references}};
 const root=new T.Group();root.add(mesh);root.userData.detail={id:key,kind:'source-surface',revision:1,renderingQuality:'original',assets:[{organId:'ears',renderingAsset:'./models/current/auricles.glb.gz',sources:[{url:'https://lifesciencedb.jp/bp3d/',sourceMesh:'FJ2811',version:'4.3'}]}],title:label,references,notice:'BodyParts3D의 귓바퀴 표면 원본입니다. 중이·내이와는 다른 표본이므로 별도로 표시합니다. 이륜·대이륜·이주·귓불은 원본에서 개별 분할되지 않았으며 이관은 포함하지 않습니다.'};return root;
}

