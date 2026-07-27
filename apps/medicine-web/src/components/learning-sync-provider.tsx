"use client";

import { useEffect, useRef } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import {
  loadRecentItems,
  loadReviewCoverage,
  loadReviewItems,
  replaceReviewSyncData,
  REVIEW_CHANGE_EVENT,
  type RecentReviewItem,
  type ReviewCatalogItem,
  type ReviewCoverageItem,
  type ReviewDomain,
  type ReviewItem,
} from "@/lib/review-store";
import {
  loadQbankState,
  replaceQbankSyncData,
  QBANK_CHANGE_EVENT,
  type QbankProgress,
  type QbankSessionResult,
  type QbankState,
} from "@/lib/qbank-store";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Metadata = Pick<ReviewCatalogItem, "title" | "href" | "category" | "summary" | "categories">;
type Row = Record<string, unknown>;

const MIGRATION_PREFIX = "medicine-web-supabase-migrated-v1";

function key(domain: string, contentId: string) {
  return `${domain}|${contentId}`;
}

function isDomain(value: unknown): value is ReviewDomain {
  return value === "disease" || value === "cc" || value === "drug" || value === "lab" || value === "skill";
}

function text(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function metadataFromItem(item: ReviewCatalogItem): Metadata {
  return { title: item.title, href: item.href, category: item.category, summary: item.summary, categories: item.categories };
}

function itemFromRow(row: Row): ReviewItem | null {
  const domain = row.domain;
  const id = row.content_id;
  if (!isDomain(domain) || typeof id !== "string") return null;
  const metadata = row.metadata && typeof row.metadata === "object" ? row.metadata as Row : {};
  return {
    type: domain,
    id,
    title: text(metadata.title, id),
    href: text(metadata.href, "/review"),
    category: text(metadata.category, domain),
    summary: text(metadata.summary),
    categories: Array.isArray(metadata.categories) ? metadata.categories.filter((value): value is string => typeof value === "string") : undefined,
    savedAt: text(row.saved_at, new Date().toISOString()),
    lastReviewedAt: typeof row.last_reviewed_at === "string" ? row.last_reviewed_at : undefined,
    confidence: row.confidence === "again" || row.confidence === "hard" || row.confidence === "good" ? row.confidence : undefined,
    reviewCount: typeof row.review_count === "number" ? row.review_count : 0,
    nextReviewAt: typeof row.next_review_at === "string" ? row.next_review_at : undefined,
  };
}

function coverageFromRow(row: Row): ReviewCoverageItem | null {
  const domain = row.domain;
  const id = row.content_id;
  if (!isDomain(domain) || typeof id !== "string") return null;
  const lastViewedAt = text(row.last_viewed_at, new Date().toISOString());
  return {
    type: domain,
    id,
    firstViewedAt: text(row.first_viewed_at, lastViewedAt),
    lastViewedAt,
    lastCountedDate: lastViewedAt.slice(0, 10),
    viewCount: typeof row.view_count === "number" ? row.view_count : 0,
  };
}

function recentFromRow(row: Row): RecentReviewItem | null {
  const item = itemFromRow({ ...row, saved_at: row.last_viewed_at, review_count: 0 });
  if (!item) return null;
  return { type: item.type, id: item.id, title: item.title, href: item.href, category: item.category, categories: item.categories, summary: item.summary, viewedAt: text(row.last_viewed_at, new Date().toISOString()) };
}

function isoMax(...values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value)).sort().at(-1);
}

function isoMin(...values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value)).sort()[0];
}

function mergeReviewItems(local: ReviewItem[], remote: ReviewItem[]) {
  const merged = new Map<string, ReviewItem>();
  for (const item of [...remote, ...local]) {
    const current = merged.get(key(item.type, item.id));
    if (!current) {
      merged.set(key(item.type, item.id), item);
      continue;
    }
    const useItem = (isoMax(current.lastReviewedAt, item.lastReviewedAt) ?? item.savedAt) === (item.lastReviewedAt ?? item.savedAt) ? item : current;
    merged.set(key(item.type, item.id), {
      ...current,
      ...useItem,
      savedAt: isoMin(current.savedAt, item.savedAt) ?? current.savedAt,
      reviewCount: Math.max(current.reviewCount, item.reviewCount),
      lastReviewedAt: isoMax(current.lastReviewedAt, item.lastReviewedAt),
      nextReviewAt: isoMax(current.nextReviewAt, item.nextReviewAt),
    });
  }
  return [...merged.values()];
}

