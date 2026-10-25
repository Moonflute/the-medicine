import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {DEFAULT_FORWARD_INPUTS,DEFAULT_ELECTRODES,MYOCARDIAL_REGIONS,STANDARD_LEADS,simulateForwardEcg,measureStandardTraces,potentialWeights,electrodePosition,normalizeForwardInputs} from '../src/lib/ecg-forward-model.ts';
import {measureSt,stWindow,regionVoltage} from '../src/lib/ecg-ischemia.ts';
import {analyzeForwardRecording,reviewHtml} from './analyze-ecg-forward.mjs';

const args=process.argv.slice(2),output=args.includes('--out')?resolve(args[args.indexOf('--out')+1]):null;
if(output)await mkdir(output,{recursive:true});
const base=simulateForwardEcg(DEFAULT_FORWARD_INPUTS),baseTraces=measureStandardTraces(base),reports=[];
const lesion=(regions,mode='acute',depth=100,severity=70)=>({regions,mode,depth,severity});
const summarize=(recording,traces)=>({activation:recording.activation,window:stWindow(recording),leads:Object.fromEntries(STANDARD_LEADS.map(id=>[id,measureSt(recording,traces[id])]))});
const scenarios=MYOCARDIAL_REGIONS.map(region=>[region,lesion([region])]);
scenarios.push(['subendocardial',lesion(['lv-anterior'],'acute',50)],['scar',lesion(['lv-anterior'],'scar')],['strong',lesion(['lv-anterior'],'acute',100,100)],['multiregion',lesion(['lv-septal','lv-anterior'])]);
for(const [name,ischemia] of scenarios) {
  const r=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,ischemia}),traces=measureStandardTraces(r);
  assert.ok(r.voltage.every(Number.isFinite)&&STANDARD_LEADS.every(id=>traces[id].values.every(Number.isFinite)),`${name}: finite`);
  for(let i=0;i<r.samples;i++) {
    assert.ok(Math.abs(traces.II.values[i]-traces.I.values[i]-traces.III.values[i])<1e-5,`${name}: Einthoven`);
    assert.ok(Math.abs(traces.aVR.values[i]+traces.aVL.values[i]+traces.aVF.values[i])<1e-5,`${name}: augmented identity`);
  }
  // Independently reconstruct phi(V4)-mean(phi(RA),phi(LA),phi(LL)) from Vm.
  const weights=Object.fromEntries(['V4','RA','LA','LL'].map(id=>[id,potentialWeights(r.mesh,electrodePosition(DEFAULT_ELECTRODES[id]))]));
  for(const frame of [20,180,210,310]) {
    let measured=0;for(let i=0;i<r.mesh.cells.length;i++)measured+=r.voltage[frame*r.mesh.cells.length+i]*(weights.V4[i]-(weights.RA[i]+weights.LA[i]+weights.LL[i])/3);
    assert.ok(Math.abs(measured-traces.V4.values[frame])<1e-6,'No lead-specific ST addition');
  }
  // Relabeling the recording cannot alter output; only its tissue solution can.
  const relabeled=measureStandardTraces({...r,inputs:DEFAULT_FORWARD_INPUTS});
  assert.deepEqual(relabeled.V4.values,traces.V4.values);
  const zero=measureStandardTraces({...r,voltage:new Float32Array(r.voltage.length),dipole:new Float32Array(r.dipole.length)});
  assert.ok(zero.V4.values.every(value=>value===0),'No ECG shape survives without tissue potentials');
  const shifted=measureStandardTraces({...r,voltage:Float32Array.from(r.voltage,value=>value+.2)});
  assert.ok(shifted.V4.values.every((value,i)=>Math.abs(value-traces.V4.values[i])<2e-6),'Uniform Vm gauge does not create a field');
  const result=summarize(r,traces);reports.push({name,...result});
  if(name==='lv-anterior') {
    assert.ok(result.leads.V4.valid&&result.leads.V4.shift>.04,'Anterior transmural injury produces elevation');
    assert.ok(Math.abs(result.leads.V4.tp)>.001,'Keep raw diastolic potential');
    const epi=regionVoltage(r,'lv-anterior','epi'),healthy=regionVoltage(base,'lv-anterior','epi');
    assert.ok(epi[30]>healthy[30]+.03&&epi[200]<healthy[200]-.1,'Rest and plateau change in tissue');
  }
  if(name==='subendocardial')assert.ok(result.leads.V4.valid&&result.leads.V4.shift<-.03,'Subendocardial source reverses shift');
  if(name==='lv-lateral')assert.ok(result.leads.V5.shift>0&&result.leads.V1.shift<0,'Lateral injury and opposing lead');
  if(name==='scar') {
    const dead=r.mesh.cells.flatMap((cell,i)=>cell.scar?[i]:[]);assert.ok(dead.length>0);
    assert.ok(r.mesh.edges.every(edge=>!r.mesh.cells[edge.a].scar&&!r.mesh.cells[edge.b].scar||edge.conductance===0));
    assert.ok(dead.every(i=>r.activationMs[i]===-1));
    assert.ok(Math.abs(result.leads.V4.shift)<.03,'Scar is not a forced acute ST elevation');
  }
  if(name==='strong')assert.equal(result.leads.V4.valid,false,'Do not label merged/delayed activation as clean ST');
  if(output&&['lv-anterior','subendocardial','scar','multiregion'].includes(name))await writeFile(resolve(output,`${name}.html`),reviewHtml(r,analyzeForwardRecording(r),name));
  console.log(`${name}: V4 ST-TP=${result.leads.V4.shift.toFixed(4)}, valid=${result.leads.V4.valid}, coverage=${r.activation.ventricularCoverage.toFixed(3)}`);
}
for(const ischemia of [lesion(['lv-anterior'],'acute',100,0),lesion(['lv-anterior'],'acute',0)])assert.deepEqual(simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,ischemia}).voltage,base.voltage,'Zero injury exactly restores baseline');
const noCapture=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,condition:'rv-pacing',ischemia:lesion(['rv-apical'],'scar')});
assert.equal(noCapture.activation.ventricularCoverage,0,'Do not pace excised scar cells');assert.equal(stWindow(noCapture).valid,false);
const refined=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,ischemia:lesion(['lv-anterior'])},undefined,{atrialLayers:49,ventricularLayers:24});
const refinedSt=measureSt(refined,measureStandardTraces(refined).V4);
assert.ok(Math.abs(refinedSt.shift-reports.find(row=>row.name==='lv-anterior').leads.V4.shift)<.025,'ST stable under further mesh refinement');
assert.deepEqual(normalizeForwardInputs({...DEFAULT_FORWARD_INPUTS,ischemia:{regions:['unknown'],severity:NaN,depth:Infinity}}),DEFAULT_FORWARD_INPUTS);
const before=baseTraces.V4.values.slice();measureSt(base,baseTraces.V4);assert.deepEqual(before,baseTraces.V4.values,'Measurement never edits the trace');
const model=await readFile(new URL('../src/lib/ecg-forward-model.ts',import.meta.url),'utf8');
assert.ok(!/ischemia|severity|\.mode/.test(model.slice(model.indexOf('export function potentialWeights'))),'Electrode recovery never branches on a lesion preset');
if(output)await writeFile(resolve(output,'results.json'),JSON.stringify({baseline:summarize(base,baseTraces),scenarios:reports,refinedAnteriorV4:refinedSt},null,2));
console.log('Ischemia: equation-driven sources, raw TP, region/depth, scar, zero controls, gauge and lead identities, refinement passed.');
