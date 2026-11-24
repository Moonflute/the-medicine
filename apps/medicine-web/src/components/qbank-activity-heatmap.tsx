"use client";

import { SkinPanel } from "@/components/skin-panel";
import { QbankActivityBars, type ActivityDayControlProps } from "@/components/qbank-activity-bars";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { studyDateKey } from "@/lib/study-date";
import { activityCalendar as calendarFor, activityDays, activityStreak as streak, type ActivityDay, type RangeKey, type DayCell } from "@/lib/study-calendar";
import { Activity } from "lucide-react";
import { loadQbankState, QBANK_CHANGE_EVENT, type QbankDailyActivity } from "@/lib/qbank-store";

type ActivityCalendar = ReturnType<typeof calendarFor>;
type ActivityView = "heatmap" | "bars";
const views: ReadonlyArray<[ActivityView, string]> = [["heatmap", "히트맵"], ["bars", "막대그래프"]];
const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];

function fill(attempts: number) {
  if (attempts === 0) return "#f1f5f9";
  if (attempts <= 5) return "#99f6e4";
  if (attempts <= 15) return "#2dd4bf";
  if (attempts <= 30) return "#0d9488";
  return "#115e59";
}


function monthOutlines(days: DayCell[], pitch: number, cell: number, offset: number) {
  const months = new Map<string, DayCell[]>();
  for (const day of days) {
    if (!day.inRange) continue;
    const key = `${day.date.getUTCFullYear()}-${day.date.getUTCMonth()}`;
    months.set(key, [...(months.get(key) ?? []), day]);
  }
  return [...months.entries()].map(([key, monthDays]) => {
    const occupied = new Set(monthDays.map((day) => `${day.col}:${day.row}`));
    const halfGap = (pitch - cell) / 2;
    const path: string[] = [];
    for (const day of monthDays) {
      const left = day.col * pitch - halfGap;
      const right = day.col * pitch + cell + halfGap;
      const top = offset + day.row * pitch - halfGap;
      const bottom = offset + day.row * pitch + cell + halfGap;
      if (!occupied.has(`${day.col}:${day.row - 1}`)) path.push(`M${left} ${top}H${right}`);
      if (!occupied.has(`${day.col + 1}:${day.row}`)) path.push(`M${right} ${top}V${bottom}`);
      if (!occupied.has(`${day.col}:${day.row + 1}`)) path.push(`M${right} ${bottom}H${left}`);
      if (!occupied.has(`${day.col - 1}:${day.row}`)) path.push(`M${left} ${bottom}V${top}`);
    }
    return { key, path: path.join(""), label: `${monthDays[0].date.getUTCMonth() + 1}\uc6d4`, x: monthDays[0].col * pitch };
  });
}

function CalendarSvg({ range, calendar, activity, dayProps }: {
  range: RangeKey; calendar: ActivityCalendar; activity: Record<string, QbankDailyActivity>;
  dayProps: (key: string) => ActivityDayControlProps;
}) {
  const cell = range === "week" ? 25 : range === "month" ? 16 : 10;
  const gap = range === "week" ? 5 : range === "month" ? 4 : 3;
  const pitch = cell + gap;
  const columns = range === "year" ? calendar.columns : 7;
  const rows = range === "year" ? 7 : calendar.columns;
  const top = 20;
  const width = columns * pitch - gap;
  const height = top + rows * pitch - gap;
  const outlines = useMemo(() => range === "year" ? monthOutlines(calendar.days, pitch, cell, top) : [], [range, calendar.days, pitch, cell]);
  return <div className="overflow-x-auto pb-2"><svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="group" aria-label={`${calendar.title} 날짜별 문제풀이 활동`} className="block min-w-max">
    {outlines.map((month) => <g key={month.key}><text x={month.x} y={11} fill="#64748b" fontSize={10}>{month.label}</text><path d={month.path} fill="none" stroke="#94a3b8" strokeWidth={0.8} strokeLinejoin="miter" vectorEffect="non-scaling-stroke" /></g>)}
    {range !== "year" ? weekdayLabels.map((label, index) => <text key={label} x={index * pitch + cell / 2} y={11} textAnchor="middle" fill={index === 0 ? "#e11d48" : index === 6 ? "#2563eb" : "#64748b"} fontSize={10}>{label}</text>) : null}
    {calendar.days.map((day) => {
      const hidden = !day.inRange || day.future;
      return <rect key={day.key} x={day.col * pitch} y={top + day.row * pitch} width={cell} height={cell} rx={2} fill={hidden ? "transparent" : fill(activity[day.key]?.attempts ?? 0)} aria-hidden="true" />;
    })}
    {calendar.days.map((day) => !day.inRange || day.future ? null : <rect key={`hit-${day.key}`} x={day.col * pitch} y={top + day.row * pitch} width={cell} height={cell} fill="transparent" tabIndex={0} role="button"
      aria-label={`${day.key} 상세 보기`} {...dayProps(day.key)} className="cursor-pointer outline-none focus-visible:stroke-teal-700 focus-visible:stroke-2" />)}
  </svg></div>;
}

