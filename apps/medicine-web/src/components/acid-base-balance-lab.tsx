"use client";
import { useMemo, useState } from "react";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric, PresetStrip } from "@/components/physiology-ui";
import { GuidedExperiments, MetricComparison, useSimulationClock } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { AcidBaseP5Canvas, type AcidBaseSimulationView } from "@/components/acid-base-p5-canvas";
import { ACID_BASE_LABELS, calculateAcidBaseState, calculateAnionGap, compensatedInputs, type AcidBaseInputs, type AcidBaseDisorder, type CompensationDuration } from "@/lib/acid-base-model";
import { updateSimulationClock } from "@/lib/simulation-clock";

const NORMAL:AcidBaseInputs={ventilation:100,co2Production:100,bicarbonate:24};
const PRESETS:Array<{id:string;label:string;primary:AcidBaseDisorder;values:AcidBaseInputs}>=[
  {id:"normal",label:"정상",primary:"auto",values:NORMAL},
  {id:"hypoventilation",label:"Hypoventilation",primary:"respiratory-acidosis",values:{...NORMAL,ventilation:55}},
  {id:"hyperventilation",label:"Hyperventilation",primary:"respiratory-alkalosis",values:{...NORMAL,ventilation:155}},
  {id:"bicarbonate-loss",label:"HCO₃⁻ 소실",primary:"metabolic-acidosis",values:{...NORMAL,bicarbonate:14}},
  {id:"bicarbonate-gain",label:"HCO₃⁻ 증가",primary:"metabolic-alkalosis",values:{...NORMAL,bicarbonate:34}},
];
export function AcidBaseBalanceLab(){
  const {inputs,update:change,animateTo,transitioning}=useAnimatedModel(NORMAL);
  const [preset,setPreset]=useState("normal"),[primary,setPrimary]=useState<AcidBaseDisorder>("auto"),[duration,setDuration]=useState<CompensationDuration>("acute"),[compensated,setCompensated]=useState(false);
  const [sodium,setSodium]=useState(140),[chloride,setChloride]=useState(104),[albumin,setAlbumin]=useState(4);
  const clock=useSimulationClock(),experiments=useLearningExperiments();
  const state=useMemo(()=>calculateAcidBaseState(inputs,primary,duration),[inputs,primary,duration]),normal=calculateAcidBaseState(NORMAL);
  const gap=calculateAnionGap(sodium,chloride,inputs.bicarbonate,albumin);
  const update=(key:keyof AcidBaseInputs,value:number)=>{setPreset("custom");setCompensated(false);change(key,value);};
  const apply=(id:string)=>{const next=PRESETS.find(p=>p.id===id);if(!next)return;setPreset(id);setPrimary(next.primary);setDuration("acute");setCompensated(false);animateTo(next.values);updateSimulationClock(clock,{seconds:0});};
  const reset=()=>{apply("normal");setSodium(140);setChloride(104);setAlbumin(4);};
  const compensate=()=>{setPrimary(state.primary);setCompensated(true);animateTo(compensatedInputs(state));};
  const simulation:AcidBaseSimulationView={phase:compensated?(transitioning?"compensating":"compensated"):transitioning?"disturbance":preset==="normal"?"steady":"acute",progress:transitioning?.5:1,cause:state.pattern,primaryChange:ACID_BASE_LABELS[state.primary],timeLabel:compensated?(duration==="acute"?"Acute 예상 보상":"Chronic 예상 보상"):"선택한 입력 상태",compensatingSystem:compensated?(state.primary.startsWith("respiratory")?"kidney":"lung"):null};
  const condition=`Ventilation ${inputs.ventilation.toFixed(0)}% · CO₂ production ${inputs.co2Production.toFixed(0)}% · HCO₃⁻ ${inputs.bicarbonate.toFixed(1)} · ${ACID_BASE_LABELS[primary]} · ${duration}`;
  return <div className="physiology-lab space-y-5">
    <PhysiologyHeader title="Acid–base balance" description="일차 장애와 보상을 구분하고, PaCO₂·HCO₃⁻가 pH를 바꾸는 과정을 관찰합니다. 설명은 학습용이며 실제 ABGA 판독은 임상 정보와 함께 해야 합니다." links={[{href:"/interactive/oxygenation-gas-exchange",label:"산소화와 가스교환"}]}/>
    <PresetStrip presets={PRESETS} selected={preset} onSelect={apply} onReset={reset}/>
    <section className="physiology-stage">
      <CanvasFrame legend={<span>CO₂: 폐 배출 · HCO₃⁻: Buffer·신장 조절 · H⁺: 산성도 · 애니메이션 시간은 실제 보상 경과 시간이 아닙니다.</span>}><AcidBaseP5Canvas state={state} simulation={simulation}/></CanvasFrame>
      <ModelPanel title="산염기 변수"><div className="space-y-4">
        <PhysiologyControl label="Alveolar ventilation" value={inputs.ventilation} min={40} max={300} step={1} displayValue={inputs.ventilation.toFixed(0)+"%"} hint="유효 폐포 환기의 상대값입니다. 호흡수 자체가 아닙니다." onChange={v=>update("ventilation",v)}/>
        <PhysiologyControl label="HCO₃⁻" value={inputs.bicarbonate} min={8} max={40} step={.1} displayValue={inputs.bicarbonate.toFixed(1)+" mEq/L"} hint="일차 대사 변화 또는 신장 보상의 결과가 될 수 있습니다." onChange={v=>update("bicarbonate",v)}/>
        <PhysiologyControl label="CO₂ production" value={inputs.co2Production} min={60} max={160} step={1} displayValue={inputs.co2Production.toFixed(0)+"%"} hint="환기가 같을 때 CO₂ 생성량이 늘면 PaCO₂가 상승합니다." onChange={v=>update("co2Production",v)}/>
        <label className="block text-sm font-semibold">일차 장애<select className="mt-2 w-full" value={primary} onChange={e=>{setPrimary(e.target.value as AcidBaseDisorder);setPreset("custom");setCompensated(false);}}>{Object.entries(ACID_BASE_LABELS).map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label>
        <label className="block text-sm font-semibold">Respiratory 장애 보상 시기<select className="mt-2 w-full" value={duration} onChange={e=>{setDuration(e.target.value as CompensationDuration);setCompensated(false);setPreset("custom");}}><option value="acute">Acute · 초기</option><option value="chronic">Chronic · 신장 적응 후</option></select></label>
        <button type="button" className="simulation-primary w-full" disabled={state.expected===null||transitioning||compensated} onClick={compensate}>{compensated?"예상 보상 적용됨":"예상 보상 적용"}</button>
        <p className="text-xs leading-5 text-[var(--muted)]">일차 장애는 보상 뒤에도 유지됩니다. 버튼은 원인을 치료하지 않고 예상 중심값만 적용합니다.</p>
      </div></ModelPanel>
    </section>
    <section className="grid physiology-card sm:grid-cols-4" aria-label="산염기 결과"><PhysiologyMetric label="pH" value={state.pH.toFixed(3)} status={state.status==="normal"?"pH 기준 범위":state.status==="acidemia"?"Acidemia":"Alkalemia"}/><PhysiologyMetric label="PaCO₂" value={state.paCO2.toFixed(1)+" mmHg"} status="호흡 성분"/><PhysiologyMetric label="HCO₃⁻" value={state.bicarbonate.toFixed(1)+" mEq/L"} status="대사 성분"/><PhysiologyMetric label="HCO₃⁻ / CO₂" value={state.ratio.toFixed(1)} status="Henderson–Hasselbalch ratio"/></section>
    <section className="physiology-card space-y-2" aria-live="polite"><h2 className="text-lg font-bold">{state.pattern}</h2><p className="text-sm leading-6">{state.explanation}</p><p className="text-sm leading-6">{state.compensation}</p></section>
    <MetricComparison busy={transitioning} snapshot={{label:condition,inputs:{...inputs,primary,duration,preset,sodium,chloride,albumin,compensated}}} onRestore={v=>{animateTo({ventilation:Number(v.ventilation),co2Production:Number(v.co2Production),bicarbonate:Number(v.bicarbonate)},0);setPrimary(v.primary as AcidBaseDisorder);setDuration(v.duration as CompensationDuration);setPreset(String(v.preset));setSodium(Number(v.sodium));setChloride(Number(v.chloride));setAlbumin(Number(v.albumin));setCompensated(Boolean(v.compensated));}} metrics={[{label:"pH",value:state.pH,normal:normal.pH,unit:"",digits:3},{label:"PaCO₂",value:state.paCO2,normal:40,unit:"mmHg"},{label:"HCO₃⁻",value:state.bicarbonate,normal:24,unit:"mEq/L"}]}/>
    <ClinicalScenarioPanel id={preset}/>
    <GuidedExperiments experiments={experiments} onApply={apply} activeScenario={compensated?"custom":preset}/>
    <details className="physiology-card"><summary className="cursor-pointer font-bold">심화 · Anion gap과 Mixed disorder</summary><div className="mt-5 physiology-learning-grid">
      <PhysiologyControl label="Na⁺" value={sodium} min={100} max={180} step={1} displayValue={sodium+" mEq/L"} hint="K⁺를 제외한 AG를 계산합니다." onChange={setSodium}/>
      <PhysiologyControl label="Cl⁻" value={chloride} min={60} max={150} step={1} displayValue={chloride+" mEq/L"} hint="HCO₃⁻는 위 산염기 입력을 그대로 사용합니다." onChange={setChloride}/>
      <PhysiologyControl label="Albumin" value={albumin} min={.5} max={6} step={.1} displayValue={albumin+" g/dL"} hint="낮은 Albumin이 숨길 수 있는 AG 증가를 보정합니다." onChange={setAlbumin}/>
    </div><p className="my-5 font-mono text-sm">AG {gap.gap.toFixed(1)} · 보정 AG {gap.corrected.toFixed(1)} mEq/L · Delta ratio {gap.deltaRatio===null?"적용하지 않음":gap.deltaRatio.toFixed(2)}</p><ClinicalScenarioPanel id="mixed"/></details>
  </div>;
}
