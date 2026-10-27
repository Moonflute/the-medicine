import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {DEFAULT_FORWARD_INPUTS, DEFAULT_ISCHEMIA, simulateForwardEcg} from '../src/lib/ecg-forward-model.ts';
import {mechanicalRecording, mechanicalFrame, chamberShortening, wrapAtMatchingBeat} from '../src/lib/ecg-forward-mechanics.ts';
import {createHeartDeformation, createAnatomyLayout, HEART_CHAMBERS, HEART_OUTLINE} from '../src/lib/ecg-forward-anatomy.ts';

const hash = array => createHash('sha256').update(new Uint8Array(array.buffer, array.byteOffset, array.byteLength)).digest('hex');
const close = (a,b,epsilon=1e-5) => assert.ok(Math.abs(a-b)<epsilon,`${a} ≠ ${b}`);
for(const rate of [50,70,110]) {
  const period=60000/rate,time=2400.1,wrapped=wrapAtMatchingBeat(time,2400,period);
  assert.ok(wrapped>=0&&wrapped<2400);
  close((time-wrapped)/period,Math.round((time-wrapped)/period));
  close(wrapAtMatchingBeat(440,2400,period),440);
}
const peak = (motion,chamber) => {
  let result={time:0,value:0};
  for(let time=0;time<60000/70;time+=motion.sampleMs) {
    const value=chamberShortening(mechanicalFrame(motion,time))[chamber];
    if(value>result.value)result={time,value};
  }
  return result;
};

// Independently sample SVG Beziers to measure 2D areas, NOT clinical volumes/EF.
function pathPoints(path) {
  const tokens=path.match(/-?\d*\.?\d+(?:e[-+]?\d+)?|[A-Za-z]/g),points=[];
  let x=0,y=0;
  for(let i=0;i<tokens.length;) {
    const command=tokens[i++],take=()=>[Number(tokens[i++]),Number(tokens[i++])];
    if(command==='Z')continue;
    if(command==='M'||command==='L'){[x,y]=take();points.push([x,y]);continue;}
    assert.ok(['Q','C'].includes(command));
    const start=[x,y],a=take(),b=take(),end=command==='C'?take():b;
    for(let k=1;k<=24;k++) {
      const t=k/24,s=1-t;
      points.push(command==='C'?[0,1].map(d=>s*s*s*start[d]+3*s*s*t*a[d]+3*s*t*t*b[d]+t*t*t*end[d]):[0,1].map(d=>s*s*start[d]+2*s*t*a[d]+t*t*end[d]));
    }
    [x,y]=end;
  }
  return points;
}
function area(path) {
  const points=pathPoints(path);
  return Math.abs(points.reduce((sum,p,i)=>{const q=points[(i+1)%points.length];return sum+p[0]*q[1]-q[0]*p[1];},0)/2);
}

const normal=simulateForwardEcg(DEFAULT_FORWARD_INPUTS),before=hash(normal.voltage),motion=mechanicalRecording(normal);
assert.equal(mechanicalRecording(normal),motion,'Cache by immutable electrical recording');
const peaks=Object.fromEntries(['RA','LA','RV','LV'].map(chamber=>[chamber,peak(motion,chamber)]));
assert.ok(peaks.RA.time<peaks.LA.time&&peaks.LA.time<peaks.RV.time,'Atria contract before ventricles from their own upstrokes');
assert.ok(peaks.RV.time>normal.activation.ventricularEnd+26,'Mechanical peak follows depolarization');
assert.ok(Object.values(chamberShortening(mechanicalFrame(motion,100))).every(value=>value<.02),'Relaxed before this beat');
assert.ok(Object.values(chamberShortening(mechanicalFrame(motion,850))).every(value=>value<.04),'Relaxation between beats');
const half=mechanicalFrame(motion,411),a=mechanicalFrame(motion,410),b=mechanicalFrame(motion,412);
for(const region of motion.regions)close(half[region],(a[region]+b[region])/2);
mechanicalFrame(motion,1000);assert.deepEqual(mechanicalFrame(motion,411),half,'Backward seek has no animation history');
assert.equal(hash(normal.voltage),before,'Mechanics never changes ECG input arrays');

