"use client";

import { useEffect, useReducer, useState } from "react";
import { QbankStartBar } from "@/components/qbank-start-bar";
import type { PracticeFilters } from "@/lib/practice-selection";
import { isQbankProgressedInCurrentView, loadQbankProgressViewResetAt, loadQbankState, QBANK_CHANGE_EVENT } from "@/lib/qbank-store";

export function PracticeStartControls({ total, questionIds, filters, exam = false, label, appearance = "default" }: { total: number; questionIds: string[]; filters: PracticeFilters; exam?: boolean; label?: string; appearance?: "default" | "chat" }) {
  const [count, setCount] = useState(() => String(total));
  const [unattemptedOnly, setUnattemptedOnly] = useState(false);
  const [, refreshProgress] = useReducer((value: number) => value + 1, 0);
  useEffect(() => {
    const refresh = () => refreshProgress();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);
  const available = !unattemptedOnly ? total : (() => {
    const state = loadQbankState();
    const resetAt = loadQbankProgressViewResetAt();
    return questionIds.filter((id) => !isQbankProgressedInCurrentView(state.progress[id], resetAt)).length;
  })();
  const valid = available > 0 && /^\d+$/.test(count) && Number(count) >= 1 && Number(count) <= available;
  const href = (ordered: boolean) => {
    const params = new URLSearchParams({ mode: ordered ? "practice-book" : "selection", practiceOnly: "1", count, practiceSeries: (filters.series ?? []).join(","), practiceDepartments: (filters.departments ?? []).join(","), practiceSpecialties: filters.specialties.join(","), practiceYears: filters.years.join(","), practiceBooks: filters.books.join(",") });
    if (unattemptedOnly) params.set("practiceUnattempted", "1");
    if (exam) params.set("exam", "1");
    return `/review/qbank/session?${params}`;
  };
  return <QbankStartBar
    label={label ? `${label} 실전문제 시작` : "실전문제 시작"}
    summary={`${unattemptedOnly ? "미풀이" : "선택"} ${available.toLocaleString()}문항`}
    count={count}
    max={available}
    onCountChange={setCount}
    disabled={available === 0}
    error={!valid && available > 0 ? `1~${available.toLocaleString()} 사이의 정수를 입력하세요.` : undefined}
    appearance={appearance}
    options={<label className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap">
      <input type="checkbox" checked={unattemptedOnly} onChange={(event) => {
        const next = event.target.checked;
        if (next) {
          const state = loadQbankState();
          const resetAt = loadQbankProgressViewResetAt();
          const remaining = questionIds.filter((id) => !isQbankProgressedInCurrentView(state.progress[id], resetAt)).length;
          if (remaining > 0 && Number(count) > remaining) setCount(String(remaining));
        }
        setUnattemptedOnly(next);
      }} className="size-3.5 accent-teal-600" />미풀이만
    </label>}
    actions={[
      { label: "순서대로", href: valid ? href(true) : undefined },
      { label: "섞어서", href: valid ? href(false) : undefined },
    ]}
  />;
}
