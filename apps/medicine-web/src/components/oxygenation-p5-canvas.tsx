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

        const curvePoint = (
          x1: number,
          y1: number,
          cx1: number,
          cy1: number,
          cx2: number,
          cy2: number,
          x2: number,
          y2: number,
          progress: number,
        ) => ({
          x: p.bezierPoint(x1, cx1, cx2, x2, progress),
          y: p.bezierPoint(y1, cy1, cy2, y2, progress),
        });

        const drawTube = (
          x1: number,
          y1: number,
          cx1: number,
          cy1: number,
          cx2: number,
          cy2: number,
          x2: number,
          y2: number,
          outerColor: string,
          innerColor: string,
          outerWeight: number,
          innerWeight: number,
        ) => {
          p.noFill();
          p.stroke(outerColor);
          p.strokeWeight(outerWeight);
          p.bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
          p.stroke(innerColor);
          p.strokeWeight(innerWeight);
          p.bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
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
          const startX = lungX;
          const startY = 116;
          const endX = lungX;
          const endY = lungY - 62;
          const flux = mapClamped(current.fio2, 0.21, 1, 0.7, 2.2);
          drawTube(startX, startY, startX, p.lerp(startY, endY, 0.35), endX, p.lerp(startY, endY, 0.72), endX, endY, "#8fa6aa", "#e3eeee", 7, 4);
          const count = Math.round(mapClamped(current.fio2, 0.21, 1, 3, 10));
          for (let index = 0; index < count; index += 1) {
            const progress = reducedMotion ? (index + 1) / (count + 1) : (p.frameCount * 0.008 * flux + index / count) % 1;
            const point = curvePoint(startX, startY, startX, p.lerp(startY, endY, 0.35), endX, p.lerp(startY, endY, 0.72), endX, endY, progress);
            drawOxygen(point.x, point.y, 4.5);
          }
          label(`FiO₂ ${(current.fio2 * 100).toFixed(0)}%`, startX + 12, startY + 7, 11, COLORS.oxygen);
        };

        const drawZoomCallout = (lungX: number, lungY: number, scale: number, alveolusX: number, alveolusY: number, radius: number) => {
          const boxX = lungX + 22 * scale;
          const boxY = lungY + 8 * scale;
          const boxWidth = 30 * scale;
          const boxHeight = 27 * scale;
          const insetEdgeX = alveolusX - radius - 14;
          p.noFill();
          p.stroke("#657b80");
          p.strokeWeight(1.2);
          p.rect(boxX - boxWidth / 2, boxY - boxHeight / 2, boxWidth, boxHeight, 2);
          p.stroke("#9baaad");
          p.strokeWeight(0.9);
          p.line(boxX + boxWidth / 2, boxY - boxHeight / 2, insetEdgeX, alveolusY - radius * 0.5);
          p.line(boxX + boxWidth / 2, boxY + boxHeight / 2, insetEdgeX, alveolusY + radius * 0.5);
          label("magnified acinus", p.lerp(boxX, insetEdgeX, 0.55), alveolusY - radius * 0.62, 9, COLORS.muted, p.CENTER);
        };

        const drawAlveolarUnit = (x: number, y: number, radius: number, current: OxygenationState) => {
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

          const capillaryRadius = radius + 12;
          const startAngle = p.PI * 0.72;
          const endAngle = p.PI * 2.22;
          p.noFill();
          p.stroke("#d1bbbb");
          p.strokeWeight(15);
          p.arc(x, y, capillaryRadius * 2, capillaryRadius * 2, startAngle, endAngle);
          p.stroke("#f2e8e6");
          p.strokeWeight(9);
          p.arc(x, y, capillaryRadius * 2, capillaryRadius * 2, startAngle, endAngle);

          const redCellCount = 7;
          for (let index = 0; index < redCellCount; index += 1) {
            const progress = reducedMotion ? index / (redCellCount - 1) : (index / redCellCount + p.frameCount * 0.0027) % 1;
            const angle = p.lerp(startAngle, endAngle, progress);
            const px = x + Math.cos(angle) * capillaryRadius;
            const py = y + Math.sin(angle) * capillaryRadius;
            p.noStroke();
            p.fill(progress < 0.42 ? COLORS.venous : COLORS.arterial);
            p.ellipse(px, py, 17, 10);
            const carried = Math.round(mapClamped(progress, 0, 1, 1, mapClamped(current.saO2, 70, 100, 2, 4)));
            for (let dot = 0; dot < carried; dot += 1) drawOxygen(px - 4 + dot * 3, py - 1, 2.8, 210);
          }

          const shuntStartX = x + Math.cos(startAngle) * capillaryRadius;
          const shuntStartY = y + Math.sin(startAngle) * capillaryRadius;
          const shuntEndX = x + Math.cos(endAngle) * capillaryRadius;
          const shuntEndY = y + Math.sin(endAngle) * capillaryRadius;
          const shuntControlY = y + radius + 31;
          const shuntWeight = 3.5 + current.shuntFraction * 15;
          drawTube(shuntStartX, shuntStartY, x - radius * 0.3, shuntControlY, x + radius * 0.35, shuntControlY, shuntEndX, shuntEndY, COLORS.shunt, "#c9becb", shuntWeight, Math.max(1.5, shuntWeight - 3.2));
          const shuntCount = current.shuntFraction < 0.005 ? 0 : Math.round(mapClamped(current.shuntFraction, 0, 0.35, 1, 6));
          for (let index = 0; index < shuntCount; index += 1) {
            const progress = reducedMotion ? (index + 1) / (shuntCount + 1) : (p.frameCount * 0.0045 + index / shuntCount) % 1;
            const point = curvePoint(shuntStartX, shuntStartY, x - radius * 0.3, shuntControlY, x + radius * 0.35, shuntControlY, shuntEndX, shuntEndY, progress);
            p.noStroke();
            p.fill(COLORS.venous);
            p.ellipse(point.x, point.y, 12, 7);
          }

          const transfer = clamp((current.endCapillaryPO2 - 18) / 90, 0.18, 1.7) * (1 - current.vqMismatch / 150);
          const count = Math.round(mapClamped(transfer, 0.1, 1.4, 2, 8));
          for (let index = 0; index < count; index += 1) {
            const progress = reducedMotion ? (index + 1) / (count + 1) : (p.frameCount * 0.009 * transfer + index / count) % 1;
            const angle = p.lerp(0.18, p.PI * 0.82, (index + 0.5) / count);
            const radial = p.lerp(radius * 0.55, capillaryRadius, progress);
            drawOxygen(x + Math.cos(angle) * radial, y + Math.sin(angle) * radial, 4.2);
          }

          label("ALVEOLAR–CAPILLARY UNIT", x, y - radius - 25, 11, COLORS.ink, p.CENTER);
          label(`PAO₂ ${current.alveolarPO2.toFixed(0)}`, x, y + 3, 11, COLORS.oxygen, p.CENTER);
          label(`V/Q mismatch ${current.vqMismatch.toFixed(0)}% · end-capillary PO₂ ${current.endCapillaryPO2.toFixed(0)}`, x, y + radius + 20, 10, current.vqMismatch > 30 ? COLORS.warning : COLORS.muted, p.CENTER);
          label(`non-ventilated shunt flow ${(current.shuntFraction * 100).toFixed(0)}%`, x, y + radius + 37, 10, COLORS.shunt, p.CENTER);
        };

        const drawArterialVessel = (startX: number, startY: number, endX: number, endY: number, current: OxygenationState) => {
          const control1X = p.lerp(startX, endX, 0.34);
          const control2X = p.lerp(startX, endX, 0.72);
          drawTube(startX, startY, control1X, startY + 4, control2X, endY + 8, endX, endY, "#9a5d61", "#edcfd0", 16, 9);
          const count = 6;
          for (let index = 0; index < count; index += 1) {
            const progress = reducedMotion ? (index + 1) / (count + 1) : (p.frameCount * 0.0032 + index / count) % 1;
            const point = curvePoint(startX, startY, control1X, startY + 4, control2X, endY + 8, endX, endY, progress);
            p.noStroke();
            p.fill(COLORS.arterial);
            p.ellipse(point.x, point.y, 16, 9);
            const carried = Math.round(mapClamped(current.saO2, 70, 100, 1, 4));
            for (let dot = 0; dot < carried; dot += 1) drawOxygen(point.x - 4 + dot * 3, point.y - 1, 2.8, 210);
          }
          const midpoint = curvePoint(startX, startY, control1X, startY + 4, control2X, endY + 8, endX, endY, 0.52);
          label(`PaO₂ ${current.paO2.toFixed(0)} · SaO₂ ${current.saO2.toFixed(0)}%`, midpoint.x, midpoint.y - 17, 11, COLORS.arterial, p.CENTER);
        };

        const drawTissue = (x: number, y: number, vesselY: number, current: OxygenationState) => {
          const cells = [
            { x: -2, y: -30, size: 35 },
            { x: 24, y: -8, size: 32 },
            { x: 10, y: 24, size: 38 },
            { x: -24, y: 18, size: 31 },
            { x: -31, y: -15, size: 27 },
          ];
          p.noStroke();
          for (const cell of cells) {
            p.fill("#d7c7b6");
            p.circle(x + cell.x, y + cell.y, cell.size + 5);
            p.fill("#f1eae2");
            p.circle(x + cell.x, y + cell.y, cell.size);
            p.fill("#b89d80");
            p.circle(x + cell.x + 3, y + cell.y - 2, 5);
          }
          p.noFill();
          p.stroke("#b36c6f");
          p.strokeWeight(8);
          p.arc(x - 25, y, 74, 98, p.HALF_PI, p.PI + p.HALF_PI);
          const delivered = Math.round(mapClamped(current.caO2, 7, 25, 2, 10));
          for (let index = 0; index < delivered; index += 1) {
            const progress = reducedMotion ? (index + 1) / (delivered + 1) : (p.frameCount * 0.006 + index / delivered) % 1;
            const target = cells[index % cells.length];
            drawOxygen(p.lerp(x - 42, x + target.x, progress), p.lerp(vesselY, y + target.y, progress), 4, 210);
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

          const lungX = compact ? 62 : canvasWidth * 0.17;
          const lungY = compact ? 224 : 244;
          const alveolusX = compact ? canvasWidth * 0.48 : canvasWidth * 0.38;
          const alveolusY = compact ? 224 : 240;
          const alveolusRadius = compact ? 38 : 55 * scale;
          const capillaryRadius = alveolusRadius + 12;
          const arteryStartAngle = p.PI * 0.22;
          const arteryStartX = alveolusX + Math.cos(arteryStartAngle) * capillaryRadius;
          const arteryStartY = alveolusY + Math.sin(arteryStartAngle) * capillaryRadius;
          const tissueX = compact ? canvasWidth - 43 : canvasWidth * 0.86;
          const tissueY = compact ? 246 : 262;
          const vesselEndX = tissueX - 62;
          const vesselEndY = tissueY;

          label(view.cause, canvasWidth - 24, 116, 11, COLORS.ink, p.RIGHT);
          label(view.timeLabel, canvasWidth - 24, 128, 10, COLORS.muted, p.RIGHT);
          drawInspiredOxygen(lungX, lungY, current);
          drawLung(lungX, lungY, scale, current);
          drawZoomCallout(lungX, lungY, scale, alveolusX, alveolusY, alveolusRadius);
          drawAlveolarUnit(alveolusX, alveolusY, alveolusRadius, current);
          drawArterialVessel(arteryStartX, arteryStartY, vesselEndX, vesselEndY, current);
          drawTissue(tissueX, tissueY, vesselEndY, current);
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
