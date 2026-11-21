"use client";

import { useEffect, useMemo, useState } from "react";
import { QbankStartBar } from "@/components/qbank-start-bar";
import { QbankProgressFilters } from "@/components/qbank-progress-filters";
import { selectedPracticeExamKey, type PracticeFilters, type PracticeIndex } from "@/lib/practice-selection";
import { createQbankProgressMatcher, qbankQuestionProgressIds, type QbankProgressFilter } from "@/lib/qbank-progress-filter";
import { QBANK_ROUND_DEFAULT_MINUTES, QBANK_ROUND_MAX_MINUTES, readRoundLimitMinutes } from "@/lib/qbank-round-timer";
import { loadQbankProgressViewResetAt, loadQbankState, QBANK_CHANGE_EVENT, type QbankState } from "@/lib/qbank-store";

export function PracticeStartControls({ total, questions, filters, exam = false, round = false, label, appearance = "default", topControlsTarget }: {
  total: number; questions: PracticeIndex[]; filters: PracticeFilters; exam?: boolean; round?: boolean; label?: string;
  appearance?: "default" | "chat"; topControlsTarget?: HTMLDivElement | null;
}) {
  const [count, setCount] = useState(() => String(total));
  const [progressFilter, setProgressFilter] = useState<QbankProgressFilter>("all");
  const [progressState, setProgressState] = useState<Pick<QbankState, "progress" | "wrongIds">>({ progress: {}, wrongIds: [] });
  const [resetAt, setResetAt] = useState<string | null>(null);
  const [timeLimitEnabled, setTimeLimitEnabled] = useState(false);
  const [timeLimit, setTimeLimit] = useState(String(QBANK_ROUND_DEFAULT_MINUTES));
  useEffect(() => {
    const refresh = () => {
      setProgressState(loadQbankState());
      setResetAt(loadQbankProgressViewResetAt());
    };
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);
  const matchesProgress = useMemo(() => createQbankProgressMatcher(progressState, progressFilter, resetAt), [progressState, progressFilter, resetAt]);
  const available = progressFilter === "all" ? total : questions.filter(question => matchesProgress(qbankQuestionProgressIds(question))).length;
  const valid = available > 0 && /^\d+$/.test(count) && Number(count) >= 1 && Number(count) <= available;
  const timed = round && timeLimitEnabled;
  const minutes = timed ? readRoundLimitMinutes(timeLimit) : undefined;
  const canStart = valid && (!timed || minutes !== undefined);
  const href = (ordered: boolean) => {
    const params = new URLSearchParams({ mode: ordered ? "practice-book" : "selection", practiceOnly: "1", count, practiceSeries: (filters.series ?? []).join(","), practiceDepartments: (filters.departments ?? []).join(","), practiceSpecialties: filters.specialties.join(","), practiceYears: filters.years.join(","), practiceBooks: filters.books.join(",") });
    if (round || ordered) params.set("practiceExam", round ? selectedPracticeExamKey(filters) ?? "" : "");
    if (progressFilter !== "all") params.set("progress", progressFilter);
    if (exam) params.set("exam", "1");
    if (minutes !== undefined) {
      params.set("practiceRound", "1");
      params.set("timeLimit", String(minutes));
    }
    return `/review/qbank/session?${params}`;
  };
  return <QbankStartBar
    label={label ? `${label} 실전문제 시작` : "실전문제 시작"}
    summary={`${progressFilter === "wrong" ? "미해결 오답" : progressFilter === "unattempted" ? "미풀이" : "선택"} ${available.toLocaleString()}문항`}
    count={count}
    max={available}
    onCountChange={setCount}
    disabled={available === 0}
    error={!valid && available > 0 ? `1~${available.toLocaleString()} 사이의 정수를 입력하세요.` : undefined}
    appearance={appearance}
    topControlsTarget={topControlsTarget}
    options={<><QbankProgressFilters value={progressFilter} onChange={next => {
      const matchesNext = createQbankProgressMatcher(progressState, next, resetAt);
      const remaining = questions.filter(question => matchesNext(qbankQuestionProgressIds(question))).length;
      if (remaining > 0 && (Number(count) > remaining || Number(count) < 1)) setCount(String(remaining));
      setProgressFilter(next);
    }} />
    {round && <label className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap">
      <input type="checkbox" disabled={total === 0} checked={timeLimitEnabled} onChange={event => setTimeLimitEnabled(event.target.checked)} className="size-3.5 accent-teal-600" />제한시간 사용
    </label>}
    {timed && <label className="inline-flex items-center gap-1 whitespace-nowrap">
      <span className="sr-only">제한시간</span>
      <input type="number" min="1" max={QBANK_ROUND_MAX_MINUTES} step="1" inputMode="numeric" value={timeLimit} onChange={event => setTimeLimit(event.target.value)} aria-invalid={minutes === undefined} className="h-9 w-14 rounded-md border border-slate-300 bg-white px-1.5 text-sm tabular-nums" />분
    </label>}
    {timed && minutes === undefined && <span role="status" className="text-rose-700">1~{QBANK_ROUND_MAX_MINUTES}분을 입력하세요.</span>}</>}
    actions={[
      { label: "순서대로 시작", topLabel: "순서대로", href: canStart ? href(true) : undefined },
      { label: "섞어서 시작", topLabel: "섞어서", href: canStart ? href(false) : undefined },
    ]}
  />;
}
