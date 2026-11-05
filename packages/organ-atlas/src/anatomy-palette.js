// Familiar teaching-atlas conventions, not a claim about literal tissue color.
// Vessels follow oxygenation, including the pulmonary circulation exceptions.
// https://www.texasheart.org/heart-health/heart-information-center/topics/vasculature-of-the-torso/
export const tissuePalette={
 artery:'#c52f37',vein:'#2d65ad',nerve:'#dfb62e',brain:'#dec78b',
 muscle:'#a74742',bone:'#e3d5b5',tooth:'#efe6d3',cartilage:'#9ebfc9',
 connective:'#e3d8bf',tendon:'#ece1c9',valve:'#e6d8bd',conduction:'#d7ab28',
 mucosa:'#cb8981',fat:'#dfba60',bile:'#548b46',lymph:'#779653',fluid:'#a5c8d5',duct:'#dac4a2',
};
export const organPalette={
 brain:tissuePalette.brain,'spinal-cord':'#e1cd98',heart:'#a73637',lungs:'#cf9296',
 liver:'#854839',kidneys:'#a34a40',stomach:'#d29989',esophagus:'#c98e81',
 'small-intestine':'#d2a28a',colon:'#c68e7e',pancreas:'#dcb75e',gallbladder:tissuePalette.bile,
 spleen:'#78465f',adrenals:'#d4ae51',thyroid:'#a95645',testes:'#d5ba91',
 bladder:'#d0ac8e',ureters:'#d5baa0',urethra:'#cbaa8d',prostate:'#b58a72',
 uterus:'#be7a73',ovaries:'#d5b49a','fallopian-tubes':'#cb978d',
 mouth:tissuePalette.mucosa,tonsils:'#b9797e',thymus:'#c99187','lymph-node':tissuePalette.lymph,
 skeleton:tissuePalette.bone,knees:tissuePalette.bone,pelvis:tissuePalette.bone,
 larynx:tissuePalette.cartilage,pharynx:tissuePalette.muscle,nose:tissuePalette.bone,
 ears:'#d1ac91',eyes:tissuePalette.tooth,skin:'#d7b89d',vasculature:tissuePalette.artery,
};
export const normalizeStructureName=name=>String(name??'').toLowerCase().replaceAll('_',' ');
export function vesselColor(name){
 const n=normalizeStructureName(name);
 if(/pulmonary.*(arter|trunk)/.test(n))return tissuePalette.vein;
 if(/pulmonary.*vein/.test(n))return tissuePalette.artery;
 if(/vein|vena|venous|venule|coronary sinus/.test(n))return tissuePalette.vein;
 if(/arter|aort|celiac trunk/.test(n))return tissuePalette.artery;
 return null;
}
export function wholeOrganColor(name,system){
 const n=normalizeStructureName(name),vessel=vesselColor(n);if(vessel)return vessel;
 if(/trachea|bronchus|bronchi/.test(n))return tissuePalette.cartilage;
 if(/renal pelvis|calyx|calyces/.test(n))return tissuePalette.duct;
 for(const [pattern,id] of [[/atrium|ventricle|heart/,'heart'],[/lung/,'lungs'],[/liver/,'liver'],[/kidney/,'kidneys'],[/pancreas/,'pancreas'],[/gallbladder|bile duct|hepatic duct|cystic duct/,'gallbladder'],[/spleen/,'spleen'],[/suprarenal|adrenal/,'adrenals'],[/thyroid/,'thyroid'],[/testis|epididymis/,'testes'],[/bladder/,'bladder'],[/ureter/,'ureters'],[/urethra/,'urethra'],[/prostate/,'prostate'],[/oesophagus|esophagus/,'esophagus'],[/stomach/,'stomach'],[/duodenum|jejunum|ileum/,'small-intestine'],[/colon|appendix|rectum/,'colon'],[/thymus/,'thymus'],[/tongue|salivary|parotid|sublingual|submandibular/,'mouth']])if(pattern.test(n))return organPalette[id];
 if(/ductus deferens|deferent duct/.test(n))return tissuePalette.duct;
 return ({respiratory:tissuePalette.mucosa,lymphatic:tissuePalette.lymph,reproductive:organPalette.prostate})[system]||tissuePalette.mucosa;
}
