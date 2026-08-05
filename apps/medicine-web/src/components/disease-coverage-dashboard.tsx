"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Grid3X3, HeartPulse } from "lucide-react";
import { loadReviewCoverage, REVIEW_CHANGE_EVENT, type ReviewCatalogItem, type ReviewCoverageItem } from "@/lib/review-store";
import { loadQbankState, QBANK_CHANGE_EVENT, type QbankProgress } from "@/lib/qbank-store";
import type { QbankQuestionIndex } from "@/lib/types";

type CoverageView = "grid" | "anatomy";
type Point = { x: number; y: number };
type Visual = { kind: string; color: string; soft: string };
const MIN_GRID_SIZE = 5;
const MAX_GRID_SIZE = 32;

const VISUALS: Record<string, Visual> = {
  "01 \uc21c\ud658\uae30": { kind: "heart", color: "#dc3545", soft: "#ffe4e6" },
  "02 \ud638\ud761\uae30": { kind: "lungs", color: "#ef476f", soft: "#ffe4e6" },
  "03 \uc18c\ud654\uae30": { kind: "stomach", color: "#f97316", soft: "#ffedd5" },
  "04 \ub0b4\ubd84\ube44": { kind: "butterfly", color: "#d946ef", soft: "#fae8ff" },
  "05 \uc2e0\uc7a5": { kind: "kidneys", color: "#b45309", soft: "#fef3c7" },
  "06 \uc54c\ub808\ub974\uae30": { kind: "shield", color: "#14b8a6", soft: "#ccfbf1" },
  "07 \ub958\ub9c8\ud2f0\uc2a4": { kind: "bone", color: "#7c3aed", soft: "#ede9fe" },
  "08 \uac10\uc5fc": { kind: "cell", color: "#16a34a", soft: "#dcfce7" },
  "09 \ud608\uc561": { kind: "drop", color: "#be123c", soft: "#ffe4e6" },
  "10 \uc885\uc591": { kind: "crab", color: "#9333ea", soft: "#f3e8ff" },
  "11 \uc678\uacfc": { kind: "knife", color: "#475569", soft: "#e2e8f0" },
  "12 \uc0b0\uacfc": { kind: "fetus", color: "#ec4899", soft: "#fce7f3" },
  "13 \ubd80\uc778\uacfc": { kind: "uterus", color: "#db2777", soft: "#fce7f3" },
  "14 \uc18c\uc544\uccad\uc18c\ub144\uacfc": { kind: "baby", color: "#0ea5e9", soft: "#e0f2fe" },
  "15 \uc815\uc2e0\uac74\uac15\uc758\ud559\uacfc": { kind: "thought", color: "#8b5cf6", soft: "#ede9fe" },
  "16 \uc2e0\uacbd\uacfc-\uc2e0\uacbd\uc678\uacfc": { kind: "neuron", color: "#6366f1", soft: "#e0e7ff" },
  "17 \uc774\ube44\uc778\ud6c4\uacfc": { kind: "ear", color: "#f59e0b", soft: "#fef3c7" },
  "18 \uc548\uacfc": { kind: "eye", color: "#0284c7", soft: "#e0f2fe" },
  "19 \ud53c\ubd80\uacfc": { kind: "skin", color: "#ea580c", soft: "#ffedd5" },
  "20 \ube44\ub1e8\uae30\uacfc": { kind: "toilet", color: "#0891b2", soft: "#cffafe" },
  "21 \uc751\uae09\uc758\ud559": { kind: "cross", color: "#e11d48", soft: "#ffe4e6" },
  "22 \uc815\ud615\uc678\uacfc": { kind: "bone", color: "#64748b", soft: "#f1f5f9" },
};

function hash(value: string) {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function ellipse(x: number, y: number, cx: number, cy: number, rx: number, ry: number) {
  return ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;
}

function segment(x: number, y: number, ax: number, ay: number, bx: number, by: number, width: number) {
  const dx = bx - ax;
  const dy = by - ay;
  const length = dx * dx + dy * dy;
  const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / length));
  return Math.hypot(x - ax - t * dx, y - ay - t * dy) < width;
}

