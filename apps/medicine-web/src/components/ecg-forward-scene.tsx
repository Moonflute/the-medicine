"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import { electrodeFromPosition, electrodePosition, HEART_CENTER, leadFieldAtCenter, LIMB_ELECTRODES, TORSO_RADII, type Electrode, type ForwardRecording, type LeadPlacement, type Vec3 } from "@/lib/ecg-forward-model";

type Props = {
  recording: ForwardRecording; placement: LeadPlacement; timeMs: number; yaw: number;
  selected: "positive" | "negative"; showCurrents: boolean;
  onMove: (electrode:Electrode)=>void; onSelect:(selected:"positive"|"negative")=>void;
};
const WIDTH=760,HEIGHT=470,TORSO_X=181,TORSO_Y=236,SCALE=7.7;
const positiveColor="#be123c",negativeColor="#2563eb";
const rotate=(p:Vec3,angle:number):Vec3=>[p[0]*Math.cos(angle)+p[2]*Math.sin(angle),p[1],-p[0]*Math.sin(angle)+p[2]*Math.cos(angle)];
const membraneColor=(voltage:number)=>{
  const v=Math.max(0,Math.min(1,voltage));
  return v<.15?`rgb(${29+Math.round(v*170)},${56+Math.round(v*300)},${83+Math.round(v*290)})`:`hsl(${48-(v-.15)*52} 87% ${64-v*16}%)`;
};

function arrow(ctx:CanvasRenderingContext2D,x:number,y:number,dx:number,dy:number,color:string,width=2) {
  if(Math.hypot(dx,dy)<2)return;
  const angle=Math.atan2(dy,dx),head=Math.min(7,Math.hypot(dx,dy)/3);
  ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=width;
  ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+dx,y+dy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x+dx,y+dy);ctx.lineTo(x+dx-head*Math.cos(angle-.45),y+dy-head*Math.sin(angle-.45));ctx.lineTo(x+dx-head*Math.cos(angle+.45),y+dy-head*Math.sin(angle+.45));ctx.closePath();ctx.fill();
}

/** Orthographic ray / ellipsoid intersection, choosing the visible torso surface. */
function pickSurface(x:number,y:number,angle:number):Electrode|null {
  const screenX=(x-TORSO_X)/SCALE,worldY=(TORSO_Y-y)/SCALE;
  const c=Math.cos(angle),s=Math.sin(angle),[rx,ry,rz]=TORSO_RADII;
  const a=s*s/(rx*rx)+c*c/(rz*rz);
  const b=2*screenX*c*s*(1/(rz*rz)-1/(rx*rx));
  const q=screenX*screenX*(c*c/(rx*rx)+s*s/(rz*rz))+worldY*worldY/(ry*ry)-1;
  const discriminant=b*b-4*a*q;
  if(discriminant<0)return null;
  const depth=(-b+Math.sqrt(discriminant))/(2*a);
  return electrodeFromPosition([c*screenX-s*depth,worldY,s*screenX+c*depth]);
}

