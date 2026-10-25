import assert from "node:assert/strict";
import { displayGeometry, edgeCurrent, visibleCurrents, recordingFrame, partSnapshot } from "../src/lib/ecg-forward-display.ts";
import { DEFAULT_FORWARD_INPUTS, DEFAULT_PLACEMENT, DEFAULT_ELECTRODES, STANDARD_LEADS, FORWARD_SOURCE_GAIN, createHeartMesh, simulateForwardEcg, measureForwardTrace, measureStandardTraces, potentialWeights, electrodePosition, electrodeFromPosition, leadPreset, normalizeForwardInputs, projectScenePosition, pickSceneSurface } from "../src/lib/ecg-forward-model.ts";

const close=(a,b,tolerance=1e-5)=>assert.ok(Math.abs(a-b)<tolerance,`${a} ≠ ${b}`);
const maxDiff=(a,b)=>a.reduce((max,value,i)=>Math.max(max,Math.abs(value-b[i])),0);
const normal=simulateForwardEcg(DEFAULT_FORWARD_INPUTS),trace=measureForwardTrace(normal,DEFAULT_PLACEMENT);
assert.ok(normal.mesh.cells.length>=500);
assert.equal(new Set(normal.mesh.cells.filter(c=>c.chamber==="LV"||c.chamber==="RV").map(c=>c.region)).size,9);
assert.ok(normal.mesh.edges.length>normal.mesh.cells.length);
assert.equal(normal.activation.ventricularCoverage,1,"Every ventricular region must activate in the reference model");
assert.ok(normal.activation.atrialStart<normal.activation.ventricularStart);
const landmark=(r,name)=>r.activationMs[r.mesh.landmarks.find(l=>l.label===name).index];
assert.ok(landmark(normal,"SA node")<landmark(normal,"AV node"));
assert.ok(landmark(normal,"AV node")<landmark(normal,"His"));
assert.ok(landmark(normal,"His")<landmark(normal,"LV Purkinje"));
assert.ok(trace.peak>.01&&trace.peak<10);
// Display arrows use the integrator's signed current, not a separate animation.
const geometry=displayGeometry(normal.mesh),displayFrame=recordingFrame(normal,normal.activation.ventricularStart+10);
assert.equal(recordingFrame(normal,-10),0);
assert.equal(recordingFrame(normal,Infinity),normal.samples-1);
const arrows=visibleCurrents(normal,geometry.groups,displayFrame);
assert.ok(arrows.length>0&&arrows.length<=40);
for(const arrow of arrows){
  const offset=displayFrame*normal.mesh.cells.length;
  close(arrow.value,arrow.edge.conductance*(normal.voltage[offset+arrow.edge.a]-normal.voltage[offset+arrow.edge.b]),1e-12);
  close(edgeCurrent(normal,{...arrow.edge,a:arrow.edge.b,b:arrow.edge.a},displayFrame),-arrow.value,1e-12);
  close(edgeCurrent(normal,{...arrow.edge,conductance:0},displayFrame),0,1e-12);
}
assert.ok(partSnapshot(normal,"LV",displayFrame).total>1);
assert.equal(partSnapshot(normal,"His",displayFrame).onset,landmark(normal,"His"));
const quiet={...normal,voltage:new Float32Array(normal.voltage.length).fill(.4)};
assert.equal(visibleCurrents(quiet,geometry.groups,displayFrame).length,0);
for(const value of normal.voltage)assert.ok(Number.isFinite(value)&&value>=0&&value<1.2,"Stable membrane dynamics");
for(const edge of normal.mesh.edges)if(edge.source){
  const a=normal.mesh.cells[edge.a],b=normal.mesh.cells[edge.b];
  assert.equal(["RA","LA"].includes(a.chamber),["RA","LA"].includes(b.chamber),"No myocardial AV shortcut");
}
const muscleAdjacency=normal.mesh.cells.map(()=>[]);
for(const edge of normal.mesh.edges)if(edge.source){muscleAdjacency[edge.a].push(edge.b);muscleAdjacency[edge.b].push(edge.a);}
const firstVentricle=normal.mesh.cells.findIndex(c=>c.chamber==="LV"),reachable=new Set([firstVentricle]),pending=[firstVentricle];
for(let cursor=0;cursor<pending.length;cursor++)for(const next of muscleAdjacency[pending[cursor]])if(!reachable.has(next)){reachable.add(next);pending.push(next);}
normal.mesh.cells.forEach((cell,i)=>{if(cell.chamber==="LV"||cell.chamber==="RV")assert.ok(reachable.has(i),"All ventricular tissue must remain connected without the Purkinje network");});

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
const standardBeforeMove=measureStandardTraces(normal),movedChest=measureStandardTraces(normal,{...DEFAULT_ELECTRODES,V2:{longitude:28,latitude:16}});
assert.ok(maxDiff(standardBeforeMove.V2.values,movedChest.V2.values)>.1);
for(const lead of STANDARD_LEADS)if(lead!=="V2")assert.deepEqual(movedChest[lead].values,standardBeforeMove[lead].values,"Moving V2 must not rescale or change unrelated leads");
const referenceWeights=potentialWeights(normal.mesh,electrodePosition(DEFAULT_PLACEMENT.positive));
close(referenceWeights.reduce((sum,v)=>sum+v,0),0,1e-10,"Uniform Vm produces no current-gradient signal");
const uniform=measureForwardTrace({...normal,voltage:new Float32Array(normal.voltage.length).fill(.8),dipole:new Float32Array(normal.dipole.length)},DEFAULT_PLACEMENT);
assert.ok(uniform.values.every(v=>Math.abs(v)<1e-8));
for(const electrode of [DEFAULT_PLACEMENT.positive,DEFAULT_PLACEMENT.negative,{longitude:145,latitude:25}]) {
  const roundtrip=electrodeFromPosition(electrodePosition(electrode));close(roundtrip.longitude,electrode.longitude);close(roundtrip.latitude,electrode.latitude);
}
for(const yaw of [0,45,90,180])for(const longitude of [-100,-45,0,45,100,180]) {
  const point=electrodePosition({longitude,latitude:20}),projected=projectScenePosition(point,yaw);
  if(!projected.front)continue;
  const hit=pickSceneSurface(projected.x,projected.y,yaw);assert.ok(hit,"Visible surface must remain selectable, including tangencies");
  const recovered=electrodePosition(hit);
  assert.ok(Math.hypot(...point.map((v,i)=>v-recovered[i]))<1e-5,"SVG picking and 3-D electrode positions must agree");
}

