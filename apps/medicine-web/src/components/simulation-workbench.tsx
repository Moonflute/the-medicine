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
export type ModelSnapshot = { label: string; inputs: Record<string, number | string | boolean> };
export function MetricComparison({ metrics, snapshot, onRestore, onReferenceChange, busy=false }: { metrics: ComparisonMetric[]; snapshot: ModelSnapshot; onRestore: (inputs: ModelSnapshot["inputs"])=>void; onReferenceChange?: (inputs: ModelSnapshot["inputs"]|null)=>void; busy?:boolean }) {
  const [reference, setReference] = useState<{values:number[];snapshot:ModelSnapshot}|null>(null);
  return <section className="simulation-comparison" aria-label="기준 상태와 비교">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><h2 className="text-sm font-bold">{reference ? "저장한 상태와 비교" : "정상 모델과 비교"}</h2><div className="flex flex-wrap gap-2">
      <button className="simulation-button" type="button" disabled={busy} onClick={()=>{setReference({values:metrics.map(m=>m.value),snapshot:{...snapshot,inputs:{...snapshot.inputs}}});onReferenceChange?.(snapshot.inputs);}}>현재 조건 저장</button>
      {reference&&<><button className="simulation-button" type="button" onClick={()=>onRestore(reference.snapshot.inputs)}>저장 조건 복원</button><button className="simulation-button" type="button" onClick={()=>{setReference(null);onReferenceChange?.(null);}}>비교 기준 지우기</button></>}</div></div>
    <p className="mb-3 text-xs leading-5 text-[var(--muted)]">현재: {snapshot.label}{reference&&<><br/>저장: {reference.snapshot.label}</>}{busy&&" · 상태 전환 중에는 저장할 수 없습니다."}</p>
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{metrics.map((m,index)=>{
      const base=reference?.values[index]??m.normal,delta=m.value-base,digits=m.digits??1,max=Math.max(Math.abs(base),Math.abs(m.value),.001);
      return <div key={m.label} className="physiology-card"><div className="text-xs font-semibold">{m.label}</div><div className="mt-1 font-mono text-lg font-bold">{m.value.toFixed(digits)} <span className="text-xs font-normal">{m.unit}</span></div>
        <div className="mt-2 space-y-1" aria-hidden="true"><div className="h-1.5 rounded bg-[var(--muted)]" style={{width:`${Math.abs(base)/max*100}%`}}/><div className="h-1.5 rounded bg-[var(--primary)]" style={{width:`${Math.abs(m.value)/max*100}%`}}/></div>
        <p className="mt-2 text-xs leading-5">기준 {base.toFixed(digits)} {m.unit} · {Math.abs(delta)<Math.pow(10,-digits)/2?"변화 없음":`${delta>0?"↑ +":"↓ "}${delta.toFixed(digits)}`}</p></div>;
    })}</div><p className="mt-2 text-xs text-[var(--muted)]">위 회색: 기준 · 아래 강조색: 현재. 각 지표는 자체 단위로 비교합니다.</p>
  </section>;
}

export type LearningExperiment = { id: string; title: string; situation: string; question: string; choices: string[]; answer: number; mechanism: string; clinical: string; observe: string };
export function GuidedExperiments({ experiments, onApply, activeScenario }: { experiments: LearningExperiment[]; onApply: (id: string) => void; activeScenario:string }) {
  const [selected,setSelected]=useState(0),[answer,setAnswer]=useState<number|null>(null),[applied,setApplied]=useState(false);
  const experiment=experiments[selected]; if(!experiment)return null;
  const current=activeScenario===experiment.id;
  return <section className="guided-experiment" aria-label="예측하고 확인하는 임상 실험">
    <div className="flex flex-wrap items-center gap-3"><div><p className="text-xs font-bold">예측 → 조작 → 해석</p><h2 className="mt-1 text-lg font-bold">임상 상황으로 이해하기</h2></div>
      <select aria-label="학습 실험 선택" className="ml-auto max-w-full p-2 text-sm" value={selected} onChange={e=>{setSelected(Number(e.target.value));setAnswer(null);setApplied(false);}}>{experiments.map((e,i)=><option key={e.id} value={i}>{e.title}</option>)}</select></div>
    <p className="mt-3 font-semibold">{experiment.question}</p>
    <div className="mt-3 flex flex-wrap gap-2">{experiment.choices.map((choice,index)=><button type="button" key={choice} disabled={applied} aria-pressed={answer===index} className="simulation-button" onClick={()=>setAnswer(index)}>{choice}</button>)}
      <button type="button" className="simulation-primary" disabled={answer===null} onClick={()=>{onApply(experiment.id);setApplied(true);}}>{applied?"같은 조건 다시 적용":"상황 적용 · 확인"}</button>
      {applied&&<button type="button" className="simulation-button" onClick={()=>{setApplied(false);setAnswer(null);}}>다시 예측</button>}</div>
    {applied&&!current&&<p role="status" className="scenario-notice mt-4">입력 조건이 바뀌었습니다. 이전 정답 해설은 숨겼습니다. 같은 조건을 다시 적용하거나 새로 예측하세요.</p>}
    {applied&&current&&<div className="mt-4 physiology-learning-grid border-t border-[var(--line)] pt-4 text-sm leading-6" aria-live="polite"><div><b>{answer===experiment.answer?"예측이 맞았습니다":"정답: "+experiment.choices[experiment.answer]}</b><p>{experiment.mechanism}</p></div><div><b>도해에서 볼 것</b><p>{experiment.observe}</p></div><div><b>증상과 임상 연결</b><p>{experiment.clinical}</p></div></div>}
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
