import type { DomainNote } from "@/lib/webdb";
import { NUMERIC_PANELS, VITAL_SIGNS, numberAt, type NumericField } from "./lab-engine";

export const ALL_LAB_FIELDS: NumericField[] = [...NUMERIC_PANELS.flatMap(panel => panel.fields), ...VITAL_SIGNS.flatMap(vital => vital.fields)];
export type RangeOverride = { low: string; high: string };
export type LabDraft = { values: Record<string, string>; ranges: Record<string, RangeOverride>; panel: string; selected: string; sex: "female" | "male"; collectedAt: string; context: string };
export const EMPTY_LAB_DRAFT: LabDraft = { values: {}, ranges: {}, panel: "CBC", selected: "wbc", sex: "female", collectedAt: "", context: "" };
export const LAB_DRAFT_KEY = "medicine-lab-workbench-v1";

export function restoreLabDraft(raw: string | null): LabDraft {
  if (!raw) return { ...EMPTY_LAB_DRAFT };
  try {
    const input = JSON.parse(raw);
    if (!input || typeof input !== "object") return { ...EMPTY_LAB_DRAFT };
    const strings = (value: unknown): Record<string, string> => value && typeof value === "object" && !Array.isArray(value) ? Object.fromEntries(Object.entries(value).filter(([,v]) => typeof v === "string")) : {};
    const ranges: Record<string, RangeOverride> = {};
    if (input.ranges && typeof input.ranges === "object") for (const [key, value] of Object.entries(input.ranges)) {
      if (value && typeof value === "object" && "low" in value && "high" in value && typeof value.low === "string" && typeof value.high === "string") ranges[key] = {low:value.low, high:value.high};
    }
    return { values: strings(input.values), ranges, panel: typeof input.panel === "string" ? input.panel : "CBC", selected: typeof input.selected === "string" ? input.selected : "wbc", sex: input.sex === "male" ? "male" : "female", collectedAt: typeof input.collectedAt === "string" ? input.collectedAt : "", context: typeof input.context === "string" ? input.context : "" };
  } catch { return { ...EMPTY_LAB_DRAFT }; }
}
export function effectiveRange(field: NumericField, override?: RangeOverride) {
  return override ? {low:numberAt(override,"low"), high:numberAt(override,"high")} : {low:field.low, high:field.high};
}
export function invalidRange(override?: RangeOverride) {
  if (!override) return false;
  const lo=numberAt(override,"low"), hi=numberAt(override,"high");
  return (!!override.low.trim() && lo === undefined) || (!!override.high.trim() && hi === undefined) || (lo !== undefined && hi !== undefined && lo > hi);
}
export function labValueStatus(field: NumericField, raw?: string, override?: RangeOverride): "empty" | "invalid" | "unknown" | "low" | "high" | "normal" {
  if (!raw?.trim()) return "empty";
  const value=numberAt({value:raw},"value");
  if (value === undefined || value < 0 || invalidRange(override)) return "invalid";
  const {low,high}=effectiveRange(field,override);
  if (low === undefined && high === undefined) return "unknown";
  return low !== undefined && value < low ? "low" : high !== undefined && value > high ? "high" : "normal";
}
export function formatRange(field: NumericField, override?: RangeOverride) {
  if (invalidRange(override)) return "범위 확인";
  const {low, high}=effectiveRange(field,override);
  if(low === undefined && high === undefined) return "검사실 기준";
  return low === undefined ? "≤ "+high : high === undefined ? "≥ "+low : low+"–"+high;
}

