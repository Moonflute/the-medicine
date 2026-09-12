import {additions} from './additions.js';
/** Content is independent of meshes. Replace contentKey through the host app's route resolver. */
export const organs = [
 {id:'brain',name:'뇌',english:'Brain',system:'신경계',color:'#b2a3ca',description:'감각을 해석하고 생각과 움직임을 조율하는 신경계의 중심.',position:'머리 · 두개강',links:[['질환','뇌졸중','stroke'],['검사','뇌 MRI','brain-mri'],['약물','Levetiracetam','levetiracetam'],['개념','중추신경계','central-nervous-system']],states:['normal','inflammation','edema']},
 {id:'lungs',name:'폐',english:'Lungs',system:'호흡기계',color:'#80b6ae',description:'공기와 혈액 사이에서 산소와 이산화탄소를 교환하는 장기.',position:'가슴 · 흉강',links:[['질환','폐렴','pneumonia'],['검사','흉부 X선','chest-xray'],['약물','Salbutamol','salbutamol'],['개념','가스 교환','gas-exchange']],states:['normal','inflammation','edema']},
 {id:'heart',name:'심장',english:'Heart',system:'심혈관계',color:'#cf8078',description:'규칙적인 수축으로 온몸에 혈액을 보내는 순환의 중심.',position:'가슴 · 종격동',links:[['질환','심부전','heart-failure'],['검사','심초음파','echocardiography'],['약물','Furosemide','furosemide'],['개념','혈액 순환','circulation']],states:['normal','inflammation','edema']},
 {id:'liver',name:'간',english:'Liver',system:'소화기계',color:'#b98666',description:'영양소 대사와 담즙 생성 등 다양한 기능을 수행하는 장기.',position:'배 · 우상복부',links:[['질환','간경변증','cirrhosis'],['검사','간기능 검사','liver-panel'],['약물','Entecavir','entecavir'],['개념','간 대사','liver-metabolism']],states:['normal','inflammation','edema']}
];
organs.push(...additions.map(o=>({...o,states:['normal','inflammation','edema']})));
export const stateDefinitions = {
 normal:{label:'기본',tint:null,scale:1,pulse:0},
 inflammation:{label:'염증',tint:'#de6852',scale:1,pulse:.018},
 edema:{label:'부종',tint:'#96a8d6',scale:1.13,pulse:.01}
};
export function createOrganState(){return Object.fromEntries(organs.map(o=>[o.id,{effect:'normal',intensity:.65}]))}
export function validateState(id,effect){return organs.some(o=>o.id===id&&o.states.includes(effect))}

organs.push(...[{"id":"stomach","name":"위","english":"Stomach","system":"소화기계","color":"#c79688","description":"음식을 저장하고 섞어 소화가 진행되도록 하는 장기.","position":"상복부 · 식도와 십이지장 사이","links":[["질환","위염","gastritis"],["검사","위내시경","gastroscopy"]],"overview":false,"states":["normal","inflammation","edema"]},{"id":"esophagus","name":"식도","english":"Esophagus","system":"소화기계","color":"#bd9d92","description":"삼킨 음식이 위로 이동하는 통로.","position":"목에서 가슴을 지나 위로 연결","links":[["질환","역류성 식도염","reflux-esophagitis"],["검사","상부위장관 내시경","upper-endoscopy"]],"overview":false,"states":["normal","inflammation","edema"]}]);
organs.push({id:'mouth',name:'구강·침샘',english:'Mouth & salivary glands',system:'소화기계',color:'#c6958c',description:'혀·치아·입천장과 큰침샘의 위치 관계를 살펴봅니다.',position:'머리 · 구강과 주변 침샘',links:[],states:['normal'],overview:true});
organs.push({id:'tonsils',name:'구개편도',english:'Palatine tonsils',system:'림프·면역계',color:'#bd9aa9',description:'입에서 인두로 이어지는 부근의 좌우 림프조직.',position:'머리 · 구인두 양옆',links:[],states:['normal'],overview:true});
