import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';
const compile=(name,deps={})=>{const compiledModule={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync(new URL('../src/lib/'+name,import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,{module:compiledModule,exports:compiledModule.exports,require:n=>deps[n]});return compiledModule.exports;};
const grading=compile('qbank-grading.ts');
const {remainingQuestions,restoreQbankQuestionOrder,sessionWrongIds}=compile('qbank-session-results.ts',{'./qbank-grading':grading});
const {readQbankQuestionCount,resolveQbankSessionCount}=compile('qbank-question-count.ts');
const {readRetryIds}=compile('qbank-analytics.ts');
test('last submitted question does not hide earlier unanswered or draft answers',()=>{const r=remainingQuestions(['a','b','c'],[{questionId:'c'}],{a:'A'},'c','B');assert.equal(r.remaining.length,2);assert.equal(r.remaining[0].index,0);assert.equal(r.unanswered,1);assert.equal(r.unsubmitted,1);});
test('submitted ungraded questions are complete and cleared current drafts stay empty',()=>{const r=remainingQuestions(['a','b'],[{questionId:'b',correct:null}],{a:'A'},'a',null);assert.equal(r.unanswered,1);assert.equal(r.unsubmitted,0);});
test('fully submitted session has no remaining questions',()=>{assert.equal(remainingQuestions(['a'],[{questionId:'a'}],{}).remaining.length,0);});
test('retry includes only current wrong answers, once each',()=>{assert.equal(JSON.stringify(sessionWrongIds([{questionId:'a',correct:false},{questionId:'b',correct:true},{questionId:'c',correct:null},{questionId:'a',correct:false}])),'["a"]');});
test('full-session retry preserves more than 100 questions and rejects malformed lists',()=>{const ids=Array.from({length:240},(_,i)=>'q'+i);assert.equal(readRetryIds(JSON.stringify(ids)).length,240);assert.equal(readRetryIds('bad').length,0);assert.equal(readRetryIds(JSON.stringify(['a','a',null,4])).length,1);});

test('question counts over 100 are accepted up to the available pool', () => {
  assert.equal(readQbankQuestionCount('2894'), 2894);
  assert.equal(resolveQbankSessionCount('150', 2894), 150);
  assert.equal(resolveQbankSessionCount('4000', 2894), 2894);
  assert.equal(resolveQbankSessionCount('all', 2894), 2894);
  assert.equal(resolveQbankSessionCount('150', 0), 0);
});

test('invalid counts do not launch from inputs and old links have a safe default', () => {
  for (const value of [null, '', '0', '-4', '2.5', '1e3', '9007199254740992']) assert.equal(readQbankQuestionCount(value), undefined);
  assert.equal(resolveQbankSessionCount('bad', 1200), 10);
  assert.equal(resolveQbankSessionCount(null, 4), 4);
});

test('resuming a large session keeps every available question in saved order', () => {
  const loaded = Array.from({length: 2894}, (_, index) => ({id: `q${index}`}));
  const savedIds = loaded.map(({id}) => id).reverse();
  const restored = restoreQbankQuestionOrder(loaded, savedIds);
  assert.deepEqual(Array.from(restored, ({id}) => id), savedIds);
});
