import { measureStandardTraces, STANDARD_LEADS } from "../src/lib/ecg-forward-model.ts";

export function pathologyMetrics(recording) {
  const {mesh,voltage,samples,sampleMs,events=[]}=recording,n=mesh.cells.length;
  const ventricular=mesh.cells.flatMap((c,i)=>["LV","RV"].includes(c.chamber)&&!c.bridge?[i]:[]);
  const landmark=label=>events.filter(e=>e.cell===mesh.landmarks.find(l=>l.label===label)?.index).map(e=>e.time);
  const his=landmark("His"),rr=his.slice(1).map((t,i)=>t-his[i]);
  const mean=a=>a.length?a.reduce((s,x)=>s+x,0)/a.length:0;
  const bursts=[];
  for(let f=1;f<samples;f++) {
    const up=ventricular.filter(i=>voltage[(f-1)*n+i]<.5&&voltage[f*n+i]>=.5);
    if(!up.length)continue;
    const time=f*sampleMs,previous=bursts.at(-1);
    if(previous&&time-previous.end<=40){previous.end=time;up.forEach(i=>previous.seen.add(i));previous.cells=previous.seen.size;}
    else bursts.push({start:time,end:time,cells:up.length,seen:new Set(up),firstRegion:mesh.cells[up[0]].region});
  }
  const cellular=Object.fromEntries(["ra-wall","la-wall","lv-septal","lv-apical","lv-lateral","lv-basal","rv-apical"].map(region=>{
    const i=mesh.cells.findIndex(c=>c.region===region&&!c.bridge&&(c.column===4||c.column===0)&&(c.transmural===undefined||c.transmural>.45&&c.transmural<.55));
    if(i<0)return[region,null];
    const values=Array.from({length:samples},(_,f)=>voltage[f*n+i]);
    const rest=mean(values.slice(10,40)),activation=recording.activationMs[i];
    const from=Math.max(0,Math.floor(activation/sampleMs)),to=Math.min(samples,from+Math.round(250/sampleMs));
    let peak=from;for(let f=from;f<to;f++)if(values[f]>values[peak])peak=f;
    const threshold=rest+.1*(values[peak]-rest);
    let recovery=-1;for(let f=peak+1;f<samples;f++)if(values[f]<=threshold){recovery=f*sampleMs;break;}
    return[region,{rest,activation,peak:values[peak],apd90:recovery<0||activation<0?null:recovery-activation,recovery90:recovery}];
  }));
  const traces=measureStandardTraces(recording);
  const first=bursts.find(b=>b.cells>ventricular.length*.8);
  const recovery=Math.max(...Object.entries(cellular).filter(([key])=>key.startsWith("lv")||key.startsWith("rv")).map(([,c])=>c?.recovery90??0));
  const leads=Object.fromEntries(STANDARD_LEADS.map(id=>{
    const values=traces[id].values;
    const tail=Array.from(values).map((v,f)=>({v,t:f*sampleMs})).filter(p=>first&&p.t>first.end+35&&p.t<Math.min(recovery+30,first.start+650));
    const tPeak=tail.reduce((best,p)=>Math.abs(p.v)>Math.abs(best.v)?p:best,{v:0,t:0});
    const half=tail.filter(p=>Math.sign(p.v)===Math.sign(tPeak.v)&&Math.abs(p.v)>=Math.abs(tPeak.v)*.5);
    return[id,{min:Math.min(...values),max:Math.max(...values),tPeak:tPeak.v,tHalfWidth:half.length?half.at(-1).t-half[0].t:0}];
  }));
  let einthoven=0,augmented=0;
  for(let f=0;f<samples;f++) {
    einthoven=Math.max(einthoven,Math.abs(traces.II.values[f]-traces.I.values[f]-traces.III.values[f]));
    augmented=Math.max(augmented,Math.abs(traces.aVR.values[f]+traces.aVL.values[f]+traces.aVF.values[f]));
  }
  return{inputs:recording.inputs,ventricularCells:ventricular.length,coverage:recording.activation.ventricularCoverage,events:{sinus:landmark("SA node"),av:landmark("AV node"),his},rr,rrCV:mean(rr)?Math.sqrt(mean(rr.map(t=>(t-mean(rr))**2)))/mean(rr):0,bursts:bursts.map(({seen,...burst})=>({...burst,cells:seen.size})),cellular,leads,identities:{einthoven,augmented}};
}
