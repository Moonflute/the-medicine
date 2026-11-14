"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  REVIEW_CARD_FIELDS,
  REVIEW_CARD_LIMITS,
  sortReviewCards,
  type HomeReviewDisplay,
  type ReviewCard,
  type ReviewCardDraft,
} from "@/lib/review-cards";
import { nextReviewAt, type ReviewConfidence } from "@/lib/review-schedule";

type CardData = {
  account: string;
  display: HomeReviewDisplay;
  cards: ReviewCard[] | null;
};

type ReviewCardsContextValue = {
  account: string | null | undefined;
  cards: ReviewCard[] | null;
  display: HomeReviewDisplay | null;
  loadError: boolean;
  saving: boolean;
  refresh: () => Promise<void>;
  saveCard: (draft: ReviewCardDraft) => Promise<void>;
  deleteCard: (card: ReviewCard) => Promise<void>;
  setHomeHidden: (id: string, hidden: boolean) => Promise<void>;
  setHomeDisplay: (display: HomeReviewDisplay) => Promise<void>;
  rateCard: (card: ReviewCard, confidence: ReviewConfidence) => Promise<void>;
};

const ReviewCardsContext = createContext<ReviewCardsContextValue | null>(null);

class CardConflictError extends Error {}

export function reviewCardsErrorMessage(error: unknown) {
  return error instanceof CardConflictError ? error.message : "저장하지 못했어요. 연결을 확인하고 다시 시도해 주세요.";
}

async function readCards(client: SupabaseClient, account: string) {
  const cards: ReviewCard[] = [];
  for (;;) {
    const query = client.from("review_cards").select(REVIEW_CARD_FIELDS).eq("user_id", account).order("id").limit(500);
    const cursor = cards.at(-1)?.id;
    const { data, error } = await (cursor ? query.gt("id", cursor) : query).returns<ReviewCard[]>();
    if (error) throw error;
    if (!data.length) return sortReviewCards(cards);
    cards.push(...data);
  }
}

