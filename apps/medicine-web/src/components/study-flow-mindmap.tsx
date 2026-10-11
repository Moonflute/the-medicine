"use client";

import { useMemo, useState } from "react";
import { Check, ExternalLink, Minus, Plus } from "lucide-react";
import { studyMindmapLayout, type OutlineRow, type StudyLink } from "@/lib/study-flow-model";
import { editStudyItem, setStudyUI } from "@/lib/study-flow-store";

export function StudyFlowMindmap({ rows, title, selectedId, onNavigate }: { rows: OutlineRow[]; title: string; selectedId: string | null; onNavigate: (link: StudyLink, itemId: string) => void }) {
  const layout = useMemo(() => studyMindmapLayout(rows), [rows]);
  const [scale, setScale] = useState(1);
  return <div className="study-flow-map-section">
    <div className="study-flow-map-tools">
      <span>적어둔 순서와 하위 흐름</span>
      <button type="button" aria-label="마인드맵 축소" onClick={() => setScale(value => Math.max(.5, value - .1))}><Minus size={14} /></button>
      <button type="button" onClick={() => setScale(1)} aria-label="마인드맵 배율 초기화">{Math.round(scale * 100)}%</button>
      <button type="button" aria-label="마인드맵 확대" onClick={() => setScale(value => Math.min(1.5, value + .1))}><Plus size={14} /></button>
    </div>
    <div className="study-flow-map" tabIndex={0} aria-label="학습 흐름 마인드맵 · 가로와 세로로 이동할 수 있습니다">
      <div style={{ width: layout.width * scale, height: layout.height * scale }}>
        <div className="study-flow-map-canvas" style={{ width: layout.width, height: layout.height, transform: "scale(" + scale + ")" }}>
          <svg width={layout.width} height={layout.height} aria-hidden="true">
            {rows.map(row => {
              const from = row.parentId ? layout.points.get(row.parentId) ?? layout.root : layout.root;
              const to = layout.points.get(row.item.id)!;
              const start = from.x + 190;
              const end = to.x;
              const middle = (start + end) / 2;
              return <path key={row.item.id} d={"M " + start + " " + (from.y + 31) + " C " + middle + " " + (from.y + 31) + ", " + middle + " " + (to.y + 31) + ", " + end + " " + (to.y + 31)} fill="none" stroke={row.item.id === selectedId ? "#0f766e" : "#cbd5e1"} strokeWidth={row.item.id === selectedId ? 2 : 1.5} />;
            })}
          </svg>
          <div className="study-flow-map-root" style={{ left: layout.root.x, top: layout.root.y }}>{title || "학습 Flow"}</div>
          {rows.map(row => {
            const item = row.item;
            const point = layout.points.get(item.id)!;
            return <div key={item.id} className={"study-flow-map-node" + (item.id === selectedId ? " is-selected" : "") + (item.done ? " is-done" : "")} style={{ left: point.x, top: point.y }}>
              <button type="button" className="study-flow-map-select" onClick={() => setStudyUI({ itemId: item.id })} onDoubleClick={() => setStudyUI({ itemId: item.id, view: "outline" })} aria-pressed={item.id === selectedId} title={item.text || "새 항목"}>
                <span>{item.text || "새 항목"}</span><small>{item.links.length ? item.links.length + "개 문서 연결" : "메모"}</small>
              </button>
              <button type="button" className="study-flow-map-check" onClick={() => editStudyItem(item.id, { done: !item.done })} aria-label={item.done ? "항목 다시 활성화" : "항목 완료"} aria-pressed={item.done}>{item.done ? <Check size={12} /> : null}</button>
              {item.links[0] ? <button type="button" className="study-flow-map-open" onClick={() => onNavigate(item.links[0], item.id)} aria-label={item.links[0].title + " 열기"}><ExternalLink size={12} /></button> : null}
            </div>;
          })}
        </div>
      </div>
    </div>
  </div>;
}
