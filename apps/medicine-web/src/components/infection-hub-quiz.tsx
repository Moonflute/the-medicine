"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { CheckCircle2, ChevronRight, ExternalLink, RotateCcw, Search, XCircle } from "lucide-react";
import { ANTIBIOTIC_QUIZ_TYPES, antibioticQuizChoiceLabel, getAntibioticQuizQuestions, type AntibioticQuizType } from "@/components/antibiotic-quiz";
import type { AntibioticSpectrumDataset, MicrobiologyDataset } from "@/lib/types";
import type { InfectionPathway, InfectionPathwayDataset, InfectionQuizType } from "@/lib/infection-types";
import { microbiologyVisuals, type MicrobiologyVisual } from "@/lib/microbiology-visuals";

type Source = InfectionPathwayDataset["sources"][number];
type QuizType = InfectionQuizType | AntibioticQuizType | "organism-identification" | "organism-to-disease" | "visual-organism-identification";
type AnswerMode = "multiple-choice" | "short-answer" | "mixed";
type AnswerDomain = "organism" | "drug" | "disease" | "coverage";
type Choice = { id: string; label: string; aliases: string[] };
type Question = {
  id: string;
  type: QuizType;
  prompt: string;
  choices: Choice[];
  correctId: string;
  explanation: string;
  sources: Source[];
  domain: AnswerDomain;
  diseaseSlug?: string;
  diseaseTitle?: string;
  visual?: MicrobiologyVisual;
};
type RoundQuestion = Question & { answerMode: Exclude<AnswerMode, "mixed"> };
type Answer = { question: RoundQuestion; selectedId: string };

const TYPE_OPTIONS: Array<{ id: QuizType; label: string; description: string }> = [
  { id: "visual-organism-identification", label: "이미지로 병원체 식별", description: "이미지의 형태와 특징을 보고 가장 알맞은 병원체를 고릅니다." },
  { id: "organism-identification", label: "병원체 식별", description: "형태·역학·임상 특징으로 병원체를 찾습니다." },
  { id: "organism-to-disease", label: "병원체 → 질환", description: "병원체가 흔히 일으키는 감염질환을 고릅니다." },
  { id: "disease-to-organism", label: "질환 → 병원체", description: "임상 상황에서 우선 고려할 병원체를 고릅니다." },
  { id: "disease-to-antibiotic", label: "질환 → 항생제", description: "조건에 맞는 경험적 치료 약물을 고릅니다." },
  ...ANTIBIOTIC_QUIZ_TYPES,
];

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalize(value: string) {
  return value.toLocaleLowerCase().replace(/[\s._/()·,+-]+/g, "");
}

function entityChoice(dataset: MicrobiologyDataset, spectrumId: string, fallback: string): Choice {
  const entity = dataset.entities.find((item) => item.spectrumIds.includes(spectrumId));
  return {
    id: spectrumId,
    label: entity?.koreanName || entity?.scientificName || fallback,
    aliases: entity ? [entity.title, entity.scientificName, entity.koreanName, ...entity.aliases] : [fallback],
  };
}

function buildClinicalQuestions(pathways: InfectionPathway[], spectrum: AntibioticSpectrumDataset, microbiology: MicrobiologyDataset, sources: Source[]): Question[] {
  const sourceMap = new Map(sources.map((item) => [item.id, item]));
  return pathways.flatMap((pathway) => pathway.quizQuestions.map((template) => {
    const organismQuestion = template.type === "disease-to-organism";
    const choices = template.choiceIds.map((id) => {
      if (organismQuestion) {
        const organism = spectrum.organisms.find((item) => item.id === id);
        return entityChoice(microbiology, id, organism?.label ?? id);
      }
      const drug = spectrum.antibiotics.find((item) => item.id === id);
      return { id, label: drug?.inn ?? id, aliases: [drug?.displayName ?? "", drug?.drugTitle ?? ""] };
    });
    return {
      id: template.id,
      type: template.type,
      prompt: template.prompt,
      choices,
      correctId: template.correctId,
      explanation: template.explanation,
      sources: template.sourceIds.map((id) => sourceMap.get(id)).filter((item): item is Source => Boolean(item)),
      domain: organismQuestion ? "organism" as const : "drug" as const,
      diseaseSlug: pathway.diseaseSlug,
      diseaseTitle: pathway.diseaseTitle,
    };
  }));
}

