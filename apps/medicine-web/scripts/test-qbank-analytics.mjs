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
test('empty data and malformed retry lists remain empty; large retry IDs stay unique', () => {
  assert.equal(buildQbankAnalytics([],state).currentRate, null);
  assert.deepEqual(readRetryIds('{'), []); assert.deepEqual(readRetryIds(null), []);
  assert.deepEqual(readRetryIds('["a","a",null,1,""]'), ['a']);
  assert.equal(readRetryIds(JSON.stringify(Array.from({length:200},(_,i)=>String(i)))).length,200);
});

test('department order follows catalog ranks and latest accuracy differs from repeat-weighted accuracy', () => {
  const questions = [
    {id:'p',bank:'practice',department:'소아과',topic:'소아',label:'p',order:3},
    {id:'m',bank:'practice',department:'내과',topic:'내과',label:'m',order:0},
    {id:'s',bank:'practice',department:'외과',topic:'외과',label:'s',order:1},
  ];
  const s=buildQbankAnalytics(questions,{...state,progress:{m:{attempts:4,correctAttempts:3,lastCorrect:true,consecutiveCorrect:2},s:{attempts:1,correctAttempts:0,lastCorrect:false,consecutiveCorrect:0}}});
  assert.deepEqual(s.groups.map(g=>g.key),['내과','외과','소아과']);
  assert.equal(s.latestCorrect,1);assert.equal(s.mastered,1);assert.equal(s.recovered,1);
  assert.equal(s.correct/s.attempts,0.6);assert.equal(s.latestCorrect/s.attempted,0.5);
  assert.equal(s.groups[0].mastered,1);assert.equal(s.groups[2].attempted,0);
});

test('progress reset affects completion only and keeps historical accuracy and practice subgroups', () => {
  const questions = [
    { id: 'old', bank: 'practice', department: '내과', topic: '순환기', subgroup: '순환기', label: 'old', order: 1 },
    { id: 'new', bank: 'practice', department: '내과', topic: '호흡기', subgroup: '호흡기', label: 'new', order: 2 },
    { id: 'surgery', bank: 'practice', department: '외과', topic: '외과 일반', label: 'surgery', order: 11 },
  ];
  const s = buildQbankAnalytics(questions, {
    ...state,
    progress: {
      old: { attempts: 2, correctAttempts: 1, lastCorrect: true, lastAttemptedAt: '2026-09-01T00:00:00.000Z' },
      new: { attempts: 1, correctAttempts: 1, lastCorrect: true, lastAttemptedAt: '2026-09-18T00:00:00.000Z' },
      surgery: { attempts: 1, correctAttempts: 0, lastCorrect: false, lastAttemptedAt: '2026-09-18T00:00:00.000Z' },
    },
  }, 'practice', 'all', '2026-09-10T00:00:00.000Z');
  assert.equal(s.progressed, 2); assert.equal(s.attempts, 4); assert.equal(s.correct, 2);
  assert.deepEqual(s.practiceGroups.map(group => [group.key, group.progressed]), [['내과', 1], ['외과', 1]]);
  assert.deepEqual(s.practiceGroups[0].children.map(group => [group.key, group.progressed]), [['순환기', 0], ['호흡기', 1]]);
  assert.equal(s.recentTotal, 3); assert.equal(s.recentCorrect, 2);
});
