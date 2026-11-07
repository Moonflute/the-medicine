// Regional streaming keeps fine vessel spacing without a dense full-body grid.
// All four regions use the SAME Z-Anatomy world coordinates as circulation.
const reference='https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways';
const arteries='z-whole-arteries-optimized.glb.gz',veins='z-whole-veins-optimized.glb.gz';
export const limbJourneySources={};
for(const side of ['Right','Left'])for(const region of ['arm','leg']){
 const suffix=side==='Right'?'r':'l',ko=side==='Right'?'우':'좌',group=ko+'측 '+(region==='arm'?'상지':'하지');
 const artery=region==='arm'?[
  ['subclavian','쇄골하',`${side} subclavian artery`],['axillary','액와',`Axillary artery.${suffix}`],['brachial','상완',`Brachial artery.${suffix}`],['radial','요골',`Radial artery.${suffix}`],['ulnar','척골',`Ulnar artery.${suffix}`],['deep brachial','깊은상완',`Deep brachial artery.${suffix}`]
 ]:[
  ['external iliac','외장골',`External iliac artery.${suffix}`],['femoral','대퇴',`Femoral artery.${suffix}`],['deep femoral','깊은대퇴',`Deep femoral artery.${suffix}`],['popliteal','슬와',`Popliteal artery.${suffix}`],['anterior tibial','앞정강',`Anterior tibial artery.${suffix}`],['posterior tibial','뒤정강',`Posterior tibial artery.${suffix}`],['fibular','종아리',`Fibular artery.${suffix}`]
 ];
 const vein=region==='arm'?[
  ['subclavian','쇄골하',`${side} subclavian vein`],['axillary','액와',`Axillary vein.${suffix}`],['brachial','상완',`Brachial veins.${suffix}`],['radial','요골',`Radial veins.${suffix}`],['ulnar','척골',`Ulnar veins.${suffix}`]
 ]:[
  ['external iliac','외장골',`External iliac vein.${suffix}`],['femoral','대퇴',`Femoral vein.${suffix}`],['deep femoral','깊은대퇴',`Deep femoral vein.${suffix}`],['popliteal','슬와',`Popliteal vein.${suffix}`],['anterior tibial','앞정강',`Anterior tibial veins.${suffix}`],['posterior tibial','뒤정강',`Posterior tibial veins.${suffix}`],['fibular','종아리',`Fibular veins.${suffix}`]
 ];
 const make=(list,kind)=>list.map(([stem,korean,source])=>({name:`${side} ${stem} ${kind}${source.includes('veins.')?'s':''}`,korean:ko+korean+(kind==='artery'?'동맥':'정맥'),source,sourceFile:kind==='artery'?arteries:veins,kind,circuit:kind,group,color:kind==='artery'?'#c7756d':'#739dc3',description:group+'의 '+(kind==='artery'?'동맥':'정맥')+' 원본 구간입니다. '+(kind==='artery'?'심장에서 말초로 향하는 혈관의 분지와 주행을 살펴보세요.':'말초에서 심장으로 돌아가는 정맥의 합류와 주행을 살펴보세요. 짝을 이루는 깊은 정맥은 원본의 묶음 이름으로 표시합니다.'),reference}));
 const ac=region==='arm'?[[1,2],[2,3],[3,4],[3,5],[3,6]]:[[1,2],[2,3],[2,4],[4,5],[4,6],[6,7]],vc=region==='arm'?[[1,2],[2,3],[3,4],[3,5]]:ac;
 const n=artery.length,connections=[...ac,...vc.map(([a,b])=>[a+n,b+n])];
 const key=region+'-'+side.toLowerCase();
 limbJourneySources[key]={title:group+' · 동맥 · 정맥',kind:'circulation',coordinateFrame:'z-anatomy',file:arteries,spacing:.00065,minRadius:.0002,enforceSurfaceClearance:true,maxClearance:.018,maxJunctionGap:.004,sourceSeamRadius:.0013,junctionCoreRadius:.0012,expectedComponents:2,parts:[...make(artery,'artery'),...make(vein,'vein')],connections,flowConnections:[...ac,...vc.map(([a,b])=>[b+n,a+n])],forks:region==='arm'?[[3,[4,5,6]],[n+3,[n+4,n+5]]]:[[2,[3,4]],[4,[5,6]],[n+2,[n+3,n+4]],[n+4,[n+5,n+6]]],references:[reference],notice:'기존 심혈관과 같은 Z-Anatomy 원본 좌표의 '+group+' 주요 혈관입니다. 동맥과 정맥은 분리되어 있으며 모세혈관·정맥판막은 재현하지 않습니다. 가벼운 실행을 위해 영역별로 불러오며 연결 혈관에서는 위치와 시선을 유지해 전환합니다.'};
 if(region==='leg'){
  const combined=limbJourneySources[key];delete limbJourneySources[key];
  // Supplied arterial/venous EXTERIOR surfaces intersect in the calf. Do not
  // subtract either from the other and amputate a real vessel. Load each
  // vascular compartment independently in its original unchanged coordinates.
  for(const kind of ['artery','vein']){const links=kind==='artery'?ac:vc;limbJourneySources[key+'-'+kind]={...combined,title:group+' · '+(kind==='artery'?'동맥':'정맥'),kind,file:kind==='artery'?arteries:veins,parts:make(kind==='artery'?artery:vein,kind),connections:links,flowConnections:kind==='artery'?links:links.map(([a,b])=>[b,a]),forks:[[2,[3,4]],[4,[5,6]]],expectedComponents:1,terminalParts:[6],preserveSeparation:true,notice:combined.notice+' 원본의 동정맥 외형이 겹치는 곳이 있어 하지 동맥과 정맥은 각각 불러옵니다. 대응 말초 혈관은 미세순환 생략으로 전환하며 실제 직통 연결을 만들지 않습니다.'};}
 }
}
