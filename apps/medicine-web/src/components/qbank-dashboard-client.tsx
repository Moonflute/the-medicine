"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Bookmark, CircleAlert, Play, RotateCcw } from "lucide-react";
import { loadQbankState, QBANK_CHANGE_EVENT } from "@/lib/qbank-store";
import type { QbankQuestionIndex, QbankSpecialtySummary } from "@/lib/types";

type RelatedTarget = { type: "disease" | "cc"; slug: string; label: string; scopeSlugs?: string[] };
type SpecialtyChoice = QbankSpecialtySummary;
type TheorySourceType = "disease" | "cc" | "drug" | "other";

const THEORY_SOURCE_GROUPS: Array<{ type: TheorySourceType; title: string; description: string }> = [
  { type: "disease", title: "질병 이론", description: "질병 문서에서 만든 핵심 개념 문제" },
  { type: "cc", title: "CC 이론", description: "주호소·증상 접근 문제" },
  { type: "drug", title: "약물 이론", description: "약물 문서에서 만든 핵심 개념 문제" },
  { type: "other", title: "기타 이론", description: "분류되지 않은 이론 문제" },
];

function theorySourceType(question: QbankQuestionIndex): TheorySourceType {
  return question.targetType === "disease" || question.targetType === "cc" || question.targetType === "drug" ? question.targetType : "other";
}

function theorySelectionKey(question: Pick<QbankQuestionIndex, "targetType" | "specialtySlug">) {
  const sourceType = question.targetType === "disease" || question.targetType === "cc" || question.targetType === "drug" ? question.targetType : "other";
  return `${sourceType}:${question.specialtySlug}`;
}

