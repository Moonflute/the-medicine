// These are observation itineraries, not fibre tracts or tunnels in tissue.
const definitions=[
 {id:'cortex',name:'운동·감각 피질',steps:[['brain','Left Precentral gyrus (primary motor cortex)','중심앞이랑의 피질 표면을 둘러보세요.'],['brain','Left Postcentral gyrus','중심뒤이랑으로 위치를 전환해 앞뒤 관계를 비교하세요.'],['brain','Right Precentral gyrus (primary motor cortex)','반대쪽 반구에서 같은 구조를 비교하세요.']]},
 {id:'deep-brain',name:'피질에서 심부 구조로',steps:[['brain','Left Precentral gyrus (primary motor cortex)','피질 표면에서 시작합니다.'],['brain','Corpus callosum','내부 해부로 전환합니다. 뇌 실질 안의 빈 통로가 아닙니다.'],['brain','Left Thalamus','시상과 주변 깊은 구조의 위치를 비교하세요.'],['brain','Left Head of caudate nucleus','꼬리핵 머리의 위치와 형태를 살펴보세요.'],['brain','Left Putamen','조가비핵의 위치를 비교하세요.'],['brain','Left Hippocampus — head','해마 머리를 관찰합니다. 이 순서는 신경 연결 경로가 아닙니다.']]},
 {id:'ventricles',name:'뇌실과 주변 구조',steps:[['brain-csf','Left lateral ventricle','가쪽뇌실 내부를 살펴보세요.'],['brain-csf','Third ventricle','뇌실사이구멍 이후의 셋째뇌실입니다.'],['brain-csf','Cerebral aqueduct','셋째뇌실과 넷째뇌실을 잇는 좁은 수도관입니다.'],['brain-csf','Fourth ventricle','현재 재구성의 마지막 뇌실입니다. 거미막밑공간은 포함하지 않습니다.'],['brain','Left Thalamus','내부 해부로 전환해 뇌실 주변의 뇌 구조를 관찰하세요.']]}
];
export function studyTours(manifests){const map=new Map(manifests.map(m=>[m.key,m]));return definitions.flatMap(t=>{const steps=t.steps.map(([key,name,note])=>{const part=map.get(key)?.parts.find(p=>p.name===name&&p.navigable!==false);return part?{key,id:part.id,name,note}:null;});return steps.every(Boolean)?[{...t,steps}]:[];});}
export function relatedRegions(manifest,part){
 if(manifest.key==='upper'&&part.id===5)return [{key:'duodenum',id:2,label:'담췌관이 열리는 십이지장 · 표본 전환'}];
 if(manifest.key==='duodenum'&&part.kind==='digestive')return [{key:'upper',id:5,label:'입에서 이어지는 소화관 · 표본 전환'}];
 return [];
}
export class JourneyStudyTour{
 constructor(host,{onTravel,onStop}){this.onTravel=onTravel;this.element=document.createElement('section');this.element.className='journey-route journey-study';this.element.hidden=true;this.element.setAttribute('aria-label','해부 구조 관찰 순서');this.element.innerHTML='<div><small></small><strong></strong><span></span><div class="journey-study-actions"><button data-previous>이전</button><button data-next>다음 구조로 이동 →</button></div></div><button data-close aria-label="관찰 순서 종료">×</button>';host.append(this.element);this.element.querySelector('[data-close]').onclick=()=>{this.clear();onStop();};this.element.querySelector('[data-previous]').onclick=()=>this.go(this.index-1);this.element.querySelector('[data-next]').onclick=()=>this.go(this.index+1);}
 async start(tour){this.tour=tour;this.index=-1;return this.go(0);}
 async go(index){if(this.busy||!this.tour||index<0||index>=this.tour.steps.length)return;this.busy=true;this.element.hidden=false;this.element.setAttribute('aria-busy','true');const tour=this.tour;try{const result=await this.onTravel(tour.steps[index]);if(result!==false&&this.tour===tour){this.index=index;this.render();}}finally{this.busy=false;this.element.removeAttribute('aria-busy');}}
 render(){const step=this.tour.steps[this.index];if(!step)return;this.element.querySelector('small').textContent=`관찰 순서 · ${this.index+1}/${this.tour.steps.length} · 위치 전환`;this.element.querySelector('strong').textContent=step.name;this.element.querySelector('span').textContent=step.note;this.element.querySelector('[data-previous]').disabled=this.index===0;this.element.querySelector('[data-next]').disabled=this.index===this.tour.steps.length-1;}
 clear(){this.tour=null;this.element.hidden=true;}
 dispose(){this.clear();this.element.remove();}
}