function ActivityChart({ range, calendar, activity, days, view }: {
  range: RangeKey; calendar: ActivityCalendar; activity: Record<string, QbankDailyActivity>; days: ActivityDay[]; view: ActivityView;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();
  const [selection, setSelection] = useState<{
    key: string;
    pinned: boolean;
    left: number;
    width: number;
    anchorOffset: number;
    above: boolean;
    top?: number;
    bottom?: number;
  } | null>(null);
  const tooltipOpen = Boolean(selection);
  useEffect(() => {
    if (!tooltipOpen) return;
    const dismiss = () => setSelection(null);
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) dismiss();
    };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") dismiss(); };
    window.addEventListener("scroll", dismiss, true);
    window.addEventListener("resize", dismiss);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", dismiss, true);
      window.removeEventListener("resize", dismiss);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [tooltipOpen]);
  const showDay = (key: string, element: Element, togglePin = false) => {
    const bounds = element.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const tooltipWidth = Math.min(208, viewportWidth - 16);
    const anchor = bounds.left + bounds.width / 2;
    const left = Math.max(8, Math.min(anchor - tooltipWidth / 2, viewportWidth - tooltipWidth - 8));
    const above = bounds.top >= 100;
    setSelection(current => togglePin && current?.key === key && current.pinned ? null : {
      key,
      pinned: togglePin || (current?.key === key && current.pinned),
      left,
      width: tooltipWidth,
      anchorOffset: Math.max(8, Math.min(anchor - left, tooltipWidth - 8)),
      above,
      top: above ? undefined : bounds.bottom + 8,
      bottom: above ? window.innerHeight - bounds.top + 8 : undefined,
    });
  };
  const dayProps = (key: string): ActivityDayControlProps => ({
    "aria-describedby": selection?.key === key ? tooltipId : undefined,
    onPointerEnter: event => { if (event.pointerType !== "touch") showDay(key, event.currentTarget); },
    onPointerLeave: () => setSelection(current => current?.key === key && !current.pinned ? null : current),
    onFocus: event => showDay(key, event.currentTarget),
    onBlur: () => setSelection(current => current?.key === key ? null : current),
    onClick: event => showDay(key, event.currentTarget, true),
    onKeyDown: event => {
      if (event.currentTarget instanceof SVGElement && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        showDay(key, event.currentTarget, true);
      }
    },
  });
  const selectedDay = selection ? days.find(day => day.key === selection.key) : undefined;
  return <div ref={containerRef}>
    {view === "bars" ? <QbankActivityBars days={days} range={range} title={calendar.title} dayProps={dayProps} />
      : <CalendarSvg range={range} calendar={calendar} activity={activity} dayProps={dayProps} />}
  {selection && selectedDay ? createPortal(<div id={tooltipId} role="tooltip" className="pointer-events-none fixed z-[70] rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2.5 py-2 text-[11px] leading-5 text-[var(--muted)] shadow-md" style={{ left: selection.left, width: selection.width, top: selection.top, bottom: selection.bottom }}>
    <span aria-hidden="true" className={`absolute h-2 w-2 rotate-45 bg-[var(--surface)] ${selection.above ? "-bottom-[5px] border-r border-b" : "-top-[5px] border-l border-t"} border-[var(--line)]`} style={{ left: selection.anchorOffset - 4 }} />
    <div className="font-semibold text-[var(--foreground)]">{selectedDay.date.toLocaleDateString("ko-KR", { month: "long", day: "numeric", weekday: "short", timeZone: "UTC" })}</div><div>풀이 {selectedDay.attempts}개 · 정답 {selectedDay.correct}개</div><div className={selectedDay.wrong > 0 ? "text-rose-600" : undefined}>오답 {selectedDay.wrong}개{selectedDay.attempts > 0 ? ` · 정답률 ${Math.round(selectedDay.correct / selectedDay.attempts * 100)}%` : ""}</div>
  </div>, document.body) : null}
</div>;
}

