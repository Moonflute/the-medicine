import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {stripTypeScriptTypes} from "node:module";
import {runInNewContext} from "node:vm";
import {createEcgRecordingCache} from "../src/lib/ecg-recording-cache.ts";
import {DEFAULT_FORWARD_INPUTS,normalizeForwardInputs,referenceForwardInputs} from "../src/lib/ecg-forward-model.ts";

const recording=(samples=1)=>({inputs:DEFAULT_FORWARD_INPUTS,voltage:new Float32Array(samples),dipole:new Float32Array(samples*3),activationMs:new Float32Array(1),recoveryMs:new Float32Array(1),mesh:{cells:[],edges:[]},events:[],stimuli:[]});
const a=recording(),b=recording(),c=recording(),cache=createEcgRecordingCache(1000,2);
assert.equal(cache.get("missing"),undefined);
cache.set("a",a);cache.set("b",b);assert.equal(cache.get("a"),a,"No large buffer copy on reuse");
cache.set("c",c);assert.equal(cache.get("b"),undefined,"Least-recently-used entry is evicted");
assert.equal(cache.get("a"),a);assert.equal(cache.get("c"),c);assert.equal(cache.size,2);
const bytes=cache.bytes;cache.set("a",a);assert.equal(cache.bytes,bytes,"Replacement does not double-count memory");
const limited=createEcgRecordingCache(50,10);limited.set("a",a);limited.set("b",b);limited.set("c",c);
assert.ok(limited.bytes<=50);assert.equal(limited.size,2);assert.equal(limited.get("a"),undefined);
assert.equal(limited.set("large",recording(1000)),false,"Oversized rhythm does not evict useful small recordings");
assert.equal(limited.size,2);
const detached=recording();cache.set("detached",detached);structuredClone(detached.voltage.buffer,{transfer:[detached.voltage.buffer]});
assert.equal(cache.get("detached"),undefined,"Never serve a transferred/detached buffer");
const key=inputs=>JSON.stringify(normalizeForwardInputs(inputs));
assert.equal(key(DEFAULT_FORWARD_INPUTS),key({condition:"normal",recovery:100,rate:70}),"Canonical keys ignore property order");
const lesion={...DEFAULT_FORWARD_INPUTS,ischemia:{regions:["lv-anterior"],mode:"acute",severity:70,depth:100}};
assert.notEqual(key(lesion),key({...lesion,ischemia:{...lesion.ischemia,severity:35}}));
assert.equal(key(referenceForwardInputs(lesion)),key(referenceForwardInputs({...lesion,ischemia:{...lesion.ischemia,severity:35}})),"Severity reuses only the identical healthy reference");
assert.notEqual(key(referenceForwardInputs(lesion)),key(DEFAULT_FORWARD_INPUTS),"Do not mix ionic and reduced-model references");
// Exercise the real Worker message/transfer protocol with a cheap solver double.
// structuredClone detaches the sender's buffers just as postMessage does.
const workerSource=stripTypeScriptTypes(readFileSync(new URL("../src/workers/ecg-forward.worker.ts",import.meta.url),"utf8").replace(/^import .*;\r?\n/,""));
function runWorker(needsReference,needsRecording,fail=false){
 const sent=[],calls=[],self={postMessage:(message,options={})=>sent.push(structuredClone(message,{transfer:options.transfer??[]}))};
 runInNewContext(workerSource,{self,referenceForwardInputs,simulateForwardEcg:(inputs,progress)=>{if(fail)throw Error("solver failure");calls.push(inputs);progress(50);return {...recording(),inputs};}});
 self.onmessage({data:{inputs:lesion,needsReference,needsRecording}});return{sent,calls};
}
const both=runWorker(true,true);
assert.equal(both.calls.length,2);assert.deepEqual(both.sent.map(m=>m.type),["progress","reference","progress","result"]);
assert.ok(both.sent[1].recording.voltage.byteLength>0);assert.ok(both.sent[3].recording.voltage.byteLength>0);
assert.equal(both.sent[1].recording.inputs.ischemia,undefined);
assert.deepEqual(both.sent[3].recording.inputs.ischemia,lesion.ischemia);
const referenceOnly=runWorker(true,false);assert.equal(referenceOnly.calls.length,1);assert.equal(referenceOnly.sent.at(-1).recording,undefined);
const lesionOnly=runWorker(false,true);assert.equal(lesionOnly.calls.length,1);assert.equal(lesionOnly.sent.some(m=>m.type==="reference"),false);
assert.equal(runWorker(false,true,true).sent[0].type,"error");
console.log("PASS: bounded LRU, byte budget, identity reuse, canonical matched references, early reference transfer, partial cache reuse, Worker errors.");
