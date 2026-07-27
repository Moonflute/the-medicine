"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, CircleHelp, RotateCcw, XCircle } from "lucide-react";
import type { AntibioticSpectrumDataset } from "@/lib/types";

export type AntibioticQuizType = "organism-to-drug" | "drug-to-organism" | "coverage-reading";
export type AntibioticQuizQuestion = {
  id: string;
  type: AntibioticQuizType;
  prompt: string;
  choices: string[];
  correct: string;
  explanation: string;
};
type Answer = { question: AntibioticQuizQuestion; selected: string };

export const ANTIBIOTIC_QUIZ_TYPES: Array<{ id: AntibioticQuizType; label: string; description: string }> = [
  { id: "organism-to-drug", label: "균 → 항생제", description: "특정 균에 활성 기대 이상인 항생제를 고릅니다." },
  { id: "drug-to-organism", label: "항생제 → 균", description: "특정 항생제가 표적하는 균을 고릅니다." },
  { id: "coverage-reading", label: "Coverage 판독", description: "약물-균 조합의 spectrum 표시를 판독합니다." },
];

function shuffle<T>(items: T[]) { return [...items].sort(() => Math.random() - 0.5); }

function displayDrug(dataset: AntibioticSpectrumDataset, id: string) {
  const entry = dataset.antibiotics.find((item) => item.id === id);
  return entry ? `${entry.inn} (${entry.displayName})` : id;
}
function displayOrganism(dataset: AntibioticSpectrumDataset, id: string) {
  return dataset.organisms.find((item) => item.id === id)?.label ?? id;
}

export function getAntibioticQuizQuestions(dataset: AntibioticSpectrumDataset): AntibioticQuizQuestion[] {
  const has = (ids: string[]) => ids.every((id) => dataset.antibiotics.some((entry) => entry.id === id));
  const bank: AntibioticQuizQuestion[] = [];
  if (has(["piperacillintazobactam", "ceftriaxone", "linezolid", "metronidazole"])) bank.push({
    id: "organism-pseudomonas", type: "organism-to-drug", prompt: `${displayOrganism(dataset, "pseudomonas")}에 대해 활성 기대 이상인 약물은?`,
    choices: ["piperacillintazobactam", "ceftriaxone", "linezolid", "metronidazole"], correct: "piperacillintazobactam",
    explanation: "Piperacillin/tazobactam은 이 overview에서 Pseudomonas aeruginosa에 active로 분류됩니다.",
  });
  if (has(["linezolid", "cefepime", "ceftriaxone", "metronidazole"])) bank.push({
    id: "organism-vre", type: "organism-to-drug", prompt: `${displayOrganism(dataset, "vre")}에 대해 우선 고려되는 약물은?`,
    choices: ["linezolid", "cefepime", "ceftriaxone", "metronidazole"], correct: "linezolid",
    explanation: "Linezolid는 VRE에 preferred로 분류됩니다. 실제 치료에는 균종, 감염 부위, 감수성 결과가 추가로 필요합니다.",
  });
  if (has(["metronidazole", "azithromycin", "cefepime", "gentamicin"])) bank.push({
    id: "organism-bfragilis", type: "organism-to-drug", prompt: `${displayOrganism(dataset, "b_fragilis")}에 대해 우선 고려되는 약물은?`,
    choices: ["metronidazole", "azithromycin", "cefepime", "gentamicin"], correct: "metronidazole",
    explanation: "Metronidazole은 Bacteroides fragilis group에 preferred로 표시됩니다.",
  });
  if (has(["piperacillintazobactam"])) bank.push({
    id: "drug-piptazo", type: "drug-to-organism", prompt: `${displayDrug(dataset, "piperacillintazobactam")}의 주요 target으로 가장 알맞은 것은?`,
    choices: ["pseudomonas", "mrsa", "vre", "atypicals"], correct: "pseudomonas",
    explanation: "Piperacillin/tazobactam은 Pseudomonas aeruginosa에 active로 표시됩니다. MRSA와 atypical coverage는 제공하지 않습니다.",
  });
  if (has(["linezolid"])) bank.push({
    id: "drug-linezolid", type: "drug-to-organism", prompt: `${displayDrug(dataset, "linezolid")}의 주요 target으로 가장 알맞은 것은?`,
    choices: ["vre", "pseudomonas", "b_fragilis", "h_influenzae"], correct: "vre",
    explanation: "Linezolid는 Gram-positive agent이며 VRE에 preferred로 분류됩니다.",
  });
  if (has(["metronidazole"])) bank.push({
    id: "drug-metronidazole", type: "drug-to-organism", prompt: `${displayDrug(dataset, "metronidazole")}의 주요 target으로 가장 알맞은 것은?`,
    choices: ["b_fragilis", "mrsa", "pseudomonas", "atypicals"], correct: "b_fragilis",
    explanation: "Metronidazole은 anaerobe, 특히 Bacteroides fragilis group에 강한 활성을 보입니다.",
  });
  if (has(["ceftriaxone"])) bank.push({
    id: "coverage-ceftriaxone-pseudomonas", type: "coverage-reading", prompt: `${displayDrug(dataset, "ceftriaxone")}과 ${displayOrganism(dataset, "pseudomonas")}의 조합은 어떻게 표시될까요?`,
    choices: ["preferred", "active", "conditional", "inactive"], correct: "inactive",
    explanation: "Ceftriaxone은 Pseudomonas aeruginosa에 inactive로 표시됩니다.",
  });
  if (has(["daptomycin"])) bank.push({
    id: "coverage-daptomycin-mrsa", type: "coverage-reading", prompt: `${displayDrug(dataset, "daptomycin")}과 ${displayOrganism(dataset, "mrsa")}의 조합은 어떻게 표시될까요?`,
    choices: ["preferred", "active", "conditional", "inactive"], correct: "preferred",
    explanation: "Daptomycin은 MRSA에 preferred로 표시됩니다. 다만 폐렴에는 사용하지 않는 임상적 예외가 있습니다.",
  });
  return bank;
}

