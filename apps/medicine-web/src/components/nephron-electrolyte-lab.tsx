"use client";

import { GuidedExperiments, MetricComparison } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { useSimulationClock } from "@/components/simulation-workbench";
import { updateSimulationClock } from "@/lib/simulation-clock";

import { useMemo, useState } from "react";

import { PhysiologyControl, PhysiologyMetric } from "@/components/physiology-ui";
import { NephronFlowDiagram } from "@/components/nephron-flow-diagram";
import { LabWorkspace, LabControlTabs } from "@/components/clinical-lab-workspace";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { calculateNephronState, getNephronSegment, nephronExcretionIndex, nephronClinicalConnections, type NephronInputs, type NephronSegmentId, type NephronSolute } from "@/lib/nephron-model";

const NORMAL: NephronInputs = { gfr: 100, adh: 50, aldosterone: 50, loopBlock: 0, thiazideBlock: 0, enacBlock: 0, carbonicAnhydraseBlock: 0 };
const PRESETS = [
  { id: "normal", label: "정상", values: NORMAL },
  { id: "low-gfr", label: "신기능 저하", values: { ...NORMAL, gfr: 25 } },
  { id: "low-gfr-enac", label: "신기능 저하 + ENaC 차단", values: { ...NORMAL, gfr: 25, enacBlock: 88 } },
  { id: "sequential", label: "Loop + Thiazide", values: { ...NORMAL, loopBlock: 75, thiazideBlock: 75, aldosterone: 72 } },
  { id: "dehydration", label: "탈수", values: { ...NORMAL, gfr: 82, adh: 92, aldosterone: 82 } },
  { id: "siadh", label: "SIADH", values: { ...NORMAL, adh: 100, aldosterone: 28 } },
  { id: "loop", label: "Loop 이뇨제", values: { ...NORMAL, loopBlock: 88, aldosterone: 72 } },
  { id: "thiazide", label: "Thiazide", values: { ...NORMAL, thiazideBlock: 88, aldosterone: 68 } },
  { id: "enac", label: "ENaC 차단", values: { ...NORMAL, enacBlock: 88, aldosterone: 72 } },
  { id: "ca", label: "CA 억제", values: { ...NORMAL, carbonicAnhydraseBlock: 88 } },
];
const SOLUTES: NephronSolute[] = ["Na+", "K+", "Cl-", "HCO3-", "Ca2+", "Mg2+", "H2O"];