function mergeCoverage(local: Record<string, ReviewCoverageItem>, remote: Record<string, ReviewCoverageItem>) {
  const merged: Record<string, ReviewCoverageItem> = { ...remote };
  for (const [entryKey, item] of Object.entries(local)) {
    const current = merged[entryKey];
    merged[entryKey] = current ? {
      ...current,
      firstViewedAt: isoMin(current.firstViewedAt, item.firstViewedAt) ?? current.firstViewedAt,
      lastViewedAt: isoMax(current.lastViewedAt, item.lastViewedAt) ?? current.lastViewedAt,
      lastCountedDate: (isoMax(current.lastViewedAt, item.lastViewedAt) ?? current.lastViewedAt).slice(0, 10),
      viewCount: Math.max(current.viewCount, item.viewCount),
    } : item;
  }
  return merged;
}

function emptyQbankState(): QbankState {
  return { version: 1, progress: {}, wrongIds: [], bookmarkIds: [], sessions: [], dailyActivity: {} };
}

function qbankStateFromRows(progressRows: Row[], sessionRows: Row[]): QbankState {
  const state = emptyQbankState();
  for (const row of progressRows) {
    const questionId = text(row.question_id);
    if (!questionId) continue;
    state.progress[questionId] = {
      questionId,
      attempts: typeof row.attempts === "number" ? row.attempts : 0,
      correctAttempts: typeof row.correct_attempts === "number" ? row.correct_attempts : 0,
      consecutiveCorrect: typeof row.consecutive_correct === "number" ? row.consecutive_correct : 0,
      lastAnswer: typeof row.last_answer === "string" ? row.last_answer as QbankProgress["lastAnswer"] : undefined,
      lastCorrect: typeof row.last_correct === "boolean" ? row.last_correct : undefined,
      lastAttemptedAt: typeof row.last_attempted_at === "string" ? row.last_attempted_at : undefined,
      mastered: Boolean(row.mastered),
    };
    if (row.wrong_marked === true) state.wrongIds.push(questionId);
    if (row.bookmarked === true) state.bookmarkIds.push(questionId);
  }
  state.sessions = sessionRows.map((row) => ({
    id: text(row.session_id),
    startedAt: text(row.started_at),
    completedAt: text(row.completed_at),
    questionIds: Array.isArray(row.question_ids) ? row.question_ids.filter((value): value is string => typeof value === "string") : [],
    correct: typeof row.correct === "number" ? row.correct : 0,
    total: typeof row.total === "number" ? row.total : 0,
  })).filter((session) => Boolean(session.id));
  for (const session of state.sessions) {
    const day = session.completedAt.slice(0, 10);
    const daily = state.dailyActivity[day] ?? { attempts: 0, correct: 0 };
    state.dailyActivity[day] = { attempts: daily.attempts + session.total, correct: daily.correct + session.correct };
  }
  return state;
}

function mergeQbank(local: QbankState, remote: QbankState): QbankState {
  const state = emptyQbankState();
  const ids = new Set([...Object.keys(local.progress), ...Object.keys(remote.progress), ...local.wrongIds, ...remote.wrongIds, ...local.bookmarkIds, ...remote.bookmarkIds]);
  for (const questionId of ids) {
    const left = local.progress[questionId];
    const right = remote.progress[questionId];
    const recent = (isoMax(left?.lastAttemptedAt, right?.lastAttemptedAt) ?? left?.lastAttemptedAt) === left?.lastAttemptedAt ? left : right;
    state.progress[questionId] = {
      questionId,
      attempts: Math.max(left?.attempts ?? 0, right?.attempts ?? 0),
      correctAttempts: Math.max(left?.correctAttempts ?? 0, right?.correctAttempts ?? 0),
      consecutiveCorrect: Math.max(left?.consecutiveCorrect ?? 0, right?.consecutiveCorrect ?? 0),
      lastAnswer: recent?.lastAnswer,
      lastCorrect: recent?.lastCorrect,
      lastAttemptedAt: isoMax(left?.lastAttemptedAt, right?.lastAttemptedAt),
      mastered: Boolean(left?.mastered || right?.mastered),
    };
  }
  state.wrongIds = [...new Set([...local.wrongIds, ...remote.wrongIds])];
  state.bookmarkIds = [...new Set([...local.bookmarkIds, ...remote.bookmarkIds])];
  const sessions = new Map<string, QbankSessionResult>();
  for (const item of [...remote.sessions, ...local.sessions]) sessions.set(item.id, item);
  state.sessions = [...sessions.values()].sort((left, right) => right.completedAt.localeCompare(left.completedAt)).slice(0, 100);
  for (const session of state.sessions) {
    const day = session.completedAt.slice(0, 10);
    const daily = state.dailyActivity[day] ?? { attempts: 0, correct: 0 };
    state.dailyActivity[day] = { attempts: daily.attempts + session.total, correct: daily.correct + session.correct };
  }
  return state;
}

