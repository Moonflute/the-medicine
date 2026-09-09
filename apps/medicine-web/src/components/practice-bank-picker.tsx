"use client";

import Link from "next/link";
import type { PracticeFilters, PracticeIndex } from "@/lib/practice-selection";
import { matchesPractice, toggleGroup, mockExamFilters, practiceMockExams } from "@/lib/practice-selection";

type Dimension = "series" | "departments" | "specialties" | "years";
export function PracticeBankPicker({ questions, filters, onChange, message, count }: {
  questions: PracticeIndex[]; filters: PracticeFilters; onChange: (next: PracticeFilters) => void; message: string; count: string;
}) {
  if (!questions.length) return <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600" role="status">{message}</p>;
  const ordered = filters.order === "book";
  const modes = <fieldset className="flex flex-wrap gap-4"><legend className="mb-2 font-semibold">풀이 방식</legend>{([['random', '분과별 랜덤풀이'], ['book', '연도별 순서풀이']] as const).map(([value, label]) => <label key={value} className="flex items-center gap-2"><input type="radio" name="practice-order" checked={(filters.order ?? "random") === value} onChange={() => onChange({ books: [], series: [], departments: [], specialties: [], years: [], order: value })} />{label}</label>)}</fieldset>;
  if (ordered) {
    const exams = practiceMockExams(questions);
    const active = filters.series?.length === 1 && filters.years.length === 1 && !filters.books.length && !filters.specialties.length && !filters.departments?.length
      ? exams.find((exam) => filters.series?.[0] === exam.series && filters.years[0] === String(exam.year)) : undefined;
    const params = active ? new URLSearchParams({ mode: "practice-book", count: "all", practiceSeries: active.series, practiceYears: String(active.year) }) : null;
    return <div>
      {modes}
      <p className="mt-3 text-sm text-slate-600">풀 모의고사를 선택하세요. 내과·외과·산부인과·소아과 전체를 원래 문제 번호 순서대로 풉니다.</p>
      <fieldset className="mt-5"><legend className="font-semibold text-slate-900">모의고사 선택</legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{exams.map((exam) => {
          const checked = active === exam;
          return <label key={exam.label} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 ${checked ? "border-teal-500 bg-teal-50 text-teal-950" : "border-slate-200 hover:border-teal-300"}`}>
            <input type="radio" name="practice-mock-exam" checked={checked} onChange={() => onChange(mockExamFilters(exam.series, exam.year))} className="accent-teal-600" />
            <span><span className="block font-semibold">{exam.label}</span><span className="text-xs text-slate-500">{exam.count.toLocaleString()}문항</span></span>
          </label>;
        })}</div>
      </fieldset>
      <p className="mt-3 text-xs text-slate-500">P: 퍼펙트 · R: 리얼</p>
      <div className="mt-5" role="status">{active && params ? <Link className="primary-action" href={`/review/qbank/session?${params}`}>{active.label} 시작 · 전체 {active.count.toLocaleString()}문항</Link> : <p className="text-sm text-slate-600">모의고사 하나를 선택하세요.</p>}</div>
    </div>;
  }
  const selected = questions.filter((q) => matchesPractice(q, filters)).length;
  const specialties = [...new Map(questions.map((q) => [q.specialtySlug, q.specialty])).entries()].sort((a, b) => a[1].localeCompare(b[1], "ko"));
  const years = [...new Set(questions.map((q) => q.examYear === null ? "unknown" : String(q.examYear)))].sort((a, b) => b.localeCompare(a));
  const group = (key: Dimension, title: string, items: [string, string][]) => <fieldset className="mt-5">
    <legend className="font-semibold text-slate-900">{title}</legend>
    <div className="mt-2 flex flex-wrap gap-2">{items.map(([id, label]) => {
      const checked = (filters[key] ?? []).includes(id);
      const total = questions.filter((q) => matchesPractice(q, { ...filters, books: [], [key]: [id] })).length;
      return <label key={id} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm ${checked ? "border-teal-400 bg-teal-50" : "border-slate-200"}`}>
        <input type="checkbox" className="accent-teal-600" checked={checked} onChange={() => onChange({ ...filters, books: [], [key]: toggleGroup(filters[key] ?? [], [id]) })} />{label}<span className="text-xs text-slate-500">{total.toLocaleString()}</span>
      </label>;
    })}</div>
  </fieldset>;
  const params = new URLSearchParams({ mode: ordered ? "practice-book" : "selection", count: ordered ? "all" : count, practiceSeries: (filters.series ?? []).join(","), practiceDepartments: (filters.departments ?? []).join(","), practiceSpecialties: filters.specialties.join(","), practiceYears: filters.years.join(","), practiceBooks: filters.books.join(",") });
  const ready = selected > 0 && (!ordered || Boolean(filters.series?.length && filters.years.length));
  return <div>
    {modes}
    <p className="mt-3 text-sm text-slate-600">{ordered ? "P / R과 출제년도를 선택하세요. 선택한 문제 전체를 과목별 원래 번호 순서로 풉니다." : "과목이나 세부 분과만 선택해도 됩니다. 아래 문항 수만큼 무작위로 출제합니다."} 선택하지 않은 조건은 전체를 포함합니다.</p>
    {group("series", "P / R", [["퍼펙트", "P"], ["리얼", "R"]])}
    <p className="mt-1 text-xs text-slate-500">P: 퍼펙트 · R: 리얼</p>
    {group("departments", "과목", ["내과", "외과", "산부인과", "소아과"].map((d) => [d, d]))}
    {group("specialties", "세부 분과", specialties)}
    {group("years", "출제년도", years.map((y) => [y, y === "unknown" ? "년도 미상 · BANK" : `${y}년`]))}
    <p className="mt-4 text-xs text-slate-500">출제년도 기준입니다. 연도를 알 수 없는 BANK 문제는 별도로 선택합니다.</p>
    <p className="mt-2 text-sm font-semibold" role="status">선택 조건에 맞는 실전문제 {selected.toLocaleString()}문항</p>
    <div className="mt-3 flex flex-wrap gap-3">{ready ? <Link className="primary-action" href={`/review/qbank/session?${params}`}>{ordered ? `실전 ${selected.toLocaleString()}문항 번호순으로 시작` : "실전문제만 랜덤풀이"}</Link> : <p className="text-sm text-slate-600">{ordered ? "P / R과 출제년도를 선택하세요." : "원하는 조건을 하나 이상 선택하세요."}</p>}<button type="button" className="secondary-action" onClick={() => onChange({ books: [], series: [], departments: [], specialties: [], years: [], order: filters.order })}>실전 선택 초기화</button></div>
  </div>;
}
