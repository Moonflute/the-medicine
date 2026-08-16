"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { EndocrineOrganId, EndocrineStage, EndocrineState } from "@/lib/endocrine-model";

type P5Instance = p5;
type P5Image = Awaited<ReturnType<P5Instance["loadImage"]>>;
type Point = { x: number; y: number };
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ASSETS: Partial<Record<EndocrineOrganId, string>> = {
  brain: "endocrine-brain-pituitary-v2.png", thyroid: "endocrine-thyroid-v2.png", "adrenal-kidney": "endocrine-adrenal-kidney-v2.png",
  liver: "endocrine-liver-v2.png", ovaries: "endocrine-ovaries-v2.png", pancreas: "endocrine-pancreas-v2.png",
};
const STAGE_COLORS = ["#2d7c81", "#a77932", "#a4555d"];

function pointOnPath(points: Point[], progress: number) {
  const lengths = points.slice(1).map((point, index) => Math.hypot(point.x - points[index].x, point.y - points[index].y)); const total = lengths.reduce((sum, length) => sum + length, 0); let target = Math.min(0.999, Math.max(0, progress)) * total;
  for (let index = 0; index < lengths.length; index += 1) { if (target <= lengths[index]) { const local = target / lengths[index]; return { x: points[index].x + (points[index + 1].x - points[index].x) * local, y: points[index].y + (points[index + 1].y - points[index].y) * local }; } target -= lengths[index]; }
  return points[points.length - 1];
}

