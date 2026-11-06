import * as T from 'three';

export const JOURNEY_RADIUS=.0016;
export const relativeSize=radius=>T.MathUtils.clamp(radius/JOURNEY_RADIUS,.25,1);

// Source coordinates match the existing anatomical minimap: +X left,
// +Y superior, +Z anterior. This heading does not change the movement frame.
export function anatomicalHeading(direction){
 const axes=[
  {amount:Math.abs(direction.x),label:direction.x>=0?'왼쪽 L':'오른쪽 R'},
  {amount:Math.abs(direction.y),label:direction.y>=0?'머리쪽 S':'발쪽 I'},
  {amount:Math.abs(direction.z),label:direction.z>=0?'앞쪽 A':'뒤쪽 P'},
 ].sort((a,b)=>b.amount-a.amount);
 return axes.filter((axis,i)=>i===0||(i===1&&axis.amount>.4)).map(axis=>axis.label).join(' · ');
}

// A bounded perspective cue, not a rescale of the anatomical mesh. Camera
// position/orientation and the occupied-space field stay in source metres.
export class JourneyPerspective{
 constructor(camera,{reducedMotion=false}={}){this.camera=camera;this.reducedMotion=reducedMotion;this.target=camera.fov;this.active=false;}
 setRadius(radius,{immediate=false}={}){
  const size=relativeSize(radius),target=76+10*Math.log2(1/size);
  this.camera.near=.00012*size;
  if(immediate||this.reducedMotion){this.camera.fov=target;this.active=false;}
  else if(target!==this.target){this.start=this.camera.fov;this.elapsed=0;this.active=this.start!==target;}
  this.target=target;this.camera.updateProjectionMatrix();
 }
 update(dt){
  if(!this.active)return false;
  this.elapsed+=Math.max(0,dt);const t=Math.min(1,this.elapsed/.45),ease=t*t*(3-2*t);
  this.camera.fov=T.MathUtils.lerp(this.start,this.target,ease);this.camera.updateProjectionMatrix();
  if(t===1)this.active=false;return true;
 }
}
