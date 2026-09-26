"use client";

import { correctAnswers, gradeQuestion, selectedAnswers, selectionHint, toggleSelection } from "@/lib/qbank-grading";
import { remainingQuestions, sessionWrongIds } from "@/lib/qbank-session-results";
import { SessionRetryActions } from "./session-retry-actions";
import Link from "next/link";
import { DocumentToolbar } from "@/components/document-toolbar";
import { MockExamPanel } from "@/components/mock-exam-panel";
import { readMockExam, type MockExamState } from "@/lib/mock-exam";
import { optionOrder, OPTION_LABELS } from "@/lib/qbank-option-order";
import { qbankCombinedCopyText, qbankExplanationCopyText, qbankQuestionCopyText } from "@/lib/qbank-copy";
import { QbankCopyButton } from "@/components/qbank-copy-button";
import { readRetryIds } from "@/lib/qbank-analytics";
import { reflowOcrText } from "@/lib/ocr-paragraphs";
import { PrivateQuestionImage } from "@/components/private-question-image";
import { loadPracticeIndex, loadPracticeQuestions } from "@/lib/practice-bank";
import { matchesPractice, hasPracticeSelection, comparePracticeOrder, type PracticeFilters, type PracticeIndex } from "@/lib/practice-selection";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { ArrowLeft, Bookmark, BookmarkCheck, CheckCircle2, ChevronRight, Copy, Info, XCircle } from "lucide-react";
import {
  loadQbankState,
  isQbankProgressedInCurrentView,
  loadQbankProgressViewResetAt,
  removeQbankWrong,
  recordQbankAttempt,
  saveQbankSession,
  toggleQbankBookmark,
  type QbankProgress,
} from "@/lib/qbank-store";
import type { QbankSelection, QbankQuestion, QbankQuestionIndex, QbankSpecialtySummary, RelatedTheoryDocument } from "@/lib/types";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { activeSessionFrom, clearLocalActiveQbankSession, loadLocalActiveQbankSession, QBANK_SESSION_STORAGE_PREFIX, readQbankSessionDrafts, saveLocalActiveQbankSession, type QbankActiveSession, type QbankSessionAnswer, type QbankSessionSnapshot } from "@/lib/qbank-active-session";
import { QbankEditButton } from "@/components/qbank-edit-button";
import { RelatedTheoryLauncher } from "@/components/related-theory-launcher";
import { filterRelatedTheoryQuestions, parseRelatedTheoryTopicKeys, relatedTheoryTopicKey, type RelatedTheoryTopic } from "@/lib/qbank-related-theory";
import { qbankSessionContextFromParams } from "@/lib/qbank-session-context";
import { loadCloudActiveQbankSessionState, removeCloudActiveQbankSession, saveCloudActiveQbankSession } from "@/lib/qbank-active-session-cloud";
import type { QbankSessionContext } from "@/lib/qbank-active-session";

type SessionQuestion = QbankQuestion & Partial<Pick<PracticeIndex, "bookDepartment">>;
type SessionAnswer = QbankSessionAnswer;

function shuffled<T>(values: T[]): T[] {
  const next = [...values];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [next[index], next[swap]] = [next[swap], next[index]];
  }
  return next;
}

function balancedUnattemptedFirst(questions: QbankQuestion[], progress: Record<string, QbankProgress>, count: number): QbankQuestion[] {
  const selected: QbankQuestion[] = [];
  const used = new Set<string>();
  const drawRoundRobin = (pool: QbankQuestion[]) => {
    const groups = new Map<string, QbankQuestion[]>();
    for (const question of shuffled(pool)) {
      const key = `${question.questionBank}:${question.specialtySlug}`;
      const bucket = groups.get(key) ?? [];
      bucket.push(question);
      groups.set(key, bucket);
    }
    const queues = shuffled([...groups.values()]);
    while (queues.some((queue) => queue.length > 0) && selected.length < count) {
      for (const queue of queues) {
        const question = queue.shift();
        if (question && !used.has(question.id) && selected.length < count) {
          selected.push(question);
          used.add(question.id);
        }
      }
    }
  };
  drawRoundRobin(questions.filter((question) => !progress[question.id]));
  if (selected.length < count) drawRoundRobin(questions.filter((question) => progress[question.id] && !used.has(question.id)));
  return selected;
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`문제 데이터를 불러오지 못했습니다 (${response.status}).`);
  return response.json() as Promise<T>;
}

function theorySelectionKey(item: Pick<QbankQuestionIndex, "targetType" | "specialtySlug">): string {
  const sourceType = item.targetType === "disease" || item.targetType === "cc" || item.targetType === "drug" ? item.targetType : "other";
  return `${sourceType}:${item.specialtySlug}`;
}

function hasTheorySelection(selections: Set<string>, item: QbankQuestionIndex): boolean {
  return selections.has(theorySelectionKey(item)) || selections.has(item.specialtySlug);
}

function theoryTargetHref(question: QbankQuestion): string | null {
  if (question.questionBank !== "theory" || !question.targetSlug) return null;
  if (question.targetType === "disease") return `/disease/${question.targetSlug}`;
  if (question.targetType === "cc") return `/cc/${question.targetSlug}`;
  if (question.targetType === "drug") return `/drugs/${question.targetSlug}`;
  return null;
}

function theoryTargetTitle(question: QbankQuestion): string {
  if (question.targetTitle) return question.targetTitle;
  try {
    const normalized = question.targetSlug.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const bytes = Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    return decoded.split("/").pop()?.replace(/\.md$/i, "") || question.targetSlug;
  } catch {
    return question.targetSlug;
  }
}

function practiceQuestionLabel(question: SessionQuestion): string {
  if (question.questionBank !== "practice") return question.specialty;
  if (question.bookDepartment) return question.bookDepartment;
  const subject = question.id.match(/-(IM|GS|OG|PE)(?:-|$)/)?.[1];
  return ({ IM: "내과", GS: "외과", OG: "산부인과", PE: "소아과" } as Record<string, string>)[subject ?? ""] ?? question.specialty;
}

function DrugLinks({ drugs }: { drugs: QbankQuestion["relatedDrugs"] }) {
  if (drugs.length === 0) return null;
  return <div className="mt-3"><p className="mb-1.5 text-xs font-semibold text-slate-600">관련 약물</p><div className="flex flex-wrap gap-2">{drugs.map((drug) => <Link key={drug.slug} href={`/drugs/${drug.slug}`} className="pill hover:border-teal-500">{drug.title}</Link>)}</div></div>;
}

