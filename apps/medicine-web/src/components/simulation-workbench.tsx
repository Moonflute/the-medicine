"use client";
import { updateSimulationClock } from "@/lib/simulation-clock";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
import { advanceSimulation, simulationPhase, type SimulationClock } from "@/lib/simulation-clock";

const ClockContext = createContext<RefObject<SimulationClock> | null>(null);
const DrawContext = createContext<Set<() => void> | null>(null);
export function useSimulationClock() {
  const clock = useContext(ClockContext);
  if (!clock) throw new Error("Simulation must be inside SimulationWorkbench");
  return clock;
}

export function SimulationWorkbench({ children }: { children: ReactNode }) {
  const clock = useRef<SimulationClock>({ seconds: 0, playing: true, speed: 0.5, period: 8, reducedMotion: false });
  const [drawers] = useState(() => new Set<() => void>());
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => { updateSimulationClock(clock, {reducedMotion: media.matches}); if (media.matches) updateSimulationClock(clock, {playing: false}); };
    onMotion(); media.addEventListener("change", onMotion);
    let frame = 0; let last = performance.now();
    const tick = (now: number) => { advanceSimulation(clock.current, document.hidden ? 0 : (now - last) / 1000); last = now; if (!document.hidden) drawers.forEach((draw) => draw()); frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); media.removeEventListener("change", onMotion); };
  }, [drawers]);
  return <ClockContext.Provider value={clock}><DrawContext.Provider value={drawers}><div className="physiology-workbench">{children}</div></DrawContext.Provider></ClockContext.Provider>;
}

export function useSimulationPeriod(period: number) {
  const clock = useSimulationClock();
  useEffect(() => { const phase = simulationPhase(clock.current); updateSimulationClock(clock, {period: period}); updateSimulationClock(clock, {seconds: phase * period}); }, [clock, period]);
}

export function PlaybackControls({ label = "기전 애니메이션" }: { label?: string }) {
  const clock = useSimulationClock();
  const [, refresh] = useState(0);
  useEffect(() => { const id = window.setInterval(() => refresh((n) => n + 1), 120); return () => clearInterval(id); }, []);
  const c = clock.current;
  const seek = (seconds: number) => { updateSimulationClock(clock, {playing: false}); updateSimulationClock(clock, {seconds: Math.max(0, seconds)}); refresh((n) => n + 1); };
  return <div className="simulation-playback" role="group" aria-label={label}>
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" className="simulation-primary" onClick={() => { updateSimulationClock(clock, {playing: !c.playing}); refresh((n) => n + 1); }} aria-label={c.playing ? "애니메이션 일시정지" : "애니메이션 재생"}>{c.playing ? <Pause size={16} /> : <Play size={16} />}{c.playing ? "일시정지" : "재생"}</button>
      <button type="button" className="simulation-button" onClick={() => seek(c.seconds - c.period / 40)} aria-label="이전 순간"><SkipBack size={16} /></button>
      <button type="button" className="simulation-button" onClick={() => seek(c.seconds + c.period / 40)} aria-label="다음 순간"><SkipForward size={16} /></button>
      <button type="button" className="simulation-button" onClick={() => seek(0)} aria-label="애니메이션 처음으로"><RotateCcw size={16} /></button>
      <label className="ml-auto flex items-center gap-2 text-xs font-semibold">재생 속도<select aria-label="애니메이션 재생 속도" value={c.speed} onChange={(e) => { updateSimulationClock(clock, {speed: Number(e.target.value)}); refresh((n) => n + 1); }} className="rounded-lg border border-slate-300 bg-white p-2">{[0.25, 0.5, 1, 2].map((speed) => <option key={speed} value={speed}>{speed}×</option>)}</select></label>
    </div>
    <label className="mt-3 flex items-center gap-3 text-xs text-slate-600"><span className="shrink-0">관찰 시점</span><input aria-label="애니메이션 관찰 시점" type="range" min={0} max={1000} value={Math.round(simulationPhase(c) * 1000)} onChange={(e) => seek(Number(e.target.value) / 1000 * c.period)} className="w-full accent-teal-700" /><span className="w-16 shrink-0 font-mono">{(simulationPhase(c) * c.period).toFixed(2)} s</span></label>
    <p className="mt-2 text-xs text-slate-500">멈춘 뒤 시점을 움직여 관찰하세요. 좁은 화면에서는 도해를 좌우로 스크롤할 수 있습니다. 재생 속도는 생리 변수와 별개입니다.</p>
  </div>;
}

