"use client";

import { PlaybackControls } from "@/components/simulation-workbench";
import Link from "next/link";
import { Activity, ArrowRight, ChevronDown, RotateCcw, SlidersHorizontal, Maximize, Minimize, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function PhysiologyHeader({ title, description, links = [] }: { title: string; description: string; links?: Array<{ href: string; label: string }> }) {
  return (
    <header className="border-b border-slate-200 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase text-teal-800"><Activity className="h-4 w-4" />인터랙티브 생리학</div>
        <div className="flex flex-wrap gap-2">{links.map((link) => <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-800">{link.label}<ArrowRight className="h-4 w-4" /></Link>)}</div>
      </div>
      <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
    </header>
  );
}

export function PresetStrip({ presets, onSelect, onReset, selected }: { selected?: string; presets: Array<{ id: string; label: string }>; onSelect: (id: string) => void; onReset: () => void }) {
  return (
    <section aria-label="생리 상태 프리셋" className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-4">
      <span className="mr-2 text-xs font-semibold uppercase text-slate-500">상태 선택</span>
      {presets.map((preset) => <button key={preset.id} type="button" aria-pressed={selected === preset.id} onClick={() => onSelect(preset.id)} className="rounded-md border border-slate-300 bg-[#f7f9f8] px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-teal-500 hover:bg-white hover:text-teal-900">{preset.label}</button>)}
      <button type="button" onClick={onReset} className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-800" aria-label="정상 상태로 초기화" title="정상 상태로 초기화"><RotateCcw className="h-4 w-4" /></button>
    </section>
  );
}

export function PhysiologyControl({ label, value, min, max, step, displayValue, hint, onChange }: { label: string; value: number; min: number; max: number; step: number; displayValue: string; hint: string; onChange: (value: number) => void }) {
  const id = useId();
  const [draft, setDraft] = useState(String(value));
  const focused = useRef(false);
  const cancelled = useRef(false);
  useEffect(() => { if (!focused.current) setDraft(String(Number(value.toFixed(3)))); }, [value]);
  const commit = () => {
    focused.current = false;
    if (cancelled.current) {cancelled.current=false;setDraft(String(value));return;}
    const parsed = Number(draft);
    if (!draft.trim() || !Number.isFinite(parsed)) { setDraft(String(value)); return; }
    const next = Math.min(max, Math.max(min, Math.round(parsed / step) * step));
    onChange(next); setDraft(String(Number(next.toFixed(3))));
  };
  return <div className="physiology-control">
    <label htmlFor={id} className="flex items-center justify-between gap-3 text-sm font-bold"><span>{label}</span><span className="font-mono">{displayValue}</span></label>
    <div className="mt-2 flex items-center gap-3">
      <input id={id} type="range" min={min} max={max} step={step} value={value} aria-describedby={id+"-hint"} onChange={e=>onChange(Number(e.target.value))} className="min-w-0 flex-1 accent-teal-700" />
      <input type="number" aria-label={label+" 직접 입력"} aria-describedby={id+"-hint"} min={min} max={max} step={step} value={draft} onFocus={()=>{focused.current=true;}} onChange={e=>setDraft(e.target.value)} onBlur={commit} onKeyDown={e=>{if(e.key==="Enter")e.currentTarget.blur();if(e.key==="Escape"){cancelled.current=true;setDraft(String(value));focused.current=false;e.currentTarget.blur();}}} className="physiology-number" />
    </div><p id={id+"-hint"} className="mt-2 text-xs leading-5 text-[var(--muted)]">{hint}</p>
  </div>;
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

export function ModelPanel({ eyebrow = "변수 조절", title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return <aside className="rounded-md border border-slate-300 bg-[#f8faf9] p-5 shadow-sm"><div className="mb-5"><div className="text-[11px] font-semibold uppercase text-slate-500">{eyebrow}</div><h2 className="text-base font-semibold text-slate-950">{title}</h2></div>{children}</aside>;
}

export function CanvasFrame({ children, legend }: { children: ReactNode; legend: ReactNode }) {
  const frame = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState<number>();
  const [fullscreen, setFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [viewError, setViewError] = useState("");
  useEffect(() => {
    const element = frame.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(element);
    const changed = () => setFullscreen(Boolean(document.fullscreenElement?.contains(element)));
    setCanFullscreen(document.fullscreenEnabled);
    document.addEventListener("fullscreenchange", changed);
    return () => { observer.disconnect(); document.removeEventListener("fullscreenchange", changed); };
  }, []);
  const toggleFullscreen = async () => {
    try { setViewError(""); if (document.fullscreenElement) await document.exitFullscreen(); else await (frame.current?.closest(".physiology-lab") as HTMLElement | null)?.requestFullscreen(); } catch { setViewError("이 브라우저에서 전체화면을 열지 못했습니다. 확대 기능을 이용해 주세요."); }
  };
  return <div ref={frame} className="simulation-frame">
    <div className="simulation-view-toolbar"><span className="font-semibold text-slate-800">기전 관찰</span><div className="ml-auto flex items-center gap-2">
      <button type="button" className="simulation-button" aria-label="도해 축소" disabled={zoom <= 1} onClick={() => setZoom((v) => Math.max(1, v - .25))}><ZoomOut size={18} /></button>
      <button type="button" className="simulation-button tabular-nums" aria-label="도해 확대 초기화" onClick={() => setZoom(1)}>{Math.round(zoom * 100)}%</button>
      <button type="button" className="simulation-button" aria-label="도해 확대" disabled={zoom >= 2} onClick={() => setZoom((v) => Math.min(2, v + .25))}><ZoomIn size={18} /></button>
      {canFullscreen && <button type="button" className="simulation-button" onClick={toggleFullscreen} aria-label={fullscreen ? "전체 화면 닫기" : "도해 전체 화면"}>{fullscreen ? <Minimize size={18} /> : <Maximize size={18} />}<span className="hidden sm:inline">{fullscreen ? "돌아가기" : "전체 화면"}</span></button>}
    </div></div>
    <div className="simulation-viewport" tabIndex={0} aria-label="확대 가능한 도해 영역"><div style={{ width: width ? `${width}px` : "100%", zoom }}>{children}</div></div>
    {viewError && <p role="status" className="p-3 text-sm">{viewError}</p>}<PlaybackControls /><div className="simulation-legend">{legend}</div>
  </div>;
}
