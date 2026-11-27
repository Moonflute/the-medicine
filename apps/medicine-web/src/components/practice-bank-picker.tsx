"use client";

import { PracticeStartControls } from "@/components/practice-start-controls";
import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Check } from "lucide-react";
import type { PracticeFilters, PracticeIndex } from "@/lib/practice-selection";
import { matchesPractice, toggleGroup, mockExamFilters, practiceFilterRoundKey, practiceMockExamSections, PRACTICE_DEPARTMENTS, practiceTopicSections, selectedPracticeExamKey, selectedPracticeFilterRoundKeys, visiblePracticeDepartments } from "@/lib/practice-selection";

type Dimension = "departments" | "specialties" | "roundKeys";
const choices = [["random", "분과·조건 선택"], ["book", "회차 전체 풀기"]] as const;

function PickerFooter({ target, children }: { target?: HTMLDivElement | null; children: ReactNode }) {
  return target ? createPortal(children, target) : children;
}
export function PracticeBankPicker({ questions, filters, onChange, message, completedExamKeys, appearance = "default", footerTarget, topControlsTarget }: {
  questions: PracticeIndex[]; filters: PracticeFilters; onChange: (next: PracticeFilters) => void; message: string; appearance?: "default" | "chat";
  completedExamKeys: ReadonlySet<string>;
  footerTarget?: HTMLDivElement | null; topControlsTarget?: HTMLDivElement | null;
}) {
  const [examMode, setExamMode] = useState(true);
  const chat = appearance === "chat";
  if (!questions.length) return <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600" role="status">{message}</p>;
  const mode = filters.order ?? "random";
  const ordered = mode === "book";
  const selection = questions.filter((question) => matchesPractice(question, filters));
  const modes = <fieldset className={chat ? "chat-qbank-modes" : "flex flex-wrap gap-4"}><legend className="mb-2 font-semibold">문제 선택 방식</legend>{choices.map(([value, label]) => <label key={value} className="flex items-center gap-2"><input type="radio" name="practice-order" checked={mode === value} onChange={() => onChange({ books: [], series: [], departments: [], specialties: [], years: [], order: value })} />{label}</label>)}</fieldset>;
  if (ordered) {
    const examSections = practiceMockExamSections(questions);
    const examKey = selectedPracticeExamKey(filters);
    const active = examSections.flatMap(section => section.exams).find((exam) => exam.key === examKey);
    return <div className={chat ? "chat-qbank-practice" : undefined}>
      {modes}
      <fieldset className="practice-round-picker mt-5"><legend className="font-semibold text-slate-900">회차 선택</legend>
        {examSections.map(section => <div key={section.id} className="practice-round-section" data-round-kind={section.id}>
          <h3 className="practice-round-heading">{section.label}</h3>
          <div className="practice-round-grid">{section.exams.map((exam) => {
            const checked = active === exam;
            return <label key={exam.key} className={`practice-round-choice flex min-h-9 min-w-0 cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1 ${checked ? "border-teal-500 bg-teal-50 text-teal-950" : "border-slate-200 hover:border-teal-300"}`} data-checked={checked}>
              <input type="radio" name="practice-mock-exam" checked={checked} onChange={() => onChange(mockExamFilters(exam.year, exam.key))} className="h-3.5 w-3.5 shrink-0 accent-teal-600" />
              <span className="practice-round-name">{exam.label}</span>
              {completedExamKeys.has(exam.key) ? <span className="practice-round-complete" role="img" aria-label="회차 풀이 완료" title="전체 회차를 제출했거나, 모든 문항을 한 번 이상 풀었습니다."><Check size={16} strokeWidth={2.5} aria-hidden="true" /></span> : null}
              <span className="practice-round-count ml-auto text-slate-500">{exam.count.toLocaleString()}문항</span>
            </label>;
          })}</div>
        </div>)}
      </fieldset>
      <fieldset className="mt-5 grid gap-2 sm:grid-cols-2"><legend className="mb-2 font-semibold">채점 방식</legend>{[[true, "모의고사", "자유롭게 답을 수정하고 종료 후 일괄 채점"], [false, "즉시 해설 학습", "한 문제씩 채점하고 바로 해설 확인"]].map(([value, title, detail]) => <label key={String(value)} className={chat ? "chat-qbank-option" : `flex cursor-pointer gap-3 rounded-xl border p-4 ${examMode === value ? "border-teal-500 bg-teal-50" : "border-slate-200"}`} data-checked={examMode === value}><input type="radio" name="exam-mode" checked={examMode === value} onChange={() => setExamMode(value === true)} className="accent-teal-600" /><span><span className="block text-sm font-semibold">{title}</span><span className="text-xs text-slate-500">{detail}</span></span></label>)}</fieldset>
      <PickerFooter target={chat ? footerTarget : null}><PracticeStartControls appearance={appearance} key={active?.key || "no-round"} total={active?.count ?? 0} questions={selection} filters={filters} exam={examMode} round label={active?.label} topControlsTarget={topControlsTarget} /></PickerFooter>
    </div>;
  }
  const roundSections = practiceMockExamSections(questions, { includeUndated: true });
  const activeRoundKeys = selectedPracticeFilterRoundKeys(filters, questions);
  const roundScope = { ...filters, books: [], years: [], roundKeys: roundSections.flatMap(section => section.exams.map(exam => exam.key)) };
  const roundCounts = new Map<string, number>();
  for (const question of questions) {
    if (!matchesPractice(question, roundScope)) continue;
    const key = practiceFilterRoundKey(question);
    roundCounts.set(key, (roundCounts.get(key) ?? 0) + 1);
  }
  const group = (key: Dimension, title: string, items: [string, string][]) => {
    const isRound = key === "roundKeys";
    const selected = isRound ? activeRoundKeys : filters[key] ?? [];
    const update = (ids: string[]) => onChange({ ...filters, books: [], ...(isRound ? { years: [] } : {}), [key]: toggleGroup(selected, ids) });
    const allSelected = items.every(([id]) => selected.includes(id));
    const groupAction = allSelected ? "전체 해제" : "전체 선택";
    return <fieldset className="mt-5">
      <legend className="font-semibold text-slate-900">{title}</legend>
      {isRound && items.length > 1 ? <button type="button" className="secondary-action mt-1 text-xs" aria-label={`${title} ${groupAction}`} onClick={() => update(items.map(([id]) => id))}>{groupAction}</button> : null}
      <div className={chat ? "chat-qbank-choice-list" : "mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4"}>{items.map(([id, label]) => {
        const checked = selected.includes(id);
        const total = isRound ? roundCounts.get(id) ?? 0 : questions.filter((q) => matchesPractice(q, { ...filters, books: [], [key]: [id] })).length;
        return <label key={id} className={chat ? "chat-qbank-choice" : `flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[13px] leading-5 transition-colors sm:px-3 sm:text-sm ${checked ? "border-teal-400 bg-teal-50 text-teal-950" : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"}`} data-checked={checked}>
          {chat ? <span className="skin-contact-avatar" aria-hidden="true" /> : null}
          <input type="checkbox" className="h-4 w-4 shrink-0 accent-teal-600" checked={checked} onChange={() => update([id])} /><span className="min-w-0 font-medium">{label}</span><span className="ml-auto shrink-0 text-[11px] tabular-nums text-slate-500">{total.toLocaleString()}</span>
        </label>;
      })}</div>
    </fieldset>;
  };
  return <div className={chat ? "chat-qbank-practice" : undefined}>
    {modes}
    {group("departments", "과목", visiblePracticeDepartments(questions).map((d) => [d, d]))}
    {roundSections.length ? <details className={chat ? "chat-qbank-topics" : "mt-3 rounded-lg border border-slate-200 bg-slate-50/50 px-3"}>
      <summary className="cursor-pointer py-2.5 text-sm font-semibold text-slate-800 marker:text-teal-600">출처·회차 선택{activeRoundKeys.length ? <span className="ml-2 text-xs font-normal text-slate-500">{activeRoundKeys.length}개 선택</span> : null}</summary>
      <div className="pb-3">{roundSections.map(section => <div key={section.id}>{group("roundKeys", section.label, section.exams.map(exam => [exam.key, exam.label]))}</div>)}</div>
    </details> : null}
    <details className={chat ? "chat-qbank-topics" : "mt-3 rounded-lg border border-slate-200 bg-slate-50/50 px-3"}>
      <summary className="cursor-pointer py-2.5 text-sm font-semibold text-slate-800 marker:text-teal-600">세부 주제{filters.specialties.length ? <span className="ml-2 text-xs font-normal text-slate-500">{filters.specialties.length}개 선택</span> : null}</summary>
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
      </div>
    </details>
    <PickerFooter target={chat ? footerTarget : null}><PracticeStartControls appearance={appearance} key={JSON.stringify(filters)} total={selection.length} questions={selection} filters={filters} topControlsTarget={topControlsTarget} /></PickerFooter>
  </div>;
}
