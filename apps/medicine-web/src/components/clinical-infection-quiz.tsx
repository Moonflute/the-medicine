"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ChevronRight, ExternalLink, RotateCcw, XCircle } from "lucide-react";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathway, InfectionPathwayDataset, InfectionQuizType } from "@/lib/infection-types";

type Source = InfectionPathwayDataset["sources"][number];
type Choice = { id: string; label: string };
type Question = { id: string; type: InfectionQuizType; prompt: string; choices: Choice[]; correctId: string; explanation: string; sources: Source[]; diseaseSlug: string; diseaseTitle: string };
type Answer = { question: Question; selectedId: string };

const TYPES: Array<{ id: InfectionQuizType; label: string; description: string }> = [
  { id: "disease-to-organism", label: "질환 → 원인균", description: "임상 상황에서 우선 고려할 병원체를 고릅니다." },
  { id: "disease-to-antibiotic", label: "질환 → 경험적 항생제", description: "조건에 맞는 경험적 regimen의 구성 약물을 고릅니다." },
];

function shuffle<T>(items: T[]) { return [...items].sort(() => Math.random() - 0.5); }

function buildQuestions(pathways: InfectionPathway[], spectrum: AntibioticSpectrumDataset, sources: Source[]): Question[] {
  const organismLabels = new Map(spectrum.organisms.map((item) => [item.id, item.label]));
  const antibioticLabels = new Map(spectrum.antibiotics.map((item) => [item.id, item.inn]));
  const sourceMap = new Map(sources.map((item) => [item.id, item]));
  return pathways.flatMap((pathway) => pathway.quizQuestions.map((template) => {
    const labels = template.type === "disease-to-organism" ? organismLabels : antibioticLabels;
    return {
      id: template.id,
      type: template.type,
      prompt: template.prompt,
      choices: template.choiceIds.map((id) => ({ id, label: labels.get(id) ?? id })),
      correctId: template.correctId,
      explanation: template.explanation,
      sources: template.sourceIds.map((id) => sourceMap.get(id)).filter((item): item is Source => Boolean(item)),
      diseaseSlug: pathway.diseaseSlug,
      diseaseTitle: pathway.diseaseTitle,
    };
  }));
}

