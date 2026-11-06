import {structureLesson,examplesFor,connectedStructures,clinicalExamples} from './learning-data.js';

export class JourneyLearningPanel{
 constructor(dialog,{onToggle,onExample,onHighlight}){
  this.onToggle=onToggle;this.onExample=onExample;this.onHighlight=onHighlight;
  this.element=document.createElement('section');this.element.id='journey-learning';this.element.className='journey-learning';this.element.hidden=true;
  this.element.setAttribute('aria-label','현재 구조와 병태');
  this.element.innerHTML=`<div class="journey-learning-head"><b>구조 · 병태</b><button aria-label="구조 설명 닫기">×</button></div>
   <h2></h2><p class="journey-lesson"></p><div class="journey-connections"></div>
   <section class="journey-examples"><label>병태 예시<select aria-label="병태 예시"></select></label>
    <label class="journey-example-size" hidden>예시 크기<input type="range" min="25" max="100" value="65" aria-label="병태 예시 크기"></label>
    <p class="journey-example-description"></p><p class="journey-example-note">현재 시야의 벽에 배치하는 모식 예시 · 크기는 임상 중증도가 아닙니다.</p></section>
   <p class="journey-example-active" hidden></p><div class="journey-lesson-links"><button>관련 문서 ↗</button><a target="_blank" rel="noopener noreferrer">출처 ↗</a></div>`;
  dialog.append(this.element);
  this.element.querySelector('.journey-learning-head button').onclick=()=>onToggle(false);
  this.select=this.element.querySelector('select');this.slider=this.element.querySelector('input');
  this.select.onchange=()=>onExample(clinicalExamples[this.select.value]||null,Number(this.slider.value)/100);
  this.slider.oninput=()=>onExample(clinicalExamples[this.select.value]||null,Number(this.slider.value)/100);
  this.element.querySelector('.journey-lesson-links button').onclick=()=>{
   const example=clinicalExamples[this.select.value],query=example?.query||this.lesson?.query;if(!query)return;
   const proceed=window.dispatchEvent(new CustomEvent('atlas:navigate',{cancelable:true,detail:{kind:'disease',label:query}}));
   if(proceed)window.open(example?.reference||this.lesson.reference,'_blank','noopener,noreferrer');
  };
 }
 get hidden(){return this.element.hidden;}
 setOpen(value){this.element.hidden=!value;if(value)this.element.querySelector('.journey-learning-head button').focus({preventScroll:true});}
 update(manifest,part,active){
  if(!part)return;this.manifest=manifest;this.part=part;this.lesson=structureLesson(manifest,part);
  this.element.querySelector('h2').textContent=part.korean+' · '+part.name;
  this.element.querySelector('.journey-lesson').textContent=this.lesson.description;
  const connections=this.element.querySelector('.journey-connections');connections.replaceChildren();
  for(const next of connectedStructures(manifest,part.id)){
   const button=document.createElement('button');button.textContent=next.label+' · '+next.name;button.title='연결 위치 표시';button.onclick=()=>{this.onToggle(false);this.onHighlight(next.id);};connections.append(button);
  }
  const examples=examplesFor(manifest,part);this.element.querySelector('.journey-examples').hidden=!examples.length;
  this.select.replaceChildren(new Option('정상',''),...examples.map(e=>new Option(e.label,e.id)));
  const matching=active?.part===part.id?active:null;this.select.value=matching?.id||'';this.slider.value=String(Math.round((matching?.amount??.65)*100));
  this.syncExample(active);
 }
 syncExample(active){
  const current=active?.part===this.part?.id?active:null,example=current?clinicalExamples[current.id]:null;
  this.select.value=current?.id||'';if(current)this.slider.value=String(Math.round(current.amount*100));
  this.element.querySelector('.journey-example-size').hidden=!example;
  this.element.querySelector('.journey-example-description').textContent=example?.description||'정상 구조와 국소 변화를 같은 시점에서 비교할 수 있습니다.';
  this.element.querySelector('.journey-example-note').hidden=!example;
  const other=this.element.querySelector('.journey-example-active');other.hidden=!active||!!current;
  other.replaceChildren();if(active&&!current){other.append(document.createTextNode(clinicalExamples[active.id].label+' · '+active.name+' '));const reset=document.createElement('button');reset.textContent='초기화';reset.onclick=()=>this.onExample(null,.65);other.append(reset);}
  const link=this.element.querySelector('.journey-lesson-links a');link.href=example?.reference||this.lesson?.reference||'#';
 }
 dispose(){this.element.remove();}
}
