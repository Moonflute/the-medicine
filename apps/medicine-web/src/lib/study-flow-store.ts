import { deleteStudyItemPlan, indentStudyItemPlan, mergeStudyRecords, moveStudyItemPlan, outdentStudyItemPlan, studyFlows, studyItems, studyRecordFrom, type StudyLink, type StudyPatch, type StudyRecord } from "./study-flow-model";

export const STUDY_FLOW_EVENT = "medicine:study-flow-change";
export const STUDY_FLOW_RETRY = "medicine:study-flow-retry";
export const STUDY_FLOW_STORAGE = "medicine-study-flow-v1:";
export type StudyUI = { open: boolean; flowId: string | null; itemId: string | null; view: "outline" | "mindmap"; collapsed: string[]; hideDone: boolean };
export type StudySync = { state: "local" | "pending" | "syncing" | "saved" | "offline" | "error"; message: string };
export type StudySnapshot = { account: string | null; records: StudyRecord[]; dirty: string[]; ui: StudyUI; sync: StudySync; storageError: boolean };
const EMPTY_UI: StudyUI = { open: false, flowId: null, itemId: null, view: "outline", collapsed: [], hideDone: false };
const SERVER: StudySnapshot = { account: null, records: [], dirty: [], ui: EMPTY_UI, sync: { state: "local", message: "기기에 자동저장" }, storageError: false };
let snapshot: StudySnapshot | null = null;
let account: string | null = null;
let clock = 0;
let device: string | null = null;
const listeners = new Set<() => void>();

function uuid() {
  return window.crypto.randomUUID();
}
function deviceId() {
  // Each editor instance needs its own tie-breaker: two tabs may edit in the
  // same millisecond. Reusing a shared device ID would leave equal stamps.
  return device ??= uuid();
}
function key(user = account) { return STUDY_FLOW_STORAGE + (user ?? "guest"); }

function readDisk(user = account): Pick<StudySnapshot, "records" | "dirty" | "ui"> {
  const raw = window.localStorage.getItem(key(user));
  if (!raw) return { records: [], dirty: [], ui: { ...EMPTY_UI } };
  const saved = JSON.parse(raw) as { version?: number; records?: unknown[]; dirty?: string[]; ui?: Partial<StudyUI> };
  if (saved.version !== 1 || !Array.isArray(saved.records)) throw new Error("저장된 기록을 읽지 못했습니다.");
  const records = saved.records.map(studyRecordFrom);
  if (records.some(record => !record)) throw new Error("저장된 기록을 읽지 못했습니다.");
  const ui = saved.ui ?? {};
  return {
    records: records as StudyRecord[],
    dirty: Array.isArray(saved.dirty) ? saved.dirty.filter(id => typeof id === "string") : [],
    ui: { open: Boolean(ui.open), flowId: typeof ui.flowId === "string" ? ui.flowId : null, itemId: typeof ui.itemId === "string" ? ui.itemId : null, view: ui.view === "mindmap" ? "mindmap" : "outline", collapsed: Array.isArray(ui.collapsed) ? ui.collapsed.filter(id => typeof id === "string") : [], hideDone: Boolean(ui.hideDone) },
  };
}
function observeClock(records: readonly StudyRecord[]) {
  for (const record of records) for (const field of Object.values(record.fields)) clock = Math.max(clock, field.at);
}
export function getStudySnapshot(): StudySnapshot {
  if (typeof window === "undefined") return SERVER;
  if (!snapshot) {
    try { snapshot = { ...readDisk(), account, sync: { state: "local", message: "기기에 자동저장" }, storageError: false }; }
    catch { snapshot = { ...SERVER, account, ui: { ...EMPTY_UI }, sync: { state: "error", message: "기기 기록을 읽지 못했습니다. 원본은 보존되어 있습니다." } }; }
    observeClock(snapshot.records);
  }
  return snapshot;
}
export function getStudyServerSnapshot() { return SERVER; }