async function loadQuestions(specialties: QbankSpecialtySummary[], mode: string, specialty: string, disease: string, targetIds?: Set<string>, theorySpecialties = "", clinicalSpecialties = "", targetType = "", targetSlug = "", targetSlugs = "", practiceFilters?: PracticeFilters, practiceUnattemptedOnly = false, relatedTopicKeys = ""): Promise<SessionQuestion[]> {
  if (mode === "retry" && !targetIds?.size) throw new Error("재풀이 목록이 만료되었습니다. 결과 화면이나 학습 통계에서 다시 선택해 주세요.");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const index = await fetchJson<QbankQuestionIndex[]>(`${basePath}/generated/qbank/index.json`);
  let candidates = mode === "practice-book" ? [] : index;
  if (mode === "theory-linked") {
    const practiceId = new URLSearchParams(window.location.search).get("practiceId") ?? "";
    const [source] = await loadPracticeQuestions([practiceId]);
    const sourceReferences = Array.isArray(source?.relatedDocuments)
      ? source.relatedDocuments.filter((item): item is RelatedTheoryDocument => item.type === "disease" || item.type === "cc")
      : [
          ...(source?.relatedDiseaseSlugs ?? []).map((slug) => ({ type: "disease" as const, slug, title: slug })),
          ...(source?.relatedCcSlugs ?? []).map((slug) => ({ type: "cc" as const, slug, title: slug })),
        ];
    const allowedKeys = new Set(sourceReferences.map(relatedTheoryTopicKey));
    const requested = parseRelatedTheoryTopicKeys(relatedTopicKeys);
    const selectedReferences = (requested.length ? requested : sourceReferences).filter((topic) => allowedKeys.has(relatedTheoryTopicKey(topic)));
    const catalog = await fetchJson<RelatedTheoryTopic[]>(`${basePath}/generated/theory-documents.json`);
    const catalogByKey = new Map(catalog.map((topic) => [relatedTheoryTopicKey(topic), topic]));
    const topics = selectedReferences.map((reference) => catalogByKey.get(relatedTheoryTopicKey(reference)) ?? { ...reference, title: sourceReferences.find((item) => relatedTheoryTopicKey(item) === relatedTheoryTopicKey(reference))?.title ?? reference.slug });
    candidates = filterRelatedTheoryQuestions(index, topics);
  }
  if (mode === "selection") {
    const theory = new Set(theorySpecialties.split(",").filter(Boolean));
    const clinical = new Set(clinicalSpecialties.split(",").filter(Boolean));
    candidates = index.filter((item) => (
      (item.questionBank === "theory" && hasTheorySelection(theory, item))
      || (item.questionBank !== "theory" && clinical.has(item.specialtySlug))
    ));
  } else if (mode === "related") {
    const relatedDiseaseScope = new Set(targetSlugs.split(",").filter(Boolean));
    if (targetType === "disease" && relatedDiseaseScope.size === 0 && targetSlug) relatedDiseaseScope.add(targetSlug);
    candidates = index.filter((item) => (
      (item.targetType === targetType && (targetType !== "disease" ? item.targetSlug === targetSlug : relatedDiseaseScope.has(item.targetSlug)))
      || (targetType === "disease" && item.relatedDiseaseSlugs?.some((slug) => relatedDiseaseScope.has(slug)))
      || (targetType === "cc" && item.relatedCcSlugs?.includes(targetSlug))
    ));
  } else if (mode === "specialty" && specialty && specialty !== "all") {
    const selectedSlugs = specialty.split(",").filter((slug) => specialties.some((item) => item.slug === slug));
    candidates = index.filter((item) => (selectedSlugs.length > 0 ? selectedSlugs : specialties.map((entry) => entry.slug)).includes(item.specialtySlug));
  } else if (mode === "disease") {
    if (!disease) return [];
    candidates = index.filter((item) => item.relatedDiseaseSlugs?.includes(disease));
  } else if (mode === "wrong" || mode === "bookmarks" || mode === "retry") {
    const state = loadQbankState();
    const ids = targetIds ?? new Set(mode === "wrong" ? state.wrongIds : state.bookmarkIds);
    if (ids.size === 0) return [];
    candidates = index.filter((item) => ids.has(item.id));
  }
  if (mode === "related") {
    const theory = new Set(theorySpecialties.split(",").filter(Boolean));
    const clinical = new Set(clinicalSpecialties.split(",").filter(Boolean));
    candidates = candidates.filter((item) => (
      (item.questionBank === "theory" && hasTheorySelection(theory, item))
      || (item.questionBank !== "theory" && clinical.has(item.specialtySlug))
    ));
  }
  if (mode === "all" && targetIds) candidates = candidates.filter(item => targetIds.has(item.id));
  let privateQuestions: SessionQuestion[] = [];
  const wantsPrivate = hasPracticeSelection(practiceFilters) || ["all", "unattempted", "wrong", "bookmarks"].includes(mode) || (mode === "retry" && [...(targetIds ?? [])].some(id => id.startsWith("QB-")));
  if (wantsPrivate) {
    const { questions: privateIndex } = await loadPracticeIndex();
    const state = loadQbankState();
    const privateIds = privateIndex.filter((q) => {
      if (mode === "wrong" || mode === "bookmarks" || mode === "retry") return (targetIds ?? new Set(mode === "wrong" ? state.wrongIds : state.bookmarkIds)).has(q.id);
      if (mode === "all") return !targetIds || targetIds.has(q.id);
      if (mode === "unattempted") return !state.progress[q.id];
      if (!practiceFilters || !matchesPractice(q, practiceFilters)) return false;
      if (practiceUnattemptedOnly && isQbankProgressedInCurrentView(state.progress[q.id], loadQbankProgressViewResetAt())) return false;
      if (mode !== "related") return true;
      const scope = targetSlugs.split(",").filter(Boolean);
      return targetType === "disease" ? q.relatedDiseaseSlugs.some((slug) => (scope.length ? scope : [targetSlug]).includes(slug)) : q.relatedCcSlugs.includes(targetSlug);
    }).map((q) => q.id);
    const metadata = new Map(privateIndex.map((question) => [question.id, question]));
    privateQuestions = (await loadPracticeQuestions(privateIds)).map((question) => ({ ...question, bookDepartment: metadata.get(question.id)?.bookDepartment }));
  }
  const slugs = [...new Set(candidates.map((item) => item.specialtySlug))];
  if (slugs.length === 0) return privateQuestions;
  const shards = await Promise.all(slugs.map((slug) => fetchJson<QbankQuestion[]>(`${basePath}/generated/qbank/${slug}.json`)));
  const ids = new Set(candidates.map((item) => item.id));
  return [...shards.flat().filter((item) => ids.has(item.id)), ...privateQuestions];
}

