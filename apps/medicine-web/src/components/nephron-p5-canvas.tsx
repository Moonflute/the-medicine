"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { NephronSolute, NephronState } from "@/lib/nephron-model";

type P5Instance = p5;

const SOLUTE_COLOR: Record<NephronSolute, string> = { "Na+": "#287f91", "K+": "#9b5b67", "HCO3-": "#b1843d", "Ca2+": "#756487", "Mg2+": "#4f7c68", H2O: "#5792ad" };
const SEGMENTS = ["proximal", "descending", "thick-ascending", "distal", "collecting"];

export function NephronP5Canvas({ state, solute, selected, onSelect }: { state: NephronState; solute: NephronSolute; selected: string; onSelect: (id: string) => void }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef({ state, solute, selected, onSelect });
  useEffect(() => { propsRef.current = { state, solute, selected, onSelect }; }, [state, solute, selected, onSelect]);
  useEffect(() => {
    let cancelled = false;
    let observer: ResizeObserver | undefined;
    let instance: P5Instance | undefined;
    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return;
      const host = hostRef.current;
      const sketch = (p: P5Instance) => {
        let w = 760;
        let h = 540;
        let hit: Array<{ id: string; x: number; y: number; r: number }> = [];
        const label = (value: string, x: number, y: number, size = 11, color = "#425359") => { p.noStroke(); p.fill(color); p.textAlign(p.CENTER, p.CENTER); p.textSize(size); p.text(value, x, y); };
        const resize = () => { w = Math.max(320, host.clientWidth); h = Math.max(500, Math.min(610, w * 0.72)); p.resizeCanvas(w, h); };
        const point = (x: number, y: number) => ({ x: x * w, y: y * h });
        p.setup = () => { const canvas = p.createCanvas(w, h); canvas.parent(host); p.textFont("Arial"); p.frameRate(30); observer = new ResizeObserver(resize); observer.observe(host); resize(); };
        p.mousePressed = () => { const found = hit.find((item) => p.dist(p.mouseX, p.mouseY, item.x, item.y) < item.r); if (found) propsRef.current.onSelect(found.id); };
        p.draw = () => {
          const current = propsRef.current;
          p.background("#edf2f1");
          p.noStroke(); p.fill("#f4f6f4"); p.rect(0, 0, w, h * 0.42); p.fill("#e7edeb"); p.rect(0, h * 0.42, w, h * 0.58);
          label("RENAL CORTEX", 74, 25, 10, "#68787e"); label("MEDULLA", 63, h * 0.47, 10, "#68787e");
          p.stroke("#c3cecd"); p.strokeWeight(1); p.line(18, h * 0.42, w - 18, h * 0.42);
          const glom = point(0.13, 0.22); const pct = point(0.29, 0.24); const desc = point(0.39, 0.68); const tal = point(0.57, 0.36); const dct = point(0.69, 0.22); const cd = point(0.82, 0.58);
          hit = [pct, desc, tal, dct, cd].map((v, i) => ({ id: SEGMENTS[i], ...v, r: 48 }));
          p.noFill(); p.stroke("#9f6d72"); p.strokeWeight(12); p.circle(glom.x, glom.y, 78); p.stroke("#d8b7b8"); p.strokeWeight(7); p.circle(glom.x, glom.y, 60);
          const paths: Array<[string, number, number, number, number, number, number, number, number]> = [
            ["proximal", glom.x + 38, glom.y, pct.x - 34, pct.y - 45, pct.x + 45, pct.y + 48, desc.x, desc.y - 25],
            ["descending", desc.x, desc.y - 25, desc.x - 4, desc.y + 35, desc.x + 10, h * 0.91, w * 0.49, h * 0.88],
            ["thick-ascending", w * 0.49, h * 0.88, tal.x + 18, h * 0.76, tal.x - 10, tal.y + 42, tal.x, tal.y],
            ["distal", tal.x, tal.y, dct.x - 30, dct.y - 42, dct.x + 30, dct.y + 42, cd.x, cd.y - 130],
            ["collecting", cd.x, cd.y - 150, cd.x, cd.y - 80, cd.x, cd.y + 90, cd.x, h * 0.94],
          ];
          for (const [id, x1, y1, cx1, cy1, cx2, cy2, x2, y2] of paths) {
            p.noFill(); p.stroke(id === current.selected ? "#176e70" : "#9a7770"); p.strokeWeight(id === current.selected ? 18 : 13); p.bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2); p.stroke("#f2e8df"); p.strokeWeight(id === current.selected ? 11 : 8); p.bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
            const segment = current.state.segments.find((item) => item.id === id)!;
            const amount = segment.reabsorbed[current.solute];
            const count = Math.max(1, Math.round(Math.min(10, Math.abs(amount) / 8 + 1)));
            for (let i = 0; i < count; i += 1) {
              const t = (p.frameCount * 0.005 + i / count) % 1;
              const x = p.bezierPoint(x1, cx1, cx2, x2, t); const y = p.bezierPoint(y1, cy1, cy2, y2, t);
              p.noStroke(); p.fill(SOLUTE_COLOR[current.solute]); p.circle(x, y, current.solute === "H2O" ? 7 : 6);
              if (amount !== 0 && i < Math.ceil(count / 2)) { const direction = amount > 0 ? -1 : 1; p.stroke(SOLUTE_COLOR[current.solute]); p.strokeWeight(1.2); p.line(x, y, x + direction * 17, y - 12); }
            }
          }
          const labels = [[pct, "PCT"], [desc, "하행각"], [tal, "TAL"], [dct, "DCT"], [cd, "집합관"]] as const;
          labels.forEach(([pos, value], index) => { label(value, pos.x, pos.y - (index === 1 ? -56 : 61), 12, SEGMENTS[index] === current.selected ? "#176e70" : "#2d3c41"); });
          const selectedSegment = current.state.segments.find((item) => item.id === current.selected)!;
          p.noStroke(); p.fill(248, 250, 249, 244); p.rect(w * 0.05, h - 86, w * 0.9, 66, 6); label(`${selectedSegment.label} · ${current.solute}`, w * 0.5, h - 65, 13, "#1f3438"); label(`${selectedSegment.reabsorbed[current.solute].toFixed(0)}% of filtered load · ${selectedSegment.transporters.join(" · ")}`, w * 0.5, h - 42, 11, "#65767b");
          p.describe(`네프론 분절별 ${current.solute} 수송 도식. 선택된 분절은 ${selectedSegment.label}이며 여과량 대비 ${selectedSegment.reabsorbed[current.solute].toFixed(0)} 퍼센트를 처리합니다.`);
        };
      };
      instance = new P5(sketch, host);
    });
    return () => { cancelled = true; observer?.disconnect(); instance?.remove(); };
  }, []);
  return <div ref={hostRef} className="min-h-[500px] w-full" aria-label="분절을 선택할 수 있는 네프론 전해질 수송 시뮬레이션" />;
}
