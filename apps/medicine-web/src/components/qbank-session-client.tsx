"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { ArrowLeft, Bookmark, BookmarkCheck, CheckCircle2, ChevronRight, RotateCcw, XCircle } from "lucide-react";
import {
  loadQbankState,
  removeQbankWrong,
  recordQbankAttempt,
  saveQbankSession,
  toggleQbankBookmark,
} from "@/lib/qbank-store";
import type { QbankAnswer, QbankQuestion, QbankQuestionIndex, QbankSpecialtySummary } from "@/lib/types";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type SessionAnswer = { questionId: string; selected: QbankAnswer; correct: boolean; specialty: string };
type QbankSessionSnapshot = { questionIds: string[]; currentIndex: number; answers: SessionAnswer[]; selected: QbankAnswer | null; submitted: boolean };
type QbankActiveSession = QbankSessionSnapshot & { sessionId: string; updatedAt: string };

const QBANK_SESSION_STORAGE_PREFIX = "medicine-web-qbank-session:";

function shuffled<T>(values: T[]): T[] {
  const next = [...values];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [next[index], next[swap]] = [next[swap], next[index]];
  }
  return next;
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`문제 데이터를 불러오지 못했습니다 (${response.status}).`);
  return response.json() as Promise<T>;
}

async function loadQuestions(specialties: QbankSpecialtySummary[], mode: string, specialty: string): Promise<QbankQuestion[]> {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  let slugs: string[];
  if (mode === "specialty" && specialty && specialty !== "all") {
    const selectedSlugs = specialty.split(",").filter((slug) => specialties.some((item) => item.slug === slug));
    slugs = selectedSlugs.length > 0 ? selectedSlugs : specialties.map((item) => item.slug);
  } else if (mode === "wrong" || mode === "bookmarks") {
    const state = loadQbankState();
    const ids = new Set(mode === "wrong" ? state.wrongIds : state.bookmarkIds);
    if (ids.size === 0) return [];
    const index = await fetchJson<QbankQuestionIndex[]>(`${basePath}/generated/qbank/index.json`);
    slugs = [...new Set(index.filter((item) => ids.has(item.id)).map((item) => item.specialtySlug))];
  } else {
    slugs = specialties.map((item) => item.slug);
  }
  const shards = await Promise.all(slugs.map((slug) => fetchJson<QbankQuestion[]>(`${basePath}/generated/qbank/${slug}.json`)));
  return shards.flat();
}

function activeSessionFrom(value: unknown): QbankActiveSession | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<QbankActiveSession>;
  if (typeof candidate.sessionId !== "string" || !Array.isArray(candidate.questionIds) || !Array.isArray(candidate.answers) || typeof candidate.updatedAt !== "string") return null;
  return {
    sessionId: candidate.sessionId,
    questionIds: candidate.questionIds.filter((item): item is string => typeof item === "string"),
    currentIndex: typeof candidate.currentIndex === "number" ? candidate.currentIndex : 0,
    answers: candidate.answers as SessionAnswer[],
    selected: candidate.selected === "A" || candidate.selected === "B" || candidate.selected === "C" || candidate.selected === "D" ? candidate.selected : null,
    submitted: Boolean(candidate.submitted),
    updatedAt: candidate.updatedAt,
  };
}

