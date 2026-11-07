// Major routes in the same Z-Anatomy frame as the existing heart and limbs.
// The arterial circle is a source specimen, not a claim about every variant.
const reference='https://openstax.org/books/anatomy-and-physiology-2e/pages/13-3-circulation-and-the-central-nervous-system';
const base={coordinateFrame:'z-anatomy',spacing:.00035,distanceUnit:.000025,minRadius:.0001,surfaceError:.000045,surfaceSigma:.35,surfaceSmoothLimit:.00006,maxClearance:.018,maxJunctionGap:.004,sourceSeamRadius:.0011,junctionCoreRadius:.0011,enforceSurfaceClearance:true,expectedComponents:1,references:[reference]};
const arteries=[],ac=[],flow=[],forks=[];
function add(parts,name,korean,source,kind){parts.push({name,korean,source,kind,group:kind==='artery'?'머리 · 목 동맥':'경막정맥굴 · 목 정맥',color:kind==='artery'?'#c7756d':'#739dc3',description:kind==='artery'?'기존 심장·대혈관과 같은 Z-Anatomy 표본의 머리·목 동맥입니다. 주요 뇌동맥의 가지와 주행을 원본 위치에서 살펴봅니다. 작은 관통동맥과 개인별 혈관 변이는 포함하지 않습니다.':'같은 Z-Anatomy 표본의 경막정맥굴·속목정맥입니다. 원본의 합류 경로를 유지하며 피질·깊은 뇌정맥의 전체 분지와 뇌척수액 흡수 과정은 재현하지 않습니다.',reference});return parts.length;}
const sides=[];
for(const side of ['Right','Left']){
 const suffix=side==='Right'?'r':'l',ko=side==='Right'?'우':'좌';
 const defs=[['common carotid','총경',`${side} common carotid artery`],['internal carotid','속목',`Internal carotid artery.${suffix}`],['external carotid','바깥목',`External carotid artery.${suffix}`],['anterior cerebral','앞대뇌',`Anterior cerebral artery.${suffix}`],['middle cerebral — M1 segment','중간대뇌 · M1',`Middle cerebral artery (M1-segment).${suffix}`],['posterior communicating','뒤교통',`Posterior communicating artery.${suffix}`],['posterior cerebral','뒤대뇌',`Posterior cerebral artery.${suffix}`],['subclavian','쇄골하',`${side} subclavian artery`],['vertebral','척추',`Vertebral artery.${suffix}`]];
 const ids=defs.map(([stem,k,source])=>add(arteries,stem.includes('—')?`${side} middle cerebral artery — M1 segment`:`${side} ${stem} artery`,ko+k+'동맥',source,'artery'));sides.push(ids);
 const [cc,ic,ec,an,mi,pc,po,sub,vert]=ids;ac.push([cc,ic],[cc,ec],[ic,an],[ic,mi],[ic,pc],[pc,po],[sub,vert]);flow.push([cc,ic],[cc,ec],[ic,an],[ic,mi],[sub,vert]);forks.push([cc,[ic,ec]],[ic,[an,mi,pc]]);
}
const basilar=add(arteries,'Basilar artery','뇌바닥동맥','Basilar artery','artery');
for(const ids of sides){ac.push([ids[8],basilar],[basilar,ids[6]]);flow.push([ids[8],basilar],[basilar,ids[6]]);}
// The vertebral confluence is also a shared ostium. Separating its two inflows
// as unrelated touching vessels would manufacture a divider at the junction.
forks.push([basilar,[sides[0][6],sides[1][6]]],[basilar,[sides[0][8],sides[1][8]]]);
export const headJourneySources={
 'head-artery':{...base,title:'머리 · 목 동맥',kind:'artery',file:'z-whole-arteries-optimized.glb.gz',parts:arteries,connections:ac,flowConnections:flow,forks,notice:'같은 Z-Anatomy 표본의 총경·속목·바깥목동맥, 척추–뇌바닥동맥과 주요 뇌동맥을 연결합니다. 앞교통동맥은 이 원본의 앞대뇌동맥과 접점이 맞지 않아 연결하지 않습니다. 뒤교통동맥에는 고정 방향 입자를 표시하지 않습니다. 작은 관통동맥·조직 모세혈관은 포함하지 않습니다.'},
};
