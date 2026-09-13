export function structureIdentityText(partId,record,detail){
 if(!partId)return '';
 if(detail){
  if(detail.kind==='schematic')return '설명용 모식 구조 · 원본 조직 분할 아님';
  if(detail.ontologyId)return (detail.englishLabel||detail.label)+' · '+detail.ontologyId;
  return '원본 표면'+(detail.sourceMesh?' · '+detail.sourceMesh:'')+' · 표준 용어 ID 미연결';
 }
 if(record?.review?.status==='needs-review')return '구조 검토 중 · '+record.review.issues.map(i=>typeof i==='string'?i:i.message).join(' ')+(record.ontologyId?' (원본 ID: '+record.ontologyId+')':'');
 if(record?.ontologyId)return record.ontologyLabel+' · '+record.ontologyId;
 return record?.sourceMesh?'원본 표면 · '+record.sourceMesh+' · 표준 용어 ID 미연결':'공식 용어 ID 미연결';
}
