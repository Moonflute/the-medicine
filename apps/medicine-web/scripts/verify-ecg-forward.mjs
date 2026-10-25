import assert from "node:assert/strict";
import { DEFAULT_FORWARD_INPUTS, DEFAULT_PLACEMENT, createHeartMesh, simulateForwardEcg, measureForwardTrace, potentialWeights, electrodePosition, electrodeFromPosition, leadPreset, normalizeForwardInputs } from "../src/lib/ecg-forward-model.ts";

const close=(a,b,tolerance=1e-5)=>assert.ok(Math.abs(a-b)<tolerance,`${a} ≠ ${b}`);
const maxDiff=(a,b)=>a.reduce((max,value,i)=>Math.max(max,Math.abs(value-b[i])),0);
const normal=simulateForwardEcg(DEFAULT_FORWARD_INPUTS),trace=measureForwardTrace(normal,DEFAULT_PLACEMENT);
assert.equal(normal.mesh.cells.length,456);
assert.ok(normal.mesh.edges.length>normal.mesh.cells.length);
assert.equal(normal.activation.ventricularCoverage,1,"Every ventricular region must activate in the reference model");
assert.ok(normal.activation.atrialStart<normal.activation.ventricularStart);
const landmark=(r,name)=>r.activationMs[r.mesh.landmarks.find(l=>l.label===name).index];
assert.ok(landmark(normal,"SA node")<landmark(normal,"AV node"));
assert.ok(landmark(normal,"AV node")<landmark(normal,"His"));
assert.ok(landmark(normal,"His")<landmark(normal,"LV Purkinje"));
assert.ok(trace.peak>.01&&trace.peak<10);
for(const value of normal.voltage)assert.ok(Number.isFinite(value)&&value>=0&&value<1.2,"Stable membrane dynamics");
for(const edge of normal.mesh.edges)if(edge.source){
  const a=normal.mesh.cells[edge.a],b=normal.mesh.cells[edge.b];
  assert.equal(["RA","LA"].includes(a.chamber),["RA","LA"].includes(b.chamber),"No myocardial AV shortcut");
}

const reversed=measureForwardTrace(normal,{...DEFAULT_PLACEMENT,positive:DEFAULT_PLACEMENT.negative,negative:DEFAULT_PLACEMENT.positive});
const coincident=measureForwardTrace(normal,{...DEFAULT_PLACEMENT,negative:DEFAULT_PLACEMENT.positive});
for(let i=0;i<trace.values.length;i++){
  close(reversed.values[i],-trace.values[i],1e-7);
  close(coincident.values[i],0,1e-10);
  close(trace.values[i],trace.positive[i]-trace.reference[i]);
}
const leadI=measureForwardTrace(normal,leadPreset("I")),leadII=measureForwardTrace(normal,leadPreset("II")),leadIII=measureForwardTrace(normal,leadPreset("III"));
for(let i=0;i<trace.values.length;i++)close(leadII.values[i],leadI.values[i]+leadIII.values[i]);
const before=normal.voltage.slice();
const chest=measureForwardTrace(normal,leadPreset("V4"));
assert.deepEqual(normal.voltage,before,"Electrode motion must not modify the cardiac solution");
assert.ok(maxDiff(chest.values,trace.values)>.05,"Moving an electrode changes measured potential");
assert.ok(maxDiff(chest.approximate,chest.values)>.001,"Distributed sources must not be replaced by a single dipole");
const referenceWeights=potentialWeights(normal.mesh,electrodePosition(DEFAULT_PLACEMENT.positive));
close(referenceWeights.reduce((sum,v)=>sum+v,0),0,1e-10,"Uniform Vm produces no current-gradient signal");
const uniform=measureForwardTrace({...normal,voltage:new Float32Array(normal.voltage.length).fill(.8),dipole:new Float32Array(normal.dipole.length)},DEFAULT_PLACEMENT);
assert.ok(uniform.values.every(v=>Math.abs(v)<1e-8));
for(const electrode of [DEFAULT_PLACEMENT.positive,DEFAULT_PLACEMENT.negative,{longitude:145,latitude:25}]) {
  const roundtrip=electrodeFromPosition(electrodePosition(electrode));close(roundtrip.longitude,electrode.longitude);close(roundtrip.latitude,electrode.latitude);
}

// An isolated current-carrying edge has the analytical dipole potential.
const small=createHeartMesh();small.cells=small.cells.slice(0,2);small.cells[0].position=[-1,0,0];small.cells[1].position=[1,0,0];small.edges=[{a:0,b:1,conductance:.05,source:true}];
const along=potentialWeights(small,[100,0,0]),perpendicular=potentialWeights(small,[0,100,0]);
close(along[0],300*.05*2/100**2,1e-12);close(along[1],-along[0],1e-12);close(perpendicular[0],0,1e-12);
const far=potentialWeights(small,[200,0,0]);close(far[0],along[0]/4,1e-12);

for(const condition of ["av-slow","rbb-block","lbb-block","rv-pacing"]) {
  const result=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,condition});
  assert.equal(result.activation.ventricularCoverage,1,`${condition}: remaining tissue paths conduct`);
  assert.ok(maxDiff(result.voltage,normal.voltage)>.1,"Condition must alter tissue dynamics, not just the label or plotted waveform");
  if(condition==="av-slow")assert.ok(result.activation.ventricularStart>normal.activation.ventricularStart+20);
  if(condition==="rbb-block")assert.ok(landmark(result,"RV Purkinje")>landmark(result,"LV Purkinje")+10);
  if(condition==="lbb-block")assert.ok(landmark(result,"LV Purkinje")>landmark(result,"RV Purkinje")+10);
  if(condition==="rv-pacing")assert.ok(result.activation.ventricularStart<result.activation.atrialStart);
}
const longRecovery=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,recovery:135});
const lv=normal.mesh.cells.findIndex((cell,i)=>cell.chamber==="LV"&&normal.recoveryMs[i]>0);
assert.ok(longRecovery.recoveryMs[lv]>normal.recoveryMs[lv]+30,"Repolarization must come from the recovery equation");
assert.ok(maxDiff(measureForwardTrace(longRecovery,DEFAULT_PLACEMENT).values,trace.values)>.01);
for(const rate of [50,110])for(const recovery of [70,135]){
  const recording=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,rate,recovery});
  assert.ok(recording.voltage.every(v=>Number.isFinite(v)&&v>=0&&v<1.2));
  assert.ok(measureForwardTrace(recording,DEFAULT_PLACEMENT).values.every(Number.isFinite));
}
assert.deepEqual(normalizeForwardInputs({rate:NaN,recovery:Infinity,condition:"unknown"}),DEFAULT_FORWARD_INPUTS);
console.log("Forward ECG passed: tissue propagation, branch/AV changes, recovery, electrode reversal/coincidence, Einthoven identity, dipole direction/distance, fixed source scale and numerical bounds.");