export function EndocrineP5Canvas({ state }: { state: EndocrineState }) {
  const hostRef = useRef<HTMLDivElement>(null); const instanceRef = useRef<P5Instance | null>(null); const stateRef = useRef(state); useEffect(() => { stateRef.current = state; instanceRef.current?.redraw(); }, [state]);
  useEffect(() => {
    let instance: P5Instance | undefined; let observer: ResizeObserver | undefined; let cancelled = false;
    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return; const host = hostRef.current; const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sketch = (p: P5Instance) => {
        let width = 760; let height = 720; let body: P5Image | null = null; const images: Partial<Record<EndocrineOrganId, P5Image>> = {};
        const label = (text: string, x: number, y: number, size = 11, color = "#47595e", align: typeof p.LEFT | typeof p.CENTER | typeof p.RIGHT = p.CENTER) => { p.noStroke(); p.fill(color); p.textAlign(align, p.CENTER); p.textSize(size); p.text(text, x, y); };
        const resize = () => { width = Math.max(320, host.clientWidth); height = width < 700 ? 930 : 720; p.resizeCanvas(width, height); };
        const stageById = (id: string) => stateRef.current.stages.find((stage) => stage.id === id)!;

        const drawImage = (image: P5Image | undefined, x: number, y: number, w: number, h: number, alpha = 230) => { if (!image) return; p.imageMode(p.CENTER); p.tint(255, alpha); p.image(image, x, y, w, h); p.noTint(); };

        const bodyLayout = (area: { x: number; y: number; w: number; h: number }) => {
          const bodyH = area.h * 0.90; const bodyW = bodyH * 0.38; const bodyX = area.x + area.w * 0.48; const bodyY = area.y + area.h * 0.51;
          drawImage(body ?? undefined, bodyX, bodyY, bodyW, bodyH, 115);
          const position: Record<EndocrineOrganId, { x: number; y: number; w: number; h: number }> = {
            brain: { x: bodyX + bodyW * 0.02, y: bodyY - bodyH * 0.39, w: bodyW * 0.38, h: bodyH * 0.19 },
            thyroid: { x: bodyX, y: bodyY - bodyH * 0.285, w: bodyW * 0.17, h: bodyH * 0.13 },
            "adrenal-kidney": { x: bodyX, y: bodyY - bodyH * 0.055, w: bodyW * 0.43, h: bodyH * 0.18 },
            liver: { x: bodyX - bodyW * 0.11, y: bodyY - bodyH * 0.11, w: bodyW * 0.34, h: bodyH * 0.15 },
            ovaries: { x: bodyX, y: bodyY + bodyH * 0.19, w: bodyW * 0.29, h: bodyH * 0.12 },
            pancreas: { x: bodyX + bodyW * 0.02, y: bodyY - bodyH * 0.07, w: bodyW * 0.30, h: bodyH * 0.12 },
            blood: { x: bodyX + bodyW * 0.25, y: bodyY - bodyH * 0.10, w: 0, h: 0 },
          };
          const activeOrgans = new Set(stateRef.current.stages.map((stage) => stage.organ));
          (Object.keys(ASSETS) as EndocrineOrganId[]).forEach((organ) => { const target = position[organ]; drawImage(images[organ], target.x, target.y, target.w, target.h, activeOrgans.has(organ) ? 245 : 28); });
          const vesselX = bodyX + bodyW * 0.25; p.stroke("#9d5a60aa"); p.strokeWeight(8); p.line(vesselX, bodyY - bodyH * 0.33, vesselX, bodyY + bodyH * 0.27); p.stroke("#e5c2c2"); p.strokeWeight(3); p.line(vesselX, bodyY - bodyH * 0.33, vesselX, bodyY + bodyH * 0.27);
          const stagePoint = (stage: EndocrineStage): Point => {
            const target = position[stage.organ];
            if (stage.organ === "brain") return stage.order === 1 ? { x: target.x + target.w * 0.10, y: target.y + target.h * 0.04 } : { x: target.x + target.w * 0.15, y: target.y + target.h * 0.29 };
            return { x: target.x, y: target.y };
          };
          const points = new Map(stateRef.current.stages.map((stage) => [stage.id, stagePoint(stage)]));

          for (const edge of stateRef.current.edges.filter((item) => item.kind === "stimulate")) {
            const from = points.get(edge.from)!; const to = points.get(edge.to)!; const fromStage = stageById(edge.from); const color = STAGE_COLORS[Math.max(0, fromStage.order - 1)];
            const sameOrgan = stageById(edge.from).organ === stageById(edge.to).organ;
            const route = sameOrgan ? [from, to] : [from, { x: vesselX, y: from.y }, { x: vesselX, y: to.y }, to];
            p.noFill(); p.stroke(`${color}aa`); p.strokeWeight(Math.max(2, p.map(edge.strength, 0, 180, 2, 6))); p.beginShape(); route.forEach((point) => p.vertex(point.x, point.y)); p.endShape();
            const count = Math.max(2, Math.round(p.map(edge.strength, 0, 180, 2, 8)));
            for (let index = 0; index < count; index += 1) { const point = pointOnPath(route, (p.frameCount * 0.005 + index / count) % 1); p.noStroke(); p.fill(color); p.circle(point.x, point.y, 7); }
          }

          stateRef.current.stages.forEach((stage, index) => {
            const point = points.get(stage.id)!; const target = position[stage.organ]; p.noFill(); p.stroke(STAGE_COLORS[index]); p.strokeWeight(1.5); p.rect(target.x - target.w / 2 - 4, target.y - target.h / 2 - 4, Math.max(28, target.w + 8), Math.max(28, target.h + 8), 3);
            p.noStroke(); p.fill(STAGE_COLORS[index]); p.circle(point.x - 14, point.y - 14, 19); label(String(stage.order), point.x - 14, point.y - 14, 10, "#ffffff");
            const labelX = point.x < bodyX ? point.x - 8 : point.x + 8; label(`${stage.organLabel} · ${stage.hormone}`, labelX, point.y + target.h / 2 + 15, 9, STAGE_COLORS[index], point.x < bodyX ? p.RIGHT : p.LEFT);
          });
          return { points, vesselX, bodyX, bodyY, bodyW, bodyH };
        };

        const drawAxisPanel = (area: { x: number; y: number; w: number; h: number }) => {
          const current = stateRef.current; p.noStroke(); p.fill(248, 250, 249, 244); p.rect(area.x, area.y, area.w, area.h, 6); p.stroke("#bdc9c9"); p.strokeWeight(1); p.noFill(); p.rect(area.x, area.y, area.w, area.h, 6);
          label("HORMONE CASCADE", area.x + 14, area.y + 18, 9, "#66777c", p.LEFT);
          const cardX = area.x + 20; const cardW = area.w - 70; const cardH = Math.min(112, (area.h - 105) / 3); const cardGap = 20;
          const cardCenters: Point[] = [];
          current.stages.forEach((stage, index) => {
            const y = area.y + 45 + index * (cardH + cardGap); cardCenters.push({ x: cardX + cardW / 2, y: y + cardH / 2 });
            p.noStroke(); p.fill(stage.status === "low" ? "#f5eeee" : stage.status === "high" ? "#f7f1e8" : "#edf5f2"); p.rect(cardX, y, cardW, cardH, 5);
            p.stroke(STAGE_COLORS[index]); p.strokeWeight(4); p.line(cardX, y, cardX, y + cardH);
            p.noStroke(); p.fill(STAGE_COLORS[index]); p.circle(cardX + 20, y + 20, 20); label(String(stage.order), cardX + 20, y + 20, 10, "#ffffff");
            label(stage.organLabel, cardX + 38, y + 18, 10, "#5d6e72", p.LEFT); label(stage.hormone, cardX + 14, y + 44, 13, "#25383d", p.LEFT);
            const precision = stage.value < 10 ? 1 : 0; label(`${stage.value.toFixed(precision)} ${stage.unit}`, cardX + cardW - 12, y + 44, 13, STAGE_COLORS[index], p.RIGHT);
            label(stage.role, cardX + 14, y + cardH - 18, 9, "#68797d", p.LEFT);
            if (index < current.stages.length - 1) { p.stroke("#59777a"); p.strokeWeight(2); const centerX = cardX + cardW / 2; p.line(centerX, y + cardH, centerX, y + cardH + cardGap - 5); p.line(centerX - 4, y + cardH + cardGap - 10, centerX, y + cardH + cardGap - 5); p.line(centerX + 4, y + cardH + cardGap - 10, centerX, y + cardH + cardGap - 5); }
          });
          const feedbackEdges = current.edges.filter((edge) => edge.kind === "inhibit"); const feedbackX = area.x + area.w - 22;
          feedbackEdges.forEach((edge, index) => {
            const fromIndex = current.stages.findIndex((stage) => stage.id === edge.from); const toIndex = current.stages.findIndex((stage) => stage.id === edge.to); const from = cardCenters[fromIndex]; const to = cardCenters[toIndex]; const offset = index * 10;
            p.noFill(); p.stroke("#735f7f"); p.strokeWeight(Math.max(1.5, p.map(edge.strength, 0, 180, 1.5, 4))); p.bezier(from.x + cardW / 2 - 4, from.y, feedbackX - offset, from.y, feedbackX - offset, to.y, to.x + cardW / 2 - 4, to.y);
            p.line(to.x + cardW / 2 - 4, to.y - 8, to.x + cardW / 2 - 4, to.y + 8); label(`− ${edge.label}`, feedbackX - offset - 3, p.lerp(from.y, to.y, 0.5), 8, "#735f7f", p.RIGHT);
          });
          label("보라색 T-bar = 최종 산물의 음성 피드백", area.x + 14, area.y + area.h - 16, 9, "#735f7f", p.LEFT);
        };

        p.setup = async () => {
          body = await p.loadImage(`${BASE_PATH}/images/physiology/endocrine-body-reference.png`);
          await Promise.all((Object.entries(ASSETS) as Array<[EndocrineOrganId, string]>).map(async ([organ, file]) => { images[organ] = await p.loadImage(`${BASE_PATH}/images/physiology/${file}`); }));
          const canvas = p.createCanvas(width, height); canvas.parent(host); p.frameRate(reducedMotion ? 1 : 30); p.textFont("Arial"); observer = new ResizeObserver(resize); observer.observe(host); resize(); if (reducedMotion) p.noLoop();
        };
        p.draw = () => {
          p.background("#edf2f1"); p.stroke("#d7e0df"); p.strokeWeight(0.55); for (let x = 20; x < width; x += 28) p.line(x, 0, x, height); for (let y = 20; y < height; y += 28) p.line(0, y, width, y);
          const compact = width < 700;
          if (compact) { bodyLayout({ x: 8, y: 8, w: width - 16, h: 500 }); drawAxisPanel({ x: 10, y: 520, w: width - 20, h: 395 }); }
          else { bodyLayout({ x: 10, y: 10, w: width * 0.52, h: height - 20 }); drawAxisPanel({ x: width * 0.53, y: 15, w: width * 0.45, h: height - 30 }); }
          const current = stateRef.current; p.describe(`${current.pattern}. ${current.stages.map((stage) => `${stage.order}단계 ${stage.organLabel} ${stage.hormone} ${stage.value.toFixed(stage.value < 10 ? 1 : 0)} ${stage.unit}`).join(", ")}. 최종 단계에서 상위 단계로 돌아가는 음성 피드백을 표시합니다.`);
        };
      };
      instance = new P5(sketch, host); instanceRef.current = instance;
    });
    return () => { cancelled = true; observer?.disconnect(); instance?.remove(); instanceRef.current = null; };
  }, []);
  return <div ref={hostRef} className="min-h-[720px] w-full" aria-label="실제 신체 위치의 내분비 기관 이미지와 다단계 호르몬 수치 및 음성 피드백 루프 시뮬레이션" />;
}
