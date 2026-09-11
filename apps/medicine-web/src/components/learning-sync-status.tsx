"use client";

import { useSyncExternalStore } from "react";
import { getSyncStatus, SYNC_STATUS_EVENT, SYNC_RETRY_EVENT, type SyncStatus } from "@/lib/learning-sync-outbox";

const initial: SyncStatus = { state: "local", pending: 0 };
const serverSnapshot = () => initial;
const subscribe = (listener: () => void) => {
  window.addEventListener(SYNC_STATUS_EVENT, listener);
  return () => window.removeEventListener(SYNC_STATUS_EVENT, listener);
};
export function LearningSyncStatus() {
  const status = useSyncExternalStore(subscribe, getSyncStatus, serverSnapshot);
  const label = { local: "기기 저장", pending: "전송 대기", syncing: "동기화 중", synced: "동기화 완료", failed: "동기화 실패" }[status.state];
  const color = status.state === "failed" ? "text-rose-700" : status.state === "synced" ? "text-teal-700" : "text-slate-500";
  return <span className={`inline-flex shrink-0 whitespace-nowrap items-center gap-1 text-[11px] ${color}`}>
    <span role="status" title={status.message ?? (status.lastSyncedAt ? `마지막 동기화 ${new Date(status.lastSyncedAt).toLocaleString()}` : undefined)}>{label}{status.pending > 0 ? ` ${status.pending}` : ""}</span>
    {(status.state === "failed" || status.state === "pending") && <button type="button" className="rounded px-1 py-1 underline underline-offset-2 hover:bg-slate-100" onClick={() => window.dispatchEvent(new Event(SYNC_RETRY_EVENT))} aria-label="학습 기록 동기화 재시도" title={status.message}>재시도</button>}
  </span>;
}
