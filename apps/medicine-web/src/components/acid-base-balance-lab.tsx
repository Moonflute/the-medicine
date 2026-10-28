"use client";
import { useMemo, useState } from "react";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { PhysiologyControl, PhysiologyMetric } from "@/components/physiology-ui";
import { LabWorkspace, LabControlTabs, LabCaseActions, LabMetric, LabReferenceControls, useLabReference } from "@/components/clinical-lab-workspace";
import { AcidBaseDiagram } from "@/components/acid-base-diagram";
import { GuidedExperiments } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { ACID_BASE_CASES, ACID_BASE_EXPERIMENTS, ACID_BASE_LABELS, acidBaseExperimentCase, assessCompensation, calculateAcidBaseState, calculateAnionGap, type AcidBaseInputs, type AcidBaseDisorder, type CompensationDuration } from "@/lib/acid-base-model";

const NORMAL: AcidBaseInputs = { ventilation: 100, co2Production: 100, bicarbonate: 24 };
type Snapshot = { inputs: AcidBaseInputs; primary: AcidBaseDisorder; duration: CompensationDuration; sodium: number; chloride: number; albumin: number; preset: string; caseId: string; action: string };
export function AcidBaseBalanceLab() {
  const { inputs, update: change, animateTo, transitioning } = useAnimatedModel(NORMAL);
  const [preset, setPreset] = useState("normal"), [primary, setPrimary] = useState<AcidBaseDisorder>("auto"), [duration, setDuration] = useState<CompensationDuration>("acute");
  const [sodium, setSodium] = useState(140), [chloride, setChloride] = useState(104), [albumin, setAlbumin] = useState(4);
  const [caseId, setCaseId] = useState(""), [action, setAction] = useState("baseline");
  const [showExpected, setShowExpected] = useState(true);
  const { reference, pin, clear } = useLabReference<Snapshot>();
  const experiments = useLearningExperiments();
  const state = useMemo(() => calculateAcidBaseState(inputs, primary, duration), [inputs, primary, duration]);
  const gap = calculateAnionGap(sodium, chloride, inputs.bicarbonate, albumin), assessment = assessCompensation(state);
  const referenceState = useMemo(() => reference ? calculateAcidBaseState(reference.value.inputs, reference.value.primary, reference.value.duration) : undefined, [reference]);
  const referenceGap = reference ? calculateAnionGap(reference.value.sodium, reference.value.chloride, reference.value.inputs.bicarbonate, reference.value.albumin) : undefined;
  const experiment = ACID_BASE_EXPERIMENTS.find(item => item.caseId === caseId);
  const markModified = () => { setPreset("custom"); setAction("custom"); };
  const snapshot = (): Snapshot => ({ inputs: { ...inputs }, primary, duration, sodium, chloride, albumin, preset, caseId, action });
  const update = (key: keyof AcidBaseInputs, value: number) => { markModified(); change(key, value); };
  const apply = (id: string) => {
    const next = ACID_BASE_CASES.find(p => p.id === id); if (!next) return;
    const nextExperiment = ACID_BASE_EXPERIMENTS.find(item => item.caseId === id);
    setPreset(id); setCaseId(nextExperiment?.caseId ?? ""); setAction("baseline"); setPrimary(next.primary); setDuration(next.duration);
    setSodium(next.sodium); setChloride(next.chloride); setAlbumin(next.albumin); animateTo(next.values, 0);
    if (nextExperiment) pin({ inputs: { ...next.values }, primary: next.primary, duration: next.duration, sodium: next.sodium, chloride: next.chloride, albumin: next.albumin, preset: id, caseId: id, action: "baseline" }, next.label);
    else if (id === "normal") clear();
  };
  const intervene = (id: string) => {
    const next = acidBaseExperimentCase(caseId, id); if (!next) return;
    setPreset(caseId); setAction(id); setPrimary(next.primary); setDuration(next.duration);
    setSodium(next.sodium); setChloride(next.chloride); setAlbumin(next.albumin); animateTo(next.values, 0);
  };
  const restore = () => {
    if (!reference) return;
    const saved = reference.value;
    animateTo(saved.inputs, 0); setPrimary(saved.primary); setDuration(saved.duration); setSodium(saved.sodium); setChloride(saved.chloride); setAlbumin(saved.albumin); setPreset(saved.preset); setCaseId(saved.caseId); setAction(saved.action);
  };
  const caseNote = action === "baseline" ? ACID_BASE_CASES.find(p => p.id === preset)?.note : undefined;
  return <LabWorkspace title="산염기 · ABG와 보상" presets={ACID_BASE_CASES} selected={preset} onPreset={apply} onReset={() => apply("normal")}
    comparison={<LabReferenceControls label={reference?.label} busy={transitioning} onPin={() => pin(snapshot(), "pH " + state.pH.toFixed(2) + " · 현재 검사값")} onRestore={restore} onClear={clear}/>}
    experiment={experiment ? <LabCaseActions question={experiment.question} actions={experiment.actions} selected={action} onAction={intervene}/> : null}
    diagram={<AcidBaseDiagram state={state} sodium={sodium} chloride={chloride} albumin={albumin} reference={referenceState} showExpected={showExpected}/>}
    controls={<LabControlTabs tabs={[
      {id:"mechanism",label:"환기 · 대사",content:<>
        <PhysiologyControl label="폐포 환기" value={inputs.ventilation} min={40} max={300} step={1} displayValue={inputs.ventilation.toFixed(0)+"%"} hint="유효 폐포 환기의 상대값 · 호흡수와 구분" onChange={v=>update("ventilation",v)}/>
        <PhysiologyControl label="HCO₃⁻" value={inputs.bicarbonate} min={8} max={40} step={.1} displayValue={inputs.bicarbonate.toFixed(1)+" mEq/L"} hint="산 축적·염기 소실 또는 신장 적응" onChange={v=>update("bicarbonate",v)}/>
        <button type="button" className="lab-button" aria-pressed={showExpected} onClick={()=>setShowExpected(!showExpected)}>{showExpected ? "보상 참고선 숨기기" : "보상 참고선 보기"}</button>
        <p className="lab-model-note">참고선은 예상 범위입니다. 표시를 바꿔도 실제 입력값은 변하지 않습니다.</p>
      </>},
      {id:"compensation",label:"보상 판독",content:<>
        <PhysiologyControl label="CO₂ 생성" value={inputs.co2Production} min={60} max={160} step={1} displayValue={inputs.co2Production.toFixed(0)+"%"} hint="같은 환기에서 생성량 증가 → PaCO₂ 상승" onChange={v=>update("co2Production",v)}/>
        <label>판독할 일차 장애 가설<select value={primary} onChange={e=>{setPrimary(e.target.value as AcidBaseDisorder);markModified();}}>{Object.entries(ACID_BASE_LABELS).map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label>
        <label>호흡성 장애의 보상 시기<select value={duration} onChange={e=>{setDuration(e.target.value as CompensationDuration);markModified();}}><option value="acute">급성</option><option value="chronic">만성 · 신장 적응 후</option></select></label>
      </>},
      {id:"chemistry",label:"전해질 · AG",content:<>
        <PhysiologyControl label="Na⁺" value={sodium} min={100} max={180} step={1} displayValue={sodium.toFixed(1)+" mEq/L"} hint="AG = Na⁺ − Cl⁻ − HCO₃⁻" onChange={v=>{setSodium(v);markModified();}}/>
        <PhysiologyControl label="Cl⁻" value={chloride} min={60} max={150} step={.1} displayValue={chloride.toFixed(1)+" mEq/L"} hint="설사와 산 축적의 차이를 비교" onChange={v=>{setChloride(v);markModified();}}/>
        <PhysiologyControl label="Albumin" value={albumin} min={.5} max={6} step={.1} displayValue={albumin.toFixed(1)+" g/dL"} hint="보정 AG = AG + 2.5 × (4 − Albumin)" onChange={v=>{setAlbumin(v);markModified();}}/>
        <p className="text-sm">Delta ratio <b>{gap.deltaRatio===null?"적용 안 함":gap.deltaRatio.toFixed(2)}</b></p>
        <p className="text-xs text-[var(--muted)]">HCO₃⁻ 감소와 AG 증가가 있을 때만 비교합니다. 정상 AG 12를 교육 기준으로 사용합니다.</p>
      </>}
    ]}/>}
    metrics={<>
      <LabMetric label="pH" value={state.pH} reference={referenceState?.pH} digits={3} status={state.status==="normal"?"pH 기준 범위":state.status==="acidemia"?"산혈증":"알칼리혈증"}/>
      <LabMetric label="PaCO₂" value={state.paCO2} reference={referenceState?.paCO2} unit="mmHg" status="호흡 성분"/>
      <LabMetric label="HCO₃⁻" value={state.bicarbonate} reference={referenceState?.bicarbonate} unit="mEq/L" status="대사 성분"/>
      <LabMetric label="보정 AG" value={gap.corrected} reference={referenceGap?.corrected} status={"실측 AG "+gap.gap.toFixed(1)}/>
      <PhysiologyMetric label={"예상 "+assessment.component} value={assessment.low===null?"—":assessment.low.toFixed(1)+"–"+assessment.high!.toFixed(1)} status="선택한 일차 장애의 보상"/>
    </>}
    finding={<><strong>{state.expected === null && primary !== "auto" ? "현재값은 초기 일차 장애 범위 밖 · 판독 가설을 다시 비교" : assessment.label}</strong>{caseNote ? " · "+caseNote : action === "ventilation-normal" ? " · 환기만 변경: HCO₃⁻·Cl⁻·AG 유지" : null}</>}>
    <section className="physiology-card"><h2>{state.pattern}</h2><p>{state.explanation}</p><p>{state.compensation}</p><p>보상 참고선은 입력값을 바꾸지 않습니다. 사례의 환기 개입은 HCO₃⁻·전해질·Albumin을 고정한 비교이며 치료 목표나 시간 경과를 재현하지 않습니다. 만성 CO₂ 저류 후 PaCO₂가 정상화되면 남은 HCO₃⁻ 상승을 별도로 해석해야 합니다.</p></section>
    <ClinicalScenarioPanel id={caseId || preset} modified={action !== "baseline"}/>
    <GuidedExperiments experiments={experiments} onApply={apply} activeScenario={action === "baseline" ? preset : "custom"}/>
  </LabWorkspace>;
}
