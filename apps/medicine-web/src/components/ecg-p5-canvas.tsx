"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";
import type { EcgState } from "@/lib/ecg-model";

type P5Instance = p5;

export function EcgP5Canvas({ state }: { state: EcgState }) {
  const hostRef = useRef<HTMLDivElement>(null); const stateRef = useRef(state); useEffect(() => { stateRef.current = state; }, [state]);
  useEffect(() => { let instance: P5Instance | undefined; let observer: ResizeObserver | undefined; let cancelled = false; void import("p5").then(({ default: P5 }) => { if (cancelled || !hostRef.current) return; const host = hostRef.current; const sketch = (p: P5Instance) => { let w = 760; let h = 500; const resize = () => { w = Math.max(320, host.clientWidth); h = Math.max(450, Math.min(560, w * .65)); p.resizeCanvas(w, h); }; const label = (s: string, x: number, y: number, z = 11, c = "#425359") => { p.noStroke(); p.fill(c); p.textAlign(p.CENTER, p.CENTER); p.textSize(z); p.text(s, x, y); };
    p.setup = () => { const c = p.createCanvas(w, h); c.parent(host); p.frameRate(30); p.textFont("Arial"); observer = new ResizeObserver(resize); observer.observe(host); resize(); };
    p.draw = () => { const s = stateRef.current; p.background("#edf2f1"); const beat = (p.frameCount * s.ventricularRate / 60 / 30) % 1; const atrial = (p.frameCount * s.atrialRate / 60 / 30) % 1;
      p.stroke("#d5dfde"); p.strokeWeight(.6); for (let x=0;x<w;x+=20)p.line(x,0,x,h); for(let y=0;y<h;y+=20)p.line(0,y,w,y);
      const hx=w*.22, hy=h*.28; p.noStroke(); p.fill("#d8c7c8"); p.ellipse(hx,hy,180,210); p.fill("#f2e6e4"); p.ellipse(hx-36,hy-37,65,58); p.ellipse(hx+36,hy-37,65,58); p.fill("#e5c7c5"); p.ellipse(hx-34,hy+48,72,90); p.ellipse(hx+34,hy+48,72,90);
      const nodes=[{x:hx-55,y:hy-62,n:"SA"},{x:hx,y:hy-15,n:"AV"},{x:hx,y:hy+30,n:"His"},{x:hx-35,y:hy+72,n:"LBB"},{x:hx+35,y:hy+72,n:"RBB"}]; nodes.forEach((n,i)=>{ const active=Math.abs(((atrial+i*.08)%1)-.5)<.08; p.fill(active?"#b18039":"#557379"); p.circle(n.x,n.y,active?14:10); label(n.n,n.x,n.y+18,9); if(i<nodes.length-1){p.stroke("#758b8f");p.strokeWeight(2);p.line(n.x,n.y,nodes[i+1].x,nodes[i+1].y);} });
      const x1=40,x2=w-35,base=h*.72; p.stroke("#6c5d7e");p.strokeWeight(2.5);p.noFill();p.beginShape(); for(let x=x1;x<=x2;x+=2){const q=((x-x1)/(x2-x1)*4+beat)%1;let y=0;if(s.rhythm==="af")y=Math.sin(x*.19)*4+Math.sin(x*.41)*2;else if(s.rhythm==="flutter")y=(q%.18)/.18*10-5;else if(s.rhythm==="vt")y=Math.sin(q*Math.PI*2)*35;else {if(q>.08&&q<.14)y=-9*Math.sin((q-.08)/.06*Math.PI);if(q>.2&&q<.3)y=q<.23?12:q<.255?-48:18;if(q>.5&&q<.65)y=-14*Math.sin((q-.5)/.15*Math.PI);}p.vertex(x,base+y);}p.endShape();
      label(`${s.regularity} · PR ${s.pr} · QRS ${s.qrs}`,w*.5,base+55,12); const pulse=Math.max(0,Math.sin(beat*Math.PI*2-1.2)); p.noFill();p.stroke("#a05e62");p.strokeWeight(8);p.circle(w*.8,h*.28,80+pulse*18);label("MECHANICAL PULSE",w*.8,h*.28,11); label(`${s.ventricularRate}/min`,w*.8,h*.28+23,13,"#8d4f55"); p.describe(`${s.rhythm} 리듬. 심방 박동수 ${s.atrialRate}, 심실 박동수 ${s.ventricularRate}. ${s.conduction}`); };
    }; instance=new P5(sketch,host); }); return()=>{cancelled=true;observer?.disconnect();instance?.remove();}; },[]);
  return <div ref={hostRef} className="min-h-[450px] w-full" aria-label="전도계, 심전도와 기계적 맥박이 동기화된 부정맥 시뮬레이션" />;
}
