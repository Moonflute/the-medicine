"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { AcidBaseState } from "@/lib/acid-base-model";

type P5Instance = p5;
type P5Image = Awaited<ReturnType<P5Instance["loadImage"]>>;

const ASSET_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type AcidBaseSimulationView = {
  phase: "steady" | "disturbance" | "acute" | "compensating" | "compensated";
  progress: number;
  cause: string;
  primaryChange: string;
  timeLabel: string;
  compensatingSystem: "lung" | "kidney" | null;
};

const COLORS = {
  ink: "#243238",
  muted: "#68777d",
  line: "#bcc7c9",
  co2: "#3f7185",
  bicarbonate: "#b08a4a",
  hydrogen: "#a95555",
  normal: "#39786f",
  alkali: "#6b668e",
};

function statusColor(state: AcidBaseState) {
  if (state.status === "acidemia") return COLORS.hydrogen;
  if (state.status === "alkalemia") return COLORS.alkali;
  return COLORS.normal;
}

export function AcidBaseP5Canvas({ state, simulation }: { state: AcidBaseState; simulation: AcidBaseSimulationView }) {
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
        let lastDescription = "";
        let lungImage: P5Image | null = null;
        let kidneyImage: P5Image | null = null;
        const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
        const mapClamped = (value: number, min: number, max: number, start: number, end: number) => p.map(clamp(value, min, max), min, max, start, end);

        const resize = () => {
          canvasWidth = Math.max(320, Math.floor(host.clientWidth));
          canvasHeight = clamp(Math.floor(canvasWidth * 0.68), 460, 570);
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

        const drawArrow = (x1: number, y1: number, x2: number, y2: number, color: string, weight: number, phase = 0) => {
          const angle = Math.atan2(y2 - y1, x2 - x1);
          p.stroke(color);
          p.strokeWeight(weight);
          p.line(x1, y1, x2, y2);
          const progress = reducedMotion ? 0.78 : (p.frameCount * 0.012 + phase) % 1;
          p.push();
          p.translate(p.lerp(x1, x2, progress), p.lerp(y1, y2, progress));
          p.rotate(angle);
          p.noStroke();
          p.fill(color);
          p.triangle(5, 0, -5, -3.5, -5, 3.5);
          p.pop();
        };

        const drawLungs = (x: number, y: number, scale: number, current: AcidBaseState, compensationActive: boolean) => {
          const frequency = mapClamped(current.ventilation, 40, 160, 0.035, 0.085);
          const breath = reducedMotion ? 0 : Math.sin(p.frameCount * frequency);
          const expansion = 1 + breath * mapClamped(current.ventilation, 40, 160, 0.012, 0.045);

          if (compensationActive) {
            const pulse = reducedMotion ? 0 : Math.sin(p.frameCount * 0.08) * 5;
            p.noFill();
            p.stroke(63, 113, 133, 105);
            p.strokeWeight(1.2);
            p.ellipse(x, y + 8, 126 * scale + pulse, 180 * scale + pulse);
          }

          p.push();
          p.translate(x, y);
          p.scale(expansion, 1 + (expansion - 1) * 0.75);
          if (lungImage) {
            p.imageMode(p.CENTER);
            p.tint(255, 224);
            p.image(lungImage, 0, 0, 145 * scale, 145 * scale);
            p.noTint();
          }
          p.pop();
          label("PULMONARY CONTROL", x, y + 105 * scale, 11, COLORS.ink, p.CENTER);
          label(`alveolar ventilation ${current.ventilation.toFixed(0)}%`, x, y + 121 * scale, 11, COLORS.muted, p.CENTER);
        };

        const drawAlveolarInset = (x: number, y: number, radius: number, current: AcidBaseState) => {
          p.noStroke();
          p.fill(247, 249, 248, 235);
          p.circle(x, y, radius * 2);
          p.stroke(COLORS.line);
          p.strokeWeight(1);
          p.noFill();
          p.circle(x, y, radius * 2);
          for (let index = 0; index < 6; index += 1) {
            const angle = p.TWO_PI * index / 6;
            p.fill("#d8c3c4");
            p.stroke("#9a8588");
            p.strokeWeight(0.75);
            p.circle(x + Math.cos(angle) * radius * 0.34, y + Math.sin(angle) * radius * 0.31, radius * 0.36);
          }
          p.noFill();
          p.stroke("#728d98");
          p.strokeWeight(2);
          p.arc(x, y, radius * 1.55, radius * 1.55, -0.3, p.PI + 0.55);

          const flux = clamp((current.paCO2 / 40) * (current.ventilation / 100), 0.4, 2.3);
          const count = Math.round(mapClamped(flux, 0.4, 2.3, 2, 7));
          for (let index = 0; index < count; index += 1) {
            const progress = reducedMotion ? (index + 1) / (count + 1) : (p.frameCount * 0.01 * flux + index / count) % 1;
            const angle = p.lerp(0.8, -1.15, progress);
            p.noStroke();
            p.fill(COLORS.co2);
            p.circle(x + Math.cos(angle) * radius * 0.66, y + Math.sin(angle) * radius * 0.66, 4.5);
          }
          label("alveolar CO₂ flux", x, y + radius + 12, 10, COLORS.co2, p.CENTER);
        };

        const drawKidney = (x: number, y: number, scale: number, current: AcidBaseState, compensationActive: boolean) => {
          if (compensationActive) {
            const pulse = reducedMotion ? 0 : Math.sin(p.frameCount * 0.055) * 5;
            p.noFill();
            p.stroke(176, 138, 74, 110);
            p.strokeWeight(1.2);
            p.ellipse(x - 10, y + 2, 115 * scale + pulse, 175 * scale + pulse);
          }
          p.push();
          p.translate(x, y);
          if (kidneyImage) {
            p.imageMode(p.CENTER);
            p.tint(255, 218);
            p.image(kidneyImage, 0, 0, 112 * scale, 140 * scale);
            p.noTint();
          }
          p.pop();

          const renalDrive = clamp((current.paCO2 - 40) / 35, -1, 1);
          const driveLabel = renalDrive > 0.12 ? "HCO₃⁻ conservation / generation" : renalDrive < -0.12 ? "HCO₃⁻ excretion favored" : "baseline renal handling";
          label("RENAL CONTROL", x, y + 98 * scale, 11, COLORS.ink, p.CENTER);
          label(driveLabel, x, y + 114 * scale, 10, renalDrive < -0.12 ? COLORS.hydrogen : COLORS.bicarbonate, p.CENTER);
        };

        const drawNephronInset = (x: number, y: number, width: number, current: AcidBaseState) => {
          const height = 54;
          p.noStroke();
          p.fill(247, 249, 248, 238);
          p.rect(x, y, width, height, 6);
          p.stroke(COLORS.line);
          p.strokeWeight(1);
          p.noFill();
          p.rect(x, y, width, height, 6);
          const midY = y + 28;
          p.stroke("#8a7770");
          p.strokeWeight(7);
          p.noFill();
          p.bezier(x + 12, midY, x + width * 0.35, y + 4, x + width * 0.62, y + 50, x + width - 12, midY);
          p.stroke("#cfbbb1");
          p.strokeWeight(4);
          p.bezier(x + 12, midY, x + width * 0.35, y + 4, x + width * 0.62, y + 50, x + width - 12, midY);

          const renalDrive = clamp((current.paCO2 - 40) / 35, -1, 1);
          const startY = renalDrive < -0.12 ? y + 8 : y + height - 7;
          const endY = renalDrive < -0.12 ? y + height - 7 : y + 8;
          const flux = Math.max(0.25, Math.abs(renalDrive));
          for (let index = 0; index < Math.round(2 + flux * 3); index += 1) {
            const progress = reducedMotion ? 0.55 : (p.frameCount * 0.009 * flux + index * 0.21) % 1;
            p.noStroke();
            p.fill(COLORS.bicarbonate);
            p.circle(x + width * (0.38 + index * 0.09), p.lerp(startY, endY, progress), 5);
          }
          label(renalDrive < -0.12 ? "urinary HCO₃⁻ loss" : "HCO₃⁻ return to blood", x + width / 2, y + height + 11, 10, COLORS.bicarbonate, p.CENTER);
        };

        const drawBloodCompartment = (x: number, y: number, width: number, current: AcidBaseState) => {
          const height = 78;
          p.noStroke();
          p.fill("#dde4e4");
          p.rect(x, y, width, height, 18);
          p.fill("#f5f7f6");
          p.rect(x + 5, y + 6, width - 10, height - 12, 14);
          p.stroke("#c2cdcf");
          p.strokeWeight(0.8);
          p.line(x + 14, y + height / 2, x + width - 14, y + height / 2);

          const co2Count = Math.round(mapClamped(current.paCO2, 15, 100, 3, 16));
          const bicarbonateCount = Math.round(mapClamped(current.bicarbonate, 8, 40, 3, 15));
          const hydrogenCount = Math.round(mapClamped(current.pH, 7.8, 6.9, 2, 10));
          const movement = reducedMotion ? 0 : p.frameCount * 0.003;
          for (let index = 0; index < co2Count; index += 1) {
            const progress = (index / co2Count + movement) % 1;
            p.noStroke();
            p.fill(COLORS.co2);
            p.circle(x + 16 + progress * (width - 32), y + 17 + (index % 3) * 9, 5.5);
          }
          for (let index = 0; index < bicarbonateCount; index += 1) {
            const progress = ((index / bicarbonateCount - movement * 0.7) % 1 + 1) % 1;
            const px = x + 16 + progress * (width - 32);
            const py = y + 50 + (index % 2) * 9;
            p.noStroke();
            p.fill(COLORS.bicarbonate);
            p.rect(px - 3, py - 2, 6, 4, 1);
          }
          for (let index = 0; index < hydrogenCount; index += 1) {
            const progress = (index / hydrogenCount + movement * 1.2) % 1;
            p.noStroke();
            p.fill(COLORS.hydrogen);
            p.circle(x + 18 + progress * (width - 36), y + 43, 3.5);
          }
          label(`PaCO₂ ${current.paCO2.toFixed(0)}`, x + 13, y - 11, 11, COLORS.co2, p.LEFT);
          label(`HCO₃⁻ ${current.bicarbonate.toFixed(1)}`, x + width - 13, y - 11, 11, COLORS.bicarbonate, p.RIGHT);
        };

        const drawBufferReaction = (x: number, y: number, width: number, current: AcidBaseState) => {
          p.noStroke();
          p.fill(247, 249, 248, 232);
          p.rect(x, y, width, 54, 6);
          p.stroke(COLORS.line);
          p.strokeWeight(0.8);
          p.noFill();
          p.rect(x, y, width, 54, 6);
          label("BICARBONATE BUFFER", x + 12, y + 13, 10, COLORS.muted, p.LEFT);
          const reaction = width < 300 ? "CO₂ ⇄ H⁺ + HCO₃⁻" : "CO₂ + H₂O  ⇄  H₂CO₃  ⇄  H⁺ + HCO₃⁻";
          label(reaction, x + width / 2, y + 34, width < 300 ? 11 : 13, COLORS.ink, p.CENTER);
          p.noStroke();
          p.fill(statusColor(current));
          p.circle(mapClamped(current.ratio, 5, 35, x + 18, x + width - 18), y + 49, 5);
        };

        const drawPHHeader = (current: AcidBaseState) => {
          const x = 24;
          const y = 24;
          const width = canvasWidth - 48;
          const gaugeY = 75;
          p.noStroke();
          p.fill(247, 249, 248, 232);
          p.rect(x, y, width, 76, 7);
          p.stroke(COLORS.line);
          p.strokeWeight(0.8);
          p.noFill();
          p.rect(x, y, width, 76, 7);
          label("SYSTEMIC ACID–BASE STATE", x + 14, y + 14, 10, COLORS.muted, p.LEFT);
          label(current.pattern, x + width - 14, y + 14, 11, COLORS.ink, p.RIGHT);
          p.stroke("#c8d0d1");
          p.strokeWeight(4);
          p.line(x + 16, gaugeY, x + width - 16, gaugeY);
          p.stroke(COLORS.normal);
          p.strokeWeight(5);
          p.line(mapClamped(7.35, 6.9, 7.8, x + 16, x + width - 16), gaugeY, mapClamped(7.45, 6.9, 7.8, x + 16, x + width - 16), gaugeY);
          const markerX = mapClamped(current.pH, 6.9, 7.8, x + 16, x + width - 16);
          p.noStroke();
          p.fill(statusColor(current));
          p.circle(markerX, gaugeY, 13);
          label("6.90", x + 16, gaugeY + 16, 10, COLORS.muted, p.LEFT);
          label("7.80", x + width - 16, gaugeY + 16, 10, COLORS.muted, p.RIGHT);
          label(`pH ${current.pH.toFixed(2)}`, markerX, gaugeY - 16, 13, statusColor(current), p.CENTER);
        };

        const drawMechanismTimeline = (view: AcidBaseSimulationView) => {
          const x1 = 34;
          const x2 = canvasWidth - 34;
          const y = canvasHeight - 16;
          const stages = canvasWidth < 620 ? ["원인", "급성 변화", "보상", "새 평형"] : ["원인 발생", "CO₂ / HCO₃⁻ 변화", "폐·신장 보상", "새 평형"];
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

        const drawCauseAndTime = (view: AcidBaseSimulationView, lungX: number, kidneyX: number) => {
          const causeX = /환기|CO₂/.test(`${view.cause} ${view.primaryChange}`) ? lungX : kidneyX;
          const align = causeX < canvasWidth / 2 ? p.LEFT : p.RIGHT;
          const textX = causeX < canvasWidth / 2 ? 25 : canvasWidth - 25;
          label(view.cause, textX, 116, 11, COLORS.ink, align);
          label(`${view.primaryChange} · ${view.timeLabel}`, textX, 127, 10, COLORS.muted, align);
        };

        p.setup = async () => {
          [lungImage, kidneyImage] = await Promise.all([
            p.loadImage(`${ASSET_BASE_PATH}/images/physiology/acid-base-lungs.png`),
            p.loadImage(`${ASSET_BASE_PATH}/images/physiology/acid-base-kidney.png`),
          ]);
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
          const scale = clamp(canvasWidth / 850, 0.58, 0.92);
          p.background("#eef2f1");
          p.stroke("#d9e0e0");
          p.strokeWeight(0.55);
          for (let x = 20; x < canvasWidth; x += 28) p.line(x, 112, x, canvasHeight - 16);
          for (let y = 116; y < canvasHeight; y += 28) p.line(16, y, canvasWidth - 16, y);
          drawPHHeader(current);

          const organY = compact ? 238 : 250;
          const lungX = compact ? 75 : canvasWidth * 0.18;
          const kidneyX = compact ? canvasWidth - 62 : canvasWidth * 0.83;
          drawLungs(lungX, organY, scale, current, view.phase === "compensating" && view.compensatingSystem === "lung");
          drawKidney(kidneyX, organY + 3, scale, current, view.phase === "compensating" && view.compensatingSystem === "kidney");
          drawCauseAndTime(view, lungX, kidneyX);

          const bloodX = compact ? 78 : canvasWidth * 0.25;
          const bloodWidth = compact ? canvasWidth - 156 : canvasWidth * 0.5;
          const bloodY = canvasHeight - 126;
          drawBloodCompartment(bloodX, bloodY, bloodWidth, current);
          const reactionX = compact ? 76 : canvasWidth * 0.29;
          const reactionWidth = compact ? canvasWidth - 152 : canvasWidth * 0.42;
          drawBufferReaction(reactionX, 132, reactionWidth, current);
          drawArrow(canvasWidth / 2, 132, canvasWidth / 2, 101, statusColor(current), 1.2, 0.1);

          const eliminationFlux = clamp((current.paCO2 / 40) * (current.ventilation / 100), 0.4, 2.3);
          drawArrow(bloodX + 14, bloodY + 8, lungX + 16, organY + 36 * scale, COLORS.co2, 1.2 + eliminationFlux * 0.7, 0.2);
          const renalDrive = clamp((current.paCO2 - 40) / 35, -1, 1);
          if (renalDrive >= -0.12) drawArrow(kidneyX - 25, organY + 35, bloodX + bloodWidth - 16, bloodY + 60, COLORS.bicarbonate, 1.3 + Math.abs(renalDrive) * 1.4, 0.55);
          else drawArrow(bloodX + bloodWidth - 16, bloodY + 60, kidneyX - 25, organY + 35, COLORS.bicarbonate, 1.3 + Math.abs(renalDrive) * 1.4, 0.55);

          if (!compact) {
            drawAlveolarInset(canvasWidth * 0.34, 255, 39, current);
            drawNephronInset(canvasWidth * 0.61, 226, canvasWidth * 0.16, current);
          }
          drawMechanismTimeline(view);

          const description = `산-염기 생리 도식. pH ${current.pH.toFixed(2)}, PaCO2 ${current.paCO2.toFixed(0)} mmHg, HCO3- ${current.bicarbonate.toFixed(1)} mmol/L. 폐포 환기와 CO2 제거, bicarbonate buffer, 신장 HCO3 조절 흐름이 ${current.pattern}을 나타냅니다.`;
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

  return <div ref={hostRef} className="min-h-[460px] w-full overflow-hidden bg-[#eef2f1]" aria-label="산-염기 생리 인터랙티브 도해" />;
}
