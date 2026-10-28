import assert from 'node:assert/strict';
import {DEFAULT_ELECTRODES,STANDARD_LEADS,measureStandardTraces,potentialWeights,electrodePosition} from '../src/lib/ecg-forward-model.ts';
import {stWindow,measureSt} from '../src/lib/ecg-ischemia.ts';

/** Independent source checks: no expected ST height is used here. */
export function assertIschemiaSources(r,traces=measureStandardTraces(r)) {
  assert.ok(r.voltage.every(Number.isFinite));
  for(let frame=0;frame<r.samples;frame++) {
    assert.ok(STANDARD_LEADS.every(id=>Number.isFinite(traces[id].values[frame])));
    assert.ok(Math.abs(traces.II.values[frame]-traces.I.values[frame]-traces.III.values[frame])<1e-5,'Einthoven identity');
    assert.ok(Math.abs(traces.aVR.values[frame]+traces.aVL.values[frame]+traces.aVF.values[frame])<1e-5,'Augmented identity');
  }
  const weights=Object.fromEntries(['V4','RA','LA','LL'].map(id=>[id,potentialWeights(r.mesh,electrodePosition(DEFAULT_ELECTRODES[id]))]));
  for(const time of [60,250,340,440,600]) {
    const frame=Math.round(time/r.sampleMs);if(frame>=r.samples)continue;
    let raw=0;for(let i=0;i<r.mesh.cells.length;i++)raw+=r.voltage[frame*r.mesh.cells.length+i]*(weights.V4[i]-(weights.RA[i]+weights.LA[i]+weights.LL[i])/3);
    assert.ok(Math.abs(raw-traces.V4.values[frame])<1e-6,'V4 is independently reconstructed from Vm, with no ST addition');
  }
  const relabeled=measureStandardTraces({...r,inputs:{...r.inputs,ischemia:undefined}});
  assert.deepEqual(relabeled.V4.values,traces.V4.values,'Preset labels cannot change the recovered waveform');
  const zero=measureStandardTraces({...r,voltage:new Float32Array(r.voltage.length),dipole:new Float32Array(r.dipole.length)});
  assert.ok(zero.V4.values.every(x=>x===0),'No source, no waveform');
  const shifted=measureStandardTraces({...r,voltage:Float32Array.from(r.voltage,x=>x+.2)});
  assert.ok(shifted.V4.values.every((x,i)=>Math.abs(x-traces.V4.values[i])<3e-6),'Uniform Vm offset creates no field');
  const before=traces.V4.values.slice(),window=stWindow(r);measureSt(r,traces.V4);
  assert.deepEqual(traces.V4.values,before,'Measurement is read-only');
  if(r.inputs.ischemia&&window.valid) {
    assert.ok(window.end<window.recoveryStart,'ST is before remote myocardial recovery');
    const index=r.mesh.cells.findIndex(c=>!c.bridge&&!c.scar&&!c.injury&&(c.chamber==='LV'||c.chamber==='RV'));
    if(index>=0) {
      const early=r.recoveryMs.slice();early[index]=window.start+5;
      assert.equal(stWindow({...r,recoveryMs:early}).valid,false,'Remote recovery inside ST invalidates the measurement');
    }
  }
  return {finite:true,leadIdentities:true,independentV4:true,presetIndependent:true,zeroSource:true,gaugeInvariant:true,measurementReadOnly:true};
}
