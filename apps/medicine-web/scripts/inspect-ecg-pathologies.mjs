import { simulateForwardEcg, measureStandardTraces } from "../src/lib/ecg-forward-model.ts";
import { pathologyMetrics } from "./ecg-pathology-metrics.mjs";

const mode=process.argv[2]??"normal";
const inputs={rate:mode==="mobitz1"?90:70,condition:mode,recovery:100,...JSON.parse(process.env.ECG_INPUTS??process.argv[3]??"{}")};
console.time("simulation");const r=simulateForwardEcg(inputs,undefined,undefined,process.env.ECG_FAST?{warmupCycles:0,durationMs:850}:{});console.timeEnd("simulation");
if(process.env.ECG_METRICS){console.log(JSON.stringify(pathologyMetrics(r)));process.exit(0);}
const events=Object.fromEntries(r.mesh.landmarks.filter(l=>["SA node","AV node","His"].includes(l.label)).map(l=>[l.label,r.events.filter(e=>e.cell===l.index).map(e=>Math.round(e.time))]));
const regions=Object.fromEntries([...new Set(r.mesh.cells.map(c=>c.region))].filter(id=>id!=="conduction").map(id=>{const indices=r.mesh.cells.flatMap((c,i)=>c.region===id?[i]:[]),onsets=indices.map(i=>r.activationMs[i]).filter(t=>t>=0);return [id,{active:onsets.length,total:indices.length,start:Math.min(...onsets),end:Math.max(...onsets)}];}));
console.log(JSON.stringify({inputs,events,regions}));
if(process.env.ECG_DEBUG)console.log(JSON.stringify(r.mesh.landmarks.concat([{label:"LA first",index:r.mesh.cells.findIndex(c=>c.region==="la-wall")},{label:"RA last",index:r.mesh.cells.findIndex(c=>c.region==="ra-wall"&&c.longitudinal>.62)}]).map(l=>{const v=Array.from({length:r.samples},(_,f)=>r.voltage[f*r.mesh.cells.length+l.index]);return{name:l.label,min:Math.min(...v),max:Math.max(...v),first:v.filter((_,i)=>i%25===0).slice(0,16)};})));
const traces=measureStandardTraces(r);
console.log(JSON.stringify(Object.fromEntries(Object.entries(traces).map(([id,trace])=>[id,{min:Math.min(...trace.values),max:Math.max(...trace.values)}]))));
