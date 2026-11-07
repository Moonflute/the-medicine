import * as T from 'three';
import {moveInLumen} from './volume.js';
import {JOURNEY_RADIUS,relativeSize} from './perspective.js';
export class JourneyControls{
 constructor(camera,canvas,{field,radius=JOURNEY_RADIUS,onChange=()=>{},onExit=()=>{},onLookModeChange=()=>{}}){
  this.camera=camera;this.canvas=canvas;this.field=field;this.radius=radius;this.onChange=onChange;this.keys=new Set();this.axes=[0,0,0];this.yaw=0;this.pitch=0;this.drag=null;this.cleanups=[];this.onExit=onExit;this.forward=new T.Vector3();this.right=new T.Vector3();this.up=new T.Vector3();
  this.frame=new T.Quaternion();this.onLookModeChange=onLookModeChange;this.lookMode='off';this.locked=false;this.lastUnlock=-Infinity;this.mousePoint=null;this.disposed=false;this.enabled=true;this.blocked=false;this.stalledFor=0;canvas.dataset.lookMode='off';
  const listen=(target,type,fn,options)=>{target.addEventListener(type,fn,options);this.cleanups.push(()=>target.removeEventListener(type,fn,options));};
  listen(window,'keydown',e=>{if(e.defaultPrevented||e.target.closest?.('input,select,textarea,button,summary,a')||e.ctrlKey||e.metaKey||e.altKey)return;const key=e.code;if(['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','ShiftLeft','ShiftRight'].includes(key)){e.preventDefault();this.keys.add(key);}if(key==='Escape'){e.preventDefault();if(!this.consumeEscape())onExit();}});
  listen(window,'keyup',e=>this.keys.delete(e.code));listen(window,'blur',()=>this.clear());listen(document,'visibilitychange',()=>this.clear());
  listen(canvas,'pointerdown',e=>{
   if(!this.enabled||e.button!==0)return;canvas.focus({preventScroll:true});
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
  if(!this.enabled||this.disposed||document.pointerLockElement===this.canvas)return;
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
 clearInputs(){this.keys.clear();this.axes.fill(0);this.drag=null;this.mousePoint=null;this.blocked=false;this.stalledFor=0;}
 clear(){
  if(this.lookMode!=='off'||document.pointerLockElement===this.canvas)this.lastUnlock=performance.now();
  this.clearInputs();this.setLookMode('off');if(document.pointerLockElement===this.canvas)document.exitPointerLock();
 }
 consumeEscape(){
  if(this.lookMode!=='off'||document.pointerLockElement===this.canvas){this.clear();return true;}
  // Native Esc can unlock first and then emit the dialog's cancel event.
  return performance.now()-this.lastUnlock<400;
 }
 aim(direction){const v=new T.Vector3(...direction).normalize().applyQuaternion(this.frame.clone().invert());this.pitch=Math.asin(T.MathUtils.clamp(v.y,-1,1));this.yaw=Math.atan2(-v.x,-v.z);this.updateRotation();}
 updateRotation(){this.camera.quaternion.setFromEuler(new T.Euler(this.pitch,this.yaw,0,'YXZ')).premultiply(this.frame);this.onChange();}
 resetFrame(up=[0,1,0],saved){if(saved)this.frame.fromArray(saved);else this.frame.setFromUnitVectors(new T.Vector3(0,1,0),new T.Vector3(...up).normalize());}
 look(dx,dy){if(!this.enabled)return;this.yaw-=dx*.0048;this.pitch=T.MathUtils.clamp(this.pitch-dy*.0048,-Math.PI/2+.015,Math.PI/2-.015);this.updateRotation();}
 step(dt){
  if(!this.enabled)return false;
  dt=Math.min(.05,Math.max(0,dt));if(!dt)return false;
  const key=k=>Number(this.keys.has(k));const yaw=key('ArrowLeft')-key('ArrowRight'),pitch=key('ArrowUp')-key('ArrowDown');if(yaw||pitch)this.look(-yaw*dt*330,-pitch*dt*330);
  const forward=key('KeyW')-key('KeyS')-this.axes[1],right=key('KeyD')-key('KeyA')+this.axes[0],up=key('KeyE')-key('KeyQ')+this.axes[2];if(!forward&&!right&&!up){this.blocked=false;this.stalledFor=0;return !!(yaw||pitch);}
  this.camera.getWorldDirection(this.forward);this.right.set(1,0,0).applyQuaternion(this.camera.quaternion);this.up.set(0,1,0).applyQuaternion(this.camera.quaternion);
  // All three axes belong to the view, including Q/E and touch lift buttons.
  const direction=this.forward.multiplyScalar(forward).addScaledVector(this.right,right).addScaledVector(this.up,up).normalize();
  const speed=.028*relativeSize(this.radius)*(key('ShiftLeft')||key('ShiftRight')?1.7:1),delta=direction.multiplyScalar(speed*dt).toArray();
  const position=this.camera.position.toArray(),result=this.field.move?this.field.move(position,delta,this.radius):moveInLumen(this.field,position,delta,this.radius),moved=result.position.some((v,i)=>Math.abs(v-position[i])>1e-12);
  this.stalledFor=result.blocked?this.stalledFor+dt:0;this.blocked=this.stalledFor>=.18;
  // Holding against a solid wall still updates collision feedback, but an
  // unchanged camera does not need another GPU render.
  if(moved){this.camera.position.fromArray(result.position);const up=this.field.upAt?.(result.position);if(up){const before=new T.Vector3(0,1,0).applyQuaternion(this.frame),after=new T.Vector3(...up);before.lerp(after,Math.min(1,dt*8)).normalize();this.frame.premultiply(new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0).applyQuaternion(this.frame),before));this.updateRotation();}this.onChange();}return moved||!!(yaw||pitch);
 }
 dispose(){this.disposed=true;this.clear();this.cleanups.forEach(fn=>fn());}
}
