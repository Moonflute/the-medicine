import type { ForwardRecording, ForwardTrace, MyocardialRegion } from "./ecg-forward-model";

export type StWindow = { tpStart:number; tpEnd:number; start:number; end:number; valid:boolean; warning:string|null };
export type StMeasurement = { tp:number; st:number; shift:number; valid:boolean; warning:string|null };
export function stWindow(recording:ForwardRecording):StWindow {
  const {ventricularStart,ventricularEnd,atrialStart}=recording.activation;
  const start=(ventricularEnd??0)+35,end=(ventricularEnd??0)+65;
  // Early repolarization INSIDE an ischemic zone is part of the injury source,
  // not by itself a reason to discard ST. Detect overlap with remote recovery.
  const recovery=recording.mesh.cells.flatMap((cell,i)=>(cell.chamber==="LV"||cell.chamber==="RV")&&!cell.bridge&&!cell.scar&&!(cell.injury&&cell.injury>.01)&&recording.recoveryMs[i]>=0?[recording.recoveryMs[i]]:[]);
  const earliestRecovery=recovery.length?Math.min(...recovery):Infinity;
  const warning=ventricularStart===null||ventricularEnd===null?"Ventricular activation을 확인할 수 없습니다."
    :ventricularEnd-ventricularStart>140?"활성 분산이 커서 QRS와 ST를 분리해 해석하기 어렵습니다."
    :end>=earliestRecovery?"비손상 심근의 회복이 측정창과 겹쳐 독립적인 ST 구간으로 해석하기 어렵습니다."
    :end>=60000/recording.inputs.rate||atrialStart===null||atrialStart<=80?"이 조건에서 TP/ST 측정창이 분리되지 않습니다.":null;
  return {tpStart:20,tpEnd:80,start,end,valid:warning===null,warning};
}
export function sampleMean(values:Float32Array,sampleMs:number,start:number,end:number) {
  let sum=0,count=0;
  for(let i=Math.max(0,Math.ceil(start/sampleMs));i<=Math.min(values.length-1,Math.floor(end/sampleMs));i++){sum+=values[i];count++;}
  return count?sum/count:0;
}
/** Read-only measurement. No sample is shifted, fitted, or normalized here. */
export function measureSt(recording:ForwardRecording,trace:ForwardTrace,window=stWindow(recording)):StMeasurement {
  const tp=sampleMean(trace.values,recording.sampleMs,window.tpStart,window.tpEnd);
  const st=sampleMean(trace.values,recording.sampleMs,window.start,window.end);
  const tpSamples=trace.values.subarray(Math.ceil(window.tpStart/recording.sampleMs),Math.floor(window.tpEnd/recording.sampleMs)+1);
  const unstableTp=Math.max(...tpSamples)-Math.min(...tpSamples)>.03;
  const warning=window.warning??(unstableTp?"TP 기준선이 안정적이지 않아 ST 수치를 보류합니다.":"");
  return {tp,st,shift:st-tp,valid:window.valid&&!unstableTp,warning:warning||null};
}
export function regionVoltage(recording:ForwardRecording,region:MyocardialRegion,layer:"endo"|"epi") {
  const indices=recording.mesh.cells.flatMap((cell,index)=>cell.region===region&&!cell.bridge&&cell.transmural!==undefined&&(layer==="endo"?cell.transmural<=.12:cell.transmural>=.88)?[index]:[]);
  return Float32Array.from({length:recording.samples},(_,frame)=>indices.reduce((sum,index)=>sum+recording.voltage[frame*recording.mesh.cells.length+index],0)/Math.max(1,indices.length));
}
