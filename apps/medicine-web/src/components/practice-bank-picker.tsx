"use client";

import { PracticeStartControls } from "@/components/practice-start-controls";
import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { PracticeFilters, PracticeIndex } from "@/lib/practice-selection";
import { matchesPractice, toggleGroup, mockExamFilters, practiceMockExams, PRACTICE_DEPARTMENTS, practiceTopicSections } from "@/lib/practice-selection";

type Dimension = "departments" | "specialties" | "years";

function PickerFooter({ target, children }: { target?: HTMLDivElement | null; children: ReactNode }) {
  return target ? createPortal(children, target) : children;
}
export function PracticeBankPicker({ questions, filters, onChange, message, appearance = "default", footerTarget, topActionsTarget }: {
  questions: PracticeIndex[]; filters: PracticeFilters; onChange: (next: PracticeFilters) => void; message: string; appearance?: "default" | "chat";
  footerTarget?: HTMLDivElement | null; topActionsTarget?: HTMLDivElement | null;
}) {
  const [examMode, setExamMode] = useState(true);
  const chat = appearance === "chat";
  if (!questions.length) return <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600" role="status">{message}</p>;
  const ordered = filters.order === "book";
  const selectedIds = questions.filter((question) => matchesPractice(question, filters)).map((question) => question.id);
  const modes = <fieldset className={chat ? "chat-qbank-modes" : "flex flex-wrap gap-4"}><legend className="mb-2 font-semibold">문제 선택 방식</legend>{([['random', '분과·조건 선택'], ['book', '회차 전체 풀기']] as const).map(([value, label]) => <label key={value} className="flex items-center gap-2"><input type="radio" name="practice-order" checked={(filters.order ?? "random") === value} onChange={() => onChange({ books: [], series: [], departments: [], specialties: [], years: [], order: value })} />{label}</label>)}</fieldset>;
  if (ordered) {
    const exams = practiceMockExams(questions);
    const active = filters.years.length === 1 && !filters.books.length && !filters.specialties.length && !filters.departments?.length && !filters.series?.length
      ? exams.find((exam) => filters.years[0] === String(exam.year)) : undefined;
    return <div className={chat ? "chat-qbank-practice" : undefined}>
      {modes}
      <fieldset className="mt-5"><legend className="font-semibold text-slate-900">모의고사 선택</legend>
        <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-[repeat(auto-fill,8.25rem)]">{exams.map((exam) => {
          const checked = active === exam;
          return <label key={exam.label} className={`flex min-h-9 min-w-0 cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1 whitespace-nowrap ${checked ? "border-teal-500 bg-teal-50 text-teal-950" : "border-slate-200 hover:border-teal-300"}`} data-checked={checked}>
            <input type="radio" name="practice-mock-exam" checked={checked} onChange={() => onChange(mockExamFilters(exam.year))} className="h-3.5 w-3.5 shrink-0 accent-teal-600" />
            <span className="text-xs font-semibold sm:text-sm">{exam.label}</span>
            <span className="ml-auto text-[11px] tabular-nums text-slate-500">{exam.count.toLocaleString()}문항</span>
          </label>;
        })}</div>
      </fieldset>
      <fieldset className="mt-5 grid gap-2 sm:grid-cols-2"><legend className="mb-2 font-semibold">채점 방식</legend>{[[true, "모의고사", "자유롭게 답을 수정하고 종료 후 일괄 채점"], [false, "즉시 해설 학습", "한 문제씩 채점하고 바로 해설 확인"]].map(([value, title, detail]) => <label key={String(value)} className={chat ? "chat-qbank-option" : `flex cursor-pointer gap-3 rounded-xl border p-4 ${examMode === value ? "border-teal-500 bg-teal-50" : "border-slate-200"}`} data-checked={examMode === value}><input type="radio" name="exam-mode" checked={examMode === value} onChange={() => setExamMode(value === true)} className="accent-teal-600" /><span><span className="block text-sm font-semibold">{title}</span><span className="text-xs text-slate-500">{detail}</span></span></label>)}</fieldset>
      <PickerFooter target={chat ? footerTarget : null}><PracticeStartControls appearance={appearance} key={active?.label || "no-round"} total={active?.count ?? 0} questionIds={selectedIds} filters={filters} exam={examMode} round label={active?.label} topActionsTarget={topActionsTarget} /></PickerFooter>
    </div>;
  }
  const activeDetails = filters.specialties.length + filters.years.length;
  const years = [...new Set(questions.map((q) => q.examYear === null ? "unknown" : String(q.examYear)))].sort((a, b) => b.localeCompare(a));
  const group = (key: Dimension, title: string, items: [string, string][]) => <fieldset className="mt-5">
    <legend className="font-semibold text-slate-900">{title}</legend>
    <div className={chat ? "chat-qbank-choice-list" : "mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4"}>{items.map(([id, label]) => {
      const checked = (filters[key] ?? []).includes(id);
      const total = questions.filter((q) => matchesPractice(q, { ...filters, books: [], [key]: [id] })).length;
      return <label key={id} className={chat ? "chat-qbank-choice" : `flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[13px] leading-5 transition-colors sm:px-3 sm:text-sm ${checked ? "border-teal-400 bg-teal-50 text-teal-950" : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"}`} data-checked={checked}>
        {chat ? <span className="skin-contact-avatar" aria-hidden="true" /> : null}
        <input type="checkbox" className="h-4 w-4 shrink-0 accent-teal-600" checked={checked} onChange={() => {
          const next = { ...filters, books: [], [key]: toggleGroup(filters[key] ?? [], [id]) };
          onChange(next);
        }} /><span className="min-w-0 font-medium">{label}</span><span className="ml-auto shrink-0 text-[11px] tabular-nums text-slate-500">{total.toLocaleString()}</span>
      </label>;
    })}</div>
  </fieldset>;
  return <div className={chat ? "chat-qbank-practice" : undefined}>
    {modes}
    {group("departments", "과목", PRACTICE_DEPARTMENTS.map((d) => [d, d]))}
    <details className={chat ? "chat-qbank-topics" : "mt-3 rounded-lg border border-slate-200 bg-slate-50/50 px-3"}>
      <summary className="cursor-pointer py-2.5 text-sm font-semibold text-slate-800 marker:text-teal-600">세부 필터{activeDetails ? <span className="ml-2 text-xs font-normal text-slate-500">{activeDetails}개 적용</span> : null}</summary>
      <div className="pb-3">
        {PRACTICE_DEPARTMENTS.map((d) => {
          const sections = practiceTopicSections(questions, d);
          const topicCount = sections.reduce((count, section) => count + section.topics.length, 0);
          const chosen = sections.flatMap((section) => section.topics).filter(([key]) => filters.specialties.includes(key)).length;
          return <details key={d} className={chat ? "chat-qbank-topics" : "mt-2 rounded-lg border border-slate-200 bg-white px-3"}>
            <summary className="cursor-pointer py-2 text-sm font-semibold text-slate-800 marker:text-teal-600">{d} · 세부 주제 <span className="ml-2 text-xs font-normal text-slate-500">{chosen ? `${chosen}개 선택` : `${topicCount}개`}</span></summary>
            <div className="pb-3">{sections.map((section) => <div key={section.id}>{group("specialties", section.title, section.topics)}</div>)}</div>
          </details>;
        })}
        {group("years", "출제년도", years.map((y) => [y, y === "unknown" ? "년도 미상 · BANK" : `${y}년`]))}
      </div>
    </details>
    <PickerFooter target={chat ? footerTarget : null}><PracticeStartControls appearance={appearance} key={JSON.stringify(filters)} total={selectedIds.length} questionIds={selectedIds} filters={filters} topActionsTarget={topActionsTarget} /></PickerFooter>
  </div>;
}
