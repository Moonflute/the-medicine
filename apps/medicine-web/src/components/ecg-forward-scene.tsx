"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { electrodePosition, ELECTRODE_IDS, HEART_CENTER, leadFieldAtCenter, pickSceneSurface, projectScenePosition, type Electrode, type ElectrodeId, type ElectrodeMap, type ForwardRecording, type LeadPlacement, type StandardLead } from "@/lib/ecg-forward-model";
import { HEART_PARTS, recordingFrame, type HeartPart } from "@/lib/ecg-forward-display";
import { anatomyCurrents, conductionEvents, createAnatomyLayout, HEART_CHAMBERS, pointOnRoute } from "@/lib/ecg-forward-anatomy";
import { EcgForwardHeart, EcgForwardHeartDetail } from "@/components/ecg-forward-heart";

type Props = {
  readRecording: () => ForwardRecording; electrodes: ElectrodeMap; placement: LeadPlacement; lead: StandardLead;
  timeMs: number; yaw: number; selected: ElectrodeId; showCurrents: boolean; showVectors: boolean;
  electrodeMode: boolean; onElectrodeMode: (active: boolean) => void;
  part: HeartPart; onPart: (part: HeartPart) => void;
  onMove: (id: ElectrodeId, electrode: Electrode) => void; onSelect: (id: ElectrodeId) => void;
};
const LABELS: { part: HeartPart; x: number; y: number; anchor: "start" | "end"; label: string; sub?: string; leader: string }[] = [
  { part: "SA node", x: 127, y: 119, anchor: "end", label: "SA node", leader: "M137 114L168 114" },
  { part: "AV node", x: 127, y: 202, anchor: "end", label: "AV node", leader: "M137 197L232 197L275 201" },
  { part: "His", x: 487, y: 225, anchor: "start", label: "His bundle", leader: "M478 220L404 220L303 230" },
  { part: "RBB", x: 127, y: 268, anchor: "end", label: "RBB", leader: "M137 263L269 261" },
  { part: "LBB", x: 487, y: 278, anchor: "start", label: "LBB", leader: "M478 273L411 273L323 264" },
  { part: "RV Purkinje", x: 135, y: 384, anchor: "end", label: "Purkinje", sub: "RV network", leader: "M145 379L184 379L223 364" },
  { part: "LV Purkinje", x: 486, y: 397, anchor: "start", label: "Purkinje", sub: "LV network", leader: "M477 392L441 392L420 382" },
];
const HINTS: Record<HeartPart, string> = {
  RA: "SVC·IVC에서 혈액을 받는 Right atrium", LA: "Pulmonary veins에서 혈액을 받는 Left atrium",
  RV: "Pulmonary circulation으로 혈액을 보내는 Right ventricle", LV: "두꺼운 Myocardium을 가진 Left ventricle",
  "SA node": "SVC–RA 접합부의 상외측 벽",
  "AV node": "RA의 하부 Septal 영역 · 전도 지연", His: "Fibrous skeleton을 통과해 Septum으로 연결",
  RBB: "Septum의 오른쪽을 따라 RV로 연결", LBB: "Septum의 왼쪽을 따라 LV로 연결",
  "RV Purkinje": "RV의 Subendocardial 분지 → Myocardium", "LV Purkinje": "LV의 Subendocardial 분지 → Myocardium",
};
const WIDTHS = { atrial: 2.4, nodal: 3, bundle: 3.1, purkinje: 1.9, terminal: 1.05 };
const activate = (event: KeyboardEvent<SVGElement>, action: () => void) => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.stopPropagation(); action(); }
};