// An isolated current-carrying edge has the analytical dipole potential.
const small=createHeartMesh();small.cells=small.cells.slice(0,2);small.cells[0].position=[-1,0,0];small.cells[1].position=[1,0,0];small.edges=[{a:0,b:1,conductance:.05,source:true}];
const along=potentialWeights(small,[100,0,0]),perpendicular=potentialWeights(small,[0,100,0]);
close(along[0],FORWARD_SOURCE_GAIN*.05*2/100**2,1e-12);close(along[1],-along[0],1e-12);close(perpendicular[0],0,1e-12);
const far=potentialWeights(small,[200,0,0]);close(far[0],along[0]/4,1e-12);

// Relative waveform guardrails, not a clinical QRS-duration measurement.
const significantSpan=(recording,values)=>{
  const a=recording.activation,segment=[...values].map((v,i)=>({v,t:i*recording.sampleMs})).filter(p=>p.t>=a.ventricularStart-10&&p.t<=a.ventricularEnd+30);
  const peak=Math.max(...segment.map(p=>Math.abs(p.v))),active=segment.filter(p=>Math.abs(p.v)>.1*peak);
  return active.at(-1).t-active[0].t;
};
const baselineTraces=measureStandardTraces(normal);
const baselineV5Span=significantSpan(normal,baselineTraces.V5.values);
const baselineV6Span=significantSpan(normal,baselineTraces.V6.values);
for(const condition of ["av-slow","rbb-block","lbb-block","rv-pacing"]) {
  const result=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,condition});
  assert.equal(result.activation.ventricularCoverage,1,`${condition}: remaining tissue paths conduct`);
  assert.ok(maxDiff(result.voltage,normal.voltage)>.1,"Condition must alter tissue dynamics, not just the label or plotted waveform");
  if(condition==="av-slow")assert.ok(result.activation.ventricularStart>normal.activation.ventricularStart+20);
  if(condition==="rbb-block")assert.ok(landmark(result,"RV Purkinje")>landmark(result,"LV Purkinje")+10);
  if(condition==="lbb-block")assert.ok(landmark(result,"LV Purkinje")>landmark(result,"RV Purkinje")+10);
  if(condition==="rv-pacing")assert.ok(result.activation.ventricularStart<result.activation.atrialStart);
  const twelve=measureStandardTraces(result);
  for(const lead of STANDARD_LEADS)assert.ok(twelve[lead].values.every(Number.isFinite),`${condition}/${lead}: finite measured waveform`);
  if(condition==="rbb-block"||condition==="lbb-block"||condition==="rv-pacing")assert.ok(result.activation.ventricularEnd-result.activation.ventricularStart>normal.activation.ventricularEnd-normal.activation.ventricularStart+40,"Ventricular activation must broaden with bundle interruption or RV pacing");
  // A single projection can be near-isoelectric during part of activation. Require
  // widening in BOTH lateral chest leads, not just a delayed ventricular onset.
  if(condition==="lbb-block") {
    assert.ok(significantSpan(result,twelve.V5.values)>baselineV5Span+40,"LBB interruption must broaden V5, not merely delay a narrow peak");
    assert.ok(significantSpan(result,twelve.V6.values)>baselineV6Span+20,"LBB interruption must also broaden the adjacent V6 waveform");
  }
  if(condition==="rbb-block")assert.ok(twelve.V1.values.some((v,i)=>i*result.sampleMs>result.activation.ventricularStart+80&&i*result.sampleMs<result.activation.ventricularEnd+30&&v>.03),"RBB interruption must produce a delayed right-precordial positive contribution");
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