function emit(source: "local" | "remote" | "ui" = "local") {
  for (const listener of listeners) listener();
  window.dispatchEvent(new CustomEvent(STUDY_FLOW_EVENT, { detail: { source, account } }));
}
function persist(source: "local" | "remote" | "ui" = "local") {
  const state = getStudySnapshot();
  try {
    // Preserve malformed old storage instead of replacing the only copy.
    const raw = window.localStorage.getItem(key());
    if (raw) {
      try { readDisk(); } catch { window.localStorage.setItem(key() + ":recovery:" + Date.now(), raw); }
    }
    window.localStorage.setItem(key(), JSON.stringify({ version: 1, records: state.records, dirty: state.dirty, ui: state.ui }));
    if (state.storageError) snapshot = { ...state, storageError: false, sync: { state: "pending", message: account ? "기기에 저장 · 동기화 대기" : "기기에 자동저장" } };
  } catch {
    snapshot = { ...state, storageError: true, sync: { state: "error", message: "기기에 저장하지 못했습니다. 저장 공간을 확인해 주세요." } };
  }
  emit(source);
}
function refreshFromDisk() {
  const state = getStudySnapshot();
  try {
    const saved = readDisk();
    snapshot = { ...state, records: mergeStudyRecords(state.records, saved.records), dirty: [...new Set([...state.dirty, ...saved.dirty])] };
    observeClock(snapshot.records);
  } catch { /* Keep the last readable snapshot. */ }
}
export function subscribeStudyFlow(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== key()) return;
    refreshFromDisk();
    emit("remote");
  };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(listener); window.removeEventListener("storage", onStorage); };
}

