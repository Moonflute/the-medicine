// HRA reference-organ surfaces retain their own specimen frame. They must not
// be grafted onto the differently registered Z-Anatomy digestive/cardiac mesh.
const source={name:'Human Reference Atlas · reference organs',url:'https://purl.humanatlas.io/ref-organ/united-male/v1.10'};
const urinaryReference='https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-how-it-works';
const biliaryReference='https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder';
const base={source,license:'CC BY 4.0',coordinateFrame:'hra-united-male-v1.10',maxJunctionGap:.004,maxClearance:.028,distanceUnit:.00005,minRadius:.0002,enforceSurfaceClearance:true,junctionCoreRadius:.0012,junctionCoreFraction:.7,sourceSeamRadius:.0008};
const urinary=(name,korean,mesh,description,extra={})=>({name,korean,source:mesh,hollowShell:true,kind:'urinary',group:'비뇨기계',color:'#d5ad86',description,reference:urinaryReference,...extra});
const biliary=(name,korean,mesh,description,extra={})=>({name,korean,source:mesh,hollowShell:true,kind:'biliary',group:'담도 · 췌관',color:'#baa264',description,reference:biliaryReference,...extra});
export const organJourneySources={
 urinary:{...base,title:'신우 · 요관 · 방광',kind:'urinary',file:'ureters.glb.gz',spacing:.0004,maxJunctionGap:.006,
  parts:[
   urinary('Right renal pelvis','우신우','VH_M_renal_pelvis_R','신배에서 모인 소변이 신우를 거쳐 우요관으로 이어집니다.'),
   urinary('Right ureter','우요관','VH_M_ureter_R','오른쪽 신우와 방광을 잇는 관입니다. 실제 연동운동과 요관방광이음부의 역류 방지는 재현하지 않습니다.'),
   urinary('Urinary bladder','방광',null,'좌우 요관이 연결되는 소변 저장 공간입니다. 원본 방광벽의 외형을 바탕으로 재구성했으며 실제 점막 두께나 팽창 상태를 측정한 모델은 아닙니다.',{sourceFile:'bladder.glb.gz',sources:['VH_M_urinary_bladder_neck_smooth_muscle','VH_M_fundus_of_urinary_bladder_dome','VH_M_fundus_of_urinary_bladder_base1','VH_M_trigone_of_urinary_bladder'],color:'#d4a19a',endNotice:'같은 방광에서 남성 요도로 이어서 탐험할 수 있어요.'}),
   urinary('Left ureter','좌요관','VH_M_ureter_L','왼쪽 신우와 방광을 잇는 관입니다. 좌우 요관은 방광 이전에 서로 연결되지 않습니다.'),
   urinary('Left renal pelvis','좌신우','VH_M_renal_pelvis_L','신배에서 모인 소변이 신우를 거쳐 좌요관으로 이어집니다.')
  ],connections:[[1,2],[2,3],[3,4],[4,5]],flowConnections:[[1,2],[2,3],[5,4],[4,3]],references:[urinaryReference],
  // Orifice patches are surface landmarks, not hollow tubes. Reconstruct only
  // the short intramural opening at their measured source locations.
  junctionAnchors:{'2:3':[-.027281825,.046740459,-.011872711],'3:4':[.020741853,.040153651,-.010322659]},
  junctionWindows:{'2:3':{min:[-.042,.031,-.027],max:[-.012,.062,.003]},'3:4':{min:[.005,.025,-.026],max:[.036,.056,.005]}},
  sourceLandmarks:[{sourceId:'VH_M_ureteral_orifice_R',name:'Right ureteric orifice',part:3,position:[-.027281825,.046740459,-.011872711]},{sourceId:'VH_M_ureteral_orifice_L',name:'Left ureteric orifice',part:3,position:[.020741853,.040153651,-.010322659]},{sourceId:'VH_M_trigone_of_urinary_bladder',name:'Trigone of urinary bladder',part:3,position:[-.003582673,.030371160,-.009430669]}],
  notice:'HRA 원본의 신우·요관·방광 외형과 상대 좌표로 만든 탐험용 공간입니다. 실제 점막·벽 두께·연동운동을 재현하지 않으며 신장 실질·네프론은 포함하지 않습니다. 신우에서는 신배, 방광에서는 남성 요도 영역으로 이어집니다. 다른 표본의 혈관·소화관과는 부위 이동으로 전환합니다.'},
 biliary:{...base,title:'담낭 · 담도 · 췌관',kind:'biliary',file:'gallbladder.glb.gz',spacing:.00025,maxClearance:.014,minRadius:.0001,
  parts:[
   biliary('Gallbladder','담낭','VH_M_gallbladder','담즙을 저장하고 농축하는 공간입니다. 담낭관을 통해 간 밖 담도와 이어집니다.'),
   biliary('Cystic duct','담낭관','VH_M_cystic_duct','담낭과 간 밖 담도를 연결합니다. 담즙은 저장과 배출에 따라 양방향으로 흐를 수 있습니다.'),
   biliary('Common hepatic duct','총간관','VH_M_common_hepatic_duct','좌우 간관이 합류한 뒤 이어지는 관입니다. 담낭관과 만난 다음 총담관으로 이어집니다.'),
   biliary('Right hepatic duct','우간관','VH_M_right_hepatic_duct','오른쪽 간의 담즙을 모읍니다. 원본에 포함된 간 밖 구간까지만 탐험합니다.'),
   biliary('Left hepatic duct','좌간관','VH_M_left_hepatic_duct','왼쪽 간의 담즙을 모읍니다. 원본에 포함된 간 밖 구간까지만 탐험합니다.'),
   biliary('Common bile duct','총담관','VH_M_common_bile_duct','총간관과 담낭관의 합류 뒤 이어져 십이지장 방향으로 담즙을 전달합니다.'),
   biliary('Hepatopancreatic ampulla','간췌팽대','VH_M_hepatopancreatic_ampulla','담관과 췌관이 만나는 원본의 팽대부입니다. 십이지장 개구의 실제 괄약근 운동은 재현하지 않습니다.',{sourceFile:'pancreas.glb.gz',endNotice:'같은 HRA 표본의 십이지장 내림부분으로 이어집니다.'}),
   biliary('Ventral pancreatic duct — source segment','복측 췌관 구간','VH_M_ventral_pancreatic_duct','이 원본이 복측 췌관으로 구분한 구간입니다. 주췌관·부췌관의 개인별 합류 형태를 일반화하지 않습니다.',{sourceFile:'pancreas.glb.gz',color:'#d9b89d'}),
   biliary('Dorsal pancreatic duct — source segment','배측 췌관 구간','VH_M_dorsal_pancreatic_duct','이 원본이 배측 췌관으로 구분한 구간입니다. 세부 췌관 분지는 포함하지 않습니다.',{sourceFile:'pancreas.glb.gz',color:'#d9b89d'})
  ],connections:[[1,2],[2,6],[3,4],[3,5],[3,6],[6,7],[7,8],[8,9]],flowConnections:[[4,3],[5,3],[3,6],[6,7],[9,8],[8,7]],forks:[[3,[4,5]],[6,[2,3]]],references:[biliaryReference],
  notice:'HRA 담낭·담도·췌관의 원본 외형과 상대 좌표를 보존한 탐험용 재구성입니다. 같은 HRA 십이지장과 팽대부에서 이어집니다. 기존 입·소화관은 다른 표본으로 전환합니다. 원본 췌관 구분을 따르며 실제 점막·괄약근·담즙 흐름은 재현하지 않습니다.'}
};
