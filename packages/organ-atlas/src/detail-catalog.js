export const detailOptions={thyroid:[['thyroid-larynx','갑상선·후두·신경 함께']],larynx:[["thyroid-larynx","갑상선·후두·신경 함께"],["larynx-framework","후두 연골·인대"],["pharynx-larynx","인두·후두 함께"]],pharynx:[["pharynx-larynx","인두·후두 함께"]],ears:[["auricle-left","왼쪽 귓바퀴 · 원본 표면"],["auricle-right","오른쪽 귓바퀴 · 원본 표면"]],testes:[['testis-vascular-left','왼쪽 고환·혈관'],['testis-vascular-right','오른쪽 고환·혈관'],['testis-outflow-left','왼쪽 고환·정관 연결'],['testis-outflow-right','오른쪽 고환·정관 연결'],['testis-ducts','고환·부고환 (모식 단면)']],adrenals:[['adrenal-zones','부신 피질·수질 (모식 단면)']],heart:[['chordae','판막·건삭'],['conduction','심장 전도계']],kidneys:[['nephron','네프론 확대'],['renal-tree','신장 혈관 분지']],vasculature:[['renal-tree','신장 혈관 분지']]};

export async function loadDetailModel(organId,key){
 const {buildDetailModel}=await import("./anatomical-details.js");
 return buildDetailModel(organId,key);
}