function buildSpectrumQuestions(spectrum: AntibioticSpectrumDataset, microbiology: MicrobiologyDataset): Question[] {
  return getAntibioticQuizQuestions(spectrum).map((question) => {
    const domain: AnswerDomain = question.type === "organism-to-drug" ? "drug" : question.type === "drug-to-organism" ? "organism" : "coverage";
    return {
      id: `spectrum-${question.id}`,
      type: question.type,
      prompt: question.prompt,
      choices: question.choices.map((id) => {
        if (domain === "organism") {
          const organism = spectrum.organisms.find((item) => item.id === id);
          return entityChoice(microbiology, id, organism?.label ?? id);
        }
        const label = antibioticQuizChoiceLabel(spectrum, question, id);
        const drug = spectrum.antibiotics.find((item) => item.id === id);
        return { id, label, aliases: drug ? [drug.displayName, drug.drugTitle] : [] };
      }),
      correctId: question.correct,
      explanation: question.explanation,
      sources: [],
      domain,
    };
  });
}

function buildMicrobiologyQuestions(microbiology: MicrobiologyDataset, pathways: InfectionPathwayDataset): Question[] {
  const sourceMap = new Map(microbiology.sources.map((item) => [item.id, item]));
  const entities = microbiology.entities.filter((item) => item.entityKind === "organism" && item.reviewStatus !== "draft" && item.reviewStatus !== "needs_update");
  const identification = entities.flatMap((entity) => {
    const pool = entities.filter((item) => item.id !== entity.id && (item.category === entity.category || item.pathogenType === entity.pathogenType));
    if (pool.length < 3 || !entity.summary[0]) return [];
    const choices = shuffle([entity, ...shuffle(pool).slice(0, 3)]).map((item) => ({
      id: item.id,
      label: item.koreanName || item.scientificName,
      aliases: [item.title, item.scientificName, item.koreanName, ...item.aliases],
    }));
    return [{
      id: `microbiology-identification-${entity.id}`,
      type: "organism-identification" as const,
      prompt: `${entity.summary[0]} 이 설명에 가장 알맞은 병원체는?`,
      choices,
      correctId: entity.id,
      explanation: `${entity.title}의 임상 핵심 요약을 바탕으로 한 문제입니다.`,
      sources: entity.sourceIds.map((id) => sourceMap.get(id)).filter((item): item is NonNullable<typeof item> => Boolean(item)).map((item) => ({ id: item.id, label: item.label, url: item.url, tier: item.tier, year: item.year })),
      domain: "organism" as const,
    }];
  });

  const diseaseChoices = pathways.pathways.filter((item) => item.reviewStatus === "verified").map((item) => ({
    id: item.diseaseSlug,
    label: item.displayName,
    aliases: [item.diseaseTitle, ...item.aliases],
  }));
  const organismToDisease = entities.flatMap((entity) => {
    const spectrumIds = new Set(entity.spectrumIds);
    const related = pathways.pathways.filter((pathway) =>
      pathway.reviewStatus === "verified"
      && pathway.pathogenGroups.some((group) => group.organisms.some((organism) => spectrumIds.has(organism.organismId) && organism.likelihood !== "excluded")),
    );
    return related.slice(0, 2).flatMap((pathway) => {
      const correct = diseaseChoices.find((item) => item.id === pathway.diseaseSlug);
      const distractors = shuffle(diseaseChoices.filter((item) => item.id !== pathway.diseaseSlug)).slice(0, 3);
      if (!correct || distractors.length < 3) return [];
      return [{
        id: `microbiology-disease-${entity.id}-${pathway.id}`,
        type: "organism-to-disease" as const,
        prompt: `${entity.koreanName || entity.scientificName}과 임상적으로 연결되는 감염질환은?`,
        choices: shuffle([correct, ...distractors]),
        correctId: correct.id,
        explanation: `${pathway.displayName} pathway에서 ${entity.title}가 예상 원인 병원체로 연결되어 있습니다.`,
        sources: [],
        domain: "disease" as const,
        diseaseSlug: pathway.diseaseSlug,
        diseaseTitle: pathway.diseaseTitle,
      }];
    });
  });
  return [...identification, ...organismToDisease];
}


