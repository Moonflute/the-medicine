// Educational, qualitative scenarios. Intensity is a visual control, not a clinical grade.
const p=(id,label,target,color,change,kind='highlight',amount=0)=>({id,label,target,color,change,kind,amount});
export const pathology={
brain:[p('ventriculomegaly','뇌실 확장','lateral_ventricle|third_ventricle','#8eadd1','뇌실 공간을 강조·확대해 주변 뇌조직과의 관계를 살펴봅니다. 뇌압이나 실제 조직 변형은 계산하지 않습니다.','expand',.18)],
heart:[p('dilated','좌심실 확장','heart_left_ventricle','#b883a6','좌심실 확장과 수축 움직임 감소의 개념적 예시입니다. 심실벽 두께·박출률·판막 역류를 계산하지 않으며 다른 심실 침범과 심부전 전체를 대표하지 않습니다.','expand',.12),p('myocarditis','심근 염증','^VH_M_heart_(right|left)_ventricle$','#c97566','심실의 염증 영향 부위를 강조합니다. 조직학적 염증을 직접 재현하지 않습니다.')],
lungs:[p('pneumonia','우하폐 구역 폐렴','right_.*basal_bronchopulmonary_segment','#c59a73','선택한 폐구역의 염증·경화 범위를 강조합니다. 폐포 내 액체의 미세 구조는 생략합니다.'),p('airway','기관지 협착','main_bronchus|lobar_bronchus','#ba8ba9','기관지 경로의 협착 위치를 강조합니다. 실제 내강 단면적은 계산하지 않습니다.')],
liver:[p('steatosis','지방간','^VH_M_(?:.*_segment|.*_lobe_of_liver)$','#d3b564','간 실질의 지방 축적을 색 변화로 표현합니다. 지방 함량의 정량 지도는 아닙니다.')],
kidneys:[p('hydronephrosis','신우·신배 확장','renal_pelvis|calyx','#8baed3','신우·신배의 확장을 개념적으로 표시합니다. 원인·폐쇄 위치를 판정하지 않으며 소변 흐름·압력·신실질 얇아짐을 계산하지 않습니다.','expand',.16)],
pancreas:[p('pancreatitis','췌장 염증','of_pancreas|process_of_the_pancreas','#d18d7b','췌장 실질의 염증 범위를 강조합니다. 괴사·주변 액체저류를 모두 표현하지 않습니다.')],
spleen:[p('splenomegaly','비장비대','spleen','#b886a8','비장비대의 영향을 받는 장기 범위를 강조합니다. 실제 크기 측정은 제공하지 않습니다.')],
'small-intestine':[p('ileitis','말단 회장염','ileum_terminal','#d08a70','말단 회장의 국소 염증 범위를 강조합니다. 누공·협착 등 합병증은 별도 모델이 필요합니다.')],
colon:[p('colitis','원위부 대장염','rectum|sigmoid_colon','#cb8d84','직장·구불결장의 염증 범위를 강조합니다. 모든 대장염의 분포를 뜻하지 않습니다.')],
bladder:[p('cystitis','방광염','urinary_bladder|trigone','#d18f8c','방광의 염증 영향 부위를 표시합니다. 점막 조직층은 개념적으로 생략합니다.')],
ureters:[p('dilation','상부요로 확장','renal_pelvis|calyx|ureter_[LR]','#95aed0','소변 배출 장애와 관련된 상부요로 확장 개념을 표시합니다. 실제 압력은 계산하지 않습니다.','expand',.10)],
prostate:[p('bph','이행대 비대','transition_zone','#bc8a9c','이행대 비대를 강조하고 전립선 요도와의 관계를 살펴봅니다. 요도 압박량을 수치화하지 않습니다.','expand',.18)],
'spinal-cord':[p('cervical','경수 손상 부위','C5_segment|C6_segment','#be8c9e','경수 C5–C6 분절을 손상 위치 예시로 표시합니다. 특정 환자의 손상 범위를 뜻하지 않습니다.')],
eyes:[p('cataract','백내장','^VH_M_lens_[LR]$','#e5d7ae','수정체 혼탁을 투명도와 색 변화로 표현합니다. 시력 저하량은 계산하지 않습니다.','opacity',.95),p('glaucoma','시신경 손상','optic_nerve|optic_disc','#b7a077','시신경과 시신경유두를 강조합니다. 녹내장성 함몰·안압·시야결손을 모두 재현하지 않습니다.')],
thymus:[p('thymic','흉선 병변 위치','thymus_lobe','#c594a6','흉선 병변을 탐색할 수 있는 장기 범위를 표시합니다. 종양의 형태나 조직형은 생성하지 않습니다.')],
skin:[p('dermatitis','피부 염증 범위','skin','#ca9386','피부 표면의 염증 색 변화 예시입니다. 실제 발진의 분포·미세 병변은 생략합니다.')],
uterus:[p('myometrium','자궁벽 병변 위치','wall_of_uterus|body_of_uterus','#c590a1','자궁벽의 영향을 받는 범위를 강조합니다. 근종 결절이나 조직층을 새로 생성하지 않습니다.')],
ovaries:[p('ovarian','난소 병변 위치','ovary','#c899af','난소의 병변 평가 범위를 표시합니다. 낭종의 내부 구조를 재현한 모델은 아닙니다.')],
'fallopian-tubes':[p('salpingitis','난관염','uterine_tube|fallopian_tube','#cb968b','난관의 염증 부위를 강조합니다. 유착·폐쇄 여부를 계산하지 않습니다.')],
placenta:[p('placental','태반 혈관 영향','placenta_vessels|umbilical_artery','#b391ac','태반·제대동맥의 영향을 받는 구조를 표시합니다. 태반 기능부전의 혈류량을 계산하지 않습니다.')],
'lymph-node':[p('reactive','반응성 림프절','follicles|paracortex','#b5a277','면역 반응에 관여하는 소포·곁겉질을 강조합니다. 세포 증식의 미세 구조는 생략합니다.')],
knees:[p('cartilage','관절연골 손상','articular_cartilage_of_knee|meniscus','#c0a080','관절연골·반월상연골을 강조합니다. 연골 결손이나 파열선을 임의 생성하지 않습니다.')],
pelvis:[p('bone','골반뼈 병변 위치','pubis|ilium|ischium|sacrum','#bfa78f','골반뼈 병변의 해부 위치를 살펴봅니다. 골절선이나 골밀도 변화 모델은 아닙니다.')],
urethra:[p('stricture','요도협착 위치','urethra','#bb92a4','요도의 협착 평가 경로를 강조합니다. 실제 협착 내강을 재현하지 않습니다.')],
vasculature:[p('vascular','대동맥 질환 위치','aortic|aorta','#c7986f','대동맥의 병변 평가 경로를 강조합니다. 플라크·박리막·혈전 형상은 별도 검증이 필요합니다.')]
};
export const physiologicalMotion={heart:{target:'^VH_M_(?:heart_(?:left|right)_ventricle|(?:left|right)_cardiac_atrium)$',frequency:1.1,amplitude:.018,label:'수축·이완 개념 모션'},lungs:{target:'bronchopulmonary_segment',frequency:.22,amplitude:.012,label:'호흡 개념 모션'}};

