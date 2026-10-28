"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw, Save, X, Info, SlidersHorizontal, Maximize2, Grid2X2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { EcgForwardScene } from "@/components/ecg-forward-scene";
import { EcgForwardTrace, type EcgTraceSignal, type EcgTraceTimeline } from "@/components/ecg-forward-trace";
import { EcgIschemiaPanel } from "@/components/ecg-ischemia-panel";
import { EcgScenarioControls } from "@/components/ecg-scenario-controls";
import { isRhythmCondition, isIonicCondition, ventricularActivationBursts } from "@/lib/ecg-forward-model";
import {measureSt,stWindow} from "@/lib/ecg-ischemia";
import { HEART_PARTS, partSnapshot, recordingFrame, type HeartPart } from "@/lib/ecg-forward-display";
import { advancePlayback, ECG_STEP_MS, playbackDuration, playbackStart, stepPlayback } from "@/lib/ecg-playback";
import { DEFAULT_ELECTRODES, DEFAULT_FORWARD_INPUTS, ELECTRODE_IDS, MYOCARDIAL_REGIONS, STANDARD_LEADS, dot3, electrodePosition, FORWARD_CONDITIONS, leadFieldAtCenter, leadPreset, measureStandardTraces, type Electrode, type ElectrodeId, type ElectrodeMap, type ForwardInputs, type ForwardRecording, type MyocardialRegion, type StandardLead } from "@/lib/ecg-forward-model";

type Props={readRecording:()=>ForwardRecording;readReference?:()=>ForwardRecording;inputs:ForwardInputs;onInputs:(inputs:ForwardInputs)=>void;busy:boolean};
type Comparison={inputs:ForwardInputs;electrodes:ElectrodeMap;values:Record<StandardLead,Float32Array>;lead:StandardLead;label:string};
const STEPS:HeartPart[]=["SA node","RA","AV node","His","RV Purkinje","LV Purkinje"];
const LEAD_ORDER:StandardLead[]=["I","II","III","aVR","aVL","aVF","V1","V2","V3","V4","V5","V6"];
const positiveElectrode=(lead:StandardLead):ElectrodeId=>lead.startsWith("V")?lead as ElectrodeId:lead==="I"||lead==="aVL"?"LA":lead==="aVR"?"RA":"LL";
const motionPreference = () => window.matchMedia("(prefers-reduced-motion: reduce)");
const subscribeMotion = (notify: () => void) => { const query = motionPreference(); query.addEventListener("change", notify); return () => query.removeEventListener("change", notify); };
const prefersReducedMotion = () => motionPreference().matches;
const serverMotionPreference = () => false;

