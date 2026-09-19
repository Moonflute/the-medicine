"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, RotateCcw } from "lucide-react";
import { buildQbankAnalytics, type AnalyticsGroup, type AnalyticsQuestion, type PracticeDepartmentGroup } from "@/lib/qbank-analytics";
import { loadQbankProgressViewResetAt, loadQbankState, QBANK_CHANGE_EVENT, resetQbankProgressView, type QbankState } from "@/lib/qbank-store";
import { loadPracticeIndex } from "@/lib/practice-bank";
import { practiceTopicLabel, PRACTICE_DEPARTMENTS } from "@/lib/practice-selection";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { QbankQuestionIndex } from "@/lib/types";

const BANKS = [["all", "전체"], ["theory", "이론문제"], ["clinical", "임상문제"], ["practice", "실전문제"]] as const;
const clean = (s: string) => s.replace(/^\d+\s*/, "");
const percent = (n: number, d: number) => d ? `${Math.round(n / d * 100)}%` : "—";
const dateLabel = (value: string) => { const d = new Date(value); return Number.isNaN(d.getTime()) ? "날짜 없음" : d.toLocaleDateString("ko-KR", { month: "short", day: "numeric" }); };

function relatedTopic(q: QbankQuestionIndex): string {
  if (q.targetTitle) return q.targetTitle;
  const slug = q.relatedDiseaseSlugs?.[0];
  if (slug) {
    try {
      const encoded = slug.replace(/-/g, "+").replace(/_/g, "/");
      const path = new TextDecoder().decode(Uint8Array.from(atob(encoded), c => c.charCodeAt(0)));
      return clean(path.split("/").at(-1)?.replace(/\.md$/i, "") || q.specialty);
    } catch { /* Fall back to the existing subject. */ }
  }
  return clean(q.specialty);
}

function AnalyticsProgressRow({ group, onRetry, nested = false }: { group: AnalyticsGroup; onRetry: (ids: string[]) => void; nested?: boolean }) {
  const progress = percent(group.progressed, group.total);
  return <div className={`grid gap-2 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center ${nested ? "border-l-2 border-slate-100 pl-4" : ""}`}>
    <div className="min-w-0"><div className="flex flex-wrap items-baseline gap-2"><span className="break-words text-sm font-semibold text-slate-800">{group.key}</span><span className="text-xs tabular-nums text-slate-500">진행 {group.progressed}/{group.total} · {progress}</span></div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100" role="meter" aria-label={`${group.key} 진행률`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={group.total ? Math.round(group.progressed / group.total * 100) : 0}><div className="h-full rounded-full bg-indigo-400" style={{ width: group.total ? `${group.progressed / group.total * 100}%` : "0%" }} /></div>
    </div><div className="flex items-center gap-3 text-xs text-slate-500"><span className="tabular-nums">정답 {percent(group.correct, group.attempts)}</span><span className="tabular-nums">풀이 {group.attempts}회</span><button type="button" disabled={!group.wrong} onClick={() => onRetry(group.retryIds)} className="rounded-md border border-slate-200 px-2.5 py-1.5 font-medium text-teal-800 disabled:cursor-default disabled:text-slate-400">오답 {group.wrong}<span className="sr-only"> {group.key} 재풀이</span></button></div>
  </div>;
}

function AnalyticsGroupRows({ groups, onRetry }: { groups: AnalyticsGroup[]; onRetry: (ids: string[]) => void }) {
  return <div className="divide-y divide-slate-100">{groups.map((group) => <AnalyticsProgressRow key={group.key} group={group} onRetry={onRetry} />)}</div>;
}

function PracticeDepartmentRows({ groups, onRetry }: { groups: PracticeDepartmentGroup[]; onRetry: (ids: string[]) => void }) {
  return <div className="divide-y divide-slate-100">{groups.map((group) => <div key={group.key}><AnalyticsProgressRow group={group} onRetry={onRetry} />{group.children.map((child) => <AnalyticsProgressRow key={child.key} group={child} onRetry={onRetry} nested />)}</div>)}</div>;
}

