import * as T from 'three';
import {journeyKind} from './learning-data.js';

// Annotation rays use the same occupied space as navigation. Never show an
// entrance through an intervening wall or move the camera to a label.
export function visibleThroughLumen(field,from,to,{surface=false}={}){
 const length=Math.hypot(...to.map((v,i)=>v-from[i]));if(length<.001)return false;
 const end=surface?Math.max(0,length-field.step*2):length,steps=Math.ceil(end/(field.step*.6));
 for(let i=1;i<=steps;i++){const t=i/steps*end/length,p=from.map((v,k)=>v+(to[k]-v)*t);if(field.clearance(p)<.0001)return false;}
 return true;
}

export function entranceHints(manifest){
 if(manifest.key!=='upper')return manifest.junctions.flatMap(j=>{
  const parent=manifest.parts.find(p=>p.id===j.from),child=manifest.parts.find(p=>p.id===j.to),kind=journeyKind(manifest),vein=kind==='vein';
  if(kind==='circulation'){
   const forward=manifest.flowConnections.some(([a,b])=>a===j.from&&b===j.to);
   return [{id:`branch-${j.from}-${j.to}`,from:j.from,to:j.to,name:j.valve?.name||child.name,target:j.valve?child.name:'',detail:forward?'혈류 유출 →':'← 혈류 유입',point:j.valve?.center||j.start,nearPoint:j.start,regions:[j.from],range:.09,valve:!!j.valve},{id:`parent-${j.to}-${j.from}`,from:j.to,to:j.from,name:j.valve?.name||parent.name,target:j.valve?parent.name:'',detail:forward?'← 혈류 유입':'혈류 유출 →',point:j.valve?.center||j.end,nearPoint:j.end,regions:[j.to],range:.09,valve:!!j.valve}];
  }
  return [
   {id:`branch-${j.from}-${j.to}`,name:child.name,detail:vein?'유입 정맥':'분지',point:j.end,regions:[j.from],range:.055},
   {id:`parent-${j.to}-${j.from}`,name:parent.name,detail:vein?'유출 방향':kind==='airway'?'상위 기관지':'기시 혈관',point:j.start,regions:[j.to],range:.055}
  ];
 });
 const junction=(a,b,side='end')=>manifest.junctions.find(j=>j.from===a&&j.to===b)?.[side];
 return [
  {id:'oropharynx',from:1,to:2,name:'Oropharynx',detail:'인두로',point:[0,1.537,.012],regions:[1],range:.055},
  {id:'laryngeal-inlet',from:2,to:6,name:'Laryngeal inlet',detail:'앞쪽 · Trachea',point:[0,1.497,.012],regions:[2],range:.050},
  {id:'esophagus',from:2,to:3,name:'Esophageal inlet',detail:'뒤쪽 · Stomach',point:junction(2,3,'start'),regions:[2,6],range:.060},
  {id:'left-bronchus',from:7,to:8,name:'Left main bronchus',detail:'좌주기관지',point:junction(7,8),regions:[7],range:.055},
  {id:'right-bronchus',from:7,to:9,name:'Right main bronchus',detail:'우주기관지',point:junction(7,9),regions:[7],range:.055},
  {id:'pylorus',from:4,to:5,name:'Pyloric junction',target:'Duodenum',detail:'이어지는 구간 →',point:junction(4,5),regions:[4],range:.07},
  {id:'duodenojejunal',from:5,to:10,name:'Duodenojejunal junction',target:'Jejunum and ileum',detail:'이어지는 구간 →',point:junction(5,10),regions:[5],range:.04},
  {id:'ileocecal',from:10,to:11,name:'Ileocecal junction',target:'Cecum',detail:'이어지는 구간 →',point:junction(10,11),regions:[10],range:.04},
  {id:'hepatic-flexure',from:11,to:12,name:'Right colic flexure',target:'Transverse colon',detail:'이어지는 구간 →',point:junction(11,12),regions:[11],range:.05},
  {id:'splenic-flexure',from:12,to:13,name:'Left colic flexure',target:'Descending colon',detail:'이어지는 구간 →',point:junction(12,13),regions:[12],range:.05},
  ...manifest.junctions.filter(j=>j.to>=15).flatMap(j=>[
   {id:`branch-${j.from}-${j.to}`,from:j.from,to:j.to,name:manifest.parts.find(p=>p.id===j.to).name,detail:'분지 →',point:j.end,regions:[j.from],range:.055},
   {id:`parent-${j.to}-${j.from}`,from:j.to,to:j.from,name:manifest.parts.find(p=>p.id===j.from).name,detail:'← 상위 기관지',point:j.start,regions:[j.to],range:.055}
  ]),
  // Keep the return entrance visible too. This also covers the previously
  // unlabelled esophagus–stomach and larynx–trachea boundaries.
  ...manifest.junctions.filter(j=>j.to<15).flatMap(j=>[
   {id:`return-${j.to}-${j.from}`,from:j.to,to:j.from,name:manifest.parts.find(p=>p.id===j.from).name,detail:'← 이어지는 구간',point:j.end,regions:[j.to],range:.07},
   ...([3,6].includes(j.from)?[{id:`branch-${j.from}-${j.to}`,from:j.from,to:j.to,name:manifest.parts.find(p=>p.id===j.to).name,detail:'이어지는 구간 →',point:j.start,regions:[j.from],range:.07}]:[])
  ]),
  ...(manifest.landmarks||[]).map(p=>({id:p.name.toLowerCase(),name:p.name,detail:'',point:p.position,regions:p.id===1?[1,2]:[2,6],range:p.id===1?.05:.045,surface:true}))
 ].filter(h=>h.point);
}

