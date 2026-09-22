import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';

const compile = (name, deps = {}, globals = {}) => {
  const compiledModule = { exports: {} };
  const source = fs.readFileSync(new URL(`../src/lib/${name}`, import.meta.url), 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(output, { module: compiledModule, exports: compiledModule.exports, require: id => deps[id], ...globals });
  return compiledModule.exports;
};

const storage = () => {
  const values = new Map();
  return {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: key => values.delete(key),
  };
};
const browser = { localStorage: storage(), sessionStorage: storage() };
const grading = compile('qbank-grading.ts');
const mockExam = compile('mock-exam.ts', { './qbank-grading': grading });
const { activeSessionFrom, activeSessionsFrom, clearLocalActiveQbankSession, loadLocalActiveQbankSession, loadLocalActiveQbankSessions, remapLocalActiveQbankSession, saveLocalActiveQbankSession } = compile('qbank-active-session.ts', {
  './qbank-grading': grading,
  './mock-exam': mockExam,
}, { window: browser });

const legacy = {
  sessionId: 'legacy', updatedAt: '2026-09-22T00:00:00.000Z', questionIds: ['a'], currentIndex: 0,
  answers: [], selected: null, submitted: false,
};

test('legacy snapshots remain readable without display context', () => {
  const parsed = activeSessionFrom(legacy);
  assert.equal(parsed.sessionId, 'legacy');
  assert.equal(parsed.context, undefined);
});

test('structured context is sanitized and survives a JSON round trip', () => {
  const parsed = activeSessionFrom({
    ...legacy,
    sessionId: 'related',
    context: {
      kind: ' related-theory ',
      title: ' COPD 관련 이론문제 ',
      summary: ` ${'요'.repeat(300)} `,
      topics: [
        { type: 'disease', slug: ' copd ', title: ' COPD ', count: 12 },
        { type: 'disease', slug: 'copd', title: '중복', count: 99 },
        { type: 'drug', slug: 'bad', title: '제외', count: 2 },
        { type: 'cc', slug: 'dyspnea', title: ' 호흡곤란 ', count: 4 },
        { type: 'cc', slug: 'bad-count', title: '제외', count: -1 },
      ],
      settings: [' 이론 ', '미풀이 우선', '이론', 4, ''],
      requestedCount: 10,
      order: 'random',
      unattempted: true,
      ignored: 'field',
    },
  });
  assert.equal(parsed.context.kind, 'related-theory');
  assert.equal(parsed.context.title, 'COPD 관련 이론문제');
  assert.equal(parsed.context.summary.length, 240);
  assert.equal(JSON.stringify(parsed.context.topics), JSON.stringify([
    { type: 'disease', slug: 'copd', title: 'COPD', count: 12 },
    { type: 'cc', slug: 'dyspnea', title: '호흡곤란', count: 4 },
  ]));
  assert.equal(JSON.stringify(parsed.context.settings), JSON.stringify(['이론', '미풀이 우선']));
  assert.equal(JSON.stringify(activeSessionFrom(JSON.parse(JSON.stringify(parsed))).context), JSON.stringify(parsed.context));
});

test('question ID remapping preserves session display context', () => {
  const initial = activeSessionFrom({
    ...legacy,
    sessionId: 'remap', questionIds: ['old'], answers: [{ questionId: 'old', correct: false, specialty: '호흡기' }],
    context: { kind: 'related-theory', title: '관련 이론문제', topics: [{ type: 'disease', slug: 'copd', title: 'COPD', count: 12 }] },
  });
  saveLocalActiveQbankSession(initial);
  const remapped = remapLocalActiveQbankSession({ old: 'new' });
  assert.equal(remapped.questionIds[0], 'new');
  assert.equal(remapped.answers[0].questionId, 'new');
  assert.equal(JSON.stringify(remapped.context), JSON.stringify(initial.context));
});

test('malformed context is omitted instead of breaking the saved session', () => {
  const parsed = activeSessionFrom({ ...legacy, context: { kind: '../bad', title: 'Bad', requestedCount: -2 } });
  assert.equal(parsed.context, undefined);
});

test('multiple local sessions are retained, addressable and ordered newest first', () => {
  clearLocalActiveQbankSession();
  const ordinary = activeSessionFrom({ ...legacy, sessionId: 'ordinary', updatedAt: '2026-09-22T01:00:00.000Z', context: { kind: 'selection', title: '일반 문제풀이' } });
  const related = activeSessionFrom({ ...legacy, sessionId: 'related', updatedAt: '2026-09-22T02:00:00.000Z', context: { kind: 'related-theory', title: 'COPD 관련 이론문제' } });
  saveLocalActiveQbankSession(ordinary);
  saveLocalActiveQbankSession(related);
  assert.equal(JSON.stringify(loadLocalActiveQbankSessions().map(session => session.sessionId)), JSON.stringify(['related', 'ordinary']));
  assert.equal(loadLocalActiveQbankSession().sessionId, 'related');
  assert.equal(loadLocalActiveQbankSession('ordinary').context.title, '일반 문제풀이');
});

test('clearing one session preserves the other and clearing without an ID removes all', () => {
  clearLocalActiveQbankSession('related');
  assert.equal(loadLocalActiveQbankSessions().length, 1);
  assert.equal(loadLocalActiveQbankSession().sessionId, 'ordinary');
  assert.equal(browser.localStorage.getItem('medicine-web-qbank-session:related'), null);
  clearLocalActiveQbankSession();
  assert.equal(loadLocalActiveQbankSessions().length, 0);
  assert.equal(loadLocalActiveQbankSession(), null);
});

test('a legacy single-session value is read and migrated into the collection on save', () => {
  clearLocalActiveQbankSession();
  browser.localStorage.setItem('medicine-web-qbank-active-session-v1', JSON.stringify({ ...legacy, sessionId: 'legacy-only', context: { kind: 'selection', title: '이전 세션' } }));
  assert.equal(loadLocalActiveQbankSession().sessionId, 'legacy-only');
  const newer = activeSessionFrom({ ...legacy, sessionId: 'new', updatedAt: '2026-09-23T00:00:00.000Z', context: { kind: 'related-theory', title: '새 세션' } });
  saveLocalActiveQbankSession(newer);
  assert.equal(JSON.stringify(loadLocalActiveQbankSessions().map(session => session.sessionId)), JSON.stringify(['new', 'legacy-only']));
  assert.equal(JSON.parse(browser.localStorage.getItem('medicine-web-qbank-active-session-v1')).sessionId, 'new');
});

test('activeSessionsFrom accepts Supabase-style collections and keeps the newest duplicate', () => {
  const sessions = activeSessionsFrom({ sessions: [
    { ...legacy, sessionId: 'same', updatedAt: '2026-09-20T00:00:00.000Z' },
    { ...legacy, sessionId: 'same', updatedAt: '2026-09-22T00:00:00.000Z', context: { kind: 'related-theory', title: '최신' } },
    null,
  ] });
  assert.equal(sessions.length, 1);
  assert.equal(sessions[0].context.title, '최신');
});
