"use client";

import { useId, useMemo, useRef, type KeyboardEvent, type PointerEvent } from "react";
import { electrodeFromPosition, electrodePosition, HEART_CENTER, leadFieldAtCenter, LIMB_ELECTRODES, TORSO_RADII, type Electrode, type ForwardRecording, type LeadPlacement, type Vec3 } from "@/lib/ecg-forward-model";
import { displayGeometry, heartPoint, recordingFrame, visibleCurrents, type HeartPart } from "@/lib/ecg-forward-display";

type Props = {
  recording: ForwardRecording; placement: LeadPlacement; timeMs: number; yaw: number;
  selected: "positive" | "negative"; showCurrents: boolean; part: HeartPart;
  onPart: (part: HeartPart) => void; onMove: (electrode: Electrode) => void;
  onSelect: (selected: "positive" | "negative") => void;
};
const CHAMBERS = [
  { id: "RA", x: 198, y: 133, d: "M179 62 C147 60 131 88 143 129 L156 171 C175 192 213 184 249 169 L253 120 C246 85 197 75 179 62Z", cavity: "M177 91 C159 91 159 122 169 143 Q191 165 225 151 L225 124 Q207 98 177 91Z" },
  { id: "LA", x: 345, y: 128, d: "M294 73 C329 43 384 62 398 94 C417 131 386 175 348 176 L289 173 Q265 120 294 73Z", cavity: "M309 91 Q346 69 375 99 Q392 127 358 151 L309 147 Q288 122 309 91Z" },
  { id: "RV", x: 207, y: 258, d: "M160 182 C134 210 143 277 196 326 C223 355 260 382 307 396 C268 339 273 281 278 222 L254 183Z", cavity: "M179 203 Q156 236 192 282 Q220 320 263 348 Q244 286 252 224 L239 204Z" },
  { id: "LV", x: 350, y: 272, d: "M288 183 C341 166 397 168 419 210 C450 279 406 376 330 410 C304 421 286 392 280 348 L270 228Z", cavity: "M310 211 Q371 190 390 227 C410 279 373 351 331 376 Q305 350 305 296Z" },
] as const;
const CALLOUTS: Record<string, { x: number; y: number; anchor: "start" | "end"; label: string }> = {
  "SA node": { x: 116, y: 68, anchor: "end", label: "SA node" },
  "AV node": { x: 472, y: 158, anchor: "start", label: "AV node" },
  His: { x: 472, y: 208, anchor: "start", label: "His bundle" },
  RBB: { x: 122, y: 240, anchor: "end", label: "RBB" },
  LBB: { x: 472, y: 262, anchor: "start", label: "LBB" },
  "RV Purkinje": { x: 123, y: 359, anchor: "end", label: "RV Purkinje" },
  "LV Purkinje": { x: 472, y: 365, anchor: "start", label: "LV Purkinje" },
};
const rotate = (p: Vec3, angle: number): Vec3 => [p[0] * Math.cos(angle) + p[2] * Math.sin(angle), p[1], -p[0] * Math.sin(angle) + p[2] * Math.cos(angle)];
const surfaceColor = (voltage: number, falling: boolean) => voltage < .08 ? "#dfc4bd" : falling ? `hsl(270 46% ${86 - voltage * 27}%)` : `hsl(${40 - voltage * 18} 92% ${88 - voltage * 35}%)`;
const keyboardSelect = (event: KeyboardEvent<SVGElement>, action: () => void) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); action(); } };

