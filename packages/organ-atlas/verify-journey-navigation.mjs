import assert from 'node:assert/strict';
import * as T from 'three';
import {JourneyControls} from './src/journey/controls.js';
import {JOURNEY_RADIUS,JourneyPerspective,anatomicalHeading} from './src/journey/perspective.js';

// Exercise the production controller without a WebGL context.
globalThis.window=new EventTarget();globalThis.document=new EventTarget();
const canvas=new EventTarget();canvas.dataset={};
const openField={step:.001,clearance:()=>1,gradient:()=>[0,0,0]};
const camera=new T.PerspectiveCamera(76,1,.00012,1.4),controls=new JourneyControls(camera,canvas,{field:openField});
let directions=0;
for(const [yaw,pitch]of [[0,0],[1.2,.8],[-2,-.7],[.4,Math.PI/2-.015],[-.5,-Math.PI/2+.015]]){
 controls.yaw=yaw;controls.pitch=pitch;controls.updateRotation();
 for(const [key,expected]of [['KeyW',[0,0,-1]],['KeyS',[0,0,1]],['KeyA',[-1,0,0]],['KeyD',[1,0,0]],['KeyQ',[0,-1,0]],['KeyE',[0,1,0]]]){
  camera.position.set(0,0,0);controls.keys=new Set([key]);controls.step(.025);
  const inView=camera.position.clone().applyQuaternion(camera.quaternion.clone().invert()).normalize();
  assert(inView.distanceTo(new T.Vector3(...expected))<1e-9,`${key} follows the screen even when looking vertically`);directions++;
 }
}
controls.keys.clear();controls.axes=[0,0,1];camera.position.set(0,0,0);controls.step(.025);
assert(camera.position.clone().applyQuaternion(camera.quaternion.clone().invert()).normalize().distanceTo(new T.Vector3(0,1,0))<1e-9,'touch up uses the same screen basis');
controls.axes=[0,0,0];controls.keys=new Set(['KeyW']);const distances=[];
for(const scale of [1,.5,.25]){controls.radius=JOURNEY_RADIUS*scale;camera.position.set(0,0,0);controls.step(.025);distances.push(camera.position.length());}
assert(Math.abs(distances[1]/distances[0]-.5)<1e-9&&Math.abs(distances[2]/distances[0]-.25)<1e-9,'travel in body lengths stays consistent across sizes');
controls.radius=JOURNEY_RADIUS;controls.yaw=controls.pitch=0;controls.updateRotation();
controls.field={step:.001,clearance:([,,z])=>.006-Math.abs(z),gradient:([,,z])=>[0,0,-Math.sign(z)]};camera.position.set(0,0,0);
for(let i=0;i<15;i++)controls.step(.05);
assert(controls.field.clearance(camera.position.toArray())>=controls.radius-1e-9,'view-relative movement still respects wall clearance');controls.dispose();

camera.position.set(.01,1.5,.03);camera.rotation.set(.3,.7,0,'YXZ');camera.updateMatrixWorld();
const pose=[...camera.position.toArray(),...camera.quaternion.toArray()],lens=new JourneyPerspective(camera);
const edge=new T.Vector3(0,.009,-.01).applyQuaternion(camera.quaternion).add(camera.position);
assert(edge.clone().project(camera).y>1,'reference wall point starts outside the view');
lens.setRadius(JOURNEY_RADIUS/4);assert.equal(camera.fov,76,'size change starts without a projection jump');
lens.update(.225);assert(camera.fov>76&&camera.fov<96,'the intermediate view is smooth');
lens.setRadius(JOURNEY_RADIUS/2);for(let i=0;i<10;i++)lens.update(.05);assert.equal(camera.fov,86,'interrupting a scale change settles at the latest size');
lens.setRadius(JOURNEY_RADIUS/4);for(let i=0;i<10;i++)lens.update(.05);
assert.equal(camera.fov,96);assert(edge.clone().project(camera).y<1,'shrinking visibly reveals more surrounding space');
assert.equal(lens.update(.05),false,'settled scale does not request continuous rendering');
assert.deepEqual([...camera.position.toArray(),...camera.quaternion.toArray()],pose,'size change never moves or rotates the viewer');
assert(camera.near<JOURNEY_RADIUS/4,'near clipping stays inside the smaller collision radius');
lens.setRadius(JOURNEY_RADIUS,{immediate:true});assert.equal(camera.fov,76,'restoring a world restores its size view');
const reduced=new JourneyPerspective(camera,{reducedMotion:true});reduced.setRadius(JOURNEY_RADIUS/4);assert.equal(camera.fov,96);assert.equal(reduced.update(.05),false,'reduced motion skips the transition');
for(const [axis,label]of [[[1,0,0],'왼쪽 L'],[[-1,0,0],'오른쪽 R'],[[0,1,0],'머리쪽 S'],[[0,-1,0],'발쪽 I'],[[0,0,1],'앞쪽 A'],[[0,0,-1],'뒤쪽 P']])assert.equal(anatomicalHeading(new T.Vector3(...axis)),label);
console.log(JSON.stringify({screenRelativeDirections:directions,touchBasis:true,sizeSpeed:true,collision:true,visibleScale:true,cameraPreserved:true,reducedMotion:true,anatomicalAxes:true}));
