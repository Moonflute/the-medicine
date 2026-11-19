"use client";

import { useEffect, useRef, useState } from "react";
import { MOCK_SUBJECTS, mockSubject, type MockExamSummary } from "@/lib/mock-exam";
import type { QbankSessionResult } from "@/lib/qbank-store";
import { selectedAnswers } from "@/lib/qbank-grading";
import { loadPracticeQuestions } from "@/lib/practice-bank";
import { reflowOcrText } from "@/lib/ocr-paragraphs";
import { QbankExplanation } from "@/components/qbank-explanation";
import { PrivateQuestionImage } from "@/components/private-question-image";
import { QbankReviewCardButton } from "@/components/qbank-review-card-button";
import type { StatsSetLauncher } from "@/components/qbank-stats-set-dialog";
import type { QbankQuestion } from "@/lib/types";

const accuracy = (correct: number, total: number) => total ? `${Math.round(correct / total * 100)}%` : "—";
const date = (value: string) => new Date(value).toLocaleDateString("ko-KR", { year: "2-digit", month: "numeric", day: "numeric" });
const colors = ["#0d9488", "#6366f1", "#d97706", "#e11d48"];
function title(session: QbankSessionResult) {
  if (session.mockExam) return session.mockExam.title.replace(/^[PR]\s+(?=\d{4})/, "");
  const years = [...new Set(session.questionIds.map(id => id.match(/(?:19|20)\d{2}/)?.[0]).filter(Boolean))];
  return years.length === 1 ? `${years[0]}년 모의고사` : "이전 모의고사";
}
function SubjectScores({ summary }: { summary?: MockExamSummary }) {
  return <dl className="qbank-history-score">{MOCK_SUBJECTS.map(subject => {
    const score = summary?.subjects[subject];
    return <div key={subject}><dt>{subject}</dt><dd>{score ? `${score.correct}/${score.total} · ${accuracy(score.correct, score.total)}` : "자료 없음"}</dd></div>;
  })}</dl>;
}
function Trend({ sessions, subjects = false }: { sessions: QbankSessionResult[]; subjects?: boolean }) {
  const series = subjects ? MOCK_SUBJECTS : ["총점"];
  const x = (index: number) => 36 + (sessions.length === 1 ? .5 : index / (sessions.length - 1)) * 480;
  const y = (value: number) => 150 - value * 1.2;
  return <div><h3 className="text-sm font-semibold">{subjects ? "과목별 정답률 추이" : "회차별 총점 추이 (정답률)"}</h3>
    <svg viewBox="0 0 550 185" role="img" aria-label={subjects ? "과목별 정답률 추이. 정확한 점수는 기록 목록에서 확인하세요." : "모의고사 총점 정답률 추이. 정확한 점수는 기록 목록에서 확인하세요."}>
      {[0, 50, 100].map(value => <g key={value}><line x1={36} x2={516} y1={y(value)} y2={y(value)} stroke="var(--line)" /><text x={30} y={y(value) + 4} textAnchor="end" fontSize={10} fill="var(--muted)">{value}%</text></g>)}
      {series.map((subject, seriesIndex) => {
        const points = sessions.map((session, index) => {
          const score = subjects ? session.mockExam?.subjects[subject] : { correct: session.correct, total: session.total };
          return score?.total ? { x: x(index), y: y(score.correct / score.total * 100), session, score } : null;
        });
        // Missing historical subject scores create gaps instead of fabricated zero scores.
        return <g key={subject}>{points.map((point, index) => point && <g key={point.session.id}>{index > 0 && points[index - 1] && <line x1={points[index - 1]!.x} y1={points[index - 1]!.y} x2={point.x} y2={point.y} stroke={colors[seriesIndex]} strokeWidth={2} />}<circle cx={point.x} cy={point.y} r={3.5} fill={colors[seriesIndex]}><title>{date(point.session.completedAt)} · {title(point.session)} · {subject} {point.score.correct}/{point.score.total} ({accuracy(point.score.correct, point.score.total)})</title></circle></g>)}</g>;
      })}
      {sessions.filter((_, index) => index === 0 || index === sessions.length - 1).map(session => <text key={session.id} x={x(sessions.indexOf(session))} y={176} textAnchor="middle" fontSize={10} fill="var(--muted)">{date(session.completedAt)}</text>)}
    </svg>{subjects && <div className="flex flex-wrap gap-3 text-xs">{MOCK_SUBJECTS.map((subject, index) => <span key={subject} style={{ color: colors[index] }}>● {subject}</span>)}</div>}
  </div>;
}

