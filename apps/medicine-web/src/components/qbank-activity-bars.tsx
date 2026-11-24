"use client";

import { memo, useLayoutEffect, useRef, type CSSProperties, type HTMLAttributes } from "react";
import { activityBarScale, type ActivityDay, type RangeKey } from "@/lib/study-calendar";

export type ActivityDayControlProps = Pick<HTMLAttributes<Element>,
  "aria-describedby" | "onPointerEnter" | "onPointerLeave" | "onFocus" | "onBlur" | "onClick" | "onKeyDown">;

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
const accuracyTicks = [0, 25, 50, 75, 100];
const coordinate = (value: number) => `${Number(value.toFixed(3))}%`;

function dateLabel(range: RangeKey, date: Date): string {
  const day = date.getUTCDate();
  if (range === "week") return weekdays[date.getUTCDay()];
  if (range === "month") return day === 1 || day % 5 === 0 ? String(day) : "";
  return day === 1 ? `${date.getUTCMonth() + 1}월` : "";
}

const ActivityAccuracyPlot = memo(function ActivityAccuracyPlot({ days, columns }: { days: readonly ActivityDay[]; columns: number }) {
  const points = days.map((day, index) => day.accuracyPercent === null ? null : {
    key: day.key,
    x: coordinate(100 * (index + 0.5) / columns),
    y: coordinate(100 - day.accuracyPercent),
  });
  return <svg className="qbank-activity-rate-plot" aria-hidden="true">
    {points.map((point, index) => {
      const previous = points[index - 1];
      return previous && point ? <line key={point.key} className="qbank-activity-rate-line" x1={previous.x} y1={previous.y} x2={point.x} y2={point.y} /> : null;
    })}
    {points.map(point => point ? <circle key={point.key} className="qbank-activity-rate-dot" cx={point.x} cy={point.y} r={2.75} /> : null)}
  </svg>;
});

export function QbankActivityBars({ days, range, title, dayProps }: {
  days: readonly ActivityDay[];
  range: RangeKey;
  title: string;
  dayProps: (key: string) => ActivityDayControlProps;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const { max, ticks } = activityBarScale(days);
  const percent = (value: number) => `${100 * value / max}%`;
  const columns = range === "week" ? 7 : Math.max(1, days.length);

  useLayoutEffect(() => {
    const element = scroller.current;
    // Open a long time range at its most recent day. Earlier days remain scrollable.
    if (element) element.scrollLeft = element.scrollWidth;
  }, [range, days.length]);

  return <div className="qbank-activity-bars" role="group" aria-label={`${title} 일별 풀이 수와 정답률`}>
    <div className="qbank-activity-bar-axis" aria-hidden="true">
      <span className="invisible">{max.toLocaleString("ko-KR")}</span>
      {ticks.map(value => <span key={value} className="qbank-activity-bar-tick" style={{ bottom: percent(value) }}>{value.toLocaleString("ko-KR")}</span>)}
    </div>
    <div ref={scroller} className="qbank-activity-bar-scroll">
      <div className="qbank-activity-bar-track" data-range={range} style={{ "--activity-day-count": columns } as CSSProperties}>
        <div className="qbank-activity-bar-guides" aria-hidden="true">
          {ticks.map(value => <span key={value} style={{ bottom: percent(value) }} />)}
        </div>
        {days.map(day => {
          const label = dateLabel(range, day.date);
          const rateLabel = day.accuracyPercent === null ? "" : ` · 정답률 ${Math.round(day.accuracyPercent)}%`;
          return <div key={day.key} className="qbank-activity-bar-day">
            <button type="button" className="qbank-activity-bar" {...dayProps(day.key)} aria-label={`${day.key} · 풀이 ${day.attempts}개 · 오답 ${day.wrong}개 · 정답 ${day.correct}개${rateLabel}`}>
              {day.correct > 0 ? <span aria-hidden="true" className="qbank-activity-segment qbank-activity-correct" style={{ height: percent(day.correct) }} /> : null}
              {day.wrong > 0 ? <span aria-hidden="true" className="qbank-activity-segment qbank-activity-wrong" style={{ height: percent(day.wrong) }} /> : null}
            </button>
            {label ? <time className="qbank-activity-bar-date" dateTime={day.key} aria-hidden="true">{label}</time> : null}
          </div>;
        })}
        <ActivityAccuracyPlot days={days} columns={columns} />
      </div>
    </div>
    <div className="qbank-activity-bar-axis qbank-activity-rate-axis" aria-hidden="true">
      <span className="invisible">100%</span>
      {accuracyTicks.map(value => <span key={value} className="qbank-activity-bar-tick" style={{ bottom: `${value}%` }}>{value}%</span>)}
    </div>
  </div>;
}
