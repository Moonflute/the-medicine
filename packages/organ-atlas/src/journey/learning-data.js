// Short educational descriptions, kept separate from geometry and UI.
// Source mesh IDs stay in the manifest; related notes use the host's search.
export const journeyModes=[
 {id:'upper',label:'입 · 소화관 · 기관지',start:1},
 {id:'circulation',label:'심장 · 동맥 · 정맥',start:1},
 {id:'urinary',label:'신우 · 요관 · 방광',start:1},
 {id:'biliary',label:'담낭 · 담도 · 췌관',start:1},
 ...['arm-right','arm-left','leg-right-artery','leg-right-vein','leg-left-artery','leg-left-vein'].map(id=>({id,label:(id.includes('right')?'우측 ':'좌측 ')+(id.startsWith('arm')?'상지 혈관':id.endsWith('artery')?'하지 동맥':'하지 정맥'),start:1})),
 {id:'brain',label:'뇌 · 피질 걷기 · 내부 해부',start:1}
];
export const journeyKind=manifest=>manifest.kind||(manifest.key==='upper'?'digestive-airway':manifest.key==='veins'?'vein':'artery');
export function journeyStartGroups(manifest){
 if(manifest.parts.every(p=>p.group)){const groups=new Map();for(const p of manifest.parts){if(!groups.has(p.group))groups.set(p.group,[]);groups.get(p.group).push(p);}return [...groups].map(([label,parts])=>({label,parts}));}
 const groups=manifest.key==='upper'?[['입 · 인두',[1,2]],['소화관',[3,4,5,10,11,12,13,14]],['기도',[6,7,8,9]]]
  :manifest.key==='vessels'?[['대동맥',[1,2,3,9]],['관상동맥',[30,31,32]],['머리 · 상지',[4,7,8,5,6]],['복강 · 장간막',[10,17,18,19,20,21,11,12]],['신장',[15,22,23,16,24,25]],['골반',[13,28,29,14,26,27]]]
  :[['하대정맥 · 간정맥',[1,2,11]],['신장',[3,4]],['골반',[5,7,8,6,9,10]]];
 return groups.map(([label,ids])=>({label,parts:ids.map(id=>manifest.parts.find(p=>p.id===id))}));
}
const circulation='https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways';
const digestion='https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5-the-small-and-large-intestines';
const airway='https://www.training.seer.cancer.gov/anatomy/respiratory/passages/bronchi.html';
const upper={
 1:['음식이 들어와 씹히고 침과 섞이는 공간입니다. 뒤쪽으로 인두와 이어집니다.','구강','https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus'],
 2:['소화관과 기도로 향하는 경로가 만납니다. 앞쪽 후두 입구와 뒤쪽 식도 입구를 구별해 보세요.','연하곤란','https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus'],
 3:['인두에서 위로 음식물을 운반하는 근육성 관입니다. 기관과 벽을 사이에 둔 별도 통로입니다.','위식도역류질환','https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus'],
 4:['내용물을 저장하고 혼합하는 공간입니다. 출구는 유문을 거쳐 십이지장으로 이어집니다.','위궤양','https://openstax.org/books/anatomy-and-physiology-2e/pages/23-4-the-stomach'],
 5:['위 다음의 첫 소장 구간입니다. 이후 공장으로 이어지며 담즙과 췌장액이 소화에 참여합니다.','십이지장 궤양',digestion],
 6:['인두와 기관 사이의 기도입니다. 후두개 주변에서 식도 입구와 방향을 비교할 수 있습니다.','후두',airway],
 7:['좌우 주기관지로 갈라지는 기도입니다. 분기부에서 각각 다른 폐로 이어집니다.','기관',airway],
 8:['왼쪽 폐로 들어가는 주기관지입니다. 좌상엽·좌하엽기관지와 원본의 분절 가지까지 이어집니다.','천식',airway],
 9:['오른쪽 폐로 들어가는 주기관지입니다. 우상엽기관지가 갈라지고, 중간기관지는 중엽·하엽으로 이어집니다.','천식',airway],
 10:['소화와 흡수에 관여하는 소장입니다. 이 원본은 공장·회장의 정확한 경계를 나누지 않습니다.','크론병',digestion],
 11:['회장에서 넘어온 내용물이 맹장으로 들어와 상행결장으로 이어집니다.','대장 용종',digestion],
 12:['오른쪽 결장굽이에서 왼쪽 결장굽이로 이어지는 대장 구간입니다.','대장 용종',digestion],
 13:['왼쪽 복부에서 골반 방향으로 이어집니다. 원본의 하행부와 구불결장 구간을 묶어 표시합니다.','대장 용종',digestion],
 14:['골반 중앙의 원위부 대장입니다. 이 자료로 직장·항문관의 정확한 경계를 정하지 않았습니다.','직장',digestion]
};
export function structureLesson(manifest,part){
 if(part.description)return {description:part.description,query:part.korean,reference:part.reference||manifest.references[0]};
 if(journeyKind(manifest)==='circulation'){
  if(part.lessonKey)return structureLesson({key:part.lessonKey,kind:part.kind},{...part,id:part.lessonId});
  const descriptions={
   'Right atrium':'상·하대정맥과 관상정맥동의 혈액이 모이는 우심방입니다. 삼첨판 통과부를 거쳐 우심실로 이어집니다.',
   'Right ventricle':'우심방에서 받은 혈액이 폐동맥판 통과부와 폐동맥줄기를 거쳐 폐로 향합니다. 좌심실과는 중격으로 분리되어 있습니다.',
   'Left atrium':'좌우 폐의 네 폐정맥에서 돌아온 산소화된 혈액이 모입니다. 승모판 통과부를 거쳐 좌심실로 이어집니다.',
   'Left ventricle':'좌심방에서 받은 혈액이 대동맥판 통과부를 거쳐 대동맥과 전신 동맥으로 이어집니다. 우심실과 직접 통하지 않습니다.',
   'Pulmonary trunk':'우심실에서 나온 혈액이 우·좌폐동맥으로 갈라지는 줄기입니다. 폐 모세혈관망 이후 폐정맥으로 돌아오지만, 이 자료에는 모세혈관망이 없습니다.',
   'Right pulmonary artery':'폐동맥줄기에서 오른쪽 폐로 향하는 가지입니다. 이 원본의 근위부까지 이동할 수 있으며, 폐정맥으로 직접 연결하지 않습니다.',
   'Left pulmonary artery':'폐동맥줄기에서 왼쪽 폐로 향하는 가지입니다. 이 원본의 근위부까지 이동할 수 있으며, 폐정맥으로 직접 연결하지 않습니다.',
   'Superior vena cava':'머리·목·상지의 정맥혈을 우심방으로 전달합니다. 팔머리정맥에서 우심방 안까지 같은 공간으로 이어집니다.',
   'Inferior vena cava — upper segment':'복부·골반·하지에서 돌아오는 혈액이 우심방으로 들어가는 하대정맥 상부입니다. 상부·하부의 구분은 원본 분할 기준입니다.',
   'Coronary sinus':'심장 근육의 정맥혈을 모아 우심방으로 전달합니다. 관상동맥과 직접 연결된 통로가 아니며, 심장정맥의 세부 분지는 생략되어 있습니다.',
   'Ascending aorta':'좌심실에서 대동맥판 통과부를 거쳐 이어집니다. 근위부에서 관상동맥이 갈라지고, 위로 대동맥활과 전신 동맥 분지가 이어집니다.'
  };
  return {description:descriptions[part.name]||'폐에서 산소화된 혈액을 좌심방으로 전달하는 폐정맥입니다. 폐 모세혈관망과 더 작은 폐내 분지는 생략되어 있습니다.',query:part.korean,reference:'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy'};
 }
 if(manifest.key==='upper'&&part.id>=15){
  const branches=manifest.connections.some(([parent])=>parent===part.id);
  const description=part.id===15?'우상엽기관지가 분지한 뒤 이어지는 중간기관지입니다. 우중엽·우하엽기관지로 이어집니다.':part.id===36?'좌하엽의 기저기관지 묶음입니다. 이 원본은 공통 줄기가 여러 분절 이름에 걸쳐 있어, 실제 형상을 유지하고 개별 분절 경계를 임의로 나누지 않았습니다.':part.group+'에 공기를 전달하는 기관지입니다. '+(branches?'상위 기관지와 다음 분지의 연결 방향을 살펴보세요.':'상위 기관지로 돌아갈 수 있습니다. 이후 세기관지·폐포는 포함하지 않습니다.');
  return {description,query:'기관지',reference:airway};
 }
 if(journeyKind(manifest)==='airway'){
  const hasBranches=manifest.connections.some(([parent])=>parent===part.id);
  let description=part.group+'에 공기를 전달하는 기관지입니다. '+(hasBranches?'상위 기관지와 이어지는 입구 및 다음 분지를 살펴보세요.':'상위 기관지로 이어지는 입구를 살펴보세요. 이후의 더 작은 가지는 이 탐험에 포함하지 않았습니다.');
  if(part.id===1)description='기관은 기관분기부에서 좌·우주기관지로 갈라집니다. 이 영역에서는 같은 원본 표본의 엽기관지와 분절기관지까지 이어집니다.';
  if(part.id===2)description='좌주기관지는 좌상엽기관지와 좌하엽기관지로 나뉩니다. 이후 원본에 구분된 좌측 가지를 탐험할 수 있습니다.';
  if(part.id===3)description='우주기관지에서 우상엽기관지가 갈라지며, 중간기관지는 중엽·하엽 방향으로 이어집니다.';
  if(part.id===7)description='우상엽기관지가 분지한 뒤 이어지는 중간기관지입니다. 우중엽·우하엽기관지로 이어집니다.';
  if(part.id===10)description='원본이 좌첨기관지로 구분한 가지입니다. 별도 후분절 가지나 보편적인 B1/B2 경계를 임의로 추가하지 않았습니다.';
  if(part.id===12)description='좌상엽의 설상부로 이어지며 상·하설상기관지로 나뉩니다.';
  if(part.id===16)description='이 원본에서 따로 구분한 좌하엽 내측기저 가지입니다. 좌측 기저기관지의 분절 구분은 개인에 따라 다를 수 있습니다.';
  return {description,query:'기관지',reference:airway};
 }
 if(manifest.key==='thoracic-veins'){
  const n=part.name.toLowerCase();
  const description=n.includes('vena cava')?'머리·목·상지에서 돌아오는 혈액을 우심방으로 전달하는 상대정맥입니다. 이 모델은 심방 연결 이전의 제공 구간까지 포함합니다.':n.includes('brachiocephalic')?'같은 쪽 내경정맥과 쇄골하정맥이 합류하는 팔머리정맥입니다. 좌우 팔머리정맥은 상대정맥으로 합류합니다.':n.includes('jugular')?'머리와 목의 깊은 부위에서 돌아오는 혈액을 운반합니다. 쇄골하정맥과 만나 팔머리정맥으로 이어집니다.':n.includes('subclavian')?'액와정맥에서 이어져 상지의 혈액을 운반하며 내경정맥과 합류합니다.':'상지에서 돌아오는 혈액을 쇄골하정맥으로 전달합니다. 원본의 제공 구간까지만 탐험합니다.';
  return {description,query:n.includes('vena cava')?'상대정맥 증후군':part.korean,reference:circulation};
 }
 if(manifest.key==='upper'){
  const [description,query,reference]=upper[part.id];return {description,query,reference};
 }
 const n=part.name.toLowerCase(),vein=journeyKind(manifest)==='vein';let description,query;
 if(vein){
  if(n.includes('vena cava')){description='하체와 복부에서 돌아오는 정맥혈이 심장 방향으로 모이는 큰 정맥입니다. 상부·하부 표시는 원본의 분할 기준입니다.';query='하대정맥';}
  else if(n.includes('renal')){description='신장에서 나온 정맥혈이 하대정맥으로 합류합니다. 동맥 탐험에서 본 신동맥과 별도의 통로입니다.';query='신정맥 혈전증';}
  else if(n.includes('hepatic')){description='간정맥이 하대정맥으로 합류하는 짧은 구간입니다. 간문맥과는 다른 계통이며 간내 세부 분지는 생략되어 있습니다.';query='버드 키아리 증후군';}
  else{description=n.includes('internal')?'골반의 정맥혈이 총장골정맥으로 모입니다.':n.includes('external')?'하지에서 돌아오는 정맥혈이 총장골정맥 방향으로 이어집니다.':'내·외장골정맥이 합류하며, 좌우 총장골정맥은 하대정맥으로 이어집니다.';query='심부 정맥 혈전증';}
 }else{
  if(n.includes('coronary')||n.includes('interventricular')){description=n.includes('interventricular')?'좌관상동맥에서 이어져 앞심실사이고랑을 따라 주행하는 좌전하행동맥입니다. 더 작은 중격·대각분지는 이번 범위에 포함하지 않습니다.':n.includes('right')?'상행대동맥 기시부에서 나와 심장 오른쪽의 방실고랑을 따라 주행하는 우관상동맥입니다.':'상행대동맥에서 기시하는 좌관상동맥 원본 구간입니다. 이 자료의 표면에서 좌주간부와 회선동맥의 경계를 임의로 나누지 않았습니다.';query='관상동맥질환';}
  else if(n.includes('renal')){description=n.includes('division')?'신동맥에서 나뉜 가지입니다. 신장 내부의 더 작은 분절동맥까지 모두 표현한 것은 아닙니다.':'복부대동맥에서 갈라져 신장으로 혈액을 보냅니다. 앞·뒤 가지로 이어지는 분지를 살펴보세요.';query='신동맥 협착';}
  else if(n.includes('iliac')){description=n.includes('internal')?'골반으로 향하는 총장골동맥의 가지입니다.':n.includes('external')?'하지로 이어지는 총장골동맥의 가지입니다. 제공 범위 이후에는 대퇴동맥으로 이어집니다.':'복부대동맥의 끝에서 좌우로 갈라지며 내·외장골동맥으로 나뉩니다.';query='말초동맥질환';}
  else if(n.includes('hepatic')){description=n.includes('common')?'복강동맥의 가지입니다. 고유간동맥과 위십이지장동맥으로 이어집니다.':'간으로 향하는 동맥입니다. 간내 세부 혈관 전체는 포함하지 않습니다.';query='간동맥';}
  else if(n.includes('splenic')){description='복강동맥에서 갈라져 비장으로 향합니다. 원본의 굽은 주행 경로를 따라갈 수 있습니다.';query='비장';}
  else if(n.includes('gastric')){description='복강동맥의 가지로 위의 소만 쪽에 혈액을 공급합니다.';query='위';}
  else if(n.includes('gastroduodenal')){description='총간동맥에서 갈라져 위·십이지장 주변으로 향합니다.';query='십이지장 궤양';}
  else if(n.includes('celiac')){description='복부대동맥의 앞쪽 가지입니다. 좌위동맥·비장동맥·총간동맥으로 나뉩니다.';query='복강동맥';}
  else if(n.includes('mesenteric')){description=n.includes('superior')?'장으로 혈액을 보내는 복부대동맥의 가지입니다. 이 탐험에는 근위부만 포함합니다.':'원위부 대장 쪽으로 혈액을 보내는 복부대동맥의 가지입니다. 이 탐험에는 근위부만 포함합니다.';query='장간막 허혈';}
  else if(n.includes('carotid')){description='머리와 목으로 향하는 총경동맥입니다. 우측은 팔머리동맥에서, 좌측은 대동맥활에서 시작합니다.';query='경동맥 협착';}
  else if(n.includes('subclavian')){description='상지로 향하는 주요 동맥입니다. 이 모델에서는 쇄골하동맥의 제공 구간까지 탐험합니다.';query='쇄골하동맥';}
  else if(n.includes('brachiocephalic')){description='대동맥활에서 시작해 우총경동맥과 우쇄골하동맥으로 갈라집니다.';query='대동맥';}
  else{description=n.includes('arch')?'상행대동맥과 흉부대동맥을 잇는 굽이입니다. 머리·목·상지로 향하는 주요 가지가 나옵니다.':n.includes('abdominal')?'복부 장기와 골반으로 혈액을 보내는 대동맥 구간입니다.':'심장에서 나온 혈액이 전신으로 향하는 큰 동맥의 한 구간입니다.';query='대동맥';}
 }
 return {description,query,reference:circulation};
}