const rest=createHeartDeformation({}),atrial=createHeartDeformation(mechanicalFrame(motion,peaks.LA.time)),ventricular=createHeartDeformation(mechanicalFrame(motion,peaks.LV.time));
assert.equal(rest.path(HEART_OUTLINE),HEART_OUTLINE,'Display off restores exact baseline anatomy');
const ratios={};
for(const chamber of HEART_CHAMBERS) {
  const state=chamber.id.endsWith('A')?atrial:ventricular;
  ratios[chamber.id]=area(state.path(chamber.cavity))/area(chamber.cavity);
  assert.ok(ratios[chamber.id]<.91&&ratios[chamber.id]>.25,`${chamber.id} narrows without cavity collapse: ${ratios[chamber.id]}`);
}
const epicardialRatio=area(ventricular.path(HEART_OUTLINE))/area(HEART_OUTLINE);
assert.ok(epicardialRatio>ratios.LV+.08,'Not a scale transform: cavity shrinks more than whole-heart outline');
const endo=ventricular.point({x:429,y:301}),epi=ventricular.point({x:475,y:307});
const thickening=Math.hypot(epi.x-endo.x,epi.y-endo.y)/Math.hypot(46,6);
assert.ok(thickening>1.1,'Wall thickens');
assert.ok(ventricular.point({x:350,y:210}).y>220,'AV plane moves toward apex');
assert.ok(Math.abs(ventricular.point({x:350,y:490}).y-490)<8,'Apex stays relatively stable');
for(const state of [Object.fromEntries(motion.regions.map(region=>[region,1])),...motion.regions.map(region=>({[region]:1}))]) {
  const warp=createHeartDeformation(state);
  for(let y=90;y<490;y+=12)for(let x=145;x<480;x+=12) {
    const p=warp.point({x,y}),a=warp.point({x:x+.1,y}),b=warp.point({x,y:y+.1});
    const jacobian=((a.x-p.x)*(b.y-p.y)-(a.y-p.y)*(b.x-p.x))/.01;
    assert.ok(jacobian>.2,`No folds under maximal or isolated regional contraction at ${x},${y}: ${jacobian}`);
  }
}
const layout=createAnatomyLayout(normal.mesh);
for(const path of [...layout.bands,...layout.paths])assert.ok(!/NaN|Infinity/.test(ventricular.path(path.path)),'Electrical overlay uses valid deformed paths');
console.log(JSON.stringify({normalPeaks:peaks,cavityAreaRatios:ratios,epicardialRatio,wallThickening:thickening}));

const inactive={...normal,voltage:new Float32Array(normal.voltage.length).fill(.35)};
assert.ok(mechanicalRecording(inactive).values.every(value=>value===0),'Constant elevated Vm cannot drive contraction');
const delayed={...normal,voltage:new Float32Array(normal.voltage.length)};
const delay=40/normal.sampleMs,n=normal.mesh.cells.length;
for(let frame=delay;frame<normal.samples;frame++)delayed.voltage.set(normal.voltage.subarray((frame-delay)*n,(frame-delay+1)*n),frame*n);
const delayedMotion=mechanicalRecording(delayed);
close(peak(delayedMotion,'RA').time-peaks.RA.time,40,normal.sampleMs+1e-6);
close(peak(delayedMotion,'LV').time-peaks.LV.time,40,normal.sampleMs+1e-6);

for(const inputs of [{...DEFAULT_FORWARD_INPUTS,condition:'lbb-block'},{...DEFAULT_FORWARD_INPUTS,condition:'av-slow'},{...DEFAULT_FORWARD_INPUTS,ischemia:{...DEFAULT_ISCHEMIA,mode:'scar',regions:['lv-anterior'],depth:1}}]) {
  const recording=simulateForwardEcg(inputs),states=mechanicalRecording(recording),report={condition:inputs.condition,scar:inputs.ischemia?.regions,LV:peak(states,'LV'),RV:peak(states,'RV')};
  assert.ok(states.values.every(value=>Number.isFinite(value)&&value>=0&&value<1));
  if(inputs.condition==='lbb-block')assert.ok(report.LV.time>peaks.LV.time+10,'LBB block delays LV response without changing an animation preset');
  if(inputs.condition==='av-slow')assert.ok(report.LV.time>peaks.LV.time+15,'AV delay shifts ventricular contraction');
  if(inputs.ischemia) {
    const region=states.regions.indexOf('lv-anterior');
    for(let frame=0;frame<states.samples;frame++)close(states.values[frame*states.regions.length+region],0);
  }
  console.log(JSON.stringify(report));
}
console.log('Mechanics: activation coupling, delay, relaxation, seek, scar, wall thickening, cavity narrowing and unchanged Vm passed.');