function HeartSection({ recording, timeMs, showCurrents, part, onPart }: Pick<Props, "recording" | "timeMs" | "showCurrents" | "part" | "onPart">) {
  const id = useId().replaceAll(":", "");
  const geometry = useMemo(() => displayGeometry(recording.mesh), [recording.mesh]);
  const frame = recordingFrame(recording, timeMs), n = recording.mesh.cells.length;
  const currents = showCurrents ? visibleCurrents(recording, geometry.groups, frame) : [];
  const cells = recording.mesh.cells;
  return <section className="ecg-heart-pane" aria-label="심장 구조와 전류 경로">
    <header className="ecg-pane-heading"><h2>심장 구조 · 전도 경로</h2><span>전면 개념 절개도</span></header>
    <div className="ecg-heart-drawing">
      <svg viewBox="0 0 600 440" role="group" aria-label="RA, LA, RV, LV와 SA node, AV node, His bundle, bundle branches, Purkinje 연결. 부위를 누르면 설명을 볼 수 있습니다.">
        <defs>
          {CHAMBERS.map(chamber => <clipPath key={chamber.id} id={`${id}-${chamber.id}`}><path d={chamber.d}/></clipPath>)}
          <filter id={`${id}-tissue`} x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="2.2"/></filter>
          <marker id={`${id}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0 0L8 4L0 8Z" fill="#007b77"/></marker>
        </defs>
        <text x="146" y="24" className="ecg-anatomy-orientation">환자 오른쪽</text><text x="358" y="24" className="ecg-anatomy-orientation">환자 왼쪽</text>
        <path d="M169 23L169 84M309 88L307 48Q311 22 333 23L357 25M365 32L365 58" fill="none" stroke="#ceb9b9" strokeWidth="23"/>
        <path d="M169 23L169 84M309 88L307 48Q311 22 333 23L357 25" fill="none" stroke="#f6e4df" strokeWidth="15"/>
        {CHAMBERS.map(chamber => <g key={chamber.id}>
          <path d={chamber.d} fill="#dfc4bd" stroke="#ad7e77" strokeWidth="3"/>
          <g clipPath={`url(#${id}-${chamber.id})`} filter={`url(#${id}-tissue)`} pointerEvents="none">
            {geometry.columns.filter(column => column.chamber === chamber.id).map((column, index) => {
              const voltage = Math.max(...column.cells.map(cell => recording.voltage[frame * n + cell]));
              const before = Math.max(...column.cells.map(cell => recording.voltage[Math.max(0, frame - 2) * n + cell]));
              return <rect key={index} x={column.x - 12} y={column.y - 12} width="25" height="25" fill={surfaceColor(voltage, voltage < before - .001)}/>;
            })}
          </g>
          <path d={chamber.cavity} fill="#fffaf7" fillOpacity=".84" stroke="#bd9185" strokeWidth="1.3" pointerEvents="none"/>
          <path d={chamber.d} fill="transparent" stroke={part === chamber.id ? "#007b77" : "transparent"} strokeWidth="4" className="ecg-anatomy-hit" role="button" tabIndex={0} aria-label={`${chamber.id} 구조 설명`} aria-pressed={part === chamber.id} onClick={() => onPart(chamber.id)} onKeyDown={event => keyboardSelect(event, () => onPart(chamber.id))}/>
        </g>)}
        <path d="M274 184Q261 266 286 346Q300 382 324 400" fill="none" stroke="#ab7773" strokeWidth="8" opacity=".65" pointerEvents="none"/>
        <path d="M153 179L257 181M291 180L407 178" stroke="#faf8f5" strokeWidth="10" pointerEvents="none"/>
        <path d="M153 179L257 181M291 180L407 178" stroke="#987e79" strokeWidth="2" strokeDasharray="4 4" pointerEvents="none"/>
        <text x="315" y="327" transform="rotate(-78 315 327)" className="ecg-septum-label">Septum</text>
        {/* Connections come from the computational graph, not a decorative circuit. */}
        {recording.mesh.edges.filter(edge => !edge.source).map((edge, index) => {
          const a = heartPoint(cells[edge.a].position), b = heartPoint(cells[edge.b].position), blocked = edge.conductance === 0;
          return <g key={index} pointerEvents="none"><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="white" strokeWidth="7" strokeLinecap="round"/>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={blocked ? "#b91c1c" : "#9c7234"} strokeWidth="3.5" strokeLinecap="round" strokeDasharray={blocked ? "4 3" : undefined}/>
            {blocked ? <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 + 6} textAnchor="middle" fill="#b91c1c" fontSize="26" fontWeight="800">×</text> : null}
          </g>;
        })}
        {currents.map(({ index, value, edge }) => {
          const a = heartPoint(cells[value > 0 ? edge.a : edge.b].position), b = heartPoint(cells[value > 0 ? edge.b : edge.a].position);
          const width = Math.min(3.5, 1.2 + Math.sqrt(Math.abs(value)) * 9);
          return <g key={index} pointerEvents="none" data-current-edge={index} data-current={value.toFixed(5)}><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="white" strokeWidth={width + 2} strokeOpacity=".9"/><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#007b77" strokeWidth={width} markerEnd={`url(#${id}-arrow)`} strokeLinecap="round"/></g>;
        })}
        {CHAMBERS.map(chamber => <g key={chamber.id} className="ecg-anatomy-hit" role="button" tabIndex={0} aria-label={`${chamber.id} 구조 설명`} aria-pressed={part === chamber.id} onClick={() => onPart(chamber.id)} onKeyDown={event => keyboardSelect(event, () => onPart(chamber.id))}>
          <rect x={chamber.x - 26} y={chamber.y - 21} width="52" height="32" rx="8" fill="white" fillOpacity=".95" stroke={part === chamber.id ? "#007b77" : "#d3bab1"}/><text x={chamber.x} y={chamber.y + 2} textAnchor="middle" className="ecg-chamber-label">{chamber.id}</text>
        </g>)}
        {recording.mesh.landmarks.map(landmark => {
          const callout = CALLOUTS[landmark.label]; if (!callout) return null;
          const p = heartPoint(cells[landmark.index].position), active = recording.voltage[frame * n + landmark.index] > .5;
          const x = callout.anchor === "end" ? callout.x - 121 : callout.x - 8;
          return <g key={landmark.label} role="button" tabIndex={0} aria-label={`${landmark.label} 구조 설명`} aria-pressed={part === landmark.label} className="ecg-anatomy-hit" onClick={() => onPart(landmark.label as HeartPart)} onKeyDown={event => keyboardSelect(event, () => onPart(landmark.label as HeartPart))}>
            <path d={`M${p.x} ${p.y}L${callout.anchor === "end" ? 136 : 457} ${callout.y - 7}L${callout.x} ${callout.y - 7}`} fill="none" stroke="#85959d" strokeWidth="1.3"/>
            <circle cx={p.x} cy={p.y} r="6" fill={active ? "#f2ac32" : "#9c7234"} stroke="white" strokeWidth="2"/>
            <rect x={x} y={callout.y - 27} width="128" height="36" rx="6" fill={part === landmark.label ? "#d6f4ee" : "#ffffff"} stroke={part === landmark.label ? "#087f70" : "#dce4e6"}/>
            <text x={callout.x} y={callout.y - 3} textAnchor={callout.anchor} className="ecg-path-label">{callout.label}</text>
          </g>;
        })}
        <text x="340" y="435" className="ecg-anatomy-orientation">Apex</text>
      </svg>
    </div>
    <div className="ecg-heart-key"><span><i className="ecg-key-conduction"/>전도 연결</span><span><i className="ecg-key-current"/>전류 방향·크기</span><span><i className="ecg-key-active"/>흥분</span><span><i className="ecg-key-recovery"/>회복</span></div>
  </section>;
}

