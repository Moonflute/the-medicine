import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { simulateForwardEcg, measureStandardTraces, DEFAULT_FORWARD_INPUTS } from "../src/lib/ecg-forward-model.ts";
import { pathologyMetrics } from "./ecg-pathology-metrics.mjs";

// Retain raw computed traces with the inputs/metrics, never normalize a lead.
const [name="human-reference",json='{"condition":"hyperkalemia","electrophysiology":{"potassium":5.4}}',directory="../../reports/ecg-development-2026-10-29"]=process.argv.slice(2);
const inputs={...DEFAULT_FORWARD_INPUTS,...JSON.parse(json)},start=performance.now();
let last=-1;
const recording=simulateForwardEcg(inputs,p=>{if(Math.floor(p/25)>last){last=Math.floor(p/25);console.log(`${name}: ${p}%`);}},undefined,process.env.ECG_NUMERICAL?JSON.parse(process.env.ECG_NUMERICAL):{});
const metrics=pathologyMetrics(recording),traces=measureStandardTraces(recording),out=resolve(directory);
await mkdir(out,{recursive:true});
await writeFile(resolve(out,name+".json"),JSON.stringify({metrics,sampleMs:recording.sampleMs,traces:Object.fromEntries(Object.entries(traces).map(([lead,trace])=>[lead,Array.from(trace.values)]))},null,2));
console.log(JSON.stringify({name,seconds:(performance.now()-start)/1000,coverage:metrics.coverage,events:metrics.events,bursts:metrics.bursts,cellular:metrics.cellular,II:metrics.leads.II}));
