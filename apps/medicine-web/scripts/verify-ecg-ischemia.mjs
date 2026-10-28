import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {DEFAULT_FORWARD_INPUTS,MYOCARDIAL_REGIONS,STANDARD_LEADS,createHeartMesh,simulateForwardEcg,measureStandardTraces,normalizeForwardInputs,referenceForwardInputs} from '../src/lib/ecg-forward-model.ts';
import {measureSt,stWindow,regionVoltage} from '../src/lib/ecg-ischemia.ts';
import {assertIschemiaSources} from './assert-ecg-ischemia.mjs';

const args=process.argv.slice(2),output=args.includes('--out')?resolve(args[args.indexOf('--out')+1]):null;
const healthyInputs={...DEFAULT_FORWARD_INPUTS,membrane:'human-ischemia'};
const lesion=(region,depth=100,severity=70,mode='acute')=>({...healthyInputs,ischemia:{regions:[region],mode,depth,severity}});
const healthyMesh=createHeartMesh(healthyInputs),anteriorInputs=lesion('lv-anterior');
assert.equal(referenceForwardInputs(anteriorInputs).membrane,'human-ischemia','Matched reference retains the ionic substrate');
for(const inputs of [lesion('lv-anterior',0),lesion('lv-anterior',100,0)]) {
  assert.deepEqual(createHeartMesh(inputs),healthyMesh,'Zero challenge uses exactly the healthy mesh and cell coefficients');
}
const injured=createHeartMesh(anteriorInputs);
assert.deepEqual(injured.cells.map(c=>c.position),healthyMesh.cells.map(c=>c.position),'No lesion-specific geometry');
assert.ok(injured.cells.some(c=>c.bridge&&c.transmural>.8&&c.injury>0),'Epicardial border currents are included');
assert.ok(injured.cells.filter(c=>c.chamber==='node').every(c=>!c.injury),'Purkinje is preserved in this experiment');
for(const [i,c] of injured.cells.entries()) {
  assert.equal(c.tauClose,healthyMesh.cells[i].tauClose,'No prescribed ischemic APD');
  assert.equal(c.amplitude,healthyMesh.cells[i].amplitude,'No prescribed ischemic AP amplitude');
  assert.equal(c.restingPotential,healthyMesh.cells[i].restingPotential,'Resting Vm is calculated from local ionic conditions');
}
const scarMesh=createHeartMesh(lesion('lv-anterior',100,70,'scar'));
assert.ok(scarMesh.cells.some(c=>c.scar));
assert.ok(scarMesh.edges.every(e=>!scarMesh.cells[e.a].scar&&!scarMesh.cells[e.b].scar||e.conductance===0),'Scar is disconnected, not an acute ST preset');
assert.deepEqual(normalizeForwardInputs({...DEFAULT_FORWARD_INPUTS,ischemia:{regions:['unknown'],severity:NaN,depth:Infinity}}),DEFAULT_FORWARD_INPUTS);
const model=await readFile(new URL('../src/lib/ecg-forward-model.ts',import.meta.url),'utf8');
assert.ok(!/ischemia|severity|\.mode/.test(model.slice(model.indexOf('export function potentialWeights'))),'Electrode recovery never branches on lesion labels');
console.log('PASS: matched substrate, zero challenge, all-wall borders, preserved Purkinje, no AP prescription, scar connectivity.');

if(!args.includes('--structural-only')) {
  if(output)await mkdir(output,{recursive:true});
  const cases=[['healthy',healthyInputs],['anterior',anteriorInputs],['lateral',lesion('lv-lateral')],['subendocardial-moderate',lesion('lv-anterior',50,35)],['transmural-moderate',lesion('lv-anterior',100,35)]];
  if(args.includes('--all'))for(const region of MYOCARDIAL_REGIONS.filter(r=>!['lv-anterior','lv-lateral'].includes(r)))cases.push([region,lesion(region)]);
  if(args.includes('--all'))cases.push(['scar',lesion('lv-anterior',100,70,'scar')],['strong-partial',lesion('lv-anterior',50,70)]);
  const reports=[];let healthy;
  for(const [name,inputs] of cases) {
    const recording=simulateForwardEcg(inputs,undefined,undefined,{durationMs:1000}),traces=measureStandardTraces(recording);
    const checks=assertIschemiaSources(recording,traces),window=stWindow(recording);
    const leads=Object.fromEntries(STANDARD_LEADS.map(id=>[id,measureSt(recording,traces[id])]));
    if(name==='healthy')healthy=recording;
    if(name==='anterior') {
      assert.ok(window.valid&&leads.V3.shift>0&&leads.V4.shift>0,'Anterior injury gives upward ST displacement, not a target amplitude');
      const ep=regionVoltage(recording,'lv-anterior','epi'),normal=regionVoltage(healthy,'lv-anterior','epi');
      assert.ok(ep[30]>normal[30]&&ep[170]<normal[170],'Resting and plateau changes exist in the underlying tissue');
    }
    if(name==='lateral')assert.ok(window.valid&&leads.V5.shift>0&&leads.V6.shift>0&&leads.V1.shift<0,'Lateral and opposing anterior leads differ');
    if(name==='subendocardial-moderate')assert.ok(window.valid&&leads.V4.shift<0,'Moderate partial-wall condition produces depression');
    if(name==='scar')assert.ok(recording.mesh.cells.every((c,i)=>!c.scar||recording.activationMs[i]===-1));
    // Strong partial-wall injury may have delayed/failed activation. Do not
    // demand a clean ST interval, full capture, or a diagnostic label.
    reports.push({name,inputs:recording.inputs,window,leads,checks});
    console.log(name+': V4 ST-TP='+leads.V4.shift.toFixed(4)+', interpretable='+leads.V4.valid);
  }
  if(output)await writeFile(resolve(output,'verification.json'),JSON.stringify(reports,null,2));
}
