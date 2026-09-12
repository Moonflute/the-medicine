import {loadCompressedGlb} from './load-glb.js';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
const host=document.querySelector('#model'),status=document.querySelector('#status');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let renderer,observer,model,disposed=false,visible=true,drag=null,pauseUntil=0,frame=0,last=0;
const scene=new T.Scene(),camera=new T.PerspectiveCamera(33,1,.1,30);
camera.position.set(0,.6,6.6);camera.lookAt(0,-.15,0);
function open(){window.parent.postMessage({type:'atlas:open'},location.origin)}
host.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
document.querySelector('#open').addEventListener('click',e=>{if(window.parent!==window){e.preventDefault();open()}});
host.addEventListener('pointerdown',e=>{if(!e.isPrimary)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,last:e.clientX,moved:false};host.setPointerCapture(e.pointerId);pauseUntil=Infinity});
host.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;if(Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>7)drag.moved=true;if(model&&drag.moved){model.rotation.y+=(e.clientX-drag.last)*.012;render()}drag.last=e.clientX});
host.addEventListener('pointerup',e=>{if(!drag||drag.id!==e.pointerId)return;const click=!drag.moved&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<7;drag=null;pauseUntil=performance.now()+3500;if(click)open();start()});
host.addEventListener('pointercancel',()=>{drag=null;pauseUntil=performance.now()+3500;start()});
function render(){if(renderer&&!disposed)renderer.render(scene,camera)}
function tick(t){frame=0;if(disposed||!visible||document.hidden)return;if(t-last>=1000/30){const dt=Math.min((t-last)/1000,.05);last=t;if(model&&!reduced.matches&&!drag&&t>pauseUntil)model.rotation.y+=dt*.16;render()}if(!reduced.matches||drag)frame=requestAnimationFrame(tick)}
function start(){if(!frame&&!disposed&&visible&&!document.hidden){last=performance.now();frame=requestAnimationFrame(tick)}}
function pause(){cancelAnimationFrame(frame);frame=0}
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent||e.data?.type!=='atlas:visibility')return;visible=!!e.data.visible;if(visible)start();else pause()});
document.addEventListener('visibilitychange',()=>document.hidden?pause():start());reduced.addEventListener('change',()=>{pause();start()});
async function init(){try{
renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;host.append(renderer.domElement);
scene.add(new T.HemisphereLight('#fff5e8','#a4bcb3',2.4));const key=new T.DirectionalLight('#fff4df',3);key.position.set(-3,5,4);scene.add(key);const fill=new T.DirectionalLight('#d9e7f1',1.6);fill.position.set(4,1,-3);scene.add(fill);
const stage=new T.Group();for(const [r,h,y]of [[1.32,.1,-1.43],[1.2,.15,-1.32]]){const m=new T.Mesh(new T.CylinderGeometry(r,r,h,48),new T.MeshStandardMaterial({color:'#ddd9c9',roughness:1}));m.position.y=y;stage.add(m)}scene.add(stage);
observer=new ResizeObserver(()=>{const {width,height}=host.getBoundingClientRect();if(!width||!height)return;camera.aspect=width/height;camera.updateProjectionMatrix();renderer.setSize(width,height,false);render()});observer.observe(host);
const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);let gltf;
gltf=await loadCompressedGlb('./models/current/heart-preview.glb.gz',loader);
if(disposed){gltf.scene.traverse(m=>{m.geometry?.dispose();m.material?.dispose()});return}
// Keep the heart itself and proximal vessels; exclude distant systemic vessel meshes.
const raw=gltf.scene;raw.traverse(m=>{if(!m.isMesh)return;m.visible=!/inferior_vena_cava|abdominal|descending_aorta|iliac|renal|celiac|mesenteric/.test(m.name);m.material.dispose();m.material=new T.MeshStandardMaterial({color:/vein|vena|pulmonary_trunk|pulmonary_arter/.test(m.name)?'#80aaa7':'#cc8c7e',roughness:.85})});
raw.updateMatrixWorld(true);const box=new T.Box3();raw.traverse(m=>{if(m.isMesh&&m.visible){m.geometry.computeBoundingBox();box.union(m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld))}});const center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());raw.position.sub(center);model=new T.Group();model.add(raw);model.scale.setScalar(2.25/Math.max(size.x,size.y,size.z));model.rotation.set(.08,-.3,0);scene.add(model);status.hidden=true;host.dataset.ready='true';window.parent.postMessage({type:'atlas:preview-ready'},location.origin);render();start();
}catch(error){status.textContent='미니어처를 불러오지 못했어요. 아래 링크로 도감을 열 수 있어요.';host.removeAttribute('role');host.tabIndex=-1;console.warn('Heart preview unavailable',error)}}
window.addEventListener('pagehide',()=>{disposed=true;pause();observer?.disconnect();scene.traverse(m=>{m.geometry?.dispose();if(Array.isArray(m.material))m.material.forEach(x=>x.dispose());else m.material?.dispose()});renderer?.dispose();renderer?.forceContextLoss()},{once:true});
init();