function inShape(kind: string, x: number, y: number, size: number) {
  const center = (size - 1) / 2;
  const nx = (x - center) / center;
  const ny = (y - center) / center;
  const r = Math.hypot(nx, ny);
  const a = Math.atan2(ny, nx);
  if (kind === "heart") {
    const hx = nx * 1.12;
    const hy = -(ny + 0.08) * 1.08;
    return (hx * hx + hy * hy - 0.62) ** 3 - hx * hx * hy ** 3 <= 0;
  }
  if (kind === "lungs") return ellipse(nx, ny, -0.38, 0.1, 0.34, 0.72) || ellipse(nx, ny, 0.38, 0.1, 0.34, 0.72) || (Math.abs(nx) < 0.1 && ny < -0.25);
  if (kind === "stomach") return (ellipse(nx, ny, -0.16, 0.1, 0.6, 0.68) && !(nx > 0.15 && ny < -0.18)) || segment(nx, ny, -0.15, -0.95, -0.15, -0.43, 0.13) || segment(nx, ny, 0.22, 0.56, 0.76, 0.65, 0.14);
  if (kind === "butterfly") return ellipse(nx, ny, -0.36, 0, 0.4, 0.58) || ellipse(nx, ny, 0.36, 0, 0.4, 0.58) || (Math.abs(nx) < 0.17 && Math.abs(ny) < 0.25);
  if (kind === "kidneys") return (ellipse(nx, ny, -0.43, 0, 0.36, 0.62) && !ellipse(nx, ny, -0.22, 0, 0.2, 0.27)) || (ellipse(nx, ny, 0.43, 0, 0.36, 0.62) && !ellipse(nx, ny, 0.22, 0, 0.2, 0.27));
  if (kind === "shield") return ny > -0.82 && ny < 0.82 && Math.abs(nx) < 0.78 - Math.max(0, ny + 0.05) * 0.45;
  if (kind === "cell") return r < 0.64 || (r > 0.7 && r < 0.92 && Math.cos(a * 8) > 0.35);
  if (kind === "crab") return ellipse(nx, ny, 0, 0.1, 0.56, 0.4) || segment(nx, ny, -0.38, 0.1, -0.94, -0.18, 0.09) || segment(nx, ny, -0.38, 0.2, -0.92, 0.48, 0.09) || segment(nx, ny, 0.38, 0.1, 0.94, -0.18, 0.09) || segment(nx, ny, 0.38, 0.2, 0.92, 0.48, 0.09) || ellipse(nx, ny, -0.9, -0.25, 0.16, 0.16) || ellipse(nx, ny, 0.9, -0.25, 0.16, 0.16);
  if (kind === "drop") return ellipse(nx, ny, 0, 0.18, 0.62, 0.66) || (ny < -0.3 && Math.abs(nx) < -ny - 0.18);
  if (kind === "knife") return segment(nx, ny, -0.78, 0.7, 0.12, -0.2, 0.18) || segment(nx, ny, 0.1, -0.22, 0.76, -0.88, 0.13) || (nx > 0.36 && ny < -0.38 && ny > -0.92);
  if (kind === "fetus") return ellipse(nx, ny, 0.2, -0.35, 0.32, 0.32) || (r > 0.34 && r < 0.72 && a > -0.15 && a < 2.85) || ellipse(nx, ny, 0.2, 0.35, 0.38, 0.3);
  if (kind === "uterus") return ellipse(nx, ny, 0, 0.25, 0.48, 0.5) || segment(nx, ny, -0.75, -0.55, -0.28, -0.18, 0.14) || segment(nx, ny, 0.75, -0.55, 0.28, -0.18, 0.14) || ellipse(nx, ny, -0.78, -0.58, 0.2, 0.18) || ellipse(nx, ny, 0.78, -0.58, 0.2, 0.18);
  if (kind === "baby") return ellipse(nx, ny, 0, -0.18, 0.65, 0.62) || ellipse(nx, ny, -0.72, -0.15, 0.18, 0.22) || ellipse(nx, ny, 0.72, -0.15, 0.18, 0.22) || (Math.abs(nx) < 0.32 && ny > 0.38 && ny < 0.84);
  if (kind === "thought") return ellipse(nx, ny, -0.28, -0.16, 0.48, 0.42) || ellipse(nx, ny, 0.24, -0.22, 0.54, 0.48) || ellipse(nx, ny, 0.48, 0.13, 0.3, 0.32) || ellipse(nx, ny, -0.54, 0.16, 0.26, 0.28) || ellipse(nx, ny, -0.08, 0.62, 0.13, 0.13) || ellipse(nx, ny, -0.31, 0.84, 0.08, 0.08);
  if (kind === "neuron") return ellipse(nx, ny, 0, -0.04, 0.3, 0.3) || segment(nx, ny, 0, 0.18, 0, 0.9, 0.09) || segment(nx, ny, -0.12, -0.1, -0.86, -0.68, 0.07) || segment(nx, ny, 0.12, -0.1, 0.84, -0.64, 0.07) || segment(nx, ny, -0.2, 0.04, -0.9, 0.38, 0.07) || segment(nx, ny, 0.2, 0.04, 0.9, 0.4, 0.07) || ellipse(nx, ny, -0.9, -0.68, 0.12, 0.12) || ellipse(nx, ny, 0.84, -0.64, 0.12, 0.12);
  if (kind === "ear") return ellipse(nx, ny, 0, 0, 0.62, 0.82) && !ellipse(nx, ny, 0.08, 0, 0.28, 0.48);
  if (kind === "eye") return Math.abs(nx) < 0.92 && Math.abs(ny) < 0.62 * (1 - nx * nx) + 0.05 && (r > 0.26 || r < 0.13);
  if (kind === "skin") return Math.abs(nx) < 0.85 && ny > -0.65 + 0.08 * Math.sin(nx * 10) && ny < 0.65;
  if (kind === "toilet") return (nx > -0.82 && nx < -0.12 && ny > -0.78 && ny < -0.28) || ellipse(nx, ny, 0.1, 0.08, 0.68, 0.45) || (nx > -0.1 && nx < 0.54 && ny > 0.3 && ny < 0.72) || (nx > 0.22 && nx < 0.56 && ny > 0.66 && ny < 0.9);
  if (kind === "cross") return (Math.abs(nx) < 0.27 && Math.abs(ny) < 0.86) || (Math.abs(ny) < 0.27 && Math.abs(nx) < 0.86);
  if (kind === "bone") return segment(nx, ny, -0.55, 0.55, 0.55, -0.55, 0.18) || ellipse(nx, ny, -0.62, 0.62, 0.3, 0.27) || ellipse(nx, ny, 0.62, -0.62, 0.3, 0.27);
  return r < 0.75;
}

