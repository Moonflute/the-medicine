export type StudyLink = { key: string; kind: string; title: string; href: string };
export type StudyField = { value: unknown; at: number; by: string };
export type StudyRecord = { id: string; kind: "flow" | "item"; fields: Record<string, StudyField> };
export type StudyFlow = { id: string; title: string; createdAt: number };
export type StudyItem = { id: string; flowId: string; parentId: string | null; order: number; text: string; done: boolean; links: StudyLink[] };
export type StudyPatch = { id: string; values: Record<string, unknown> };
export type OutlineRow = { item: StudyItem; depth: number; parentId: string | null };

export function studyItemLinkContent(link?: StudyLink): { text: string; link?: StudyLink } {
  if (!link) return { text: "" };
  if (link.kind !== "question") return { text: link.title, link };
  const questionId = link.key.startsWith("question:") ? link.key.slice("question:".length) : "";
  return { text: "", link: { ...link, title: questionId || link.title } };
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const FLOW_FIELDS = ["title", "createdAt", "deleted"];
const ITEM_FIELDS = ["flowId", "parentId", "order", "text", "done", "links", "createdAt", "deleted"];

export function safeStudyHref(value: unknown): value is string {
  return typeof value === "string" && value.length <= 2000 && value.startsWith("/") && !value.startsWith("//") && !/[\\\u0000-\u0020\u007f]/.test(value);
}

export function studyLinkFrom(value: unknown): StudyLink | null {
  if (!value || typeof value !== "object") return null;
  const link = value as Partial<StudyLink>;
  return typeof link.key === "string" && link.key.length > 0 && link.key.length <= 1000
    && typeof link.kind === "string" && link.kind.length > 0 && link.kind.length <= 40
    && typeof link.title === "string" && link.title.length > 0 && link.title.length <= 300 && safeStudyHref(link.href)
    ? { key: link.key, kind: link.kind, title: link.title, href: link.href } : null;
}

function validValue(key: string, value: unknown) {
  if (key === "title" || key === "text") return typeof value === "string" && value.length <= (key === "title" ? 200 : 20000);
  if (key === "deleted" || key === "done") return typeof value === "boolean";
  if (key === "flowId") return typeof value === "string" && UUID.test(value);
  if (key === "parentId") return value === null || (typeof value === "string" && UUID.test(value));
  if (key === "createdAt") return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
  if (key === "order") return typeof value === "number" && Number.isFinite(value) && Math.abs(value) <= 1e12;
  if (key === "links") return Array.isArray(value) && value.length <= 50 && value.every(link => studyLinkFrom(link));
  return false;
}

export function studyRecordFrom(value: unknown): StudyRecord | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Partial<StudyRecord>;
  if (typeof record.id !== "string" || !UUID.test(record.id) || (record.kind !== "flow" && record.kind !== "item") || !record.fields || typeof record.fields !== "object") return null;
  const keys = record.kind === "flow" ? FLOW_FIELDS : ITEM_FIELDS;
  const fields: Record<string, StudyField> = {};
  for (const key of keys) {
    const field = record.fields[key];
    if (!field || typeof field !== "object" || !Number.isSafeInteger(field.at) || field.at < 0 || typeof field.by !== "string" || !UUID.test(field.by) || !validValue(key, field.value)) return null;
    fields[key] = { value: field.value, at: field.at, by: field.by };
  }
  return { id: record.id, kind: record.kind, fields };
}

export function mergeStudyRecords(local: readonly StudyRecord[], incoming: readonly StudyRecord[]): StudyRecord[] {
  const byId = new Map(local.map(record => [record.id, record]));
  for (const candidate of incoming) {
    const record = studyRecordFrom(candidate);
    if (!record) continue;
    const previous = byId.get(record.id);
    if (!previous) { byId.set(record.id, record); continue; }
    if (previous.kind !== record.kind) continue;
    const fields = { ...previous.fields };
    for (const [key, field] of Object.entries(record.fields)) {
      const old = fields[key];
      if (!old || field.at > old.at || (field.at === old.at && field.by > old.by)) fields[key] = field;
    }
    byId.set(record.id, { ...previous, fields });
  }
  return [...byId.values()];
}

export function studyFlows(records: readonly StudyRecord[]): StudyFlow[] {
  return records.filter(record => record.kind === "flow" && !record.fields.deleted.value)
    .map(record => ({ id: record.id, title: record.fields.title.value as string, createdAt: record.fields.createdAt.value as number }))
    .sort((a, b) => a.createdAt - b.createdAt || a.id.localeCompare(b.id));
}

export function studyItems(records: readonly StudyRecord[], flowId: string): StudyItem[] {
  return records.filter(record => record.kind === "item" && !record.fields.deleted.value && record.fields.flowId.value === flowId)
    .map(record => ({ id: record.id, flowId, parentId: record.fields.parentId.value as string | null, order: record.fields.order.value as number, text: record.fields.text.value as string, done: record.fields.done.value as boolean, links: record.fields.links.value as StudyLink[] }));
}

function byOrder(a: StudyItem, b: StudyItem) { return a.order - b.order || a.id.localeCompare(b.id); }

