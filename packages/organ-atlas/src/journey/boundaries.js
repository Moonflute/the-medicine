import * as T from 'three';

// Scope boundaries describe missing data, never an anatomical obstruction.
// Guidance uses the recent traveled path and does not rotate/teleport the view.
export class JourneyBoundaryGuide{
 constructor(host,asset,camera){
  this.asset=asset;this.camera=camera;this.trail=[];this.vector=new T.Vector3();this.forward=new T.Vector3();this.right=new T.Vector3();this.up=new T.Vector3();
  this.panel=document.createElement('div');this.panel.className='journey-boundary';this.panel.hidden=true;this.panel.setAttribute('role','status');
  const title=document.createElement('strong');title.textContent='탐험 범위 끝';this.detail=document.createElement('p');this.direction=document.createElement('span');this.panel.append(title,this.detail,this.direction);host.append(this.panel);this.reset();
 }
 reset(){this.trail=[this.camera.position.toArray()];this.current=0;this.panel.hidden=true;}
 update(){
  const p=this.camera.position.toArray(),last=this.trail.at(-1),distance=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));
  if(distance(p,last)>.004){let back=-1;for(let i=this.trail.length-3;i>=Math.max(0,this.trail.length-128);i--)if(distance(p,this.trail[i])<.003){back=i;break;}if(back>=0)this.trail.length=back+1;else{this.trail.push(p);if(this.trail.length>4000)this.trail.shift();}}
  const region=this.asset.field.region(p),boundary=(this.asset.manifest.boundaries||[]).filter(b=>b.part===region&&distance(p,b.position)<b.range).sort((a,b)=>distance(p,a.position)-distance(p,b.position))[0];
  this.panel.hidden=!boundary;if(!boundary){this.current=0;return false;}
  if(this.current!==boundary.part){this.current=boundary.part;this.detail.textContent=boundary.continuation;}
  const returnPoint=this.trail.length>4?this.trail[this.trail.length-5]:boundary.returnPoint;
  this.vector.fromArray(returnPoint).sub(this.camera.position).normalize();this.camera.getWorldDirection(this.forward);this.right.set(1,0,0).applyQuaternion(this.camera.quaternion);this.up.set(0,1,0).applyQuaternion(this.camera.quaternion);
  const x=this.vector.dot(this.right),y=this.vector.dot(this.up),z=this.vector.dot(this.forward),where=z<-.2?'뒤쪽':Math.abs(x)>Math.abs(y)&&Math.abs(x)>.3?(x>0?'오른쪽':'왼쪽'):Math.abs(y)>.3?(y>0?'위쪽':'아래쪽'):'앞쪽';
  const text='↶ 지나온 통로 · '+where;if(this.direction.textContent!==text)this.direction.textContent=text;return true;
 }
 dispose(){this.panel.remove();this.trail=[];}
}
