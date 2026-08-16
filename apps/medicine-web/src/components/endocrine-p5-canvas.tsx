"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { EndocrineState } from "@/lib/endocrine-model";

type P5Instance = p5;
type P5Image = Awaited<ReturnType<P5Instance["loadImage"]>>;
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function EndocrineP5Canvas({ state }: { state: EndocrineState }) {
  const hostRef=useRef<HTMLDivElement>(null);const stateRef=useRef(state);useEffect(()=>{stateRef.current=state;},[state]);
  useEffect(()=>{let instance:P5Instance|undefined;let observer:ResizeObserver|undefined;let cancelled=false;void import("p5").then(({default:P5})=>{if(cancelled||!hostRef.current)return;const host=hostRef.current;const sketch=(p:P5Instance)=>{let w=760,h=560;let body:P5Image|null=null;const resize=()=>{w=Math.max(320,host.clientWidth);h=Math.max(520,Math.min(620,w*.72));p.resizeCanvas(w,h);};const label=(s:string,x:number,y:number,z=11,c="#43545a")=>{p.noStroke();p.fill(c);p.textAlign(p.CENTER,p.CENTER);p.textSize(z);p.text(s,x,y);};p.setup=async()=>{const c=p.createCanvas(w,h);c.parent(host);p.frameRate(30);p.textFont("Arial");body=await p.loadImage(`${BASE}/images/physiology/endocrine-body-reference.png`);observer=new ResizeObserver(resize);observer.observe(host);resize();};p.draw=()=>{const s=stateRef.current;p.background("#edf2f1");const bx=w*.27,by=h*.51,bh=h*.85,bw=bh*.48;if(body){p.imageMode(p.CENTER);p.tint(255,185);p.image(body,bx,by,bw,bh);p.noTint();}
 const pos:Record<string,[number,number]>={"시상하부":[bx,by-bh*.42],"시상하부·후엽":[bx,by-bh*.39],"뇌하수체":[bx,by-bh*.36],"갑상선":[bx,by-bh*.27],"부신":[bx,by-bh*.05],"생식샘":[bx,by+bh*.22],"간":[bx-bw*.14,by-bh*.08],"신장":[bx+bw*.18,by],"혈장":[bx-bw*.35,by-bh*.16]};const points=s.stages.map((stage)=>pos[stage.organ]??[bx,by]);
 for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1];p.stroke("#738a8e");p.strokeWeight(5);p.line(a[0],a[1],b[0],b[1]);const count=Math.max(2,Math.round(s.stages[i].level/30));for(let j=0;j<count;j++){const t=(p.frameCount*.006+j/count)%1;p.noStroke();p.fill(i===0?"#347f88":"#aa7b38");p.circle(p.lerp(a[0],b[0],t),p.lerp(a[1],b[1],t),6);}}
 points.forEach((pt,i)=>{const stage=s.stages[i];const r=18+stage.level*.08;p.noStroke();p.fill(i===2?"#a45e63":"#327c7b");p.circle(pt[0],pt[1],r);label(stage.organ,pt[0]+70,pt[1]-8,11);label(`${stage.hormone} ${stage.level.toFixed(0)}%`,pt[0]+70,pt[1]+10,10,i===2?"#915156":"#286b6b");});
 const fx=w*.68,fy=h*.2,fw=w*.27,fh=h*.56;p.noStroke();p.fill(248,250,249,235);p.rect(fx-fx*.02,fy-25,fw,fh,7);label("FEEDBACK LOOP",fx+fw*.45,fy,11,"#617278");s.stages.forEach((stage,i)=>{const y=fy+55+i*95;p.stroke("#aebcbd");p.strokeWeight(2);p.line(fx,y,fx+fw*.76,y);p.noStroke();p.fill(i===2?"#a45e63":"#327c7b");p.rect(fx,y-8,fw*.76*stage.level/180,16,3);label(stage.hormone,fx,y-22,11);label(`${stage.level.toFixed(0)}%`,fx+fw*.8,y,10);if(i<2){p.stroke("#718589");p.line(fx+fw*.38,y+10,fx+fw*.38,y+70);}});
 p.noFill();p.stroke("#7a667f");p.strokeWeight(2);p.bezier(fx+fw*.75,fy+245,fx+fw,fy+245,fx+fw,fy+40,fx+fw*.75,fy+40);label("negative feedback",fx+fw*.92,fy+140,10,"#715e78");p.describe(`${s.pattern}. ${s.stages.map(x=>`${x.hormone} ${x.level.toFixed(0)}퍼센트`).join(", ")}.`);};};instance=new P5(sketch,host);});return()=>{cancelled=true;observer?.disconnect();instance?.remove();};},[]);
 return <div ref={hostRef} className="min-h-[520px] w-full" aria-label="실제 신체 위치를 기준으로 호르몬 축과 음성 피드백을 표시한 시뮬레이션"/>;
}
