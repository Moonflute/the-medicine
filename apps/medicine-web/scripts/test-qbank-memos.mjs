import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";
import { webcrypto } from "node:crypto";
import ts from "typescript";

const source = fs.readFileSync(new URL("../src/lib/qbank-memo-store.ts", import.meta.url), "utf8");
const compiled = { exports: {} };
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, { module: compiled, exports: compiled.exports, crypto: webcrypto });
const { QuestionMemoStore, MEMO_LIMIT, MEMO_PREFIX } = compiled.exports;
function storage(values = new Map()) {
  return { values, getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), key: i => [...values.keys()][i] ?? null, get length() { return values.size; } };
}
function server() {
  const rows = new Map();
  let fail = false;
  let duringSave;
  const key = (owner, id) => `${owner}:${id}`;
  return {
    rows, fail: value => { fail = value; }, duringSave: callback => { duringSave = callback; },
    api: {
      async read(owner) { if (fail) throw new Error("offline"); return [...rows.values()].filter(row => row.user_id === owner).map(row => ({ ...row })); },
      async save(owner, id, body, revision) {
        if (fail) throw new Error("offline");
        const old = rows.get(key(owner, id));
        if (old && old.revision !== revision) return { row: { ...old }, accepted: old.body === body };
        const row = { user_id: owner, question_id: id, body, revision: revision + 1, updated_at: new Date().toISOString() };
        rows.set(key(owner, id), row);
        if (duringSave) { const callback = duringSave; duringSave = undefined; await callback(); }
        return { row: { ...row }, accepted: true };
      },
    },
  };
}
const sync = (store, remote) => store.sync(remote.api, () => true);

test("notes use account + question keys across all banks; reset/session keys stay untouched", async () => {
  const disk = storage(); const remote = server(); const a = new QuestionMemoStore("a", disk, () => {});
  for (const id of ["theory-hypertension", "medqa-us-train-001245", "QB-P-2024-IM-001"]) a.edit(id, `메모 ${id}`);
  const b = new QuestionMemoStore("b", disk, () => {});
  assert.equal(b.get("theory-hypertension"), undefined);
  b.edit("theory-hypertension", "다른 계정 메모");
  await sync(a, remote); await sync(b, remote);
  assert.equal(remote.rows.size, 4);
  assert.equal(a.get("theory-hypertension").remote.body, "메모 theory-hypertension");
  assert.ok([...disk.values.keys()].every(key => key.startsWith(MEMO_PREFIX)));
});

test("every edit persists immediately and resumes sync after closing offline", async () => {
  const disk = storage(); const remote = server(); const first = new QuestionMemoStore("a", disk, () => {});
  first.edit("q", "틀린 이유를 기록"); remote.fail(true); await sync(first, remote); first.stop();
  const resumed = new QuestionMemoStore("a", disk, () => {});
  assert.equal(resumed.get("q").draft.body, "틀린 이유를 기록");
  remote.fail(false); await sync(resumed, remote);
  assert.equal(resumed.get("q").draft, undefined);
  assert.equal(remote.rows.get("a:q").body, "틀린 이유를 기록");
  const device2 = new QuestionMemoStore("a", storage(), () => {}); await sync(device2, remote);
  assert.equal(device2.get("q").remote.body, "틀린 이유를 기록");
});

test("typing during an upload survives the older acknowledgement", async () => {
  const remote = server(); const a = new QuestionMemoStore("a", storage(), () => {});
  a.edit("q", "first"); remote.duringSave(() => a.edit("q", "second")); await sync(a, remote);
  assert.equal(a.get("q").draft.body, "second");
  assert.equal(a.get("q").draft.revision, 1);
  await sync(a, remote);
  assert.equal(remote.rows.get("a:q").body, "second");
  assert.equal(a.get("q").draft, undefined);
});

test("concurrent device edits preserve both versions until explicitly resolved", async () => {
  const remote = server(); const a = new QuestionMemoStore("a", storage(), () => {}); const b = new QuestionMemoStore("a", storage(), () => {});
  a.edit("q", "base"); await sync(a, remote); await sync(b, remote);
  a.edit("q", "device A"); b.edit("q", "device B"); await sync(a, remote); await sync(b, remote);
  assert.equal(b.get("q").conflict, true);
  assert.equal(b.get("q").draft.body, "device B");
  assert.equal(b.get("q").remote.body, "device A");
  b.resolve("q", "local"); await sync(b, remote);
  assert.equal(remote.rows.get("a:q").body, "device B");
  assert.equal(b.get("q").conflict, false);
});

