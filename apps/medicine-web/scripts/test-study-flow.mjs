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
  return { model: load("study-flow-model"), search: load("study-flow-search"), store: load("study-flow-store"), disk, window };
}
const { model, search } = loadModules();

function loadEditor(store, source = null) {
  const focused = [];
  const react = {
    useCallback: callback => callback, useMemo: compute => compute(), useEffect: () => {},
    useRef: value => ({ current: value }), useState: value => [value, () => {}],
    useSyncExternalStore: (_subscribe, read) => read(),
  };
  const context = vm.createContext({
    requestAnimationFrame: callback => callback(),
    document: { getElementById: id => ({ focus: () => focused.push(id), scrollIntoView: () => {} }) },
    window: { matchMedia: () => ({ matches: false }) },
  });
  const modules = new Map();
  const load = file => {
    if (modules.has(file)) return modules.get(file);
    const compiled = { exports: {} };
    const localRequire = name => {
      if (name === "react") return react;
      if (name === "next/link") return { default: () => null };
      if (name === "next/navigation") return { usePathname: () => "/review/qbank/session", useRouter: () => ({ push: () => {} }) };
      if (name === "@/lib/study-flow-store") return store;
      if (name === "@/lib/study-flow-model") return model;
      if (name === "@/lib/study-flow-search") return { searchStudyLinks: () => [], loadStudySearchIndex: async () => [], practiceStudyEntries: () => [] };
      if (name === "@/lib/study-flow-source") return { currentStudyPageSource: () => source, studyPath: value => value, STUDY_SOURCE_EVENT: "source" };
      if (name === "@/lib/practice-bank") return { loadPracticeIndex: async () => ({ questions: [] }) };
      if (name === "./study-flow-mindmap") return { StudyFlowMindmap: () => null };
      if (name === "./study-flow-item-row") return load("study-flow-item-row");
      return require(name);
    };
    const output = ts.transpileModule(fs.readFileSync(path.join(root, "src/components/" + file + ".tsx"), "utf8"), {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
    }).outputText;
    vm.runInContext("(function(exports, require, module) {" + output + "\n})", context)(compiled.exports, localRequire, compiled);
    modules.set(file, compiled.exports);
    return compiled.exports;
  };
  return { ...load("study-flow-item-row"), ...load("study-flow-panel"), focused };
}
function findElement(tree, matches) {
  if (!tree || typeof tree !== "object" || !tree.props) return undefined;
  if (matches(tree)) return tree;
  for (const child of [tree.props.children].flat()) {
    const found = findElement(child, matches);
    if (found) return found;
  }
}
function keyEvent(key, extra = {}) {
  return { key, nativeEvent: {}, preventDefault() { this.prevented = true; }, currentTarget: { selectionStart: 0, selectionEnd: 0 }, ...extra };
}

test("@ document search excludes public and private questions while retaining documents", () => {
  const entries = [
    { key: "question:theory", kind: "question", title: "심부전 이론 문항", href: "/review/qbank/session?ids=theory", aliases: ["심부전"] },
    { key: "question:practice", kind: "question", title: "심부전 실전 문항", href: "/review/qbank/session?ids=practice", aliases: ["심부전"] },
    { key: "disease:heart-failure", kind: "disease", title: "심부전", href: "/disease/heart-failure/", aliases: [] },
  ];
  assert.deepEqual(plain(search.searchStudyLinks(entries, "심부전")).map(entry => entry.kind), ["disease"]);
  assert.deepEqual(plain(search.searchStudyLinks(entries, "", "question")), []);
});

