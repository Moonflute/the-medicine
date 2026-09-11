import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { webcrypto } from "node:crypto";
import assert from "node:assert/strict";
import test from "node:test";
import ts from "typescript";

function harness() {
  const values = new Map();
  const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key), key: i => [...values.keys()][i] ?? null, get length() { return values.size; } };
  const window = { localStorage: storage, dispatchEvent() {} };
  const cache = new Map();
  const root = fileURLToPath(new URL("../src/lib/", import.meta.url));
  function load(name) {
    const filename = path.resolve(root, `${name}.ts`);
    if (cache.has(filename)) return cache.get(filename).exports;
    const compiled = { exports: {} };
    cache.set(filename, compiled);
    const js = ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
    vm.runInNewContext(js, { exports: compiled.exports, module: compiled, window, Event, CustomEvent, crypto: webcrypto, console, require: ref => load(ref.replace(/^\.\//, "")) });
    return compiled.exports;
  }
  return { storage, outbox: load("learning-sync-outbox"), engine: load("learning-sync-engine"), review: load("review-store"), qbank: load("qbank-store") };
}
const catalog = id => ({ type: "disease", id, title: id, href: `/disease/${id}`, category: "test", summary: "" });
function server(outbox) {
  const tables = Object.fromEntries(outbox.SYNC_TABLES.map(table => [table, []]));
  const calls = [];
  let fail = false;
  let partial = false;
  let duringWrite;
  const client = { from(table) {
    let user, start = 0, end = Infinity, rows;
    const query = {
      select() { return query; }, returns() { return query; }, eq(field, value) { assert.equal(field, "user_id"); user = value; return query; }, order() { return query; },
      range(a, b) { start = a; end = b; return query; }, limit(n) { end = n - 1; return query; },
      upsert(data) { rows = data; return query; },
      async then(resolve, reject) {
        try {
          if (!rows) { assert.equal(user, "u1"); calls.push({table, start, end}); return resolve({data: tables[table].filter(row => row.user_id === user).slice(start, end + 1), error: null}); }
          if (fail) return resolve({data: null, error: new Error("offline")});
          for (const row of rows) {
            assert.equal(row.user_id, "u1");
            const index = tables[table].findIndex(existing => outbox.rowKey(table, existing) === outbox.rowKey(table, row));
            if (index < 0) tables[table].push({...row}); else tables[table][index] = {...tables[table][index], ...row};
          }
          if (duringWrite) { const fn = duringWrite; duringWrite = undefined; fn(); }
          return resolve({data: partial ? [] : rows, error: null});
        } catch (error) { return reject(error); }
      },
    };
    return query;
  } };
  return { tables, calls, client, fail: value => {fail = value;}, partial: value => {partial = value;}, duringWrite: fn => {duringWrite = fn;} };
}
test("pages retrieve more than 1,000 rows, including a smaller server cap; failures never return partial data", async () => {
  const {outbox} = harness();
  const rows = Array.from({length: 1257}, (_, i) => i);
  const all = await outbox.readAllPages(async from => ({data: rows.slice(from, from + 200), error: null}));
  assert.equal(all.length, 1257);
  await assert.rejects(outbox.readAllPages(async from => ({data: from ? null : [1], error: from ? new Error("network") : null})));
});
test("all document and question progress tables are paginated and scoped to the account", async () => {
  const {engine, outbox} = harness(); const api = server(outbox);
  for (const table of outbox.SYNC_TABLES.filter(t => t !== "qbank_sessions")) api.tables[table] = Array.from({length: 1205}, (_, i) => ({user_id: "u1", domain: "disease", content_id: String(i), question_id: String(i)}));
  const rows = await engine.readRemote(api.client, "u1");
  for (const table of outbox.SYNC_TABLES.filter(t => t !== "qbank_sessions")) assert.equal(rows[table].length, 1205);
});
test("offline removal and answer survive reload, a failed write and later retry", async () => {
  const h = harness(); const api = server(h.outbox);
  h.review.toggleReviewItem(catalog("a"));
  h.qbank.recordQbankAttempt("q1", "A", false);
  api.fail(true);
  await assert.rejects(h.engine.synchronizeLearning(api.client, "u1", () => true));
  assert.notEqual(h.storage.getItem(`${h.engine.MIGRATION_PREFIX}u1`), "done");
  assert.equal(h.qbank.loadQbankState().progress.q1.attempts, 1);
  assert.ok(h.outbox.pendingWrites().length >= 2);
  // Reload sees persisted entries, not an in-memory dirty flag.
  assert.ok([...Array(h.storage.length)].some((_, i) => h.storage.key(i).startsWith(h.outbox.OUTBOX_PREFIX)));
  h.review.toggleReviewItem(catalog("a"));
  api.fail(false);
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  assert.equal(api.tables.review_items[0].is_saved, false);
  assert.equal(api.tables.qbank_question_progress[0].attempts, 1);
  assert.equal(h.outbox.pendingWrites().length, 0);
  assert.equal(h.storage.getItem(`${h.engine.MIGRATION_PREFIX}u1`), "done");
});
test("an edit made during an upload is not acknowledged by its older response", async () => {
  const h = harness(); const api = server(h.outbox);
  h.qbank.recordQbankAttempt("q1", "A", false);
  api.duringWrite(() => h.qbank.recordQbankAttempt("q1", "B", true));
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  assert.ok(h.outbox.pendingWrites().length);
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  assert.equal(api.tables.qbank_question_progress[0].attempts, 2);
  assert.equal(api.tables.qbank_question_progress[0].last_answer, "B");
  assert.equal(h.outbox.pendingWrites().length, 0);
});
test("unconfirmed server writes remain pending and retry without duplicate attempts", async () => {
  const h = harness(); const api = server(h.outbox);
  h.qbank.recordQbankAttempt("q1", "A", false);
  api.partial(true);
  await assert.rejects(h.engine.synchronizeLearning(api.client, "u1", () => true));
  assert.ok(h.outbox.pendingWrites().length);
  api.partial(false);
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  assert.equal(api.tables.qbank_question_progress[0].attempts, 1);
});
test("bookmark removal does not overwrite newer server answers; recent-session hydration preserves local daily history", async () => {
  const h = harness(); const api = server(h.outbox);
  h.qbank.toggleQbankBookmark("q1");
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  h.qbank.toggleQbankBookmark("q1");
  Object.assign(api.tables.qbank_question_progress[0], {attempts: 5, last_answer: "C", last_correct: true, consecutive_correct: 3});
  const local = h.qbank.loadQbankState(); local.dailyActivity["2025-01-01"] = {attempts: 42, correct: 30}; h.qbank.saveQbankState(local, "remote");
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  assert.equal(api.tables.qbank_question_progress[0].bookmarked, false);
  assert.equal(api.tables.qbank_question_progress[0].last_answer, "C");
  assert.equal(h.qbank.loadQbankState().dailyActivity["2025-01-01"].attempts, 42);
});
test("account changes never hydrate or upload another user's local records", async () => {
  const h = harness(); const api = server(h.outbox);
  h.storage.setItem(h.outbox.OWNER_KEY, "other-user");
  await assert.rejects(h.engine.synchronizeLearning(api.client, "u1", () => true));
  assert.equal(api.calls.length, 0);
  h.storage.setItem(h.outbox.OWNER_KEY, "u1");
  await assert.rejects(h.engine.synchronizeLearning(api.client, "u1", () => false));
  assert.equal(api.calls.length, 0);
});

test("initial migration preserves legacy counters when only a bookmark is pending", async () => {
  const h = harness(); const api = server(h.outbox);
  const local = h.qbank.loadQbankState();
  local.progress.q1 = {questionId: "q1", attempts: 7, correctAttempts: 4, consecutiveCorrect: 0};
  h.qbank.saveQbankState(local, "remote");
  h.qbank.toggleQbankBookmark("q1");
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  assert.equal(api.tables.qbank_question_progress[0].attempts, 7);
  assert.equal(api.tables.qbank_question_progress[0].bookmarked, true);
});
test("unsent sessions survive the 100-session display limit", async () => {
  const h = harness(); const api = server(h.outbox);
  for (let i = 0; i < 105; i++) h.qbank.saveQbankSession({id:`s${i}`,startedAt:new Date(i * 1000).toISOString(),completedAt:new Date(i * 1000 + 500).toISOString(),questionIds:["q1"],correct:0,total:1});
  assert.equal(h.qbank.loadQbankState().sessions.length, 100);
  assert.equal(h.outbox.pendingWrites().filter(entry => entry.table === "qbank_sessions").length, 105);
  await h.engine.synchronizeLearning(api.client, "u1", () => true);
  assert.equal(api.tables.qbank_sessions.length, 105);
  assert.equal(h.qbank.loadQbankState().sessions[0].id, "s104");
});
