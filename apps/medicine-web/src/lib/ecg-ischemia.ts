import type { ForwardRecording, ForwardTrace, MyocardialRegion } from "./ecg-forward-model";

export type StWindow = { tpStart:number; tpEnd:number; start:number; end:number; depolarizationEnd:number; recoveryStart:number|null; plateauGap:number|null; valid:boolean; warning:string|null };
export type StMeasurement = { tp:number; st:number; shift:number; valid:boolean; warning:string|null };
const windows=new WeakMap<ForwardRecording,StWindow>();
/** Tissue-derived boundaries, not a diagnostic J-point detector. The last
 * upstroke (dU/dt > .015/ms) extends the 50% activation marker. Recovery starts
 * at the earlier of a cell's AP50 crossing or rapid repolarization in >=2% of
 * viable myocardial mass (dU/dt < -.005/ms). In regional ionic injury, early
 * loss of the injured AP dome is part of the injury-current mechanism, not
 * necessarily global T onset: use remote myocardium for recovery/capture.
 * All myocardium remains included in the depolarization-end check.
 * Thresholds are declared educational phase markers; ECG samples stay intact. */
export function stWindow(recording:ForwardRecording):StWindow {
  const cached=windows.get(recording);if(cached)return cached;
  const {ventricularStart,ventricularEnd,atrialStart}=recording.activation;
  const {cells}=recording.mesh,n=cells.length,dt=recording.sampleMs;
  const viable=cells.flatMap((cell,i)=>(cell.chamber==="LV"||cell.chamber==="RV")&&!cell.bridge&&!cell.scar?[i]:[]);
  const regional=recording.inputs.membrane==="human-ischemia"&&Boolean(recording.inputs.ischemia);
  const recoveryTissue=regional?viable.filter(i=>(cells[i].injury??0)===0):viable;
  const recoverySet=new Set(recoveryTissue);
  // Thin inter-patch cables are numerical border volumes, not whole-wall QRS
  // markers. Their current is still present in every ECG sample.
  let depolarizationEnd=regional?Math.max(0,...viable.map(i=>recording.activationMs[i])):ventricularEnd??0,earliestRecovery=Infinity,mass=0,activeMass=0;
  for(const i of viable) {
    const activation=recording.activationMs[i];if(recoverySet.has(i))mass+=cells[i].capacity;
    if(activation<0)continue;
    if(recoverySet.has(i)) {
      activeMass+=cells[i].capacity;
      if(recording.recoveryMs[i]>=0)earliestRecovery=Math.min(earliestRecovery,recording.recoveryMs[i]);
    }
    for(let frame=Math.max(1,Math.ceil(activation/dt));frame<=Math.min(recording.samples-1,Math.floor((activation+30)/dt));frame++) {
      const du=(recording.voltage[frame*n+i]-recording.voltage[(frame-1)*n+i])/(dt*(cells[i].amplitude??1));
      if(du>.015)depolarizationEnd=Math.max(depolarizationEnd,frame*dt);
    }
  }
  if(regional) {
    // Also catch low-amplitude injured upstrokes that never cross the fixed
    // 50% marker. Never turn late activation into an apparent ST measurement.
    for(let frame=Math.max(1,Math.floor((ventricularStart??0)/dt));frame*dt<Math.min(earliestRecovery,60000/recording.inputs.rate)&&frame<recording.samples;frame++) {
      if(viable.some(i=>(recording.voltage[frame*n+i]-recording.voltage[(frame-1)*n+i])/dt>.015))depolarizationEnd=Math.max(depolarizationEnd,frame*dt);
    }
  }
  for(let frame=Math.max(1,Math.floor((ventricularStart??0)/dt));frame*dt<Math.min(earliestRecovery,60000/recording.inputs.rate)&&frame<recording.samples;frame++) {
    let recoveringMass=0;
    for(const i of recoveryTissue) {
      if(recording.activationMs[i]<0||frame*dt<recording.activationMs[i]+20)continue;
      const du=(recording.voltage[frame*n+i]-recording.voltage[(frame-1)*n+i])/(dt*(cells[i].amplitude??1));
      if(du<-.005)recoveringMass+=cells[i].capacity;
    }
    if(mass>0&&recoveringMass/mass>=.02){earliestRecovery=frame*dt;break;}
  }
  const start=depolarizationEnd+35,end=depolarizationEnd+65;
  const warning=ventricularStart===null||ventricularEnd===null?"Ventricular activation을 확인할 수 없습니다."
    :mass===0||activeMass/mass<.98?"일부 살아 있는 심근의 흥분이 확인되지 않아 ST 해석을 보류합니다."
    :depolarizationEnd-ventricularStart>140?"활성 분산이 커서 QRS와 ST를 분리해 해석하기 어렵습니다."
    :end>=earliestRecovery?"심근 회복이 측정창과 겹쳐 ST와 T를 분리하기 어렵습니다."
    :end>=60000/recording.inputs.rate||atrialStart===null||atrialStart<=80?"이 조건에서 TP/ST 측정창이 분리되지 않습니다.":null;
  const recoveryStart=Number.isFinite(earliestRecovery)?earliestRecovery:null;
  const window={tpStart:20,tpEnd:80,start,end,depolarizationEnd,recoveryStart,plateauGap:recoveryStart===null?null:recoveryStart-depolarizationEnd,valid:warning===null,warning};
  windows.set(recording,window);return window;
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