function shapePoints(kind: string, size: number) {
  const points: Point[] = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (inShape(kind, x, y, size)) points.push({ x, y });
    }
  }
  return points;
}

function trimToCount(kind: string, source: Point[], count: number) {
  const points = [...source];
  let iteration = 0;
  while (points.length > count) {
    const occupied = new Set(points.map((point) => `${point.x}:${point.y}`));
    const boundary = points.filter((point) =>
      !occupied.has(`${point.x - 1}:${point.y}`)
      || !occupied.has(`${point.x + 1}:${point.y}`)
      || !occupied.has(`${point.x}:${point.y - 1}`)
      || !occupied.has(`${point.x}:${point.y + 1}`),
    );
    const removable = boundary.length > 0 ? boundary : points;
    removable.sort((left, right) => hash(`${kind}:${right.x}:${right.y}:${iteration}`) - hash(`${kind}:${left.x}:${left.y}:${iteration}`));
    const selected = removable[0];
    const index = points.findIndex((point) => point.x === selected.x && point.y === selected.y);
    points.splice(index, 1);
    iteration += 1;
  }
  return points.sort((left, right) => left.y - right.y || left.x - right.x);
}

function artFor(kind: string, count: number) {
  let size = MIN_GRID_SIZE;
  let points = shapePoints(kind, size);
  while (points.length < count && size < MAX_GRID_SIZE) {
    size += 1;
    points = shapePoints(kind, size);
  }
  if (points.length < count) {
    const occupied = new Set(points.map((point) => `${point.x}:${point.y}`));
    const extras = Array.from({ length: size * size }, (_, index) => ({ x: index % size, y: Math.floor(index / size) }))
      .filter((point) => !occupied.has(`${point.x}:${point.y}`))
      .sort((left, right) => hash(`${kind}:${left.x}:${left.y}`) - hash(`${kind}:${right.x}:${right.y}`));
    points = [...points, ...extras.slice(0, count - points.length)];
  }
  const pixelSize = Math.max(6, Math.min(11, Math.floor(168 / size)));
  return { points: trimToCount(kind, points, count), size, pixelSize };
}

