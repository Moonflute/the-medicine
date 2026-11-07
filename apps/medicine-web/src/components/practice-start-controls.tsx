"use client";

import { useEffect, useReducer, useState } from "react";
import { QbankStartBar } from "@/components/qbank-start-bar";
import type { PracticeFilters } from "@/lib/practice-selection";
import { QBANK_ROUND_DEFAULT_MINUTES, QBANK_ROUND_MAX_MINUTES, readRoundLimitMinutes } from "@/lib/qbank-round-timer";
import { isQbankProgressedInCurrentView, loadQbankProgressViewResetAt, loadQbankState, QBANK_CHANGE_EVENT } from "@/lib/qbank-store";

export function PracticeStartControls({ total, questionIds, filters, exam = false, round = false, label, appearance = "default", topActionsTarget }: {
  total: number; questionIds: string[]; filters: PracticeFilters; exam?: boolean; round?: boolean; label?: string;
  appearance?: "default" | "chat"; topActionsTarget?: HTMLDivElement | null;
}) {
  const [count, setCount] = useState(() => String(total));
  const [unattemptedOnly, setUnattemptedOnly] = useState(false);
  const [timeLimitEnabled, setTimeLimitEnabled] = useState(false);
  const [timeLimit, setTimeLimit] = useState(String(QBANK_ROUND_DEFAULT_MINUTES));
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
  const timed = round && timeLimitEnabled;
  const minutes = timed ? readRoundLimitMinutes(timeLimit) : undefined;
  const canStart = valid && (!timed || minutes !== undefined);
  const href = (ordered: boolean) => {
    const params = new URLSearchParams({ mode: ordered ? "practice-book" : "selection", practiceOnly: "1", count, practiceSeries: (filters.series ?? []).join(","), practiceDepartments: (filters.departments ?? []).join(","), practiceSpecialties: filters.specialties.join(","), practiceYears: filters.years.join(","), practiceBooks: filters.books.join(",") });
    if (unattemptedOnly) params.set("practiceUnattempted", "1");
    if (exam) params.set("exam", "1");
    if (minutes !== undefined) {
      params.set("practiceRound", "1");
      params.set("timeLimit", String(minutes));
    }
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
    topActionsTarget={topActionsTarget}
    options={<><label className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap">
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
    </label>
    {round && <label className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap">
      <input type="checkbox" disabled={total === 0} checked={timeLimitEnabled} onChange={event => setTimeLimitEnabled(event.target.checked)} className="size-3.5 accent-teal-600" />제한시간 사용
    </label>}
    {timed && <label className="inline-flex items-center gap-1 whitespace-nowrap">
      <span className="sr-only">제한시간</span>
      <input type="number" min="1" max={QBANK_ROUND_MAX_MINUTES} step="1" inputMode="numeric" value={timeLimit} onChange={event => setTimeLimit(event.target.value)} aria-invalid={minutes === undefined} className="h-9 w-14 rounded-md border border-slate-300 bg-white px-1.5 text-sm tabular-nums" />분
    </label>}
    {timed && minutes === undefined && <span role="status" className="text-rose-700">1~{QBANK_ROUND_MAX_MINUTES}분을 입력하세요.</span>}</>}
    actions={[
      { label: "순서대로 시작", href: canStart ? href(true) : undefined },
      { label: "섞어서 시작", href: canStart ? href(false) : undefined },
    ]}
  />;
}
