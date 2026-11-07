import {AnatomicalRoutes} from './route-guide.js';
import {regionTransitions} from './region-transitions.js';
import {journeyFrame} from './context.js';
const token=(key,id)=>key+':'+id;

// Catalogue-sized graph only. Cross-region edges represent the SAME reviewed
// source vessel/organ, never a fabricated tube between neighbouring organs.
export class JourneyNetwork{
 constructor(manifests,{includeTransfers=true}={}){
  this.manifests=new Map(manifests.map(m=>[m.key,m]));this.nodes=new Map();this.edges=new Map();this.cache=null;
  for(const m of manifests)for(const p of m.parts){const id=token(m.key,p.id);this.nodes.set(id,{key:m.key,id:p.id,part:p});this.edges.set(id,[]);}
  const edge=(from,to,data)=>{if(this.nodes.has(from)&&this.nodes.has(to))this.edges.get(from).push({to,...data});};
  for(const m of manifests){
   const routes=new AnatomicalRoutes(m),flow=new Set((m.flowConnections||[]).map(([a,b])=>a+':'+b));
   for(const [a,next]of routes.neighbors)for(const b of next)edge(token(m.key,a),token(m.key,b),{cost:flow.size&&!flow.has(a+':'+b)?3:1,type:'lumen'});
   if(includeTransfers)for(const link of routes.transfers.links)edge(token(m.key,link.from),token(m.key,link.to),{cost:5,type:'capillary',option:routes.transfers.get(link.from,link.to)});
   for(const p of m.parts)for(const option of regionTransitions(m,p.id)){
    const next=this.manifests.get(option.key),to=next?.parts.find(q=>q.name===option.name);if(!to||journeyFrame(m)!==journeyFrame(next))continue;
    if(option.type==='capillary'){if(includeTransfers&&p.kind==='artery')edge(token(m.key,p.id),token(next.key,to.id),{cost:5,type:'region-capillary',option});}
    else if(p.sourceId&&p.sourceId===to.sourceId&&p.kind===to.kind)edge(token(m.key,p.id),token(next.key,to.id),{cost:.2,type:'region',option});
   }
  }
 }
 tree(key,id){
  const start=token(key,id);if(this.cache?.start===start)return this.cache;
  const distances=new Map([[start,0]]),previous=new Map([[start,null]]),pending=new Set(this.nodes.keys());
  while(pending.size){let at,best=Infinity;for(const n of pending){const d=distances.get(n)??Infinity;if(d<best){best=d;at=n;}}if(!at)break;pending.delete(at);
   for(const edge of this.edges.get(at)||[]){const d=best+edge.cost;if(!pending.has(edge.to)||d>=(distances.get(edge.to)??Infinity))continue;distances.set(edge.to,d);previous.set(edge.to,{from:at,edge});}
  }
  return this.cache={start,distances,previous};
 }
 path(key,id,targetKey,targetId){
  const {previous,start}=this.tree(key,id),end=token(targetKey,targetId);if(!previous.has(end))return null;
  const path=[];for(let at=end;at!==start;){const {from,edge}=previous.get(at);path.push({...this.nodes.get(at),via:edge});at=from;}path.push(this.nodes.get(start));return path.reverse();
 }
 reachable(key,id){return new Set(this.tree(key,id).previous.keys());}
}

// The existing compact guide follows a destination across streamed regions.
export class JourneyNetworkGuide{
 constructor(host,{onStep=()=>{},onStop=()=>{}}={}){
  this.onStep=onStep;this.target=null;this.element=document.createElement('section');this.element.className='journey-route';this.element.hidden=true;this.element.setAttribute('aria-label','목적지 경로 안내');
  this.element.innerHTML='<div role="status"><small></small><strong></strong><span></span></div><button aria-label="경로 안내 종료">×</button>';
  this.element.querySelector('button').onclick=()=>{this.clear();onStop();};host.append(this.element);
 }
 setNetwork(network){this.network=network;}
 select(key,id,part){if(!this.network?.path(key,id,part.key,part.id))return false;this.target={key:part.key,id:part.id};this.current=null;this.update(key,id);return true;}
 update(key,id){if(!this.target||this.current===token(key,id))return;this.current=token(key,id);this.path=this.network.path(key,id,this.target.key,this.target.id);const next=this.path?.[1],target=this.network.nodes.get(token(this.target.key,this.target.id)),arrived=this.path?.length===1;this.element.hidden=false;this.element.dataset.state=arrived?'arrived':this.path?'walking':'unavailable';
  this.element.querySelector('small').textContent=(arrived?'도착 · ':'목적지 · ')+target.part.name;
  this.element.querySelector('strong').textContent=arrived?'목적지에 도착했어요':next?(next.via.type==='region'?'계속 · ':next.via.type.includes('capillary')?'미세순환 생략 → ':'다음 · ')+next.part.name:'연결된 통로가 없어요';
  this.element.querySelector('span').textContent=next?(next.via.type==='region'?'같은 구조를 따라 이동하면 다음 영역으로 이어집니다.':next.via.type.includes('capillary')?'끝에서 전환을 선택하세요.':(this.path.length-1)+'개 연결 남음'):'';
  this.onStep(this.path?.[0],next);
 }
 clear(){this.target=null;this.current=null;this.path=null;this.element.hidden=true;this.onStep(null,null);}
 dispose(){this.clear();this.element.remove();}
}
