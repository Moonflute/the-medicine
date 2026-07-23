"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Activity, BookOpenCheck } from "lucide-react";
import { loadQbankState, QBANK_CHANGE_EVENT, type QbankDailyActivity } from "@/lib/qbank-store";
import {
  loadReviewCoverage,
  REVIEW_CHANGE_EVENT,
  type ReviewCatalogItem,
  type ReviewCoverageItem,
  type ReviewDomain,
} from "@/lib/review-store";

const DOMAIN_LABELS: Record<ReviewDomain, string> = {
  disease: "질병",
  cc: "CC",
  drug: "약물",
  lab: "검사·영상",
  skill: "술기",
};

function localDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calendarDays(weeks: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const calendarEnd = new Date(today);
  calendarEnd.setDate(calendarEnd.getDate() + (6 - calendarEnd.getDay()));
  const start = new Date(calendarEnd);
  start.setDate(start.getDate() - weeks * 7 + 1);
  return Array.from({ length: weeks * 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, key: localDateKey(date), future: date.getTime() > today.getTime() };
  });
}

function activityColor(attempts: number) {
  if (attempts === 0) return "bg-slate-100";
  if (attempts <= 5) return "bg-teal-200";
  if (attempts <= 15) return "bg-teal-400";
  if (attempts <= 30) return "bg-teal-600";
  return "bg-teal-800";
}

