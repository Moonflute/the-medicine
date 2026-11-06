// Existing source meshes only. HRA and Z-Anatomy remain distinct specimens.
const airwayReference='https://www.training.seer.cancer.gov/anatomy/respiratory/passages/bronchi.html';
const respiratoryRows=[
 ['Trachea','기관','trachea',0,'기관 · 주기관지'],
 ['Left main bronchus','좌주기관지','left_main_bronchus',1,'기관 · 주기관지'],
 ['Right main bronchus','우주기관지','right_main_bronchus',1,'기관 · 주기관지'],
 ['Left superior lobar bronchus','좌상엽기관지','left_superior_lobar_bronchus',2,'좌상엽'],
 ['Left inferior lobar bronchus','좌하엽기관지','left_inferior_lobar_bronchus',2,'좌하엽'],
 ['Right superior lobar bronchus','우상엽기관지','right_superior_lobar_bronchus',3,'우상엽'],
 ['Bronchus intermedius','중간기관지','right_intermediate_bronchus',3,'기관 · 주기관지'],
 ['Right middle lobar bronchus','우중엽기관지','right_middle_lobar_bronchus',7,'우중엽'],
 ['Right inferior lobar bronchus','우하엽기관지','right_lower_lobar_bronchus',7,'우하엽'],
 ['Left apical bronchus','좌첨기관지','left_apical_bronchus',4,'좌상엽'],
 ['Left anterior segmental bronchus (B3)','좌전분절기관지','left_anterior_bronchus',4,'좌상엽'],
 ['Left lingular bronchus','좌설상기관지','left_lingular_bronchus',4,'좌상엽'],
 ['Left superior lingular bronchus (B4)','좌상설상기관지','left_lingula_superior_bronchus',12,'좌상엽'],
 ['Left inferior lingular bronchus (B5)','좌하설상기관지','left_lingula_inferior_bronchus',12,'좌상엽'],
 ['Left superior segmental bronchus (B6)','좌상분절기관지','left_superior_bronchus',5,'좌하엽'],
 ['Left medial basal bronchus (B7)','좌내측기저기관지','left_medial_basal_bronchus',5,'좌하엽'],
 ['Left anterior basal bronchus (B8)','좌전기저기관지','left_anterior_basal_bronchus',5,'좌하엽'],
 ['Left lateral basal bronchus (B9)','좌외측기저기관지','left_lateral_basal_bronchus',5,'좌하엽'],
 ['Left posterior basal bronchus (B10)','좌후기저기관지','left_posterior_basal_bronchus',5,'좌하엽'],
 ['Right apical segmental bronchus (B1)','우첨분절기관지','right_apical_bronchus',6,'우상엽'],
 ['Right posterior segmental bronchus (B2)','우후분절기관지','right_posterior_bronchus',6,'우상엽'],
 ['Right anterior segmental bronchus (B3)','우전분절기관지','right_anterior_bronchus',6,'우상엽'],
 ['Right lateral segmental bronchus (B4)','우외측분절기관지','right_lateral_bronchus',8,'우중엽'],
 ['Right medial segmental bronchus (B5)','우내측분절기관지','right_medial_bronchus',8,'우중엽'],
 ['Right superior segmental bronchus (B6)','우상분절기관지','right_superior_bronchus',9,'우하엽'],
 ['Right medial basal bronchus (B7)','우내측기저기관지','right_medial_basal_bronchus',9,'우하엽'],
 ['Right anterior basal bronchus (B8)','우전기저기관지','right_anterior_basal_bronchus',9,'우하엽'],
 ['Right lateral basal bronchus (B9)','우외측기저기관지','right_lateral_basal_bronchus',9,'우하엽'],
 ['Right posterior basal bronchus (B10)','우후기저기관지','right_posterior_basal',9,'우하엽'],
];
const connections=respiratoryRows.flatMap((row,i)=>row[3]?[[row[3],i+1]]:[]);
const forks=respiratoryRows.flatMap((_,i)=>{const children=connections.filter(([p])=>p===i+1).map(([,c])=>c);return children.length>1?[[i+1,children]]:[];});
export const airwaySource={
 title:'기관 · 엽기관지 · 분절기관지',file:'lungs.glb.gz',kind:'airway',coordinateFrame:'hra-united-male-v1.10',spacing:.00065,
 source:{url:'https://purl.humanatlas.io/ref-organ/united-male/v1.10',version:'1.10',authors:'Kristen Browne and Heidi Schlehlein'},license:'CC BY 4.0',
 parts:respiratoryRows.map(([name,korean,source,,group],i)=>({name,korean,source:'VH_M_'+source,group,color:i<3?'#dbc0aa':group.includes('상엽')?'#d8b19e':group==='우중엽'?'#d8baa4':'#cfae9d',...(i===0?{hollowShell:true}:{}),
  ...(i===9?{scopeNote:'The source labels this left apical branch separately but provides no separately labelled posterior branch. No universal B1/B2 division is claimed.'}:{}),
  ...(i===15?{scopeNote:'The supplied specimen has a separately labelled left medial basal branch; this is not a claim that all left bronchial trees have the same segmentation.'}:{})})),
 connections,forks,maxJunctionGap:.004,bridges:connections,junctionCoreRadius:.0035,junctionCoreFraction:.8,
 // Source-contact anchors from audit-journey-expansion.mjs. Do not choose
 // a distal shared-daughter fragment as the origin of the basal branches.
 junctionAnchors:{'9:28':[-.049555254,.490887583,-.028374496],'9:29':[-.044156693,.483656943,-.025535554]},
 references:[airwayReference,'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1-organs-and-structures-of-the-respiratory-system']
};