function detail(stat?: ReviewCoverageItem) {
  if (!stat) return "\uc544\uc9c1 \ubcf4\uc9c0 \uc54a\uc74c";
  const date = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "short", day: "numeric" }).format(new Date(stat.lastViewedAt));
  return `${date} · ${stat.viewCount}\uc77c \uc5f4\ub78c`;
}

function groupBySpecialty(items: ReviewCatalogItem[]) {
  const grouped = new Map<string, ReviewCatalogItem[]>();
  for (const item of items) {
    const specialties = [...new Set((item.categories?.length ? item.categories : [item.category]).filter(Boolean))];
    for (const specialty of specialties) grouped.set(specialty, [...(grouped.get(specialty) ?? []), item]);
  }
  return [...grouped.entries()]
    .map(([name, groupItems]) => ({
      name,
      items: [...groupItems].sort((left, right) => {
        const leftRank = left.category === name ? 0 : 1;
        const rightRank = right.category === name ? 0 : 1;
        return leftRank - rightRank || left.title.localeCompare(right.title, "ko");
      }),
    }))
    .sort((left, right) => {
      const leftOrder = Number(left.name.match(/^\d+/)?.[0] ?? Number.MAX_SAFE_INTEGER);
      const rightOrder = Number(right.name.match(/^\d+/)?.[0] ?? Number.MAX_SAFE_INTEGER);
      return leftOrder - rightOrder || left.name.localeCompare(right.name, "ko");
    });
}

function groupQuestionsBySpecialty(questions: QbankQuestionIndex[]) {
  const grouped = new Map<string, QbankQuestionIndex[]>();
  for (const question of questions) grouped.set(question.specialty, [...(grouped.get(question.specialty) ?? []), question]);
  return [...grouped.entries()]
    .map(([name, items]) => ({ name, items: [...items].sort((left, right) => left.id.localeCompare(right.id)) }))
    .sort((left, right) => {
      const leftOrder = Number(left.name.match(/^\d+/)?.[0] ?? Number.MAX_SAFE_INTEGER);
      const rightOrder = Number(right.name.match(/^\d+/)?.[0] ?? Number.MAX_SAFE_INTEGER);
      return leftOrder - rightOrder || left.name.localeCompare(right.name, "ko");
    });
}

function Pixel({ item, stat, color, size = 13 }: { item: ReviewCatalogItem; stat?: ReviewCoverageItem; color: string; size?: number }) {
  return <Link href={item.href} className="block border border-white/70 transition hover:z-10 hover:scale-150 hover:border-slate-900 focus:z-10 focus:scale-150 focus:outline-none focus:ring-2 focus:ring-teal-500" style={{ width: size, height: size, backgroundColor: stat ? color : "#cbd5e1", borderRadius: 2 }} title={`${item.title} · ${detail(stat)}`} aria-label={`${item.title}, ${detail(stat)}`} />;
}

