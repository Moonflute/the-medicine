import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

// Exercise the real TypeScript modules without relying on Node's extension resolution.
const moduleUrl = (path, replace = {}) => {
  let js = ts.transpileModule(fs.readFileSync(new URL(path, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  for (const [from, to] of Object.entries(replace)) js = js.replace(`"${from}"`, `"${to}"`);
  return `data:text/javascript;base64,${Buffer.from(js).toString('base64')}`;
};
const gradingUrl = moduleUrl('../src/lib/qbank-grading.ts');
const { gradeQuestion, toggleSelection, encodeSelection, decodeSelection } = await import(gradingUrl);
const { gradeMockExam, readMockExam } = await import(moduleUrl('../src/lib/mock-exam.ts', { './qbank-grading': gradingUrl }));
const { recordMockExam, loadQbankState } = await import(moduleUrl('../src/lib/qbank-store.ts'));
const base = { id:'QB-TEST-IM-1', answer:null, options:{A:'a',B:'b',C:'c',D:'d',E:'e'} };

test('multi-select toggles, exact answers reject omissions/extras and ignore order', () => {
 const q={...base,gradingMode:'multiple-exact',acceptedAnswers:['A','B','E']};
 let selected=null;for(const a of ['A','B','E'])selected=toggleSelection(q,selected,a);
 assert.equal(gradeQuestion(q,selected),true);
 assert.equal(gradeQuestion(q,['E','B','A']),true);
 assert.equal(gradeQuestion(q,toggleSelection(q,selected,'B')),false);
 assert.equal(gradeQuestion(q,['A','B','C','E']),false);
 assert.equal(gradeQuestion(q,[]),false);
 assert.equal(toggleSelection(q,['A'],'A'),null);
});
test('alternative source answers accept only nonempty subsets; all-credit includes blanks',()=>{
 const q={...base,gradingMode:'multiple-any',acceptedAnswers:['A','E']};
 for(const chosen of ['A','E',['A','E']])assert.equal(gradeQuestion(q,chosen),true);
 for(const chosen of [undefined,[],['A','B'],'B'])assert.equal(gradeQuestion(q,chosen),false);
 for(const chosen of [undefined,'C',['A','E']])assert.equal(gradeQuestion({...base,gradingMode:'all-credit'},chosen),true);
 assert.equal(gradeQuestion(base,'A'),null);
 assert.equal(gradeQuestion({...base,answer:'A'},'A'),true);
 assert.equal(gradeQuestion({...base,answer:'A'},['A','B']),false);
});
test('old and multiple drafts, text-column sync and completed exam survive roundtrip',()=>{
 const qs=[{...base,gradingMode:'multiple-exact',acceptedAnswers:['A','E']},{...base,id:'QB-TEST-GS-2',gradingMode:'all-credit'},{...base,id:'QB-TEST-PE-3',answer:'A'}];
 const drafts={[qs[0].id]:['E','A']};const results=gradeMockExam(qs,drafts);
 assert.deepEqual(results.map(r=>r.correct),[true,true,false]);
 const saved={version:1,startedAt:'2026-09-10T00:00:00Z',finishedAt:'2026-09-10T01:00:00Z',drafts:{...drafts,old:'B',bad:['A','Z'],empty:[]},results};
 const restored=readMockExam(JSON.parse(JSON.stringify(saved)));
 assert.deepEqual(restored.drafts,{...drafts,old:'B'});assert.deepEqual(restored.results,JSON.parse(JSON.stringify(results)));
 assert.deepEqual(decodeSelection(encodeSelection(['A','E'])),['A','E']);assert.equal(decodeSelection('B'),'B');assert.equal(decodeSelection('A,Z'),undefined);
 const storage=new Map();globalThis.window={localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)},dispatchEvent:()=>{}};
 const session={id:'test-multi',questionIds:qs.map(q=>q.id),correct:2,total:3};recordMockExam(session,results);recordMockExam(session,results);
 const state=loadQbankState();assert.deepEqual(state.progress[qs[0].id].lastAnswer,['E','A']);assert.equal(state.progress[qs[1].id].lastCorrect,true);assert.equal(state.sessions.length,1);assert.equal(state.progress[qs[2].id].lastCorrect,false);
 delete globalThis.window;
});
