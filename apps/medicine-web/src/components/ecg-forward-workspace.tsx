"use client";

import Link from "next/link";
import { Pause, Play, RotateCcw, Save, X, Info, SlidersHorizontal, Maximize2, Grid2X2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { EcgForwardScene } from "@/components/ecg-forward-scene";
import { EcgForwardTrace, type EcgTraceSignal, type EcgTraceTimeline } from "@/components/ecg-forward-trace";
import { HEART_PARTS, partSnapshot, recordingFrame, type HeartPart } from "@/lib/ecg-forward-display";
import { DEFAULT_ELECTRODES, ELECTRODE_IDS, STANDARD_LEADS, dot3, electrodePosition, FORWARD_CONDITIONS, leadFieldAtCenter, leadPreset, measureStandardTraces, type Electrode, type ElectrodeId, type ElectrodeMap, type ForwardInputs, type ForwardRecording, type StandardLead } from "@/lib/ecg-forward-model";

type Props={readRecording:()=>ForwardRecording;inputs:ForwardInputs;onInputs:(inputs:ForwardInputs)=>void;busy:boolean};
type Comparison={inputs:ForwardInputs;electrodes:ElectrodeMap;values:Record<StandardLead,Float32Array>;lead:StandardLead;label:string};
const STEPS:HeartPart[]=["SA node","RA","AV node","His","RV Purkinje","LV Purkinje"];
const LEAD_ORDER:StandardLead[]=["I","II","III","aVR","aVL","aVF","V1","V2","V3","V4","V5","V6"];
const positiveElectrode=(lead:StandardLead):ElectrodeId=>lead.startsWith("V")?lead as ElectrodeId:lead==="I"||lead==="aVL"?"LA":lead==="aVR"?"RA":"LL";

export function EcgForwardWorkspace({readRecording,inputs,onInputs,busy}:Props) {
  const recording=readRecording();
  const [electrodes,setElectrodes]=useState<ElectrodeMap>(()=>structuredClone(DEFAULT_ELECTRODES));
  const [selected,setSelected]=useState<ElectrodeId>("LL"),[lead,setLead]=useState<StandardLead>("II");
  const [part,setPart]=useState<HeartPart>("His"),[panel,setPanel]=useState<"structure"|"electrodes"|"model"|null>(null);
  const initialTime=Math.round(((recording.activation.ventricularStart??250)+((recording.activation.ventricularEnd??310)-(recording.activation.ventricularStart??250))*.6)/recording.sampleMs)*recording.sampleMs;
  const [timeMs,setTimeMs]=useState(initialTime),[playing,setPlaying]=useState(false),[speed,setSpeed]=useState(.25);
  const [yaw,setYaw]=useState(0),[showCurrents,setShowCurrents]=useState(true),[showVectors,setShowVectors]=useState(true);
  const [showApproximation,setShowApproximation]=useState(false),[gain,setGain]=useState(1),[display,setDisplay]=useState<"twelve"|"focus">("twelve");
  const [windowMode,setWindowMode]=useState<"beat"|"all">("beat"),[comparison,setComparison]=useState<Comparison|null>(null);
  const clock=useRef(initialTime),guide=useRef<HTMLDialogElement>(null),settingsButton=useRef<HTMLButtonElement>(null);
  const traces=useMemo(()=>measureStandardTraces(recording,electrodes),[recording,electrodes]);
  const timeline=useMemo<EcgTraceTimeline>(()=>{
    const times=(chambers:string[],values:Float32Array)=>recording.mesh.cells.flatMap((cell,i)=>chambers.includes(cell.chamber)&&values[i]>=0?[values[i]]:[]);
    const atrial=times(["RA","LA"],recording.activationMs),ventricular=times(["RV","LV"],recording.activationMs),recovery=times(["RV","LV"],recording.recoveryMs);
    return {durationMs:recording.durationMs,sampleMs:recording.sampleMs,samples:recording.samples,periodMs:60000/recording.inputs.rate,phases:[{label:"P",start:Math.min(...atrial)-5,end:Math.max(...atrial)+8,color:"#dbeafe"},{label:"QRS",start:Math.min(...ventricular)-5,end:Math.max(...ventricular)+12,color:"#d1fae5"},{label:"T",start:Math.min(...recovery)-30,end:Math.max(...recovery)+30,color:"#ede9fe"}].filter(p=>Number.isFinite(p.start)&&Number.isFinite(p.end))};
  },[recording]);
  // Readers expose only the needed arrays without expanding them in React's dev profiler.
  const signalReaders=useMemo(()=>Object.fromEntries(STANDARD_LEADS.map(id=>[id,()=>({trace:traces[id],baseline:comparison?.values[id]})])) as Record<StandardLead,()=>EcgTraceSignal>,[traces,comparison]);
  const placement=leadPreset(lead,electrodes),trace=traces[lead],frame=recordingFrame(recording,timeMs);
  const snapshot=partSnapshot(recording,part,frame),definition=HEART_PARTS.find(item=>item.id===part)!;
  const field=leadFieldAtCenter(placement),p=recording.dipole.subarray(frame*3,frame*3+3),length=Math.hypot(...p)*Math.hypot(...field);
  const angle=length>1e-8?Math.acos(Math.max(-1,Math.min(1,dot3([p[0],p[1],p[2]],field)/length)))*180/Math.PI:null;
  const position=electrodePosition(electrodes[selected]);
  const windowMs=windowMode==="beat"?60000/recording.inputs.rate:recording.durationMs;
  const displaced=ELECTRODE_IDS.some(id=>Math.abs(electrodes[id].latitude-DEFAULT_ELECTRODES[id].latitude)>.01||Math.abs(electrodes[id].longitude-DEFAULT_ELECTRODES[id].longitude)>.01);
  useEffect(()=>{
    if(!playing)return;
    let animation=0,previous=0,lastDraw=0;
    const step=(now:number)=>{
      if(previous&&!document.hidden)clock.current=(clock.current+Math.min(now-previous,100)*speed)%recording.durationMs;
      previous=now;if(now-lastDraw>=33){setTimeMs(clock.current);lastDraw=now;}
      animation=requestAnimationFrame(step);
    };
    animation=requestAnimationFrame(step);return()=>cancelAnimationFrame(animation);
  },[playing,speed,recording.durationMs]);
  useEffect(()=>{
    if(!panel)return;
    const close=(event:globalThis.KeyboardEvent)=>{if(event.key==="Escape"){setPanel(null);settingsButton.current?.focus();}};
    document.addEventListener("keydown",close);return()=>document.removeEventListener("keydown",close);
  },[panel]);
  const seek=(time:number)=>{setPlaying(false);clock.current=time;setTimeMs(time);};
  const selectElectrode=(value:ElectrodeId)=>{setSelected(value);if(value.startsWith("V"))setLead(value as StandardLead);};
  const chooseLead=(value:StandardLead)=>{setLead(value);setSelected(positiveElectrode(value));};
  const move=(id:ElectrodeId,electrode:Electrode)=>setElectrodes(value=>({...value,[id]:electrode}));
  const selectPart=(value:HeartPart)=>{setPart(value);setPanel("structure");};
  const jump=(value:HeartPart)=>{setPart(value);const onset=partSnapshot(recording,value,frame).onset;if(onset!==null)seek(Math.round(onset/recording.sampleMs)*recording.sampleMs);};
  const save=()=>setComparison({inputs:{...inputs},electrodes:structuredClone(electrodes),lead,values:Object.fromEntries(STANDARD_LEADS.map(id=>[id,traces[id].values.slice()])) as Record<StandardLead,Float32Array>,label:`${FORWARD_CONDITIONS.find(item=>item.id===inputs.condition)?.label} · ${inputs.rate}/min · 12유도`});

  return <div className="ecg-workspace">
    <div className="ecg-workspace-main" inert={busy}>
      <section className="ecg-scene-card" aria-label="심장과 전극">
        <div className="ecg-scene-toolbar">
          <label>전극<select aria-label="이동할 전극" value={selected} onChange={event=>selectElectrode(event.target.value as ElectrodeId)}>{ELECTRODE_IDS.map(id=><option key={id} value={id}>{id}</option>)}</select></label>
          <label>보기<select aria-label="흉곽 보기" value={yaw} onChange={event=>setYaw(Number(event.target.value))}><option value={0}>Anterior</option><option value={45}>Oblique</option><option value={90}>Lateral</option><option value={180}>Posterior</option></select></label>
          <label><input type="checkbox" checked={showCurrents} onChange={event=>setShowCurrents(event.target.checked)}/>전류</label>
          <button ref={settingsButton} type="button" className="ecg-icon-button" aria-label="구조·전극·모델 설정" aria-expanded={panel!==null} aria-controls="ecg-settings-panel" onClick={()=>setPanel(value=>value?null:"electrodes")}><SlidersHorizontal size={17}/><span>설정</span></button>
          <button type="button" className="ecg-icon-button" aria-label="도해와 계산 설명" onClick={()=>guide.current?.showModal()}><Info size={17}/></button>
        </div>
        <EcgForwardScene readRecording={readRecording} electrodes={electrodes} placement={placement} lead={lead} timeMs={timeMs} yaw={yaw} selected={selected} showCurrents={showCurrents} showVectors={showVectors} part={part} onPart={selectPart} onMove={move} onSelect={selectElectrode}/>
        <div className="ecg-forward-playback">
          <button className="simulation-primary" type="button" aria-label={playing?"전기활동 일시정지":"전기활동 재생"} onClick={()=>setPlaying(value=>!value)}>{playing?<Pause size={15}/>:<Play size={15}/>}<span>{playing?"정지":"재생"}</span></button>
          <button className="simulation-button" type="button" onClick={()=>seek(0)} aria-label="계산 기록 처음으로"><RotateCcw size={15}/></button>
          <select aria-label="전기활동 재생 속도" value={speed} onChange={event=>setSpeed(Number(event.target.value))}>{[.1,.25,.5,1].map(value=><option key={value} value={value}>{value}×</option>)}</select>
          <input aria-label="관찰 시각" type="range" min={0} max={recording.durationMs} step={recording.sampleMs} value={timeMs} onChange={event=>seek(Number(event.target.value))}/><output>{Math.round(timeMs)} <small>ms</small></output>
        </div>
      </section>

      <section className="ecg-signal-card" aria-label="12유도 ECG">
        <header className="ecg-signal-header"><h2>{display==="twelve"?"12유도 ECG":`Lead ${lead}`} <small>{displaced?"전극 위치 변경됨":"기준 전극 위치"}</small></h2><button type="button" className="ecg-icon-button" onClick={save} title="12유도 현재 조건과 파형 저장"><Save size={15}/><span>비교 저장</span></button><button type="button" className="ecg-icon-button" aria-label={display==="twelve"?"선택 유도 확대":"12유도 전체 보기"} onClick={()=>setDisplay(value=>value==="twelve"?"focus":"twelve")}>{display==="twelve"?<Maximize2 size={16}/>:<Grid2X2 size={16}/>}<span>{display==="twelve"?"확대":"12유도"}</span></button></header>
        <div className="ecg-signal-toolbar">
          <label>선택<select aria-label="관찰할 ECG 유도" value={lead} onChange={event=>chooseLead(event.target.value as StandardLead)}>{STANDARD_LEADS.map(id=><option key={id} value={id}>{id}</option>)}</select></label>
          <label>감도<select aria-label="ECG 화면 감도" value={gain} onChange={event=>setGain(Number(event.target.value))}>{[.25,.5,1,2].map(value=><option key={value} value={value}>{value}×</option>)}</select></label>
          <label>시간축<select aria-label="ECG 시간 범위" value={windowMode} onChange={event=>setWindowMode(event.target.value as "beat"|"all")}><option value="beat">1박동</option><option value="all">전체 2.4 s</option></select></label><span className="ecg-shared-scale">모든 유도 같은 배율</span>
        </div>
        {display==="twelve"?<div className="ecg-twelve-grid">{LEAD_ORDER.map(id=><section key={id} className="ecg-lead-tile" data-selected={lead===id} data-lead={id} aria-label={`Lead ${id}`}>
          <button type="button" className="ecg-lead-label" aria-pressed={lead===id} aria-label={`Lead ${id} 선택`} onClick={()=>chooseLead(id)}><b>{id}</b><span>{traces[id].values[frame].toFixed(2)}</span></button>
          <EcgForwardTrace timeline={timeline} readSignal={signalReaders[id]} timeMs={timeMs} gain={gain} windowMs={windowMs} compact showApproximation={showApproximation} onSeek={seek}/>
        </section>)}</div>:<EcgForwardTrace timeline={timeline} readSignal={signalReaders[lead]} timeMs={timeMs} gain={gain} windowMs={windowMs} annotate showApproximation={showApproximation} onSeek={seek}/>}
        <div className="ecg-signal-values"><span><b>{lead}</b> Δφ <b>{trace.values[frame].toFixed(3)}</b></span><span>φ(+) <b>{trace.positive[frame].toFixed(3)}</b></span><span>φ(ref) <b>{trace.reference[frame].toFixed(3)}</b></span><span>벡터 <b>{angle===null?"—":angle.toFixed(0)+"°"}</b></span><small>a.u. · mV 아님</small></div>
      </section>
    </div>

    <aside id="ecg-settings-panel" className="ecg-inspector" aria-label="심장 모델 조작과 설명" hidden={panel===null}>
      <div className="ecg-inspector-tabs" role="group" aria-label="조작 패널 선택">{([['structure','부위'],['electrodes','전극'],['model','모델']] as const).map(([value,label])=><button type="button" key={value} aria-pressed={panel===value} onClick={()=>setPanel(value)}>{label}</button>)}<button type="button" aria-label="설정 닫기" onClick={()=>{setPanel(null);settingsButton.current?.focus();}}><X size={17}/></button></div>
      <div className="ecg-inspector-content">
        {panel==="structure"?<>
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
          <p className="ecg-control-hint">0°: 앞 · ±180°: 뒤<br/>모델 좌표(cm): {position.map(value=>value.toFixed(1)).join(" / ")}</p>
          <p className="ecg-control-hint">I–III는 두 Limb electrode 사이의 전위차, aVR·aVL·aVF는 다른 두 전극 평균이 기준입니다. V1–V6는 RA·LA·LL 평균인 Wilson central terminal을 사용합니다.</p>
          <button className="ecg-onset-button" type="button" onClick={()=>setElectrodes(value=>({...value,RA:value.LA,LA:value.RA}))}>RA ↔ LA 위치 교환</button>
          <button className="ecg-onset-button" type="button" onClick={()=>setElectrodes(structuredClone(DEFAULT_ELECTRODES))}>모든 전극 위치 초기화</button>
        </>:panel==="model"?<>
          <label className="ecg-range-label"><span>{inputs.condition==="rv-pacing"?"RV 자극":"SA 자극"} 빈도 <b>{inputs.rate}/min</b></span><input aria-label="심장 자극 빈도" type="range" min={50} max={110} step={1} value={inputs.rate} onChange={event=>onInputs({...inputs,rate:Number(event.target.value)})}/></label>
          <label className="ecg-range-label"><span>Ventricular 회복 <b>{inputs.recovery}%</b></span><input aria-label="Ventricular 회복 시상수" type="range" min={70} max={135} step={5} value={inputs.recovery} onChange={event=>onInputs({...inputs,recovery:Number(event.target.value)})}/></label>
          <p className="ecg-control-hint">{FORWARD_CONDITIONS.find(item=>item.id===inputs.condition)?.explanation}</p>
          <label className="ecg-check"><input type="checkbox" checked={showVectors} onChange={event=>setShowVectors(event.target.checked)}/>Dipole · Lead field 방향 표시</label>
          <label className="ecg-check"><input type="checkbox" checked={showApproximation} onChange={event=>setShowApproximation(event.target.checked)}/>단일 dipole 내적 근사 겹치기</label>
          <section className="ecg-comparison"><h3>12유도 파형 비교</h3>{comparison?<><p>{comparison.label}</p><div><button type="button" onClick={()=>{setElectrodes(structuredClone(comparison.electrodes));chooseLead(comparison.lead);onInputs({...comparison.inputs});}}>조건 복원</button><button type="button" onClick={()=>setComparison(null)}>비교 해제</button></div><p>회색 점선 · 같은 배율 · 현재 화면에서만 보관</p></>:<p>ECG 위 ‘비교 저장’으로 12유도를 저장한 뒤 조건을 바꿔 보세요.</p>}</section>
          <p className="ecg-control-hint">{recording.mesh.cells.length}개 계산 구역 · {recording.mesh.edges.length}개 연결<br/>활성된 Ventricular 구역 {(recording.activation.ventricularCoverage*100).toFixed(0)}%</p>
        </>:null}
      </div>
      <footer className="ecg-inspector-footer"><button type="button" onClick={()=>guide.current?.showModal()}>표시 원리 · 모델 한계</button><Link href="/interactive/ecg-arrhythmia/notes#forward-model">이론 노트 ↗</Link></footer>
    </aside>

    <dialog ref={guide} className="ecg-guide-dialog" aria-labelledby="ecg-guide-title"><header><h2 id="ecg-guide-title">심장 전도와 12유도 읽기</h2><button type="button" aria-label="설명 닫기" onClick={()=>guide.current?.close()}><X size={20}/></button></header><div>
      <section><h3>같은 심장, 12개 관찰 방향</h3><p>I = LA−RA, II = LL−RA, III = LL−LA입니다. aVR·aVL·aVF는 각각 RA·LA·LL에서 나머지 두 전극의 평균을 뺍니다. V1–V6는 각 가슴 전극에서 RA·LA·LL 평균을 뺍니다. Limb electrode를 옮기면 이 전극을 기준으로 사용하는 다른 유도도 함께 바뀝니다. RL 접지의 접촉·장비 회로는 계산하지 않습니다.</p><p>12유도 전체는 같은 시간축·감도를 사용합니다. 유도를 선택하고 ‘확대’를 누르면 한 파형을 크게 볼 수 있습니다. 확대 화면의 P·QRS·T 배경은 계산된 Atrial activation, Ventricular activation·recovery 시점에 대응하는 구간이며 임상 자동 판독 결과는 아닙니다.</p></section>
      <section><h3>전도·회복과 파형</h3><p>각 Myocardial 구역에서 막전위와 회복을 적분합니다. Purkinje 연결이 Endocardial 구역을 자극하고, 여러 층을 거쳐 Epicardial 구역으로 흥분이 퍼집니다. Epicardial 쪽의 짧은 Action potential duration과 부위별 회복 차이가 T wave의 방향과 폭에 기여합니다. ECG 파형을 미리 지정한 P·QRS·T 함수로 그리지 않습니다.</p><p>갈색 선은 실제 전도 연결이며 붉은 점선·×는 차단입니다. 초록 화살표는 g × (Vmₐ−Vmᵦ)로 구한 구역 사이 전류입니다. 가까이 겹치는 연결 중 큰 실제 전류를 골라 최대 40개를 표시합니다. 혈류나 흉곽 전류의 유선은 아닙니다.</p></section>
      <section><h3>그림의 크기와 전극 좌표</h3><p>심장은 구조를 읽기 위해 확대해 그린 전면 개념 절개도입니다. LA도 펼쳐 보여 줍니다. 전극은 별도의 3D 흉곽 타원체 표면 좌표에서 계산하며, 심장 그림의 확대가 계산 거리를 바꾸지 않습니다. 가슴 전극 위치는 축약 좌표이며 실제 늑간 부착 도해가 아닙니다. 점선 전극은 현재 보기의 반대쪽 표면에 있습니다.</p><p>주황은 흥분, 보라는 회복, 옅은 벽색은 낮은 Vm입니다. 보라 화살표는 합성 dipole, 초록 점선 화살표는 선택 유도의 Lead field이며 길이는 방향 표시용입니다. 전압은 고정 배율의 a.u.이고 임상 mV로 보정하지 않았습니다. 기본 양상을 개선한 교육 모델이며 환자별 해부학·질환 진단을 재현하는 모델은 아닙니다.</p></section>
      <p className="ecg-guide-sources">근거: <a href="https://www.bem.fi/book/06/06.htm" target="_blank" rel="noreferrer">Bioelectromagnetism · 활성과 전류</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/27034121/" target="_blank" rel="noreferrer">APD gradient와 T wave 연구</a></p>
    </div></dialog>
  </div>;
}
