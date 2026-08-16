"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { EcgEvent, EcgState } from "@/lib/ecg-model";

type P5Instance = p5;
type P5Image = Awaited<ReturnType<P5Instance["loadImage"]>>;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function wrappedDistance(time: number, eventTime: number, windowSeconds: number) {
  const direct = time - eventTime;
  const alternatives = [direct, direct + windowSeconds, direct - windowSeconds];
  return alternatives.reduce((best, value) => Math.abs(value) < Math.abs(best) ? value : best, direct);
}

function signalAt(time: number, state: EcgState) {
  let signal = 0;
  for (const event of state.events) {
    const distance = wrappedDistance(time, event.time, state.windowSeconds);
    if (event.type === "atrial") {
      if (state.rhythm === "af") signal += Math.sin((time + event.time) * 54) * 0.8 * Math.exp(-Math.abs(distance) * 35);
      else if (state.rhythm === "flutter") {
        if (distance >= -0.04 && distance <= 0.11) signal += (distance + 0.04) / 0.15 * 7 - 3.5;
      } else if (Math.abs(distance) < event.width) signal -= Math.sin((distance + event.width) / (event.width * 2) * Math.PI) * 8 * event.amplitude;
    } else {
      const width = event.width;
      if (distance > -width * 0.45 && distance < width * 0.55) {
        const q = (distance + width * 0.45) / width;
        if (state.rhythm === "vt") signal += Math.sin((q - 0.15) * Math.PI * 1.7) * 40 * event.amplitude;
        else if (q < 0.2) signal += q / 0.2 * 12;
        else if (q < 0.48) signal += 12 - (q - 0.2) / 0.28 * 62 * event.amplitude;
        else signal += -50 * event.amplitude + (q - 0.48) / 0.52 * 64 * event.amplitude;
      }
      const tDistance = distance - 0.28;
      if (Math.abs(tDistance) < 0.11 && state.rhythm !== "vt") signal -= Math.sin((tDistance + 0.11) / 0.22 * Math.PI) * 13;
    }
  }
  return signal;
}

function latestEvent(state: EcgState, time: number, type: EcgEvent["type"]) {
  return state.events.filter((event) => event.type === type).map((event) => ({ event, distance: wrappedDistance(time, event.time, state.windowSeconds) })).filter(({ distance }) => distance >= 0).sort((a, b) => a.distance - b.distance)[0];
}

