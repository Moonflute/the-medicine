"use client";

import { Suspense, useEffect, useId, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SkinStatus } from "@/components/skin-status";
import { ArrowRight, List as ListIcon, Radar, RotateCcw } from "lucide-react";
import { buildQbankAnalytics, sortAnalyticsGroups, type AnalyticsSort, type AnalyticsGroup, type AnalyticsQuestion, type PracticeDepartmentGroup } from "@/lib/qbank-analytics";
import { qbankStatsInitialBank } from "@/lib/qbank-stats-route";
import { QbankStatsSetDialog, type StatsSetRequest, type StatsSetLauncher } from "@/components/qbank-stats-set-dialog";
import { QbankAccuracyRadar, QbankPracticeAccuracyRadar } from "@/components/qbank-accuracy-radar";
import { QbankMockHistory } from "@/components/qbank-mock-history";
import { loadQbankProgressViewResetAt, loadQbankState, QBANK_CHANGE_EVENT, resetQbankProgressView, type QbankState } from "@/lib/qbank-store";
import { loadPracticeIndex } from "@/lib/practice-bank";
import { countsTowardPracticeStats, isListedQuestion, listedPracticeIds, practiceQuestionExamLabel, practiceTopicLabel, PRACTICE_DEPARTMENTS } from "@/lib/practice-selection";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { QbankQuestionIndex } from "@/lib/types";

const BANKS = [["all", "전체"], ["theory", "이론문제"], ["clinical", "임상문제"], ["practice", "실전문제"]] as const;
type StatsBank = (typeof BANKS)[number][0];
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

function AnalyticsProgressRow({ group, onStart, nested = false }: { group: AnalyticsGroup; onStart: StatsSetLauncher; nested?: boolean }) {
  const progress = percent(group.progressed, group.total);
  return <div className={`qbank-stats-row ${nested ? "border-l-2 border-slate-100 pl-4" : ""}`}>
    <div className="qbank-stats-row-main"><div className="flex flex-wrap items-baseline gap-2"><span className="break-words text-sm font-semibold text-slate-800">{group.key}</span><span className="text-xs tabular-nums text-slate-500">현재 회독 {group.progressed}/{group.total} · {progress}</span></div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100" role="meter" aria-label={`${group.key} 진행률`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={group.total ? Math.round(group.progressed / group.total * 100) : 0}><div className="h-full rounded-full bg-indigo-400" style={{ width: group.total ? `${group.progressed / group.total * 100}%` : "0%" }} /></div>
    </div><div className="qbank-stats-row-values"><span>누적 정답률 {percent(group.correct, group.attempts)}</span><span>누적 {group.attempts}회</span><button type="button" disabled={!group.wrong} title="미해결 오답" onClick={() => onStart({ ids: group.retryIds, title: `${group.key} 오답 풀기`, kind: "wrong" })}>오답 풀기 {group.wrong}<span className="sr-only">문항 · {group.key}</span></button><button type="button" disabled={!group.unattemptedIds.length} title="현재 회독 미풀이" onClick={() => onStart({ ids: group.unattemptedIds, title: `${group.key} 미풀이 풀기`, kind: "unattempted" })}>미풀이 풀기 {group.unattemptedIds.length}<span className="sr-only">문항 · 현재 회독 · {group.key}</span></button></div>
  </div>;
}

function AnalyticsGroupRows({ groups, onStart }: { groups: AnalyticsGroup[]; onStart: StatsSetLauncher }) {
  return <div className="divide-y divide-slate-100">{groups.map((group) => <AnalyticsProgressRow key={group.key} group={group} onStart={onStart} />)}</div>;
}

function PracticeDepartmentRows({ groups, onStart }: { groups: PracticeDepartmentGroup[]; onStart: StatsSetLauncher }) {
  return <div className="divide-y divide-slate-100">{groups.map((group) => <div key={group.key}><AnalyticsProgressRow group={group} onStart={onStart} />{group.children.map((child) => <AnalyticsProgressRow key={child.key} group={child} onStart={onStart} nested />)}</div>)}</div>;
}

