"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import { useClockRedraw } from "@/components/simulation-workbench";
import { getNephronSegment, type NephronSegmentId, type NephronSolute, type NephronState, type NephronTransportRoute } from "@/lib/nephron-model";

type P5Instance = p5;
type Point = { x: number; y: number };
const curvePoint = (a: number, b: number, c: number, d: number, t: number) =>
  .5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);

const SOLUTE_COLOR: Record<NephronSolute, string> = { "Na+": "#0369a1", "K+": "#be185d", "Cl-": "#4338ca", "HCO3-": "#a16207", "Ca2+": "#7e22ce", "Mg2+": "#047857", H2O: "#0284c7" };
const SEGMENT_ORDER: NephronSegmentId[] = ["glomerulus", "proximal", "descending", "thin-ascending", "thick-ascending", "distal", "collecting"];

function pointOnPath(points: Point[], progress: number) {
  const lengths = points.slice(1).map((point, index) => Math.hypot(point.x - points[index].x, point.y - points[index].y)); const total = lengths.reduce((sum, length) => sum + length, 0);
  let target = Math.min(0.999, Math.max(0, progress)) * total;
  for (let index = 0; index < lengths.length; index += 1) { if (target <= lengths[index]) { const local = target / lengths[index]; return { x: points[index].x + (points[index + 1].x - points[index].x) * local, y: points[index].y + (points[index + 1].y - points[index].y) * local }; } target -= lengths[index]; }
  return points[points.length - 1];
}

function distanceToPath(point: Point, path: Point[]) {
  let best = Number.POSITIVE_INFINITY;
  for (let index = 0; index < path.length - 1; index += 1) {
    const a = path[index]; const b = path[index + 1]; const dx = b.x - a.x; const dy = b.y - a.y; const lengthSquared = dx * dx + dy * dy;
    const t = lengthSquared === 0 ? 0 : Math.min(1, Math.max(0, ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSquared));
    best = Math.min(best, Math.hypot(point.x - (a.x + t * dx), point.y - (a.y + t * dy)));
  }
  return best;
}

