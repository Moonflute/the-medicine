"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Activity, Droplets, Gauge, RotateCcw, Scale, Wind } from "lucide-react";
import { AcidBaseP5Canvas, type AcidBaseSimulationView } from "@/components/acid-base-p5-canvas";
import {
  calculateAcidBaseState,
  compensatedInputs,
  type AcidBaseInputs,
} from "@/lib/acid-base-model";

const NORMAL_INPUTS: AcidBaseInputs = { ventilation: 100, co2Production: 100, bicarbonate: 24 };

const PRESETS: Array<{ id: string; label: string; cause: string; primaryChange: string; values: AcidBaseInputs }> = [
  { id: "normal", label: "정상", cause: "정상 생리 상태", primaryChange: "CO₂ / HCO₃⁻ 평형", values: NORMAL_INPUTS },
  { id: "hypoventilation", label: "저환기", cause: "폐포 저환기 발생", primaryChange: "CO₂ 저류", values: { ventilation: 55, co2Production: 100, bicarbonate: 24 } },
  { id: "hyperventilation", label: "과환기", cause: "폐포 과환기 발생", primaryChange: "CO₂ 과다 제거", values: { ventilation: 155, co2Production: 100, bicarbonate: 24 } },
  { id: "bicarbonate-loss", label: "HCO₃⁻ 소실", cause: "bicarbonate 소실", primaryChange: "HCO₃⁻ 감소", values: { ventilation: 100, co2Production: 100, bicarbonate: 14 } },
  { id: "bicarbonate-gain", label: "HCO₃⁻ 증가", cause: "알칼리 부하 / H⁺ 소실", primaryChange: "HCO₃⁻ 증가", values: { ventilation: 100, co2Production: 100, bicarbonate: 34 } },
];

const INITIAL_SIMULATION: AcidBaseSimulationView = {
  phase: "steady",
  progress: 1,
  cause: "정상 생리 상태",
  primaryChange: "CO₂ / HCO₃⁻ 평형",
  timeLabel: "steady state",
  compensatingSystem: null,
};

function compensationSystemFor(state: ReturnType<typeof calculateAcidBaseState>): "lung" | "kidney" | null {
  if (state.bicarbonate < 22 || state.bicarbonate > 26) return "lung";
  if (state.paCO2 < 35 || state.paCO2 > 45) return "kidney";
  return null;
}

function interpolateInputs(from: AcidBaseInputs, to: AcidBaseInputs, progress: number): AcidBaseInputs {
  return {
    ventilation: from.ventilation + (to.ventilation - from.ventilation) * progress,
    co2Production: from.co2Production + (to.co2Production - from.co2Production) * progress,
    bicarbonate: from.bicarbonate + (to.bicarbonate - from.bicarbonate) * progress,
  };
}

function Control({
  label,
  value,
  min,
  max,
  step,
  unit,
  hint,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  hint: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block border-b border-slate-200 pb-4 last:border-0 last:pb-0">
      <span className="flex items-center justify-between gap-3 text-sm font-bold text-slate-900">
        <span>{label}</span>
        <span className="font-mono text-teal-800">{value.toFixed(step < 1 ? 1 : 0)} {unit}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-2 w-full cursor-pointer accent-teal-700"
      />
      <span className="mt-2 block text-xs leading-5 text-slate-500">{hint}</span>
    </label>
  );
}

function Metric({ label, value, status }: { label: string; value: string; status?: string }) {
  return (
    <div className="min-w-0 border-l border-slate-300 px-4 py-1 first:border-l-0">
      <div className="text-[11px] font-semibold uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-xl font-semibold tabular-nums text-slate-950">{value}</div>
      {status ? <div className="mt-1 text-xs text-slate-600">{status}</div> : null}
    </div>
  );
}

