"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Activity, ArrowRight, Droplets, Gauge, RotateCcw, Wind } from "lucide-react";
import { OxygenationP5Canvas, type OxygenationSimulationView } from "@/components/oxygenation-p5-canvas";
import {
  calculateOxygenationState,
  type OxygenationInputs,
} from "@/lib/oxygenation-model";

const NORMAL_INPUTS: OxygenationInputs = {
  fio2: 0.21,
  respiratoryRate: 14,
  vqMismatch: 0,
  shuntFraction: 0.02,
  hemoglobin: 14,
  pH: 7.4,
};

const PRESETS: Array<{ id: string; label: string; cause: string; values: OxygenationInputs }> = [
  { id: "normal", label: "정상", cause: "Room air · 정상 가스교환", values: NORMAL_INPUTS },
  { id: "hypoventilation", label: "저환기", cause: "폐포 환기 저하", values: { ...NORMAL_INPUTS, respiratoryRate: 7, pH: 7.28 } },
  { id: "vq-mismatch", label: "V/Q 불균형", cause: "낮은 V/Q 폐단위 증가", values: { ...NORMAL_INPUTS, respiratoryRate: 20, vqMismatch: 65, shuntFraction: 0.04, pH: 7.44 } },
  { id: "shunt", label: "Shunt", cause: "비환기 혈류 혼합", values: { ...NORMAL_INPUTS, fio2: 0.6, respiratoryRate: 20, vqMismatch: 20, shuntFraction: 0.35 } },
  { id: "anemia", label: "빈혈", cause: "Hemoglobin 감소", values: { ...NORMAL_INPUTS, hemoglobin: 7 } },
];

const INITIAL_SIMULATION: OxygenationSimulationView = {
  phase: "steady",
  progress: 1,
  cause: "Room air · 정상 가스교환",
  timeLabel: "steady state",
};

function interpolateInputs(from: OxygenationInputs, to: OxygenationInputs, progress: number): OxygenationInputs {
  return {
    fio2: from.fio2 + (to.fio2 - from.fio2) * progress,
    respiratoryRate: from.respiratoryRate + (to.respiratoryRate - from.respiratoryRate) * progress,
    vqMismatch: from.vqMismatch + (to.vqMismatch - from.vqMismatch) * progress,
    shuntFraction: from.shuntFraction + (to.shuntFraction - from.shuntFraction) * progress,
    hemoglobin: from.hemoglobin + (to.hemoglobin - from.hemoglobin) * progress,
    pH: from.pH + (to.pH - from.pH) * progress,
  };
}

function Control({
  label,
  value,
  min,
  max,
  step,
  displayValue,
  hint,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  hint: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block border-b border-slate-200 pb-4 last:border-0 last:pb-0">
      <span className="flex items-center justify-between gap-3 text-sm font-bold text-slate-900">
        <span>{label}</span>
        <span className="font-mono text-teal-800">{displayValue}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-3 h-2 w-full cursor-pointer accent-teal-700" />
      <span className="mt-2 block text-xs leading-5 text-slate-500">{hint}</span>
    </label>
  );
}

function Metric({ label, value, status }: { label: string; value: string; status: string }) {
  return (
    <div className="min-w-0 border-l border-slate-300 px-4 py-1 first:border-l-0">
      <div className="text-[11px] font-semibold uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-slate-950">{value}</div>
      <div className="mt-1 text-xs text-slate-600">{status}</div>
    </div>
  );
}

