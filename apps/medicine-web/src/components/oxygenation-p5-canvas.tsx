"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { OxygenationState } from "@/lib/oxygenation-model";

type P5Instance = p5;
type P5Image = Awaited<ReturnType<P5Instance["loadImage"]>>;

const ASSET_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type OxygenationSimulationView = {
  phase: "steady" | "transition" | "settled";
  progress: number;
  cause: string;
  timeLabel: string;
};

const COLORS = {
  ink: "#26353a",
  muted: "#68787e",
  line: "#bcc8ca",
  oxygen: "#297f91",
  oxygenLight: "#79b6c0",
  venous: "#756678",
  arterial: "#a45d62",
  shunt: "#725d74",
  tissue: "#9b7f61",
  normal: "#39786f",
  warning: "#a87835",
  critical: "#a95555",
};

function statusColor(state: OxygenationState) {
  if (state.status === "critical") return COLORS.critical;
  if (state.status === "impaired") return COLORS.warning;
  return COLORS.normal;
}

export function OxygenationP5Canvas({ state, simulation }: { state: OxygenationState; simulation: OxygenationSimulationView }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef(state);
  const simulationRef = useRef(simulation);
  const instanceRef = useRef<P5Instance | null>(null);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    simulationRef.current = simulation;
  }, [simulation]);

  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | undefined;

    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return;
      const host = hostRef.current;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const sketch = (p: P5Instance) => {
        let canvasWidth = 760;
        let canvasHeight = 520;
        let lungImage: P5Image | null = null;
        let lastDescription = "";
        const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
        const mapClamped = (value: number, min: number, max: number, start: number, end: number) => p.map(clamp(value, min, max), min, max, start, end);

        const resize = () => {
          canvasWidth = Math.max(320, Math.floor(host.clientWidth));
          canvasHeight = clamp(Math.floor(canvasWidth * 0.67), 480, 570);
          p.resizeCanvas(canvasWidth, canvasHeight);
        };

        const label = (
          text: string,
          x: number,
          y: number,
          size = 11,
          color = COLORS.muted,
          align: typeof p.LEFT | typeof p.CENTER | typeof p.RIGHT = p.LEFT,
        ) => {
          p.noStroke();
          p.fill(color);
          p.textAlign(align, p.CENTER);
          p.textStyle(p.NORMAL);
          p.textSize(size);
          p.text(text, x, y);
        };

        const drawArrow = (x1: number, y1: number, x2: number, y2: number, color: string, weight: number, speed = 1, phase = 0) => {
          const angle = Math.atan2(y2 - y1, x2 - x1);
          p.stroke(color);
          p.strokeWeight(weight);
          p.line(x1, y1, x2, y2);
          const progress = reducedMotion ? 0.72 : (p.frameCount * 0.01 * speed + phase) % 1;
          p.push();
          p.translate(p.lerp(x1, x2, progress), p.lerp(y1, y2, progress));
          p.rotate(angle);
          p.noStroke();
          p.fill(color);
          p.triangle(5, 0, -5, -3.5, -5, 3.5);
          p.pop();
        };

        const drawOxygen = (x: number, y: number, size = 6, alpha = 220) => {
          p.noStroke();
          p.fill(41, 127, 145, alpha);
          p.circle(x - size * 0.24, y, size);
          p.circle(x + size * 0.24, y, size);
        };

        const drawHeader = (current: OxygenationState) => {
          const x = 24;
          const y = 24;
          const width = canvasWidth - 48;
          const gaugeY = 75;
          p.noStroke();
          p.fill(247, 249, 248, 238);
          p.rect(x, y, width, 76, 7);
          p.stroke(COLORS.line);
          p.strokeWeight(0.8);
          p.noFill();
          p.rect(x, y, width, 76, 7);
          label("ARTERIAL OXYGENATION", x + 14, y + 14, 10, COLORS.muted);
          label(current.pattern, x + width - 14, y + 14, 11, COLORS.ink, p.RIGHT);
          p.stroke("#c8d0d1");
          p.strokeWeight(4);
          p.line(x + 16, gaugeY, x + width - 16, gaugeY);
          p.stroke(COLORS.normal);
          p.strokeWeight(5);
          p.line(mapClamped(94, 70, 100, x + 16, x + width - 16), gaugeY, x + width - 16, gaugeY);
          const markerX = mapClamped(current.saO2, 70, 100, x + 16, x + width - 16);
          p.noStroke();
          p.fill(statusColor(current));
          p.circle(markerX, gaugeY, 13);
          label("70%", x + 16, gaugeY + 16, 10, COLORS.muted);
          label("100%", x + width - 16, gaugeY + 16, 10, COLORS.muted, p.RIGHT);
          label(`SaO₂ ${current.saO2.toFixed(0)}%`, markerX, gaugeY - 16, 13, statusColor(current), p.CENTER);
        };

        const drawLung = (x: number, y: number, scale: number, current: OxygenationState) => {
          const expansion = reducedMotion ? 1 : 1 + Math.sin(p.frameCount * 0.055) * mapClamped(current.respiratoryRate, 6, 30, 0.01, 0.035);
          p.push();
          p.translate(x, y);
          p.scale(expansion, 1 + (expansion - 1) * 0.7);
          if (lungImage) {
            p.imageMode(p.CENTER);
            p.tint(255, 220);
            p.image(lungImage, 0, 0, 145 * scale, 132 * scale);
            p.noTint();
          }
          p.pop();
          label("VENTILATION", x, y + 84 * scale, 11, COLORS.ink, p.CENTER);
          label(`RR ${current.respiratoryRate.toFixed(0)}/min · PaCO₂ ${current.paCO2.toFixed(0)}`, x, y + 100 * scale, 10, COLORS.muted, p.CENTER);
        };

        const drawInspiredOxygen = (lungX: number, lungY: number, current: OxygenationState) => {
          const startX = 12;
          const endX = lungX - 38;
          const y = lungY - 35;
          const flux = mapClamped(current.fio2, 0.21, 1, 0.7, 2.2);
          drawArrow(startX, y, endX, y, COLORS.oxygen, 1.2 + flux, flux, 0.1);
          const count = Math.round(mapClamped(current.fio2, 0.21, 1, 3, 10));
          for (let index = 0; index < count; index += 1) {
            const progress = reducedMotion ? (index + 1) / (count + 1) : (p.frameCount * 0.008 * flux + index / count) % 1;
            drawOxygen(p.lerp(startX, endX, progress), y - 9 + (index % 2) * 18, 4.5);
          }
          label(`FiO₂ ${(current.fio2 * 100).toFixed(0)}%`, startX, y - 19, 11, COLORS.oxygen);
        };

        const drawAlveolus = (x: number, y: number, radius: number, current: OxygenationState) => {
          p.noStroke();
          p.fill(247, 249, 248, 238);
          p.circle(x, y, radius * 2);
          p.stroke("#b58f91");
          p.strokeWeight(4);
          p.noFill();
          p.circle(x, y, radius * 1.74);
          p.stroke("#d6c1c2");
          p.strokeWeight(2);
          p.circle(x, y, radius * 1.52);

          const oxygenCount = Math.round(mapClamped(current.alveolarPO2, 30, 650, 3, 16));
          for (let index = 0; index < oxygenCount; index += 1) {
            const angle = index * 2.4 + (reducedMotion ? 0 : p.frameCount * 0.002);
            const radial = radius * (0.18 + (index % 4) * 0.12);
            drawOxygen(x + Math.cos(angle) * radial, y + Math.sin(angle) * radial, 5);
          }
          label("ALVEOLUS", x, y - radius - 16, 11, COLORS.ink, p.CENTER);
          label(`PAO₂ ${current.alveolarPO2.toFixed(0)} mmHg`, x, y + radius + 15, 11, COLORS.oxygen, p.CENTER);
        };

        const drawCapillary = (x: number, y: number, width: number, current: OxygenationState) => {
          p.noStroke();
          p.fill("#e3dddd");
          p.rect(x, y, width, 58, 20);
          p.fill("#f7f4f3");
          p.rect(x + 5, y + 5, width - 10, 48, 16);
          for (let index = 0; index < 5; index += 1) {
            const progress = reducedMotion ? index / 4 : (index / 5 + p.frameCount * 0.0028) % 1;
            const px = x + 20 + progress * (width - 40);
            p.noStroke();
            p.fill(index < 2 ? COLORS.venous : COLORS.arterial);
            p.ellipse(px, y + 29, 24, 14);
            const carried = Math.round(mapClamped(current.saO2, 70, 100, 1, 4));
            for (let dot = 0; dot < carried; dot += 1) drawOxygen(px - 6 + dot * 4, y + 27, 3.2, 210);
          }
          label(`END-CAPILLARY PO₂ ${current.endCapillaryPO2.toFixed(0)}`, x + width / 2, y + 70, 10, COLORS.muted, p.CENTER);
        };

        const drawTransfer = (alveolusX: number, alveolusY: number, capillaryY: number, current: OxygenationState) => {
          const transfer = clamp((current.endCapillaryPO2 - 18) / 90, 0.18, 1.7) * (1 - current.vqMismatch / 150);
          const count = Math.round(mapClamped(transfer, 0.1, 1.4, 2, 8));
          for (let index = 0; index < count; index += 1) {
            const progress = reducedMotion ? (index + 1) / (count + 1) : (p.frameCount * 0.009 * transfer + index / count) % 1;
            drawOxygen(alveolusX - 20 + (index % 3) * 20, p.lerp(alveolusY + 25, capillaryY + 15, progress), 4.5);
          }
          drawArrow(alveolusX + 42, alveolusY + 25, alveolusX + 42, capillaryY + 13, COLORS.oxygen, 1.2 + transfer, transfer, 0.4);
          label(`V/Q mismatch ${current.vqMismatch.toFixed(0)}%`, alveolusX + 54, alveolusY + 55, 10, current.vqMismatch > 30 ? COLORS.warning : COLORS.muted);
        };

        const drawShunt = (capillaryX: number, capillaryY: number, width: number, arteryEndX: number, current: OxygenationState) => {
          const shuntY = capillaryY + 98;
          const startX = capillaryX + 8;
          const endX = arteryEndX;
          const weight = 1 + current.shuntFraction * 12;
          p.noFill();
          p.stroke(COLORS.shunt);
          p.strokeWeight(weight);
          p.bezier(startX, capillaryY + 28, startX - 12, shuntY, endX - 50, shuntY, endX, capillaryY + 28);
          const count = Math.round(mapClamped(current.shuntFraction, 0, 0.35, 0, 7));
          for (let index = 0; index < count; index += 1) {
            const progress = reducedMotion ? (index + 1) / (count + 1) : (p.frameCount * 0.006 + index / Math.max(1, count)) % 1;
            const px = p.lerp(startX, endX, progress);
            const py = capillaryY + 28 + Math.sin(progress * p.PI) * 78;
            p.noStroke();
            p.fill(COLORS.venous);
            p.ellipse(px, py, 12, 8);
          }
          label(`SHUNT ${(current.shuntFraction * 100).toFixed(0)}%`, capillaryX + width / 2, shuntY + 16, 10, COLORS.shunt, p.CENTER);
        };

        const drawTissue = (x: number, y: number, current: OxygenationState) => {
          const delivered = mapClamped(current.caO2, 7, 25, 2, 10);
          p.noStroke();
          p.fill("#e1d7cc");
          p.rect(x - 40, y - 52, 80, 104, 18);
          p.fill("#f4efea");
          p.rect(x - 34, y - 46, 68, 92, 14);
          for (let index = 0; index < Math.round(delivered); index += 1) {
            const angle = index * 2.15;
            const radial = 10 + (index % 3) * 8;
            drawOxygen(x + Math.cos(angle) * radial, y + Math.sin(angle) * radial, 4.2, 210);
          }
          label("TISSUE DELIVERY", x, y - 66, 11, COLORS.ink, p.CENTER);
          label(`CaO₂ ${current.caO2.toFixed(1)} mL/dL`, x, y + 66, 11, COLORS.tissue, p.CENTER);
        };

        const drawTimeline = (view: OxygenationSimulationView) => {
          const x1 = 34;
          const x2 = canvasWidth - 34;
          const y = canvasHeight - 16;
          const stages = canvasWidth < 620 ? ["흡입", "폐포", "동맥혈", "조직"] : ["FiO₂·환기", "폐포 PAO₂", "PaO₂·SaO₂", "조직 산소함량"];
          p.stroke("#c1cbcc");
          p.strokeWeight(2);
          p.line(x1, y, x2, y);
          p.stroke(statusColor(stateRef.current));
          p.strokeWeight(2.5);
          p.line(x1, y, p.lerp(x1, x2, clamp(view.progress, 0, 1)), y);
          stages.forEach((stage, index) => {
            const stageProgress = index / (stages.length - 1);
            const x = p.lerp(x1, x2, stageProgress);
            p.noStroke();
            p.fill(view.progress + 0.015 >= stageProgress ? statusColor(stateRef.current) : "#c1cbcc");
            p.circle(x, y, 7);
            label(stage, x, y - 12, canvasWidth < 620 ? 9 : 10, COLORS.muted, p.CENTER);
          });
        };

        p.setup = async () => {
          lungImage = await p.loadImage(`${ASSET_BASE_PATH}/images/physiology/acid-base-lungs.png`);
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
          const view = simulationRef.current;
          const compact = canvasWidth < 620;
          const scale = clamp(canvasWidth / 850, 0.58, 0.94);
          p.background("#eef2f1");
          p.stroke("#dae1e1");
          p.strokeWeight(0.55);
          for (let x = 20; x < canvasWidth; x += 28) p.line(x, 112, x, canvasHeight - 16);
          for (let y = 116; y < canvasHeight; y += 28) p.line(16, y, canvasWidth - 16, y);
          drawHeader(current);

          const lungX = compact ? 66 : canvasWidth * 0.16;
          const lungY = compact ? 220 : 238;
          const alveolusX = compact ? canvasWidth * 0.49 : canvasWidth * 0.47;
          const alveolusY = compact ? 220 : 228;
          const alveolusRadius = compact ? 38 : 55 * scale;
          const capillaryWidth = compact ? 130 : 190 * scale;
          const capillaryX = alveolusX - capillaryWidth / 2;
          const capillaryY = compact ? 310 : 325;
          const tissueX = compact ? canvasWidth - 48 : canvasWidth * 0.86;
          const tissueY = compact ? 245 : 255;

          label(view.cause, canvasWidth - 24, 116, 11, COLORS.ink, p.RIGHT);
          label(view.timeLabel, canvasWidth - 24, 128, 10, COLORS.muted, p.RIGHT);
          drawInspiredOxygen(lungX, lungY, current);
          drawLung(lungX, lungY, scale, current);
          drawArrow(lungX + 48 * scale, lungY - 8, alveolusX - alveolusRadius, alveolusY, COLORS.oxygen, 1.8, 1, 0.2);
          drawAlveolus(alveolusX, alveolusY, alveolusRadius, current);
          drawTransfer(alveolusX, alveolusY, capillaryY, current);
          drawCapillary(capillaryX, capillaryY, capillaryWidth, current);
          drawArrow(capillaryX + capillaryWidth, capillaryY + 28, tissueX - 43, tissueY + 6, COLORS.arterial, 1.5 + current.saO2 / 70, 1, 0.5);
          drawShunt(capillaryX, capillaryY, capillaryWidth, tissueX - 43, current);
          drawTissue(tissueX, tissueY, current);
          drawTimeline(view);

          const description = `산소화와 가스교환 도식. FiO2 ${(current.fio2 * 100).toFixed(0)}%, PAO2 ${current.alveolarPO2.toFixed(0)}, PaO2 ${current.paO2.toFixed(0)} mmHg, SaO2 ${current.saO2.toFixed(0)}%, A-a gradient ${current.aaGradient.toFixed(0)} mmHg, CaO2 ${current.caO2.toFixed(1)} mL/dL. V/Q 불균형과 shunt 혈류가 폐포에서 조직까지의 산소 전달에 미치는 영향을 나타냅니다.`;
          if (description !== lastDescription) {
            p.describe(description);
            lastDescription = description;
          }
        };
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
  }, [simulation, state]);

  return <div ref={hostRef} className="min-h-[480px] w-full overflow-hidden bg-[#eef2f1]" aria-label="산소화와 폐포 가스교환 인터랙티브 도해" />;
}