export type ComparisonMetric = { label: string; value: number; normal: number; unit: string; digits?: number };
export function MetricComparison({ metrics }: { metrics: ComparisonMetric[] }) {
  const [reference, setReference] = useState<number[] | null>(null);
  return <section className="simulation-comparison" aria-label="기준 상태와 비교">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><h2 className="text-sm font-bold">{reference ? "저장한 상태와 비교" : "정상 모델과 비교"}</h2><div className="flex gap-2"><button className="simulation-button" type="button" onClick={() => setReference(metrics.map((m) => m.value))}>현재 상태를 기준으로</button>{reference && <button className="simulation-button" type="button" onClick={() => setReference(null)}>정상 기준 복원</button>}</div></div>
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{metrics.map((m, index) => { const base = reference?.[index] ?? m.normal; const delta = m.value - base; const digits = m.digits ?? 1; return <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-3"><div className="text-xs font-semibold text-slate-600">{m.label}</div><div className="mt-1 font-mono text-lg font-bold">{m.value.toFixed(digits)} <span className="text-xs font-normal">{m.unit}</span></div><div className="mt-1 text-xs text-slate-500">기준 {base.toFixed(digits)} · <b className="text-teal-800">{Math.abs(delta) < Math.pow(10, -digits) / 2 ? "변화 없음" : `${delta > 0 ? "↑ +" : "↓ "}${delta.toFixed(digits)}`}</b></div></div>; })}</div>
  </section>;
}

export type LearningExperiment = { id: string; title: string; situation: string; question: string; choices: string[]; answer: number; mechanism: string; clinical: string; observe: string };
export function GuidedExperiments({ experiments, onApply }: { experiments: LearningExperiment[]; onApply: (id: string) => void }) {
  const [selected, setSelected] = useState(0); const [answer, setAnswer] = useState<number | null>(null); const [applied, setApplied] = useState(false);
  const experiment = experiments[selected];
  return <section className="guided-experiment" aria-label="예측하고 확인하는 임상 실험">
    <div className="flex flex-wrap items-center gap-3"><div><p className="text-xs font-bold tracking-wider text-teal-700">예측 → 조작 → 해석</p><h2 className="mt-1 text-lg font-bold">임상 상황으로 이해하기</h2></div><select aria-label="학습 실험 선택" className="ml-auto max-w-full rounded-lg border border-slate-300 bg-white p-2 text-sm" value={selected} onChange={(e) => { setSelected(Number(e.target.value)); setAnswer(null); setApplied(false); }}>{experiments.map((item, index) => <option key={item.id} value={index}>{item.title}</option>)}</select></div>
    <p className="mt-3 text-sm leading-6 text-slate-600">{experiment.situation}</p><p className="mt-2 font-semibold">{experiment.question}</p>
    <div className="mt-3 flex flex-wrap gap-2">{experiment.choices.map((choice, index) => <button type="button" key={choice} aria-pressed={answer === index} className={`simulation-button ${answer === index ? "is-selected" : ""}`} onClick={() => setAnswer(index)}>{choice}</button>)}<button type="button" className="simulation-primary" onClick={() => { onApply(experiment.id); setApplied(true); }}>상황 적용 · 확인</button></div>
    {applied && <div className="mt-4 grid gap-3 border-t border-teal-200 pt-4 text-sm leading-6 md:grid-cols-3" aria-live="polite"><div><b className="text-teal-900">{answer === null ? "기전 확인" : answer === experiment.answer ? "예측이 맞았습니다" : "이 연결을 다시 보세요"}</b><p>{experiment.mechanism}</p></div><div><b className="text-teal-900">도해에서 볼 것</b><p>{experiment.observe}</p></div><div><b className="text-teal-900">임상에서 연결할 것</b><p>{experiment.clinical}</p></div></div>}
  </section>;
}

export function useClockRedraw(instance: RefObject<{ redraw: () => void } | null>) {
  const clock = useSimulationClock();
  const drawers = useContext(DrawContext);
  useEffect(() => {
    let previous = -1;
    const draw = () => {
      if (document.hidden || !instance.current || previous === clock.current.seconds) return;
      previous = clock.current.seconds; instance.current.redraw();
    };
    drawers?.add(draw);
    return () => { drawers?.delete(draw); };
  }, [clock, instance, drawers]);
  return clock;
}
