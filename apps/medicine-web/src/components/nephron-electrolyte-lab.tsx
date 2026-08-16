"use client";

import { useMemo, useState } from "react";
import { Droplets } from "lucide-react";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric, PresetStrip, VariableDisclosure } from "@/components/physiology-ui";
import { NephronP5Canvas } from "@/components/nephron-p5-canvas";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { calculateNephronState, getNephronSegment, type NephronInputs, type NephronSegmentId, type NephronSolute } from "@/lib/nephron-model";

const NORMAL: NephronInputs = { gfr: 100, adh: 50, aldosterone: 50, loopBlock: 0, thiazideBlock: 0, enacBlock: 0, carbonicAnhydraseBlock: 0 };
const PRESETS = [
  { id: "normal", label: "정상", values: NORMAL },
  { id: "dehydration", label: "탈수", values: { ...NORMAL, gfr: 82, adh: 92, aldosterone: 82 } },
  { id: "siadh", label: "SIADH", values: { ...NORMAL, adh: 100, aldosterone: 28 } },
  { id: "loop", label: "Loop 이뇨제", values: { ...NORMAL, loopBlock: 88, aldosterone: 72 } },
  { id: "thiazide", label: "Thiazide", values: { ...NORMAL, thiazideBlock: 88, aldosterone: 68 } },
  { id: "enac", label: "ENaC 차단", values: { ...NORMAL, enacBlock: 88, aldosterone: 72 } },
  { id: "ca", label: "CA 억제", values: { ...NORMAL, carbonicAnhydraseBlock: 88 } },
];
const SOLUTES: NephronSolute[] = ["Na+", "K+", "Cl-", "HCO3-", "Ca2+", "Mg2+", "H2O"];

