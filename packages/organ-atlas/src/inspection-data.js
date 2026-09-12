import {structuralKorean} from './structural-korean.js';
export const coverage = {
brain:'283개 구획. 세부 핵·백질·뇌실 포함. 모든 뇌신경과 미세 신경로를 포함하지 않음.',
lungs:'기관·주기관지·엽/구역 기관지와 폐구역 포함. 세기관지·폐포의 미세 구조 없음.',
heart:'4개 심방/심실·4개 판막·심실중격·유두근 포함. 건삭·전도계와 모든 관상동맥 분지 없음.',
liver:'간 구역·담낭·담도계·간 혈관 포함. 미세 간소엽과 모든 담관 분지는 없음.',
kidneys:'피막·겉질·피라미드·유두·신우·신배·신장 혈관 포함. 네프론 미세 구조 없음.',
pancreas:'머리·목·몸통·꼬리·갈고리돌기와 췌관 포함. 췌도·선방 미세 구조 없음. 원본 개정 비율을 유지.',
spleen:'외표면과 비장문 구획. 적색/백색속질 미세 구조 없음.',
'small-intestine':'십이지장 구획·공장·회장 포함. 융모와 장벽 조직층 없음.',
colon:'맹장·충수·결장 구획·직장·회맹판 포함. 장벽 미세 조직층 없음.',
bladder:'방광 바닥·목·삼각·요관구 포함. 전체 조직층의 별도 모델 없음.',
ureters:'좌우 요관·신우·대신배·소신배 포함. 미세 근육층 없음.',
prostate:'전립선 구역·정낭·사정관·정관 일부 포함. 정관 좌우 원본 명칭과 위치 불일치 후보가 있어 좌우는 미확정으로 표시.',
'spinal-cord':'척수 30개 분절과 척추·추간판 포함. 미골 척수분절·신경근·말총·회백질 단면 없음.',
eyes:'76개 구조. 좌우 안구 내부 구조·시신경·각 6개 외안근·안구 혈관 포함. 망막 세포층과 모든 미세혈관은 없음.',
thymus:'좌우 엽으로 명명된 2개 구조. 원본 좌우 명칭의 위치 검토가 필요하여 좌우는 미확정으로 표시. 미세 소엽 없음.',
skin:'전신 외표면과 복부 피하 지방 구획 포함. 표피·진피·피부 부속기의 별도 모델 없음.',
uterus:'자궁 체부·바닥·벽·경부·경부구 포함. 내막/근층의 별도 조직 모델 없음.',
ovaries:'좌우 외형만 포함. 난포·황체와 겉질/속질 구획 없음.',
'fallopian-tubes':'팽대부·잘록·깔때기·술 포함. 점막 주름과 섬모 미세 구조 없음.',
placenta:'모체/태아 면·양막·탯줄·제대동맥 2개·제대정맥 포함. 모든 융모·교환 미세혈관 없음.',
'lymph-node':'피막·소포·곁겉질·속질·들/날림프관·혈관 포함. 전신의 특정 림프절 위치 모델이 아님.',
knees:'좌우 뼈·관절연골·반월상연골·십자인대·주변 인대와 근육 포함. 모든 부착 섬유와 활막 미세 구조는 없음.',
pelvis:'좌우 장골·좌골·치골과 천골·미골 포함. 전체 인대·골반저 근육 없음.',
urethra:'전립선 요도와 나머지 남성 요도 2개 구획. 막/해면체 요도의 별도 구획 없음.',
vasculature:'106개 수록 혈관. 대동맥·폐순환·관상/신장/장간막/간문맥계와 안구 혈관 일부 포함. 온몸의 완전한 연결망·모든 분지는 아님.'
};
export const routes=[
['대동맥과 활의 분지','aortic_arch|aorta|brachiocephalic_artery|left_common_carotid|left_subclavian'],
['폐순환 혈관','pulmonary_(artery|vein|trunk)'],
['관상혈관','coronary_artery|coronary_sinus|cardiac_vein|(?:anterior|posterior)_descending_artery|right_marginal_artery|left_marginal_branch|diagonal_branch|oblique_vein_of_left_atrium|posterior_vein_of_left_ventricle'],
['신장 혈관','renal_(artery|vein)|renal_artery'],
['복부 장기 혈관·간문맥','celiac_trunk|marginal_artery_of_Drummond|^(?=.*(?:artery|vein))(?=.*(?:mesenteric|colic|sigmoid|rectal|splenic|hepatic|portal|cystic|pancreatic)).*$'],
['대정맥·골반 정맥','vena_cava|brachiocephalic_vein|^(?=.*vein)(?=.*(?:iliac|pudendal|sacral)).*$'],
['안구 혈관','^(?=.*(?:artery|vein))(?=.*(?:ophthalmic|opthalmic|retinal|ciliary)).*$']
];
const eye={left_optic_nerve:'좌시신경',right_optic_nerve:'우시신경',medial_rectus_extraocular_muscle:'내직근',lateral_rectus_extraocular_muscle:'외직근',superior_rectus_extraocular_muscle:'상직근',inferior_rectus_extraocular_muscle:'하직근',superior_oblique_extraocular_muscle:'상사근',inferior_oblique_extraocular_muscle:'하사근',cornea:'각막',sclera:'공막',optic_choroid:'맥락막',retina:'망막',iris:'홍채',lens:'수정체',pupil:'동공',ciliary_body:'섬모체',ciliary_muscle:'섬모체근',ciliary_processes:'섬모체돌기',aqueous_humor:'방수',vitreous_humor:'유리체',suspensory_ligament_of_lens:'수정체소대',trabecular_meshwork:'섬유주',schlemms_canal:'슐렘관',fovea:'중심오목',macula_lutea:'황반',optic_disc:'시신경유두',ora_serrata_of_retina:'망막 톱니둘레',corneo_scleral_junction:'각공막 경계',bulbar_conjunctiva:'안구결막',palpebral_conjunctiva_of_upper_eyelid:'위눈꺼풀결막',palpebral_conjunctiva_of_lower_eyelid:'아래눈꺼풀결막'};
export function partLabel(id,fallback){if(/^VH_M_(left|right)_renal_artery$/.test(id))return '신동맥 · 좌우 검토 중 (원본 '+(id.includes('_left_')?'left':'right')+')';if(id==='VH_F_abdominal_ostium_of_uterine_tube')return '난관 입구 · 원본 명칭/위치 검토 중';const key=id.replace(/^VH_[MF]_/,'').replace(/_[LR]$/,'');const translated=structuralKorean[key.replace(/__+/g,'_')];if(translated)return translated+(/_L$/.test(id)?' · 좌':/_R$/.test(id)?' · 우':'');if(eye[key])return eye[key]+(/_L$/.test(id)?' · 좌':/_R$/.test(id)?' · 우':'');if(/vas_deferens_[LR]$|thymus_lobe_[LR]$/.test(id))return (id.includes('vas_deferens')?'정관':'흉선 엽')+' · 좌우 검토 중 ('+id.slice(-1)+')';return fallback;}

