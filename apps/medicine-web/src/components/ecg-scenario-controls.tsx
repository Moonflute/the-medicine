"use client";

import { MYOCARDIAL_LABELS, MYOCARDIAL_REGIONS, type ForwardInputs, type MyocardialRegion } from "@/lib/ecg-forward-model";

type Props = { inputs: ForwardInputs; onChange: (value: ForwardInputs) => void };

export function EcgScenarioControls({ inputs, onChange }: Props) {
  const ep=inputs.electrophysiology??{};
  const update=(patch:NonNullable<ForwardInputs["electrophysiology"]>)=>onChange({...inputs,electrophysiology:{...ep,...patch}});
  if(inputs.condition==="av-slow")return <label className="ecg-range-label"><span>AV nodal coupling <b>{Math.round((ep.avCoupling??.52)*100)}%</b></span><input aria-label="AV node 결합도" type="range" min={.3} max={1.2} step={.02} value={ep.avCoupling??.52} onChange={event=>update({avCoupling:Number(event.target.value)})}/></label>;
  if(inputs.condition==="rbb-block"||inputs.condition==="lbb-block")return <label className="ecg-range-label"><span>{inputs.condition==="rbb-block"?"RBB":"LBB"} 남은 결합도 <b>{Math.round((ep.branchCoupling??0)*100)}%</b></span><input aria-label="Bundle branch 남은 결합도" type="range" min={0} max={1} step={.05} value={ep.branchCoupling??0} onChange={event=>update({branchCoupling:Number(event.target.value)})}/></label>;
  if(inputs.condition==="wpw")return <label className="ecg-field">Accessory pathway 위치<select aria-label="Accessory pathway 위치" value={ep.accessoryRegion??"lv-lateral"} onChange={event=>update({accessoryRegion:event.target.value as "lv-lateral"|"lv-septal"|"rv-basal"})}><option value="lv-lateral">Left lateral</option><option value="lv-septal">Septal</option><option value="rv-basal">Right free wall</option></select></label>;
  if(inputs.condition==="pvc")return <>
    <label className="ecg-field">조기 자극 위치<select aria-label="PVC 발생 위치" value={ep.ectopicRegion??"lv-septal"} onChange={event=>update({ectopicRegion:event.target.value as MyocardialRegion})}>{MYOCARDIAL_REGIONS.map(id=><option key={id} value={id}>{MYOCARDIAL_LABELS[id]}</option>)}</select></label>
    <label className="ecg-range-label"><span>Sinus 자극 후 조기 자극 <b>{ep.couplingMs??650} ms</b></span><input aria-label="PVC 조기 자극 간격" type="range" min={250} max={750} step={10} value={ep.couplingMs??650} onChange={event=>update({couplingMs:Number(event.target.value)})}/></label>
    <p className="ecg-control-hint">8초 기록에서 한 번 자극합니다. 너무 이르면 조직의 불응기로 전파되지 않을 수 있습니다.</p>
  </>;
  if(inputs.condition==="hyperkalemia")return <><label className="ecg-range-label"><span>Extracellular K⁺ <b>{(ep.potassium??7).toFixed(1)} mmol/L</b></span><input aria-label="Extracellular potassium" type="range" min={4} max={10} step={.5} value={ep.potassium??7} onChange={event=>update({potassium:Number(event.target.value)})}/></label><p className="ecg-control-hint">Luo–Rudy I 실험 · 점선은 모델 기준 K⁺ 5.4입니다. 환자의 혈청 K⁺–ECG 예측식은 아닙니다.</p></>;
  if(inputs.condition==="long-qt"||inputs.condition==="short-qt")return <label className="ecg-range-label"><span>Delayed rectifier K⁺ conductance <b>{Math.round((ep.potassiumScale??(inputs.condition==="long-qt"?.45:2))*100)}%</b></span><input aria-label="Repolarizing potassium conductance" type="range" min={.3} max={2.5} step={.05} value={ep.potassiumScale??(inputs.condition==="long-qt"?.45:2)} onChange={event=>update({potassiumScale:Number(event.target.value)})}/></label>;
  return null;
}