/** Concurrent reparenting may form a cycle. Render every item once with a deterministic root. */
export function outlineStudyItems(items: readonly StudyItem[], collapsed: ReadonlySet<string> = new Set()): OutlineRow[] {
  const byId = new Map(items.map(item => [item.id, item]));
  const parents = new Map(items.map(item => [item.id, item.parentId && byId.has(item.parentId) && item.parentId !== item.id ? item.parentId : null]));
  for (const item of items) {
    const path: string[] = [];
    let id: string | null = item.id;
    while (id) {
      const cycle = path.indexOf(id);
      if (cycle >= 0) { parents.set(path.slice(cycle).sort()[0], null); break; }
      path.push(id);
      id = parents.get(id) ?? null;
    }
  }
  const children = new Map<string | null, StudyItem[]>();
  for (const item of items) {
    const parent = parents.get(item.id) ?? null;
    const siblings = children.get(parent) ?? [];
    siblings.push(item);
    children.set(parent, siblings);
  }
  for (const siblings of children.values()) siblings.sort(byOrder);
  const stack = [...(children.get(null) ?? [])].reverse().map(item => ({ item, depth: 0, parentId: null as string | null }));
  const rows: OutlineRow[] = [];
  while (stack.length) {
    const row = stack.pop()!;
    rows.push(row);
    if (!collapsed.has(row.item.id)) for (const child of [...(children.get(row.item.id) ?? [])].reverse()) stack.push({ item: child, depth: row.depth + 1, parentId: row.item.id });
  }
  return rows;
}

export function descendantStudyIds(items: readonly StudyItem[], id: string): Set<string> {
  const result = new Set<string>([id]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const item of items) if (item.parentId && result.has(item.parentId) && !result.has(item.id)) { result.add(item.id); changed = true; }
  }
  return result;
}

export function moveStudyItemPlan(items: readonly StudyItem[], id: string, parentId: string | null, beforeId?: string): StudyPatch[] {
  const item = items.find(item => item.id === id);
  if (!item || (parentId && !items.some(item => item.id === parentId))) return [];
  if (parentId && descendantStudyIds(items, id).has(parentId)) return [];
  const siblings = items.filter(candidate => candidate.id !== id && candidate.parentId === parentId).sort(byOrder);
  const index = beforeId ? siblings.findIndex(candidate => candidate.id === beforeId) : -1;
  siblings.splice(index < 0 ? siblings.length : index, 0, { ...item, parentId });
  return siblings.map((candidate, index) => ({ id: candidate.id, values: { order: (index + 1) * 1024, ...(candidate.id === id ? { parentId } : {}) } }));
}

export function indentStudyItemPlan(items: readonly StudyItem[], id: string): StudyPatch[] {
  const item = items.find(item => item.id === id);
  if (!item) return [];
  const siblings = items.filter(candidate => candidate.parentId === item.parentId).sort(byOrder);
  const index = siblings.findIndex(candidate => candidate.id === id);
  return index > 0 ? moveStudyItemPlan(items, id, siblings[index - 1].id) : [];
}

export function outdentStudyItemPlan(items: readonly StudyItem[], id: string): StudyPatch[] {
  const item = items.find(item => item.id === id);
  const parent = item?.parentId ? items.find(candidate => candidate.id === item.parentId) : undefined;
  if (!parent) return [];
  const siblings = items.filter(candidate => candidate.parentId === parent.parentId && candidate.id !== id).sort(byOrder);
  return moveStudyItemPlan(items, id, parent.parentId, siblings[siblings.findIndex(candidate => candidate.id === parent.id) + 1]?.id);
}

/** Deleting a row retains its children in the same study sequence. */
export function deleteStudyItemPlan(items: readonly StudyItem[], id: string): StudyPatch[] {
  const item = items.find(candidate => candidate.id === id);
  if (!item) return [];
  const children = items.filter(candidate => candidate.parentId === id).sort(byOrder);
  const siblings = items.filter(candidate => candidate.parentId === item.parentId).sort(byOrder);
  const position = siblings.findIndex(candidate => candidate.id === id);
  siblings.splice(position, 1, ...children);
  return [{ id, values: { deleted: true } }, ...siblings.map((candidate, index) => ({ id: candidate.id, values: { order: (index + 1) * 1024, ...(candidate.parentId === id ? { parentId: item.parentId } : {}) } }))];
}

export function studyMindmapLayout(rows: readonly OutlineRow[]) {
  const points = new Map<string, { x: number; y: number }>();
  let leaf = 0;
  const children = new Map<string, string[]>();
  for (const row of rows) if (row.parentId) children.set(row.parentId, [...(children.get(row.parentId) ?? []), row.item.id]);
  for (const row of rows) if (!children.has(row.item.id)) points.set(row.item.id, { x: (row.depth + 1) * 224 + 16, y: leaf++ * 88 + 16 });
  for (const row of [...rows].reverse()) {
    const childPoints = (children.get(row.item.id) ?? []).map(id => points.get(id)!).filter(Boolean);
    if (childPoints.length) points.set(row.item.id, { x: (row.depth + 1) * 224 + 16, y: (childPoints[0].y + childPoints[childPoints.length - 1].y) / 2 });
  }
  const roots = rows.filter(row => !row.parentId).map(row => points.get(row.item.id)!);
  const root = { x: 16, y: roots.length ? (roots[0].y + roots[roots.length - 1].y) / 2 : 16 };
  return { points, root, width: Math.max(460, ...[...points.values()].map(point => point.x + 208)), height: Math.max(160, leaf * 88 + 32) };
}
