"use client";
import { LabWorkspace, LabControlTabs, FittedDiagram, LabPlayback } from "@/components/clinical-lab-workspace";
import { useMemo, useState } from "react";
import { useAnimatedModel } from "@/hooks/use-animated-model";
import { PhysiologyControl, PhysiologyMetric } from "@/components/physiology-ui";
import { GuidedExperiments, MetricComparison, useSimulationClock } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { OxygenationP5Canvas } from "@/components/oxygenation-p5-canvas";
import { calculateOxygenationState, type OxygenationInputs } from "@/lib/oxygenation-model";
import { updateSimulationClock } from "@/lib/simulation-clock";
const NORMAL:Required<OxygenationInputs>={fio2:.21,respiratoryRate:14,vqMismatch:0,shuntFraction:.02,hemoglobin:14,pH:7.4,cardiacOutput:5,age:40};
const PRESETS=[
  {id:"normal",label:"정상",values:NORMAL},
  {id:"hypoventilation",label:"Hypoventilation",values:{...NORMAL,respiratoryRate:7,pH:7.28}},
  {id:"vq-mismatch",label:"V/Q mismatch",values:{...NORMAL,respiratoryRate:20,vqMismatch:65,shuntFraction:.04,pH:7.44}},
  {id:"shunt",label:"Shunt",values:{...NORMAL,fio2:.6,respiratoryRate:20,vqMismatch:20,shuntFraction:.35}},
  {id:"anemia",label:"Anemia",values:{...NORMAL,hemoglobin:7}},
];
export function OxygenationGasExchangeLab(){
  const {inputs,update:change,animateTo,transitioning}=useAnimatedModel(NORMAL);
  const [preset,setPreset]=useState("normal");
  const state=useMemo(()=>calculateOxygenationState(inputs),[inputs]),normal=calculateOxygenationState(NORMAL);
  const experiments=useLearningExperiments(),clock=useSimulationClock();
  const apply=(id:string)=>{const p=PRESETS.find(p=>p.id===id);if(!p)return;setPreset(id);animateTo(p.values);updateSimulationClock(clock,{seconds:0});};
  const update=(key:keyof OxygenationInputs,value:number)=>{setPreset("custom");change(key,value);};
  const condition=`FiO₂ ${(inputs.fio2*100).toFixed(0)}% · RR ${inputs.respiratoryRate.toFixed(0)} · V/Q ${inputs.vqMismatch.toFixed(0)} · Shunt ${(inputs.shuntFraction*100).toFixed(0)}% · Hb ${inputs.hemoglobin.toFixed(1)} · pH ${inputs.pH.toFixed(2)} · CO ${inputs.cardiacOutput.toFixed(1)} · ${inputs.age.toFixed(0)}세`;
  return <LabWorkspace title="산소화 · 가스교환" presets={PRESETS} selected={preset} onPreset={apply} onReset={()=>apply("normal")}
    controls={<><LabControlTabs tabs={[{id:"lung",label:"폐 · 환기",content:<>
        <PhysiologyControl label="FiO₂" value={inputs.fio2} min={.21} max={1} step={.01} displayValue={(inputs.fio2*100).toFixed(0)+"%"} hint="직접 입력은 0.21–1.00의 분율입니다." onChange={v=>update("fio2",v)}/>
        <PhysiologyControl label="Respiratory rate" value={inputs.respiratoryRate} min={6} max={30} step={1} displayValue={inputs.respiratoryRate.toFixed(0)+"/min"} hint="Tidal volume·Dead space가 고정된 모델의 환기 대리변수입니다." onChange={v=>update("respiratoryRate",v)}/>
        <PhysiologyControl label="V/Q 불균형 지수" value={inputs.vqMismatch} min={0} max={100} step={1} displayValue={inputs.vqMismatch.toFixed(0)+" / 100"} hint="교육용 강도 지수이며 병든 폐의 비율(%)이 아닙니다." onChange={v=>update("vqMismatch",v)}/>
        <PhysiologyControl label="Shunt fraction" value={inputs.shuntFraction} min={0} max={.35} step={.01} displayValue={(inputs.shuntFraction*100).toFixed(0)+"%"} hint="직접 입력 0–0.35. 비환기 혈류를 Oxygen content 기준으로 혼합합니다." onChange={v=>update("shuntFraction",v)}/>

        <button type="button" className="simulation-button w-full" onClick={()=>{setPreset("custom");animateTo({...inputs,fio2:1});}}>FiO₂ 100% 반응 보기</button>
      </>},{id:"blood",label:"혈액 · 공급",content:<>
          <PhysiologyControl label="Hemoglobin" value={inputs.hemoglobin} min={5} max={20} step={.1} displayValue={inputs.hemoglobin.toFixed(1)+" g/dL"} hint="같은 포화도에서도 산소함량을 바꿉니다." onChange={v=>update("hemoglobin",v)}/>
          <PhysiologyControl label="Cardiac output" value={inputs.cardiacOutput} min={1} max={12} step={.1} displayValue={inputs.cardiacOutput.toFixed(1)+" L/min"} hint="DO₂ 계산에 사용합니다. Mixed venous O₂의 자동 변화는 반영하지 않습니다." onChange={v=>update("cardiacOutput",v)}/>
          <PhysiologyControl label="pH" value={inputs.pH} min={7.1} max={7.6} step={.01} displayValue={inputs.pH.toFixed(2)} hint="Bohr effect에 의한 P50 이동을 단순화합니다." onChange={v=>update("pH",v)}/>
          <PhysiologyControl label="연령" value={inputs.age} min={18} max={90} step={1} displayValue={inputs.age.toFixed(0)+"세"} hint="A–a gradient의 비교 기준만 바꿉니다. 폐 구조의 노화 모델은 아닙니다." onChange={v=>update("age",v)}/>
        </>}]} /></>}
    diagram={<><FittedDiagram width={900} height={570}><OxygenationP5Canvas state={state} simulation={{phase:transitioning?"transition":"settled",progress:transitioning?.5:1,cause:state.pattern,timeLabel:"선택한 입력 조건"}}/></FittedDiagram><LabPlayback /></>}
    metrics={<>
      <PhysiologyMetric label="PaO₂" value={state.paO2.toFixed(0)+" mmHg"} status={"PAO₂ "+state.alveolarPO2.toFixed(0)}/>
      <PhysiologyMetric label="SaO₂" value={state.saO2.toFixed(1)+"%"} status="Hb 포화율"/>
      <PhysiologyMetric label="CaO₂" value={state.caO2.toFixed(1)+" mL/dL"} status="혈액당 산소함량"/>
      <PhysiologyMetric label="DO₂" value={state.oxygenDelivery.toFixed(0)+" mL/min"} status="전신 공급량 추정"/>
      <PhysiologyMetric label="PaCO₂" value={state.paCO2.toFixed(0)+" mmHg"} status="환기 지표"/>
      <PhysiologyMetric label="A–a gradient" value={state.aaGradient.toFixed(0)+" mmHg"} status={"입력 조건별 근사 상한 "+state.expectedAaUpper.toFixed(0)}/>
    </>} finding={<strong>{state.pattern}</strong>}>


    <section className="physiology-card space-y-2" aria-live="polite"><h2 className="text-lg font-bold">{state.pattern}</h2><p className="text-sm leading-6">{state.explanation}</p><p className="text-sm leading-6">{state.oxygenResponse}</p><p className="scenario-notice">A–a 비교 상한 = (연령+10)/4 + (FiO₂−0.21)×60. 높은 FiO₂에서의 근사치로 진단 기준이 아닙니다.</p></section>
    <MetricComparison busy={transitioning} snapshot={{label:condition,inputs:{...inputs,preset}}} onRestore={v=>{animateTo({fio2:Number(v.fio2),respiratoryRate:Number(v.respiratoryRate),vqMismatch:Number(v.vqMismatch),shuntFraction:Number(v.shuntFraction),hemoglobin:Number(v.hemoglobin),pH:Number(v.pH),cardiacOutput:Number(v.cardiacOutput),age:Number(v.age)},0);setPreset(String(v.preset));}} metrics={[{label:"PaO₂",value:state.paO2,normal:normal.paO2,unit:"mmHg"},{label:"SaO₂",value:state.saO2,normal:normal.saO2,unit:"%"},{label:"CaO₂",value:state.caO2,normal:normal.caO2,unit:"mL/dL"},{label:"DO₂",value:state.oxygenDelivery,normal:normal.oxygenDelivery,unit:"mL/min",digits:0}]}/>
    <ClinicalScenarioPanel id={preset}/>
    <GuidedExperiments experiments={experiments} activeScenario={preset} onApply={apply}/>

  </LabWorkspace>;
}