// Put a label beside its opening, avoiding the minimap, controls and other
// labels. Returning null is preferable to covering a control or clipping text.
export function placeEntranceLabel(x,y,w,h,width,height,occupied=[]){
 const gap=18,positions=[[x-w/2,y-h-gap],[x+gap,y-h/2],[x-w-gap,y-h/2],[x-w/2,y+gap]];
 for(const [px,py]of positions){const left=Math.max(8,Math.min(width-w-8,px)),top=Math.max(8,Math.min(height-h-8,py)),rect={left,top,right:left+w,bottom:top+h};
  if(!occupied.some(r=>rect.left<r.right+6&&rect.right>r.left-6&&rect.top<r.bottom+6&&rect.bottom>r.top-6))return rect;
 }return null;
}

export function connectionHint(manifest,hints,region,id){
 if(!manifest.connections.some(([a,b])=>a===region&&b===id||a===id&&b===region))return null;
 const j=manifest.junctions.find(j=>(j.from===region&&j.to===id)||(j.to===region&&j.from===id));
 const known=hints.find(h=>h.from===region&&h.to===id),reverse=hints.find(h=>h.from===id&&h.to===region);
 if(!j&&!known&&!reverse)return null;
 const near=j?(j.from===region?j.start:j.end):(known||reverse).point;
 return {...(known||{name:j?.valve?.name||manifest.parts.find(p=>p.id===id).name,detail:'이어지는 구간',point:j?.valve?.center||near,nearPoint:near,valve:!!j?.valve}),from:region,to:id,baseId:known?.id,regions:[region],range:.12};
}