function GridView({ groups, coverage }: { groups: ReturnType<typeof groupBySpecialty>; coverage: Record<string, ReviewCoverageItem> }) {
  return <div className="grid gap-4 lg:grid-cols-2">{groups.map((group) => {
    const visual = VISUALS[group.name] ?? { kind: "circle", color: "#0f766e", soft: "#ccfbf1" };
    const viewed = group.items.filter((item) => coverage[`disease|${item.id}`]).length;
    const columns = Math.max(6, Math.ceil(Math.sqrt(group.items.length * 1.75)));
    return <article key={group.name} className="rounded-lg border border-slate-200 bg-white p-4"><header className="mb-3 flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-2"><span className="h-3 w-3 shrink-0 rounded-sm" style={{ backgroundColor: visual.color }} /><h3 className="truncate text-sm font-semibold text-slate-900">{group.name}</h3></div><span className="shrink-0 text-xs font-medium text-slate-500">{viewed} / {group.items.length}</span></header><div className="overflow-x-auto pb-1"><div className="grid w-max gap-1" style={{ gridTemplateColumns: `repeat(${columns}, 13px)` }}>{group.items.map((item) => <Pixel key={item.id} item={item} stat={coverage[`disease|${item.id}`]} color={visual.color} />)}</div></div></article>;
  })}</div>;
}

function QbankPixel({ item, progress, color, size = 13 }: { item: QbankQuestionIndex; progress?: QbankProgress; color: string; size?: number }) {
  const backgroundColor = !progress?.attempts ? "#cbd5e1" : progress.lastCorrect ? color : "#fb7185";
  const status = !progress?.attempts ? "\ubbf8\ud480\uc774" : progress.lastCorrect ? "\uc815\ub2f5" : "\uc624\ub2f5";
  return <div className="border border-white/70" style={{ width: size, height: size, backgroundColor, borderRadius: 2 }} title={`${item.id} · ${status}`} aria-label={`${item.id}, ${status}`} />;
}

