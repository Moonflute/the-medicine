import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
import {createHumanVentricularMembrane,ischemicMetabolism} from '../src/lib/ecg-forward-model.ts';

// Independent of mesh/electrodes: changing metabolism must change the actual
// ionic action potential. Ablations isolate K, ATP and pH rather than fitting ST.
const normal=ischemicMetabolism(0),injury=ischemicMetabolism(.7);
const conditions={normal,potassium:{...normal,potassium:injury.potassium},atp:{...normal,atp:injury.atp},acidosis:{...normal,pH:injury.pH},combined:injury};
function run(environment,dt=.05){
 const model=createHumanVentricularMembrane([0,1,2],5.4,dt,undefined,[environment,environment,environment]);
 const vm=model.initialVoltages.slice(),traces=[[],[],[]];
 for(let k=0;k<4000/dt;k++){
  const t=k*dt,pulse=t%1000>=100&&t%1000<101;
  for(let i=0;i<3;i++){
   vm[i]+=dt*model.derivative(i,vm[i],1,pulse?52/120:0);
   assert.ok(Number.isFinite(vm[i])&&vm[i]>-.3&&vm[i]<1.5);
   if(t>=3000&&k%Math.round(1/dt)===0)traces[i].push(vm[i]*120-85);
  }
 }
 return traces.map((v,i)=>{
  const rest=v.slice(20,80).reduce((a,b)=>a+b,0)/60,peak=Math.max(...v),upstroke=Math.max(...v.map((x,j)=>j?x-v[j-1]:0));
  const activation=v.findIndex(x=>x>rest+.5*(peak-rest));
  const recovery=v.findIndex((x,j)=>j>activation+10&&x<rest+.1*(peak-rest));
  return {layer:['endo','mid','epi'][i],rest,peak,upstroke,plateau:v.slice(140,180).reduce((a,b)=>a+b,0)/40,apd90:recovery-activation,trace:v};
 });
}
const result=Object.fromEntries(Object.entries(conditions).map(([name,env])=>[name,run(env)]));
for(let i=0;i<3;i++){
 assert.ok(result.potassium[i].rest>result.normal[i].rest+5,'Local K depolarizes resting Vm');
 assert.ok(result.atp[i].plateau<result.normal[i].plateau,'ATP changes plateau via KATP/ICaL');
 assert.ok(result.acidosis[i].upstroke<result.normal[i].upstroke,'pH reduces peak Na upstroke');
 assert.ok(result.combined[i].apd90<result.normal[i].apd90,'Combined metabolic injury changes repolarization');
}
assert.ok(result.combined[2].plateau<result.combined[0].plateau,'Epicardial vulnerability emerges from channel properties');
const fine=run(injury,.025);
for(let i=0;i<3;i++)assert.ok(Math.abs(fine[i].apd90-result.combined[i].apd90)<5,'Ionic injury time-step convergence');
if(process.argv[2])await writeFile(process.argv[2],JSON.stringify({conditions,result,fine},null,2));
console.log(JSON.stringify(Object.fromEntries(Object.entries(result).map(([k,v])=>[k,v.map(m=>Object.fromEntries(Object.entries(m).filter(([key])=>key!=='trace')))]))));
console.log('PASS: K/ATP/pH ablation, endo/epi response, finite voltage and time-step checks.');
