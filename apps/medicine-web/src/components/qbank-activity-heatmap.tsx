"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity } from "lucide-react";
import { loadQbankState, QBANK_CHANGE_EVENT, type QbankDailyActivity } from "@/lib/qbank-store";

type RangeKey = "week" | "month" | "year";
type DayCell = { date: Date; key: string; col: number; row: number; inRange: boolean; future: boolean };

function dateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function dayStart(value = new Date()) {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}

function calendarFor(range: RangeKey) {
  const today = dayStart();
  let start = new Date(today);
  let end = new Date(today);
  if (range === "week") {
    start.setDate(today.getDate() - today.getDay());
    end = new Date(start);
    end.setDate(start.getDate() + 6);
  } else if (range === "month") {
    start = new Date(today.getFullYear(), today.getMonth(), 1);
    end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  } else {
    start = new Date(today.getFullYear(), 0, 1);
    end = new Date(today.getFullYear(), 11, 31);
  }
  const gridStart = new Date(start);
  gridStart.setDate(start.getDate() - start.getDay());
  const gridEnd = new Date(end);
  gridEnd.setDate(end.getDate() + 6 - end.getDay());
  const length = Math.round((gridEnd.getTime() - gridStart.getTime()) / 86_400_000) + 1;
  const days = Array.from({ length }, (_, index): DayCell => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return { date, key: dateKey(date), col: Math.floor(index / 7), row: index % 7, inRange: date >= start && date <= end, future: date > today };
  });
  return { days, columns: Math.ceil(length / 7), title: range === "week" ? "?? ?" : range === "month" ? `${today.getMonth() + 1}?` : `${today.getFullYear()}?` };
}

function fill(attempts: number) {
  if (attempts === 0) return "#f1f5f9";
  if (attempts <= 5) return "#99f6e4";
  if (attempts <= 15) return "#2dd4bf";
  if (attempts <= 30) return "#0d9488";
  return "#115e59";
}

function streak(activity: Record<string, QbankDailyActivity>) {
  const cursor = dayStart();
  let count = 0;
  while ((activity[dateKey(cursor)]?.attempts ?? 0) > 0) {
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

function monthOutlines(days: DayCell[], pitch: number, cell: number, offset: number) {
  const months = new Map<string, DayCell[]>();
  for (const day of days) {
    if (!day.inRange) continue;
    const key = `${day.date.getFullYear()}-${day.date.getMonth()}`;
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
    return { key, path: path.join(""), label: `${monthDays[0].date.getMonth() + 1}?`, x: monthDays[0].col * pitch };
  });
}

function CalendarSvg({ range, activity }: { range: RangeKey; activity: Record<string, QbankDailyActivity> }) {
  const calendar = useMemo(() => calendarFor(range), [range]);
  const cell = range === "week" ? 25 : range === "month" ? 16 : 10;
  const gap = range === "week" ? 5 : range === "month" ? 4 : 3;
  const pitch = cell + gap;
  const top = range === "year" ? 20 : 0;
  const width = calendar.columns * pitch - gap;
  const height = top + 7 * pitch - gap;
  const outlines = range === "year" ? monthOutlines(calendar.days, pitch, cell, top) : [];
  return <div className="overflow-x-auto pb-2"><svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${calendar.title} ??? ???? ??`} className="block min-w-max">
    {outlines.map((month) => <g key={month.key}><text x={month.x} y={11} fill="#64748b" fontSize={10}>{month.label}</text><path d={month.path} fill="none" stroke="#94a3b8" strokeWidth={0.8} strokeLinejoin="miter" vectorEffect="non-scaling-stroke" /></g>)}
    {calendar.days.map((day) => {
      const value = activity[day.key] ?? { attempts: 0, correct: 0 };
      const hidden = !day.inRange || day.future;
      return <rect key={day.key} x={day.col * pitch} y={top + day.row * pitch} width={cell} height={cell} rx={2} fill={hidden ? "transparent" : fill(value.attempts)} aria-label={hidden ? undefined : `${day.key}, ${value.attempts}??`}>
        {hidden ? null : <title>{`${day.key} ? ${value.attempts}?? ? ?? ${value.correct}?`}</title>}
      </rect>;
    })}
  </svg></div>;
}

export function QbankRangeActivityHeatmap({ compact = false }: { compact?: boolean }) {
  const [activity, setActivity] = useState<Record<string, QbankDailyActivity>>({});
  const [range, setRange] = useState<RangeKey>(compact ? "month" : "year");
  const calendar = useMemo(() => calendarFor(range), [range]);
  useEffect(() => {
    const refresh = () => setActivity(loadQbankState().dailyActivity);
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);
  const visible = calendar.days.filter((day) => day.inRange && !day.future);
  const attempts = visible.reduce((sum, day) => sum + (activity[day.key]?.attempts ?? 0), 0);
  const correct = visible.reduce((sum, day) => sum + (activity[day.key]?.correct ?? 0), 0);
  const activeDays = visible.filter((day) => (activity[day.key]?.attempts ?? 0) > 0).length;
  const rate = attempts ? Math.round(correct / attempts * 100) : 0;
  return <section className="surface p-5 sm:p-6">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div><div className="flex items-center gap-2 text-sm font-semibold text-teal-800"><Activity className="h-5 w-5" />???? ??</div><h2 className="mt-2 text-xl font-semibold text-slate-950">{calendar.title}</h2></div>
      <div className="flex flex-wrap items-start gap-5"><div className="grid grid-cols-3 gap-4 text-right text-sm"><div><div className="text-xs text-slate-500">??</div><div className="font-semibold">{attempts.toLocaleString()}</div></div><div><div className="text-xs text-slate-500">???</div><div className="font-semibold">{rate}%</div></div><div><div className="text-xs text-slate-500">??</div><div className="font-semibold">{streak(activity)}?</div></div></div>
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1" role="tablist" aria-label="???? ?? ??">{([['week', '?'], ['month', '?'], ['year', '?']] as Array<[RangeKey, string]>).map(([key, label]) => <button key={key} type="button" role="tab" aria-selected={range === key} onClick={() => setRange(key)} className={`rounded-md px-3 py-1.5 text-xs font-semibold ${range === key ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}>{label}</button>)}</div>
      </div>
    </div>
    <div className="mt-5"><CalendarSvg range={range} activity={activity} /></div>
    <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500"><span>??? {activeDays}?</span><div className="flex items-center gap-1.5"><span>??</span>{[0, 3, 10, 20, 40].map((value) => <span key={value} className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: fill(value) }} />)}<span>??</span></div></div>
  </section>;
}
