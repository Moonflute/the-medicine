import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { webcrypto } from "node:crypto";
import test from "node:test";
import ts from "typescript";

const root = path.resolve(import.meta.dirname, "..");
const require = createRequire(import.meta.url);
const uid = number => "10000000-0000-4000-8000-" + String(number).padStart(12, "0");
const plain = value => JSON.parse(JSON.stringify(value));
const actor = uid(99);
const fields = (values, at = 10, by = actor) => Object.fromEntries(Object.entries(values).map(([key, value]) => [key, { value, at, by }]));
const record = (id, kind, values) => ({ id: uid(id), kind, fields: fields(values) });
const flowRecord = () => record(1, "flow", { title: "테스트 Flow", createdAt: 1, deleted: false });
const itemRecord = () => record(2, "item", { flowId: uid(1), parentId: null, order: 1024, text: "처음 메모", done: false, links: [], createdAt: 2, deleted: false });
const item = (id, parentId = null, order = id * 1024) => ({ id: uid(id), flowId: uid(1), parentId: parentId ? uid(parentId) : null, order, text: "항목 " + id, done: false, links: [] });
function loadModules(disk = new Map()) {
  const window = new EventTarget();
  Object.assign(window, { crypto: webcrypto, localStorage: { getItem: key => disk.get(key) ?? null, setItem: (key, value) => disk.set(key, value) } });
  const context = vm.createContext({ window, CustomEvent, Event, console, Date, setTimeout, clearTimeout });
  const modules = new Map();
  const load = file => {
    if (modules.has(file)) return modules.get(file);
    const output = ts.transpileModule(fs.readFileSync(path.join(root, "src/lib/" + file + ".ts"), "utf8"), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText;
    const compiled = { exports: {} };
    const localRequire = name => name.startsWith("./") ? load(name.slice(2)) : require(name);
    const factory = vm.runInContext("(function(exports, require, module) {" + output + "\n})", context);
    factory(compiled.exports, localRequire, compiled);
    modules.set(file, compiled.exports);
    return compiled.exports;
  };
  return { model: load("study-flow-model"), store: load("study-flow-store"), disk, window };
}
const { model } = loadModules();

test("same outline powers the map; orphan/cyclic rows remain visible once", () => {
  const items = [item(2, 3), item(3, 2), item(4, 200), item(5, 3)];
  const rows = model.outlineStudyItems(items);
  assert.equal(rows.length, 4);
  assert.equal(new Set(rows.map(row => row.item.id)).size, 4);
  const layout = model.studyMindmapLayout(rows);
  assert.equal(layout.points.size, 4);
  for (const point of layout.points.values()) assert.ok(Number.isFinite(point.x) && Number.isFinite(point.y));
  assert.equal(model.outlineStudyItems([item(2), item(3, 2)], new Set([uid(2)])).length, 1);
});

test("indenting/reordering is cycle safe and deleting a parent retains child notes", () => {
  const items = [item(2), item(3), item(4, 2), item(5, 4)];
  assert.deepEqual(plain(model.moveStudyItemPlan(items, uid(2), uid(5))), []);
  const indent = model.indentStudyItemPlan(items, uid(3));
  assert.equal(indent.find(patch => patch.id === uid(3)).values.parentId, uid(2));
  const outdent = model.outdentStudyItemPlan(items, uid(4));
  assert.equal(outdent.find(patch => patch.id === uid(4)).values.parentId, null);
  const deletion = model.deleteStudyItemPlan(items, uid(2));
  assert.equal(deletion.find(patch => patch.id === uid(2)).values.deleted, true);
  assert.equal(deletion.find(patch => patch.id === uid(4)).values.parentId, null);
  assert.ok(!deletion.some(patch => patch.id === uid(5)));
});

test("concurrent edits to text and completion merge independently; stale fields cannot undo new ones", () => {
  const initial = itemRecord();
  const left = structuredClone(initial);
  const right = structuredClone(initial);
  left.fields.text = { value: "새 메모", at: 12, by: actor };
  right.fields.done = { value: true, at: 13, by: uid(98) };
  const forward = model.mergeStudyRecords([left], [right])[0];
  const reverse = model.mergeStudyRecords([right], [left])[0];
  assert.deepEqual(plain(forward), plain(reverse));
  assert.equal(forward.fields.text.value, "새 메모");
  assert.equal(forward.fields.done.value, true);
  assert.equal(model.mergeStudyRecords([forward], [initial])[0].fields.done.value, true);
  const restored = structuredClone(forward);
  restored.fields.done = { value: false, at: 14, by: actor };
  assert.equal(model.mergeStudyRecords([forward], [restored])[0].fields.done.value, false);
});

test("unsafe links and malformed records are rejected", () => {
  assert.ok(model.safeStudyHref("/disease/stroke?from=flow"));
  for (const href of ["javascript:alert(1)", "//example.com", "/\\example.com", "/bad page", "/bad\npath"]) assert.equal(model.safeStudyHref(href), false);
  assert.ok(model.studyRecordFrom(itemRecord()));
  const bad = itemRecord(); bad.fields.done.value = "false";
  assert.equal(model.studyRecordFrom(bad), null);
  assert.equal(model.studyRecordFrom({ ...flowRecord(), id: "bad" }), null);
});

test("every local edit is persisted; an old in-flight ack cannot clear a newer edit", () => {
  const { store, disk } = loadModules();
  const flow = store.createStudyFlow("저장 확인");
  const id = store.createStudyItem(flow, "첫 내용");
  const sent = plain(store.pendingStudyRecords());
  store.editStudyItem(id, { text: "전송 중 바뀐 내용" });
  store.receiveStudyRecords(sent, sent);
  assert.ok(store.getStudySnapshot().dirty.includes(id));
  assert.equal(store.getStudySnapshot().records.find(row => row.id === id).fields.text.value, "전송 중 바뀐 내용");
  const saved = JSON.parse(disk.get(store.STUDY_FLOW_STORAGE + "guest"));
  assert.equal(saved.records.find(row => row.id === id).fields.text.value, "전송 중 바뀐 내용");
  const pending = plain(store.pendingStudyRecords());
  store.receiveStudyRecords(pending, pending);
  assert.equal(store.pendingStudyRecords().length, 0);
});

test("accounts and guest notes are isolated; guest import is explicit and non-destructive", () => {
  const { store, disk } = loadModules();
  const guest = store.createStudyFlow("게스트");
  store.setStudyAccount(uid(20));
  assert.equal(store.getStudySnapshot().records.length, 0);
  assert.equal(store.hasGuestStudyFlows(), true);
  const own = store.createStudyFlow("계정 A");
  store.importGuestStudyFlows();
  assert.ok(store.getStudySnapshot().records.some(row => row.id === guest));
  store.setStudyAccount(uid(21));
  assert.equal(store.getStudySnapshot().records.length, 0);
  store.setStudyAccount(uid(20));
  assert.ok(store.getStudySnapshot().records.some(row => row.id === own));
  store.setStudyAccount(null);
  assert.equal(store.getStudySnapshot().records.length, 1);
  assert.equal(store.getStudySnapshot().records[0].id, guest);
  assert.ok(disk.has(store.STUDY_FLOW_STORAGE + uid(20)));
});

test("a stale tab merges disk records before editing; malformed storage is preserved", () => {
  const disk = new Map();
  const first = loadModules(disk).store;
  const flow = first.createStudyFlow("두 탭");
  const second = loadModules(disk).store;
  second.getStudySnapshot();
  const id = first.createStudyItem(flow, "추가");
  second.patchStudyRecords([{ id: flow, values: { title: "다른 탭 변경" } }]);
  assert.ok(second.getStudySnapshot().records.some(row => row.id === id));
  const broken = new Map([["medicine-study-flow-v1:guest", "{broken"]]);
  const recovered = loadModules(broken).store;
  assert.equal(recovered.getStudySnapshot().sync.state, "error");
  recovered.createStudyFlow("복구 후 새 기록");
  assert.ok([...broken.entries()].some(([key, value]) => key.includes(":recovery:") && value === "{broken"));
});

test("a storage failure is not hidden by a successful cloud status and can be retried", () => {
  const { store, window } = loadModules();
  const flow = store.createStudyFlow("용량 확인");
  const save = window.localStorage.setItem;
  window.localStorage.setItem = () => { throw new Error("Quota exceeded"); };
  store.patchStudyRecords([{ id: flow, values: { title: "메모는 메모리에 유지" } }]);
  assert.equal(store.getStudySnapshot().storageError, true);
  store.setStudySync({ state: "saved", message: "계정에 저장됨" });
  assert.match(store.getStudySnapshot().sync.message, /기기 저장공간 오류/);
  assert.equal(store.getStudySnapshot().records[0].fields.title.value, "메모는 메모리에 유지");
  window.localStorage.setItem = save;
  store.retryStudyStorage();
  assert.equal(store.getStudySnapshot().storageError, false);
});

test("two tabs have distinct write identities even when their storage is shared", () => {
  const disk = new Map();
  const first = loadModules(disk).store;
  const flow = first.createStudyFlow("첫 탭");
  const originalActor = first.getStudySnapshot().records[0].fields.title.by;
  const second = loadModules(disk).store;
  second.patchStudyRecords([{ id: flow, values: { title: "둘째 탭" } }]);
  assert.notEqual(second.getStudySnapshot().records[0].fields.title.by, originalActor);
});