function buildVisualIdentificationQuestions(microbiology: MicrobiologyDataset): Question[] {
  const sourceMap = new Map(microbiology.sources.map((item) => [item.id, item]));
  const entities = microbiology.entities.filter((item) => (
    item.entityKind === "organism"
    && item.reviewStatus !== "draft"
    && item.reviewStatus !== "needs_update"
    && microbiologyVisuals[item.id]
  ));

  return entities.flatMap((entity) => {
    const visual = microbiologyVisuals[entity.id];
    const pool = entities.filter((item) => item.id !== entity.id && (item.category === entity.category || item.pathogenType === entity.pathogenType));
    if (!visual || pool.length < 3) return [];
    const choices = shuffle([entity, ...shuffle(pool).slice(0, 3)]).map((item) => ({
      id: item.id,
      label: item.koreanName || item.scientificName,
      aliases: [item.title, item.scientificName, item.koreanName, ...item.aliases],
    }));
    return [{
      id: `microbiology-visual-${entity.id}`,
      type: "visual-organism-identification" as const,
      prompt: `${visual.modality} 이미지를 보고 가장 알맞은 병원체를 고르세요.`,
      choices,
      correctId: entity.id,
      explanation: `${entity.title}를 학습하기 위한 참고 이미지입니다. ${visual.caption} 실제 임상 해석은 검체·배양·영상 판독과 함께 확인합니다.`,
      sources: entity.sourceIds.map((id) => sourceMap.get(id)).filter((item): item is NonNullable<typeof item> => Boolean(item)).map((item) => ({ id: item.id, label: item.label, url: item.url, tier: item.tier, year: item.year })),
      domain: "organism" as const,
      visual,
    }];
  });
}

