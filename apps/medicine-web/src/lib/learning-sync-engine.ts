import { loadActivity, loadActivityRows, mergeActivityRows } from "./qbank-activity";
import type { SupabaseClient } from "@supabase/supabase-js";
import { loadRecentItems, loadReviewCoverage, loadReviewItems, replaceReviewSyncData, type RecentReviewItem, type ReviewCoverageItem, type ReviewItem } from "./review-store";
import { loadQbankState, replaceQbankSyncData } from "./qbank-store";
import { coverageFromRow, coverageRow, itemFromRow, key, mergeCoverage, mergeQbank, mergeReviewItems, qbankStateFromRows, questionRows, recentFromRow, reviewRow, sessionRow } from "./learning-sync-data";
import { acknowledgeWrite, identity, overlayPending, OWNER_KEY, pendingWrites, publishSyncStatus, queueChangedRows, readAllPages, rowKey, SYNC_TABLES, type SyncRow, type SyncTable } from "./learning-sync-outbox";

export const MIGRATION_PREFIX = "medicine-learning-migrated-v2:";
type Snapshot = Record<SyncTable, SyncRow[]>;
const conflictKeys: Record<SyncTable, string> = {
  review_items: "user_id,domain,content_id", content_progress: "user_id,domain,content_id",
  qbank_question_progress: "user_id,question_id", qbank_sessions: "user_id,session_id", qbank_activity_daily: "user_id,source_id,activity_date",
};
export async function readRemote(client: Pick<SupabaseClient, "from">, userId: string): Promise<Snapshot> {
  const tables = await Promise.all(SYNC_TABLES.map(async table => {
    if (table === "qbank_sessions") {
      const result = await client.from(table).select("*").eq("user_id", userId).order("completed_at", { ascending: false }).order("session_id").limit(100);
      if (result.error) throw result.error;
      if (!result.data) throw new Error("회차 기록을 읽지 못했습니다.");
      return result.data as SyncRow[];
    }
    return readAllPages<SyncRow>((from, to) => {
      const query = client.from(table).select("*").eq("user_id", userId);
      return (table === "qbank_activity_daily" ? query.order("source_id").order("activity_date") : table === "qbank_question_progress" ? query.order("question_id") : query.order("domain").order("content_id")).range(from, to);
    });
  }));
  return Object.fromEntries(SYNC_TABLES.map((table, i) => [table, tables[i]])) as Snapshot;
}
function decode(remote: Snapshot) {
  const items = remote.review_items.filter(row => row.is_saved === true).map(itemFromRow).filter((item): item is ReviewItem => !!item);
  const coverage = Object.fromEntries(remote.content_progress.map(coverageFromRow).filter((item): item is ReviewCoverageItem => !!item).map(item => [key(item.type, item.id), item]));
  const recent = remote.content_progress.map(recentFromRow).filter((item): item is RecentReviewItem => !!item).sort((a, b) => b.viewedAt.localeCompare(a.viewedAt)).slice(0, 50);
  return { items, coverage, recent, qbank: qbankStateFromRows(remote.qbank_question_progress, remote.qbank_sessions) };
}
function seedMigration(remote: Snapshot) {
  const decoded = decode(remote);
  const items = mergeReviewItems(loadReviewItems(), decoded.items);
  const coverage = mergeCoverage(loadReviewCoverage(), decoded.coverage);
  const qbank = mergeQbank(loadQbankState(), decoded.qbank);
  const recent = new Map([...decoded.recent, ...loadRecentItems()].map(item => [key(item.type, item.id), item]));
  // Queue migration before changing local stores. Existing tombstones/edits win over seed data.
  const pending = pendingWrites();
  const rows: Snapshot = {
    review_items: items.map(reviewRow),
    content_progress: Object.values(coverage).map(item => coverageRow(item, recent.get(key(item.type, item.id)))),
    qbank_question_progress: questionRows(qbank), qbank_sessions: qbank.sessions.map(sessionRow), qbank_activity_daily: loadActivityRows(),
  };
  for (const table of SYNC_TABLES) {
    const candidates = overlayPending(rows[table], table, pending);
    const candidateKeys = new Set(candidates.map(row => rowKey(table, row)));
    // Missing remote rows on first sign-in are not local deletions.
    const before = remote[table].filter(row => candidateKeys.has(rowKey(table, row)));
    queueChangedRows(table, before, candidates);
  }
}
export async function synchronizeLearning(client: Pick<SupabaseClient, "from">, userId: string, isCurrent: () => boolean) {
  const assertCurrent = () => { if (!isCurrent()) throw new Error("동기화 계정이 변경되었습니다."); };
  assertCurrent();
  const owner = window.localStorage.getItem(OWNER_KEY);
  if (owner && owner !== userId) throw new Error("이 기기의 기록은 다른 계정에 연결되어 있습니다. 기존 계정으로 로그인해 주세요.");
  window.localStorage.setItem(OWNER_KEY, userId);
  loadQbankState(); // Preserve and queue legacy daily counts before downloading any remote totals.
  const remote = await readRemote(client, userId);
  assertCurrent();
  const marker = `${MIGRATION_PREFIX}${userId}`;
  if (!window.localStorage.getItem(marker)) {
    seedMigration(remote);
    window.localStorage.setItem(marker, "queued");
  }
  const pending = pendingWrites();
  const combined = Object.fromEntries(SYNC_TABLES.map(table => [table, overlayPending(remote[table], table, pending)])) as Snapshot;
  const data = decode(combined);
  mergeActivityRows(combined.qbank_activity_daily);
  data.qbank.dailyActivity = loadActivity();
  replaceReviewSyncData(data.items, data.recent, data.coverage);
  replaceQbankSyncData(data.qbank);
  for (const table of SYNC_TABLES) {
    const writes = pending.filter(entry => entry.table === table);
    const rowsById = new Map(combined[table].map(row => [rowKey(table, row), row]));
    for (let offset = 0; offset < writes.length; offset += 100) {
      assertCurrent();
      const batch = writes.slice(offset, offset + 100);
      const rows = batch.map(entry => ({ ...rowsById.get(rowKey(table, entry.row)), user_id: userId }));
      const result = await client.from(table).upsert(rows, { onConflict: conflictKeys[table], defaultToNull: false }).select(conflictKeys[table]).returns<SyncRow[]>();
      if (result.error) throw result.error;
      assertCurrent();
      const returned = new Set((result.data ?? []).filter(row => row.user_id === userId).map(row => rowKey(table, identity(table, row))));
      if (batch.some(entry => !returned.has(rowKey(table, entry.row)))) throw new Error("서버 저장 확인이 완료되지 않았습니다. 다시 시도합니다.");
      batch.forEach(acknowledgeWrite);
    }
  }
  assertCurrent();
  const count = pendingWrites().length;
  if (!count) window.localStorage.setItem(marker, "done");
  publishSyncStatus({ state: count ? "pending" : "synced", pending: count, lastSyncedAt: new Date().toISOString() });
}
