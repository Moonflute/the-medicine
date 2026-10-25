"use client";

import Link from "next/link";
import { Pause, Play, RotateCcw, Save, ArrowLeftRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { PhysiologyControl, PhysiologyHeader, PresetStrip } from "@/components/physiology-ui";
import { EcgForwardScene } from "@/components/ecg-forward-scene";
import { EcgForwardTrace } from "@/components/ecg-forward-trace";
import {
  DEFAULT_FORWARD_INPUTS, DEFAULT_PLACEMENT, FORWARD_CONDITIONS, dot3,
  electrodePosition, leadFieldAtCenter, leadPreset, measureForwardTrace,
  type Electrode, type ForwardInputs, type ForwardRecording, type ForwardTrace, type LeadPlacement,
} from "@/lib/ecg-forward-model";

type Calculation = { key:string; recording?:ForwardRecording; progress:number; error?:string };
type Comparison = { inputs:ForwardInputs; placement:LeadPlacement; values:Float32Array; label:string };

function useForwardRecording(inputs:ForwardInputs,retry:number) {
  const key=JSON.stringify(inputs),[calculation,setCalculation]=useState<Calculation>({key:"",progress:0});
  useEffect(()=>{
    let active=true,worker:Worker|undefined;
    // Debounce numerical controls; cancellation terminates obsolete integrations.
    const timer=window.setTimeout(()=>{
      try {
        worker=new Worker(new URL("../workers/ecg-forward.worker.ts",import.meta.url),{type:"module"});
        worker.onmessage=(event:MessageEvent)=>{
          if(!active)return;
          if(event.data.type==="result")setCalculation({key,recording:event.data.recording,progress:100});
          else if(event.data.type==="progress")setCalculation({key,progress:event.data.percent});
          else if(event.data.type==="error")setCalculation({key,progress:0,error:"계산을 완료하지 못했습니다. 입력을 초기화하거나 다시 계산해 주세요."});
        };
        worker.onerror=()=>{if(active)setCalculation({key,progress:0,error:"계산 Worker를 시작하지 못했습니다. 새로고침하거나 지원되는 브라우저에서 다시 시도해 주세요."});};
        worker.postMessage(JSON.parse(key));
      } catch {
        if(active)setCalculation({key,progress:0,error:"이 브라우저에서 계산 Worker를 사용할 수 없습니다. 기존 합성 리듬 학습은 계속 이용할 수 있습니다."});
      }
    },180);
    return ()=>{active=false;window.clearTimeout(timer);worker?.terminate();};
  },[key,retry]);
  return calculation.key===key?calculation:{key,progress:0};
}

function ForwardRecordingView({recording,placement,selected,onMove,onSelect,comparison,onSave}: {
  recording:ForwardRecording;placement:LeadPlacement;selected:"positive"|"negative";
  onMove:(electrode:Electrode)=>void;onSelect:(selected:"positive"|"negative")=>void;
  comparison:Comparison|null;onSave:(trace:ForwardTrace)=>void;
}) {
  const trace=useMemo(()=>measureForwardTrace(recording,placement),[recording,placement]);
  const [timeMs,setTimeMs]=useState(0),[playing,setPlaying]=useState(false),[speed,setSpeed]=useState(.25);
  const [yaw,setYaw]=useState(0),[showCurrents,setShowCurrents]=useState(true),[showApproximation,setShowApproximation]=useState(false),[gain,setGain]=useState(1);
  const clock=useRef({time:0,last:0}),animation=useRef(0);
  useEffect(()=>{
    if(!playing)return;
    let previous=0;
    const step=(now:number)=>{
      if(previous)clock.current.time=(clock.current.time+Math.min(now-previous,100)*speed)%recording.durationMs;
      previous=now;
      if(now-clock.current.last>=33){setTimeMs(clock.current.time);clock.current.last=now;}
      animation.current=requestAnimationFrame(step);
    };
    animation.current=requestAnimationFrame(step);
    return ()=>cancelAnimationFrame(animation.current);
  },[playing,speed,recording.durationMs]);
  const seek=(next:number)=>{setPlaying(false);clock.current.time=next;setTimeMs(next);};
  const frame=Math.min(recording.samples-1,Math.round(timeMs/recording.sampleMs)),field=leadFieldAtCenter(placement);
  const dipole=recording.dipole.subarray(frame*3,frame*3+3),dipoleLength=Math.hypot(...dipole),fieldLength=Math.hypot(...field);
  const cosine=dipoleLength>1e-3&&fieldLength>1e-8?Math.max(-1,Math.min(1,dot3([dipole[0],dipole[1],dipole[2]],field)/(dipoleLength*fieldLength))):null;
  const activation=recording.activation;
  const delay=activation.atrialStart!==null&&activation.ventricularStart!==null?activation.ventricularStart-activation.atrialStart:null;
  const spread=activation.ventricularStart!==null&&activation.ventricularEnd!==null?activation.ventricularEnd-activation.ventricularStart:null;
  return <div className="space-y-4">
    <section className="ecg-forward-visual" aria-label="심근 전기활동과 전극 위치">
      <div className="flex flex-wrap items-center gap-3 border-b border-[var(--line)] p-3 text-xs">
        <span className="font-semibold">{recording.mesh.cells.length}개 구역 · {recording.mesh.edges.length}개 연결</span>
        <label className="ml-auto inline-flex items-center gap-2">보기 <select aria-label="심장과 흉곽 보기" value={yaw} onChange={e=>setYaw(Number(e.target.value))}><option value={0}>Anterior</option><option value={45}>Oblique 45°</option><option value={90}>Lateral</option><option value={180}>Posterior</option></select></label>
        <label className="inline-flex items-center gap-2"><input type="checkbox" checked={showCurrents} onChange={e=>setShowCurrents(e.target.checked)}/>구역 사이 전류</label>
      </div>
      <EcgForwardScene recording={recording} placement={placement} timeMs={timeMs} yaw={yaw} selected={selected} showCurrents={showCurrents} onMove={onMove} onSelect={onSelect}/>
      <div className="ecg-forward-playback">
        <button className="simulation-primary" type="button" aria-label={playing?"전기활동 일시정지":"전기활동 재생"} onClick={()=>setPlaying(v=>!v)}>{playing?<Pause size={16}/>:<Play size={16}/>} {playing?"일시정지":"재생"}</button>
        <button className="simulation-button" type="button" onClick={()=>seek(0)} aria-label="계산 기록 처음으로"><RotateCcw size={16}/></button>
        <label className="text-xs">속도 <select value={speed} onChange={e=>setSpeed(Number(e.target.value))}><option value={.1}>0.1×</option><option value={.25}>0.25×</option><option value={.5}>0.5×</option><option value={1}>1×</option></select></label>
        <label className="flex min-w-36 flex-1 items-center gap-3 text-xs"><span className="sr-only">관찰 시각</span><input aria-label="관찰 시각" className="min-w-0 flex-1 accent-teal-700" type="range" min={0} max={recording.durationMs} step={recording.sampleMs} value={timeMs} onChange={e=>seek(Number(e.target.value))}/><output className="w-16 font-mono">{(timeMs/1000).toFixed(3)} s</output></label>
      </div>
      <div className="flex flex-wrap items-center gap-2 border-t border-[var(--line)] px-3 py-2 text-xs"><span>첫 기록의 활성 시작:</span>{recording.mesh.landmarks.filter(l=>["SA node","AV node","His","RV Purkinje","LV Purkinje"].includes(l.label)).map(l=><button key={l.label} type="button" className="simulation-button" disabled={recording.activationMs[l.index]<0} onClick={()=>seek(Math.round(recording.activationMs[l.index]/2)*2)}>{l.label} {recording.activationMs[l.index]<0?"—":Math.round(recording.activationMs[l.index])+" ms"}</button>)}</div>
    </section>
    <section className="ecg-forward-visual" aria-label="계산된 ECG">
      <div className="flex flex-wrap items-center gap-3 p-3">
        <div><h2 className="text-sm font-bold">전극에서 계산한 ECG</h2><p className="mt-1 text-xs text-[var(--muted)]">초록 실선: 분포 전류원으로 계산한 φ(+) − φ(reference)</p></div>
        <label className="ml-auto text-xs">화면 감도 <select aria-label="ECG 화면 감도" value={gain} onChange={e=>setGain(Number(e.target.value))}>{[.1,.25,.5,1,2].map(v=><option key={v} value={v}>{v}×</option>)}</select></label>
      </div>
      <EcgForwardTrace recording={recording} trace={trace} timeMs={timeMs} gain={gain} showApproximation={showApproximation} baseline={comparison?.values} onSeek={seek}/>
      <div className="flex flex-wrap items-center gap-4 border-t border-[var(--line)] p-3 text-xs">
        <label className="inline-flex items-center gap-2"><input type="checkbox" checked={showApproximation} onChange={e=>setShowApproximation(e.target.checked)}/>단일 dipole 내적 근사 겹치기 <span className="text-amber-700">(주황 점선)</span></label>
        <button type="button" className="simulation-button ml-auto" onClick={()=>onSave(trace)}><Save size={15}/>현재 파형 비교 저장</button>
      </div>
      <div className="ecg-forward-readouts">
        <div><span>φ(+) · a.u.</span><strong>{trace.positive[frame].toFixed(3)}</strong></div>
        <div><span>φ(reference) · a.u.</span><strong>{trace.reference[frame].toFixed(3)}</strong></div>
        <div><span>전위차 · a.u.</span><strong>{trace.values[frame].toFixed(3)}</strong></div>
        <div><span>dipole–Lead field 각도</span><strong>{cosine===null?"—":(Math.acos(cosine)*180/Math.PI).toFixed(1)+"°"}</strong></div>
      </div>
      <p className="px-3 pb-3 text-xs leading-5 text-[var(--muted)]">전압은 고정 배율의 상대 단위(a.u.)이며 임상 mV가 아닙니다. 각도만으로 실제 파형 전체를 결정하지 않습니다. 가슴 가까이에서는 여러 위치의 전류원을 합한 실선과 단일 dipole 근사가 다를 수 있습니다.</p>
    </section>
    <section className="physiology-card" aria-label="전도 계산 요약">
      <div className="ecg-forward-readouts">
        <div><span>Atrial → Ventricular 시작</span><strong>{delay===null?"—":delay.toFixed(1)+" ms"}</strong></div>
        <div><span>Ventricular 활성 분산</span><strong>{spread===null?"—":spread.toFixed(1)+" ms"}</strong></div>
        <div><span>활성된 Ventricular 구역</span><strong>{(activation.ventricularCoverage*100).toFixed(0)}%</strong></div>
      </div>
      <p className="text-xs leading-5 text-[var(--muted)]">막전위가 0.5를 넘은 시각으로 집계합니다. ECG에서 측정한 PR·QRS duration과 같은 값이 아닙니다. RV 자극에서는 Atria가 나중에 활성되어 첫 값이 음수일 수 있습니다. 2회 선행 자극 후 계산한 2.4초 기록을 재생하며, 반복 재생의 끝과 처음은 연속 파형이 아닙니다.</p>
    </section>
  </div>;
}

export function EcgForwardLab() {
  const [inputs,setInputs]=useState<ForwardInputs>(DEFAULT_FORWARD_INPUTS),[placement,setPlacement]=useState<LeadPlacement>(DEFAULT_PLACEMENT);
  const [selected,setSelected]=useState<"positive"|"negative">("positive"),[preset,setPreset]=useState("II"),[retry,setRetry]=useState(0),[comparison,setComparison]=useState<Comparison|null>(null);
  const calculation=useForwardRecording(inputs,retry);
  const condition=FORWARD_CONDITIONS.find(c=>c.id===inputs.condition)!;
  const moveElectrode=(electrode:Electrode)=>{setPlacement(previous=>({...previous,[selected]:electrode}));setPreset("");};
  const chooseLead=(id:string)=>{setPlacement(leadPreset(id));setPreset(id);setSelected("positive");};
  const position=electrodePosition(placement[selected]);
  return <div className="physiology-lab space-y-5">
    <PhysiologyHeader title="ECG 전기생리 모델" description="심근 구역의 흥분·회복과 구역 사이 전류를 계산합니다. 흉곽의 전극을 옮기면 같은 심장 활동을 다른 위치에서 측정한 ECG가 나타납니다." links={[{href:"/interactive/ecg-arrhythmia/notes#forward-model",label:"계산 원리와 한계"},{href:"/interactive/cardiac-hemodynamics",label:"심장 혈역학"}]}/>
    <div className="scenario-notice">교육용 축약 모델입니다. 실제 인체의 이온 통로·해부학·조직 전도도를 완전히 재현한 모델이나 진단용 ECG 생성기가 아닙니다. 파형을 미리 그려 놓지는 않습니다.</div>
    <PresetStrip presets={FORWARD_CONDITIONS} selected={inputs.condition} onSelect={id=>setInputs(v=>({...v,condition:id as ForwardInputs["condition"]}))} onReset={()=>{setInputs(DEFAULT_FORWARD_INPUTS);setPlacement(DEFAULT_PLACEMENT);setSelected("positive");setPreset("II");}}/>
    <div className="ecg-forward-layout">
      <div className="min-w-0">
        {calculation.recording?<ForwardRecordingView key={JSON.stringify(calculation.recording.inputs)} recording={calculation.recording} placement={placement} selected={selected} onMove={moveElectrode} onSelect={setSelected} comparison={comparison} onSave={trace=>setComparison({inputs:{...inputs},placement:structuredClone(placement),values:trace.values.slice(),label:`${condition.label} · ${inputs.rate}/min · ${preset||"사용자 전극"} · 회복 ${inputs.recovery}%`})}/>:<section className="physiology-card flex min-h-80 flex-col items-center justify-center gap-4" role="status" aria-live="polite">{calculation.error?<><p className="max-w-md text-sm leading-6">{calculation.error}</p><button className="simulation-primary" type="button" onClick={()=>setRetry(v=>v+1)}>다시 계산</button></>:<><p className="font-semibold">심근의 전기활동 계산 중 · {calculation.progress}%</p><progress className="w-52 accent-teal-700" max={100} value={calculation.progress} aria-label="전기활동 계산 진행률"/><p className="text-xs text-[var(--muted)]">전극 이동에는 심장 재계산이 필요하지 않습니다.</p></>}</section>}
        {comparison&&<section className="physiology-card mt-4 space-y-3" aria-label="저장한 ECG 비교"><p className="text-sm"><span className="font-semibold">회색 점선 · 저장한 파형</span><br/>{comparison.label}</p><p className="text-xs text-[var(--muted)]">같은 시간축·전압 배율로 비교합니다. Rate가 다르면 박동 위치도 달라집니다. 현재 화면을 떠나면 저장값은 사라집니다.</p><div className="flex flex-wrap gap-2"><button className="simulation-button" type="button" onClick={()=>{setInputs({...comparison.inputs});setPlacement(structuredClone(comparison.placement));setPreset("");setSelected("positive");}}>저장한 조건 복원</button><button className="simulation-button" type="button" onClick={()=>setComparison(null)}>비교 해제</button></div></section>}
      </div>
      <aside className="physiology-card space-y-5" aria-label="전기생리 모델 조작">
        <section className="space-y-4"><h2 className="text-base font-bold">심장 모델</h2><p className="text-xs leading-5 text-[var(--muted)]">{condition.explanation}</p>
          <PhysiologyControl label={inputs.condition==="rv-pacing"?"RV 자극 빈도":"SA 자극 빈도"} value={inputs.rate} min={50} max={110} step={1} displayValue={inputs.rate+"/min"} hint="시작점에 주는 주기적 자극입니다. 실제 SA node의 자동능 이온 통로 모델은 아닙니다." onChange={rate=>setInputs(v=>({...v,rate}))}/>
          <PhysiologyControl label="Ventricular 회복 시상수" value={inputs.recovery} min={70} max={135} step={5} displayValue={inputs.recovery+"%"} hint="회복 gate의 시상수를 바꿉니다. QT를 직접 지정하는 값이 아니며, repolarization과 다음 자극의 반응이 함께 달라집니다." onChange={recovery=>setInputs(v=>({...v,recovery}))}/>
        </section>
        <section className="space-y-3 border-t border-[var(--line)] pt-4"><h2 className="text-base font-bold">측정 전극</h2>
          <label className="block text-xs">위치 예시 <select className="mt-2 w-full" aria-label="전극 위치 예시" value={preset} onChange={e=>chooseLead(e.target.value)}><option value="" disabled>사용자 전극 위치</option>{["I","II","III","V1","V2","V3","V4","V5","V6"].map(id=><option key={id} value={id}>Lead {id}{id.startsWith("V")?" · Wilson reference":" · bipolar"}</option>)}</select></label>
          <p className="text-xs leading-5 text-[var(--muted)]">흉곽 지도에서 전극을 끌거나 원하는 표면을 누르세요. 위치 예시는 축약 흉곽의 좌표이며 실제 늑간·해부학적 전극 부착 위치를 교육하는 도해가 아닙니다.</p>
          <label className="block text-xs">기준 전위 <select className="mt-2 w-full" aria-label="기준 전위" value={placement.reference} onChange={e=>{setPlacement(v=>({...v,reference:e.target.value as LeadPlacement["reference"]}));setSelected("positive");setPreset("");}}><option value="bipolar">이동 가능한 − 전극</option><option value="wilson">Wilson central terminal</option></select></label>
          {placement.reference==="wilson"?<p className="text-xs leading-5 text-[var(--muted)]">고정된 RA·LA·LL의 전위 평균을 뺍니다. Wilson reference는 실제 무전위 지점이 아니며, 지도에는 기준 전극 3개를 회색으로 표시합니다.</p>:<div className="flex flex-wrap gap-2"><button className="simulation-button" type="button" aria-pressed={selected==="positive"} onClick={()=>setSelected("positive")}>+ 전극</button><button className="simulation-button" type="button" aria-pressed={selected==="negative"} onClick={()=>setSelected("negative")}>− 전극</button><button className="simulation-button" type="button" onClick={()=>{setPlacement(v=>({...v,positive:v.negative,negative:v.positive}));setPreset("");}}><ArrowLeftRight size={15}/>극성 교환</button></div>}
          <PhysiologyControl label={(selected==="positive"?"+":"−")+" 전극 둘레 각도"} value={Math.round(placement[selected].longitude)} min={-180} max={180} step={1} displayValue={placement[selected].longitude.toFixed(0)+"°"} hint="0°는 앞, ±180°는 뒤입니다. +90°는 환자 왼쪽, −90°는 환자 오른쪽입니다." onChange={longitude=>moveElectrode({...placement[selected],longitude})}/>
          <PhysiologyControl label={(selected==="positive"?"+":"−")+" 전극 위아래 각도"} value={Math.round(placement[selected].latitude)} min={-80} max={80} step={1} displayValue={placement[selected].latitude.toFixed(0)+"°"} hint="양수는 위, 음수는 아래입니다. 모든 위치는 같은 3D 흉곽 표면에 놓입니다." onChange={latitude=>moveElectrode({...placement[selected],latitude})}/>
          <p className="text-xs text-[var(--muted)]">선택 전극 좌표 (cm, 모델):<br/><span className="font-mono">x {position[0].toFixed(1)} · y {position[1].toFixed(1)} · z {position[2].toFixed(1)}</span></p>
        </section>
      </aside>
    </div>
    <section className="physiology-card space-y-3"><h2 className="font-bold">이렇게 관찰해 보세요</h2><ol className="list-decimal space-y-2 pl-5 text-sm leading-6"><li>His 활성 시각을 누르고 전극을 움직입니다. 심근 색과 활성 시각은 유지되지만 전위차는 달라집니다.</li><li>이동 가능한 − 전극 모드에서 극성을 교환합니다. 같은 계산 파형의 부호가 정확히 반전됩니다.</li><li>기준 전도를 비교 저장한 뒤 RBB·LBB 연결을 차단합니다. 늦어지는 구역과 파형 변화를 함께 봅니다.</li><li>회복 시상수를 바꾸고 뒤쪽 파형을 비교합니다. Repolarization도 같은 막전위 계산에서 나오며 별도 T wave 템플릿을 쓰지 않습니다.</li></ol><Link className="inline-block text-sm font-semibold text-[var(--primary)] underline underline-offset-4" href="/interactive/ecg-arrhythmia/notes#forward-model">막전위 방정식·전극 계산·모델의 한계 자세히 보기 →</Link></section>
  </div>;
}
