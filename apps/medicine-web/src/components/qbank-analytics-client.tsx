"use client";

import { AnalyticsCharts } from "@/components/qbank-analytics-charts";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, RotateCcw, Target, TrendingUp } from "lucide-react";
import { buildQbankAnalytics, type AnalyticsGroup, type AnalyticsQuestion } from "@/lib/qbank-analytics";
import { loadQbankState, QBANK_CHANGE_EVENT, type QbankState } from "@/lib/qbank-store";
import { loadPracticeIndex } from "@/lib/practice-bank";
import { practiceTopicLabel, PRACTICE_DEPARTMENTS } from "@/lib/practice-selection";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { QbankQuestionIndex } from "@/lib/types";

const BANKS = [["all", "전체"], ["clinical", "임상문제"], ["practice", "실전문제"], ["theory", "이론문제"]] as const;
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
  useEffect(() => {
    const refresh = () => setState(loadQbankState());
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
        setPractice(result.questions.map(q => ({ id: q.id, bank: "practice", department: q.bookDepartment, order: Math.max(0, PRACTICE_DEPARTMENTS.indexOf(q.bookDepartment as typeof PRACTICE_DEPARTMENTS[number])) * 0.01 + (q.bookDepartment === "내과" ? 0 : 10.5), topic: practiceTopicLabel(q), label: `${q.bookSeries === "퍼펙트" ? "P" : "R"} ${q.examYear ?? "연도 미상"} · ${q.bookDepartment} · ${q.id.split("-").at(-1)?.replace(/^0+/, "") || "0"}번`, exam: `${q.bookSeries === "퍼펙트" ? "P" : "R"} ${q.examYear ?? "연도 미상"}` })));
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
  const stats = useMemo(() => state ? buildQbankAnalytics(catalog, state, bank, department) : null, [catalog, state, bank, department]);
  function retry(ids: string[]) {
    if (!ids.length) return;
    try { const key = `qbank-retry-${crypto.randomUUID()}`; sessionStorage.setItem(key, JSON.stringify(ids.slice(0, 20))); router.push(`/review/qbank/session?mode=retry&set=${encodeURIComponent(key)}&count=all`); }
    catch { setError("재풀이 목록을 저장하지 못했습니다. 브라우저 저장 공간을 확인해 주세요."); }
  }
  if (!stats || !loaded) return <p className="surface min-w-0 p-6 text-sm text-slate-600" role="status">{error || "풀이 기록을 정리하고 있습니다…"}</p>;
  const summary = [
    { label: "누적 정답률", value: percent(stats.correct, stats.attempts), detail: `채점 ${stats.attempts.toLocaleString()}회 · 정답 ${stats.correct.toLocaleString()}회` },
    { label: "풀어본 문제", value: `${stats.attempted.toLocaleString()}문항`, detail: `전체 ${stats.selected.length.toLocaleString()}문항 중 ${percent(stats.attempted, stats.selected.length)}` },
    { label: "복습할 오답", value: `${stats.wrong.length.toLocaleString()}문항`, detail: "마지막 풀이에서도 틀린 문제" },
    { label: "최근 답 기준 정답률", value: percent(stats.latestCorrect, stats.attempted), detail: "풀어본 각 문항의 마지막 결과만 반영" },
    { label: "연속 정답 문항", value: `${stats.mastered.toLocaleString()}문항`, detail: "같은 문제에서 2회 이상 연속 정답" },
    { label: "최근 세션 정답률", value: stats.currentRate === null ? "—" : `${stats.currentRate}%`, detail: stats.change === null ? "최근 최대 5개 완료 세션의 가중 정답률" : `이전 5회 대비 ${stats.change >= 0 ? "+" : ""}${stats.change}%p` },
    { label: "반복 풀이 비중", value: percent(stats.attempts - stats.attempted, stats.attempts), detail: `재풀이 ${Math.max(0, stats.attempts - stats.attempted).toLocaleString()}회 / 전체 풀이` },
    { label: "다시 맞힌 문제", value: `${stats.recovered.toLocaleString()}문항`, detail: "이전에 틀렸지만 마지막에는 정답" },
  ];
  function groupRows(items: AnalyticsGroup[]) {
    return <div className="divide-y divide-slate-100">{items.map(g => <div key={g.key} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
      <div className="min-w-0"><div className="flex flex-wrap items-baseline gap-2"><span className="break-words text-sm font-semibold text-slate-800">{g.key}</span><span className="text-xs text-slate-500">{g.attempted} / {g.total}문항 학습</span>{g.attempted > 0 && g.attempted < 5 && <span className="text-xs text-amber-700">표본 부족</span>}</div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100" role="meter" aria-label={`${g.key} 정답률`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={g.attempts ? Math.round(g.correct / g.attempts * 100) : 0}><div className="h-full rounded-full bg-teal-500" style={{ width: percent(g.correct, g.attempts) === "—" ? "0%" : percent(g.correct, g.attempts) }} /></div>
      </div><div className="flex items-center gap-3 text-xs text-slate-500"><span className="w-12 text-right text-base font-semibold tabular-nums text-slate-900">{percent(g.correct, g.attempts)}</span><span>채점 {g.attempts}회</span><button type="button" disabled={!g.wrong} onClick={() => retry(g.retryIds)} className="rounded-lg border border-slate-200 px-3 py-2 font-medium text-teal-800 disabled:cursor-default disabled:text-slate-400">오답 {g.wrong} <span className="sr-only">{g.key} 재풀이</span></button></div>
    </div>)}</div>;
  }
  return <div className="space-y-5">
    <section className="surface min-w-0 p-4 sm:p-5"><div className="grid grid-cols-4 gap-1 rounded-lg bg-slate-100 p-1" aria-label="통계 문제 종류">{BANKS.map(([value, label]) => <button type="button" key={value} aria-pressed={bank === value} onClick={() => { setBank(value); setDepartment("all"); }} className={`rounded-md px-2 py-2.5 text-sm font-semibold ${bank === value ? "bg-white text-teal-800 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>{label}</button>)}</div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><label className="flex items-center gap-2 text-sm text-slate-600">과목<select value={department} onChange={e => setDepartment(e.target.value)} className="max-w-52 rounded-lg border border-slate-200 bg-white px-3 py-2"><option value="all">전체 과목</option>{departments.map(d => <option key={d}>{d}</option>)}</select></label><span className="text-xs text-slate-500">누적 기록 · 반복 풀이 포함 · 전원 정답 처리 포함</span></div>
      {(bank === "all" || bank === "practice") && privateMessage && <p className="mt-3 text-xs text-slate-500" role="status">{privateMessage}</p>}
    </section>
    {error && <p role="alert" className="text-sm text-rose-700">{error}</p>}
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{summary.map(s => <section key={s.label} className="surface min-w-0 p-4 sm:p-5"><p className="text-xs font-medium text-slate-500">{s.label}</p><p className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{s.value}</p><p className="mt-2 text-xs leading-5 text-slate-500">{s.detail}</p></section>)}</div>
    <AnalyticsCharts stats={stats} onDepartment={setDepartment} onRetry={retry} />
    {!stats.attempted && <section className="rounded-xl border border-dashed border-teal-200 bg-teal-50/50 p-6 text-center"><Target className="mx-auto h-7 w-7 text-teal-600" /><h2 className="mt-3 font-semibold text-slate-900">이 범위의 풀이 기록이 아직 없습니다</h2><p className="mt-2 text-sm text-slate-600">문제를 풀면 취약 과목과 복습할 문제가 자동으로 정리됩니다.</p></section>}
    <div className="grid gap-5 xl:grid-cols-2">
      <section className="surface min-w-0 p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><h2 className="flex items-center gap-2 font-semibold text-slate-900"><Target className="h-5 w-5 text-teal-600" />우선 복습할 주제</h2><span className="text-xs text-slate-500">최대 8개</span></div><p className="mt-2 text-xs leading-5 text-slate-500">5문항 이상 풀어본 주제를 먼저 보여주고, 남은 오답 수로 정렬합니다. 재풀이는 한 번에 최대 20문항입니다.</p>{stats.weak.length ? groupRows(stats.weak.slice(0, 8)) : <p className="py-8 text-center text-sm text-slate-500">현재 남아 있는 오답이 없습니다.</p>}</section>
      <section className="surface min-w-0 p-5 sm:p-6"><h2 className="flex items-center gap-2 font-semibold text-slate-900"><RotateCcw className="h-5 w-5 text-rose-500" />오답 점검</h2><p className="mt-2 text-xs leading-5 text-slate-500">두 번 이상 틀렸고, 마지막 풀이에서도 틀린 {stats.repeated.length}문항</p>
        <div className="mt-4 flex flex-wrap gap-2"><button type="button" disabled={!stats.repeated.length} onClick={() => retry(stats.repeated.map(q => q.id))} className="primary-action disabled:opacity-40">반복 오답 {Math.min(20, stats.repeated.length)}문항 풀기</button><button type="button" disabled={!stats.wrong.length} onClick={() => retry(stats.wrong.map(q => q.id))} className="secondary-action disabled:opacity-40">미해결 오답 {Math.min(20, stats.wrong.length)}문항 풀기</button></div>
        <div className="mt-3 divide-y divide-slate-100">{stats.wrong.slice(0, 8).map(q => <button type="button" key={q.id} onClick={() => retry([q.id])} className="flex w-full items-center gap-3 py-3 text-left hover:text-teal-700"><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium" title={q.label}>{q.label}</p><p className="mt-1 text-xs text-slate-500">{q.department} · {q.mistakes}회 오답 / {q.attempts}회 풀이 · {dateLabel(q.last)}</p></div><ArrowRight className="h-4 w-4 shrink-0" /></button>)}</div>{!stats.wrong.length && <p className="py-8 text-center text-sm text-slate-500">다음 풀이 결과가 여기에 반영됩니다.</p>}
      </section>
    </div>
    <section className="surface min-w-0 p-5 sm:p-6"><h2 className="font-semibold text-slate-900">과목별 성적과 학습 범위</h2><p className="mt-2 text-xs text-slate-500">정답률과 함께 풀어본 문항 수를 확인하세요. 미풀이 문제는 정답률 계산에서 제외합니다.</p><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[670px] text-left text-sm"><caption className="sr-only">기존 분과 순서의 성적 상세 비교</caption><thead className="border-b border-slate-200 text-xs text-slate-500"><tr>{["분과", "누적 정답률", "최근 답 정답률", "학습 범위", "풀이 횟수", "연속 정답", "미해결"].map(h => <th key={h} scope="col" className="px-3 py-3 font-medium">{h}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{stats.groups.map(g => <tr key={g.key} className="hover:bg-slate-50"><th scope="row" className="px-3 py-4 font-medium"><button className="text-left hover:text-teal-700" onClick={() => setDepartment(g.key)}>{g.key}</button>{g.attempted > 0 && g.attempted < 5 && <span className="ml-2 text-[10px] text-amber-700">소표본</span>}</th><td className="px-3 py-4 font-semibold tabular-nums">{percent(g.correct,g.attempts)}</td><td className="px-3 py-4 tabular-nums">{percent(g.latestCorrect,g.attempted)}</td><td className="min-w-36 px-3 py-4"><span className="text-xs text-slate-500">{g.attempted}/{g.total} · {percent(g.attempted,g.total)}</span><div className="mt-1.5 h-1 rounded-full bg-slate-100"><div className="h-1 rounded-full bg-indigo-400" style={{width: g.total ? `${g.attempted/g.total*100}%` : "0%"}} /></div></td><td className="px-3 py-4 tabular-nums">{g.attempts}</td><td className="px-3 py-4 tabular-nums">{g.mastered}</td><td className="px-3 py-4"><button disabled={!g.wrong} onClick={() => retry(g.retryIds)} className="rounded-lg border border-slate-200 px-3 py-2 text-teal-800 disabled:text-slate-400" aria-label={`${g.key} 오답 ${g.wrong}문항 재풀이`}>{g.wrong}</button></td></tr>)}</tbody></table></div></section>
    {!!stats.exams.length && <details className="surface min-w-0 p-5 sm:p-6"><summary className="cursor-pointer font-semibold text-slate-900">P/R 연도별 성적 <span className="ml-2 text-xs font-normal text-slate-500">{stats.exams.length}개</span></summary><p className="mt-3 text-xs text-slate-500">해당 연도 문제의 누적 풀이 성적입니다. 한 번에 푼 모의고사 점수와는 다를 수 있습니다.</p>{groupRows(stats.exams)}</details>}
    <details className="surface min-w-0 p-5 sm:p-6"><summary className="cursor-pointer font-semibold">완료 세션 상세 기록</summary><div className="mt-4 flex flex-wrap items-center justify-between gap-3"><h2 className="flex items-center gap-2 font-semibold text-slate-900"><TrendingUp className="h-5 w-5 text-teal-600" />최근 완료 세션</h2><span className="text-sm font-semibold text-teal-800">최근 {Math.min(5, stats.sessions.length)}회 {stats.currentRate === null ? "—" : `${stats.currentRate}%`}{stats.change !== null ? ` · 이전 5회 대비 ${stats.change > 0 ? "+" : ""}${stats.change}%p` : ""}</span></div><p className="mt-2 text-xs leading-5 text-slate-500">저장된 최근 100개 세션 중, 선택한 범위의 문제로만 구성된 세션 최대 10개입니다. 선택 범위 밖의 문제가 섞인 세션은 제외하며 진행 중인 풀이는 포함하지 않습니다.</p>
      {stats.sessions.length ? <div className="mt-5 space-y-3">{[...stats.sessions].reverse().map(s => <div key={s.id} className="flex items-center gap-3 text-xs"><span className="w-16 shrink-0 text-slate-500">{dateLabel(s.completedAt)}</span><div className="h-5 flex-1 overflow-hidden rounded bg-slate-100" aria-label={`${dateLabel(s.completedAt)} ${s.correct}/${s.total} 정답`}><div className="h-full rounded bg-teal-500" style={{ width: percent(s.correct, s.total) }} /></div><span className="w-24 shrink-0 text-right tabular-nums text-slate-700">{s.correct}/{s.total} · {percent(s.correct, s.total)}</span></div>)}</div> : <p className="py-8 text-center text-sm text-slate-500">해당 범위의 완료 세션이 아직 없습니다.</p>}
    </details>
    <p className="px-1 text-xs leading-5 text-slate-500">지표는 개인 학습 기록이며 시험 성적 예측이나 백분위가 아닙니다. 전원 정답 처리 문항의 점수도 포함됩니다. 연속 정답은 같은 문항을 연속 2회 이상 맞힌 기록으로, 독립적인 숙련도 평가와는 다릅니다. 누적 데이터에는 날짜별 개별 답안 이력이 없어 기간별 분과 정답률은 추정하지 않습니다.</p>
  </div>;
}
