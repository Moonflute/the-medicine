import test from 'node:test';
import assert from 'node:assert/strict';
import { buildQbankAnalytics, readRetryIds } from '../src/lib/qbank-analytics.ts';

const catalog = [
  { id: 'a', bank: 'clinical', department: '내과', topic: '신장', label: 'a' },
  { id: 'b', bank: 'clinical', department: '내과', topic: '심장', label: 'b' },
  { id: 'c', bank: 'practice', department: '외과', topic: '혈관', label: 'c', exam: 'P 2025' },
  { id: 'd', bank: 'practice', department: '외과', topic: '혈관', label: 'd', exam: 'P 2025' },
];
const state = {
  version: 1, progress: {
    a: { attempts: 3, correctAttempts: 1, lastCorrect: false },
    b: { attempts: 2, correctAttempts: 1, lastCorrect: true },
    c: { attempts: 1, correctAttempts: 0, lastCorrect: false },
    hidden: { attempts: 99, correctAttempts: 0, lastCorrect: false },
  }, wrongIds: ['a', 'b', 'c', 'hidden'], bookmarkIds: [], dailyActivity: {}, sessions: [],
};
test('separates unresolved, recovered and repeated errors; ignores inaccessible questions', () => {
  const s = buildQbankAnalytics(catalog, state);
  assert.equal(s.attempts, 6); assert.equal(s.correct, 2); assert.equal(s.attempted, 3);
  assert.equal(s.recovered, 1); assert.deepEqual(s.wrong.map(q => q.id), ['a', 'c']);
  assert.deepEqual(s.repeated.map(q => q.id), ['a']);
});
test('filters bank and source department; excludes unattempted from accuracy', () => {
  const s = buildQbankAnalytics(catalog, state, 'practice', '외과');
  assert.equal(s.selected.length, 2); assert.equal(s.attempted, 1); assert.equal(s.attempts, 1);
  assert.equal(s.exams[0].key, 'P 2025'); assert.deepEqual(s.groups[0].retryIds, ['c']);
  assert.equal(buildQbankAnalytics(catalog, state, 'practice', '내과').attempts, 0);
});
test('session trends are weighted and exclude sessions crossing the selected scope', () => {
  const sessions = Array.from({length: 10}, (_, i) => ({ id: String(i), completedAt: `2026-09-${String(i+1).padStart(2,'0')}`, questionIds: ['a'], correct: i < 5 ? 1 : 2, total: 2 }));
  sessions.push({id:'mixed', completedAt:'2026-09-20', questionIds:['a','c'], correct:1,total:2});
  const s = buildQbankAnalytics(catalog, {...state,sessions}, 'clinical');
  assert.equal(s.sessions.length, 10); assert.equal(s.currentRate, 100); assert.equal(s.change, 50);
  assert.equal(buildQbankAnalytics(catalog, {...state,sessions}).sessions[0].id, 'mixed');
});
test('empty data and malformed retry lists remain empty; retry IDs are bounded and unique', () => {
  assert.equal(buildQbankAnalytics([],state).currentRate, null);
  assert.deepEqual(readRetryIds('{'), []); assert.deepEqual(readRetryIds(null), []);
  assert.deepEqual(readRetryIds('["a","a",null,1,""]'), ['a']);
  assert.equal(readRetryIds(JSON.stringify(Array.from({length:200},(_,i)=>String(i)))).length,100);
});
