"use client";
import { useMemo, useState } from "react";
import { GuidedExperiments, MetricComparison, useSimulationClock } from "@/components/simulation-workbench";
import { ClinicalScenarioPanel, useLearningExperiments } from "@/components/interactive-learning";
import { CanvasFrame, ModelPanel, PhysiologyControl, PhysiologyHeader, PhysiologyMetric, PresetStrip } from "@/components/physiology-ui";
import { EndocrineP5Canvas } from "@/components/endocrine-p5-canvas";
import { calculateEndocrineState, ENDOCRINE_AXES, type EndocrineAxisId, type EndocrinePreset } from "@/lib/endocrine-model";
import { updateSimulationClock } from "@/lib/simulation-clock";
const AXES:Array<{id:EndocrineAxisId;label:string}>=[{id:"thyroid",label:"HPT · Thyroid"},{id:"adrenal",label:"HPA · Adrenal"},{id:"gonadal",label:"HPG · Ovary"},{id:"growth",label:"GH–IGF-1"},{id:"adh",label:"Osmolality–ADH"},{id:"pancreatic",label:"Glucose–Insulin"}];
const IDS:EndocrinePreset[]=["normal","primary-failure","primary-excess","pituitary-failure","exogenous"];
export function EndocrineFeedbackLab(){
  const [axis,setAxis]=useState<EndocrineAxisId>("thyroid"),[preset,setPreset]=useState<EndocrinePreset>("normal");
  const [stimulus,setStimulus]=useState(100),[feedback,setFeedback]=useState(100),[exogenous,setExogenous]=useState(0),[modified,setModified]=useState(false);
  const clock=useSimulationClock(),experiments=useLearningExperiments(axis+"-");
  const definition=ENDOCRINE_AXES[axis],state=useMemo(()=>calculateEndocrineState(axis,preset,stimulus,feedback,exogenous),[axis,preset,stimulus,feedback,exogenous]),normal=calculateEndocrineState(axis,"normal");
  const selectPreset=(next:EndocrinePreset)=>{setPreset(next);setStimulus(100);setFeedback(100);setExogenous(next==="exogenous"?100:0);setModified(false);updateSimulationClock(clock,{seconds:0});};
  const selectAxis=(next:EndocrineAxisId)=>{setAxis(next);selectPreset("normal");};
  const stimulusHint=axis==="pancreatic"?"Glucose 부하의 상대값입니다. g 단위 식사량은 아닙니다.":axis==="adh"?"Plasma osmolality를 올리는 상대적 수분 부족 자극입니다.":"선택한 축의 생리적 자극 강도입니다. 시각·주기·호르몬 반감기는 계산하지 않습니다.";
  const feedbackLabel=axis==="pancreatic"?"Insulin sensitivity":axis==="adh"?"Osmotic response sensitivity":"Feedback sensitivity";
  return <div className="physiology-lab space-y-5">
    <PhysiologyHeader title="Endocrine feedback axes" description="호르몬의 분비, 표적기관 반응과 외인성 노출을 구분합니다. 축마다 다른 기전과 증상·검사 소견을 해당 상태의 노트에 연결합니다."/>
    <div className="flex flex-wrap gap-2" aria-label="내분비 축">{AXES.map(a=><button key={a.id} type="button" className="simulation-button" aria-pressed={axis===a.id} onClick={()=>selectAxis(a.id)}>{a.label}</button>)}</div>
    <PresetStrip presets={IDS.map(id=>({id,label:definition.presetLabels[id]}))} selected={preset} onSelect={id=>selectPreset(id as EndocrinePreset)} onReset={()=>selectPreset("normal")}/>
    <p className="scenario-notice">값과 증감은 정상 모델 대비 방향입니다. 검사실 정상범위나 진단 기준이 아닙니다. 축·상태 선택 시 입력이 모두 초기화됩니다.</p>
    <section className="physiology-stage">
      <CanvasFrame legend={<span>실선: 전방 자극 · 역방향 선: Feedback · 화살표 색과 입자는 상대적 신호입니다. HPG는 Negative feedback 구간만 계산합니다.</span>}><EndocrineP5Canvas state={state}/></CanvasFrame>
      <ModelPanel title={definition.title+" 변수"}><div className="space-y-4">
        <PhysiologyControl label={axis==="pancreatic"?"Glucose 부하":axis==="adh"?"삼투 자극":"생리적 입력 자극"} value={stimulus} min={30} max={170} step={1} displayValue={stimulus+"%"} hint={stimulusHint} onChange={v=>{setStimulus(v);setModified(true);}}/>
        <PhysiologyControl label={feedbackLabel} value={feedback} min={30} max={170} step={1} displayValue={feedback+"%"} hint={axis==="pancreatic"?"같은 Insulin에 대한 표적조직 반응을 조절합니다.":"자극·장애가 있을 때 Feedback 반응을 조절합니다. 기준 평형 자체는 민감도를 바꿔도 유지될 수 있습니다."} onChange={v=>{setFeedback(v);setModified(true);}}/>
        {(preset==="exogenous"||axis==="adh")?<PhysiologyControl label={axis==="adh"?"Desmopressin 추가 입력":"외인성 호르몬·작용"} value={exogenous} min={0} max={180} step={1} displayValue={exogenous+"%"} hint={axis==="adh"?"Central DI와 Nephrogenic DI에 같은 입력을 더해 반응을 비교하세요. 실제 투여 용량이 아닙니다.":"0%는 투여 없음입니다. %는 임상 약물 용량이나 혈중 농도가 아닙니다."} onChange={v=>{setExogenous(v);setModified(true);}}/>:<p className="text-xs text-[var(--muted)]">외인성 입력은 외인성 상태에서 조절할 수 있습니다.</p>}
      </div></ModelPanel>
    </section>
    <section className="grid physiology-card sm:grid-cols-3">{state.stages.map(stage=><PhysiologyMetric key={stage.id} label={stage.hormone} value={stage.value.toFixed(stage.value<10?2:1)+" "+(stage.unit==="relative"?"상대값":stage.unit)} status={stage.status==="low"?"정상 모델보다 낮음":stage.status==="high"?"정상 모델보다 높음":"정상 모델에 근접"}/>)}</section>
    {state.effects.length>0&&<section className="grid physiology-card gap-3 sm:grid-cols-2" aria-label="외인성과 총 작용 구분">{state.effects.map(e=><div key={e.label}><h2 className="text-sm font-semibold">{e.label}</h2><p className="mt-1 font-mono">{e.value.toFixed(1)} {e.unit}</p></div>)}</section>}
    <section className="physiology-card space-y-2" aria-live="polite"><h2 className="text-lg font-bold">{state.pattern}{modified?" · 입력 변경":""}</h2><p className="text-sm leading-6">{state.explanation}</p></section>
    <MetricComparison key={axis} snapshot={{label:`${definition.presetLabels[preset]} · 자극 ${stimulus}% · ${feedbackLabel} ${feedback}% · 외인성 ${exogenous}%`,inputs:{preset,stimulus,feedback,exogenous,modified}}} onRestore={v=>{setPreset(v.preset as EndocrinePreset);setStimulus(Number(v.stimulus));setFeedback(Number(v.feedback));setExogenous(Number(v.exogenous));setModified(Boolean(v.modified));}} metrics={state.stages.map((s,i)=>({label:definition.stages[i].hormone,value:s.value,normal:normal.stages[i].value,unit:s.unit==="relative"?"상대값":s.unit,digits:s.value<10?2:1}))}/>
    <ClinicalScenarioPanel id={axis+"-"+preset} modified={modified}/>
    <GuidedExperiments key={axis} experiments={experiments} activeScenario={modified?"custom":preset} onApply={id=>selectPreset(id as EndocrinePreset)}/>
  </div>;
}
