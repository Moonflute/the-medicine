"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from "react";
import { BarChart3, Check, ChevronLeft, ClipboardList, Eraser, Flag, LogOut, MessageCircle, Send, X } from "lucide-react";
import { ChatComposerContent } from "@/components/chat-room";
import { DocumentToolbar } from "@/components/document-toolbar";
import { SkinDocumentNotice } from "@/components/skin-document";
import { mockSubject, type MockExamState } from "@/lib/mock-exam";
import { selectedAnswers } from "@/lib/qbank-grading";
import { reflowOcrText } from "@/lib/ocr-paragraphs";
import type { QbankQuestion } from "@/lib/types";

type Filter = "all" | "unanswered" | "flagged" | "wrong";

function ChatExamDialog({ dialogRef, title, children, fullScreen = false, onClose }: {
  dialogRef: RefObject<HTMLDialogElement | null>; title: string; children: ReactNode;
  fullScreen?: boolean; onClose?: () => void;
}) {
  const titleId = useId();
  return <dialog ref={dialogRef} className={`chat-qbank-dialog chat-exam-dialog${fullScreen ? " chat-qbank-dialog--picker" : ""}`} aria-labelledby={titleId}
    onClose={() => {
      onClose?.();
      document.querySelector<HTMLButtonElement>(".chat-plus-button")?.focus();
    }}
    onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }}>
    <div className="chat-qbank-dialog-content">
      <header className="chat-qbank-dialog-header">
        <button type="button" className="skin-icon-button" aria-label={`${title} 닫기`} autoFocus onClick={() => dialogRef.current?.close()}>{fullScreen ? <ChevronLeft size={21} /> : <X size={20} />}</button>
        <h2 id={titleId}>{title}</h2>
      </header>
      {children}
    </div>
  </dialog>;
}

