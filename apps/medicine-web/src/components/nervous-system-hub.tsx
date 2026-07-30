"use client";

import Link from "next/link";
import { Brain, ChevronRight, CircleHelp, Eye, Focus, Layers3, Route, RotateCcw, ShieldAlert, Stethoscope } from "lucide-react";
import { useMemo, useState } from "react";
import type { NeuroAtlas } from "@/lib/webdb";

type Tab = "atlas" | "exam" | "theory";
type ViewId = "neuraxis" | "brain" | "spinal" | "peripheral";

const structurePosition: Record<string, { x: number; y: number; w?: number; h?: number }> = {
  cortex: { x: 205, y: 42, w: 128, h: 76 }, "internal-capsule": { x: 254, y: 96, w: 27, h: 39 }, thalamus: { x: 282, y: 88, w: 28, h: 24 },
  brainstem: { x: 268, y: 143, w: 35, h: 84 }, cerebellum: { x: 319, y: 142, w: 55, h: 66 }, "spinal-cord": { x: 279, y: 226, w: 14, h: 220 },
  root: { x: 292, y: 348, w: 68, h: 12 }, plexus: { x: 358, y: 342, w: 54, h: 28 }, "peripheral-nerve": { x: 412, y: 350, w: 90, h: 10 }, nmj: { x: 503, y: 347, w: 17, h: 17 }, muscle: { x: 523, y: 329, w: 69, h: 51 },
};

function mapViewTargets(view: ViewId) {
  if (view === "brain") return new Set(["cortex", "internal-capsule", "thalamus", "brainstem", "cerebellum"]);
  if (view === "spinal") return new Set(["spinal-cord", "root"]);
  if (view === "peripheral") return new Set(["root", "plexus", "peripheral-nerve", "nmj", "muscle"]);
  return new Set(Object.keys(structurePosition));
}

function NeuraxisMap({ selected, hover, pathway, onSelect, onHover, view, highlighted }: { selected?: string; hover?: string; pathway?: string; onSelect: (id: string) => void; onHover: (id?: string) => void; view: ViewId; highlighted: Set<string> }) {
  const active = selected || hover || pathway;
  const shown = mapViewTargets(view);
  return (
    <svg viewBox="0 0 640 480" role="img" aria-label="뇌에서 골격근까지 이어지는 2차원 신경계 지도" className="h-auto w-full rounded-2xl border border-slate-200 bg-white">
      <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.6" /></pattern></defs>
      <rect width="640" height="480" fill="url(#grid)" />
      <text x="24" y="34" className="fill-slate-500 text-[13px] font-medium">2D neuraxis · click a region to inspect</text>
      <path d="M276 126 L286 220 L286 447" fill="none" stroke="#94a3b8" strokeWidth="16" strokeLinecap="round" />
      <path d="M286 354 C340 328 382 330 428 354 L514 354" fill="none" stroke="#94a3b8" strokeWidth="9" strokeLinecap="round" />
      <path d="M277 104 C315 109 330 131 343 158" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
      <path d="M207 93 C180 47 238 25 286 42 C349 24 377 74 342 117 C332 131 315 143 294 153 L244 141 C222 126 211 110 207 93Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
      <ellipse cx="347" cy="170" rx="42" ry="35" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
      <path d="M524 320 C560 315 600 320 604 351 L597 384 C565 396 540 387 522 376Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
      {["corticospinal", "dcml", "spinothalamic"].map((pathway, index) => {
        const colors = ["#0f766e", "#2563eb", "#e11d48"];
        return <path key={pathway} d={`M${260 + index * 7} 65 L${264 + index * 7} 210 L${285 + index * 4} 342 C${352 + index * 3} 336 ${420 + index * 3} 350 500 350`} fill="none" stroke={colors[index]} strokeWidth="3" strokeDasharray={active === pathway ? "0" : "7 6"} opacity={active === pathway || !active ? 0.9 : 0.18} />;
      })}
      {Object.entries(structurePosition).map(([id, position]) => {
        const isShown = shown.has(id);
        const isActive = active === id || highlighted.has(id);
        const isFaded = !isShown || (active && !isActive && !highlighted.has(id));
        return <g key={id} className="cursor-pointer" opacity={isFaded ? 0.2 : 1} onMouseEnter={() => onHover(id)} onMouseLeave={() => onHover(undefined)} onClick={() => onSelect(id)}>
          <rect x={position.x} y={position.y} width={position.w ?? 18} height={position.h ?? 18} rx="7" fill={isActive ? "#0f766e" : "#ffffff"} stroke={isActive ? "#0f766e" : "#475569"} strokeWidth={isActive ? 3 : 1.5} />
          {isActive ? <circle cx={position.x + (position.w ?? 18) / 2} cy={position.y + (position.h ?? 18) / 2} r="4" fill="white" /> : null}
        </g>;
      })}
      <text x="202" y="180" className="fill-slate-500 text-[12px]">뇌</text><text x="230" y="290" className="fill-slate-500 text-[12px]">척수</text><text x="382" y="314" className="fill-slate-500 text-[12px]">말초</text><text x="525" y="410" className="fill-slate-500 text-[12px]">근육</text>
    </svg>
  );
}

