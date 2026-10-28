"use client";
import { useState } from "react";
import Image from "next/image";
import type { EndocrineState } from "@/lib/endocrine-model";
const assets: Record<string, string> = { brain: "brain-pituitary", thyroid: "thyroid", "adrenal-kidney": "adrenal-kidney", liver: "liver", ovaries: "ovaries", pancreas: "pancreas" };
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export function EndocrineP5Canvas({ state, reference }: { state: EndocrineState; reference?: EndocrineState }) {
  const [selected, setSelected] = useState(0);
  return <div className="endocrine-board">
    <div className="endocrine-stages">{state.stages.map((stage, index) => <button type="button" key={stage.id} className="endocrine-organ" aria-pressed={selected === index} onClick={() => setSelected(index)} style={{ borderColor: selected === index ? "var(--primary)" : undefined }}>
      {assets[stage.organ] ? <Image src={base + "/images/physiology/endocrine-" + assets[stage.organ] + "-v2.png"} alt={stage.organLabel} width={90} height={100} unoptimized /> : <div className="flex h-[100px] items-center justify-center text-rose-700">혈액</div>}
      <p>{stage.organLabel}</p><h2>{stage.hormone}</h2><output>{stage.value.toFixed(stage.value < 10 ? 2 : 1)}</output><p>{stage.unit === "relative" ? "상대값" : stage.unit}</p>
      {reference?.axis === state.axis ? <p className="lab-reference-label">기준 {reference.stages[index].value.toFixed(stage.value < 10 ? 2 : 1)}</p> : null}
      <p className="mt-2">{stage.status === "high" ? "↑ 정상 모델보다 높음" : stage.status === "low" ? "↓ 정상 모델보다 낮음" : "정상 모델"}</p>
    </button>)}</div>
    <div className="endocrine-feedback">{state.edges.filter(e => e.kind === "inhibit").map(e => <span key={e.from + e.to}>↶ {state.axis === "adrenal" && state.exogenous > 0 ? "Glucocorticoid 총 작용" : state.stages.find(s => s.id === e.from)?.hormone} ⊣ {state.stages.find(s => s.id === e.to)?.hormone}</span>)}</div>
    {state.effects.length > 0 ? <div className="endocrine-effects">{state.effects.map(e => <span key={e.label}>{e.label} <b>{e.value.toFixed(0)} {e.unit}</b></span>)}</div> : null}
    <p className="text-center text-sm text-[var(--muted)]">{state.stages[selected]?.role}</p>
  </div>;
}