/** Exam actions use the existing composer; only the presentation moves. */
export function ChatMockExamTools({ questions, exam, currentIndex, answered, marked, time, confirm, error, onMove, onToggleFlag, onClearAnswer, onRequestSubmit, onCancelSubmit, onFinish }: {
  questions: QbankQuestion[]; exam: MockExamState; currentIndex: number;
  answered: number; marked: number; time: string; confirm: boolean; error: string;
  onMove: (index: number) => void; onToggleFlag: () => void; onClearAnswer: () => void;
  onRequestSubmit: () => void; onCancelSubmit: () => void; onFinish: () => void;
}) {
  const sheet = useRef<HTMLDialogElement>(null);
  const submission = useRef<HTMLDialogElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const current = questions[currentIndex];
  const subject = mockSubject(current.id);
  const finished = Boolean(exam.finishedAt);
  const flagged = new Set(exam.flaggedIds);
  const results = new Map(exam.results?.map(result => [result.questionId, result]));
  const rows = questions.map((question, index) => ({
    question, index, subject: mockSubject(question.id),
    answers: selectedAnswers(exam.drafts[question.id]),
    flagged: flagged.has(question.id), result: results.get(question.id),
  }));
  const visible = rows.filter(row => filter === "unanswered" ? !row.answers.length : filter === "flagged" ? row.flagged : filter === "wrong" ? row.result?.correct === false : true);
  const subjects = [...new Set(visible.map(row => row.subject))];
  const filters: Array<{ id: Filter; label: string; count: number }> = [
    { id: "all", label: "전체", count: questions.length },
    { id: "unanswered", label: "미응답", count: questions.length - answered },
    { id: "flagged", label: "보류", count: marked },
    ...(finished ? [{ id: "wrong" as const, label: "오답", count: rows.filter(row => row.result?.correct === false).length }] : []),
  ];

  useEffect(() => {
    const dialog = submission.current;
    if (confirm && !finished && dialog && !dialog.open) dialog.showModal();
    else if ((!confirm || finished) && dialog?.open) dialog.close();
  }, [confirm, finished]);

  function openSheet() {
    sheet.current?.showModal();
    list.current?.querySelector<HTMLButtonElement>('[aria-current="step"]')?.scrollIntoView({ block: "center" });
  }

  return <>
    <h1 className="sr-only">{exam.title}</h1>
    <DocumentToolbar title={subject}>
      <button type="button" aria-label="답안표" aria-haspopup="dialog" onClick={openSheet}><ClipboardList size={22} /></button>
      {!finished && <button type="button" aria-label={flagged.has(current.id) ? "보류 해제" : "보류"} aria-pressed={flagged.has(current.id)} onClick={onToggleFlag}><Flag size={22} /></button>}
      {!finished && selectedAnswers(exam.drafts[current.id]).length > 0 && <button type="button" aria-label="답 선택 지우기" onClick={onClearAnswer}><Eraser size={22} /></button>}
      <Link href="/review/qbank" aria-label={finished ? "문제은행" : "나중에 이어풀기"}>{finished ? <MessageCircle size={22} /> : <LogOut size={22} />}</Link>
      {finished ? <Link href="/review/qbank/stats" aria-label="학습 통계"><BarChart3 size={22} /></Link> : <button type="button" aria-label="시험 종료" aria-haspopup="dialog" onClick={onRequestSubmit}><Send size={22} /></button>}
    </DocumentToolbar>
    <SkinDocumentNotice title={`${exam.title} · ${finished ? "제출 완료" : `${answered}/${questions.length} 응답`}`}>
      <div className="chat-exam-notice-info">
        <dl><div><dt>응답</dt><dd>{answered}/{questions.length}</dd></div><div><dt>보류</dt><dd>{marked}</dd></div><div><dt>{finished ? "총 경과" : "경과"}</dt><dd>{time}</dd></div></dl>
        <p>중단한 시간도 경과시간에 포함돼요.</p>
        <div><button type="button" onClick={openSheet}>답안표 보기</button><span>{currentIndex + 1}번 · {subject}</span></div>
      </div>
    </SkinDocumentNotice>

    <ChatExamDialog dialogRef={sheet} title="답안표" fullScreen>
      <p className="chat-exam-sheet-summary">{exam.title}<span>{answered}/{questions.length} 응답 · 보류 {marked}</span></p>
      <div className="chat-exam-sheet-filters" role="group" aria-label="답안표 필터">
        {filters.map(item => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => { setFilter(item.id); list.current?.scrollTo({ top: 0 }); }}>{item.label}<small>{item.count}</small></button>)}
      </div>
      <div ref={list} className="chat-exam-answer-list">
        {subjects.map(group => <section key={group} aria-label={group}>
          <h3>{group}</h3>
          {visible.filter(row => row.subject === group).map(row => {
            const status = finished ? row.result?.correct === null ? "채점 제외" : row.result?.correct ? "정답" : "오답" : row.answers.length ? "응답" : "미응답";
            return <button key={row.question.id} type="button" className="chat-exam-answer-row" aria-current={row.index === currentIndex ? "step" : undefined}
              aria-label={`${row.index + 1}번 ${group}, ${row.answers.length ? `${row.answers.join(", ")} 선택` : "미응답"}${row.flagged ? ", 보류" : ""}${finished ? `, ${status}` : ""}`}
              data-status={status} onClick={() => { sheet.current?.close(); onMove(row.index); }}>
              <span className="chat-exam-number" aria-hidden="true">{row.index + 1}</span>
              <span className="chat-exam-answer-copy"><strong>{reflowOcrText(row.question.question).replace(/\s+/g, " ").trim()}</strong><span>{status}{row.flagged ? " · 보류" : ""}{row.index === currentIndex ? " · 현재 문제" : ""}</span></span>
              {row.flagged && <Flag size={14} className="chat-exam-flag" aria-hidden="true" />}
              <span className="chat-exam-answer-label" aria-hidden="true">{row.answers.join(", ") || "—"}</span>
            </button>;
          })}
        </section>)}
        {!visible.length && <p className="chat-exam-list-empty">해당하는 문항이 없어요.</p>}
      </div>
      <p className="chat-exam-sheet-help">번호를 누르면 {finished ? "문제와 해설" : "해당 문제"}로 이동해요.</p>
    </ChatExamDialog>

    <ChatExamDialog dialogRef={submission} title="시험 종료" onClose={onCancelSubmit}>
      <div className="chat-exam-submit">
        <p>답안을 제출하고 채점할까요?</p>
        <dl><div><dt>미응답</dt><dd>{questions.length - answered}문항</dd></div><div><dt>보류</dt><dd>{marked}문항</dd></div></dl>
        <p className="chat-exam-submit-note">전원 정답 문항을 제외한 채점 가능한 미응답은 오답으로 처리돼요. 제출 후에는 답을 바꿀 수 없어요.</p>
        {error && <p role="alert" className="chat-exam-submit-error">{error}</p>}
        <div className="chat-exam-submit-actions"><button type="button" onClick={onCancelSubmit}>계속 풀기</button><button type="button" onClick={onFinish}><Check size={16} />제출하고 채점</button></div>
      </div>
    </ChatExamDialog>
  </>;
}

export function ChatMockExamResult({ subject, correct, graded, unanswered, omitted, scores, review, onToggleReview, children }: {
  subject: string; correct: number; graded: number; unanswered: number; omitted: number;
  scores: Array<{ subject: string; correct: number; total: number }>; review: boolean;
  onToggleReview: () => void; children: ReactNode;
}) {
  return <>
    <div className="skin-q-received chat-exam-result">
      <span className="skin-message-avatar" aria-hidden="true" />
      <div className="chat-question-message"><span className="skin-message-sender">{subject}</span><section className="skin-message-bubble chat-exam-result-message" aria-label="채점 결과">
        <h2>답안 확인이 끝났어요.</h2>
        <p className="chat-exam-result-score">{correct} / {graded}<span>{graded ? Math.round(correct / graded * 100) : 0}%</span></p>
        <p className="chat-exam-result-note">미응답 {unanswered}문항 · 채점 제외 {omitted}문항</p>
        <dl>{scores.map(score => <div key={score.subject}><dt>{score.subject}</dt><dd>{score.correct}/{score.total}</dd></div>)}</dl>
        <button type="button" className="chat-exam-review-button" onClick={onToggleReview}>{review ? "해설 접기" : "문제·해설 확인"}</button>
        <div className="chat-exam-retry">{children}</div>
      </section></div>
    </div>
    {!review && <ChatComposerContent area="draft"><span className="chat-answer-draft" data-empty="true">답안표에서 해설을 확인해요.</span></ChatComposerContent>}
  </>;
}
