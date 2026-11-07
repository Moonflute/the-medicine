import {loadJourneyManifest} from './assets.js';
import {journeyModes} from './learning-data.js';
import {destinationSystems,journeyDestinations,filterDestinations} from './destinations.js';

export class JourneyDestinationPanel{
 constructor(dialog,{onToggle,onTravel,onReturn}){
  this.onToggle=onToggle;this.onTravel=onTravel;this.onReturn=onReturn;
  this.manifests=new Map();this.entries=[];this.disposed=false;this.pending=false;
  this.element=document.createElement('section');this.element.id='journey-destinations';
  this.element.className='journey-destinations';this.element.hidden=true;
  this.element.setAttribute('aria-labelledby','journey-destinations-title');
  this.element.innerHTML=`<div class="journey-destinations-head"><h2 id="journey-destinations-title">부위 이동</h2><button class="journey-destinations-close" aria-label="부위 이동 닫기">×</button></div>
   <div class="journey-destination-search"><input type="search" placeholder="장기·부위 검색" aria-label="이동할 부위 검색" autocomplete="off" spellcheck="false"><select aria-label="이동할 부위의 계통"><option value="">전체 계통</option>${destinationSystems.map(s=>`<option value="${s.id}">${s.label}</option>`).join('')}</select></div>
   <button class="journey-return" hidden></button><p class="journey-destination-count" role="status"></p>
   <div class="journey-destination-results"></div><div class="journey-destination-error" hidden><span></span><button>다시 시도</button></div>`;
  dialog.append(this.element);
  this.input=this.element.querySelector('input');this.select=this.element.querySelector('select');
  this.results=this.element.querySelector('.journey-destination-results');
  this.count=this.element.querySelector('.journey-destination-count');
  this.returnButton=this.element.querySelector('.journey-return');
  this.error=this.element.querySelector('.journey-destination-error');
  this.element.querySelector('.journey-destinations-close').onclick=()=>onToggle(false);
  this.returnButton.onclick=()=>onReturn();this.error.querySelector('button').onclick=()=>this.load();
  this.input.oninput=this.select.onchange=()=>this.render();
  this.input.onkeydown=e=>{
   const buttons=this.results.querySelectorAll('button');
   if(e.key==='ArrowDown'&&buttons.length){e.preventDefault();buttons[0].focus();}
   if(e.key==='Enter'&&!e.isComposing&&buttons.length===1){e.preventDefault();buttons[0].click();}
  };
  this.element.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();onToggle(false);}};
 }
 get hidden(){return this.element.hidden;}
 setOpen(value,current,previous){
  this.element.hidden=!value;
  if(!value)return;
  this.current=current;this.returnButton.hidden=!previous;
  this.returnButton.textContent=previous?'↶ 이전 위치 · '+previous.name:'';
  this.render();this.load();
  // Do not summon a mobile keyboard until the user actually taps search.
  this.element.querySelector(matchMedia('(pointer:fine)').matches?'input':'.journey-destinations-close').focus({preventScroll:true});
 }
 async load(){
  if(this.pending||this.manifests.size===journeyModes.length)return;
  this.pending=true;this.element.setAttribute('aria-busy','true');
  this.error.hidden=true;if(!this.entries.length)this.count.textContent='부위 목록을 불러오는 중…';
  const missing=journeyModes.filter(mode=>!this.manifests.has(mode.id));
  const results=await Promise.allSettled(missing.map(mode=>loadJourneyManifest(mode.id)));
  if(this.disposed)return;
  results.forEach((result,i)=>{if(result.status==='fulfilled')this.manifests.set(missing[i].id,result.value);});
  this.entries=journeyDestinations(journeyModes.flatMap(mode=>this.manifests.has(mode.id)?[this.manifests.get(mode.id)]:[]));
  this.pending=false;this.element.removeAttribute('aria-busy');
  this.error.hidden=results.every(result=>result.status==='fulfilled');
  this.error.querySelector('span').textContent=this.entries.length?'일부 영역 목록을 불러오지 못했어요.':'부위 목록을 불러오지 못했어요.';
  this.render();
 }
 render(){
  const matches=filterDestinations(this.entries,this.input.value,this.select.value),groups=new Map();
  for(const system of destinationSystems)for(const part of matches.filter(p=>p.system===system.id)){
   const label=system.label+' · '+part.group;if(!groups.has(label))groups.set(label,[]);groups.get(label).push(part);
  }
  this.results.replaceChildren();
  this.count.textContent=this.pending&&!this.entries.length?'부위 목록을 불러오는 중…':`${matches.length}개 내부 구간`;
  for(const [label,parts]of groups){
   const group=document.createElement('section'),title=document.createElement('h3');title.textContent=label;group.append(title);
   for(const part of parts){
    const button=document.createElement('button'),name=document.createElement('strong'),detail=document.createElement('span');
    button.dataset.destination=part.key+':'+part.id;name.textContent=part.name;detail.textContent=part.korean;
    if(this.current?.key===part.key&&this.current.id===part.id){button.setAttribute('aria-current','location');detail.textContent+=' · 현재 위치';}
    button.append(name,detail);button.onclick=()=>this.onTravel(part);group.append(button);
   }
   this.results.append(group);
  }
  if(!matches.length&&this.entries.length){const empty=document.createElement('p');empty.textContent='해당하는 내부 탐험 부위가 없어요.';this.results.append(empty);}
 }
 dispose(){this.disposed=true;this.element.remove();this.manifests.clear();}
}
