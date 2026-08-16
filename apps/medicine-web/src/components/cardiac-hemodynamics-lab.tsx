"use client";

import { useMemo, useState } from "react";
import { HeartPulse } from "lucide-react";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric, PresetStrip, VariableDisclosure } from "@/components/physiology-ui";
import { HemodynamicsP5Canvas } from "@/components/hemodynamics-p5-canvas";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { calculateHemodynamics, type HemodynamicsInputs } from "@/lib/hemodynamics-model";

const NORMAL: HemodynamicsInputs = { preload: 100, afterload: 100, contractility: 100, heartRate: 70 };
const PRESETS = [
  { id: "normal", label: "정상", values: NORMAL },
  { id: "hemorrhage", label: "출혈", values: { preload: 55, afterload: 120, contractility: 115, heartRate: 115 } },
  { id: "hypertension", label: "고혈압", values: { ...NORMAL, afterload: 155 } },
  { id: "failure", label: "수축기 심부전", values: { preload: 135, afterload: 115, contractility: 55, heartRate: 95 } },
  { id: "exercise", label: "운동", values: { preload: 125, afterload: 80, contractility: 145, heartRate: 145 } },
];

export function CardiacHemodynamicsLab() {
  const { inputs, update, animateTo } = useAnimatedModel(NORMAL); const state = useMemo(() => calculateHemodynamics(inputs), [inputs]); const [open, setOpen] = useState(false);
  return <main className="space-y-5">
    <PhysiologyHeader title="심장 혈역학" description="실제 심장 절개도에서 P파와 QRS, 심방·심실 수축, 판막 개폐와 혈류가 같은 심주기 위에서 움직이며 전부하·후부하·수축력 변화가 압력-용적 고리로 이어지는 과정을 확인합니다." links={[{ href: "/interactive/ecg-arrhythmia", label: "ECG와 부정맥" }]} />
    <PresetStrip presets={PRESETS} onSelect={(id) => animateTo(PRESETS.find((preset) => preset.id === id)!.values)} onReset={() => animateTo(NORMAL)} />
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_370px]">
      <CanvasFrame legend={<div className="flex flex-wrap gap-x-5 gap-y-2"><span><b className="text-slate-600">●</b> 우심계 정맥혈</span><span><b className="text-rose-700">●</b> 좌심계 산소화 혈류</span><span>녹색 판막 = 열림 · 적색 = 닫힘</span><span>황색 점 = SA→AV→His-Purkinje 전도</span></div>}><HemodynamicsP5Canvas state={state} /></CanvasFrame>
      <ModelPanel title="혈역학 변수"><div className="space-y-4">
        <PhysiologyControl label="Preload" value={inputs.preload} min={40} max={160} step={1} displayValue={`${inputs.preload.toFixed(0)}%`} hint="정맥 환류, 충만 입자 수, EDV와 심실 이완기 크기를 함께 바꿉니다." onChange={(value) => update("preload", value)} />
        <PhysiologyControl label="Afterload" value={inputs.afterload} min={50} max={180} step={1} displayValue={`${inputs.afterload.toFixed(0)}%`} hint="동맥 압력과 ESV를 높이고 같은 수축력에서 박출 흐름을 제한합니다." onChange={(value) => update("afterload", value)} />
        <PhysiologyControl label="Contractility" value={inputs.contractility} min={35} max={170} step={1} displayValue={`${inputs.contractility.toFixed(0)}%`} hint="심실 수축 진폭, ESV, EF와 peak aortic flow를 함께 바꿉니다." onChange={(value) => update("contractility", value)} />
        <VariableDisclosure open={open} onToggle={setOpen} summary={`HR ${inputs.heartRate.toFixed(0)} · filling ${state.fillingTimeMs.toFixed(0)} ms`}><PhysiologyControl label="Heart rate" value={inputs.heartRate} min={35} max={180} step={1} displayValue={`${inputs.heartRate.toFixed(0)}/min`} hint="전체 전도·ECG·수축 주기 속도와 이완기 충만 시간을 바꿉니다." onChange={(value) => update("heartRate", value)} /></VariableDisclosure>
      </div></ModelPanel>
    </section>
    <section aria-label="혈역학 계산 결과" className="grid rounded-md border border-slate-300 bg-[#f8faf9] py-4 sm:grid-cols-2 xl:grid-cols-6"><PhysiologyMetric label="EDV" value={`${state.edv.toFixed(0)} mL`} status="이완기말 용적" /><PhysiologyMetric label="ESV" value={`${state.esv.toFixed(0)} mL`} status="수축기말 용적" /><PhysiologyMetric label="SV / EF" value={`${state.strokeVolume.toFixed(0)} mL · ${state.ejectionFraction.toFixed(0)}%`} status="박출 성능" /><PhysiologyMetric label="CO" value={`${state.cardiacOutput.toFixed(1)} L/min`} status="심박출량" /><PhysiologyMetric label="BP / MAP" value={`${state.systolicPressure.toFixed(0)}/${state.diastolicPressure.toFixed(0)} · ${state.meanArterialPressure.toFixed(0)}`} status="mmHg" /><PhysiologyMetric label="LVEDP" value={`${state.lvEndDiastolicPressure.toFixed(0)} mmHg`} status="충만압 추정" /></section>
    <section className="rounded-md border border-rose-200 bg-rose-50 p-5" aria-live="polite"><div className="flex items-center gap-2 text-sm font-bold"><HeartPulse className="h-4 w-4" />Current pattern</div><h2 className="mt-2 text-xl font-bold">{state.pattern}</h2><p className="mt-2 text-sm leading-6 text-slate-700">Peak aortic flow {state.peakAorticFlow.toFixed(0)} mL/s, 이완기 충만 시간 {state.fillingTimeMs.toFixed(0)} ms입니다. 설정값 변화가 심장 그림, 혈류 입자, 판막과 pressure-volume loop에 동시에 반영됩니다.</p></section>
    <p className="text-xs text-slate-500">단순화된 좌심실 lumped-parameter 교육 모델입니다. 실제 환자의 심실 순응도, 판막질환, 부정맥, 혈관저항과 침습 혈역학 측정을 대체하지 않습니다.</p>
  </main>;
}
