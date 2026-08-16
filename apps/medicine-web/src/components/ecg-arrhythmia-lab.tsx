"use client";

import { useMemo, useState } from "react";
import { Activity } from "lucide-react";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric } from "@/components/physiology-ui";
import { EcgP5Canvas } from "@/components/ecg-p5-canvas";
import { calculateEcgState, type RhythmId } from "@/lib/ecg-model";

const RHYTHMS: Array<{ id: RhythmId; label: string; rate: number }> = [
  { id: "sinus", label: "동율동", rate: 70 }, { id: "brady", label: "동성 서맥", rate: 45 }, { id: "tachy", label: "동성 빈맥", rate: 125 },
  { id: "af", label: "심방세동", rate: 115 }, { id: "flutter", label: "심방조동", rate: 150 }, { id: "av1", label: "1도 AV block", rate: 70 },
  { id: "mobitz1", label: "Mobitz I", rate: 75 }, { id: "mobitz2", label: "Mobitz II", rate: 70 }, { id: "complete", label: "완전 방실차단", rate: 40 }, { id: "vt", label: "심실빈맥", rate: 165 },
];

export function EcgArrhythmiaLab() {
  const [rhythm, setRhythm] = useState<RhythmId>("sinus"); const [rate, setRate] = useState(70); const state = useMemo(() => calculateEcgState(rhythm, rate), [rhythm, rate]);
  const pick = (id: RhythmId) => { const selected = RHYTHMS.find((item) => item.id === id)!; setRhythm(id); setRate(selected.rate); };
  const atrialEvents = state.events.filter((event) => event.type === "atrial"); const dropped = atrialEvents.filter((event) => !event.conducted).length;
  return <main className="space-y-5">
    <PhysiologyHeader title="ECG와 부정맥" description="리듬별 실제 P파와 QRS 사건을 생성해 SA node, AV node, His-Purkinje 전도와 표면 ECG를 연결하고, 전도된 QRS 뒤에만 기계적 맥박이 생기는 과정을 확인합니다." links={[{ href: "/interactive/cardiac-hemodynamics", label: "심장 혈역학" }]} />
    <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">{RHYTHMS.map((item) => <button type="button" key={item.id} onClick={() => pick(item.id)} className={`rounded-md border px-3 py-2 text-xs font-semibold ${rhythm === item.id ? "border-violet-700 bg-violet-700 text-white" : "border-slate-300 bg-white"}`}>{item.label}</button>)}</div>
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
      <CanvasFrame legend={<div className="flex flex-wrap gap-x-5 gap-y-2"><span><b className="text-amber-700">●</b> 전도된 심방 활성</span><span><b className="text-rose-700">●</b> 차단된 P파</span><span><b className="text-violet-700">●</b> QRS와 뒤따르는 맥박</span><span>moving strip = 최근 6초</span></div>}><EcgP5Canvas state={state} /></CanvasFrame>
      <ModelPanel title="리듬 변수"><PhysiologyControl label="목표 심실 반응" value={rate} min={30} max={190} step={1} displayValue={`${state.ventricularRate}/min`} hint="리듬에 따라 AV 전도비, 탈락 박동 또는 escape rate 제한을 적용합니다." onChange={setRate} /><div className="mt-6 text-sm leading-6 text-slate-700"><b>{state.conduction}</b><p className="mt-3">{state.perfusion}</p><p className="mt-3 text-xs text-slate-500">8초 모델 창: 심방 사건 {atrialEvents.length}개 · 차단 {dropped}개 · QRS {state.events.filter((event) => event.type === "ventricular").length}개</p></div></ModelPanel>
    </section>
    <section className="grid rounded-md border border-slate-300 bg-[#f8faf9] py-4 sm:grid-cols-2 xl:grid-cols-4"><PhysiologyMetric label="Atrial rate" value={`${state.atrialRate}/min`} status="심방 활성" /><PhysiologyMetric label="Ventricular rate" value={`${state.ventricularRate}/min`} status="유효 QRS" /><PhysiologyMetric label="PR" value={state.pr} status="AV conduction" /><PhysiologyMetric label="QRS" value={state.qrs} status={state.regularity} /></section>
    <section className="rounded-md border border-violet-200 bg-violet-50 p-5"><div className="flex items-center gap-2 text-sm font-bold"><Activity className="h-4 w-4" />전기-기계 연결</div><p className="mt-2 text-sm leading-6 text-slate-700">P파는 심방 탈분극, QRS는 심실 탈분극을 나타냅니다. Mobitz block에서 차단된 P파는 AV node 아래로 진행하지 않고, 완전 방실차단에서는 심방과 심실 사건이 독립적으로 생성되며, 심실 사건 뒤에만 맥박 애니메이션이 나타납니다.</p></section>
  </main>;
}
