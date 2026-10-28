import {mkdir,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {DEFAULT_FORWARD_INPUTS,DEFAULT_ISCHEMIA,STANDARD_LEADS,simulateForwardEcg,measureStandardTraces} from '../src/lib/ecg-forward-model.ts';
import {stWindow,measureSt,regionVoltage} from '../src/lib/ecg-ischemia.ts';
import {analyzeForwardRecording,reviewHtml} from './analyze-ecg-forward.mjs';
import {assertIschemiaSources} from './assert-ecg-ischemia.mjs';
const [name='anterior',json=JSON.stringify({ischemia:DEFAULT_ISCHEMIA}),directory='../../reports/ecg-ionic-ischemia-2026-10-29']=process.argv.slice(2);
const inputs={...DEFAULT_FORWARD_INPUTS,...JSON.parse(json)},out=resolve(directory);await mkdir(out,{recursive:true});
let last=-1;const start=performance.now();
const r=simulateForwardEcg(inputs,p=>{if(Math.floor(p/25)>last){last=Math.floor(p/25);console.log(name+': '+p+'%');}},undefined,process.env.ECG_NUMERICAL?JSON.parse(process.env.ECG_NUMERICAL):{});
const traces=measureStandardTraces(r),window=stWindow(r),summary={inputs:r.inputs,numerical:process.env.ECG_NUMERICAL?JSON.parse(process.env.ECG_NUMERICAL):{},sourceChecks:assertIschemiaSources(r,traces),activation:r.activation,window,seconds:(performance.now()-start)/1000,leads:Object.fromEntries(STANDARD_LEADS.map(id=>{
 const m=measureSt(r,traces[id]),qrs=traces[id].values.slice(Math.floor(r.activation.ventricularStart/r.sampleMs),Math.ceil(window.depolarizationEnd/r.sampleMs)+1),qrsPeak=Math.max(...qrs)-m.tp;
 return[id,{...m,qrsPeak,stToR:qrsPeak>0?m.shift/qrsPeak:null}];
}))};
const data={...summary,sampleMs:r.sampleMs,traces:Object.fromEntries(STANDARD_LEADS.map(id=>[id,Array.from(traces[id].values)])),cells:Object.fromEntries(['endo','epi'].map(layer=>[layer,Array.from(regionVoltage(r,'lv-anterior',layer),v=>v*120-85)])),regions:Object.fromEntries([...new Set(r.mesh.cells.filter(c=>c.transmural!==undefined&&!c.bridge).map(c=>c.region))].map(region=>{const indices=r.mesh.cells.flatMap((c,i)=>c.region===region&&!c.bridge?[i]:[]),active=indices.filter(i=>r.activationMs[i]>=0);return [region,{total:indices.length,captured:active.length,last:Math.max(...active.map(i=>r.activationMs[i])),firstRecovery:Math.min(...active.map(i=>r.recoveryMs[i]).filter(t=>t>=0))}];}))};
await writeFile(resolve(out,name+'.json'),JSON.stringify(data,null,2));
try{await writeFile(resolve(out,name+'.html'),reviewHtml(r,analyzeForwardRecording(r),name));}catch(error){console.log('No readable beat: '+error.message);}
console.log(JSON.stringify(summary));
