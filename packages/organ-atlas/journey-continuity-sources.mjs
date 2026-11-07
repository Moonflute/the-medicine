// Same Z-Anatomy body as the mouth/digestive dataset. Source parentage is
// cross-checked against lobar anatomy. Shared left basal stems remain a group.
export const bronchialSourceFile='z-bronchi-source.glb.gz';
const rows=[
 ['Bronchus intermedius','중간기관지','Intermediate_bronchusr',9,'기관 · 주기관지'],
 ['Right superior lobar bronchus','우상엽기관지','Right_superior_lobar_bronchus',9,'우상엽'],
 ['Right middle lobar bronchus','우중엽기관지','Middle_lobar_bronchusr',15,'우중엽'],
 ['Right inferior lobar bronchus','우하엽기관지','Right_inferior_lobar_bronchus',15,'우하엽'],
 ['Right apical segmental bronchus (B1)','우첨분절기관지','Apical_segmental_bronchus_of_right_lung_(BI)',16,'우상엽'],
 ['Right posterior segmental bronchus (B2)','우후분절기관지','Posterior_segmental_bronchus_of_right_lung_(BII)',16,'우상엽'],
 ['Right anterior segmental bronchus (B3)','우전분절기관지','Anterior_segmental_bronchus_of_right_lung_(BIII)',16,'우상엽'],
 ['Right lateral segmental bronchus (B4)','우외측분절기관지','Lateral_segmental_bronchus_of_right_lung_(BIV)',17,'우중엽'],
 ['Right medial segmental bronchus (B5)','우내측분절기관지','Medial_segmental_bronchus_of_right_lung_(BV)',17,'우중엽'],
 ['Right superior segmental bronchus (B6)','우상분절기관지','Superior_segmental_bronchus_of_right_lung_(BVI)',18,'우하엽'],
 ['Right medial basal bronchus (B7)','우내측기저기관지','Medial_basal_segmental_bronchus_of_right_lung_(BVII)',18,'우하엽'],
 ['Right anterior basal bronchus (B8)','우전기저기관지','Anterior_basal_segmental_bronchus_of_right_lung_(BVIII)',18,'우하엽'],
 ['Right lateral basal bronchus (B9)','우외측기저기관지','Lateral_basal_segmental_bronchus_of_right_lung_(BIX)',18,'우하엽'],
 ['Right posterior basal bronchus (B10)','우후기저기관지','Posterior_basal_segmental_bronchus_of_right_lung_(BX)',18,'우하엽'],
 ['Left superior lobar bronchus','좌상엽기관지','Left_superior_lobar_bronchus',8,'좌상엽'],
 ['Left inferior lobar bronchus','좌하엽기관지','Left_inferior_lobar_bronchus',8,'좌하엽'],
 ['Left apicoposterior segmental bronchus (B1+2)','좌첨후분절기관지','Apicoposterior_segmental_bronchus_of_left_lung_(BI+BII)',29,'좌상엽'],
 ['Left anterior segmental bronchus (B3)','좌전분절기관지','Anterior_segmental_bronchus_of_left_lung_(BIII)',29,'좌상엽'],
 ['Left superior lingular bronchus (B4)','좌상설상기관지','Superior_lingular_segmental_bronchus_of_left_lung_(BIV)',29,'좌상엽'],
 ['Left inferior lingular bronchus (B5)','좌하설상기관지','Inferior_lingular_segmental_bronchus_of_left_lung_(BV)',29,'좌상엽'],
 ['Left superior segmental bronchus (B6)','좌상분절기관지','Superior_segmental_bronchus_of_left_lung_(BVI)',30,'좌하엽'],
 ['Left basal bronchi','좌하엽 기저기관지군','Left_basal_bronchi',30,'좌하엽'],
];
export const continuousBronchi=rows.map(([name,korean,source,parent,group],i)=>({name,korean,source,sourceFile:bronchialSourceFile,parent,group,system:'respiratory',color:'#d5b6a1',...(i+15===36?{
 sourceMeshes:['Medial_basal_segmental_bronchus_of_left_lung_(BVII)','Anterior_basal_segmental_bronchus_of_left_lung_(BVIII)','Lateral_basal_segmental_bronchus_of_left_lung_(BIX)','Posterior_basal_segmental_bronchus_of_left_lung_(BX)','(Anteromedial_basal_segmental_bronchus_of_left_lung)'],
 scopeNote:'The source basal branches share continuation stems across separately named meshes. Preserve their combined source geometry without claiming measured B7–B10 boundaries or manufacturing separate lobar origins.'
 }:{})}));
export const bronchialConnections=rows.map((r,i)=>[r[3],i+15]);
export const bronchialForks=[...new Set(rows.map(r=>r[3]))].map(parent=>[parent,bronchialConnections.filter(([a])=>a===parent).map(([,b])=>b)]).filter(([,children])=>children.length>1);