coverage.stomach='BodyParts3D 위 외형 1개. 분문·저부·체부·유문의 별도 구획, 점막 주름·위벽 층·혈관은 미구현. 원본 배포본은 폴리곤이 단순화된 자료이며 HRA 전신 정합은 아직 검증하지 않았습니다.';coverage.esophagus='BodyParts3D 식도 외형 1개. 점막·근육층·괄약근·혈관의 별도 모델 없음. HRA 전신 정합은 아직 검증하지 않았습니다.';

coverage.kidneys+=' 신동맥 원본 좌우 명칭과 위치 불일치 후보가 있어 좌우 필터에서 제외했습니다.';coverage.vasculature+=' 신동맥 좌우 명칭/위치는 검토 중입니다.';

routes.push(['담도·췌관·담낭','hepatic_duct|cystic_duct|common_bile_duct|pancreatic_duct|gallbladder|hepatopancreatic_ampulla']);
routes.push(
 ['심장 판막','^VH_M_(mitral|tricuspid|aortic|pulmonary)_valve$'],
 ['심방·심실·중격','cardiac_atrium|heart_(left|right)_ventricle|interventricular_septum'],
 ['유두근','papillary_muscle_of_heart'],
 ['기관·기관지','trachea$|carina$|_bronchus$|right_posterior_basal$'],
 ['폐구역','bronchopulmonary_segment'],
 ['신장 겉질·기둥·피라미드','outer_cortex_of_kidney|renal_column|renal_pyramid'],
 ['신유두·신배·신우·요관','renal_papilla|major_calyx|minor_calyx|renal_pelvis|ureter_[LR]$'],
 ['무릎 인대','ligament.*knee|cruciate_ligament|collat(eral|erial)_ligament|patellar_ligament'],
 ['관절연골·반월상연골','articular_cartilage_of_knee|meniscus']
);

// Show only groups represented by actual loaded meshes, including combined views.
export function availableRoutes(parts) {
 return routes.map(([label,pattern])=>({label,pattern,count:parts.filter(p=>new RegExp(pattern,'i').test(p.id)).length})).filter(route=>route.count>0);
}
coverage.mouth='21개 원본 구조. 좌우 큰침샘 3쌍, 혀 표면·일부 유두, 치아 묶음·잇몸·구강 점막·입천장 포함. 침샘관·침샘 미세조직·혀의 개별 근육·신경·혈관·치아 내부 층은 미구현. 치아는 개별 치아로 분리되지 않았습니다.';
routes.push(['큰침샘','(?:submandibular|parotid|sublingual)_gland_[LR]$'],['혀·혀유두','(?:part_of_tongue|dorsal_tongue|ventral_tongue|fungiform_papillae|circumvallate_papillae)$'],['치아·잇몸','set_of_(?:lower|upper)_jaw_teeth|gingiva_of_lower_jaw|ginviva_of_upper_jaw']);
routes.push(
 ['팔머리동맥 · 수록 구획 함께','^VH_M_brachiocephalic_artery_[ab]$'],
 ['왼온목동맥 · 수록 구획 함께','^VH_M_left_common_carotid_artery_[ab]$'],
 ['왼빗장밑동맥 · 수록 구획 함께','^VH_M_left_subclavian_artery_[ab]$'],
 ['하행대동맥 · 수록 구획 함께','^VH_M_descending_aorta_[ab]$']
);
coverage.tonsils='좌우 구개편도 외형 2개. 편도음와·림프소포·피막의 분리 모델, 편도 기둥·혈관·신경·인두편도·혀편도는 미구현. 발적·종창의 개념적 병태 예시를 제공합니다. 삼출물·편도주위농양은 미구현입니다.';
