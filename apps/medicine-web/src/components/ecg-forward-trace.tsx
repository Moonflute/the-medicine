"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { ForwardTrace } from "@/lib/ecg-forward-model";

export type EcgTraceTimeline={durationMs:number;sampleMs:number;samples:number;periodMs:number;phases:{label:string;start:number;end:number;color:string}[]};
export type EcgTraceSignal={trace:ForwardTrace;baseline?:Float32Array};
type Props={timeline:EcgTraceTimeline;readSignal:()=>EcgTraceSignal;timeMs:number;gain:number;showApproximation:boolean;onSeek:(timeMs:number)=>void;windowMs?:number;compact?:boolean;annotate?:boolean};
export function EcgForwardTrace({timeline,readSignal,timeMs,gain,showApproximation,onSeek,windowMs,compact=false,annotate=false}:Props) {
  const {trace,baseline}=readSignal();
  const clip=useId().replaceAll(":","");
  const host=useRef<HTMLDivElement>(null);
  const [size,setSize]=useState({width:600,height:300});
  useEffect(()=>{
    const element=host.current;if(!element)return;
    const observer=new ResizeObserver(entries=>{const rect=entries[0]?.contentRect;if(rect&&rect.width>0&&rect.height>0)setSize({width:Math.round(rect.width),height:Math.round(rect.height)});});
    observer.observe(element);return()=>observer.disconnect();
  },[]);
  const W=size.width,H=Math.max(64,size.height),LEFT=compact?32:48,RIGHT=compact?8:16,TOP=annotate?29:12,BOTTOM=compact?17:25;
  const span=Math.min(windowMs??timeline.durationMs,timeline.durationMs),period=timeline.periodMs;
  const start=Math.max(0,Math.min(timeline.durationMs-span,Math.floor(timeMs/period)*period));
  const scale=1.5/gain;
  const y=(value:number)=>TOP+(H-TOP-BOTTOM)/2-value/scale*(H-TOP-BOTTOM)/2;
  const paths=useMemo(()=>{
    const first=Math.max(0,Math.floor(start/timeline.sampleMs)),last=Math.min(timeline.samples-1,Math.ceil((start+span)/timeline.sampleMs));
    const path=(values:Float32Array)=>Array.from(values.subarray(first,last+1),(value,i)=>`${i===0?"M":"L"}${(LEFT+((first+i)*timeline.sampleMs-start)/span*(W-LEFT-RIGHT)).toFixed(2)},${(TOP+(H-TOP-BOTTOM)/2-value/scale*(H-TOP-BOTTOM)/2).toFixed(2)}`).join(" ");
    return {actual:path(trace.values),approximate:showApproximation?path(trace.approximate):"",baseline:baseline?path(baseline):""};
  },[trace,scale,baseline,showApproximation,W,H,LEFT,RIGHT,TOP,BOTTOM,start,span,timeline.sampleMs,timeline.samples]);
  const x=(time:number)=>LEFT+(time-start)/span*(W-LEFT-RIGHT),ticks=Math.floor(span/40);
  const frame=Math.min(timeline.samples-1,Math.max(0,Math.round(timeMs/timeline.sampleMs)));
  return <div ref={host} className="ecg-forward-trace">
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`전극 전위차 파형. 현재 ${(timeMs/1000).toFixed(2)}초, ${trace.values[frame].toFixed(3)} 상대 전압. 파형을 누르면 해당 시각으로 이동합니다.`}
      onClick={event=>{const rect=event.currentTarget.getBoundingClientRect();onSeek(Math.max(0,Math.min(timeline.durationMs,start+((event.clientX-rect.left)/rect.width*W-LEFT)/(W-LEFT-RIGHT)*span)));}}>
      <defs><clipPath id={clip}><rect x={LEFT} y={TOP} width={W-LEFT-RIGHT} height={H-TOP-BOTTOM}/></clipPath></defs>
      <rect width={W} height={H} fill="#fffdfb"/>
      {annotate?Array.from({length:4},(_,cycle)=>timeline.phases.map(p=>{
        const left=Math.max(LEFT,x(p.start+cycle*period)),right=Math.min(W-RIGHT,x(p.end+cycle*period));
        return right>left?<g key={cycle+p.label}><rect x={left} y={TOP} width={right-left} height={H-TOP-BOTTOM} fill={p.color} fillOpacity=".46"/><text x={(left+right)/2} y="19" textAnchor="middle" fontSize="13" fontWeight="650" fill="#3c515a">{p.label}</text></g>:null;
      })):null}
      {Array.from({length:ticks+1},(_,i)=>{const time=Math.ceil(start/40)*40+i*40;return time<=start+span?<line key={i} x1={x(time)} x2={x(time)} y1={TOP} y2={H-BOTTOM} stroke={Math.round(time)%200===0?"#e2b8b8":"#f4dddd"} strokeWidth={Math.round(time)%200===0?1:.5}/>:null;})}
      {(H<110?[-1,0,1]:[-1,-.5,0,.5,1]).map(t=><g key={t}><line x1={LEFT} x2={W-RIGHT} y1={y(t*scale)} y2={y(t*scale)} stroke={t===0?"#95b4ae":"#dfebe8"}/><text x={LEFT-(compact?5:9)} y={y(t*scale)+4} textAnchor="end" fontSize={compact?10:11} fill="#526d6a">{compact?Number((t*scale).toFixed(2)):(t*scale).toFixed(2)}</text></g>)}
      {Array.from({length:Math.ceil(span/200)+1},(_,i)=>Math.ceil(start/200)*200+i*200).filter(t=>t<=start+span).map((t,i)=>(!compact||i%2===0)?<text key={t} x={x(t)} y={H-5} textAnchor="middle" fontSize={compact?10:12} fill="#637176">{(t/1000).toFixed(1)}{compact?"":" s"}</text>:null)}
      {!compact?<text x="7" y="13" fontSize="11" fill="#526d6a">a.u.</text>:null}
      <g clipPath={`url(#${clip})`}>
        {baseline&&<path d={paths.baseline} fill="none" stroke="#64748b" strokeWidth={1.5} strokeDasharray="3 5"/>}
        {showApproximation&&<path d={paths.approximate} fill="none" stroke="#d97706" strokeWidth={1.5} strokeDasharray="7 4"/>}
        <path d={paths.actual} data-ecg-wave="true" fill="none" stroke="#0c4845" strokeWidth={compact?1.6:2.2} strokeLinejoin="round"/>
        <line x1={x(timeMs)} x2={x(timeMs)} y1={TOP} y2={H-BOTTOM} stroke="#be123c" strokeWidth={1}/>
        {!compact?<circle cx={x(timeMs)} cy={y(trace.values[frame])} r={3.5} fill="#be123c"/>:null}
      </g>
    </svg>
    {trace.peak>scale&&<p className="ecg-trace-clipped">{compact?"감도 ↓":"파형 일부 잘림 · 감도를 낮추세요"}</p>}
  </div>;
}
