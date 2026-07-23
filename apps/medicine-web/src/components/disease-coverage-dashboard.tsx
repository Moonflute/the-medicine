"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Grid3X3, HeartPulse } from "lucide-react";
import { loadReviewCoverage, REVIEW_CHANGE_EVENT, type ReviewCatalogItem, type ReviewCoverageItem } from "@/lib/review-store";

type CoverageView = "grid" | "anatomy";
type Point = { x: number; y: number };
type Visual = { kind: string; color: string; soft: string };
const SIZE = 24;

const VISUALS: Record<string, Visual> = {
  "01 ???": { kind: "heart", color: "#dc3545", soft: "#ffe4e6" },
  "02 ???": { kind: "lungs", color: "#ef476f", soft: "#ffe4e6" },
  "03 ???": { kind: "digestive", color: "#f97316", soft: "#ffedd5" },
  "04 ???": { kind: "butterfly", color: "#d946ef", soft: "#fae8ff" },
  "05 ??": { kind: "kidneys", color: "#b45309", soft: "#fef3c7" },
  "06 ????": { kind: "shield", color: "#14b8a6", soft: "#ccfbf1" },
  "07 ????": { kind: "bone", color: "#7c3aed", soft: "#ede9fe" },
  "08 ??": { kind: "cell", color: "#16a34a", soft: "#dcfce7" },
  "09 ??": { kind: "drop", color: "#be123c", soft: "#ffe4e6" },
  "10 ??": { kind: "cell", color: "#9333ea", soft: "#f3e8ff" },
  "11 ??": { kind: "scalpel", color: "#475569", soft: "#e2e8f0" },
  "12 ??": { kind: "fetus", color: "#ec4899", soft: "#fce7f3" },
  "13 ???": { kind: "uterus", color: "#db2777", soft: "#fce7f3" },
  "14 ??????": { kind: "child", color: "#0ea5e9", soft: "#e0f2fe" },
  "15 ???????": { kind: "mind", color: "#8b5cf6", soft: "#ede9fe" },
  "16 ???-????": { kind: "brain", color: "#6366f1", soft: "#e0e7ff" },
  "17 ?????": { kind: "ear", color: "#f59e0b", soft: "#fef3c7" },
  "18 ??": { kind: "eye", color: "#0284c7", soft: "#e0f2fe" },
  "19 ???": { kind: "skin", color: "#ea580c", soft: "#ffedd5" },
  "20 ????": { kind: "bladder", color: "#0891b2", soft: "#cffafe" },
  "21 ????": { kind: "cross", color: "#e11d48", soft: "#ffe4e6" },
  "22 ????": { kind: "bone", color: "#64748b", soft: "#f1f5f9" },
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

function inShape(kind: string, x: number, y: number) {
  const nx = (x - 11.5) / 11.5;
  const ny = (y - 11.5) / 11.5;
  const r = Math.hypot(nx, ny);
  const a = Math.atan2(ny, nx);
  if (kind === "heart") {
    const hx = nx * 1.12;
    const hy = -(ny + 0.08) * 1.08;
    return (hx * hx + hy * hy - 0.62) ** 3 - hx * hx * hy ** 3 <= 0;
  }
  if (kind === "lungs") return ellipse(nx, ny, -0.38, 0.1, 0.34, 0.72) || ellipse(nx, ny, 0.38, 0.1, 0.34, 0.72) || (Math.abs(nx) < 0.1 && ny < -0.25);
  if (kind === "digestive") return ellipse(nx, ny, -0.28, -0.43, 0.48, 0.36) || (Math.abs(nx) < 0.72 && ny > -0.18 && ny < 0.75 && (Math.abs(nx) > 0.43 || Math.abs(ny - 0.28) > 0.17 || Math.sin((nx + 1) * 12) > 0.45));
  if (kind === "butterfly") return ellipse(nx, ny, -0.36, 0, 0.4, 0.58) || ellipse(nx, ny, 0.36, 0, 0.4, 0.58) || (Math.abs(nx) < 0.17 && Math.abs(ny) < 0.25);
  if (kind === "kidneys") return (ellipse(nx, ny, -0.43, 0, 0.36, 0.62) && !ellipse(nx, ny, -0.22, 0, 0.2, 0.27)) || (ellipse(nx, ny, 0.43, 0, 0.36, 0.62) && !ellipse(nx, ny, 0.22, 0, 0.2, 0.27));
  if (kind === "shield") return ny > -0.82 && ny < 0.82 && Math.abs(nx) < 0.78 - Math.max(0, ny + 0.05) * 0.45;
  if (kind === "cell") return r < 0.64 || (r > 0.7 && r < 0.92 && Math.cos(a * 8) > 0.35);
  if (kind === "drop") return ellipse(nx, ny, 0, 0.18, 0.62, 0.66) || (ny < -0.3 && Math.abs(nx) < -ny - 0.18);
  if (kind === "scalpel") return segment(nx, ny, -0.7, 0.72, 0.6, -0.6, 0.16) || (nx > 0.3 && ny < -0.3 && nx + ny < 0.2);
  if (kind === "fetus") return ellipse(nx, ny, 0.2, -0.35, 0.32, 0.32) || (r > 0.34 && r < 0.72 && a > -0.15 && a < 2.85) || ellipse(nx, ny, 0.2, 0.35, 0.38, 0.3);
  if (kind === "uterus") return ellipse(nx, ny, 0, 0.25, 0.48, 0.5) || segment(nx, ny, -0.75, -0.55, -0.28, -0.18, 0.14) || segment(nx, ny, 0.75, -0.55, 0.28, -0.18, 0.14) || ellipse(nx, ny, -0.78, -0.58, 0.2, 0.18) || ellipse(nx, ny, 0.78, -0.58, 0.2, 0.18);
  if (kind === "child") return ellipse(nx, ny, 0, -0.62, 0.3, 0.28) || (Math.abs(nx) < 0.38 && ny > -0.38 && ny < 0.35) || segment(nx, ny, -0.25, -0.2, -0.75, 0.25, 0.13) || segment(nx, ny, 0.25, -0.2, 0.75, 0.25, 0.13) || segment(nx, ny, -0.18, 0.25, -0.42, 0.85, 0.15) || segment(nx, ny, 0.18, 0.25, 0.42, 0.85, 0.15);
  if (kind === "mind") return ellipse(nx, ny, -0.15, 0.05, 0.62, 0.78) || ellipse(nx, ny, 0.55, -0.55, 0.28, 0.24) || ellipse(nx, ny, 0.82, -0.82, 0.14, 0.12);
  if (kind === "brain") return ellipse(nx, ny, 0, 0, 0.82, 0.62) && !(Math.abs(nx) < 0.06 && ny > 0.15);
  if (kind === "ear") return ellipse(nx, ny, 0, 0, 0.62, 0.82) && !ellipse(nx, ny, 0.08, 0, 0.28, 0.48);
  if (kind === "eye") return Math.abs(nx) + 0.9 * ny * ny < 0.92 && (r > 0.23 || r < 0.14);
  if (kind === "skin") return Math.abs(nx) < 0.85 && ny > -0.65 + 0.08 * Math.sin(nx * 10) && ny < 0.65;
  if (kind === "bladder") return ellipse(nx, ny, 0, 0.12, 0.62, 0.55) || (Math.abs(nx) < 0.13 && ny > 0.52 && ny < 0.92);
  if (kind === "cross") return (Math.abs(nx) < 0.27 && Math.abs(ny) < 0.86) || (Math.abs(ny) < 0.27 && Math.abs(nx) < 0.86);
  if (kind === "bone") return segment(nx, ny, -0.55, 0.55, 0.55, -0.55, 0.18) || ellipse(nx, ny, -0.62, 0.62, 0.3, 0.27) || ellipse(nx, ny, 0.62, -0.62, 0.3, 0.27);
  return r < 0.75;
}

function pointsFor(kind: string, count: number) {
  const candidates: Point[] = [];
  for (let y = 0; y < SIZE; y += 1) for (let x = 0; x < SIZE; x += 1) if (inShape(kind, x, y)) candidates.push({ x, y });
  const pool = candidates.length >= count ? candidates : Array.from({ length: SIZE * SIZE }, (_, index) => ({ x: index % SIZE, y: Math.floor(index / SIZE) }));
  return pool.map((point) => ({ point, rank: hash(`${kind}:${point.x}:${point.y}`) })).sort((left, right) => left.rank - right.rank).slice(0, count).map(({ point }) => point).sort((left, right) => left.y - right.y || left.x - right.x);
}

function detail(stat?: ReviewCoverageItem) {
  if (!stat) return "?? ?? ??";
  const date = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "short", day: "numeric" }).format(new Date(stat.lastViewedAt));
  return `${date} ? ${stat.viewCount}? ??`;
}