function AnatomyView({ groups, progress }: { groups: ReturnType<typeof groupQuestionsBySpecialty>; progress: Record<string, QbankProgress> }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{groups.map((group) => {
    const visual = VISUALS[group.name] ?? { kind: "circle", color: "#0f766e", soft: "#ccfbf1" };
    const art = artFor(visual.kind, group.items.length);
    const attempted = group.items.filter((item) => (progress[item.id]?.attempts ?? 0) > 0).length;
    return <article key={group.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><header className="flex items-start justify-between gap-3"><div><h3 className="text-sm font-semibold text-slate-900">{group.name}</h3><p className="mt-1 text-xs text-slate-500">{"\ubb38\ud56d \ud558\ub098\uac00 \ud53d\uc140 \ud558\ub098\ub97c \ucc44\uc6c1\ub2c8\ub2e4."}</p></div><span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ color: visual.color, backgroundColor: visual.soft }}>{attempted} / {group.items.length}</span></header><div className="mt-4 flex min-h-48 items-center justify-center rounded-lg border border-slate-100 bg-slate-50/80 p-3"><div className="relative" style={{ width: art.size * art.pixelSize, height: art.size * art.pixelSize }}>{group.items.map((item, index) => { const point = art.points[index]; return <div key={item.id} className="absolute" style={{ left: point.x * art.pixelSize, top: point.y * art.pixelSize }}><QbankPixel item={item} progress={progress[item.id]} color={visual.color} size={art.pixelSize} /></div>; })}</div></div><div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500"><span className="inline-flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-slate-300" />{"\ubbf8\ud480\uc774"}</span><span className="inline-flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: visual.color }} />{"\uc815\ub2f5"}</span><span className="inline-flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-rose-400" />{"\uc624\ub2f5"}</span></div></article>;
  })}</div>;
}
export function DiseaseCoverageDashboard({ catalog, questions }: { catalog: ReviewCatalogItem[]; questions: QbankQuestionIndex[] }) {
  const diseases = useMemo(() => catalog.filter((item) => item.type === "disease"), [catalog]);
  const groups = useMemo(() => groupBySpecialty(diseases), [diseases]);
  const questionGroups = useMemo(() => groupQuestionsBySpecialty(questions), [questions]);
  const [coverage, setCoverage] = useState<Record<string, ReviewCoverageItem>>({});
  const [qbankProgress, setQbankProgress] = useState<Record<string, QbankProgress>>({});
  const [view, setView] = useState<CoverageView>("grid");
  useEffect(() => {
    const refresh = () => setCoverage(loadReviewCoverage(diseases));
    refresh();
    window.addEventListener(REVIEW_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(REVIEW_CHANGE_EVENT, refresh);
  }, [diseases]);
  useEffect(() => {
    const refresh = () => setQbankProgress(loadQbankState().progress);
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);

  const viewed = diseases.filter((item) => coverage[`disease|${item.id}`]).length;
  const percentage = diseases.length > 0 ? Math.round((viewed / diseases.length) * 100) : 0;
  const completed = groups.filter((group) => group.items.every((item) => coverage[`disease|${item.id}`])).length;
  const attempted = questions.filter((item) => (qbankProgress[item.id]?.attempts ?? 0) > 0).length;
  const correct = questions.filter((item) => qbankProgress[item.id]?.lastCorrect).length;
  const qbankRate = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const completedQuestionSpecialties = questionGroups.filter((group) => group.items.every((item) => (qbankProgress[item.id]?.attempts ?? 0) > 0)).length;
  const isGrid = view === "grid";

  return <section className="surface p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex items-center gap-2 text-sm font-semibold text-teal-800"><HeartPulse className="h-5 w-5" />{isGrid ? "\uc9c8\ubcd1 \uc5f4\ub78c \ud604\ud669" : "QBank \ud480\uc774 \ud604\ud669"}</div><h2 className="mt-2 text-xl font-semibold text-slate-950">{isGrid ? "\uc9c8\ubcd1 \ud53d\uc140 \uceec\ub809\uc158" : "\ubb38\ud56d \ud53d\uc140 \ud574\ubd80\ub3c4"}</h2><p className="mt-1 text-sm text-slate-600">{isGrid ? "\uc9c8\ubcd1 \ud398\uc774\uc9c0 \ud558\ub098\uac00 \uce78 \ud558\ub098\uc5d0 \ub300\uc751\ud569\ub2c8\ub2e4. \uce78\uc744 \ub204\ub974\uba74 \ud574\ub2f9 \uc9c8\ubcd1\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4." : "\ubd84\uacfc\ubcc4 QBank \ubb38\ud56d\uc744 \uc8fc \ubd84\uacfc \uae30\uc900\uc73c\ub85c \ubc30\uc815\ud574 \uc7a5\uae30 \ubaa8\uc591\uc744 \ucc44\uc6c1\ub2c8\ub2e4."}</p></div><div className="grid grid-cols-3 gap-5 text-right text-sm"><div><div className="text-xs text-slate-500">{isGrid ? "\uc5f4\ub78c" : "\ud480\uc774"}</div><div className="font-semibold">{isGrid ? `${viewed} / ${diseases.length}` : `${attempted} / ${questions.length}`}</div></div><div><div className="text-xs text-slate-500">{isGrid ? "\uc9c4\ud589\ub960" : "\uc815\ub2f5\ub960"}</div><div className="font-semibold">{isGrid ? `${percentage}%` : `${qbankRate}%`}</div></div><div><div className="text-xs text-slate-500">{"\uc644\ub8cc \ubd84\uacfc"}</div><div className="font-semibold">{isGrid ? `${completed} / ${groups.length}` : `${completedQuestionSpecialties} / ${questionGroups.length}`}</div></div></div></div><div className="mt-5 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1" role="tablist" aria-label="\uc9c8\ubcd1 \uc5f4\ub78c \ubc0f QBank \ud480\uc774 \ud604\ud669 \ubcf4\uae30"><button type="button" role="tab" aria-selected={isGrid} onClick={() => setView("grid")} className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${isGrid ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}><Grid3X3 className="h-4 w-4" />{"\ubd84\uacfc\ubcc4 \uaca9\uc790"}</button><button type="button" role="tab" aria-selected={!isGrid} onClick={() => setView("anatomy")} className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${!isGrid ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}><HeartPulse className="h-4 w-4" />{"\ud574\ubd80\ub3c4"}</button></div><div className="mt-5">{isGrid ? <GridView groups={groups} coverage={coverage} /> : <AnatomyView groups={questionGroups} progress={qbankProgress} />}</div></section>;
}