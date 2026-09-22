// Curated anatomical relationships between meshes that are already present in the
// shipped HRA models. These are deliberately explicit: spatial proximity and
// similar names are never used to infer a medical relationship at runtime.
const HEART_FLOW_SOURCE='https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy';
const AORTA_SOURCE='https://www.ncbi.nlm.nih.gov/books/NBK560486/';
const CORONARY_VEIN_SOURCE='https://www.ncbi.nlm.nih.gov/books/NBK557566/';
const KIDNEY_SOURCE='https://www.ncbi.nlm.nih.gov/books/NBK482385/';

const stage=(label,ids=[],pattern='')=>({label,ids,pattern});
const routes=[
 {
  id:'right-heart-flow',title:'Right heart · pulmonary outflow',kind:'flow',source:HEART_FLOW_SOURCE,
  note:'혈류의 연결 순서를 표시합니다. 실제 유속이나 통과 시간은 나타내지 않습니다.',
  stages:[
   stage('Superior vena cava',['VH_M_superior_vena_cava']),
   stage('Right atrium',['VH_M_right_cardiac_atrium']),
   stage('Tricuspid valve',['VH_M_tricuspid_valve']),
   stage('Right ventricle',['VH_M_heart_right_ventricle']),
   stage('Pulmonary valve',['VH_M_pulmonary_valve']),
   stage('Pulmonary trunk',['VH_M_pulmonary_trunk']),
   stage('Pulmonary arteries',['VH_M_pulmonary_artery_L','VH_M_pulmonary_artery_R'])
  ]
 },
 {
  id:'left-heart-flow',title:'Pulmonary venous return · systemic outflow',kind:'flow',source:HEART_FLOW_SOURCE,
  note:'폐정맥에서 좌심장을 거쳐 대동맥으로 이어지는 혈류 순서입니다.',
  stages:[
   stage('Pulmonary veins',['VH_M_pulmonary_vein_R_inf','VH_M_pulmonary_vein_R_sup','VH_M_pulmonary_vein_L_inf','VH_M_pulmonary_vein_L_sup']),
   stage('Left atrium',['VH_M_left_cardiac_atrium']),
   stage('Mitral valve',['VH_M_mitral_valve']),
   stage('Left ventricle',['VH_M_heart_left_ventricle']),
   stage('Aortic valve',['VH_M_aortic_valve']),
   stage('Ascending aorta',['VH_M_ascending_aorta']),
   stage('Aortic arch',['VH_M_aortic_arch'])
  ]
 },
 {
  id:'left-coronary-lad',title:'Left coronary · LAD pathway',kind:'branch',source:'https://ncdr.com/WebNCDR/docs/default-source/cathpci-v5.0-documents/coronaryarterydiagramv5.pdf',
  note:'이 모델에 수록된 좌관상동맥–앞심실사이가지(LAD)–대각가지의 분지 관계입니다.',
  stages:[
   stage('Ascending aorta',['VH_M_ascending_aorta']),
   stage('Left coronary artery',['VH_M_left_coronary_artery']),
   stage('Anterior interventricular branch (LAD)',['VH_M_left_anterior_descending_artery']),
   stage('Diagonal branches',['VH_M_diagonal_branch_of_anterior_descending_branch_of_left_coronary_artery','VH_M_diagonal_branch_of_left_anterior_descending_artery'])
  ]
 },
 {
  id:'right-coronary-branches',title:'Right coronary branches',kind:'branch',source:'https://ncdr.com/WebNCDR/docs/default-source/cathpci-v5.0-documents/coronaryarterydiagramv5.pdf',
  note:'오른뒤심실사이가지(PDA)의 기원은 관상동맥 우세형에 따라 달라질 수 있습니다. 이 표시는 현재 모델의 우측 기원 구성을 따릅니다.',
  stages:[
   stage('Ascending aorta',['VH_M_ascending_aorta']),
   stage('Right coronary artery',['VH_M_right_coronary_artery']),
   stage('Right marginal / posterior descending branches',['VH_M_right_marginal_artery','VH_M_right_posterior_descending_artery'])
  ]
 },
 {
  id:'coronary-sinus-drainage',title:'Coronary sinus drainage',kind:'drainage',source:CORONARY_VEIN_SOURCE,
  note:'큰·중간심장정맥, 왼심실뒤정맥과 왼심방빗정맥이 관상정맥굴을 거쳐 우심방으로 배출되는 경로입니다.',
  stages:[
   stage('Coronary sinus tributaries',['VH_M_great_cardiac_vein','VH_M_middle_cardiac_vein','VH_M_posterior_vein_of_left_ventricle','VH_M_oblique_vein_of_left_atrium','VH_M_small_cardiac_vein']),
   stage('Coronary sinus',['VH_M_coronary_sinus']),
   stage('Right atrium',['VH_M_right_cardiac_atrium'])
  ]
 },
 {
  id:'anterior-cardiac-drainage',title:'Anterior cardiac venous drainage',kind:'drainage',source:CORONARY_VEIN_SOURCE,
  note:'앞심장정맥은 관상정맥굴을 거치지 않고 우심방으로 직접 배출됩니다.',
  stages:[stage('Anterior cardiac veins',['VH_M_anterior_cardiac_vein']),stage('Right atrium',['VH_M_right_cardiac_atrium'])]
 },
 {
  id:'aortic-continuity',title:'Aortic continuity',kind:'continuity',source:AORTA_SOURCE,
  note:'대동맥의 연속된 큰 구획을 현재 모델에 수록된 단위로 표시합니다.',
  stages:[
   stage('Ascending aorta',['VH_M_ascending_aorta']),
   stage('Aortic arch',['VH_M_aortic_arch']),
   stage('Descending aorta',['VH_M_descending_aorta_a','VH_M_descending_aorta_b'])
  ]
 },
 {
  id:'aortic-arch-branches',title:'Aortic arch branches',kind:'branch',source:'https://www.ncbi.nlm.nih.gov/books/NBK499911/',
  note:'대동맥활의 세 주요 분지를 병렬 분지로 표시합니다.',
  stages:[
   stage('Aortic arch',['VH_M_aortic_arch']),
   stage('Brachiocephalic trunk',['VH_M_brachiocephalic_artery_a','VH_M_brachiocephalic_artery_b']),
   stage('Left common carotid artery',['VH_M_left_common_carotid_artery_a','VH_M_left_common_carotid_artery_b']),
   stage('Left subclavian artery',['VH_M_left_subclavian_artery_a','VH_M_left_subclavian_artery_b'])
  ],parallelFrom:0
 },
 {
  id:'abdominal-aorta-branches',title:'Major abdominal aortic branches',kind:'branch',source:AORTA_SOURCE,
  note:'현재 모델에 수록된 복부대동맥의 주요 홀가지와 양측 신동맥을 함께 표시합니다.',
  stages:[
   stage('Descending / abdominal aorta',['VH_M_descending_aorta_a','VH_M_descending_aorta_b']),
   stage('Celiac trunk',['VH_M_celiac_trunk']),
   stage('Superior mesenteric artery',['VH_M_superior_mesenteric_artery']),
   stage('Renal arteries',['VH_M_left_renal_artery','VH_M_right_renal_artery']),
   stage('Inferior mesenteric artery',['VH_M_inferior_mesenteric_artery'])
  ],parallelFrom:0
 },
 {
  id:'celiac-branches',title:'Celiac trunk branches',kind:'branch',source:'https://www.ncbi.nlm.nih.gov/books/NBK459241/',
  note:'현재 모델에 수록된 비장동맥과 온간동맥을 표시합니다. 고전적 세 번째 분지인 왼위동맥은 이 모델에 없습니다.',
  stages:[
   stage('Celiac trunk',['VH_M_celiac_trunk']),
   stage('Splenic artery',['VH_M_splenic_artery']),
   stage('Common hepatic artery',['VH_M_common_hepatic_artery'])
  ],parallelFrom:0
 },
 {
  id:'common-hepatic-continuation',title:'Common to proper hepatic artery',kind:'continuity',source:'https://www.ncbi.nlm.nih.gov/books/NBK459241/',
  note:'온간동맥에서 고유간동맥으로 이어지는 연속성을 표시합니다. 그 사이에서 분지하는 위십이지장동맥은 현재 모델에 없습니다.',
  stages:[
   stage('Common hepatic artery',['VH_M_common_hepatic_artery']),
   stage('Proper hepatic artery',['VH_M_proper_hepatic_artery'])
  ]
 },
 {
  id:'left-urine-outflow',title:'Left renal urine outflow',kind:'flow',source:KIDNEY_SOURCE,
  note:'여러 신유두와 신배는 병렬로 합류합니다. 특정 유두와 특정 소신배의 일대일 대응을 뜻하지 않습니다.',
  stages:[
   stage('Renal papillae (left)',[],'^VH_M_renal_papilla_L_'),
   stage('Minor calyces (left)',[],'^VH_M_minor_calyx_L_'),
   stage('Major calyces (left)',[],'^VH_M_major_calyx_L_'),
   stage('Renal pelvis (left)',['VH_M_renal_pelvis_L']),
   stage('Ureter (left)',['VH_M_ureter_L']),
   stage('Left ureteric orifice',['VH_M_ureteral_orifice_L']),
   stage('Urinary bladder',['VH_M_trigone_of_urinary_bladder','VH_M_fundus_of_urinary_bladder_dome','VH_M_fundus_of_urinary_bladder_base1']),
   stage('Bladder neck',['VH_M_urinary_bladder_neck_smooth_muscle']),
   stage('Urethra',['VH_M_prostatic_urethra','VH_M_other_urethra'])
  ]
 },
 {
  id:'right-urine-outflow',title:'Right renal urine outflow',kind:'flow',source:KIDNEY_SOURCE,
  note:'여러 신유두와 신배는 병렬로 합류합니다. 특정 유두와 특정 소신배의 일대일 대응을 뜻하지 않습니다.',
  stages:[
   stage('Renal papillae (right)',[],'^VH_M_renal_papilla_R_'),
   stage('Minor calyces (right)',[],'^VH_M_minor_calyx_R_'),
   stage('Major calyces (right)',[],'^VH_M_major_calyx_R_'),
   stage('Renal pelvis (right)',['VH_M_renal_pelvis_R']),
   stage('Ureter (right)',['VH_M_ureter_R']),
   stage('Right ureteric orifice',['VH_M_ureteral_orifice_R']),
   stage('Urinary bladder',['VH_M_trigone_of_urinary_bladder','VH_M_fundus_of_urinary_bladder_dome','VH_M_fundus_of_urinary_bladder_base1']),
   stage('Bladder neck',['VH_M_urinary_bladder_neck_smooth_muscle']),
   stage('Urethra',['VH_M_prostatic_urethra','VH_M_other_urethra'])
  ]
 }
];

