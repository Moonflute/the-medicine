"use client";
import { useMemo, useState } from "react";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { PhysiologyControl, PhysiologyMetric } from "@/components/physiology-ui";
import { LabWorkspace, LabControlTabs } from "@/components/clinical-lab-workspace";
import { AcidBaseDiagram } from "@/components/acid-base-diagram";
import { GuidedExperiments, MetricComparison } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { ACID_BASE_CASES, ACID_BASE_LABELS, assessCompensation, calculateAcidBaseState, calculateAnionGap, compensatedInputs, type AcidBaseInputs, type AcidBaseDisorder, type CompensationDuration } from "@/lib/acid-base-model";

const NORMAL: AcidBaseInputs = { ventilation: 100, co2Production: 100, bicarbonate: 24 };
export function AcidBaseBalanceLab() {
  const { inputs, update: change, animateTo, transitioning } = useAnimatedModel(NORMAL);
  const [preset, setPreset] = useState("normal"), [primary, setPrimary] = useState<AcidBaseDisorder>("auto"), [duration, setDuration] = useState<CompensationDuration>("acute");
  const [sodium, setSodium] = useState(140), [chloride, setChloride] = useState(104), [albumin, setAlbumin] = useState(4);
  const [compensated, setCompensated] = useState(false);
  const experiments = useLearningExperiments();
  const state = useMemo(() => calculateAcidBaseState(inputs, primary, duration), [inputs, primary, duration]);
  const gap = calculateAnionGap(sodium, chloride, inputs.bicarbonate, albumin), assessment = assessCompensation(state);
  const update = (key: keyof AcidBaseInputs, value: number) => { setPreset("custom"); setCompensated(false); change(key, value); };
  const apply = (id: string) => {
    const next = ACID_BASE_CASES.find(p => p.id === id); if (!next) return;
    setPreset(id); setPrimary(next.primary); setDuration(next.duration); setCompensated(false);
    setSodium(next.sodium); setChloride(next.chloride); setAlbumin(next.albumin); animateTo(next.values);
  };
  const compensate = () => {
    const next = compensatedInputs(state);
    // Renal retention exchanges bicarbonate and chloride without inventing an anion gap.
    if (state.primary.startsWith("respiratory")) setChloride(chloride - (next.bicarbonate - inputs.bicarbonate));
    setPrimary(state.primary); setCompensated(true); animateTo(next);
  };
  const caseNote = ACID_BASE_CASES.find(p => p.id === preset)?.note;
  return <LabWorkspace title="산염기 · ABG와 보상" presets={ACID_BASE_CASES} selected={preset} onPreset={apply} onReset={() => apply("normal")}
    diagram={<AcidBaseDiagram state={state} sodium={sodium} chloride={chloride} albumin={albumin}/>}
    controls={<LabControlTabs tabs={[
      {id:"mechanism",label:"환기 · 대사",content:<>
        <PhysiologyControl label="폐포 환기" value={inputs.ventilation} min={40} max={300} step={1} displayValue={inputs.ventilation.toFixed(0)+"%"} hint="유효 폐포 환기의 상대값 · 호흡수와 구분" onChange={v=>update("ventilation",v)}/>
        <PhysiologyControl label="HCO₃⁻" value={inputs.bicarbonate} min={8} max={40} step={.1} displayValue={inputs.bicarbonate.toFixed(1)+" mEq/L"} hint="산 축적·염기 소실 또는 신장 적응" onChange={v=>update("bicarbonate",v)}/>
        <button type="button" className="lab-button" disabled={state.expected===null || transitioning || compensated} onClick={compensate}>예상 보상 적용</button>
        <button type="button" className="lab-button" onClick={()=>update("ventilation",100)}>환기만 정상화</button>
      </>},
      {id:"compensation",label:"보상 판독",content:<>
        <PhysiologyControl label="CO₂ 생성" value={inputs.co2Production} min={60} max={160} step={1} displayValue={inputs.co2Production.toFixed(0)+"%"} hint="같은 환기에서 생성량 증가 → PaCO₂ 상승" onChange={v=>update("co2Production",v)}/>
        <label>일차 장애<select value={primary} onChange={e=>{setPrimary(e.target.value as AcidBaseDisorder);setPreset("custom");setCompensated(false);}}>{Object.entries(ACID_BASE_LABELS).map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label>
        <label>호흡성 장애의 보상 시기<select value={duration} onChange={e=>{setDuration(e.target.value as CompensationDuration);setCompensated(false);}}><option value="acute">급성</option><option value="chronic">만성 · 신장 적응 후</option></select></label>
      </>},
      {id:"chemistry",label:"전해질 · AG",content:<>
        <PhysiologyControl label="Na⁺" value={sodium} min={100} max={180} step={1} displayValue={sodium.toFixed(1)+" mEq/L"} hint="AG = Na⁺ − Cl⁻ − HCO₃⁻" onChange={v=>{setSodium(v);setPreset("custom");}}/>
        <PhysiologyControl label="Cl⁻" value={chloride} min={60} max={150} step={.1} displayValue={chloride.toFixed(1)+" mEq/L"} hint="설사와 산 축적의 차이를 비교" onChange={v=>{setChloride(v);setPreset("custom");}}/>
        <PhysiologyControl label="Albumin" value={albumin} min={.5} max={6} step={.1} displayValue={albumin.toFixed(1)+" g/dL"} hint="보정 AG = AG + 2.5 × (4 − Albumin)" onChange={v=>{setAlbumin(v);setPreset("custom");}}/>
        <p className="text-sm">Delta ratio <b>{gap.deltaRatio===null?"적용 안 함":gap.deltaRatio.toFixed(2)}</b></p>
        <p className="text-xs text-[var(--muted)]">HCO₃⁻ 감소와 AG 증가가 있을 때만 비교합니다. 정상 AG 12를 교육 기준으로 사용합니다.</p>
      </>}
    ]}/>}
    metrics={<>
      <PhysiologyMetric label="pH" value={state.pH.toFixed(3)} status={state.status==="normal"?"pH 기준 범위":state.status==="acidemia"?"산혈증":"알칼리혈증"}/>
      <PhysiologyMetric label="PaCO₂" value={state.paCO2.toFixed(1)+" mmHg"} status="호흡 성분"/>
      <PhysiologyMetric label="HCO₃⁻" value={state.bicarbonate.toFixed(1)+" mEq/L"} status="대사 성분"/>
      <PhysiologyMetric label="보정 AG" value={gap.corrected.toFixed(1)} status={"실측 AG "+gap.gap.toFixed(1)}/>
      <PhysiologyMetric label={"예상 "+assessment.component} value={assessment.low===null?"—":assessment.low.toFixed(1)+"–"+assessment.high!.toFixed(1)} status="선택한 일차 장애의 보상"/>
    </>}
    finding={<><strong>{assessment.label}</strong>{caseNote ? " · "+caseNote : null}</>}>
    <section className="physiology-card"><h2>{state.pattern}</h2><p>{state.explanation}</p><p>{state.compensation}</p><p>예상 보상은 원인 치료나 시간 경과 시뮬레이션이 아닙니다. 급성·만성 시점과 병력을 함께 해석합니다. 호흡성 보상 버튼은 단순 비교를 위해 AG가 유지되도록 Cl⁻를 함께 조정합니다.</p></section>
    <MetricComparison busy={transitioning} snapshot={{label:state.pattern,inputs:{...inputs,primary,duration,preset,sodium,chloride,albumin,compensated}}} onRestore={v=>{animateTo({ventilation:Number(v.ventilation),co2Production:Number(v.co2Production),bicarbonate:Number(v.bicarbonate)},0);setPrimary(v.primary as AcidBaseDisorder);setDuration(v.duration as CompensationDuration);setPreset(String(v.preset));setSodium(Number(v.sodium));setChloride(Number(v.chloride));setAlbumin(Number(v.albumin));setCompensated(Boolean(v.compensated));}} metrics={[{label:"pH",value:state.pH,normal:7.401,unit:"",digits:3},{label:"PaCO₂",value:state.paCO2,normal:40,unit:"mmHg"},{label:"HCO₃⁻",value:state.bicarbonate,normal:24,unit:"mEq/L"},{label:"보정 AG",value:gap.corrected,normal:12,unit:"mEq/L"}]}/>
    <ClinicalScenarioPanel id={preset}/>
    <GuidedExperiments experiments={experiments} onApply={apply} activeScenario={compensated?"custom":preset}/>
    <ClinicalScenarioPanel id="mixed"/>
  </LabWorkspace>;
}
