"use client";

import { useLayoutEffect, useRef, type CSSProperties, type HTMLAttributes } from "react";
import { activityBarScale, type ActivityDay, type RangeKey } from "@/lib/study-calendar";

export type ActivityDayControlProps = Pick<HTMLAttributes<Element>,
  "aria-describedby" | "onPointerEnter" | "onPointerLeave" | "onFocus" | "onBlur" | "onClick" | "onKeyDown">;

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

function dateLabel(range: RangeKey, date: Date): string {
  const day = date.getUTCDate();
  if (range === "week") return weekdays[date.getUTCDay()];
  if (range === "month") return day === 1 || day % 5 === 0 ? String(day) : "";
  return day === 1 ? `${date.getUTCMonth() + 1}월` : "";
}

export function QbankActivityBars({ days, range, title, dayProps }: {
  days: readonly ActivityDay[];
  range: RangeKey;
  title: string;
  dayProps: (key: string) => ActivityDayControlProps;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const { max, ticks } = activityBarScale(days);
  const percent = (value: number) => `${100 * value / max}%`;

  useLayoutEffect(() => {
    const element = scroller.current;
    // Open a long time range at its most recent day. Earlier days remain scrollable.
    if (element) element.scrollLeft = element.scrollWidth;
  }, [range, days.length]);

  return <div className="qbank-activity-bars" role="group" aria-label={`${title} 일별 문제풀이 막대그래프`}>
    <div className="qbank-activity-bar-axis" aria-hidden="true">
      <span className="invisible">{max.toLocaleString("ko-KR")}</span>
      {ticks.map(value => <span key={value} className="qbank-activity-bar-tick" style={{ bottom: percent(value) }}>{value.toLocaleString("ko-KR")}</span>)}
    </div>
    <div ref={scroller} className="qbank-activity-bar-scroll">
      <div className="qbank-activity-bar-track" data-range={range} style={{ "--activity-day-count": range === "week" ? 7 : Math.max(1, days.length) } as CSSProperties}>
        <div className="qbank-activity-bar-guides" aria-hidden="true">
          {ticks.map(value => <span key={value} style={{ bottom: percent(value) }} />)}
        </div>
        {days.map(day => {
          const label = dateLabel(range, day.date);
          return <div key={day.key} className="qbank-activity-bar-day">
            <button type="button" className="qbank-activity-bar" {...dayProps(day.key)} aria-label={`${day.key} · 풀이 ${day.attempts}개 · 오답 ${day.wrong}개 · 정답 ${day.correct}개`}>
              {day.correct > 0 ? <span aria-hidden="true" className="qbank-activity-segment qbank-activity-correct" style={{ height: percent(day.correct) }} /> : null}
              {day.wrong > 0 ? <span aria-hidden="true" className="qbank-activity-segment qbank-activity-wrong" style={{ height: percent(day.wrong) }} /> : null}
            </button>
            {label ? <time className="qbank-activity-bar-date" dateTime={day.key} aria-hidden="true">{label}</time> : null}
          </div>;
        })}
      </div>
    </div>
  </div>;
}
