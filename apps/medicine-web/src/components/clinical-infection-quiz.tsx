"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { CheckCircle2, ChevronRight, ExternalLink, RotateCcw, Search, XCircle } from "lucide-react";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathway, InfectionPathwayDataset, InfectionQuizType } from "@/lib/infection-types";

type Source = InfectionPathwayDataset["sources"][number];
type Choice = { id: string; label: string };
type Question = { id: string; type: InfectionQuizType; prompt: string; choices: Choice[]; correctId: string; correctLabel: string; explanation: string; sources: Source[]; diseaseSlug: string; diseaseTitle: string };
type Answer = { question: Question; selectedId: string };
type QuizFormat = "multiple-choice" | "short-answer";

const K = {
  setup: "\uac10\uc5fc \uc784\uc0c1 \ud034\uc988 \uc124\uc815",
  multipleChoice: "\uac1d\uad00\uc2dd",
  multipleChoiceDescription: "\uc9c8\ud658\uc5d0\uc11c \uc6d0\uc778\uade0 \ub610\ub294 \uacbd\ud5d8\uc801 \ud56d\uc0dd\uc81c\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.",
  shortAnswer: "\ub2e8\ub2f5\ud615",
  shortAnswerDescription: "\ud56d\uc0dd\uc81c\uba85\uc744 \uac80\uc0c9\ud574 \uc81c\uc548\ub41c \ud6c4\ubcf4 \uc911\uc5d0\uc11c \ub2f5\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",
  questionCount: "\ubb38\uc81c \uc218",
  available: "\uc120\ud0dd\ud55c \ud615\uc2dd\uc5d0\uc11c \ucd5c\ub300",
  questions: "\uac1c\uc758 \uac80\ud1a0 \ubb38\uc81c\ub97c \ucd9c\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
  start: "\ud034\uc988 \uc2dc\uc791",
  answered: "\ubc88 \ub2f5\ud588\uc2b5\ub2c8\ub2e4.",
  correct: "\uc815\ub2f5\uc785\ub2c8\ub2e4.",
  incorrect: "\uc544\uc27d\uc6b4\ub2f5\ub2c8\ub2e4.",
  answer: "\uc815\ub2f5",
  next: "\ub2e4\uc74c \ubb38\uc81c",
  input: "\ud56d\uc0dd\uc81c \uc131\ubd84\uba85\uc744 \uc785\ub825\ud558\uc138\uc694",
  noMatches: "\uc77c\uce58\ud558\ub294 \ud56d\uc0dd\uc81c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \uc77c\ubd80 \uc774\ub984\uc744 \uc785\ub825\ud574 \ubcf4\uc138\uc694.",
  enterHint: "\ud6c4\ubcf4\ub97c \ub204\ub974\uac70\ub098 Enter\ub97c \ub204\ub974\uba74 \uccab \ud6c4\ubcf4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.",
  selected: "\uc120\ud0dd\ud55c \ub2f5",
  searchAgain: "\ub2e4\uc2dc \uac80\uc0c9",
  result: "\ud034\uc988 \uacb0\uacfc",
  score: "\uc810\uc218",
  review: "\uc624\ub2f5 \ubcf5\uc2b5",
  retry: "\uc0c8\ub85c \ud480\uae30",
  allCorrect: "\ubaa8\ub4e0 \ubb38\uc81c\ub97c \ub9de\ucd94\uc168\uc2b5\ub2c8\ub2e4.",
};

const FORMATS: Array<{ id: QuizFormat; label: string; description: string; types: InfectionQuizType[] }> = [
  { id: "multiple-choice", label: K.multipleChoice, description: K.multipleChoiceDescription, types: ["disease-to-organism", "disease-to-antibiotic"] },
  { id: "short-answer", label: K.shortAnswer, description: K.shortAnswerDescription, types: ["disease-to-antibiotic-short-answer"] },
];

function shuffle<T>(items: T[]) { return [...items].sort(() => Math.random() - 0.5); }
function normalize(value: string) { return value.toLowerCase().replace(/[^a-z0-9\uac00-\ud7a3]/g, ""); }