export const clinicalExamples={
 plaque:{id:'plaque',label:'죽상경화 플라크',english:'Atherosclerotic plaque',description:'동맥벽의 국소 플라크가 안쪽으로 돌출되어 통로가 좁아지는 형태를 보여 줍니다.',query:'죽상경화증',reference:'https://www.nhlbi.nih.gov/health/atherosclerosis',solid:true},
 thrombus:{id:'thrombus',label:'정맥 내 혈전',english:'Venous thrombus',description:'정맥 안의 혈전이 통로 일부를 차지하는 모식 예시입니다. 이동·색전 과정은 재현하지 않습니다.',query:'심부 정맥 혈전증',reference:'https://www.nhlbi.nih.gov/health/venous-thromboembolism',solid:true},
 polyp:{id:'polyp',label:'용종',english:'Polyp',description:'벽에서 안쪽으로 돌출되는 용종의 형태 예시입니다. 겉모양만으로 조직형이나 악성 여부를 판단할 수 없습니다.',query:'대장 용종',reference:'https://www.niddk.nih.gov/health-information/digestive-diseases/colon-polyps/definition-facts',solid:true},
 ulcer:{id:'ulcer',label:'궤양 · 표면 표시',english:'Peptic ulcer',description:'위·십이지장 벽의 국소 궤양을 색과 표면 음영으로 표시합니다. 실제 결손 깊이나 천공을 재구성한 것은 아닙니다.',query:'소화성 궤양',reference:'https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers/definition-facts',solid:false},
 mucus:{id:'mucus',label:'점액 축적',english:'Mucus accumulation',description:'기관지 안에 점액이 쌓여 통로가 줄어드는 형태를 보여 줍니다. 천식의 염증·근육 수축 전체를 나타내지는 않습니다.',query:'천식',reference:'https://www.nhlbi.nih.gov/health/asthma/causes',solid:true}
};
export function examplesFor(manifest,part){
 if(['urinary','biliary','brain'].includes(journeyKind(manifest)))return [];
 if(journeyKind(manifest)==='circulation'){
  if(part.lessonKey)return examplesFor({key:part.lessonKey,kind:part.kind},{...part,id:part.lessonId});
  return part.name==='Ascending aorta'?[clinicalExamples.plaque]:['Superior vena cava','Inferior vena cava — upper segment'].includes(part.name)?[clinicalExamples.thrombus]:[];
 }
 if(journeyKind(manifest)==='artery')return [clinicalExamples.plaque];
 if(journeyKind(manifest)==='vein')return [clinicalExamples.thrombus];
 if(journeyKind(manifest)==='airway'||(part.system==='respiratory'&&part.id!==6))return [clinicalExamples.mucus];
 if([4,5].includes(part.id))return [clinicalExamples.ulcer];
 if(part.id>=11&&part.id<=14)return [clinicalExamples.polyp];
 if([7,8,9].includes(part.id))return [clinicalExamples.mucus];
 return [];
}
export function connectedStructures(manifest,id){
 return manifest.connections.filter(([a,b])=>a===id||b===id).map(([a,b])=>{
  const next=manifest.parts.find(p=>p.id===(a===id?b:a));
  const kind=journeyKind(manifest),respiratory=manifest.parts.find(p=>p.id===id).system==='respiratory'&&next.system==='respiratory',label=kind==='circulation'?(manifest.flowConnections.some(([from,to])=>from===id&&to===next.id)?'혈류 나가는 방향':'혈류 들어오는 방향'):kind==='vein'?(b===id?'유출':'유입'):kind==='artery'?(b===id?'기시':'분지'):kind==='airway'||respiratory?(b===id?'상위 기도':'분지'):'연결';
  return {id:next.id,name:next.name,label};
 });
}
