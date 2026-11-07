// Original Z-Anatomy frame. Left and right blood spaces are separate circuits.
const pulmonaryFile='z-cardiac-source.glb.gz';
const chamber=(name,korean,circuit)=>({name,korean,source:name,sourceFile:'z-whole-organs.glb.gz',bloodSpace:true,preserveInternalTissue:true,kind:'heart',circuit,group:circuit==='right'?'우심장':'좌심장',color:circuit==='right'?'#a97e85':'#b77672'});
const pulmonary=(name,korean,kind,circuit)=>({name,korean,source:name.replaceAll(' ','_'),sourceFile:pulmonaryFile,kind,circuit,group:kind==='artery'?'폐동맥':'폐정맥',color:kind==='artery'?'#87a5c0':'#c87570'});
export const cardiacSource={
 title:'심장 · 대혈관',kind:'circulation',coordinateFrame:'z-anatomy',file:'z-whole-organs.glb.gz',spacing:.0006,maxClearance:.03,sourceSeamRadius:.0006,maxJunctionGap:.012,expectedComponents:2,
 parts:[
  chamber('Right atrium','우심방','right'),chamber('Right ventricle','우심실','right'),chamber('Left atrium','좌심방','left'),chamber('Left ventricle','좌심실','left'),
  pulmonary('Pulmonary trunk','폐동맥줄기','artery','right'),pulmonary('Right pulmonary artery','우폐동맥','artery','right'),pulmonary('Left pulmonary artery','좌폐동맥','artery','right'),
  pulmonary('Right superior pulmonary vein','우상폐정맥','vein','left'),pulmonary('Right inferior pulmonary vein','우하폐정맥','vein','left'),pulmonary('Left superior pulmonary vein','좌상폐정맥','vein','left'),pulmonary('Left inferior pulmonary vein','좌하폐정맥','vein','left'),
  {name:'Ascending aorta',korean:'상행대동맥',source:'Ascending aorta',sourceFile:'z-whole-arteries-optimized.glb.gz',kind:'artery',circuit:'left',group:'대동맥',color:'#c87570'},
  {name:'Superior vena cava',korean:'상대정맥',source:'Superior vena cava',sourceFile:'z-whole-veins-optimized.glb.gz',kind:'vein',circuit:'right',group:'대정맥',color:'#87a5c0'},
  {name:'Inferior vena cava — upper segment',korean:'하대정맥 상부',source:'Inferior vena cava (thoracic part)',sourceFile:'z-whole-veins-optimized.glb.gz',kind:'vein',circuit:'right',group:'대정맥',color:'#87a5c0'},
  {name:'Coronary sinus',korean:'관상정맥동',source:'Coronary sinus',sourceFile:'z-whole-veins-optimized.glb.gz',kind:'vein',circuit:'right',group:'관상정맥',color:'#87a5c0'}
 ],
 connections:[[1,13],[1,14],[1,15],[1,2],[2,5],[5,6],[5,7],[3,8],[3,9],[3,10],[3,11],[3,4],[4,12]],
 flowConnections:[[13,1],[14,1],[15,1],[1,2],[2,5],[5,6],[5,7],[8,3],[9,3],[10,3],[11,3],[3,4],[4,12]],
 forks:[[1,[13,14,15]],[5,[6,7]],[3,[8,9,10,11]]],
 // AV centres follow the corresponding source inner boundary rings; outflow
 // positions follow the source aortic ring / pulmonary-root leaflet bases.
 valvePassages:{
  '1:2':{name:'Tricuspid orifice',korean:'삼첨판 통과부',center:[-.0120,1.2851,.0301],radius:.008},
  '2:5':{name:'Pulmonary orifice',korean:'폐동맥판 통과부',center:[.0290,1.3260,.0490],radius:.008},
  '3:4':{name:'Mitral orifice',korean:'승모판 통과부',center:[.0237,1.2854,-.0038],radius:.009},
  '4:12':{name:'Aortic orifice',korean:'대동맥판 통과부',center:[.0143,1.3154,.0245],radius:.008}
 },
 seeds:{1:[-.0158,1.3152,.0180],2:[.0208,1.2774,.0606],3:[.0058,1.2990,-.0144],4:[.0478,1.2822,.0228]},
 references:['https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy','https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways'],
 scope:'Source-derived endocardial blood-space reconstruction. Valve passages are shown open for exploration, not a simultaneous physiological valve phase. No pulmonary/systemic microvascular bridge and no septal shortcut.'
};
cardiacSource.bridges=cardiacSource.connections;
cardiacSource.junctionAnchors=Object.fromEntries(Object.entries(cardiacSource.valvePassages).map(([k,v])=>[k,v.center]));
cardiacSource.junctionWindows=Object.fromEntries(Object.entries(cardiacSource.valvePassages).map(([k,v])=>[k,{min:v.center.map(x=>x-.02),max:v.center.map(x=>x+.02)}]));
