import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { calculateAcidBaseState, compensatedInputs, calculateAnionGap } from "../src/lib/acid-base-model.ts";
import { calculateOxygenationState } from "../src/lib/oxygenation-model.ts";
import { calculateNephronState } from "../src/lib/nephron-model.ts";
import { calculateHemodynamics } from "../src/lib/hemodynamics-model.ts";
import { calculateEndocrineState } from "../src/lib/endocrine-model.ts";
import { calculateEcgState, ecgRateControl, ecgSignalAt, measureEcgInterval } from "../src/lib/ecg-model.ts";
import { parseInteractiveLearning, resolveLearningLink } from "../src/lib/interactive-learning-parser.ts";
import { createAnatomyRegionMap } from "../src/lib/ecg-forward-anatomy.ts";
import { MYOCARDIAL_REGIONS } from "../src/lib/ecg-forward-model.ts";
import { advancePlayback, ECG_STEP_MS, playbackDuration, playbackStart, stepPlayback, traceSweepStart } from "../src/lib/ecg-playback.ts";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../../..");
// Single-cycle playback stops at the pacing period, including fractional endpoints.
for(const rate of [50,70,90,110]){
 const end=playbackDuration("beat",rate,2400);assert.equal(end,60000/rate);
 for(const speed of [.1,.25,.5,1]){
  let time=0,ticks=0,next;
  do{next=advancePlayback(time,33*speed,end);time=next.time;assert.ok(++ticks<1000);}while(!next.complete);
  assert.equal(time,end);assert.equal(traceSweepStart(time,end,2400),0,"completed beat stays visible");
 }
 assert.equal(playbackStart(end,end),0);assert.equal(playbackStart(100,end),100,"resume a paused beat");
 assert.equal(stepPlayback(0,-1,end),0);assert.equal(stepPlayback(end,1,end),end);
 assert.equal(stepPlayback(0,1,end),ECG_STEP_MS);assert.equal(stepPlayback(30,-1,end),20);
 assert.equal(stepPlayback(end-3,1,end),end);assert.equal(stepPlayback(end,-1,end),end-ECG_STEP_MS);
}
assert.equal(playbackDuration("all",70,2400),2400);
assert.equal(advancePlayback(2390,40,2400).time,2400);
assert.equal(traceSweepStart(2400,2400,2400),0);
assert.equal(traceSweepStart(860,60000/70,2400),60000/70);
const acidInput={ventilation:55,co2Production:100,bicarbonate:24};
for(const duration of ["acute","chronic"]){
 const initial=calculateAcidBaseState(acidInput,"respiratory-acidosis",duration);
 const compensated=calculateAcidBaseState(compensatedInputs(initial),initial.primary,duration);
 assert.equal(compensated.primary,"respiratory-acidosis");assert.equal(compensated.pattern,"Respiratory acidosis");assert.equal(compensated.compensationTone,"ok");
 assert.ok(compensated.pH>initial.pH&&compensated.pH<7.41);
}
const winter=calculateAcidBaseState({ventilation:100,co2Production:100,bicarbonate:14},"metabolic-acidosis");
for(const primary of ["respiratory-acidosis","respiratory-alkalosis","metabolic-acidosis","metabolic-alkalosis"]){
 const inconsistent=calculateAcidBaseState({ventilation:100,co2Production:100,bicarbonate:24},primary);
 assert.equal(inconsistent.expected,null);assert.ok(inconsistent.pattern.includes("불일치"),"normal inputs must not be diagnosed from selector alone");
}
assert.equal(winter.expected,29);assert.equal(calculateAcidBaseState(compensatedInputs(winter),winter.primary).compensationTone,"ok");
assert.equal(calculateAcidBaseState({...acidInput,bicarbonate:14}).compensationTone,"mixed");
assert.deepEqual(calculateAnionGap(140,104,24,4),{gap:12,corrected:12,deltaRatio:null});
assert.equal(calculateAnionGap(140,104,14,2).corrected,27);
const oi={fio2:.21,respiratoryRate:14,vqMismatch:0,shuntFraction:.02,hemoglobin:14,pH:7.4,cardiacOutput:5,age:40};
const oxygen=calculateOxygenationState(oi),hyperoxia=calculateOxygenationState({...oi,fio2:1});
assert.equal(hyperoxia.status,"adequate");assert.ok(hyperoxia.pattern.includes("보존"));
for(const fio2 of [.21,.4,.6,.8,1]){const s=calculateOxygenationState({...oi,fio2});if(s.status!=="adequate")assert.ok(!s.pattern.includes("보존"),"status and narrative must agree");}
assert.equal(calculateOxygenationState({...oi,cardiacOutput:2.5}).oxygenDelivery,oxygen.oxygenDelivery/2);
assert.ok(calculateOxygenationState({...oi,age:80}).expectedAaUpper>oxygen.expectedAaUpper);
const ni={gfr:100,adh:50,aldosterone:50,loopBlock:0,thiazideBlock:0,enacBlock:0,carbonicAnhydraseBlock:0};
const normal=calculateNephronState(ni);
for(const key of ["loopBlock","thiazideBlock","carbonicAnhydraseBlock"])assert.ok(calculateNephronState({...ni,[key]:88}).urineVolume>normal.urineVolume,`${key} must affect water excretion`);
for(const adh of [0,50,100])for(const block of [0,50,100]){
 const s=calculateNephronState({...ni,adh,loopBlock:block,thiazideBlock:block,enacBlock:block,carbonicAnhydraseBlock:block});
 for(const segment of s.segments)for(const solute of Object.keys(s.excreted)){
  assert.ok(segment.remaining[solute]>=0);assert.ok(segment.handled[solute]<=segment.delivered[solute]);
  assert.ok(Math.abs(segment.remaining[solute]+segment.handled[solute]-segment.delivered[solute])<1e-8,"segment mass conservation");
 }
 assert.ok(Number.isFinite(s.urineOsmolality)&&s.urineVolume>0);
}
const hi={preload:100,afterload:100,contractility:100,heartRate:70};
assert.ok(calculateHemodynamics({...hi,preload:55}).meanArterialPressure<calculateHemodynamics(hi).meanArterialPressure,"low CO must affect pressure");
const axes=["thyroid","adrenal","gonadal","growth","adh","pancreatic"],presets=["normal","primary-failure","primary-excess","pituitary-failure","exogenous"];
for(const axis of axes){
 const n=calculateEndocrineState(axis,"normal"),zero=calculateEndocrineState(axis,"exogenous",100,100,0);
 assert.deepEqual(zero.stages.map(s=>s.value),n.stages.map(s=>s.value),"zero external exposure must be zero");
 for(const preset of presets){
  const low=calculateEndocrineState(axis,preset,60,100,100),high=calculateEndocrineState(axis,preset,150,100,100);
  assert.ok(high.stages.every(s=>Number.isFinite(s.value)&&s.value>=0));
  assert.notDeepEqual(high.stages.map(s=>s.value),low.stages.map(s=>s.value),`${axis}/${preset} must respond to stimulus`);
 }
}
const steroid=calculateEndocrineState("adrenal","exogenous",100,100,150);
assert.ok(steroid.stages[2].value<calculateEndocrineState("adrenal","normal").stages[2].value);assert.ok(steroid.effects[0].value>100);
const central=calculateEndocrineState("adh","primary-failure",100,100,100),nephrogenic=calculateEndocrineState("adh","pituitary-failure",100,100,100);
assert.ok(central.stages[2].value>nephrogenic.stages[2].value*2,"Desmopressin response must distinguish central and renal defects");
for(const axis of ["adh","pancreatic"]){
 assert.notDeepEqual(calculateEndocrineState(axis,"primary-failure",130,60).stages.map(s=>s.value),calculateEndocrineState(axis,"primary-failure",130,150).stages.map(s=>s.value),"sensitivity must affect special axes");
}
for(const rhythm of ["sinus","brady","tachy","af","flutter","av1","mobitz1","mobitz2","complete","vt"]){
 const s=calculateEcgState(rhythm,rhythm==="vt"?165:rhythm==="complete"?40:70);
 for(let t=0;t<8;t+=.05)assert.ok(Number.isFinite(ecgSignalAt(t,s)));
 assert.ok(ecgRateControl(rhythm).min<ecgRateControl(rhythm).max);
}
const sinus=calculateEcgState("sinus",70),p=sinus.events.find(e=>e.type==="atrial"),q=sinus.events.find(e=>e.type==="ventricular");
assert.ok(Math.abs(measureEcgInterval(sinus,p.time,q.time).milliseconds-160)<1e-9);
assert.ok(calculateEcgState("vt",165).events.some(e=>e.type==="atrial"),"VT AV dissociation must have actual atrial events");
for(const ratio of [2,3,4])assert.equal(calculateEcgState("flutter",300/ratio).ventricularRate,300/ratio);