export function NephronElectrolyteLab() {
  const { inputs, update: updateModel, animateTo, transitioning } = useAnimatedModel(NORMAL); const state = useMemo(() => calculateNephronState(inputs), [inputs]);
  const [solute, setSolute] = useState<NephronSolute>("Na+"); const [selected, setSelected] = useState<NephronSegmentId>("proximal"); const segment = getNephronSegment(state, selected);
  const [presetId, setPresetId] = useState("normal");
  const [controlTab, setControlTab] = useState("renal");
  const experiments=useLearningExperiments(), clock=useSimulationClock();
  const update = (key: keyof NephronInputs, value: number) => { setPresetId("custom"); updateModel(key,value); };
  const normal = calculateNephronState(NORMAL);
  const applyPreset = (id: string) => { const preset = PRESETS.find((item) => item.id === id); if (!preset) return; setPresetId(id); const segmentByPreset: Record<string, NephronSegmentId> = { loop: "thick-ascending", thiazide: "distal", enac: "collecting", ca: "proximal", siadh: "collecting", dehydration: "collecting", normal: "proximal", sequential: "thick-ascending" }; setSelected(segmentByPreset[id] ?? "collecting"); setSolute(id === "siadh" || id === "dehydration" ? "H2O" : id === "ca" ? "HCO3-" : id.startsWith("low-gfr") ? "K+" : "Na+"); setControlTab(["loop", "thiazide", "enac", "ca", "sequential", "low-gfr-enac"].includes(id) ? "drug" : "renal"); animateTo(preset.values);updateSimulationClock(clock,{seconds:0}); };
  const connections = nephronClinicalConnections(state);
  return <LabWorkspace title="신장 · 이뇨제와 전해질" presets={PRESETS} selected={presetId} onPreset={applyPreset} onReset={()=>applyPreset("normal")}
    diagram={<><div className="lab-diagram-tools" aria-label="추적할 용질">{SOLUTES.map(item=><button type="button" key={item} aria-pressed={item===solute} onClick={()=>setSolute(item)}>{item}</button>)}<span>분절을 선택해 수송 경로 확인</span></div><NephronFlowDiagram state={state} solute={solute} selected={selected} onSelect={setSelected}/></>}
    controls={<LabControlTabs value={controlTab} onChange={setControlTab} tabs={[{id:"renal",label:"신기능 · 호르몬",content:<>
        <PhysiologyControl label="GFR 상대값" value={inputs.gfr} min={15} max={160} step={1} displayValue={`${inputs.gfr.toFixed(0)}%`} hint="여과 부하와 일일 여과 수분량의 상대적 변화를 나타냅니다." onChange={(value) => update("gfr", value)} />
        <PhysiologyControl label="ADH" value={inputs.adh} min={0} max={100} step={1} displayValue={`${inputs.adh.toFixed(0)}%`} hint="집합관 AQP2와 물 재흡수를 조절합니다." onChange={(value) => update("adh", value)} />
        <PhysiologyControl label="Aldosterone" value={inputs.aldosterone} min={0} max={100} step={1} displayValue={`${inputs.aldosterone.toFixed(0)}%`} hint="ENaC 재흡수와 ROMK/BK K 분비를 증가시킵니다." onChange={(value) => update("aldosterone", value)} />

      </>},{id:"drug",label:"이뇨제 · 차단",content:<>
          <PhysiologyControl label="NKCC2 차단" value={inputs.loopBlock} min={0} max={100} step={1} displayValue={`${inputs.loopBlock.toFixed(0)}%`} hint="TAL의 Na-K-2Cl 수송과 Ca/Mg 재흡수, 농축기울기를 낮춥니다." onChange={(value) => update("loopBlock", value)} />
          <PhysiologyControl label="NCC 차단" value={inputs.thiazideBlock} min={0} max={100} step={1} displayValue={`${inputs.thiazideBlock.toFixed(0)}%`} hint="DCT NaCl 재흡수를 낮추고 Ca2+ 회수는 증가시킵니다." onChange={(value) => update("thiazideBlock", value)} />
          <PhysiologyControl label="ENaC 차단" value={inputs.enacBlock} min={0} max={100} step={1} displayValue={`${inputs.enacBlock.toFixed(0)}%`} hint="집합관 Na+ 재흡수와 전기적 K+ 분비를 함께 낮춥니다." onChange={(value) => update("enacBlock", value)} />
          <PhysiologyControl label="Carbonic anhydrase 차단" value={inputs.carbonicAnhydraseBlock} min={0} max={100} step={1} displayValue={`${inputs.carbonicAnhydraseBlock.toFixed(0)}%`} hint="PCT의 HCO3- 회수와 NHE3 연계 Na+ 수송을 낮춥니다." onChange={(value) => update("carbonicAnhydraseBlock", value)} />
        </>}]} />}
    metrics={<><PhysiologyMetric label={solute+" 분획 배설"} value={state.excreted[solute].toFixed(1)+"%"} status="현재 여과 부하 대비"/><PhysiologyMetric label={solute+" 총 배설 지수"} value={nephronExcretionIndex(state,solute).toFixed(0)+"%"} status="정상 100 · GFR 포함"/><PhysiologyMetric label={solute==="K+"?"Na⁺ 총 배설 지수":"K⁺ 총 배설 지수"} value={nephronExcretionIndex(state,solute==="K+"?"Na+":"K+").toFixed(0)+"%"} status="혈중 농도 예측값 아님"/><PhysiologyMetric label="소변량" value={state.urineVolume.toFixed(1)+" L/d"} status="고정 혈장 조건 교육 모델"/></>}
    finding={<><strong>{connections.map(c=>c.title).join(" · ")}</strong></>}>
    <section className="physiology-card"><h2>{state.pattern}</h2>{connections.map(c=><div key={c.title} className="mt-3"><h3 className="font-bold">{c.title}</h3><p>{c.mechanism}</p></div>)}</section>
    <p className="text-sm">총 배설 지수 = 분획 배설 × 상대 GFR을 정상 모델과 비교한 값입니다. 혈장 농도 고정, 정상 100%이며 혈중 전해질 농도·장기 CKD 적응·약물 용량을 예측하지 않습니다.</p>
    <MetricComparison key={solute} busy={transitioning} snapshot={{label:`GFR ${inputs.gfr.toFixed(0)}% · ADH ${inputs.adh.toFixed(0)} · Aldosterone ${inputs.aldosterone.toFixed(0)} · NKCC2 ${inputs.loopBlock.toFixed(0)} · NCC ${inputs.thiazideBlock.toFixed(0)} · ENaC ${inputs.enacBlock.toFixed(0)} · CA ${inputs.carbonicAnhydraseBlock.toFixed(0)} · ${solute}`,inputs:{...inputs,presetId,selected}}} onRestore={v=>{animateTo({gfr:Number(v.gfr),adh:Number(v.adh),aldosterone:Number(v.aldosterone),loopBlock:Number(v.loopBlock),thiazideBlock:Number(v.thiazideBlock),enacBlock:Number(v.enacBlock),carbonicAnhydraseBlock:Number(v.carbonicAnhydraseBlock)},0);setPresetId(String(v.presetId));setSelected(v.selected as NephronSegmentId);}} metrics={[{label: `${solute} 배설`,value:state.excreted[solute],normal:normal.excreted[solute],unit:"%"},{label:"소변량",value:state.urineVolume,normal:normal.urineVolume,unit:"L/d"},{label:"K 배설",value:state.potassiumExcretion,normal:normal.potassiumExcretion,unit:"%"},{label:"소변 삼투질농도",value:state.urineOsmolality,normal:normal.urineOsmolality,unit:"mOsm/kg",digits:0}]} />
    <ClinicalScenarioPanel id={presetId}/><ClinicalScenarioPanel id={"segment-"+selected}/>
    <GuidedExperiments experiments={experiments} activeScenario={presetId} onApply={applyPreset}/>
    <section className="physiology-card"><h2>{segment.label}: {solute}</h2><p>{segment.note}</p><p>소변 삼투질농도 {state.urineOsmolality.toFixed(0)} mOsm/kg · 섭취와 혈중 농도를 함께 해석해야 합니다.</p></section>
  </LabWorkspace>;
}
