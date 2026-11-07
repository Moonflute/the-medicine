import * as T from 'three';

// Scope boundaries describe missing data, never an anatomical obstruction.
// Guidance uses the recent traveled path and does not rotate/teleport the view.
export class JourneyBoundaryGuide{
 constructor(host,asset,camera,{transfers,onTransfer=()=>{}}={}){
  this.transfers=transfers;this.onTransfer=onTransfer;this.preferred=null;
  this.asset=asset;this.camera=camera;this.trail=[];this.vector=new T.Vector3();this.forward=new T.Vector3();this.right=new T.Vector3();this.up=new T.Vector3();
  this.panel=document.createElement('div');this.panel.className='journey-boundary';this.panel.hidden=true;this.panel.setAttribute('role','status');
  this.title=document.createElement('strong');this.title.textContent='탐험 범위 끝';this.detail=document.createElement('p');this.direction=document.createElement('span');this.actions=document.createElement('div');this.actions.className='journey-transfer-actions';this.panel.append(this.title,this.detail,this.actions,this.direction);host.append(this.panel);this.reset();
 }
 setPreferred(id){if(id===this.preferred)return;this.preferred=id;this.current=0;}
 reset(){this.trail=[this.camera.position.toArray()];this.current=0;this.panel.hidden=true;}
 update(feedback=''){
  const p=this.camera.position.toArray(),last=this.trail.at(-1),distance=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));
  if(distance(p,last)>.004){let back=-1;for(let i=this.trail.length-3;i>=Math.max(0,this.trail.length-128);i--)if(distance(p,this.trail[i])<.003){back=i;break;}if(back>=0)this.trail.length=back+1;else{this.trail.push(p);if(this.trail.length>4000)this.trail.shift();}}
  const region=this.asset.field.region(p),boundary=(this.asset.manifest.boundaries||[]).filter(b=>b.part===region&&distance(p,b.position)<b.range).sort((a,b)=>distance(p,a.position)-distance(p,b.position))[0];
  this.panel.hidden=!boundary;if(!boundary){this.current=0;return false;}
  if(this.current!==boundary.part){
   this.current=boundary.part;const options=this.transfers?.options(region)||[];
   this.title.textContent=options.length?'미세순환 생략 · '+options[0].territory:'탐험 범위 끝';
   this.defaultDetail=options.length?'말초 분지와 모세혈관을 건너 연결 혈관으로 이동합니다.':boundary.continuation;
   this.actions.replaceChildren();this.panel.dataset.transfer=String(!!options.length);
   for(const option of options){
    const button=document.createElement('button'),part=this.asset.manifest.parts.find(p=>p.id===option.to);
    button.textContent=(option.forward?'→ ':'↶ ')+part.name+(option.forward?'':' · 역방향');button.dataset.transferTo=String(option.to);
    button.title=option.omitted+' 생략';button.classList.toggle('is-next',option.to===this.preferred);
    button.onclick=()=>this.onTransfer(option);this.actions.append(button);
   }
  }
  const detail=feedback||this.defaultDetail;if(this.detail.textContent!==detail)this.detail.textContent=detail;
  this.panel.dataset.feedback=String(!!feedback);
  const returnPoint=this.trail.length>4?this.trail[this.trail.length-5]:boundary.returnPoint;
  this.vector.fromArray(returnPoint).sub(this.camera.position).normalize();this.camera.getWorldDirection(this.forward);this.right.set(1,0,0).applyQuaternion(this.camera.quaternion);this.up.set(0,1,0).applyQuaternion(this.camera.quaternion);
  const x=this.vector.dot(this.right),y=this.vector.dot(this.up),z=this.vector.dot(this.forward),where=z<-.2?'뒤쪽':Math.abs(x)>Math.abs(y)&&Math.abs(x)>.3?(x>0?'오른쪽':'왼쪽'):Math.abs(y)>.3?(y>0?'위쪽':'아래쪽'):'앞쪽';
  const text=(this.trail.length>4?'↶ 지나온 통로':'↳ 안쪽 통로')+' · '+where;if(this.direction.textContent!==text)this.direction.textContent=text;return true;
 }
 dispose(){this.panel.remove();this.trail=[];}
}
