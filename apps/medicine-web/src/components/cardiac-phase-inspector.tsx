"use client";
import { updateSimulationClock } from "@/lib/simulation-clock";
import {useEffect,useState} from "react";
import {useSimulationClock} from "@/components/simulation-workbench";
import {cardiacSnapshot,type HemodynamicsState} from "@/lib/hemodynamics-model";
const stops=[.06,.15,.29,.46,.56,.69,.89];
export function CardiacPhaseInspector({state}:{state:HemodynamicsState}){
 const clock=useSimulationClock();const [phase,setPhase]=useState(0);
 useEffect(()=>{const id=setInterval(()=>setPhase(clock.current.seconds/clock.current.period%1),100);return()=>clearInterval(id);},[clock]);
 const snapshot=cardiacSnapshot(state,phase);
 return <section className="rounded-xl border border-teal-200 bg-white p-4"><h2 className="font-bold">심주기 한 단계씩 보기</h2><div className="mt-3 flex flex-wrap gap-2">{stops.map(t=><button type="button" className="simulation-button" key={t} aria-pressed={cardiacSnapshot(state,t).phase.id===snapshot.phase.id} onClick={()=>{updateSimulationClock(clock, {seconds: t*clock.current.period});updateSimulationClock(clock, {playing: false});setPhase(t);}}>{cardiacSnapshot(state,t).phase.label}</button>)}</div><p className="mt-4 text-sm leading-6"><b>{snapshot.phase.label}</b> · LV {snapshot.volume.toFixed(0)} mL / {snapshot.pressure.toFixed(0)} mmHg<br/>{snapshot.phase.flow==="none"?"모든 판막이 닫혀 용적은 일정하고 압력만 변합니다.":snapshot.phase.flow==="ejection"?"대동맥판이 열려 박출되며 좌심실 용적이 감소합니다.":"승모판이 열려 좌심실이 충만하고 용적이 증가합니다."}</p><p className="mt-2 text-xs text-slate-500">황색 점과 ECG 커서가 같은 관찰 시점을 나타냅니다. 파형과 단계 길이는 교육용으로 단순화했습니다.</p></section>;
}
