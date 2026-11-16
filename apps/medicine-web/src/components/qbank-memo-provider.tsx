"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { MEMO_PREFIX, QuestionMemoStore } from "@/lib/qbank-memo-store";
import { questionMemoApi } from "@/lib/qbank-memo-api";

const MemoContext = createContext<QuestionMemoStore | null | undefined>(undefined);
const noSubscribe = () => () => {};
const zero = () => 0;
export const MEMO_RETRY_EVENT = "medicine:qbank-memo-retry";

export function useQuestionMemo(id: string) {
  const store = useContext(MemoContext);
  useSyncExternalStore(store?.subscribe ?? noSubscribe, store?.getVersion ?? zero, zero);
  return { store, entry: store?.get(id) };
}

export function QbankMemoProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<QuestionMemoStore | null | undefined>(() => isSupabaseConfigured() ? undefined : null);
  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    const api = questionMemoApi(client);
    let current: QuestionMemoStore | null = null;
    let active = true;
    let authSeen = false;
    let channel: RealtimeChannel | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let running = false;
    let requested = false;
    const schedule = (delay = 700) => { clearTimeout(timer); if (active) timer = setTimeout(() => void run(), delay); };
    const run = async () => {
      if (!active || !current || !navigator.onLine) return;
      if (running) { requested = true; return; }
      running = true;
      requested = false;
      const target = current;
      const valid = () => active && current === target;
      try {
        const sync = () => target.sync(api, valid);
        if (navigator.locks) await navigator.locks.request(`qbank-memos:${target.owner}`, sync);
        else await sync();
      } finally {
        running = false;
        if (active && (requested || current !== target || target.hasPending())) schedule(target.error ? 10_000 : 700);
      }
    };
    const account = (owner: string | null) => {
      if (!active || (current?.owner ?? null) === owner && authSeen) { if (!owner) setStore(null); return; }
      current?.stop();
      if (channel) void client.removeChannel(channel);
      channel = undefined;
      current = owner ? new QuestionMemoStore(owner, window.localStorage, schedule) : null;
      setStore(current);
      if (owner) {
        channel = client.channel(`qbank-memos:${owner}`).on("postgres_changes", { event: "*", schema: "public", table: "qbank_question_memos", filter: `user_id=eq.${owner}` }, () => schedule(200)).subscribe();
        schedule(0);
      }
    };
    const listener = client.auth.onAuthStateChange((_event, session) => { const next = session?.user.id ?? null; account(next); authSeen = true; });
    void client.auth.getSession().then(({ data }) => { if (!authSeen && active) { account(data.session?.user.id ?? null); authSeen = true; } }).catch(() => { if (!authSeen && active) setStore(null); });
    const refresh = () => { if (!document.hidden) schedule(0); };
    const storage = (event: StorageEvent) => { if (current && event.key?.startsWith(`${MEMO_PREFIX}${current.owner}:`)) { current.refreshLocal(); schedule(); } };
    const beforeUnload = (event: BeforeUnloadEvent) => {
      if (current && !current.storageOK && current.hasUnsaved()) { event.preventDefault(); event.returnValue = ""; }
    };
    window.addEventListener("storage", storage);
    window.addEventListener("online", refresh);
    window.addEventListener("focus", refresh);
    window.addEventListener(MEMO_RETRY_EVENT, refresh);
    window.addEventListener("beforeunload", beforeUnload);
    document.addEventListener("visibilitychange", refresh);
    const poll = setInterval(refresh, 60_000);
    return () => {
      active = false;
      current?.stop();
      clearTimeout(timer);
      clearInterval(poll);
      listener.data.subscription.unsubscribe();
      if (channel) void client.removeChannel(channel);
      window.removeEventListener("storage", storage);
      window.removeEventListener("online", refresh);
      window.removeEventListener("focus", refresh);
      window.removeEventListener(MEMO_RETRY_EVENT, refresh);
      window.removeEventListener("beforeunload", beforeUnload);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);
  return <MemoContext.Provider value={store}>{children}</MemoContext.Provider>;
}
