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
const { practiceAchievement } = await import(moduleUrl('../src/lib/practice-achievements.ts', { './practice-selection': selection }));
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
