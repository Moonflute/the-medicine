import * as T from 'three';
import {moveInLumen} from './volume.js';
export class JourneyControls{
 constructor(camera,canvas,{field,radius=.0016,onChange=()=>{},onExit=()=>{}}){
  this.camera=camera;this.canvas=canvas;this.field=field;this.radius=radius;this.onChange=onChange;this.keys=new Set();this.axes=[0,0,0];this.yaw=0;this.pitch=0;this.drag=null;this.cleanups=[];this.onExit=onExit;this.forward=new T.Vector3();this.right=new T.Vector3();
  const listen=(target,type,fn,options)=>{target.addEventListener(type,fn,options);this.cleanups.push(()=>target.removeEventListener(type,fn,options));};
  listen(window,'keydown',e=>{if(e.target.closest('input,select,textarea,button,summary,a')||e.ctrlKey||e.metaKey||e.altKey)return;const key=e.code;if(['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','ShiftLeft','ShiftRight'].includes(key)){e.preventDefault();this.keys.add(key);}if(key==='Escape'){e.preventDefault();if(document.pointerLockElement===canvas)document.exitPointerLock();else if(performance.now()-(this.lastUnlock||-Infinity)>300)onExit();}});
  listen(window,'keyup',e=>this.keys.delete(e.code));listen(window,'blur',()=>this.clear());listen(document,'visibilitychange',()=>this.clear());
  listen(canvas,'pointerdown',e=>{if(e.button!==0)return;canvas.focus({preventScroll:true});this.drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
  listen(canvas,'pointermove',e=>{if(document.pointerLockElement===canvas)this.look(e.movementX,e.movementY);else if(this.drag?.id===e.pointerId){this.look(e.clientX-this.drag.x,e.clientY-this.drag.y);this.drag.x=e.clientX;this.drag.y=e.clientY;}});
  const up=e=>{if(this.drag?.id===e.pointerId)this.drag=null;};listen(canvas,'pointerup',up);listen(canvas,'pointercancel',up);listen(canvas,'lostpointercapture',up);
  listen(canvas,'dblclick',()=>{if(matchMedia('(pointer:fine)').matches&&canvas.requestPointerLock)Promise.resolve(canvas.requestPointerLock()).catch(()=>{});});
  listen(document,'pointerlockchange',()=>{if(this.locked&&document.pointerLockElement!==canvas)this.lastUnlock=performance.now();this.locked=document.pointerLockElement===canvas;this.drag=null;this.clear();});
 }
 clear(){this.keys.clear();this.axes.fill(0);this.drag=null;}
 aim(direction){const v=new T.Vector3(...direction).normalize();this.pitch=Math.asin(T.MathUtils.clamp(v.y,-1,1));this.yaw=Math.atan2(-v.x,-v.z);this.updateRotation();}
 updateRotation(){this.camera.rotation.set(this.pitch,this.yaw,0,'YXZ');this.onChange();}
 look(dx,dy){this.yaw-=dx*.0026;this.pitch=T.MathUtils.clamp(this.pitch-dy*.0026,-Math.PI/2+.015,Math.PI/2-.015);this.updateRotation();}
 step(dt){
  dt=Math.min(.05,Math.max(0,dt));if(!dt)return false;
  const key=k=>Number(this.keys.has(k));const yaw=key('ArrowLeft')-key('ArrowRight'),pitch=key('ArrowUp')-key('ArrowDown');if(yaw||pitch)this.look(-yaw*dt*330,-pitch*dt*330);
  const forward=key('KeyW')-key('KeyS')-this.axes[1],right=key('KeyD')-key('KeyA')+this.axes[0],up=key('KeyE')-key('KeyQ')+this.axes[2];if(!forward&&!right&&!up)return !!(yaw||pitch);
  this.camera.getWorldDirection(this.forward);this.right.set(1,0,0).applyQuaternion(this.camera.quaternion);
  const direction=this.forward.multiplyScalar(forward).addScaledVector(this.right,right);direction.y+=up;direction.normalize();
  const speed=.028*Math.sqrt(this.radius/.0016)*(key('ShiftLeft')||key('ShiftRight')?1.7:1),delta=direction.multiplyScalar(speed*dt).toArray();
  const result=moveInLumen(this.field,this.camera.position.toArray(),delta,this.radius);this.camera.position.fromArray(result.position);this.blocked=result.blocked;this.onChange();return true;
 }
 dispose(){if(document.pointerLockElement===this.canvas)document.exitPointerLock();this.clear();this.cleanups.forEach(fn=>fn());}
}