function EvidenceLinks({ question }: { question: Question }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {question.diseaseSlug ? <Link href={`/disease/${question.diseaseSlug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{question.diseaseTitle}<ChevronRight className="h-3 w-3" /></Link> : null}
      {question.sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{source.label}<ExternalLink className="h-3 w-3" /></a>)}
    </div>
  );
}

function ShortAnswer({ question, value, onChange, onSubmit }: { question: RoundQuestion; value: string; onChange: (id: string) => void; onSubmit: () => void }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const suggestions = question.choices.filter((choice) => {
    const needle = normalize(deferredQuery);
    return needle && [choice.label, ...choice.aliases].some((item) => normalize(item).includes(needle));
  }).slice(0, 6);
  const selected = question.choices.find((choice) => choice.id === value);
  return (
    <div className="mt-5">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
        <input
          value={selected?.label ?? query}
          onChange={(event) => { setQuery(event.target.value); onChange(""); }}
          placeholder="답을 입력하면 유사 후보가 표시됩니다"
          className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        />
      </label>
      {suggestions.length && !selected ? <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">{suggestions.map((choice) => <button key={choice.id} type="button" onClick={() => { onChange(choice.id); setQuery(""); }} className="block w-full border-b border-slate-100 px-4 py-3 text-left text-sm font-medium last:border-b-0 hover:bg-teal-50">{choice.label}</button>)}</div> : null}
      <button type="button" disabled={!value} onClick={onSubmit} className="mt-4 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-40">답안 제출</button>
    </div>
  );
}

export function InfectionHubQuiz({
  pathways,
  spectrum,
  sources,
  microbiology,
}: {
  pathways: InfectionPathway[];
  spectrum: AntibioticSpectrumDataset;
  sources: Source[];
  microbiology: MicrobiologyDataset;
}) {
  const [types, setTypes] = useState<QuizType[]>([]);
  const [answerMode, setAnswerMode] = useState<AnswerMode>("mixed");
  const [count, setCount] = useState(10);
  const [round, setRound] = useState<RoundQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const pathwayDataset: InfectionPathwayDataset = { schemaVersion: 1, reviewedAt: "", disclaimer: "", sources, pathways };
  const bank = [
    ...buildClinicalQuestions(pathways, spectrum, microbiology, sources),
    ...buildSpectrumQuestions(spectrum, microbiology),
    ...buildMicrobiologyQuestions(microbiology, pathwayDataset),
    ...buildVisualIdentificationQuestions(microbiology),
  ];
  const availableTypes = TYPE_OPTIONS.filter((type) => bank.some((question) => question.type === type.id));
  const eligible = bank.filter((question) => types.includes(question.type));
  const current = round[index];
  const finished = round.length > 0 && index >= round.length;
  const score = answers.filter((answer) => answer.selectedId === answer.question.correctId).length;

  const reset = () => { setRound([]); setIndex(0); setSelectedId(""); setSubmitted(false); setAnswers([]); };
  const start = () => {
    const questions = shuffle(eligible).slice(0, Math.min(count, eligible.length)).map((question) => {
      const resolvedMode = answerMode === "mixed"
        ? (question.domain === "coverage" || Math.random() < 0.5 ? "multiple-choice" : "short-answer")
        : answerMode === "short-answer" && question.domain === "coverage" ? "multiple-choice" : answerMode;
      return { ...question, choices: shuffle(question.choices), answerMode: resolvedMode };
    });
    setRound(questions);
    setIndex(0);
    setSelectedId("");
    setSubmitted(false);
    setAnswers([]);
  };
  const submit = (id = selectedId) => {
    if (!current || !id || submitted) return;
    setSelectedId(id);
    setSubmitted(true);
  };
  const next = () => {
    if (!current || !submitted) return;
    setAnswers((items) => [...items, { question: current, selectedId }]);
    setIndex((value) => value + 1);
    setSelectedId("");
    setSubmitted(false);
  };

  if (!round.length) return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Quiz setup</div>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">감염 퀴즈 설정</h2>
      <div className="mt-6 flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold">문제 범위</h3>
        <button type="button" onClick={() => setTypes(types.length === availableTypes.length ? [] : availableTypes.map((item) => item.id))} className="text-xs font-bold text-teal-800">{types.length === availableTypes.length ? "전체 해제" : "전체 선택"}</button>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {availableTypes.map((type) => {
          const active = types.includes(type.id);
          return <button key={type.id} type="button" onClick={() => setTypes((items) => active ? items.filter((item) => item !== type.id) : [...items, type.id])} className={`rounded-xl border p-4 text-left transition ${active ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-300"}`}><div className="flex items-center justify-between"><strong className="text-sm">{type.label}</strong>{active ? <CheckCircle2 className="h-4 w-4 text-teal-700" /> : null}</div><p className="mt-2 text-xs leading-5 text-slate-600">{type.description}</p></button>;
        })}
      </div>
      <h3 className="mt-7 text-sm font-bold">답안 형식</h3>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {([["multiple-choice", "객관식"], ["short-answer", "단답형"], ["mixed", "혼합"]] as const).map(([value, label]) => <button key={value} type="button" onClick={() => setAnswerMode(value)} className={`rounded-xl border px-3 py-3 text-sm font-bold ${answerMode === value ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200"}`}>{label}</button>)}
      </div>
      <label className="mt-7 block max-w-xs text-sm font-bold">문제 수<input type="number" min="1" max={Math.max(1, eligible.length)} value={count} onChange={(event) => setCount(Math.max(1, Number(event.target.value) || 1))} className="mt-2 block w-full rounded-xl border border-slate-200 px-3 py-2.5" /></label>
      <p className="mt-2 text-xs text-slate-500">선택한 범위에서 최대 {eligible.length}문제를 출제할 수 있습니다.</p>
      <button type="button" disabled={!types.length || !eligible.length} onClick={start} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white disabled:opacity-40">퀴즈 시작<ChevronRight className="h-4 w-4" /></button>
    </section>
  );

  if (finished) {
    const wrong = answers.filter((answer) => answer.selectedId !== answer.question.correctId);
    return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Result</div><h2 className="mt-2 text-3xl font-bold">{round.length}문제 중 {score}문제 정답</h2><p className="mt-1 text-sm text-slate-600">정답률 {Math.round(score / round.length * 100)}%</p><div className="mt-6 space-y-3"><h3 className="font-bold">오답 확인</h3>{wrong.length ? wrong.map((answer) => { const selected = answer.question.choices.find((item) => item.id === answer.selectedId)?.label; const correct = answer.question.choices.find((item) => item.id === answer.question.correctId)?.label; return <article key={answer.question.id} className="rounded-xl border border-rose-200 bg-rose-50/50 p-4"><strong className="text-sm">{answer.question.prompt}</strong><p className="mt-2 text-sm text-rose-800">내 답: {selected}</p><p className="text-sm text-emerald-800">정답: {correct}</p><p className="mt-2 text-sm leading-6 text-slate-700">{answer.question.explanation}</p><EvidenceLinks question={answer.question} /></article>; }) : <p className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">모든 문제를 맞혔습니다.</p>}</div><button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"><RotateCcw className="h-4 w-4" />새로 풀기</button></section>;
  }

  const correct = selectedId === current.correctId;
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex justify-between"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{TYPE_OPTIONS.find((item) => item.id === current.type)?.label}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs">{index + 1} / {round.length}</span></div>
      {current.visual ? <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${current.visual.asset}`} alt={`${current.visual.modality} 병원체 참고 이미지`} width={640} height={640} unoptimized className="mx-auto aspect-square w-full max-w-md object-cover" /><p className="border-t border-slate-200 bg-white px-4 py-2 text-xs text-slate-500">교육용 참고 이미지입니다. 실제 진단은 검체·배양·영상 판독과 함께 확인합니다.</p></div> : null}
      <h2 className="mt-6 text-lg font-bold leading-8">{current.prompt}</h2>
      {current.answerMode === "multiple-choice" ? <div className="mt-5 grid gap-3">{current.choices.map((choice) => { const picked = selectedId === choice.id; const isAnswer = submitted && choice.id === current.correctId; return <button key={choice.id} type="button" disabled={submitted} onClick={() => submit(choice.id)} className={`flex items-center justify-between rounded-xl border p-4 text-left ${isAnswer ? "border-emerald-500 bg-emerald-50" : submitted && picked ? "border-rose-400 bg-rose-50" : "border-slate-200 hover:border-teal-400"}`}><span className="font-medium">{choice.label}</span>{submitted ? (isAnswer ? <CheckCircle2 className="h-5 w-5 text-emerald-700" /> : picked ? <XCircle className="h-5 w-5 text-rose-700" /> : null) : <ChevronRight className="h-4 w-4 text-slate-400" />}</button>; })}</div> : <ShortAnswer key={current.id} question={current} value={selectedId} onChange={setSelectedId} onSubmit={() => submit()} />}
      {submitted ? <div className="mt-5 rounded-xl bg-slate-50 p-4"><strong>{correct ? "정답입니다." : "오답입니다."}</strong>{!correct ? <p className="mt-1 text-sm text-emerald-800">정답: {current.choices.find((item) => item.id === current.correctId)?.label}</p> : null}<p className="mt-2 text-sm leading-6 text-slate-700">{current.explanation}</p><EvidenceLinks question={current} /><button type="button" onClick={next} className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">{index + 1 === round.length ? "결과 보기" : "다음 문제"}</button></div> : null}
    </section>
  );
}
