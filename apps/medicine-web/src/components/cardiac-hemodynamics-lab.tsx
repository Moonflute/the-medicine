"use client";
import { LabWorkspace, FittedDiagram, LabPlayback, LabMetric, LabReferenceControls, useLabReference } from "@/components/clinical-lab-workspace";

import { GuidedExperiments, useSimulationPeriod } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { useSimulationClock } from "@/components/simulation-workbench";
import { updateSimulationClock } from "@/lib/simulation-clock";

import { useMemo, useState } from "react";
import { CardiacPhaseInspector } from "@/components/cardiac-phase-inspector";
import { HeartPulse } from "lucide-react";
import { PhysiologyControl } from "@/components/physiology-ui";
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
  const { inputs, update: updateModel, animateTo, transitioning } = useAnimatedModel(NORMAL); const state = useMemo(() => calculateHemodynamics(inputs), [inputs]);
  useSimulationPeriod(60 / inputs.heartRate);
  const [presetId, setPresetId] = useState("normal");
  const {reference,pin,clear}=useLabReference<{inputs:HemodynamicsInputs;presetId:string}>();
  const referenceState=useMemo(()=>reference?calculateHemodynamics(reference.value.inputs):undefined,[reference]);
  const experiments=useLearningExperiments(),clock=useSimulationClock();
  const update = (key: keyof HemodynamicsInputs, value: number) => { setPresetId("custom"); updateModel(key,value); };
  const applyPreset = (id: string) => { const preset = PRESETS.find((p) => p.id === id); if(!preset)return; setPresetId(id); if(id==="normal")clear(); animateTo(preset.values);updateSimulationClock(clock,{seconds:0}); };
  return <LabWorkspace title="심장 혈역학" presets={PRESETS} selected={presetId} onPreset={applyPreset} onReset={()=>applyPreset("normal")}
    comparison={<LabReferenceControls label={reference?.label} busy={transitioning} onPin={()=>pin({inputs:{...inputs},presetId},state.pattern)} onRestore={()=>{if(reference){animateTo(reference.value.inputs,0);setPresetId(reference.value.presetId);}}} onClear={clear}/>}
    controls={<>
        <PhysiologyControl label="Preload" value={inputs.preload} min={40} max={160} step={1} displayValue={`${inputs.preload.toFixed(0)}%`} hint="정맥 환류, 충만 입자 수, EDV와 심실 이완기 크기를 함께 바꿉니다." onChange={(value) => update("preload", value)} />
        <PhysiologyControl label="Afterload" value={inputs.afterload} min={50} max={180} step={1} displayValue={`${inputs.afterload.toFixed(0)}%`} hint="동맥 압력과 ESV를 높이고 같은 수축력에서 박출 흐름을 제한합니다." onChange={(value) => update("afterload", value)} />
        <PhysiologyControl label="Contractility" value={inputs.contractility} min={35} max={170} step={1} displayValue={`${inputs.contractility.toFixed(0)}%`} hint="심실 수축 진폭, ESV, EF와 peak aortic flow를 함께 바꿉니다." onChange={(value) => update("contractility", value)} />
        <PhysiologyControl label="Heart rate" value={inputs.heartRate} min={35} max={180} step={1} displayValue={`${inputs.heartRate.toFixed(0)}/min`} hint="전체 전도·ECG·수축 주기 속도와 이완기 충만 시간을 바꿉니다." onChange={(value) => update("heartRate", value)} />
      </>}
    diagram={<><FittedDiagram width={900} height={650}><HemodynamicsP5Canvas state={state} reference={referenceState} /></FittedDiagram><LabPlayback /></>}
    metrics={<><LabMetric label="EDV" value={state.edv} reference={referenceState?.edv} digits={0} unit="mL" status="이완기말 용적"/><LabMetric label="ESV" value={state.esv} reference={referenceState?.esv} digits={0} unit="mL" status="수축기말 용적"/><LabMetric label="EF" value={state.ejectionFraction} reference={referenceState?.ejectionFraction} digits={0} unit="%" status={"SV "+state.strokeVolume.toFixed(0)+" mL"}/><LabMetric label="CO" value={state.cardiacOutput} reference={referenceState?.cardiacOutput} unit="L/min" status="심박출량"/><LabMetric label="MAP" value={state.meanArterialPressure} reference={referenceState?.meanArterialPressure} digits={0} unit="mmHg" status={"BP "+state.systolicPressure.toFixed(0)+"/"+state.diastolicPressure.toFixed(0)}/><LabMetric label="LVEDP" value={state.lvEndDiastolicPressure} reference={referenceState?.lvEndDiastolicPressure} digits={0} unit="mmHg" status="충만압 추정"/></>} finding={<strong>{state.pattern}</strong>}>

    <CardiacPhaseInspector state={state} />
    <ClinicalScenarioPanel id={presetId}/>
    <GuidedExperiments experiments={experiments} activeScenario={presetId} onApply={applyPreset} />

    <section className="rounded-md border border-rose-200 bg-rose-50 p-5" aria-live="polite"><div className="flex items-center gap-2 text-sm font-bold"><HeartPulse className="h-4 w-4" />현재 입력의 패턴</div><h2 className="mt-2 text-xl font-bold">{state.pattern}</h2><p className="mt-2 text-sm leading-6 text-slate-700">Peak aortic flow {state.peakAorticFlow.toFixed(0)} mL/s, 이완기 충만 시간 {state.fillingTimeMs.toFixed(0)} ms입니다. 설정값 변화가 심장 그림, 혈류 입자, 판막과 pressure-volume loop에 동시에 반영됩니다.</p></section>
    <p className="text-xs text-slate-500">단순화된 좌심실 lumped-parameter 교육 모델입니다. 실제 환자의 심실 순응도, 판막질환, 부정맥, 혈관저항과 침습 혈역학 측정을 대체하지 않습니다.</p>

  </LabWorkspace>;
}
