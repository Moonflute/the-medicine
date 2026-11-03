import assert from "node:assert/strict";
import {execFileSync} from "node:child_process";
import {stripTypeScriptTypes} from "node:module";
import {Session} from "node:inspector";
import {cpus} from "node:os";
import {mkdir,writeFile} from "node:fs/promises";
import {dirname,resolve} from "node:path";
import * as current from "../src/lib/ecg-forward-model.ts";

// Load the preceding implementation from Git into memory, never overwrite source
// files or relax the numerical time step/mesh to manufacture a speed-up.
const args=process.argv.slice(2),full=args.includes("--full"),profile=args.includes("--profile");
const referenceCommit="72bbc2c4cdc09f13bf4fe6f746d1897bc3430bfc";
const cases=[{name:"anterior-70",inputs:{...current.DEFAULT_FORWARD_INPUTS,ischemia:current.DEFAULT_ISCHEMIA}}];
if(full)cases.unshift({name:"normal",inputs:current.DEFAULT_FORWARD_INPUTS});
if(full)cases.push({name:"potassium-7",inputs:{...current.DEFAULT_FORWARD_INPUTS,condition:"hyperkalemia",electrophysiology:{potassium:7}}});
const selected=args.indexOf("--case");if(selected>=0){const name=args[selected+1];assert.ok(cases.some(test=>test.name===name),"Unknown benchmark case");for(let i=cases.length-1;i>=0;i--)if(cases[i].name!==name)cases.splice(i,1);}
const numerical=full?{}:{warmupCycles:0,durationMs:800};
const result={node:process.version,cpu:cpus()[0]?.model,referenceCommit,numerical,cases:[]};
const delta=(a,b)=>{assert.equal(a.length,b.length);let max=0,sum=0;for(let i=0;i<a.length;i++){assert.ok(Number.isFinite(a[i])&&Number.isFinite(b[i]));const d=a[i]-b[i];max=Math.max(max,Math.abs(d));sum+=d*d;}return{max,rmse:Math.sqrt(sum/a.length)};};
const run=(model,test,label)=>{let previous=-1;const start=performance.now();const recording=model.simulateForwardEcg(test.inputs,p=>{const bucket=Math.floor(p/25);if(bucket!==previous){previous=bucket;console.log(`${test.name} ${label}: ${bucket*25}%`);}},undefined,numerical);return{recording,ms:performance.now()-start};};
if(profile){
  const session=new Session();session.connect();
  const post=(method,params={})=>new Promise((resolve,reject)=>session.post(method,params,(error,value)=>error?reject(error):resolve(value)));
  await post("Profiler.enable");await post("Profiler.start");
  const runResult=run(current,cases[0],"profile");
  const {profile:data}=await post("Profiler.stop");session.disconnect();
  const hits=new Map();for(const id of data.samples??[])hits.set(id,(hits.get(id)??0)+1);
  result.profile={ms:runResult.ms,top:data.nodes.map(n=>({function:n.callFrame.functionName,line:n.callFrame.lineNumber+1,samples:hits.get(n.id)??0})).sort((a,b)=>b.samples-a.samples).slice(0,12)};
}else{
  const source=execFileSync("git",["show",`${referenceCommit}:apps/medicine-web/src/lib/ecg-forward-model.ts`],{encoding:"utf8",maxBuffer:1024*1024});
  const baseline=await import("data:text/javascript;base64,"+Buffer.from(stripTypeScriptTypes(source)).toString("base64"));
  for(const test of cases){
    const before=run(baseline,test,"before"),after=run(current,test,"after");
    assert.deepEqual(after.recording.mesh,before.recording.mesh,"The physiological mesh and coupling are unchanged");
    assert.deepEqual(after.recording.activation,before.recording.activation);
    assert.deepEqual(after.recording.events,before.recording.events);
    assert.deepEqual(after.recording.stimuli,before.recording.stimuli);
    const voltage=delta(before.recording.voltage,after.recording.voltage);
    const activation=delta(before.recording.activationMs,after.recording.activationMs),recovery=delta(before.recording.recoveryMs,after.recording.recoveryMs);
    assert.ok(voltage.max<2e-6,"No meaningful Vm drift from the preceding equations");
    assert.equal(activation.max,0);assert.equal(recovery.max,0);
    const a=baseline.measureStandardTraces(before.recording),b=current.measureStandardTraces(after.recording);
    const leads=Object.fromEntries(current.STANDARD_LEADS.map(id=>{const difference=delta(a[id].values,b[id].values);assert.ok(difference.max<.00005,`${id}: unchanged ECG output`);return[id,difference];}));
    const entry={name:test.name,beforeMs:before.ms,afterMs:after.ms,speedup:before.ms/after.ms,voltage,activation,recovery,leads};
    result.cases.push(entry);console.log(JSON.stringify(entry));
  }
}
const output=args.indexOf("--output");if(output>=0){const file=resolve(args[output+1]);await mkdir(dirname(file),{recursive:true});await writeFile(file,JSON.stringify(result,null,2));}
console.log(JSON.stringify(result));