type DepartmentScope = { kind: "general"; groups: AnalyticsGroup[] } | { kind: "practice"; groups: PracticeDepartmentGroup[] };

function DepartmentPerformance({ title, scope, sort, onSort, onStart, description = "오답은 다시 맞히면 자동으로 제외됩니다. 미풀이는 현재 회독 기준입니다." }: {
  title: string; scope: DepartmentScope; sort: AnalyticsSort; onSort?: (value: AnalyticsSort) => void; onStart: StatsSetLauncher; description?: string;
}) {
  const [graph, setGraph] = useState(false);
  const bodyId = useId();
  return <section className="surface min-w-0 p-4 sm:p-5" aria-label={title}>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h2 className="font-semibold text-slate-900">{title}</h2>
      <div className="flex flex-wrap items-center gap-2">
        {!graph && onSort && <label className="flex items-center gap-2 text-xs text-slate-500">정렬<select value={sort} onChange={event => onSort(event.target.value as AnalyticsSort)} className="rounded-md border border-slate-200 bg-transparent px-2 py-2"><option value="default">기본 분과 순서</option><option value="accuracy">정답률 낮은 순</option><option value="wrong">미해결 오답 많은 순</option><option value="unattempted">현재 회독 미풀이 많은 순</option><option value="progress">진행률 낮은 순</option></select></label>}
        <button type="button" className="secondary-action whitespace-nowrap px-2.5 py-1.5 text-xs" aria-controls={bodyId} onClick={() => setGraph(value => !value)}>
          {graph ? <><ListIcon size={15} aria-hidden="true" />목록으로 보기</> : <><Radar size={15} aria-hidden="true" />그래프로 보기</>}
        </button>
      </div>
    </div>
    <div id={bodyId} className="mt-2">
      {graph ? scope.kind === "practice" ? <QbankPracticeAccuracyRadar groups={scope.groups} /> : <QbankAccuracyRadar groups={scope.groups} /> : <>
        <p className="text-xs text-slate-500">{description}</p>
        <div className="mt-2">
          {scope.kind === "practice"
            ? <PracticeDepartmentRows groups={sortAnalyticsGroups(scope.groups, sort).map(group => ({ ...group, children: sortAnalyticsGroups(group.children, sort) }))} onStart={onStart} />
            : <AnalyticsGroupRows groups={sortAnalyticsGroups(scope.groups, sort)} onStart={onStart} />}
        </div>
      </>}
    </div>
  </section>;
}

function AnalyticsLoading({ error }: { error?: string }) {
  return <SkinStatus kind={error ? "questionsError" : "statisticsLoading"} fallback={error || "풀이 기록을 정리하고 있습니다…"} detail={error || undefined} stage onRetry={error ? () => window.location.reload() : undefined} className="surface min-w-0 p-6 text-sm text-slate-600" />;
}

export function QbankAnalyticsClient() {
  return <Suspense fallback={<AnalyticsLoading />}><QbankAnalyticsRoute /></Suspense>;
}

function QbankAnalyticsRoute() {
  const initialBank = qbankStatsInitialBank(useSearchParams());
  return <QbankAnalytics key={initialBank} initialBank={initialBank} />;
}

