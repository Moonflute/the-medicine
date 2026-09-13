export const contextGroups=[
 {id:'hepatopancreatic',members:['liver','pancreas','gallbladder'],controlId:'hepatopancreatic-context',label:'간·담도·췌장 함께 보기',description:'HRA 원본 좌표로 간·담낭·담도와 췌장·췌관을 조합했습니다. 담낭·담도 독립 모델도 같은 원본 좌표로 합치고, 간·췌장과 공유하는 구조는 중복 제거합니다. 모든 간내 담관 분지·십이지장 유두·조직층과 실제 담즙 흐름은 재현하지 않습니다.'},
 {id:'cardiopulmonary',members:['heart','lungs'],controlId:'cardiopulmonary-context',label:'심장·폐 함께 보기',description:'남성 HRA 원본 좌표와 상대 크기로 심장·폐·기관지를 조합했습니다. 심장과 폐의 병태 예시를 각각 선택할 수 있습니다. 폐포 미세혈관·가스교환·압력 및 질환 간 인과관계는 계산하지 않습니다.'},
 {id:'urinary-tract',members:['kidneys','ureters','bladder','urethra'],controlId:'urinary-context',label:'신장·요로 함께 보기',description:'남성 HRA 원본 좌표로 신장·신우·신배·요관·방광·요도를 조합했습니다. 중복 구조는 형상과 위치를 대조해 한 번만 표시합니다. 미세 조직층·소변 흐름·압력·괄약근 기능은 재현하지 않습니다.'},
 {id:'female-reproductive',members:['uterus','ovaries','fallopian-tubes'],controlId:'female-context',label:'자궁·난관·난소 함께 보기',description:'여성 원본 좌표와 기관 간 상대 크기를 유지한 21개 구조. 난관 끝과 난소를 임의로 연결하지 않았습니다. 골반 뼈·인대·혈관·질 전체는 포함하지 않습니다.'},
 {id:'upper-digestive',members:['stomach','esophagus'],controlId:'upper-digestive-context',label:'식도·위 함께 보기',description:'BodyParts3D 원본 좌표와 상대 크기를 유지한 식도·위 외형입니다. 접합을 위한 임의 변형은 하지 않았습니다. 조직층·괄약근·십이지장과 HRA 전신 정합은 미구현입니다.'}
];
export function contextGroupFor(id){return contextGroups.find(group=>group.members.includes(id))??null;}
contextGroups.push({id:'oral-region',members:['mouth','tonsils'],controlId:'oral-context',label:'구강·침샘·구개편도 함께 보기',description:'동일한 HRA 원본 좌표로 23개 구조를 조합했습니다. 구개편도는 구인두 구조이며 구강과 동일한 임상 분류로 취급하지 않습니다. 인두 전체 벽·편도 기둥·인두편도·혀편도·침샘관은 포함하지 않습니다.'});