test("choosing the remote memo discards only the explicitly rejected local draft", async () => {
  const remote = server(); const a = new QuestionMemoStore("a", storage(), () => {}); const b = new QuestionMemoStore("a", storage(), () => {});
  a.edit("q", "saved"); await sync(a, remote); b.edit("q", "new"); await sync(b, remote);
  b.resolve("q", "remote");
  assert.equal(b.get("q").draft, undefined);
  assert.equal(b.get("q").remote.body, "saved");
});

test("an empty memo is versioned and cannot be resurrected by an offline editor", async () => {
  const remote = server(); const a = new QuestionMemoStore("a", storage(), () => {}); const b = new QuestionMemoStore("a", storage(), () => {});
  a.edit("q", "original"); await sync(a, remote); await sync(b, remote);
  b.edit("q", "offline edit"); a.edit("q", ""); await sync(a, remote); await sync(b, remote);
  assert.equal(remote.rows.get("a:q").body, "");
  assert.equal(b.get("q").conflict, true);
});

test("logout during download or upload never applies an old account response", async () => {
  const remote = server(); const a = new QuestionMemoStore("a", storage(), () => {}); let active = true;
  a.edit("q", "account A"); remote.duringSave(() => { active = false; a.stop(); });
  await a.sync(remote.api, () => active);
  assert.equal(a.get("q").draft.body, "account A");
  a.edit("q", "must not write after logout");
  assert.equal(a.get("q").draft.body, "account A");
  const b = new QuestionMemoStore("b", storage(), () => {}); await sync(b, remote);
  assert.equal(b.get("q"), undefined);
});

test("a lost successful response is idempotent on retry", async () => {
  const remote = server(); const a = new QuestionMemoStore("a", storage(), () => {});
  a.edit("q", "saved once"); remote.duringSave(() => { throw new Error("lost response"); }); await sync(a, remote);
  assert.ok(a.get("q").draft); await sync(a, remote);
  assert.equal(a.get("q").draft, undefined); assert.equal(remote.rows.get("a:q").revision, 1);
});

test("CAS catches a write occurring after the sync read", async () => {
  const remote = server(); const a = new QuestionMemoStore("a", storage(), () => {});
  a.edit("q", "local");
  await a.sync({ ...remote.api, save: async (...args) => {
    remote.rows.set("a:q", { user_id: "a", question_id: "q", body: "other device", revision: 1, updated_at: new Date().toISOString() });
    return remote.api.save(...args);
  } }, () => true);
  assert.equal(a.get("q").conflict, true); assert.equal(a.get("q").draft.body, "local");
});

test("shared browser tabs retain an edit made while another tab uploads", async () => {
  const disk = storage(); const remote = server(); const a = new QuestionMemoStore("a", disk, () => {}); const b = new QuestionMemoStore("a", disk, () => {});
  a.edit("q", "tab A"); remote.duringSave(() => b.edit("q", "tab B")); await sync(a, remote); b.refreshLocal(); await sync(b, remote);
  assert.equal(remote.rows.get("a:q").body, "tab B");
});

test("invalid or cross-account cache is rejected and oversized text is not saved", () => {
  const disk = storage();
  disk.setItem(`${MEMO_PREFIX}a:q`, JSON.stringify({ owner: "b", questionId: "q", draft: { body: "private", revision: 0, token: "x" } }));
  const a = new QuestionMemoStore("a", disk, () => {});
  assert.equal(a.get("q"), undefined); a.edit("q", "x".repeat(MEMO_LIMIT + 1)); assert.equal(a.get("q"), undefined);
});

test("storage failure keeps the memory draft until the account confirms it", async () => {
  const remote = server(); const disk = storage(); const a = new QuestionMemoStore("a", disk, () => {});
  a.edit("q", "disk version"); disk.setItem = () => { throw new Error("quota"); };
  a.edit("q", "memory version"); a.refreshLocal(); assert.equal(a.get("q").draft.body, "memory version");
  await sync(a, remote); assert.equal(remote.rows.get("a:q").body, "memory version"); assert.equal(a.get("q").draft, undefined);
});

test("memo UI is wired into every normal question, mock mode and chat mock mode", () => {
  for (const file of ["qbank-session-client.tsx", "mock-exam-panel.tsx"]) {
    const component = fs.readFileSync(new URL(`../src/components/${file}`, import.meta.url), "utf8");
    assert.match(component, /<QbankMemoButton/); assert.match(component, /<QbankMemoPanel/);
  }
  const panel = fs.readFileSync(new URL("../src/components/qbank-question-memo.tsx", import.meta.url), "utf8");
  assert.match(panel, /practiceSourceQuestionId\(questionId\)/);
  assert.match(panel, /aria-expanded/); assert.match(panel, /data-highlight-ignore/);
});
