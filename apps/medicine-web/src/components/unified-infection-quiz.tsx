"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { CheckCircle2, ChevronRight, ExternalLink, RotateCcw, Search, XCircle } from "lucide-react";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathway, InfectionPathwayDataset } from "@/lib/infection-types";

type Source = InfectionPathwayDataset["sources"][number];
type Scope = "disease-organism" | "disease-antibiotic" | "organism-drug" | "drug-organism" | "coverage";
type Format = "multiple-choice" | "short-answer";
type Choice = { id: string; label: string };
type Question = { id: string; scope: Scope; format: Format; label: string; prompt: string; choices: Choice[]; correctId: string; correctLabel: string; explanation: string; sources: Source[]; diseaseSlug?: string; diseaseTitle?: string };
type Answer = { question: Question; selectedId: string };

const SCOPE_OPTIONS: Array<{ id: Scope; label: string; description: string }> = [
  { id: "disease-organism", label: "질환 → 원인균", description: "질환의 대표 원인균을 고릅니다." },
  { id: "disease-antibiotic", label: "질환 → 항생제", description: "질환 상황에 맞는 경험적 항생제를 고릅니다." },
  { id: "organism-drug", label: "균 → 항생제", description: "특정 균에 활성 기대 이상의 항생제를 고릅니다." },
  { id: "drug-organism", label: "항생제 → 균", description: "특정 항생제의 대표 표적 균을 고릅니다." },
  { id: "coverage", label: "Coverage 판독", description: "항생제와 균의 spectrum 표시를 판독합니다." },
];

const FORMAT_OPTIONS: Array<{ id: Format; label: string; description: string }> = [
  { id: "multiple-choice", label: "객관식", description: "선택지에서 정답을 고릅니다." },
  { id: "short-answer", label: "단답형", description: "항생제 이름을 검색해 후보 중 답을 선택합니다." },
];

function shuffle<T>(items: T[]) { return [...items].sort(() => Math.random() - 0.5); }
function normalize(value: string) { return value.toLowerCase().replace(/[^a-z0-9\uac00-\ud7a3]/g, ""); }
function drug(dataset: AntibioticSpectrumDataset, id: string) { const item = dataset.antibiotics.find((entry) => entry.id === id); return item ? item.inn : id; }
function organism(dataset: AntibioticSpectrumDataset, id: string) { return dataset.organisms.find((entry) => entry.id === id)?.label ?? id; }
function makeSpectrumQuestion(dataset: AntibioticSpectrumDataset, id: string, scope: Scope, prompt: string, choices: string[], correctId: string, explanation: string): Question {
  const isDrugChoice = scope === "organism-drug";
  const isOrganismChoice = scope === "drug-organism";
  const labels: Record<string, string> = { preferred: "우선 고려", active: "활성 기대", conditional: "조건부", inactive: "비활성" };
  const choiceLabel = (value: string) => isDrugChoice ? drug(dataset, value) : isOrganismChoice ? organism(dataset, value) : labels[value] ?? value;
  return { id, scope, format: "multiple-choice", label: SCOPE_OPTIONS.find((item) => item.id === scope)?.label ?? "Spectrum", prompt, choices: choices.map((value) => ({ id: value, label: choiceLabel(value) })), correctId, correctLabel: choiceLabel(correctId), explanation, sources: [] };
}

