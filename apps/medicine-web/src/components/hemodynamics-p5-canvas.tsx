"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { HemodynamicsState } from "@/lib/hemodynamics-model";

type P5Instance = p5;

export function HemodynamicsP5Canvas({ state }: { state: HemodynamicsState }) {
  const hostRef = useRef<HTMLDivElement>(null); const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; }, [state]);
  useEffect(() => {
    let instance: P5Instance | undefined; let observer: ResizeObserver | undefined; let cancelled = false;
    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return; const host = hostRef.current;
      const sketch = (p: P5Instance) => {
        let w = 760; let h = 540;
        const label = (s: string, x: number, y: number, size = 11, c = "#53656a") => { p.noStroke(); p.fill(c); p.textAlign(p.CENTER, p.CENTER); p.textSize(size); p.text(s, x, y); };
        const resize = () => { w = Math.max(320, host.clientWidth); h = Math.max(500, Math.min(590, w * .7)); p.resizeCanvas(w, h); };
        p.setup = () => { const c = p.createCanvas(w, h); c.parent(host); p.frameRate(30); p.textFont("Arial"); observer = new ResizeObserver(resize); observer.observe(host); resize(); };
        p.draw = () => {
          const s = stateRef.current; const cycle = (p.frameCount * s.heartRate / 60 / 30) % 1; const systole = cycle > .12 && cycle < .46; const squeeze = systole ? Math.sin((cycle - .12) / .34 * Math.PI) : 0;
          p.background("#edf2f1"); p.stroke("#d6dfde"); p.strokeWeight(.6); for (let x = 20; x < w; x += 28) p.line(x, 0, x, h); for (let y = 20; y < h; y += 28) p.line(0, y, w, y);
          const cx = w * .39; const cy = h * .46; const chamber = (x: number, y: number, rw: number, rh: number, color: string, name: string) => { p.stroke("#855f63"); p.strokeWeight(3); p.fill(color); p.ellipse(x, y, rw * (1 - squeeze * .12), rh * (1 - squeeze * .2)); label(name, x, y, 12, "#26383d"); };
          p.noFill(); p.stroke("#8c6669"); p.strokeWeight(14); p.bezier(cx - 155, cy - 145, cx - 190, cy - 40, cx - 155, cy + 30, cx - 98, cy + 58); p.bezier(cx + 75, cy - 35, cx + 95, cy - 145, cx + 205, cy - 145, cx + 255, cy - 70);
          chamber(cx - 70, cy - 58, 90, 72, "#d7dde4", "RA"); chamber(cx - 62, cy + 48, 118, 128, "#cad7df", "RV"); chamber(cx + 55, cy - 62, 84, 68, "#ead7d5", "LA"); chamber(cx + 58, cy + 50, 120, 142, "#e4c5c4", "LV");
          p.stroke("#33494d"); p.strokeWeight(3); p.line(cx - 69, cy - 15, cx - 69, cy + 3); p.line(cx + 55, cy - 20, cx + 55, cy + 2); p.line(cx + 10, cy + 2, cx + 10, cy + 86);
          const path = [[cx - 170, cy - 105], [cx - 70, cy - 58], [cx - 62, cy + 48], [cx - 10, cy + 128], [cx + 250, cy - 70], [cx + 55, cy - 62], [cx + 58, cy + 50], [cx + 255, cy - 70]];
          for (let i = 0; i < 20; i += 1) { const t = (p.frameCount * .006 * s.heartRate / 70 + i / 20) % 1; const scaled = t * (path.length - 1); const j = Math.min(path.length - 2, Math.floor(scaled)); const local = scaled - j; p.noStroke(); p.fill(j < 4 ? "#607a91" : "#a85d62"); p.circle(p.lerp(path[j][0], path[j + 1][0], local), p.lerp(path[j][1], path[j + 1][1], local), 7); }
          label(systole ? "VENTRICULAR SYSTOLE" : "VENTRICULAR FILLING", cx, 28, 12, "#276f70"); label(`HR ${s.heartRate.toFixed(0)}/min`, cx, 47, 11);
          const px = w * .75; const py = h * .54; const pw = w * .2; const ph = h * .26; p.noFill(); p.stroke("#93a4a7"); p.strokeWeight(1); p.rect(px, py, pw, ph); label("LV PRESSURE-VOLUME", px + pw / 2, py - 18, 10);
          const xEdv = px + pw * .86; const xEsv = px + pw * .2; const yTop = py + ph * .15; const yBottom = py + ph * .85; p.stroke("#287d78"); p.strokeWeight(3); p.line(xEdv, yBottom, xEdv, yTop); p.bezier(xEdv, yTop, px + pw * .7, py, xEsv, py, xEsv, yTop + 12); p.line(xEsv, yTop + 12, xEsv, yBottom); p.line(xEsv, yBottom, xEdv, yBottom); label(`ESV ${s.esv.toFixed(0)}`, xEsv, py + ph + 15, 10); label(`EDV ${s.edv.toFixed(0)}`, xEdv, py + ph + 15, 10);
          const ecgY = h - 40; p.stroke("#745e82"); p.strokeWeight(2); p.noFill(); p.beginShape(); for (let x = 25; x < w - 25; x += 2) { const q = ((x / (w - 50) * 2 + cycle) % 1); let y = 0; if (q > .08 && q < .14) y = -8 * Math.sin((q - .08) / .06 * Math.PI); if (q > .2 && q < .28) y = q < .23 ? 12 : q < .245 ? -45 : 18; if (q > .48 && q < .62) y = -12 * Math.sin((q - .48) / .14 * Math.PI); p.vertex(x, ecgY + y); } p.endShape(); label("ECG · electrical activation precedes contraction", w * .5, h - 12, 10);
          p.describe(`심장 네 방의 혈류와 압력 용적 고리. 심박수 ${s.heartRate.toFixed(0)}, 박출률 ${s.ejectionFraction.toFixed(0)} 퍼센트, 심박출량 ${s.cardiacOutput.toFixed(1)} 리터 매분.`);
        };
      }; instance = new P5(sketch, host);
    }); return () => { cancelled = true; observer?.disconnect(); instance?.remove(); };
  }, []);
  return <div ref={hostRef} className="min-h-[500px] w-full" aria-label="심장 4개 방, 혈류, 압력 용적 고리와 심전도가 동기화된 시뮬레이션" />;
}
