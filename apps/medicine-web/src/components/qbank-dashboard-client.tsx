"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Bookmark, CircleAlert, Play, RotateCcw } from "lucide-react";
import { PracticeBankPicker } from "@/components/practice-bank-picker";
import { EMPTY_PRACTICE_FILTERS, matchesPractice, stringArray, toggleGroup, type PracticeFilters, type PracticeIndex } from "@/lib/practice-selection";
import { loadPracticeIndex } from "@/lib/practice-bank";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
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

const SPECIALTY_SELECTION_GROUPS = [
  { id: "internal", label: "내과", from: 1, to: 10 },
  { id: "surgical", label: "외산소", from: 11, to: 14 },
  { id: "minor", label: "마이너", from: 15, to: 22 },
] as const;

function specialtyNumber(name: string) {
  const number = Number(name.match(/^\s*(\d{1,2})\b/)?.[1]);
  return Number.isFinite(number) ? number : null;
}

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
  const allSlugs = items.map((item) => item.slug);
  const all = allSlugs.length > 0 && allSlugs.every((slug) => selected.includes(slug));
  const selectionGroups = SPECIALTY_SELECTION_GROUPS.map((group) => ({
    ...group,
    items: items.filter((item) => {
      const number = specialtyNumber(item.name);
      return number !== null && number >= group.from && number <= group.to;
    }),
  })).filter((group) => group.items.length > 0);
  const toggleSelection = (slugs: string[]) => {
    if (!slugs.length) return;
    setSelected(toggleGroup(selected, slugs));
  };
  return <fieldset>
    <div className="flex flex-wrap items-center gap-2">
      <legend className="text-base font-semibold text-slate-900">{title} <span className="text-sm font-normal text-slate-500">{items.reduce((sum, item) => sum + item.count, 0).toLocaleString()}문항</span></legend>
    </div>
    {items.length > 0 && <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
      {selectionGroups.map((group) => {
        const slugs = group.items.map((item) => item.slug);
        const active = slugs.every((slug) => selected.includes(slug));
        return <button key={group.id} type="button" onClick={() => toggleSelection(slugs)} className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${active ? "border-teal-700 bg-teal-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-800"}`}>{group.label}</button>;
      })}
      <button type="button" onClick={() => toggleSelection(allSlugs)} className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${all ? "border-teal-700 bg-teal-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-800"}`}>{all ? "전체 해제" : "전체 선택"}</button>
    </div>}
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
  const [tab, setTab] = useState<"theory" | "clinical" | "practice">("theory");
  const [practice, setPractice] = useState<PracticeIndex[]>([]);
  const [practiceMessage, setPracticeMessage] = useState("실전문제 접근 권한을 확인 중입니다.");
  const [practiceFilters, setPracticeFilters] = useState<PracticeFilters>(EMPTY_PRACTICE_FILTERS);
  const [loadedDraft, setLoadedDraft] = useState("");
  const draftKey = `medicine-qbank-picker-v2:${relatedTarget ? `${relatedTarget.type}:${relatedTarget.slug}` : "all"}`;
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

  useEffect(() => {
    let active = true;
    let revision = 0;
    const refresh = async () => {
      const request = ++revision;
      setPractice([]);
      setPracticeMessage("실전문제 접근 권한을 확인 중입니다.");
      try {
        const result = await loadPracticeIndex();
        if (active && request === revision) { setPractice(result.questions); setPracticeMessage(result.message); }
      } catch (error) { if (active && request === revision) setPracticeMessage(error instanceof Error ? error.message : "실전문제를 불러오지 못했습니다."); }
    };
    void refresh();
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const listener = getSupabaseBrowserClient()?.auth.onAuthStateChange(() => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => { if (active) void refresh(); }, 0);
    });
    return () => { active = false; clearTimeout(refreshTimer); listener?.data.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(draftKey) ?? "null");
      // Restore browser-only draft after hydration; server rendering cannot read sessionStorage.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedTheory(stringArray(saved?.theory));
      setSelectedClinical(stringArray(saved?.clinical));
      setPracticeFilters({ books: [], specialties: stringArray(saved?.practice?.specialties), years: stringArray(saved?.practice?.years), series: saved?.practice?.series ? stringArray(saved.practice.series) : [...new Set(stringArray(saved?.practice?.books).map((book) => book.startsWith("perfect") ? "퍼펙트" : "리얼"))], departments: stringArray(saved?.practice?.departments), order: saved?.practice?.order === "book" ? "book" : "random" });
      setTab(saved?.tab === "clinical" || saved?.tab === "practice" ? saved.tab : "theory");
      setCount(typeof saved?.count === "string" ? saved.count : "10");
    } catch { /* Storage is optional; in-memory selections remain available. */ }
    setLoadedDraft(draftKey);
  }, [draftKey]);
  useEffect(() => {
    if (loadedDraft !== draftKey) return;
    try { sessionStorage.setItem(draftKey, JSON.stringify({ tab, theory: selectedTheory, clinical: selectedClinical, practice: practiceFilters, count })); } catch { /* Storage unavailable. */ }
  }, [loadedDraft, draftKey, tab, selectedTheory, selectedClinical, practiceFilters, count]);
  const availablePractice = useMemo(() => practice.filter((q) => !relatedTarget || (relatedTarget.type === "disease" ? q.relatedDiseaseSlugs.some((slug) => (relatedTarget.scopeSlugs ?? [relatedTarget.slug]).includes(slug)) : q.relatedCcSlugs.includes(relatedTarget.slug))), [practice, relatedTarget]);
  const practiceCount = availablePractice.filter((q) => matchesPractice(q, practiceFilters)).length;
  const selectedTheoryCount = availableQuestions.filter((q) => q.questionBank === "theory" && selectedTheory.includes(theorySelectionKey(q))).length;
  const selectedClinicalCount = availableQuestions.filter((q) => q.questionBank === "clinical" && selectedClinical.includes(q.specialtySlug)).length;
  const selectedCount = useMemo(() => availableQuestions.filter((item) => (
    (item.questionBank === "theory" && selectedTheory.includes(theorySelectionKey(item)))
    || (item.questionBank === "clinical" && selectedClinical.includes(item.specialtySlug))
  )).length, [availableQuestions, selectedClinical, selectedTheory]);
  const includeTheory = true;
  const includeClinical = true;
  const includePractice = practiceFilters.order !== "book";
  const randomSources = [
    { label: "이론", count: includeTheory ? selectedTheoryCount : 0 },
    { label: "임상", count: includeClinical ? selectedClinicalCount : 0 },
    { label: "실전", count: includePractice ? practiceCount : 0 },
  ].filter(source => source.count > 0);
  const randomPool = randomSources.reduce((sum, source) => sum + source.count, 0);
  const validCount = /^\d+$/.test(count) && Number(count) >= 1 && Number(count) <= 100;
  const drawCount = Math.min(Number(count) || 0, randomPool);
  const randomLabel = randomSources.map(source => source.label).join(" + ");
  const sessionParams = new URLSearchParams({
    mode: relatedTarget ? "related" : "selection",
    theory: includeTheory ? selectedTheory.join(",") : "",
    clinical: includeClinical ? selectedClinical.join(",") : "",
    count,
    practiceSeries: includePractice ? (practiceFilters.series ?? []).join(",") : "",
    practiceDepartments: includePractice ? (practiceFilters.departments ?? []).join(",") : "",
    practiceBooks: includePractice ? practiceFilters.books.join(",") : "",
    practiceSpecialties: includePractice ? practiceFilters.specialties.join(",") : "",
    practiceYears: includePractice ? practiceFilters.years.join(",") : "",
  });
  if (relatedTarget) {
    sessionParams.set("targetType", relatedTarget.type);
    sessionParams.set("target", relatedTarget.slug);
    if (relatedTarget.type === "disease") sessionParams.set("targets", (relatedTarget.scopeSlugs ?? [relatedTarget.slug]).join(","));
  }
  const sessionHref = `/review/qbank/session?${sessionParams.toString()}`;
  return <div className="space-y-6">
    {!relatedTarget ? <section className="grid grid-cols-3 gap-2 sm:gap-3">
      <div className="surface p-4"><div className="text-xs text-slate-500">전체 문제</div><div className="mt-1 text-2xl font-semibold">{(questions.length + practice.length).toLocaleString()}</div></div>
      <div className="surface p-4"><div className="text-xs text-slate-500">풀이 완료</div><div className="mt-1 text-2xl font-semibold">{stats.attempted.toLocaleString()}</div></div>
      <div className="surface border-rose-200 bg-rose-50 p-4"><div className="text-xs text-rose-700">오답</div><div className="mt-1 text-2xl font-semibold text-rose-950">{stats.wrong.toLocaleString()}</div></div>
    </section> : null}

    <section className="surface p-5 sm:p-6">
      <fieldset disabled={loadedDraft !== draftKey}>
      <div className="flex flex-wrap items-baseline justify-between gap-3"><div><h2 className="text-xl font-semibold text-slate-950">{relatedTarget ? `${relatedTarget.label} 관련 문제` : "문제 선택"}</h2><p className="mt-1 text-sm text-slate-600">탭을 바꿔도 선택이 유지됩니다. 선택한 범위에서 랜덤으로 풀거나, 실전 회차 전체를 번호순으로 풀 수 있습니다.</p></div><span className="pill">선택됨 {(selectedCount + practiceCount).toLocaleString()}문항</span></div>
      <div role="tablist" aria-label="문제 종류" className="mt-5 grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1">
        {([['theory', '이론문제', selectedTheoryCount], ['clinical', '임상문제', selectedClinicalCount], ['practice', '실전문제', practiceCount]] as const).map(([key, label, selected]) => <button key={key} type="button" role="tab" id={`tab-${key}`} aria-selected={tab === key} aria-controls={`panel-${key}`} tabIndex={tab === key ? 0 : -1} onClick={() => setTab(key)} onKeyDown={(event) => {
          const tabs = ['theory', 'clinical', 'practice'] as const;
          const index = tabs.indexOf(key);
          const next = event.key === 'ArrowRight' ? tabs[(index + 1) % 3] : event.key === 'ArrowLeft' ? tabs[(index + 2) % 3] : event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs[2] : null;
          if (next) { event.preventDefault(); setTab(next); document.getElementById(`tab-${next}`)?.focus(); }
        }} className={`rounded-md px-2 py-3 text-sm font-semibold ${tab === key ? 'bg-white text-teal-800 shadow-sm' : 'text-slate-600'}`}>{label} <span className="text-xs">{selected > 0 ? `(${selected})` : ''}</span></button>)}
      </div>
      <div role="tabpanel" id="panel-theory" aria-labelledby="tab-theory" hidden={tab !== "theory"} className="mt-6 space-y-6">
        <div><h3 className="text-base font-semibold text-slate-900">이론 문제 <span className="text-sm font-normal text-slate-500">{theoryGroups.reduce((sum, group) => sum + group.items.reduce((countSum, item) => countSum + item.count, 0), 0).toLocaleString()}문항</span></h3><p className="mt-1 text-sm text-slate-500">문서 소속별로 나눈 뒤 필요한 분과만 선택하세요.</p></div>
        {theoryGroups.map((group) => <div key={group.type} className="border-t border-slate-200 pt-5"><p className="mb-4 text-sm text-slate-500">{group.description}</p><QuestionBankPicker questionBank="theory" title={group.title} items={group.items} selected={selectedTheory} setSelected={setSelectedTheory} /></div>)}
      </div>
      <div role="tabpanel" id="panel-clinical" aria-labelledby="tab-clinical" hidden={tab !== "clinical"} className="mt-6">
        <QuestionBankPicker questionBank="clinical" title="임상 문제" items={clinicalSpecialties} selected={selectedClinical} setSelected={setSelectedClinical} />
      </div>
      <div role="tabpanel" id="panel-practice" aria-labelledby="tab-practice" hidden={tab !== "practice"} className="mt-6">
        <PracticeBankPicker questions={availablePractice} filters={practiceFilters} onChange={setPracticeFilters} message={practiceMessage} />
      </div>
      {tab !== "practice" && <section className="mt-6 rounded-xl border border-teal-200 bg-teal-50/50 p-4 sm:p-5" aria-label="랜덤풀이 시작 설정">
        <h3 className="font-semibold text-slate-900">랜덤풀이 시작</h3>

        <p className="mt-3 text-sm text-slate-700" role="status">{randomSources.length ? `출제 범위: ${randomSources.map(source => `${source.label} ${source.count.toLocaleString()}문항`).join(" + ")}` : "위에서 풀고 싶은 분과 또는 조건을 선택하세요."}</p>

        <div className="mt-4 flex flex-wrap items-end gap-3"><label className="block text-sm font-medium text-slate-700">이번에 풀 문항 수<input type="number" min="1" max="100" step="1" inputMode="numeric" value={count} onChange={event => setCount(event.target.value)} aria-describedby="random-count-help" className="mt-2 block w-32 rounded-lg border border-slate-300 bg-white px-3 py-2.5" /></label>
        {randomPool > 0 && validCount ? <Link href={sessionHref} className="primary-action"><Play className="h-4 w-4" />{randomLabel} {drawCount}문항 랜덤으로 시작</Link> : <button disabled className="primary-action opacity-40">{randomPool ? "문항 수를 확인하세요" : "출제 범위를 선택하세요"}</button>}</div>
        <p id="random-count-help" className="mt-2 text-xs text-slate-500">{!validCount ? "문항 수는 1~100 사이의 정수로 입력하세요." : randomPool > 0 ? `선택 범위에서 ${drawCount}문항을 무작위로 뽑습니다.${Number(count) > randomPool ? " 선택한 문제가 입력 수보다 적어 모두 출제합니다." : ""}` : "선택한 범위에서 입력한 수만큼 무작위로 출제합니다. 최대 100문항입니다."}</p>
      </section>}

      </fieldset>
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