export function setStudyAccount(next: string | null) {
  if (next === account) return;
  const open = getStudySnapshot().ui.open;
  account = next;
  snapshot = null;
  const state = getStudySnapshot();
  snapshot = { ...state, ui: { ...state.ui, open: state.ui.open || open } };
  emit("remote");
}
export function setStudySync(sync: StudySync) {
  const state = getStudySnapshot();
  if (state.storageError) sync = { ...sync, message: sync.state === "saved" ? "계정에 저장됨 · 기기 저장공간 오류" : "기기에 저장하지 못했습니다 · 저장공간을 확인해 주세요" };
  if (state.sync.state === sync.state && state.sync.message === sync.message) return;
  snapshot = { ...state, sync };
  emit("ui");
}
export function retryStudyStorage() { persist("ui"); }
export function setStudyUI(patch: Partial<StudyUI>) {
  refreshFromDisk();
  const state = getStudySnapshot();
  if (Object.entries(patch).every(([name, value]) => JSON.stringify(state.ui[name as keyof StudyUI]) === JSON.stringify(value))) return;
  snapshot = { ...state, ui: { ...state.ui, ...patch } };
  persist("ui");
}
function nextStamp() {
  clock = Math.max(Date.now(), clock + 1);
  return { at: clock, by: deviceId() };
}
export function patchStudyRecords(patches: readonly StudyPatch[]) {
  refreshFromDisk();
  const state = getStudySnapshot();
  const stamp = nextStamp();
  const pending = new Set(state.dirty);
  const byId = new Map(patches.map(patch => [patch.id, patch.values]));
  const records = state.records.map(record => {
    const values = byId.get(record.id);
    if (!values) return record;
    const fields = { ...record.fields };
    let changed = false;
    for (const [name, value] of Object.entries(values)) {
      if (!(name in fields) || JSON.stringify(fields[name].value) === JSON.stringify(value)) continue;
      fields[name] = { value, ...stamp };
      changed = true;
    }
    const updated = { ...record, fields };
    if (!changed || !studyRecordFrom(updated)) return record;
    pending.add(record.id);
    return updated;
  });
  snapshot = { ...state, records, dirty: [...pending], sync: { state: "pending", message: account ? "기기에 저장 · 동기화 대기" : "기기에 자동저장" } };
  persist();
}
function createRecord(kind: StudyRecord["kind"], values: Record<string, unknown>) {
  refreshFromDisk();
  const state = getStudySnapshot();
  const stamp = nextStamp();
  const record: StudyRecord = { id: uuid(), kind, fields: Object.fromEntries(Object.entries(values).map(([name, value]) => [name, { value, ...stamp }])) };
  if (!studyRecordFrom(record)) throw new Error("항목을 만들지 못했습니다.");
  snapshot = { ...state, records: [...state.records, record], dirty: [...new Set([...state.dirty, record.id])], sync: { state: account ? "pending" : "local", message: account ? "기기에 저장 · 동기화 대기" : "기기에 자동저장 · 로그인하면 기기 간 동기화" } };
  persist();
  return record.id;
}
export function createStudyFlow(title = "새 학습 Flow") {
  const id = createRecord("flow", { title: title.slice(0, 200), createdAt: Date.now(), deleted: false });
  setStudyUI({ flowId: id, itemId: null, open: true });
  return id;
}
export function createStudyItem(flowId: string, text = "", link?: StudyLink, parentId: string | null = null, afterId?: string) {
  const items = studyItems(getStudySnapshot().records, flowId);
  const after = afterId ? items.find(item => item.id === afterId) : undefined;
  if (after) parentId = after.parentId;
  const id = createRecord("item", { flowId, parentId, order: Math.max(0, ...items.filter(item => item.parentId === parentId).map(item => item.order)) + 1024, text: text.slice(0, 20000), done: false, links: link ? [link] : [], createdAt: Date.now(), deleted: false });
  if (after) {
    const siblings = [...items].filter(item => item.parentId === parentId).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
    const beforeId = siblings[siblings.findIndex(item => item.id === after.id) + 1]?.id;
    patchStudyRecords(moveStudyItemPlan(studyItems(getStudySnapshot().records, flowId), id, parentId, beforeId));
  }
  setStudyUI({ itemId: id, flowId });
  return id;
}
export function editStudyItem(id: string, values: Record<string, unknown>) { patchStudyRecords([{ id, values }]); }
export function attachStudyLink(id: string, link: StudyLink) {
  const record = getStudySnapshot().records.find(record => record.id === id && record.kind === "item");
  if (!record) return;
  const links = record.fields.links.value as StudyLink[];
  if (links.length >= 50 && !links.some(item => item.key === link.key)) return;
  editStudyItem(id, { links: [...links.filter(item => item.key !== link.key), link] });
}
export function indentStudyItem(flowId: string, id: string, outdent = false) {
  const items = studyItems(getStudySnapshot().records, flowId);
  const plan = outdent ? outdentStudyItemPlan(items, id) : indentStudyItemPlan(items, id);
  if (!plan.length) return false;
  patchStudyRecords(plan);
  return true;
}
export function moveStudyItem(flowId: string, id: string, parentId: string | null, beforeId?: string) {
  patchStudyRecords(moveStudyItemPlan(studyItems(getStudySnapshot().records, flowId), id, parentId, beforeId));
}
export function deleteStudyItem(flowId: string, id: string) {
  patchStudyRecords(deleteStudyItemPlan(studyItems(getStudySnapshot().records, flowId), id));
  if (getStudySnapshot().ui.itemId === id) setStudyUI({ itemId: null });
}
export function deleteStudyFlow(id: string) {
  patchStudyRecords([{ id, values: { deleted: true } }, ...studyItems(getStudySnapshot().records, id).map(item => ({ id: item.id, values: { deleted: true } }))]);
  setStudyUI({ flowId: studyFlows(getStudySnapshot().records)[0]?.id ?? null, itemId: null });
}
export function pendingStudyRecords() {
  const state = getStudySnapshot();
  const dirty = new Set(state.dirty);
  return state.records.filter(record => dirty.has(record.id));
}
export function receiveStudyRecords(incoming: StudyRecord[], sent: readonly StudyRecord[] = []) {
  refreshFromDisk();
  const state = getStudySnapshot();
  const signatures = new Map(sent.map(record => [record.id, JSON.stringify(record)]));
  const acknowledged = new Set(state.records.filter(record => signatures.get(record.id) === JSON.stringify(record)).map(record => record.id));
  snapshot = { ...state, records: mergeStudyRecords(state.records, incoming), dirty: state.dirty.filter(id => !acknowledged.has(id)) };
  observeClock(snapshot.records);
  persist("remote");
}
export function hasGuestStudyFlows() {
  if (!account) return false;
  try {
    const own = new Set(studyFlows(getStudySnapshot().records).map(flow => flow.id));
    return studyFlows(readDisk(null).records).some(flow => !own.has(flow.id));
  } catch { return false; }
}
export function importGuestStudyFlows() {
  if (!account) return;
  const guest = readDisk(null);
  const state = getStudySnapshot();
  snapshot = { ...state, records: mergeStudyRecords(state.records, guest.records), dirty: [...new Set([...state.dirty, ...guest.records.map(record => record.id)])] };
  observeClock(snapshot.records);
  persist();
}
