"use client";

import Link from "next/link";
import { useState } from "react";
import type { PracticeFilters } from "@/lib/practice-selection";

export function PracticeStartControls({ total, filters, exam = false, label }: { total: number; filters: PracticeFilters; exam?: boolean; label?: string }) {
  const [count, setCount] = useState(() => String(total));
  const valid = total > 0 && /^\d+$/.test(count) && Number(count) >= 1 && Number(count) <= total;
  const href = (ordered: boolean) => {
    const params = new URLSearchParams({ mode: ordered ? "practice-book" : "selection", practiceOnly: "1", count, practiceSeries: (filters.series ?? []).join(","), practiceDepartments: (filters.departments ?? []).join(","), practiceSpecialties: filters.specialties.join(","), practiceYears: filters.years.join(","), practiceBooks: filters.books.join(",") });
    if (exam) params.set("exam", "1");
    return `/review/qbank/session?${params}`;
  };
  return <section className="mt-6 rounded-xl border border-teal-300 bg-teal-50/60 p-4 sm:p-5" aria-label="실전문제 시작">
    <h3 className="font-semibold text-slate-900">{label || "선택한 실전문제 풀기"}</h3>
    <p className="mt-2 text-sm text-slate-600">{total ? `선택 가능 ${total.toLocaleString()}문항` : "위에서 회차 또는 분과를 선택하세요."}</p>
    <div className="mt-3 flex flex-wrap items-end gap-3">
      <label className="block text-sm font-medium text-slate-700">문항 수<input type="number" min="1" max={Math.max(1,total)} step="1" inputMode="numeric" disabled={!total} value={count} onChange={event => setCount(event.target.value)} className="mt-1.5 block w-24 rounded-lg border border-slate-300 bg-white px-3 py-2" /></label>
      {valid ? <Link href={href(true)} className="primary-action">기존 문제 순서대로 풀기</Link> : <button disabled className="primary-action opacity-40">기존 문제 순서대로 풀기</button>}
      {valid ? <Link href={href(false)} className="primary-action">순서 섞어서 풀기</Link> : <button disabled className="primary-action opacity-40">순서 섞어서 풀기</button>}
    </div>
    {!valid && total > 0 && <p className="mt-2 text-xs leading-5 text-slate-500">{`1~${total} 사이의 정수를 입력하세요.`}</p>}
  </section>;
}
