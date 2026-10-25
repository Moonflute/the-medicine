import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DEFAULT_FORWARD_INPUTS,createHeartMesh,simulateForwardEcg,measureStandardTraces,normalizeForwardInputs} from '../src/lib/ecg-forward-model.ts';
import {analyzeForwardRecording} from './analyze-ecg-forward.mjs';
import {anatomyCurrents,createAnatomyLayout} from '../src/lib/ecg-forward-anatomy.ts';

const normal=simulateForwardEcg(DEFAULT_FORWARD_INPUTS),report=analyzeForwardRecording(normal);
const atrial=normal.mesh.cells.flatMap((c,i)=>['RA','LA'].includes(c.chamber)?[normal.activationMs[i]]:[]);
assert.ok(Math.max(...atrial)-Math.min(...atrial)>=75&&Math.max(...atrial)-Math.min(...atrial)<=115,'Reference atrial spread is not an artificially brief pulse');
assert.ok(report.leads.II.sAfterR<-.02,'A late superior/basal source leaves a terminal s in the reference II');
assert.ok(report.leads.V4.peaks.length===1,'Reference V4 must not have a separate artificial anterior peak');
const fine=simulateForwardEcg(DEFAULT_FORWARD_INPUTS,undefined,{atrialLayers:49,ventricularLayers:24}),fineReport=analyzeForwardRecording(fine);
for(const lead of ['II','V1','V2','V4','V5','V6']) {
  const peak=Math.max(report.leads[lead].qrs.max,-report.leads[lead].qrs.min),other=Math.max(fineReport.leads[lead].qrs.max,-fineReport.leads[lead].qrs.min);
  assert.ok(Math.abs(peak-other)/peak<.18,`${lead}: refinement must not change QRS amplitude by more than 18%`);
}
assert.ok(Math.abs(fineReport.leads.II.p.max/report.leads.II.p.max-1)<.18,'P amplitude stable under further grid refinement');
assert.ok(Math.abs(fine.activation.ventricularEnd-normal.activation.ventricularEnd)<12,'Activation converges under further grid refinement');

// Future regional-ischemia work must change tissue, not add a lead-specific ST curve.
const material={region:'lv-anterior',from:.55,to:1,restingPotential:.08,amplitude:.82,excitability:.85,recoveryScale:.8,couplingScale:.75};
const normalized=normalizeForwardInputs({...DEFAULT_FORWARD_INPUTS,tissue:[material]});
const mesh=createHeartMesh(normalized),selected=mesh.cells.filter(c=>c.region===material.region&&!c.bridge&&c.transmural>=.55);
assert.ok(selected.length>0&&selected.every(c=>c.restingPotential===.08&&c.amplitude===.82));
assert.ok(mesh.cells.filter(c=>c.region==='lv-lateral').every(c=>c.restingPotential===undefined),'Do not change unrelated tissue');
assert.ok(normal.mesh.cells.every(c=>c.restingPotential===undefined),'Baseline mesh is immutable');
const changed=simulateForwardEcg(normalized),changedTraces=measureStandardTraces(changed),baselineTraces=measureStandardTraces(normal);
assert.ok(changed.voltage.every(Number.isFinite));
assert.ok(changedTraces.V4.values.some((value,i)=>Math.abs(value-baselineTraces.V4.values[i])>.01));
assert.ok(Math.abs(changedTraces.V4.values[30]-baselineTraces.V4.values[30])>.001,'Raw diastolic potential must survive; no hidden per-lead baseline subtraction');
for(let i=0;i<changed.samples;i++)assert.ok(Math.abs(changedTraces.II.values[i]-changedTraces.I.values[i]-changedTraces.III.values[i])<1e-5,'Regional material preserves lead identities');

const layout=createAnatomyLayout(normal.mesh),time=normal.activation.ventricularStart+30;
const currents=anatomyCurrents(normal,layout,time),reversed=anatomyCurrents({...normal,voltage:Float32Array.from(normal.voltage,v=>-v)},layout,time);
for(const current of currents){const reverse=reversed.find(item=>item.key===current.key);assert.ok(reverse);assert.ok(Math.abs(current.dx+reverse.dx)<1e-7&&Math.abs(current.dy+reverse.dy)<1e-7,'Arrows reverse when actual current reverses');}
assert.equal(anatomyCurrents(normal,layout,30).length,0,'No resting arrows made visible by automatic renormalization');
const trace=await readFile(new URL('../src/components/ecg-forward-trace.tsx',import.meta.url),'utf8');
assert.ok(trace.includes('data-ecg-reveal')&&trace.includes('data-ecg-writing-tip'));
assert.ok(!trace.includes('<line x1={x(timeMs)}'),'No moving vertical cursor over a pre-drawn signal');
for(const file of ['../src/components/ecg-forward-scene.tsx','../src/components/ecg-forward-workspace.tsx','../src/lib/ecg-forward-display.ts'])assert.ok(!/Bachmann/i.test(await readFile(new URL(file,import.meta.url),'utf8')),'Omit the removed structure and its name');
console.log(JSON.stringify({cells:normal.mesh.cells.length,atrialSpread:Math.max(...atrial)-Math.min(...atrial),ventricularSpread:normal.activation.ventricularEnd-normal.activation.ventricularStart,leadII:report.leads.II,refinedLeadII:fineReport.leads.II,visibleCurrents:currents.length,regionalMaterial:'equations + raw DC + lead identities passed'},null,2));
