import {entranceHints,connectionHint} from './wayfinding.js';
import {CapillaryTransfers} from './capillary-transfers.js';

// Route planning only uses the reviewed anatomical connections. It does not
// invent a geometric shortcut, steer the camera, or change collision clearance.
export class AnatomicalRoutes{
 constructor(manifest,{includeTransfers=true}={}){
  this.transfers=new CapillaryTransfers(includeTransfers?manifest:{...manifest,key:''});
  this.parts=new Map(manifest.parts.map(part=>[part.id,part]));
  this.neighbors=new Map(manifest.parts.map(part=>[part.id,[]]));
  this.flow=new Set((manifest.flowConnections||[]).map(([a,b])=>`${a}:${b}`));
  const hints=entranceHints(manifest);
  for(const [a,b]of manifest.connections){
   if(!this.parts.has(a)||!this.parts.has(b))continue;
   // The mouth/pharynx share reconstructed spaces; they reuse their existing
   // entrance landmarks instead of pretending there is a generated seam.
   if(!connectionHint(manifest,hints,a,b)||!connectionHint(manifest,hints,b,a))continue;
   this.neighbors.get(a).push(b);this.neighbors.get(b).push(a);
  }
  this.clear();
 }
 tree(from){
  const previous=new Map();if(!this.parts.has(from))return previous;
  const queue=[from];previous.set(from,null);
  for(let i=0;i<queue.length;i++)for(const next of this.neighbors.get(queue[i])){
   if(previous.has(next))continue;previous.set(next,queue[i]);queue.push(next);
  }
  return previous;
 }
 directPath(from,to){
  const previous=this.tree(from);if(!previous.has(to))return null;
  const path=[];for(let id=to;id!==null;id=previous.get(id))path.push(id);return path.reverse();
 }
 reachable(from){return new Set([...this.parts.keys()].filter(to=>this.path(from,to)));}
 path(from,to){
  const direct=this.directPath(from,to);if(direct)return direct;
  if(!this.parts.has(from)||!this.parts.has(to)||!this.transfers.links.length)return null;
  // Between disconnected blood spaces, cross only in physiological flow order.
  // Reverse physical travel is allowed, but costs more than forward travel.
  // Reverse capillary transfers remain an explicit exploration action only.
  const distance=new Map([[from,0]]),previous=new Map([[from,null]]),pending=new Set(this.parts.keys());
  while(pending.size){
   const current=[...pending].filter(id=>distance.has(id)).sort((a,b)=>distance.get(a)-distance.get(b))[0];
   if(current===undefined)break;if(current===to){const route=[];for(let id=to;id!==null;id=previous.get(id))route.push(id);return route.reverse();}
   pending.delete(current);
   const edges=this.neighbors.get(current).map(id=>[id,this.flow.has(`${current}:${id}`)?1:6]);
   for(const link of this.transfers.options(current))if(link.forward)edges.push([link.to,4]);
   for(const [next,cost]of edges){const value=distance.get(current)+cost;if(!pending.has(next)||value>=(distance.get(next)??Infinity))continue;distance.set(next,value);previous.set(next,current);}
  }
  return null;
 }
 select(from,to){
  const path=this.path(from,to);if(!path)return false;
  this.target=to;this.current=from;this.route=path;this.arrived=from===to;return true;
 }
 update(region){
  if(this.target===null||this.arrived||this.current===region||!this.parts.has(region))return false;
  this.current=region;this.route=this.path(region,this.target);this.arrived=region===this.target;return true;
 }
 clear(){this.target=null;this.current=null;this.route=null;this.arrived=false;}
 get next(){return this.route?.[1]??null;}
 get transfer(){return this.transfers.get(this.current,this.next);}
 get direction(){return this.next===null?'':this.transfer?.forward||this.flow.has(`${this.current}:${this.next}`)?'혈류 방향':this.flow.has(`${this.next}:${this.current}`)?'혈류 반대 방향':'';}
}

export class JourneyRouteGuide{
 constructor(host,manifest,{onStep=()=>{},onStop=()=>{}}={}){
  this.routes=new AnatomicalRoutes(manifest);this.onStep=onStep;
  this.element=document.createElement('section');this.element.className='journey-route';this.element.hidden=true;
  this.element.setAttribute('aria-label','목적지 경로 안내');
  this.element.innerHTML='<div role="status"><small></small><strong></strong><span></span></div><button aria-label="경로 안내 종료">×</button>';
  this.title=this.element.querySelector('small');this.next=this.element.querySelector('strong');this.detail=this.element.querySelector('span');
  this.element.querySelector('button').onclick=()=>{this.clear();onStop();};host.append(this.element);
 }
 select(from,to){if(!this.routes.select(from,to))return false;this.render();return true;}
 update(region){if(this.routes.update(region))this.render();}
 render(){
  const route=this.routes;
  this.element.hidden=route.target===null;if(this.element.hidden)return;
  this.element.dataset.target=String(route.target);this.element.dataset.next=String(route.next??'');
  this.element.dataset.state=route.arrived?'arrived':route.route?'walking':'unavailable';
  this.title.textContent=(route.arrived?'도착 · ':'목적지 · ')+route.parts.get(route.target).name;
  this.next.textContent=route.arrived?'목적지에 도착했어요':route.next!==null?(route.transfer?'미세순환 생략 → ':'다음 · ')+route.parts.get(route.next).name:'연결된 통로가 없어요';
  this.detail.textContent=route.next!==null?`${route.transfer?route.transfer.territory+' · 끝에서 전환 선택':(route.route.length-1)+'개 연결 남음'}${route.direction?' · '+route.direction:''}`:'';
  this.onStep(route.current,route.next,route.transfer);
 }
 clear(){this.routes.clear();this.element.hidden=true;delete this.element.dataset.target;delete this.element.dataset.next;delete this.element.dataset.state;this.onStep(null,null);}
 dispose(){this.element.remove();this.routes.clear();}
}
