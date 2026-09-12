export const structuralKorean={body_of_pancreas:'췌장 체부',tail_of_pancreas:'췌장 미부',head_of_pancreas:'췌장 두부',neck_of_pancreas:'췌장 경부',uncinate_process_of_the_pancreas:'췌장 갈고리돌기',dorsal_pancreatic_duct:'배측 췌관',ventral_pancreatic_duct:'복측 췌관',common_bile_duct:'총담관',hepatopancreatic_ampulla:'간췌팽대부',right_hepatic_duct:'우간관',left_hepatic_duct:'좌간관',common_hepatic_duct:'총간관',cystic_duct:'담낭관',gallbladder:'담낭',kidney_capsule:'신장 피막',hilum_of_kidney:'신장문',outer_cortex_of_kidney:'신장 겉질',renal_pelvis:'신우',ureter:'요관',renal_vein:'신정맥',ureteral_orifice:'요관구',trigone_of_urinary_bladder:'방광삼각',urinary_bladder_neck_smooth_muscle:'방광목 평활근',seminal_vesicle:'정낭',ejaculatory_duct:'사정관',prostatic_utricle:'전립샘소실',seminal_colliculus:'정구',prostate_duct:'전립샘관',apex_of_prostate:'전립샘 첨부',base_of_prostate:'전립샘 기저부',peripheral_zone_of_prostate:'전립샘 주변대',transition_zone_of_prostate:'전립샘 이행대',central_zone_of_prostate:'전립샘 중심대',anterior_fibromuscular_stroma:'앞쪽 섬유근성 기질',prostatic_urethra:'전립샘 요도',body_of_uterus:'자궁 체부',fundus_of_uterus:'자궁저부',cornua:'자궁각',lower_uterine_segment:'자궁 하부 분절',posterior_wall_of_uterus:'자궁 후벽',anterior_wall_of_uterus:'자궁 전벽',cervix:'자궁경부',internal_cervical_os:'자궁경부 내구',external_cervical_os:'자궁경부 외구'};
Object.assign(structuralKorean, {
 pulmonary_vein_R_inf:'우하폐정맥', pulmonary_vein_R_sup:'우상폐정맥',
 pulmonary_vein_L_inf:'좌하폐정맥', pulmonary_vein_L_sup:'좌상폐정맥'
});
Object.assign(structuralKorean,{submandibular_gland:'턱밑샘',parotid_gland:'귀밑샘',sublingual_gland:'혀밑샘',buccal_mucosa:'볼점막',frenulum_of_upper_lip:'윗입술소대',frenulum_of_lower_lip:'아랫입술소대',mouth_floor:'입바닥',gingiva_of_lower_jaw:'아래턱 잇몸',ginviva_of_upper_jaw:'위턱 잇몸',posterior_part_of_tongue:'혀 뒤쪽',dorsal_tongue:'혀 등쪽 표면',ventral_tongue:'혀 아래쪽 표면',fungiform_papillae:'버섯유두',circumvallate_papillae:'성곽유두',hard_palate:'단단입천장',mucosa_of_soft_palate:'물렁입천장 점막',set_of_lower_jaw_teeth:'아래 치아 묶음',set_of_upper_jaw_teeth:'위 치아 묶음'});
for(const [key,label] of [['brachiocephalic_artery','팔머리동맥'],['left_common_carotid_artery','왼온목동맥'],['left_subclavian_artery','왼빗장밑동맥'],['descending_aorta','하행대동맥']]){
 for(const segment of ['a','b'])structuralKorean[key+'_'+segment]=label+' · 원본 구획 '+segment.toUpperCase();
}
structuralKorean.renal_column='신장기둥';
for(const [key,label] of [['renal_papilla','신유두'],['renal_pyramid','신장피라미드'],['major_calyx','대신배'],['minor_calyx','소신배']]){
 for(const side of ['L','R'])for(const segment of 'abcdefghij')structuralKorean[key+'_'+side+'_'+segment]=label+' · '+(side==='L'?'좌':'우')+' · 원본 구획 '+segment.toUpperCase();
}
// These source names lack R; original HRA hierarchy assigns all ten to VHMRightKidney.
for(const segment of 'abcdefghij')structuralKorean['renal_pyramid_'+segment]='신장피라미드 · 우 · 원본 구획 '+segment.toUpperCase();
structuralKorean.palatine_tonsil='구개편도';