export function ReviewCardsProvider({ children, home = false }: { children: ReactNode; home?: boolean }) {
  const [account, setAccount] = useState<string | null | undefined>(() => isSupabaseConfigured() ? undefined : null);
  const [data, setData] = useState<CardData | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [saving, setSaving] = useState(false);
  const accountRef = useRef<string | null | undefined>(undefined);
  const readVersion = useRef(0);
  const pendingWrite = useRef<symbol | null>(null);
  const current = data?.account === account ? data : null;
  const invalidateRead = useCallback(() => { readVersion.current++; }, []);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      const nextAccount = session?.user.id ?? null;
      if (accountRef.current === nextAccount) return;
      accountRef.current = nextAccount;
      invalidateRead();
      pendingWrite.current = null;
      setAccount(nextAccount);
      setData(null);
      setLoadError(false);
      setSaving(false);
    });
    return () => subscription.unsubscribe();
  }, [invalidateRead]);

  const refresh = useCallback(async () => {
    const client = getSupabaseBrowserClient();
    const owner = accountRef.current;
    if (!client || !owner || pendingWrite.current) return;
    const version = ++readVersion.current;
    const isCurrent = () => readVersion.current === version && accountRef.current === owner;

    try {
      let display: HomeReviewDisplay = "heart";
      if (home) {
        const { data: preference, error } = await client.from("user_preferences")
          .select("home_review_display").eq("user_id", owner).maybeSingle();
        if (error) throw error;
        if (!isCurrent()) return;
        display = preference?.home_review_display === "cards" ? "cards" : "heart";
        setData(previous => previous?.account === owner && previous.display === display
          ? previous : { account: owner, display, cards: null });
      }
      const cards = home && display === "heart" ? null : await readCards(client, owner);
      if (isCurrent()) {
        setData({ account: owner, display, cards });
        setLoadError(false);
      }
    } catch {
      if (isCurrent()) setLoadError(true);
    }
  }, [home]);

  useEffect(() => {
    if (!account) return;
    void refresh();
    function refreshOnReturn() {
      if (!document.hidden) void refresh();
    }
    document.addEventListener("visibilitychange", refreshOnReturn);
    window.addEventListener("online", refreshOnReturn);
    return () => {
      invalidateRead();
      document.removeEventListener("visibilitychange", refreshOnReturn);
      window.removeEventListener("online", refreshOnReturn);
    };
  }, [account, invalidateRead, refresh]);

  async function write<T>(request: (client: SupabaseClient, owner: string) => Promise<T>, update: (previous: CardData, result: T) => CardData) {
    const client = getSupabaseBrowserClient();
    if (!client || !account || !current || accountRef.current !== account || pendingWrite.current) {
      throw new CardConflictError("계정 연결을 확인한 뒤 다시 시도해 주세요.");
    }
    const token = Symbol();
    pendingWrite.current = token;
    invalidateRead();
    setSaving(true);
    try {
      const result = await request(client, account);
      if (pendingWrite.current !== token) throw new CardConflictError("로그인 계정이 바뀌었어요.");
      setData(previous => previous?.account === account ? update(previous, result) : previous);
    } finally {
      if (pendingWrite.current === token) {
        pendingWrite.current = null;
        setSaving(false);
      }
    }
  }

  function writeCard(request: (client: SupabaseClient, owner: string) => Promise<ReviewCard>) {
    return write(request, (previous, card) => ({
      ...previous,
      cards: sortReviewCards([...(previous.cards ?? []).filter(item => item.id !== card.id), card]),
    }));
  }

  async function saveCard(draft: ReviewCardDraft) {
    const front = draft.front.trim();
    const back = draft.back.trim();
    if (!front || !back || front.length > REVIEW_CARD_LIMITS.front || back.length > REVIEW_CARD_LIMITS.back) {
      throw new CardConflictError("앞면과 뒷면의 내용을 확인해 주세요.");
    }
    await writeCard(async (client, owner) => {
      const table = client.from("review_cards");
      const target = () => table.select(REVIEW_CARD_FIELDS).eq("user_id", owner).eq("id", draft.id).maybeSingle<ReviewCard>();
      if (draft.revision === undefined) {
        const { data, error } = await table.insert({ user_id: owner, id: draft.id, front, back })
          .select(REVIEW_CARD_FIELDS).single<ReviewCard>();
        if (!error) return data;
        if (error.code !== "23505") throw error;
      } else {
        const { data, error } = await table.update({ front, back, content_revision: draft.revision + 1 })
          .eq("user_id", owner).eq("id", draft.id).eq("content_revision", draft.revision)
          .select(REVIEW_CARD_FIELDS).maybeSingle<ReviewCard>();
        if (error) throw error;
        if (data) return data;
      }

      // A request may have reached the database before the client lost its response.
      const { data, error } = await target();
      if (error) throw error;
      if (data?.front === front && data.back === back) return data;
      throw new CardConflictError("다른 기기에서 카드가 바뀌었어요. 입력한 내용을 남겨뒀으니 최신 카드를 확인해 주세요.");
    });
  }

  function deleteCard(card: ReviewCard) {
    return write(async (client, owner) => {
      const table = client.from("review_cards");
      const { data, error } = await table.delete().eq("user_id", owner).eq("id", card.id)
        .eq("content_revision", card.content_revision).select("id").maybeSingle();
      if (error) throw error;
      if (data) return;
      const { data: latest, error: readError } = await table.select("id").eq("user_id", owner).eq("id", card.id).maybeSingle();
      if (readError) throw readError;
      if (latest) throw new CardConflictError("다른 기기에서 카드가 수정됐어요. 최신 카드를 확인한 다음 삭제해 주세요.");
    }, previous => ({ ...previous, cards: previous.cards?.filter(item => item.id !== card.id) ?? null }));
  }

  function setHomeHidden(id: string, home_hidden: boolean) {
    return writeCard(async (client, owner) => {
      const { data, error } = await client.from("review_cards").update({ home_hidden })
        .eq("user_id", owner).eq("id", id).select(REVIEW_CARD_FIELDS).maybeSingle<ReviewCard>();
      if (error) throw error;
      if (!data) throw new CardConflictError("카드를 찾을 수 없어요. 목록을 새로고침해 주세요.");
      return data;
    });
  }

  async function setHomeDisplay(display: HomeReviewDisplay) {
    await write(async (client, owner) => {
      const { error } = await client.from("user_preferences").upsert({ user_id: owner, home_review_display: display }, { onConflict: "user_id" });
      if (error) throw error;
    }, previous => ({ ...previous, display, cards: null }));
    void refresh();
  }

  function rateCard(card: ReviewCard, confidence: ReviewConfidence) {
    const now = new Date();
    const review_count = card.review_count + 1;
    return writeCard(async (client, owner) => {
      const { data, error } = await client.from("review_cards").update({ review_count, due_at: nextReviewAt(confidence, review_count, now) })
        .eq("user_id", owner).eq("id", card.id).eq("review_count", card.review_count).eq("content_revision", card.content_revision)
        .select(REVIEW_CARD_FIELDS).maybeSingle<ReviewCard>();
      if (error) throw error;
      if (!data) throw new CardConflictError("다른 기기에서 카드나 복습 기록이 바뀌었어요. 최신 상태를 확인해 주세요.");
      return data;
    });
  }

  return (
    <ReviewCardsContext.Provider value={{
      account, cards: current?.cards ?? null, display: current?.display ?? null, loadError, saving,
      refresh, saveCard, deleteCard, setHomeHidden, setHomeDisplay, rateCard,
    }}>
      {children}
    </ReviewCardsContext.Provider>
  );
}

export function useReviewCards() {
  const context = useContext(ReviewCardsContext);
  if (!context) throw new Error("ReviewCardsProvider is required");
  return context;
}
