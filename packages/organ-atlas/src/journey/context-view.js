import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {JourneyMiniMap} from './minimap.js';

// Reuses the loaded source geometry and the main WebGL renderer. No second
// WebGL context, anatomy download, shadow map or continuous idle rendering.
export class JourneyContextView{
 constructor(host,asset,camera,onChange=()=>{}){
  this.host=host;this.asset=asset;this.camera=camera;this.onChange=onChange;this.canvas=host.querySelector('canvas');this.axis='front';this.enabled=asset.manifest.kind==='brain';this.cut=false;this.local=false;
  this.flat=this.enabled?null:new JourneyMiniMap(host,asset,camera,onChange);
  const modes=host.querySelector('.journey-map-modes');this.toggle=document.createElement('button');this.toggle.textContent='3D';this.toggle.setAttribute('aria-label','3D 외부 위치도');modes.append(this.toggle);
  this.slice=document.createElement('button');this.slice.textContent='단면';this.slice.setAttribute('aria-label','현재 위치에서 절개');modes.append(this.slice);
  this.scene=new T.Scene();this.scene.background=new T.Color('#23333c');this.scene.add(new T.AmbientLight('#ffffff',2));const light=new T.DirectionalLight('#fff5de',2);light.position.set(1,2,3);this.scene.add(light);
  this.root=asset.mesh.clone(true);this.materials=[];this.root.traverse(m=>{if(!m.isMesh)return;m.material=m.material.clone();m.material.onBeforeCompile=()=>{};m.material.customProgramCacheKey=()=>'';m.material.clippingPlanes=[];this.materials.push(m.material);});this.scene.add(this.root);
  const bounds=new T.Box3().setFromObject(this.root);this.center=bounds.getCenter(new T.Vector3());this.span=bounds.getSize(new T.Vector3()).length();
  this.eye=new T.PerspectiveCamera(38,240/380,.00005,10);this.eye.position.copy(this.center).add(new T.Vector3(.5,.15,1).multiplyScalar(this.span*1.6));
  this.orbit=new OrbitControls(this.eye,this.canvas);this.orbit.target.copy(this.center);this.orbit.enableDamping=false;this.orbit.enablePan=false;this.orbit.minDistance=this.span*.12;this.orbit.maxDistance=this.span*3;this.orbit.update();this.orbit.addEventListener('change',onChange);
  this.markerGeometry=new T.SphereGeometry(1,12,8);this.markerMaterial=new T.MeshBasicMaterial({color:'#5eead4',depthTest:false});this.marker=new T.Mesh(this.markerGeometry,this.markerMaterial);this.marker.renderOrder=20;this.scene.add(this.marker);
  this.lineGeometry=new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3()]);this.lineMaterial=new T.LineBasicMaterial({color:'#ffffff',depthTest:false});this.line=new T.Line(this.lineGeometry,this.lineMaterial);this.line.renderOrder=21;this.scene.add(this.line);this.direction=new T.Vector3();this.plane=new T.Plane();
  this.toggle.onclick=()=>{if(!this.flat)return;this.enabled=!this.enabled;this.sync();onChange();};this.slice.onclick=()=>{this.cut=!this.cut;this.sync();onChange();};
  const zoom=host.querySelector('[data-map-zoom]');const flatZoom=zoom?.onclick;if(zoom)zoom.onclick=()=>{if(!this.enabled){flatZoom?.();return;}this.local=!this.local;this.orbit.target.copy(this.local?camera.position:this.center);const direction=this.eye.position.clone().sub(this.orbit.target).normalize();this.eye.position.copy(this.orbit.target).addScaledVector(direction,this.local?Math.min(this.span*.5,.12):this.span*1.6);this.orbit.update();zoom.setAttribute('aria-pressed',String(this.local));onChange();};
  this.sync();
 }
 sync(){this.orbit.enabled=this.enabled&&!this.host.hidden;this.host.classList.toggle('is-3d',this.enabled);this.toggle.setAttribute('aria-pressed',String(this.enabled));this.slice.hidden=!this.enabled;this.slice.setAttribute('aria-pressed',String(this.cut));for(const b of this.host.querySelectorAll('[data-projection]'))b.hidden=this.enabled;this.canvas.style.opacity=this.enabled?'0':'';}
 get axis(){return this.flat?.axis||'front';}
 set axis(value){if(this.flat)this.flat.axis=value;}
 draw(){this.sync();if(this.flat&&!this.enabled)this.flat.draw();if(this.enabled)this.host.querySelector('.journey-map-caption').textContent=this.cut?'현재 위치 단면 · 드래그 회전':'현재 위치 · 드래그 회전';}
 resetTrail(){this.flat?.resetTrail();}
 render(renderer){
  if(!this.enabled||this.host.hidden)return;const r=this.canvas.getBoundingClientRect(),base=renderer.domElement.getBoundingClientRect(),w=base.width,h=base.height;if(!r.width||!r.height)return;
  this.eye.aspect=r.width/r.height;this.eye.updateProjectionMatrix();this.marker.position.copy(this.camera.position);this.marker.scale.setScalar((this.local?.002:this.span*.02));
  this.camera.getWorldDirection(this.direction);const line=this.lineGeometry.attributes.position;line.setXYZ(0,...this.camera.position.toArray());line.setXYZ(1,...this.camera.position.clone().addScaledVector(this.direction,this.local?.012:this.span*.09).toArray());line.needsUpdate=true;
  this.eye.getWorldDirection(this.direction);this.plane.setFromNormalAndCoplanarPoint(this.direction,this.camera.position);for(const material of this.materials)material.clippingPlanes=this.cut?[this.plane]:[];
  if(this.asset.manifest.kind==='brain')for(let i=0;i<this.root.children.length;i++)this.root.children[i].visible=this.asset.mesh.children[i].visible;
  const previousClip=renderer.localClippingEnabled;renderer.localClippingEnabled=this.cut;renderer.setScissorTest(true);renderer.setScissor(r.left-base.left,h-(r.bottom-base.top),r.width,r.height);renderer.setViewport(r.left-base.left,h-(r.bottom-base.top),r.width,r.height);renderer.clearDepth();renderer.render(this.scene,this.eye);renderer.setScissorTest(false);renderer.setViewport(0,0,w,h);renderer.localClippingEnabled=previousClip;
 }
 dispose(){this.flat?.dispose();this.orbit.dispose();this.materials.forEach(m=>m.dispose());this.markerGeometry.dispose();this.markerMaterial.dispose();this.lineGeometry.dispose();this.lineMaterial.dispose();this.toggle.remove();this.slice.remove();this.canvas.style.opacity='';this.host.classList.remove('is-3d');for(const b of this.host.querySelectorAll('[data-projection]'))b.hidden=false;}
}
