"use client";

import type { KeyboardEvent } from "react";
import type { NeuroAtlasLayer } from "@/components/native-neuro-atlas";

type Props = {
  layer: NeuroAtlasLayer;
  pathwayId?: string;
  selectedId?: string;
  hoveredId?: string;
  onSelect: (id: string) => void;
  onHover: (id?: string) => void;
};

type Callout = { id: string; en: string; ko: string; anchor: [number, number]; elbow: [number, number]; label: [number, number]; width?: number };

// Annotation-first trial: only representative points are marked. No polygon is
// presented as an anatomical boundary when the raster illustration does not
// provide a trustworthy structure contour.
const CALLOUTS: Callout[] = [
  { id: "frontal-lobe", en: "Frontal lobe", ko: "전두엽", anchor: [364, 274], elbow: [310, 188], label: [56, 142] },
  { id: "cingulate-gyrus", en: "Cingulate gyrus", ko: "대상회", anchor: [630, 346], elbow: [404, 280], label: [56, 255] },
  { id: "temporal-lobe", en: "Medial temporal surface", ko: "내측 측두면", anchor: [420, 544], elbow: [314, 416], label: [56, 368], width: 250 },
  { id: "optic-chiasm", en: "Optic chiasm", ko: "시신경교차", anchor: [577, 520], elbow: [420, 555], label: [56, 481] },
  { id: "hypothalamus", en: "Hypothalamus", ko: "시상하부", anchor: [646, 500], elbow: [510, 665], label: [56, 594] },
  { id: "medulla", en: "Medulla", ko: "연수", anchor: [798, 824], elbow: [670, 884], label: [390, 932] },
  { id: "parietal-lobe", en: "Parietal lobe", ko: "두정엽", anchor: [846, 214], elbow: [1036, 172], label: [1115, 118] },
  { id: "occipital-lobe", en: "Occipital lobe", ko: "후두엽", anchor: [1082, 395], elbow: [1090, 330], label: [1115, 231] },
  { id: "corpus-callosum", en: "Corpus callosum", ko: "뇌량", anchor: [672, 407], elbow: [934, 458], label: [1115, 344] },
  { id: "thalamus", en: "Thalamus", ko: "시상", anchor: [690, 455], elbow: [922, 561], label: [1115, 457] },
  { id: "midbrain", en: "Midbrain", ko: "중뇌", anchor: [720, 566], elbow: [925, 666], label: [1115, 570] },
  { id: "pons", en: "Pons", ko: "교뇌", anchor: [697, 640], elbow: [924, 771], label: [1115, 683] },
  { id: "cerebellum", en: "Cerebellum", ko: "소뇌", anchor: [984, 661], elbow: [1087, 860], label: [1115, 796] },
];

const PATHWAY_IDS: Record<string, string[]> = {
  corticospinal: ["frontal-lobe", "midbrain", "pons", "medulla"],
  corticobulbar: ["frontal-lobe", "midbrain", "pons", "medulla"],
  dcml: ["thalamus", "medulla"],
  spinothalamic: ["thalamus", "midbrain", "pons", "medulla"],
  visual: ["thalamus", "optic-chiasm"],
  "pupil-pathway": ["optic-chiasm", "midbrain"],
  sympathetic: ["hypothalamus", "midbrain", "pons", "medulla"],
  parasympathetic: ["midbrain", "pons", "medulla"],
};

function Label({ item, active, onSelect, onHover }: { item: Callout; active: boolean; onSelect: (id: string) => void; onHover: (id?: string) => void }) {
  const [anchorX, anchorY] = item.anchor;
  const [elbowX, elbowY] = item.elbow;
  const [labelX, labelY] = item.label;
  const width = item.width ?? 220;
  const labelToRight = labelX > anchorX;
  const edgeX = labelToRight ? labelX : labelX + width;
  const lineColor = active ? "#08776e" : "#57777b";
  const activate = () => onSelect(item.id);
  const onKeyDown = (event: KeyboardEvent<SVGGElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } };
  return <g tabIndex={0} role="button" aria-label={item.en + " · " + item.ko} onMouseEnter={() => onHover(item.id)} onMouseLeave={() => onHover()} onFocus={() => onHover(item.id)} onBlur={() => onHover()} onClick={activate} onKeyDown={onKeyDown} className="cursor-pointer outline-none">
    <path d={"M" + anchorX + " " + anchorY + " L" + elbowX + " " + elbowY + " L" + edgeX + " " + (labelY + 33)} fill="none" stroke={lineColor} strokeWidth={active ? 5 : 3} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx={anchorX} cy={anchorY} r={active ? 12 : 9} fill={active ? "#0d9488" : "#fff"} stroke="#08776e" strokeWidth="4" />
    <rect x={labelX} y={labelY} width={width} height="66" rx="13" fill="white" fillOpacity=".96" stroke={active ? "#08776e" : "#b5e8e1"} strokeWidth={active ? 4 : 2} />
    <text x={labelX + 15} y={labelY + 28} fill="#0f172a" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">{item.en}</text>
    <text x={labelX + 15} y={labelY + 50} fill="#475569" fontSize="15" fontFamily="system-ui, sans-serif">{item.ko}</text>
  </g>;
}

export function MidsagittalMaskAtlas({ pathwayId, selectedId, hoveredId, onSelect, onHover }: Props) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pathway = pathwayId ? PATHWAY_IDS[pathwayId] ?? [] : [];
  return <div className="relative h-full w-full select-none" role="img" aria-label="Cerebrum midsagittal interactive atlas">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={basePath + "/neuro-atlas/illustrations/brain-midsagittal.png"} alt="" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
    <svg viewBox="0 0 1440 1080" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">{CALLOUTS.map((item) => <Label key={item.id} item={item} active={selectedId === item.id || hoveredId === item.id || pathway.includes(item.id)} onSelect={onSelect} onHover={onHover} />)}</svg>
  </div>;
}