function groupBySpecialty(items: ReviewCatalogItem[]) {
  const grouped = new Map<string, ReviewCatalogItem[]>();
  for (const item of items) grouped.set(item.category, [...(grouped.get(item.category) ?? []), item]);
  return [...grouped.entries()].map(([name, groupItems]) => ({ name, items: groupItems }));
}

function Pixel({ item, stat, color, size = 13 }: { item: ReviewCatalogItem; stat?: ReviewCoverageItem; color: string; size?: number }) {
  return <Link href={item.href} className="block border border-white/70 transition hover:z-10 hover:scale-150 hover:border-slate-900 focus:z-10 focus:scale-150 focus:outline-none focus:ring-2 focus:ring-teal-500" style={{ width: size, height: size, backgroundColor: stat ? color : "#cbd5e1", borderRadius: 2 }} title={`${item.title} ? ${detail(stat)}`} aria-label={`${item.title}, ${detail(stat)}`} />;
}

function GridView({ groups, coverage }: { groups: ReturnType<typeof groupBySpecialty>; coverage: Record<string, ReviewCoverageItem> }) {
  return <div className="grid gap-4 lg:grid-cols-2">{groups.map((group) => {
    const visual = VISUALS[group.name] ?? { kind: "circle", color: "#0f766e", soft: "#ccfbf1" };
    const viewed = group.items.filter((item) => coverage[`disease|${item.id}`]).length;
    const columns = Math.max(6, Math.ceil(Math.sqrt(group.items.length * 1.75)));
    return <article key={group.name} className="rounded-lg border border-slate-200 bg-white p-4"><header className="mb-3 flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-2"><span className="h-3 w-3 shrink-0 rounded-sm" style={{ backgroundColor: visual.color }} /><h3 className="truncate text-sm font-semibold text-slate-900">{group.name}</h3></div><span className="shrink-0 text-xs font-medium text-slate-500">{viewed} / {group.items.length}</span></header><div className="overflow-x-auto pb-1"><div className="grid w-max gap-1" style={{ gridTemplateColumns: `repeat(${columns}, 13px)` }}>{group.items.map((item) => <Pixel key={item.id} item={item} stat={coverage[`disease|${item.id}`]} color={visual.color} />)}</div></div></article>;
  })}</div>;
}

