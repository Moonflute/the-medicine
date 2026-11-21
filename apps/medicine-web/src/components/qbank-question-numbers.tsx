"use client";

import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { X } from "lucide-react";
import type { QbankSelection } from "@/lib/types";

const statusLabels = {
  correct: "정답",
  wrong: "오답",
  omitted: "채점 제외",
  skipped: "건너뜀",
  draft: "선택 중",
  unanswered: "미응답",
} as const;

export function QbankQuestionNumbers({ questionIds, currentIndex, answers, drafts, selected, skippedIds, onMove }: {
  questionIds: readonly string[];
  currentIndex: number;
  answers: ReadonlyMap<string, { correct: boolean | null }>;
  drafts: Readonly<Record<string, QbankSelection>>;
  selected: QbankSelection | null;
  skippedIds: readonly string[];
  onMove: (index: number) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const activeNumber = useRef<HTMLButtonElement>(null);
  const dialogId = useId();
  const [open, setOpen] = useState(false);
  const skipped = open ? new Set(skippedIds) : null;

  useLayoutEffect(() => {
    if (!open || !grid.current || !activeNumber.current) return;
    const list = grid.current.getBoundingClientRect();
    const current = activeNumber.current.getBoundingClientRect();
    if (current.top < list.top || current.bottom > list.bottom) {
      // Move only the number list, not the question pane behind it.
      grid.current.scrollTop += current.top - list.top - (list.height - current.height) / 2;
    }
  }, [open]);

  return <>
    <button type="button" ref={trigger} className="qbank-number-trigger h-9 whitespace-nowrap rounded-md border border-slate-300 bg-white px-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50" aria-haspopup="dialog" aria-controls={dialogId} onClick={() => {
      if (!dialog.current || dialog.current.open) return;
      dialog.current.showModal();
      setOpen(true);
    }}>전체 번호</button>
    <dialog ref={dialog} id={dialogId} className="qbank-number-dialog" aria-labelledby={`${dialogId}-title`}
      style={{ "--qbank-number-columns": Math.max(1, Math.min(20, questionIds.length)) } as CSSProperties}
      onClose={event => {
        if (event.currentTarget.open) return;
        setOpen(false);
        trigger.current?.focus({ preventScroll: true });
      }}
      onKeyDown={event => event.stopPropagation()}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }}>
      <header className="qbank-number-heading">
        <h2 id={`${dialogId}-title`}>전체 번호</h2>
        <span>제출 {answers.size}/{questionIds.length}</span>
        <button type="button" className="qbank-number-close" aria-label="전체 번호 닫기" onClick={() => dialog.current?.close()}><X size={19} aria-hidden="true" /></button>
      </header>
      {open && <div ref={grid} className="qbank-number-grid" role="group" aria-label="이동할 문제 번호">
        {questionIds.map((id, index) => {
          const current = index === currentIndex;
          const answer = answers.get(id);
          const chosen = current ? selected : drafts[id];
          const status = answer ? answer.correct === null ? "omitted" : answer.correct ? "correct" : "wrong"
            : skipped?.has(id) ? "skipped" : chosen ? "draft" : "unanswered";
          const label = `${index + 1}번 · ${statusLabels[status]}`;
          return <button key={id} type="button" ref={current ? activeNumber : undefined} className="qbank-number-cell" data-status={status}
            aria-current={current ? "step" : undefined} aria-label={label} title={label} onClick={() => {
              dialog.current?.close();
              onMove(index);
            }}>{index + 1}</button>;
        })}
      </div>}
    </dialog>
  </>;
}
