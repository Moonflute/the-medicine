"use client";

import { useMemo, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric, VariableDisclosure } from "@/components/physiology-ui";
import { EndocrineP5Canvas } from "@/components/endocrine-p5-canvas";
import { calculateEndocrineState, ENDOCRINE_AXES, type EndocrineAxisId, type EndocrinePreset } from "@/lib/endocrine-model";

const AXES: Array<{ id: EndocrineAxisId; label: string }> = [
  { id: "thyroid", label: "갑상선 HPT" }, { id: "adrenal", label: "부신 HPA" }, { id: "gonadal", label: "난소 HPG" },
  { id: "growth", label: "GH–IGF-1" }, { id: "adh", label: "ADH–삼투" }, { id: "pancreatic", label: "Glucose–Insulin" },
];
const PRESET_IDS: EndocrinePreset[] = ["normal", "primary-failure", "primary-excess", "pituitary-failure", "exogenous"];

export function EndocrineFeedbackLab() {
  const [axis, setAxis] = useState<EndocrineAxisId>("thyroid"); const [preset, setPreset] = useState<EndocrinePreset>("normal");
  const [stimulus, setStimulus] = useState(100); const [feedback, setFeedback] = useState(100); const [exogenous, setExogenous] = useState(150); const [open, setOpen] = useState(false);
  const definition = ENDOCRINE_AXES[axis]; const state = useMemo(() => calculateEndocrineState(axis, preset, stimulus, feedback, exogenous), [axis, preset, stimulus, feedback, exogenous]);
  const selectAxis = (next: EndocrineAxisId) => { setAxis(next); setPreset("normal"); setOpen(false); setStimulus(100); setFeedback(100); };
  const selectPreset = (next: EndocrinePreset) => { setPreset(next); setOpen(next === "exogenous"); };
  return <main className="space-y-5">
    <PhysiologyHeader title="내분비 호르몬 축" description="실제 신체 위치의 호르몬 기관과 표적기관을 보면서 2–3단계 신호 전달, 측정 수치와 최종 산물의 음성 피드백이 질환별로 어떻게 바뀌는지 비교합니다." />
    <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4" aria-label="내분비 축">{AXES.map((item) => <button type="button" key={item.id} onClick={() => selectAxis(item.id)} className={`rounded-md border px-3 py-2 text-xs font-semibold ${axis === item.id ? "border-teal-700 bg-teal-700 text-white" : "border-slate-300 bg-white"}`}>{item.label}</button>)}</div>
    <div className="flex flex-wrap gap-2" aria-label={`${definition.title} 임상 프리셋`}>{PRESET_IDS.map((id) => <button type="button" key={id} onClick={() => selectPreset(id)} className={`rounded-md border px-3 py-2 text-xs font-semibold ${preset === id ? "border-amber-700 bg-amber-700 text-white" : "border-slate-300 bg-white"}`}>{definition.presetLabels[id]}</button>)}</div>
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_370px]">
      <CanvasFrame legend={<div className="flex flex-wrap gap-x-5 gap-y-2"><span><b className="text-teal-700">●</b> 1단계 상위 자극</span><span><b className="text-amber-700">●</b> 2단계 전달 호르몬</span><span><b className="text-rose-700">●</b> 3단계 표적기관 산물</span><span><b className="text-violet-700">T</b> 최종 산물의 억제 피드백</span></div>}><EndocrineP5Canvas state={state} /></CanvasFrame>
      <ModelPanel title={`${definition.title} 변수`}><div className="space-y-4">
        <PhysiologyControl label="생리적 입력 자극" value={stimulus} min={30} max={170} step={1} displayValue={`${stimulus}%`} hint="스트레스, 삼투질농도, 영양·성장·생식 신호의 상대적 입력입니다." onChange={setStimulus} />
        <PhysiologyControl label="Feedback sensitivity" value={feedback} min={30} max={170} step={1} displayValue={`${feedback}%`} hint="최종 산물이 상위 단계에 가하는 억제 민감도입니다." onChange={setFeedback} />
        <VariableDisclosure open={open} onToggle={setOpen} summary={`외인성 ${exogenous}%`}><PhysiologyControl label="외인성 최종 호르몬·작용" value={exogenous} min={0} max={180} step={1} displayValue={`${exogenous}%`} hint="외인성 프리셋에서 최종 효과와 상위 축 억제를 조절합니다." onChange={setExogenous} /></VariableDisclosure>
      </div></ModelPanel>
    </section>
    <section className="grid rounded-md border border-slate-300 bg-[#f8faf9] py-4 sm:grid-cols-3">{state.stages.map((stage) => <PhysiologyMetric key={stage.id} label={`${stage.order} · ${stage.organLabel}`} value={`${stage.hormone} ${stage.value.toFixed(stage.value < 10 ? 1 : 0)} ${stage.unit}`} status={stage.status === "low" ? "감소" : stage.status === "high" ? "증가" : "기준 상태"} />)}</section>
    <section className="rounded-md border border-amber-200 bg-amber-50 p-5"><div className="flex items-center gap-2 text-sm font-bold"><RefreshCcw className="h-4 w-4" />{state.pattern}</div><p className="mt-2 text-sm leading-6 text-slate-700">{state.explanation}</p><div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">{state.edges.map((edge) => <span key={`${edge.from}-${edge.to}`} className="border-l-2 border-slate-400 pl-2">{state.stages.find((stage) => stage.id === edge.from)?.hormone} {edge.kind === "inhibit" ? "억제" : "자극"} → {state.stages.find((stage) => stage.id === edge.to)?.hormone}</span>)}</div></section>
    <p className="text-xs text-slate-500">대표 정상값을 기준으로 방향성을 설명하는 교육 모델입니다. 실제 해석은 채혈 시각, 월경주기, 결합단백, dynamic test, 약물과 검사실 기준범위를 함께 확인해야 합니다.</p>
  </main>;
}
