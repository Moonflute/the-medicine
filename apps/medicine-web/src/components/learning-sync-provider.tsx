"use client";

import { useEffect } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { REVIEW_CHANGE_EVENT } from "@/lib/review-store";
import { QBANK_CHANGE_EVENT } from "@/lib/qbank-store";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { synchronizeLearning } from "@/lib/learning-sync-engine";
import { OUTBOX_PREFIX, pendingWrites, publishSyncStatus, SYNC_RETRY_EVENT, SYNC_TABLES } from "@/lib/learning-sync-outbox";

export function LearningSyncProvider() {
  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    let active = true;
    let userId: string | null = null;
    let generation = 0;
    let running = false;
    let requested = false;
    let failures = 0;
    let authEventSeen = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let channel: RealtimeChannel | undefined;
    const count = () => pendingWrites().length;
    const schedule = (delay = 700) => {
      if (!active) return;
      clearTimeout(timer);
      timer = setTimeout(() => void run(), delay);
    };
    const run = async () => {
      if (!active) return;
      if (running) { requested = true; return; }
      running = true;
      requested = false;
      const account = userId;
      const version = generation;
      const current = () => active && userId === account && generation === version;
      try {
        if (!account || !navigator.onLine) {
          publishSyncStatus({ state: count() ? "pending" : "local", pending: count(), message: account ? "오프라인 · 접속 복구 시 재시도" : "로그인하면 전송합니다." });
          return;
        }
        publishSyncStatus({ state: "syncing", pending: count() });
        const sync = () => synchronizeLearning(client, account, current);
        // Serialize requests across tabs as well as within this provider.
        if (navigator.locks) await navigator.locks.request("medicine-learning-sync", sync);
        else await sync();
        failures = 0;
        if (current() && count()) requested = true;
      } catch (error) {
        if (current()) {
          failures++;
          publishSyncStatus({ state: "failed", pending: (() => { try { return count(); } catch { return 0; } })(), message: error instanceof Error ? error.message : "서버와 연결하지 못했습니다. 기록은 기기에 보관됩니다." });
          schedule(Math.min(60_000, 2000 * 2 ** Math.min(failures - 1, 5)));
        }
      } finally {
        running = false;
        if (active && (generation !== version || (requested && failures === 0))) schedule();
      }
    };
    const setAccount = (next: string | null) => {
      if (!active) return;
      if (next !== userId) {
        generation++;
        userId = next;
        failures = 0;
        if (channel) void client.removeChannel(channel);
        channel = undefined;
        if (next) {
          channel = client.channel(`learning-sync:${next}`);
          for (const table of SYNC_TABLES) channel.on("postgres_changes", { event: "*", schema: "public", table, filter: `user_id=eq.${next}` }, () => schedule());
          channel.subscribe();
        }
      }
      schedule(0);
    };
    const onLocal = (event: Event) => {
      if (event instanceof CustomEvent && event.detail?.source === "remote") return;
      schedule();
    };
    const onStorage = (event: StorageEvent) => { if (event.key?.startsWith(OUTBOX_PREFIX)) schedule(); };
    const onRetry = () => { failures = 0; schedule(0); };
    const onVisible = () => { if (document.visibilityState === "visible") schedule(0); };
    window.addEventListener(REVIEW_CHANGE_EVENT, onLocal);
    window.addEventListener(QBANK_CHANGE_EVENT, onLocal);
    window.addEventListener("storage", onStorage);
    window.addEventListener("online", onRetry);
    window.addEventListener("offline", onRetry);
    window.addEventListener(SYNC_RETRY_EVENT, onRetry);
    document.addEventListener("visibilitychange", onVisible);
    const listener = client.auth.onAuthStateChange((_event, session) => { authEventSeen = true; setAccount(session?.user.id ?? null); });
    // Local session discovery still works offline. Row ownership is enforced by server RLS.
    const initialGeneration = generation;
    void client.auth.getSession().then(({ data, error }) => {
      if (!active || authEventSeen || generation !== initialGeneration) return;
      if (error) { publishSyncStatus({ state: "failed", pending: 0, message: "로그인 상태를 확인하지 못했습니다." }); return; }
      setAccount(data.session?.user.id ?? null);
    }).catch(() => { if (active) publishSyncStatus({state: "failed", pending: 0, message: "로그인 상태를 확인하지 못했습니다."}); });
    return () => {
      active = false;
      generation++;
      clearTimeout(timer);
      listener.data.subscription.unsubscribe();
      if (channel) void client.removeChannel(channel);
      window.removeEventListener(REVIEW_CHANGE_EVENT, onLocal);
      window.removeEventListener(QBANK_CHANGE_EVENT, onLocal);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("online", onRetry);
      window.removeEventListener("offline", onRetry);
      window.removeEventListener(SYNC_RETRY_EVENT, onRetry);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);
  return null;
}
