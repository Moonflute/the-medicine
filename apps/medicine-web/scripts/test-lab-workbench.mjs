import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";
import ts from "typescript";

const base = new URL("../", import.meta.url);
const read = name => fs.readFileSync(new URL(name, base), "utf8");
const compile = (name, dependencies={}) => {
 const compiledModule={exports:{}};
 vm.runInNewContext(ts.transpileModule(read(name),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,{exports:compiledModule.exports,module:compiledModule,require:name=>dependencies[name]});
 return compiledModule.exports;
};
const engine=compile("src/lib/lab-engine.ts");
const model=compile("src/lib/lab-workbench-model.ts",{"./lab-engine":engine});
const catalog=JSON.parse(read("src/lib/lab-document-catalog.json"));
const kinds=compile("src/lib/lab-document-kind.ts",{"./lab-document-catalog.json":catalog});
const ranges=compile("src/lib/lab-img-overview.ts",{"./lab-document-kind":kinds});
const notes=JSON.parse(fs.readFileSync(new URL("../../../_webapp/data/lab-img.json",base),"utf8"));
test("clearing a result never turns it into a zero-valued abnormality",()=>{
 for(const raw of [undefined,""," ","not-a-number"]) assert.equal(engine.numberAt({k:raw},"k"),undefined);
 assert.equal(engine.numberAt({k:"0"},"k"),0);
 assert.equal(engine.buildFindings({k:"",ph:"",glucose:""}).length,0);
 assert.ok(engine.buildFindings({k:"6.3"}).some(f=>f.level==="urgent" && f.title.includes("고칼륨")));
});
test("reference overrides, missing reference, and bad inputs remain distinct",()=>{
 const f={id:"k",label:"K",unit:"mmol/L",low:3.5,high:5};
 assert.equal(model.labValueStatus(f,"5.2"),"high");
 assert.equal(model.labValueStatus(f,"5.2",{low:"3.5",high:"5.5"}),"normal");
 assert.equal(model.labValueStatus(f,"4",{low:"6",high:"3"}),"invalid");
 assert.equal(model.labValueStatus(f,"-1"),"invalid");
 assert.equal(model.labValueStatus({...f,low:undefined,high:undefined},"4"),"unknown");
 assert.equal(model.labValueStatus(f,""),"empty");
});
test("multi-panel inputs and reference edits survive draft restoration",()=>{
 const draft={...model.EMPTY_LAB_DRAFT,values:{wbc:"7",k:"6.3",urineNitrite:"positive"},ranges:{k:{low:"3.5",high:"5.5"}},panel:"전해질 · 신장",selected:"k"};
 const restored=model.restoreLabDraft(JSON.stringify(draft));
 assert.equal(restored.values.wbc,"7");assert.equal(restored.values.k,"6.3");assert.equal(restored.values.urineNitrite,"positive");
 assert.equal(restored.ranges.k.high,"5.5");assert.equal(model.restoreLabDraft("bad").panel,"CBC");
});
test("all current lab documents have explicit classifications and valid panel members",()=>{
 const titles=new Set(notes.map(n=>n.title));
 for(const n of notes) { assert.ok(catalog[n.relativePath],n.title); for(const member of catalog[n.relativePath].members??[])assert.ok(titles.has(member),member); }
 const bun=notes.find(n=>n.title==="Blood Urea Nitrogen (BUN)");
 assert.equal(kinds.labDocumentMeta(bun).kind,"test");
 const renamed={...bun,title:"Blood CBC Hematology overview"};
 assert.equal(ranges.isLabImgOverviewNote(renamed),false);
});
test("single-test ranges never come from another test",()=>{
 for(const title of ["Blood Urea Nitrogen (BUN)","Creatinine","Hemoglobin"]) {
  const note=notes.find(n=>n.title===title);
  const rows=ranges.buildLabImgOverviewGroups(note,notes).flatMap(g=>g.rows);
  assert.ok(rows.length,title);
  assert.ok(rows.every(r=>r.slug===note.slug),title);
 }
 const abg=notes.find(n=>n.title==="Arterial Blood Gas Analysis (ABGA)");
 const rows=ranges.buildLabImgOverviewGroups(abg,notes).flatMap(g=>g.rows);
 assert.ok(rows.length>=3);assert.ok(rows.every(r=>r.slug===abg.slug));
});
test("every numeric field has an explicit explanation or same-test document",()=>{
 for(const field of model.ALL_LAB_FIELDS) assert.ok(model.fieldNote(field.id,notes)||model.FIELD_GUIDANCE[field.id],field.id);
});