// The public ECG entry is model-only. Keep the retired synthetic trainer out
// of the route's import graph and remove its reserved navigation row.
const ecgEntry=fs.readFileSync(path.join(root,"apps/medicine-web/src/components/ecg-interactive-lab.tsx"),"utf8");
assert.match(ecgEntry,/<EcgForwardLab\s*\/>/);
assert.doesNotMatch(ecgEntry,/EcgArrhythmiaLab|ecg-arrhythmia-lab|next\/dynamic|useState|<nav\b|data-mode/);
const ecgStyles=fs.readFileSync(path.join(root,"apps/medicine-web/src/app/physiology.css"),"utf8");
const shellStyles=fs.readFileSync(path.join(root,"apps/medicine-web/src/app/globals.css"),"utf8");
assert.match(shellStyles,/\.immersive-shell header button\[aria-label="Toggle navigation"\]\s*\{\s*display:\s*inline-flex;\s*\}/,"immersive menu must retain flex centering when overriding xl:hidden");
assert.match(ecgStyles,/\.ecg-interactive\s*\{[^}]*grid-template-rows:minmax\(0,1fr\)/);
assert.doesNotMatch(ecgStyles,/ecg-mode-nav|data-mode/);
const ecgLab=fs.readFileSync(path.join(root,"apps/medicine-web/src/components/ecg-forward-lab.tsx"),"utf8");
assert.doesNotMatch(ecgLab,/합성 리듬|EcgArrhythmiaLab/);
assert.doesNotMatch(ecgLab,/ecg-lab-header|<h1/);
const ecgWorkspace=fs.readFileSync(path.join(root,"apps/medicine-web/src/components/ecg-forward-workspace.tsx"),"utf8");
assert.doesNotMatch(ecgWorkspace,/흉곽 보기|setYaw/);
assert.doesNotMatch(ecgWorkspace,/wrapAtMatchingBeat|ecg-phase-jumps/);
assert.match(ecgWorkspace,/aria-label="관찰할 파형 구간"/);
assert.match(ecgWorkspace,/aria-keyshortcuts="ArrowLeft"/);assert.match(ecgWorkspace,/aria-keyshortcuts="ArrowRight"/);
assert.match(ecgWorkspace,/event\.defaultPrevented/);
assert.match(ecgWorkspace,/yaw=\{0\}/);
assert.match(ecgWorkspace,/className="ecg-output-slot"[\s\S]*className="ecg-signal-card"[^>]*hidden=\{settingsOpen\}[\s\S]*id="ecg-settings-panel"/);
assert.match(ecgWorkspace,/ecg-signal-header[\s\S]*\{conductionControls\}/);
// The injury picker owns no separate draft: the adjacent scene uses the same selection.
const injuryPanel=fs.readFileSync(path.join(root,"apps/medicine-web/src/components/ecg-ischemia-panel.tsx"),"utf8");
const ecgScene=fs.readFileSync(path.join(root,"apps/medicine-web/src/components/ecg-forward-scene.tsx"),"utf8");
assert.match(injuryPanel,/type="checkbox" checked=\{regions.includes\(id\)\}/);
assert.match(injuryPanel,/허혈 적용/);assert.match(injuryPanel,/허혈 해제/);
assert.doesNotMatch(injuryPanel,/type="range"|regionVoltage|적용된 계산 결과|Resting potential|ecg-tissue-probes|TP 원 전위|조직 상태/);
assert.match(ecgWorkspace,/injuryPreview=\{panel==="injury"\?injuryRegions:undefined\}/);
assert.match(ecgWorkspace,/regions=\{injuryRegions\} onRegions=\{setInjuryRegions\}/);
assert.match(ecgScene,/data-injury-preview-region=\{region.region\} data-selected=\{injuryPreview.includes\(region.region\)\}/);
assert.match(ecgScene,/!injuryEditing\?injuryBands.map/);
const regionMap=createAnatomyRegionMap(MYOCARDIAL_REGIONS);
assert.deepEqual(regionMap.map(item=>item.region),MYOCARDIAL_REGIONS);
assert.equal(new Set(regionMap.map(item=>item.number)).size,9);
assert.equal(new Set(regionMap.map(item=>item.path)).size,9);
for(const [index,item] of regionMap.entries()){
 assert.equal(item.number,index+1);assert.match(item.path,/^M/);
 assert.doesNotMatch(item.path,/NaN|undefined|Infinity/);
 assert.ok(Number.isFinite(item.center.x)&&Number.isFinite(item.center.y));
}
assert.doesNotMatch(ecgStyles,/\.ecg-inspector\s*\{[^}]*(?:position:(?:absolute|fixed)|width:305px)/);
const ecgRoute=fs.readFileSync(path.join(root,"apps/medicine-web/src/app/interactive/[slug]/page.tsx"),"utf8");
assert.match(ecgRoute,/ecg-route-header/);assert.match(ecgRoute,/<h1>ECG 전기생리 모델<\/h1>/);
assert.doesNotMatch(ecgRoute,/ecg-route-support/);
const ecgConcept=JSON.parse(fs.readFileSync(path.join(root,"apps/medicine-web/data/interactive-concepts.json"),"utf8")).find(concept=>concept.slug==="ecg-arrhythmia");
assert.doesNotMatch(ecgConcept.summary,/합성|별도 모드/);

