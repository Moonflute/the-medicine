import assert from "node:assert/strict";
import {mkdir,readFile,writeFile} from "node:fs/promises";
import {resolve} from "node:path";
import {simulateForwardEcg,measureStandardTraces,STANDARD_LEADS,createHeartMesh,DEFAULT_FORWARD_INPUTS} from "../src/lib/ecg-forward-model.ts";
import {pathologyMetrics} from "./ecg-pathology-metrics.mjs";

// Internal causal/numerical checks, not patient-level diagnostic validation.
const args=process.argv.slice(2),out=args.includes("--out")?resolve(args[args.indexOf("--out")+1]):null;
const cases=[
  ["normal",{}],["av-slow",{condition:"av-slow"}],
  ["rbb-block",{condition:"rbb-block"}],["lbb-block",{condition:"lbb-block"}],
  ["wpw",{condition:"wpw"}],["pvc",{condition:"pvc"}],
  ["mobitz1",{condition:"mobitz1",rate:90}],["mobitz2",{condition:"mobitz2"}],
  ["complete-av",{condition:"complete-av"}],["af",{condition:"af"}],
  ["ionic-reference",{condition:"hyperkalemia",electrophysiology:{potassium:5.4}}],
  ["hyperkalemia",{condition:"hyperkalemia"}],
  ["long-qt",{condition:"long-qt"}],["short-qt",{condition:"short-qt"}],
];
const results={};
if(out)await mkdir(out,{recursive:true});
function plot(recording,name) {
  const traces=measureStandardTraces(recording),span=recording.durationMs===8000?8000:60000/recording.inputs.rate;
  const x=t=>32+t/span*430,y=v=>106-v*48;
  const panels=STANDARD_LEADS.map(lead=>{
    const d=Array.from(traces[lead].values).flatMap((v,i)=>i*recording.sampleMs<=span?[`${i?"L":"M"}${x(i*recording.sampleMs).toFixed(2)} ${y(v).toFixed(2)}`]:[]).join(" ");
    const grid=Array.from({length:Math.floor(span/(span>3000?1000:200))+1},(_,i)=>{const t=i*(span>3000?1000:200);return`<line x1="${x(t)}" x2="${x(t)}" y1="26" y2="178" stroke="#eddddd"/><text x="${x(t)}" y="194" text-anchor="middle" font-size="10">${t/1000}s</text>`;}).join("");
    return`<svg viewBox="0 0 480 200"><text x="12" y="18" font-weight="700">${lead}</text>${grid}<line x1="32" x2="462" y1="106" y2="106" stroke="#adc1bb"/><path d="${d}" fill="none" stroke="#125b54" stroke-width="1.5"/></svg>`;
  }).join("");
  return`<!doctype html><html lang="ko"><meta charset="utf-8"><title>${name} · calculated ECG</title><style>body{font:14px system-ui;background:#eef4f5;color:#173740;margin:18px}h1{font-size:22px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}svg{width:100%;background:white;border:1px solid #cad8dd;border-radius:8px}a{color:inherit}</style><h1>${name} · 12유도 원 계산값</h1><p>같은 gain · a.u. (mV 아님) · 파형 정규화/곡선 추가 없음</p><div class="grid">${panels}</div></html>`;
}
for(const [name,input] of cases) {
  if(out&&args.includes("--reuse-nonionic")&&!['ionic-reference','hyperkalemia','long-qt','short-qt'].includes(name)) {
    results[name]=JSON.parse(await readFile(resolve(out,name+".json"),"utf8"));
    console.log(`${name}: retained non-ionic result`);
    continue;
  }
  const start=performance.now(),r=simulateForwardEcg({...DEFAULT_FORWARD_INPUTS,...input}),m=pathologyMetrics(r);
  assert.ok(m.identities.einthoven<1e-6&&m.identities.augmented<1e-6,`${name}: lead identities`);
  for(const lead of STANDARD_LEADS)assert.ok(Number.isFinite(m.leads[lead].min)&&Number.isFinite(m.leads[lead].max),`${name}: finite ECG`);
  assert.ok(m.events.his.length>0,`${name}: ventricular conduction must be present`);
  results[name]=m;
  if(out){await writeFile(resolve(out,name+".json"),JSON.stringify(m,null,2));await writeFile(resolve(out,name+".html"),plot(r,name));}
  console.log(`${name}: ${((performance.now()-start)/1000).toFixed(1)} s; coverage=${m.coverage.toFixed(3)}; His=${m.events.his.length}; RR CV=${m.rrCV.toFixed(3)}`);
}
const base=results.normal,span=m=>m.bursts[0].end-m.bursts[0].start;
assert.equal(base.coverage,1);
assert.ok(results["av-slow"].bursts[0].start>base.bursts[0].start+30,"AV coupling delays propagation");
for(const name of ["rbb-block","lbb-block"])assert.ok(span(results[name])>span(base)+30,`${name}: activation dispersion`);
assert.ok(results.wpw.bursts[0].start<results.wpw.events.his[0],"WPW myocardium activates before His");
assert.ok(span(results.wpw)>span(base)+20,"WPW fusion broadens activation");
const pvc=results.pvc,ectopic=pvc.bursts.find(b=>b.start>1500&&b.start<1800);
assert.ok(ectopic&&ectopic.start<pvc.events.his[2]&&ectopic.end-ectopic.start>span(base)+30,"PVC begins locally before retrograde His and widens activation");
assert.ok(pvc.bursts[3].start-ectopic.start>900,"Post-ectopic interval emerges from tissue/SA reset");
const pr=m=>m.events.his.map(t=>t-m.events.sinus.filter(p=>p<t).at(-1));
const wenck=results.mobitz1,delays=pr(wenck);
assert.ok(wenck.events.his.length<wenck.events.sinus.length,"Wenckebach includes non-conduction");
assert.ok(delays.some((v,i)=>i>1&&v>delays[i-1]+2&&delays[i-1]>delays[i-2]+2),"Wenckebach progressive conduction delay");
const infra=results.mobitz2,stable=pr(infra);
assert.ok(Math.abs(infra.events.sinus.length/infra.events.his.length-2)<.25,"Infranodal post-repolarization block produces 2:1 at this rate");
assert.ok(Math.max(...stable)-Math.min(...stable)<3,"Conducted infranodal beats have stable delay");
const complete=results["complete-av"],phases=pr(complete);
assert.ok(complete.rr.every(t=>t>1000&&t<1600)&&Math.max(...phases)-Math.min(...phases)>300,"Independent junctional automaticity and AV dissociation");
assert.ok(results.af.events.his.at(-1)>7500&&results.af.rrCV>.1,"Sustained irregular ventricular response from atrial dynamics, not RR templates");
const ref=results["ionic-reference"],apd=m=>m.cellular["lv-lateral"].apd90;
assert.equal(ref.coverage,1,"Ionic reference fully captures");
assert.equal(ref.events.his.length,ref.events.sinus.length,"Ionic reference keeps 1:1 conduction");
assert.ok(ref.bursts.length>=3&&ref.bursts.every(b=>b.cells===ref.ventricularCells),"Every reference beat, not only the first, captures all ventricular tissue");
assert.ok(results.hyperkalemia.cellular["lv-lateral"].rest>ref.cellular["lv-lateral"].rest+.02,"K raises resting Vm through ionic equations");
assert.ok(apd(results.hyperkalemia)<apd(ref)-10,"K changes repolarization");
assert.ok(apd(results["long-qt"])>apd(ref)+50&&apd(results["short-qt"])<apd(ref)-50,"K conductance changes APD in both directions");
const restored=createHeartMesh({...DEFAULT_FORWARD_INPUTS,condition:"rbb-block",electrophysiology:{branchCoupling:1}}),normal=createHeartMesh();
assert.equal(restored.edges.length,normal.edges.length);
for(let i=0;i<normal.edges.length;i++) {
  const {conductance:actual,...a}=restored.edges[i],{conductance:expected,...b}=normal.edges[i];
  assert.deepEqual(a,b,"Restored branch has reference topology");
  assert.ok(Math.abs(actual-expected)<1e-12,"Restored branch has reference conductance");
}
const checks="PASS: propagation, pre-excitation, ectopy, nodal/infranodal block, independent escape, irregular atrial-driven rhythm, ionic APD/resting Vm, 12-lead identities.";
if(out){await writeFile(resolve(out,"summary.json"),JSON.stringify({checks,results},null,2));await writeFile(resolve(out,"index.html"),`<!doctype html><meta charset="utf-8"><h1>ECG model review</h1><p>${checks}</p><ul>${cases.map(([name])=>`<li><a href="${name}.html">${name}</a></li>`).join("")}</ul>`);}
console.log(checks);