export function EcgForwardScene({recording,placement,timeMs,yaw,selected,showCurrents,onMove,onSelect}:Props) {
  const canvas=useRef<HTMLCanvasElement>(null),dragging=useRef(false);
  const angle=yaw*Math.PI/180;
  useEffect(()=>{
    const element=canvas.current;if(!element)return;
    const ctx=element.getContext("2d");if(!ctx)return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    if(element.width!==WIDTH*dpr||element.height!==HEIGHT*dpr){element.width=WIDTH*dpr;element.height=HEIGHT*dpr;}
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.fillStyle="#f7fafb";ctx.fillRect(0,0,WIDTH,HEIGHT);
    ctx.fillStyle="#e9f0f3";ctx.fillRect(355,0,1,HEIGHT);
    ctx.font="600 14px system-ui";ctx.fillStyle="#213c4b";
    ctx.fillText("전극 위치 · Torso",24,28);ctx.fillText("심근 확대 · 같은 시각",382,28);
    ctx.font="11px system-ui";ctx.fillStyle="#64748b";
    ctx.fillText(yaw===0?"Anterior view · 화면 왼쪽 = 환자 오른쪽":`회전 ${yaw}° · 좌표계는 환자 기준`,24,47);
    ctx.fillText("3D 구역 모델 · 해부학적 형태는 단순화",382,47);
    const project=(p:Vec3,zoom=false)=>{
      const local:Vec3=zoom?[p[0]-HEART_CENTER[0],p[1]-HEART_CENTER[1],p[2]-HEART_CENTER[2]]:p;
      const rotated=rotate(local,angle),scale=zoom?30:SCALE;
      return {x:(zoom?548:TORSO_X)+rotated[0]*scale,y:(zoom?253:TORSO_Y)-rotated[1]*scale,z:rotated[2]};
    };
    const torsoRadius=Math.hypot(16*Math.cos(angle),10*Math.sin(angle))*SCALE;
    ctx.fillStyle="#e5eef1";ctx.strokeStyle="#b5c9d1";ctx.lineWidth=1.3;
    ctx.beginPath();ctx.ellipse(TORSO_X,TORSO_Y,torsoRadius,26*SCALE,0,0,2*Math.PI);ctx.fill();ctx.stroke();
    ctx.strokeStyle="#cad8df";ctx.lineWidth=.7;
    for(const latitude of [-60,-30,0,30,60]) {
      ctx.beginPath();for(let longitude=-180;longitude<=180;longitude+=4){const p=project(electrodePosition({longitude,latitude}));if(longitude===-180)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y);}ctx.stroke();
    }
    const frame=Math.min(recording.samples-1,Math.max(0,Math.round(timeMs/recording.sampleMs))),n=recording.mesh.cells.length;
    const ordered=recording.mesh.cells.map((cell,i)=>({cell,i,p:project(cell.position)})).sort((a,b)=>a.p.z-b.p.z);
    for(const zoom of [false,true]) {
      if(zoom) {
        ctx.strokeStyle="#cbd5df";ctx.lineWidth=.65;
        for(const edge of recording.mesh.edges)if(edge.source){const a=project(recording.mesh.cells[edge.a].position,true),b=project(recording.mesh.cells[edge.b].position,true);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
      }
      for(const {cell,i} of ordered)if(cell.chamber!=="node") {
        const p=project(cell.position,zoom),v=recording.voltage[frame*n+i];
        ctx.fillStyle=membraneColor(v);ctx.globalAlpha=zoom?.9:.85;
        ctx.beginPath();ctx.arc(p.x,p.y,zoom?5.5:1.8,0,2*Math.PI);ctx.fill();
      }
      ctx.globalAlpha=1;
      for(const edge of recording.mesh.edges)if(!edge.source) {
        const a=project(recording.mesh.cells[edge.a].position,zoom),b=project(recording.mesh.cells[edge.b].position,zoom);
        const active=recording.voltage[frame*n+edge.a]>.5||recording.voltage[frame*n+edge.b]>.5;
        ctx.strokeStyle=edge.conductance===0?"#dc2626":active?"#16a34a":"#647b84";ctx.lineWidth=zoom?2:1;
        ctx.setLineDash(edge.conductance===0?[3,3]:[]);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();ctx.setLineDash([]);
      }
    }
    if(showCurrents) for(const edge of recording.mesh.edges)if(edge.source) {
      const difference=recording.voltage[frame*n+edge.a]-recording.voltage[frame*n+edge.b];
      if(Math.abs(difference)<.25)continue;
      const a=project(recording.mesh.cells[edge.a].position,true),b=project(recording.mesh.cells[edge.b].position,true);
      const factor=difference*edge.conductance*19;
      arrow(ctx,(a.x+b.x)/2,(a.y+b.y)/2,(b.x-a.x)*factor,(b.y-a.y)*factor,"#009c8c",1.5);
    }
    const labelOffsets:Record<string,[number,number]>={"SA node":[-84,-11],"AV node":[34,-22],His:[48,2],RBB:[-106,14],LBB:[49,22],"RV Purkinje":[-128,38],"LV Purkinje":[21,26]};
    ctx.font="600 11px system-ui";
    for(const landmark of recording.mesh.landmarks) {
      const p=project(recording.mesh.cells[landmark.index].position,true),v=recording.voltage[frame*n+landmark.index];
      ctx.fillStyle=v>.5?"#16a34a":"#475569";ctx.beginPath();ctx.arc(p.x,p.y,3.5,0,2*Math.PI);ctx.fill();
      const [dx,dy]=labelOffsets[landmark.label]??[8,0];
      ctx.strokeStyle="#94a3b8";ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+dx*.5,p.y+dy);ctx.stroke();
      ctx.fillStyle="#243e4d";ctx.fillText(landmark.label,p.x+dx,p.y+dy-3);
    }
    const origin=project(HEART_CENTER),p=recording.dipole.subarray(frame*3,frame*3+3);
    const p3:Vec3=[p[0],p[1],p[2]],pRotated=rotate(p3,angle),pLength=Math.hypot(...p3);
    const l=leadFieldAtCenter(placement),lRotated=rotate(l,angle),lLength=Math.hypot(...l);
    if(pLength>.03)arrow(ctx,origin.x,origin.y,pRotated[0]/pLength*45,-pRotated[1]/pLength*45,"#7c3aed",3);
    if(lLength>1e-8)arrow(ctx,origin.x,origin.y,lRotated[0]/lLength*57,-lRotated[1]/lLength*57,"#059669",2);
    if(placement.reference==="wilson")for(const [label,electrode] of Object.entries(LIMB_ELECTRODES)) {
      const p=project(electrodePosition(electrode));ctx.fillStyle="#64748b";ctx.beginPath();ctx.arc(p.x,p.y,6,0,2*Math.PI);ctx.fill();ctx.font="11px system-ui";ctx.fillText(label,p.x+10,p.y+4);
    }
    for(const key of ["negative","positive"] as const) {
      if(key==="negative"&&placement.reference==="wilson")continue;
      const p=project(electrodePosition(placement[key]));
      const color=key==="positive"?positiveColor:negativeColor;
      ctx.globalAlpha=p.z<0?.6:1;ctx.fillStyle="white";ctx.strokeStyle=color;ctx.lineWidth=selected===key?3.5:2;
      ctx.beginPath();ctx.arc(p.x,p.y,12,0,2*Math.PI);ctx.fill();ctx.stroke();
      ctx.font="bold 17px system-ui";ctx.fillStyle=color;ctx.textAlign="center";ctx.fillText(key==="positive"?"+":"−",p.x,p.y+6);ctx.textAlign="left";ctx.globalAlpha=1;
    }
    ctx.font="11px system-ui";ctx.fillStyle="#7c3aed";ctx.fillText("→ 합성 dipole 방향",20,437);ctx.fillStyle="#059669";ctx.fillText("→ Lead field 방향",181,437);
    ctx.fillStyle="#64748b";ctx.fillText("화살표 길이는 방향 표시용 · 파형에는 실제 계산 크기 사용",20,456);
    const gradient=ctx.createLinearGradient(400,0,570,0);gradient.addColorStop(0,membraneColor(0));gradient.addColorStop(.5,membraneColor(.5));gradient.addColorStop(1,membraneColor(1));
    ctx.fillStyle=gradient;ctx.fillRect(400,430,170,8);ctx.fillStyle="#475569";ctx.fillText("Vm 0 (rest)",400,456);ctx.fillText("1 (depolarized)",568,456);
  },[recording,placement,timeMs,angle,yaw,selected,showCurrents]);

  const coordinates=(event:PointerEvent<HTMLCanvasElement>)=>{
    const rect=event.currentTarget.getBoundingClientRect();return {x:(event.clientX-rect.left)/rect.width*WIDTH,y:(event.clientY-rect.top)/rect.height*HEIGHT};
  };
  const move=(event:PointerEvent<HTMLCanvasElement>)=>{
    const {x,y}=coordinates(event);if(x>352)return;
    const electrode=pickSurface(x,y,angle);if(electrode)onMove(electrode);
  };
  return <canvas ref={canvas} className="ecg-forward-scene" role="img" tabIndex={0}
    aria-label="전극 위치와 심근 막전위. 흉곽을 누르거나 전극을 드래그하세요. 방향키로 선택한 전극을 이동할 수 있으며 아래 숫자 입력도 가능합니다."
    onPointerDown={event=>{
      const {x,y}=coordinates(event);if(x>352)return;
      for(const key of ["positive","negative"] as const){if(key==="negative"&&placement.reference==="wilson")continue;const p=rotate(electrodePosition(placement[key]),angle);if(Math.hypot(x-TORSO_X-p[0]*SCALE,y-TORSO_Y+p[1]*SCALE)<18){onSelect(key);dragging.current=true;event.currentTarget.setPointerCapture(event.pointerId);return;}}
      dragging.current=true;event.currentTarget.setPointerCapture(event.pointerId);move(event);
    }}
    onPointerMove={event=>{if(dragging.current)move(event);}}
    onPointerUp={event=>{dragging.current=false;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);}}
    onPointerCancel={()=>{dragging.current=false;}}
    onKeyDown={event=>{
      if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(event.key))return;
      event.preventDefault();const e=placement[selected],step=event.shiftKey?10:2;
      onMove({longitude:((e.longitude+(event.key==="ArrowRight"?step:event.key==="ArrowLeft"?-step:0)+540)%360)-180,latitude:Math.max(-80,Math.min(80,e.latitude+(event.key==="ArrowUp"?step:event.key==="ArrowDown"?-step:0)))});
    }}
  >전극 조작은 숫자 입력으로도 가능합니다. 색은 계산된 정규화 막전위 0–1입니다.</canvas>;
}
