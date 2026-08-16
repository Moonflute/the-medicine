"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import { getCardiacPhase, type HemodynamicsState } from "@/lib/hemodynamics-model";

type P5Instance = p5;
type P5Image = Awaited<ReturnType<P5Instance["loadImage"]>>;
type Point = { x: number; y: number };

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const COLORS = { ink: "#25383d", muted: "#64767b", line: "#b8c5c6", venous: "#55768e", arterial: "#a7565d", conduction: "#b27a2f", open: "#2e8278", closed: "#9b6264", purple: "#725f80" };

function pointOnPolyline(points: Point[], progress: number) {
  const clamped = Math.min(0.9999, Math.max(0, progress));
  const lengths = points.slice(1).map((point, index) => Math.hypot(point.x - points[index].x, point.y - points[index].y));
  const total = lengths.reduce((sum, length) => sum + length, 0);
  let target = clamped * total;
  for (let index = 0; index < lengths.length; index += 1) {
    if (target <= lengths[index]) {
      const local = target / lengths[index];
      return { x: points[index].x + (points[index + 1].x - points[index].x) * local, y: points[index].y + (points[index + 1].y - points[index].y) * local };
    }
    target -= lengths[index];
  }
  return points[points.length - 1];
}

export function HemodynamicsP5Canvas({ state }: { state: HemodynamicsState }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<P5Instance | null>(null);
  const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; instanceRef.current?.redraw(); }, [state]);

  useEffect(() => {
    let instance: P5Instance | undefined; let observer: ResizeObserver | undefined; let cancelled = false;
    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return;
      const host = hostRef.current; const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sketch = (p: P5Instance) => {
        let width = 760; let height = 650; let heart: P5Image | null = null; let cycle = 0; let previousMillis = 0;
        const label = (text: string, x: number, y: number, size = 11, color = COLORS.muted, align: typeof p.LEFT | typeof p.CENTER | typeof p.RIGHT = p.CENTER) => { p.noStroke(); p.fill(color); p.textAlign(align, p.CENTER); p.textSize(size); p.text(text, x, y); };
        const resize = () => { width = Math.max(320, Math.floor(host.clientWidth)); height = width < 620 ? 760 : 650; p.resizeCanvas(width, height); };

        const drawParticlePath = (points: Point[], count: number, speed: number, color: string, active: boolean, size = 7) => {
          p.noFill(); p.stroke(active ? `${color}99` : "#aebbbc66"); p.strokeWeight(active ? 4 : 2); p.beginShape(); points.forEach((point) => p.vertex(point.x, point.y)); p.endShape();
          if (!active) return;
          for (let index = 0; index < count; index += 1) {
            const progress = (cycle * speed + index / count) % 1; const point = pointOnPolyline(points, progress);
            p.noStroke(); p.fill(color); p.circle(point.x, point.y, size);
          }
        };

        const drawValve = (name: string, x: number, y: number, open: boolean) => {
          p.stroke(open ? COLORS.open : COLORS.closed); p.strokeWeight(3); const spread = open ? 8 : 2;
          p.line(x - spread, y - 6, x, y + 5); p.line(x + spread, y - 6, x, y + 5);
          label(`${name} ${open ? "OPEN" : "CLOSED"}`, x, y + 17, 9, open ? COLORS.open : COLORS.closed);
        };

        const ecgSignal = (t: number) => {
          const phase = ((t % 1) + 1) % 1;
          if (phase > 0.01 && phase < 0.09) return -8 * Math.sin((phase - 0.01) / 0.08 * Math.PI);
          if (phase > 0.13 && phase < 0.21) {
            const qrs = (phase - 0.13) / 0.08;
            if (qrs < 0.22) return 10 * qrs / 0.22;
            if (qrs < 0.48) return 10 - 58 * (qrs - 0.22) / 0.26;
            return -48 + 62 * (qrs - 0.48) / 0.52;
          }
          if (phase > 0.43 && phase < 0.62) return -13 * Math.sin((phase - 0.43) / 0.19 * Math.PI);
          return 0;
        };

        const drawEcg = (x: number, y: number, w: number, currentCycle: number) => {
          p.noStroke(); p.fill(248, 250, 249, 232); p.rect(x, y - 52, w, 112, 6); label("ELECTRICAL → MECHANICAL COUPLING", x + 12, y - 36, 9, COLORS.muted, p.LEFT);
          p.stroke("#d6dfdf"); p.strokeWeight(1); p.line(x + 10, y, x + w - 10, y);
          p.stroke(COLORS.purple); p.strokeWeight(2.3); p.noFill(); p.beginShape();
          for (let px = x + 10; px <= x + w - 10; px += 2) { const relative = (px - x - 10) / (w - 20); p.vertex(px, y + ecgSignal(relative * 2 + currentCycle)); } p.endShape();
          const markerX = x + 10 + (currentCycle % 1) / 2 * (w - 20); p.stroke(COLORS.conduction); p.strokeWeight(1.2); p.line(markerX, y - 46, markerX, y + 49);
          label("P", x + w * 0.10, y - 19, 9, COLORS.purple); label("QRS", x + w * 0.20, y - 36, 9, COLORS.purple); label("T", x + w * 0.29, y - 22, 9, COLORS.purple);
        };

        const drawPvLoop = (x: number, y: number, w: number, h: number, current: HemodynamicsState) => {
          p.noStroke(); p.fill(248, 250, 249, 232); p.rect(x, y, w, h, 6); label("LV PRESSURE–VOLUME LOOP", x + 12, y + 16, 9, COLORS.muted, p.LEFT);
          const left = x + 34; const right = x + w - 15; const top = y + 30; const bottom = y + h - 28;
          p.stroke("#aebbbb"); p.strokeWeight(1); p.line(left, bottom, right, bottom); p.line(left, bottom, left, top);
          const xForVolume = (volume: number) => p.map(volume, 0, 200, left, right); const yForPressure = (pressure: number) => p.map(pressure, 0, 220, bottom, top);
          const xEsv = xForVolume(current.esv); const xEdv = xForVolume(current.edv); const yDia = yForPressure(current.lvEndDiastolicPressure); const ySys = yForPressure(current.systolicPressure);
          p.noFill(); p.stroke(COLORS.open); p.strokeWeight(3); p.line(xEdv, yDia, xEdv, ySys * 0.96); p.bezier(xEdv, ySys * 0.96, xEdv - 30, ySys - 10, xEsv + 35, ySys - 5, xEsv, ySys * 1.08); p.line(xEsv, ySys * 1.08, xEsv, bottom - 5); p.bezier(xEsv, bottom - 5, xEsv + 25, bottom + 2, xEdv - 25, bottom, xEdv, yDia);
          label(`ESV ${current.esv.toFixed(0)}`, xEsv, bottom + 15, 9); label(`EDV ${current.edv.toFixed(0)}`, xEdv, bottom + 15, 9);
        };

        p.setup = async () => {
          heart = await p.loadImage(`${BASE_PATH}/images/physiology/cardiac-cutaway-v2.png`);
          const canvas = p.createCanvas(width, height); canvas.parent(host); p.frameRate(reducedMotion ? 1 : 30); p.textFont("Arial, sans-serif"); previousMillis = p.millis(); observer = new ResizeObserver(resize); observer.observe(host); resize(); if (reducedMotion) p.noLoop();
        };

        p.draw = () => {
          const current = stateRef.current; const now = p.millis(); const deltaSeconds = reducedMotion ? 0 : Math.min(0.08, Math.max(0, (now - previousMillis) / 1000)); previousMillis = now;
          cycle = (cycle + deltaSeconds * current.heartRate / 60) % 1; const phase = getCardiacPhase(cycle); const compact = width < 620;
          p.background("#edf2f1"); p.stroke("#d9e1e0"); p.strokeWeight(0.55); for (let x = 20; x < width; x += 28) p.line(x, 0, x, height); for (let y = 20; y < height; y += 28) p.line(0, y, width, y);

          const heartHeight = compact ? 410 : 520; const heartWidth = heartHeight * 2 / 3; const heartX = compact ? width * 0.5 : width * 0.31; const heartY = compact ? 265 : 315;
          if (heart) { p.imageMode(p.CENTER); p.tint(255, 230); p.image(heart, heartX, heartY, heartWidth, heartHeight); p.noTint(); }
          const local = (nx: number, ny: number): Point => ({ x: heartX + (nx - 0.5) * heartWidth, y: heartY + (ny - 0.5) * heartHeight });
          const ra = local(0.31, 0.45); const rv = local(0.39, 0.70); const la = local(0.69, 0.45); const lv = local(0.68, 0.70);
          const volumeScale = p.map(current.edv, 45, 195, 0.78, 1.16); const ejectionFraction = current.strokeVolume / current.edv;
          const ventricularScale = volumeScale * (1 - phase.ventricularContraction * ejectionFraction * 0.45); const atrialScale = 1 - phase.atrialContraction * 0.18;
          const chamber = (point: Point, rw: number, rh: number, color: string, scale: number, name: string) => { p.noStroke(); p.fill(color); p.ellipse(point.x, point.y, rw * scale, rh * scale); label(name, point.x, point.y, 11, COLORS.ink); };
          chamber(ra, heartWidth * 0.19, heartHeight * 0.12, "#52758f66", atrialScale, "RA"); chamber(rv, heartWidth * 0.25, heartHeight * 0.21, "#52758f55", ventricularScale, "RV");
          chamber(la, heartWidth * 0.18, heartHeight * 0.11, "#a8565d55", atrialScale, "LA"); chamber(lv, heartWidth * 0.24, heartHeight * 0.22, "#a8565d55", ventricularScale, "LV");

          const tri = local(0.35, 0.55); const pul = local(0.49, 0.34); const mit = local(0.64, 0.55); const aor = local(0.51, 0.25);
          drawValve("TV", tri.x, tri.y, phase.tricuspidOpen); drawValve("PV", pul.x, pul.y, phase.pulmonaryOpen); drawValve("MV", mit.x, mit.y, phase.mitralOpen); drawValve("AV", aor.x, aor.y, phase.aorticOpen);

          const svc = local(0.18, 0.05); const ivc = local(0.24, 0.97); const pulmonaryOut = local(0.78, 0.08); const pulmonaryIn = local(0.93, 0.38); const aortaOut = local(0.56, -0.05);
          const fillingCount = Math.round(p.map(current.preload, 40, 160, 3, 12)); const ejectionCount = Math.round(p.map(current.peakAorticFlow, 70, 780, 2, 14));
          drawParticlePath([svc, ra, tri, rv], fillingCount, 1.6, COLORS.venous, phase.flow === "filling" || phase.flow === "atrial");
          drawParticlePath([ivc, ra], Math.max(2, fillingCount - 2), 1.4, COLORS.venous, phase.flow === "filling");
          drawParticlePath([pulmonaryIn, la, mit, lv], fillingCount, 1.6, COLORS.arterial, phase.flow === "filling" || phase.flow === "atrial");
          drawParticlePath([rv, pul, pulmonaryOut], Math.max(2, ejectionCount - 2), 1.2 + current.contractility / 100, COLORS.venous, phase.flow === "ejection");
          drawParticlePath([lv, aor, aortaOut], ejectionCount, 1.2 + current.contractility / 100, COLORS.arterial, phase.flow === "ejection");

          const conduction = [local(0.25, 0.39), local(0.43, 0.50), local(0.51, 0.57), local(0.42, 0.79), local(0.66, 0.82)];
          const conductionTimes = [0.01, 0.10, 0.14, 0.17, 0.17]; p.noFill(); p.stroke("#8d7b53aa"); p.strokeWeight(2); p.beginShape(); conduction.forEach((node) => p.vertex(node.x, node.y)); p.endShape();
          conduction.forEach((node, index) => { const distance = Math.abs(cycle - conductionTimes[index]); const active = distance < 0.035 || distance > 0.965; p.noStroke(); p.fill(active ? COLORS.conduction : "#7c8582"); p.circle(node.x, node.y, active ? 12 : 7); });
          label("SA", conduction[0].x - 16, conduction[0].y - 11, 9, COLORS.conduction); label("AV", conduction[1].x - 16, conduction[1].y, 9, COLORS.conduction);

          label(`${phase.label} · ${phase.flow === "none" ? "모든 판막 폐쇄" : phase.flow === "ejection" ? "semilunar valves open" : "AV valves open"}`, compact ? width / 2 : heartX, 20, 13, COLORS.ink);
          label(`HR ${current.heartRate.toFixed(0)}/min · cycle ${(60000 / current.heartRate).toFixed(0)} ms · filling ${current.fillingTimeMs.toFixed(0)} ms`, compact ? width / 2 : heartX, 40, 10, COLORS.muted);

          if (compact) { drawEcg(20, 520, width - 40, cycle); drawPvLoop(20, 600, width - 40, 135, current); }
          else { const panelX = width * 0.58; drawEcg(panelX, 120, width - panelX - 18, cycle); drawPvLoop(panelX, 220, width - panelX - 18, 220, current); }

          const timelineY = height - 20; const phaseStops = [0, 0.12, 0.18, 0.4, 0.52, 0.6, 0.78, 1];
          p.stroke("#b8c5c6"); p.strokeWeight(2); p.line(24, timelineY, width - 24, timelineY); p.stroke(COLORS.open); p.strokeWeight(3); p.line(24, timelineY, p.lerp(24, width - 24, cycle), timelineY);
          phaseStops.forEach((stop) => { p.noStroke(); p.fill(cycle >= stop ? COLORS.open : "#b8c5c6"); p.circle(p.lerp(24, width - 24, stop), timelineY, 6); });
          p.describe(`심장 절개도와 동기화된 혈류, 전도, ECG, 압력 용적 고리. 현재 ${phase.label}, 심박수 ${current.heartRate.toFixed(0)}, EDV ${current.edv.toFixed(0)}, ESV ${current.esv.toFixed(0)}, 박출률 ${current.ejectionFraction.toFixed(0)} 퍼센트.`);
        };
      };
      instance = new P5(sketch, host); instanceRef.current = instance;
    });
    return () => { cancelled = true; observer?.disconnect(); instance?.remove(); instanceRef.current = null; };
  }, []);

  return <div ref={hostRef} className="min-h-[650px] w-full" aria-label="심장 절개도에서 전도, ECG, 판막, 수축, 혈류와 압력 용적 고리가 동기화된 시뮬레이션" />;
}