export function QbankAnalyticsClient() {
  const router = useRouter();
  const [state, setState] = useState<QbankState | null>(null);
  const [publicQuestions, setPublicQuestions] = useState<AnalyticsQuestion[]>([]);
  const [practice, setPractice] = useState<AnalyticsQuestion[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [privateMessage, setPrivateMessage] = useState("실전문제 접근 권한을 확인 중입니다.");
  const [bank, setBank] = useState("all");
  const [department, setDepartment] = useState("all");
  const [progressResetAt, setProgressResetAt] = useState<string | null>(null);
  useEffect(() => {
    const refresh = () => { setState(loadQbankState()); setProgressResetAt(loadQbankProgressViewResetAt()); };
    refresh(); window.addEventListener(QBANK_CHANGE_EVENT, refresh); window.addEventListener("storage", refresh);
    return () => { window.removeEventListener(QBANK_CHANGE_EVENT, refresh); window.removeEventListener("storage", refresh); };
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/generated/qbank/index.json`, { signal: controller.signal }).then(r => { if (!r.ok) throw new Error(); return r.json(); }).then((items: QbankQuestionIndex[]) => {
      setPublicQuestions(items.map(q => ({ id: q.id, bank: q.questionBank, department: clean(q.specialty), order: Number(q.specialty.match(/^\d+/)?.[0] ?? 999), topic: relatedTopic(q), label: `${relatedTopic(q)} · ${q.id}` })));
      setLoaded(true);
    }).catch(() => { if (!controller.signal.aborted) setError("문제 목록을 불러오지 못했습니다. 새로고침해 주세요."); });
    return () => controller.abort();
  }, []);
  useEffect(() => {
    let active = true, generation = 0;
    const refresh = async () => {
      const current = ++generation;
      setPractice([]);
      try {
        const result = await loadPracticeIndex();
        if (!active || generation !== current) return;
        setPractice(result.questions.map(q => {
          const specialtyNumber = Number(q.specialty.match(/^\s*(\d{1,2})\b/)?.[1]);
          const subgroup = q.bookDepartment === "내과" && specialtyNumber >= 1 && specialtyNumber <= 10 ? practiceTopicLabel(q) : undefined;
          const departmentOrder = Math.max(0, PRACTICE_DEPARTMENTS.indexOf(q.bookDepartment as typeof PRACTICE_DEPARTMENTS[number])) * 0.01 + (q.bookDepartment === "내과" ? 0 : 10.5);
          return { id: q.id, bank: "practice", department: q.bookDepartment, order: subgroup ? specialtyNumber : departmentOrder, topic: practiceTopicLabel(q), subgroup, label: `${q.bookSeries === "퍼펙트" ? "P" : "R"} ${q.examYear ?? "연도 미상"} · ${q.bookDepartment} · ${q.id.split("-").at(-1)?.replace(/^0+/, "") || "0"}번`, exam: `${q.bookSeries === "퍼펙트" ? "P" : "R"} ${q.examYear ?? "연도 미상"}` };
        }));
        setPrivateMessage(result.questions.length ? "" : result.message);
      } catch { if (active && generation === current) setPrivateMessage("실전문제 통계를 불러오지 못했습니다. 로그인과 연결 상태를 확인해 주세요."); }
    };
    void refresh();
    const subscription = getSupabaseBrowserClient()?.auth.onAuthStateChange(() => {
      generation++; setPractice([]);
      setTimeout(() => { if (active) void refresh(); }, 0);
    }).data.subscription;
    return () => { active = false; generation++; subscription?.unsubscribe(); };
  }, []);
  const catalog = useMemo(() => [...publicQuestions, ...practice], [publicQuestions, practice]);
  const departments = useMemo(() => {
    const ranks = new Map<string, number>();
    for (const q of catalog) if (bank === "all" || q.bank === bank) ranks.set(q.department, Math.min(ranks.get(q.department) ?? 999, q.order ?? 999));
    return [...ranks.keys()].sort((a, b) => ranks.get(a)! - ranks.get(b)! || a.localeCompare(b, "ko"));
  }, [catalog, bank]);
  const stats = useMemo(() => state ? buildQbankAnalytics(catalog, state, bank, department, progressResetAt) : null, [catalog, state, bank, department, progressResetAt]);
  function retry(ids: string[]) {
    if (!ids.length) return;
    try { const key = `qbank-retry-${crypto.randomUUID()}`; sessionStorage.setItem(key, JSON.stringify(ids.slice(0, 20))); router.push(`/review/qbank/session?mode=retry&set=${encodeURIComponent(key)}&count=all`); }
    catch { setError("재풀이 목록을 저장하지 못했습니다. 브라우저 저장 공간을 확인해 주세요."); }
  }
  function resetProgress() {
    if (!window.confirm("진행률만 처음부터 다시 계산할까요? 기존 정답·오답·북마크·풀이 기록은 유지됩니다.")) return;
    setProgressResetAt(resetQbankProgressView());
  }
  if (!stats || !loaded) return <p className="surface min-w-0 p-6 text-sm text-slate-600" role="status">{error || "풀이 기록을 정리하고 있습니다…"}</p>;
  const hasPractice = bank === "all" || bank === "practice";
  return <div className="space-y-5">
    <section className="surface min-w-0 p-4 sm:p-5"><div className="grid grid-cols-4 gap-1 rounded-lg bg-slate-100 p-1" aria-label="통계 문제 종류">{BANKS.map(([value, label]) => <button type="button" key={value} aria-pressed={bank === value} onClick={() => { setBank(value); setDepartment("all"); }} className={`rounded-md px-2 py-2.5 text-sm font-semibold ${bank === value ? "bg-white text-teal-800 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>{label}</button>)}</div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><label className="flex items-center gap-2 text-sm text-slate-600">과목<select value={department} onChange={e => setDepartment(e.target.value)} className="max-w-52 rounded-lg border border-slate-200 bg-white px-3 py-2"><option value="all">전체 과목</option>{departments.map(d => <option key={d}>{d}</option>)}</select></label><span className="text-xs text-slate-500">누적 기록 · 반복 풀이 포함 · 전원 정답 처리 포함</span></div>
      {(bank === "all" || bank === "practice") && privateMessage && <p className="mt-3 text-xs text-slate-500" role="status">{privateMessage}</p>}
    </section>
    {error && <p role="alert" className="text-sm text-rose-700">{error}</p>}
    <section className="surface min-w-0 p-4 sm:p-5"><div className="flex flex-wrap items-center gap-x-6 gap-y-3"><div><span className="text-xs text-slate-500">진행률</span><p className="font-semibold tabular-nums text-slate-950">{stats.progressed}/{stats.selected.length} · {percent(stats.progressed, stats.selected.length)}</p></div><div><span className="text-xs text-slate-500">누적 정답률</span><p className="font-semibold tabular-nums text-slate-950">{percent(stats.correct, stats.attempts)} <span className="text-xs font-normal text-slate-500">{stats.correct}/{stats.attempts}</span></p></div><div><span className="text-xs text-slate-500">최근 {stats.recentTotal || 30}문항</span><p className="font-semibold tabular-nums text-slate-950">{percent(stats.recentCorrect, stats.recentTotal)}</p></div><div><span className="text-xs text-slate-500">복습할 오답</span><p className="font-semibold tabular-nums text-rose-700">{stats.wrong.length}문항</p></div><button type="button" onClick={resetProgress} className="ml-auto text-xs font-medium text-slate-500 underline underline-offset-4 hover:text-teal-800">진행률 초기화</button></div>{progressResetAt && <p className="mt-3 text-xs text-slate-500">{dateLabel(progressResetAt)} 이후 풀이를 진행률에 반영 중입니다. 정답·오답·북마크와 풀이 기록은 유지됩니다.</p>}</section>
    {!stats.attempted && <p className="rounded-xl border border-dashed border-teal-200 bg-teal-50/50 p-5 text-center text-sm text-slate-600">이 범위의 풀이 기록이 아직 없습니다.</p>}
    <section className="surface min-w-0 p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><h2 className="font-semibold text-slate-900">분과별 진행 및 성적</h2><span className="text-xs text-slate-500">정답률은 누적 · 진행률은 현재 기준</span></div><div className="mt-3"><AnalyticsGroupRows groups={stats.groups} onRetry={retry} /></div></section>
    {hasPractice && stats.practiceGroups.length > 0 && <section className="surface min-w-0 p-5 sm:p-6"><h2 className="font-semibold text-slate-900">실전문제 분과별 진행 및 성적</h2><p className="mt-2 text-xs text-slate-500">내과만 이론 분류 순서의 하위 분과를 함께 표시합니다.</p><div className="mt-3"><PracticeDepartmentRows groups={stats.practiceGroups} onRetry={retry} /></div></section>}
    {hasPractice && stats.exams.length > 0 && <section className="surface min-w-0 p-5 sm:p-6"><h2 className="font-semibold text-slate-900">P/R 연도별 성적</h2><p className="mt-2 text-xs text-slate-500">실전문제의 연도별 진행률과 누적 정답률입니다.</p><div className="mt-3"><AnalyticsGroupRows groups={stats.exams} onRetry={retry} /></div></section>}
    <section className="surface min-w-0 p-5 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="flex items-center gap-2 font-semibold text-slate-900"><RotateCcw className="h-5 w-5 text-rose-500" />복습할 오답</h2><button type="button" disabled={!stats.wrong.length} onClick={() => retry(stats.wrong.map(q => q.id))} className="secondary-action disabled:opacity-40">오답 {Math.min(20, stats.wrong.length)}문항 풀기</button></div><div className="mt-3 divide-y divide-slate-100">{stats.wrong.slice(0, 8).map(q => <button type="button" key={q.id} onClick={() => retry([q.id])} className="flex w-full items-center gap-3 py-3 text-left hover:text-teal-700"><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium" title={q.label}>{q.label}</p><p className="mt-1 text-xs text-slate-500">{q.department} · {q.mistakes}회 오답 / {q.attempts}회 풀이 · {dateLabel(q.last)}</p></div><ArrowRight className="h-4 w-4 shrink-0" /></button>)}</div>{!stats.wrong.length && <p className="py-6 text-center text-sm text-slate-500">현재 복습할 오답이 없습니다.</p>}</section>
  </div>;
}
