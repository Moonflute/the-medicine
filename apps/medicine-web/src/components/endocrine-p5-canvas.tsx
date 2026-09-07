"use client";
import { updateSimulationClock } from "@/lib/simulation-clock";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSimulationClock } from "@/components/simulation-workbench";
import type { EndocrineState } from "@/lib/endocrine-model";
const assets: Record<string,string> = {brain:"brain-pituitary",thyroid:"thyroid","adrenal-kidney":"adrenal-kidney",liver:"liver",ovaries:"ovaries",pancreas:"pancreas"};
const base=process.env.NEXT_PUBLIC_BASE_PATH??"";
export function EndocrineP5Canvas({state}:{state:EndocrineState}) {
 const clock=useSimulationClock(); const [moment,setMoment]=useState(0);
 useEffect(()=>{const id=setInterval(()=>setMoment(clock.current.seconds),100);return()=>clearInterval(id);},[clock]);
 const step=Math.floor(moment%8/2)%4;
 const current=state.stages[Math.min(step,state.stages.length-1)];
 return <div className="bg-[#edf2f1] p-4 sm:p-6">
  <div className="mb-5 flex items-start justify-between gap-4"><div><p className="text-xs font-bold tracking-wider text-teal-700">SIGNAL → TARGET → FEEDBACK</p><h2 className="mt-2 text-xl font-bold">신호를 따라 호르몬 축 읽기</h2></div><span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">{step===3?"음성 피드백":`${step+1}단계`}</span></div>
  <p className="mb-4 text-sm leading-6 text-slate-600">각 기관을 선택하면 그 단계에서 멈춥니다. 신호 전달 순서를 느리게 표현한 도해이며, 8초는 실제 호르몬 반응 시간이 아닙니다.</p>
  <div className="space-y-3">{state.stages.map((stage,index)=><div key={stage.id}>
   <button type="button" aria-pressed={step===index} onClick={()=>{updateSimulationClock(clock, {seconds: index*2+.2});updateSimulationClock(clock, {playing: false});setMoment(clock.current.seconds);}} className={`flex w-full items-center gap-4 rounded-xl border bg-white p-4 text-left ${step===index?"border-teal-600 shadow-md":"border-slate-200"}`}>
    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-50">{assets[stage.organ]?<Image src={`${base}/images/physiology/endocrine-${assets[stage.organ]}-v2.png`} alt={stage.organLabel} fill sizes="96px" className="object-contain" unoptimized/>:<span className="flex h-full items-center justify-center text-sm font-bold text-rose-700">혈액</span>}</div>
    <div className="min-w-0 flex-1"><p className="text-xs font-semibold text-slate-500">{index+1} · {stage.organLabel}</p><h3 className="mt-1 text-lg font-bold">{stage.hormone}</h3><p className="mt-1 text-sm text-slate-600">{stage.role}</p><p className="mt-2 font-mono font-bold text-teal-800">{stage.value.toFixed(stage.value<10?1:0)} {stage.unit} <span className="font-sans text-xs">{stage.status==="high"?"↑ 증가":stage.status==="low"?"↓ 감소":"기준 범위"}</span></p></div>
   </button>{index<state.stages.length-1&&<div className="relative mx-auto h-7 w-1 bg-teal-200" aria-hidden="true"><span className="absolute -left-1 h-3 w-3 rounded-full bg-teal-700" style={{top:`${step===index?(moment%2)/2*70:70}%`,opacity:step===index?1:.3}}/></div>}
  </div>)}</div>
  <button type="button" onClick={()=>{updateSimulationClock(clock, {seconds: 6.2});updateSimulationClock(clock, {playing: false});setMoment(6.2);}} aria-pressed={step===3} className={`mt-4 w-full rounded-xl border p-4 text-left ${step===3?"border-violet-500 bg-violet-100":"border-violet-200 bg-violet-50"}`}><h3 className="font-bold text-violet-900">↶ 최종 산물의 음성 피드백</h3><div className="mt-2 flex flex-wrap gap-2">{state.edges.filter(e=>e.kind==="inhibit").map(e=><span key={e.from+e.to} className="rounded-lg bg-white px-3 py-2 text-sm text-violet-900">{state.stages.find(s=>s.id===e.from)?.hormone} ⊣ {state.stages.find(s=>s.id===e.to)?.hormone}<span className="block text-xs text-violet-700">{e.label}</span></span>)}</div></button>
  <div className="mt-4 rounded-xl bg-white p-4 text-sm leading-6" aria-live="off"><b>{step===3?"상위 신호가 왜 달라지는가":current.organLabel}</b><p>{step===3?state.explanation:current.role}</p></div>
 </div>;
}