function calculateStreak(activity: Record<string, QbankDailyActivity>) {
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  let streak = 0;
  while ((activity[localDateKey(cursor)]?.attempts ?? 0) > 0) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function QbankActivityHeatmap({ compact = false }: { compact?: boolean }) {
  const [activity, setActivity] = useState<Record<string, QbankDailyActivity>>({});
  const weeks = compact ? 12 : 52;
  const days = useMemo(() => calendarDays(weeks), [weeks]);

  useEffect(() => {
    const refresh = () => setActivity(loadQbankState().dailyActivity);
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);

  const visibleDays = days.filter((item) => !item.future);
  const attempts = visibleDays.reduce((sum, item) => sum + (activity[item.key]?.attempts ?? 0), 0);
  const correct = visibleDays.reduce((sum, item) => sum + (activity[item.key]?.correct ?? 0), 0);
  const activeDays = visibleDays.filter((item) => (activity[item.key]?.attempts ?? 0) > 0).length;
  const rate = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  return (
    <section className="surface p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-teal-800">
            <Activity className="h-5 w-5" />
            문제풀이 활동
          </div>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">{compact ? "최근 12주" : "최근 1년"}</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-right text-sm">
          <div><div className="text-xs text-slate-500">풀이</div><div className="font-semibold">{attempts.toLocaleString()}</div></div>
          <div><div className="text-xs text-slate-500">정답률</div><div className="font-semibold">{rate}%</div></div>
          <div><div className="text-xs text-slate-500">연속</div><div className="font-semibold">{calculateStreak(activity)}일</div></div>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto pb-2">
        <div
          className="grid w-max grid-flow-col grid-rows-7 gap-1"
          style={{ gridAutoColumns: compact ? 12 : 11 }}
          aria-label="날짜별 문제풀이 활동"
        >
          {days.map((item) => {
            const value = activity[item.key] ?? { attempts: 0, correct: 0 };
            return (
              <div
                key={item.key}
                className={`aspect-square rounded-[3px] ${item.future ? "bg-transparent" : activityColor(value.attempts)}`}
                title={item.future ? undefined : `${item.key} · ${value.attempts}문항 · 정답 ${value.correct}개`}
                aria-label={item.future ? undefined : `${item.key}, ${value.attempts}문항`}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <span>활동일 {activeDays}일</span>
        <div className="flex items-center gap-1.5">
          <span>적음</span>
          {[0, 3, 10, 20, 40].map((value) => <span key={value} className={`h-3 w-3 rounded-[3px] ${activityColor(value)}`} />)}
          <span>많음</span>
        </div>
      </div>
    </section>
  );
}

function coverageColor(stat: ReviewCoverageItem | undefined, now: number) {
  if (!stat) return "bg-slate-200 hover:bg-slate-300";
  const days = Math.floor((now - new Date(stat.lastViewedAt).getTime()) / 86_400_000);
  if (days <= 0) return "bg-teal-800 hover:bg-teal-900";
  if (days <= 7) return "bg-teal-600 hover:bg-teal-700";
  if (days <= 30) return "bg-teal-400 hover:bg-teal-500";
  return "bg-teal-200 hover:bg-teal-300";
}

function formatViewedAt(value: string) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "short", day: "numeric" }).format(new Date(value));
}

export function ContentCoverageHeatmap({ catalog }: { catalog: ReviewCatalogItem[] }) {
  const [coverage, setCoverage] = useState<Record<string, ReviewCoverageItem>>({});
  const [now] = useState(() => Date.now());
  const [domain, setDomain] = useState<"all" | ReviewDomain>("all");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const refresh = () => setCoverage(loadReviewCoverage(catalog));
    refresh();
    window.addEventListener(REVIEW_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(REVIEW_CHANGE_EVENT, refresh);
  }, [catalog]);

  const domainItems = useMemo(
    () => catalog.filter((item) => domain === "all" || item.type === domain),
    [catalog, domain],
  );
  const categories = useMemo(
    () => [...new Set(domainItems.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, "ko")),
    [domainItems],
  );
  const visible = useMemo(
    () => domainItems.filter((item) => category === "all" || item.category === category),
    [domainItems, category],
  );
  const viewed = visible.filter((item) => coverage[`${item.type}|${item.id}`]);
  const recent = viewed.filter((item) => {
    const stat = coverage[`${item.type}|${item.id}`];
    return now - new Date(stat.lastViewedAt).getTime() <= 30 * 86_400_000;
  });
  const percentage = visible.length > 0 ? Math.round((viewed.length / visible.length) * 100) : 0;

  function changeDomain(next: "all" | ReviewDomain) {
    setDomain(next);
    setCategory("all");
  }

  return (
    <section className="surface p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-teal-800">
            <BookOpenCheck className="h-5 w-5" />
            콘텐츠 커버리지
          </div>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">페이지 열람 현황</h2>
          <p className="mt-1 text-sm text-slate-600">칸 하나가 콘텐츠 페이지 하나입니다. 칸을 누르면 해당 페이지로 이동합니다.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 text-right text-sm">
          <div><div className="text-xs text-slate-500">열람</div><div className="font-semibold">{viewed.length} / {visible.length}</div></div>
          <div><div className="text-xs text-slate-500">커버리지</div><div className="font-semibold">{percentage}%</div></div>
          <div><div className="text-xs text-slate-500">최근 30일</div><div className="font-semibold">{recent.length}</div></div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {(["all", "disease", "cc", "drug", "lab", "skill"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => changeDomain(key)}
            className={`rounded-md border px-3 py-2 text-xs font-medium transition ${domain === key ? "border-teal-600 bg-teal-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-teal-400"}`}
          >
            {key === "all" ? "전체" : DOMAIN_LABELS[key]}
          </button>
        ))}
        {categories.length > 1 ? (
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="ml-auto rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700"
          >
            <option value="all">전체 분류</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-1 rounded-lg border border-slate-200 bg-slate-50 p-4">
        {visible.map((item) => {
          const stat = coverage[`${item.type}|${item.id}`];
          const detail = stat ? `${formatViewedAt(stat.lastViewedAt)} · ${stat.viewCount}일 열람` : "아직 보지 않음";
          return (
            <Link
              key={`${item.type}|${item.id}`}
              href={item.href}
              className={`h-3.5 w-3.5 rounded-[3px] transition ${coverageColor(stat, now)}`}
              title={`${item.title} · ${detail}`}
              aria-label={`${item.title}, ${detail}`}
            />
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-[3px] bg-slate-200" />미열람</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-[3px] bg-teal-200" />30일 초과</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-[3px] bg-teal-400" />최근 30일</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-[3px] bg-teal-600" />최근 7일</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-[3px] bg-teal-800" />오늘</span>
      </div>
    </section>
  );
}

export function LearningActivityDashboard({ catalog }: { catalog: ReviewCatalogItem[] }) {
  return (
    <div className="space-y-5">
      <QbankActivityHeatmap />
      <ContentCoverageHeatmap catalog={catalog} />
    </div>
  );
}