export const thoracicVeinSource={
 title:'상대정맥 · 머리와 상지 정맥',file:'z-whole-veins-optimized.glb.gz',kind:'vein',spacing:.0008,maxJunctionGap:.004,
 parts:[
  ['Superior vena cava','상대정맥','Superior vena cava','상대정맥 · 팔머리정맥'],
  ['Left brachiocephalic vein','좌팔머리정맥','Left brachiocephalic vein','상대정맥 · 팔머리정맥'],
  ['Right brachiocephalic vein','우팔머리정맥','Right brachiocephalic vein','상대정맥 · 팔머리정맥'],
  ['Left subclavian vein','좌쇄골하정맥','Left subclavian vein','좌측 목 · 상지'],
  ['Right subclavian vein','우쇄골하정맥','Right subclavian vein','우측 목 · 상지'],
  ['Left internal jugular vein','좌내경정맥','Internal jugular vein.l','좌측 목 · 상지'],
  ['Right internal jugular vein','우내경정맥','Internal jugular vein.r','우측 목 · 상지'],
  ['Left axillary vein','좌액와정맥','Axillary vein.l','좌측 목 · 상지'],
  ['Right axillary vein','우액와정맥','Axillary vein.r','우측 목 · 상지'],
 ].map(([name,korean,source,group])=>({name,korean,source,group,color:'#87a5c0'})),
 crop:{min:[-.26,1.22,-.08],max:[.26,1.54,.12]},
 connections:[[1,2],[1,3],[2,4],[3,5],[2,6],[3,7],[4,8],[5,9]],
 forks:[[1,[2,3]],[2,[4,6]],[3,[5,7]]],
 references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways']
};

export const coronaryParts=[
 {name:'Right coronary artery',korean:'우관상동맥',source:'Right coronary artery',color:'#d18b7d'},
 {name:'Left coronary artery',korean:'좌관상동맥',source:'Left coronary artery',color:'#d18b7d',scopeNote:'One supplied left coronary source segment; a separate measured left-main/circumflex boundary is not asserted.'},
 {name:'Anterior interventricular artery (LAD)',korean:'좌전하행동맥',source:'Anterior interventricular artery',color:'#d79987'},
];