export function NervousSystemHub({ atlas }: { atlas: NeuroAtlas }) {
  const [tab, setTab] = useState<Tab>("atlas");
  const [view, setView] = useState<ViewId>("neuraxis");
  const [selectedStructure, setSelectedStructure] = useState("cortex");
  const [selectedPathway, setSelectedPathway] = useState("corticospinal");
  const [hovered, setHovered] = useState<string>();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const selected = atlas.structures.find((item) => item.id === selectedStructure) ?? atlas.structures[0];
  const activePathway = atlas.pathways.find((item) => item.id === selectedPathway) ?? atlas.pathways[0];
  const highlighted = useMemo(() => new Set(Object.values(answers).flatMap((answer) => atlas.nexSteps.flatMap((step) => step.choices).find((choice) => choice.id === answer)?.targets ?? [])), [answers, atlas]);
  const currentStep = atlas.nexSteps[stepIndex];
  const selectedChoice = currentStep?.choices.find((choice) => choice.id === answers[currentStep.id]);

  const chooseStructure = (id: string) => {
    setSelectedStructure(id);
    setSelectedPathway("");
  };

  return <main className="space-y-6 pb-14">
    <header className="rounded-2xl border border-teal-200 bg-gradient-to-br from-white via-teal-50 to-cyan-50 p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700"><Brain className="h-4 w-4" />Neuro Atlas</div><h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">신경계 Hub</h1><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">뇌에서 척수·말초신경·신경근접합부·근육까지의 연결을 지도와 신경진찰 관점으로 복습합니다.</p></div><div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-900"><ShieldAlert className="mr-1 inline h-4 w-4" />{atlas.disclaimer}</div></div>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist">{([ ["atlas", "신경계 구조", Layers3], ["exam", "NEx 위치추정", Stethoscope], ["theory", "이론 정리", CircleHelp] ] as const).map(([id, label, Icon]) => <button key={id} onClick={() => setTab(id)} className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${tab === id ? "bg-slate-950 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300"}`}><Icon className="h-4 w-4" />{label}</button>)}</div>
    </header>

    {tab === "atlas" ? <section className="grid gap-6 xl:grid-cols-[230px_minmax(0,1fr)_300px]">
      <aside className="space-y-4 xl:sticky xl:top-5 xl:self-start"><div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">View</p><div className="mt-3 grid gap-2">{atlas.views.map((item) => <button key={item.id} onClick={() => setView(item.id as ViewId)} className={`rounded-xl px-3 py-3 text-left text-sm font-semibold ${view === item.id ? "bg-teal-700 text-white" : "bg-slate-50 text-slate-700 hover:bg-teal-50"}`}><span className="block">{item.label}</span><span className={`mt-1 block text-xs font-normal ${view === item.id ? "text-teal-100" : "text-slate-500"}`}>{item.description}</span></button>)}</div></div><div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Pathway overlay</p><div className="mt-3 grid gap-2">{atlas.pathways.map((item) => <button key={item.id} onClick={() => { setSelectedPathway(item.id); setSelectedStructure(""); }} className={`rounded-lg border px-3 py-2 text-left text-sm ${selectedPathway === item.id ? "border-teal-600 bg-teal-50 font-bold text-teal-900" : "border-slate-200 text-slate-600"}`}>{item.ko}</button>)}</div></div></aside>
      <div className="space-y-4"><div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm sm:p-5"><NeuraxisMap selected={selectedStructure} hover={hovered} pathway={selectedPathway} onSelect={chooseStructure} onHover={setHovered} view={view} highlighted={highlighted} /><div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-full bg-teal-700" />선택/강조</span><span className="inline-flex items-center gap-1"><i className="h-0.5 w-6 bg-teal-700" />피질척수로</span><span className="inline-flex items-center gap-1"><i className="h-0.5 w-6 bg-blue-600" />DCML</span><span className="inline-flex items-center gap-1"><i className="h-0.5 w-6 bg-rose-600" />척수시상로</span></div></div><div className="grid gap-3 sm:grid-cols-2">{atlas.structures.filter((item) => mapViewTargets(view).has(item.id)).map((item) => <button key={item.id} onClick={() => chooseStructure(item.id)} className={`rounded-xl border p-3 text-left ${selectedStructure === item.id ? "border-teal-600 bg-teal-50" : "border-slate-200 bg-white hover:border-teal-300"}`}><span className="text-xs font-bold text-teal-700">{item.group}</span><span className="mt-1 block font-bold text-slate-900">{item.ko}</span><span className="block text-xs text-slate-500">{item.en}</span></button>)}</div></div>
      <aside className="xl:sticky xl:top-5 xl:self-start"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">{selectedPathway ? <><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700"><Route className="h-4 w-4" />Pathway</div><h2 className="mt-3 text-xl font-bold text-slate-950">{activePathway.ko}</h2><p className="text-sm text-slate-500">{activePathway.en}</p><p className="mt-4 text-sm leading-6 text-slate-700">{activePathway.route}</p><div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-950"><b>병변 해석</b><br />{activePathway.pattern}</div>{activePathway.links.map((title) => <Link key={title} href={`/search?q=${encodeURIComponent(title)}`} className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-teal-300">{title}<ChevronRight className="h-4 w-4" /></Link>)}</> : <><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700"><Focus className="h-4 w-4" />Structure</div><h2 className="mt-3 text-xl font-bold text-slate-950">{selected.ko}</h2><p className="text-sm text-slate-500">{selected.en}</p><p className="mt-4 text-sm leading-6 text-slate-700">{selected.summary}</p>{selected.links.map((title) => <Link key={title} href={`/search?q=${encodeURIComponent(title)}`} className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-teal-300">관련 문서 찾기<ChevronRight className="h-4 w-4" /></Link>)}</>}</div></aside>
    </section> : null}

    {tab === "exam" ? <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-3"><div><div className="text-xs font-bold uppercase tracking-wider text-teal-700">Sequential localization</div><h2 className="mt-2 text-2xl font-bold text-slate-950">신경진찰 위치추정</h2></div><button onClick={() => { setAnswers({}); setStepIndex(0); }} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"><RotateCcw className="h-4 w-4" />초기화</button></div><div className="mt-6 flex gap-2">{atlas.nexSteps.map((step, index) => <button key={step.id} onClick={() => setStepIndex(index)} className={`h-2 flex-1 rounded-full ${index <= stepIndex ? "bg-teal-600" : "bg-slate-200"}`} aria-label={`${index + 1}단계`} />)}</div><p className="mt-6 text-sm font-bold text-teal-700">{stepIndex + 1} / {atlas.nexSteps.length}</p><h3 className="mt-2 text-xl font-bold leading-8 text-slate-950">{currentStep.question}</h3><div className="mt-5 grid gap-3">{currentStep.choices.map((choice) => <button key={choice.id} onClick={() => setAnswers((previous) => ({ ...previous, [currentStep.id]: choice.id }))} className={`rounded-xl border p-4 text-left transition ${answers[currentStep.id] === choice.id ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"}`}><span className="font-bold text-slate-900">{choice.label}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{choice.note}</span></button>)}</div>{selectedChoice ? <div className="mt-6 flex justify-between gap-3"><button disabled={stepIndex === 0} onClick={() => setStepIndex((value) => value - 1)} className="rounded-lg border border-slate-200 px-4 py-2 text-sm disabled:opacity-40">이전</button>{stepIndex < atlas.nexSteps.length - 1 ? <button onClick={() => setStepIndex((value) => value + 1)} className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-bold text-white">다음 단계</button> : <button onClick={() => setTab("atlas")} className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white">지도에서 보기</button>}</div> : null}</div><div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><NeuraxisMap selected={undefined} onSelect={chooseStructure} onHover={() => undefined} view="neuraxis" highlighted={highlighted} /></div></section> : null}

    {tab === "theory" ? <section className="grid gap-5 lg:grid-cols-2"><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-slate-950">감각·운동 경로</h2><p className="mt-3 text-sm leading-7 text-slate-600">운동은 피질척수로, 진동·위치감각은 DCML, 통각·온각은 척수시상로를 기본 축으로 삼아 교차 위치와 병변 레벨을 함께 봅니다. 단일 징후가 아니라 전체 패턴으로 위치를 추정합니다.</p><div className="mt-4 flex flex-wrap gap-2">{atlas.pathways.map((item) => <button key={item.id} onClick={() => { setSelectedPathway(item.id); setTab("atlas"); }} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm hover:border-teal-400">{item.ko}</button>)}</div></article><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-slate-950">피부분절·근육분절·반사</h2><div className="mt-4 grid gap-2 sm:grid-cols-2">{atlas.dermatomes.map((item) => <div key={item.id} className="rounded-lg bg-slate-50 p-3 text-sm"><b>{item.label}</b><span className="ml-2 text-slate-600">{item.area}</span></div>)}</div></article><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-slate-950">근육분절</h2><div className="mt-4 space-y-2">{atlas.myotomes.map((item) => <div key={item.id} className="flex justify-between gap-3 rounded-lg bg-slate-50 p-3 text-sm"><span><b>{item.label}</b> · {item.action}</span><span className="text-slate-500">{item.reflex}</span></div>)}</div></article><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-slate-950">반사 회로</h2><div className="mt-4 space-y-2">{atlas.reflexes.map((item) => <div key={item.id} className="rounded-lg border border-slate-200 p-3"><b className="text-sm">{item.label}</b><p className="mt-1 text-sm text-slate-600">{item.arc}</p><p className="mt-1 text-xs text-teal-800">{item.localization}</p></div>)}</div></article><article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2"><h2 className="text-xl font-bold text-slate-950">근거와 사용 범위</h2><p className="mt-3 text-sm leading-7 text-slate-600">해부학적 도식과 신경진찰의 기본 틀을 빠르게 복습하기 위한 도구입니다. 레벨 판정·전기진단·척수손상 표준화는 각 공식 자료와 현지 진료 체계의 최신 지침을 확인합니다.</p><div className="mt-4 flex flex-wrap gap-2">{atlas.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 hover:border-teal-400"><Eye className="mr-1 inline h-3.5 w-3.5" />{source.label}</a>)}</div></article></section> : null}
  </main>;
}