function specialtyChoices(questions: QbankQuestionIndex[], questionBank: "theory" | "clinical", theorySource?: TheorySourceType): SpecialtyChoice[] {
  const grouped = new Map<string, SpecialtyChoice>();
  for (const question of questions) {
    if (question.questionBank !== questionBank) continue;
    if (questionBank === "theory" && theorySource && theorySourceType(question) !== theorySource) continue;
    const current = grouped.get(question.specialtySlug);
    const slug = questionBank === "theory" ? theorySelectionKey(question) : question.specialtySlug;
    grouped.set(question.specialtySlug, current ? { ...current, count: current.count + 1 } : { slug, name: question.specialty, count: 1 });
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
    {items.length === 0 ? <p className="mt-3 text-sm text-slate-500">연결된 {questionBank === "theory" ? "이론" : "임상"} 문제가 없습니다.</p> : <div className="mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4">{items.map((item) => {
      const checked = selected.includes(item.slug);
      return <label key={item.slug} className={`flex cursor-pointer items-start gap-1.5 rounded-lg border px-2.5 py-2 text-[13px] leading-5 sm:px-3 sm:text-sm ${checked ? "border-teal-400 bg-teal-50 text-teal-950" : "border-slate-200 bg-white text-slate-700"}`}>
        <input type="checkbox" checked={checked} onChange={() => setSelected(checked ? selected.filter((value) => value !== item.slug) : [...selected, item.slug])} className="mt-0.5 h-4 w-4 shrink-0 accent-teal-600" /><span className="min-w-0">{item.name}</span> <span className="shrink-0 text-[11px] text-slate-500">({item.count})</span>
      </label>;
    })}</div>}
  </fieldset>;
}

export function QbankDashboardClient({ questions, relatedTarget }: { questions: QbankQuestionIndex[]; relatedTarget?: RelatedTarget }) {
  const availableQuestions = useMemo(() => {
    if (!relatedTarget) return questions;
    const targetSlugs = new Set(relatedTarget.type === "disease" ? (relatedTarget.scopeSlugs ?? [relatedTarget.slug]) : [relatedTarget.slug]);
    return questions.filter((question) => (
      (question.targetType === relatedTarget.type && targetSlugs.has(question.targetSlug))
      || (relatedTarget.type === "disease" && question.relatedDiseaseSlugs?.some((slug) => targetSlugs.has(slug)))
      || (relatedTarget.type === "cc" && question.relatedCcSlugs?.includes(relatedTarget.slug))
    ));
  }, [questions, relatedTarget]);
  const theoryGroups = useMemo(() => THEORY_SOURCE_GROUPS.map((group) => ({ ...group, items: specialtyChoices(availableQuestions, "theory", group.type) })).filter((group) => group.items.length > 0), [availableQuestions]);
  const clinicalSpecialties = useMemo(() => specialtyChoices(availableQuestions, "clinical"), [availableQuestions]);
  const [selectedTheory, setSelectedTheory] = useState<string[]>([]);
  const [selectedClinical, setSelectedClinical] = useState<string[]>([]);
  const [count, setCount] = useState("10");
  const [showUnattemptedDialog, setShowUnattemptedDialog] = useState(false);
  const [unattemptedCount, setUnattemptedCount] = useState("10");
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
    (item.questionBank === "theory" && selectedTheory.includes(theorySelectionKey(item)))
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
    if (relatedTarget.type === "disease") sessionParams.set("targets", (relatedTarget.scopeSlugs ?? [relatedTarget.slug]).join(","));
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
      <div className="mt-6 space-y-6">
        <div><h3 className="text-base font-semibold text-slate-900">이론 문제 <span className="text-sm font-normal text-slate-500">{theoryGroups.reduce((sum, group) => sum + group.items.reduce((countSum, item) => countSum + item.count, 0), 0).toLocaleString()}문항</span></h3><p className="mt-1 text-sm text-slate-500">문서 소속별로 나눈 뒤 필요한 분과만 선택하세요.</p></div>
        {theoryGroups.map((group) => <div key={group.type} className="border-t border-slate-200 pt-5"><p className="mb-4 text-sm text-slate-500">{group.description}</p><QuestionBankPicker questionBank="theory" title={group.title} items={group.items} selected={selectedTheory} setSelected={setSelectedTheory} /></div>)}
      </div>
      <div className="my-6 border-t border-slate-200" />
      <QuestionBankPicker questionBank="clinical" title="임상 문제" items={clinicalSpecialties} selected={selectedClinical} setSelected={setSelectedClinical} />
      <label className="mt-6 block max-w-xs text-sm font-medium text-slate-700">문항 수<input type="number" min="1" max="100" step="1" inputMode="numeric" value={count} onChange={(event) => setCount(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5" /></label>
      {selectedCount > 0 ? <Link href={sessionHref} className="primary-action mt-5"><Play className="h-4 w-4" />문제 풀기 시작</Link> : <p className="mt-5 text-sm text-rose-700">이론 또는 임상 문제를 하나 이상 선택하세요.</p>}
    </section>

    {!relatedTarget ? <section className="grid gap-3 sm:grid-cols-3">
      <button type="button" onClick={() => setShowUnattemptedDialog(true)} className="list-tile p-5 text-left"><RotateCcw className="h-5 w-5 text-teal-700" /><h3 className="mt-3 font-semibold">미풀이 문제</h3><p className="mt-1 text-sm text-slate-600">아직 풀지 않은 문제만 무작위로 풉니다.</p></button>
      <Link href={`/review/qbank/session?mode=wrong&count=${count}`} className="list-tile p-5"><CircleAlert className="h-5 w-5 text-rose-700" /><h3 className="mt-3 font-semibold">오답 다시 풀기</h3><p className="mt-1 text-sm text-slate-600">표시한 오답 {stats.wrong}개 중에서 출제합니다.</p></Link>
      <Link href={`/review/qbank/session?mode=bookmarks&count=${count}`} className="list-tile p-5"><Bookmark className="h-5 w-5 text-amber-700" /><h3 className="mt-3 font-semibold">북마크</h3><p className="mt-1 text-sm text-slate-600">저장한 문제 {stats.bookmarks}개를 다시 풉니다.</p></Link>
    </section> : null}

    {showUnattemptedDialog ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4" role="dialog" aria-modal="true" aria-labelledby="unattempted-dialog-title">
      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
        <h2 id="unattempted-dialog-title" className="text-lg font-semibold text-slate-950">미풀이 문제</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">풀지 않은 문제 중에서 무작위로 출제할 문항 수를 입력하세요.</p>
        <label className="mt-5 block text-sm font-medium text-slate-700">문항 수
          <input type="number" min="1" max="100" step="1" inputMode="numeric" autoFocus value={unattemptedCount} onChange={(event) => setUnattemptedCount(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5" />
        </label>
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={() => setShowUnattemptedDialog(false)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">취소</button>
          <Link href={`/review/qbank/session?mode=unattempted&count=${encodeURIComponent(unattemptedCount)}`} onClick={() => setShowUnattemptedDialog(false)} className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">시작하기</Link>
        </div>
      </div>
    </div> : null}
  </div>;
}
