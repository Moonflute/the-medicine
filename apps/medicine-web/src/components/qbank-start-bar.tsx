"use client";

import Link from "next/link";
import { useId, type ReactNode } from "react";
import { createPortal } from "react-dom";

type StartAction = { label: string; href?: string };

export function QbankStartBar({ label, summary, count, max, onCountChange, disabled, error, options, actions, topActionsTarget, appearance = "default" }: {
  label: string;
  summary: string;
  count: string;
  max: number;
  onCountChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  options?: ReactNode;
  actions: StartAction[];
  topActionsTarget?: HTMLDivElement | null;
  appearance?: "default" | "chat";
}) {
  const errorId = useId();
  const chat = appearance === "chat";
  const actionClass = chat ? "chat-qbank-start whitespace-nowrap" : "primary-action min-h-9 px-2.5 py-1 text-xs whitespace-nowrap disabled:opacity-40";
  const actionButtons = <div className={`flex shrink-0 gap-1.5${chat ? " chat-qbank-start-actions" : ""}`} role="group" aria-label={label}>
    {actions.map(action => action.href
      ? <Link key={action.label} href={action.href} className={actionClass} prefetch={false}>{action.label}</Link>
      : <button key={action.label} type="button" disabled className={actionClass}>{action.label}</button>)}
  </div>;

  return <section className={chat ? "chat-qbank-selection-footer" : "mt-3 rounded-lg border border-teal-200 bg-teal-50/50 px-2.5 py-2 sm:px-3"} aria-label={label}>
    {topActionsTarget ? createPortal(actionButtons, topActionsTarget) : null}
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 sm:gap-x-3">
      <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 text-xs font-medium sm:gap-x-3">
        <span role="status" className="whitespace-nowrap tabular-nums">{summary}</span>
        <label className="inline-flex items-center gap-1 whitespace-nowrap">
          문항 수
          <input type="number" min="1" max={Math.max(1, max)} step="1" inputMode="numeric" disabled={disabled} value={count} onChange={event => onCountChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className="h-9 w-12 rounded-md border border-slate-300 bg-white px-1.5 text-sm tabular-nums [appearance:textfield] sm:w-16 [&::-webkit-inner-spin-button]:appearance-none" />
        </label>
        {options}
      </div>
      {actionButtons}
    </div>
    {error ? <p id={errorId} role="status" className="mt-1.5 text-xs text-slate-600">{error}</p> : null}
  </section>;
}
