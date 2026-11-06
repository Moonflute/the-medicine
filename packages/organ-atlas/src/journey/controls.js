import * as T from 'three';
import {moveInLumen} from './volume.js';
export class JourneyControls{
 constructor(camera,canvas,{field,radius=.0016,onChange=()=>{},onExit=()=>{},onLookModeChange=()=>{}}){
  this.camera=camera;this.canvas=canvas;this.field=field;this.radius=radius;this.onChange=onChange;this.keys=new Set();this.axes=[0,0,0];this.yaw=0;this.pitch=0;this.drag=null;this.cleanups=[];this.onExit=onExit;this.forward=new T.Vector3();this.right=new T.Vector3();
  this.onLookModeChange=onLookModeChange;this.lookMode='off';this.locked=false;this.lastUnlock=-Infinity;this.mousePoint=null;this.disposed=false;canvas.dataset.lookMode='off';
  const listen=(target,type,fn,options)=>{target.addEventListener(type,fn,options);this.cleanups.push(()=>target.removeEventListener(type,fn,options));};
  listen(window,'keydown',e=>{if(e.defaultPrevented||e.target.closest?.('input,select,textarea,button,summary,a')||e.ctrlKey||e.metaKey||e.altKey)return;const key=e.code;if(['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','ShiftLeft','ShiftRight'].includes(key)){e.preventDefault();this.keys.add(key);}if(key==='Escape'){e.preventDefault();if(!this.consumeEscape())onExit();}});
  listen(window,'keyup',e=>this.keys.delete(e.code));listen(window,'blur',()=>this.clear());listen(document,'visibilitychange',()=>this.clear());
  listen(canvas,'pointerdown',e=>{
   if(e.button!==0)return;canvas.focus({preventScroll:true});
   if(e.pointerType==='mouse'){e.preventDefault();this.startMouseLook(e);return;}
   if(this.lookMode!=='off')this.clear();this.drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);
  });
  listen(canvas,'pointermove',e=>{
   if(document.pointerLockElement===canvas)return;
   if(this.lookMode==='free'&&e.pointerType==='mouse'){
    if(this.mousePoint)this.look(e.clientX-this.mousePoint.x,e.clientY-this.mousePoint.y);
    this.mousePoint={x:e.clientX,y:e.clientY};
   }else if(this.drag?.id===e.pointerId){this.look(e.clientX-this.drag.x,e.clientY-this.drag.y);this.drag.x=e.clientX;this.drag.y=e.clientY;}
  });
  // Pointer lock emits relative mouse movement even with every button released.
  // Keep it separate from pointermove so one physical move is not applied twice.
  listen(document,'mousemove',e=>{if(this.lookMode!=='off'&&document.pointerLockElement===canvas)this.look(e.movementX||0,e.movementY||0);});
  listen(canvas,'pointerleave',()=>{this.mousePoint=null;});
  const up=e=>{if(this.drag?.id===e.pointerId)this.drag=null;};listen(canvas,'pointerup',up);listen(canvas,'pointercancel',up);listen(canvas,'lostpointercapture',up);
  listen(document,'pointerlockchange',()=>{
   if(document.pointerLockElement===canvas){
    if(this.disposed||this.lookMode==='off'){document.exitPointerLock();return;}
    this.locked=true;this.clearInputs();this.setLookMode('locked');
   }else if(this.locked){this.locked=false;this.lastUnlock=performance.now();this.clearInputs();this.setLookMode('off');}
  });
 }
 setLookMode(mode){if(this.lookMode===mode)return;this.lookMode=mode;this.canvas.dataset.lookMode=mode;if(!this.disposed)this.onLookModeChange(mode);}
 startMouseLook(event){
  if(this.disposed||document.pointerLockElement===this.canvas)return;
  this.mousePoint={x:event.clientX,y:event.clientY};this.setLookMode('free');
  // If pointer lock is unavailable/denied, hover movement inside the canvas
  // still works without holding a button. Touch and pen retain drag controls.
  if(!this.canvas.requestPointerLock||this.pendingLock)return;
  this.pendingLock=true;
  try{
   Promise.resolve(this.canvas.requestPointerLock()).then(()=>{
    this.pendingLock=false;
    if((this.disposed||this.lookMode==='off')&&document.pointerLockElement===this.canvas)document.exitPointerLock();
   }).catch(()=>{this.pendingLock=false;});
  }catch{this.pendingLock=false;}
 }
 clearInputs(){this.keys.clear();this.axes.fill(0);this.drag=null;this.mousePoint=null;}
 clear(){
  if(this.lookMode!=='off'||document.pointerLockElement===this.canvas)this.lastUnlock=performance.now();
  this.clearInputs();this.setLookMode('off');if(document.pointerLockElement===this.canvas)document.exitPointerLock();
 }
 consumeEscape(){
  if(this.lookMode!=='off'||document.pointerLockElement===this.canvas){this.clear();return true;}
  // Native Esc can unlock first and then emit the dialog's cancel event.
  return performance.now()-this.lastUnlock<400;
 }
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
 dispose(){this.disposed=true;this.clear();this.cleanups.forEach(fn=>fn());}
}