const catalogs={};
for(const [kind,file,prefix] of [["disease","diseases","disease"],["drug","drugs","drugs"],["lab","lab-img","lab-img"]]){
 catalogs[kind]=JSON.parse(fs.readFileSync(path.join(root,"_webapp/data",file+".json"),"utf8")).filter(n=>n.documentRole!=="compatibility").map(n=>({...n,href:`/${prefix}/${n.slug}`}));
}
const expected={"acid-base-balance":9,"oxygenation-gas-exchange":5,"nephron-electrolyte-handling":17,"cardiac-hemodynamics":5,"ecg-arrhythmia":18,"endocrine-feedback-axes":30};
const notes=new Map();let questions=0,links=0;
for(const [slug,count] of Object.entries(expected)){
 const note=parseInteractiveLearning(fs.readFileSync(path.join(root,"source_notes/05 Physiology/Interactive",slug+".md"),"utf8"),slug);notes.set(slug,note);
 assert.equal(note.topics.length,count);assert.ok(note.sources.length>=2);
 for(const topic of note.topics){
  for(const title of ["기전","증상·검사 소견","관찰과 해석"])assert.ok(topic.sections.find(s=>s.title===title)?.bullets.join(" ").length>=35,`${slug}/${topic.id}: ${title}`);
  if(topic.question)questions++;
  for(const link of topic.links){resolveLearningLink(link,catalogs);links++;}
 }
}
for(const note of notes.values())for(const topic of note.topics)for(const link of topic.links){
 const match=link.href.match(/^\/interactive\/([^/#]+)(?:\/notes)?(?:#(.+))?$/);
 if(match){assert.ok(notes.has(match[1]),"valid interactive destination");if(match[2])assert.ok(notes.get(match[1]).topics.some(t=>t.id===match[2]),"valid note anchor");}
}
const ischemiaNote=notes.get("ecg-arrhythmia").topics.find(topic=>topic.id==="regional-ischemia");
const mechanicsNote=notes.get("ecg-arrhythmia").topics.find(topic=>topic.id==="forward-mechanics");
for(const id of ["forward-preexcitation","forward-ionic","forward-rhythm"]){
 const topic=notes.get("ecg-arrhythmia").topics.find(item=>item.id===id);
 assert.ok(topic,`ECG model extension note: ${id}`);
 assert.ok(topic.links.some(link=>link.href.startsWith("https://")),`${id}: primary-source link`);
 assert.ok(topic.sections.every(section=>section.bullets.every(text=>!text.includes("**"))),`${id}: plain-text renderer`);
}
assert.ok(mechanicsNote.links.some(link=>link.href==="https://pubmed.ncbi.nlm.nih.gov/28392437/"));
assert.ok(mechanicsNote.sections.every(section=>section.bullets.every(text=>!text.includes("**")&&!text.includes("`"))),"Mechanics note uses the plain-text renderer's supported format");
assert.ok(ischemiaNote?.sections.some(section=>section.title==="실제로 바꾸는 조직 특성"));
assert.ok(ischemiaNote.links.some(link=>link.href==="https://doi.org/10.1186/s12576-020-00760-3"));
assert.ok(ischemiaNote.sections.every(section=>section.bullets.every(text=>!text.startsWith("|")&&!text.includes("]("))),"Plain-text note renderer must not receive Markdown tables or inline link syntax");
assert.equal(questions,61);
console.log(`Six-module regression checks passed; ${notes.size} source notes, ${Object.values(expected).reduce((sum,n)=>sum+n,0)} topics, ${questions} questions, ${links} resolved links.`);
