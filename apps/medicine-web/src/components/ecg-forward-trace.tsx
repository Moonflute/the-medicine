"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { ForwardRecording, ForwardTrace } from "@/lib/ecg-forward-model";

type Props={recording:ForwardRecording;trace:ForwardTrace;timeMs:number;gain:number;showApproximation:boolean;baseline?:Float32Array;onSeek:(timeMs:number)=>void};
const LEFT=48,RIGHT=16,TOP=12,BOTTOM=22;
export function EcgForwardTrace({recording,trace,timeMs,gain,showApproximation,baseline,onSeek}:Props) {
  const clip=useId().replaceAll(":","");
  const host=useRef<HTMLDivElement>(null);
  const [size,setSize]=useState({width:900,height:120});
  useEffect(()=>{
    const element=host.current;if(!element)return;
    const observer=new ResizeObserver(entries=>{const rect=entries[0]?.contentRect;if(rect&&rect.width>0&&rect.height>0)setSize({width:Math.round(rect.width),height:Math.round(rect.height)});});
    observer.observe(element);return()=>observer.disconnect();
  },[]);
  const W=size.width,H=Math.max(70,size.height);
  const scale=1.5/gain;
  const y=(value:number)=>TOP+(H-TOP-BOTTOM)/2-value/scale*(H-TOP-BOTTOM)/2;
  const paths=useMemo(()=>{
    const path=(values:Float32Array)=>Array.from(values,(value,i)=>`${i===0?"M":"L"}${(LEFT+i/(values.length-1)*(W-LEFT-RIGHT)).toFixed(2)},${(TOP+(H-TOP-BOTTOM)/2-value/scale*(H-TOP-BOTTOM)/2).toFixed(2)}`).join(" ");
    return {actual:path(trace.values),approximate:showApproximation?path(trace.approximate):"",baseline:baseline?path(baseline):""};
  },[trace,scale,baseline,showApproximation,W,H]);
  const frame=Math.min(recording.samples-1,Math.max(0,Math.round(timeMs/recording.sampleMs)));
  return <div ref={host} className="ecg-forward-trace">
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`전극 전위차 파형. 현재 ${(timeMs/1000).toFixed(2)}초, ${trace.values[frame].toFixed(3)} 상대 전압. 파형을 누르면 해당 시각으로 이동합니다.`}
      onClick={event=>{const rect=event.currentTarget.getBoundingClientRect();onSeek(Math.max(0,Math.min(recording.durationMs,((event.clientX-rect.left)/rect.width*W-LEFT)/(W-LEFT-RIGHT)*recording.durationMs)));}}>
      <defs><clipPath id={clip}><rect x={LEFT} y={TOP} width={W-LEFT-RIGHT} height={H-TOP-BOTTOM}/></clipPath></defs>
      <rect width={W} height={H} fill="#fbfdfd"/>
      {Array.from({length:61},(_,i)=><line key={`minor-${i}`} x1={LEFT+i/60*(W-LEFT-RIGHT)} x2={LEFT+i/60*(W-LEFT-RIGHT)} y1={TOP} y2={H-BOTTOM} stroke={i%5===0?"#c4d9d6":"#e7f0ee"} strokeWidth={i%5===0?1:.5}/>)}
      {(H<110?[-1,0,1]:[-1,-.5,0,.5,1]).map(t=><g key={t}><line x1={LEFT} x2={W-RIGHT} y1={y(t*scale)} y2={y(t*scale)} stroke={t===0?"#95b4ae":"#dfebe8"}/><text x={LEFT-9} y={y(t*scale)+4} textAnchor="end" fontSize={11} fill="#526d6a">{(t*scale).toFixed(2)}</text></g>)}
      {[0,.4,.8,1.2,1.6,2,2.4].map(t=><text key={t} x={LEFT+t/2.4*(W-LEFT-RIGHT)} y={H-8} textAnchor="middle" fontSize={11} fill="#526d6a">{t.toFixed(1)} s</text>)}
      <text x={8} y={12} fontSize={10} fill="#526d6a">a.u.</text>
      <g clipPath={`url(#${clip})`}>
        {baseline&&<path d={paths.baseline} fill="none" stroke="#64748b" strokeWidth={1.5} strokeDasharray="3 5"/>}
        {showApproximation&&<path d={paths.approximate} fill="none" stroke="#d97706" strokeWidth={1.5} strokeDasharray="7 4"/>}
        <path d={paths.actual} fill="none" stroke="#087f70" strokeWidth={2}/>
        <line x1={LEFT+timeMs/recording.durationMs*(W-LEFT-RIGHT)} x2={LEFT+timeMs/recording.durationMs*(W-LEFT-RIGHT)} y1={TOP} y2={H-BOTTOM} stroke="#be123c" strokeWidth={1.2}/>
        <circle cx={LEFT+timeMs/recording.durationMs*(W-LEFT-RIGHT)} cy={y(trace.values[frame])} r={3.5} fill="#be123c"/>
      </g>
    </svg>
    {trace.peak>scale&&<p className="ecg-trace-clipped">파형 일부 잘림 · 감도를 낮추세요</p>}
  </div>;
}
