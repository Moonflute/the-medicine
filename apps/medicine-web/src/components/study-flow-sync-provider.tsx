"use client";

import { useEffect } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { syncStudyFlows } from "@/lib/study-flow-sync";
import { getStudySnapshot, pendingStudyRecords, setStudyAccount, setStudySync, STUDY_FLOW_EVENT, STUDY_FLOW_RETRY, STUDY_FLOW_STORAGE } from "@/lib/study-flow-store";

export function StudyFlowSyncProvider() {
  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    let active = true;
    let userId: string | null = null;
    let generation = 0;
    let authSeen = false;
    let running = false;
    let requested = false;
    let failures = 0;
    let cursor: string | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let channel: RealtimeChannel | undefined;
    const schedule = (delay = 600) => {
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
        if (!account) { setStudySync({ state: "local", message: "기기에 자동저장 · 로그인하면 기기 간 동기화" }); return; }
        if (!navigator.onLine) { setStudySync({ state: "offline", message: "오프라인 · 기기에 저장됨" }); return; }
        setStudySync({ state: "syncing", message: "기기에 저장 · 동기화 중" });
        const sync = async () => {
          if (current()) {
            const nextCursor = await syncStudyFlows(client, account, current, cursor);
            if (current()) cursor = nextCursor;
          }
        };
        if (navigator.locks) await navigator.locks.request("medicine-study-flow:" + account, sync);
        else await sync();
        failures = 0;
        if (current()) {
          requested = pendingStudyRecords().length > 0;
          setStudySync({ state: requested ? "pending" : "saved", message: requested ? "기기에 저장 · 동기화 대기" : "기기와 계정에 저장됨" });
        }
      } catch {
        if (current()) {
          failures++;
          setStudySync({ state: "error", message: "동기화하지 못했습니다 · 기기 기록은 유지됩니다" });
          schedule(Math.min(60000, 2000 * 2 ** Math.min(failures - 1, 5)));
        }
      } finally {
        running = false;
        if (active && (generation !== version || (requested && failures === 0))) schedule();
      }
    };
    const setAccount = (next: string | null) => {
      if (!active) return;
      setStudyAccount(next);
      if (next !== userId) {
        userId = next;
        generation++;
        failures = 0;
        cursor = null;
        if (channel) void client.removeChannel(channel);
        channel = undefined;
        if (next) {
          channel = client.channel("study-flow:" + next).on("postgres_changes", { event: "*", schema: "public", table: "study_flow_records", filter: "user_id=eq." + next }, () => schedule());
          channel.subscribe();
        }
      }
      schedule(0);
    };
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<{ source?: string; account?: string }>).detail;
      if (detail?.source === "local") schedule();
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === STUDY_FLOW_STORAGE + (userId ?? "guest")) schedule();
    };
    const retry = () => { failures = 0; schedule(0); };
    const visible = () => { if (document.visibilityState === "visible") retry(); };
    const auth = client.auth.onAuthStateChange((_event, session) => { authSeen = true; setAccount(session?.user.id ?? null); });
    void client.auth.getSession().then(({ data, error }) => {
      if (!active || authSeen) return;
      if (error) { setStudySync({ state: "error", message: "로그인 상태를 확인하지 못했습니다 · 기기에 저장됨" }); return; }
      setAccount(data.session?.user.id ?? null);
    }).catch(() => { if (active) setStudySync({ state: "error", message: "로그인 상태를 확인하지 못했습니다 · 기기에 저장됨" }); });
    window.addEventListener(STUDY_FLOW_EVENT, onChange);
    window.addEventListener("storage", onStorage);
    window.addEventListener("online", retry);
    window.addEventListener("offline", retry);
    window.addEventListener(STUDY_FLOW_RETRY, retry);
    document.addEventListener("visibilitychange", visible);
    const poll = setInterval(() => { if (document.visibilityState === "visible" && getStudySnapshot().account) schedule(0); }, 60000);
    return () => {
      active = false;
      generation++;
      clearTimeout(timer);
      clearInterval(poll);
      auth.data.subscription.unsubscribe();
      if (channel) void client.removeChannel(channel);
      window.removeEventListener(STUDY_FLOW_EVENT, onChange);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("online", retry);
      window.removeEventListener("offline", retry);
      window.removeEventListener(STUDY_FLOW_RETRY, retry);
      document.removeEventListener("visibilitychange", visible);
    };
  }, []);
  return null;
}
