"use client";

import { PracticeStartControls } from "@/components/practice-start-controls";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { readMockExam } from "@/lib/mock-exam";
import type { PracticeFilters, PracticeIndex } from "@/lib/practice-selection";
import { matchesPractice, toggleGroup, mockExamFilters, practiceMockExams, PRACTICE_DEPARTMENTS, practiceTopicKey, practiceTopicLabel } from "@/lib/practice-selection";

type Dimension = "series" | "departments" | "specialties" | "years";
export function PracticeBankPicker({ questions, filters, onChange, message }: {
  questions: PracticeIndex[]; filters: PracticeFilters; onChange: (next: PracticeFilters) => void; message: string;
}) {
  const [examMode, setExamMode] = useState(true);
  const [lastMock, setLastMock] = useState<{ title: string; href: string; finished: boolean } | null>(null);
  useEffect(() => {
    let active = true;
    async function restore() {
      let saved: { title: string; href: string; finished: boolean; updatedAt?: string } | null = null;
      try {
        const local = JSON.parse(localStorage.getItem("medicine-web-last-mock") ?? "null");
        if (typeof local?.title === "string" && typeof local?.href === "string" && local.href.startsWith("/review/qbank/session?")) saved = local;
      } catch { /* No locally saved mock exam. */ }
      if (active) setLastMock(saved);
      const client = getSupabaseBrowserClient();
      if (!client) return;
      const { data: auth } = await client.auth.getUser();
      if (!active || !auth.user) return;
      const { data } = await client.from("user_preferences").select("qbank_active_session").eq("user_id", auth.user.id).maybeSingle();
      const remote = data?.qbank_active_session;
      const exam = readMockExam(remote?.mockExam);
      if (active && exam && typeof remote.sessionId === "string" && (!saved?.updatedAt || remote.updatedAt > saved.updatedAt)) {
        setLastMock({ title: exam.title, finished: Boolean(exam.finishedAt), href: `/review/qbank/session?resume=1&session=${encodeURIComponent(remote.sessionId)}` });
      }
    }
    void restore().catch(() => { /* Local resume remains available offline. */ });
    return () => { active = false; };
  }, []);
  if (!questions.length) return <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600" role="status">{message}</p>;
  const ordered = filters.order === "book";
  const modes = <fieldset className="flex flex-wrap gap-4"><legend className="mb-2 font-semibold">문제 선택 방식</legend>{([['random', '분과·조건 선택'], ['book', '회차 전체 풀기']] as const).map(([value, label]) => <label key={value} className="flex items-center gap-2"><input type="radio" name="practice-order" checked={(filters.order ?? "random") === value} onChange={() => onChange({ books: [], series: [], departments: [], specialties: [], years: [], order: value })} />{label}</label>)}</fieldset>;
  if (ordered) {
    const exams = practiceMockExams(questions);
    const active = filters.series?.length === 1 && filters.years.length === 1 && !filters.books.length && !filters.specialties.length && !filters.departments?.length
      ? exams.find((exam) => filters.series?.[0] === exam.series && filters.years[0] === String(exam.year)) : undefined;
    return <div>
      {lastMock && <Link href={lastMock.href} className="secondary-action mb-4">{lastMock.title} · {lastMock.finished ? "최근 결과 보기" : "이어서 풀기"}</Link>}
      {modes}
      <p className="mt-3 text-sm text-slate-600">P/R 연도 하나를 선택하면 전체 문항을 내과·외과·산부인과·소아과의 원래 번호 순서대로 풉니다. 기본은 전체 문항이며, 문항 수 변경을 펼쳐 조정할 수 있습니다.</p>
      <fieldset className="mt-5"><legend className="font-semibold text-slate-900">모의고사 선택</legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{exams.map((exam) => {
          const checked = active === exam;
          return <label key={exam.label} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 ${checked ? "border-teal-500 bg-teal-50 text-teal-950" : "border-slate-200 hover:border-teal-300"}`}>
            <input type="radio" name="practice-mock-exam" checked={checked} onChange={() => onChange(mockExamFilters(exam.series, exam.year))} className="accent-teal-600" />
            <span><span className="block font-semibold">{exam.label}</span><span className="text-xs text-slate-500">{exam.count.toLocaleString()}문항</span></span>
          </label>;
        })}</div>
      </fieldset>
      <p className="mt-3 text-xs text-slate-500">P: 퍼펙트 · R: 리얼</p>
      <fieldset className="mt-5 grid gap-2 sm:grid-cols-2"><legend className="mb-2 font-semibold">채점 방식</legend>{[[true, "모의고사", "자유롭게 답을 수정하고 종료 후 일괄 채점"], [false, "즉시 해설 학습", "한 문제씩 채점하고 바로 해설 확인"]].map(([value, title, detail]) => <label key={String(value)} className={`flex cursor-pointer gap-3 rounded-xl border p-4 ${examMode === value ? "border-teal-500 bg-teal-50" : "border-slate-200"}`}><input type="radio" name="exam-mode" checked={examMode === value} onChange={() => setExamMode(value === true)} className="accent-teal-600" /><span><span className="block text-sm font-semibold">{title}</span><span className="text-xs text-slate-500">{detail}</span></span></label>)}</fieldset>
      <PracticeStartControls key={active?.label || "no-round"} total={active?.count ?? 0} filters={filters} exam={examMode} label={active?.label} />
    </div>;
  }
  const selected = questions.filter((q) => matchesPractice(q, filters)).length;
  const years = [...new Set(questions.map((q) => q.examYear === null ? "unknown" : String(q.examYear)))].sort((a, b) => b.localeCompare(a));
  const group = (key: Dimension, title: string, items: [string, string][]) => <fieldset className="mt-5">
    <legend className="font-semibold text-slate-900">{title}</legend>
    <div className={`mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 ${key === "series" ? "max-w-sm" : "lg:grid-cols-4"}`}>{items.map(([id, label]) => {
      const checked = (filters[key] ?? []).includes(id);
      const total = questions.filter((q) => matchesPractice(q, { ...filters, books: [], [key]: [id] })).length;
      return <label key={id} className={`flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[13px] leading-5 transition-colors sm:px-3 sm:text-sm ${checked ? "border-teal-400 bg-teal-50 text-teal-950" : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"}`}>
        <input type="checkbox" className="h-4 w-4 shrink-0 accent-teal-600" checked={checked} onChange={() => onChange({ ...filters, books: [], [key]: toggleGroup(filters[key] ?? [], [id]) })} /><span className="min-w-0 font-medium">{label}</span><span className="ml-auto shrink-0 text-[11px] tabular-nums text-slate-500">{total.toLocaleString()}</span>
      </label>;
    })}</div>
  </fieldset>;
  return <div>
    {modes}
    <p className="mt-3 text-sm text-slate-600">과목이나 세부 분과로 범위를 고르면 전체 문항을 기존 순서대로 풀 수 있습니다. 선택하지 않은 조건은 전체를 포함합니다.</p>
    {group("series", "P / R", [["퍼펙트", "P"], ["리얼", "R"]])}
    <p className="mt-1 text-xs text-slate-500">P: 퍼펙트 · R: 리얼</p>
    {group("departments", "과목", PRACTICE_DEPARTMENTS.map((d) => [d, d]))}
    <p className="mt-3 text-xs text-slate-500">과목은 원본 책의 내·외·산·소 구분을 따릅니다. 세부 주제는 해당 과목 안에서 선택합니다.</p>
    {PRACTICE_DEPARTMENTS.map((d) => {
      const topics = [...new Map(questions.filter((q) => q.bookDepartment === d).map((q) => [practiceTopicKey(q), practiceTopicLabel(q)])).entries()].sort((a, b) => a[1].localeCompare(b[1], "ko"));
      const chosen = topics.filter(([key]) => filters.specialties.includes(key)).length;
      return <details key={d} className="mt-3 rounded-xl border border-slate-200 bg-slate-50/50 px-3 pb-3 sm:px-4">
        <summary className="-mb-3 cursor-pointer py-3 text-sm font-semibold text-slate-800 marker:text-teal-600">{d} · 세부 주제 <span className="ml-2 text-xs font-normal text-slate-500">{chosen ? `${chosen}개 선택` : `${topics.length}개`}</span></summary>
        {group("specialties", `${d} 세부 주제 선택`, topics)}
      </details>;
    })}
    {group("years", "출제년도", years.map((y) => [y, y === "unknown" ? "년도 미상 · BANK" : `${y}년`]))}
    <p className="mt-4 text-xs text-slate-500">출제년도 기준입니다. 연도를 알 수 없는 BANK 문제는 별도로 선택합니다.</p>
    <PracticeStartControls key={JSON.stringify(filters)} total={selected} filters={filters} />
  </div>;
}