// Every standard lead uses the same cardiac solution. These are electrical
// identities, including after moving a limb electrode, not visual templates.
for(const electrodes of [DEFAULT_ELECTRODES,{...DEFAULT_ELECTRODES,RA:{longitude:-110,latitude:25}}]) {
  const leads=measureStandardTraces(normal,electrodes);
  assert.equal(Object.keys(leads).length,12);
  for(let i=0;i<normal.samples;i++) {
    close(leads.II.values[i],leads.I.values[i]+leads.III.values[i]);
    close(leads.aVR.values[i],-(leads.I.values[i]+leads.II.values[i])/2);
    close(leads.aVL.values[i],leads.I.values[i]-leads.II.values[i]/2);
    close(leads.aVF.values[i],leads.II.values[i]-leads.I.values[i]/2);
    close(leads.aVR.values[i]+leads.aVL.values[i]+leads.aVF.values[i],0);
    for(const lead of STANDARD_LEADS) assert.ok(Number.isFinite(leads[lead].values[i]));
  }
}
const leads=measureStandardTraces(normal);
for(const lead of STANDARD_LEADS){const full=measureForwardTrace(normal,leadPreset(lead));for(let i=0;i<normal.samples;i++)close(leads[lead].values[i],full.values[i],1e-6);}
const extrema=(values,start,end)=>{
  const segment=values.subarray(Math.max(0,Math.floor(start/normal.sampleMs)),Math.min(values.length,Math.ceil(end/normal.sampleMs)+1));
  return {positive:Math.max(0,...segment),negative:Math.abs(Math.min(0,...segment))};
};
const a=normal.activation,ventricularRecovery=Math.max(...normal.mesh.cells.flatMap((cell,i)=>cell.chamber==="LV"||cell.chamber==="RV"?[normal.recoveryMs[i]]:[]));
const quality=Object.fromEntries(STANDARD_LEADS.map(lead=>[lead,{
  p:extrema(leads[lead].values,a.atrialStart-10,a.ventricularStart-20),
  qrs:extrema(leads[lead].values,a.ventricularStart-10,a.ventricularEnd+30),
  t:extrema(leads[lead].values,a.ventricularEnd+80,ventricularRecovery+50),
}]));
for(const lead of ["I","II","aVF","V4","V5","V6"]) {
  assert.ok(quality[lead].qrs.positive>quality[lead].qrs.negative,`${lead}: dominant R in the reference model`);
  assert.ok(quality[lead].t.positive>quality[lead].t.negative,`${lead}: concordant T in the reference model`);
}
assert.ok(quality.II.p.positive>quality.II.p.negative);
assert.ok(quality.aVR.p.negative>quality.aVR.p.positive);
assert.ok(quality.aVR.qrs.negative>quality.aVR.qrs.positive);
assert.ok(quality.V1.qrs.negative>quality.V1.qrs.positive&&quality.V6.qrs.positive>quality.V6.qrs.negative);
assert.ok(quality.V1.qrs.positive>quality.V1.qrs.negative*.1,"Septal activation must leave a visible initial r, not a pure QS reference waveform");
for(const lead of ["V2","V3"])assert.ok(quality[lead].t.positive>quality[lead].t.negative,"Anterior recovery must not simply copy the dominant negative QRS direction");
assert.ok(quality.V1.qrs.positive/quality.V1.qrs.negative<quality.V4.qrs.positive/quality.V4.qrs.negative);
assert.ok(a.ventricularStart-a.atrialStart>=120&&a.ventricularStart-a.atrialStart<=200,"Reference atrial-to-ventricular activation delay");
assert.ok(a.ventricularEnd-a.ventricularStart>=40&&a.ventricularEnd-a.ventricularStart<=100,"Reference transmural activation spread");
assert.ok(quality.II.p.positive<quality.II.qrs.positive*.35,"P must be smaller than the main ventricular deflection");
// Reference morphology guardrails. These are expectations for this adult-like
// reference configuration, NOT a definition of all normal human ECG variants.
// Polarity alone previously passed despite a cancelled V3 QRS and reversed R progression.
for(const [left,right] of [["V1","V2"],["V2","V3"],["V3","V4"],["V4","V5"]]) {
  assert.ok(quality[right].qrs.positive>quality[left].qrs.positive*1.08,`${left} → ${right}: visible R-wave progression`);
}
assert.ok(quality.V6.qrs.positive<quality.V5.qrs.positive,"Reference R amplitude peaks before V6");
assert.ok(quality.V2.qrs.negative>quality.V2.qrs.positive,"V2 remains S-dominant in the reference configuration");
assert.ok(quality.V3.qrs.positive/quality.V3.qrs.negative>.75&&quality.V3.qrs.positive/quality.V3.qrs.negative<1.8,"V3 has a biphasic transition, not a cancelled/flat QRS");
assert.ok(quality.V3.qrs.positive+quality.V3.qrs.negative>quality.V2.qrs.negative,"Transition lead must retain a substantial peak-to-peak QRS");
for(const lead of ["I","II","V3","V4","V5","V6"]) {
  const ratio=quality[lead].t.positive/quality[lead].qrs.positive;
  assert.ok(ratio>.1&&ratio<.75,`${lead}: T must be visible but not dominate the reference QRS`);
}
const baselineSegment=(lead,start,end)=>leads[lead].values.subarray(Math.ceil(start/normal.sampleMs),Math.floor(end/normal.sampleMs));
for(const lead of ["I","II","V3","V4","V5","V6"]) {
  const st=baselineSegment(lead,a.ventricularEnd+35,a.ventricularEnd+80);
  const tp=baselineSegment(lead,740,820);
  assert.ok(Math.max(...st.map(Math.abs))<.1,"No artificial post-QRS hump in the reference ST segment");
  assert.ok(Math.max(...tp.map(Math.abs))<.015,"Reference beat returns to the TP baseline");
}
// The retained window must show repeated sinus capture, not only a plausible first beat.
const sinus=normal.mesh.sinus,upstrokes=[];
for(let frame=1;frame<normal.samples;frame++) if(normal.voltage[(frame-1)*normal.mesh.cells.length+sinus]<.5&&normal.voltage[frame*normal.mesh.cells.length+sinus]>=.5)upstrokes.push(frame*normal.sampleMs);
assert.ok(upstrokes.length>=3);
for(let i=1;i<upstrokes.length;i++)close(upstrokes[i]-upstrokes[i-1],60000/normal.inputs.rate,normal.sampleMs);
for(const rate of [50,90,110]) {
  const r=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,rate}),twelve=measureStandardTraces(r),a=r.activation;
  assert.equal(a.ventricularCoverage,1);
  const amplitudes=["V1","V2","V3","V4","V5","V6"].map(lead=>{
    const values=twelve[lead].values.subarray(Math.floor((a.ventricularStart-10)/r.sampleMs),Math.ceil((a.ventricularEnd+30)/r.sampleMs));
    return {r:Math.max(...values),s:-Math.min(...values)};
  });
  for(let i=1;i<5;i++)assert.ok(amplitudes[i].r>amplitudes[i-1].r*1.08,`${rate}/min: preserve reference R progression`);
  assert.ok(amplitudes[1].s>amplitudes[1].r&&amplitudes[3].r>amplitudes[3].s,`${rate}/min: retain the precordial transition`);
}
console.log("Forward ECG passed: 12-lead identities; reference R progression, R/S transition, P/QRS/T ratios and baseline; repeated capture; tissue propagation; measured lateral widening; AV/recovery changes; electrode movement and numerical bounds.");
