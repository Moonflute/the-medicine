"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { PracticeFilters } from "@/lib/practice-selection";
import { isQbankProgressedInCurrentView, loadQbankProgressViewResetAt, loadQbankState, QBANK_CHANGE_EVENT } from "@/lib/qbank-store";

export function PracticeStartControls({ total, questionIds, filters, exam = false, label }: { total: number; questionIds: string[]; filters: PracticeFilters; exam?: boolean; label?: string }) {
  const [count, setCount] = useState(() => String(total));
  const [unattemptedOnly, setUnattemptedOnly] = useState(false);
  const [progressVersion, setProgressVersion] = useState(0);
  useEffect(() => {
    const refresh = () => setProgressVersion((value) => value + 1);
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);
  const available = useMemo(() => {
    if (!unattemptedOnly) return total;
    const state = loadQbankState();
    const resetAt = loadQbankProgressViewResetAt();
    return questionIds.filter((id) => !isQbankProgressedInCurrentView(state.progress[id], resetAt)).length;
  }, [questionIds, progressVersion, total, unattemptedOnly]);
  useEffect(() => {
    if (available > 0 && Number(count) > available) setCount(String(available));
  }, [available, count]);
  const valid = available > 0 && /^\d+$/.test(count) && Number(count) >= 1 && Number(count) <= available;
  const href = (ordered: boolean) => {
    const params = new URLSearchParams({ mode: ordered ? "practice-book" : "selection", practiceOnly: "1", count, practiceSeries: (filters.series ?? []).join(","), practiceDepartments: (filters.departments ?? []).join(","), practiceSpecialties: filters.specialties.join(","), practiceYears: filters.years.join(","), practiceBooks: filters.books.join(",") });
    if (unattemptedOnly) params.set("practiceUnattempted", "1");
    if (exam) params.set("exam", "1");
    return `/review/qbank/session?${params}`;
  };
  return <section className="mt-6 rounded-xl border border-teal-300 bg-teal-50/60 p-4 sm:p-5" aria-label="실전문제 시작">
    <h3 className="font-semibold text-slate-900">{label || "선택한 실전문제 풀기"}</h3>
    <p className="mt-2 text-sm text-slate-600">{total ? (unattemptedOnly ? `현재 진행 기준 미풀이 ${available.toLocaleString()} / 선택 ${total.toLocaleString()}문항` : `선택 가능 ${total.toLocaleString()}문항`) : "위에서 회차 또는 분과를 선택하세요."}</p>
    <div className="mt-3 flex flex-wrap items-end gap-3">
      <label className="block text-sm font-medium text-slate-700">문항 수<input type="number" min="1" max={Math.max(1, available)} step="1" inputMode="numeric" disabled={!available} value={count} onChange={event => setCount(event.target.value)} className="mt-1.5 block w-24 rounded-lg border border-slate-300 bg-white px-3 py-2" /></label>
      {valid ? <Link href={href(true)} className="primary-action">기존 문제 순서대로 풀기</Link> : <button disabled className="primary-action opacity-40">기존 문제 순서대로 풀기</button>}
      {valid ? <Link href={href(false)} className="primary-action">순서 섞어서 풀기</Link> : <button disabled className="primary-action opacity-40">순서 섞어서 풀기</button>}
    </div>
    <label className="mt-4 flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-slate-700"><input type="checkbox" checked={unattemptedOnly} onChange={(event) => setUnattemptedOnly(event.target.checked)} className="h-4 w-4 accent-teal-600" />안 푼 문제만 풀기</label>
    {!valid && available > 0 && <p className="mt-2 text-xs leading-5 text-slate-500">{`1~${available} 사이의 정수를 입력하세요.`}</p>}
    {unattemptedOnly && total > 0 && available === 0 && <p className="mt-2 text-xs leading-5 text-slate-500">현재 진행 기준에서 미풀이 문제가 없습니다. 통계 탭에서 진행률을 초기화하면 다시 선택할 수 있습니다.</p>}
  </section>;
}
