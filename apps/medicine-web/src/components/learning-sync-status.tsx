"use client";

import { useSyncExternalStore } from "react";
import { CloudCheck, CloudOff, CloudUpload, HardDrive, RefreshCw } from "lucide-react";
import { SkinStatus } from "@/components/skin-status";
import { useSkinTheme } from "@/components/theme-provider";
import { skinRetryLabel } from "@/lib/skin-status";
import { getSyncStatus, SYNC_STATUS_EVENT, SYNC_RETRY_EVENT, type SyncStatus } from "@/lib/learning-sync-outbox";

const initial: SyncStatus = { state: "local", pending: 0 };
const serverSnapshot = () => initial;
const subscribe = (listener: () => void) => {
  window.addEventListener(SYNC_STATUS_EVENT, listener);
  return () => window.removeEventListener(SYNC_STATUS_EVENT, listener);
};
export function LearningSyncStatus({ compact = false }: { compact?: boolean }) {
  const { theme } = useSkinTheme();
  const status = useSyncExternalStore(subscribe, getSyncStatus, serverSnapshot);
  const label = { local: "기기 저장", pending: "전송 대기", syncing: "동기화 중", synced: "동기화 완료", failed: "동기화 실패" }[status.state];
  const kind = ({ local: "syncLocal", pending: "syncPending", syncing: "syncing", synced: "synced", failed: "syncFailed" } as const)[status.state];
  const color = status.state === "failed" ? "text-rose-700" : status.state === "synced" ? "text-teal-700" : "text-slate-500";
  const StatusIcon = { local: HardDrive, pending: CloudUpload, syncing: RefreshCw, synced: CloudCheck, failed: CloudOff }[status.state];
  const summary = `${label}${status.pending > 0 ? ` ${status.pending}` : ""}`;
  const detail = status.message ?? (status.lastSyncedAt ? `마지막 동기화 ${new Date(status.lastSyncedAt).toLocaleString()}` : undefined);
  const retryLabel = theme === "light" || theme === "dark" || theme === "sepia" ? "재시도" : skinRetryLabel(theme, true);
  return <span className={`inline-flex shrink-0 whitespace-nowrap items-center gap-1 text-[11px] ${color}`}>
    {compact ? <span className="inline-flex items-center gap-0.5 sm:hidden" role={status.state === "failed" ? "alert" : "status"} aria-label={summary} title={[summary, detail].filter(Boolean).join(" · ")}>
      <StatusIcon aria-hidden="true" className={`h-4 w-4 ${status.state === "syncing" ? "animate-spin motion-reduce:animate-none" : ""}`} />
      {status.pending > 0 ? <span aria-hidden="true">{status.pending}</span> : null}
    </span> : null}
    <span className={compact ? "hidden sm:inline-flex" : "inline-flex"}><SkinStatus kind={kind} fallback={label} inline suffix={status.pending > 0 ? ` ${status.pending}` : ""} title={detail} /></span>
    {(status.state === "failed" || status.state === "pending") && <button type="button" className="rounded px-1 py-1 underline underline-offset-2 hover:bg-slate-100" onClick={() => window.dispatchEvent(new Event(SYNC_RETRY_EVENT))} aria-label="학습 기록 동기화 재시도" title={status.message ?? retryLabel}>
      {compact ? <RefreshCw aria-hidden="true" className="h-3.5 w-3.5 sm:hidden" /> : null}<span className={compact ? "hidden sm:inline" : undefined}>{retryLabel}</span>
    </button>}
  </span>;
}
