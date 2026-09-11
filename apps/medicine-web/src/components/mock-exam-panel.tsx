"use client";

import { correctAnswers, selectedAnswers, selectionHint, toggleSelection } from "@/lib/qbank-grading";
import { SessionRetryActions } from "./session-retry-actions";
import { sessionWrongIds } from "@/lib/qbank-session-results";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { PrivateQuestionImage } from "@/components/private-question-image";
import { gradeMockExam, mockSubject, type MockExamState } from "@/lib/mock-exam";
import { recordMockExam } from "@/lib/qbank-store";
import { reflowOcrText } from "@/lib/ocr-paragraphs";
import type { QbankAnswer, QbankQuestion } from "@/lib/types";

export function MockExamPanel({ questions, exam, sessionId, currentIndex, onChange, onMove }: {
  questions: QbankQuestion[]; exam: MockExamState; sessionId: string; currentIndex: number;
  onChange: (state: MockExamState) => void; onMove: (index: number) => void;
}) {
  const [now, setNow] = useState(() => Date.now());
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState("");
  const [review, setReview] = useState(false);
  const submitting = useRef(false);
  const current = questions[currentIndex];
  const finished = Boolean(exam.finishedAt);
  const result = exam.results?.find(r => r.questionId === current.id);
  const answered = questions.filter(q => exam.drafts[q.id]).length;
  const marked = questions.filter(q => exam.flaggedIds.includes(q.id)).length;
  const elapsed = Math.max(0, Math.floor(((exam.finishedAt ? Date.parse(exam.finishedAt) : now) - Date.parse(exam.startedAt)) / 1000));
  const time = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}`;
  const subjects = [...new Set(questions.map(q => mockSubject(q.id)))];
  const correct = exam.results?.filter(r => r.correct === true).length ?? 0;
  const graded = exam.results?.filter(r => r.correct !== null).length ?? 0;

  useEffect(() => {
    if (finished) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [finished]);

  function choose(answer: QbankAnswer) {
    if (!finished) {
      const next = toggleSelection(current, exam.drafts[current.id], answer);
      const drafts = { ...exam.drafts };
      if (next) drafts[current.id] = next; else delete drafts[current.id];
      onChange({ ...exam, drafts });
    }
  }
  useEffect(() => {
    function keyDown(event: KeyboardEvent) {
      if (confirm || event.altKey || event.ctrlKey || event.metaKey || (event.target instanceof HTMLElement && (event.target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(event.target.tagName)))) return;
      if (!finished && /^[1-5]$/.test(event.key)) {
        const answer = "ABCDE"[Number(event.key) - 1] as QbankAnswer;
        if (current.options[answer] !== undefined) { event.preventDefault(); const next = toggleSelection(current, exam.drafts[current.id], answer); const drafts = { ...exam.drafts }; if (next) drafts[current.id] = next; else delete drafts[current.id]; onChange({ ...exam, drafts }); }
      } else if (event.key === "ArrowRight" && currentIndex < questions.length - 1) { event.preventDefault(); onMove(currentIndex + 1); }
      else if (event.key === "ArrowLeft" && currentIndex > 0) { event.preventDefault(); onMove(currentIndex - 1); }
    }
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, [confirm, current, currentIndex, exam, finished, onChange, onMove, questions.length]);

  function finish() {
    if (submitting.current || finished) return;
    submitting.current = true;
    try {
      const results = gradeMockExam(questions, exam.drafts);
      const finishedAt = new Date().toISOString();
      recordMockExam({ id: `mock-${sessionId}`, startedAt: exam.startedAt, completedAt: finishedAt, questionIds: questions.map(q => q.id), correct: results.filter(r => r.correct === true).length, total: results.filter(r => r.correct !== null).length }, results);
      onChange({ ...exam, finishedAt, results }); setConfirm(false);
    } catch { submitting.current = false; setError("결과를 저장하지 못했습니다. 저장 공간을 확인한 뒤 다시 제출해 주세요."); }
  }

  const sheet = <section id="mock-answer-sheet" className="surface min-w-0 p-4 sm:p-5" aria-label="모의고사 답안표">
    <div className="flex items-center justify-between gap-2"><h2 className="font-semibold">답안표</h2><span className="text-xs text-slate-500">{answered}/{questions.length} 응답 · 보류 {marked}</span></div>
    <p className="mt-2 text-xs leading-5 text-slate-500">{finished ? "문항을 누르면 해설을 확인합니다. 정답은 초록색, 오답은 빨간색입니다." : "번호를 눌러 이동 · 파랑: 응답 · 주황 테두리: 보류"}</p>
    {subjects.map(subject => <div key={subject} className="mt-4"><h3 className="mb-2 text-xs font-semibold text-slate-600">{subject}</h3><div className="grid grid-cols-5 gap-1.5 sm:grid-cols-8 xl:grid-cols-5">{questions.map((q, index) => {
      if (mockSubject(q.id) !== subject) return null;
      const r = exam.results?.find(item => item.questionId === q.id);
      const flagged = exam.flaggedIds.includes(q.id);
      const chosen = exam.drafts[q.id];
      return <button key={q.id} type="button" aria-current={index === currentIndex ? "step" : undefined} aria-label={`${index + 1}번 ${subject}, ${chosen ? `${chosen} 선택` : "미응답"}${flagged ? ", 보류" : ""}${finished ? r?.correct === null ? ", 채점 제외" : r?.correct ? ", 정답" : ", 오답" : ""}`} onClick={() => { onMove(index); if (finished) setReview(true); window.requestAnimationFrame(() => document.getElementById("mock-question")?.scrollIntoView({ block: "start" })); }} className={`min-h-11 rounded-md border px-1 py-1 text-xs tabular-nums ${flagged ? "border-amber-500" : "border-slate-200"} ${finished ? r?.correct === null ? "bg-slate-100 text-slate-500" : r?.correct ? "bg-teal-100 text-teal-900" : "bg-rose-100 text-rose-900" : chosen ? "bg-blue-50 text-blue-900" : "bg-white text-slate-500"} ${index === currentIndex ? "ring-2 ring-teal-600 ring-offset-1" : ""}`}><span className="block font-semibold">{index + 1}{flagged ? " ·" : ""}</span><span className="block">{selectedAnswers(chosen).join(", ") || "—"}</span></button>;
    })}</div></div>)}
  </section>;

  return <div className="space-y-5">
    <header className="surface flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5"><div><p className="text-xs font-medium text-teal-700">실전 모의고사{finished ? " · 제출 완료" : ""}</p><h1 className="mt-1 text-xl font-semibold">{exam.title}</h1><p className="mt-1 text-xs text-slate-500">{finished ? "총 경과시간" : "시작 후 경과시간"} {time} · 중단 시간 포함</p></div><div className="flex flex-wrap gap-2"><a className="secondary-action" href="#mock-answer-sheet">답안표</a><Link className="secondary-action" href="/review/qbank">{finished ? "문제은행" : "나중에 이어풀기"}</Link>{!finished && <button type="button" className="primary-action" onClick={() => setConfirm(true)}>시험 종료</button>}{finished && <Link className="primary-action" href="/review/qbank/stats">학습 통계</Link>}</div></header>
    {error && <p role="alert" className="text-sm text-rose-700">{error}</p>}
    {confirm && !finished && <section role="region" aria-label="제출 확인" className="rounded-xl border border-amber-300 bg-amber-50 p-5"><h2 className="font-semibold">답안을 제출하고 채점할까요?</h2><p className="mt-2 text-sm">미응답 {questions.length - answered}문항 · 보류 {marked}문항입니다. 전원 정답 문항을 제외한 채점 가능한 미응답은 오답으로 처리되며 제출 후 답을 바꿀 수 없습니다.</p><div className="mt-4 flex flex-wrap gap-2"><button type="button" className="primary-action" onClick={finish}>제출하고 채점</button><button type="button" className="secondary-action" onClick={() => setConfirm(false)}>계속 풀기</button></div></section>}
    {finished && <section className="surface p-6"><p className="text-sm text-slate-500">모의고사 결과</p><p className="mt-2 text-3xl font-bold">{correct} / {graded} <span className="text-lg font-medium text-teal-700">{graded ? Math.round(correct / graded * 100) : 0}%</span></p><p className="mt-2 text-xs text-slate-500">미응답 {questions.length - answered}문항 · 채점 제외 {questions.length - graded}문항</p><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">{subjects.map(subject => { const rs = exam.results?.filter(r => r.specialty === subject && r.correct !== null) ?? []; return <div key={subject} className="rounded-lg bg-slate-50 p-3 text-sm"><span className="block text-slate-500">{subject}</span><span className="font-semibold">{rs.filter(r => r.correct).length}/{rs.length}</span></div>; })}</div><button type="button" className="secondary-action mt-4" onClick={() => setReview(!review)}>{review ? "해설 접기" : "문제·해설 확인"}</button><div className="mt-3"><SessionRetryActions ids={sessionWrongIds(exam.results ?? [])} /></div></section>}
    <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      {(!finished || review) && <article id="mock-question" className="surface min-w-0 scroll-mt-20 p-5 sm:p-7"><div className="flex flex-wrap items-center justify-between gap-3"><div><span className="pill">{mockSubject(current.id)}</span><span className="ml-2 text-sm font-semibold">{currentIndex + 1} / {questions.length}</span></div>{!finished && <button type="button" aria-pressed={exam.flaggedIds.includes(current.id)} className="secondary-action" onClick={() => onChange({ ...exam, flaggedIds: exam.flaggedIds.includes(current.id) ? exam.flaggedIds.filter(id => id !== current.id) : [...exam.flaggedIds, current.id] })}><Flag className="h-4 w-4" />{exam.flaggedIds.includes(current.id) ? "보류 해제" : "보류"}</button>}</div>
        <p className="mt-3 break-all text-xs text-slate-400">{current.id}</p><p className="mt-5 whitespace-pre-line text-[15px] leading-7">{reflowOcrText(current.question)}</p>
        {current.figures?.map((figure, i) => <figure key={figure.path} className="mt-4"><PrivateQuestionImage path={figure.path} alt={figure.alt} /><figcaption className="text-xs text-slate-500">그림 {i + 1}</figcaption></figure>)}
        {selectionHint(current) && <p className="mt-4 text-sm font-medium text-teal-700">{selectionHint(current)}</p>}
        <div className="mt-6 grid gap-3">{Object.entries(current.options).map(([key, text]) => <button type="button" key={key} disabled={finished} aria-pressed={selectedAnswers(exam.drafts[current.id]).includes(key as QbankAnswer)} onClick={() => choose(key as QbankAnswer)} className={`flex gap-3 rounded-lg border p-4 text-left text-sm leading-6 ${finished && correctAnswers(current).includes(key as QbankAnswer) ? "border-teal-500 bg-teal-50" : selectedAnswers(exam.drafts[current.id]).includes(key as QbankAnswer) ? finished && result?.correct === false ? "border-rose-400 bg-rose-50" : "border-blue-500 bg-blue-50" : "border-slate-200"}`}><span className="font-semibold">{key}.</span><span>{reflowOcrText(text ?? "")}</span></button>)}</div>
        {!finished && exam.drafts[current.id] && <button type="button" className="mt-3 text-xs text-slate-500 underline" onClick={() => { const drafts = { ...exam.drafts }; delete drafts[current.id]; onChange({ ...exam, drafts }); }}>답 선택 지우기</button>}
        {finished && <section className="mt-6 rounded-lg bg-slate-50 p-4"><h2 className="font-semibold">{result?.correct === null ? "채점 제외" : current.gradingMode === "all-credit" ? "전원 정답 처리 · 조건/보기 불완전" : result?.correct ? "정답" : `오답 · 정답 ${(result?.correctAnswers ?? correctAnswers(current)).join(", ")}`}</h2><p className="mt-3 whitespace-pre-line text-sm leading-6">{reflowOcrText(current.explanation)}</p>{current.evidenceReferences?.filter(ref => ref.url.startsWith("https://")).map(ref => <a key={ref.url} className="mt-3 block text-xs text-teal-700 underline" target="_blank" rel="noopener noreferrer" href={ref.url}>{ref.title}</a>)}{!!current.relatedTheoryQuestionIds?.length && <Link className="secondary-action mt-3" href={`/review/qbank/session?mode=theory-linked&practiceId=${encodeURIComponent(current.id)}&count=3`}>관련 이론문제 풀기</Link>}</section>}
        <div className="mt-6 flex justify-between gap-2"><button type="button" className="secondary-action disabled:opacity-40" disabled={currentIndex === 0} onClick={() => onMove(currentIndex - 1)}><ChevronLeft className="h-4 w-4" />이전</button>{currentIndex < questions.length - 1 ? <button type="button" className="primary-action" onClick={() => onMove(currentIndex + 1)}>다음<ChevronRight className="h-4 w-4" /></button> : !finished ? <button type="button" className="primary-action" onClick={() => setConfirm(true)}>답안 제출</button> : null}</div>
      </article>}
      <div className={finished && !review ? "xl:col-span-2" : "min-w-0 xl:sticky xl:top-20"}>{sheet}</div>
    </div>
  </div>;
}
