import * as T from 'three';
import {selectionEnglishName} from './selection-labels.js';
import {projectedPickingIndex} from './projected-picking-index.js';
import {nearestVisibleHit} from './nearest-visible-hit.js';
import {appendIndicationRail} from './indication-rails.js';
const NS='http://www.w3.org/2000/svg';
const svg=(tag,attrs)=>{const e=document.createElementNS(NS,tag);for(const [k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
export class Indications {
 constructor(host){this.host=host;this.enabled=false;this.overlay=svg('svg',{class:'anatomy-indications','aria-label':'Visible anatomical structures'});host.append(this.overlay);this.overlay.style.display='none';this.ray=new T.Raycaster();this.samples=new WeakMap();this.last=0;}
 setEnabled(value){this.enabled=value;this.overlay.style.display=value?'':'none';this.last=0;this.work=null;if(!value)this.overlay.replaceChildren();}
 update(root,camera,now){
  if(!this.enabled)return false;
  const started=performance.now();this.last=now;const width=this.host.clientWidth,height=this.host.clientHeight;this.overlay.setAttribute('viewBox', '0 0 '+width+' '+height);
  const meshes=[];root.traverseVisible(m=>{if(m.isMesh&&m.userData.partId&&m.material.opacity>.05)meshes.push(m)});
  const signature=[width,height,...camera.matrixWorld.elements.map(v=>v.toFixed(6)),...camera.projectionMatrix.elements.map(v=>v.toFixed(6)),...meshes.map(m=>m.uuid+':'+m.matrixWorld.elements.map(v=>v.toFixed(6)).join(',')+':'+(m.material.clippingPlanes||[]).map(p=>p.normal.toArray().join(',')+','+p.constant).join(';'))].join('|');
  if(this.work?.signature!==signature){const resets=(this.work?.resets??-1)+1;this.overlay.replaceChildren();this.overlay.dataset.count='0';this.work={signature,labels:new Map(),iterator:this.scan(meshes,camera,width,height),done:false,started,resets,samples:0};}
  const work=this.work;if(work.done)return false;
  // Signature collection is preparation, not scan time: on large assemblies
  // charging it to this budget can starve the scan to one sample per frame.
  const scanStarted=performance.now();
  do{const next=work.iterator.next();work.samples++;work.done=next.done;if(next.value)work.labels.set(next.value.id,next.value.label);}while(!work.done&&performance.now()-scanStarted<6);
  Object.assign(this.overlay.dataset,{scanResets:String(work.resets),scanSamples:String(work.samples),scanElapsedMs:(performance.now()-work.started).toFixed(1),sliceMs:(performance.now()-started).toFixed(1)});
  const labels=work.labels;
  if(!work.done){this.overlay.dataset.pending='true';return true;}
  this.overlay.dataset.pending='false';
  return this.renderLabels(labels,width,height,work.started);
 }
 *scan(meshes,camera,width,height){
  const candidatesAt=projectedPickingIndex(meshes,camera),seen=new Set();
  for(const mesh of meshes){
   if(mesh.userData.contextStructure||seen.has(mesh.userData.partId))continue;
   let samples=this.samples.get(mesh.geometry);
   if(!samples){mesh.geometry.computeBoundingBox();samples=[mesh.geometry.boundingBox.getCenter(new T.Vector3())];const a=mesh.geometry.attributes.position;for(let i=0;i<9;i++)samples.push(new T.Vector3().fromBufferAttribute(a,Math.floor(i*(a.count-1)/8)));this.samples.set(mesh.geometry,samples);}
   for(const sample of samples){
    const point=sample.clone().applyMatrix4(mesh.matrixWorld),ndc=point.clone().project(camera);if(Math.abs(ndc.x)>.98||Math.abs(ndc.y)>.94||Math.abs(ndc.z)>1)continue;
    this.ray.setFromCamera(new T.Vector2(ndc.x,ndc.y),camera);
    const hit=nearestVisibleHit(this.ray,candidatesAt(ndc.x,ndc.y));
    if(!hit||hit.object.userData.partId!==mesh.userData.partId){yield null;continue;}
    seen.add(mesh.userData.partId);yield {id:mesh.userData.partId,label:{name:selectionEnglishName({id:mesh.userData.partId,organId:mesh.userData.organId,detail:mesh.userData.detail}),x:(ndc.x+1)*width/2,y:(1-ndc.y)*height/2}};break;
   }
  }
 }
 renderLabels(labels,width,height,started){
  const fragment=document.createDocumentFragment(),boxWidth=Math.min(190,width*.29),top=48,bottom=height-25;
  for(const side of [0,1]){
   const items=[...labels.values()].filter(l=>(l.x<width/2?0:1)===side).sort((a,b)=>a.y-b.y);
   if(items.length*34>bottom-top){appendIndicationRail(fragment,items,{side,width,boxWidth,top,bottom,svg});continue;}
   const row=Math.min(34,(bottom-top)/Math.max(1,items.length)),h=Math.max(12,row-3),ys=[];
   for(let i=0;i<items.length;i++)ys.push(Math.max(top+i*row,Math.min(bottom-h,items[i].y-h/2),i?ys[i-1]+row:top));
   if(ys.length&&ys.at(-1)>bottom-h){const shift=ys.at(-1)-(bottom-h);for(let i=0;i<ys.length;i++)ys[i]-=shift;}
   items.forEach((l,i)=>{const x=side?width-boxWidth-5:5,y=ys[i],end=side?x:x+boxWidth,g=svg('g',{'data-indication-name':l.name});g.append(svg('path',{d:'M '+l.x+' '+l.y+' L '+(end+(side?-9:9))+' '+(y+h/2)+' L '+end+' '+(y+h/2)}),svg('circle',{cx:l.x,cy:l.y,r:2}),svg('rect',{x,y,width:boxWidth,height:h,rx:3}));const baseFont=width<500?9:11,limit=Math.max(8,Math.floor((boxWidth-12)/(baseFont*.53))),lines=[];for(const word of l.name.split(' ')){if(!lines.length||lines.at(-1).length+word.length+1>limit)lines.push(word);else lines[lines.length-1]+=' '+word;}const font=Math.min(baseFont,(h-4)/lines.length),lineHeight=font;const text=svg('text',{'font-size':font});lines.forEach((line,j)=>{const span=svg('tspan',{x:x+6,y:y+h/2+(j-(lines.length-1)/2)*lineHeight,'dominant-baseline':'middle'});span.textContent=line;text.append(span);});const title=svg('title',{});title.textContent=l.name;g.append(text,title);fragment.append(g);});
  }
  this.overlay.replaceChildren(fragment);this.overlay.dataset.count=String(labels.size);this.overlay.dataset.updateMs=(performance.now()-started).toFixed(1);return false;
 }
 dispose(){this.overlay.remove();}
}
