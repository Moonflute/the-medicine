// Screening findings are separate from source ontology attribution.
const issues={
 renal:{code:'source-laterality-conflict',message:'신동맥 원본 좌우 이름과 신장 피막 기준 배치가 불일치하는 후보입니다.',evidence:'qa/laterality-spatial-audit.json'},
 paired:{code:'source-laterality-conflict',message:'원본 좌우 이름과 공간 배치의 일치 여부를 검토 중입니다.',evidence:'qa/laterality-spatial-audit.json'},
 ostium:{code:'source-name-location-conflict',message:'원본은 복강쪽 난관 입구로 명명했으나 자궁각 인접 위치여서 명칭과 위치를 검토 중입니다.',evidence:'qa/current-anatomy-inventory.json'}
};
export function getAnatomyReview(partId){
 const issue=/^VH_M_(left|right)_renal_artery$/.test(partId)?issues.renal:/vas_deferens_[LR]$|thymus_lobe_[LR]$/.test(partId)?issues.paired:partId==='VH_F_abdominal_ostium_of_uterine_tube'?issues.ostium:null;
 return {status:issue?'needs-review':'not-expert-reviewed',issues:issue?[{...issue}]:[]};
}
