import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const compile = name => ts.transpileModule(fs.readFileSync(new URL(`../src/lib/${name}.ts`, import.meta.url), 'utf8'), {compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const url = code => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
const { buildQbankAnalytics, readRetryIds, sortAnalyticsGroups } = await import(url(compile('qbank-analytics').replace('"./qbank-progress"', JSON.stringify(url(compile('qbank-progress'))))));
const { practiceQuestionExamLabel } = await import(url(compile('practice-selection')));
const { isUnresolvedQbankWrong } = await import(url(compile('qbank-wrong').replace('"./practice-selection"', JSON.stringify(url(compile('practice-selection'))))));

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
test('practice versions share a progress slot without regrading recorded attempts or exams', () => {
  const source = { ...catalog[2], revisionIds: ['rev-c'] };
  const history = [
    { id: 'old-exam', questionIds: ['c'], completedAt: '2026-09-01', correct: 0, total: 1 },
    { id: 'new-exam', questionIds: ['rev-c'], completedAt: '2026-11-16', correct: 1, total: 1 },
  ];
  const augmented = {
    ...state, sessions: history, wrongIds: ['c', 'rev-c'],
    progress: {
      c: { attempts: 1, correctAttempts: 0, lastAttemptedAt: '2026-09-01', lastCorrect: false },
      'rev-c': { attempts: 2, correctAttempts: 1, lastAttemptedAt: '2026-11-16', lastCorrect: true },
    },
  };
  const s = buildQbankAnalytics([source], augmented, 'practice', 'all', '2026-11-01');
  assert.equal(s.selected.length, 1);
  assert.equal(s.progressed, 1);
  assert.equal(s.attempts, 3);
  assert.equal(s.correct, 1);
  assert.equal(s.latestCorrect, 1);
  assert.deepEqual(s.wrong.map(q => q.id), []);
  assert.equal(s.groups[0].wrong, 0);
  assert.deepEqual(s.groups[0].retryIds, []);
  assert.deepEqual(s.sessions.map(row => [row.questionIds, row.correct]), [[['rev-c'], 1], [['c'], 0]]);
  assert.equal(augmented.progress.c.lastCorrect, false);
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
  assert.deepEqual(s.practiceGroups[0].unattemptedIds,['old']);
  assert.deepEqual(s.practiceGroups[0].children[0].unattemptedIds,['old']);
  assert.equal(s.practiceGroups[0].retryIds.length,0); // lastCorrect does not replace the explicit queue.
});

test('sorting keeps each group IDs and counts unchanged and puts unseen accuracy last',()=>{
  const groups=buildQbankAnalytics(catalog,state).groups;
  assert.equal(sortAnalyticsGroups(groups,'wrong')[0].key,'내과');
  assert.equal(sortAnalyticsGroups(groups,'unattempted')[0].key,'외과');
  assert.equal(sortAnalyticsGroups(groups,'accuracy')[0].key,'외과');
  assert.equal(sortAnalyticsGroups(groups,'progress')[0].key,'외과');
  assert.deepEqual(sortAnalyticsGroups(groups,'wrong').flatMap(g=>g.retryIds).sort(),['a','c']);
  assert.deepEqual(sortAnalyticsGroups(groups,'unattempted').flatMap(g=>g.unattemptedIds),['d']);
});

test('statistics split the original 2026 round from RES 26 and preserve each recorded score', () => {
  const round = (bookId, count) => Array.from({ length: count }, (_, i) => ({
    id: `QB-${bookId}-${i}`, bookId, bookSeries: '실전', bookDepartment: '내과', examYear: 2026,
  }));
  const original = [...round('perfect2026-im-gs', 60), ...round('perfect2026-pe-og', 40)];
  const added = round('practice-res2608', 50);
  const catalog = [...original, ...added].map(q => ({
    id: q.id, bank: 'practice', department: q.bookDepartment, topic: '순환기', label: q.id, exam: practiceQuestionExamLabel(q),
  }));
  const progress = Object.fromEntries([...original, ...added].map((q, i) => [q.id, {
    attempts: 1, correctAttempts: i < 70 ? 1 : 0, lastCorrect: i < 70,
    lastAnswer: i < 97 || i >= 100 && i !== 131 ? 'A' : undefined,
  }]));
  const history = { ...state, progress, wrongIds: original.slice(70).map(q => q.id) };
  const before = JSON.stringify(history);
  const stats = buildQbankAnalytics(catalog, history, 'practice');
  assert.deepEqual(stats.exams.map(g => [g.key, g.total, g.progressed]).sort(), [
    ['2026-2', 50, 50], ['2026년', 100, 100],
  ].sort());
  assert.equal(stats.attempted, 150);
  assert.equal(stats.attempts, 150);
  assert.equal(stats.correct, 70);
  assert.equal(JSON.stringify(history), before);
  assert.equal(practiceQuestionExamLabel({ ...added[0], bookSeries: '창작 모의고사', bookId: 'mock-mini-1', examYear: null }), '미니 모의고사 1회');
  assert.equal(practiceQuestionExamLabel({ ...added[0], examYear: null }), '연도 미상');
});

test('historical source aliases contribute to their own round once and retry through the canonical ID', () => {
  const q = { id: 'canonical', sourceIds: ['old', 'old'], revisionIds: ['rev', 'rev'], bank: 'practice', department: '내과', topic: '순환기', label: 'q', exam: '2026-2' };
  const saved = { ...state, progress: {
    old: { attempts: 1, correctAttempts: 0, lastCorrect: false, lastAttemptedAt: '2026-11-20' },
    rev: { attempts: 1, correctAttempts: 1, lastCorrect: true, lastAttemptedAt: '2026-11-19' },
  }, wrongIds: ['old'], sessions: [{ id: 'legacy', completedAt: '2026-09-01', questionIds: ['old'], correct: 0, total: 1 }] };
  const stats = buildQbankAnalytics([q], saved, 'practice');
  assert.equal(stats.selected.length, 1);
  assert.equal(stats.attempts, 2);
  assert.equal(stats.correct, 1);
  assert.equal(stats.exams[0].progressed, 1);
  assert.deepEqual(stats.exams[0].retryIds, ['canonical']);
  assert.equal(stats.sessions.length, 1);
});

test('latest correct retry resolves parent and internal subgroup counts without erasing history', () => {
  const q = { id: 'new', sourceIds: ['old'], bank: 'practice', department: '내과', subgroup: '순환기', topic: '순환기', label: 'q' };
  const progress = {
    old: { attempts: 2, correctAttempts: 0, lastCorrect: false, lastAttemptedAt: '2026-11-19' },
    new: { attempts: 1, correctAttempts: 1, lastCorrect: true, lastAttemptedAt: '2026-11-20' },
  };
  const saved = { ...state, progress, wrongIds: ['old'], bookmarkIds: ['old'] };
  const before = JSON.stringify(saved);
  const stats = buildQbankAnalytics([q], saved);
  assert.equal(stats.attempts, 3);
  assert.equal(stats.correct, 1);
  assert.equal(stats.wrong.length, 0);
  assert.equal(stats.practiceGroups[0].wrong, 0);
  assert.equal(stats.practiceGroups[0].children[0].wrong, 0);
  assert.equal(JSON.stringify(saved), before);
});

test('statistics launcher accepts canonical IDs whose wrong attempt belongs to a revision, then excludes a correct retry', () => {
  const original = 'QB-PF2026-V01-IM-1', revision = 'QB-REV-202611-PF2026-V01-IM-1';
  const saved = { ...state, progress: {
    [original]: { attempts: 1, correctAttempts: 1, lastCorrect: true, lastAttemptedAt: '2026-11-19' },
    [revision]: { attempts: 1, correctAttempts: 0, lastCorrect: false, lastAttemptedAt: '2026-11-20' },
  }, wrongIds: [revision] };
  assert.equal(isUnresolvedQbankWrong(saved, [original, revision]), true);
  saved.progress[revision] = { attempts: 2, correctAttempts: 1, lastCorrect: true, lastAttemptedAt: '2026-11-21' };
  assert.equal(isUnresolvedQbankWrong(saved, [original, revision]), false);
  assert.equal(isUnresolvedQbankWrong(saved, ['unrelated']), false);
});
