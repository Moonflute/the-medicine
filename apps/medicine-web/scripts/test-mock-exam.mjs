import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const compile = path => ts.transpileModule(fs.readFileSync(new URL(path, import.meta.url), 'utf8'), {compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const url = code => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
const grading = url(compile('../src/lib/qbank-grading.ts'));
const {gradeMockExam, readMockExam} = await import(url(compile('../src/lib/mock-exam.ts').replace('"./qbank-grading"', JSON.stringify(grading))));
import { recordMockExam, loadQbankState } from '../src/lib/qbank-store.ts';
const questions = [
  {id:'QB-T-IM-1',answer:'A',options:{A:'a',B:'b'}},
  {id:'QB-T-GS-2',answer:'B',options:{A:'a',B:'b'}},
  {id:'QB-T-PE-3',answer:null,options:{A:'a',B:'b'}},
];
test('batch grades unanswered as wrong and excludes ungradable questions',()=>{
 const result=gradeMockExam(questions,{'QB-T-IM-1':'A'});
 assert.deepEqual(result.map(r=>r.correct),[true,false,null]);
 assert.deepEqual(result.map(r=>r.specialty),['내과','외과','소아과']);
});
test('saved exam retains drafts, flags and completion while discarding invalid answers',()=>{
 const value={version:1,title:'P 2025',startedAt:'2026-09-09T00:00:00Z',drafts:{a:'A',b:'Z'},flaggedIds:['a','a'],finishedAt:'2026-09-09T01:00:00Z',results:gradeMockExam(questions,{})};
 const restored=readMockExam(JSON.parse(JSON.stringify(value)));
 assert.deepEqual(restored.drafts,{a:'A'});assert.deepEqual(restored.flaggedIds,['a']);assert.equal(restored.finishedAt,value.finishedAt);
 assert.equal(readMockExam({version:1,startedAt:'bad'}),null);
});
test('a submitted exam records once, including unanswered errors, in a single store update',()=>{
 const storage=new Map();let events=0;
 globalThis.window={localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)},dispatchEvent:()=>{events++}};
 const results=gradeMockExam(questions,{'QB-T-IM-1':'A'});
 const session={id:'mock-unique',startedAt:'2026-09-09T00:00:00Z',completedAt:'2026-09-09T01:00:00Z',questionIds:questions.map(q=>q.id),correct:1,total:2};
 recordMockExam(session,results);recordMockExam(session,results);
 const state=loadQbankState();assert.equal(events,1);assert.equal(state.sessions.length,1);
 assert.equal(state.progress['QB-T-GS-2'].lastCorrect,false);assert.equal(state.progress['QB-T-GS-2'].lastAnswer,undefined);assert.equal(state.progress['QB-T-PE-3'],undefined);
 delete globalThis.window;
});
