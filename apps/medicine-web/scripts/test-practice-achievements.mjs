import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

const moduleUrl = (path, imports = {}) => {
  let js = ts.transpileModule(fs.readFileSync(new URL(path, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  for (const [from, to] of Object.entries(imports)) js = js.replaceAll(`"${from}"`, JSON.stringify(to));
  return `data:text/javascript;base64,${Buffer.from(js).toString('base64')}`;
};
const selection = moduleUrl('../src/lib/practice-selection.ts');
const { practiceAchievement, completedPracticeExamKeys } = await import(moduleUrl('../src/lib/practice-achievements.ts', {
  './practice-selection': selection, './qbank-grading': moduleUrl('../src/lib/qbank-grading.ts'),
}));
const { compareMockSubjects, MOCK_SUBJECTS } = await import(moduleUrl('../src/lib/mock-exam.ts', { './qbank-grading': moduleUrl('../src/lib/qbank-grading.ts') }));
const round = (key, count, year = null) => Array.from({ length: count }, (_, i) => ({
  id: `QB-${key}-IM-${i}`, bookId: key, examYear: year, bookSeries: year === null ? '창작 모의고사' : '실전',
}));
const full = round('mock-full-1', 100);
const mini = round('mock-mini-1', 50);
const archive = round('past', 100, 2025);
const catalogue = [...full, ...mini, ...archive];
const session = (id, questions, correct, extra = {}) => ({ id, startedAt: '2026-11-18T00:00:00Z', completedAt: '2026-11-18T01:00:00Z', questionIds: questions.map(q => q.id), correct, total: questions.length, ...extra });

test('subject results always use IM, GS, OG, PE order, without changing question order', () => {
  const permutations = values => values.length ? values.flatMap((value, i) => permutations(values.filter((_, j) => j !== i)).map(rest => [value, ...rest])) : [[]];
  for (const input of permutations([...MOCK_SUBJECTS])) assert.deepEqual([...input].sort(compareMockSubjects), MOCK_SUBJECTS);
  assert.deepEqual(['외과', '내과', '기타'].sort(compareMockSubjects), ['내과', '외과', '기타']);
  assert.deepEqual(['02 호흡기', '01 순환기'].sort(compareMockSubjects), ['01 순환기', '02 호흡기']);
});

test('40 percent is inclusive for both 100-question and 50-question rounds', () => {
  for (const [questions, pass, fail] of [[full, 40, 39], [mini, 20, 19], [archive, 40, 39]]) {
    assert.equal(practiceAchievement(session('current', questions, pass), [], catalogue).passed, true);
    assert.equal(practiceAchievement(session('current', questions, fail), [], catalogue).passed, false);
  }
});

test('round records and overall records are separate, normalized comparisons; ties are not records', () => {
  const current = session('current', mini, 30);
  const history = [session('same-round', mini, 25), session('other-round', full, 80), current];
  const result = practiceAchievement(current, history, catalogue);
  assert.equal(result.score, 60); assert.equal(result.roundRecord, true); assert.equal(result.overallRecord, false);
  assert.equal(practiceAchievement(current, [session('tie', mini, 30)], catalogue).roundRecord, false);
  assert.equal(practiceAchievement(current, [session('equivalent', full, 60)], catalogue).overallRecord, false);
  assert.equal(practiceAchievement(session('new', mini, 45), history, catalogue).overallRecord, true);
});

test('partial sets, mixed rounds, unsubmitted study answers and non-practice sessions do not qualify', () => {
  for (const current of [session('retry', mini.slice(0, 5), 5), session('mixed', [...mini.slice(0, 25), ...full.slice(0, 25)], 40),
    session('early', mini, 10, { total: 10 }), session('theory', [{ id: 'theory-1' }], 1), session('empty', [], 0)]) {
    assert.equal(practiceAchievement(current, [], catalogue), null);
  }
  const current = session('current', full, 50);
  assert.equal(practiceAchievement(current, [session('retry', mini.slice(0, 5), 5)], catalogue).overallRecord, true);
});

test('shuffled order, historical aliases and revised question IDs refer to the same full round', () => {
  const changed = mini.map(q => ({ ...q, sourceIds: [`old-${q.id}`], revisionIds: [`revised-${q.id}`] }));
  const current = session('current', changed.map(q => ({ id: q.revisionIds[0] })).reverse(), 30);
  const older = session('old', changed.map(q => ({ id: q.sourceIds[0] })), 35);
  assert.equal(practiceAchievement(current, [older], changed).roundRecord, false);
  assert.equal(practiceAchievement({ ...current, questionIds: Array(50).fill(current.questionIds[0]) }, [], changed), null);
});

test('graded snapshots retain omitted questions, while zero denominators never pass', () => {
  const current = session('current', mini, 20, { total: 49, mockExam: { results: mini.map(q => ({ questionId: q.id })) } });
  assert.equal(practiceAchievement(current, [], catalogue).passed, true);
  assert.equal(practiceAchievement({ ...current, total: 0, correct: 0 }, [], catalogue), null);
});

test('later records do not retroactively remove an achievement, and fractions are not rounded for passing', () => {
  const current = session('current', full, 50);
  const later = session('later', full, 90, { completedAt: '2026-11-19T00:00:00Z' });
  assert.equal(practiceAchievement(current, [later, current], catalogue).overallRecord, true);
  const odd = round('mock-full-2', 101);
  assert.equal(practiceAchievement(session('fraction', odd, 40), [], odd).passed, false);
});

const coverageState = (questions, extra = {}) => ({
  progress: Object.fromEntries(questions.map(q => [q.id, { questionId: q.id, attempts: 1, lastAnswer: 'B', lastCorrect: false }])),
  sessions: [], ...extra,
});

test('round completion requires every distinct question, not correctness or repeated attempts', () => {
  assert.deepEqual([...completedPracticeExamKeys(catalogue, coverageState([]))], []);
  assert.deepEqual([...completedPracticeExamKeys(catalogue, coverageState(mini.slice(0, 49)))], []);
  const repeated = coverageState(mini.slice(0, 49));
  repeated.progress[mini[0].id].attempts = 500;
  assert.deepEqual([...completedPracticeExamKeys(catalogue, repeated)], []);
  assert.deepEqual([...completedPracticeExamKeys(catalogue, coverageState(mini))], ['mock-mini-1']);
});

test('original 2026 and RES 26 remain separate rounds, as do authored rounds', () => {
  const original = round('past-2026', 2, 2026);
  const res26 = round('practice-res2608', 2, 2026);
  const all = [...original, ...res26, ...mini];
  assert.deepEqual([...completedPracticeExamKeys(all, coverageState(original))], ['2026']);
  assert.deepEqual([...completedPracticeExamKeys(all, coverageState(res26))], ['2026-2']);
  assert.deepEqual([...completedPracticeExamKeys(all, coverageState([...res26, ...mini]))], ['2026-2', 'mock-mini-1']);
});

test('completion combines source aliases and revisions without double counting or mutating records', () => {
  const changed = mini.map(q => ({ ...q, sourceIds: ['old-' + q.id], revisionIds: ['revision-' + q.id] }));
  const answered = changed.map((q, i) => ({ id: i % 2 ? q.revisionIds[0] : q.sourceIds[0] }));
  const state = coverageState(answered);
  const before = JSON.stringify(state);
  assert.deepEqual([...completedPracticeExamKeys(changed, state)], ['mock-mini-1']);
  assert.equal(JSON.stringify(state), before);
  delete state.progress[answered[49].id];
  state.progress[changed[0].id] = { attempts: 500, lastAnswer: 'A' };
  assert.deepEqual([...completedPracticeExamKeys(changed, state)], []);
});

test('blank mock submissions, bookmarks, drafts and progress placeholders do not count', () => {
  const state = coverageState(mini);
  state.progress[mini[49].id] = { attempts: 2, lastCorrect: false };
  state.sessions = [session('blank', mini, 0, {
    mockExam: { results: mini.map(q => ({ questionId: q.id, correct: false })) },
  })];
  state.bookmarkIds = [mini[49].id];
  state.drafts = { [mini[49].id]: 'A' };
  assert.deepEqual([...completedPracticeExamKeys(mini, state)], []);
  state.progress[mini[49].id] = { attempts: 0, lastAnswer: 'A' };
  assert.deepEqual([...completedPracticeExamKeys(mini, state)], []);
});

test('past submitted snapshots count ungraded answers and survive a newer incomplete retry', () => {
  const results = mini.map(q => ({ questionId: q.id, selected: 'B', correct: null }));
  const state = coverageState([], { sessions: [
    session('retry', mini.slice(0, 2), 0, { mockExam: { results: [{ questionId: mini[0].id }] } }),
    session('old-complete', mini, 0, { total: 0, mockExam: { results } }),
  ], progressResetAt: '2026-11-19T00:00:00Z' });
  assert.deepEqual([...completedPracticeExamKeys(catalogue, state)], ['mock-mini-1']);
  assert.deepEqual([...completedPracticeExamKeys(catalogue, coverageState([]))], []);
});

test('partial sessions contribute only actual answers, not their entire selected question list', () => {
  const left = mini.slice(0, 25).map(q => ({ questionId: q.id, selected: 'A' }));
  const right = mini.slice(25).map(q => ({ questionId: q.id, selected: ['A', 'C'] }));
  const first = session('first', mini, 0, { mockExam: { results: left } });
  const second = session('second', mini, 0, { mockExam: { results: right } });
  assert.deepEqual([...completedPracticeExamKeys(mini, coverageState([], { sessions: [first] }))], []);
  assert.deepEqual([...completedPracticeExamKeys(mini, coverageState([], { sessions: [first, second] }))], ['mock-mini-1']);
  assert.deepEqual([...completedPracticeExamKeys(mini, coverageState([], { sessions: [session('not-a-snapshot', mini, 10, { total: 10 })] }))], []);
});

test('legacy completed rounds survive missing last answers and absent detailed snapshots', () => {
  const res26 = round('practice-res2608', 50, 2026);
  const year2025 = round('past', 50, 2025);
  const year2026 = round('past-2026', 100, 2026);
  const state = coverageState([...res26, ...year2025, ...year2026]);
  delete state.progress[res26[31].id].lastAnswer;
  for (const q of year2025.slice(0, 9)) delete state.progress[q.id].lastAnswer;
  for (const q of year2026.slice(0, 3)) delete state.progress[q.id].lastAnswer;
  state.sessions = [
    session('legacy-res26', res26, 36),
    session('legacy-2025', year2025, 18),
    session('partial-2026', year2026.slice(0, 28), 14),
  ];
  const before = JSON.stringify(state);
  assert.deepEqual([...completedPracticeExamKeys([...res26, ...year2025, ...year2026], state)], ['2026-2', '2025']);
  assert.equal(JSON.stringify(state), before);
});

test('legacy fallback rejects incomplete, mixed, duplicate and invalid completion records', () => {
  const all = [...mini, ...full];
  const invalid = [
    session('early', mini, 10, { total: 10 }),
    session('short', mini.slice(0, 5), 5),
    session('mixed', [...mini.slice(0, 25), ...full.slice(0, 25)], 20),
    session('duplicates', Array(50).fill(mini[0]), 10),
    session('unavailable', [{ id: 'not-listed' }, ...mini.slice(1)], 10),
    session('invalid-date', mini, 20, { completedAt: '' }),
    session('invalid-score', mini, 51),
  ];
  for (const saved of invalid) assert.deepEqual([...completedPracticeExamKeys(all, coverageState([], { sessions: [saved] }))], [], saved.id);
});

test('snapshot blanks remain incomplete; only a full legacy result can preserve older completion', () => {
  const results = mini.map((q, i) => ({ questionId: q.id, selected: i ? 'A' : undefined, correct: false }));
  const newer = session('newer-with-blank', mini, 0, { mockExam: { results } });
  const state = coverageState([], { sessions: [newer] });
  assert.deepEqual([...completedPracticeExamKeys(mini, state)], []);
  const oldAliases = mini.map(q => ({ ...q, sourceIds: ['old-' + q.id] }));
  const older = session('legacy-completed', oldAliases.map(q => ({ id: q.sourceIds[0] })), 0);
  state.sessions.push(older);
  assert.deepEqual([...completedPracticeExamKeys(oldAliases, state)], ['mock-mini-1']);
});

test('inaccessible, obsolete or non-round questions cannot create a completed round', () => {
  const hidden = round('hidden', 2, 2000);
  const revisions = mini.map(q => ({ ...q, id: 'rev-' + q.id, bookSeries: '실전 개정판' }));
  assert.deepEqual([...completedPracticeExamKeys([], coverageState(hidden))], []);
  assert.deepEqual([...completedPracticeExamKeys([...mini, ...revisions], coverageState(hidden))], []);
  assert.deepEqual([...completedPracticeExamKeys([{ ...mini[0], bookId: 'bank', bookSeries: '실전', examYear: null }], coverageState(mini))], []);
});
