import * as T from 'three';
export const detailOptions={heart:[['chordae','판막·건삭'],['conduction','심장 전도계']],kidneys:[['nephron','네프론 확대'],['renal-tree','신장 혈관 분지']],vasculature:[['renal-tree','신장 혈관 분지']]};
const refs={chordae:['https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy'],conduction:['https://www.nhlbi.nih.gov/health/heart/heart-beats','https://openstax.org/books/anatomy-and-physiology-2e/pages/19-2-cardiac-muscle-and-electrical-activity'],nephron:['https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work','https://openstax.org/books/anatomy-and-physiology/pages/25-4-microscopic-anatomy-of-the-kidney'],'renal-tree':['https://openstax.org/books/anatomy-and-physiology-2e/pages/25-3-gross-anatomy-of-the-kidney']};
export function buildDetailModel(organId,key){
 if(!detailOptions[organId]?.some(([id])=>id===key))throw Error('Unsupported anatomical detail');
 const root=new T.Group();root.userData.detail={id:key,kind:'schematic',revision:1,references:refs[key],notice:'확대·단순화한 구조 모형입니다. 실제 크기·좌표·개인별 분지 수를 재현하지 않습니다.'};
 function add(id,label,geometry,color,opacity=1,position=[0,0,0]){const material=new T.MeshStandardMaterial({color,roughness:.82,transparent:opacity<1,opacity,depthWrite:opacity===1,side:T.DoubleSide});const mesh=new T.Mesh(geometry,material);mesh.position.set(...position);mesh.name='detail:'+key+':'+id;mesh.userData={partId:mesh.name,organId,label,baseColor:material.color.clone(),restOpacity:opacity,detail:{id:mesh.name,label,kind:'schematic',references:refs[key]}};mesh.castShadow=opacity===1;root.add(mesh);return mesh;}
 function tube(id,label,points,r=.035,color='#c78c82'){return add(id,label,new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),Math.max(12,points.length*6),r,6,false),color)}
 function ball(id,label,point,r,color,opacity=1){return add(id,label,new T.SphereGeometry(r,16,10),color,opacity,point)}
 function leaflet(id,label,x,y,z,width){const shape=new T.Shape();shape.moveTo(-width/2,0);shape.quadraticCurveTo(0,-.35,width/2,0);shape.lineTo(-width/2,0);return add(id,label,new T.ShapeGeometry(shape,10),'#dcc5a1',1,[x,y,z])}
 if(key==='chordae'){
  for(const [side,cx,count]of [['mitral',-.75,2],['tricuspid',.75,3]]){
   const title=side==='mitral'?'승모판':'삼첨판';add(side+'-annulus',title+' 판륜',new T.TorusGeometry(.46,.04,6,32),'#b99c82',1,[cx,.68,0]);
   for(let j=0;j<count;j++){const angle=(j/count)*Math.PI*2;leaflet(side+'-leaflet-'+j,title+' '+(side==='mitral'?['전엽','후엽']:['전엽','후엽','중격엽'])[j],cx+Math.cos(angle)*.18,.65,Math.sin(angle)*.25,.6);}
   const muscleCount=side==='mitral'?2:3;for(let j=0;j<muscleCount;j++){const x=cx+(j-(muscleCount-1)/2)*.34,y=-.65,z=.05;const muscle=ball(side+'-papillary-'+j,title+' '+(side==='mitral'?['앞가쪽 유두근','뒤안쪽 유두근']:['앞유두근','뒤유두근','중격유두근'])[j],[x,y,z],.14,'#c28b81');muscle.scale.y=1.8;
    for(let k=0;k<count;k++){if(side==='tricuspid'&&k!==j&&k!==(j+1)%count)continue;const angle=k/count*Math.PI*2;const end=[cx+Math.cos(angle)*.18,.48,Math.sin(angle)*.25];tube(side+'-chord-'+j+'-'+k,title+' 건삭 · 유두근 '+(j+1)+' → 판엽 '+(k+1),[[x,y+.23,z],[(x+end[0])/2,.0,(z+end[2])/2],end],.012,'#ead7ad');}
   }
  }
  root.userData.detail.notice+=' 건삭은 방실판막과 유두근을 연결합니다. 대동맥판·폐동맥판에는 건삭을 붙이지 않습니다. 판엽의 실제 표면·건삭 분지 수는 단순화했습니다.';
 }
 if(key==='conduction'){
  for(const [id,label,x,y,sx,sy]of [['ra','우심방',-.62,.65,.45,.5],['la','좌심방',.62,.65,.45,.5],['rv','우심실',-.55,-.55,.45,.65],['lv','좌심실',.55,-.55,.5,.7]]){const m=ball(id,label+' · 위치 안내',[x,y,-.12],1,'#bd9690',.12);m.scale.set(sx,sy,.3);}
  const sa=[-.78,1.01,.22],av=[-.14,.28,.22],his=[0,.02,.22];ball('sa','동방결절 · 우심방 상부',sa,.075,'#d5b069');ball('av','방실결절 · 심방중격 하부',av,.065,'#d5b069');tube('atrial-spread','심방 내 흥분 전달 · 개념 경로',[sa,[-.45,.76,.25],av],.025,'#d4b878');tube('his','히스다발',[av,his,[.02,-.2,.22]],.033,'#d4b878');
  tube('right-bundle','우각',[[.02,-.2,.22],[-.2,-.6,.24],[-.34,-1.06,.24]],.026,'#d4b878');tube('left-bundle','좌각',[[.02,-.2,.22],[.21,-.48,.24],[.32,-.98,.24]],.026,'#d4b878');
  for(const [side,x]of [['right',-1],['left',1]])for(let i=0;i<3;i++)tube('purkinje-'+side+i,(side==='left'?'좌':'우')+'심실 푸르키네 섬유 · 개념 분지 '+(i+1),[[x*.33,-1,.24],[x*(.5+i*.13),-.8,.25],[x*(.42+i*.15),-.22+i*.08,.24]],.016,'#d4b878');
  root.userData.detail.notice+=' 전도 순서와 상대 위치를 표시하며 실제 전기생리 속도·심전도를 계산하지 않습니다.';
 }
 if(key==='nephron'){
  ball('capsule','보먼주머니',[-.72,.7,0],.32,'#dfcda7',.18);
  const vascularStart=[-.8,.94,0],vascularEnd=[-.64,.94,.03];const aff=[[-1.4,1.1,0],[-1.05,1.05,0],vascularStart];tube('afferent','수입세동맥',aff,.055,'#cb887e');
  const tuft=[vascularStart];for(let i=0;i<=80;i++){const t=i/80*Math.PI*5;tuft.push([-.72+(.18+.035*Math.sin(t*1.6))*Math.cos(t),.7+.14*Math.sin(t),.11*Math.sin(t*.6)])}tuft.push(vascularEnd);tube('glomerulus','사구체 모세혈관 다발',tuft,.025,'#ce887b');tube('efferent','수출세동맥',[tuft.at(-1),[-.52,1.12,.1],[-.31,1.26,.1]],.032,'#bc8b83');
  tube('proximal','근위곡세뇨관',[[-.48,.58,0],[-.13,.75,0],[.02,.55,.13],[-.16,.37,.06],[.10,.24,0]],.055,'#d7b582');
  tube('proximal-straight','근위곧은세뇨관',[[.10,.24,0],[.13,-.15,0]],.052,'#d7b582');tube('descending','헨레고리 얇은 하행각',[[.13,-.15,0],[.15,-1.04,0],[.32,-1.18,0]],.028,'#d7b582');tube('ascending-thin','헨레고리 얇은 상행각',[[.32,-1.18,0],[.48,-1.04,0],[.49,-.6,0]],.028,'#c8b98e');tube('ascending','헨레고리 굵은 상행각',[[.49,-.6,0],[.49,-.32,0],[.46,.43,0]],.045,'#c8b98e');
  tube('distal','원위곡세뇨관',[[.46,.43,0],[.22,.84,.1],[-.86,.97,.07],[-.86,1.2,.12],[.50,1.18,.05],[.82,.72,0]],.045,'#c9ba91');ball('macula-densa','치밀반 · 혈관극 인접 원위세뇨관',[-.86,.97,.07],.065,'#a7b692');
  tube('connecting','연결세뇨관',[[.82,.72,0],[1,.55,0],[1.12,.42,0]],.038,'#c9ba91');tube('collecting','집합관 · 네프론 배출을 받는 별도 계통',[[1.12,1.08,0],[1.12,.42,0],[1.12,-1.3,0]],.07,'#b6c0a0');
  root.userData.detail.notice+=' 사구체·곡세뇨관은 피질, 고리는 수질 방향으로 이어집니다. 집합관은 네프론과 구분합니다. 대표적인 긴 고리 네프론의 분절을 표시합니다. 족세포·여과장벽·세뇨관주위 모세혈관망은 미구현입니다.';
 }
 if(key==='renal-tree'){
  const hilum=[-.95,-.75,0];tube('renal-artery','신동맥',[[-1.35,-1.05,0],hilum],.085);
  for(let s=0;s<3;s++){const x=-.65+s*.65,base=[x,-.48,0],top=[x,.40,0];tube('segmental-'+s,'구역동맥 · 예시 '+(s+1),[hilum,base],.06);tube('interlobar-'+s,'엽사이동맥 · 신장기둥 주행 '+(s+1),[base,[x,-.05,0],top],.045);
   for(const direction of [-1,1]){const tip=[x+direction*.22,.47,0];tube('arcuate-'+s+'-'+direction,'활꼴동맥 · 피질-수질 경계',[top,[x+direction*.10,.48,0],tip],.035);tube('cortical-'+s+'-'+direction,'피질방사동맥',[tip,[tip[0],.80,0],[tip[0],1.1,0]],.024);const glom=[tip[0]+direction*.1,.98,.02];tube('afferent-'+s+'-'+direction,'수입세동맥',[[tip[0],.90,0],glom],.015);ball('glomerulus-'+s+'-'+direction,'사구체 · 피질',glom,.045,'#ca8b82');}
  }
  root.userData.detail.notice+=' 신동맥 → 구역 → 엽사이 → 활꼴 → 피질방사 → 수입세동맥의 분지 순서입니다. 표시된 구역·사구체 수는 설명용이며 전체 분지 수가 아닙니다. 정맥 환류·개인 변이는 별도입니다.';
 }
 root.updateMatrixWorld(true);const box=new T.Box3().setFromObject(root),center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());root.position.sub(center);const norm=new T.Group();norm.add(root);norm.scale.setScalar(2.8/Math.max(size.x,size.y,size.z));const wrapper=new T.Group();wrapper.add(norm);wrapper.userData.detail=root.userData.detail;return wrapper;
}