function buildQuestions(pathways: InfectionPathway[], spectrum: AntibioticSpectrumDataset, sources: Source[]): Question[] {
  const organismLabels = new Map(spectrum.organisms.map((item) => [item.id, item.label]));
  const antibioticLabels = new Map(spectrum.antibiotics.map((item) => [item.id, item.inn]));
  const sourceMap = new Map(sources.map((item) => [item.id, item]));
  return pathways.flatMap((pathway) => pathway.quizQuestions.map((template) => {
    const labels = template.type === "disease-to-organism" ? organismLabels : antibioticLabels;
    return { id: template.id, type: template.type, prompt: template.prompt, choices: template.choiceIds.map((id) => ({ id, label: labels.get(id) ?? id })), correctId: template.correctId, correctLabel: labels.get(template.correctId) ?? template.correctId, explanation: template.explanation, sources: template.sourceIds.map((id) => sourceMap.get(id)).filter((item): item is Source => Boolean(item)), diseaseSlug: pathway.diseaseSlug, diseaseTitle: pathway.diseaseTitle };
  }));
}

function EvidenceLinks({ question }: { question: Question }) {
  return <div className="mt-3 flex flex-wrap gap-2"><Link href={`/disease/${question.diseaseSlug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{question.diseaseTitle}<ChevronRight className="h-3 w-3" /></Link>{question.sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{source.label}<ExternalLink className="h-3 w-3" /></a>)}</div>;
}

export function ClinicalInfectionQuiz({ pathways, spectrum, sources }: { pathways: InfectionPathway[]; spectrum: AntibioticSpectrumDataset; sources: Source[] }) {
  const [formats, setFormats] = useState<QuizFormat[]>([]);
  const [count, setCount] = useState(5);
  const [round, setRound] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [shortQuery, setShortQuery] = useState("");
  const deferredShortQuery = useDeferredValue(shortQuery);
  const bank = buildQuestions(pathways, spectrum, sources);
  const activeTypes = FORMATS.filter((format) => formats.includes(format.id)).flatMap((format) => format.types);
  const eligible = bank.filter((item) => activeTypes.includes(item.type));
  const current = round[index];
  const finished = round.length > 0 && index >= round.length;
  const score = answers.filter((answer) => answer.selectedId === answer.question.correctId).length;
  const isShortAnswer = current?.type === "disease-to-antibiotic-short-answer";
  const shortCandidates = !isShortAnswer ? [] : spectrum.antibiotics.filter((item) => {
    const query = normalize(deferredShortQuery);
    return query.length > 0 && normalize(`${item.inn} ${item.displayName}`).includes(query);
  }).slice(0, 6).map((item) => ({ id: item.id, label: item.inn, detail: item.displayName }));

  const reset = () => { setRound([]); setIndex(0); setSelectedId(""); setAnswers([]); setShortQuery(""); };
  const start = () => { setRound(shuffle(eligible).slice(0, Math.min(count, eligible.length)).map((item) => ({ ...item, choices: item.type === "disease-to-antibiotic-short-answer" ? [] : shuffle(item.choices) }))); setIndex(0); setSelectedId(""); setAnswers([]); setShortQuery(""); };
  const choose = (id: string) => { setSelectedId(id); setShortQuery(""); };
  const next = () => { if (!current || !selectedId) return; setAnswers((items) => [...items, { question: current, selectedId }]); setIndex((value) => value + 1); setSelectedId(""); setShortQuery(""); };

  if (round.length === 0) return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Reviewed question templates</div><h2 className="mt-2 text-2xl font-bold text-slate-950">{K.setup}</h2>
    <div className="mt-6 grid gap-3 sm:grid-cols-2">{FORMATS.map((format) => { const active = formats.includes(format.id); return <button key={format.id} type="button" onClick={() => setFormats((items) => items.includes(format.id) ? items.filter((item) => item !== format.id) : [...items, format.id])} className={`rounded-xl border p-4 text-left ${active ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"}`}><div className="flex items-center justify-between"><strong>{format.label}</strong>{active ? <CheckCircle2 className="h-4 w-4 text-teal-700" /> : null}</div><p className="mt-2 text-xs leading-5 text-slate-600">{format.description}</p></button>; })}</div>
    <label className="mt-6 block max-w-xs text-sm font-bold text-slate-900">{K.questionCount}<input type="number" min="1" max={Math.max(1, eligible.length)} value={count} onChange={(event) => setCount(Math.max(1, Number(event.target.value) || 1))} className="mt-2 block w-full rounded-xl border border-slate-200 px-3 py-2.5" /></label>
    <p className="mt-2 text-xs text-slate-500">{K.available} {eligible.length}{K.questions}</p>
    <button type="button" disabled={formats.length === 0 || eligible.length === 0} onClick={start} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white disabled:opacity-40">{K.start}<ChevronRight className="h-4 w-4" /></button>
  </section>;

  if (finished) return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Quiz complete</div><h2 className="mt-2 text-2xl font-bold text-slate-950">{K.result}</h2><p className="mt-3 text-lg text-slate-800">{K.score} <strong>{score} / {round.length}</strong></p>{score === round.length ? <p className="mt-2 text-sm text-teal-700">{K.allCorrect}</p> : <div className="mt-6 space-y-3"><h3 className="font-bold text-slate-900">{K.review}</h3>{answers.filter((answer) => answer.selectedId !== answer.question.correctId).map((answer) => <article key={answer.question.id} className="rounded-xl border border-rose-100 bg-rose-50/50 p-4"><p className="font-semibold text-slate-900">{answer.question.prompt}</p><p className="mt-2 text-sm text-rose-700">{K.answer}: {answer.question.correctLabel}</p><p className="mt-2 text-sm leading-6 text-slate-700">{answer.question.explanation}</p><EvidenceLinks question={answer.question} /></article>)}</div>}<button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"><RotateCcw className="h-4 w-4" />{K.retry}</button></section>;

  if (!current) return null;
  const selectedLabel = spectrum.antibiotics.find((item) => item.id === selectedId)?.inn ?? current.choices.find((item) => item.id === selectedId)?.label;
  const correct = selectedId === current.correctId;
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-teal-700"><span>Clinical quiz</span><span>{index + 1} / {round.length}</span></div><h2 className="mt-4 text-xl font-bold leading-8 text-slate-950">{current.prompt}</h2>
    {isShortAnswer ? <div className="mt-6">{selectedId ? <div className="rounded-xl border border-teal-200 bg-teal-50 p-4"><div className="text-xs font-semibold text-teal-700">{K.selected}</div><div className="mt-1 text-lg font-bold text-slate-950">{selectedLabel}</div><button type="button" onClick={() => setSelectedId("")} className="mt-3 text-sm font-semibold text-teal-800 underline">{K.searchAgain}</button></div> : <><label className="relative block"><Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-slate-400" /><input autoFocus value={shortQuery} onChange={(event) => setShortQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && shortCandidates[0]) choose(shortCandidates[0].id); }} placeholder={K.input} className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-slate-900 outline-none focus:border-teal-500" /></label>{shortQuery ? <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white">{shortCandidates.length ? shortCandidates.map((candidate) => <button key={candidate.id} type="button" onClick={() => choose(candidate.id)} className="flex w-full items-center justify-between border-b border-slate-100 px-4 py-3 text-left last:border-b-0 hover:bg-teal-50"><span className="font-semibold text-slate-900">{candidate.label}</span><span className="text-sm text-slate-500">{candidate.detail}</span></button>) : <p className="px-4 py-3 text-sm text-slate-500">{K.noMatches}</p>}</div> : null}<p className="mt-2 text-xs text-slate-500">{K.enterHint}</p></>}</div> : <div className="mt-6 grid gap-3">{current.choices.map((choice) => <button key={choice.id} type="button" disabled={Boolean(selectedId)} onClick={() => choose(choice.id)} className={`rounded-xl border p-4 text-left font-semibold ${selectedId === choice.id ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"}`}>{choice.label}</button>)}</div>}
    {selectedId ? <div className={`mt-5 rounded-xl border p-4 ${correct ? "border-teal-200 bg-teal-50" : "border-rose-200 bg-rose-50"}`}><div className="flex items-center gap-2 font-bold text-slate-950">{correct ? <CheckCircle2 className="h-5 w-5 text-teal-700" /> : <XCircle className="h-5 w-5 text-rose-700" />}{correct ? K.correct : K.incorrect}</div>{!correct ? <p className="mt-2 text-sm text-slate-800">{K.answer}: <strong>{current.correctLabel}</strong></p> : null}<p className="mt-2 text-sm leading-6 text-slate-700">{current.explanation}</p><EvidenceLinks question={current} /><button type="button" onClick={next} className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white">{K.next}<ChevronRight className="h-4 w-4" /></button></div> : null}
  </section>;
}