export function EcgForwardWorkspace({readRecording,readReference,inputs,onInputs,busy}:Props) {
  const recording=readRecording();
  const reference=readReference?.(),lesion=recording.inputs.ischemia;
  const [electrodes,setElectrodes]=useState<ElectrodeMap>(()=>structuredClone(DEFAULT_ELECTRODES));
  const [selected,setSelected]=useState<ElectrodeId>("LL"),[lead,setLead]=useState<StandardLead>("II");
  const [part,setPart]=useState<HeartPart>("SA node"),[panel,setPanel]=useState<"structure"|"electrodes"|"model"|"injury"|null>(null);
  const [injuryRegions,setInjuryRegions]=useState<MyocardialRegion[]>(()=>[...(inputs.ischemia?.regions??[])]);
  const injuryPending=MYOCARDIAL_REGIONS.some(id=>injuryRegions.includes(id)!==(inputs.ischemia?.regions.includes(id)??false));
  const initialTime=0;
  const [storedTimeMs,setTimeMs]=useState(initialTime);
  const [playing,setPlaying]=useState(false);
  const [speed,setSpeed]=useState(.25);
  const [showFields,setShowFields]=useState(true),[showVectors,setShowVectors]=useState(true);
  const [showNetVector,setShowNetVector]=useState(true);
  const [electrodeMode,setElectrodeMode]=useState(false);
  const reduceMotion=useSyncExternalStore(subscribeMotion,prefersReducedMotion,serverMotionPreference);
  const [motionOverride,setMotionOverride]=useState<boolean|null>(null),showMotion=motionOverride??!reduceMotion;
  const [showApproximation,setShowApproximation]=useState(false),[gain,setGain]=useState(1),[display,setDisplay]=useState<"twelve"|"focus">("twelve");
  const [windowMode,setWindowMode]=useState<"beat"|"all">("beat"),[comparison,setComparison]=useState<Comparison|null>(null);
  const [showReference,setShowReference]=useState(true);
  const clock=useRef(initialTime),workspace=useRef<HTMLDivElement>(null),playButton=useRef<HTMLButtonElement>(null),guide=useRef<HTMLDialogElement>(null),settingsButton=useRef<HTMLButtonElement>(null),settingsHeading=useRef<HTMLHeadingElement>(null);
  const windowMs=playbackDuration(windowMode,recording.inputs.rate,recording.durationMs);
  const timeMs=Math.min(storedTimeMs,windowMs);
  const settingsOpen=panel!==null;
  const traces=useMemo(()=>measureStandardTraces(recording,electrodes),[recording,electrodes]);
  const referenceAvailable=Boolean(lesion)||isIonicCondition(recording.inputs.condition);
  const normalTraces=useMemo(()=>reference&&referenceAvailable?measureStandardTraces(reference,electrodes):undefined,[reference,referenceAvailable,electrodes]);
  const stInterval=useMemo(()=>stWindow(recording),[recording]);
  const st=useMemo(()=>Object.fromEntries(STANDARD_LEADS.map(id=>[id,measureSt(recording,traces[id],stInterval)])) as Record<StandardLead,ReturnType<typeof measureSt>>,[recording,traces,stInterval]);
  const timeline=useMemo<EcgTraceTimeline>(()=>{
    const times=(chambers:string[],values:Float32Array)=>recording.mesh.cells.flatMap((cell,i)=>chambers.includes(cell.chamber)&&values[i]>=0?[values[i]]:[]);
    const atrial=times(["RA","LA"],recording.activationMs),ventricular=times(["RV","LV"],recording.activationMs),recovery=times(["RV","LV"],recording.recoveryMs);
    return {durationMs:recording.durationMs,sampleMs:recording.sampleMs,samples:recording.samples,periodMs:60000/recording.inputs.rate,phases:isRhythmCondition(recording.inputs.condition)?[]:[{label:"P",start:Math.min(...atrial)-5,end:Math.max(...atrial)+8,color:"#dbeafe"},{label:"QRS",start:Math.min(...ventricular)-5,end:stInterval.depolarizationEnd,color:"#d1fae5"},{label:"T",start:stInterval.recoveryStart??Infinity,end:Math.max(...recovery)+30,color:"#ede9fe"}].filter(p=>Number.isFinite(p.start)&&Number.isFinite(p.end))};
  },[recording,stInterval]);
  const beatEvents=useMemo(()=>isRhythmCondition(recording.inputs.condition)?ventricularActivationBursts(recording):[],[recording]);
  // Readers expose only the needed arrays without expanding them in React's dev profiler.
  const signalReaders=useMemo(()=>Object.fromEntries(STANDARD_LEADS.map(id=>{
    const baseline=referenceAvailable&&showReference?normalTraces?.[id].values:comparison?.values[id];
    return [id,()=>({trace:traces[id],baseline,measurement:lesion?st[id]:undefined,stWindow:isRhythmCondition(recording.inputs.condition)?undefined:stInterval})];
  })) as Record<StandardLead,()=>EcgTraceSignal>,[traces,comparison,lesion,referenceAvailable,showReference,normalTraces,st,stInterval,recording.inputs.condition]);
  const placement=leadPreset(lead,electrodes),trace=traces[lead],frame=recordingFrame(recording,timeMs);
  const snapshot=partSnapshot(recording,part,frame),definition=HEART_PARTS.find(item=>item.id===part)!;
  const field=leadFieldAtCenter(placement),p=recording.dipole.subarray(frame*3,frame*3+3),length=Math.hypot(...p)*Math.hypot(...field);
  const angle=length>1e-8&&Math.hypot(...p)>.03?Math.acos(Math.max(-1,Math.min(1,dot3([p[0],p[1],p[2]],field)/length)))*180/Math.PI:null;
  const position=electrodePosition(electrodes[selected]);
  const displaced=ELECTRODE_IDS.some(id=>Math.abs(electrodes[id].latitude-DEFAULT_ELECTRODES[id].latitude)>.01||Math.abs(electrodes[id].longitude-DEFAULT_ELECTRODES[id].longitude)>.01);
  const seek=useCallback((time:number)=>{const next=Math.max(0,Math.min(time,windowMs));setPlaying(false);clock.current=next;setTimeMs(next);},[windowMs,setPlaying,setTimeMs]);
  const stepTime=useCallback((direction:-1|1)=>seek(stepPlayback(clock.current,direction,windowMs)),[seek,windowMs]);
  const togglePlayback=()=>{
    if(playing){seek(clock.current);return;}
    const start=playbackStart(clock.current,windowMs);clock.current=start;setTimeMs(start);setPlaying(true);
  };
  useEffect(()=>{
    if(!playing||busy)return;
    let animation=0,previous=0,lastDraw=0;
    const step=(now:number)=>{
      if(previous&&!document.hidden){
        const next=advancePlayback(clock.current,Math.min(now-previous,100)*speed,windowMs);clock.current=next.time;
        if(next.complete){setTimeMs(next.time);setPlaying(false);return;}
      }
      previous=now;if(now-lastDraw>=33){setTimeMs(clock.current);lastDraw=now;}
      animation=requestAnimationFrame(step);
    };
    animation=requestAnimationFrame(step);return()=>cancelAnimationFrame(animation);
  },[playing,speed,windowMs,busy]);
  useEffect(()=>{
    const step=(event:globalThis.KeyboardEvent)=>{
      if(playing||busy||event.defaultPrevented||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||guide.current?.open)return;
      if(event.key!=="ArrowLeft"&&event.key!=="ArrowRight")return;
      const target=event.target;
      if(!(target instanceof Element)||(!workspace.current?.contains(target)&&target!==document.body))return;
      // Native inputs, settings and electrode movement keep their own arrow keys.
      if(target.closest('input,select,textarea,[contenteditable]:not([contenteditable="false"]),[role="slider"],[role="spinbutton"],[role="combobox"],[role="listbox"],[role="menu"],dialog,.ecg-inspector,[data-electrode-mode="true"] .ecg-integrated-drawing'))return;
      event.preventDefault();stepTime(event.key==="ArrowLeft"?-1:1);
    };
    document.addEventListener("keydown",step);return()=>document.removeEventListener("keydown",step);
  },[playing,busy,stepTime]);
  useEffect(()=>{
    if(!settingsOpen)return;
    settingsHeading.current?.focus();
    const close=(event:globalThis.KeyboardEvent)=>{if(event.key==="Escape"&&!guide.current?.open){setPanel(null);settingsButton.current?.focus();}};
    document.addEventListener("keydown",close);return()=>document.removeEventListener("keydown",close);
  },[settingsOpen]);
  const closeSettings=()=>{setPanel(null);settingsButton.current?.focus();};
  const openInjury=()=>{seek(clock.current);setInjuryRegions([...(inputs.ischemia?.regions??[])]);setElectrodeMode(false);setPanel("injury");};
  const jumpPhase=(label:string)=>{
    const phase=timeline.phases.find(item=>item.label===label);if(!phase)return;
    let peak=0,index=Math.max(0,Math.floor(phase.start/recording.sampleMs));
    for(let i=index;i<=Math.min(recording.samples-1,Math.ceil(phase.end/recording.sampleMs));i++) {
      const amplitude=Math.abs(traces[lead].values[i]);if(amplitude>peak){peak=amplitude;index=i;}
    }
    seek(index*recording.sampleMs);
  };
  const selectElectrode=(value:ElectrodeId)=>{setSelected(value);setElectrodeMode(true);if(value.startsWith("V"))setLead(value as StandardLead);};
  const chooseLead=(value:StandardLead)=>{setLead(value);setSelected(positiveElectrode(value));};
  const move=(id:ElectrodeId,electrode:Electrode)=>setElectrodes(value=>({...value,[id]:electrode}));
  const selectPart=(value:HeartPart)=>{setPart(value);setPanel("structure");};
  const jump=(value:HeartPart)=>{setPart(value);const onset=partSnapshot(recording,value,frame).onset;if(onset!==null)seek(Math.round(onset/recording.sampleMs)*recording.sampleMs);};
  const save=()=>{setShowReference(false);setComparison({inputs:structuredClone(inputs),electrodes:structuredClone(electrodes),lead,values:Object.fromEntries(STANDARD_LEADS.map(id=>[id,traces[id].values.slice()])) as Record<StandardLead,Float32Array>,label:`${FORWARD_CONDITIONS.find(item=>item.id===inputs.condition)?.label} · ${inputs.rate}/min · ${inputs.ischemia?.mode??"무손상"} · 12유도`});};
  const updateInputs=(value:ForwardInputs)=>{seek(0);if(value.condition!==inputs.condition)setWindowMode(isRhythmCondition(value.condition)?"all":"beat");setInjuryRegions([...(value.ischemia?.regions??[])]);onInputs(value);};
  const chooseCondition=(condition:ForwardInputs["condition"])=>{
    updateInputs({...inputs,condition,electrophysiology:undefined,rate:condition==="mobitz1"?90:70,...(isIonicCondition(condition)?{ischemia:undefined}:{})});
    setShowReference(true);setSpeed(isRhythmCondition(condition)?1:.25);
    // Fixed display zoom only: ionic tissue can exceed the +/-1.5 a.u. viewport.
    // Every lead and its reference retain the same raw values and common gain.
    setGain(isIonicCondition(condition)?.5:1);
    if(isRhythmCondition(condition)){setDisplay("focus");chooseLead("II");}
    setPanel("model");setElectrodeMode(false);
  };
  const applyTissue=(value:ForwardInputs)=>{setShowReference(true);updateInputs(value);};
  const conductionControls=<div className="ecg-conduction-controls"><label><span>조건</span><select aria-label="전도 조건" value={inputs.condition} onChange={event=>chooseCondition(event.target.value as ForwardInputs["condition"])}>{FORWARD_CONDITIONS.map(item=><option key={item.id} value={item.id}>{item.label}</option>)}</select></label><button type="button" className="ecg-icon-button" aria-label="심장 모델 초기화" onClick={()=>updateInputs(DEFAULT_FORWARD_INPUTS)}><RotateCcw size={16}/></button></div>;

  return <div className="ecg-workspace" ref={workspace}>
    <div className="ecg-workspace-main" inert={busy}>
      <section className="ecg-scene-card" aria-label="심장과 전극">
        <div className="ecg-scene-toolbar">
          <label>전극<select aria-label="이동할 전극" value={selected} disabled={panel==="injury"} onChange={event=>selectElectrode(event.target.value as ElectrodeId)}>{ELECTRODE_IDS.map(id=><option key={id} value={id}>{id}</option>)}</select></label>
          <label><input type="checkbox" checked={showFields} disabled={panel==="injury"} onChange={event=>setShowFields(event.target.checked)}/>전기장</label>
          <button type="button" className="ecg-injury-launch" aria-label="Infarction 실험 열기" aria-pressed={panel==="injury"} aria-controls="ecg-settings-panel" data-active={Boolean(lesion)} disabled={isIonicCondition(inputs.condition)} title={isIonicCondition(inputs.condition)?"이온 전류 실험과 Ischemia의 복합 조건은 아직 지원하지 않습니다.":undefined} onClick={()=>{if(panel==="injury")closeSettings();else openInjury();}}>Ischemia / MI{lesion?" ●":""}</button>
          <button ref={settingsButton} type="button" className="ecg-icon-button" aria-label="구조·전극·모델 설정" aria-expanded={settingsOpen} aria-controls="ecg-settings-panel" onClick={()=>{if(settingsOpen)closeSettings();else{setPanel("electrodes");setElectrodeMode(true);}}}><SlidersHorizontal size={17}/><span>설정</span></button>
          <button type="button" className="ecg-icon-button" aria-label="도해와 계산 설명" onClick={()=>guide.current?.showModal()}><Info size={17}/></button>
        </div>
        <EcgForwardScene readRecording={readRecording} electrodes={electrodes} placement={placement} lead={lead} timeMs={timeMs} yaw={0} selected={selected} showFields={showFields} showVectors={showVectors} showMotion={showMotion} showNetVector={showNetVector} onNetVector={setShowNetVector} electrodeMode={panel==="injury"?false:electrodeMode} onElectrodeMode={setElectrodeMode} part={part} onPart={selectPart} onMove={move} onSelect={selectElectrode} injuryPreview={panel==="injury"?injuryRegions:undefined} injuryPending={injuryPending}/>
        <div className="ecg-forward-playback">
          <div className="ecg-playback-transport" role="group" aria-label="재생 및 짧은 시간 이동">
            <button className="simulation-button ecg-step-button" type="button" aria-label={`${ECG_STEP_MS} ms 이전`} aria-keyshortcuts="ArrowLeft" title={`이전 ${ECG_STEP_MS} ms · ←`} disabled={playing||timeMs<=0} onClick={()=>stepTime(-1)}><ChevronLeft size={17}/></button>
            <button ref={playButton} className="simulation-primary" type="button" aria-label={playing?"전기활동 일시정지":"전기활동 재생"} title={windowMode==="beat"?"한 주기 재생 후 정지":"전체 기록 재생 후 정지"} onClick={togglePlayback}>{playing?<Pause size={15}/>:<Play size={15}/>}<span>{playing?"정지":"재생"}</span></button>
            <button className="simulation-button ecg-step-button" type="button" aria-label={`${ECG_STEP_MS} ms 다음`} aria-keyshortcuts="ArrowRight" title={`다음 ${ECG_STEP_MS} ms · →`} disabled={playing||timeMs>=windowMs} onClick={()=>stepTime(1)}><ChevronRight size={17}/></button>
          </div>
          <button className="simulation-button" type="button" onClick={()=>seek(0)} aria-label="계산 기록 처음으로"><RotateCcw size={15}/></button>
          <select aria-label="전기활동 재생 속도" value={speed} onChange={event=>setSpeed(Number(event.target.value))}>{[.1,.25,.5,1].map(value=><option key={value} value={value}>{value}×</option>)}</select>
          <select className="ecg-phase-select" aria-label="관찰할 파형 구간" value="" onChange={event=>{const value=event.target.value;if(value.startsWith("beat:"))seek(Number(value.slice(5)));else if(value==="TP")seek(60);else if(value==="ST")seek(stInterval.end+2);else jumpPhase(value);playButton.current?.focus();}}><option value="" disabled>구간 이동</option>{isRhythmCondition(recording.inputs.condition)?beatEvents.map((event,i)=><option key={event.start} value={`beat:${event.start}`}>심실 {i+1} · {(event.start/1000).toFixed(2)} s</option>):["P","QRS","T"].map(label=><option key={label} value={label}>{label}</option>)}{lesion&&!isRhythmCondition(recording.inputs.condition)?<><option value="TP">TP</option><option value="ST" disabled={!st[lead].valid}>ST</option></>:null}</select>
          <input aria-label="관찰 시각" type="range" min={0} max={windowMs} step="any" value={timeMs} onChange={event=>seek(Number(event.target.value))} onKeyDown={event=>{if(!playing&&!event.altKey&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&(event.key==="ArrowLeft"||event.key==="ArrowRight")){event.preventDefault();stepTime(event.key==="ArrowLeft"?-1:1);}}}/><output>{Math.round(timeMs)} <small>ms</small></output>
        </div>
      </section>

      <div className="ecg-output-slot">
      <section className="ecg-signal-card" aria-label="12유도 ECG" hidden={settingsOpen}>
        <header className="ecg-signal-header"><h2>{display==="twelve"?"12유도 ECG":`Lead ${lead}`} <small>{displaced?"전극 위치 변경됨":"기준 전극 위치"}</small></h2>{conductionControls}<button type="button" className="ecg-icon-button" aria-label="12유도 비교 저장" onClick={save} title="12유도 현재 조건과 파형 저장"><Save size={15}/><span>비교 저장</span></button><button type="button" className="ecg-icon-button" aria-label={display==="twelve"?"선택 유도 확대":"12유도 전체 보기"} onClick={()=>setDisplay(value=>value==="twelve"?"focus":"twelve")}>{display==="twelve"?<Maximize2 size={16}/>:<Grid2X2 size={16}/>}<span>{display==="twelve"?"확대":"12유도"}</span></button></header>
        <div className="ecg-signal-toolbar">
          <label>선택<select aria-label="관찰할 ECG 유도" value={lead} onChange={event=>chooseLead(event.target.value as StandardLead)}>{STANDARD_LEADS.map(id=><option key={id} value={id}>{id}</option>)}</select></label>
          <label>감도<select aria-label="ECG 화면 감도" value={gain} onChange={event=>setGain(Number(event.target.value))}>{[.25,.5,1,2].map(value=><option key={value} value={value}>{value}×</option>)}</select></label>
          <label>시간축<select aria-label="ECG 시간 범위" value={windowMode} onChange={event=>{const mode=event.target.value as "beat"|"all";seek(Math.min(timeMs,playbackDuration(mode,recording.inputs.rate,recording.durationMs)));setWindowMode(mode);}}><option value="beat">{isRhythmCondition(recording.inputs.condition)?`짧게 (${(60/recording.inputs.rate).toFixed(2)} s)`:"1박동"}</option><option value="all">전체 {recording.durationMs/1000} s</option></select></label><span className="ecg-shared-scale">{lesion?`원 전위 · ${showReference?"점선: 무손상":"현재 조직"}`:isIonicCondition(recording.inputs.condition)&&showReference?"점선: Ionic 기준":playing?"기록 중":timeMs>=windowMs?"재생 완료":windowMode==="beat"?"시간창 재생 후 정지":"전체 기록 재생 후 정지"}</span>
        </div>
        {display==="twelve"?<div className="ecg-twelve-grid">{LEAD_ORDER.map(id=><section key={id} className="ecg-lead-tile" data-selected={lead===id} data-lead={id} aria-label={`Lead ${id}`}>
          <button type="button" className="ecg-lead-label" aria-pressed={lead===id} aria-label={`Lead ${id} 선택`} onClick={()=>chooseLead(id)}><b>{id}</b><span data-st-lead={id} data-st-value={st[id].valid?st[id].shift:undefined}>{lesion?st[id].valid?`ST ${st[id].shift>=0?"+":""}${st[id].shift.toFixed(3)}`:"ST —":traces[id].values[frame].toFixed(2)}</span></button>
          <EcgForwardTrace timeline={timeline} readSignal={signalReaders[id]} timeMs={timeMs} gain={gain} windowMs={windowMs} compact showApproximation={showApproximation} onSeek={seek}/>
        </section>)}</div>:<EcgForwardTrace timeline={timeline} readSignal={signalReaders[lead]} timeMs={timeMs} gain={gain} windowMs={windowMs} annotate showApproximation={showApproximation} onSeek={seek}/>}
        <div className="ecg-signal-values"><span><b>{lead}</b> Δφ <b>{trace.values[frame].toFixed(3)}</b></span>{lesion?<><span>TP <b>{st[lead].tp.toFixed(3)}</b></span><span title={st[lead].warning??"첫 박동 · 원 전위에서 측정"}>ST−TP <b>{st[lead].valid?`${st[lead].shift>=0?"+":""}${st[lead].shift.toFixed(3)}`:"해석 보류"}</b></span></>:<><span>φ(+) <b>{trace.positive[frame].toFixed(3)}</b></span><span>φ(ref) <b>{trace.reference[frame].toFixed(3)}</b></span></>}<span>벡터 <b>{angle===null?"—":angle.toFixed(0)+"°"}</b></span><small>{lesion?"첫 박동 · ":""}a.u. · mV 아님</small></div>
      </section>

    <aside id="ecg-settings-panel" className="ecg-inspector" aria-labelledby="ecg-settings-title" hidden={!settingsOpen}>
      <header className="ecg-inspector-header"><h2 id="ecg-settings-title" ref={settingsHeading} tabIndex={-1}>심장 모델 설정</h2>{conductionControls}<button type="button" className="ecg-settings-back" aria-label="설정 닫고 ECG로 돌아가기" onClick={closeSettings}>ECG로 돌아가기 <X size={17}/></button></header>
      <div className="ecg-inspector-tabs" role="group" aria-label="조작 패널 선택">{([['injury','손상'],['structure','부위'],['electrodes','전극'],['model','모델']] as const).map(([value,label])=><button type="button" key={value} disabled={value==="injury"&&isIonicCondition(inputs.condition)} aria-pressed={panel===value} onClick={()=>{if(value==="injury"){if(panel!=="injury")openInjury();}else{setPanel(value);if(value==="electrodes")setElectrodeMode(true);}}}>{label}</button>)}</div>
      <div className="ecg-inspector-content" data-panel={panel}>
        {panel==="injury"?<EcgIschemiaPanel inputs={inputs} onInputs={applyTissue} regions={injuryRegions} onRegions={setInjuryRegions}/>:panel==="structure"?<>
          <label className="ecg-field">선택한 구조<select aria-label="심장 구조 선택" value={part} onChange={event=>setPart(event.target.value as HeartPart)}>{HEART_PARTS.map(item=><option key={item.id} value={item.id}>{item.id} · {item.name}</option>)}</select></label>
          <section className="ecg-part-detail"><span className="ecg-part-code">{part}</span><h3>{definition.name}</h3><p>{definition.description}</p></section>
          <div className="ecg-part-values"><div><span>현재 최대 Vm</span><b>{snapshot.peak.toFixed(2)}</b></div><div><span>활성 구역 / 전체</span><b>{snapshot.active} / {snapshot.total}</b></div></div>
          <button className="ecg-onset-button" type="button" disabled={snapshot.onset===null} onClick={()=>jump(part)}>첫 활성 시점으로 <b>{snapshot.onset===null?"미활성":Math.round(snapshot.onset)+" ms"} →</b></button>
          <section className="ecg-sequence"><h3>흥분 전달 따라가기</h3><div>{STEPS.map((step,index)=><button type="button" key={step} aria-pressed={part===step} disabled={partSnapshot(recording,step,frame).onset===null} onClick={()=>jump(step)}><span>{index+1}</span>{step==="RA"?"Atrial myocardium":step}</button>)}</div><p>계산된 첫 활성 시각으로 이동합니다. 전도 차단·RV 자극 시 순서는 달라질 수 있습니다.</p></section>
        </>:panel==="electrodes"?<>
          <label className="ecg-field">이동할 전극<select aria-label="설정 패널의 이동할 전극" value={selected} onChange={event=>selectElectrode(event.target.value as ElectrodeId)}>{ELECTRODE_IDS.map(id=><option key={id} value={id}>{id}</option>)}</select></label>
          <p className="ecg-control-hint">전극을 끌거나 흉곽 표면을 누르세요. 지도에 초점을 둔 뒤 방향키로도 옮길 수 있습니다. 전극 이동은 심장 전도를 바꾸지 않습니다.</p>
          <label className="ecg-range-label"><span>둘레 각도 <b>{electrodes[selected].longitude.toFixed(0)}°</b></span><input aria-label="전극 둘레 각도" type="range" min={-180} max={180} step={1} value={electrodes[selected].longitude} onChange={event=>move(selected,{...electrodes[selected],longitude:Number(event.target.value)})}/></label>
          <label className="ecg-range-label"><span>위아래 각도 <b>{electrodes[selected].latitude.toFixed(0)}°</b></span><input aria-label="전극 위아래 각도" type="range" min={-80} max={80} step={1} value={electrodes[selected].latitude} onChange={event=>move(selected,{...electrodes[selected],latitude:Number(event.target.value)})}/></label>
          <p className="ecg-control-hint">정면 보기 · 0°: 앞 · ±180°: 뒤. 뒤쪽 전극은 점선으로 표시합니다.<br/>모델 좌표(cm): {position.map(value=>value.toFixed(1)).join(" / ")}</p>
          <p className="ecg-control-hint">I–III는 두 Limb electrode 사이의 전위차, aVR·aVL·aVF는 다른 두 전극 평균이 기준입니다. V1–V6는 RA·LA·LL 평균인 Wilson central terminal을 사용합니다.</p>
          <button className="ecg-onset-button" type="button" onClick={()=>setElectrodes(value=>({...value,RA:value.LA,LA:value.RA}))}>RA ↔ LA 위치 교환</button>
          <button className="ecg-onset-button" type="button" onClick={()=>setElectrodes(structuredClone(DEFAULT_ELECTRODES))}>모든 전극 위치 초기화</button>
        </>:panel==="model"?<>
          <EcgScenarioControls inputs={inputs} onChange={updateInputs}/>
          {referenceAvailable?<label className="ecg-check"><input type="checkbox" checked={showReference} onChange={event=>setShowReference(event.target.checked)}/>기준 조직 파형 겹치기</label>:null}
          {inputs.condition!=="af"?<label className="ecg-range-label"><span>{inputs.condition==="rv-pacing"?"RV 자극":"SA 자극"} 빈도 <b>{inputs.rate}/min</b></span><input aria-label="심장 자극 빈도" type="range" min={50} max={110} step={1} value={inputs.rate} onChange={event=>updateInputs({...inputs,rate:Number(event.target.value)})}/></label>:null}
          {!isIonicCondition(inputs.condition)?<label className="ecg-range-label"><span>Ventricular 회복 <b>{inputs.recovery}%</b></span><input aria-label="Ventricular 회복 시상수" type="range" min={70} max={135} step={5} value={inputs.recovery} onChange={event=>updateInputs({...inputs,recovery:Number(event.target.value)})}/></label>:null}
          <p className="ecg-control-hint">{FORWARD_CONDITIONS.find(item=>item.id===inputs.condition)?.explanation}</p>
          <label className="ecg-check"><input type="checkbox" checked={showMotion} onChange={event=>setMotionOverride(event.target.checked)}/>심방·심실 수축 표시</label>
          <p className="ecg-control-hint">각 부위의 Vm 상승 뒤에 수축 반응이 따라옵니다. 내강 축소·벽 두꺼워짐·AV plane 이동을 함께 표시합니다. 수축 표시는 Calcium–force·압력·혈류 계산이 아닙니다.{reduceMotion?" 기기의 동작 줄이기 설정으로 기본 표시를 껐습니다.":""}</p>
          <label className="ecg-check"><input type="checkbox" checked={showVectors} onChange={event=>setShowVectors(event.target.checked)}/>Dipole · Lead field 방향 표시</label>
          <label className="ecg-check"><input type="checkbox" checked={showApproximation} onChange={event=>setShowApproximation(event.target.checked)}/>단일 dipole 내적 근사 겹치기</label>
          <section className="ecg-comparison"><h3>12유도 파형 비교</h3>{comparison?<><p>{comparison.label}</p><div><button type="button" onClick={()=>{setElectrodes(structuredClone(comparison.electrodes));chooseLead(comparison.lead);updateInputs({...comparison.inputs});}}>조건 복원</button><button type="button" onClick={()=>setComparison(null)}>비교 해제</button></div><p>회색 점선 · 같은 배율 · 현재 화면에서만 보관</p></>:<p>ECG 위 ‘비교 저장’으로 12유도를 저장한 뒤 조건을 바꿔 보세요.</p>}</section>
          <p className="ecg-control-hint">{recording.mesh.cells.length}개 계산 구역 · {recording.mesh.edges.length}개 연결<br/>첫 시간창 내 Ventricular 활성 {(recording.activation.ventricularCoverage*100).toFixed(0)}%</p>
        </>:null}
      </div>
      <footer className="ecg-inspector-footer"><button type="button" onClick={()=>guide.current?.showModal()}>표시 원리 · 모델 한계</button><Link href="/interactive/ecg-arrhythmia/notes#forward-model">이론 노트 ↗</Link></footer>
    </aside>
      </div>
    </div>

    <dialog ref={guide} className="ecg-guide-dialog" aria-labelledby="ecg-guide-title"><header><h2 id="ecg-guide-title">심장 전도와 12유도 읽기</h2><button type="button" aria-label="설명 닫기" onClick={()=>guide.current?.close()}><X size={20}/></button></header><div>
      <section><h3>같은 심장, 12개 관찰 방향</h3><p>I = LA−RA, II = LL−RA, III = LL−LA입니다. aVR·aVL·aVF는 각각 RA·LA·LL에서 나머지 두 전극의 평균을 뺍니다. V1–V6는 각 가슴 전극에서 RA·LA·LL 평균을 뺍니다. Limb electrode를 옮기면 이 전극을 기준으로 사용하는 다른 유도도 함께 바뀝니다. RL 접지의 접촉·장비 회로는 계산하지 않습니다.</p><p>12유도 전체는 같은 시간축·감도를 사용합니다. 유도를 선택하고 ‘확대’를 누르면 한 파형을 크게 볼 수 있습니다. 확대 화면의 P·QRS·T 배경은 계산된 Atrial activation, Ventricular activation·recovery 시점에 대응하는 구간이며 임상 자동 판독 결과는 아닙니다.</p></section>
      <section><h3>전도·회복과 파형</h3><p>각 Myocardial 구역의 막전위·회복과 구역 사이 전류를 적분합니다. Atrial propagation, 빠른 Septal activation, Ventricular wall 및 늦은 Basal activation의 합으로 P·QRS가 만들어집니다. 부위·층별 Action potential duration 차이는 T wave에 기여합니다. 유도별 P·QRS·T 함수를 덧붙이거나 결과를 평활화하지 않습니다.</p><p>청록색 선은 전도계입니다. 심방 사이의 개별 전도 경로는 도해에서 생략하고 계산에서는 Atrial myocardium 사이 결합으로 축약합니다. His와 Bundle branches는 Septum을 따르고, Purkinje 말단은 Endocardial 경계에서 분지하도록 펼쳤습니다. 황금색 이동점은 실제 기록의 활성 시각 사이를 보간하며 화면 속도가 실제 전도 속도를 뜻하지는 않습니다.</p>
        <p>파란 화살표는 고정 관찰점의 Electric field E = −∇φ입니다. RA·LA와 Ventricles 9개 구역마다 2개씩, 총 22개 관찰점에서 ECG와 같은 분포 Dipole 전위식을 미분합니다. 각 구역을 두 부분으로 나눈 조직 중심에서 각각 계산하며, 같은 화살표를 복제한 것이 아닙니다. 화살표의 시작점은 고정되고 방향·길이만 계산값에 따라 변합니다. 시작점에 별도 표식은 그리지 않습니다. 전극이나 결합 전류·흥분 파면의 방향은 아닙니다.</p>
        <p>큰 검은 화살표는 모든 전류원의 벡터 합인 Net dipole p(t)입니다. 심장 그림 중심에 시작점을 고정하고, 현재 계산값의 정면 성분으로 방향·길이를 표시합니다. 특정 위치의 Electric field E나 파란 화살표들의 합과는 다릅니다. 시간·손상 조건에 같은 배율을 쓰고, 화면을 벗어나는 길이만 제한합니다. 정면 성분이 작으면 생략하며 표시가 없다고 3D 벡터 전체가 0은 아닙니다. 그림 아래 ‘합성 벡터’ 체크로 독립적으로 켜고 끕니다. 표시를 꺼도 전도·전극·ECG 계산은 바뀌지 않습니다. <a href="https://pubmed.ncbi.nlm.nih.gov/19543975/" target="_blank" rel="noreferrer">Babbs · Summed dipole model</a></p>
        <p>방향은 공통 정면 좌표계에 투영하며 모든 지점·시각에 같은 길이 압축 배율을 적용합니다. 정면 성분이 작으면 화살표를 생략하므로, 표시가 없다고 3D 전기장 전체가 0이라는 뜻은 아닙니다. 관찰 위치는 펼친 절개도에 대응하며 실제 위치 비례를 재현하지 않습니다. 기존 Infinite homogeneous conductor·거리 하한 0.25 model unit을 그대로 사용한 교육용 값으로, 임상 V/m나 Bidomain 해가 아닙니다. 선택 유도의 Lead field와도 다른 양입니다.</p>
        <p>일반 조건은 한 자극 주기 끝에서 멈추고, PVC·AV block·AF는 박동 관계를 볼 수 있도록 전체 8초 기록을 기본 표시합니다. 중간에 정지하면 이어서 재생하고, 끝에서 재생하면 처음부터 시작합니다. 아직 도달하지 않은 파형은 보이지 않고 비교 기록만 회색 점선으로 남습니다. 정지 상태에서 재생 버튼 양옆의 화살표 또는 ←·→ 키로 10 ms씩 이동합니다. 입력 항목과 전극 위치 지도는 자체 방향키 조작을 유지합니다. ‘구간 이동’은 일반 조건에서 P·QRS·T 구간의 최대 진폭 시점, 리듬 조건에서 실제 His 활성 시점으로 이동합니다.</p></section>
      <section><h3>전도·리듬·Ionic 실험</h3><p>WPW는 Accessory pathway, PVC는 국소 조기 자극을 추가합니다. AV block은 결합과 연속적인 회복 상태를 바꾸고, Complete AV block은 독립적인 Junctional automaticity를 사용합니다. AF에서는 국소 자동능과 Atrial recovery를 직접 바꾸어 남은 Re-entry와 AV 전달을 비교합니다. 정해진 RR 목록이나 파형 조각을 붙이지 않습니다.</p><p>Hyperkalemia·QT는 사람 Ventricular cell의 TP06 수식에서 K⁺ 농도 또는 IKr conductance를 바꿉니다. 세포층별 전류와 고정된 IKs 공간 차이도 포함합니다. Atria·SA/AV·His–Purkinje는 축약된 부분이 남아 있으며, 환자의 혈청 K⁺·QTc·약물 반응을 예측하지 않습니다. 점선은 동일 모델의 기준 조건입니다. Ischemia와 동시 적용하지 않습니다. <Link href="/interactive/ecg-arrhythmia/notes#forward-ionic">Ionic 모델</Link> · <Link href="/interactive/ecg-arrhythmia/notes#forward-rhythm">리듬 모델과 한계</Link></p></section>
      <section><h3>부위별 Ischemia / Infarction 실험</h3><p>‘Ischemia / MI’에서 허혈 위치를 체크하면 같은 번호의 심근 구역이 강조됩니다. 여러 부위를 선택한 뒤 ‘허혈 적용’을 누르세요. 적용 전에는 위치만 미리 표시하며, 적용 후 조직 특성을 바꾸어 Vm과 전극 전위를 다시 계산합니다. ST 구간에 값을 더하지 않습니다. ‘허혈 해제’로 무손상 조건으로 돌아갑니다.</p><p>‘ECG로 돌아가기’에서 파형을 확인하고, ‘구간 이동’ 목록의 TP와 ST로 휴지기와 Plateau의 전류 방향을 비교하세요. 회색 점선은 같은 조건에서 손상만 제거한 별도 계산입니다.</p><p>9개 구역은 앞·뒤 심근을 펼친 개념도이며 Coronary territory·AHA segment와 일대일 대응하지 않습니다. LV inferior는 독립 구역이 아닙니다. 작은 RV·Posterior 병변 등에서 변화가 작을 수 있으며 임상 mV·STEMI 진단·환자 예측에 사용할 수 없습니다. 조직 매개변수와 계산식·한계는 <Link href="/interactive/ecg-arrhythmia/notes#regional-ischemia">부위별 Ischemia 노트</Link>에서 확인할 수 있습니다.</p></section>
      <section><h3>그림의 크기와 전극 좌표</h3><p>심장은 구조를 읽기 위해 확대해 그린 전면 개념 절개도입니다. LA와 앞·뒤의 심근 구역을 펼쳐 보여 주며 실제 단면이나 위치 비례를 재현하지는 않습니다. 전극은 별도의 3D 흉곽 타원체 표면 좌표에서 계산하며, 심장 그림의 확대가 계산 거리를 바꾸지 않습니다. ‘전극 위치’에서는 전극과 흉곽을 정면으로 함께 보여 줍니다. 가슴 전극 위치는 축약 좌표이며 실제 늑간 부착 도해가 아닙니다. 점선 전극은 뒤쪽 표면에 있습니다. 설정은 ECG 파형 영역에 열리고, ‘ECG로 돌아가기’로 닫으면 기존 유도·시간·전극 설정을 유지한 파형으로 돌아갑니다.</p><p>벽의 옅은 황금색은 흥분, 청회색은 Vm이 감소하는 회복입니다. 각 구역·층의 평균 Vm을 저장 샘플 사이에서 보간하며, Atria는 전파 방향으로, Ventricles는 벽 두께 방향으로 배열합니다. 이름에 마우스를 올리거나 키보드로 초점을 맞추면 짧은 설명이 나오고, 클릭 또는 Enter로 상세 패널을 엽니다. 설정에서 켜는 작은 벡터 도해의 청회색은 합성 dipole, 청록 점선은 선택 유도의 Lead field입니다. 전압은 고정 배율의 a.u.이고 임상 mV로 보정하지 않았습니다.</p></section>
      <p className="ecg-guide-sources">근거: <a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy" target="_blank" rel="noreferrer">OpenStax · Heart anatomy</a> · <a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/19-2-cardiac-muscle-and-electrical-activity" target="_blank" rel="noreferrer">OpenStax · Conduction system</a> · <a href="https://www.bem.fi/book/06/06.htm" target="_blank" rel="noreferrer">Bioelectromagnetism · 활성과 전류</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/27034121/" target="_blank" rel="noreferrer">APD gradient와 T wave 연구</a></p>
      <p className="ecg-guide-sources">모델 참고: <a href="https://doi.org/10.1161/01.CIR.41.6.899" target="_blank" rel="noreferrer">Durrer · Ventricular activation</a> · <a href="https://opencarp.org/documentation/examples/02_ep_tissue/07_extracellular" target="_blank" rel="noreferrer">openCARP · ECG recovery</a> · <a href="https://doi.org/10.1186/s12576-020-00760-3" target="_blank" rel="noreferrer">Okada · ST elevation 기전</a></p>
      <section><h3>전기적 활성화와 수축·이완</h3><p>각 조직의 Vm 상승이 짧은 지연 뒤에 수축 반응을 일으키고, 반응이 소멸하며 이완합니다. 심방과 심실의 반응 시간은 다르고, 전도 지연이나 차단은 실제 활성 기록을 통해 움직임에 반영됩니다. 내강은 안쪽으로 좁아지고 Endocardium이 Epicardium보다 더 이동해 벽이 두꺼워지며, AV plane은 Apex 쪽으로 내려옵니다. 심장 전체의 단순 확대·축소가 아닙니다.</p><p>Vm에서 구한 무차원 반응으로 절개도를 변형하는 단방향 교육용 표시입니다. 실제 Calcium transient·Crossbridge·심근 탄성·압력·혈류·Valve 역학을 풀지 않으며 EF나 임상 Strain을 계산하지 않습니다. Ischemia의 수축 반응은 손상 정도에 따라 감소시키고 Scar에는 능동 수축을 주지 않지만, 주변 조직에 끌려 움직일 수 있습니다. 전극·ECG 계산 좌표와 파란 전기장 화살표의 시작점은 고정됩니다. 표시를 꺼도 ECG는 변하지 않습니다.</p><p>‘설정 → 모델 → 심방·심실 수축 표시’로 켜고 끕니다. 기기의 동작 줄이기를 사용하면 기본적으로 꺼집니다. <a href="https://pubmed.ncbi.nlm.nih.gov/28754098/" target="_blank" rel="noreferrer">Asgeirsson · AV plane과 Longitudinal shortening</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/28392437/" target="_blank" rel="noreferrer">Land · Calcium–tension 모델</a>을 참고했으며, 해당 논문의 정량 모델을 구현한 것은 아닙니다.</p></section>
    </div></dialog>
  </div>;
}