test("Tab creates and focuses a child; Enter and row plus create blank siblings without splitting notes", () => {
  const { store } = loadModules();
  const flow = store.createStudyFlow();
  const parentId = store.createStudyItem(flow, "기존 메모는 그대로 유지");
  store.createStudyItem(flow, "다음 최상위 항목");
  store.setStudyUI({ collapsed: [parentId] });
  const editor = loadEditor(store);
  const row = id => editor.StudyFlowItemRow({
    item: model.studyItems(store.getStudySnapshot().records, flow).find(item => item.id === id),
    selected: true, hasChildren: true, collapsed: true, entries: [], onSearch: () => {}, onNavigate: () => {},
  });
  const input = tree => findElement(tree, node => node.type === "textarea");
  const tab = keyEvent("Tab");
  input(row(parentId)).props.onKeyDown(tab);
  assert.equal(tab.prevented, true);
  const childId = store.getStudySnapshot().ui.itemId;
  let items = model.studyItems(store.getStudySnapshot().records, flow);
  assert.equal(items.find(item => item.id === childId).parentId, parentId);
  assert.equal(items.find(item => item.id === parentId).text, "기존 메모는 그대로 유지");
  assert.ok(!store.getStudySnapshot().ui.collapsed.includes(parentId));
  assert.equal(editor.focused.at(-1), "study-flow-input-" + childId);
  store.editStudyItem(childId, { text: "하위 메모" });
  const enter = keyEvent("Enter");
  input(row(childId)).props.onKeyDown(enter);
  const siblingId = store.getStudySnapshot().ui.itemId;
  items = model.studyItems(store.getStudySnapshot().records, flow);
  assert.equal(items.find(item => item.id === childId).text, "하위 메모");
  assert.equal(items.find(item => item.id === siblingId).text, "");
  assert.equal(items.find(item => item.id === siblingId).parentId, parentId);
  assert.deepEqual(plain(model.outlineStudyItems(items).map(row => row.item.id)), [parentId, childId, siblingId, items[1].id]);
  const line = findElement(row(siblingId), node => node.props.className === "study-flow-row-line");
  const controls = line.props.children;
  assert.equal(controls[0].props.className, "study-flow-grip");
  assert.equal(controls[1].props.className, "study-flow-row-move");
  assert.deepEqual(plain(controls[1].props.children.map(node => node.props["aria-label"])), ["위로 이동", "아래로 이동"]);
  assert.equal(controls[2].props.className, "study-flow-row-add");
  controls[2].props.onClick();
  const added = model.studyItems(store.getStudySnapshot().records, flow).find(item => item.id === store.getStudySnapshot().ui.itemId);
  assert.equal(added.parentId, parentId);
  assert.equal(added.text, "");
  const count = store.getStudySnapshot().records.length;
  input(row(added.id)).props.onKeyDown(keyEvent("Enter", { shiftKey: true }));
  input(row(added.id)).props.onKeyDown(keyEvent("Enter", { nativeEvent: { isComposing: true } }));
  assert.equal(store.getStudySnapshot().records.length, count);
});

test("current question adds only its ID link; bottom plus appends a root even from a child selection", () => {
  const { store } = loadModules();
  const flow = store.createStudyFlow();
  const parentId = store.createStudyItem(flow, "기존 학습 목록");
  const lastRoot = store.createStudyItem(flow, "마지막 최상위 항목");
  store.createStudyItem(flow, "선택한 하위 메모", undefined, parentId);
  const link = { key: "question:QB-0031", kind: "question", title: "분과와 아주 긴 문제 본문", href: "/review/qbank/session?mode=study-flow&ids=QB-0031&count=1" };
  const editor = loadEditor(store, link);
  const panel = editor.StudyFlowPanel();
  const currentButton = findElement(panel, node => node.type === "button" && [node.props.children].flat().filter(value => typeof value === "string").join("") === "현재 문제 추가");
  assert.ok(currentButton);
  currentButton.props.onClick();
  const questionItem = model.studyItems(store.getStudySnapshot().records, flow).find(item => item.id === store.getStudySnapshot().ui.itemId);
  assert.equal(questionItem.text, "");
  assert.deepEqual(plain(questionItem.links), [{ ...link, title: "QB-0031" }]);
  const row = editor.StudyFlowItemRow({ item: questionItem, previousId: parentId, selected: true, hasChildren: false, collapsed: false, entries: [], onSearch: () => {}, onNavigate: () => {} });
  findElement(row, node => node.type === "textarea").props.onKeyDown(keyEvent("Backspace"));
  assert.ok(model.studyItems(store.getStudySnapshot().records, flow).some(item => item.id === questionItem.id));
  const append = findElement(editor.StudyFlowPanel(), node => node.props["aria-label"] === "맨 아래 새 항목 추가");
  append.props.onClick();
  const items = model.studyItems(store.getStudySnapshot().records, flow);
  const addedId = store.getStudySnapshot().ui.itemId;
  assert.equal(items.find(item => item.id === addedId).parentId, null);
  const roots = model.outlineStudyItems(items).filter(row => row.depth === 0).map(row => row.item.id);
  assert.deepEqual(plain(roots), [parentId, lastRoot, addedId]);
});

test("linked question text stays empty while ordinary document titles still seed a new memo", () => {
  const link = { key: "disease:/disease/stroke", kind: "disease", title: "뇌졸중", href: "/disease/stroke" };
  assert.deepEqual(plain(model.studyItemLinkContent(link)), { text: "뇌졸중", link });
  assert.deepEqual(plain(model.studyItemLinkContent()), { text: "" });
  assert.deepEqual(plain(model.studyItemLinkContent({ ...link, key: "question:0031", kind: "question" })), { text: "", link: { ...link, key: "question:0031", kind: "question", title: "0031" } });
});

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