export function NephronElectrolyteLab() {
  const { inputs, update, animateTo } = useAnimatedModel(NORMAL); const state = useMemo(() => calculateNephronState(inputs), [inputs]);
  const [solute, setSolute] = useState<NephronSolute>("Na+"); const [selected, setSelected] = useState<NephronSegmentId>("proximal"); const [open, setOpen] = useState(false); const segment = getNephronSegment(state, selected);
  const applyPreset = (id: string) => { const preset = PRESETS.find((item) => item.id === id)!; setOpen(["loop", "thiazide", "enac", "ca"].includes(id)); animateTo(preset.values); };
  return <main className="space-y-5">
    <PhysiologyHeader title="네프론 전해질 수송" description="통상적인 네프론 구조에서 선택한 분절을 확대해 관강, 상피세포, 간질과 모세혈관 사이의 apical·basolateral 수송체를 직접 확인합니다." links={[{ href: "/interactive/acid-base-balance", label: "산-염기 균형" }]} />
    <PresetStrip presets={PRESETS} onSelect={applyPreset} onReset={() => { setOpen(false); animateTo(NORMAL); }} />
    <div className="flex flex-wrap gap-2" aria-label="추적할 용질">{SOLUTES.map((item) => <button type="button" key={item} onClick={() => setSolute(item)} className={`rounded-md border px-3 py-2 text-xs font-semibold ${item === solute ? "border-teal-700 bg-teal-700 text-white" : "border-slate-300 bg-white text-slate-700"}`}>{item}</button>)}</div>
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_370px]">
      <CanvasFrame legend={<div className="flex flex-wrap gap-x-5 gap-y-2"><span><b className="text-teal-800">●</b> 선택 용질의 관강 내 잔존량</span><span>확대 단면 입자 = 실제 막 수송 방향</span><span>선 굵기·입자 수 = 상대적 수송 활성</span><span>네프론 분절을 눌러 확대</span></div>}><NephronP5Canvas state={state} solute={solute} selected={selected} onSelect={setSelected} /></CanvasFrame>
      <ModelPanel title="네프론 변수"><div className="space-y-4">
        <PhysiologyControl label="GFR 상대값" value={inputs.gfr} min={40} max={160} step={1} displayValue={`${inputs.gfr.toFixed(0)}%`} hint="여과 부하와 일일 여과 수분량의 상대적 변화를 나타냅니다." onChange={(value) => update("gfr", value)} />
        <PhysiologyControl label="ADH" value={inputs.adh} min={0} max={100} step={1} displayValue={`${inputs.adh.toFixed(0)}%`} hint="집합관 AQP2와 물 재흡수를 조절합니다." onChange={(value) => update("adh", value)} />
        <PhysiologyControl label="Aldosterone" value={inputs.aldosterone} min={0} max={100} step={1} displayValue={`${inputs.aldosterone.toFixed(0)}%`} hint="ENaC 재흡수와 ROMK/BK K 분비를 증가시킵니다." onChange={(value) => update("aldosterone", value)} />
        <VariableDisclosure open={open} onToggle={setOpen} summary={`Loop ${inputs.loopBlock.toFixed(0)} · TZD ${inputs.thiazideBlock.toFixed(0)} · ENaC ${inputs.enacBlock.toFixed(0)}`}>
          <PhysiologyControl label="NKCC2 차단" value={inputs.loopBlock} min={0} max={100} step={1} displayValue={`${inputs.loopBlock.toFixed(0)}%`} hint="TAL의 Na-K-2Cl 수송과 Ca/Mg 재흡수, 농축기울기를 낮춥니다." onChange={(value) => update("loopBlock", value)} />
          <PhysiologyControl label="NCC 차단" value={inputs.thiazideBlock} min={0} max={100} step={1} displayValue={`${inputs.thiazideBlock.toFixed(0)}%`} hint="DCT NaCl 재흡수를 낮추고 Ca2+ 회수는 증가시킵니다." onChange={(value) => update("thiazideBlock", value)} />
          <PhysiologyControl label="ENaC 차단" value={inputs.enacBlock} min={0} max={100} step={1} displayValue={`${inputs.enacBlock.toFixed(0)}%`} hint="집합관 Na+ 재흡수와 전기적 K+ 분비를 함께 낮춥니다." onChange={(value) => update("enacBlock", value)} />
          <PhysiologyControl label="Carbonic anhydrase 차단" value={inputs.carbonicAnhydraseBlock} min={0} max={100} step={1} displayValue={`${inputs.carbonicAnhydraseBlock.toFixed(0)}%`} hint="PCT의 HCO3- 회수와 NHE3 연계 Na+ 수송을 낮춥니다." onChange={(value) => update("carbonicAnhydraseBlock", value)} />
        </VariableDisclosure>
      </div></ModelPanel>
    </section>
    <section aria-label={`${solute} 분절별 처리 프로파일`} className="overflow-x-auto rounded-md border border-slate-300 bg-[#f8faf9] p-4">
      <div className="grid min-w-[760px] grid-cols-7 gap-2">{state.segments.map((item) => { const handled = item.handled[solute]; return <button type="button" key={item.id} onClick={() => setSelected(item.id)} className={`border-l-4 p-3 text-left ${item.id === selected ? "border-teal-700 bg-teal-50" : "border-slate-300 bg-white"}`}><span className="block text-xs font-bold text-slate-900">{item.shortLabel}</span><span className="mt-2 block font-mono text-xs text-slate-600">도달 {item.delivered[solute].toFixed(1)}%</span><span className={`mt-1 block font-mono text-xs ${handled < 0 ? "text-rose-700" : "text-teal-800"}`}>{handled < 0 ? "분비" : "재흡수"} {Math.abs(handled).toFixed(1)}%</span></button>; })}</div>
    </section>
    <section className="grid rounded-md border border-slate-300 bg-[#f8faf9] py-4 sm:grid-cols-2 xl:grid-cols-4"><PhysiologyMetric label={`${solute} excreted`} value={`${state.excreted[solute].toFixed(1)}%`} status="여과 부하 대비" /><PhysiologyMetric label="Urine volume" value={`${state.urineVolume.toFixed(1)} L/d`} status="교육용 추정" /><PhysiologyMetric label="K excreted" value={`${state.potassiumExcretion.toFixed(1)}%`} status="여과 부하 대비" /><PhysiologyMetric label="Urine osm" value={`${state.urineOsmolality.toFixed(0)} mOsm/kg`} status="농축능 추정" /></section>
    <section className="rounded-md border border-teal-200 bg-teal-50 p-5"><div className="flex items-center gap-2 text-sm font-bold"><Droplets className="h-4 w-4" />{state.pattern}</div><h2 className="mt-2 text-lg font-bold">{segment.label}: {solute}</h2><p className="mt-2 text-sm leading-6 text-slate-700">{segment.note} 이 분절에는 {segment.routes.filter((route) => route.solute === solute).map((route) => [route.apical, route.basolateral].filter(Boolean).join(" → ") || route.path).join(", ") || "주요 순이동 경로 없음"}이 표시됩니다.</p></section>
    <p className="text-xs leading-5 text-slate-500">분절별 정상 여과부하 처리율을 이용한 교육 모델입니다. 실제 배설은 섭취량, 혈류, 산염기 상태, nephron 적응과 약물 병용에 따라 달라집니다.</p>
  </main>;
}
