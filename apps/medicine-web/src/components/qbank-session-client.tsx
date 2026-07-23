"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Bookmark, BookmarkCheck, CheckCircle2, ChevronRight, RotateCcw, XCircle } from "lucide-react";
import {
  loadQbankState,
  removeQbankWrong,
  recordQbankAttempt,
  saveQbankSession,
  toggleQbankBookmark,
} from "@/lib/qbank-store";
import type { QbankAnswer, QbankQuestion, QbankQuestionIndex, QbankSpecialtySummary } from "@/lib/types";

type SessionAnswer = { questionId: string; selected: QbankAnswer; correct: boolean; specialty: string };

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
    slugs = [specialty];
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode") || "all";
    const specialty = params.get("specialty") || "all";
    const requestedCountValue = params.get("count") || "10";
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
        const selectedQuestions = shuffled(filtered).slice(0, requestedCount);
        setQuestions(selectedQuestions);
        setBookmarked(Boolean(selectedQuestions[0] && state.bookmarkIds.includes(selectedQuestions[0].id)));
      })
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : "문제 데이터를 불러오지 못했습니다."))
      .finally(() => setLoading(false));
  }, [specialties]);

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

  function submit() {
    if (!current || !selected || submitted) return;
    const correct = selected === current.answer;
    recordQbankAttempt(current.id, selected, correct);
    setWrongTracked(loadQbankState().wrongIds.includes(current.id));
    setAnswers((items) => [...items, { questionId: current.id, selected, correct, specialty: current.specialty }]);
    setSubmitted(true);
  }

  function next() {
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
      setCompleted(true);
      return;
    }
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setBookmarked(loadQbankState().bookmarkIds.includes(questions[nextIndex].id));
    setSelected(null);
    setSubmitted(false);
    setWrongTracked(loadQbankState().wrongIds.includes(questions[nextIndex].id));
  }

  function toggleBookmark() {
    if (!current) return;
    setBookmarked(toggleQbankBookmark(current.id));
  }

  function dismissWrong() {
    if (!current) return;
    removeQbankWrong(current.id);
    setWrongTracked(false);
  }

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
            {current.relatedDiseaseSlugs.length > 0 ? <div className="mt-3 flex flex-wrap gap-2">{current.relatedDiseaseSlugs.map((slug, index) => <Link key={slug} href={`/disease/${slug}`} className="pill hover:border-teal-500">관련 질환 {index + 1}</Link>)}</div> : null}
          </div>
        ) : null}

        <div className="mt-6 flex justify-end">
          {submitted ? <button type="button" onClick={next} className="primary-action">{currentIndex + 1 === questions.length ? "결과 보기" : "다음 문제"}<ChevronRight className="h-4 w-4" /></button> : <button type="button" onClick={submit} disabled={!selected} className="primary-action disabled:cursor-not-allowed disabled:opacity-40">정답 제출</button>}
        </div>
      </article>
    </div>
  );
}
