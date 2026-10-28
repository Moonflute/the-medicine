"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { BookOpen, Pause, Play, RotateCcw, X } from "lucide-react";
import { useSimulationClock } from "@/components/simulation-workbench";
import { simulationPhase, updateSimulationClock } from "@/lib/simulation-clock";

// Native modal semantics keep focus, Escape and background interaction consistent.
export function LabDisclosure({ label, children }: { label: string; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  return <><button type="button" className="lab-button" onClick={() => dialog.current?.showModal()}><BookOpen size={14} />{label}</button>
    <dialog ref={dialog} className="lab-dialog" aria-labelledby={titleId} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
      <header><h2 id={titleId}>{label}</h2><button type="button" className="lab-button" aria-label={`${label} 닫기`} onClick={() => dialog.current?.close()}><X size={18} /></button></header>
      <div className="lab-dialog-body">{children}</div>
    </dialog></>;
}

export function LabWorkspace({ title, presets, selected, onPreset, onReset, tools, controls, diagram, metrics, finding, children }: {
  title: string; presets: { id: string; label: string }[]; selected: string; onPreset: (id: string) => void; onReset: () => void;
  tools?: ReactNode; controls: ReactNode; diagram: ReactNode; metrics: ReactNode; finding: ReactNode; children: ReactNode;
}) {
  return <section className="clinical-lab" aria-label={title}>
    <header className="lab-heading"><h1>{title}</h1><div className="lab-toolbar">
      {tools}<label className="lab-preset"><span className="sr-only">임상 상황</span><select aria-label="임상 상황" value={selected} onChange={e => onPreset(e.target.value)}>
        {!presets.some(p => p.id === selected) ? <option value={selected}>직접 조절</option> : null}
        {presets.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
      </select></label><button type="button" className="lab-button" title="정상 상태로 초기화" aria-label="정상 상태로 초기화" onClick={onReset}><RotateCcw size={15} /></button>
      <LabDisclosure label="해석·비교">{children}</LabDisclosure>
    </div></header>
    <div className="lab-body"><div className="lab-diagram">{diagram}</div><aside className="lab-controls" aria-label="모델 조절">{controls}</aside></div>
    <div className="lab-metrics" aria-label="계산 결과">{metrics}</div>
    <div className="lab-finding" aria-live="polite">{finding}</div>
  </section>;
}

export function LabControlTabs({ tabs, value, onChange }: { tabs: { id: string; label: string; content: ReactNode }[]; value?: string; onChange?: (value: string) => void }) {
  const [localSelected, setLocalSelected] = useState(tabs[0].id);
  const selected = value ?? localSelected;
  const setSelected = onChange ?? setLocalSelected;
  const id = useId();
  const current = tabs.find(t => t.id === selected) ?? tabs[0];
  return <><div className="lab-control-tabs" role="tablist" aria-label="조절 항목">
    {tabs.map((t, index) => <button key={t.id} type="button" role="tab" id={`${id}-${t.id}`} aria-selected={current.id === t.id} aria-controls={`${id}-panel`} tabIndex={current.id === t.id ? 0 : -1} onClick={() => setSelected(t.id)} onKeyDown={e => {
      const next = e.key === "ArrowRight" ? (index + 1) % tabs.length : e.key === "ArrowLeft" ? (index + tabs.length - 1) % tabs.length : e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : null;
      if (next === null) return; e.preventDefault(); setSelected(tabs[next].id); document.getElementById(`${id}-${tabs[next].id}`)?.focus();
    }}>{t.label}</button>)}
  </div><div className="lab-control-content" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-${current.id}`}>{current.content}</div></>;
}

// Fit the complete existing canvas to the available stage without cropping it.
export function FittedDiagram({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  const host = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (!host.current) return;
    const observer = new ResizeObserver(([entry]) => setScale(Math.min(entry.contentRect.width / width, entry.contentRect.height / height)));
    observer.observe(host.current); return () => observer.disconnect();
  }, [width, height]);
  return <div className="lab-fit" ref={host}><div style={{ width, height, transform: `translate(-50%, -50%) scale(${scale})` }}>{children}</div></div>;
}

export function LabPlayback() {
  const clock = useSimulationClock();
  const [, redraw] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => redraw(n => n + 1), 150); return () => clearInterval(timer); }, []);
  const c = clock.current;
  return <div className="lab-playback" aria-label="기전 관찰 시점">
    <button type="button" className="lab-button" aria-label={c.playing ? "애니메이션 일시정지" : "애니메이션 재생"} onClick={() => { updateSimulationClock(clock, { playing: !c.playing }); redraw(n => n + 1); }}>{c.playing ? <Pause size={14} /> : <Play size={14} />}</button>
    <input aria-label="관찰 시점" type="range" min={0} max={1000} value={Math.round(simulationPhase(c) * 1000)} onChange={e => { updateSimulationClock(clock, { playing: false, seconds: Number(e.target.value) / 1000 * c.period }); redraw(n => n + 1); }} />
    <select aria-label="애니메이션 속도" value={c.speed} onChange={e => updateSimulationClock(clock, { speed: Number(e.target.value) })}>{[.25, .5, 1, 2].map(s => <option value={s} key={s}>{s}×</option>)}</select>
  </div>;
}