export function antibioticQuizChoiceLabel(dataset: AntibioticSpectrumDataset, question: AntibioticQuizQuestion, value: string) {
  if (question.type === "organism-to-drug") return displayDrug(dataset, value);
  if (question.type === "drug-to-organism") return displayOrganism(dataset, value);
  return ({ preferred: "◎ 우선 고려", active: "○ 활성 기대", conditional: "△ 조건부", inactive: "× 비활성" } as Record<string, string>)[value] ?? value;
}

export function AntibioticQuiz({ dataset }: { dataset: AntibioticSpectrumDataset }) {
  const [types, setTypes] = useState<AntibioticQuizType[]>([]);
  const [count, setCount] = useState(5);
  const [questions, setQuestions] = useState<AntibioticQuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const bank = getAntibioticQuizQuestions(dataset);
  const eligible = bank.filter((question) => types.includes(question.type));
  const current = questions[index];
  const finished = questions.length > 0 && index >= questions.length;
  const score = answers.filter((answer) => answer.selected === answer.question.correct).length;

  const toggleType = (type: AntibioticQuizType) => setTypes((currentTypes) => currentTypes.includes(type) ? currentTypes.filter((item) => item !== type) : [...currentTypes, type]);
  const start = () => { const round = shuffle(eligible).slice(0, Math.min(count, eligible.length)); setQuestions(round); setIndex(0); setSelected(null); setAnswers([]); };
  const next = () => { if (!current || !selected) return; setAnswers((currentAnswers) => [...currentAnswers, { question: current, selected }]); setSelected(null); setIndex((value) => value + 1); };
  const reset = () => { setQuestions([]); setIndex(0); setSelected(null); setAnswers([]); };

  if (questions.length === 0) return <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <div className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white"><CircleHelp className="h-5 w-5" /></span><div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Quiz setup</div><h2 className="mt-1 text-2xl font-bold text-slate-950">퀴즈 설정</h2></div></div>
    <div className="mt-7"><h3 className="text-sm font-bold text-slate-900">문제 유형</h3><p className="mt-1 text-sm text-slate-500">여러 유형을 함께 선택할 수 있습니다.</p><div className="mt-3 grid gap-3 sm:grid-cols-3">{ANTIBIOTIC_QUIZ_TYPES.map((item) => { const active = types.includes(item.id); const available = bank.some((question) => question.type === item.id); return <button key={item.id} type="button" disabled={!available} onClick={() => toggleType(item.id)} className={`rounded-xl border p-4 text-left transition ${active ? "border-teal-600 bg-teal-50" : "border-slate-200 bg-white hover:border-teal-300"} ${!available ? "cursor-not-allowed opacity-40" : ""}`}><div className="flex items-center justify-between gap-2"><strong className="text-sm text-slate-950">{item.label}</strong>{active ? <CheckCircle2 className="h-4 w-4 text-teal-700" /> : null}</div><p className="mt-2 text-xs leading-5 text-slate-600">{item.description}</p></button>; })}</div></div>
    <div className="mt-7 max-w-xs"><label className="text-sm font-bold text-slate-900" htmlFor="quiz-count">문제 수</label><input id="quiz-count" type="number" min="1" max={Math.max(1, eligible.length)} value={count} onChange={(event) => setCount(Math.max(1, Number(event.target.value) || 1))} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" /><p className="mt-2 text-xs text-slate-500">선택한 유형에서 최대 {eligible.length}문제를 출제할 수 있습니다.</p></div>
    <button type="button" disabled={types.length === 0 || eligible.length === 0} onClick={start} className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-40">퀴즈 시작 <ChevronRight className="h-4 w-4" /></button>
  </section>;

  if (finished) return <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Quiz result</div><h2 className="mt-2 text-3xl font-bold text-slate-950">{questions.length}문제 중 {score}문제 정답</h2><p className="mt-2 text-sm text-slate-600">정답률 {Math.round((score / questions.length) * 100)}%</p>
    <div className="mt-7 space-y-3"><h3 className="font-bold text-slate-950">오답 확인</h3>{answers.filter((answer) => answer.selected !== answer.question.correct).length === 0 ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">모든 문제를 맞혔습니다.</div> : answers.filter((answer) => answer.selected !== answer.question.correct).map((answer) => <article key={answer.question.id} className="rounded-xl border border-rose-200 bg-rose-50/50 p-4"><p className="font-semibold text-slate-950">{answer.question.prompt}</p><p className="mt-2 text-sm text-rose-800">내 답: {antibioticQuizChoiceLabel(dataset, answer.question, answer.selected)}</p><p className="mt-1 text-sm text-emerald-800">정답: {antibioticQuizChoiceLabel(dataset, answer.question, answer.question.correct)}</p><p className="mt-3 text-sm leading-6 text-slate-700">{answer.question.explanation}</p></article>)}</div>
    <button type="button" onClick={reset} className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-teal-800"><RotateCcw className="h-4 w-4" />새로 풀기</button>
  </section>;

  const isCorrect = selected === current.correct;
  return <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><div className="flex items-center justify-between gap-4"><div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Quiz</div><h2 className="mt-1 text-xl font-bold text-slate-950">{ANTIBIOTIC_QUIZ_TYPES.find((item) => item.id === current.type)?.label}</h2></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{index + 1} / {questions.length}</span></div><p className="mt-7 text-lg font-semibold leading-8 text-slate-900">{current.prompt}</p><div className="mt-6 grid gap-3">{current.choices.map((choice) => { const picked = selected === choice; const correct = selected && choice === current.correct; const status = selected ? (correct ? "border-emerald-500 bg-emerald-50" : picked ? "border-rose-400 bg-rose-50" : "border-slate-200") : "border-slate-200 hover:border-teal-400 hover:bg-teal-50"; return <button key={choice} type="button" disabled={Boolean(selected)} onClick={() => setSelected(choice)} className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${status}`}><span className="font-medium text-slate-950">{antibioticQuizChoiceLabel(dataset, current, choice)}</span>{selected ? (choice === current.correct ? <CheckCircle2 className="h-5 w-5 text-emerald-700" /> : picked ? <XCircle className="h-5 w-5 text-rose-700" /> : null) : <ChevronRight className="h-4 w-4 text-slate-400" />}</button>; })}</div>{selected ? <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-950">{isCorrect ? "정답입니다." : "오답입니다."}</p><p className="mt-2 text-sm leading-6 text-slate-700">{current.explanation}</p><button type="button" onClick={next} className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">{index + 1 === questions.length ? "결과 보기" : "다음 문제"}</button></div> : null}</section>;
}