export function EcgP5Canvas({ state }: { state: EcgState }) {
  const hostRef = useRef<HTMLDivElement>(null); const instanceRef = useRef<P5Instance | null>(null); const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; instanceRef.current?.redraw(); }, [state]);

  useEffect(() => {
    let instance: P5Instance | undefined; let observer: ResizeObserver | undefined; let cancelled = false;
    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return; const host = hostRef.current; const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sketch = (p: P5Instance) => {
        let width = 760; let height = 570; let time = 0; let previousMillis = 0; let heart: P5Image | null = null;
        const label = (text: string, x: number, y: number, size = 11, color = "#46595e", align: typeof p.LEFT | typeof p.CENTER | typeof p.RIGHT = p.CENTER) => { p.noStroke(); p.fill(color); p.textAlign(align, p.CENTER); p.textSize(size); p.text(text, x, y); };
        const resize = () => { width = Math.max(320, host.clientWidth); height = width < 620 ? 650 : 570; p.resizeCanvas(width, height); };
        p.setup = async () => { heart = await p.loadImage(`${BASE_PATH}/images/physiology/cardiac-cutaway-v2.png`); const canvas = p.createCanvas(width, height); canvas.parent(host); p.frameRate(reducedMotion ? 1 : 30); p.textFont("Arial"); previousMillis = p.millis(); observer = new ResizeObserver(resize); observer.observe(host); resize(); if (reducedMotion) p.noLoop(); };

        p.draw = () => {
          const current = stateRef.current; const now = p.millis(); const delta = reducedMotion ? 0 : Math.min(0.08, Math.max(0, (now - previousMillis) / 1000)); previousMillis = now; time = (time + delta) % current.windowSeconds;
          p.background("#edf2f1"); p.stroke("#d4dfde"); p.strokeWeight(0.55); for (let x = 0; x < width; x += 20) p.line(x, 0, x, height); for (let y = 0; y < height; y += 20) p.line(0, y, width, y);
          const compact = width < 620; const heartX = compact ? width * 0.5 : width * 0.22; const heartY = compact ? 185 : 205; const heartHeight = compact ? 280 : 340; const heartWidth = heartHeight * 2 / 3;
          if (heart) { p.imageMode(p.CENTER); p.tint(255, 205); p.image(heart, heartX, heartY, heartWidth, heartHeight); p.noTint(); }
          const local = (nx: number, ny: number) => ({ x: heartX + (nx - 0.5) * heartWidth, y: heartY + (ny - 0.5) * heartHeight });
          const nodes = [local(0.27, 0.39), local(0.43, 0.50), local(0.51, 0.57), local(0.41, 0.79), local(0.66, 0.82)];
          const atrial = latestEvent(current, time, "atrial"); const ventricular = latestEvent(current, time, "ventricular");
          const atrialAge = atrial?.distance ?? 99; const ventricularAge = ventricular?.distance ?? 99; const blocked = atrial && !atrial.event.conducted && atrialAge < 0.32;
          p.noFill(); p.stroke("#81755caa"); p.strokeWeight(2); p.beginShape(); nodes.forEach((node) => p.vertex(node.x, node.y)); p.endShape();
          nodes.forEach((node, index) => {
            const activationDelay = [0, 0.07, 0.13, 0.17, 0.17][index];
            const activeFromAtrial = atrial && atrial.event.conducted && Math.abs(atrialAge - activationDelay) < 0.045;
            const activeFromVentricular = index >= 2 && ventricularAge < 0.07;
            const stopped = blocked && index >= 2;
            p.noStroke(); p.fill(stopped ? "#9a5b5f" : activeFromAtrial || activeFromVentricular ? "#b27a2f" : "#697c80"); p.circle(node.x, node.y, activeFromAtrial || activeFromVentricular ? 14 : 8);
          });
          if (blocked) { p.stroke("#9a5b5f"); p.strokeWeight(4); p.line(nodes[1].x - 9, nodes[1].y + 12, nodes[1].x + 9, nodes[1].y + 12); label("BLOCKED", nodes[1].x, nodes[1].y + 27, 9, "#8d4f55"); }
          label("SA", nodes[0].x - 18, nodes[0].y - 12, 9, "#8a6529"); label("AV", nodes[1].x - 18, nodes[1].y, 9, "#8a6529"); label("His–Purkinje", nodes[3].x + 30, nodes[3].y + 19, 9);

          const pulseStrength = ventricularAge < 0.24 ? Math.sin(ventricularAge / 0.24 * Math.PI) : 0; const pulseX = compact ? width - 45 : width * 0.44; const pulseY = compact ? 170 : 200;
          p.noFill(); p.stroke("#a7565d"); p.strokeWeight(5); p.circle(pulseX, pulseY, 44 + pulseStrength * 24); label("MECHANICAL", pulseX, pulseY - 8, 9); label(pulseStrength > 0 ? "PULSE" : "waiting for QRS", pulseX, pulseY + 9, 9, pulseStrength > 0 ? "#9b4f56" : "#697a7e");

          const stripX = compact ? 18 : width * 0.48; const stripY = compact ? 380 : 85; const stripW = compact ? width - 36 : width * 0.49; const stripH = compact ? 210 : 300;
          p.noStroke(); p.fill(248, 250, 249, 232); p.rect(stripX, stripY, stripW, stripH, 6); label("LIVE RHYTHM STRIP · 6 seconds", stripX + 12, stripY + 17, 9, "#66777c", p.LEFT);
          const baseline = stripY + stripH * 0.52; p.stroke("#c9d4d3"); p.strokeWeight(1); p.line(stripX + 12, baseline, stripX + stripW - 12, baseline);
          p.stroke("#6d5c7d"); p.strokeWeight(2.2); p.noFill(); p.beginShape();
          const shownSeconds = 6;
          for (let px = stripX + 12; px <= stripX + stripW - 12; px += 2) { const offset = (px - stripX - 12) / (stripW - 24) * shownSeconds; const sampleTime = (time - shownSeconds + offset + current.windowSeconds) % current.windowSeconds; p.vertex(px, baseline + signalAt(sampleTime, current)); } p.endShape();
          p.stroke("#b27a2f"); p.strokeWeight(1.5); p.line(stripX + stripW - 12, stripY + 28, stripX + stripW - 12, stripY + stripH - 18);
          const eventY = stripY + stripH - 31; const recentEvents = current.events.filter((event) => { const age = wrappedDistance(time, event.time, current.windowSeconds); return age >= 0 && age <= shownSeconds; });
          recentEvents.forEach((event) => { const age = wrappedDistance(time, event.time, current.windowSeconds); const x = stripX + stripW - 12 - age / shownSeconds * (stripW - 24); p.noStroke(); p.fill(event.type === "atrial" ? event.conducted ? "#b27a2f" : "#9a5b5f" : "#6d5c7d"); p.circle(x, eventY, event.type === "atrial" ? 6 : 8); });
          label("P conducted", stripX + 18, stripY + stripH - 12, 9, "#8a6529", p.LEFT); label("P blocked", stripX + 95, stripY + stripH - 12, 9, "#8d4f55", p.LEFT); label("QRS / pulse", stripX + 165, stripY + stripH - 12, 9, "#6d5c7d", p.LEFT);

          const sequenceY = compact ? 615 : height - 60; const stages = ["SA firing", "atrial depolarization", "AV delay", "His–Purkinje", "QRS", "mechanical pulse"];
          p.stroke("#bac6c7"); p.strokeWeight(2); p.line(24, sequenceY, width - 24, sequenceY);
          stages.forEach((stage, index) => { const x = p.lerp(24, width - 24, index / (stages.length - 1)); p.noStroke(); p.fill(index === 0 && atrialAge < 0.05 || index > 0 && ventricularAge < 0.18 ? "#2f7c76" : "#bac6c7"); p.circle(x, sequenceY, 7); label(stage, x, sequenceY - 15, compact ? 8 : 9); });
          p.describe(`${current.rhythm} 심전도. 심방 박동수 ${current.atrialRate}, 심실 박동수 ${current.ventricularRate}. 전도된 P파와 차단된 P파, QRS 뒤의 기계적 맥박을 별도로 표시합니다.`);
        };
      };
      instance = new P5(sketch, host); instanceRef.current = instance;
    });
    return () => { cancelled = true; observer?.disconnect(); instance?.remove(); instanceRef.current = null; };
  }, []);
  return <div ref={hostRef} className="min-h-[570px] w-full" aria-label="리듬별 실제 P파와 QRS 사건, 전도 차단 및 기계적 맥박을 동기화한 ECG 시뮬레이션" />;
}
