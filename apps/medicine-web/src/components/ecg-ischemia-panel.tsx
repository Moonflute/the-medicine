"use client";

import {DEFAULT_ISCHEMIA,MYOCARDIAL_LABELS,MYOCARDIAL_REGIONS,applyIschemiaDraft,isIschemiaDraftPending,type ForwardInputs,type MyocardialRegion} from "@/lib/ecg-forward-model";
import {Info} from "lucide-react";

type Props={inputs:ForwardInputs;onInputs:(value:ForwardInputs)=>void;regions:readonly MyocardialRegion[];onRegions:(regions:MyocardialRegion[])=>void;severity:number;onSeverity:(severity:number)=>void};

export function EcgIschemiaPanel({inputs,onInputs,regions,onRegions,severity,onSeverity}:Props) {
  const pending=isIschemiaDraftPending(inputs.ischemia,regions,severity);
  const toggle=(id:MyocardialRegion)=>onRegions(MYOCARDIAL_REGIONS.filter(region=>region===id?!regions.includes(id):regions.includes(region)));
  return <div className="ecg-injury-picker">
    <section className="ecg-injury-intro"><p>위치를 선택하면 옆 심장 모델에 표시됩니다. 여러 곳을 함께 선택할 수 있습니다.</p></section>
    {([['lv-','Left ventricle · LV'],['rv-','Right ventricle · RV']] as const).map(([prefix,title])=><fieldset className="ecg-injury-regions" key={prefix}><legend>{title}</legend><div>{MYOCARDIAL_REGIONS.filter(id=>id.startsWith(prefix)).map(id=><label className="ecg-injury-region-option" key={id} data-selected={regions.includes(id)}>
      <input type="checkbox" checked={regions.includes(id)} onChange={()=>toggle(id)} aria-label={MYOCARDIAL_LABELS[id]+" 허혈 위치"}/>
      <span className="ecg-region-number" aria-hidden="true">{MYOCARDIAL_REGIONS.indexOf(id)+1}</span><span>{MYOCARDIAL_LABELS[id]}</span>
    </label>)}</div></fieldset>)}
    <section className="ecg-injury-severity">
      <div className="ecg-injury-severity-heading"><label htmlFor="ecg-injury-severity">허혈 강도</label><span aria-hidden="true"><b>{severity}</b> / 100</span><details className="ecg-injury-help"><summary aria-label="허혈 강도 도움말"><Info size={16}/></summary><p id="ecg-injury-severity-help">선택한 부위에 공통으로 적용하는 모델 입력값이며 실제 혈류 감소율이 아닙니다. 국소 K⁺·ATP·pH와 Coupling을 바꾸며 ST 높이를 직접 조절하지 않습니다.</p></details></div>
      <input id="ecg-injury-severity" aria-label="허혈 강도" aria-describedby="ecg-injury-severity-help" aria-valuetext={severity===0?"0 / 100 · 무손상":`${severity} / 100`} type="range" min={0} max={100} step={1} value={severity} onChange={event=>onSeverity(Number(event.target.value))}/>
      <div className="ecg-injury-severity-scale" aria-hidden="true"><span>0 · 무손상</span><span>100 · 강함</span></div>
    </section>
    <div className="ecg-injury-selection-status" role="status">{regions.length?regions.length+"개 부위 선택 · "+(pending?"적용 전":"적용됨"):"허혈 위치를 선택하세요."}</div>
    <div className="ecg-injury-actions">
      <button type="button" className="simulation-primary" disabled={!regions.length||!pending} onClick={()=>onInputs(applyIschemiaDraft(inputs,regions,severity))}>허혈 적용</button>
      <button type="button" className="simulation-button" disabled={!inputs.ischemia&&!regions.length} onClick={()=>{if(inputs.ischemia)onInputs({...inputs,ischemia:undefined});else{onRegions([]);onSeverity(DEFAULT_ISCHEMIA.severity);}}}>허혈 해제</button>
    </div>
  </div>;
}