function ResultQuestion({ id, summary }: { id: string; summary: MockExamSummary }) {
  const [data, setData] = useState<{ id: string; question?: QbankQuestion; error?: string }>();
  useEffect(() => {
    let active = true;
    void loadPracticeQuestions([id]).then(questions => {
      if (active) setData({ id, question: questions.find(question => question.id === id), error: questions.length ? undefined : "문제 원문을 찾을 수 없습니다." });
    }).catch(() => { if (active) setData({ id, error: "문제 원문을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요." }); });
    return () => { active = false; };
  }, [id]);
  const result = summary.results.find(item => item.questionId === id)!;
  const question = data?.id === id ? data.question : undefined;
  const savedCorrect = result.correctAnswers ?? (result.correctAnswer ? [result.correctAnswer] : []);
  return <div className="mt-4 border-t border-slate-200 pt-4">
    <p className="text-sm font-semibold">{result.specialty} · {result.correct === null ? "채점 제외" : result.correct ? "정답" : "오답"} · 내 답 {selectedAnswers(result.selected).join(", ") || "미응답"} · 당시 정답 {savedCorrect.join(", ") || "—"}</p>
    {question ? <>
      <p className="mt-3 whitespace-pre-line text-sm leading-7">{reflowOcrText(question.question)}</p>
      {question.figures?.map(figure => <PrivateQuestionImage key={figure.path} path={figure.path} alt={figure.alt} />)}
      <ul className="my-3 space-y-2 text-sm">{Object.entries(question.options).map(([key, text]) => <li key={key}>{key}. {text}</li>)}</ul>
      <QbankExplanation text={question.explanation} question={question} reflow />
      <p className="my-3 text-xs text-slate-500">답안·점수는 제출 당시 기록이며, 문제·해설은 현재 저장된 원문입니다.</p>
      <QbankReviewCardButton key={id} question={question} />
    </> : <p className="mt-3 text-sm" role="status">{data?.id === id && data.error ? data.error : "문제 원문을 불러오는 중…"}</p>}
  </div>;
}

function ResultDialog({ session, wrongOnly, onClose, onStart }: { session: QbankSessionResult; wrongOnly: boolean; onClose: () => void; onStart: StatsSetLauncher }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const summary = session.mockExam;
  const results = summary?.results.filter(result => !wrongOnly || result.correct === false) ?? [];
  const [selected, setSelected] = useState(results[0]?.questionId);
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog ref={dialog} className="qbank-compact-dialog qbank-mock-detail" aria-label="모의고사 결과" onCancel={event => { event.preventDefault(); onClose(); }}><div className="review-card-panel">
    <div className="flex items-center justify-between gap-3"><h2 className="font-semibold">{title(session)} · {wrongOnly ? "오답 보기" : "결과 보기"}</h2><button type="button" className="secondary-action" onClick={onClose}>닫기</button></div>
    <p className="mt-3 text-sm">{date(session.completedAt)} · {session.correct}/{session.total} · {accuracy(session.correct, session.total)}</p>
    <SubjectScores summary={summary} />
    {summary ? <><p className="mb-3 text-xs text-slate-500">전체 {summary.total}문항 · 미응답 {summary.unansweredQuestionIds.length} · 채점 제외 {summary.omittedQuestionIds.length}</p>
      <div className="qbank-result-buttons">{results.map(result => <button type="button" key={result.questionId} aria-label={`${summary.results.indexOf(result) + 1}번 ${result.correct === null ? "채점 제외" : result.correct ? "정답" : "오답"}`} data-result={result.correct === null ? "omitted" : result.correct ? "correct" : "wrong"} aria-pressed={selected === result.questionId} onClick={() => setSelected(result.questionId)}>{summary.results.indexOf(result) + 1}</button>)}</div>
      {selected && <ResultQuestion id={selected} summary={summary} />}
      <div className="qbank-history-actions mt-4"><button type="button" disabled={!summary.wrongQuestionIds.length} onClick={() => { onClose(); onStart({ ids: summary.wrongQuestionIds, title: `${title(session)} 오답 다시 풀기`, kind: "snapshot" }); }}>당시 오답 {summary.wrongQuestionIds.length}문항 다시 풀기</button></div>
    </> : <p className="py-4 text-sm text-slate-500">이전 기록에는 총점만 저장되어 있습니다. 과목별 점수·답안·소요시간은 자료 없음으로 표시합니다.</p>}
  </div></dialog>;
}