const kindLabels={flow:'Flow',branch:'Branches',drainage:'Drainage',continuity:'Continuity'};

export function relatedRoutes(partId,parts){
 if(!partId)return[];
 const available=new Set(parts.map(part=>part.id));
 return routes.map(route=>{
  const stages=route.stages.map(item=>{
   const matched=item.pattern?[...available].filter(id=>new RegExp(item.pattern).test(id)):[];
   const ids=[...new Set([...item.ids.filter(id=>available.has(id)),...matched])];
   return {...item,ids};
  }).filter(item=>item.ids.length);
  const stageIndex=stages.findIndex(item=>item.ids.includes(partId));
  if(stageIndex<0||stages.length<2)return null;
  return {...route,kindLabel:kindLabels[route.kind],stages,stageIndex,partIds:[...new Set(stages.flatMap(item=>item.ids))]};
 }).filter(Boolean);
}

export function relationById(id,parts){
 const available=new Set(parts.map(part=>part.id));
 const route=routes.find(item=>item.id===id);
 if(!route)return null;
 const stages=route.stages.map(item=>{
  const matched=item.pattern?[...available].filter(partId=>new RegExp(item.pattern).test(partId)):[];
  return {...item,ids:[...new Set([...item.ids.filter(partId=>available.has(partId)),...matched])]};
 }).filter(item=>item.ids.length);
 if(stages.length<2)return null;
 return {...route,kindLabel:kindLabels[route.kind],stages,partIds:[...new Set(stages.flatMap(item=>item.ids))]};
}

export const anatomicalRelations=routes;
