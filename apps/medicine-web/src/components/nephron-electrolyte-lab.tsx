"use client";

import { useMemo, useState } from "react";
import { Droplets } from "lucide-react";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric, PresetStrip, VariableDisclosure } from "@/components/physiology-ui";
import { NephronP5Canvas } from "@/components/nephron-p5-canvas";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { calculateNephronState, type NephronInputs, type NephronSolute } from "@/lib/nephron-model";

const NORMAL: NephronInputs = { gfr: 100, adh: 50, aldosterone: 50, loopBlock: 0, thiazideBlock: 0 };
const PRESETS = [
  { id: "normal", label: "정상", values: NORMAL }, { id: "dehydration", label: "탈수", values: { ...NORMAL, adh: 90, aldosterone: 75 } },
  { id: "siadh", label: "SIADH", values: { ...NORMAL, adh: 100 } }, { id: "loop", label: "Loop 이뇨제", values: { ...NORMAL, loopBlock: 85 } },
  { id: "thiazide", label: "Thiazide", values: { ...NORMAL, thiazideBlock: 85 } },
];
const SOLUTES: NephronSolute[] = ["Na+", "K+", "HCO3-", "Ca2+", "Mg2+", "H2O"];

export function NephronElectrolyteLab() {
  const { inputs, update, animateTo } = useAnimatedModel(NORMAL); const state = useMemo(() => calculateNephronState(inputs), [inputs]); const [solute, setSolute] = useState<NephronSolute>("Na+"); const [selected, setSelected] = useState("proximal"); const [open, setOpen] = useState(false); const segment = state.segments.find((item) => item.id === selected)!;
  return <main className="space-y-5">
    <PhysiologyHeader title="네프론 전해질 수송" description="여과액이 피질과 수질의 네프론 분절을 지나며 물과 전해질이 서로 다른 수송체를 통해 회수되거나 분비되는 과정을 직접 확인합니다." links={[{ href: "/interactive/acid-base-balance", label: "산-염기 균형" }]} />
    <PresetStrip presets={PRESETS} onSelect={(id) => animateTo(PRESETS.find((p) => p.id === id)!.values)} onReset={() => animateTo(NORMAL)} />
    <div className="flex flex-wrap gap-2">{SOLUTES.map((item) => <button key={item} onClick={() => setSolute(item)} className={`rounded-md border px-3 py-2 text-xs font-semibold ${item === solute ? "border-teal-700 bg-teal-700 text-white" : "border-slate-300 bg-white text-slate-700"}`}>{item}</button>)}</div>
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_370px]">
      <CanvasFrame legend={<div className="flex flex-wrap gap-x-5 gap-y-2"><span><b className="text-teal-800">●</b> 선택 용질</span><span>관강 안 입자 = 여과액 내 이동</span><span>바깥 방향 선 = 재흡수, 안쪽 방향 = 분비</span><span>분절을 눌러 세부 수송체 확인</span></div>}><NephronP5Canvas state={state} solute={solute} selected={selected} onSelect={setSelected} /></CanvasFrame>
      <ModelPanel title="네프론 변수"><div className="space-y-4"><PhysiologyControl label="GFR 상대값" value={inputs.gfr} min={40} max={160} step={1} displayValue={`${inputs.gfr.toFixed(0)}%`} hint="여과 부하의 상대적 변화를 나타냅니다." onChange={(v) => update("gfr", v)} /><PhysiologyControl label="ADH" value={inputs.adh} min={0} max={100} step={1} displayValue={`${inputs.adh.toFixed(0)}%`} hint="집합관 AQP2와 물 재흡수를 조절합니다." onChange={(v) => update("adh", v)} /><VariableDisclosure open={open} onToggle={setOpen} summary={`Aldo ${inputs.aldosterone.toFixed(0)} · Loop ${inputs.loopBlock.toFixed(0)} · TZD ${inputs.thiazideBlock.toFixed(0)}`}><PhysiologyControl label="Aldosterone" value={inputs.aldosterone} min={0} max={100} step={1} displayValue={`${inputs.aldosterone.toFixed(0)}%`} hint="ENaC 재흡수와 ROMK K 분비를 증가시킵니다." onChange={(v) => update("aldosterone", v)} /><PhysiologyControl label="NKCC2 차단" value={inputs.loopBlock} min={0} max={100} step={1} displayValue={`${inputs.loopBlock.toFixed(0)}%`} hint="굵은 상행각 수송과 수질 농도기울기를 낮춥니다." onChange={(v) => update("loopBlock", v)} /><PhysiologyControl label="NCC 차단" value={inputs.thiazideBlock} min={0} max={100} step={1} displayValue={`${inputs.thiazideBlock.toFixed(0)}%`} hint="원위세뇨관 NaCl 재흡수를 낮춥니다." onChange={(v) => update("thiazideBlock", v)} /></VariableDisclosure></div></ModelPanel>
    </section>
    <section className="grid rounded-md border border-slate-300 bg-[#f8faf9] py-4 sm:grid-cols-2 xl:grid-cols-4"><PhysiologyMetric label="Urine volume" value={`${state.urineVolume.toFixed(1)} L/d`} status="교육용 상대 추정" /><PhysiologyMetric label="Na excretion" value={`${state.sodiumExcretion.toFixed(1)}%`} status="여과 부하 대비" /><PhysiologyMetric label="K excretion" value={`${state.potassiumExcretion.toFixed(0)} index`} status="원위부 분비" /><PhysiologyMetric label="Urine osm" value={`${state.urineOsmolality.toFixed(0)} mOsm/kg`} status="농축능 추정" /></section>
    <section className="rounded-md border border-teal-200 bg-teal-50 p-5"><div className="flex items-center gap-2 text-sm font-bold"><Droplets className="h-4 w-4" />{state.pattern}</div><h2 className="mt-2 text-lg font-bold">{segment.label}: {segment.transporters.join(" · ")}</h2><p className="mt-2 text-sm leading-6 text-slate-700">{segment.note} 현재 {solute} 처리량은 여과 부하의 {segment.reabsorbed[solute].toFixed(0)}%입니다.</p></section>
    <p className="text-xs leading-5 text-slate-500">분절별 비율을 이용한 교육용 정상 신장 모델입니다. 실제 전해질 배설은 섭취량, 산염기 상태, 혈류, 약물과 질환에 따라 달라집니다.</p>
  </main>;
}