const TX = 160, TY = 218, SCALE = 6;
/** Orthographic ray/ellipsoid intersection of the visible positioning surface. */
function pickSurface(x: number, y: number, angle: number): Electrode | null {
  const screenX = (x - TX) / SCALE, worldY = (TY - y) / SCALE;
  const c = Math.cos(angle), s = Math.sin(angle), [rx, ry, rz] = TORSO_RADII;
  const a = s * s / (rx * rx) + c * c / (rz * rz), b = 2 * screenX * c * s * (1 / (rz * rz) - 1 / (rx * rx));
  const q = screenX * screenX * (c * c / (rx * rx) + s * s / (rz * rz)) + worldY * worldY / (ry * ry) - 1;
  const discriminant = b * b - 4 * a * q; if (discriminant < 0) return null;
  const depth = (-b + Math.sqrt(discriminant)) / (2 * a);
  return electrodeFromPosition([c * screenX - s * depth, worldY, s * screenX + c * depth]);
}

function TorsoSection({ recording, placement, timeMs, yaw, selected, onMove, onSelect }: Omit<Props, "part" | "onPart" | "showCurrents">) {
  const dragging = useRef(false), id = useId().replaceAll(":", "");
  const angle = yaw * Math.PI / 180;
  const project = (point: Vec3) => { const p = rotate(point, angle); return { x: TX + p[0] * SCALE, y: TY - p[1] * SCALE, z: p[2] }; };
  const frame = recordingFrame(recording, timeMs), p = recording.dipole.subarray(frame * 3, frame * 3 + 3);
  const dipole = rotate([p[0], p[1], p[2]], angle), field = rotate(leadFieldAtCenter(placement), angle), origin = project(HEART_CENTER);
  const coordinates = (event: PointerEvent<SVGSVGElement>) => {
    const matrix = event.currentTarget.getScreenCTM();
    return matrix ? new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse()) : null;
  };
  const move = (event: PointerEvent<SVGSVGElement>) => { const point = coordinates(event); if (!point) return; const electrode = pickSurface(point.x, point.y, angle); if (electrode) onMove(electrode); };
  return <section className="ecg-torso-pane" aria-label="전극 위치 지도">
    <header className="ecg-pane-heading"><h2>전극 위치</h2><span>{yaw === 0 ? "Anterior" : yaw === 180 ? "Posterior" : yaw === 90 ? "Lateral" : "Oblique"}</span></header>
    <svg className="ecg-torso-drawing" viewBox="0 0 320 410" role="group" tabIndex={0} aria-label="흉곽 전극 지도. 전극을 끌거나 표면을 누르세요. 방향키로 선택 전극을 움직입니다."
      onPointerDown={event => {
        const point = coordinates(event); if (!point) return;
        for (const key of ["positive", "negative"] as const) {
          if (key === "negative" && placement.reference === "wilson") continue;
          const p = project(electrodePosition(placement[key]));
          if (Math.hypot(point.x - p.x, point.y - p.y) < 24) { onSelect(key); dragging.current = true; event.currentTarget.setPointerCapture(event.pointerId); return; }
        }
        if (!pickSurface(point.x, point.y, angle)) return;
        dragging.current = true; event.currentTarget.setPointerCapture(event.pointerId); move(event);
      }}
      onPointerMove={event => { if (dragging.current) move(event); }}
      onPointerUp={event => { dragging.current = false; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      onPointerCancel={() => { dragging.current = false; }} onLostPointerCapture={() => { dragging.current = false; }}
      onKeyDown={event => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
        event.preventDefault(); const e = placement[selected], step = event.shiftKey ? 10 : 2;
        onMove({ longitude: ((e.longitude + (event.key === "ArrowRight" ? step : event.key === "ArrowLeft" ? -step : 0) + 540) % 360) - 180, latitude: Math.max(-80, Math.min(80, e.latitude + (event.key === "ArrowUp" ? step : event.key === "ArrowDown" ? -step : 0))) });
      }}>
      <defs>{["dipole", "field"].map((key, index) => <marker key={key} id={`${id}-${key}`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L8 4L0 8Z" fill={index === 0 ? "#7c3aed" : "#087f70"}/></marker>)}</defs>
      <path d="M135 25L132 60Q117 72 80 74Q46 80 34 128L20 281Q27 296 44 283L66 178L69 271L83 389L237 389L251 271L254 178L276 283Q293 296 300 281L286 128Q274 80 240 74Q203 72 188 60L185 25" fill="#f1eae5" stroke="#c5b5ac" strokeWidth="2"/>
      <ellipse cx={TX} cy={TY} rx={Math.hypot(16 * Math.cos(angle), 10 * Math.sin(angle)) * SCALE} ry={26 * SCALE} fill="#e9f1f3" fillOpacity=".92" stroke="#a6bac4" strokeWidth="1.5"/>
      {[-60, -30, 0, 30, 60].map(latitude => <path key={latitude} d={Array.from({ length: 91 }, (_, i) => { const p = project(electrodePosition({ longitude: i * 4 - 180, latitude })); return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`; }).join(" ")} fill="none" stroke="#c5d3d8" strokeWidth=".8"/>)}
      <path d={`M${origin.x - 17} ${origin.y - 15}C${origin.x - 34} ${origin.y - 30} ${origin.x - 36} ${origin.y + 4} ${origin.x + 10} ${origin.y + 28}C${origin.x + 38} ${origin.y + 3} ${origin.x + 27} ${origin.y - 31} ${origin.x - 17} ${origin.y - 15}Z`} fill="#d59a91" stroke="#aa6d66" strokeWidth="1.5"/>
      {[dipole, field].map((vector, index) => {
        const length = Math.hypot(...vector); if (length < (index === 0 ? .03 : 1e-8)) return null;
        return <line key={index} x1={origin.x} y1={origin.y} x2={origin.x + vector[0] / length * 53} y2={origin.y - vector[1] / length * 53} stroke={index === 0 ? "#7c3aed" : "#087f70"} strokeWidth="3" markerEnd={`url(#${id}-${index === 0 ? "dipole" : "field"})`}/>;
      })}
      {placement.reference === "wilson" ? Object.entries(LIMB_ELECTRODES).map(([label, electrode]) => { const p = project(electrodePosition(electrode)); return <g key={label}><circle cx={p.x} cy={p.y} r="6" fill="#64748b"/><text x={p.x + 10} y={p.y + 5} fontSize="15" fill="#334155">{label}</text></g>; }) : null}
      {(["negative", "positive"] as const).map(key => {
        if (key === "negative" && placement.reference === "wilson") return null;
        const p = project(electrodePosition(placement[key])), color = key === "positive" ? "#b42342" : "#1d4ed8";
        return <g key={key} data-electrode={key} aria-label={`${key === "positive" ? "+" : "−"} 전극${p.z < 0 ? " · 반대쪽 표면" : ""}`}><circle cx={p.x} cy={p.y} r="19" fill="white" stroke={color} strokeWidth={selected === key ? 4 : 2} strokeDasharray={p.z < 0 ? "4 3" : undefined}/><text x={p.x} y={p.y + 7} textAnchor="middle" fontSize="25" fontWeight="700" fill={color}>{key === "positive" ? "+" : "−"}</text></g>;
      })}
      <text x="47" y="49" fontSize="14" fill="#475569">{yaw === 180 ? "L" : yaw === 90 ? "" : "R"}</text><text x="262" y="49" fontSize="14" fill="#475569">{yaw === 180 ? "R" : yaw === 90 ? "" : "L"}</text>
    </svg>
    <div className="ecg-torso-key"><span>보라: 합성 dipole</span><span>초록: Lead field</span><small>길이는 방향 표시용 · 점선 전극은 반대쪽</small></div>
  </section>;
}

export function EcgForwardScene(props: Props) {
  return <div className="ecg-forward-scene"><HeartSection {...props}/><TorsoSection {...props}/></div>;
}