export function QbankSessionClient({ specialties }: { specialties: QbankSpecialtySummary[] }) {
  const [mockExam, setMockExam] = useState<MockExamState | null>(null);
  const [optionSessionId, setOptionSessionId] = useState("");
  const [questions, setQuestions] = useState<SessionQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [drafts, setDrafts] = useState<Record<string, QbankSelection>>({});
  const [selected, setSelected] = useState<QbankSelection | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<SessionAnswer[]>([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [wrongTracked, setWrongTracked] = useState(false);
  const [questionProgress, setQuestionProgress] = useState<QbankProgress | null>(null);
  const [completed, setCompleted] = useState(false);
  const [finishConfirm, setFinishConfirm] = useState(false);
  const [finishError, setFinishError] = useState("");
  const finishingRef = useRef(false);
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const [sessionStartedAt] = useState(() => new Date().toISOString());
  const sessionIdRef = useRef<string | null>(null);
  const requestedSessionIdRef = useRef<string | null>(null);
  const newSetRequestedRef = useRef(false);
  const activeSessionChannelRef = useRef<RealtimeChannel | null>(null);
  const activeSessionTimerRef = useRef<number | null>(null);
  const pendingCloudSessionRef = useRef<{ userId: string; snapshot: QbankActiveSession } | null>(null);
  const remoteSessionApplyingRef = useRef(false);
  const appliedRemoteSessionVersionRef = useRef("");
  const [syncUserId, setSyncUserId] = useState<string | null>(null);
  const [remoteActiveSession, setRemoteActiveSession] = useState<QbankActiveSession | null>(null);
  const [sessionContext, setSessionContext] = useState<QbankSessionContext | undefined>();

  const flushPendingCloudSession = useCallback(() => {
    const pending = pendingCloudSessionRef.current;
    if (!pending) return;
    pendingCloudSessionRef.current = null;
    appliedRemoteSessionVersionRef.current = pending.snapshot.updatedAt;
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    void saveCloudActiveQbankSession(supabase, pending.userId, pending.snapshot)
      .catch((error) => console.warn("Q-bank active session sync failed.", error));
  }, []);

  const sessionStorageKey = useCallback(() => {
    if (!sessionIdRef.current) {
      const params = new URLSearchParams(window.location.search);
      const existingId = params.get("session");
      requestedSessionIdRef.current = existingId;
      const generatedId = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
      sessionIdRef.current = existingId || generatedId;
      if (!existingId) {
        params.set("session", sessionIdRef.current);
        window.history.replaceState(window.history.state, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
      }
    }
    return `${QBANK_SESSION_STORAGE_PREFIX}${sessionIdRef.current}`;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    newSetRequestedRef.current = !params.has("session") && (params.has("mode") || params.has("specialty") || params.has("count"));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode") || "all";
    const specialty = params.get("specialty") || "all";
    const disease = params.get("disease") || "";
    const theorySpecialties = params.get("theory") || "";
    const clinicalSpecialties = params.get("clinical") || "";
    const targetType = params.get("targetType") || "";
    const targetSlug = params.get("target") || "";
    const targetSlugs = params.get("targets") || "";
    const relatedTopicKeys = params.get("relatedTopics") || "";
    const practiceUnattemptedOnly = params.get("practiceUnattempted") === "1";
    const requestedContext = qbankSessionContextFromParams(params, specialties);
    const requestedCountValue = params.get("count") || (mode === "disease" ? "all" : "10");
    const storageKey = sessionStorageKey();
    if (params.get("resume") === "1") return;
    const initialState = loadQbankState();
    let retryIds: string[] = [];
    if (mode === "retry") {
      const key = params.get("set") ?? "";
      try { retryIds = key.startsWith("qbank-retry-") ? readRetryIds(window.sessionStorage.getItem(key)) : []; } catch { /* Storage unavailable. */ }
    }
    const targetIds = mode === "retry" ? new Set(retryIds) : mode === "wrong"
      ? new Set(initialState.wrongIds)
      : mode === "bookmarks"
        ? new Set(initialState.bookmarkIds)
        : undefined;
    void loadQuestions(specialties, mode, specialty, disease, targetIds, theorySpecialties, clinicalSpecialties, targetType, targetSlug, targetSlugs, { series: (params.get("practiceSeries") ?? "").split(",").filter(Boolean), departments: (params.get("practiceDepartments") ?? "").split(",").filter(Boolean), books: (params.get("practiceBooks") ?? "").split(",").filter(Boolean), specialties: (params.get("practiceSpecialties") ?? "").split(",").filter(Boolean), years: (params.get("practiceYears") ?? "").split(",").filter(Boolean) }, practiceUnattemptedOnly, relatedTopicKeys)
      .then((loaded) => {
        if (appliedRemoteSessionVersionRef.current) return;
        const state = initialState;
        let filtered = loaded;
        if (mode === "disease") filtered = loaded.filter((item) => item.relatedDiseaseSlugs.includes(disease));
        if (mode === "wrong" || mode === "bookmarks" || mode === "retry") filtered = loaded.filter((item) => targetIds?.has(item.id));
        if (mode === "unattempted") filtered = loaded.filter((item) => !state.progress[item.id]);
        const requestedCount = requestedCountValue === "all"
          ? filtered.length
          : Math.max(1, Math.min(mode === "practice-book" || params.get("practiceOnly") === "1" ? filtered.length : 100, Number(requestedCountValue) || 10));
        let snapshot: QbankSessionSnapshot | null = null;
        try {
          const stored = window.sessionStorage.getItem(storageKey) ?? window.localStorage.getItem(storageKey);
          if (stored) snapshot = JSON.parse(stored) as QbankSessionSnapshot;
        } catch {
          snapshot = null;
        }
        const restoredQuestions = snapshot?.questionIds.map((id) => loaded.find((item) => item.id === id)).filter((item): item is SessionQuestion => Boolean(item)) ?? [];
        const canRestore = Boolean(snapshot && restoredQuestions.length === snapshot.questionIds.length && restoredQuestions.length > 0);
        const selectedQuestions = canRestore ? restoredQuestions : mode === "practice-book"
          ? [...filtered].sort(comparePracticeOrder).slice(0, requestedCount)
          : mode === "selection" || mode === "related" || mode === "theory-linked"
            ? balancedUnattemptedFirst(filtered, state.progress, requestedCount)
            : shuffled(filtered).slice(0, requestedCount);
        const restoredIndex = canRestore && snapshot ? Math.min(Math.max(snapshot.currentIndex, 0), selectedQuestions.length - 1) : 0;
        const restoredQuestion = selectedQuestions[restoredIndex];
        const restoredAnswer = canRestore && snapshot ? snapshot.answers.find((item) => item.questionId === restoredQuestion?.id) : undefined;
        setMockExam(canRestore ? readMockExam(snapshot?.mockExam) : params.get("exam") === "1" ? { version: 1, title: `${params.get("practiceYears") || "모의고사"}년 모의고사`, startedAt: new Date().toISOString(), drafts: {}, flaggedIds: [] } : null);
        setOptionSessionId(sessionIdRef.current ?? "");
        setQuestions(selectedQuestions);
        setSessionContext(canRestore ? snapshot?.context ?? requestedContext : requestedContext);
        setCurrentIndex(restoredIndex);
        setAnswers(canRestore && snapshot ? snapshot.answers.filter((item) => selectedQuestions.some((question) => question.id === item.questionId)) : []);
        setDrafts(canRestore ? readQbankSessionDrafts(snapshot?.drafts) : {});
        setSelected(restoredAnswer?.selected ?? (canRestore && snapshot ? snapshot.selected : null));
        setSubmitted(Boolean(restoredAnswer));
        setBookmarked(Boolean(restoredQuestion && state.bookmarkIds.includes(restoredQuestion.id)));
        setWrongTracked(Boolean(restoredQuestion && state.wrongIds.includes(restoredQuestion.id)));
        setQuestionProgress(restoredQuestion ? state.progress[restoredQuestion.id] ?? null : null);
      })
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : "문제 데이터를 불러오지 못했습니다."))
      .finally(() => setLoading(false));
  }, [sessionStorageKey, specialties]);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    const remoteResume = new URLSearchParams(window.location.search).get("resume") === "1";
    let active = true;
    const resumeFailed = () => {
      if (active && remoteResume) { setError("계정의 저장된 풀이를 불러오지 못했습니다. 로그인과 네트워크 상태를 확인하고 다시 열어 주세요."); setLoading(false); }
    };
    if (!supabase) { queueMicrotask(resumeFailed); return () => { active = false; }; }

    const applyRemote = (value: unknown) => {
      const session = activeSessionFrom(value);
      if (!active || !session || session.updatedAt <= appliedRemoteSessionVersionRef.current) return;
      if (requestedSessionIdRef.current && requestedSessionIdRef.current !== session.sessionId) return;
      if (newSetRequestedRef.current && session.sessionId !== sessionIdRef.current) return;
      remoteSessionApplyingRef.current = true;
      setRemoteActiveSession(session);
    };

    const applyRemoteRow = (value: Record<string, unknown>) => {
      const sessionId = value.session_id;
      if (typeof sessionId === "string" && value.ended_at) {
        if (sessionId !== sessionIdRef.current || finishingRef.current) return;
        if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
        pendingCloudSessionRef.current = null;
        clearLocalActiveQbankSession(sessionId);
        setError("다른 기기에서 종료된 문제 세트입니다.");
        setLoading(false);
        return;
      }
      applyRemote(value.payload);
    };

    const start = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!active) return;
      if (!user) { resumeFailed(); return; }
      try {
        const cloud = await loadCloudActiveQbankSessionState(supabase, user.id);
        if (requestedSessionIdRef.current && cloud.endedSessionIds.includes(requestedSessionIdRef.current)) {
          clearLocalActiveQbankSession(requestedSessionIdRef.current);
          setError("이미 종료된 문제 세트입니다.");
          setLoading(false);
          return;
        }
        const saved = requestedSessionIdRef.current ? cloud.sessions.find((session) => session.sessionId === requestedSessionIdRef.current) : cloud.sessions[0];
        if (!saved) resumeFailed();
        else applyRemote(saved);
      } catch (error) {
        console.warn("Q-bank active session sync is unavailable.", error);
        resumeFailed();
      }
      if (!active) return;
      setSyncUserId(user.id);
      activeSessionChannelRef.current = supabase.channel(`qbank-active-session:${user.id}`)
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "qbank_active_sessions", filter: `user_id=eq.${user.id}` }, (payload) => applyRemote((payload.new as Record<string, unknown>).payload))
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "qbank_active_sessions", filter: `user_id=eq.${user.id}` }, (payload) => applyRemoteRow(payload.new as Record<string, unknown>))
        .subscribe();
    };

    void start().catch(resumeFailed);
    return () => {
      active = false;
      if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
      flushPendingCloudSession();
      activeSessionChannelRef.current?.unsubscribe();
      activeSessionChannelRef.current = null;
    };
  }, [flushPendingCloudSession]);

  useEffect(() => {
    const flushWhenHidden = () => {
      if (document.visibilityState === "hidden") flushPendingCloudSession();
    };
    window.addEventListener("pagehide", flushPendingCloudSession);
    document.addEventListener("visibilitychange", flushWhenHidden);
    return () => {
      window.removeEventListener("pagehide", flushPendingCloudSession);
      document.removeEventListener("visibilitychange", flushWhenHidden);
    };
  }, [flushPendingCloudSession]);

  useEffect(() => {
    if (!remoteActiveSession || remoteActiveSession.updatedAt === appliedRemoteSessionVersionRef.current) return;
    let cancelled = false;
    void loadQuestions(specialties, "all", "all", "", new Set(remoteActiveSession.questionIds))
      .then((loaded) => {
        const restoredQuestions = remoteActiveSession.questionIds.map((id) => loaded.find((item) => item.id === id)).filter((item): item is QbankQuestion => Boolean(item));
        if (cancelled) return;
        if (restoredQuestions.length !== remoteActiveSession.questionIds.length || restoredQuestions.length === 0) throw new Error("저장된 문제에 접근할 수 없습니다.");
        const restoredIndex = Math.min(Math.max(remoteActiveSession.currentIndex, 0), restoredQuestions.length - 1);
        const restoredQuestion = restoredQuestions[restoredIndex];
        const restoredAnswer = remoteActiveSession.answers.find((item) => item.questionId === restoredQuestion.id);
        sessionIdRef.current = remoteActiveSession.sessionId;
        const params = new URLSearchParams(window.location.search);
        params.set("session", remoteActiveSession.sessionId);
        params.delete("resume");
        window.history.replaceState(window.history.state, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
        window.sessionStorage.setItem(`${QBANK_SESSION_STORAGE_PREFIX}${remoteActiveSession.sessionId}`, JSON.stringify(remoteActiveSession));
        saveLocalActiveQbankSession(remoteActiveSession);
        setMockExam(readMockExam(remoteActiveSession.mockExam));
        setSessionContext(remoteActiveSession.context);
        setOptionSessionId(remoteActiveSession.sessionId);
        setQuestions(restoredQuestions);
        setCurrentIndex(restoredIndex);
        setAnswers(remoteActiveSession.answers.filter((item) => restoredQuestions.some((question) => question.id === item.questionId)));
        setDrafts(readQbankSessionDrafts(remoteActiveSession.drafts));
        setSelected(restoredAnswer?.selected ?? remoteActiveSession.selected);
        setSubmitted(Boolean(restoredAnswer));
        const state = loadQbankState();
        setBookmarked(state.bookmarkIds.includes(restoredQuestion.id));
        setWrongTracked(state.wrongIds.includes(restoredQuestion.id));
        setQuestionProgress(state.progress[restoredQuestion.id] ?? null);
        appliedRemoteSessionVersionRef.current = remoteActiveSession.updatedAt;
      })
      .catch((error) => { console.warn("Q-bank active session could not be restored.", error); if (!cancelled) setError("저장된 풀이를 복원하지 못했습니다. 로그인과 문제 접근 권한을 확인해 주세요."); })
      .finally(() => { if (!cancelled) setLoading(false); window.setTimeout(() => { remoteSessionApplyingRef.current = false; }, 0); });
    return () => { cancelled = true; };
  }, [remoteActiveSession, specialties]);

  const current = questions[currentIndex];
  useEffect(() => {
    if (!questions.some((q) => q.questionBank === "practice")) return;
    const client = getSupabaseBrowserClient();
    let ownerId: string | null | undefined = undefined;
    const listener = client?.auth.onAuthStateChange((_event, session) => {
      const nextId = session?.user.id ?? null;
      if (ownerId === undefined && nextId) { ownerId = nextId; return; }
      if (nextId && nextId === ownerId) return;
      ownerId = nextId;
      if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
      setSyncUserId(null);
      setQuestions([]);
      setRemoteActiveSession(null);
      setError("로그인 상태가 변경되었습니다. 문제은행에서 다시 시작해주세요.");
    });
    return () => listener?.data.subscription.unsubscribe();
  }, [questions]);
  const displayedOptions = current ? optionOrder(current, optionSessionId) : [];
  const currentTheoryTargetHref = current ? theoryTargetHref(current) : null;
  const correctCount = useMemo(() => answers.filter((item) => item.correct).length, [answers]);
  const specialtyResults = useMemo(() => {
    const summary = new Map<string, { correct: number; total: number }>();
    for (const item of answers) {
      if (item.correct === null) continue;
      const result = summary.get(item.specialty) ?? { correct: 0, total: 0 };
      result.total += 1;
      result.correct += item.correct ? 1 : 0;
      summary.set(item.specialty, result);
    }
    return [...summary.entries()].sort(([left], [right]) => left.localeCompare(right, "ko"));
  }, [answers]);

  const showQuestion = useCallback((index: number) => {
    const question = questions[index];
    if (!question || index === currentIndex) return;
    if (current && !submitted) setDrafts(items => {
      const nextDrafts = { ...items };
      if (selected) nextDrafts[current.id] = selected;
      else delete nextDrafts[current.id];
      return nextDrafts;
    });
    const previousAnswer = answers.find((item) => item.questionId === question.id);
    const state = loadQbankState();
    setCurrentIndex(index);
    setBookmarked(state.bookmarkIds.includes(question.id));
    setSelected(previousAnswer?.selected ?? drafts[question.id] ?? null);
    setSubmitted(Boolean(previousAnswer));
    setWrongTracked(state.wrongIds.includes(question.id));
    setQuestionProgress(state.progress[question.id] ?? null);
  }, [answers, questions, current, currentIndex, selected, submitted, drafts]);

  const submit = useCallback(() => {
    if (mockExam || !current || submitted) return;
    const correct = gradeQuestion(current, selected);
    const progress = correct !== null ? recordQbankAttempt(current.id, selected ?? undefined, correct) : null;
    setWrongTracked(loadQbankState().wrongIds.includes(current.id));
    setQuestionProgress(progress);
    setAnswers((items) => [...items, { questionId: current.id, selected: selected ?? undefined, correct, specialty: practiceQuestionLabel(current) }]);
    setSubmitted(true);
  }, [current, mockExam, selected, submitted]);

  const remaining = remainingQuestions(questions.map(question => question.id), answers, drafts, current?.id, selected);
  const finish = useCallback(() => {
    if (finishingRef.current || completed) return;
    finishingRef.current = true;
    try {
      saveQbankSession({
        id: `session-${sessionIdRef.current}`,
        startedAt: sessionStartedAt,
        completedAt: new Date().toISOString(),
        questionIds: questions.map(item => item.id),
        correct: answers.filter(item => item.correct === true).length,
        total: answers.filter(item => item.correct !== null).length,
      });
    } catch {
      finishingRef.current = false;
      setFinishError("결과를 저장하지 못했습니다. 저장 공간을 확인한 뒤 다시 시도해 주세요.");
      return;
    }
    if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
    pendingCloudSessionRef.current = null;
    const endingSnapshot = sessionIdRef.current ? loadLocalActiveQbankSession(sessionIdRef.current) : null;
    try { clearLocalActiveQbankSession(sessionIdRef.current ?? undefined); } catch { /* Result is already saved. */ }
    if (syncUserId) {
      const client = getSupabaseBrowserClient();
      if (client && sessionIdRef.current) void removeCloudActiveQbankSession(client, syncUserId, sessionIdRef.current, endingSnapshot)
        .catch((error) => console.warn("Q-bank active session cleanup failed.", error));
    }
    setFinishConfirm(false);
    setCompleted(true);
  }, [answers, completed, questions, sessionStartedAt, syncUserId]);

  const next = useCallback(() => {
    if (completed || finishConfirm) return;
    if (currentIndex + 1 >= questions.length) {
      if (remaining.remaining.length) setFinishConfirm(true);
      else finish();
      return;
    }
    showQuestion(currentIndex + 1);
  }, [completed, finishConfirm, currentIndex, questions.length, remaining.remaining.length, finish, showQuestion]);

  useEffect(() => {
    if (finishConfirm) {
      continueButtonRef.current?.focus();
      continueButtonRef.current?.scrollIntoView({ block: "center" });
    }
  }, [finishConfirm]);

  const previous = useCallback(() => {
    if (currentIndex > 0) showQuestion(currentIndex - 1);
  }, [currentIndex, showQuestion]);
  function toggleBookmark() {
    if (!current) return;
    setBookmarked(toggleQbankBookmark(current.id));
  }

  function dismissWrong() {
    if (!current) return;
    removeQbankWrong(current.id);
    setWrongTracked(false);
  }
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (document.documentElement.dataset.highlighterMode && document.documentElement.dataset.highlighterMode !== "read") return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) return;
      if (!current || mockExam || completed || finishConfirm || event.isComposing) return;

      if (!submitted && ["1", "2", "3", "4", "5"].includes(event.key)) {
        const answer = optionOrder(current, optionSessionId)[Number(event.key) - 1];
        if (answer && current.options[answer]) {
          event.preventDefault();
          setSelected(value => toggleSelection(current, value, answer));
        }
        return;
      }

      if ((event.key === "Enter" || event.key === " ") && !submitted && selected) {
        event.preventDefault();
        submit();
        return;
      }

      if (event.key === "ArrowLeft" && currentIndex > 0) {
        event.preventDefault();
        previous();
        return;
      }

      if (event.key === "ArrowRight" && submitted) {
        event.preventDefault();
        next();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, currentIndex, mockExam, next, optionSessionId, previous, selected, submit, submitted, completed, finishConfirm]);
  useEffect(() => {
    if (loading || completed || finishingRef.current || questions.length === 0 || !sessionIdRef.current) return;
    const snapshot: QbankActiveSession = {
      context: sessionContext,
      mockExam,
      drafts: current && selected && !submitted ? { ...drafts, [current.id]: selected } : drafts,
      sessionId: sessionIdRef.current,
      questionIds: questions.map((item) => item.id),
      currentIndex,
      answers,
      selected,
      submitted,
      updatedAt: new Date().toISOString(),
    };
    try {
      window.sessionStorage.setItem(sessionStorageKey(), JSON.stringify(snapshot));
      saveLocalActiveQbankSession(snapshot);
      if (mockExam) {
        window.localStorage.setItem(sessionStorageKey(), JSON.stringify(snapshot));
        window.localStorage.setItem("medicine-web-last-mock", JSON.stringify({ updatedAt: snapshot.updatedAt, title: mockExam.title, finished: Boolean(mockExam.finishedAt), href: `/review/qbank/session${window.location.search}` }));
      }
    } catch {
      // Keep the session usable when browser storage is unavailable.
    }
    if (!syncUserId || remoteSessionApplyingRef.current) return;
    if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
    pendingCloudSessionRef.current = { userId: syncUserId, snapshot };
    activeSessionTimerRef.current = window.setTimeout(() => {
      flushPendingCloudSession();
    }, mockExam ? 0 : 500);
  }, [answers, completed, current, currentIndex, drafts, flushPendingCloudSession, loading, mockExam, questions, selected, sessionContext, sessionStorageKey, submitted, syncUserId]);
  useEffect(() => {
    if (!mockExam?.finishedAt || !sessionIdRef.current) return;
    const finishedSessionId = sessionIdRef.current;
    if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
    pendingCloudSessionRef.current = null;
    const endingSnapshot = loadLocalActiveQbankSession(finishedSessionId);
    try { clearLocalActiveQbankSession(finishedSessionId); } catch { /* The completed result is already stored separately. */ }
    const client = getSupabaseBrowserClient();
    if (client && syncUserId) void removeCloudActiveQbankSession(client, syncUserId, finishedSessionId, endingSnapshot)
      .catch((error) => console.warn("Completed mock session cleanup failed.", error));
  }, [mockExam?.finishedAt, syncUserId]);
  if (loading) return <div className="surface p-8 text-center text-slate-600">문제를 불러오는 중입니다…</div>;
  if (error) return <div className="rounded-lg border border-rose-200 bg-rose-50 p-6 text-rose-900">{error}</div>;
  if (questions.length === 0) return (
    <div className="surface p-8 text-center">
      <p className="text-slate-600">조건에 맞는 문제가 없습니다.</p>
      <Link href="/review/qbank" className="secondary-action mt-4">문제은행으로 돌아가기</Link>
    </div>
  );

  if (mockExam) return <MockExamPanel questions={questions} exam={mockExam} sessionId={optionSessionId} currentIndex={currentIndex} onChange={setMockExam} onMove={setCurrentIndex} />;

  if (completed) {
    const gradedCount = answers.filter((item) => item.correct !== null).length;
    const rate = gradedCount ? Math.round((correctCount / gradedCount) * 100) : 0;
    return (
      <div className="space-y-5">
        <section className="surface p-7 text-center">
          <div className="eyebrow">Session complete</div>
          <h1 className="mt-3 text-3xl font-semibold">{correctCount} / {gradedCount}</h1>
          {specialtyResults.length > 0 ? <div className="mx-auto mt-5 max-w-md rounded-lg border border-slate-200 bg-white p-3 text-left text-sm">{specialtyResults.map(([specialty, result]) => <div key={specialty} className="flex justify-between gap-4 py-1"><span>{specialty}</span><span>{result.correct}/{result.total}</span></div>)}</div> : null}
          <p className="mt-2 text-slate-600">정답률 {rate}% · 채점 제외 {answers.length - gradedCount}문항{remaining.remaining.length > 0 ? ` · 미응답 ${remaining.unanswered}문항 · 선택 후 미제출 ${remaining.unsubmitted}문항` : ""}</p>
        </section>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/review/qbank/stats" className="secondary-action">학습 통계</Link>
          <Link href="/review/qbank" className="secondary-action"><ArrowLeft className="h-4 w-4" />문제은행</Link>
          <SessionRetryActions ids={sessionWrongIds(answers)} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
        <Link href="/review/qbank" className="inline-flex items-center gap-1 hover:text-teal-700"><ArrowLeft className="h-4 w-4" />나가기</Link>
        <div className="h-2 min-w-28 flex-1 max-w-md overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-teal-600 transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} /></div>
        <span className="tabular-nums whitespace-nowrap">{currentIndex + 1} / {questions.length}</span>
        {questions.some(question => question.questionBank === "practice") && <div className="ml-auto flex flex-wrap items-center gap-2" aria-label="문제 번호 이동">
          <label className="sr-only" htmlFor="qbank-question-select">문제 선택</label>
          <select id="qbank-question-select" aria-label="문제 선택" className="h-9 max-w-36 rounded-md border border-slate-300 bg-white px-2 text-sm font-medium" value={currentIndex} onChange={event => showQuestion(Number(event.target.value))}>
              {questions.map((question, index) => <option key={question.id} value={index}>{index + 1}번 · {practiceQuestionLabel(question)}</option>)}
          </select>
          <button type="button" className="h-9 rounded-md border border-slate-300 bg-white px-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-40" disabled={currentIndex === 0} onClick={previous}>이전</button>
          <button type="button" className="h-9 rounded-md border border-slate-300 bg-white px-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-40" disabled={currentIndex === questions.length - 1} onClick={() => showQuestion(currentIndex + 1)}>다음</button>
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-md border border-slate-300 bg-white px-2.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">전체 번호</summary>
            <div className="absolute right-0 z-10 mt-2 grid max-h-64 w-[calc(100vw-2rem)] max-w-[38.5rem] grid-cols-[repeat(8,minmax(0,1fr))] gap-1 overflow-y-auto rounded-lg border border-slate-200 bg-white p-3 shadow-lg sm:grid-cols-[repeat(12,minmax(0,1fr))] lg:grid-cols-[repeat(20,minmax(0,1fr))]">
              {questions.map((question, index) => {
                const answer = answers.find(item => item.questionId === question.id);
                const chosen = index === currentIndex ? selected : drafts[question.id];
                const status = answer ? answer.correct === null ? "채점 제외" : answer.correct ? "정답" : "오답" : chosen ? "선택 중" : "미응답";
                return <button key={question.id} type="button" aria-current={index === currentIndex ? "step" : undefined} aria-label={`${index + 1}번 · ${status}`} title={`${index + 1}번 · ${status}`} onClick={() => showQuestion(index)} className={`h-[27px] w-full min-w-0 rounded-md border p-0 text-[11px] tabular-nums ${index === currentIndex ? "ring-2 ring-teal-600 ring-offset-1" : ""} ${answer ? answer.correct === null ? "border-slate-200 bg-slate-100" : answer.correct ? "border-teal-200 bg-teal-50 text-teal-800" : "border-rose-200 bg-rose-50 text-rose-800" : chosen ? "border-blue-200 bg-blue-50 text-blue-800" : "border-slate-200 bg-white text-slate-600"}`}>{index + 1}</button>;
              })}
            </div>
          </details>
          <span className="text-xs text-slate-500">제출 {answers.length}/{questions.length}</span>
        </div>
      }</div>

      {finishError && <p role="alert" className="text-sm text-rose-700">{finishError}</p>}
      {finishConfirm && <section role="alertdialog" aria-label="미제출 문제 확인" className="rounded-lg border border-amber-300 bg-amber-50 p-4">
        <h2 className="text-sm font-semibold">아직 제출하지 않은 문제가 있습니다.</h2>
        <p className="mt-1 text-sm">미응답 {remaining.unanswered}문항 · 선택 후 미제출 {remaining.unsubmitted}문항</p>
        <p className="mt-1 text-xs text-slate-600">지금 종료하면 제출한 답안만 결과에 포함합니다.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" ref={continueButtonRef} className="secondary-action" onClick={() => { setFinishConfirm(false); const first = remaining.remaining[0]; if (first) showQuestion(first.index); }}>남은 문제 계속 풀기</button>
          <button type="button" className="secondary-action" onClick={finish}>제출한 답안만으로 종료</button>
        </div>
      </section>}

      <article data-highlight-document={`qbank:${current.id}`} className="surface p-5 sm:p-7">
        <DocumentToolbar title={`${currentIndex + 1}번 · ${practiceQuestionLabel(current)}`} className="document-toolbar--inset"><QbankEditButton question={current} onSaved={payload => setQuestions(previous => previous.map(item => item.id === payload.id ? { ...item, ...payload } : item))} /><details className="relative"><summary className="secondary-action h-9 w-9 cursor-pointer list-none !px-0" aria-label="문제 ID 보기" title="문제 ID 보기"><Info className="h-4 w-4" /></summary><div className="absolute right-0 z-20 mt-2 w-64 rounded-lg border border-slate-200 bg-white p-3 shadow-lg"><p className="text-xs font-medium text-slate-500">문제 ID</p><div className="mt-1.5 flex items-center gap-2"><code className="min-w-0 flex-1 truncate rounded bg-slate-100 px-2 py-1.5 text-xs text-slate-700">{current.id}</code><button type="button" onClick={() => void navigator.clipboard?.writeText(current.id)} className="secondary-action h-8 w-8 shrink-0 !px-0" aria-label="문제 ID 복사" title="문제 ID 복사"><Copy className="h-3.5 w-3.5" /></button></div></div></details><button type="button" onClick={toggleBookmark} className="secondary-action h-9 w-9 !px-0" aria-label={bookmarked ? "북마크 해제" : "북마크 저장"} aria-pressed={bookmarked} title={bookmarked ? "북마크 해제" : "북마크 저장"}>
            {bookmarked ? <BookmarkCheck className="h-4 w-4 text-amber-600" /> : <Bookmark className="h-4 w-4" />}
          </button>
        </DocumentToolbar>
        <div className="mt-3 flex flex-wrap items-center gap-2"><span className="pill">{practiceQuestionLabel(current)}</span><span className="pill">{current.questionType}</span>{questionProgress ? <span className="text-xs tabular-nums text-slate-500">풀이 {questionProgress.attempts}회 · 정답 {questionProgress.correctAttempts}회{questionProgress.consecutiveCorrect > 1 ? ` · 연속 ${questionProgress.consecutiveCorrect}회` : ""}</span> : <span className="text-xs text-slate-500">첫 풀이</span>}</div>
        <div className={current.figures?.length ? "mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.9fr)] lg:items-start" : ""}>
          <div>
            <p data-highlight-block="question" className={`${current.figures?.length ? "" : "mt-6 "}whitespace-pre-line text-[15px] leading-7 text-slate-900 sm:text-base`}>{current.sourceSplit === "private-scan" ? reflowOcrText(current.question) : current.question}</p>
          </div>
          {current.figures?.length ? <aside className="space-y-4">{current.figures.map((figure, index) => <figure key={figure.path} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-2"><PrivateQuestionImage path={figure.path} alt={figure.alt} /><figcaption className="px-1 pt-2 text-xs text-slate-500">그림 {index + 1}</figcaption></figure>)}</aside> : null}
          <div className={current.figures?.length ? "lg:col-span-2" : ""}>
            {selectionHint(current) && <p className="mt-5 text-sm font-medium text-teal-700">{selectionHint(current)}</p>}
            <div className="mt-7 grid gap-3">
              {displayedOptions.map((key, position) => {
                const isCorrect = submitted && correctAnswers(current).includes(key);
                const isWrong = submitted && gradeQuestion(current, selected) === false && selectedAnswers(selected).includes(key) && !correctAnswers(current).includes(key);
                const isSelected = selectedAnswers(selected).includes(key);
                return <button key={key} type="button" disabled={submitted} aria-pressed={isSelected} onClick={() => setSelected(value => toggleSelection(current, value, key))} className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3.5 text-left transition ${isCorrect ? "border-teal-500 bg-teal-50 text-teal-950" : isWrong ? "border-rose-400 bg-rose-50 text-rose-950" : isSelected ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white hover:border-slate-400"}`}><span className="font-semibold">{OPTION_LABELS[position]}.</span><span data-highlight-block={`option:${key}`}>{current.sourceSplit === "private-scan" ? reflowOcrText(current.options[key] ?? "") : current.options[key]}</span></button>;
              })}
            </div>
            <div className="mt-2 flex justify-end">
              <QbankCopyButton key={`question:${current.id}`} text={qbankQuestionCopyText(current, displayedOptions)} label="문제와 보기 텍스트 복사" title="문제와 보기 텍스트 복사 · 이미지는 제외" iconOnly />
            </div>
          </div>

        {submitted ? (
          <div className={`mt-6 rounded-lg border p-4 lg:col-span-2 ${gradeQuestion(current, selected) === null ? "border-slate-200 bg-slate-50" : gradeQuestion(current, selected) ? "border-teal-200 bg-teal-50" : "border-rose-200 bg-rose-50"}`}>
            {wrongTracked ? <button type="button" onClick={dismissWrong} className="float-right rounded-md border border-slate-300 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-600 transition hover:border-rose-300 hover:text-rose-700">오답 노트에서 제거</button> : null}
            <div className="flex items-center gap-2 font-semibold">{gradeQuestion(current, selected) === null ? null : gradeQuestion(current, selected) ? <CheckCircle2 className="h-5 w-5 text-teal-700" /> : <XCircle className="h-5 w-5 text-rose-700" />}{gradeQuestion(current, selected) === null ? (current.ungradedReason || "정답 미확인 문항입니다. 채점과 오답 집계에서 제외됩니다.") : current.gradingMode === "all-credit" ? "전원 정답 처리 · 조건/보기 불완전" : gradeQuestion(current, selected) ? "정답입니다." : `정답은 ${correctAnswers(current).map(key => OPTION_LABELS[displayedOptions.indexOf(key)]).join(", ")}입니다.`}</div>
            {current.explanation ? <div data-highlight-block="explanation" className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-700">{current.sourceSplit === "private-scan" ? reflowOcrText(current.explanation) : current.explanation}</div> : <p className="mt-2 text-sm text-slate-600">검증된 해설은 아직 준비되지 않았습니다.</p>}
            {!!current.evidenceReferences?.length && <div className="mt-3 flex flex-wrap gap-2">{current.evidenceReferences.filter(ref => ref.url.startsWith("https://")).map(ref => <a key={ref.url} href={ref.url} target="_blank" rel="noopener noreferrer" className="pill hover:border-teal-500">근거: {ref.title}</a>)}</div>}
            <DrugLinks drugs={current.relatedDrugs ?? []} />
            {current.relatedDocuments && <div className="mt-3 flex flex-wrap gap-2">{current.relatedDocuments.filter((d) => d.type !== "drug").map((d) => <Link key={`${d.type}:${d.slug}`} className="pill hover:border-teal-500" href={`${d.type === "disease" ? "/disease/" : "/cc/"}${d.slug}`}>{d.title} · 이론</Link>)}</div>}
            <RelatedTheoryLauncher key={current.id} question={current} />
            {currentTheoryTargetHref ? <div className="mt-3 flex flex-wrap gap-2"><Link href={currentTheoryTargetHref} className="pill hover:border-teal-500">이론 원문: {theoryTargetTitle(current)}</Link></div> : current.questionBank !== "practice" && current.relatedDiseaseSlugs.length > 0 ? <div className="mt-3 flex flex-wrap gap-2">{current.relatedDiseaseSlugs.map((slug, index) => <Link key={slug} href={`/disease/${slug}`} className="pill hover:border-teal-500">{current.relatedDiseaseTerms[index] || slug}</Link>)}</div> : null}
            <div className="mt-3 flex flex-wrap justify-end gap-1.5 border-t border-slate-200/70 pt-2">
              <QbankCopyButton key={`explanation:${current.id}`} text={qbankExplanationCopyText(current, displayedOptions)} label="해설 복사" />
              <QbankCopyButton key={`both:${current.id}`} text={qbankCombinedCopyText(current, displayedOptions)} label="문제+해설 복사" title="문제와 보기 및 해설 텍스트 복사 · 이미지는 제외" />
            </div>
          </div>
        ) : null}
        </div>

        <div className="mt-6 flex justify-end">
          {submitted ? <button type="button" onClick={next} className="primary-action">{currentIndex + 1 === questions.length ? "결과 보기" : "다음 문제"}<ChevronRight className="h-4 w-4" /></button> : <button type="button" onClick={submit} className="primary-action">{selected ? "답안 제출" : "모름으로 제출"}</button>}
        </div>
      </article>
    </div>
  );
}