function loadButtonPreferences(disk = new Map()) {
  const window = new EventTarget();
  const document = { documentElement: { dataset: {} } };
  const counts = { added: 0, removed: 0 };
  const addListener = window.addEventListener.bind(window);
  const removeListener = window.removeEventListener.bind(window);
  window.addEventListener = (name, callback) => { if (name === "storage") counts.added++; addListener(name, callback); };
  window.removeEventListener = (name, callback) => { if (name === "storage") counts.removed++; removeListener(name, callback); };
  window.localStorage = { getItem: key => disk.get(key) ?? null, setItem: (key, value) => disk.set(key, value) };
  const context = vm.createContext({ window, document, localStorage: window.localStorage });
  const output = ts.transpileModule(fs.readFileSync(path.join(root, "src/lib/study-flow-preferences.ts"), "utf8"), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const compiled = { exports: {} };
  vm.runInContext("(function(exports, module) {" + output + "\n})", context)(compiled.exports, compiled);
  return { preferences: compiled.exports, window, document, context, disk, counts };
}

test("Flow button visibility persists without touching notes and initializes before paint", () => {
  const disk = new Map([["medicine-study-flow-v1:guest", "existing notes"]]);
  const first = loadButtonPreferences(disk);
  const prefs = first.preferences;
  assert.equal(prefs.getStudyFlowButtonVisible(), true);
  assert.equal(prefs.setStudyFlowButtonVisible(false), true);
  assert.equal(prefs.getStudyFlowButtonVisible(), false);
  assert.equal(disk.get("medicine-study-flow-v1:guest"), "existing notes");
  const refreshed = loadButtonPreferences(disk);
  vm.runInContext(refreshed.preferences.studyFlowButtonInitScript, refreshed.context);
  assert.equal(refreshed.document.documentElement.dataset.studyFlowButton, "hidden");
  assert.equal(refreshed.preferences.getStudyFlowButtonVisible(), false);
  assert.equal(refreshed.preferences.getStudyFlowButtonServerSnapshot(), true);
  assert.equal(refreshed.preferences.setStudyFlowButtonVisible(true), true);
  assert.equal(prefs.STUDY_FLOW_BUTTON_STORAGE_KEY, "medicine-study-flow-button-v1");
  const visibleRefresh = loadButtonPreferences(disk);
  vm.runInContext(visibleRefresh.preferences.studyFlowButtonInitScript, visibleRefresh.context);
  assert.equal(visibleRefresh.preferences.getStudyFlowButtonVisible(), true);
});

test("Flow settings notify both mounted controls with one shared storage listener", () => {
  const { preferences: prefs, counts } = loadButtonPreferences();
  let changes = 0;
  const unsubscribeFirst = prefs.subscribeStudyFlowButton(() => changes++);
  const unsubscribeSecond = prefs.subscribeStudyFlowButton(() => changes++);
  assert.equal(counts.added, 1);
  prefs.setStudyFlowButtonVisible(false);
  assert.equal(changes, 2);
  unsubscribeFirst();
  assert.equal(counts.removed, 0);
  prefs.setStudyFlowButtonVisible(true);
  assert.equal(changes, 3);
  unsubscribeSecond();
  assert.equal(counts.removed, 1);
});

test("Flow button setting follows other tabs and restores the default on storage clear", () => {
  const { preferences: prefs, window } = loadButtonPreferences();
  let changes = 0;
  const unsubscribe = prefs.subscribeStudyFlowButton(() => changes++);
  window.dispatchEvent(Object.assign(new Event("storage"), { key: "unrelated", newValue: "hidden" }));
  assert.equal(changes, 0);
  window.dispatchEvent(Object.assign(new Event("storage"), { key: prefs.STUDY_FLOW_BUTTON_STORAGE_KEY, newValue: "hidden" }));
  assert.equal(prefs.getStudyFlowButtonVisible(), false);
  assert.equal(changes, 1);
  window.dispatchEvent(Object.assign(new Event("storage"), { key: null, newValue: null }));
  assert.equal(prefs.getStudyFlowButtonVisible(), true);
  assert.equal(changes, 2);
  unsubscribe();
});

test("blocked preference storage still applies the current choice and reports it unsaved", () => {
  const { preferences: prefs, window, context, document } = loadButtonPreferences();
  window.localStorage.getItem = () => { throw new Error("Storage blocked"); };
  vm.runInContext(prefs.studyFlowButtonInitScript, context);
  assert.equal(document.documentElement.dataset.studyFlowButton, "shown");
  window.localStorage.setItem = () => { throw new Error("Quota exceeded"); };
  assert.equal(prefs.setStudyFlowButtonVisible(false), false);
  assert.equal(prefs.getStudyFlowButtonVisible(), false);
});
