"use client";

import type { ReactNode } from "react";
import { Code2, FileText, MessageCircle, Reply } from "lucide-react";
import type { ConceptTheme } from "@/lib/themes";
import { ConceptProfile } from "@/components/concept-document";

export type ConceptQuestionProps = {
  question: ReactNode; choices: ReactNode; response: ReactNode; actions: ReactNode; copy: ReactNode;
  hint: string; answerText: string; submitted: boolean; number: number; total: number;
  mode?: "study" | "mock"; sourceTitle?: string; choicesCount?: number;
};

/** All answer selection, grading, navigation, and persistence remain in the original caller. */
export function ConceptQuestionWorkspace({ theme, question, choices, response, actions, copy, hint, answerText, submitted, number, total, mode = "study", sourceTitle = "문제은행" }: ConceptQuestionProps & { theme: ConceptTheme }) {
  const hintNode = hint ? <p className="concept-question-hint">{hint}</p> : null;
  if (theme === "mail") return <div className="skin-question-workspace concept-question-mail" data-question-skin="mail">
    <div className="concept-mail-question-subject"><span>질문 {number} / {total}</span><h2>{sourceTitle} · {mode === "mock" ? "실전 검토" : "확인 요청"}</h2><div className="concept-mail-sender"><span className="concept-mail-avatar" aria-hidden="true">{sourceTitle.replace(/^\d+\s*/, "").slice(0, 2)}</span><div><strong>{sourceTitle}</strong><small>받는 사람: 나</small></div>{copy}</div></div>
    <div className="concept-mail-question-body">{question}{hintNode}</div>
    <section className="concept-mail-reply" aria-label="답안 회신"><div className="concept-mail-reply-heading"><Reply size={17} /><strong>답장</strong><span>{sourceTitle}</span></div>{choices}<div className="concept-mail-draft" aria-live="polite">{answerText || "답안을 선택하세요."}</div><div className="concept-question-actions">{actions}</div></section>
    {submitted ? <section className="concept-mail-feedback" aria-label="해설 메일"><div className="concept-mail-reply-heading"><Reply size={17} /><strong>Re: 검토 결과</strong></div><div aria-live="polite">{response}</div></section> : null}
  </div>;
  if (theme === "social") return <div className="skin-question-workspace concept-question-social" data-question-skin="social">
    <ConceptProfile name={sourceTitle} detail={`${mode === "mock" ? "실전" : "문제"} 게시물 · ${number} / ${total}`}>{copy}</ConceptProfile>
    <div className="concept-question-slide"><span className="concept-slide-counter">{number} / {total}</span><span className="concept-slide-eyebrow">QUESTION</span>{question}{hintNode}</div>
    <div className="concept-social-poll"><span className="sr-only">답 보기 투표. {mode === "mock" ? "선택한 답은 자동 저장됩니다." : "선택 후 제출하세요."}</span>{choices}</div>
    <div className="concept-social-selection" aria-live="polite"><b>{sourceTitle}</b><span>{answerText || "답안을 골라보세요."}</span></div>
    <div className="concept-question-actions">{actions}</div>
    {submitted ? <section className="concept-social-comments" aria-label="해설 댓글"><div><MessageCircle size={18} /><strong>해설</strong></div><div className="concept-social-comment-body" aria-live="polite">{response}</div></section> : null}
  </div>;
  return <div className="skin-question-workspace concept-question-editor" data-question-skin="editor">
    <div className="concept-question-file"><FileText size={15} /><span>question_{String(number).padStart(3, "0")}.md</span><small>{number} / {total}</small>{copy}</div>
    <div className="concept-question-source"><p className="concept-code-comment">{"// "}{sourceTitle} · {mode === "mock" ? "mock exam" : "question"}</p><div className="concept-code-question">{question}</div>{hintNode}</div>
    <section className="concept-editor-input" aria-label="답안 입력"><p><span className="concept-code-keyword">const</span> <span className="concept-code-variable">answer</span> = <span className="concept-code-brace">[</span></p>{choices}<p className="concept-code-brace">];</p><output className="concept-editor-draft" aria-live="polite">{answerText ? `// selected: ${answerText}` : "// 답안을 선택하세요."}</output></section>
    <div className="concept-editor-run"><Code2 size={16} /><code>check(answer)</code><div className="concept-question-actions">{actions}</div></div>
    <section className="concept-editor-output" aria-label="실행 결과"><div className="concept-output-tabs"><span>OUTPUT</span><span>PROBLEMS</span><small>{submitted ? "실행 완료" : mode === "mock" ? "답안 자동 저장" : "실행 대기"}</small></div>{submitted ? <div className="concept-output-body" aria-live="polite">{response}</div> : <p className="concept-output-wait">{mode === "mock" ? "선택한 답안은 저장됩니다. 시험을 제출하면 채점 결과가 표시됩니다." : "답안을 고른 뒤 실행하면 검토 결과가 표시됩니다."}</p>}</section>
  </div>;
}
