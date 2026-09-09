import test from 'node:test';
import assert from 'node:assert/strict';
import { optionOrder, OPTION_LABELS } from '../src/lib/qbank-option-order.ts';
const question = { id:'theory-one', questionBank:'theory', question:'Which mechanism?', explanation:'Enzyme inhibition.', options:{A:'Correct',B:'Wrong one',C:'Wrong two',D:'Wrong three'} };
test('stable across reload and devices; varies across sessions without changing answer IDs', () => {
  const order=optionOrder(question,'session-one');
  assert.deepEqual(order,optionOrder(JSON.parse(JSON.stringify(question)),'session-one'));
  assert.deepEqual([...order].sort(),['A','B','C','D']);
  assert.equal(question.options[order[order.indexOf('A')]],'Correct');
  assert.equal(OPTION_LABELS[order.indexOf('A')].length,1);
  const positions=Array.from({length:100},(_,i)=>optionOrder(question,`session-${i}`).indexOf('A'));
  assert.equal(new Set(positions).size,4);
  assert.deepEqual(Object.keys(question.options),['A','B','C','D']);
});
test('clinical and practice retain source order, including fifth choice', () => {
  for(const questionBank of ['clinical','practice']) assert.deepEqual(optionOrder({...question,questionBank,options:{...question.options,E:'Fifth'}},'session-one'),['A','B','C','D','E']);
});
test('references to option positions keep their meaning', () => {
  for(const explanation of ['정답 A', 'A와 B 모두', '선택지 ①', '위의 모두']) assert.deepEqual(optionOrder({...question,explanation},'session-one'),['A','B','C','D']);
});
