"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { EcgForwardWorkspace } from "@/components/ecg-forward-workspace";
import { DEFAULT_FORWARD_INPUTS, type ForwardInputs, type ForwardRecording } from "@/lib/ecg-forward-model";

type Calculation = { key:string; recording?:ForwardRecording; reference?:ForwardRecording; progress:number; error?:string };

function useForwardRecording(inputs:ForwardInputs,retry:number) {
  const key=JSON.stringify(inputs),[calculation,setCalculation]=useState<Calculation>({key:"",progress:0});
  const healthy=useRef<{key:string;recording:ForwardRecording}|null>(null);
  useEffect(()=>{
    let active=true,worker:Worker|undefined;
    const requested=JSON.parse(key) as ForwardInputs,referenceKey=JSON.stringify({...requested,ischemia:undefined});
    const cached=healthy.current?.key===referenceKey?healthy.current.recording:undefined;
    // Debounce numerical controls; cancellation terminates obsolete integrations.
    const timer=window.setTimeout(()=>{
      try {
        worker=new Worker(new URL("../workers/ecg-forward.worker.ts",import.meta.url),{type:"module"});
        worker.onmessage=(event:MessageEvent)=>{
          if(!active)return;
          if(event.data.type==="result") {
            const result=event.data.recording as ForwardRecording;
            const reference=requested.ischemia?(event.data.reference as ForwardRecording|undefined)??cached:result;
            if(reference)healthy.current={key:referenceKey,recording:reference};
            setCalculation({key,recording:result,reference,progress:100});
          }
          else if(event.data.type==="progress")setCalculation(previous=>({...previous,key,progress:Math.min(99,event.data.percent),error:undefined}));
          else if(event.data.type==="error")setCalculation({key,progress:0,error:"계산을 완료하지 못했습니다. 입력을 초기화하거나 다시 계산해 주세요."});
        };
        worker.onerror=()=>{if(active)setCalculation({key,progress:0,error:"계산 Worker를 시작하지 못했습니다. 새로고침하거나 지원되는 브라우저에서 다시 시도해 주세요."});};
        worker.postMessage({inputs:requested,needsReference:Boolean(requested.ischemia&&!cached)});
      } catch {
        if(active)setCalculation({key,progress:0,error:"이 브라우저에서 계산 Worker를 사용할 수 없습니다. 새로고침하거나 지원되는 브라우저에서 다시 시도해 주세요."});
      }
    },180);
    return ()=>{active=false;window.clearTimeout(timer);worker?.terminate();};
  },[key,retry]);
  return {...calculation,progress:calculation.key===key?calculation.progress:0,busy:calculation.key!==key||(!calculation.error&&calculation.progress<100)};
}


export function EcgForwardLab() {
  const [inputs,setInputs]=useState<ForwardInputs>(DEFAULT_FORWARD_INPUTS),[retry,setRetry]=useState(0);
  const calculation=useForwardRecording(inputs,retry);
  const recording=calculation.recording;
  // Keep the multi-megabyte recording out of recursively inspected component props.
  const readRecording=useMemo(()=>recording?()=>recording:undefined,[recording]);
  const reference=calculation.reference;
  const readReference=useMemo(()=>reference?()=>reference:undefined,[reference]);
  return <div className="ecg-forward-lab">
    <div className="ecg-recording-slot">
      {readRecording ? <EcgForwardWorkspace readRecording={readRecording} readReference={readReference} inputs={inputs} onInputs={setInputs} busy={calculation.busy}/> : null}
      {calculation.busy||calculation.error ? <div className="ecg-calculation-status" role="status" aria-live="polite">
        {calculation.error ? <><p>{calculation.error}</p><button type="button" className="simulation-primary" onClick={()=>setRetry(value=>value+1)}>다시 계산</button></> : <><strong>심근 전기활동 계산 중 · {calculation.progress}%</strong><progress max={100} value={calculation.progress} aria-label="전기활동 계산 진행률"/><p>전극 이동에는 심장 재계산이 필요하지 않습니다.</p></>}
      </div> : null}
    </div>
    <footer className="ecg-lab-footnote">교육용 축약 모델 · 임상 진단용 아님 · 부위 이름을 누르면 설명과 활성 시각을 볼 수 있습니다.</footer>
  </div>;
}
