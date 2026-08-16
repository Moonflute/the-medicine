"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { AcidBaseState } from "@/lib/acid-base-model";

type P5Instance = p5;

function statusColor(state: AcidBaseState) {
  if (state.status === "acidemia") return "#dc2626";
  if (state.status === "alkalemia") return "#7c3aed";
  return "#0f766e";
}

export function AcidBaseP5Canvas({ state }: { state: AcidBaseState }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef(state);
  const instanceRef = useRef<P5Instance | null>(null);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | undefined;

    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return;
      const host = hostRef.current;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const sketch = (p: P5Instance) => {
        let canvasWidth = 720;
        let canvasHeight = 430;
        let lastDescription = "";

        const resize = () => {
          canvasWidth = Math.max(320, Math.floor(host.clientWidth));
          canvasHeight = Math.max(360, Math.min(500, Math.floor(canvasWidth * 0.62)));
          p.resizeCanvas(canvasWidth, canvasHeight);
        };

        const drawArrow = (x1: number, y1: number, x2: number, y2: number, color: string, weight = 3) => {
          const angle = Math.atan2(y2 - y1, x2 - x1);
          p.stroke(color);
          p.strokeWeight(weight);
          p.line(x1, y1, x2, y2);
          p.push();
          p.translate(x2, y2);
          p.rotate(angle);
          p.noStroke();
          p.fill(color);
          p.triangle(0, 0, -9, -5, -9, 5);
          p.pop();
        };

        const drawLungs = (x: number, y: number, scale: number, current: AcidBaseState) => {
          const breath = reducedMotion ? 0 : Math.sin(p.frameCount * 0.08) * (current.ventilation / 100) * 3;
          p.noStroke();
          p.fill("#fee2e2");
          p.ellipse(x - 34, y, 65 + breath, 112 + breath);
          p.ellipse(x + 34, y, 65 + breath, 112 + breath);
          p.fill("#fecaca");
          p.ellipse(x - 34, y, 43 + breath, 82 + breath);
          p.ellipse(x + 34, y, 43 + breath, 82 + breath);
          p.stroke("#991b1b");
          p.strokeWeight(7 * scale);
          p.line(x, y - 80, x, y - 25);
          p.line(x, y - 25, x - 24, y - 2);
          p.line(x, y - 25, x + 24, y - 2);
          p.noStroke();
          p.fill("#7f1d1d");
          p.textAlign(p.CENTER, p.CENTER);
          p.textSize(14);
          p.textStyle(p.BOLD);
          p.text("LUNGS", x, y + 78);
          p.textStyle(p.NORMAL);
          p.textSize(12);
          p.fill("#475569");
          p.text(`환기 ${current.ventilation.toFixed(0)}%`, x, y + 97);
        };

        const drawKidney = (x: number, y: number, current: AcidBaseState) => {
          p.noStroke();
          p.fill("#fef3c7");
          p.beginShape();
          for (let a = 0; a < p.TWO_PI; a += 0.12) {
            const radius = 54 + 12 * Math.sin(a);
            const px = x + Math.cos(a) * radius * 0.72;
            const py = y + Math.sin(a) * radius;
            p.vertex(px, py);
          }
          p.endShape(p.CLOSE);
          p.fill("#f59e0b");
          p.ellipse(x + 7, y, 18, 56);
          p.fill("#78350f");
          p.textAlign(p.CENTER, p.CENTER);
          p.textStyle(p.BOLD);
          p.textSize(14);
          p.text("KIDNEY", x, y + 78);
          p.textStyle(p.NORMAL);
          p.textSize(12);
          p.fill("#475569");
          p.text(`HCO3- ${current.bicarbonate.toFixed(1)}`, x, y + 97);
        };

        const drawParticles = (current: AcidBaseState, bloodY: number) => {
          const co2Count = Math.round(Math.min(18, current.paCO2 / 5));
          const hco3Count = Math.round(Math.min(18, current.bicarbonate / 2.2));
          for (let index = 0; index < co2Count; index += 1) {
            const progress = reducedMotion ? index / Math.max(1, co2Count - 1) : (p.frameCount * 0.008 + index / co2Count) % 1;
            const x = p.lerp(canvasWidth * 0.25, canvasWidth * 0.72, progress);
            const y = bloodY + Math.sin(index * 2.1 + p.frameCount * 0.04) * 15;
            p.noStroke();
            p.fill("#2563eb");
            p.circle(x, y, 14);
            p.fill("#ffffff");
            p.textAlign(p.CENTER, p.CENTER);
            p.textSize(7);
            p.textStyle(p.BOLD);
            p.text("CO2", x, y + 0.5);
          }
          for (let index = 0; index < hco3Count; index += 1) {
            const progress = reducedMotion ? index / Math.max(1, hco3Count - 1) : (p.frameCount * 0.006 + index / hco3Count) % 1;
            const x = p.lerp(canvasWidth * 0.72, canvasWidth * 0.25, progress);
            const y = bloodY + 22 + Math.cos(index * 1.7 + p.frameCount * 0.03) * 8;
            p.noStroke();
            p.fill("#f59e0b");
            p.rect(x - 8, y - 6, 16, 12, 3);
          }
        };

        p.setup = () => {
          const canvas = p.createCanvas(canvasWidth, canvasHeight);
          canvas.parent(host);
          p.frameRate(reducedMotion ? 1 : 30);
          p.textFont("Arial, sans-serif");
          resizeObserver = new ResizeObserver(resize);
          resizeObserver.observe(host);
          resize();
          if (reducedMotion) p.noLoop();
        };

        p.draw = () => {
          const current = stateRef.current;
          const color = statusColor(current);
          p.background("#f8fafc");

          p.noStroke();
          p.fill("#ffffff");
          p.rect(16, 16, canvasWidth - 32, 92, 8);
          p.fill("#0f172a");
          p.textAlign(p.LEFT, p.TOP);
          p.textStyle(p.BOLD);
          p.textSize(13);
          p.text("Henderson-Hasselbalch balance", 34, 31);
          p.textStyle(p.NORMAL);
          p.textSize(12);
          p.fill("#64748b");
          p.text("pH = 6.1 + log [ HCO3- / (0.03 x PaCO2) ]", 34, 53);

          const gaugeX = 34;
          const gaugeY = 79;
          const gaugeWidth = canvasWidth - 68;
          p.noStroke();
          p.fill("#fee2e2");
          p.rect(gaugeX, gaugeY, gaugeWidth * 0.44, 12, 6, 0, 0, 6);
          p.fill("#ccfbf1");
          p.rect(gaugeX + gaugeWidth * 0.44, gaugeY, gaugeWidth * 0.12, 12);
          p.fill("#ede9fe");
          p.rect(gaugeX + gaugeWidth * 0.56, gaugeY, gaugeWidth * 0.44, 12, 0, 6, 6, 0);
          const gaugePosition = clampMap(current.pH, 6.9, 7.8, gaugeX, gaugeX + gaugeWidth);
          p.fill(color);
          p.triangle(gaugePosition, gaugeY - 3, gaugePosition - 7, gaugeY - 14, gaugePosition + 7, gaugeY - 14);
          p.fill("#0f172a");
          p.textAlign(p.CENTER, p.BOTTOM);
          p.textStyle(p.BOLD);
          p.textSize(18);
          p.text(`pH ${current.pH.toFixed(2)}`, gaugePosition, gaugeY - 17);

          const organY = canvasHeight * 0.48;
          const lungX = canvasWidth * 0.2;
          const kidneyX = canvasWidth * 0.8;
          drawLungs(lungX, organY, 1, current);
          drawKidney(kidneyX, organY, current);

          const bloodY = canvasHeight * 0.72;
          p.noStroke();
          p.fill("#e2e8f0");
          p.rect(canvasWidth * 0.23, bloodY - 28, canvasWidth * 0.54, 64, 32);
          p.fill("#ffffff");
          p.rect(canvasWidth * 0.25, bloodY - 20, canvasWidth * 0.5, 48, 24);
          drawParticles(current, bloodY - 3);

          drawArrow(lungX + 60, organY + 12, canvasWidth * 0.33, bloodY - 35, "#2563eb", 2.5);
          drawArrow(kidneyX - 58, organY + 12, canvasWidth * 0.67, bloodY - 35, "#f59e0b", 2.5);

          p.noStroke();
          p.fill("#0f172a");
          p.textAlign(p.CENTER, p.TOP);
          p.textStyle(p.BOLD);
          p.textSize(14);
          p.text(`PaCO2 ${current.paCO2.toFixed(0)} mmHg`, canvasWidth * 0.4, canvasHeight - 48);
          p.text(`HCO3- ${current.bicarbonate.toFixed(1)} mmol/L`, canvasWidth * 0.64, canvasHeight - 48);

          const description = `산-염기 균형 도식. pH ${current.pH.toFixed(2)}, PaCO2 ${current.paCO2.toFixed(0)} mmHg, HCO3- ${current.bicarbonate.toFixed(1)} mmol/L이며 ${current.pattern}을 나타냅니다.`;
          if (description !== lastDescription) {
            p.describe(description);
            lastDescription = description;
          }
        };

        function clampMap(value: number, min: number, max: number, start: number, end: number) {
          return p.map(Math.min(max, Math.max(min, value)), min, max, start, end);
        }
      };

      instanceRef.current = new P5(sketch, host);
    });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      instanceRef.current?.remove();
      instanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    instanceRef.current?.redraw();
  }, [state]);

  return <div ref={hostRef} className="min-h-[360px] w-full overflow-hidden bg-slate-50" aria-label="산-염기 균형 애니메이션" />;
}
