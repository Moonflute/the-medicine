"use client";

import type { PracticeFilters, PracticeIndex } from "@/lib/practice-selection";
import { matchesPractice, toggleGroup } from "@/lib/practice-selection";

export function PracticeBankPicker({ questions, filters, onChange, message }: {
  questions: PracticeIndex[]; filters: PracticeFilters; onChange: (next: PracticeFilters) => void; message: string;
}) {
  if (!questions.length) return <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600" role="status">{message}</p>;
  const books = [...new Map(questions.map((q) => [q.bookId, q.bookTitle])).entries()];
  const inBooks = questions.filter((q) => filters.books.includes(q.bookId));
  const specialties = [...new Map(inBooks.map((q) => [q.specialtySlug, q.specialty])).entries()].sort((a, b) => a[1].localeCompare(b[1], "ko"));
  const years = [...new Set(inBooks.map((q) => q.examYear === null ? "unknown" : String(q.examYear)))].sort((a, b) => b.localeCompare(a));
  const group = (key: keyof PracticeFilters, title: string, items: [string, string][]) => <fieldset className="mt-5">
    <legend className="font-semibold text-slate-900">{title}</legend>
    <div className="mt-2 flex flex-wrap gap-2">{items.map(([id, label]) => <label key={id} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm ${filters[key].includes(id) ? "border-teal-400 bg-teal-50" : "border-slate-200"}`}>
      <input type="checkbox" className="accent-teal-600" checked={filters[key].includes(id)} onChange={() => onChange({ ...filters, [key]: toggleGroup(filters[key], [id]) })} />{label}
    </label>)}</div>
  </fieldset>;
  return <div>
    <p className="text-sm text-slate-600">책을 선택한 뒤 분과와 출제년도로 좁혀보세요. 분과·년도를 선택하지 않으면 전체가 포함됩니다.</p>
    {group("books", "책 종류 · 판본", books)}
    <button type="button" className="secondary-action mt-2" onClick={() => onChange({ ...filters, books: toggleGroup(filters.books, books.map(([id]) => id)) })}>책 전체 선택 / 해제</button>
    {group("specialties", "분과", specialties)}
    {group("years", "출제년도", years.map((y) => [y, y === "unknown" ? "년도 미상 · BANK" : `${y}년`]))}
    <p className="mt-4 text-xs text-slate-500">발행년도와 출제년도는 구분합니다. OCR 및 이론 연결의 검수 상태는 문제별로 표시합니다.</p>
    <p className="mt-2 text-sm font-semibold">선택 조건에 맞는 실전문제 {questions.filter((q) => matchesPractice(q, filters)).length.toLocaleString()}문항</p>
  </div>;
}
