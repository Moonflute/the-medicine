"use client";

import { useId, useRef } from "react";
import { RotateCcw, StepForward, X } from "lucide-react";
import { useSkinTheme } from "@/components/theme-provider";
import type { QbankSkipState } from "@/lib/qbank-skips";

export function QbankSkipButton({ onSkip }: { onSkip: () => void }) {
  return <button type="button" className="secondary-action qbank-skip-button" onClick={onSkip} title="제출하지 않고 건너뛰기" aria-label="제출하지 않고 건너뛰기"><StepForward size={16} aria-hidden="true" /><span>건너뛰기</span></button>;
}

export function QbankSkipPassActions({ count, onReview, onFinish, exam = false }: { count: number; onReview: () => void; onFinish: () => void; exam?: boolean }) {
  const { theme } = useSkinTheme();
  return <div className="qbank-question-actions qbank-skip-pass" role="group" aria-label="한 바퀴 풀이 완료">
    <button type="button" className="secondary-action qbank-skip-finish" onClick={onFinish}>{exam ? "시험 종료" : "세트 종료"}</button>
    <button type="button" className="primary-action qbank-skip-review" onClick={onReview}><RotateCcw size={15} aria-hidden="true" /><span>{theme === "chat" ? `다시 풀기 ${count}` : `건너뛴 ${count}문제 다시 풀기`}</span></button>
  </div>;
}

export function QbankSkippedNavigation({ questions, state, currentIndex, onMove, onReview, onShowAll, chatOnly = false, hideInChat = false }: {
  questions: readonly { id: string; question: string }[]; state: QbankSkipState; currentIndex: number;
  onMove: (index: number) => void; onReview: () => void; onShowAll: () => void;
  chatOnly?: boolean; hideInChat?: boolean;
}) {
  const { theme } = useSkinTheme();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  if ((chatOnly && theme !== "chat") || (hideInChat && theme === "chat") || (!state.ids.length && !state.reviewing)) return null;
  const skipped = new Set(state.ids);
  const rows = questions.flatMap((question, index) => skipped.has(question.id) ? [{ ...question, index }] : []);
  return <div className="qbank-skipped-navigation">
    <button type="button" ref={trigger} className="qbank-skipped-trigger" aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}>건너뜀 {rows.length}{state.reviewing ? " · 다시 풀기 중" : ""}</button>
    {state.reviewing && <button type="button" className="qbank-skipped-trigger" onClick={onShowAll}>전체로</button>}
    <dialog ref={dialog} className="qbank-skipped-dialog" aria-labelledby={titleId} onClose={() => trigger.current?.focus()} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
    }}>
      <header><h2 id={titleId}>건너뛴 문제 · {rows.length}</h2><button type="button" className="qbank-skipped-close" aria-label="건너뛴 문제 목록 닫기" onClick={() => dialog.current?.close()}><X size={19} /></button></header>
      <div className="qbank-skipped-list">
        {rows.length ? rows.map(question => <button type="button" key={question.id} aria-current={question.index === currentIndex ? "step" : undefined} onClick={() => { dialog.current?.close(); onMove(question.index); }}><span>{question.index + 1}번</span><span>{question.question}</span></button>) : <p>건너뛴 문제를 모두 풀었습니다.</p>}
      </div>
      <footer><button type="button" className="secondary-action" onClick={() => { dialog.current?.close(); onShowAll(); }}>전체 문제로</button>{rows.length > 0 && <button type="button" className="primary-action" onClick={() => { dialog.current?.close(); onReview(); }}>건너뛴 문제만 풀기</button>}</footer>
    </dialog>
  </div>;
}