export function QbankRangeActivityHeatmap({ compact = false }: { compact?: boolean }) {
  const [activity, setActivity] = useState<Record<string, QbankDailyActivity>>({});
  const [today, setToday] = useState(studyDateKey);
  const [selectedYear, setSelectedYear] = useState<number>();
  const [view, setView] = useState<ActivityView>("heatmap");
  const year = selectedYear ?? Number(today.slice(0, 4));
  const years = [...new Set([Number(today.slice(0, 4)), ...Object.keys(activity).map(day => Number(day.slice(0, 4)))])].sort((a, b) => b - a);
  const [range, setRange] = useState<RangeKey>(compact ? "month" : "year");
  const calendar = useMemo(() => calendarFor(range, new Date(`${today}T00:00:00+09:00`), year), [range, today, year]);
  useEffect(() => {
    const refresh = () => { setActivity(loadQbankState().dailyActivity); setToday(studyDateKey()); };
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    const timer = window.setInterval(refresh, 60_000);
    window.addEventListener("focus", refresh);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", refresh); window.removeEventListener(QBANK_CHANGE_EVENT, refresh); };
  }, []);
  const visible = useMemo(() => activityDays(calendar.days, activity), [calendar.days, activity]);
  const attempts = visible.reduce((sum, day) => sum + day.attempts, 0);
  const correct = visible.reduce((sum, day) => sum + day.correct, 0);
  const activeDays = visible.filter((day) => day.attempts > 0).length;
  const rate = attempts ? Math.round(correct / attempts * 100) : 0;
  return <SkinPanel className="surface p-5 sm:p-6" title="문제풀이 기록" ordinal={1}>
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div><div className="flex items-center gap-2 text-sm font-semibold text-teal-800"><Activity className="h-5 w-5" />{"\ubb38\uc81c\ud480\uc774 \ud65c\ub3d9"}</div><h2 className="mt-2 text-xl font-semibold text-slate-950">{calendar.title}</h2></div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2"><div className="grid grid-cols-3 gap-4 text-right text-sm"><div><div className="text-xs text-slate-500">{"\ud480\uc774"}</div><div className="font-semibold">{attempts.toLocaleString()}</div></div><div><div className="text-xs text-slate-500">{"\uc815\ub2f5\ub960"}</div><div className="font-semibold">{rate}%</div></div><div><div className="text-xs text-slate-500">{"\uc5f0\uc18d"}</div><div className="font-semibold">{streak(activity)}{"\uc77c"}</div></div></div>
        {range === "year" && years.length > 1 && <select aria-label="학습 활동 연도" value={year} onChange={event => setSelectedYear(Number(event.target.value))} className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs">{years.map(value => <option key={value} value={value}>{value}년</option>)}</select>}
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1" role="group" aria-label="문제풀이 활동 보기">
          {views.map(([key, label]) => <button key={key} type="button" aria-pressed={view === key} onClick={() => setView(key)} className={`rounded-md px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap ${view === key ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}>{label}</button>)}
        </div>
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1" role="tablist" aria-label="\ubb38\uc81c\ud480\uc774 \ud65c\ub3d9 \uae30\uac04">{([['week', '\uc8fc'], ['month', '\uc6d4'], ['year', '\uc5f0']] as Array<[RangeKey, string]>).map(([key, label]) => <button key={key} type="button" role="tab" aria-selected={range === key} onClick={() => setRange(key)} className={`rounded-md px-3 py-1.5 text-xs font-semibold ${range === key ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}>{label}</button>)}</div>
      </div>
    </div>
    <div className="mt-5"><ActivityChart key={`${view}:${range}:${year}:${today}`} range={range} calendar={calendar} activity={activity} days={visible} view={view} /></div>
    <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
      <span>활동일 {activeDays}일</span>
      {view === "bars" ? <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5"><span className="qbank-activity-wrong h-3 w-3 rounded-sm" aria-hidden="true" />오답</span>
        <span className="flex items-center gap-1.5"><span className="qbank-activity-correct h-3 w-3 rounded-sm" aria-hidden="true" />정답</span>
      </div> : <div className="flex items-center gap-1.5"><span>적음</span>{[0, 3, 10, 20, 40].map((value) => <span key={value} className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: fill(value) }} />)}<span>많음</span></div>}
    </div>
  </SkinPanel>;
}