function buildSpectrumBank(dataset: AntibioticSpectrumDataset): Question[] {
  const has = (ids: string[]) => ids.every((id) => dataset.antibiotics.some((item) => item.id === id));
  const bank: Question[] = [];
  if (has(["piperacillintazobactam", "ceftriaxone", "linezolid", "metronidazole"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-pseudomonas", "organism-drug", `${organism(dataset, "pseudomonas")}에 활성 기대 이상인 항생제는?`, ["piperacillintazobactam", "ceftriaxone", "linezolid", "metronidazole"], "piperacillintazobactam", "Piperacillin/tazobactam은 이 matrix에서 Pseudomonas aeruginosa에 active로 표시됩니다."));
  if (has(["linezolid", "cefepime", "ceftriaxone", "metronidazole"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-vre", "organism-drug", `${organism(dataset, "vre")}에 우선 고려되는 항생제는?`, ["linezolid", "cefepime", "ceftriaxone", "metronidazole"], "linezolid", "Linezolid는 VRE에 preferred로 분류됩니다."));
  if (has(["metronidazole", "azithromycin", "cefepime", "gentamicin"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-bfrag", "organism-drug", `${organism(dataset, "b_fragilis")}에 우선 고려되는 항생제는?`, ["metronidazole", "azithromycin", "cefepime", "gentamicin"], "metronidazole", "Metronidazole은 Bacteroides fragilis group에 preferred로 표시됩니다."));
  if (has(["piperacillintazobactam"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-piptazo", "drug-organism", `${drug(dataset, "piperacillintazobactam")}의 대표 표적 균은?`, ["pseudomonas", "mrsa", "vre", "atypicals"], "pseudomonas", "Piperacillin/tazobactam은 Pseudomonas aeruginosa에 active로 표시됩니다."));
  if (has(["linezolid"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-linezolid", "drug-organism", `${drug(dataset, "linezolid")}의 대표 표적 균은?`, ["vre", "pseudomonas", "b_fragilis", "h_influenzae"], "vre", "Linezolid는 Gram-positive agent이며 VRE에 preferred로 표시됩니다."));
  if (has(["metronidazole"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-metronidazole", "drug-organism", `${drug(dataset, "metronidazole")}의 대표 표적 균은?`, ["b_fragilis", "mrsa", "pseudomonas", "atypicals"], "b_fragilis", "Metronidazole은 특히 Bacteroides fragilis group에 강한 활성을 보입니다."));
  if (has(["ceftriaxone"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-ceftriaxone-pseudomonas", "coverage", `${drug(dataset, "ceftriaxone")}과 ${organism(dataset, "pseudomonas")}의 조합은 어떤 coverage인가요?`, ["preferred", "active", "conditional", "inactive"], "inactive", "Ceftriaxone은 Pseudomonas aeruginosa에 inactive로 표시됩니다."));
  if (has(["daptomycin"])) bank.push(makeSpectrumQuestion(dataset, "spectrum-daptomycin-mrsa", "coverage", `${drug(dataset, "daptomycin")}과 ${organism(dataset, "mrsa")}의 조합은 어떤 coverage인가요?`, ["preferred", "active", "conditional", "inactive"], "preferred", "Daptomycin은 MRSA에 preferred로 표시됩니다. 폐렴에는 사용하지 않는 예외가 있습니다."));
  return bank;
}

function buildClinicalBank(pathways: InfectionPathway[], spectrum: AntibioticSpectrumDataset, sources: Source[]): Question[] {
  const organismLabels = new Map(spectrum.organisms.map((item) => [item.id, item.label]));
  const antibioticLabels = new Map(spectrum.antibiotics.map((item) => [item.id, item.inn]));
  const sourceMap = new Map(sources.map((item) => [item.id, item]));
  return pathways.flatMap((pathway) => pathway.quizQuestions.map((template) => {
    const labels = template.type === "disease-to-organism" ? organismLabels : antibioticLabels;
    const scope: Scope = template.type === "disease-to-organism" ? "disease-organism" : "disease-antibiotic";
    const format: Format = template.type === "disease-to-antibiotic-short-answer" ? "short-answer" : "multiple-choice";
    return { id: template.id, scope, format, label: SCOPE_OPTIONS.find((item) => item.id === scope)?.label ?? "질환", prompt: template.prompt, choices: template.choiceIds.map((id) => ({ id, label: labels.get(id) ?? id })), correctId: template.correctId, correctLabel: labels.get(template.correctId) ?? template.correctId, explanation: template.explanation, sources: template.sourceIds.map((id) => sourceMap.get(id)).filter((item): item is Source => Boolean(item)), diseaseSlug: pathway.diseaseSlug, diseaseTitle: pathway.diseaseTitle };
  }));
}

function Evidence({ question }: { question: Question }) {
  if (!question.diseaseSlug && question.sources.length === 0) return null;
  return <div className="mt-3 flex flex-wrap gap-2">{question.diseaseSlug && question.diseaseTitle ? <Link href={`/disease/${question.diseaseSlug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{question.diseaseTitle}<ChevronRight className="h-3 w-3" /></Link> : null}{question.sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{source.label}<ExternalLink className="h-3 w-3" /></a>)}</div>;
}

export function UnifiedInfectionQuiz({ pathways, spectrum, sources }: { pathways: InfectionPathway[]; spectrum: AntibioticSpectrumDataset; sources: Source[] }) {
  const [scopes, setScopes] = useState<Scope[]>([]);
  const [formats, setFormats] = useState<Format[]>([]);
  const [count, setCount] = useState(5);
  const [round, setRound] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [shortQuery, setShortQuery] = useState("");
  const deferredShortQuery = useDeferredValue(shortQuery);
  const bank = [...buildClinicalBank(pathways, spectrum, sources), ...buildSpectrumBank(spectrum)];
  const eligible = bank.filter((item) => scopes.includes(item.scope) && formats.includes(item.format));
  const current = round[index];
  const finished = round.length > 0 && index >= round.length;
  const score = answers.filter((item) => item.selectedId === item.question.correctId).length;
  const isShortAnswer = current?.format === "short-answer";
  const shortCandidates = !isShortAnswer ? [] : spectrum.antibiotics.filter((item) => { const query = normalize(deferredShortQuery); return query.length > 0 && normalize(`${item.inn} ${item.displayName}`).includes(query); }).slice(0, 6).map((item) => ({ id: item.id, label: item.inn, detail: item.displayName }));
  const toggle = <T,>(value: T, items: T[], update: (next: T[]) => void) => update(items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);
  const reset = () => { setRound([]); setIndex(0); setSelectedId(""); setAnswers([]); setShortQuery(""); };
  const start = () => { setRound(shuffle(eligible).slice(0, Math.min(count, eligible.length)).map((item) => ({ ...item, choices: item.format === "short-answer" ? [] : shuffle(item.choices) }))); setIndex(0); setSelectedId(""); setAnswers([]); setShortQuery(""); };
  const next = () => { if (!current || !selectedId) return; setAnswers((items) => [...items, { question: current, selectedId }]); setIndex((value) => value + 1); setSelectedId(""); setShortQuery(""); };

  if (round.length === 0) return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Quiz setup</div><h2 className="mt-2 text-2xl font-bold text-slate-950">통합 퀴즈 설정</h2><div className="mt-6"><h3 className="text-sm font-bold text-slate-900">문제 범위</h3><p className="mt-1 text-sm text-slate-500">질환 기반과 spectrum 기반 후보를 함께 선택할 수 있습니다.</p><div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{SCOPE_OPTIONS.map((item) => { const active = scopes.includes(item.id); const available = bank.some((question) => question.scope === item.id); return <button key={item.id} type="button" disabled={!available} onClick={() => toggle(item.id, scopes, setScopes)} className={`rounded-xl border p-4 text-left transition ${active ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"} ${!available ? "cursor-not-allowed opacity-40" : ""}`}><div className="flex items-center justify-between gap-2"><strong className="text-sm text-slate-950">{item.label}</strong>{active ? <CheckCircle2 className="h-4 w-4 text-teal-700" /> : null}</div><p className="mt-2 text-xs leading-5 text-slate-600">{item.description}</p></button>; })}</div></div><div className="mt-7"><h3 className="text-sm font-bold text-slate-900">답변 형식</h3><p className="mt-1 text-sm text-slate-500">객관식과 단답형을 함께 고르면 한 세트에 섞어 출제합니다.</p><div className="mt-3 grid gap-3 sm:grid-cols-2">{FORMAT_OPTIONS.map((item) => { const active = formats.includes(item.id); const available = bank.some((question) => question.format === item.id); return <button key={item.id} type="button" disabled={!available} onClick={() => toggle(item.id, formats, setFormats)} className={`rounded-xl border p-4 text-left transition ${active ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"} ${!available ? "cursor-not-allowed opacity-40" : ""}`}><div className="flex items-center justify-between gap-2"><strong className="text-sm text-slate-950">{item.label}</strong>{active ? <CheckCircle2 className="h-4 w-4 text-teal-700" /> : null}</div><p className="mt-2 text-xs leading-5 text-slate-600">{item.description}</p></button>; })}</div></div><label className="mt-7 block max-w-xs text-sm font-bold text-slate-900">문제 수<input type="number" min="1" max={Math.max(1, eligible.length)} value={count} onChange={(event) => setCount(Math.max(1, Number(event.target.value) || 1))} className="mt-2 block w-full rounded-xl border border-slate-200 px-3 py-2.5" /></label><p className="mt-2 text-xs text-slate-500">현재 선택으로 최대 {eligible.length}문제를 출제할 수 있습니다.</p><button type="button" disabled={scopes.length === 0 || formats.length === 0 || eligible.length === 0} onClick={start} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white disabled:opacity-40">퀴즈 시작<ChevronRight className="h-4 w-4" /></button></section>;
  if (finished) return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Quiz complete</div><h2 className="mt-2 text-2xl font-bold text-slate-950">퀴즈 결과</h2><p className="mt-3 text-lg text-slate-800">점수 <strong>{score} / {round.length}</strong></p>{answers.some((item) => item.selectedId !== item.question.correctId) ? <div className="mt-6 space-y-3"><h3 className="font-bold text-slate-900">오답 복습</h3>{answers.filter((item) => item.selectedId !== item.question.correctId).map((answer) => <article key={answer.question.id} className="rounded-xl border border-rose-100 bg-rose-50/50 p-4"><p className="font-semibold text-slate-900">{answer.question.prompt}</p><p className="mt-2 text-sm text-rose-700">정답: {answer.question.correctLabel}</p><p className="mt-2 text-sm leading-6 text-slate-700">{answer.question.explanation}</p><Evidence question={answer.question} /></article>)}</div> : <p className="mt-3 text-sm text-teal-700">모든 문제를 맞추셨습니다.</p>}<button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"><RotateCcw className="h-4 w-4" />새로 풀기</button></section>;
  if (!current) return null;
  const selectedLabel = spectrum.antibiotics.find((item) => item.id === selectedId)?.inn ?? current.choices.find((item) => item.id === selectedId)?.label;
  const correct = selectedId === current.correctId;
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700"><span>{current.label}</span><span>{index + 1} / {round.length}</span></div><h2 className="mt-4 text-xl font-bold leading-8 text-slate-950">{current.prompt}</h2>{isShortAnswer ? <div className="mt-6">{selectedId ? <div className="rounded-xl border border-teal-200 bg-teal-50 p-4"><div className="text-xs font-semibold text-teal-700">선택한 답</div><div className="mt-1 text-lg font-bold text-slate-950">{selectedLabel}</div><button type="button" onClick={() => setSelectedId("")} className="mt-3 text-sm font-semibold text-teal-800 underline">다시 검색</button></div> : <><label className="relative block"><Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-slate-400" /><input autoFocus value={shortQuery} onChange={(event) => setShortQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && shortCandidates[0]) setSelectedId(shortCandidates[0].id); }} placeholder="항생제 성분명을 입력하세요" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-slate-900 outline-none focus:border-teal-500" /></label>{shortQuery ? <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white">{shortCandidates.length ? shortCandidates.map((candidate) => <button key={candidate.id} type="button" onClick={() => setSelectedId(candidate.id)} className="flex w-full items-center justify-between border-b border-slate-100 px-4 py-3 text-left last:border-b-0 hover:bg-teal-50"><span className="font-semibold text-slate-900">{candidate.label}</span><span className="text-sm text-slate-500">{candidate.detail}</span></button>) : <p className="px-4 py-3 text-sm text-slate-500">일치하는 항생제가 없습니다.</p>}</div> : null}<p className="mt-2 text-xs text-slate-500">후보를 누르거나 Enter를 누르면 첫 후보를 선택합니다.</p></>}</div> : <div className="mt-6 grid gap-3">{current.choices.map((choice) => <button key={choice.id} type="button" disabled={Boolean(selectedId)} onClick={() => setSelectedId(choice.id)} className={`rounded-xl border p-4 text-left font-semibold ${selectedId === choice.id ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"}`}>{choice.label}</button>)}</div>}{selectedId ? <div className={`mt-5 rounded-xl border p-4 ${correct ? "border-teal-200 bg-teal-50" : "border-rose-200 bg-rose-50"}`}><div className="flex items-center gap-2 font-bold text-slate-950">{correct ? <CheckCircle2 className="h-5 w-5 text-teal-700" /> : <XCircle className="h-5 w-5 text-rose-700" />}{correct ? "정답입니다." : "아쉬운 답입니다."}</div>{!correct ? <p className="mt-2 text-sm text-slate-800">정답: <strong>{current.correctLabel}</strong></p> : null}<p className="mt-2 text-sm leading-6 text-slate-700">{current.explanation}</p><Evidence question={current} /><button type="button" onClick={next} className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white">다음 문제<ChevronRight className="h-4 w-4" /></button></div> : null}</section>;
}
