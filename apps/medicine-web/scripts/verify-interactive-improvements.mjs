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

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../../..");
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

const catalogs={};
for(const [kind,file,prefix] of [["disease","diseases","disease"],["drug","drugs","drugs"],["lab","lab-img","lab-img"]]){
 catalogs[kind]=JSON.parse(fs.readFileSync(path.join(root,"_webapp/data",file+".json"),"utf8")).filter(n=>n.documentRole!=="compatibility").map(n=>({...n,href:`/${prefix}/${n.slug}`}));
}
const expected={"acid-base-balance":6,"oxygenation-gas-exchange":5,"nephron-electrolyte-handling":14,"cardiac-hemodynamics":5,"ecg-arrhythmia":15,"endocrine-feedback-axes":30};
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
assert.ok(mechanicsNote.links.some(link=>link.href==="https://pubmed.ncbi.nlm.nih.gov/28392437/"));
assert.ok(mechanicsNote.sections.every(section=>section.bullets.every(text=>!text.includes("**")&&!text.includes("`"))),"Mechanics note uses the plain-text renderer's supported format");
assert.ok(ischemiaNote?.sections.some(section=>section.title==="실제로 바꾸는 조직 특성"));
assert.ok(ischemiaNote.links.some(link=>link.href==="https://doi.org/10.1186/s12576-020-00760-3"));
assert.ok(ischemiaNote.sections.every(section=>section.bullets.every(text=>!text.startsWith("|")&&!text.includes("]("))),"Plain-text note renderer must not receive Markdown tables or inline link syntax");
assert.equal(questions,59);
console.log(`Six-module regression checks passed; ${notes.size} source notes, ${Object.values(expected).reduce((sum,n)=>sum+n,0)} topics, ${questions} questions, ${links} resolved links.`);