export function EcgForwardScene({ readRecording, electrodes, placement, lead, timeMs, yaw, selected, showCurrents, showVectors, electrodeMode, onElectrodeMode, part, onPart, onMove, onSelect }: Props) {
  const recording = readRecording();
  const id = useId().replaceAll(":", ""), dragging = useRef<ElectrodeId | null>(null);
  const [hovered, setHovered] = useState<HeartPart | null>(null);
  const layout = useMemo(() => createAnatomyLayout(recording.mesh), [recording.mesh]);
  const events = useMemo(() => conductionEvents(recording, layout.paths), [recording, layout.paths]);
  const frame = recordingFrame(recording, timeMs), n = recording.mesh.cells.length;
  const position = Math.max(0, Math.min(recording.samples - 1, timeMs / recording.sampleMs));
  const left = Math.floor(position), right = Math.min(recording.samples - 1, left + 1), fraction = position - left;
  const voltageAt = (cell: number) => recording.voltage[left * n + cell] * (1 - fraction) + recording.voltage[right * n + cell] * fraction;
  const bands = layout.bands.map(band => {
    const voltage = band.cells.reduce((sum, cell) => sum + voltageAt(cell), 0) / band.cells.length;
    const previous = band.cells.reduce((sum, cell) => sum + recording.voltage[Math.max(0, left - 3) * n + cell], 0) / band.cells.length;
    return { ...band, voltage, falling: voltage < previous - .002 };
  });
  const paths = layout.paths.map(path => {
    const edge = recording.mesh.edges[path.index], blocked = edge.conductance === 0;
    const event = events.get(path.index)?.find(item => timeMs >= item.start && timeMs <= item.end);
    const progress = event ? (timeMs - event.start) / (event.end - event.start) : null;
    const front = progress === null ? null : event!.forward ? progress : 1 - progress;
    return { ...path, blocked, event, front, voltage: (voltageAt(edge.a) + voltageAt(edge.b)) / 2 };
  });
  const arrows = showCurrents ? anatomyCurrents(recording, layout, timeMs) : [];
  const ventricular = bands.filter(band => band.region.startsWith("lv-") || band.region.startsWith("rv-"));
  const active = ventricular.filter(band => band.voltage > .2), recovering = active.filter(band => band.falling);
  const atrialActive = bands.some(band => band.region.endsWith("-wall") && band.voltage > .2);
  const phase = active.length ? recovering.length > active.length / 2 ? "심실 회복" : "심실 흥분" : atrialActive ? "심방 활성" : "휴지기";
  const dipole = recording.dipole.subarray(frame * 3, frame * 3 + 3), field = leadFieldAtCenter(placement);
  const positiveId: ElectrodeId = lead.startsWith("V") ? lead as ElectrodeId : lead === "I" || lead === "aVL" ? "LA" : lead === "aVR" ? "RA" : "LL";
  const negativeId = lead === "III" ? "LA" : "RA";
  const coordinates = (event: PointerEvent<SVGSVGElement>) => {
    const matrix = event.currentTarget.getScreenCTM();
    return matrix ? new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse()) : null;
  };
  const move = (event: PointerEvent<SVGSVGElement>) => {
    if (!dragging.current) return;
    const point = coordinates(event); if (!point) return;
    const next = pickSceneSurface(point.x, point.y, yaw); if (next) onMove(dragging.current, next);
  };
  const partInteraction = (value: HeartPart) => ({
    "data-heart-part": value, role: "button", tabIndex: electrodeMode ? -1 : 0,
    "aria-label": `${HEART_PARTS.find(item => item.id === value)!.name} 구조 설명`,
    "aria-pressed": part === value, "aria-describedby": hovered === value ? `${id}-hint` : undefined,
    onClick: () => { setHovered(null); onPart(value); },
    onKeyDown: (event: KeyboardEvent<SVGGElement>) => { if (event.key === "Escape") setHovered(null); else activate(event, () => { setHovered(null); onPart(value); }); },
    onPointerEnter: () => setHovered(value), onPointerLeave: () => setHovered(null),
    onFocus: () => setHovered(value), onBlur: () => setHovered(null),
  });

  return <div className="ecg-integrated-scene" data-electrode-mode={electrodeMode}>
    <div className="ecg-integrated-heading">
      <div className="ecg-scene-modes" role="group" aria-label="심장 표시 강조">
        <button type="button" aria-pressed={!electrodeMode} onClick={() => { setHovered(null); onElectrodeMode(false); }}>전도 경로</button>
        <button type="button" aria-pressed={electrodeMode} onClick={() => { setHovered(null); onElectrodeMode(true); }}>전극 위치</button>
      </div>
      <span>{electrodeMode ? "전극을 끌어 위치 변경" : "전면 개념 절개도"}</span>
    </div>
    <svg viewBox={electrodeMode ? "0 20 620 500" : "45 20 550 485"} role="group" tabIndex={0} className="ecg-integrated-drawing"
      aria-label={`심장 전도 경로와 측정 전극. ${electrodeMode ? "전극을 끌거나 흉곽 표면을 누르세요." : "구조에 마우스를 올리거나 이름을 눌러 설명을 확인하세요. 전극 위치 탭에서 전극을 옮깁니다."} 방향키로 선택 전극을 움직입니다.`}
      onPointerDown={event => {
        if ((event.target as Element).closest("[data-heart-part]")) return;
        const point = coordinates(event); if (!point) return;
        const marker = (event.target as Element).closest("[data-electrode]")?.getAttribute("data-electrode") as ElectrodeId | null;
        if (!marker && !electrodeMode) return;
        event.preventDefault();
        if (marker) { onSelect(marker); if (electrodeMode) { dragging.current = marker; event.currentTarget.setPointerCapture(event.pointerId); } return; }
        if (!pickSceneSurface(point.x, point.y, yaw)) return;
        dragging.current = selected; event.currentTarget.setPointerCapture(event.pointerId); move(event);
      }} onPointerMove={move}
      onPointerUp={event => { dragging.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      onPointerCancel={() => { dragging.current = null; }} onLostPointerCapture={() => { dragging.current = null; }}
      onKeyDown={event => {
        if (event.target !== event.currentTarget || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
        event.preventDefault(); const e = electrodes[selected], step = event.shiftKey ? 10 : 2;
        if (!electrodeMode) onElectrodeMode(true);
        onMove(selected, { longitude: ((e.longitude + (event.key === "ArrowRight" ? step : event.key === "ArrowLeft" ? -step : 0) + 540) % 360) - 180, latitude: Math.max(-80, Math.min(80, e.latitude + (event.key === "ArrowUp" ? step : event.key === "ArrowDown" ? -step : 0))) });
      }}>
      <defs>
        <filter id={`${id}-tissue-soften`} x="-.02" y="-.02" width="1.04" height="1.04" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="1.5" /></filter>
        <marker id={`${id}-current`} viewBox="0 0 12 12" refX="9" refY="6" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M1 1L11 6L1 11L3 6Z" fill="#086bb5" stroke="white" strokeWidth=".7" /></marker>
        {["dipole", "field"].map((key, i) => <marker key={key} id={`${id}-${key}`} viewBox="0 0 8 8" refX="6" refY="4" markerWidth="4" markerHeight="4" orient="auto"><path d="M1 1L7 4L1 7Z" fill={i ? "#176c64" : "#657f93"} /></marker>)}
      </defs>
      {electrodeMode ? <g className="ecg-torso-context">
        <path d="M266 29L264 55Q215 75 156 82Q82 101 58 166L36 380Q51 396 68 379L101 233L108 392L129 524H491L512 392L519 233L552 379Q569 396 584 380L562 166Q538 101 464 82Q405 75 356 55L354 29" fill="#eef3f4" stroke="#b6c6cf" strokeWidth="1.3" />
        <ellipse cx="310" cy="300" rx={Math.hypot(16 * Math.cos(yaw * Math.PI / 180), 10 * Math.sin(yaw * Math.PI / 180)) * 14} ry={26 * 8.8} fill="none" stroke="#9eb8c8" strokeDasharray="4 5" />
        {[-50, 0, 50].map(latitude => <path key={latitude} d={Array.from({ length: 91 }, (_, i) => { const point = projectScenePosition(electrodePosition({ longitude: i * 4 - 180, latitude }), yaw); return `${i ? "L" : "M"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`; }).join(" ")} fill="none" stroke="#c0d2de" strokeWidth=".8" />)}
      </g> : null}
      <text x={electrodeMode ? 34 : 70} y={electrodeMode ? 79 : 486} className="ecg-scene-orientation">환자 R</text><text x={electrodeMode ? 586 : 570} y={electrodeMode ? 79 : 486} textAnchor="end" className="ecg-scene-orientation">환자 L</text>
      <g className="ecg-anatomy-layer" opacity={electrodeMode ? .6 : 1} aria-hidden={electrodeMode}>
        <EcgForwardHeart id={id} />
        <g mask={`url(#${id}-myocardial-mask)`} pointerEvents="none" aria-hidden="true">
          <g filter={`url(#${id}-tissue-soften)`}>
            {bands.map((band, index) => <path key={index} data-myocardial-region={band.region} d={band.path} fill={band.falling ? "#7b9eac" : "#e5ad55"} fillOpacity={Math.max(0, band.voltage - .08) * .65} />)}
          </g>
        </g>
        <EcgForwardHeartDetail />
        <g className="ecg-conduction-network" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {paths.map(path => {
            const width = WIDTHS[path.kind], front = path.front;
            const start = front === null ? 0 : path.event!.forward ? Math.max(0, front - .22) : front;
            const end = front === null ? 0 : path.event!.forward ? front : Math.min(1, front + .22);
            const point = front === null ? null : pointOnRoute(path.points, front);
            return <g key={path.index} data-conduction-edge={path.index} data-blocked={path.blocked} pointerEvents="none">
              <path d={path.path} stroke="#fffaf1" strokeWidth={width + 2} strokeOpacity=".8" />
              <path d={path.path} stroke={path.blocked ? "#b34748" : "#397b71"} strokeWidth={width} strokeOpacity={path.kind === "terminal" ? .7 : .95} strokeDasharray={path.blocked ? "3 5" : undefined} />
              {!path.blocked && path.voltage > .15 ? <path d={path.path} stroke="#c58a2f" strokeWidth={width} strokeOpacity={Math.min(.85, path.voltage * .9)} /> : null}
              {point ? <g data-wave-direction={path.event!.forward ? "forward" : "reverse"}>
                <path d={path.path} pathLength="1" stroke="#e3a13e" strokeWidth={width + .6} strokeDasharray={`${end - start} 1`} strokeDashoffset={-start} />
                <circle cx={point.x} cy={point.y} r={path.kind === "terminal" ? 1.4 : 2.3} fill="#fff1c4" stroke="#ce8f31" strokeWidth=".9" />
              </g> : null}
              {path.blocked ? (() => { const point = pointOnRoute(path.points, .5); return <text x={point.x} y={point.y + 5} className="ecg-block-label" textAnchor="middle">×</text>; })() : null}
            </g>;
          })}
        </g>
        {HEART_CHAMBERS.map(chamber => <g key={chamber.id} {...partInteraction(chamber.id)} className="ecg-anatomy-hit ecg-chamber-hit">
          <rect x={chamber.x - 37} y={chamber.y - 22} width="74" height="46" rx="7" fill="transparent" />
          <text x={chamber.x} y={chamber.y} textAnchor="middle" className="ecg-chamber-label">{chamber.id}</text>
          <text x={chamber.x} y={chamber.y + 16} textAnchor="middle" className="ecg-chamber-name">{chamber.id.endsWith("A") ? "Atrium" : "Ventricle"}</text>
        </g>)}
        {["SA node", "AV node"].map(name => {
          const landmark = recording.mesh.landmarks.find(item => item.label === name)!, point = layout.points[landmark.index];
          return <g key={name} {...partInteraction(name as HeartPart)} className="ecg-anatomy-hit ecg-node-hit" tabIndex={-1}>
            <ellipse cx={point.x} cy={point.y} rx="10" ry="13" fill="transparent" />
            <ellipse cx={point.x} cy={point.y} rx={name === "SA node" ? 4.5 : 5.2} ry={name === "SA node" ? 9 : 6} transform={`rotate(${name === "SA node" ? 14 : -25} ${point.x} ${point.y})`} fill={voltageAt(landmark.index) > .5 ? "#e3a13e" : "#397b71"} stroke="#fffbef" strokeWidth="1.8" />
          </g>;
        })}
        {!electrodeMode ? <g className="ecg-structure-labels">{LABELS.map(label => <g key={label.part} className="ecg-structure-label" data-highlighted={hovered === label.part}>
          <path d={label.leader} className="ecg-label-leader" fill="none" pointerEvents="none" />
          <g {...partInteraction(label.part)} className="ecg-anatomy-hit ecg-landmark-label" data-highlighted={hovered === label.part}>
            <rect x={label.anchor === "end" ? label.x - 98 : label.x - 5} y={label.y - 18} width="103" height={label.sub ? 39 : 29} fill="transparent" />
            <text x={label.x} y={label.y} textAnchor={label.anchor} className="ecg-path-label">{label.label}</text>
            {label.sub ? <text x={label.x} y={label.y + 16} textAnchor={label.anchor} className="ecg-path-sublabel">{label.sub}</text> : null}
          </g>
        </g>)}</g> : null}
      </g>
      <g className="ecg-current-layer" pointerEvents="none" aria-label="계산된 전류 방향">
        {arrows.map(arrow => {
          const length = 18 + Math.min(16, Math.sqrt(arrow.magnitude) * 70);
          const d = `M${arrow.x - arrow.dx * length / 2} ${arrow.y - arrow.dy * length / 2}L${arrow.x + arrow.dx * length / 2} ${arrow.y + arrow.dy * length / 2}`;
          return <g key={arrow.key} data-current-region={arrow.region} data-current-kind={arrow.kind} data-current={arrow.magnitude.toFixed(6)}>
            <title>{arrow.region} · {arrow.kind === "myocardial" ? "심근 구역의 투영 합성 전류" : "전도계 결합 전류"} · {arrow.magnitude.toFixed(4)} a.u.</title>
            <path d={d} fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <path d={d} fill="none" stroke="#086bb5" strokeWidth="3.2" strokeLinecap="round" markerEnd={`url(#${id}-current)`} />
          </g>;
        })}
      </g>
      {showVectors ? <g className="ecg-vector-inset" transform={electrodeMode ? undefined : "translate(441 -323)"} pointerEvents="none">
        <rect x="26" y="415" width="115" height="88" rx="8" fill="white" stroke="#d2dce4" />
        <text x="38" y="433" className="ecg-vector-title">합성 방향 · {lead}</text>
        {[dipole, field].map((vector, index) => {
          const length = Math.hypot(...vector); if (length < (index ? 1e-8 : .03)) return null;
          const origin = projectScenePosition(HEART_CENTER, yaw);
          const tip = projectScenePosition([HEART_CENTER[0] + vector[0] / length * 3, HEART_CENTER[1] + vector[1] / length * 3, HEART_CENTER[2] + vector[2] / length * 3], yaw);
          return <line key={index} x1="81" y1="466" x2={81 + tip.x - origin.x} y2={466 + tip.y - origin.y} stroke={index ? "#176c64" : "#657f93"} strokeWidth="2.4" strokeDasharray={index ? "4 3" : undefined} markerEnd={`url(#${id}-${index ? "field" : "dipole"})`} />;
        })}
        <text x="36" y="495" fontSize="9" fill="#526775">실선 p · 점선 Lead field</text>
      </g> : null}
      {electrodeMode ? ELECTRODE_IDS.map(name => {
        const point = projectScenePosition(electrodePosition(electrodes[name]), yaw), active = name === selected, positive = name === positiveId, negative = placement.reference === "bipolar" && name === negativeId;
        const color = active ? "#155eef" : positive ? "#b42342" : negative ? "#155eef" : "#4b6474";
        return <g key={name} data-electrode={name} className="ecg-electrode-marker" role="button" tabIndex={0} aria-label={`${name} 전극 선택${!point.front ? " · 뒤쪽 표면" : ""}`} aria-pressed={active} onClick={() => onSelect(name)} onKeyDown={event => activate(event, () => onSelect(name))}>
          <circle cx={point.x} cy={point.y} r="17" fill="transparent" />
          {active ? <circle cx={point.x} cy={point.y} r="16" fill="#e6eeff" /> : null}
          <circle cx={point.x} cy={point.y} r={active ? 10 : 7.5} fill="white" stroke={color} strokeWidth={active ? 2.5 : 1.5} strokeDasharray={!point.front ? "3 2" : undefined} />
          <circle cx={point.x} cy={point.y} r={active ? 3.5 : 2} fill={color} /><text x={point.x + (point.x < 310 ? -12 : 12)} y={point.y - (active ? 17 : 11)} textAnchor={point.x < 310 ? "end" : "start"} className="ecg-electrode-label" fill={color}>{name}{positive ? " +" : negative ? " −" : ""}</text>
        </g>;
      }) : null}
    </svg>
    {!electrodeMode && hovered ? <div id={`${id}-hint`} className="ecg-anatomy-tooltip" role="tooltip"><strong>{HEART_PARTS.find(item => item.id === hovered)!.name}</strong><span>{HINTS[hovered]}</span><small>클릭 또는 Enter · 상세 설명</small></div> : null}
    <div className="ecg-heart-key"><span><i className="ecg-key-conduction" />전도계</span><span><i className="ecg-key-active" />흥분</span><span><i className="ecg-key-recovery" />회복</span>{showCurrents ? <span className="ecg-current-key">➜ {arrows.length ? "전류 방향·상대 크기" : "전류 낮음"}</span> : null}<strong>{phase}</strong></div>
  </div>;
}
