// Metres in the existing Z-Anatomy frame: +X left, +Y superior, +Z anterior.
// This is a source-derived navigation reconstruction, NOT a segmented mucosa.
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
   {name:'Right main bronchus',korean:'우주기관지',source:'Right main bronchus',color:'#d5b6a1'}],
  // Only these anatomical junctions may be opened. No digestive–vascular portal.
  connections:[[1,2],[2,3],[3,4],[4,5],[2,6],[6,7],[7,8],[7,9]],
  bridges:[[2,3],[3,4],[4,5],[6,7],[7,8],[7,9]],
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
   {name:'Right subclavian artery',korean:'우쇄골하동맥',source:'Right subclavian artery',color:'#d79987'}],
  crop:{min:[-.085,1.27,-.065],max:[.095,1.47,.085]},
  connections:[[1,2],[2,3],[2,4],[2,5],[2,6],[4,7],[4,8]],
  bridges:[[1,2],[2,3],[2,4],[2,5],[2,6],[4,7],[4,8]],
  seeds:{1:[0,1.34,.035],2:[.005,1.39,.01],3:[.02,1.32,-.035]},
  references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways']}
};
