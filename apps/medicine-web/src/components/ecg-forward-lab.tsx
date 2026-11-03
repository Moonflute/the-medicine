"use client";

import { useEffect, useMemo, useState } from "react";
import { EcgForwardWorkspace } from "@/components/ecg-forward-workspace";
import { DEFAULT_FORWARD_INPUTS, isIonicCondition, normalizeForwardInputs, referenceForwardInputs, type ForwardInputs, type ForwardRecording } from "@/lib/ecg-forward-model";
import { createEcgRecordingCache } from "@/lib/ecg-recording-cache";

type Calculation = { key:string; recording?:ForwardRecording; reference?:ForwardRecording; progress:number; error?:string };

function useForwardRecording(inputs:ForwardInputs,retry:number) {
  const key=JSON.stringify(normalizeForwardInputs(inputs)),[calculation,setCalculation]=useState<Calculation>({key:"",progress:0});
  const [cache]=useState(()=>createEcgRecordingCache());
  useEffect(()=>{
    let active=true,worker:Worker|undefined;
    const requested=JSON.parse(key) as ForwardInputs,referenceKey=JSON.stringify(normalizeForwardInputs(referenceForwardInputs(requested)));
    const needsReference=Boolean(requested.ischemia)||isIonicCondition(requested.condition);
    const separateReference=needsReference&&referenceKey!==key,cached=cache.get(key);
    let reference=separateReference?cache.get(referenceKey):cached;
    // Debounce numerical controls; cancellation terminates obsolete integrations.
    const timer=window.setTimeout(()=>{
      if(cached&&reference){setCalculation({key,recording:cached,reference,progress:100});return;}
      try {
        worker=new Worker(new URL("../workers/ecg-forward.worker.ts",import.meta.url),{type:"module"});
        worker.onmessage=(event:MessageEvent)=>{
          if(!active)return;
          if(event.data.type==="reference") {
            // Keep a completed reference even if the subsequent lesion run is
            // cancelled. Never cache partially integrated tissue.
            reference=event.data.recording as ForwardRecording;
            cache.set(referenceKey,reference);
          } else if(event.data.type==="result") {
            const result=(event.data.recording as ForwardRecording|undefined)??cached;
            const matchedReference=separateReference?reference:result;
            worker?.terminate();
            if(!result||!matchedReference){setCalculation({key,progress:0,error:"계산 결과가 불완전합니다. 다시 계산해 주세요."});return;}
            cache.set(key,result);
            setCalculation({key,recording:result,reference:matchedReference,progress:100});
          }
          else if(event.data.type==="progress")setCalculation(previous=>{const progress=Math.min(99,event.data.percent);return previous.key===key&&previous.progress===progress&&!previous.error?previous:{...previous,key,progress,error:undefined};});
          else if(event.data.type==="error"){worker?.terminate();setCalculation({key,progress:0,error:"계산을 완료하지 못했습니다. 입력을 초기화하거나 다시 계산해 주세요."});}
        };
        worker.onerror=()=>{worker?.terminate();if(active)setCalculation({key,progress:0,error:"계산 Worker를 시작하지 못했습니다. 새로고침하거나 지원되는 브라우저에서 다시 시도해 주세요."});};
        worker.postMessage({inputs:requested,needsReference:separateReference&&!reference,needsRecording:!cached});
      } catch {
        worker?.terminate();
        if(active)setCalculation({key,progress:0,error:"이 브라우저에서 계산 Worker를 사용할 수 없습니다. 새로고침하거나 지원되는 브라우저에서 다시 시도해 주세요."});
      }
    },cached&&reference?0:180);
    return ()=>{active=false;window.clearTimeout(timer);worker?.terminate();};
  },[key,retry,cache]);
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
        {calculation.error ? <><p>{calculation.error}</p><button type="button" className="simulation-primary" onClick={()=>setRetry(value=>value+1)}>다시 계산</button></> : <><strong>심근 전기활동 계산 중 · {calculation.progress}%</strong><progress max={100} value={calculation.progress} aria-label="전기활동 계산 진행률"/><p>전극 이동에는 심장 재계산이 필요하지 않습니다.</p><button type="button" className="simulation-button" onClick={()=>{setInputs(DEFAULT_FORWARD_INPUTS);setRetry(value=>value+1);}}>계산 취소 · 기준 전도로</button></>}
      </div> : null}
    </div>
    <footer className="ecg-lab-footnote">교육용 축약 모델 · 임상 진단용 아님 · 부위 이름을 누르면 설명과 활성 시각을 볼 수 있습니다.</footer>
  </div>;
}
