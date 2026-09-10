"use client";

import Link from "next/link";
import { useState } from "react";
import type { PracticeFilters } from "@/lib/practice-selection";

export function PracticeStartControls({ total, filters, exam = false, label }: { total: number; filters: PracticeFilters; exam?: boolean; label?: string }) {
  const [custom, setCustom] = useState(false);
  const [count, setCount] = useState("");
  const effective = custom ? count : String(total);
  const valid = total > 0 && /^\d+$/.test(effective) && Number(effective) >= 1 && Number(effective) <= total;
  const href = (ordered: boolean) => {
    const params = new URLSearchParams({ mode: ordered ? "practice-book" : "selection", practiceOnly: "1", count: !custom ? "all" : effective, practiceSeries: (filters.series ?? []).join(","), practiceDepartments: (filters.departments ?? []).join(","), practiceSpecialties: filters.specialties.join(","), practiceYears: filters.years.join(","), practiceBooks: filters.books.join(",") });
    if (exam) params.set("exam", "1");
    return `/review/qbank/session?${params}`;
  };
  return <section className="mt-6 rounded-xl border border-teal-300 bg-teal-50/60 p-4 sm:p-5" aria-label="실전문제 시작">
    <h3 className="font-semibold text-slate-900">{label || "선택한 실전문제 풀기"}</h3>
    <p className="mt-2 text-sm text-slate-600">{total ? `${custom ? effective || "—" : total.toLocaleString()}문항${!custom ? " 전체" : ""}` : "위에서 회차 또는 분과를 선택하세요."}</p>
    {valid ? <Link href={href(true)} className="primary-action mt-4 flex w-full justify-center py-4 text-base">기존 문제 순서대로 풀기</Link> : <button disabled className="primary-action mt-4 w-full justify-center py-4 text-base opacity-40">기존 문제 순서대로 풀기</button>}
    {valid && <Link href={href(false)} className="mt-3 inline-block text-sm text-slate-600 underline underline-offset-4">순서 섞어서 풀기</Link>}
    <div className="mt-4 border-t border-teal-200 pt-3">
      <button type="button" aria-expanded={custom} onClick={() => { setCustom(!custom); setCount(String(total)); }} className="text-sm font-medium text-slate-600">{custom ? "▾" : "▸"} 문항 수 변경</button>
      {custom && <>
      <label className="mt-3 block text-sm text-slate-600">풀 문항 수<input type="number" min="1" max={Math.max(1,total)} step="1" inputMode="numeric" disabled={!total} value={effective} onChange={event => setCount(event.target.value)} className="mt-2 block w-36 rounded-lg border border-slate-300 bg-white px-3 py-2.5" /></label>
      {!valid && total > 0 && <p className="mt-2 text-xs leading-5 text-slate-500">{`1~${total} 사이의 정수를 입력하세요.`}</p>}
      </>}
    </div>
  </section>;
}