export function NephronP5Canvas({ state, solute, selected, onSelect }: { state: NephronState; solute: NephronSolute; selected: NephronSegmentId; onSelect: (id: NephronSegmentId) => void }) {
  const hostRef = useRef<HTMLDivElement>(null); const instanceRef = useRef<P5Instance | null>(null); const clock = useClockRedraw(instanceRef); const propsRef = useRef({ state, solute, selected, onSelect });
  useEffect(() => { propsRef.current = { state, solute, selected, onSelect }; instanceRef.current?.redraw(); }, [state, solute, selected, onSelect]);

  useEffect(() => {
    let cancelled = false; let observer: ResizeObserver | undefined; let instance: P5Instance | undefined;
    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return; const host = hostRef.current; const reducedMotion = false;
      const sketch = (p: P5Instance) => {
        let width = 1040; let height = 560; let lastDescription = ""; let geometryKey = ""; let paths: Record<NephronSegmentId, Point[]> = {} as Record<NephronSegmentId, Point[]>;
        const label = (text: string, x: number, y: number, size = 11, color = "#47595e", align: typeof p.LEFT | typeof p.CENTER | typeof p.RIGHT = p.CENTER) => { p.noStroke(); p.fill(color); p.textAlign(align, p.CENTER); p.textSize(Math.max(13, size)); p.text(text, x, y); };
        const resize = () => { width = Math.max(620, host.clientWidth); height = width < 960 ? 1000 : 560; p.resizeCanvas(width, height); };

        const buildPaths = (x: number, y: number, w: number, h: number) => {
          const key = `${x}:${y}:${w}:${h}`;
          if (geometryKey === key) return;
          geometryKey = key;
          const pt = (nx: number, ny: number): Point => ({ x: x + nx * w, y: y + ny * h });
          paths = {
            glomerulus: [pt(0.09, 0.16), pt(0.12, 0.10), pt(0.18, 0.10), pt(0.21, 0.16), pt(0.18, 0.22), pt(0.12, 0.22), pt(0.09, 0.16)],
            proximal: [pt(0.20, 0.17), pt(0.27, 0.10), pt(0.35, 0.16), pt(0.27, 0.23), pt(0.37, 0.27), pt(0.42, 0.22)],
            descending: [pt(0.42, 0.22), pt(0.40, 0.36), pt(0.41, 0.56), pt(0.43, 0.79), pt(0.46, 0.88)],
            "thin-ascending": [pt(0.46, 0.88), pt(0.50, 0.90), pt(0.53, 0.82), pt(0.54, 0.65)],
            "thick-ascending": [pt(0.54, 0.65), pt(0.55, 0.45), pt(0.56, 0.28), pt(0.59, 0.18)],
            distal: [pt(0.59, 0.18), pt(0.67, 0.10), pt(0.74, 0.17), pt(0.66, 0.24), pt(0.76, 0.28), pt(0.80, 0.22)],
            collecting: [pt(0.80, 0.18), pt(0.81, 0.38), pt(0.82, 0.60), pt(0.84, 0.88)],
          };
          for (const id of SEGMENT_ORDER) {
            const control = paths[id]; const smooth: Point[] = [];
            for (let i = 0; i < control.length - 1; i += 1) {
              const a = control[Math.max(0, i - 1)], b = control[i], c = control[i + 1], d = control[Math.min(control.length - 1, i + 2)];
              for (let step = 0; step < 12; step += 1) {
                const t = step / 12;
                smooth.push({ x: curvePoint(a.x, b.x, c.x, d.x, t), y: curvePoint(a.y, b.y, c.y, d.y, t) });
              }
            }
            paths[id] = [...smooth, control[control.length - 1]];
          }
        };

        const drawOverview = (x: number, y: number, w: number, h: number) => {
          const current = propsRef.current; buildPaths(x, y, w, h); const cortexEnd = y + h * 0.31; const outerEnd = y + h * 0.61;
          p.noStroke(); p.fill("#ffffff"); p.rect(x, y, w, cortexEnd - y); p.fill("#f1f5f9"); p.rect(x, cortexEnd, w, outerEnd - cortexEnd); p.fill("#e2e8f0"); p.rect(x, outerEnd, w, y + h - outerEnd);
          label("CORTEX", x + 10, y + 14, 9, "#68787d", p.LEFT); label("OUTER MEDULLA", x + 10, cortexEnd + 14, 9, "#786f69", p.LEFT); label("INNER MEDULLA", x + 10, outerEnd + 14, 9, "#687873", p.LEFT);
          p.stroke("#c2ccca"); p.strokeWeight(1); p.line(x, cortexEnd, x + w, cortexEnd); p.line(x, outerEnd, x + w, outerEnd);

          for (const id of SEGMENT_ORDER) {
            const segment = getNephronSegment(current.state, id); const path = paths[id]; const active = id === current.selected;
            p.noFill(); p.stroke(active ? "#0f766e" : id === "collecting" ? "#9a604d" : "#b77960"); p.strokeWeight(active ? 18 : id === "descending" || id === "thin-ascending" ? 8 : 12); p.beginShape(); path.forEach((point) => p.vertex(point.x, point.y)); p.endShape();
            p.stroke("#fff1e6"); p.strokeWeight(active ? 10 : id === "descending" || id === "thin-ascending" ? 4 : 7); p.beginShape(); path.forEach((point) => p.vertex(point.x, point.y)); p.endShape();
            const remaining = Math.min(100, segment.delivered[current.solute]); const particleCount = Math.max(1, Math.round(p.map(remaining, 0, 100, 1, 7)));
            for (let index = 0; index < particleCount; index += 1) { const point = pointOnPath(path, ((clock.current.seconds * 30) * 0.006 + index / particleCount) % 1); p.noStroke(); p.fill(SOLUTE_COLOR[current.solute]); p.circle(point.x, point.y, current.solute === "H2O" ? 7 : 6); }
          }

          const labelAt = (id: NephronSegmentId, progress: number, dx: number, dy: number) => { const point = pointOnPath(paths[id], progress); const segment = getNephronSegment(current.state, id); const names: Partial<Record<NephronSegmentId, string>> = { glomerulus: "사구체", descending: "하행각", "thin-ascending": "얇은 상행각" }; label(names[id] ?? segment.shortLabel, point.x + dx, point.y + dy, 9, id === current.selected ? "#176f70" : "#34464b"); };
          labelAt("glomerulus", 0.2, 0, -9); labelAt("proximal", 0.45, 0, -25); labelAt("descending", 0.48, -35, 0); labelAt("thin-ascending", 0.5, 33, 8); labelAt("thick-ascending", 0.55, 38, 0); labelAt("distal", 0.45, 0, -24); labelAt("collecting", 0.56, 40, 0);

          const selectedPath = paths[current.selected]; const midpoint = pointOnPath(selectedPath, 0.52); p.noFill(); p.stroke("#176f70"); p.strokeWeight(1.5); p.rect(midpoint.x - 22, midpoint.y - 22, 44, 44, 3);
          return midpoint;
        };

        const drawRoute = (route: NephronTransportRoute, routeIndex: number, activity: number, box: { x: number; y: number; w: number; h: number }) => {
          const color = SOLUTE_COLOR[route.solute]; const y = box.y + 142 + routeIndex * 100; const lumenX = box.x + box.w * 0.12; const apicalX = box.x + box.w * 0.31; const cellX = box.x + box.w * 0.48; const basalX = box.x + box.w * 0.64; const interstitialX = box.x + box.w * 0.76; const capillaryX = box.x + box.w * 0.91;
          let routePoints: Point[];
          if (route.direction === "filter") routePoints = [{ x: capillaryX, y }, { x: interstitialX, y }, { x: lumenX, y }];
          else if (route.direction === "secrete") routePoints = [{ x: capillaryX, y }, { x: basalX, y }, { x: cellX, y }, { x: apicalX, y }, { x: lumenX, y }];
          else if (route.direction === "recycle") routePoints = [{ x: cellX, y }, { x: apicalX, y }, { x: lumenX, y }, { x: apicalX, y: y + 18 }, { x: cellX, y: y + 18 }];
          else if (route.path === "paracellular") routePoints = [{ x: lumenX, y }, { x: apicalX, y: y - 24 }, { x: basalX, y: y - 24 }, { x: interstitialX, y }, { x: capillaryX, y }];
          else routePoints = [{ x: lumenX, y }, { x: apicalX, y }, { x: cellX, y }, { x: basalX, y }, { x: interstitialX, y }, { x: capillaryX, y }];
          p.noFill(); p.stroke(`${color}66`); p.strokeWeight(Math.max(2, p.map(activity, 0, 180, 2, 6))); p.beginShape(); routePoints.forEach((point) => p.vertex(point.x, point.y)); p.endShape();
          const count = Math.max(2, Math.round(p.map(activity, 0, 180, 2, 8)));
          for (let index = 0; index < count; index += 1) { const point = pointOnPath(routePoints, ((clock.current.seconds * 30) * (0.004 + activity / 30000) + index / count) % 1); p.noStroke(); p.fill(color); p.circle(point.x, point.y, 9); }
          const transporter = (name: string, x: number) => {
            p.stroke(color); p.strokeWeight(2); p.fill("#ffffff"); p.rect(x - 8, y - 12, 16, 24, 5);
            p.textSize(13); const badge = p.textWidth(name) + 16;
            p.noStroke(); p.fill("#ffffff"); p.rect(x - badge / 2, y - 42, badge, 24, 5);
            label(name, x, y - 30, 13, "#1e293b");
          };
          if (route.apical) transporter(route.apical, apicalX); if (route.basolateral) transporter(route.basolateral, basalX);
          const end = routePoints[routePoints.length - 1], before = routePoints[routePoints.length - 2];
          const angle = Math.atan2(end.y - before.y, end.x - before.x);
          p.push(); p.translate(end.x, end.y); p.rotate(angle); p.noStroke(); p.fill(color); p.triangle(0, 0, -10, -5, -10, 5); p.pop();
          label(`${route.direction === "secrete" ? "분비" : route.direction === "recycle" ? "재순환" : route.direction === "filter" ? "여과" : "재흡수"} · ${route.path}`, box.x + 14, y + 23, 9, color, p.LEFT);
          p.noStroke(); p.fill("#475569"); p.textAlign(p.LEFT, p.TOP); p.textSize(13); p.textLeading(18); p.text(route.detail, box.x + 16, y + 36, box.w - 32, 42);
        };

        const drawCutaway = (box: { x: number; y: number; w: number; h: number }, source: Point) => {
          const current = propsRef.current; const segment = getNephronSegment(current.state, current.selected); const routes = segment.routes.filter((route) => route.solute === current.solute);
          p.noStroke(); p.fill("#ffffff"); p.rect(box.x, box.y, box.w, box.h, 6); p.stroke("#bac7c7"); p.strokeWeight(1); p.noFill(); p.rect(box.x, box.y, box.w, box.h, 6);
          if (width >= 960) { p.stroke("#839698"); p.strokeWeight(1); p.line(source.x + 22, source.y - 22, box.x, box.y + 30); p.line(source.x + 22, source.y + 22, box.x, box.y + box.h - 30); }
          label(`${segment.label} 확대 단면`, box.x + 14, box.y + 22, 13, "#25393d", p.LEFT); label(`${segment.permeability} · ${current.solute} delivered ${segment.delivered[current.solute].toFixed(1)}%`, box.x + 14, box.y + 43, 10, "#627479", p.LEFT);
          const membraneTop = box.y + 62; const membraneBottom = box.y + box.h - 48; const apicalX = box.x + box.w * 0.31; const basalX = box.x + box.w * 0.64;
          p.noStroke(); p.fill("#e0f2fe"); p.rect(box.x + 1, membraneTop, box.w * 0.30, membraneBottom - membraneTop); p.fill("#fff7ed"); p.rect(apicalX, membraneTop, basalX - apicalX, membraneBottom - membraneTop); p.fill("#ecfdf5"); p.rect(basalX, membraneTop, box.w * 0.35, membraneBottom - membraneTop);
          p.stroke("#8a6f68"); p.strokeWeight(3); p.line(apicalX, membraneTop, apicalX, membraneBottom); p.line(basalX, membraneTop, basalX, membraneBottom);
          p.stroke("#a85d62"); p.strokeWeight(9); p.line(box.x + box.w * 0.89, membraneTop + 8, box.x + box.w * 0.89, membraneBottom - 8);
          label("관강", box.x + box.w * 0.14, membraneTop + 14, 9); label("상피세포", box.x + box.w * 0.48, membraneTop + 14, 9); label("간질", box.x + box.w * 0.75, membraneTop + 14, 9); label("혈관", box.x + box.w * 0.90, membraneTop + 14, 9, "#935159");
          if (current.selected === "proximal") { p.stroke("#8a6f68"); p.strokeWeight(1); for (let y = membraneTop + 25; y < membraneBottom; y += 8) p.line(apicalX - 8, y, apicalX, y + 3); }
          if (routes.length === 0) { label(`${segment.shortLabel}에는 ${current.solute}의 주요 순이동 경로가 없습니다.`, box.x + box.w / 2, box.y + box.h / 2, 12, "#68797d"); }
          else routes.slice(0, 4).forEach((route, index) => drawRoute(route, index, segment.activity[current.solute], box));
          const handled = segment.handled[current.solute]; const direction = handled < 0 ? "분비" : "재흡수";
          label(`분절 처리: ${Math.abs(handled).toFixed(1)}% ${direction} → 다음 분절 ${segment.remaining[current.solute].toFixed(1)}%`, box.x + 14, box.y + box.h - 22, 10, handled < 0 ? "#9b4f59" : "#277b76", p.LEFT);
        };

        p.setup = () => { if (cancelled) return; const canvas = p.createCanvas(width, height); canvas.parent(host); p.frameRate(reducedMotion ? 1 : 30); p.textFont("Arial"); observer = new ResizeObserver(resize); observer.observe(host); resize(); p.noLoop(); };
        p.mousePressed = () => { const point = { x: p.mouseX, y: p.mouseY }; const nearest = SEGMENT_ORDER.map((id) => ({ id, distance: distanceToPath(point, paths[id] ?? []) })).sort((a, b) => a.distance - b.distance)[0]; if (nearest && nearest.distance < 28) propsRef.current.onSelect(nearest.id); };
        p.draw = () => {
          p.background("#f8fafc"); const compact = width < 960; const overview = compact ? { x: 12, y: 15, w: Math.max(300, Math.min(400, host.clientWidth - 24)), h: 390 } : { x: 15, y: 15, w: width * 0.36, h: height - 30 };
          const source = drawOverview(overview.x, overview.y, overview.w, overview.h);
          const activeSegment = getNephronSegment(propsRef.current.state, propsRef.current.selected);
          const routeCount = activeSegment.routes.filter((route) => route.solute === propsRef.current.solute).length;
          const panelHeight = Math.min(530, 230 + Math.max(1, routeCount) * 100);
          const cutaway = { x: compact ? 12 : width * 0.39, y: compact ? 425 : 15, w: compact ? width - 24 : width * 0.59, h: panelHeight };
          drawCutaway(cutaway, source);
          if (routeCount < 3) {
            const y = cutaway.y + cutaway.h + 18; const cardWidth = (cutaway.w - 12) / 2;
            [activeSegment.delivered[propsRef.current.solute], activeSegment.remaining[propsRef.current.solute]].forEach((value, index) => {
              const x = cutaway.x + index * (cardWidth + 12);
              p.noStroke(); p.fill(index ? "#ecfdf5" : "#e0f2fe"); p.rect(x, y, cardWidth, 76, 10);
              label(index ? "다음 분절로 전달" : "이 분절에 도달", x + 16, y + 21, 13, "#334155", p.LEFT);
              label(`${value.toFixed(1)}%`, x + 16, y + 51, 23, index ? "#047857" : "#0369a1", p.LEFT);
            });
          }
          const current = propsRef.current; const segment = getNephronSegment(current.state, current.selected);
          const description = `네프론 전체 구조와 ${segment.label} 확대 단면. ${current.solute}는 이 분절에 여과 부하의 ${segment.delivered[current.solute].toFixed(1)} 퍼센트가 도달하고 ${Math.abs(segment.handled[current.solute]).toFixed(1)} 퍼센트가 ${segment.handled[current.solute] < 0 ? "분비" : "재흡수"}됩니다.`; if (description !== lastDescription) { p.describe(description); lastDescription = description; }
        };
      };
      instance = new P5(sketch, host); instanceRef.current = instance;
    });
    return () => { cancelled = true; observer?.disconnect(); instance?.remove(); instanceRef.current = null; };
  }, [clock]);
  return <div ref={hostRef} className="min-h-[560px] w-full overflow-x-auto" aria-label="통상적인 네프론 구조와 분절별 상피 확대 단면에서 용질 수송체 경로를 선택해 보는 시뮬레이션" />;
}
