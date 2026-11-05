import * as T from 'three';

// Annotation rays use the same occupied space as navigation. Never show an
// entrance through an intervening wall or move the camera to a label.
export function visibleThroughLumen(field,from,to,{surface=false}={}){
 const length=Math.hypot(...to.map((v,i)=>v-from[i]));if(length<.001)return false;
 const end=surface?Math.max(0,length-field.step*2):length,steps=Math.ceil(end/(field.step*.6));
 for(let i=1;i<=steps;i++){const t=i/steps*end/length,p=from.map((v,k)=>v+(to[k]-v)*t);if(field.clearance(p)<.0001)return false;}
 return true;
}

export function entranceHints(manifest){
 if(manifest.key!=='upper')return [];
 const junction=(a,b,side='end')=>manifest.junctions.find(j=>j.from===a&&j.to===b)?.[side];
 return [
  {id:'oropharynx',name:'Oropharynx',detail:'인두로',point:[0,1.537,.012],regions:[1,2],range:.055},
  {id:'laryngeal-inlet',name:'Laryngeal inlet',detail:'앞쪽 · Trachea',point:[0,1.497,.012],regions:[2,6],range:.050},
  {id:'esophagus',name:'Esophageal inlet',detail:'뒤쪽 · Stomach',point:junction(2,3,'start'),regions:[2,6],range:.060},
  {id:'left-bronchus',name:'Left main bronchus',detail:'좌주기관지',point:junction(7,8),regions:[7,8,9],range:.055},
  {id:'right-bronchus',name:'Right main bronchus',detail:'우주기관지',point:junction(7,9),regions:[7,8,9],range:.055},
  ...(manifest.landmarks||[]).map(p=>({id:p.name.toLowerCase(),name:p.name,detail:'',point:p.position,regions:p.id===1?[1,2]:[2,6],range:p.id===1?.05:.045,surface:true}))
 ].filter(h=>h.point);
}

export class JourneyWayfinding{
 constructor(host,asset,camera){
  this.host=host;this.asset=asset;this.camera=camera;this.enabled=true;this.vector=new T.Vector3();this.clip=new T.Vector3();this.items=[];
  this.layer=document.createElement('div');this.layer.className='journey-hints';this.layer.setAttribute('aria-hidden','true');host.append(this.layer);
  for(const hint of entranceHints(asset.manifest)){const label=document.createElement('div');label.className='journey-hint';label.dataset.hint=hint.id;const name=document.createElement('b'),detail=document.createElement('span');name.textContent=hint.name;detail.textContent=hint.detail;label.append(name,detail);const anchor=document.createElement('i');anchor.className='journey-hint-anchor';const line=document.createElement('i');line.className='journey-hint-line';this.layer.append(line,anchor,label);this.items.push({hint,label,anchor,line});}
 }
 update(){
  this.layer.hidden=!this.enabled;if(!this.enabled)return;
  const {camera,asset}=this,position=camera.position.toArray(),region=asset.field.region(position),width=this.host.clientWidth,height=this.host.clientHeight,rectangles=[];
  const frame=[...position,...camera.quaternion.toArray(),width,height].join(',');if(frame===this.frame)return;this.frame=frame;
  camera.updateMatrixWorld();
  for(const {hint,label,anchor,line}of this.items){
   label.hidden=anchor.hidden=line.hidden=true;if(!hint.regions.includes(region))continue;
   this.vector.fromArray(hint.point);const distance=this.vector.distanceTo(camera.position);if(distance>hint.range||distance<.003)continue;
   this.clip.copy(this.vector).project(camera);if(this.clip.z<0||this.clip.z>1||Math.abs(this.clip.x)>.93||Math.abs(this.clip.y)>.86)continue;
   if(!visibleThroughLumen(asset.field,position,hint.point,hint))continue;
   const x=(this.clip.x+1)*width/2,y=(1-this.clip.y)*height/2,w=Math.min(150,width*.42),h=hint.detail?45:28;
   let left=Math.max(8,Math.min(width-w-8,x-w/2)),top=Math.max(8,y-h-20);
   for(const r of rectangles)if(left<r.right+8&&left+w>r.left-8&&top<r.bottom+8&&top+h>r.top-8){left=x<width/2?Math.max(8,r.left-w-10):Math.min(width-w-8,r.right+10);top=Math.min(height-h-12,y+18);}
   if(rectangles.some(r=>left<r.right+4&&left+w>r.left-4&&top<r.bottom+4&&top+h>r.top-4))continue;
   rectangles.push({left,right:left+w,top,bottom:top+h});label.hidden=anchor.hidden=line.hidden=false;
   Object.assign(label.style,{left:left+'px',top:top+'px',width:w+'px'});Object.assign(anchor.style,{left:x+'px',top:y+'px'});
   const lx=Math.max(left+8,Math.min(left+w-8,x)),ly=top>y?top:top+h,dx=lx-x,dy=ly-y;Object.assign(line.style,{left:x+'px',top:y+'px',width:Math.hypot(dx,dy)+'px',transform:`rotate(${Math.atan2(dy,dx)}rad)`});
  }
 }
 dispose(){this.layer.remove();}
}