function isRemoteEvent(event: Event) {
  return event instanceof CustomEvent && event.detail?.source === "remote";
}

export function LearningSyncProvider() {
  const channelRef = useRef<RealtimeChannel | null>(null);
  const timerRef = useRef<number | null>(null);
  const syncingRef = useRef(false);
  const knownReviewKeysRef = useRef(new Set<string>());

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    let active = true;

    const syncSnapshot = async (userId: string) => {
      if (!active || syncingRef.current) return;
      syncingRef.current = true;
      try {
        const items = loadReviewItems();
        const coverage = loadReviewCoverage();
        const recentByKey = new Map(loadRecentItems().map((item) => [key(item.type, item.id), item]));
        const currentKeys = new Set(items.map((item) => key(item.type, item.id)));
        const removedRows = [...knownReviewKeysRef.current].filter((entryKey) => !currentKeys.has(entryKey)).map((entryKey) => {
          const [domain, contentId] = entryKey.split("|");
          return { user_id: userId, domain, content_id: contentId, is_saved: false };
        });
        const reviewRows = [
          ...items.map((item) => ({ user_id: userId, domain: item.type, content_id: item.id, is_saved: true, saved_at: item.savedAt, last_reviewed_at: item.lastReviewedAt ?? null, confidence: item.confidence ?? null, review_count: item.reviewCount, next_review_at: item.nextReviewAt ?? null, metadata: metadataFromItem(item) })),
          ...removedRows,
        ];
        if (reviewRows.length > 0) {
          const { error } = await supabase.from("review_items").upsert(reviewRows, { onConflict: "user_id,domain,content_id" });
          if (error) throw error;
        }
        knownReviewKeysRef.current = currentKeys;

        const coverageRows = Object.values(coverage).map((item) => {
          const recent = recentByKey.get(key(item.type, item.id));
          return { user_id: userId, domain: item.type, content_id: item.id, first_viewed_at: item.firstViewedAt, last_viewed_at: item.lastViewedAt, view_count: item.viewCount, metadata: recent ? metadataFromItem(recent) : {} };
        });
        if (coverageRows.length > 0) {
          const { error } = await supabase.from("content_progress").upsert(coverageRows, { onConflict: "user_id,domain,content_id" });
          if (error) throw error;
        }

        const qbank = loadQbankState();
        const qbankIds = new Set([...Object.keys(qbank.progress), ...qbank.wrongIds, ...qbank.bookmarkIds]);
        const qbankRows = [...qbankIds].map((questionId) => {
          const progress = qbank.progress[questionId];
          return { user_id: userId, question_id: questionId, attempts: progress?.attempts ?? 0, correct_attempts: progress?.correctAttempts ?? 0, consecutive_correct: progress?.consecutiveCorrect ?? 0, last_answer: progress?.lastAnswer ?? null, last_correct: progress?.lastCorrect ?? null, last_attempted_at: progress?.lastAttemptedAt ?? null, mastered: Boolean(progress?.mastered), wrong_marked: qbank.wrongIds.includes(questionId), bookmarked: qbank.bookmarkIds.includes(questionId) };
        });
        if (qbankRows.length > 0) {
          const { error } = await supabase.from("qbank_question_progress").upsert(qbankRows, { onConflict: "user_id,question_id" });
          if (error) throw error;
        }
        const sessionRows = qbank.sessions.map((session) => ({ user_id: userId, session_id: session.id, started_at: session.startedAt, completed_at: session.completedAt, question_ids: session.questionIds, correct: session.correct, total: session.total }));
        if (sessionRows.length > 0) {
          const { error } = await supabase.from("qbank_sessions").upsert(sessionRows, { onConflict: "user_id,session_id" });
          if (error) throw error;
        }
      } catch (error) {
        console.warn("Learning sync write failed; local data is retained and will retry.", error);
      } finally {
        syncingRef.current = false;
      }
    };

    const hydrate = async (userId: string) => {
      const [reviewResult, coverageResult, qbankResult, sessionsResult] = await Promise.all([
        supabase.from("review_items").select("*").eq("user_id", userId).eq("is_saved", true),
        supabase.from("content_progress").select("*").eq("user_id", userId).order("last_viewed_at", { ascending: false }),
        supabase.from("qbank_question_progress").select("*").eq("user_id", userId),
        supabase.from("qbank_sessions").select("*").eq("user_id", userId).order("completed_at", { ascending: false }).limit(100),
      ]);
      const error = reviewResult.error ?? coverageResult.error ?? qbankResult.error ?? sessionsResult.error;
      if (error) throw error;
      const remoteItems = (reviewResult.data ?? []).map((row) => itemFromRow(row as Row)).filter((item): item is ReviewItem => Boolean(item));
      const remoteCoverage = Object.fromEntries((coverageResult.data ?? []).map((row) => coverageFromRow(row as Row)).filter((item): item is ReviewCoverageItem => Boolean(item)).map((item) => [key(item.type, item.id), item]));
      const remoteRecent = (coverageResult.data ?? []).map((row) => recentFromRow(row as Row)).filter((item): item is RecentReviewItem => Boolean(item)).slice(0, 50);
      const remoteQbank = qbankStateFromRows((qbankResult.data ?? []) as Row[], (sessionsResult.data ?? []) as Row[]);
      const marker = `${MIGRATION_PREFIX}:${userId}`;
      const migrateLocal = window.localStorage.getItem(marker) !== "done";
      const mergedItems = migrateLocal ? mergeReviewItems(loadReviewItems(), remoteItems) : remoteItems;
      const mergedCoverage = migrateLocal ? mergeCoverage(loadReviewCoverage(), remoteCoverage) : remoteCoverage;
      const mergedQbank = migrateLocal ? mergeQbank(loadQbankState(), remoteQbank) : remoteQbank;
      const recent = migrateLocal ? [...new Map([...loadRecentItems(), ...remoteRecent].map((item) => [key(item.type, item.id), item])).values()].sort((left, right) => right.viewedAt.localeCompare(left.viewedAt)).slice(0, 50) : remoteRecent;
      replaceReviewSyncData(mergedItems, recent, mergedCoverage);
      replaceQbankSyncData(mergedQbank);
      knownReviewKeysRef.current = new Set(mergedItems.map((item) => key(item.type, item.id)));
      if (migrateLocal) {
        await syncSnapshot(userId);
        window.localStorage.setItem(marker, "done");
      }
    };

    const start = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user || !active) return;
      try {
        await hydrate(user.id);
      } catch (error) {
        console.warn("Learning sync hydration failed; local mode remains active.", error);
        return;
      }
      channelRef.current?.unsubscribe();
      channelRef.current = supabase.channel(`learning-sync:${user.id}`)
        .on("postgres_changes", { event: "*", schema: "public", table: "review_items", filter: `user_id=eq.${user.id}` }, () => void hydrate(user.id))
        .on("postgres_changes", { event: "*", schema: "public", table: "content_progress", filter: `user_id=eq.${user.id}` }, () => void hydrate(user.id))
        .on("postgres_changes", { event: "*", schema: "public", table: "qbank_question_progress", filter: `user_id=eq.${user.id}` }, () => void hydrate(user.id))
        .on("postgres_changes", { event: "*", schema: "public", table: "qbank_sessions", filter: `user_id=eq.${user.id}` }, () => void hydrate(user.id))
        .subscribe();
      const queueSync = () => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => void syncSnapshot(user.id), 700);
      };
      const onReview = (event: Event) => { if (!isRemoteEvent(event)) queueSync(); };
      const onQbank = (event: Event) => { if (!isRemoteEvent(event)) queueSync(); };
      window.addEventListener(REVIEW_CHANGE_EVENT, onReview);
      window.addEventListener(QBANK_CHANGE_EVENT, onQbank);
      const { data: listener } = supabase.auth.onAuthStateChange((event) => {
        if (event === "SIGNED_OUT") {
          channelRef.current?.unsubscribe();
          channelRef.current = null;
        }
      });
      return () => {
        window.removeEventListener(REVIEW_CHANGE_EVENT, onReview);
        window.removeEventListener(QBANK_CHANGE_EVENT, onQbank);
        listener.subscription.unsubscribe();
      };
    };

    let cleanup: (() => void) | undefined;
    void start().then((value) => { cleanup = value; });
    return () => {
      active = false;
      if (timerRef.current) window.clearTimeout(timerRef.current);
      cleanup?.();
      channelRef.current?.unsubscribe();
    };
  }, []);

  return null;
}