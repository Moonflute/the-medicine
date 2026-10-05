"use client";

import type { ReactNode } from "react";
import { ArrowUp, ChevronRight } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";
import type { QbankAnswer } from "@/lib/types";

export type SkinChoice = { key: QbankAnswer; label: string; text: string; selected: boolean; correct: boolean; wrong: boolean };

export function SkinQuestionChoices({ choices, disabled, onSelect }: { choices: SkinChoice[]; disabled: boolean; onSelect: (key: QbankAnswer) => void }) {
  const { theme } = useAppTheme();
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  return <div className={special ? `skin-q-choices skin-q-choices--${theme}` : "mt-7 grid gap-3"} role="group" aria-label="답 보기">
    {choices.map((choice, index) => <button key={choice.key} type="button" disabled={disabled} aria-pressed={choice.selected} onClick={() => onSelect(choice.key)} data-selected={choice.selected} data-correct={choice.correct} data-wrong={choice.wrong}
      className={special ? "skin-q-choice" : `flex w-full items-start gap-3 rounded-lg border px-4 py-3.5 text-left transition ${choice.correct ? "border-teal-500 bg-teal-50 text-teal-950" : choice.wrong ? "border-rose-400 bg-rose-50 text-rose-950" : choice.selected ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white hover:border-slate-400"}`}>
      {theme === "sheet" ? <span className="skin-q-choice-label">{index + 2}</span> : null}
      <span className={special ? "skin-q-choice-label" : "font-semibold"}>{theme === "terminal" ? `[${index + 1}] ${choice.label}.` : `${choice.label}.`}</span>
      <span data-highlight-block={`option:${choice.key}`} className="min-w-0 break-words">{choice.text}</span>
      {special ? <span className="skin-q-choice-state">{choice.correct ? "정답" : choice.wrong ? "오답" : choice.selected ? "✓" : ""}</span> : null}
    </button>)}
  </div>;
}

export function SkinQuestionAction({ submitted, unknown, last, onSubmit, onNext }: { submitted: boolean; unknown: boolean; last: boolean; onSubmit: () => void; onNext: () => void }) {
  const { theme } = useAppTheme();
  const label = submitted ? last ? "결과 보기" : "다음 문제" : unknown ? "모름으로 제출" : theme === "chat" ? "보내기" : theme === "terminal" ? "ENTER · 제출" : "답안 제출";
  return <button type="button" onClick={submitted ? onNext : onSubmit} aria-label={submitted ? last ? "결과 보기" : "다음 문제" : unknown ? "모름으로 제출" : "답안 제출"} className="primary-action">{label}{submitted ? <ChevronRight size={16} /> : theme === "chat" ? <ArrowUp size={16} /> : null}</button>;
}

export function SkinQuestionWorkspace({ question, choices, response, actions, copy, hint, answerText, submitted, number, total, mode = "study", sourceTitle = "문제은행", choicesCount = 5 }: {
  question: ReactNode; choices: ReactNode; response: ReactNode; actions: ReactNode; copy: ReactNode;
  hint: string; answerText: string; submitted: boolean; number: number; total: number;
  mode?: "study" | "mock"; sourceTitle?: string; choicesCount?: number;
}) {
  const { theme } = useAppTheme();
  const hintNode = hint ? <p className="mt-5 text-sm font-medium text-teal-700">{hint}</p> : null;
  if (theme === "chat") return <div className="skin-question-workspace skin-question-chat" data-question-skin="chat">
    <div className="skin-q-contact"><span className="skin-message-avatar" aria-hidden="true">문제</span><span>{sourceTitle}<small>{number}번째 문제 · {number}/{total}</small></span></div>
    <div className="skin-q-received"><span className="skin-message-avatar" aria-hidden="true">Q</span><div className="skin-message-bubble">{question}{hintNode}<div className="mt-2 flex justify-end">{copy}</div></div></div>
    {submitted ? <><div className="skin-q-sent" aria-label="보낸 답안"><div>{answerText || "모르겠습니다."}</div><small>답안 제출됨</small></div><div className="skin-q-response" aria-live="polite">{response}</div></> : null}
    <div className="skin-q-composer"><div className="skin-q-compose-label"><span>{submitted ? "보낸 답안과 보기" : mode === "mock" ? "답을 선택하면 저장됩니다" : "보낼 답을 선택하세요"}</span><span>{submitted ? mode === "mock" ? "채점 완료" : "전송 완료" : hint ? "복수 선택" : mode === "mock" ? "시험 제출 후 채점" : "선택 후 전송"}</span></div>{choices}<div className="skin-q-actions">{actions}</div></div>
  </div>;
  if (theme === "sheet") return <div className="skin-question-workspace skin-question-sheet" data-question-skin="sheet">
    <div className="skin-q-grid-head" aria-hidden="true"><span /><span>A</span><span>B · {number}/{total}</span></div>
    <div className="skin-q-grid-row"><span className="skin-q-row-number">1</span><span className="skin-q-row-label">문제</span><div className="skin-q-row-content">{question}{hintNode}<div className="mt-2 flex justify-end">{copy}</div></div></div>
    {choices}
    {submitted ? <div className="skin-q-grid-row"><span className="skin-q-row-number">{choicesCount + 2}</span><span className="skin-q-row-label">결과</span><div className="skin-q-row-content"><p className="mb-2 text-xs text-slate-500">입력: {answerText || "미응답"}</p><div className="skin-q-response" aria-live="polite">{response}</div></div></div> : null}
    <div className="skin-q-actions">{actions}</div>
  </div>;
  if (theme === "terminal") return <div className="skin-question-workspace skin-question-console" data-question-skin="terminal">
    <div className="skin-q-console-title"><span>QBANK / QUESTION_{String(number).padStart(3, "0")}</span><span>{number}/{total}</span></div>
    <p className="skin-command-line">C:\QBANK&gt; TYPE QUESTION.TXT</p>{question}{hintNode}
    <p className="skin-command-line">SELECT ANSWER [1-{choicesCount}]</p>{choices}
    <div className="skin-q-command-hints"><span>숫자: 선택 / 해제</span><span>{mode === "mock" ? "← / →: 이동" : "Enter: 제출 / →: 다음"}</span>{copy}</div>
    {submitted ? <><p className="skin-command-line">C:\QBANK&gt; CHECK {answerText.split("\n").map(text => text.split(".")[0]).join(",") || "NONE"}</p><div className="skin-q-response" aria-live="polite">{response}</div></> : null}
    <div className="skin-q-actions">{actions}</div>
  </div>;
  return <>{question}{hintNode}{choices}<div className="mt-2 flex justify-end">{copy}</div>{response}<div className="mt-6 flex justify-end">{actions}</div></>;
}
