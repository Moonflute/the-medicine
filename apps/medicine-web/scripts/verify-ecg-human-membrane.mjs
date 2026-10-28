import assert from "node:assert/strict";
import {writeFile} from "node:fs/promises";
import { createHumanVentricularMembrane } from "../src/lib/ecg-forward-model.ts";

// Isolated cells validate ionic dynamics independently of heart geometry/ECG.
function run(ko,krScale=1,dt=.05) {
  const model=createHumanVentricularMembrane([0,1,2],ko,dt),vm=new Float64Array(3).fill(model.initialVoltage),traces=[[],[],[]];
  for(let step=0;step<6000/dt;step++) {
    const t=step*dt,pulse=t%1000>=100&&t%1000<101;
    for(let i=0;i<3;i++) {
      vm[i]+=dt*model.derivative(i,vm[i],krScale,pulse?52/120:0);
      assert.ok(Number.isFinite(vm[i])&&vm[i]>-.3&&vm[i]<1.6,"finite physiological integration range");
      if(t>=5000&&step%Math.round(1/dt)===0)traces[i].push(vm[i]*120-85);
    }
  }
  return traces.map((v,i)=>{
    const rest=v.slice(20,80).reduce((s,x)=>s+x,0)/60,peak=Math.max(...v);
    const activation=v.findIndex(x=>x>rest+.5*(peak-rest));
    const threshold=rest+.1*(peak-rest),recover=v.findIndex((x,j)=>j>activation+50&&x<threshold);
    const phase3=Math.max(...v.slice(activation+50).map((x,j)=>j?-(x-v[activation+49+j]):0));
    return{phenotype:["endo","mid","epi"][i],rest,peak,apd90:recover-activation,phase3MvPerMs:phase3};
  });
}
const baseline=run(5.4),hyper=run(7),long=run(5.4,.45),short=run(5.4,2),fine=run(5.4,1,.025);
for(let i=0;i<3;i++) {
  assert.ok(baseline[i].apd90>180&&baseline[i].apd90<650,"TP06 cell has a plateau, not a pulse template");
  assert.ok(hyper[i].rest>baseline[i].rest+4,"K changes resting potential");
  assert.ok(hyper[i].apd90<baseline[i].apd90,"K changes cellular repolarization");
  assert.ok(long[i].apd90>baseline[i].apd90&&short[i].apd90<baseline[i].apd90,"IKr affects APD in both directions");
  assert.ok(Math.abs(fine[i].apd90-baseline[i].apd90)<5,"time-step APD convergence");
}
const result={baseline,hyper,long,short,fine};
if(process.argv[2])await writeFile(process.argv[2],JSON.stringify(result,null,2));
console.log(JSON.stringify(result));
console.log("PASS: independent TP06 cell, potassium, IKr, phenotype and time-step checks.");
