export type SyncRow = Record<string, unknown>;
export const SYNC_TABLES = ["review_items", "content_progress", "qbank_question_progress", "qbank_sessions"] as const;
export type SyncTable = typeof SYNC_TABLES[number];
export type PendingWrite = { table: SyncTable; row: SyncRow; revision: string };
export const OUTBOX_PREFIX = "medicine-learning-outbox-v1:";
export const OWNER_KEY = "medicine-learning-owner-v1";
export const SYNC_STATUS_EVENT = "medicine-learning-sync-status";
export const SYNC_RETRY_EVENT = "medicine-learning-sync-retry";
export type SyncStatus = { state: "local" | "pending" | "syncing" | "synced" | "failed"; pending: number; message?: string; lastSyncedAt?: string };
let status: SyncStatus = { state: "local", pending: 0 };
export function getSyncStatus() { return status; }
export function publishSyncStatus(next: SyncStatus) {
  status = next;
  if (typeof window !== "undefined") window.dispatchEvent(new Event(SYNC_STATUS_EVENT));
}
export function rowKey(table: SyncTable, row: SyncRow): string {
  return table === "review_items" || table === "content_progress" ? JSON.stringify([row.domain, row.content_id]) : String(row.question_id ?? row.session_id);
}
function storageKey(table: SyncTable, row: SyncRow) { return `${OUTBOX_PREFIX}${table}:${rowKey(table, row)}`; }
export function pendingWrites(): PendingWrite[] {
  const writes: PendingWrite[] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const name = window.localStorage.key(i);
    if (!name?.startsWith(OUTBOX_PREFIX)) continue;
    const entry = JSON.parse(window.localStorage.getItem(name) ?? "null") as PendingWrite | null;
    if (!entry || !SYNC_TABLES.includes(entry.table) || !entry.row || !entry.revision) throw new Error("전송 대기 기록을 읽지 못했습니다. 로컬 기록은 유지됩니다.");
    writes.push(entry);
  }
  return writes;
}
// Each row has its own key: writes to unrelated records in another tab cannot erase this queue.
export function enqueueRows(table: SyncTable, rows: SyncRow[]) {
  for (const row of rows) {
    const name = storageKey(table, row);
    const previous = JSON.parse(window.localStorage.getItem(name) ?? "null") as PendingWrite | null;
    window.localStorage.setItem(name, JSON.stringify({ table, row: { ...previous?.row, ...row }, revision: crypto.randomUUID() } satisfies PendingWrite));
  }
  if (rows.length) publishSyncStatus({ state: "pending", pending: pendingWrites().length });
}
// Keep only changed fields; a bookmark edit must not write stale answer counters.
export function queueChangedRows(table: SyncTable, before: SyncRow[], after: SyncRow[]) {
  const previous = new Map(before.map(row => [rowKey(table, row), row]));
  const nextKeys = new Set(after.map(row => rowKey(table, row)));
  const patches: SyncRow[] = [];
  for (const row of after) {
    const old = previous.get(rowKey(table, row));
    const changed = Object.fromEntries(Object.entries(row).filter(([field, value]) => JSON.stringify(old?.[field]) !== JSON.stringify(value)));
    if (Object.keys(changed).length) patches.push({ ...identity(table, row), ...changed });
  }
  if (table === "review_items") for (const old of before) {
    if (!nextKeys.has(rowKey(table, old))) patches.push({ ...identity(table, old), is_saved: false });
  }
  if (table === "qbank_question_progress") for (const old of before) {
    if (!nextKeys.has(rowKey(table, old))) patches.push({ ...identity(table, old), bookmarked: false, wrong_marked: false });
  }
  enqueueRows(table, patches);
}
export function identity(table: SyncTable, row: SyncRow): SyncRow {
  return table === "review_items" || table === "content_progress" ? { domain: row.domain, content_id: row.content_id } : table === "qbank_sessions" ? { session_id: row.session_id } : { question_id: row.question_id };
}
export function acknowledgeWrite(sent: PendingWrite) {
  const name = storageKey(sent.table, sent.row);
  const current = JSON.parse(window.localStorage.getItem(name) ?? "null") as PendingWrite | null;
  // An edit made during the request must survive its older response.
  if (current?.revision === sent.revision) window.localStorage.removeItem(name);
}
export function overlayPending(remote: SyncRow[], table: SyncTable, writes: PendingWrite[]): SyncRow[] {
  const rows = new Map(remote.map(row => [rowKey(table, row), row]));
  for (const entry of writes.filter(write => write.table === table)) {
    const id = rowKey(table, entry.row);
    const previous = rows.get(id) ?? {};
    const merged = { ...previous, ...entry.row };
    for (const field of ["attempts", "correct_attempts", "review_count", "view_count"]) {
      if (typeof previous[field] === "number" && typeof merged[field] === "number") merged[field] = Math.max(previous[field] as number, merged[field] as number);
    }
    rows.set(id, merged);
  }
  return [...rows.values()];
}
export async function readAllPages<T>(fetchPage: (from: number, to: number) => PromiseLike<{ data: T[] | null; error: unknown }>, size = 500): Promise<T[]> {
  const rows: T[] = [];
  for (let offset = 0; ; ) {
    const page = await fetchPage(offset, offset + size - 1);
    if (page.error) throw page.error;
    if (!page.data) throw new Error("서버 조회 결과가 없습니다.");
    rows.push(...page.data);
    if (!page.data.length) return rows;
    // Continue even if a server-side row cap is smaller than the requested page size.
    offset += page.data.length;
  }
}
