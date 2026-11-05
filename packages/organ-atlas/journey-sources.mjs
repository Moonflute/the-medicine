// Metres in the existing Z-Anatomy frame: +X left, +Y superior, +Z anterior.
// This is a source-derived navigation reconstruction, NOT a segmented mucosa.
export function journeyNotice(key){
 const common='기존 원본의 외형·좌표를 바탕으로 만든 내부 탐색용 재구성입니다. 실제 점막·벽 두께·생리적 개폐를 분할한 자료가 아닙니다. 연결부는 원본 위치와 해부학적 순서를 대조해 보강했으며, 표시된 끝은 모델 제공 범위입니다.';
 return common+(key==='upper'?' 혀는 기존 좌표의 표면을, 후두개는 연골 기준으로 좌표 정합한 기존 BodyParts3D 표면을 재사용했습니다. 원본이 구분하지 않는 장관은 묶음 이름으로 표시합니다.':' 장간막동맥은 근위부만 포함하며, 심장 내부·모세혈관·정맥으로 이어지는 전체 순환은 제공하지 않습니다.');
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
 vessels:{title:'대동맥 · 주요 분지',file:'z-whole-arteries-optimized.glb.gz',spacing:.0008,
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
   {name:'Left common iliac artery',korean:'좌총장골동맥',source:'Common iliac artery.l',color:'#d1897e'}],
  crop:{min:[-.085,.975,-.065],max:[.095,1.47,.085]},
  connections:[[1,2],[2,3],[2,4],[2,5],[2,6],[4,7],[4,8],[3,9],[9,10],[9,11],[9,12],[9,13],[9,14]],
  bridges:[[1,2],[2,3],[2,4],[2,5],[2,6],[4,7],[4,8],[3,9],[9,10],[9,11],[9,12],[9,13],[9,14]],
  seeds:{1:[0,1.34,.035],2:[.005,1.39,.01],3:[.02,1.32,-.035]},
  references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways']}
};