export function AcidBaseBalanceLab() {
  const [inputs, setInputs] = useState<AcidBaseInputs>(NORMAL_INPUTS);
  const [simulation, setSimulation] = useState<AcidBaseSimulationView>(INITIAL_SIMULATION);
  const animationRef = useRef<number | null>(null);
  const state = useMemo(() => calculateAcidBaseState(inputs), [inputs]);
  const compensationSystem = compensationSystemFor(state);
  const statusStyle = state.status === "acidemia"
      ? "border-[#d8c0c0] bg-[#f7f1f1] text-[#713f3f]"
    : state.status === "alkalemia"
      ? "border-[#cbc8d8] bg-[#f3f2f6] text-[#514d6d]"
      : "border-[#b8ceca] bg-[#f0f5f3] text-[#315f58]";
  const compensationStyle = state.compensationTone === "mixed"
    ? "border-[#d7c8ad] bg-[#f7f4ed]"
    : state.compensationTone === "ok"
      ? "border-[#b8ceca] bg-[#f0f5f3]"
      : "border-slate-300 bg-[#f5f7f6]";

  const stopAnimation = () => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
  };

  useEffect(() => () => stopAnimation(), []);

  const animateInputs = (
    target: AcidBaseInputs,
    duration: number,
    onFrame: (progress: number) => void,
    onComplete: () => void,
  ) => {
    stopAnimation();
    const from = inputs;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setInputs(interpolateInputs(from, target, eased));
      onFrame(progress);
      if (progress < 1) animationRef.current = requestAnimationFrame(tick);
      else {
        animationRef.current = null;
        onComplete();
      }
    };
    animationRef.current = requestAnimationFrame(tick);
  };

  const applyPreset = (preset: (typeof PRESETS)[number]) => {
    setSimulation({
      phase: "disturbance",
      progress: 0,
      cause: preset.cause,
      primaryChange: preset.primaryChange,
      timeLabel: "발생 중",
      compensatingSystem: null,
    });
    animateInputs(
      preset.values,
      1200,
      (progress) => setSimulation((current) => ({ ...current, progress: progress * 0.34, timeLabel: `${Math.round(progress * 5)} min` })),
      () => setSimulation({
        phase: preset.id === "normal" ? "steady" : "acute",
        progress: preset.id === "normal" ? 1 : 0.34,
        cause: preset.cause,
        primaryChange: preset.primaryChange,
        timeLabel: preset.id === "normal" ? "steady state" : "급성 · 보상 전",
        compensatingSystem: null,
      }),
    );
  };

  const update = (key: keyof AcidBaseInputs, value: number) => {
    stopAnimation();
    setInputs((current) => ({ ...current, [key]: value }));
    const primaryChange = key === "ventilation" ? "폐포 환기 변화" : key === "co2Production" ? "CO₂ 생성 변화" : "HCO₃⁻ 변화";
    setSimulation({ phase: "acute", progress: 0.34, cause: "직접 변수 조절", primaryChange, timeLabel: "급성 · 보상 전", compensatingSystem: null });
  };

  const runCompensation = () => {
    const system = compensationSystemFor(state);
    if (!system || simulation.phase === "compensating") return;
    const target = compensatedInputs(state);
    setSimulation((current) => ({ ...current, phase: "compensating", progress: 0.34, compensatingSystem: system, timeLabel: system === "lung" ? "0 min" : "0 h" }));
    animateInputs(
      target,
      4200,
      (progress) => setSimulation((current) => ({
        ...current,
        phase: "compensating",
        progress: 0.34 + progress * 0.66,
        compensatingSystem: system,
        timeLabel: system === "lung" ? `${Math.round(progress * 30)} min` : `${Math.round(progress * 48)} h`,
      })),
      () => setSimulation((current) => ({ ...current, phase: "compensated", progress: 1, compensatingSystem: system, timeLabel: system === "lung" ? "30 min · 새 평형" : "48 h · 새 평형" })),
    );
  };

  return (
    <main className="space-y-5">
      <header className="border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase text-teal-800">
          <Activity className="h-4 w-4" />
          Interactive physiology
        </div>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">산-염기 균형</h1>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">
          폐가 조절하는 CO₂와 신장·대사 상태를 반영하는 HCO₃⁻의 비가 pH를 결정합니다. 각 변수를 바꾸며 보상과 혼합성 장애가 어떻게 나타나는지 확인합니다.
        </p>
      </header>

      <section aria-label="산-염기 프리셋" className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-4">
        <span className="mr-2 text-xs font-semibold uppercase text-slate-500">Clinical states</span>
        {PRESETS.map((preset) => (
          <button key={preset.id} type="button" onClick={() => applyPreset(preset)} className="rounded-md border border-slate-300 bg-[#f7f9f8] px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-teal-500 hover:bg-white hover:text-teal-900">
            {preset.label}
          </button>
        ))}
        <button type="button" onClick={() => applyPreset(PRESETS[0])} className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-800" aria-label="정상 상태로 초기화" title="정상 상태로 초기화">
          <RotateCcw className="h-4 w-4" />
        </button>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 overflow-hidden rounded-md border border-slate-300 bg-[#eef2f1] shadow-sm">
          <AcidBaseP5Canvas state={state} simulation={simulation} />
        </div>
        <aside aria-label="산-염기 조절 변수" className="rounded-md border border-slate-300 bg-[#f8faf9] p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <Gauge className="h-5 w-5 text-teal-700" />
            <div><div className="text-[11px] font-semibold uppercase text-slate-500">Model inputs</div><h2 className="text-base font-semibold text-slate-950">생리 변수</h2></div>
          </div>
          <div className="space-y-4">
            <Control label="폐포 환기" value={inputs.ventilation} min={40} max={160} step={1} unit="%" hint="올리면 CO2 배출이 증가해 PaCO2가 내려갑니다." onChange={(value) => update("ventilation", value)} />
            <Control label="CO₂ 생성 부하" value={inputs.co2Production} min={60} max={160} step={1} unit="%" hint="대사로 만들어지는 volatile acid 부하를 나타냅니다." onChange={(value) => update("co2Production", value)} />
            <Control label="HCO₃⁻ 상태" value={inputs.bicarbonate} min={8} max={40} step={0.5} unit="mmol/L" hint="신장 산 배설, bicarbonate 재생, 위장관 손실과 외부 알칼리 부하가 반영됩니다." onChange={(value) => update("bicarbonate", value)} />
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
            <span className="font-semibold text-slate-700">{simulation.phase === "compensating" ? "보상 진행 중" : simulation.phase === "compensated" ? "보상 후 새 평형" : simulation.phase === "acute" ? "급성 변화" : "현재 상태"}</span>
            <span className="font-mono tabular-nums text-slate-500">{simulation.timeLabel}</span>
          </div>
          <button type="button" onClick={runCompensation} disabled={!compensationSystem || simulation.phase === "compensating" || simulation.phase === "compensated"} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#27383c] px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-900 disabled:cursor-not-allowed disabled:bg-slate-300">
            <Scale className="h-4 w-4" />
            {simulation.phase === "compensating" ? `보상 진행 중 · ${simulation.timeLabel}` : simulation.phase === "compensated" ? "예상 보상 완료" : "예상 보상 진행"}
          </button>
        </aside>
      </section>

      <section aria-label="계산 결과" className="grid gap-y-4 rounded-md border border-slate-300 bg-[#f8faf9] py-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="pH" value={state.pH.toFixed(2)} status={state.status === "normal" ? "7.35-7.45" : state.status === "acidemia" ? "acidemia" : "alkalemia"} />
        <Metric label="PaCO₂" value={`${state.paCO2.toFixed(0)} mmHg`} status="호흡 성분" />
        <Metric label="HCO₃⁻" value={`${state.bicarbonate.toFixed(1)} mmol/L`} status="대사·신장 성분" />
        <Metric label="HCO₃⁻ : dissolved CO₂" value={`${state.ratio.toFixed(1)} : 1`} status="정상 약 20 : 1" />
      </section>

      <section className={`rounded-lg border p-5 ${statusStyle}`} aria-live="polite">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase"><Droplets className="h-4 w-4" />Current pattern</div>
        <h2 className="mt-2 text-xl font-bold">{state.pattern}</h2>
        <p className="mt-2 text-sm leading-6">{state.explanation}</p>
      </section>

      <section className={`rounded-lg border p-5 ${compensationStyle}`} aria-live="polite">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Wind className="h-4 w-4 text-teal-700" />예상 보상 점검</div>
        <p className="mt-2 text-sm leading-6 text-slate-700">{state.compensation}</p>
        <p className="mt-2 text-xs leading-5 text-slate-500">보상은 pH를 정상 방향으로 이동시키지만 원래 장애를 제거하지 않으며, 정상 범위를 과도하게 넘어서는 변화는 혼합성 장애를 시사할 수 있습니다.</p>
      </section>

      <section className="grid gap-4 border-t border-slate-200 pt-6 md:grid-cols-3">
        <article className="border-l-4 border-blue-500 pl-4"><h2 className="font-bold text-slate-950">폐: 빠른 조절</h2><p className="mt-2 text-sm leading-6 text-slate-600">분 단위로 환기를 바꿔 PaCO2를 조절합니다. 저환기는 산증, 과환기는 알칼리증 방향입니다.</p></article>
        <article className="border-l-4 border-amber-500 pl-4"><h2 className="font-bold text-slate-950">신장: 느린 조절</h2><p className="mt-2 text-sm leading-6 text-slate-600">H+ 배설과 HCO3- 재흡수·재생을 통해 수시간에서 수일에 걸쳐 보상합니다.</p></article>
        <article className="border-l-4 border-rose-500 pl-4"><h2 className="font-bold text-slate-950">임상: 비율을 읽기</h2><p className="mt-2 text-sm leading-6 text-slate-600">pH만 보지 않고 PaCO2와 HCO3-가 어느 방향으로 움직였는지, 예상 보상 범위에 드는지 함께 확인합니다.</p></article>
      </section>

      <p className="border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
        학습용 단순화 모델입니다. 실제 ABGA 해석에서는 검체, FiO2, albumin, 전해질, 시간 경과와 환자 상태를 함께 평가해야 합니다.
      </p>
    </main>
  );
}