export class JourneyWayfinding{
 constructor(host,asset,camera){
  this.host=host;this.asset=asset;this.camera=camera;this.enabled=true;this.vector=new T.Vector3();this.clip=new T.Vector3();this.items=[];this.hints=entranceHints(asset.manifest);this.byRegion=new Map();this.previous=new Set();
  for(const hint of this.hints)for(const id of hint.regions){if(!this.byRegion.has(id))this.byRegion.set(id,[]);this.byRegion.get(id).push(hint);}
  this.layer=document.createElement('div');this.layer.className='journey-hints';this.layer.setAttribute('aria-hidden','true');host.append(this.layer);
  // Reuse four slots, rather than creating three DOM nodes for every branch.
  for(let i=0;i<4;i++){const label=document.createElement('div');label.className='journey-hint';const name=document.createElement('b'),target=document.createElement('span'),detail=document.createElement('span');target.className='journey-hint-target';detail.className='journey-hint-detail';label.append(name,target,detail);const anchor=document.createElement('i');anchor.className='journey-hint-anchor';const line=document.createElement('i');line.className='journey-hint-line';this.layer.append(line,anchor,label);this.items.push({label,name,target,detail,anchor,line});}
  this.cue=document.createElement('div');this.cue.className='journey-turn-cue';this.cue.hidden=true;this.layer.append(this.cue);
 }
 highlight(id){
  const region=this.asset.field.region(this.camera.position.toArray()),hint=connectionHint(this.asset.manifest,this.hints,region,id);if(!hint)return 'unavailable';
  this.focus={...hint,id:'selected-connection'};
  this.frame=null;this.update();return this.focusState;
 }
 setRoute(region,id,transfer=null){
  const boundary=transfer&&this.asset.manifest.boundaries?.find(b=>b.part===region);
  const hint=boundary?{name:'미세순환 생략 · '+transfer.territory,target:this.asset.manifest.parts.find(p=>p.id===id).name,detail:'혈관 끝에서 전환 선택',point:boundary.position,regions:[region],range:.18,transfer:true}:id===null?null:connectionHint(this.asset.manifest,this.hints,region,id);
  this.route=hint?{...hint,id:'route-connection'}:null;this.frame=null;this.update();
 }
 update(){
  this.layer.hidden=!this.enabled&&!this.route;if(this.layer.hidden)return;
  const {camera,asset}=this,position=camera.position.toArray(),region=asset.field.region(position),width=this.host.clientWidth,height=this.host.clientHeight;
  const exclusions=[...this.host.parentElement.querySelectorAll('.journey-top,.journey-bottom,.journey-map,.journey-heading,.journey-clinical-badge,.journey-route,.journey-stick,.journey-height,.journey-boundary,.journey-feedback')].filter(el=>!el.hidden&&el.getClientRects().length),stageRect=this.host.getBoundingClientRect(),rectangles=exclusions.map(el=>{const r=el.getBoundingClientRect();return {left:r.left-stageRect.left,top:r.top-stageRect.top,right:r.right-stageRect.left,bottom:r.bottom-stageRect.top};});
  const frame=[...position,...camera.quaternion.toArray(),camera.fov,camera.near,width,height,this.enabled,JSON.stringify(rectangles)].join(',');if(frame===this.frame)return;this.frame=frame;
  camera.updateMatrixWorld();
  for(const item of this.items)item.label.hidden=item.anchor.hidden=item.line.hidden=true;this.cue.hidden=true;this.focusState=this.routeState='occluded';
  if(this.focus&&!this.focus.regions.includes(region))this.focus=null;
  // Keep the route across an unlabelled boundary sample. The route controller
  // replaces it on the next named segment; only render it in its own region.
  const activeRoute=this.route?.regions.includes(region)?this.route:null;
  const candidates=[];
  const selected=hint=>hint===this.focus||hint===this.route,state=(hint,value)=>{if(hint===this.focus)this.focusState=value;if(hint===this.route)this.routeState=value;};
  for(const hint of [...(activeRoute?[activeRoute]:[]),...(this.enabled?[...(this.focus?[this.focus]:[]),...(this.byRegion.get(region)||[])]:[])]){
   if(hint.id===this.focus?.baseId||hint.id===this.route?.baseId)continue;
   const point=[hint.point,hint.nearPoint].filter(Boolean).find(p=>Math.hypot(...p.map((v,i)=>v-position[i]))<=hint.range&&visibleThroughLumen(asset.field,position,p,hint));if(!point)continue;
   this.vector.fromArray(point);const distance=this.vector.distanceTo(camera.position);if(distance<.0015)continue;
   this.clip.copy(this.vector).project(camera);const inFront=this.clip.z>=-1&&this.clip.z<=1,inView=inFront&&Math.abs(this.clip.x)<.94&&Math.abs(this.clip.y)<.9,edge=!inView&&inFront&&Math.abs(this.clip.x)<2.4&&Math.abs(this.clip.y)<1.6;
   if(!inView&&!edge){if(selected(hint)){if(this.cue.hidden){const local=this.vector.clone().applyMatrix4(camera.matrixWorldInverse),back=local.z>0,horizontal=Math.abs(local.x)>Math.abs(local.y),arrow=back?'↶':horizontal?(local.x>0?'→':'←'):(local.y>0?'↑':'↓'),where=back?'뒤쪽':horizontal?(local.x>0?'오른쪽':'왼쪽'):(local.y>0?'위쪽':'아래쪽');this.cue.textContent=arrow+' '+hint.name+' · '+where;this.cue.hidden=false;}state(hint,'offscreen');}continue;}
   const horizontal=Math.abs(this.clip.x)/.94>Math.abs(this.clip.y)/.9,arrow=horizontal?(this.clip.x>0?'→':'←'):(this.clip.y>0?'↑':'↓');
   candidates.push({hint,point,distance,edge,arrow,x:Math.max(12,Math.min(width-12,(this.clip.x+1)*width/2)),y:Math.max(18,Math.min(height-18,(1-this.clip.y)*height/2)),score:(hint===this.route?-200:hint===this.focus?-100:0)+(hint.valve?-.35:0)+(edge?.6:0)+(this.previous.has(hint.id)?-.2:0)+distance/hint.range+Math.hypot(this.clip.x,this.clip.y)*.2});
  }
  if(!this.cue.hidden){const w=Math.min(240,width-32);Object.assign(this.cue.style,{width:w+'px',boxSizing:'border-box',transform:'none'});const h=this.cue.offsetHeight,rect=placeEntranceLabel(width/2,80,w,h,width,height,rectangles)||placeEntranceLabel(width/2,height*.55,w,h,width,height,rectangles);if(rect){Object.assign(this.cue.style,{left:rect.left+'px',top:rect.top+'px'});rectangles.push(rect);}else this.cue.hidden=true;}
  candidates.sort((a,b)=>a.score-b.score);const shown=new Set();let index=0;
  for(const {hint,point,x,y,edge,arrow}of candidates){
   if(index>=(width<600?3:4))break;
   // A selected opening replaces its ordinary label, including custom GI names.
   const duplicate=this.items.slice(0,index).find(item=>item.hint.name===hint.name&&Math.hypot(...item.point.map((v,i)=>v-point[i]))<.002);
   if(duplicate){if(selected(hint))state(hint,duplicate.anchor.dataset.edge==='true'?'offscreen':'visible');continue;}
   const item=this.items[index],{label,name,target,detail,anchor,line}=item,w=Math.min(186,width*.44);label.dataset.hint=hint.id;label.dataset.valve=anchor.dataset.valve=String(!!hint.valve);label.classList.toggle('journey-hint-focus',hint===this.focus);label.classList.toggle('journey-hint-route',hint===this.route);anchor.dataset.edge=String(edge);anchor.textContent=edge?arrow:'';
   name.textContent=hint.name;target.textContent=hint.target?'→ '+hint.target:'';detail.textContent=(hint===this.route&&!hint.transfer?'다음 입구 · ':'')+(edge?arrow+' 시야 밖 · ':'')+hint.detail;label.style.width=w+'px';label.hidden=false;
   const h=label.offsetHeight,rect=placeEntranceLabel(x,y,w,h,width,height,rectangles);if(!rect){label.hidden=true;continue;}
   rectangles.push(rect);shown.add(hint.id);item.point=point;item.hint=hint;index++;anchor.hidden=false;line.hidden=edge;
   if(selected(hint))state(hint,edge?'offscreen':'visible');
   Object.assign(label.style,{left:rect.left+'px',top:rect.top+'px'});Object.assign(anchor.style,{left:x+'px',top:y+'px'});
   const lx=Math.max(rect.left+8,Math.min(rect.right-8,x)),ly=rect.top>y?rect.top:rect.bottom,dx=lx-x,dy=ly-y;Object.assign(line.style,{left:x+'px',top:y+'px',width:Math.hypot(dx,dy)+'px',transform:`rotate(${Math.atan2(dy,dx)}rad)`});
  }
  this.previous=shown;
 }
 dispose(){this.layer.remove();}
}