function EvidenceLinks({ question }: { question: Question }) {
  return <div className="mt-3 flex flex-wrap gap-2"><Link href={`/disease/${question.diseaseSlug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{question.diseaseTitle}<ChevronRight className="h-3 w-3" /></Link>{question.sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{source.label}<ExternalLink className="h-3 w-3" /></a>)}</div>;
}

export function ClinicalInfectionQuiz({ pathways, spectrum, sources }: { pathways: InfectionPathway[]; spectrum: AntibioticSpectrumDataset; sources: Source[] }) {
  const [types, setTypes] = useState<InfectionQuizType[]>([]);
  const [count, setCount] = useState(5);
  const [round, setRound] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const bank = buildQuestions(pathways, spectrum, sources);
  const eligible = bank.filter((item) => types.includes(item.type));
  const current = round[index];
  const finished = round.length > 0 && index >= round.length;
  const score = answers.filter((answer) => answer.selectedId === answer.question.correctId).length;

  const reset = () => { setRound([]); setIndex(0); setSelectedId(""); setAnswers([]); };
  const start = () => { setRound(shuffle(eligible).slice(0, Math.min(count, eligible.length)).map((item) => ({ ...item, choices: shuffle(item.choices) }))); setIndex(0); setSelectedId(""); setAnswers([]); };
  const next = () => { if (!current || !selectedId) return; setAnswers((items) => [...items, { question: current, selectedId }]); setIndex((value) => value + 1); setSelectedId(""); };

  if (round.length === 0) return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Reviewed question templates</div><h2 className="mt-2 text-2xl font-bold text-slate-950">감염 임상 퀴즈 설정</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">{TYPES.map((type) => { const active = types.includes(type.id); return <button key={type.id} type="button" onClick={() => setTypes((items) => items.includes(type.id) ? items.filter((item) => item !== type.id) : [...items, type.id])} className={`rounded-xl border p-4 text-left ${active ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"}`}><div className="flex items-center justify-between"><strong>{type.label}</strong>{active ? <CheckCircle2 className="h-4 w-4 text-teal-700" /> : null}</div><p className="mt-2 text-xs leading-5 text-slate-600">{type.description}</p></button>; })}</div>
      <label className="mt-6 block max-w-xs text-sm font-bold text-slate-900">문제 수<input type="number" min="1" max={Math.max(1, eligible.length)} value={count} onChange={(event) => setCount(Math.max(1, Number(event.target.value) || 1))} className="mt-2 block w-full rounded-xl border border-slate-200 px-3 py-2.5" /></label>
      <p className="mt-2 text-xs text-slate-500">선택한 유형에서 최대 {eligible.length}개의 검수 문제를 출제할 수 있습니다.</p>
      <button type="button" disabled={types.length === 0 || eligible.length === 0} onClick={start} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white disabled:opacity-40">퀴즈 시작<ChevronRight className="h-4 w-4" /></button>
    </section>
  );

  if (finished) return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Result</div><h2 className="mt-2 text-3xl font-bold text-slate-950">{round.length}문제 중 {score}문제 정답</h2><p className="mt-1 text-sm text-slate-600">정답률 {Math.round(score / round.length * 100)}%</p>
      <div className="mt-6 space-y-3"><h3 className="font-bold">오답 확인</h3>{answers.filter((answer) => answer.selectedId !== answer.question.correctId).length === 0 ? <p className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">모든 문제를 맞혔습니다.</p> : answers.filter((answer) => answer.selectedId !== answer.question.correctId).map((answer) => { const selected = answer.question.choices.find((item) => item.id === answer.selectedId)?.label; const correct = answer.question.choices.find((item) => item.id === answer.question.correctId)?.label; return <article key={answer.question.id} className="rounded-xl border border-rose-200 bg-rose-50/50 p-4"><strong className="text-sm">{answer.question.prompt}</strong><p className="mt-2 text-sm text-rose-800">내 답: {selected}</p><p className="text-sm text-emerald-800">정답: {correct}</p><p className="mt-2 text-sm leading-6 text-slate-700">{answer.question.explanation}</p><EvidenceLinks question={answer.question} /></article>; })}</div>
      <button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"><RotateCcw className="h-4 w-4" />새로 풀기</button>
    </section>
  );

  const correct = selectedId === current.correctId;
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex justify-between"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Clinical quiz</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs">{index + 1} / {round.length}</span></div>
      <h2 className="mt-6 text-lg font-bold leading-8 text-slate-950">{current.prompt}</h2><div className="mt-5 grid gap-3">{current.choices.map((choice) => { const picked = selectedId === choice.id; const isAnswer = selectedId && choice.id === current.correctId; return <button key={choice.id} type="button" disabled={Boolean(selectedId)} onClick={() => setSelectedId(choice.id)} className={`flex items-center justify-between rounded-xl border p-4 text-left ${isAnswer ? "border-emerald-500 bg-emerald-50" : picked ? "border-rose-400 bg-rose-50" : "border-slate-200 hover:border-teal-400"}`}><span className="font-medium">{choice.label}</span>{selectedId ? (isAnswer ? <CheckCircle2 className="h-5 w-5 text-emerald-700" /> : picked ? <XCircle className="h-5 w-5 text-rose-700" /> : null) : <ChevronRight className="h-4 w-4 text-slate-400" />}</button>; })}</div>
      {selectedId ? <div className="mt-5 rounded-xl bg-slate-50 p-4"><strong>{correct ? "정답입니다." : "오답입니다."}</strong><p className="mt-2 text-sm leading-6 text-slate-700">{current.explanation}</p><EvidenceLinks question={current} /><button type="button" onClick={next} className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">{index + 1 === round.length ? "결과 보기" : "다음 문제"}</button></div> : null}
    </section>
  );
}
