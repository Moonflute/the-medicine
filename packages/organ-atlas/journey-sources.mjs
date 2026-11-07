// Metres in the existing Z-Anatomy frame: +X left, +Y superior, +Z anterior.
// This is a source-derived navigation reconstruction, NOT a segmented mucosa.
import {airwaySource,thoracicVeinSource,coronaryParts} from './journey-expansion-sources.mjs';
import {continuousBronchi,bronchialConnections,bronchialForks} from './journey-continuity-sources.mjs';
import {cardiacSource} from './journey-cardiac-sources.mjs';
import {circulationSource} from './journey-circulation-sources.mjs';
import {organJourneySources} from './journey-organ-sources.mjs';
import {limbJourneySources} from './journey-limb-sources.mjs';
export function journeyNotice(key){
 if(organJourneySources[key])return organJourneySources[key].notice;
 if(limbJourneySources[key])return limbJourneySources[key].notice;
 if(key==='cardiac'||key==='circulation')return '같은 Z-Anatomy 좌표에서 심근과 구별한 4방의 혈액 공간을 대정맥·폐동맥·폐정맥·대동맥에 연결한 탐험용 재구성입니다. 판막 통과부는 탐험을 위해 열어 두었으며 실제 박동·판막 개폐의 생리적 한 시점을 뜻하지 않습니다. 폐·전신 모세혈관망과 관상 미세순환은 생략하며 좌우 중격을 관통하는 통로를 만들지 않습니다.';
 if(key==='airways')return '기존 HRA 남성 표본의 기관·엽기관지·분절기관지 표면과 상대 좌표를 보존한 내부 탐색용 재구성입니다. 원본이 구분한 가지까지만 제공하며 세기관지·폐포와 실제 점막은 포함하지 않습니다. 입·소화관 탐험과 다른 표본이므로 영역을 바꾸어 탐험합니다. 좌측 분절 형태는 이 원본의 구분을 따릅니다.';
 if(key==='thoracic-veins')return '기존 Z-Anatomy 좌표의 상대정맥·팔머리정맥·목과 상지 주요 정맥을 재구성했습니다. 잘린 끝은 제공 범위이며 심방이나 하대정맥까지 임의로 연결하지 않았습니다. 정맥판막·모세혈관은 포함하지 않습니다.';
 const common='기존 원본의 외형·좌표를 바탕으로 만든 내부 탐색용 재구성입니다. 실제 점막·벽 두께·생리적 개폐를 분할한 자료가 아닙니다. 연결부는 원본 위치와 해부학적 순서를 대조해 보강했으며, 표시된 끝은 모델 제공 범위입니다.';
 return common+(key==='upper'?' 혀는 기존 좌표의 표면을, 후두개는 연골 기준으로 좌표 정합한 기존 BodyParts3D 표면을 재사용했습니다. 입에서 같은 원본의 엽·분절기관지까지 이어집니다. 원본이 구분하지 않는 장관과 좌하엽 기저기관지는 묶음 이름으로 표시합니다.':key==='veins'?' 하대정맥과 신장·골반의 주요 정맥 및 간정맥 합류부를 포함합니다. 심방·정맥판막·간내 세부 분지는 재현하지 않았습니다.':' 장간막동맥은 근위부만 포함하며, 심장 내부·모세혈관까지 이어지는 전체 순환은 제공하지 않습니다.');
}
export const journeySources={
 upper:{title:'입 · 소화관 · 기도',file:'z-whole-organs.glb.gz',spacing:.001,
  parts:[
   {name:'Oral cavity',korean:'구강',source:null,color:'#dba49c'},
   {name:'Oropharynx and laryngopharynx',korean:'구인두·후두인두',source:null,color:'#d19b94'},
   {name:'Esophagus',korean:'식도',source:'Oesophagus',hollowShell:true,color:'#cf9691'},
   {name:'Stomach',korean:'위',source:'Stomach',color:'#d99c91'},
   {name:'Duodenum',korean:'십이지장',source:'Duodenum',color:'#d9b39a'},
   {name:'Larynx',korean:'후두',source:null,color:'#d1b1a0'},
   {name:'Trachea',korean:'기관',source:'Trachea',color:'#dbc0aa'},
   {name:'Left main bronchus',korean:'좌주기관지',source:'Left main bronchus',color:'#d5b6a1'},
   {name:'Right main bronchus',korean:'우주기관지',source:'Right main bronchus',color:'#d5b6a1'},
   {name:'Jejunum and ileum',korean:'공장·회장',source:'Jejunum',sourceSweep:true,color:'#d9ac98',scopeNote:'The source-labelled Jejunum is one continuous tube from the duodenojejunal to ileocecal opening; no measured jejunum/ileum boundary is supplied.'},
   {name:'Cecum and ascending colon',korean:'맹장·상행결장',source:'Ascending colon',hollowShell:true,color:'#d5a096',scopeNote:'Includes the inferior blind cecal pouch. The ileocecal opening is reconstructed at the source small-bowel endpoint.'},
   {name:'Transverse colon',korean:'횡행결장',source:'Transverse colon',hollowShell:true,color:'#d5a096'},
   {name:'Descending and sigmoid colon',korean:'하행·구불결장',source:'Descending colon',hollowShell:true,color:'#d5a096',scopeNote:'Source surface includes the left descending segment and the inferior medial turn; no separate measured junction is supplied.'},
   {name:'Distal colorectal segment',korean:'원위부 대장',source:'Sigmoid colon',hollowShell:true,color:'#cb9692',scopeNote:'Distal midline pelvic continuation of the source-labelled Sigmoid colon. Exact rectosigmoid and anal canal boundaries are not established; a conservative combined name is used.'}],
  // Only these anatomical junctions may be opened. No digestive–vascular portal.
  connections:[[1,2],[2,3],[3,4],[4,5],[2,6],[6,7],[7,8],[7,9],[5,10],[10,11],[11,12],[12,13],[13,14]],
  bridges:[[2,3],[3,4],[4,5],[6,7],[7,8],[7,9],[5,10],[10,11],[11,12],[12,13],[13,14]],
  junctionWindows:{'11:12':{min:[-.14,1.083,-.03],max:[-.055,1.15,.07]},'12:13':{min:[.065,1.085,-.035],max:[.13,1.15,.06]},'13:14':{min:[-.04,.86,-.09],max:[.05,.94,.005]}},
  seeds:{1:[0,1.548,.058],2:[0,1.52,.002],3:[0,1.40,-.02],4:[.065,1.18,.035],5:[-.045,1.10,.028],6:[0,1.478,.005],7:[0,1.41,0],8:[.028,1.34,-.016],9:[-.01,1.356,-.014]},
  references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus','https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1-organs-and-structures-of-the-respiratory-system','https://openstax.org/books/anatomy-and-physiology-2e/pages/23-4-the-stomach','https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5-the-small-and-large-intestines']},
 // Smaller coronary origins need finer source sampling; runtime remains sparse.
 vessels:{title:'대동맥 · 주요 분지',file:'z-whole-arteries-optimized.glb.gz',spacing:.0006,sourceSeamRadius:.0016,
  parts:[
   {name:'Ascending aorta',korean:'상행대동맥',source:'Ascending aorta',color:'#c76c69'},
   {name:'Aortic arch',korean:'대동맥활',source:'Aortic arch',color:'#cc7771'},
   {name:'Thoracic aorta',korean:'흉부대동맥',source:'Thoracic aorta',color:'#c87570'},
   {name:'Brachiocephalic trunk',korean:'팔머리동맥',source:'Brachiocephalic trunk',color:'#d1897e'},
   {name:'Left common carotid artery',korean:'좌총경동맥',source:'Left common carotid artery',color:'#d79987'},
   {name:'Left subclavian artery',korean:'좌쇄골하동맥',source:'Left subclavian artery',color:'#d79987'},
   {name:'Right common carotid artery',korean:'우총경동맥',source:'Right common carotid artery',color:'#d79987'},
   {name:'Right subclavian artery',korean:'우쇄골하동맥',source:'Right subclavian artery',color:'#d79987'},
   {name:'Abdominal aorta',korean:'복부대동맥',source:'Abdominal aorta',color:'#c87570'},
   {name:'Celiac trunk',korean:'복강동맥',source:'Coeliac trunk',color:'#d1897e'},
   {name:'Superior mesenteric artery',korean:'상장간막동맥',source:'Superior mesenteric artery',color:'#d79987',crop:{min:[-.03,1.09,0],max:[.04,1.14,.065]},scopeNote:'Proximal source segment; distal intestinal arcades are outside this exploration scope.'},
   {name:'Inferior mesenteric artery',korean:'하장간막동맥',source:'Inferior mesenteric artery',color:'#d79987',crop:{min:[-.01,1.03,0],max:[.04,1.08,.05]},scopeNote:'Proximal source segment; distal branches are outside this exploration scope.'},
   {name:'Right common iliac artery',korean:'우총장골동맥',source:'Common iliac artery.r',color:'#d1897e'},
   {name:'Left common iliac artery',korean:'좌총장골동맥',source:'Common iliac artery.l',color:'#d1897e'},
   {name:'Left renal artery',korean:'좌신동맥',source:'Left renal artery',color:'#cf8077'},
   {name:'Right renal artery',korean:'우신동맥',source:'Right renal artery',color:'#cf8077'},
   {name:'Common hepatic artery',korean:'총간동맥',source:'Common hepatic artery',color:'#d1897e'},
   {name:'Proper hepatic artery',korean:'고유간동맥',source:'Proper hepatic artery',color:'#d79987',scopeNote:'Source trunk and supplied proximal hepatic branches; not a complete intrahepatic arterial tree.'},
   {name:'Gastroduodenal artery',korean:'위십이지장동맥',source:'Gastroduodenal artery',color:'#d79987'},
   {name:'Splenic artery',korean:'비장동맥',source:'Splenic artery',color:'#d1897e'},
   {name:'Left gastric artery',korean:'좌위동맥',source:'Left gastric artery',color:'#d79987'},
   {name:'Anterior division of left renal artery',korean:'좌신동맥 앞가지',source:'Anterior branch of renal artery.l',color:'#d79987'},
   {name:'Posterior division of left renal artery',korean:'좌신동맥 뒤가지',source:'Posterior branch of renal artery.l',color:'#d79987'},
   {name:'Anterior division of right renal artery',korean:'우신동맥 앞가지',source:'Anterior branch of renal artery.r',color:'#d79987'},
   {name:'Posterior division of right renal artery',korean:'우신동맥 뒤가지',source:'Posterior branch of renal artery.r',color:'#d79987'},
   {name:'Left internal iliac artery',korean:'좌내장골동맥',source:'Internal iliac artery.l',color:'#cf8077'},
   {name:'Left external iliac artery',korean:'좌외장골동맥',source:'External iliac artery.l',color:'#d1897e'},
   {name:'Right internal iliac artery',korean:'우내장골동맥',source:'Internal iliac artery.r',color:'#cf8077'},
   {name:'Right external iliac artery',korean:'우외장골동맥',source:'External iliac artery.r',color:'#d1897e'}],
  crop:{min:[-.12,.88,-.065],max:[.11,1.47,.095]},
  connections:[[1,2],[2,3],[2,4],[2,5],[2,6],[4,7],[4,8],[3,9],[9,10],[9,11],[9,12],[9,13],[9,14],[9,15],[9,16],[10,17],[17,18],[17,19],[10,20],[10,21],[15,22],[15,23],[16,24],[16,25],[14,26],[14,27],[13,28],[13,29]],
  forks:[[2,[4,5,6]],[4,[7,8]],[9,[13,14]],[10,[17,20,21]],[17,[18,19]],[15,[22,23]],[16,[24,25]],[14,[26,27]],[13,[28,29]]],
  seeds:{1:[0,1.34,.035],2:[.005,1.39,.01],3:[.02,1.32,-.035]},
  references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways']},
 veins:{title:'하대정맥 · 주요 정맥',file:'z-whole-veins-optimized.glb.gz',spacing:.0008,
  parts:[
   {name:'Inferior vena cava — upper segment',korean:'하대정맥 상부',source:'Inferior vena cava (thoracic part)',color:'#7e9dbb',scopeNote:'Source upper segment extends below the diaphragm; not an exact thoracic/abdominal boundary.'},
   {name:'Inferior vena cava — lower segment',korean:'하대정맥 하부',source:'Inferior vena cava (abdominal part)',color:'#7598b8'},
   {name:'Right renal vein',korean:'우신정맥',source:'Right renal vein',color:'#91adc5'},
   {name:'Left renal vein',korean:'좌신정맥',source:'Left renal vein',color:'#91adc5'},
   {name:'Right common iliac vein',korean:'우총장골정맥',source:'Common iliac vein.r',color:'#7e9dbb'},
   {name:'Left common iliac vein',korean:'좌총장골정맥',source:'Common iliac vein.l',color:'#7e9dbb'},
   {name:'Right internal iliac vein',korean:'우내장골정맥',source:'Internal iliac vein.r',color:'#91adc5'},
   {name:'Right external iliac vein',korean:'우외장골정맥',source:'External iliac vein.r',color:'#91adc5'},
   {name:'Left internal iliac vein',korean:'좌내장골정맥',source:'Internal iliac vein.l',color:'#91adc5'},
   {name:'Left external iliac vein',korean:'좌외장골정맥',source:'External iliac vein.l',color:'#91adc5'},
   {name:'Hepatic venous confluence',korean:'간정맥 합류부',source:'Hepatic veins',color:'#91adc5',scopeNote:'Short source confluence only; not separate right/middle/left hepatic veins or a complete intrahepatic venous tree.'}],
  connections:[[1,2],[2,3],[2,4],[2,5],[2,6],[5,7],[5,8],[6,9],[6,10],[1,11]],
  forks:[[2,[3,4]],[2,[5,6]],[5,[7,8]],[6,[9,10]]],
  seeds:{1:[-.012,1.21,.018],2:[-.009,1.12,.02]},
  references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways']}
};
journeySources.airways=airwaySource;
journeySources.cardiac=cardiacSource;
journeySources['thoracic-veins']=thoracicVeinSource;
journeySources.upper.spacing=.0008;
journeySources.upper.title='입 · 소화관 · 기관지';
journeySources.upper.branchJunctionMaxGap=.004;
journeySources.upper.parts.forEach((part,i)=>{part.system=i>=5&&i<=8?'respiratory':'digestive';part.group=i<2?'입 · 인두':part.system==='respiratory'?'기관 · 주기관지':'소화관';});
journeySources.upper.parts.push(...continuousBronchi);
journeySources.upper.connections.push(...bronchialConnections);
journeySources.upper.bridges.push(...bronchialConnections);
journeySources.upper.forks=[[7,[8,9]],...bronchialForks];
journeySources.vessels.parts.push(...coronaryParts);
journeySources.vessels.connections.push([1,30],[1,31],[31,32]);
journeySources.vessels.forks.push([1,[2,30,31]]);
journeySources.circulation=circulationSource(journeySources);
Object.assign(journeySources,organJourneySources);
Object.assign(journeySources,limbJourneySources);
// A connection is a reviewed source adjacency, not an arbitrary nearest mesh.
for(const [key,config]of Object.entries(journeySources)){config.bridges??=config.connections;config.coordinateFrame??='z-anatomy';config.kind??=key==='upper'?'digestive-airway':key==='veins'?'vein':'artery';}
