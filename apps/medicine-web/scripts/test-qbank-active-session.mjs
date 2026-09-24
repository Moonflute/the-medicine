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
const { activeSessionFrom, activeSessionsFrom, clearLocalActiveQbankSession, loadLocalActiveQbankSession, loadLocalActiveQbankSessions, planActiveQbankSessionSync, remapLocalActiveQbankSession, saveLocalActiveQbankSession } = compile('qbank-active-session.ts', {
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

test('a device-only set is scheduled for account upload', () => {
  const local = [{ ...legacy, sessionId: 'shared' }, { ...legacy, sessionId: 'device-only' }];
  const plan = planActiveQbankSessionSync(local, [local[0]], []);
  assert.deepEqual(Array.from(plan.sessions, session => session.sessionId).sort(), ['device-only', 'shared']);
  assert.deepEqual(Array.from(plan.toUpload, session => session.sessionId), ['device-only']);
});

test('newer server progress wins and an ended set is never uploaded again', () => {
  const local = [{ ...legacy, sessionId: 'shared' }, { ...legacy, sessionId: 'ended' }];
  const remote = [{ ...legacy, sessionId: 'shared', updatedAt: '2026-09-23T00:00:00.000Z', currentIndex: 1 }];
  const plan = planActiveQbankSessionSync(local, remote, ['ended']);
  assert.equal(plan.sessions.length, 1);
  assert.equal(plan.sessions[0].currentIndex, 1);
  assert.equal(plan.toUpload.length, 0);
});

test('a newer offline answer is scheduled to replace older server progress', () => {
  const local = [{ ...legacy, updatedAt: '2026-09-24T00:00:00.000Z', answers: [{ questionId: 'a', correct: true, specialty: '순환기' }] }];
  const plan = planActiveQbankSessionSync(local, [legacy], []);
  assert.equal(plan.sessions[0].answers.length, 1);
  assert.equal(plan.toUpload.length, 1);
});

const { saveCloudActiveQbankSession, removeCloudActiveQbankSession } = compile('qbank-active-session-cloud.ts', {
  './qbank-active-session': { activeSessionFrom, activeSessionsFrom },
});

function fakeActiveSessionClient(initial = []) {
  const rows = new Map(initial.map(row => [row.session_id, { ...row }]));
  return {
    rows,
    from(table) {
      assert.equal(table, 'qbank_active_sessions');
      return {
        upsert(row, options) {
          assert.equal(options.ignoreDuplicates, true);
          const run = async () => {
            if (rows.has(row.session_id)) return { data: [], error: null };
            rows.set(row.session_id, { ...row });
            return { data: [{ session_id: row.session_id }], error: null };
          };
          return { select: run, then: (resolve, reject) => run().then(resolve, reject) };
        },
        update(patch) {
          const filters = {};
          const query = {
            eq(key, value) { filters[key] = value; return this; },
            is(key, value) { filters[key] = value; return this; },
            lt(key, value) { filters[`lt:${key}`] = value; return this; },
            select() { return this; },
            then(resolve, reject) {
              const row = rows.get(filters.session_id);
              const matches = row && row.user_id === filters.user_id
                && (!Object.hasOwn(filters, 'ended_at') || row.ended_at == null)
                && (!filters['lt:updated_at'] || row.updated_at < filters['lt:updated_at']);
              if (matches) rows.set(filters.session_id, { ...row, ...patch });
              return Promise.resolve({ data: matches ? [{ session_id: filters.session_id }] : [], error: null }).then(resolve, reject);
            },
          };
          return query;
        },
      };
    },
  };
}

test('cloud upload inserts missing sets but cannot overwrite newer progress or ended sets', async () => {
  const client = fakeActiveSessionClient([
    { user_id: 'user', session_id: 'newer', payload: { ...legacy, sessionId: 'newer', currentIndex: 2 }, updated_at: '2026-09-24T00:00:00.000Z' },
    { user_id: 'user', session_id: 'ended', payload: { ...legacy, sessionId: 'ended' }, updated_at: '2026-09-24T00:00:00.000Z', ended_at: '2026-09-24T00:00:00.000Z' },
  ]);
  await saveCloudActiveQbankSession(client, 'user', { ...legacy, sessionId: 'missing' });
  await saveCloudActiveQbankSession(client, 'user', { ...legacy, sessionId: 'newer' });
  await saveCloudActiveQbankSession(client, 'user', { ...legacy, sessionId: 'ended', updatedAt: '2026-09-25T00:00:00.000Z' });
  assert.equal(client.rows.has('missing'), true);
  assert.equal(client.rows.get('newer').payload.currentIndex, 2);
  assert.ok(client.rows.get('ended').ended_at);
});

test('ending a local-only set records a tombstone before another device can upload it', async () => {
  const client = fakeActiveSessionClient();
  await removeCloudActiveQbankSession(client, 'user', legacy.sessionId, legacy);
  await saveCloudActiveQbankSession(client, 'user', { ...legacy, updatedAt: '2026-09-25T00:00:00.000Z' });
  assert.ok(client.rows.get(legacy.sessionId).ended_at);
});
