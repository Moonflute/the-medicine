"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Bookmark, CircleAlert, Play, RotateCcw } from "lucide-react";
import { loadQbankState, QBANK_CHANGE_EVENT } from "@/lib/qbank-store";
import type { QbankQuestionIndex, QbankSpecialtySummary } from "@/lib/types";

type RelatedTarget = { type: "disease" | "cc"; slug: string; label: string };
type SpecialtyChoice = QbankSpecialtySummary;

function specialtyChoices(questions: QbankQuestionIndex[], questionBank: "theory" | "clinical"): SpecialtyChoice[] {
  const grouped = new Map<string, SpecialtyChoice>();
  for (const question of questions) {
    if (question.questionBank !== questionBank) continue;
    const current = grouped.get(question.specialtySlug);
    grouped.set(question.specialtySlug, current ? { ...current, count: current.count + 1 } : { slug: question.specialtySlug, name: question.specialty, count: 1 });
  }
  return [...grouped.values()].sort((left, right) => left.name.localeCompare(right.name, "ko"));
}

function QuestionBankPicker({ questionBank, title, items, selected, setSelected }: { questionBank: "theory" | "clinical"; title: string; items: SpecialtyChoice[]; selected: string[]; setSelected: (items: string[]) => void }) {
  const all = items.length > 0 && items.every((item) => selected.includes(item.slug));
  return <fieldset>
    <div className="flex flex-wrap items-center justify-between gap-2">
      <legend className="text-base font-semibold text-slate-900">{title} <span className="text-sm font-normal text-slate-500">{items.reduce((sum, item) => sum + item.count, 0).toLocaleString()}문항</span></legend>
      <button type="button" onClick={() => setSelected(all ? [] : items.map((item) => item.slug))} className="text-xs font-semibold text-teal-700 hover:underline" disabled={items.length === 0}>{all ? "전체 해제" : "전체 선택"}</button>
    </div>
    {items.length === 0 ? <p className="mt-3 text-sm text-slate-500">연결된 {questionBank === "theory" ? "이론" : "임상"} 문제가 없습니다.</p> : <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{items.map((item) => {
      const checked = selected.includes(item.slug);
      return <label key={item.slug} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm ${checked ? "border-teal-400 bg-teal-50 text-teal-950" : "border-slate-200 bg-white text-slate-700"}`}>
        <input type="checkbox" checked={checked} onChange={() => setSelected(checked ? selected.filter((value) => value !== item.slug) : [...selected, item.slug])} className="h-4 w-4 accent-teal-600" />{item.name} <span className="text-xs text-slate-500">({item.count})</span>
      </label>;
    })}</div>}
  </fieldset>;
}

export function QbankDashboardClient({ questions, relatedTarget }: { questions: QbankQuestionIndex[]; relatedTarget?: RelatedTarget }) {
  const availableQuestions = useMemo(() => {
    if (!relatedTarget) return questions;
    return questions.filter((question) => (
      (question.targetType === relatedTarget.type && question.targetSlug === relatedTarget.slug)
      || (relatedTarget.type === "disease" && question.relatedDiseaseSlugs?.includes(relatedTarget.slug))
      || (relatedTarget.type === "cc" && question.relatedCcSlugs?.includes(relatedTarget.slug))
    ));
  }, [questions, relatedTarget]);
  const theorySpecialties = useMemo(() => specialtyChoices(availableQuestions, "theory"), [availableQuestions]);
  const clinicalSpecialties = useMemo(() => specialtyChoices(availableQuestions, "clinical"), [availableQuestions]);
  const [selectedTheory, setSelectedTheory] = useState<string[]>(() => theorySpecialties.map((item) => item.slug));
  const [selectedClinical, setSelectedClinical] = useState<string[]>(() => clinicalSpecialties.map((item) => item.slug));
  const [count, setCount] = useState("10");
  const [stats, setStats] = useState({ attempted: 0, wrong: 0, bookmarks: 0 });

  useEffect(() => {
    const refresh = () => {
      const state = loadQbankState();
      const progress = Object.values(state.progress);
      setStats({ attempted: progress.length, wrong: state.wrongIds.length, bookmarks: state.bookmarkIds.length });
    };
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);

  const selectedCount = useMemo(() => availableQuestions.filter((item) => (
    (item.questionBank === "theory" && selectedTheory.includes(item.specialtySlug))
    || (item.questionBank === "clinical" && selectedClinical.includes(item.specialtySlug))
  )).length, [availableQuestions, selectedClinical, selectedTheory]);
  const sessionParams = new URLSearchParams({
    mode: relatedTarget ? "related" : "selection",
    theory: selectedTheory.join(","),
    clinical: selectedClinical.join(","),
    count,
  });
  if (relatedTarget) {
    sessionParams.set("targetType", relatedTarget.type);
    sessionParams.set("target", relatedTarget.slug);
  }
  const sessionHref = `/review/qbank/session?${sessionParams.toString()}`;
  return <div className="space-y-6">
    {!relatedTarget ? <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <div className="surface p-4"><div className="text-xs text-slate-500">전체 문제</div><div className="mt-1 text-2xl font-semibold">{questions.length.toLocaleString()}</div></div>
      <div className="surface p-4"><div className="text-xs text-slate-500">풀이 완료</div><div className="mt-1 text-2xl font-semibold">{stats.attempted.toLocaleString()}</div></div>
      <div className="surface border-rose-200 bg-rose-50 p-4"><div className="text-xs text-rose-700">오답</div><div className="mt-1 text-2xl font-semibold text-rose-950">{stats.wrong.toLocaleString()}</div></div>
    </section> : null}

    <section className="surface p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3"><div><h2 className="text-xl font-semibold text-slate-950">{relatedTarget ? `${relatedTarget.label} 관련 문제` : "문제 선택"}</h2><p className="mt-1 text-sm text-slate-600">이론과 임상을 각각 선택해 한 세트로 풀 수 있습니다.</p></div><span className="pill">선택됨 {selectedCount.toLocaleString()}문항</span></div>
      <div className="mt-6"><QuestionBankPicker questionBank="theory" title="이론 문제" items={theorySpecialties} selected={selectedTheory} setSelected={setSelectedTheory} /></div>
      <div className="my-6 border-t border-slate-200" />
      <QuestionBankPicker questionBank="clinical" title="임상 문제" items={clinicalSpecialties} selected={selectedClinical} setSelected={setSelectedClinical} />
      <label className="mt-6 block max-w-xs text-sm font-medium text-slate-700">문항 수<input type="number" min="1" max="100" step="1" inputMode="numeric" value={count} onChange={(event) => setCount(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5" /></label>
      {selectedCount > 0 ? <Link href={sessionHref} className="primary-action mt-5"><Play className="h-4 w-4" />문제 풀기 시작</Link> : <p className="mt-5 text-sm text-rose-700">이론 또는 임상 문제를 하나 이상 선택하세요.</p>}
    </section>

    {!relatedTarget ? <section className="grid gap-3 sm:grid-cols-3">
      <Link href={`/review/qbank/session?mode=unattempted&count=${count}`} className="list-tile p-5"><RotateCcw className="h-5 w-5 text-teal-700" /><h3 className="mt-3 font-semibold">미풀이 문제</h3><p className="mt-1 text-sm text-slate-600">아직 풀지 않은 문제만 무작위로 풉니다.</p></Link>
      <Link href={`/review/qbank/session?mode=wrong&count=${count}`} className="list-tile p-5"><CircleAlert className="h-5 w-5 text-rose-700" /><h3 className="mt-3 font-semibold">오답 다시 풀기</h3><p className="mt-1 text-sm text-slate-600">표시한 오답 {stats.wrong}개 중에서 출제합니다.</p></Link>
      <Link href={`/review/qbank/session?mode=bookmarks&count=${count}`} className="list-tile p-5"><Bookmark className="h-5 w-5 text-amber-700" /><h3 className="mt-3 font-semibold">북마크</h3><p className="mt-1 text-sm text-slate-600">저장한 문제 {stats.bookmarks}개를 다시 풉니다.</p></Link>
    </section> : null}
  </div>;
}
