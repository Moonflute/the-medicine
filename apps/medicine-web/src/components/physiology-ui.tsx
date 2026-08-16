"use client";

import Link from "next/link";
import { Activity, ArrowRight, ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";

export function PhysiologyHeader({ title, description, links = [] }: { title: string; description: string; links?: Array<{ href: string; label: string }> }) {
  return (
    <header className="border-b border-slate-200 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase text-teal-800"><Activity className="h-4 w-4" />Interactive physiology</div>
        <div className="flex flex-wrap gap-2">{links.map((link) => <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-800">{link.label}<ArrowRight className="h-4 w-4" /></Link>)}</div>
      </div>
      <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
    </header>
  );
}

export function PresetStrip({ presets, onSelect, onReset }: { presets: Array<{ id: string; label: string }>; onSelect: (id: string) => void; onReset: () => void }) {
  return (
    <section aria-label="생리 상태 프리셋" className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-4">
      <span className="mr-2 text-xs font-semibold uppercase text-slate-500">Clinical states</span>
      {presets.map((preset) => <button key={preset.id} type="button" onClick={() => onSelect(preset.id)} className="rounded-md border border-slate-300 bg-[#f7f9f8] px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-teal-500 hover:bg-white hover:text-teal-900">{preset.label}</button>)}
      <button type="button" onClick={onReset} className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-800" aria-label="정상 상태로 초기화" title="정상 상태로 초기화"><RotateCcw className="h-4 w-4" /></button>
    </section>
  );
}

export function PhysiologyControl({ label, value, min, max, step, displayValue, hint, onChange }: { label: string; value: number; min: number; max: number; step: number; displayValue: string; hint: string; onChange: (value: number) => void }) {
  return (
    <label className="block border-b border-slate-200 pb-3 last:border-0 last:pb-0 sm:pb-4">
      <span className="flex items-center justify-between gap-3 text-sm font-bold text-slate-900"><span>{label}</span><span className="font-mono text-teal-800">{displayValue}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-2 h-2 w-full cursor-pointer accent-teal-700 sm:mt-3" />
      <span className="mt-2 hidden text-xs leading-5 text-slate-500 sm:block">{hint}</span>
    </label>
  );
}

export function VariableDisclosure({ open, onToggle, summary, children }: { open: boolean; onToggle: (open: boolean) => void; summary: string; children: ReactNode }) {
  return (
    <details open={open} onToggle={(event) => onToggle(event.currentTarget.open)} className="group mt-4 border-t border-slate-300">
      <summary className="flex cursor-pointer list-none items-center gap-2 py-3 text-sm font-semibold text-slate-800 marker:content-none"><SlidersHorizontal className="h-4 w-4 text-teal-700" /><span>상세 변수</span><span className="ml-auto hidden font-mono text-[11px] font-normal text-slate-500 sm:inline">{summary}</span><ChevronDown className="ml-auto h-4 w-4 text-slate-500 transition group-open:rotate-180 sm:ml-0" /></summary>
      <div className="space-y-4 pb-2 pt-1">{children}</div>
    </details>
  );
}

export function PhysiologyMetric({ label, value, status }: { label: string; value: string; status: string }) {
  return <div className="min-w-0 border-l border-slate-300 px-4 py-1 first:border-l-0"><div className="text-[11px] font-semibold uppercase text-slate-500">{label}</div><div className="mt-1 font-mono text-lg font-semibold tabular-nums text-slate-950">{value}</div><div className="mt-1 text-xs text-slate-600">{status}</div></div>;
}

export function ModelPanel({ eyebrow = "Model inputs", title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return <aside className="rounded-md border border-slate-300 bg-[#f8faf9] p-5 shadow-sm"><div className="mb-5"><div className="text-[11px] font-semibold uppercase text-slate-500">{eyebrow}</div><h2 className="text-base font-semibold text-slate-950">{title}</h2></div>{children}</aside>;
}

export function CanvasFrame({ children, legend }: { children: ReactNode; legend: ReactNode }) {
  return <div className="min-w-0 overflow-hidden rounded-md border border-slate-300 bg-[#eef2f1] shadow-sm">{children}<div className="border-t border-slate-300 bg-[#f8faf9] px-4 py-3 text-xs leading-5 text-slate-600">{legend}</div></div>;
}
