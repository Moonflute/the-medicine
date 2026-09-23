export const pathologyStageOrder=Object.freeze(['normal','early','established','advanced']);

const sources={
 dilated:'https://www.nhlbi.nih.gov/health/cardiomyopathy/types',
 pneumonia:'https://www.nhlbi.nih.gov/health/pneumonia',
 hydronephrosis:'https://medlineplus.gov/ency/article/000506.htm',
 steatosis:'https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash',
 bph:'https://www.ncbi.nlm.nih.gov/books/NBK279291/'
};

const stage=(id,label,description,source,parameters)=>({id,label,description,source,parameters});
const standard=(source,descriptions,{deformation=[0,.3,.65,1],motion=[1,.9,.65,.4]}={})=>[
 stage('normal','Normal · 정상',descriptions[0],source,{effectIntensity:0,deformationScale:0,motionScale:1}),
 stage('early','Early · 초기',descriptions[1],source,{effectIntensity:.32,deformationScale:deformation[1],motionScale:motion[1]}),
 stage('established','Established · 확립',descriptions[2],source,{effectIntensity:.68,deformationScale:deformation[2],motionScale:motion[2]}),
 stage('advanced','Advanced · 진행',descriptions[3],source,{effectIntensity:1,deformationScale:deformation[3],motionScale:motion[3]})
];

// These are qualitative teaching states, not universal clinical stages or
// severity grades.  Each profile is limited to morphology already represented
// by the shipped target meshes.
export const pathologyStageProfiles=Object.freeze({
 'heart:dilated':{
  defaultStageId:'established',source:sources.dilated,
  caveat:'좌심실 확장 표현 단계이며 심부전의 임상 단계, 박출률 또는 예후 등급이 아닙니다.',
  stages:standard(sources.dilated,[
   '기준 좌심실 크기와 개념적 수축 움직임을 표시합니다.',
   '초기 심실 재형성을 약하게 표시합니다. 초기 확장성 심근병증에서는 확장이 뚜렷하지 않을 수 있습니다.',
   '좌심실 확장과 수축 움직임 감소를 함께 표시합니다.',
   '더 뚜렷한 좌심실 확장을 표시합니다. 벽 얇아짐, 판막 역류와 혈전은 재현하지 않습니다.'
  ])
 },
 'lungs:pneumonia':{
  defaultStageId:'established',source:sources.pneumonia,
  caveat:'우하폐구역의 염증·경화 강조 단계이며 원인, 산소화 또는 임상 중증도 등급이 아닙니다.',
  stages:standard(sources.pneumonia,[
   '기준 우하폐구역을 병태 색 변화 없이 표시합니다.',
   '국소 폐포 염증과 액체 축적 가능 부위를 약하게 강조합니다.',
   '선택 폐구역의 경화 범위를 뚜렷하게 강조합니다.',
   '같은 폐구역의 병태 강조를 최대로 표시합니다. 다른 엽으로의 파급은 생성하지 않습니다.'
  ],{deformation:[0,0,0,0],motion:[1,.95,.85,.7]})
 },
 'kidneys:hydronephrosis':{
  defaultStageId:'established',source:sources.hydronephrosis,
  caveat:'집합계 확장의 교육용 연속 표현이며 초음파 등급이나 폐쇄 원인 판정이 아닙니다.',
  stages:standard(sources.hydronephrosis,[
   '기준 신우·신배 형태를 표시합니다.',
   '신우 중심의 가벼운 확장을 개념적으로 표시합니다.',
   '신우와 신배의 확장을 함께 표시합니다.',
   '더 큰 집합계 확장을 표시합니다. 신실질 얇아짐과 기능 저하는 재현하지 않습니다.'
  ],{motion:[1,1,1,1]})
 },
 'liver:steatosis':{
  defaultStageId:'established',source:sources.steatosis,
  caveat:'간 실질의 지방 축적을 색으로만 나타낸 표현 단계이며 조직학적 지방증 등급이나 NASH 단계가 아닙니다.',
  stages:standard(sources.steatosis,[
   '기준 간 실질 색을 표시합니다.',
   '간 실질의 지방 축적 가능성을 옅은 색 변화로 표시합니다.',
   '간 전반의 지방 축적을 더 뚜렷한 색 변화로 표시합니다.',
   '색 변화를 최대로 표시합니다. 염증, 섬유화와 간경변은 재현하지 않습니다.'
  ],{deformation:[0,0,0,0],motion:[1,1,1,1]})
 },
 'prostate:bph':{
  defaultStageId:'established',source:sources.bph,
  caveat:'이행대 확대의 교육용 연속 표현이며 전립선 용적, 증상 점수 또는 요로 폐쇄 등급이 아닙니다.',
  stages:standard(sources.bph,[
   '기준 이행대 크기와 전립선 요도의 위치 관계를 표시합니다.',
   '이행대의 초기 확대를 약하게 표시합니다.',
   '이행대 확대와 전립선 요도의 인접 관계를 뚜렷하게 표시합니다.',
   '더 큰 이행대 확대를 표시합니다. 실제 요도 압박과 방광 변화는 재현하지 않습니다.'
  ],{motion:[1,1,1,1]})
 }
});

export function attachStagedPathology(catalog){
 for(const [key,profile] of Object.entries(pathologyStageProfiles)){
  const [organId,scenarioId]=key.split(':');
  const scenario=catalog[organId]?.find(item=>item.id===scenarioId);
  if(!scenario)continue;
  scenario.stageSchemaVersion=1;
  scenario.defaultStageId=profile.defaultStageId;
  scenario.stageCaveat=profile.caveat;
  scenario.stages=profile.stages.map(item=>({...item,parameters:{...item.parameters}}));
  scenario.references=[...new Set([...(scenario.references||[]),profile.source])];
 }
 return catalog;
}

export function pathologyStageById(scenario,stageId){
 if(!scenario?.stages?.length)return null;
 return scenario.stages.find(item=>item.id===stageId)||scenario.stages.find(item=>item.id===scenario.defaultStageId)||scenario.stages[0];
}

export function resolvePathologyStage(scenario,stageId){
 const stage=pathologyStageById(scenario,stageId);
 if(!stage)return scenario;
 const deformation=stage.parameters.deformationScale??1;
 const resolved={
  ...scenario,
  stageId:stage.id,
  stageLabel:stage.label,
  stageDescription:stage.description,
  stageSource:stage.source,
  stageParameters:{...stage.parameters},
  change:stage.description,
  recommendedIntensity:stage.parameters.effectIntensity
 };
 if(scenario.kind==='expand')resolved.amount=(scenario.amount||0)*deformation;
 if(scenario.kind==='opacity'&&Number.isFinite(stage.parameters.opacity))resolved.amount=stage.parameters.opacity;
 return resolved;
}

export function normalizePathologyStageState(scenario,state={}){
 const stage=pathologyStageById(scenario,state.stageId);
 if(!stage)return {...state};
 const fallback=stage.parameters.effectIntensity??.65;
 const supplied=Number(state.intensity);
 return {...state,stageId:stage.id,intensity:Number.isFinite(supplied)?Math.min(1,Math.max(0,supplied)):fallback};
}