function SimulationLegend() {
  return (
    <div role="note" aria-label="산소화 시뮬레이션 범례" className="border-t border-slate-300 bg-[#f8faf9] px-4 py-3">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs leading-5 text-slate-600">
        <span className="inline-flex items-center gap-2"><span className="flex" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#297f91]" /><span className="-ml-0.5 h-2 w-2 rounded-full bg-[#297f91]" /></span><strong className="text-slate-800">O₂</strong> 농도·이동</span>
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-4 rounded-full bg-[#a45d62]" aria-hidden="true" />산소화 혈류</span>
        <span className="inline-flex items-center gap-2"><span className="h-1 w-4 bg-[#725d74]" aria-hidden="true" />비환기 shunt 혈류</span>
        <span className="inline-flex items-center gap-2"><ArrowRight className="h-3.5 w-4 text-slate-500" aria-hidden="true" />입자 수·속도·선 굵기 = 상대적 농도와 flux</span>
      </div>
    </div>
  );
}

export function OxygenationGasExchangeLab() {
  const [inputs, setInputs] = useState<OxygenationInputs>(NORMAL_INPUTS);
  const [simulation, setSimulation] = useState<OxygenationSimulationView>(INITIAL_SIMULATION);
  const animationRef = useRef<number | null>(null);
  const state = useMemo(() => calculateOxygenationState(inputs), [inputs]);
  const statusStyle = state.status === "critical"
    ? "border-[#d8c0c0] bg-[#f7f1f1] text-[#713f3f]"
    : state.status === "impaired"
      ? "border-[#d7c8ad] bg-[#f7f4ed] text-[#70562e]"
      : "border-[#b8ceca] bg-[#f0f5f3] text-[#315f58]";

  const stopAnimation = () => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
  };

  useEffect(() => () => stopAnimation(), []);

  const animateInputs = (target: OxygenationInputs, cause: string, duration = 1400) => {
    stopAnimation();
    const from = inputs;
    let startedAt: number | null = null;
    setSimulation({ phase: "transition", progress: 0, cause, timeLabel: "변화 중" });
    const tick = (now: number) => {
      if (startedAt === null) startedAt = now;
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setInputs(interpolateInputs(from, target, eased));
      setSimulation({ phase: progress < 1 ? "transition" : "settled", progress, cause, timeLabel: progress < 1 ? `${Math.round(progress * 60)} sec` : "새 평형" });
      if (progress < 1) animationRef.current = requestAnimationFrame(tick);
      else animationRef.current = null;
    };
    animationRef.current = requestAnimationFrame(tick);
  };

  const update = (key: keyof OxygenationInputs, value: number) => {
    stopAnimation();
    setInputs((current) => ({ ...current, [key]: value }));
    setSimulation({ phase: "settled", progress: 1, cause: "직접 변수 조절", timeLabel: "새 평형" });
  };

  const testOxygenResponse = () => animateInputs({ ...inputs, fio2: 1 }, "FiO₂ 100% 반응 확인", 1800);

  return (
    <main className="space-y-5">
      <header className="border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-teal-800"><Activity className="h-4 w-4" />Interactive physiology</div>
          <Link href="/interactive/acid-base-balance" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-800">산-염기 균형 <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">산소화와 가스교환</h1>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">FiO₂와 환기가 폐포 산소를 만들고, V/Q 불균형과 shunt가 동맥혈 산소화를 제한하며, hemoglobin이 실제 조직 운반량을 결정하는 과정을 확인합니다.</p>
      </header>

      <section aria-label="산소화 프리셋" className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-4">
        <span className="mr-2 text-xs font-semibold uppercase text-slate-500">Clinical states</span>
        {PRESETS.map((preset) => <button key={preset.id} type="button" onClick={() => animateInputs(preset.values, preset.cause)} className="rounded-md border border-slate-300 bg-[#f7f9f8] px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-teal-500 hover:bg-white hover:text-teal-900">{preset.label}</button>)}
        <button type="button" onClick={() => animateInputs(NORMAL_INPUTS, "Room air · 정상 가스교환")} className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-800" aria-label="정상 상태로 초기화" title="정상 상태로 초기화"><RotateCcw className="h-4 w-4" /></button>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_370px]">
        <div className="min-w-0 overflow-hidden rounded-md border border-slate-300 bg-[#eef2f1] shadow-sm">
          <OxygenationP5Canvas state={state} simulation={simulation} />
          <SimulationLegend />
        </div>
        <aside aria-label="산소화 조절 변수" className="rounded-md border border-slate-300 bg-[#f8faf9] p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-2"><Gauge className="h-5 w-5 text-teal-700" /><div><div className="text-[11px] font-semibold uppercase text-slate-500">Model inputs</div><h2 className="text-base font-semibold text-slate-950">가스교환 변수</h2></div></div>
          <div className="space-y-4">
            <Control label="흡입 산소 FiO₂" value={inputs.fio2} min={0.21} max={1} step={0.01} displayValue={`${(inputs.fio2 * 100).toFixed(0)}%`} hint="해발 0 m, 대기압 760 mmHg를 가정합니다." onChange={(value) => update("fio2", value)} />
            <Control label="호흡수 RR" value={inputs.respiratoryRate} min={6} max={30} step={1} displayValue={`${inputs.respiratoryRate.toFixed(0)} /min`} hint="1회호흡량·사강·CO₂ 생성이 일정하다고 가정해 PaCO₂를 추정합니다." onChange={(value) => update("respiratoryRate", value)} />
            <Control label="V/Q 불균형" value={inputs.vqMismatch} min={0} max={100} step={1} displayValue={`${inputs.vqMismatch.toFixed(0)}%`} hint="실제 측정 단위가 아닌 폐단위 불균형을 나타내는 교육용 지수입니다." onChange={(value) => update("vqMismatch", value)} />
            <Control label="Shunt fraction" value={inputs.shuntFraction} min={0} max={0.35} step={0.01} displayValue={`${(inputs.shuntFraction * 100).toFixed(0)}%`} hint="환기된 폐포를 거치지 않고 동맥혈에 섞이는 혈류 비율입니다." onChange={(value) => update("shuntFraction", value)} />
            <Control label="Hemoglobin" value={inputs.hemoglobin} min={5} max={20} step={0.5} displayValue={`${inputs.hemoglobin.toFixed(1)} g/dL`} hint="포화도가 같아도 Hb가 낮으면 산소함량은 감소합니다." onChange={(value) => update("hemoglobin", value)} />
            <Control label="pH / Bohr shift" value={inputs.pH} min={7.1} max={7.6} step={0.01} displayValue={inputs.pH.toFixed(2)} hint={`현재 추정 P50 ${state.p50.toFixed(1)} mmHg · 산증은 해리곡선을 우측으로 이동시킵니다.`} onChange={(value) => update("pH", value)} />
          </div>
          <button type="button" onClick={testOxygenResponse} disabled={inputs.fio2 >= 0.995 || simulation.phase === "transition"} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#27383c] px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-900 disabled:cursor-not-allowed disabled:bg-slate-300"><Wind className="h-4 w-4" />FiO₂ 100% 반응 보기</button>
        </aside>
      </section>

      <section aria-label="산소화 계산 결과" className="grid gap-y-4 rounded-md border border-slate-300 bg-[#f8faf9] py-4 sm:grid-cols-2 xl:grid-cols-5">
        <Metric label="PAO₂" value={`${state.alveolarPO2.toFixed(0)} mmHg`} status="폐포 산소" />
        <Metric label="PaO₂" value={`${state.paO2.toFixed(0)} mmHg`} status="동맥혈 산소" />
        <Metric label="SaO₂" value={`${state.saO2.toFixed(0)}%`} status="Hb 포화도" />
        <Metric label="A–a gradient" value={`${state.aaGradient.toFixed(0)} mmHg`} status="가스교환 간극" />
        <Metric label="CaO₂" value={`${state.caO2.toFixed(1)} mL/dL`} status="동맥혈 산소함량" />
      </section>

      <section className={`rounded-lg border p-5 ${statusStyle}`} aria-live="polite">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase"><Droplets className="h-4 w-4" />Current pattern</div>
        <h2 className="mt-2 text-xl font-bold">{state.pattern}</h2>
        <p className="mt-2 text-sm leading-6">{state.explanation}</p>
      </section>

      <section className="rounded-lg border border-slate-300 bg-[#f5f7f6] p-5" aria-live="polite">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Wind className="h-4 w-4 text-teal-700" />산소 반응 해석</div>
        <p className="mt-2 text-sm leading-6 text-slate-700">{state.oxygenResponse}</p>
      </section>

      <section className="grid gap-4 border-t border-slate-200 pt-6 md:grid-cols-3">
        <article className="border-l-4 border-cyan-600 pl-4"><h2 className="font-bold text-slate-950">PAO₂: 공급과 환기</h2><p className="mt-2 text-sm leading-6 text-slate-600">FiO₂가 높을수록 증가하고, 저환기로 PaCO₂가 올라가면 alveolar gas equation에 따라 감소합니다.</p></article>
        <article className="border-l-4 border-violet-500 pl-4"><h2 className="font-bold text-slate-950">A–a: 폐 내 전달</h2><p className="mt-2 text-sm leading-6 text-slate-600">V/Q 불균형과 shunt는 폐포와 동맥혈 사이의 산소 차이를 키웁니다.</p></article>
        <article className="border-l-4 border-rose-500 pl-4"><h2 className="font-bold text-slate-950">CaO₂: 실제 운반량</h2><p className="mt-2 text-sm leading-6 text-slate-600">PaO₂보다 Hb와 SaO₂가 산소함량을 크게 좌우하므로 정상 포화도가 충분한 운반량을 보장하지 않습니다.</p></article>
      </section>

      <p className="border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">학습용 단순화 모델입니다. 해발 0 m, 정상 체온, RQ 0.8, 고정된 1회호흡량·사강·CO₂ 생성을 가정합니다. V/Q 불균형 지수와 PaO₂·SaO₂는 실제 환자 측정값이 아니며, 임상에서는 ABGA/co-oximetry, 산소 장치, 혈역학과 질환별 목표를 함께 평가해야 합니다.</p>
    </main>
  );
}
