"use client";
import { useMemo, useState } from "react";
import { GuidedExperiments, MetricComparison, useSimulationClock } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric, PresetStrip } from "@/components/physiology-ui";
import { EcgP5Canvas } from "@/components/ecg-p5-canvas";
import { calculateEcgState, ecgRateControl, measureEcgInterval, ecgSignalAt, type RhythmId } from "@/lib/ecg-model";
import { updateSimulationClock } from "@/lib/simulation-clock";
const RHYTHMS:Array<{id:RhythmId;label:string;rate:number}>=[
 {id:"sinus",label:"Sinus rhythm",rate:70},{id:"brady",label:"Sinus bradycardia",rate:45},{id:"tachy",label:"Sinus tachycardia",rate:125},
 {id:"af",label:"Atrial fibrillation",rate:115},{id:"flutter",label:"Atrial flutter",rate:150},{id:"av1",label:"First-degree AV block",rate:70},
 {id:"mobitz1",label:"Mobitz I",rate:75},{id:"mobitz2",label:"Mobitz II",rate:70},{id:"complete",label:"Complete AV block",rate:40},{id:"vt",label:"Ventricular tachycardia",rate:165},
];
export function EcgArrhythmiaLab(){
  const [rhythm,setRhythm]=useState<RhythmId>("sinus"),[rate,setRate]=useState(70),[modified,setModified]=useState(false);
  const [first,setFirst]=useState(.12),[second,setSecond]=useState(.28),[marker,setMarker]=useState<"A"|"B">("A");
  const [blind,setBlind]=useState(false),[guess,setGuess]=useState(""),[revealed,setRevealed]=useState(false);
  const clock=useSimulationClock(),experiments=useLearningExperiments();
  const state=useMemo(()=>calculateEcgState(rhythm,rate),[rhythm,rate]),control=ecgRateControl(rhythm);
  const hidden=blind&&!revealed;
  const pick=(id:RhythmId)=>{const selected=RHYTHMS.find(r=>r.id===id)!;setRhythm(id);setRate(selected.rate);setModified(false);setFirst(.12);setSecond(.28);setMarker("A");setBlind(false);setRevealed(false);setGuess("");updateSimulationClock(clock,{seconds:0});};
  const measure=(time:number)=>{if(marker==="A"){setFirst(time);setMarker("B");}else{setSecond(time);setMarker("A");}updateSimulationClock(clock,{seconds:time,playing:false});};
  const interval=measureEcgInterval(state,first,second),voltage=Math.abs(ecgSignalAt(second,state)-ecgSignalAt(first,state));
  const ventricular=state.events.filter(e=>e.type==="ventricular"),atrial=state.events.filter(e=>e.type==="atrial");
  const normal=calculateEcgState("sinus",70);
  const startReading=()=>{const next=RHYTHMS[Math.floor(Math.random()*RHYTHMS.length)];pick(next.id);setBlind(true);updateSimulationClock(clock,{playing:false,seconds:0});};
  return <div className="physiology-lab space-y-5">
    <PhysiologyHeader title="ECG and arrhythmias" description="P wave·QRS의 시간 관계를 측정하며 리듬을 판독합니다. 합성 단일 유도 파형으로, 실제 ECG 진단이나 맥박·관류 평가를 대신하지 않습니다." links={[{href:"/interactive/cardiac-hemodynamics",label:"심장 혈역학"}]}/>
    <section className="physiology-card space-y-3" aria-label="리듬 판독 연습"><div className="flex flex-wrap items-center gap-3"><h2 className="font-bold">리듬 이름 없이 판독하기</h2><button type="button" className="simulation-button" onClick={startReading}>무작위 파형 출제</button>{blind&&<button type="button" className="simulation-button" onClick={()=>setBlind(false)}>일반 관찰로 돌아가기</button>}</div>
      {blind&&<><div className="flex flex-wrap gap-3"><label className="text-sm">예상 리듬 <select value={guess} onChange={e=>setGuess(e.target.value)} disabled={revealed}><option value="">선택하세요</option>{RHYTHMS.map(r=><option key={r.id} value={r.id}>{r.label}</option>)}</select></label><button type="button" className="simulation-primary" disabled={!guess||revealed} onClick={()=>setRevealed(true)}>정답과 해설 보기</button></div>{revealed&&<p role="status">{guess===rhythm?"맞았습니다.":"다시 비교해 보세요."} 정답: {RHYTHMS.find(r=>r.id===rhythm)?.label}. 아래 개별 해설에서 P–QRS 관계와 감별점을 확인하세요.</p>}</>}
    </section>
    {!hidden&&<PresetStrip presets={RHYTHMS} selected={rhythm} onSelect={id=>pick(id as RhythmId)} onReset={()=>pick("sinus")}/>}
    <section className="physiology-stage">
      <CanvasFrame legend={<span>8초 합성 파형 · 가로 큰 칸 0.2 s · 세로 큰 칸 0.5 mV · A/B는 측정 위치입니다. 화면 확대는 시간·전압값을 바꾸지 않습니다.</span>}><EcgP5Canvas state={state} markers={[first,second]} hideDiagnosis={hidden}/></CanvasFrame>
      <ModelPanel title={hidden?"판독 순서":"리듬과 측정 변수"}><div className="space-y-4">
        {!hidden?<><PhysiologyControl label={control.label} value={rhythm==="flutter"?Math.round(300/state.ventricularRate):rate} min={control.min} max={control.max} step={1} displayValue={rhythm==="flutter"?Math.round(300/state.ventricularRate)+":1":rate+"/min"} hint={control.hint} onChange={v=>{setRate(rhythm==="flutter"?300/v:v);setModified(true);}}/><p className="text-sm leading-6">{state.conduction}</p></>:<p className="text-sm leading-6">Rate → Regularity → P/F wave → P–QRS 관계 → PR → QRS width 순서로 확인하세요.</p>}
        <PhysiologyControl label="측정 A" value={first} min={0} max={8} step={.01} displayValue={first.toFixed(2)+" s"} hint="파형의 시작점이나 사건 목록에서 선택하세요." onChange={v=>{setFirst(v);updateSimulationClock(clock,{playing:false,seconds:v});}}/>
        <PhysiologyControl label="측정 B" value={second} min={0} max={8} step={.01} displayValue={second.toFixed(2)+" s"} hint="PR은 P onset–QRS onset, RR은 연속 QRS onset 사이입니다." onChange={v=>{setSecond(v);updateSimulationClock(clock,{playing:false,seconds:v});}}/>
        <p className="font-mono text-sm">Δt {interval.milliseconds.toFixed(0)} ms · ΔV {voltage.toFixed(2)} mV</p><p className="text-xs leading-5 text-[var(--muted)]">ΔV는 두 지점의 합성 전압 차입니다. 최대 QRS amplitude 또는 진단적 ST 측정값이 아닙니다.</p>
      </div></ModelPanel>
    </section>
    <section className="physiology-card space-y-3" aria-label="전도 사건 선택"><h2 className="font-bold">사건으로 측정점 지정</h2><div className="flex gap-2">{(["A","B"] as const).map(m=><button key={m} className="simulation-button" type="button" aria-pressed={marker===m} onClick={()=>setMarker(m)}>다음 선택 → {m}</button>)}</div>
      <div className="flex max-h-44 flex-wrap gap-2 overflow-y-auto">{state.events.map((e,i)=><button key={i} type="button" className="simulation-button" onClick={()=>measure(e.time)}>{e.time.toFixed(2)} s · {e.type==="ventricular"?"QRS onset":rhythm==="af"?"Atrial activation":rhythm==="flutter"?"F onset":"P onset"}</button>)}</div>
      <p className="text-xs text-[var(--muted)]">QRS width는 QRS onset에서 해당 파형 끝까지 측정합니다. 창 끝은 예시의 경계이며 다음 루프와 연속 리듬으로 연결하지 않습니다.</p>
    </section>
    {!hidden&&<>
      <section className="grid physiology-card sm:grid-cols-4"><PhysiologyMetric label="Atrial rate" value={state.atrialRate.toFixed(0)+"/min"} status="심방 활성"/><PhysiologyMetric label="Ventricular rate" value={state.ventricularRate.toFixed(1)+"/min"} status="심실 활성"/><PhysiologyMetric label="PR" value={state.pr} status="P–QRS 관계"/><PhysiologyMetric label="QRS" value={state.qrs} status={state.regularity}/></section>
      <MetricComparison snapshot={{label:`${RHYTHMS.find(r=>r.id===rhythm)?.label} · 입력 ${rate}/min · A ${first.toFixed(2)} s · B ${second.toFixed(2)} s`,inputs:{rhythm,rate,first,second,modified}}} onRestore={v=>{setRhythm(v.rhythm as RhythmId);setRate(Number(v.rate));setFirst(Number(v.first));setSecond(Number(v.second));setModified(Boolean(v.modified));setBlind(false);}} metrics={[{label:"Atrial rate",value:state.atrialRate,normal:normal.atrialRate,unit:"/min"},{label:"Ventricular rate",value:state.ventricularRate,normal:normal.ventricularRate,unit:"/min"},{label:"8초 창의 QRS 수",value:ventricular.length,normal:normal.events.filter(e=>e.type==="ventricular").length,unit:"개",digits:0},{label:"QRS width · 모델",value:(ventricular[0]?.width??0)*1000,normal:90,unit:"ms",digits:0}]}/>
      <p className="scenario-notice">Atrial event {atrial.length}개 · QRS {ventricular.length}개. {state.perfusion}</p>
      <ClinicalScenarioPanel id={rhythm} modified={modified}/>
      <GuidedExperiments experiments={experiments} activeScenario={modified?"custom":rhythm} onApply={id=>pick(id as RhythmId)}/>
    </>}
  </div>;
}
