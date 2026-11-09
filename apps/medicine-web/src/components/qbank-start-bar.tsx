"use client";

import Link from "next/link";
import { useId, type ReactNode } from "react";
import { createPortal } from "react-dom";

type StartAction = { label: string; topLabel?: string; href?: string };

export function QbankStartBar({ label, summary, count, max, onCountChange, disabled, error, options, actions, topControlsTarget, appearance = "default" }: {
  label: string;
  summary: string;
  count: string;
  max?: number;
  onCountChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  options?: ReactNode;
  actions: StartAction[];
  topControlsTarget?: HTMLDivElement | null;
  appearance?: "default" | "chat";
}) {
  const errorId = useId();
  const chat = appearance === "chat";
  const actionClass = chat ? "chat-qbank-start whitespace-nowrap" : "primary-action min-h-9 px-2.5 py-1 text-xs whitespace-nowrap disabled:opacity-40";
  const fillAllCount = !disabled && max !== undefined && max > 0 ? max : undefined;
  const countControls = (compact: boolean) => <div className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
    <label className="inline-flex items-center gap-1">
      <span className={compact ? "sr-only sm:not-sr-only" : undefined}>문항 수</span>
      <input type="number" min="1" max={max === undefined ? undefined : Math.max(1, max)} step="1" inputMode="numeric" disabled={disabled} value={count} onChange={event => onCountChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className="h-9 w-12 rounded-md border border-slate-300 bg-white px-1.5 text-sm tabular-nums [appearance:textfield] sm:w-16 [&::-webkit-inner-spin-button]:appearance-none" />
    </label>
    <button type="button" disabled={fillAllCount === undefined} onClick={() => {
      if (fillAllCount !== undefined) onCountChange(String(fillAllCount));
    }} aria-label="선택 범위 전체 문항 수 입력" title={fillAllCount === undefined ? undefined : `선택 범위 ${fillAllCount.toLocaleString()}문항 입력`} className="secondary-action min-h-9 px-1.5 py-1 text-xs disabled:opacity-40 sm:px-2">전체</button>
  </div>;
  const actionButtons = (compact: boolean) => <div className={`flex flex-wrap gap-1.5${chat ? " chat-qbank-start-actions" : ""}`} role="group" aria-label={label}>
    {actions.map(action => {
      const text = compact ? action.topLabel ?? action.label : action.label;
      const key = action.topLabel ?? action.label;
      return action.href
        ? <Link key={key} href={action.href} className={actionClass} prefetch={false}>{text}</Link>
        : <button key={key} type="button" disabled className={actionClass}>{text}</button>;
    })}
  </div>;

  return <section className={chat ? "chat-qbank-selection-footer" : "mt-3 rounded-lg border border-teal-200 bg-teal-50/50 px-2.5 py-2 sm:px-3"} aria-label={label}>
    {topControlsTarget ? createPortal(<div className={`flex flex-wrap items-center justify-end gap-1.5 text-xs font-medium sm:gap-2${chat ? " chat-qbank-inline-start" : ""}`}>
      {countControls(true)}
      {actionButtons(true)}
    </div>, topControlsTarget) : null}
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 sm:gap-x-3">
      <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 text-xs font-medium sm:gap-x-3">
        <span role="status" className="whitespace-nowrap tabular-nums">{summary}</span>
        {countControls(false)}
        {options}
      </div>
      {actionButtons(false)}
    </div>
    {error ? <p id={errorId} role="status" className="mt-1.5 text-xs text-slate-600">{error}</p> : null}
  </section>;
}