// Explicit links refer to the same analyte or its named panel, never a related test.
export const FIELD_NOTE_TITLES: Record<string,string> = {
 serumOsmolality:"Serum Osmolality",urineOsmolality:"Urine Osmolality",urineSodium:"Urine Sodium",upcr:"Urine Protein-Creatinine Ratio (UPCR)",troponinXuln:"Troponin",ldh:"Lactate Dehydrogenase (LDH)",absoluteLymphocyteCount:"White Blood Cell Differential",eosinophilPct:"White Blood Cell Differential",
 rbc:"Red Blood Cell Count (RBC)",rbcMale:"Red Blood Cell Count (RBC)",hct:"Hematocrit",hctMale:"Hematocrit",mch:"Mean Corpuscular Hemoglobin and MCHC (MCH-MCHC)",mchc:"Mean Corpuscular Hemoglobin and MCHC (MCH-MCHC)",rdw:"Red Cell Distribution Width (RDW)",
 wbc:"White Blood Cell Count (WBC)", hemoglobin:"Hemoglobin", hemoglobinMale:"Hemoglobin", mcv:"Mean Corpuscular Volume (MCV)", platelet:"Platelet Count",
 na:"Sodium",k:"Potassium",cl:"Chloride",hco3:"Bicarbonate (Total CO2)",ca:"Calcium",mg:"Magnesium",phos:"Phosphate",bun:"Blood Urea Nitrogen (BUN)",creatinine:"Creatinine",egfr:"Estimated Glomerular Filtration Rate (eGFR)",
 glucose:"Blood Glucose",a1c:"Hemoglobin A1C (HbA1c)",ast:"Aspartate Aminotransferase (AST)",alt:"Alanine Aminotransferase (ALT)",alp:"Alkaline Phosphatase (ALP)",bilirubin:"Total Bilirubin",albumin:"Albumin",
 crp:"C-Reactive Protein (CRP)",pct:"Procalcitonin",lactate:"Lactate",inr:"Prothrombin Time and INR (PT-INR)",ddimer:"D-dimer",totalIge:"Immunoglobulin E (IgE)",
 ph:"Arterial Blood Gas Analysis (ABGA)",paco2:"Arterial Blood Gas Analysis (ABGA)",abgHco3:"Arterial Blood Gas Analysis (ABGA)",pao2:"Arterial Blood Gas Analysis (ABGA)",
 tsh:"Thyroid-Stimulating Hormone (TSH)",freeT4:"Free Thyroxine (Free T4)",cortisol8am:"Cortisol",postDexCortisol:"Cortisol",prolactin:"Prolactin",betaHcg:"Beta-human Chorionic Gonadotropin (beta-hCG)",c3:"Complement C3",c4:"Complement C4",
 urineSg:"Urine Specific Gravity",urinePh:"Urine pH",urineRbc:"Urine Red Blood Cells (Urine RBC)",urineWbc:"Urine White Blood Cells (Urine WBC)",uacr:"Urine Albumin-Creatinine Ratio (UACR)",
 totalCholesterol:"Cholesterol Levels (Lipid Panel)",ldl:"Cholesterol Levels (Lipid Panel)",hdl:"Cholesterol Levels (Lipid Panel)",triglyceride:"Cholesterol Levels (Lipid Panel)",
 lipaseXuln:"Lipase",lipase:"Lipase",ferritin:"Ferritin",bnp:"Natriuretic Peptide Tests (BNP, NT-proBNP)",ntProbnp:"Natriuretic Peptide Tests (BNP, NT-proBNP)",
 serumOsm:"Serum Osmolality",urineOsm:"Urine Osmolality",urineNa:"Urine Sodium",fibrinogen:"Fibrinogen",apttRatio:"Activated Partial Thromboplastin Time (aPTT)",anc:"White Blood Cell Differential",
 csfWbc:"CSF analysis",csfNeutrophilPct:"CSF analysis",csfProtein:"CSF analysis",csfGlucose:"CSF analysis",csfLactate:"CSF analysis",
 urineProtein:"Urine Protein",urineBlood:"Urine Blood and Hemoglobin",urineGlucose:"Urine Glucose",urineKetone:"Urine Ketone",urineNitrite:"Urine Nitrite",urineLe:"Urine Leukocyte Esterase"
};
export function fieldNote(id:string, notes:DomainNote[]) { return notes.find(note => note.title === FIELD_NOTE_TITLES[id]); }
export const FIELD_GUIDANCE: Record<string,string> = {
 afp:"태아단백 지표입니다. 간질환·간 종양·임신 등 맥락과 함께 해석하며 단독 수치로 종양을 확진하거나 배제하지 않습니다.",
 uricAcid:"요산은 purine 대사산물입니다. 신장 배설, 약물, 통풍 및 종양대사 맥락을 함께 확인합니다.",
 transferrinSat:"Transferrin의 철 포화도입니다. ferritin·빈혈·염증 상태와 함께 철결핍 또는 철 과부하 가능성을 평가합니다.",
 vitaminB12:"비타민 B12 상태를 평가합니다. 대구성 빈혈·신경 증상 및 경계값에서 MMA·homocysteine을 함께 확인합니다.",
 folate:"엽산 상태를 평가합니다. 식이·약물·흡수 문제를 확인하며 대구성 빈혈에서는 B12도 함께 봅니다.",
 reticulocytePct:"망상적혈구 분율은 골수의 적혈구 생산 반응을 반영합니다. 빈혈 정도에 따라 절대수 또는 보정 생산지수로 해석합니다.",
 haptoglobin:"혈중 유리 hemoglobin을 결합하는 단백입니다. 용혈에서 감소할 수 있지만 간 합성 저하·염증이 해석에 영향을 줍니다.",
 adamts13Activity:"ADAMTS13 활성은 혈전성 미세혈관병증 감별에 사용합니다. 혈소판·용혈 소견과 치료 전 채혈 여부를 함께 확인합니다.",
 ckXuln:"CK를 검사실 상한값으로 나눈 배수입니다. 근육 손상·운동·약물과 함께 보고 K·신기능·소변 소견을 확인합니다.",
 betaHydroxybutyrate:"혈중 주요 ketone 정량값입니다. glucose·산염기 상태와 함께 해석하며 금식 및 당뇨병 맥락을 확인합니다.",
 fena:"나트륨 분획배설률입니다. 급성 신손상에서 보조 지표로 사용하며 이뇨제·CKD 등에서 해석이 제한됩니다.",
 feUrea:"요소 분획배설률입니다. 급성 신손상 평가의 보조 지표이며 단독으로 원인을 확정하지 않습니다.",
 sbp:"수축기 혈압입니다. 안정 상태의 반복 측정과 이완기 혈압·증상·기존 혈압을 함께 확인합니다.",
 dbp:"이완기 혈압입니다. 수축기 혈압과 함께 평가하고 커프 크기·측정 자세를 확인합니다.",
 heartRate:"분당 심박수입니다. 리듬, 활동·발열·통증·약물과 혈역학적 상태를 함께 확인합니다.",
 respiratoryRate:"분당 호흡수입니다. 호흡 노력·산소포화도·의식 상태와 함께 평가합니다.",
 temperature:"체온은 측정 부위와 방법에 영향을 받습니다. 발열·저체온 여부를 증상 및 경과와 함께 확인합니다.",
 acth8am:"뇌하수체 ACTH와 같은 시점의 아침 cortisol을 함께 비교해 부신 축을 평가합니다. 채혈 시각·검체 처리·스테로이드 투여를 확인합니다.",
 postDexCortisol:"1 mg overnight dexamethasone 억제검사 후 cortisol입니다. 일반 아침 cortisol 참고범위를 적용하지 않습니다.",
 pthIntact:"칼슘 조절 호르몬입니다. Ca·phosphate·신기능·25-OH vitamin D와 함께 해석하며 Ca가 높은 상황에서 PTH가 억제되는지 확인합니다.",
 vitaminD25oh:"비타민 D 상태를 평가하는 25-OH 형태입니다. PTH·Ca·골질환·보충제 복용과 검사실 기준을 함께 확인합니다.",
 igf1Xuln:"IGF-1을 연령·성별 보정 상한값으로 나눈 배수입니다. 단독 상승으로 확진하지 않으며 반복 검사와 GH 억제검사 맥락을 확인합니다.",
 fsh:"생식샘 기능을 조절하는 뇌하수체 호르몬입니다. LH·성호르몬, 월경주기·폐경·성별·연령과 함께 해석합니다.",
 lh:"뇌하수체-생식샘 축 지표입니다. FSH·estradiol/testosterone과 함께 보고 주기·호르몬 치료를 확인합니다.",
 estradiol:"에스트로겐 상태를 나타냅니다. 월경주기·임신·폐경·호르몬 치료에 따라 수치가 크게 달라집니다.",
 testosterone:"성호르몬 평가에 사용합니다. 아침 반복 측정, 성별·연령·SHBG와 증상 맥락이 필요합니다.",
 aldosterone:"Na 보존·K 배설에 관여합니다. renin과 함께 평가하며 자세·염분·저칼륨혈증·약물이 ARR에 영향을 줍니다.",
 reninPra:"혈장 renin 활성입니다. aldosterone과의 비율은 정해진 단위와 채혈 조건에서만 해석합니다.",
 rheumatoidFactor:"류마티스인자입니다. 양성만으로 류마티스관절염을 확진하지 않으며 관절 증상·anti-CCP·감염 등을 함께 봅니다.",
 antiCcp:"류마티스관절염 감별에 쓰는 항체입니다. 관절염 소견과 검사실 cutoff를 함께 판단합니다.",
 anaTiter:"ANA 희석배수의 분모를 입력합니다(1:80 → 80). 양성만으로 자가면역질환을 진단하지 않으며 pattern·증상·특이 항체를 확인합니다.",
 antiDsDnaXuln:"검사실 상한값 대비 배수입니다. SLE 평가에서 보체·요검사·증상과 함께 해석합니다.",
 pr3AncaXuln:"PR3-ANCA의 검사실 상한값 대비 배수입니다. 혈관염 감별에서 장기 침범 소견과 함께 확인합니다.",
 mpoAncaXuln:"MPO-ANCA의 검사실 상한값 대비 배수입니다. 신장·폐 침범, 약물과 감염 가능성을 함께 평가합니다.",
 saag:"같은 시점의 혈청 albumin에서 복수 albumin을 뺀 값입니다. 문맥압 항진 관련 복수 감별에 사용합니다.",
 asciticPmn:"복수 다형핵호중구 수입니다. 배양 결과·항생제 투여·임상 감염 소견과 함께 확인합니다.",
 pleuralProteinRatio:"흉수 단백질/혈청 단백질 비율입니다. LDH 비율 및 흉수 LDH/혈청 LDH 상한값과 함께 Light 기준에 사용합니다.",
 pleuralLdhRatio:"흉수 LDH/혈청 LDH 비율입니다. 같은 시점 검체인지 확인하고 다른 Light 기준과 함께 판단합니다.",
 pleuralLdhUlnRatio:"흉수 LDH를 혈청 LDH 참고 상한값으로 나눈 배수입니다. 단순 혈청 LDH 비율과 구분합니다.",
 pleuralPh:"흉수 pH입니다. 감염성 흉수 평가에 쓰며 검체 오염·공기 노출·지연에 유의합니다.",
 pleuralGlucose:"흉수 glucose입니다. 낮은 값은 감염·염증·종양 등과 함께 해석합니다.",
 pleuralAda:"흉수 ADA입니다. 결핵성 흉수 감별에 참고하지만 단독으로 확진하거나 배제하지 않습니다.",
 pleuralTriglyceride:"흉수 triglyceride입니다. 유미흉 감별에서 외관·영양 상태·chylomicron 검사와 함께 평가합니다.",
 asciticTriglyceride:"복수 triglyceride입니다. 유미성 복수 여부를 검토하며 원인 질환 평가가 필요합니다.",
 ceruloplasmin:"구리 운반 단백입니다. Wilson병 감별에서 요 구리·간 소견과 함께 보며 단독 저하로 진단하지 않습니다.",
 urineCopper24h:"24시간 소변 구리 배설량입니다. 수집의 완전성, 치료 여부와 간질환 맥락을 확인합니다.",
 hepaticCopper:"간 조직 건조중량당 구리입니다. 조직검사·담즙정체·검체 변이를 함께 고려합니다.",
 alpBilirubinRatio:"ALP/총 bilirubin 비율입니다. ALP U/L, bilirubin mg/dL 단위로 계산한 값만 적용합니다.",
 balEosinophilPct:"기관지폐포세척액 호산구 분율입니다. 호산구성 폐질환·약물·감염 및 영상 소견을 함께 확인합니다.",
 balLymphocytePct:"기관지폐포세척액 림프구 분율입니다. 노출력·감염·간질성 폐질환의 다른 근거와 함께 해석합니다.",
 balCd4Cd8Ratio:"BAL CD4/CD8 비율입니다. 단독으로 특정 질환을 확진하거나 배제할 수 없습니다.",
 sputumEosinophilPct:"유도객담 호산구 분율입니다. 기도 호산구성 염증 평가에 사용하며 검체 품질과 치료 영향을 확인합니다."
};