export function QbankMockHistory({ sessions, practiceIds, department, onStart }: { sessions: QbankSessionResult[]; practiceIds: ReadonlySet<string>; department: string; onStart: StatsSetLauncher }) {
  const [page, setPage] = useState(0);
  const [detail, setDetail] = useState<{ session: QbankSessionResult; wrongOnly: boolean }>();
  const history = sessions.filter(session => (session.mockExam || session.id.startsWith("mock-"))
    && session.questionIds.length > 0 && session.questionIds.every(id => practiceIds.has(id))
    && (department === "all" || session.questionIds.some(id => mockSubject(id) === department)))
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  const pages = Math.max(1, Math.ceil(history.length / 8));
  const currentPage = Math.min(page, pages - 1);
  const trends = history.slice(0, 20).reverse();
  return <section className="surface min-w-0 p-4 sm:p-5">
    <h2 className="font-semibold">모의고사 기록 <span className="text-xs font-normal text-slate-500">{history.length}회 · 제출 당시 기준</span></h2>
    {detail && history.some(session => session.id === detail.session.id) && <ResultDialog key={`${detail.session.id}:${detail.wrongOnly}`} {...detail} onClose={() => setDetail(undefined)} onStart={onStart} />}
    {!history.length ? <p className="mt-3 text-sm text-slate-500">모의고사를 제출하면 기록이 표시됩니다. 즉시 해설 학습은 포함하지 않습니다.</p> : <>
      <details className="mt-3"><summary className="cursor-pointer text-sm font-medium">점수 추이 · 최근 {trends.length}회</summary><p className="mt-2 text-xs text-slate-500">회차마다 난이도와 문항 수가 다릅니다. 각 점은 응시 순서이며 합격 예측이나 난이도 보정은 하지 않습니다.</p><div className="qbank-mock-trends"><Trend sessions={trends} /><Trend sessions={trends} subjects /></div></details>
      <div className="qbank-history-list">{history.slice(currentPage * 8, currentPage * 8 + 8).map(session => {
        const summary = session.mockExam;
        return <article key={session.id} className="qbank-history-record"><div className="flex flex-wrap items-baseline justify-between gap-2"><p className="text-sm font-semibold">{date(session.completedAt)} · {title(session)}</p><p className="text-sm font-semibold tabular-nums">{session.correct}/{session.total} · {accuracy(session.correct, session.total)}</p></div>
          <SubjectScores summary={summary} />
          <p className="mb-2 text-xs text-slate-500">소요시간 {summary?.durationSeconds === undefined ? "자료 없음" : `${Math.floor(summary.durationSeconds / 60)}분 ${summary.durationSeconds % 60}초`} · 미응답 {summary ? summary.unansweredQuestionIds.length : "자료 없음"} · 채점 제외 {summary ? summary.omittedQuestionIds.length : "자료 없음"}</p>
          <div className="qbank-history-actions"><button type="button" onClick={() => setDetail({ session, wrongOnly: false })}>결과 보기</button><button type="button" disabled={!summary?.wrongQuestionIds.length} onClick={() => setDetail({ session, wrongOnly: true })}>오답 보기</button><button type="button" disabled={!summary?.wrongQuestionIds.length} onClick={() => summary && onStart({ ids: summary.wrongQuestionIds, title: `${title(session)} 오답 다시 풀기`, kind: "snapshot" })}>오답 다시 풀기{summary ? ` ${summary.wrongQuestionIds.length}` : ""}</button></div>
        </article>;
      })}</div>
      {pages > 1 && <div className="mt-3 flex items-center justify-center gap-4 text-sm"><button type="button" className="secondary-action" disabled={currentPage === 0} onClick={() => setPage(currentPage - 1)}>이전</button><span>{currentPage + 1}/{pages}</span><button type="button" className="secondary-action" disabled={currentPage + 1 === pages} onClick={() => setPage(currentPage + 1)}>다음</button></div>}
    </>}
  </section>;
}
