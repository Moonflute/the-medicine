"use client";

import type { QbankProgressFilter } from "@/lib/qbank-progress-filter";

export function QbankProgressFilters({ value, onChange }: {
  value: QbankProgressFilter;
  onChange: (value: QbankProgressFilter) => void;
}) {
  return <div role="group" aria-label="풀이 상태 필터" className="inline-flex items-center gap-2.5">
    {([['unattempted', '미풀이만'], ['wrong', '오답만']] as const).map(([filter, label]) => <label key={filter} className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap" title={filter === "wrong" ? "선택 범위의 미해결 오답만 풀기" : "선택 범위의 현재 회독 미풀이만 풀기"}>
      <input type="checkbox" checked={value === filter} onChange={event => onChange(event.target.checked ? filter : "all")} className="size-3.5 accent-teal-600" />{label}
    </label>)}
  </div>;
}
