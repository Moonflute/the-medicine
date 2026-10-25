"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { EcgForwardLab } from "@/components/ecg-forward-lab";

// The legacy p5 rhythm trainer is loaded only when requested.
const EcgArrhythmiaLab=dynamic(()=>import("@/components/ecg-arrhythmia-lab").then(module=>module.EcgArrhythmiaLab),{ssr:false,loading:()=> <p role="status" className="physiology-card">합성 리듬 학습을 여는 중입니다.</p>});

export function EcgInteractiveLab() {
  const [mode,setMode]=useState<"forward"|"rhythm">("forward");
  return <div className="space-y-5">
    <nav aria-label="ECG 학습 모드" className="flex flex-wrap gap-2">
      <button type="button" className="simulation-button" aria-pressed={mode==="forward"} onClick={()=>setMode("forward")}>전기생리 모델 · 전극으로 측정</button>
      <button type="button" className="simulation-button" aria-pressed={mode==="rhythm"} onClick={()=>setMode("rhythm")}>리듬 판독 · 합성 파형</button>
    </nav>
    {mode==="forward"?<EcgForwardLab/>:<EcgArrhythmiaLab/>}
  </div>;
}
