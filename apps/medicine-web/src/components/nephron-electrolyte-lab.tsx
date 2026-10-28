"use client";

import { useMemo, useState } from "react";
import { GuidedExperiments } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { PhysiologyControl } from "@/components/physiology-ui";
import { NephronFlowDiagram } from "@/components/nephron-flow-diagram";
import { LabWorkspace, LabControlTabs, LabCaseActions, LabMetric, LabReferenceControls, useLabReference } from "@/components/clinical-lab-workspace";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { NORMAL_NEPHRON, NEPHRON_EXPERIMENTS, calculateNephronState, getNephronSegment, nephronExcretionIndex, nephronClinicalConnections, nephronExperimentInputs, type NephronInputs, type NephronSegmentId, type NephronSolute } from "@/lib/nephron-model";

const PRESETS = [
  { id: "normal", label: "정상", values: NORMAL_NEPHRON },
  ...NEPHRON_EXPERIMENTS,
  { id: "low-gfr", label: "신기능 저하", values: { ...NORMAL_NEPHRON, gfr: 25 } },
  { id: "low-gfr-enac", label: "신기능 저하 + ENaC 차단", values: { ...NORMAL_NEPHRON, gfr: 25, enacBlock: 88 } },
  { id: "sequential", label: "Loop + Thiazide", values: { ...NORMAL_NEPHRON, loopBlock: 75, thiazideBlock: 75, aldosterone: 72 } },
  { id: "dehydration", label: "탈수", values: { ...NORMAL_NEPHRON, gfr: 82, adh: 92, aldosterone: 82 } },
  { id: "siadh", label: "SIADH", values: { ...NORMAL_NEPHRON, adh: 100, aldosterone: 28 } },
  { id: "loop", label: "Loop 이뇨제", values: { ...NORMAL_NEPHRON, loopBlock: 88, aldosterone: 72 } },
  { id: "thiazide", label: "Thiazide", values: { ...NORMAL_NEPHRON, thiazideBlock: 88, aldosterone: 68 } },
  { id: "enac", label: "ENaC 차단", values: { ...NORMAL_NEPHRON, enacBlock: 88, aldosterone: 72 } },
  { id: "ca", label: "CA 억제", values: { ...NORMAL_NEPHRON, carbonicAnhydraseBlock: 88 } },
];
const SOLUTES: NephronSolute[] = ["Na+", "K+", "Cl-", "HCO3-", "Ca2+", "Mg2+", "H2O"];
type Snapshot = { inputs: NephronInputs; presetId: string; caseId: string; action: string };

