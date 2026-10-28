import assert from "node:assert/strict";
import {writeFile} from "node:fs/promises";
import {resolve} from "node:path";
import {simulateForwardEcg,measureStandardTraces,STANDARD_LEADS} from "../src/lib/ecg-forward-model.ts";
import {pathologyMetrics} from "./ecg-pathology-metrics.mjs";

// Compare the same tissue at two time steps, without shifting or filtering ECG.
const inputs={rate:70,recovery:100,condition:"hyperkalemia",electrophysiology:{potassium:5.4}};
const recordings=[.05,.025].map(timeStepMs=>simulateForwardEcg(inputs,undefined,undefined,{durationMs:850,timeStepMs}));
const metrics=recordings.map(pathologyMetrics),traces=recordings.map(r=>measureStandardTraces(r));
const cells=Object.keys(metrics[0].cellular).map(region=>{
  const a=metrics[0].cellular[region],b=metrics[1].cellular[region];
  assert.notEqual(a.apd90,null,`${region}: coarse APD`);
  assert.notEqual(b.apd90,null,`${region}: fine APD`);
  const activation=Math.abs(a.activation-b.activation),apd90=Math.abs(a.apd90-b.apd90);
  assert.ok(activation<8&&apd90<12,`${region}: timing convergence`);
  return{region,activationDifferenceMs:activation,apd90DifferenceMs:apd90};
});
const leads=STANDARD_LEADS.map(lead=>{
  const a=traces[0][lead].values,b=traces[1][lead].values;
  const rmse=Math.sqrt(a.reduce((sum,v,i)=>sum+(v-b[i])**2,0)/a.length);
  const range=Math.max(...b)-Math.min(...b),normalized=rmse/range;
  assert.ok(normalized<.15,`${lead}: time-step sensitivity`);
  return{lead,rmseAu:rmse,normalizedRmse:normalized};
});
assert.equal(metrics[0].coverage,1);assert.equal(metrics[1].coverage,1);
assert.equal(metrics[0].events.his.length,metrics[1].events.his.length);
const result={checks:"PASS: 0.05 vs 0.025 ms; post-warmup capture, activation, APD90, unaligned 12-lead error",cells,leads};
if(process.argv[2])await writeFile(resolve(process.argv[2]),JSON.stringify(result,null,2));
console.log(JSON.stringify(result));
