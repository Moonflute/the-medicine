"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Bookmark, House, List, NotebookPen, PencilLine, Stethoscope } from "lucide-react";
import { skinDestinations } from "@/lib/skin-navigation";

const notebookTabs = [
  { href: "/", label: "홈", icon: House },
  { href: "/cc", label: "CC", icon: Stethoscope },
  { href: "/specialties", label: "분과", icon: BookOpen },
  { href: "/review/qbank", label: "문제", icon: PencilLine },
] as const;

export function NotebookNavigation({ currentHref, menuOpen, onMenu }: { currentHref: string; menuOpen: boolean; onMenu: () => void }) {
  return <nav className="notebook-navigation app-bottom-nav" aria-label="노트 색인">
    {notebookTabs.map(({ href, label, icon: Icon }, index) => <Link key={href} href={href} aria-current={currentHref === href ? "page" : undefined} data-tab={index}>
      <Icon size={18} strokeWidth={1.7} aria-hidden="true" /><span>{label}</span>
    </Link>)}
    <button type="button" aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={onMenu}><List size={18} strokeWidth={1.7} aria-hidden="true" /><span>메뉴</span></button>
  </nav>;
}

export function NotebookHomeDirectory() {
  return <div className="notebook-home">
    <section className="notebook-cover" aria-labelledby="notebook-cover-title">
      <span className="notebook-cover-tape" aria-hidden="true" />
      <div className="notebook-cover-caption"><NotebookPen size={22} strokeWidth={1.5} aria-hidden="true" /><span>my study notes</span></div>
      <h1 id="notebook-cover-title">나의 <span>의학 노트</span></h1>
      <p>한 장씩 읽고, 하나씩 기억하기.</p>
      <div className="notebook-cover-links">
        <Link href="/review/qbank"><PencilLine size={17} aria-hidden="true" /><span>문제 풀어보기</span><ArrowUpRight size={16} aria-hidden="true" /></Link>
        <Link href="/review"><Bookmark size={17} aria-hidden="true" /><span>접어 둔 페이지</span><ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
      <span className="notebook-cover-foot" aria-hidden="true">THE MEDICINE · personal notebook</span>
    </section>
    <nav className="notebook-index" aria-label="노트 목차">
      <div className="notebook-index-heading"><h2>차례</h2><span>contents</span></div>
      {skinDestinations.slice(1).map((item, index) => <Link key={item.href} href={item.href}>
        <span className="notebook-index-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <span><strong>{item.title}</strong><small>{item.summary}</small></span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </Link>)}
    </nav>
  </div>;
}

export function NotebookQuestionWorkspace({ question, choices, response, actions, copy, hint, submitted, number, total, mode, sourceTitle, correct }: {
  question: ReactNode; choices: ReactNode; response: ReactNode; actions: ReactNode; copy: ReactNode;
  hint: string; submitted: boolean; number: number; total: number; mode: "study" | "mock";
  sourceTitle: string; correct: boolean | null;
}) {
  return <div className="notebook-question" data-question-skin="notebook">
    <section className="notebook-question-paper" aria-label={`${number}번 문제`}>
      <header className="notebook-question-heading">
        <span className="notebook-question-number">Q.{String(number).padStart(2, "0")}</span>
        <span className="notebook-question-subject">{sourceTitle}</span>
        <span className="notebook-page-number">{number} / {total}</span>
      </header>
      <div className="notebook-question-text">{question}</div>
      {hint ? <p className="notebook-hint">↳ {hint}</p> : null}
      <div className="notebook-answer-label"><span>{mode === "mock" ? "답 고르기 · 선택하면 저장돼요" : "내가 고른 답"}</span><PencilLine size={15} aria-hidden="true" /></div>
      {choices}
      <div className="notebook-question-tools">{copy}<div>{actions}</div></div>
      {submitted ? <section className="notebook-solution" data-result={correct === true ? "correct" : correct === false ? "wrong" : "ungraded"} aria-label="풀이 메모">
        <h3><PencilLine size={17} aria-hidden="true" />풀이 메모</h3>
        <div className="skin-q-response" aria-live="polite">{response}</div>
      </section> : null}
      <footer className="notebook-paper-foot" aria-hidden="true">— {number} —</footer>
    </section>
  </div>;
}