function QbankAnalytics({ initialBank }: { initialBank: StatsBank }) {
  const [setRequest, setSetRequest] = useState<StatsSetRequest | null>(null);
  const [sort, setSort] = useState<AnalyticsSort>("default");
  const [state, setState] = useState<QbankState | null>(null);
  const [publicQuestions, setPublicQuestions] = useState<AnalyticsQuestion[]>([]);
  const [practice, setPractice] = useState<AnalyticsQuestion[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [privateMessage, setPrivateMessage] = useState("실전문제 목록을 불러오는 중입니다.");
  const [bank, setBank] = useState(initialBank);
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
      setPublicQuestions(items.map(q => {
        const topic = relatedTopic(q);
        return { id: q.id, bank: q.questionBank, department: clean(q.specialty), order: Number(q.specialty.match(/^\d+/)?.[0] ?? 999), topic, label: topic };
      }));
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
          const exam = practiceQuestionExamLabel(q);
          return { id: q.id, sourceIds: q.sourceIds, revisionIds: q.revisionIds, bank: "practice", department: q.bookDepartment, order: subgroup ? specialtyNumber : departmentOrder, topic: practiceTopicLabel(q), subgroup, label: `${exam} · ${q.bookDepartment} · ${q.id.split("-").at(-1)?.replace(/^0+/, "") || "0"}번`, exam, excludedFromPracticeStats: !countsTowardPracticeStats(q) };
        }));
        setPrivateMessage(result.questions.length ? "" : result.message);
      } catch { if (active && generation === current) setPrivateMessage("실전문제 통계를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."); }
    };
    void refresh();
    const subscription = getSupabaseBrowserClient()?.auth.onAuthStateChange(() => {
      generation++; setPractice([]);
      setTimeout(() => { if (active) void refresh(); }, 0);
    }).data.subscription;
    return () => { active = false; generation++; subscription?.unsubscribe(); };
  }, []);
  const catalog = useMemo(() => [...publicQuestions, ...practice], [publicQuestions, practice]);
  const practiceIds = useMemo(() => listedPracticeIds(practice), [practice]);
  const excludedPracticeIds = useMemo(() => listedPracticeIds(practice.filter(question => question.excludedFromPracticeStats)), [practice]);
  const departments = useMemo(() => {
    const ranks = new Map<string, number>();
    for (const q of catalog) if (!q.excludedFromPracticeStats && (bank === "all" || q.bank === bank)) ranks.set(q.department, Math.min(ranks.get(q.department) ?? 999, q.order ?? 999));
    return [...ranks.keys()].sort((a, b) => ranks.get(a)! - ranks.get(b)! || a.localeCompare(b, "ko"));
  }, [catalog, bank]);
  const stats = useMemo(() => state ? buildQbankAnalytics(catalog, state, bank, department, progressResetAt) : null, [catalog, state, bank, department, progressResetAt]);
  function retry(ids: string[]) {
    if (!ids.length) return;
    setSetRequest({ ids, title: "미해결 오답 풀기", kind: "wrong" });
  }
  function resetProgress() {
    if (!window.confirm("진행률만 처음부터 다시 계산할까요? 기존 정답·오답·북마크·풀이 기록은 유지됩니다.")) return;
    setProgressResetAt(resetQbankProgressView());
  }
  if (!stats || !loaded) return <AnalyticsLoading error={error} />;
  const hasPractice = bank === "all" || bank === "practice";
  return <div className="space-y-5">
    {setRequest && setRequest.ids.every(id => isListedQuestion(id, practiceIds)) && <QbankStatsSetDialog key={`${setRequest.kind}:${setRequest.title}`} request={setRequest} questions={catalog} onClose={() => setSetRequest(null)} />}
    <section className="surface min-w-0 p-4 sm:p-5"><div className="grid grid-cols-4 gap-1 rounded-lg bg-slate-100 p-1" aria-label="통계 문제 종류">{BANKS.map(([value, label]) => <button type="button" key={value} aria-pressed={bank === value} onClick={() => { setBank(value); setDepartment("all"); }} className={`rounded-md px-2 py-2.5 text-sm font-semibold ${bank === value ? "bg-white text-teal-800 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>{label}</button>)}</div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><label className="flex items-center gap-2 text-sm text-slate-600">과목<select value={department} onChange={e => setDepartment(e.target.value)} className="max-w-52 rounded-lg border border-slate-200 bg-white px-3 py-2"><option value="all">전체 과목</option>{departments.map(d => <option key={d}>{d}</option>)}</select></label><span className="text-xs text-slate-500">누적 기록 · 반복 풀이 포함 · 전원 정답 처리 포함</span></div>
      {(bank === "all" || bank === "practice") && privateMessage && <p className="mt-3 text-xs text-slate-500" role="status">{privateMessage}</p>}
      {hasPractice && excludedPracticeIds.size > 0 && <p className="mt-2 text-xs text-slate-500">연도별 문제2의 기타 분과는 연습용으로, 회독과 성적 통계에 포함하지 않습니다.</p>}
    </section>
    {error && <SkinStatus kind="saveError" fallback={error} detail={error} className="text-sm text-rose-700" />}
    <section className="surface min-w-0 p-4 sm:p-5"><div className="flex flex-wrap items-center gap-x-6 gap-y-3"><div><span className="text-xs text-slate-500">현재 회독</span><p className="font-semibold tabular-nums text-slate-950">{stats.progressed}/{stats.selected.length} · {percent(stats.progressed, stats.selected.length)}</p></div><div><span className="text-xs text-slate-500">누적 정답률</span><p className="font-semibold tabular-nums text-slate-950">{percent(stats.correct, stats.attempts)} <span className="text-xs font-normal text-slate-500">{stats.correct}/{stats.attempts}</span></p></div><div><span className="text-xs text-slate-500">최근 {stats.recentTotal || 30}문항</span><p className="font-semibold tabular-nums text-slate-950">{percent(stats.recentCorrect, stats.recentTotal)}</p></div><div><span className="text-xs text-slate-500">미해결 오답</span><p className="font-semibold tabular-nums text-rose-700">{stats.wrong.length}문항</p></div><button type="button" onClick={resetProgress} className="ml-auto text-xs font-medium text-slate-500 underline underline-offset-4 hover:text-teal-800">진행률 초기화</button></div>{progressResetAt && <p className="mt-3 text-xs text-slate-500">{dateLabel(progressResetAt)} 이후 풀이를 진행률에 반영 중입니다. 정답·오답·북마크와 풀이 기록은 유지됩니다.</p>}</section>
    {!stats.attempted && <SkinStatus kind="recordsEmpty" fallback="이 범위의 풀이 기록이 아직 없습니다." className="rounded-xl border border-dashed border-teal-200 bg-teal-50/50 p-5 text-center text-sm text-slate-600" />}
    <DepartmentPerformance title="분과별 진행 및 성적" scope={bank === "practice" ? { kind: "practice", groups: stats.practiceGroups } : { kind: "general", groups: stats.groups }} sort={sort} onSort={setSort} onStart={setSetRequest} />
    {bank === "all" && stats.practiceGroups.length > 0 && <DepartmentPerformance title="실전문제 분과별 진행 및 성적" scope={{ kind: "practice", groups: stats.practiceGroups }} description="내과만 이론 분류 순서의 하위 분과를 함께 표시합니다." sort={sort} onStart={setSetRequest} />}
    {hasPractice && stats.exams.length > 0 && <section className="surface min-w-0 p-5 sm:p-6"><h2 className="font-semibold text-slate-900">실전문제 회차별 진행</h2><div className="mt-3"><AnalyticsGroupRows groups={stats.exams} onStart={setSetRequest} /></div></section>}
    {hasPractice && state && <QbankMockHistory sessions={state.sessions} practiceIds={practiceIds} excludedPracticeIds={excludedPracticeIds} onStart={setSetRequest} department={department} />}
    <section className="surface min-w-0 p-5 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="flex items-center gap-2 font-semibold text-slate-900"><RotateCcw className="h-5 w-5 text-rose-500" />복습할 오답</h2><button type="button" disabled={!stats.wrong.length} onClick={() => retry(stats.wrong.map(q => q.id))} className="secondary-action disabled:opacity-40">오답 {stats.wrong.length}문항 풀기</button></div><div className="mt-3 divide-y divide-slate-100">{stats.wrong.slice(0, 8).map(q => <button type="button" key={q.id} onClick={() => retry([q.id])} className="flex w-full items-center gap-3 py-3 text-left hover:text-teal-700"><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium" title={q.label}>{q.label}</p><p className="mt-1 text-xs text-slate-500">{q.department} · {q.mistakes}회 오답 / {q.attempts}회 풀이 · {dateLabel(q.last)}</p></div><ArrowRight className="h-4 w-4 shrink-0" /></button>)}</div>{!stats.wrong.length && <SkinStatus kind="wrongEmpty" fallback="현재 복습할 오답이 없습니다." className="py-6 text-center text-sm text-slate-500" />}</section>
  </div>;
}
