"use client";

import {DEFAULT_ISCHEMIA,MYOCARDIAL_LABELS,MYOCARDIAL_REGIONS,type ForwardInputs,type MyocardialRegion} from "@/lib/ecg-forward-model";

type Props={inputs:ForwardInputs;onInputs:(value:ForwardInputs)=>void;regions:readonly MyocardialRegion[];onRegions:(regions:MyocardialRegion[])=>void};

export function EcgIschemiaPanel({inputs,onInputs,regions,onRegions}:Props) {
  const pending=MYOCARDIAL_REGIONS.some(id=>regions.includes(id)!==(inputs.ischemia?.regions.includes(id)??false));
  const toggle=(id:MyocardialRegion)=>onRegions(MYOCARDIAL_REGIONS.filter(region=>region===id?!regions.includes(id):regions.includes(region)));
  return <div className="ecg-injury-picker">
    <section className="ecg-injury-intro"><h3>허혈 위치</h3><p>위치를 체크하면 옆 심장 모델의 같은 번호가 강조됩니다. 여러 곳을 함께 선택할 수 있습니다.</p></section>
    {([['lv-','Left ventricle · LV'],['rv-','Right ventricle · RV']] as const).map(([prefix,title])=><fieldset className="ecg-injury-regions" key={prefix}><legend>{title}</legend><div>{MYOCARDIAL_REGIONS.filter(id=>id.startsWith(prefix)).map(id=><label className="ecg-injury-region-option" key={id} data-selected={regions.includes(id)}>
      <input type="checkbox" checked={regions.includes(id)} onChange={()=>toggle(id)} aria-label={MYOCARDIAL_LABELS[id]+" 허혈 위치"}/>
      <span className="ecg-region-number" aria-hidden="true">{MYOCARDIAL_REGIONS.indexOf(id)+1}</span><span>{MYOCARDIAL_LABELS[id]}</span>
    </label>)}</div></fieldset>)}
    <div className="ecg-injury-selection-status" role="status">{regions.length?regions.length+"개 부위 선택 · "+(pending?"적용 전":"적용됨"):"허혈 위치를 선택하세요."}</div>
    <div className="ecg-injury-actions">
      <button type="button" className="simulation-primary" disabled={!regions.length||!pending} onClick={()=>onInputs({...inputs,membrane:"human-ischemia",ischemia:{...(inputs.ischemia??DEFAULT_ISCHEMIA),regions:[...regions]}})}>허혈 적용</button>
      <button type="button" className="simulation-button" disabled={!inputs.ischemia&&!regions.length} onClick={()=>{if(inputs.ischemia)onInputs({...inputs,ischemia:undefined});else onRegions([]);}}>허혈 해제</button>
    </div>
  </div>;
}