pathology.stomach=[];pathology.esophagus=[];
pathology.mouth=[{...p('parotitis','귀밑샘 종창','^VH_M_parotid_gland_[LR]$','#c58a84','귀밑샘 한쪽 또는 양쪽의 종창을 개념적 확대로 비교합니다. 확대 강도는 임상 중증도가 아니며 주변 피부·조직 변형과 침샘관 폐쇄는 재현하지 않습니다.','expand',.12),references:['https://www.cdc.gov/mumps/hcp/clinical-signs/index.html']}];
// References support the qualitative feature, not the mesh deformation or its scale.
for(const [organ,id,references] of [
 ['heart','dilated',['https://www.nhlbi.nih.gov/health/cardiomyopathy/types']],
 ['kidneys','hydronephrosis',['https://medlineplus.gov/ency/article/000506.htm','https://medlineplus.gov/ency/article/000474.htm']],
 ['pancreas','pancreatitis',['https://www.niddk.nih.gov/health-information/digestive-diseases/pancreatitis/definition-facts']]
])pathology[organ].find(s=>s.id===id).references=references;
pathology.tonsils=[{...p('tonsillitis','편도염 · 발적·종창','^VH_M_palatine_tonsil_[LR]$','#c87f86','구개편도의 발적과 종창을 색·개념적 확대로 표시합니다. 삼출물·편도주위농양·기도 폐쇄·감염 원인은 재현하지 않습니다. 표현 강도는 임상 등급이 아닙니다.','expand',.12),references:['https://111.wales.nhs.uk/Tonsillitis/']}];
