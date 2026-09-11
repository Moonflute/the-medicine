import { studyDayStart } from "./study-date";
import type { QbankDailyActivity } from "./qbank-store";
export type RangeKey = "week" | "month" | "year";
export type DayCell = { date: Date; key: string; col: number; row: number; inRange: boolean; future: boolean };

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

const dayStart = studyDayStart;

export function activityCalendar(range: RangeKey, now = new Date(), year?: number) {
  const today = dayStart(now);
  let start = new Date(today);
  let end = new Date(today);
  if (range === "week") {
    start.setUTCDate(today.getUTCDate() - today.getUTCDay());
    end = new Date(start);
    end.setUTCDate(start.getUTCDate() + 6);
  } else if (range === "month") {
    start = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1));
    end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() + 1, 0));
  } else {
    start = new Date(Date.UTC(year ?? today.getUTCFullYear(), 0, 1));
    end = new Date(Date.UTC(year ?? today.getUTCFullYear(), 11, 31));
  }
  const gridStart = new Date(start);
  gridStart.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const gridEnd = new Date(end);
  gridEnd.setUTCDate(end.getUTCDate() + 6 - end.getUTCDay());
  const length = Math.round((gridEnd.getTime() - gridStart.getTime()) / 86_400_000) + 1;
  const verticalWeekdays = range === "year";
  const days = Array.from({ length }, (_, index): DayCell => {
    const date = new Date(gridStart);
    date.setUTCDate(gridStart.getUTCDate() + index);
    return { date, key: dateKey(date), col: verticalWeekdays ? Math.floor(index / 7) : index % 7, row: verticalWeekdays ? index % 7 : Math.floor(index / 7), inRange: date >= start && date <= end, future: date > today };
  });
  return { days, columns: Math.ceil(length / 7), title: range === "week" ? "\uc774\ubc88 \uc8fc" : range === "month" ? `${today.getUTCMonth() + 1}\uc6d4` : `${year ?? today.getUTCFullYear()}\ub144` };
}

export function activityStreak(activity: Record<string, QbankDailyActivity>, now = new Date()) {
  const cursor = dayStart(now);
  let count = 0;
  while ((activity[dateKey(cursor)]?.attempts ?? 0) > 0) {
    count += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return count;
}

