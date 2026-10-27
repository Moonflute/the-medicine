"use client";

import {useMemo,useState} from "react";
import {DEFAULT_ISCHEMIA,MYOCARDIAL_LABELS,MYOCARDIAL_REGIONS,type ForwardInputs,type ForwardRecording,type IschemiaInputs} from "@/lib/ecg-forward-model";
import {regionVoltage,type StMeasurement,type StWindow} from "@/lib/ecg-ischemia";

type Props={inputs:ForwardInputs;onInputs:(value:ForwardInputs)=>void;readRecording:()=>ForwardRecording;readReference?:()=>ForwardRecording;measurement:StMeasurement;window:StWindow;lead:string;onSt:()=>void;showReference:boolean;onReference:(value:boolean)=>void;tpZero:boolean;onTpZero:(value:boolean)=>void};
export function EcgIschemiaPanel({inputs,onInputs,readRecording,readReference,measurement,window,lead,onSt,showReference,onReference,tpZero,onTpZero}:Props) {
  const [draft,setDraft]=useState<IschemiaInputs>(()=>structuredClone(inputs.ischemia??DEFAULT_ISCHEMIA));
  const recording=readRecording(),reference=readReference?.(),region=recording.inputs.ischemia?.regions[0]??draft.regions[0]??"lv-anterior";
  const probes=useMemo(()=>["endo","epi"].map(layer=>({layer,values:regionVoltage(recording,region,layer as "endo"|"epi"),normal:reference?regionVoltage(reference,region,layer as "endo"|"epi"):undefined})),[recording,reference,region]);
  const path=(values:Float32Array)=>Array.from(values.subarray(0,Math.floor((60000/recording.inputs.rate)/recording.sampleMs)+1),(value,index)=>`${index?"L":"M"}${(24+index*recording.sampleMs/(60000/recording.inputs.rate)*222).toFixed(1)} ${(83-value*58).toFixed(1)}`).join(" ");
  const pending=JSON.stringify(draft)!==JSON.stringify(inputs.ischemia);
  const change=<K extends keyof IschemiaInputs>(key:K,value:IschemiaInputs[K])=>setDraft(previous=>({...previous,[key]:value}));
  return <>
    <section className="ecg-injury-intro"><h3>Ischemia / Infarction 실험</h3><p>조직 특성 → Vm 차이 → Injury current → 전극 전위. ST에 값을 더하지 않습니다.</p></section>
    <fieldset className="ecg-injury-regions"><legend>손상 구역 · 여러 곳 선택 가능</legend><div>{MYOCARDIAL_REGIONS.map(id=><button type="button" key={id} aria-pressed={draft.regions.includes(id)} onClick={()=>change("regions",MYOCARDIAL_REGIONS.filter(region=>region===id?!draft.regions.includes(id):draft.regions.includes(region)))}>{MYOCARDIAL_LABELS[id]}</button>)}</div></fieldset>
    <label className="ecg-field">조직 상태<select aria-label="손상 조직 상태" value={draft.mode} onChange={event=>change("mode",event.target.value as IschemiaInputs["mode"])}><option value="acute">Acute ischemia · 살아 있는 허혈 조직</option><option value="scar">Scar · 비흥분성 조직</option></select></label>
    <label className="ecg-range-label"><span>Endocardium부터 침범 깊이 <b>{draft.depth}%</b></span><input aria-label="손상 깊이" type="range" min={0} max={100} step={10} value={draft.depth} onChange={event=>change("depth",Number(event.target.value))}/></label>
    <p className="ecg-control-hint">{draft.depth===100?"벽 전체 · Transmural":draft.depth===0?"손상 없음":`안쪽 ${draft.depth}% · Subendocardial`}. 구역은 축약된 심근 위치이며 Coronary territory와 일대일 대응하지 않습니다.</p>
    {draft.mode==="acute"?<label className="ecg-range-label"><span>허혈 스트레스 <b>{draft.severity}%</b></span><input aria-label="허혈 스트레스" type="range" min={0} max={100} step={10} value={draft.severity} onChange={event=>change("severity",Number(event.target.value))}/></label>:null}
    <p className="ecg-control-hint">{draft.mode==="acute"?"Resting potential ↑ · Inward current 가용성 ↓ · Outward current ↑ · Coupling ↓. Plateau와 APD는 이 전류 균형에서 계산됩니다. %는 K⁺ 농도·괴사율·발병 시간이 아닙니다.":"선택 조직의 흥분성과 세포 간 결합을 제거합니다. Acute injury와 다른 조건이며 ST elevation을 강제하지 않습니다. Scar의 Fibrosis 구조·재진입까지 재현하지는 않습니다."}</p>
    <div className="ecg-injury-actions"><button type="button" className="simulation-primary" disabled={!draft.regions.length||!pending} onClick={()=>onInputs({...inputs,ischemia:structuredClone(draft)})}>조직 적용 · 계산</button><button type="button" className="simulation-button" disabled={!inputs.ischemia} onClick={()=>onInputs({...inputs,ischemia:undefined})}>손상 제거</button></div>
    {pending?<p className="ecg-control-hint" role="status">미적용 설정 · ‘조직 적용 · 계산’을 누르세요.</p>:null}
    <section className="ecg-injury-result"><h3>적용된 계산 결과 · {lead}</h3><dl><div><dt>TP 원 전위</dt><dd>{measurement.tp.toFixed(4)}</dd></div><div><dt>ST 원 전위</dt><dd>{measurement.valid?measurement.st.toFixed(4):"—"}</dd></div><div><dt>ST − TP</dt><dd>{measurement.valid?`${measurement.shift>=0?"+":""}${measurement.shift.toFixed(4)}`:"해석 보류"}</dd></div></dl>
      <p>{measurement.warning??`첫 박동: TP ${window.tpStart}–${window.tpEnd} ms, ST ${Math.round(window.start)}–${Math.round(window.end)} ms 평균. 단위 a.u., 임상 mV·진단 기준이 아닙니다.`}</p>
      <p>조직 Upstroke 종료 {Math.round(window.depolarizationEnd)} ms · 회복 시작 {window.recoveryStart===null?"확인 불가":`${Math.round(window.recoveryStart)} ms`}. {window.plateauGap===null?"":`사이 구간 ${Math.round(window.plateauGap)} ms.`} 임상 J-point 자동 판독이 아닌 계산 Vm 기준입니다.</p>
      <button type="button" className="ecg-onset-button" disabled={!measurement.valid} onClick={onSt}>ST 측정 구간 보기 →</button>
      <label className="ecg-check"><input type="checkbox" checked={showReference} onChange={event=>onReference(event.target.checked)}/>무손상 비교 · 같은 빈도·전도·전극</label>
      <label className="ecg-check"><input type="checkbox" checked={tpZero} onChange={event=>onTpZero(event.target.checked)}/>TP = 0 표시 · 전체 기록에서 상수만 차감</label>
    </section>
    <section className="ecg-tissue-probes"><h3>{MYOCARDIAL_LABELS[region]} · 실제 계산 Vm</h3><p>첫 박동 전체 · 실선: 현재 조직 / 점선: 같은 부위의 무손상 조직</p>{probes.map(probe=><svg key={probe.layer} viewBox="0 0 260 106" role="img" aria-label={`${MYOCARDIAL_LABELS[region]} ${probe.layer} 막전위 비교`}><text x="24" y="13">{probe.layer==="endo"?"Endocardial":"Epicardial"} · normalized Vm</text>{[0,.5,1].map(value=><g key={value}><line x1="24" x2="246" y1={83-value*58} y2={83-value*58} stroke="#dce7e3"/><text x="19" y={87-value*58} textAnchor="end">{value}</text></g>)}{probe.normal?<path d={path(probe.normal)} fill="none" stroke="#839291" strokeDasharray="3 3"/>:null}<path d={path(probe.values)} fill="none" stroke="#a23e52" strokeWidth="1.7"/><text x="24" y="101">0</text><text x="246" y="101" textAnchor="end">{Math.round(60000/recording.inputs.rate)} ms</text></svg>)}</section>
    <p className="ecg-control-hint">강한 손상에서는 흥분 실패·전도 지연·회복 중첩이 생길 수 있습니다. 이때 ST 자동 수치는 보류하고 원 파형을 그대로 표시합니다. 실제 환자 ECG를 예측하거나 Infarction을 진단하는 모델은 아닙니다.</p>
  </>;
}
