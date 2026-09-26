import fs from "node:fs";
import vm from "node:vm";
import { test } from "node:test";
import assert from "node:assert/strict";
import ts from "typescript";
import { makeAnchor, mergeHighlights, HIGHLIGHT_COLORS } from "../src/lib/highlight-anchor.ts";

const row = (id = "first", user_id = "owner", deleted = false) => ({
  id, user_id, document_key: "page:/test", color: "yellow", anchor: makeAnchor("검증 문서", 0, 2), deleted,
});
function harness({ storage = new Map(), remote = new Map(), account = "owner", offline = false, brokenStorage = false } = {}) {
  const state = { account, offline, last: [], status: "", writes: 0 };
  const client = {
    auth: { getSession: async () => ({ data: { session: { user: { id: state.account } } } }) },
    from() {
      let user, document, from = 0, to = 999;
      const query = {
        async upsert(rows) {
          if (state.offline) return { error: { message: "offline" } };
          state.writes += rows.length;
          for (const value of rows) {
            if (value.user_id !== state.account) return { error: { message: "RLS" } };
            const key = value.user_id + ":" + value.id, old = remote.get(key);
            remote.set(key, old ? { ...old, deleted: old.deleted || value.deleted } : value);
          }
          return { error: null };
        },
        select() { return query; },
        eq(key, value) { if (key === "user_id") user = value; else document = value; return query; },
        order() { return query; },
        range(start, end) { from = start; to = end; return query; },
        then(resolve, reject) {
          return Promise.resolve(state.offline ? { error: { message: "offline" }, data: null } : {
            error: null,
            data: [...remote.values()].filter(value => value.user_id === user && value.document_key === document).slice(from, to + 1),
          }).then(resolve, reject);
        },
      };
      return query;
    },
  };
  const compiled = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(new URL("../src/lib/highlight-store.ts", import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(code, {
    exports: compiled.exports, module: compiled,
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => { if (brokenStorage) throw new Error("quota"); storage.set(key, value); },
    },
    require: path => path === "./supabase/client" ? { getSupabaseBrowserClient: () => client } : { mergeHighlights, HIGHLIGHT_COLORS },
  });
  const create = (user = "owner") => new compiled.exports.HighlightStore(user, "page:/test", (rows, status) => { state.last = rows; state.status = status; });
  return { state, storage, remote, create };
}
const settled = () => new Promise(resolve => setImmediate(resolve));

test("offline marks survive reload and upload when connection returns", async () => {
  const h = harness({ offline: true }), first = h.create();
  first.write([row()]); await settled(); first.stop();
  const second = h.create();
  assert.equal(h.state.last.length, 1);
  h.state.offline = false; await second.sync();
  assert.equal(h.remote.size, 1);
  assert.equal(JSON.parse([...h.storage.values()][0]).pending.length, 0);
  assert.equal(h.state.status, "계정에 저장됨");
});
test("separate devices merge additions, and a stale device learns a server tombstone", async () => {
  const remote = new Map(), first = harness({ remote }), second = harness({ remote });
  const a = first.create(), b = second.create();
  a.write([row("a")]); b.write([row("b")]); await settled();
  await a.sync(); await b.sync();
  assert.equal(first.state.last.length, 2);
  a.write([row("a", "owner", true)]); await settled();
  b.write([row("a")]); await settled(); await b.sync();
  assert.equal(second.state.last.find(value => value.id === "a").deleted, true);
});
test("signing out or changing account does not send another account's pending marks", async () => {
  const h = harness({ offline: true }), store = h.create();
  store.write([row()]); await settled();
  h.state.offline = false; h.state.account = "other"; await store.sync();
  assert.equal(h.remote.size, 0);
  const other = h.create("other");
  assert.equal(h.state.last.length, 0); await other.sync();
  assert.equal(h.remote.size, 0);
});
test("invalid or foreign cache records are ignored", () => {
  const storage = new Map([["medicine:highlights:v1:owner:page:/test", JSON.stringify({ rows: [row("foreign", "other"), { id: "invalid" }], pending: [] })]]);
  const h = harness({ storage }); h.create();
  assert.equal(h.state.last.length, 0);
});
test("unavailable local storage still permits confirmed account saving", async () => {
  const h = harness({ brokenStorage: true }), store = h.create();
  store.write([row()]); await settled(); await store.sync();
  assert.equal(h.remote.size, 1);
  assert.equal(h.state.status, "계정에 저장됨");
});