export function NephronElectrolyteLab() {
  const { inputs, update: updateModel, animateTo, transitioning } = useAnimatedModel(NORMAL_NEPHRON);
  const state = useMemo(() => calculateNephronState(inputs), [inputs]);
  const [solute, setSolute] = useState<NephronSolute>("Na+");
  const [selected, setSelected] = useState<NephronSegmentId>("proximal");
  const [presetId, setPresetId] = useState("normal"), [caseId, setCaseId] = useState("");
  const [action, setAction] = useState("baseline"), [controlTab, setControlTab] = useState("renal");
  const { reference, pin, clear } = useLabReference<Snapshot>();
  const referenceState = useMemo(() => reference ? calculateNephronState(reference.value.inputs) : undefined, [reference]);
  const experiment = NEPHRON_EXPERIMENTS.find(item => item.id === caseId);
  const segment = getNephronSegment(state, selected), experiments = useLearningExperiments();
  const connections = nephronClinicalConnections(state);
  const snapshot = (): Snapshot => ({ inputs: { ...inputs }, presetId, caseId, action });
  const update = (key: keyof NephronInputs, value: number) => { setPresetId("custom"); setAction("custom"); updateModel(key, value); };
  const applyPreset = (id: string) => {
    const preset = PRESETS.find(item => item.id === id); if (!preset) return;
    const nextExperiment = NEPHRON_EXPERIMENTS.find(item => item.id === id);
    setPresetId(id); setCaseId(nextExperiment?.id ?? ""); setAction("baseline");
    const segments: Record<string, NephronSegmentId> = { loop: "thick-ascending", thiazide: "distal", enac: "collecting", ca: "proximal", sequential: "thick-ascending", normal: "proximal" };
    setSelected(nextExperiment?.segment ?? segments[id] ?? "collecting");
    setSolute(nextExperiment?.solute ?? (id === "siadh" || id === "dehydration" ? "H2O" : id === "ca" ? "HCO3-" : id.startsWith("low-gfr") ? "K+" : "Na+"));
    setControlTab(id === "case-ckd-potassium" ? "raas" : nextExperiment || ["loop", "thiazide", "enac", "ca", "sequential"].includes(id) ? "drug" : "renal");
    if (nextExperiment) pin({ inputs: { ...preset.values }, presetId: id, caseId: id, action: "baseline" }, preset.label);
    else if (id === "normal") clear();
    animateTo(preset.values, 0);
  };
  const intervene = (id: string) => {
    if (!experiment) return;
    setAction(id); setPresetId(experiment.id);
    animateTo(nephronExperimentInputs(experiment, id), 0);
  };
  const restore = () => {
    if (!reference) return;
    const saved = reference.value;
    animateTo(saved.inputs, 0); setPresetId(saved.presetId); setCaseId(saved.caseId); setAction(saved.action);
  };
  const control = (key: keyof NephronInputs, label: string, hint: string, min = 0, max = 100) => <PhysiologyControl key={key} label={label} value={inputs[key]} min={min} max={max} step={1} displayValue={inputs[key].toFixed(0) + "%"} hint={hint} onChange={value => update(key, value)}/>;
  const excretion = (tracked: NephronSolute) => nephronExcretionIndex(state, tracked);
  const previous = (tracked: NephronSolute) => referenceState ? nephronExcretionIndex(referenceState, tracked) : undefined;

  return <LabWorkspace title="신장 · 이뇨제와 전해질" presets={PRESETS} selected={presetId} onPreset={applyPreset} onReset={() => applyPreset("normal")}
    comparison={<LabReferenceControls label={reference?.label} busy={transitioning} onPin={() => pin(snapshot(), "GFR " + inputs.gfr.toFixed(0) + "% · 현재 조건")} onRestore={restore} onClear={clear}/>}
    experiment={experiment ? <LabCaseActions question={experiment.question} actions={experiment.actions} selected={action} onAction={intervene}/> : null}
    diagram={<><div className="lab-diagram-tools" aria-label="추적할 용질">{SOLUTES.map(item => <button type="button" key={item} aria-pressed={item === solute} onClick={() => setSolute(item)}>{item}</button>)}<span>{reference ? "회색: 고정 기준 · 색상: 현재" : "분절을 선택해 수송 경로 확인"}</span></div><NephronFlowDiagram state={state} reference={referenceState} solute={solute} selected={selected} onSelect={setSelected}/></>}
    controls={<LabControlTabs value={controlTab} onChange={setControlTab} tabs={[
      { id: "renal", label: "신기능", content: <>
        {control("gfr", "GFR 상대값", "혈장 농도를 고정한 여과 부하 비교입니다. 장기 CKD 적응은 계산하지 않습니다.", 15, 160)}
        {control("adh", "ADH", "집합관 AQP2와 물 재흡수를 조절합니다.")}
        {control("aldosterone", "차단 전 Aldosterone 자극", "RAS·MR 차단 전 기준 자극입니다. 측정 혈중 농도가 아닙니다.")}
      </> },
      { id: "drug", label: "이뇨제", content: <>
        {control("loopBlock", "NKCC2 · Loop 차단", "TAL Na-K-2Cl 수송과 Ca/Mg 회수, 농축기울기를 낮춥니다.")}
        {control("thiazideBlock", "NCC · Thiazide 차단", "DCT NaCl 회수 감소, Ca 회수 증가와 Mg 회수 감소를 단순화합니다.")}
        {control("enacBlock", "ENaC 직접 차단", "Amiloride 계열: Na 통로를 직접 차단해 K 분비를 줄입니다.")}
        {control("carbonicAnhydraseBlock", "Carbonic anhydrase 억제", "PCT HCO3 회수 억제 → bicarbonaturia. 실제 약물 용량이 아닙니다.")}
      </> },
      { id: "raas", label: "RAAS · K⁺", content: <>
        {control("rasBlock", "RAS 억제 · ACEi/ARB", "알도스테론 유래 신호 감소를 표현합니다. GFR 변화나 신장 보호 효과는 자동 계산하지 않습니다.")}
        {control("mrBlock", "MR 수용체 차단", "Spironolactone 계열: 알도스테론 수용체 작용을 낮춥니다. ENaC 직접 차단과 구분합니다.")}
        {control("enacBlock", "ENaC 직접 차단", "호르몬 신호를 낮추지 않고 Na 통로를 직접 막는 경로입니다.")}
        <p className="lab-model-note">차단 강도는 용량이 아닙니다. GFR·약물 조건은 독립적으로 비교합니다.</p>
      </> },
    ]}/>}
    metrics={<>
      <LabMetric label={solute + " 총 배설 지수"} value={excretion(solute)} reference={previous(solute)} digits={0} status="정상 100 · GFR 포함"/>
      <LabMetric label={solute === "K+" ? "Na⁺ 총 배설 지수" : "K⁺ 총 배설 지수"} value={excretion(solute === "K+" ? "Na+" : "K+")} reference={previous(solute === "K+" ? "Na+" : "K+")} digits={0} status="혈중 농도 예측값 아님"/>
      <LabMetric label={solute === "Mg2+" ? "Ca²⁺ 총 배설 지수" : "Mg²⁺ 총 배설 지수"} value={excretion(solute === "Mg2+" ? "Ca2+" : "Mg2+")} reference={previous(solute === "Mg2+" ? "Ca2+" : "Mg2+")} digits={0} status="정상 100 · GFR 포함"/>
      <LabMetric label="소변량" value={state.urineVolume} reference={referenceState?.urineVolume} unit="L/d" status="고정 혈장 조건 모델"/>
    </>}
    finding={<><strong>{connections.slice(0, 2).map(item => item.title).join(" · ")}</strong></>}>
    <section className="physiology-card"><h2>{state.pattern}</h2>{connections.map(item => <div key={item.title} className="mt-3"><h3 className="font-bold">{item.title}</h3><p>{item.mechanism}</p></div>)}</section>
    <p className="text-sm">총 배설 지수는 분획 배설 × 상대 GFR을 정상 모델 100과 비교합니다. 혈중 농도·임상 약물 용량·장기 CKD 적응을 예측하지 않습니다. RAS·MR·ENaC 차단은 서로 다른 경로이며 실제 환자의 약물 중단·병용 여부를 결정하는 모델이 아닙니다.</p>
    <ClinicalScenarioPanel id={caseId || presetId} modified={action !== "baseline"}/><ClinicalScenarioPanel id={"segment-" + selected}/>
    <GuidedExperiments experiments={experiments} activeScenario={action === "baseline" ? presetId : "custom"} onApply={applyPreset}/>
    <section className="physiology-card"><h2>{segment.label}: {solute}</h2><p>{segment.note}</p>{segment.routes.filter(route => route.solute === solute).map(route => <p key={route.id}>{route.apical ?? route.path}: {route.detail}</p>)}<p>분획 배설 {state.excreted[solute].toFixed(1)}% · 소변 삼투질농도 {state.urineOsmolality.toFixed(0)} mOsm/kg. 섭취와 혈중 농도를 함께 해석해야 합니다.</p></section>
  </LabWorkspace>;
}
