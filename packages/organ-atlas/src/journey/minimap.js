import * as T from 'three';
import {fetchModelResponse} from '../local-model-store.js';
import {bodyContext} from './body-context-data.js';
import {journeyFrame} from './context.js';
let contextImages;
function loadBodyContext(){return contextImages??=Promise.all(['front','side'].map(async axis=>{const response=await fetchModelResponse(bodyContext.files[axis]);if(!response.ok)throw Error('Context image unavailable');return [axis,await createImageBitmap(await response.blob())];})).then(Object.fromEntries).catch(error=>{contextImages=null;throw error;});}

export class JourneyMiniMap{
 constructor(host,asset,camera,onChange=()=>{}){this.host=host;this.asset=asset;this.camera=camera;this.canvas=host.querySelector('canvas');this.axis='front';this.images={};this.direction=new T.Vector3();this.local=false;this.trail=[];
  for(const axis of ['front','side']){const f=asset.field,[nx,ny,nz]=f.dimensions,w=axis==='front'?nx:nz,off=document.createElement('canvas');off.width=w;off.height=ny;const ctx=off.getContext('2d'),pixels=ctx.createImageData(w,ny),depth=new Int16Array(w*ny).fill(-1),colors=asset.manifest.parts.map(p=>p.color.match(/\w\w/g).map(s=>parseInt(s,16)));f.forEachVoxel((x,y,z,id)=>{const u=axis==='front'?x:z,d=axis==='front'?z:x,at=u+w*(ny-y-1);if(d<=depth[at])return;depth[at]=d;const color=colors[id-1],offset=at*4;pixels.data[offset]=color[0];pixels.data[offset+1]=color[1];pixels.data[offset+2]=color[2];pixels.data[offset+3]=205;});ctx.putImageData(pixels,0,0);this.images[axis]=off;}
  for(const b of host.querySelectorAll('[data-projection]')){b.onclick=()=>{this.axis=b.dataset.projection;this.draw();onChange();};}
  const zoom=host.querySelector('[data-map-zoom]');if(zoom)zoom.onclick=()=>{this.local=!this.local;this.draw();onChange();};
  if(journeyFrame(asset.manifest)===bodyContext.coordinateFrame)loadBodyContext().then(images=>{if(this.disposed)return;this.context=images;this.frame=null;this.draw();}).catch(()=>{});
  this.draw();
 }
 resetTrail(){this.trail=[];this.frame=null;}
 draw(){
  if(this.host.hidden)return;const {asset,camera,canvas,axis}=this,f=asset.field,side=axis==='side',u=side?2:0,[,ny]=f.dimensions,image=this.images[axis],ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
  const frame=[axis,this.local,...camera.position.toArray(),...camera.quaternion.toArray()].join(',');if(frame===this.frame)return;this.frame=frame;
  const position=camera.position.toArray(),previous=this.trail.at(-1);if(!previous||Math.hypot(...position.map((v,i)=>v-previous[i]))>.002){this.trail.push(position);if(this.trail.length>120)this.trail.shift();}
  // Zoom the side map around the pharynx while nearby, so the anterior airway
  // and posterior esophagus remain distinguishable on a phone-sized inset.
  const whole=this.context&&!this.local,neck=!whole&&side&&asset.manifest.key==='upper'&&camera.position.y>1.435,abdomen=!whole&&asset.manifest.key==='upper'&&camera.position.y<1.24,minU=whole?(bodyContext.bounds.min[u]-f.origin[u])/f.step:neck?Math.max(0,(-.028-f.origin[u])/f.step):abdomen?Math.max(0,((side?-.09:-.14)-f.origin[u])/f.step):0,maxU=whole?(bodyContext.bounds.max[u]-f.origin[u])/f.step:neck?Math.min(image.width,(.105-f.origin[u])/f.step):abdomen?Math.min(image.width,((side?.11:.14)-f.origin[u])/f.step):image.width,minY=whole?(bodyContext.bounds.min[1]-f.origin[1])/f.step:neck?(1.435-f.origin[1])/f.step:abdomen?Math.max(0,(.79-f.origin[1])/f.step):0,maxY=whole?(bodyContext.bounds.max[1]-f.origin[1])/f.step:neck?(1.58-f.origin[1])/f.step:abdomen?Math.min(ny,(1.24-f.origin[1])/f.step):ny;
  const sw=maxU-minU,sh=maxY-minY,scale=Math.min((w-28)/sw,(h-30)/sh),ox=(w-sw*scale)/2,oy=(h-sh*scale)/2;
  ctx.clearRect(0,0,w,h);
  if(whole){ctx.globalAlpha=.55;ctx.drawImage(this.context[axis],ox,oy,sw*scale,sh*scale);ctx.globalAlpha=1;ctx.drawImage(image,ox-minU*scale,oy+(maxY-ny)*scale,image.width*scale,ny*scale);}
  else ctx.drawImage(image,minU,ny-maxY,sw,sh,ox,oy,sw*scale,sh*scale);
  const project=p=>[ox+((p[u]-f.origin[u])/f.step-minU)*scale,oy+(maxY-(p[1]-f.origin[1])/f.step)*scale];
  ctx.save();ctx.beginPath();ctx.rect(ox,oy,sw*scale,sh*scale);ctx.clip();ctx.beginPath();for(const [i,p]of this.trail.entries()){const [x,y]=project(p);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle='#5eead499';ctx.lineWidth=2;ctx.stroke();ctx.restore();
  if(neck){for(const [text,p]of [['Larynx',[0,1.484,.020]],['Esophagus',[0,1.463,-.006]]]){const [x,y]=project(p);ctx.font='18px sans-serif';ctx.textAlign='left';const tw=ctx.measureText(text).width,lx=Math.max(5,Math.min(w-tw-5,text==='Larynx'?x+12:x-tw-12)),ly=y+20;ctx.strokeStyle='#b9cbd1';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(Math.max(lx,Math.min(lx+tw,x)),ly-5);ctx.stroke();ctx.fillStyle='#17232bd9';ctx.fillRect(lx-2,ly-16,tw+4,19);ctx.fillStyle='#eaf2f5';ctx.fillText(text,lx,ly);}}
  const [x,y]=project(camera.position.toArray());camera.getWorldDirection(this.direction);const dx=this.direction.getComponent(u),dy=-this.direction.y,n=Math.hypot(dx,dy);ctx.strokeStyle='#5eead4';ctx.lineWidth=3;if(n>.1){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+dx/n*17,y+dy/n*17);ctx.stroke();}
  ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();ctx.strokeStyle='#0f766e';ctx.stroke();ctx.textAlign='left';ctx.fillStyle='#eaf2f5';ctx.font='17px sans-serif';ctx.fillText(side?'P':'R',4,h-6);ctx.textAlign='right';ctx.fillText(side?'A':'L',w-4,h-6);
  this.host.querySelector('.journey-map-caption').textContent=whole?'전신 · 현재 위치':side?'뒤 P · 앞 A':'인체 기준 좌우';for(const b of this.host.querySelectorAll('[data-projection]'))b.setAttribute('aria-pressed',String(b.dataset.projection===axis));this.host.querySelector('[data-map-zoom]')?.setAttribute('aria-pressed',String(this.local));
 }
 dispose(){this.disposed=true;this.images={};this.trail=[];this.canvas.getContext('2d').clearRect(0,0,this.canvas.width,this.canvas.height);for(const b of this.host.querySelectorAll('[data-projection], [data-map-zoom]'))b.onclick=null;}
}