export function QbankSessionClient({ specialties }: { specialties: QbankSpecialtySummary[] }) {
  const [questions, setQuestions] = useState<QbankQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<QbankAnswer | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<SessionAnswer[]>([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [wrongTracked, setWrongTracked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [sessionStartedAt] = useState(() => new Date().toISOString());
  const sessionIdRef = useRef<string | null>(null);
  const activeSessionChannelRef = useRef<RealtimeChannel | null>(null);
  const activeSessionTimerRef = useRef<number | null>(null);
  const remoteSessionApplyingRef = useRef(false);
  const appliedRemoteSessionVersionRef = useRef("");
  const [syncUserId, setSyncUserId] = useState<string | null>(null);
  const [remoteActiveSession, setRemoteActiveSession] = useState<QbankActiveSession | null>(null);

  const sessionStorageKey = useCallback(() => {
    if (!sessionIdRef.current) {
      const params = new URLSearchParams(window.location.search);
      const existingId = params.get("session");
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
    const mode = params.get("mode") || "all";
    const specialty = params.get("specialty") || "all";
    const requestedCountValue = params.get("count") || "10";
    const storageKey = sessionStorageKey();
    void loadQuestions(specialties, mode, specialty)
      .then((loaded) => {
        const state = loadQbankState();
        let filtered = loaded;
        if (mode === "wrong") filtered = loaded.filter((item) => state.wrongIds.includes(item.id));
        if (mode === "bookmarks") filtered = loaded.filter((item) => state.bookmarkIds.includes(item.id));
        if (mode === "unattempted") filtered = loaded.filter((item) => !state.progress[item.id]);
        const requestedCount = requestedCountValue === "all"
          ? filtered.length
          : Math.max(1, Math.min(100, Number(requestedCountValue) || 10));
        let snapshot: QbankSessionSnapshot | null = null;
        try {
          const stored = window.sessionStorage.getItem(storageKey);
          if (stored) snapshot = JSON.parse(stored) as QbankSessionSnapshot;
        } catch {
          snapshot = null;
        }
        const restoredQuestions = snapshot?.questionIds.map((id) => loaded.find((item) => item.id === id)).filter((item): item is QbankQuestion => Boolean(item)) ?? [];
        const canRestore = Boolean(snapshot && restoredQuestions.length === snapshot.questionIds.length && restoredQuestions.length > 0);
        const selectedQuestions = canRestore ? restoredQuestions : shuffled(filtered).slice(0, requestedCount);
        const restoredIndex = canRestore && snapshot ? Math.min(Math.max(snapshot.currentIndex, 0), selectedQuestions.length - 1) : 0;
        const restoredQuestion = selectedQuestions[restoredIndex];
        const restoredAnswer = canRestore && snapshot ? snapshot.answers.find((item) => item.questionId === restoredQuestion?.id) : undefined;
        setQuestions(selectedQuestions);
        setCurrentIndex(restoredIndex);
        setAnswers(canRestore && snapshot ? snapshot.answers.filter((item) => selectedQuestions.some((question) => question.id === item.questionId)) : []);
        setSelected(restoredAnswer?.selected ?? (canRestore && snapshot ? snapshot.selected : null));
        setSubmitted(Boolean(restoredAnswer));
        setBookmarked(Boolean(restoredQuestion && state.bookmarkIds.includes(restoredQuestion.id)));
        setWrongTracked(Boolean(restoredQuestion && state.wrongIds.includes(restoredQuestion.id)));
      })
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : "문제 데이터를 불러오지 못했습니다."))
      .finally(() => setLoading(false));
  }, [sessionStorageKey, specialties]);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    let active = true;

    const applyRemote = (value: unknown) => {
      const session = activeSessionFrom(value);
      if (!active || !session || session.updatedAt === appliedRemoteSessionVersionRef.current) return;
      remoteSessionApplyingRef.current = true;
      setRemoteActiveSession(session);
    };

    const start = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user || !active) return;
      const { data: preference, error: preferenceError } = await supabase.from("user_preferences").select("qbank_active_session").eq("user_id", user.id).maybeSingle();
      if (preferenceError) {
        console.warn("Q-bank active session sync is unavailable.", preferenceError);
      } else {
        applyRemote((preference as Record<string, unknown> | null)?.qbank_active_session);
      }
      if (!active) return;
      setSyncUserId(user.id);
      activeSessionChannelRef.current = supabase.channel(`qbank-active-session:${user.id}`)
        .on("postgres_changes", { event: "*", schema: "public", table: "user_preferences", filter: `user_id=eq.${user.id}` }, (payload) => applyRemote((payload.new as Record<string, unknown>).qbank_active_session))
        .subscribe();
    };

    void start();
    return () => {
      active = false;
      if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
      activeSessionChannelRef.current?.unsubscribe();
      activeSessionChannelRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!remoteActiveSession || remoteActiveSession.updatedAt === appliedRemoteSessionVersionRef.current) return;
    let cancelled = false;
    void loadQuestions(specialties, "all", "all")
      .then((loaded) => {
        const restoredQuestions = remoteActiveSession.questionIds.map((id) => loaded.find((item) => item.id === id)).filter((item): item is QbankQuestion => Boolean(item));
        if (cancelled || restoredQuestions.length !== remoteActiveSession.questionIds.length || restoredQuestions.length === 0) return;
        const restoredIndex = Math.min(Math.max(remoteActiveSession.currentIndex, 0), restoredQuestions.length - 1);
        const restoredQuestion = restoredQuestions[restoredIndex];
        const restoredAnswer = remoteActiveSession.answers.find((item) => item.questionId === restoredQuestion.id);
        sessionIdRef.current = remoteActiveSession.sessionId;
        const params = new URLSearchParams(window.location.search);
        params.set("session", remoteActiveSession.sessionId);
        window.history.replaceState(window.history.state, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
        window.sessionStorage.setItem(`${QBANK_SESSION_STORAGE_PREFIX}${remoteActiveSession.sessionId}`, JSON.stringify(remoteActiveSession));
        setQuestions(restoredQuestions);
        setCurrentIndex(restoredIndex);
        setAnswers(remoteActiveSession.answers.filter((item) => restoredQuestions.some((question) => question.id === item.questionId)));
        setSelected(restoredAnswer?.selected ?? remoteActiveSession.selected);
        setSubmitted(Boolean(restoredAnswer));
        const state = loadQbankState();
        setBookmarked(state.bookmarkIds.includes(restoredQuestion.id));
        setWrongTracked(state.wrongIds.includes(restoredQuestion.id));
        appliedRemoteSessionVersionRef.current = remoteActiveSession.updatedAt;
      })
      .catch((error) => console.warn("Q-bank active session could not be restored.", error))
      .finally(() => window.setTimeout(() => { remoteSessionApplyingRef.current = false; }, 0));
    return () => { cancelled = true; };
  }, [remoteActiveSession, specialties]);

  const current = questions[currentIndex];
  const correctCount = useMemo(() => answers.filter((item) => item.correct).length, [answers]);
  const specialtyResults = useMemo(() => {
    const summary = new Map<string, { correct: number; total: number }>();
    for (const item of answers) {
      const result = summary.get(item.specialty) ?? { correct: 0, total: 0 };
      result.total += 1;
      result.correct += item.correct ? 1 : 0;
      summary.set(item.specialty, result);
    }
    return [...summary.entries()].sort(([left], [right]) => left.localeCompare(right, "ko"));
  }, [answers]);

  const showQuestion = useCallback((index: number) => {
    const question = questions[index];
    if (!question) return;
    const previousAnswer = answers.find((item) => item.questionId === question.id);
    setCurrentIndex(index);
    setBookmarked(loadQbankState().bookmarkIds.includes(question.id));
    setSelected(previousAnswer?.selected ?? null);
    setSubmitted(Boolean(previousAnswer));
    setWrongTracked(loadQbankState().wrongIds.includes(question.id));
  }, [answers, questions]);

  const submit = useCallback(() => {
    if (!current || !selected || submitted) return;
    const correct = selected === current.answer;
    recordQbankAttempt(current.id, selected, correct);
    setWrongTracked(loadQbankState().wrongIds.includes(current.id));
    setAnswers((items) => [...items, { questionId: current.id, selected, correct, specialty: current.specialty }]);
    setSubmitted(true);
  }, [current, selected, submitted]);

  const next = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      const finishedAnswers = answers;
      saveQbankSession({
        id: `session-${Date.now()}`,
        startedAt: sessionStartedAt,
        completedAt: new Date().toISOString(),
        questionIds: questions.map((item) => item.id),
        correct: finishedAnswers.filter((item) => item.correct).length,
        total: questions.length,
      });
      window.sessionStorage.removeItem(sessionStorageKey());
      if (syncUserId) {
        const supabase = getSupabaseBrowserClient();
        if (supabase) void supabase.from("user_preferences").upsert({ user_id: syncUserId, qbank_active_session: null }, { onConflict: "user_id" });
      }
      setCompleted(true);
      return;
    }
    showQuestion(currentIndex + 1);
  }, [answers, currentIndex, questions, sessionStartedAt, sessionStorageKey, showQuestion, syncUserId]);

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
      const target = event.target;
      if (target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) return;
      if (!current) return;

      if (!submitted && ["1", "2", "3", "4"].includes(event.key)) {
        const answer = (["A", "B", "C", "D"] as QbankAnswer[])[Number(event.key) - 1];
        if (answer && current.options[answer]) {
          event.preventDefault();
          setSelected(answer);
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
  }, [current, currentIndex, next, previous, selected, submit, submitted]);
  useEffect(() => {
    if (loading || completed || questions.length === 0 || !sessionIdRef.current) return;
    const snapshot: QbankActiveSession = {
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
    } catch {
      // Keep the session usable when browser storage is unavailable.
    }
    if (!syncUserId || remoteSessionApplyingRef.current) return;
    if (activeSessionTimerRef.current) window.clearTimeout(activeSessionTimerRef.current);
    activeSessionTimerRef.current = window.setTimeout(() => {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) return;
      appliedRemoteSessionVersionRef.current = snapshot.updatedAt;
      void supabase.from("user_preferences").upsert({ user_id: syncUserId, qbank_active_session: snapshot }, { onConflict: "user_id" })
        .then(({ error }) => { if (error) console.warn("Q-bank active session sync failed.", error); });
    }, 500);
  }, [answers, completed, currentIndex, loading, questions, selected, sessionStorageKey, submitted, syncUserId]);
  if (loading) return <div className="surface p-8 text-center text-slate-600">문제를 불러오는 중입니다…</div>;
  if (error) return <div className="rounded-lg border border-rose-200 bg-rose-50 p-6 text-rose-900">{error}</div>;
  if (questions.length === 0) return (
    <div className="surface p-8 text-center">
      <p className="text-slate-600">조건에 맞는 문제가 없습니다.</p>
      <Link href="/review/qbank" className="secondary-action mt-4">문제은행으로 돌아가기</Link>
    </div>
  );

  if (completed) {
    const rate = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="space-y-5">
        <section className="surface p-7 text-center">
          <div className="eyebrow">Session complete</div>
          <h1 className="mt-3 text-3xl font-semibold">{correctCount} / {questions.length}</h1>
          {specialtyResults.length > 0 ? <div className="mx-auto mt-5 max-w-md rounded-lg border border-slate-200 bg-white p-3 text-left text-sm">{specialtyResults.map(([specialty, result]) => <div key={specialty} className="flex justify-between gap-4 py-1"><span>{specialty}</span><span>{result.correct}/{result.total}</span></div>)}</div> : null}
          <p className="mt-2 text-slate-600">정답률 {rate}% · 틀린 문제는 오답 노트에 자동 저장되었습니다.</p>
        </section>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/review/qbank" className="secondary-action"><ArrowLeft className="h-4 w-4" />문제은행</Link>
          <Link href={`/review/qbank/session?mode=wrong&count=${questions.length}`} className="primary-action"><RotateCcw className="h-4 w-4" />오답 다시 풀기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
        <Link href="/review/qbank" className="inline-flex items-center gap-1 hover:text-teal-700"><ArrowLeft className="h-4 w-4" />나가기</Link>
        <span>{currentIndex + 1} / {questions.length}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-teal-600 transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} /></div>

      <article className="surface p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2"><span className="pill">{current.specialty}</span><span className="pill">{current.questionType}</span></div>
          <button type="button" onClick={toggleBookmark} className="secondary-action" aria-pressed={bookmarked}>
            {bookmarked ? <BookmarkCheck className="h-4 w-4 text-amber-600" /> : <Bookmark className="h-4 w-4" />}{bookmarked ? "저장됨" : "북마크"}
          </button>
        </div>
        <p className="mt-6 whitespace-pre-line text-[15px] leading-7 text-slate-900 sm:text-base">{current.question}</p>

        <div className="mt-7 grid gap-3">
          {(Object.keys(current.options) as QbankAnswer[]).map((key) => {
            const isCorrect = submitted && key === current.answer;
            const isWrong = submitted && key === selected && key !== current.answer;
            const isSelected = key === selected;
            return (
              <button
                key={key}
                type="button"
                disabled={submitted}
                onClick={() => setSelected(key)}
                className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3.5 text-left transition ${
                  isCorrect ? "border-teal-500 bg-teal-50 text-teal-950" : isWrong ? "border-rose-400 bg-rose-50 text-rose-950" : isSelected ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white hover:border-slate-400"
                }`}
              >
                <span className="font-semibold">{key}.</span><span>{current.options[key]}</span>
              </button>
            );
          })}
        </div>

        {submitted ? (
          <div className={`mt-6 rounded-lg border p-4 ${selected === current.answer ? "border-teal-200 bg-teal-50" : "border-rose-200 bg-rose-50"}`}>
            {wrongTracked ? <button type="button" onClick={dismissWrong} className="secondary-action float-right">오답 노트에서 제거</button> : null}
            <div className="flex items-center gap-2 font-semibold">{selected === current.answer ? <CheckCircle2 className="h-5 w-5 text-teal-700" /> : <XCircle className="h-5 w-5 text-rose-700" />}{selected === current.answer ? "정답입니다." : `정답은 ${current.answer}입니다.`}</div>
            {current.explanation ? <div className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-700">{current.explanation}</div> : <p className="mt-2 text-sm text-slate-600">검증된 해설은 아직 준비되지 않았습니다.</p>}
            {current.relatedDiseaseSlugs.length > 0 ? <div className="mt-3 flex flex-wrap gap-2">{current.relatedDiseaseSlugs.map((slug, index) => <Link key={slug} href={`/disease/${slug}`} className="pill hover:border-teal-500">{current.relatedDiseaseTerms[index] || slug}</Link>)}</div> : null}
          </div>
        ) : null}

        <div className="mt-6 flex justify-end">
          {submitted ? <button type="button" onClick={next} className="primary-action">{currentIndex + 1 === questions.length ? "결과 보기" : "다음 문제"}<ChevronRight className="h-4 w-4" /></button> : <button type="button" onClick={submit} disabled={!selected} className="primary-action disabled:cursor-not-allowed disabled:opacity-40">정답 제출</button>}
        </div>
      </article>
    </div>
  );
}
