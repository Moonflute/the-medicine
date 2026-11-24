"use client";

import { useId, useState } from "react";
import type { AnalyticsGroup, PracticeDepartmentGroup } from "@/lib/qbank-analytics";

type RadarGroup = Pick<AnalyticsGroup, "key" | "attempts" | "correct">;
type Point = { x: number; y: number };

const center = { x: 210, y: 158 };
const plotRadius = 112;
const ticks = [25, 50, 75, 100];

function project(angle: number, distance: number): Point {
  return {
    x: Math.round((center.x + Math.cos(angle) * distance) * 10) / 10,
    y: Math.round((center.y + Math.sin(angle) * distance) * 10) / 10,
  };
}

const coordinates = (points: Point[]) => points.map(point => `${point.x},${point.y}`).join(" ");

export function QbankAccuracyRadar({ groups, label = "분과별" }: { groups: readonly RadarGroup[]; label?: string }) {
  const captionId = useId();
  const numbered = groups.length > 8 || groups.some(group => [...group.key].length > 6);
  const axes = groups.map((group, index) => {
    const angle = index * 2 * Math.PI / groups.length - Math.PI / 2;
    const rate = group.attempts > 0 ? 100 * group.correct / group.attempts : null;
    return {
      ...group, angle, rate,
      edge: project(angle, plotRadius), labelAt: project(angle, plotRadius + 17),
      point: rate === null ? null : project(angle, plotRadius * rate / 100),
    };
  });
  const points = axes.flatMap(axis => axis.point ? [axis.point] : []);
  if (!points.length) return <p className="qbank-radar-empty">이 범위의 정답률 그래프를 그릴 풀이 기록이 아직 없어요.</p>;
  const filled = axes.length >= 3 && points.length === axes.length;

  return <figure className="qbank-radar" aria-labelledby={captionId}>
    <figcaption className="qbank-radar-caption" id={captionId}>{label} 누적 정답률 <span>0–100%</span></figcaption>
    <div className="qbank-radar-layout">
      <svg className="qbank-radar-plot" viewBox="0 0 420 316" role="img" aria-label={`${label} 정답률 방사형 그래프`}>
        {ticks.map(tick => axes.length >= 3
          ? <polygon key={tick} className="qbank-radar-grid" points={coordinates(axes.map(axis => project(axis.angle, plotRadius * tick / 100)))} />
          : <circle key={tick} className="qbank-radar-grid" cx={center.x} cy={center.y} r={plotRadius * tick / 100} />)}
        {axes.map(axis => <line key={axis.key} className="qbank-radar-axis" data-empty={axis.rate === null} x1={center.x} y1={center.y} x2={axis.edge.x} y2={axis.edge.y} />)}
        {filled ? <polygon className="qbank-radar-area" points={coordinates(points)} /> : axes.map((axis, index) => {
          // With missing data, don't draw across unmeasured axes or fill a misleading area.
          const next = axes.length <= 2 ? center : axes[(index + 1) % axes.length].point;
          return axis.point && next ? <line key={axis.key} className="qbank-radar-line" x1={axis.point.x} y1={axis.point.y} x2={next.x} y2={next.y} /> : null;
        })}
        {ticks.map(tick => <text key={tick} className="qbank-radar-tick" x={center.x + 6} y={center.y - plotRadius * tick / 100 - 3}>{tick}%</text>)}
        {axes.map((axis, index) => {
          const side = Math.cos(axis.angle);
          const anchor = numbered || Math.abs(side) < .2 ? "middle" : side > 0 ? "start" : "end";
          return <g key={axis.key}>
            <text className="qbank-radar-label" data-empty={axis.rate === null} x={axis.labelAt.x} y={axis.labelAt.y} textAnchor={anchor} dominantBaseline="central">{numbered ? index + 1 : axis.key}</text>
            {axis.point && axis.rate !== null ? <circle className="qbank-radar-point" cx={axis.point.x} cy={axis.point.y} r={3.6}>
              <title>{`${axis.key} · ${Math.round(axis.rate)}% (${axis.correct}/${axis.attempts})`}</title>
            </circle> : null}
          </g>;
        })}
      </svg>
      <ul className="qbank-radar-values" aria-label={`${label} 정답률 수치`}>
        {axes.map((axis, index) => <li key={axis.key} data-empty={axis.rate === null} title={axis.rate === null ? undefined : `${axis.attempts}회 풀이 중 ${axis.correct}회 정답`}>
          {numbered && <span className="qbank-radar-index" aria-hidden="true">{index + 1}</span>}
          <span className="qbank-radar-name">{axis.key}</span>
          <strong>{axis.rate === null ? "기록 없음" : `${Math.round(axis.rate)}%`}</strong>
        </li>)}
      </ul>
    </div>
  </figure>;
}

export function QbankPracticeAccuracyRadar({ groups }: { groups: readonly PracticeDepartmentGroup[] }) {
  const [scope, setScope] = useState<"subjects" | "internal">("subjects");
  const internal = groups.find(group => group.key === "내과")?.children ?? [];
  const canSwitch = internal.length > 0 && groups.length > 1;
  const showInternal = internal.length > 0 && (scope === "internal" || groups.length === 1);
  return <>
    {canSwitch && <div className="mb-2 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1" role="group" aria-label="실전 정답률 범위">
      {([['subjects', '과목별'], ['internal', '내과 세부 분과']] as const).map(([key, text]) => <button key={key} type="button" aria-pressed={scope === key} onClick={() => setScope(key)} className={`rounded-md px-2.5 py-1.5 text-xs font-semibold ${scope === key ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}>{text}</button>)}
    </div>}
    <QbankAccuracyRadar groups={showInternal ? internal : groups} label={showInternal ? "내과 세부 분과" : "실전 과목별"} />
  </>;
}
