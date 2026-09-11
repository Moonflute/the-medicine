import { enqueueRows, type SyncRow } from "./learning-sync-outbox";
import { studyDateKey } from "./study-date";

export type DailyActivity = { attempts: number; correct: number };
export type ActivityRow = { source_id: string; activity_date: string; kind: "legacy" | "increment"; attempts: number; correct: number };
const PREFIX = "medicine-qbank-activity-v1:";
const INITIALIZED = "medicine-qbank-activity-initialized-v1";
let writer: string | undefined;
function writerId() { return writer ??= crypto.randomUUID(); }
function storageKey(row: ActivityRow) { return PREFIX + JSON.stringify([row.source_id, row.activity_date]); }
export function isActivityRow(value: unknown): value is ActivityRow {
  if (!value || typeof value !== "object") return false;
  const row = value as ActivityRow;
  return typeof row.source_id === "string" && /^\d{4}-\d{2}-\d{2}$/.test(row.activity_date) && (row.kind === "legacy" || row.kind === "increment") && Number.isSafeInteger(row.attempts) && row.attempts >= 0 && Number.isSafeInteger(row.correct) && row.correct >= 0 && row.correct <= row.attempts;
}
export function loadActivityRows(): ActivityRow[] {
  const rows: ActivityRow[] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    if (!key?.startsWith(PREFIX)) continue;
    const row: unknown = JSON.parse(window.localStorage.getItem(key) ?? "null");
    if (!isActivityRow(row)) throw new Error("날짜별 학습 기록을 읽지 못했습니다.");
    rows.push(row);
  }
  return rows;
}
export function mergeActivityRows(rows: SyncRow[] | ActivityRow[]) {
  for (const input of rows) {
    if (!isActivityRow(input)) continue;
    const row: ActivityRow = { source_id: input.source_id, activity_date: input.activity_date, kind: input.kind, attempts: input.attempts, correct: input.correct };
    const key = storageKey(row);
    const previous = JSON.parse(window.localStorage.getItem(key) ?? "null") as ActivityRow | null;
    if (previous) {
      row.attempts = Math.max(previous.attempts, row.attempts);
      row.correct = Math.max(previous.correct, row.correct);
    }
    window.localStorage.setItem(key, JSON.stringify(row));
  }
}
export function initializeActivity(legacy: Record<string, DailyActivity>) {
  if (window.localStorage.getItem(INITIALIZED)) return;
  // Stable ID survives a partially completed migration and a reload.
  const sourceKey = "medicine-qbank-activity-legacy-source-v1";
  const source = window.localStorage.getItem(sourceKey) ?? crypto.randomUUID();
  window.localStorage.setItem(sourceKey, source);
  const rows = Object.entries(legacy).map(([activity_date, daily]) => ({source_id: source, activity_date, kind: "legacy" as const, ...daily})).filter(isActivityRow);
  enqueueRows("qbank_activity_daily", rows);
  mergeActivityRows(rows);
  window.localStorage.setItem(INITIALIZED, "done");
}
export function aggregateActivity(rows: ActivityRow[]): Record<string, DailyActivity> {
  const unique = new Map<string, ActivityRow>();
  for (const row of rows) {
    const key = storageKey(row), old = unique.get(key);
    unique.set(key, old ? {...row, attempts: Math.max(old.attempts, row.attempts), correct: Math.max(old.correct, row.correct)} : row);
  }
  const legacy: Record<string, DailyActivity> = {}, added: Record<string, DailyActivity> = {};
  for (const row of unique.values()) {
    const target = row.kind === "legacy" ? legacy : added;
    const old = target[row.activity_date] ?? {attempts: 0, correct: 0};
    target[row.activity_date] = row.kind === "legacy" ? {attempts: Math.max(old.attempts, row.attempts), correct: Math.max(old.correct, row.correct)} : {attempts: old.attempts + row.attempts, correct: old.correct + row.correct};
  }
  return Object.fromEntries([...new Set([...Object.keys(legacy), ...Object.keys(added)])].map(day => [day, {attempts: (legacy[day]?.attempts ?? 0) + (added[day]?.attempts ?? 0), correct: (legacy[day]?.correct ?? 0) + (added[day]?.correct ?? 0)}]));
}
export function loadActivity() { return aggregateActivity(loadActivityRows()); }
export function recordActivity(correct: boolean, date = new Date()) {
  const row: ActivityRow = {source_id: writerId(), activity_date: studyDateKey(date), kind: "increment", attempts: 1, correct: correct ? 1 : 0};
  const previous = JSON.parse(window.localStorage.getItem(storageKey(row)) ?? "null") as ActivityRow | null;
  if (previous) { row.attempts += previous.attempts; row.correct += previous.correct; }
  // One independent counter per runtime/day prevents competing tabs from replacing each other.
  enqueueRows("qbank_activity_daily", [row]);
  mergeActivityRows([row]);
}