function AnatomyView({ groups, coverage }: { groups: ReturnType<typeof groupBySpecialty>; coverage: Record<string, ReviewCoverageItem> }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{groups.map((group) => {
    const visual = VISUALS[group.name] ?? { kind: "circle", color: "#0f766e", soft: "#ccfbf1" };
    const points = pointsFor(visual.kind, group.items.length);
    const viewed = group.items.filter((item) => coverage[`disease|${item.id}`]).length;
    return <article key={group.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><header className="flex items-start justify-between gap-3"><div><h3 className="text-sm font-semibold text-slate-900">{group.name}</h3><p className="mt-1 text-xs text-slate-500">?? ??? ?? ??? ????.</p></div><span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ color: visual.color, backgroundColor: visual.soft }}>{viewed} / {group.items.length}</span></header><div className="mt-4 flex min-h-48 items-center justify-center rounded-lg border border-slate-100 bg-slate-50/80 p-3"><div className="relative" style={{ width: SIZE * 7, height: SIZE * 7 }}>{group.items.map((item, index) => { const point = points[index]; return <div key={item.id} className="absolute" style={{ left: point.x * 7, top: point.y * 7 }}><Pixel item={item} stat={coverage[`disease|${item.id}`]} color={visual.color} size={7} /></div>; })}</div></div></article>;
  })}</div>;
}

export function DiseaseCoverageDashboard({ catalog }: { catalog: ReviewCatalogItem[] }) {
  const diseases = useMemo(() => catalog.filter((item) => item.type === "disease"), [catalog]);
  const groups = useMemo(() => groupBySpecialty(diseases), [diseases]);
  const [coverage, setCoverage] = useState<Record<string, ReviewCoverageItem>>({});
  const [view, setView] = useState<CoverageView>("grid");
  useEffect(() => {
    const refresh = () => setCoverage(loadReviewCoverage(diseases));
    refresh();
    window.addEventListener(REVIEW_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(REVIEW_CHANGE_EVENT, refresh);
  }, [diseases]);
  const viewed = diseases.filter((item) => coverage[`disease|${item.id}`]).length;
  const percentage = diseases.length > 0 ? Math.round((viewed / diseases.length) * 100) : 0;
  const completed = groups.filter((group) => group.items.every((item) => coverage[`disease|${item.id}`])).length;
  return <section className="surface p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex items-center gap-2 text-sm font-semibold text-teal-800"><HeartPulse className="h-5 w-5" />?? ?? ??</div><h2 className="mt-2 text-xl font-semibold text-slate-950">?? ?? ???</h2><p className="mt-1 text-sm text-slate-600">?? ??? ??? ? ??? ?????. ?? ??? ?? ???? ?????.</p></div><div className="grid grid-cols-3 gap-5 text-right text-sm"><div><div className="text-xs text-slate-500">??</div><div className="font-semibold">{viewed} / {diseases.length}</div></div><div><div className="text-xs text-slate-500">???</div><div className="font-semibold">{percentage}%</div></div><div><div className="text-xs text-slate-500">?? ??</div><div className="font-semibold">{completed} / {groups.length}</div></div></div></div><div className="mt-5 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1" role="tablist" aria-label="?? ?? ?? ??"><button type="button" role="tab" aria-selected={view === "grid"} onClick={() => setView("grid")} className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${view === "grid" ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}><Grid3X3 className="h-4 w-4" />??? ??</button><button type="button" role="tab" aria-selected={view === "anatomy"} onClick={() => setView("anatomy")} className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${view === "anatomy" ? "bg-white text-teal-800 shadow-sm" : "text-slate-600"}`}><HeartPulse className="h-4 w-4" />???</button></div><div className="mt-5">{view === "grid" ? <GridView groups={groups} coverage={coverage} /> : <AnatomyView groups={groups} coverage={coverage} />}</div></section>;
}
