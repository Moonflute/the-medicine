"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronRight, Info, RotateCcw } from "lucide-react";
import type { DiseaseNote } from "@/lib/webdb";

type NumericField = { id: string; label: string; unit: string; low?: number; high?: number; note?: string; sex?: "female" | "male" };
type QualitativeField = { id: string; label: string; options: Array<"negative" | "trace" | "positive"> };
type Finding = { level: "urgent" | "attention" | "pattern"; title: string; summary: string; next: string; diseases: string[] };
type SliderRange = { min: number; max: number; step: number };

const NUMERIC_PANELS: Array<{ title: string; description: string; fields: NumericField[] }> = [
  { title: "CBC", description: "성인 빠른 참고범위", fields: [
    { id: "wbc", label: "WBC", unit: "×10³/µL", low: 4, high: 10 }, { id: "hemoglobin", label: "Hemoglobin", unit: "g/dL", low: 12, high: 16, sex: "female" }, { id: "hemoglobinMale", label: "Hemoglobin (male)", unit: "g/dL", low: 13, high: 17, sex: "male" }, { id: "mcv", label: "MCV", unit: "fL", low: 80, high: 100 }, { id: "platelet", label: "Platelet", unit: "×10³/µL", low: 150, high: 400 },
  ] },
  { title: "전해질 · 신장", description: "혈청 기준", fields: [
    { id: "na", label: "Na", unit: "mmol/L", low: 135, high: 145 }, { id: "k", label: "K", unit: "mmol/L", low: 3.5, high: 5 }, { id: "cl", label: "Cl", unit: "mmol/L", low: 98, high: 106 }, { id: "hco3", label: "Total CO₂ / HCO₃⁻", unit: "mmol/L", low: 22, high: 29 }, { id: "ca", label: "Calcium", unit: "mg/dL", low: 8.5, high: 10.5 }, { id: "mg", label: "Magnesium", unit: "mg/dL", low: 1.7, high: 2.4 }, { id: "phos", label: "Phosphate", unit: "mg/dL", low: 2.5, high: 4.5 }, { id: "bun", label: "BUN", unit: "mg/dL", low: 7, high: 20 }, { id: "creatinine", label: "Creatinine", unit: "mg/dL", low: 0.6, high: 1.3 }, { id: "egfr", label: "eGFR", unit: "mL/min/1.73m²", low: 60 },
  ] },
  { title: "당대사 · 간기능", description: "채혈 조건을 함께 확인", fields: [
    { id: "glucose", label: "Glucose", unit: "mg/dL", low: 70, high: 140, note: "식전/식후에 따라 해석" }, { id: "a1c", label: "HbA1c", unit: "%", high: 5.6 }, { id: "ast", label: "AST", unit: "U/L", high: 40 }, { id: "alt", label: "ALT", unit: "U/L", high: 41 }, { id: "alp", label: "ALP", unit: "U/L", high: 130 }, { id: "bilirubin", label: "Total bilirubin", unit: "mg/dL", high: 1.2 }, { id: "albumin", label: "Albumin", unit: "g/dL", low: 3.5, high: 5 },
  ] },
  { title: "염증 · 응고 · 기타", description: "단독 수치보다 임상 맥락·추세 우선", fields: [
    { id: "crp", label: "CRP", unit: "mg/L", high: 5 }, { id: "pct", label: "Procalcitonin", unit: "ng/mL", high: 0.1 }, { id: "lactate", label: "Lactate", unit: "mmol/L", high: 2 }, { id: "inr", label: "INR", unit: "", low: 0.8, high: 1.2 }, { id: "ddimer", label: "D-dimer", unit: "µg/mL FEU", high: 0.5 }, { id: "tsh", label: "TSH", unit: "mIU/L", low: 0.4, high: 4 }, { id: "freeT4", label: "Free T4", unit: "ng/dL", low: 0.8, high: 1.8 },
  ] },
  { title: "ABGA", description: "실제 FiO₂·채혈 시간·산소투여를 함께 기록", fields: [
    { id: "ph", label: "pH", unit: "", low: 7.35, high: 7.45 }, { id: "paco2", label: "PaCO₂", unit: "mmHg", low: 35, high: 45 }, { id: "abgHco3", label: "ABG HCO₃⁻", unit: "mmol/L", low: 22, high: 26 }, { id: "pao2", label: "PaO₂", unit: "mmHg", low: 80, high: 100 },
  ] },  { title: "호르몬 · 내분비", description: "채혈 시각·성별·월경주기·임신·약물 및 검사실 방법에 따라 해석이 달라집니다", fields: [
    { id: "cortisol8am", label: "Cortisol (8 AM)", unit: "μg/dL", note: "반드시 8–9 AM 채혈 시각·스테로이드 복용 여부와 함께 해석" }, { id: "acth8am", label: "ACTH (8 AM)", unit: "pg/mL", note: "cortisol과 같은 시점에 채혈; assay별 참고범위 사용" }, { id: "pthIntact", label: "Intact PTH", unit: "pg/mL", low: 15, high: 65 }, { id: "prolactin", label: "Prolactin", unit: "ng/mL", note: "성별·임신·수면·스트레스·약물에 따라 달라짐" },
    { id: "fsh", label: "FSH", unit: "mIU/mL", note: "성별·연령·월경주기/폐경 상태를 함께 기록" }, { id: "lh", label: "LH", unit: "mIU/mL", note: "성별·월경주기 및 약물 영향 고려" }, { id: "estradiol", label: "Estradiol (E2)", unit: "pg/mL", note: "주기·임신·호르몬 치료에 따라 기준이 달라짐" }, { id: "testosterone", label: "Total testosterone (AM)", unit: "ng/dL", note: "남성은 이른 아침 반복 측정; 성별·연령·SHBG를 함께 해석" },
    { id: "betaHcg", label: "β-hCG", unit: "mIU/mL", note: "정량 결과를 검사실 참고범위로 해석" }, { id: "igf1Xuln", label: "IGF-1 (× ULN)", unit: "×ULN", note: "연령·성별 보정 ULN 대비 배수" }, { id: "vitaminD25oh", label: "25-OH Vitamin D", unit: "ng/mL" }, { id: "totalIge", label: "Total IgE", unit: "IU/mL" }, { id: "aldosterone", label: "Aldosterone", unit: "ng/dL", note: "renin과의 관계로 해석" }, { id: "reninPra", label: "Plasma renin activity", unit: "ng/mL/h", note: "ARR 해석은 채혈 조건·약물 보정이 필요" }, { id: "postDexCortisol", label: "Cortisol after 1-mg DST", unit: "μg/dL", note: "1 mg overnight dexamethasone suppression protocol 완료 후 값만 입력" },
  ] },
  { title: "요검사 · 신장손상", description: "단일 검체는 반복·오염·농축 여부를 고려", fields: [
    { id: "urineSg", label: "Specific gravity", unit: "", low: 1.005, high: 1.03 }, { id: "urinePh", label: "Urine pH", unit: "", low: 5, high: 8 }, { id: "urineRbc", label: "Urine RBC", unit: "/HPF", high: 2 }, { id: "urineWbc", label: "Urine WBC", unit: "/HPF", high: 5 }, { id: "uacr", label: "UACR", unit: "mg/g", high: 30 },
  ] },
  { title: "지질 · 췌장 · 간 종양표지자", description: "질환 감별에 직접 쓰이는 정량 보조 수치", fields: [
    { id: "totalCholesterol", label: "Total cholesterol", unit: "mg/dL", note: "ASCVD 위험도·LDL/non-HDL과 함께 해석" }, { id: "ldl", label: "LDL-C", unit: "mg/dL", note: "LDL-C ≥190 mg/dL은 severe hypercholesterolemia 범주" }, { id: "hdl", label: "HDL-C", unit: "mg/dL", note: "단독 치료 목표가 아닌 전체 위험도 지표" }, { id: "triglyceride", label: "Triglyceride", unit: "mg/dL", note: "TG ≥500 mg/dL은 췌장염 위험을 우선 평가" },
    { id: "lipaseXuln", label: "Lipase (× ULN)", unit: "×ULN", note: "급성 췌장염은 전형적 통증/영상과 2/3 기준으로 진단" }, { id: "afp", label: "AFP", unit: "ng/mL" }, { id: "uricAcid", label: "Uric acid", unit: "mg/dL" },
  ] },
  { title: "빈혈 · 혈액 정밀", description: "빈혈 및 혈액질환 감별에 사용하는 보조 검사", fields: [
    { id: "ferritin", label: "Ferritin", unit: "ng/mL", note: "염증·간질환에서 상승 가능; 빈혈에서는 <45가 철결핍을 지지" }, { id: "transferrinSat", label: "Transferrin saturation", unit: "%", note: "철결핍/염증성 빈혈 감별에 ferritin과 병행" }, { id: "vitaminB12", label: "Vitamin B12", unit: "pg/mL", note: "경계값은 MMA·homocysteine과 함께 해석" }, { id: "folate", label: "Folate", unit: "ng/mL", note: "검사법과 최근 식이 영향을 고려" },
    { id: "reticulocytePct", label: "Reticulocyte", unit: "%", note: "빈혈에서는 absolute reticulocyte/RPI로 보정 필요" }, { id: "ldh", label: "LDH", unit: "U/L", note: "검사실 ULN과 비교; 용혈 외 비특이적 상승 가능" }, { id: "haptoglobin", label: "Haptoglobin", unit: "mg/dL", note: "간 합성 저하·염증이 해석에 영향" }, { id: "absoluteLymphocyteCount", label: "Absolute lymphocyte count", unit: "/μL" }, { id: "eosinophilPct", label: "Eosinophil", unit: "%" }, { id: "adamts13Activity", label: "ADAMTS13 activity", unit: "%" },
  ] },
  { title: "심근 · 근육 손상", description: "단일 수치가 아닌 증상·ECG·변화량과 함께 해석", fields: [
    { id: "troponinXuln", label: "hs-Troponin (× ULN)", unit: "×ULN", note: "99th percentile ULN 대비 배수; 상승/하강과 임상 맥락 필요" }, { id: "ckXuln", label: "CK (× ULN)", unit: "×ULN", note: "근육통·약물·신기능 및 추세와 함께 해석" },
  ] },
  { title: "신장 · 삼투압 보조", description: "신기능·고혈당 위기·단백뇨 감별을 위한 보조 지표", fields: [
    { id: "betaHydroxybutyrate", label: "β-Hydroxybutyrate", unit: "mmol/L", note: "DKA는 산증과 함께 해석" }, { id: "serumOsmolality", label: "Serum osmolality", unit: "mOsm/kg", note: "HHS는 total osmolality >320 또는 effective osmolality를 함께 평가" }, { id: "upcr", label: "Urine protein/creatinine", unit: "g/g", note: "단백뇨 정량; 임신·신증후군 맥락에서 해석" }, { id: "fena", label: "FENa", unit: "%", note: "이뇨제·CKD에서는 해석 제한; 임상 체액 상태와 병행" },
  ] },
  { title: "삼투압 · 수분 균형", description: "저나트륨·고나트륨에서 혈청과 소변 수치를 함께 입력", fields: [
    { id: "urineOsmolality", label: "Urine osmolality", unit: "mOsm/kg", note: "혈청 osmolality·Na와 함께 해석" }, { id: "urineSodium", label: "Urine sodium", unit: "mmol/L", note: "동시 혈청 Na와 함께 해석" }, { id: "feUrea", label: "FEUrea", unit: "%", note: "급성 신손상에서 보조적으로 사용" },
  ] },
  { title: "뇌척수액 (CSF)", description: "수막염 감별용 기본 정량 항목; 병원체 확정은 Gram stain·배양·PCR", fields: [
    { id: "csfWbc", label: "CSF WBC", unit: "/μL" }, { id: "csfNeutrophilPct", label: "CSF neutrophil", unit: "%" }, { id: "csfProtein", label: "CSF protein", unit: "mg/dL" }, { id: "csfGlucose", label: "CSF glucose", unit: "mg/dL" }, { id: "csfLactate", label: "CSF lactate", unit: "mmol/L" },
  ] },
  { title: "호흡기 특수 검체", description: "BAL·유도객담의 세포 분획 정량", fields: [
    { id: "balEosinophilPct", label: "BAL eosinophil", unit: "%" }, { id: "balLymphocytePct", label: "BAL lymphocyte", unit: "%" }, { id: "balCd4Cd8Ratio", label: "BAL CD4/CD8 ratio", unit: "ratio" }, { id: "sputumEosinophilPct", label: "Induced sputum eosinophil", unit: "%" },
  ] },
  { title: "복수 · 흉수", description: "특수 체액의 진단 보조 수치", fields: [
    { id: "saag", label: "SAAG", unit: "g/dL", note: "serum albumin − ascites albumin" }, { id: "asciticPmn", label: "Ascitic PMN", unit: "/mm³" }, { id: "asciticTriglyceride", label: "Ascitic triglyceride", unit: "mg/dL" }, { id: "pleuralTriglyceride", label: "Pleural triglyceride", unit: "mg/dL" }, { id: "pleuralPh", label: "Pleural pH", unit: "" }, { id: "pleuralGlucose", label: "Pleural glucose", unit: "mg/dL" }, { id: "pleuralAda", label: "Pleural ADA", unit: "U/L" }, { id: "pleuralProteinRatio", label: "Pleural/serum protein ratio", unit: "ratio" }, { id: "pleuralLdhRatio", label: "Pleural/serum LDH ratio", unit: "ratio" }, { id: "pleuralLdhUlnRatio", label: "Pleural LDH / serum LDH ULN", unit: "ratio" },
  ] },
  { title: "구리 · 유전대사", description: "질환 문서의 정량 진단 보조 기준", fields: [
    { id: "ceruloplasmin", label: "Ceruloplasmin", unit: "mg/dL" }, { id: "urineCopper24h", label: "24-h urine copper", unit: "μg/24 h" }, { id: "hepaticCopper", label: "Hepatic copper (dry weight)", unit: "μg/g" }, { id: "alpBilirubinRatio", label: "ALP / total bilirubin", unit: "ratio" },
  ] },
  { title: "응고 · 종양대사", description: "단일 검사보다 여러 수치의 동시 이상을 확인", fields: [
    { id: "anc", label: "Absolute neutrophil count", unit: "/μL", note: "ANC <500/μL은 중증 호중구감소증 범위" }, { id: "fibrinogen", label: "Fibrinogen", unit: "mg/dL", note: "DIC에서는 급성기 반응으로 정상/상승할 수도 있음" }, { id: "apttRatio", label: "aPTT (× ULN)", unit: "×ULN", note: "검사실 ULN 대비 배수로 입력" },
  ] },];

const QUALITATIVE: QualitativeField[] = [
  { id: "urineProtein", label: "Urine protein", options: ["negative", "trace", "positive"] }, { id: "urineBlood", label: "Urine blood", options: ["negative", "trace", "positive"] }, { id: "urineGlucose", label: "Urine glucose", options: ["negative", "trace", "positive"] }, { id: "urineKetone", label: "Urine ketone", options: ["negative", "trace", "positive"] }, { id: "urineNitrite", label: "Nitrite", options: ["negative", "trace", "positive"] }, { id: "urineLe", label: "Leukocyte esterase", options: ["negative", "trace", "positive"] },
];

const CORE_FIELD_IDS = new Set(["wbc", "hemoglobin", "hemoglobinMale", "platelet", "na", "k", "hco3", "creatinine", "glucose", "a1c", "ast", "alt", "crp", "lactate", "inr", "ph", "paco2", "abgHco3", "pao2", "urineSg", "urinePh", "urineWbc", "urineRbc", "uacr"]);
const CORE_QUALITATIVE_IDS = new Set(["urineProtein", "urineBlood", "urineKetone", "urineNitrite", "urineLe"]);
const VITAL_SIGNS = [
  { id: "bp", label: "혈압", note: "안정 시 반복 측정", fields: [{ id: "sbp", label: "SBP", unit: "mmHg", low: 90, high: 129 }, { id: "dbp", label: "DBP", unit: "mmHg", low: 60, high: 79 }] },
  { id: "pulse", label: "맥박", note: "휴식 시", fields: [{ id: "heartRate", label: "HR", unit: "/min", low: 60, high: 100 }] },
  { id: "respiration", label: "호흡수", note: "휴식 시", fields: [{ id: "respiratoryRate", label: "RR", unit: "/min", low: 12, high: 20 }] },
  { id: "temperature", label: "체온", note: "측정 부위를 기록", fields: [{ id: "temperature", label: "BT", unit: "°C", low: 36.5, high: 37.5 }] },
] satisfies Array<{ id: string; label: string; note: string; fields: NumericField[] }>;
const SOURCE_LINKS = [
  ["Surviving Sepsis Campaign: adult guideline", "https://sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines"],
  ["MedlinePlus: CMP", "https://medlineplus.gov/lab-tests/comprehensive-metabolic-panel-cmp/"], ["MedlinePlus: Urinalysis", "https://medlineplus.gov/urinalysis.html"], ["NIDDK: urine albumin", "https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/kidney-disease/identify-manage-patients/evaluate-ckd/assess-urine-albumin"], ["MSD: acid-base", "https://www.msdmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders"], ["ADA Standards 2026: diabetes diagnosis", "https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes"], ["KDIGO 2024: CKD evaluation", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"], ["American Thyroid Association: thyroid function tests", "https://www.thyroid.org/thyroid-function-tests/"], ["Endocrine Society: adrenal insufficiency", "https://www.endocrine.org/clinical-practice-guidelines/primary-adrenal-insufficiency"], ["Endocrine Society: hyperprolactinemia", "https://www.endocrine.org/clinical-practice-guidelines/hyperprolactinemia"], ["American Heart Association: severe hypertension", "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/when-to-call-911-for-high-blood-pressure"], ["ACC: lipid manager", "https://tools.acc.org/LDL/index.html"], ["AGA: iron deficiency anemia guideline", "https://aga-cms-assets.s3.amazonaws.com/2020214154517---IDA%20Guideline_Public%20Comment.pdf"], ["ACG: acute pancreatitis guideline", "https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/"], ["ADA 2026: hyperglycemic crises", "https://diabetesjournals.org/care/article/49/Supplement_1/S339/163925/16-Diabetes-Care-in-the-Hospital-Standards-of-Care"], ["Endocrine Society: Cushing diagnosis", "https://www.endocrine.org/clinical-practice-guidelines/diagnosis-of-cushing-syndrome"], ["Tumour lysis syndrome: laboratory criteria", "https://handbook.ggcmedicines.org.uk/guidelines/oncological-emergencies/tumour-lysis-syndrome/"], ["European hyponatraemia guideline", "https://academic.oup.com/ejendo/article/170/3/G1/6668028"], ["WHO: CSF in suspected meningitis", "https://www.ncbi.nlm.nih.gov/books/NBK614844/"], ["Endocrine Society: acromegaly", "https://www.endocrine.org/clinical-practice-guidelines/acromegaly"], ["AASLD: ascites/SBP guidance", "https://onlinelibrary.wiley.com/doi/full/10.1002/hep.31884"], ["American Thoracic Society: chylothorax", "https://www.thoracic.org/professionals/clinical-resources/critical-care/clinical-education/critical-care-cases/neonate-progressive-respiratory-distress.php"], ["Light criteria: pleural effusion", "https://www.ncbi.nlm.nih.gov/books/NBK448189/"], ["AASLD: Wilson disease", "https://www.aasld.org/sites/default/files/2022-04/Wilson-Disease2009.pdf"], ["ESC: natriuretic peptides in acute HF", "https://www.escardio.org/static-file/Escardio/education/eLearning/webinars/heart-rhythm/Guidelines-Acute_and_Chronic-HF-FT.pdf"], ["Pleural effusion: Light criteria", "https://www.aafp.org/pubs/afp/issues/2023/1100/pleural-effusion.html"], ["RTA laboratory evaluation", "https://www.ncbi.nlm.nih.gov/books/NBK519044/"], ["ATS: BAL cellular analysis", "https://www.atsjournals.org/doi/10.1164/rccm.201202-0320ST"],
] as const;

function numberAt(values: Record<string, string>, key: string) { const value = Number(values[key]); return Number.isFinite(value) ? value : undefined; }
function qualitativeAt(values: Record<string, string>, key: string) { return values[key] ?? "negative"; }
function hasPositive(values: Record<string, string>, key: string) { return ["trace", "positive"].includes(qualitativeAt(values, key)); }
function normalized(value: string) { return value.replace(/\s*\([^)]*\)\s*$/, "").trim(); }

function classify(field: NumericField, value: number) {
  if (field.low !== undefined && value < field.low) return "low";
  if (field.high !== undefined && value > field.high) return "high";
  return "normal";
}

function buildFindings(values: Record<string, string>): Finding[] {
  const findings: Finding[] = [];
  const add = (finding: Finding) => findings.push(finding);
  const pH = numberAt(values, "ph"), pco2 = numberAt(values, "paco2"), abgHco3 = numberAt(values, "abgHco3");
  const na = numberAt(values, "na"), cl = numberAt(values, "cl"), hco3 = numberAt(values, "hco3") ?? abgHco3;
  const glucose = numberAt(values, "glucose"), a1c = numberAt(values, "a1c"), egfr = numberAt(values, "egfr"), uacr = numberAt(values, "uacr");
  const potassium = numberAt(values, "k"), lactate = numberAt(values, "lactate"), urineWbc = numberAt(values, "urineWbc"), urineRbc = numberAt(values, "urineRbc");
  const sbp = numberAt(values, "sbp"), dbp = numberAt(values, "dbp"), heartRate = numberAt(values, "heartRate"), respiratoryRate = numberAt(values, "respiratoryRate"), temperature = numberAt(values, "temperature");
  const map = sbp !== undefined && dbp !== undefined ? (sbp + 2 * dbp) / 3 : undefined;
  const hypotension = (map !== undefined && map < 65) || (sbp !== undefined && sbp < 90);
  const bloodPressureSummary = map !== undefined ? `MAP ${map.toFixed(0)} mmHg` : `SBP ${sbp} mmHg`;

  if (pH !== undefined && pco2 !== undefined && abgHco3 !== undefined) {
    if (pH < 7.35 && abgHco3 < 22) {
      const expected = 1.5 * abgHco3 + 8;
      const compensation = pco2 > expected + 2 ? "동반 호흡성 산증 가능" : pco2 < expected - 2 ? "동반 호흡성 알칼리증 가능" : "Winter 공식상 보상 범위";
      const ag = na !== undefined && cl !== undefined ? na - (cl + (hco3 ?? abgHco3)) : undefined;
      add({ level: pH < 7.2 ? "urgent" : "pattern", title: ag !== undefined && ag >= 12 ? "고 anion-gap 대사성 산증 패턴" : "대사성 산증 패턴", summary: `pH 저하와 HCO₃⁻ 저하가 함께 있습니다. 예상 PaCO₂ ${expected.toFixed(1)} ±2 mmHg, 실제 ${pco2}; ${compensation}.`, next: ag !== undefined && ag >= 12 ? "lactate, ketone, glucose, creatinine, 독성 노출을 즉시 함께 확인" : "설사·RTA·고염소혈증·신기능 및 임상 손실을 확인", diseases: ["당뇨병성 케톤산증", "패혈증", "만성 콩팥병", "급성 신손상"] });
    }
    if (pH < 7.35 && pco2 > 45) add({ level: pH < 7.2 ? "urgent" : "pattern", title: "호흡성 산증 패턴", summary: "acidemia와 PaCO₂ 상승이 함께 있습니다. 급성/만성 보상은 경과와 기존 HCO₃⁻를 함께 판단합니다.", next: "기도·환기, 의식상태, COPD/신경근 질환, 진정제·opioid 노출을 확인", diseases: ["만성 폐쇄성 폐질환", "급성 호흡부전"] });
    if (pH > 7.45 && pco2 < 35) add({ level: "pattern", title: "호흡성 알칼리증 패턴", summary: "alkalemia와 PaCO₂ 저하가 함께 있습니다.", next: "저산소증, sepsis, 통증/불안, 폐색전증, 임신·간질환 맥락을 확인", diseases: ["폐색전증", "패혈증"] });
    if (pH > 7.45 && abgHco3 > 26) add({ level: "pattern", title: "대사성 알칼리증 패턴", summary: "alkalemia와 HCO₃⁻ 상승이 함께 있습니다.", next: "구토/위흡인, 이뇨제, 체액량·Cl⁻·K⁺ 및 urine chloride를 확인", diseases: ["저칼륨혈증"] });
    if (numberAt(values, "pao2") !== undefined && numberAt(values, "pao2")! < 60) add({ level: "urgent", title: "저산소혈증 범위", summary: `PaO₂ ${numberAt(values, "pao2")} mmHg입니다. FiO₂와 채혈 조건에 따라 해석이 달라집니다.`, next: "pulse oximetry·FiO₂·호흡상태를 즉시 확인하고 원인 평가", diseases: ["폐렴", "폐색전증", "급성 호흡부전"] });
  }
  if (potassium !== undefined && potassium >= 6) add({ level: "urgent", title: "중증 고칼륨혈증 범위", summary: `K⁺ ${potassium} mmol/L입니다. ECG 변화·신기능·용혈 가능성을 즉시 확인해야 합니다.`, next: "재채혈(용혈 확인), ECG, 신기능·산염기 및 원인 약물을 긴급 평가", diseases: ["고칼륨혈증", "급성 신손상", "만성 콩팥병"] });
  else if (potassium !== undefined && potassium > 5) add({ level: "attention", title: "고칼륨혈증", summary: `K⁺ ${potassium} mmol/L로 참고범위보다 높습니다.`, next: "채혈 용혈, 신기능, ACEi/ARB·MRA 등 약물과 산증을 확인", diseases: ["고칼륨혈증", "만성 콩팥병"] });
  if (potassium !== undefined && potassium < 3) add({ level: "urgent", title: "중증 저칼륨혈증 범위", summary: `K⁺ ${potassium} mmol/L입니다. 부정맥·근력저하 위험을 평가합니다.`, next: "ECG, Mg²⁺, GI/신장 손실과 이뇨제 사용을 즉시 확인", diseases: ["저칼륨혈증"] });
  else if (potassium !== undefined && potassium < 3.5) add({ level: "attention", title: "저칼륨혈증", summary: `K⁺ ${potassium} mmol/L로 참고범위보다 낮습니다.`, next: "Mg²⁺, GI/신장 손실, 이뇨제·인슐린 등 약물/치료 맥락을 확인", diseases: ["저칼륨혈증"] });
  if (numberAt(values, "na") !== undefined && numberAt(values, "na")! < 125) add({ level: "urgent", title: "중증 저나트륨혈증 범위", summary: `Na⁺ ${numberAt(values, "na")} mmol/L입니다. 증상과 발생 속도가 치료 긴급도를 좌우합니다.`, next: "의식·경련 여부, 혈당·혈청/소변 osmolality, urine Na 및 체액 상태를 평가", diseases: ["저나트륨혈증"] });
  else if (numberAt(values, "na") !== undefined && numberAt(values, "na")! < 135) add({ level: "attention", title: "저나트륨혈증", summary: `Na⁺ ${numberAt(values, "na")} mmol/L입니다.`, next: "혈당 보정, 체액 상태·osmolality·약물을 확인", diseases: ["저나트륨혈증"] });
  if (glucose !== undefined && glucose < 70) add({ level: "urgent", title: "저혈당", summary: `Glucose ${glucose} mg/dL입니다. 증상 동반 시 즉시 교정이 필요합니다.`, next: "즉시 재측정·증상 확인 후 저혈당 처치 및 약물/섭취 원인 평가", diseases: ["저혈당"] });
  if (glucose !== undefined && glucose >= 250 && hasPositive(values, "urineKetone")) add({ level: "urgent", title: "고혈당 + ketone 패턴", summary: "고혈당과 요 ketone 양성이 함께 있습니다. ABGA/VBG·HCO₃⁻·anion gap으로 DKA/HHS를 평가해야 합니다.", next: "ketone, 산염기, 전해질, 신기능·탈수 및 감염 유발요인을 즉시 확인", diseases: ["당뇨병성 케톤산증", "당뇨병"] });
  else if (glucose !== undefined && glucose >= 126) add({ level: "attention", title: "고혈당 범위", summary: `Glucose ${glucose} mg/dL입니다. 공복 여부 및 반복 검사가 중요합니다.`, next: "공복/무작위 조건, HbA1c, 증상·ketone을 함께 확인", diseases: ["당뇨병"] });
  if (a1c !== undefined && a1c >= 6.5) add({ level: "attention", title: "당뇨병 진단 범위 HbA1c", summary: `HbA1c ${a1c}%입니다. 무증상이라면 보통 별도 검체로 확인이 필요합니다.`, next: "현재 혈당, 증상, 빈혈·혈색소 이상 등 HbA1c 해석 교란요인을 확인", diseases: ["당뇨병"] });
  if ((egfr !== undefined && egfr < 60) || (uacr !== undefined && uacr > 30)) add({ level: "attention", title: "만성 콩팥병 표지자 범위", summary: `${egfr !== undefined && egfr < 60 ? `eGFR ${egfr}` : ""}${egfr !== undefined && egfr < 60 && uacr !== undefined && uacr > 30 ? ", " : ""}${uacr !== undefined && uacr > 30 ? `UACR ${uacr} mg/g` : ""}. CKD는 보통 3개월 이상 지속 여부가 필요합니다.`, next: "이전 eGFR/UACR 추세, 혈압·당뇨, urine sediment 및 반복 검사를 확인", diseases: ["만성 콩팥병", "당뇨병성 콩팥병"] });
  if ((hasPositive(values, "urineNitrite") || hasPositive(values, "urineLe")) && (urineWbc === undefined || urineWbc > 5)) add({ level: "pattern", title: "요로감염 가능 패턴", summary: "nitrite/leukocyte esterase와 pyuria가 함께 있으면 UTI 가능성이 높아집니다.", next: "배뇨증상·발열·옆구리통증과 오염 여부를 확인하고, 적응증에 따라 urine culture", diseases: ["요로감염", "급성 신우신염"] });
  if ((hasPositive(values, "urineBlood") || (urineRbc !== undefined && urineRbc > 2)) && (hasPositive(values, "urineProtein") || (uacr !== undefined && uacr > 30))) add({ level: "attention", title: "혈뇨 + 단백뇨 패턴", summary: "사구체성 원인을 포함한 신장 평가가 필요할 수 있습니다.", next: "반복 clean-catch UA, RBC morphology/cast, creatinine·ACR/PCR 및 혈압을 확인", diseases: ["사구체신염", "만성 콩팥병"] });
  const inflammatorySignalCount = [temperature !== undefined && (temperature < 36 || temperature >= 38), heartRate !== undefined && heartRate > 90, respiratoryRate !== undefined && respiratoryRate > 20, numberAt(values, "wbc") !== undefined && (numberAt(values, "wbc")! < 4 || numberAt(values, "wbc")! > 12)].filter(Boolean).length;
  if (hypotension && lactate !== undefined && lactate > 2) add({ level: "urgent", title: "저혈압-젖산 상승: 쇼크성 저관류 긴급 패턴", summary: `${bloodPressureSummary}이고 lactate는 ${lactate} mmol/L입니다. 감염이 의심되면 패혈증/패혈성 쇼크를 포함해 즉시 평가할 조합입니다.`, next: "반복 혈압·관류·의식·소변량, 감염 source 및 장기기능을 즉시 확인. 수액 후에도 저혈압이 지속되어 MAP ≥65 유지에 승압제가 필요할 때와 lactate >2는 패혈성 쇼크의 임상 기준에 포함되나, 이 입력만으로 확진하지 않음", diseases: ["패혈증", "급성 심부전", "폐색전증", "아나필락시스"] });
  else if (hypotension) add({ level: "urgent", title: "저혈압: 쇼크를 포함한 저관류 평가 필요", summary: `${bloodPressureSummary}입니다. 단일 측정 오류·기저 혈압을 확인하되, 증상 또는 장기저관류가 있으면 쇼크 원인을 긴급 평가합니다.`, next: "혈압을 재측정하고 맥박·말초관류·의식·소변량, 출혈·탈수·감염·심폐 원인 및 약물 영향을 함께 확인", diseases: ["패혈증", "급성 심부전", "폐색전증", "아나필락시스"] });
  if (lactate !== undefined && lactate > 2 && inflammatorySignalCount >= 2) add({ level: "attention", title: "염증 반응-젖산 상승 조합", summary: `Lactate ${lactate} mmol/L와 전신 이상 신호 ${inflammatorySignalCount}개가 함께 입력되었습니다. 감염이 의심되는 임상 맥락에서는 패혈증 평가를 앞당길 수 있는 조합입니다.`, next: "감염 증상·source, 장기기능 변화, 혈압·관류 및 lactate 추세를 함께 평가. 이 조합만으로 sepsis를 진단하지 않음", diseases: ["패혈증", "폐렴", "급성 신손상"] });
  if (lactate !== undefined && lactate >= 4) add({ level: "urgent", title: "고젖산혈증 범위", summary: `Lactate ${lactate} mmol/L입니다. 저관류·저산소증·sepsis 등 원인을 임상적으로 즉시 평가합니다.`, next: "vital sign, 관류, 산염기, 감염·저산소증·약물/독성 맥락과 serial lactate를 확인", diseases: ["패혈증", "급성 심부전", "폐색전증", "아나필락시스"] });
  const hemoglobin = numberAt(values, "hemoglobin") ?? numberAt(values, "hemoglobinMale");
  const wbc = numberAt(values, "wbc"), platelet = numberAt(values, "platelet");
  if (hemoglobin !== undefined && hemoglobin < 12) add({ level: hemoglobin < 8 ? "urgent" : "attention", title: "빈혈 범위", summary: `Hemoglobin ${hemoglobin} g/dL입니다. 연령·성별·임신 및 급성 출혈 여부에 따라 해석이 달라집니다.`, next: "MCV, reticulocyte, ferritin/iron study, B12/folate 및 출혈·용혈 맥락을 확인", diseases: ["빈혈", "철결핍 빈혈"] });
  if (wbc !== undefined && wbc > 10) add({ level: "attention", title: "백혈구 증가", summary: `WBC ${wbc} ×10³/µL입니다.`, next: "differential, 감염/염증·약물·스트레스 및 시간 추세를 확인", diseases: ["폐렴", "패혈증"] });
  if (wbc !== undefined && wbc < 4) add({ level: "attention", title: "백혈구 감소", summary: `WBC ${wbc} ×10³/µL입니다.`, next: "ANC, 약물, 바이러스 감염·골수억제 및 발열 여부를 확인", diseases: ["호중구감소증"] });
  if (platelet !== undefined && platelet < 100) add({ level: platelet < 50 ? "urgent" : "attention", title: "혈소판 감소", summary: `Platelet ${platelet} ×10³/µL입니다.`, next: "재채혈로 EDTA clumping 배제, 출혈·용혈, 약물, 간질환·감염을 확인", diseases: ["혈소판 감소증"] });  if ((numberAt(values, "ast") ?? 0) > 40 || (numberAt(values, "alt") ?? 0) > 41) add({ level: "attention", title: "간세포 손상 효소 상승", summary: "AST/ALT 상승은 간세포 손상 패턴이며 수치만으로 원인을 확정하지 않습니다.", next: "bilirubin·ALP·albumin·INR, 약물/음주, 바이러스·허혈·근육 손상 맥락을 확인", diseases: ["급성 간염", "간경변"] });
  buildExpandedFindings(values, add);
  return findings;
}

function buildExpandedFindings(values: Record<string, string>, add: (finding: Finding) => void) {
  const value = (key: string) => numberAt(values, key);
  const na = value("na"), potassium = value("k"), calcium = value("ca"), magnesium = value("mg"), phosphate = value("phos");
  const bun = value("bun"), creatinine = value("creatinine"), uacr = value("uacr");
  const glucose = value("glucose"), a1c = value("a1c"), pH = value("ph"), hco3 = value("abgHco3") ?? value("hco3");
  const ast = value("ast"), alt = value("alt"), alp = value("alp"), bilirubin = value("bilirubin"), albumin = value("albumin"), inr = value("inr");
  const tsh = value("tsh"), freeT4 = value("freeT4"), mcv = value("mcv"), hemoglobin = value("hemoglobin") ?? value("hemoglobinMale"), platelet = value("platelet");
  const urineSg = value("urineSg"), urinePh = value("urinePh"), urineRbc = value("urineRbc"), cl = value("cl");
  const cortisol8am = value("cortisol8am"), acth8am = value("acth8am"), pth = value("pthIntact"), prolactin = value("prolactin"), vitaminD25oh = value("vitaminD25oh");
  const ldl = value("ldl"), triglyceride = value("triglyceride"), lipaseXuln = value("lipaseXuln"), troponinXuln = value("troponinXuln"), ckXuln = value("ckXuln"), afp = value("afp");
  const ferritin = value("ferritin"), transferrinSat = value("transferrinSat"), vitaminB12 = value("vitaminB12"), folate = value("folate"), reticulocytePct = value("reticulocytePct"), ldh = value("ldh"), haptoglobin = value("haptoglobin");
  const absoluteLymphocyteCount = value("absoluteLymphocyteCount"), eosinophilPct = value("eosinophilPct"), adamts13Activity = value("adamts13Activity"), totalIge = value("totalIge");
  const betaHydroxybutyrate = value("betaHydroxybutyrate"), serumOsmolality = value("serumOsmolality"), upcr = value("upcr"), fena = value("fena"), ddimer = value("ddimer");
  const urineOsmolality = value("urineOsmolality"), urineSodium = value("urineSodium"), feUrea = value("feUrea"), igf1Xuln = value("igf1Xuln");
  const csfWbc = value("csfWbc"), csfNeutrophilPct = value("csfNeutrophilPct"), csfProtein = value("csfProtein"), csfGlucose = value("csfGlucose"), csfLactate = value("csfLactate");
  const balEosinophilPct = value("balEosinophilPct"), balLymphocytePct = value("balLymphocytePct"), balCd4Cd8Ratio = value("balCd4Cd8Ratio"), sputumEosinophilPct = value("sputumEosinophilPct");
  const saag = value("saag"), asciticPmn = value("asciticPmn"), asciticTriglyceride = value("asciticTriglyceride"), pleuralTriglyceride = value("pleuralTriglyceride");
  const pleuralProteinRatio = value("pleuralProteinRatio"), pleuralLdhRatio = value("pleuralLdhRatio"), pleuralLdhUlnRatio = value("pleuralLdhUlnRatio"), pleuralPh = value("pleuralPh"), pleuralGlucose = value("pleuralGlucose"), pleuralAda = value("pleuralAda");
  const ceruloplasmin = value("ceruloplasmin"), urineCopper24h = value("urineCopper24h"), hepaticCopper = value("hepaticCopper"), alpBilirubinRatio = value("alpBilirubinRatio");
  const anc = value("anc"), fibrinogen = value("fibrinogen"), apttRatio = value("apttRatio"), uricAcid = value("uricAcid"), postDexCortisol = value("postDexCortisol");
  const ketonePositive = hasPositive(values, "urineKetone");
  const proteinPositive = hasPositive(values, "urineProtein");
  const bloodPositive = hasPositive(values, "urineBlood");
  const glucosePositive = hasPositive(values, "urineGlucose");

  if (na !== undefined && na >= 150) add({ level: "urgent", title: "중증 고나트륨혈증 범위", summary: `Na⁺ ${na} mmol/L입니다. 수분 손실, 의식 변화 및 교정 속도를 함께 평가해야 합니다.`, next: "혈당 보정 Na, serum/urine osmolality, urine output 및 체액 상태를 즉시 확인", diseases: ["고나트륨혈증", "요붕증", "고삼투압성 고혈당 상태"] });
  else if (na !== undefined && na > 145) add({ level: "attention", title: "고나트륨혈증 패턴", summary: `Na⁺ ${na} mmol/L입니다. 단일 수치만으로 원인을 확정할 수 없습니다.`, next: "수분 섭취·손실, 혈당, serum/urine osmolality와 약물을 함께 확인", diseases: ["고나트륨혈증", "요붕증"] });

  if (calcium !== undefined && calcium >= 12) add({ level: calcium >= 14 ? "urgent" : "attention", title: "고칼슘혈증 패턴", summary: `Total calcium ${calcium} mg/dL입니다. albumin·ionized calcium 및 증상을 함께 해석해야 합니다.`, next: "보정/ionized Ca, PTH, creatinine, 약물 및 악성질환 맥락을 확인", diseases: ["고칼슘혈증", "부갑상샘 기능항진증", "다발골수종"] });
  if (calcium !== undefined && calcium < 8) add({ level: calcium < 7 ? "urgent" : "attention", title: "저칼슘혈증 패턴", summary: `Total calcium ${calcium} mg/dL입니다. albumin 저하만으로도 total Ca가 낮아질 수 있습니다.`, next: "ionized Ca, albumin, Mg, phosphate, PTH 및 QT 연장을 확인", diseases: ["저칼슘혈증", "부갑상샘 기능저하증"] });
  if (magnesium !== undefined && magnesium < 1.2) add({ level: "urgent", title: "중증 저마그네슘혈증 범위", summary: `Mg ${magnesium} mg/dL입니다. 저칼륨·저칼슘 및 부정맥 위험을 함께 확인합니다.`, next: "K·Ca·ECG, GI/renal loss와 약물을 확인", diseases: ["저마그네슘혈증", "저칼륨혈증", "저칼슘혈증"] });
  else if (magnesium !== undefined && magnesium < 1.7) add({ level: "attention", title: "저마그네슘혈증 패턴", summary: `Mg ${magnesium} mg/dL입니다.`, next: "동반 전해질 이상, PPI·이뇨제·설사 및 renal loss를 확인", diseases: ["저마그네슘혈증", "저칼륨혈증"] });
  if (phosphate !== undefined && phosphate < 2) add({ level: phosphate < 1 ? "urgent" : "attention", title: "저인산혈증 패턴", summary: `Phosphate ${phosphate} mg/dL입니다.`, next: "영양·재급식, alcohol, PTH, vitamin D 및 호흡근 증상을 확인", diseases: ["저인산혈증", "부갑상샘 기능항진증"] });
  if (phosphate !== undefined && phosphate > 5) add({ level: "attention", title: "고인산혈증 패턴", summary: `Phosphate ${phosphate} mg/dL입니다.`, next: "신기능, Ca, cell lysis·약물 및 반복 측정을 확인", diseases: ["고인산혈증", "만성 콩팥병", "종양 용해 증후군"] });

  if (creatinine !== undefined && creatinine > 1.3) add({ level: "attention", title: "크레아티닌 상승 패턴", summary: `Creatinine ${creatinine} mg/dL입니다. baseline과 시간 추세 없이는 AKI와 CKD를 구분할 수 없습니다.`, next: "이전 creatinine/eGFR, urine output, 체액 상태, 약물 및 요로폐색 가능성을 확인", diseases: ["급성 신손상", "만성 콩팥병", "요로 폐색"] });
  if (bun !== undefined && creatinine !== undefined && creatinine > 0 && bun / creatinine > 20) add({ level: "pattern", title: "BUN/Cr 비 상승 패턴", summary: `BUN/Cr 비가 ${(bun / creatinine).toFixed(1)}입니다. prerenal state를 포함한 여러 원인이 가능합니다.`, next: "체액 손실·출혈·단백 섭취/분해, 신기능 추세와 urine indices를 함께 평가", diseases: ["급성 신손상", "위장관 출혈"] });
  if (bun !== undefined && creatinine !== undefined && creatinine > 0 && bun / creatinine > 30) add({ level: "attention", title: "상부 위장관 출혈을 시사할 수 있는 BUN/Cr 비", summary: `BUN/Cr 비가 ${(bun / creatinine).toFixed(1)}입니다. 상부 위장관 출혈에서 상승할 수 있으나 단독 진단 기준은 아닙니다.`, next: "Hb·vital signs·melena/hematemesis 및 신기능·탈수 여부를 함께 평가", diseases: ["Upper Gastrointestinal Tract", "Gastrointestinal Bleeding"] });
  if (uacr !== undefined && uacr >= 300) add({ level: "attention", title: "중증 알부민뇨 범위", summary: `UACR ${uacr} mg/g으로 A3 범위입니다. 일회성 상승은 감염·운동·고혈당에도 생길 수 있습니다.`, next: "first-morning sample 반복, eGFR 추세·혈압·당대사 및 urine sediment를 확인", diseases: ["만성 콩팥병", "당뇨병성 콩팥병", "신증후군"] });
  if (uacr !== undefined && uacr >= 30 && glucose !== undefined && glucose >= 126) add({ level: "attention", title: "당뇨병-알부민뇨 조합", summary: "고혈당과 albuminuria가 함께 있어 당뇨병성 콩팥병을 포함한 신장 평가가 필요합니다.", next: "반복 UACR, eGFR, 혈압, 망막·신경병증 동반 여부와 다른 신질환 단서를 확인", diseases: ["당뇨병", "당뇨병성 콩팥병", "만성 콩팥병"] });

  if (glucose !== undefined && glucose >= 250 && ketonePositive && ((pH !== undefined && pH < 7.3) || (hco3 !== undefined && hco3 < 18))) add({ level: "urgent", title: "당뇨병성 케톤산증(DKA) 호환 패턴", summary: "고혈당·ketone과 산증이 함께 있습니다. 확정에는 혈중 β-hydroxybutyrate 등 전체 기준 확인이 필요합니다.", next: "ketone 정량, anion gap, 전해질·신기능, 유발 요인과 DKA 프로토콜을 즉시 확인", diseases: ["당뇨병성 케톤산증", "당뇨병"] });
  else if (glucose !== undefined && glucose >= 250 && ketonePositive) add({ level: "attention", title: "고혈당-케톤 조합", summary: "고혈당과 ketone이 함께 있으나 입력값만으로 DKA를 확정할 수 없습니다.", next: "VBG/ABG, HCO₃⁻, anion gap 및 혈중 ketone을 추가 확인", diseases: ["당뇨병", "당뇨병성 케톤산증"] });
  if (glucose !== undefined && glucose >= 600) add({ level: "urgent", title: "고삼투압성 고혈당 상태(HHS) 고려 범위", summary: `Glucose ${glucose} mg/dL입니다. HHS는 osmolality·탈수·의식 상태를 함께 평가해야 합니다.`, next: "effective osmolality, ketone, pH/HCO₃⁻, Na 보정치, 신기능 및 유발 요인을 즉시 확인", diseases: ["고삼투압성 고혈당 상태", "당뇨병"] });
  if (a1c !== undefined && a1c >= 6.5) add({ level: "attention", title: "당뇨병 진단 HbA1c 범위", summary: `HbA1c ${a1c}%입니다. 명백한 고혈당이 아니라면 진단은 별도 검체에서 확인합니다.`, next: "공복혈당 또는 다른 진단검사를 확인하고 빈혈·혈색소 변이 등 HbA1c 간섭을 검토", diseases: ["당뇨병"] });
  if (glucose !== undefined && glucose >= 126) add({ level: "attention", title: "당뇨병 진단 공복혈당 범위", summary: `Glucose ${glucose} mg/dL입니다. 공복 검체라면 당뇨병 진단 기준 범위에 해당합니다.`, next: "명백한 고혈당이 아니라면 다른 날 반복 검사 또는 HbA1c/OGTT로 확인", diseases: ["당뇨병"] });
  if (glucose !== undefined && glucose < 70) add({ level: glucose < 54 ? "urgent" : "attention", title: "저혈당 범위", summary: `Glucose ${glucose} mg/dL입니다.`, next: "즉시 재측정·교정 및 약물/내분비·장기부전 등 원인 평가", diseases: ["저혈당", "당뇨병"] });
  if (a1c !== undefined && a1c >= 5.7 && a1c < 6.5) add({ level: "attention", title: "당뇨병 전단계 HbA1c 범위", summary: `HbA1c ${a1c}%입니다. 빈혈·혈색소 이상 등은 HbA1c 해석에 영향을 줄 수 있습니다.`, next: "공복혈당/OGTT와 위험인자, 체중·혈압·지질을 함께 평가", diseases: ["당뇨병", "이상지질혈증"] });
  if (glucosePositive && (glucose === undefined || glucose < 180)) add({ level: "attention", title: "정상 또는 경도 고혈당의 요당", summary: "요당은 혈당 외에 SGLT2 억제제 또는 renal glycosuria의 영향을 받을 수 있습니다.", next: "동시 혈당, 약물(SGLT2i), 임신·신세뇨관 이상 가능성을 확인", diseases: ["당뇨병"] });

  if (alp !== undefined && bilirubin !== undefined && alp > 130 && bilirubin > 1.2) add({ level: "attention", title: "담즙정체성 간수치 패턴", summary: "ALP와 bilirubin 상승이 함께 있어 담도성 원인 또는 간담도 질환을 감별해야 합니다.", next: "GGT, AST/ALT, 복통·발열·황달, 영상검사 및 약물력을 확인", diseases: ["황달", "담석", "급성 담관염"] });
  if ((ast !== undefined && ast > 120) || (alt !== undefined && alt > 120)) add({ level: "attention", title: "상당한 아미노전이효소 상승", summary: "AST/ALT 상승은 간세포 손상 패턴이지만 원인과 중증도를 단독으로 정하지 않습니다.", next: "bilirubin·ALP·INR, acetaminophen/약물·alcohol·viral risk·허혈 맥락과 추세를 확인", diseases: ["급성 간염", "간경변"] });
  if (albumin !== undefined && albumin < 3) add({ level: "attention", title: "저알부민혈증 패턴", summary: `Albumin ${albumin} g/dL입니다. 간 합성 저하 외에도 염증·영양·신장/장 단백 소실이 가능합니다.`, next: "INR, bilirubin, UACR/단백뇨, 체중·부종 및 염증 상태를 함께 확인", diseases: ["간경변", "신증후군", "만성 콩팥병"] });
  if (inr !== undefined && inr > 1.5) add({ level: "attention", title: "INR 연장 패턴", summary: `INR ${inr}입니다. 항응고제, vitamin K 결핍, 간 합성 기능 저하 등 맥락이 필요합니다.`, next: "warfarin/DOAC 여부, 간기능·출혈 증상, PT/aPTT와 이전 결과를 확인", diseases: ["간경변", "간부전"] });

  if (tsh !== undefined && freeT4 !== undefined && tsh > 4 && freeT4 < 0.8) add({ level: "attention", title: "일차성 갑상샘기능저하증 호환 패턴", summary: "TSH 상승과 free T4 저하가 함께 있습니다.", next: "약물·임신·급성질환, TPO antibody와 임상 증상을 함께 확인", diseases: ["갑상샘 기능저하증", "무증상 갑상샘 기능저하증"] });
  else if (tsh !== undefined && freeT4 !== undefined && tsh > 4) add({ level: "attention", title: "TSH 상승-정상 free T4 패턴", summary: "subclinical hypothyroidism을 포함해 반복 검사와 임상 맥락이 필요합니다.", next: "반복 TSH/free T4, 임신 계획·증상·TPO antibody와 약물을 확인", diseases: ["무증상 갑상샘 기능저하증"] });
  if (tsh !== undefined && freeT4 !== undefined && tsh < 0.4 && freeT4 > 1.8) add({ level: "attention", title: "갑상샘기능항진증 호환 패턴", summary: "TSH 저하와 free T4 상승이 함께 있습니다.", next: "T3, TRAb/TSI, 약물·biotin 및 증상/심박수를 확인", diseases: ["갑상샘 기능항진증", "심방세동"] });
  else if (tsh !== undefined && tsh < 0.4) add({ level: "attention", title: "TSH 저하 패턴", summary: "TSH 단독 저하는 free T4/T3, 약물, 비갑상샘질환 맥락에서 해석해야 합니다.", next: "free T4/T3, biotin·갑상샘호르몬 복용과 반복 검사를 확인", diseases: ["갑상샘 기능항진증"] });

  if (hemoglobin !== undefined && hemoglobin < 12 && mcv !== undefined && mcv < 80) add({ level: "attention", title: "소구성 빈혈 패턴", summary: "빈혈과 MCV 저하가 함께 있습니다. 철결핍이 흔하지만 단독으로 확정할 수 없습니다.", next: "ferritin, iron/TIBC, RDW, 출혈원·지중해빈혈 가능성을 평가", diseases: ["빈혈", "철결핍 빈혈"] });
  if (hemoglobin !== undefined && hemoglobin < 12 && mcv !== undefined && mcv > 100) add({ level: "attention", title: "대구성 빈혈 패턴", summary: "빈혈과 MCV 상승이 함께 있습니다.", next: "B12/folate, reticulocyte, 간질환·alcohol·갑상샘 기능과 약물을 확인", diseases: ["빈혈", "비타민 B 결핍증"] });
  if (platelet !== undefined && platelet > 450) add({ level: "attention", title: "혈소판증가증 패턴", summary: `Platelet ${platelet} ×10³/μL입니다. 감염·염증·철결핍에 의한 반응성과 clonal 원인을 구분해야 합니다.`, next: "반복 CBC/smear, ferritin, CRP 및 혈전/출혈 증상을 확인", diseases: ["철결핍 빈혈", "Essential Thrombocythemia"] });
  if ((bloodPositive || (urineRbc !== undefined && urineRbc > 2)) && !proteinPositive && (uacr === undefined || uacr < 30)) add({ level: "attention", title: "단독 혈뇨 패턴", summary: "혈뇨는 오염·운동·결석·감염·비뇨기계 원인 등으로 발생할 수 있습니다.", next: "월경/채뇨 상태를 배제해 반복 UA·microscopy를 시행하고 위험도에 따라 비뇨기 평가", diseases: ["혈뇨", "요로결석", "요로감염"] });
  if (urineSg !== undefined && urineSg >= 1.03) add({ level: "pattern", title: "농축뇨 패턴", summary: `Specific gravity ${urineSg}입니다. 탈수·당/단백 존재가 영향을 줄 수 있습니다.`, next: "수분 상태, 혈당, 단백뇨 및 반복 검체를 확인", diseases: ["탈수", "당뇨병"] });
  if (urineSg !== undefined && urineSg <= 1.005) add({ level: "pattern", title: "저비중뇨 패턴", summary: `Specific gravity ${urineSg}입니다. 수분 과다, 요붕증, concentrating defect 등과 함께 해석합니다.`, next: "serum/urine osmolality, urine output, Na와 약물·신기능을 확인", diseases: ["요붕증", "만성 콩팥병"] });
  if (urinePh !== undefined && urinePh > 5.5 && hco3 !== undefined && hco3 < 22 && cl !== undefined && cl > 106) add({ level: "attention", title: "고염소성 산증-알칼리뇨 RTA 호환 조합", summary: `Urine pH ${urinePh}, HCO₃⁻ ${hco3} mmol/L, Cl ${cl} mmol/L입니다.`, next: "anion gap, K, urine anion gap 및 UTI를 확인하여 distal RTA를 포함한 원인을 감별", diseases: ["Renal Tubular Acidosis Type 1", "저칼륨혈증"] });
  if (urinePh !== undefined && urinePh > 7.2) add({ level: "pattern", title: "강한 알칼리성 소변", summary: `Urine pH ${urinePh}입니다. 요소분해균 감염과 struvite stone을 포함해 해석합니다.`, next: "소변배양·nitrite·결정 및 영상으로 감염석을 평가", diseases: ["Struvite stone", "요로결석", "요로감염"] });
  if (cortisol8am !== undefined && cortisol8am < 3) add({ level: "urgent", title: "아침 cortisol 저하 패턴", summary: `8 AM cortisol ${cortisol8am} μg/dL입니다. adrenal insufficiency를 강하게 시사할 수 있으나 임상 상태와 채혈 조건이 필수입니다.`, next: "동시 ACTH, 전해질·혈당 및 불안정성/부신위기 소견을 확인하고 안정 시 corticotropin stimulation test를 고려", diseases: ["Adrenal Insufficiency", "Primary Adrenal Insufficiency", "Secondary Adrenal Insufficiency"] });
  else if (cortisol8am !== undefined && cortisol8am < 15) add({ level: "attention", title: "아침 cortisol 중간 범위", summary: `8 AM cortisol ${cortisol8am} μg/dL입니다. random cortisol로 진단하지 않으며, 이 범위는 단독으로 배제/확정하기 어렵습니다.`, next: "채혈 시각·외인성 스테로이드, ACTH 및 필요 시 stimulation test를 임상 맥락에서 확인", diseases: ["Adrenal Insufficiency"] });
  if (cortisol8am !== undefined && acth8am !== undefined && cortisol8am < 5 && acth8am > 60) add({ level: "attention", title: "저 cortisol-상승 ACTH 조합", summary: "일차성 부신기능저하증을 포함한 HPA axis 이상을 평가할 조합입니다.", next: "ACTH assay 참고범위, renin/aldosterone, 21-hydroxylase antibody 및 stimulation test를 확인", diseases: ["Primary Adrenal Insufficiency", "Adrenal Insufficiency"] });
  if (pth !== undefined && calcium !== undefined && pth > 65 && calcium > 10.5) add({ level: "attention", title: "고칼슘-비억제 PTH 조합", summary: "고칼슘혈증에서 PTH가 억제되지 않아 primary hyperparathyroidism을 포함한 PTH-dependent 원인을 평가합니다.", next: "반복 Ca/albumin 또는 ionized Ca, phosphate, creatinine, 25-OH vitamin D 및 소변 Ca를 확인", diseases: ["Hyperparathyroidism", "고칼슘혈증", "요로결석"] });
  if (pth !== undefined && calcium !== undefined && pth < 15 && calcium < 8) add({ level: "attention", title: "저칼슘-저 PTH 조합", summary: "저칼슘혈증에서 PTH가 낮아 hypoparathyroidism을 포함한 원인을 평가합니다.", next: "Mg, phosphate, vitamin D, 수술/방사선 병력 및 반복 ionized Ca를 확인", diseases: ["Hypoparathyroidism", "저칼슘혈증"] });
  if (prolactin !== undefined && prolactin >= 30) add({ level: "attention", title: "고프로락틴혈증 패턴", summary: `Prolactin ${prolactin} ng/mL입니다. 검사실 기준을 초과한 경우 원인 평가가 필요합니다.`, next: "반복 prolactin, TSH·신기능·약물 및 증상에 따른 pituitary evaluation을 확인", diseases: ["Prolactinoma", "Pituitary Adenoma"] });
  if (prolactin !== undefined && prolactin > 200) add({ level: "attention", title: "Prolactinoma 시사 고프로락틴혈증 범위", summary: `Prolactin ${prolactin} ng/mL입니다. 매우 높은 수치이지만 macroprolactin과 약물·다른 원인을 함께 평가합니다.`, next: "반복/희석 검사와 pituitary MRI 필요성을 평가", diseases: ["Prolactinoma", "Pituitary Adenoma"] });
  if (vitaminD25oh !== undefined && vitaminD25oh < 12) add({ level: "attention", title: "Vitamin D 결핍 범위", summary: `25-OH vitamin D ${vitaminD25oh} ng/mL입니다.`, next: "Ca·phosphate·PTH, 골질환 위험 및 보충 전략을 평가", diseases: ["Vitamin D Deficiency", "골다공증"] });
  else if (vitaminD25oh !== undefined && vitaminD25oh < 30) add({ level: "pattern", title: "Vitamin D 부족 범위", summary: `25-OH vitamin D ${vitaminD25oh} ng/mL입니다.`, next: "검사실 기준과 골·대사 위험을 함께 평가", diseases: ["Vitamin D Deficiency"] });
  if (totalIge !== undefined && totalIge > 417 && eosinophilPct !== undefined && eosinophilPct > 0) add({ level: "pattern", title: "고 IgE-호산구 조합", summary: `Total IgE ${totalIge} IU/mL와 eosinophil ${eosinophilPct}%가 확인됩니다.`, next: "천식·영상·Aspergillus 감작 검사와 함께 ABPA 및 호산구성 질환을 감별", diseases: ["Allergic Bronchopulmonary Aspergillosis", "Eosinophilic Pneumonia"] });  if (ldl !== undefined && ldl >= 190) add({ level: "attention", title: "매우 높은 LDL-C 범위", summary: `LDL-C ${ldl} mg/dL입니다. 일회 결과만으로 원발성 질환을 확정하지 않으며 이차 원인과 가족력을 함께 평가합니다.`, next: "반복 lipid panel, TSH·당대사·신증후군·약물, 조기 ASCVD/힘줄 황색종 가족력을 확인", diseases: ["이상지질혈증", "가족성 고콜레스테롤혈증"] });
  if (triglyceride !== undefined && triglyceride >= 500) add({ level: "attention", title: "중증 고중성지방혈증 범위", summary: `TG ${triglyceride} mg/dL입니다. ASCVD 위험도와 별도로 췌장염 위험을 평가해야 합니다.`, next: "복통·lipase, alcohol·당뇨 조절·약물·갑상샘 기능 및 반복 공복 검사를 확인", diseases: ["이상지질혈증", "급성 췌장염", "당뇨병"] });
  if (lipaseXuln !== undefined && lipaseXuln >= 3) add({ level: "attention", title: "Lipase ≥3×ULN 패턴", summary: `Lipase가 ULN의 ${lipaseXuln}배입니다. 급성 췌장염은 전형적 통증·효소 상승·영상 중 2가지를 만족해야 합니다.`, next: "상복부 통증/방사통, amylase·TG·Ca 및 필요 시 복부 영상으로 2/3 진단 기준을 확인", diseases: ["급성 췌장염", "담석"] });
  if (uricAcid !== undefined && uricAcid > 6.8) add({ level: "pattern", title: "요산 과포화 범위", summary: `Uric acid ${uricAcid} mg/dL입니다. 이 범위는 monosodium urate 결정 형성을 지지하지만 통풍을 단독 진단하지 않습니다.`, next: "관절액 결정 검사·신기능·약물과 요산 저하 치료 적응증을 함께 평가", diseases: ["통풍"] });
  if (afp !== undefined && afp >= 400) add({ level: "attention", title: "높은 AFP 범위", summary: `AFP ${afp} ng/mL입니다. 간세포암을 포함한 원인 평가가 필요하나 단독 확진 검사는 아닙니다.`, next: "간 역동적 CT/MRI와 간질환 상태·다른 종양 원인을 함께 평가", diseases: ["Hepatocellular Carcinoma", "간경변"] });
  if (troponinXuln !== undefined && troponinXuln > 1) add({ level: "attention", title: "Troponin 상승: 심근 손상 패턴", summary: `Troponin이 검사실 ULN의 ${troponinXuln}배입니다. ACS는 상승/하강, 증상, ECG 및 영상 맥락을 함께 만족해야 합니다.`, next: "serial troponin, 12-lead ECG, 흉통/호흡곤란·신기능·빈맥/감염 등 비허혈성 원인을 함께 평가", diseases: ["급성 관상동맥 증후군", "심부전", "급성 신손상"] });
  if (ckXuln !== undefined && ckXuln >= 5) add({ level: "attention", title: "CK ≥5×ULN 패턴", summary: `CK가 ULN의 ${ckXuln}배입니다. 횡문근융해는 증상·원인·신기능·전해질을 함께 평가합니다.`, next: "근육통/갈색뇨, creatinine·K·Ca·phosphate, 소변검사 및 CK 추세를 확인", diseases: ["횡문근융해증", "급성 신손상", "고칼륨혈증"] });
  if (hemoglobin !== undefined && hemoglobin < 12 && ferritin !== undefined && ferritin < 45) add({ level: "attention", title: "빈혈-저 ferritin 조합", summary: `Hemoglobin ${hemoglobin} g/dL, ferritin ${ferritin} ng/mL${transferrinSat !== undefined ? `, transferrin saturation ${transferrinSat}%` : ""}입니다. 철결핍 빈혈을 지지하나 염증/CKD와 출혈 원인 평가가 필요합니다.`, next: "MCV/RDW, transferrin saturation, 출혈원·월경·GI 증상 및 CKD/염증 맥락을 확인", diseases: ["철결핍 빈혈", "빈혈"] });
  if (hemoglobin !== undefined && hemoglobin < 12 && vitaminB12 !== undefined && vitaminB12 < 200) add({ level: "attention", title: "빈혈-저 vitamin B12 조합", summary: "빈혈과 낮은 vitamin B12가 함께 있어 B12 결핍성 거대적혈모구 빈혈을 평가합니다.", next: "MCV/smear, MMA·homocysteine, 신경학적 증상·흡수장애·약물 및 pernicious anemia 단서를 확인", diseases: ["거대적혈모구 빈혈", "비타민 B 결핍증"] });
  if (hemoglobin !== undefined && hemoglobin < 12 && folate !== undefined && folate < 2) add({ level: "attention", title: "빈혈-저 folate 조합", summary: "빈혈과 낮은 folate가 함께 있어 엽산 결핍성 거대적혈모구 빈혈을 평가합니다.", next: "B12를 먼저/동시에 확인하고, 식이·alcohol·약물·흡수장애를 평가", diseases: ["거대적혈모구 빈혈", "비타민 B 결핍증"] });
  if (hemoglobin !== undefined && hemoglobin < 12 && reticulocytePct !== undefined && reticulocytePct > 2 && ldh !== undefined && ldh > 250 && haptoglobin !== undefined && haptoglobin < 30) add({ level: "attention", title: "용혈성 빈혈 호환 조합", summary: "빈혈, reticulocyte 증가, LDH 상승 및 낮은 haptoglobin이 함께 있어 용혈을 평가합니다.", next: "간접 bilirubin, smear, 직접 Coombs 및 혈색소뇨/원인 약물·감염을 확인", diseases: ["용혈성 빈혈", "자가면역 용혈성 빈혈"] });
  if (absoluteLymphocyteCount !== undefined && absoluteLymphocyteCount >= 5000) add({ level: "attention", title: "절대 림프구 수 상승 범위", summary: `Absolute lymphocyte count ${absoluteLymphocyteCount}/μL입니다. 지속되면 CLL을 포함한 lymphoproliferative disorder를 평가합니다.`, next: "반복 CBC/differential, smear 및 flow cytometry로 clonal 여부를 확인", diseases: ["Chronic Lymphocytic Leukemia", "Chronic Leukemia"] });
  if (adamts13Activity !== undefined && adamts13Activity < 10) add({ level: "urgent", title: "중증 ADAMTS13 결핍 범위", summary: `ADAMTS13 activity ${adamts13Activity}%입니다. TTP를 강하게 지지하는 범위입니다.`, next: "혈소판·용혈 지표 및 PLASMIC score와 함께 긴급 혈액내과 평가/치료를 검토", diseases: ["Thrombotic Thrombocytopenic Purpura"] });
  if (betaHydroxybutyrate !== undefined && betaHydroxybutyrate >= 3 && ((pH !== undefined && pH < 7.3) || (hco3 !== undefined && hco3 < 18))) add({ level: "urgent", title: "β-hydroxybutyrate-산증 DKA 조합", summary: `β-hydroxybutyrate ${betaHydroxybutyrate} mmol/L와 산증이 함께 있습니다. 고혈당/당뇨 병력과 전체 위기 기준을 즉시 확인합니다.`, next: "glucose, anion gap, K·신기능·유발 인자와 DKA 프로토콜을 즉시 확인", diseases: ["당뇨병성 케톤산증", "당뇨병"] });
  if (glucose !== undefined && glucose >= 600 && serumOsmolality !== undefined && serumOsmolality > 320) add({ level: "urgent", title: "고혈당-고삼투압 HHS 조합", summary: `Glucose ${glucose} mg/dL, total serum osmolality ${serumOsmolality} mOsm/kg입니다. ketone/산증 정도와 의식·탈수 상태를 함께 평가합니다.`, next: "β-hydroxybutyrate, pH/HCO₃⁻, Na 보정치, 신기능·의식·체액 상태를 즉시 확인", diseases: ["고삼투압성 고혈당 상태", "당뇨병"] });
  if (upcr !== undefined && upcr >= 3 && albumin !== undefined && albumin < 2.5) add({ level: "attention", title: "신증후군 범위 단백뇨 조합", summary: `UPCR ${upcr} g/g와 albumin ${albumin} g/dL이 함께 확인됩니다. 부종·지질·신기능 및 사구체 원인 평가가 필요합니다.`, next: "반복 정량 단백뇨, urine sediment, eGFR, lipid panel 및 전문 평가 필요성을 확인", diseases: ["신증후군", "만성 콩팥병"] });
  if (creatinine !== undefined && creatinine > 1.3 && fena !== undefined && fena < 1) add({ level: "pattern", title: "AKI-낮은 FENa 패턴", summary: `Creatinine 상승과 FENa ${fena}%가 함께 있습니다. prerenal physiology를 시사할 수 있으나 이뇨제·CKD·sepsis에서는 제한이 있습니다.`, next: "체액 상태·혈압·BUN/Cr·소변침사 및 이뇨제 사용을 함께 확인", diseases: ["콩팥전 급성 콩팥 손상", "급성 콩팥 손상"] });
  if (creatinine !== undefined && creatinine > 1.3 && fena !== undefined && fena > 2) add({ level: "pattern", title: "AKI-높은 FENa 패턴", summary: `Creatinine 상승과 FENa ${fena}%가 함께 있습니다. intrinsic renal injury를 포함해 평가하되 단독으로 확정하지 않습니다.`, next: "소변침사/단백뇨·혈뇨, 약물·허혈·감염 및 초음파로 폐색 여부를 확인", diseases: ["콩팥성 급성 콩팥 손상", "급성 콩팥 손상"] });
  if (ddimer !== undefined && ddimer > 0.5) add({ level: "pattern", title: "D-dimer 상승", summary: `D-dimer ${ddimer} μg/mL FEU입니다. 양성 결과만으로 DVT/PE를 진단할 수 없으며 pretest probability가 필수입니다.`, next: "Wells 등 임상 확률, 연령보정 cutoff, 출혈/수술·임신·감염 맥락과 필요 시 영상검사를 확인", diseases: ["폐색전증", "심부 정맥 혈전증"] });  if (anc !== undefined && anc < 500) add({ level: "attention", title: "중증 호중구감소증 범위", summary: `ANC ${anc}/μL입니다. 감염 위험을 평가하되 수치만으로 감염 유무를 판단하지 않습니다.`, next: "CBC differential 반복, 약물·골수 억제·혈액질환 원인과 발열/국소 증상 여부를 확인", diseases: ["Neutropenia"] });
  else if (anc !== undefined && anc < 1500) add({ level: "attention", title: "호중구감소증 범위", summary: `ANC ${anc}/μL입니다.`, next: "반복 CBC differential과 약물·감염·면역·골수 원인을 평가", diseases: ["Neutropenia"] });
  if (platelet !== undefined && platelet < 100 && fibrinogen !== undefined && fibrinogen < 150 && inr !== undefined && inr > 1.5 && ddimer !== undefined && ddimer > 0.5) add({ level: "urgent", title: "DIC 호환 검사 조합", summary: "혈소판 감소, fibrinogen 저하, INR 연장 및 D-dimer 상승이 동반됩니다. DIC는 기저 질환과 추세를 포함해 판단합니다.", next: "PT/aPTT, fibrinogen·platelet 추세, 말초도말 및 원인 질환 평가를 즉시 병행", diseases: ["Disseminated Intravascular Coagulation", "패혈증"] });
  if (apttRatio !== undefined && apttRatio > 1.5 && inr !== undefined && inr > 1.5) add({ level: "attention", title: "PT/aPTT 동시 연장 패턴", summary: "PT/INR과 aPTT가 함께 연장되어 공통 경로 이상, factor 소모·결핍 또는 항응고제 영향을 평가합니다.", next: "fibrinogen, D-dimer, 간기능, 약물/항응고제 및 mixing test 필요성을 확인", diseases: ["Disseminated Intravascular Coagulation", "간부전"] });
  if (na !== undefined && na < 135 && serumOsmolality !== undefined && serumOsmolality < 275 && urineOsmolality !== undefined && urineOsmolality > 100 && urineSodium !== undefined && urineSodium >= 30) add({ level: "attention", title: "SIADH 호환 저삼투압 저나트륨 조합", summary: "저나트륨혈증, 낮은 혈청 osmolality, 농축뇨 및 urine sodium 상승이 함께 있습니다. 이 조합은 SIADH를 포함한 저삼투압 저나트륨 감별에 사용됩니다.", next: "혈당·갑상샘·부신·신기능 및 이뇨제 영향을 별도로 배제한 뒤 원인을 평가", diseases: ["Syndrome of Inappropriate Antidiuretic Hormone Secretion", "저나트륨혈증"] });
  if (na !== undefined && na < 135 && serumOsmolality !== undefined && serumOsmolality < 275 && urineOsmolality !== undefined && urineOsmolality <= 100) add({ level: "pattern", title: "희석뇨 동반 저삼투압 저나트륨 패턴", summary: "저나트륨혈증에서 소변이 충분히 희석되어 있습니다. 수분 과다 또는 낮은 solute intake 범주를 포함해 감별합니다.", next: "혈청/요 삼투압과 Na를 반복 확인하고 섭취량·치료 계획은 임상 평가에 따라 결정", diseases: ["저나트륨혈증"] });
  if (na !== undefined && na > 145 && serumOsmolality !== undefined && serumOsmolality > 295 && urineOsmolality !== undefined && urineOsmolality < 200) add({ level: "attention", title: "고삼투압-희석뇨 요붕증 호환 조합", summary: "고나트륨·고삼투압 상태에서 소변 농축이 부적절한 조합입니다.", next: "요량, serum/urine osmolality 반복 및 내분비·신장 평가로 central/nephrogenic 원인을 감별", diseases: ["Diabetes Insipidus", "Central Diabetes Insipidus", "Nephrogenic Diabetes Insipidus"] });
  if (creatinine !== undefined && creatinine > 1.3 && feUrea !== undefined && feUrea < 35) add({ level: "pattern", title: "AKI-낮은 FEUrea 패턴", summary: "creatinine 상승과 FEUrea <35% 조합은 prerenal physiology를 보조적으로 시사할 수 있습니다.", next: "소변침사·BUN/Cr·체액 상태 및 약물 영향을 함께 평가", diseases: ["콩팥전 급성 콩팥 손상", "급성 콩팥 손상"] });
  if (igf1Xuln !== undefined && igf1Xuln > 1) add({ level: "attention", title: "연령·성별 보정 IGF-1 상승", summary: `IGF-1이 검사실 ULN의 ${igf1Xuln}배입니다. 상승은 말단비대증 선별 이상에 해당할 수 있으나 단독 진단은 아닙니다.`, next: "검사실 연령·성별 보정값을 확인하고 내분비 평가에서 GH suppression 검사 및 원인 평가를 검토", diseases: ["Acromegaly"] });
  const csfGlucoseRatio = csfGlucose !== undefined && glucose !== undefined && glucose > 0 ? csfGlucose / glucose : undefined;
  if (csfWbc !== undefined && csfWbc >= 500 && csfNeutrophilPct !== undefined && csfNeutrophilPct >= 50 && csfProtein !== undefined && csfProtein >= 80 && csfGlucoseRatio !== undefined && csfGlucoseRatio <= 0.4) add({ level: "urgent", title: "세균성 수막염 호환 CSF 조합", summary: `CSF WBC ${csfWbc}/μL, neutrophil ${csfNeutrophilPct}%, protein ${csfProtein} mg/dL, CSF/serum glucose ratio ${csfGlucoseRatio.toFixed(2)}입니다.`, next: "Gram stain·배양·PCR 및 항균치료 필요성을 긴급하게 평가; 수치만으로 병원체를 확정하지 않음", diseases: ["Bacterial Meningitis"] });
  if (csfLactate !== undefined && csfLactate >= 3.5 && csfGlucoseRatio !== undefined && csfGlucoseRatio <= 0.4) add({ level: "attention", title: "CSF lactate 상승-저 glucose ratio 조합", summary: "CSF lactate 상승과 낮은 CSF/serum glucose ratio가 함께 있어 세균성 수막염을 포함한 중추신경계 감염을 평가합니다.", next: "CSF cell differential·protein, Gram stain·배양·PCR 및 전체 임상 소견을 함께 확인", diseases: ["Bacterial Meningitis", "Viral Meningitis"] });
  if (balEosinophilPct !== undefined && balEosinophilPct >= 25) add({ level: "attention", title: "BAL 호산구증가증 범위", summary: `BAL eosinophil ${balEosinophilPct}%입니다. 이 범위는 호산구성 폐렴을 강하게 지지합니다.`, next: "영상·약물/기생충·전신성 질환을 포함해 원인을 평가", diseases: ["Eosinophilic Pneumonia"] });
  if (balLymphocytePct !== undefined && balLymphocytePct >= 25) add({ level: "pattern", title: "BAL 림프구증가 패턴", summary: `BAL lymphocyte ${balLymphocytePct}%입니다.`, next: "HRCT·노출·다른 BAL 분획과 함께 과민성 폐장염/육아종성 ILD를 감별", diseases: ["Hypersensitivity Pneumonitis", "Interstitial lung disease"] });
  if (balLymphocytePct !== undefined && balLymphocytePct > 40 && balCd4Cd8Ratio !== undefined && balCd4Cd8Ratio < 1) add({ level: "pattern", title: "BAL 고림프구-낮은 CD4/CD8 조합", summary: `BAL lymphocyte ${balLymphocytePct}%, CD4/CD8 ${balCd4Cd8Ratio}입니다.`, next: "HRCT·항원 노출·다른 원인을 함께 평가하여 과민성 폐장염을 감별", diseases: ["Hypersensitivity Pneumonitis"] });
  if (sputumEosinophilPct !== undefined && sputumEosinophilPct > 2.5) add({ level: "pattern", title: "유도객담 호산구 증가", summary: `Induced sputum eosinophil ${sputumEosinophilPct}%입니다.`, next: "천식·기침 및 치료 반응과 함께 호산구성 기관지염을 평가", diseases: ["Chronic (-8 Weeks)", "Asthma"] });
  if (saag !== undefined && saag >= 1.1) add({ level: "pattern", title: "SAAG ≥1.1 g/dL", summary: `SAAG ${saag} g/dL로 portal hypertension 관련 복수 패턴을 지지합니다.`, next: "간경변·심부전·Budd-Chiari 등 원인 감별을 위해 간·심장·영상 평가를 병행", diseases: ["Ascites (Cirrhosis)", "간경변", "심부전"] });
  if (saag !== undefined && saag < 1.1) add({ level: "pattern", title: "SAAG <1.1 g/dL", summary: `SAAG ${saag} g/dL로 portal hypertension 이외 원인의 복수 패턴을 시사합니다.`, next: "악성·결핵·췌장성 등 감별을 위해 세포검사·배양 및 필요 검사를 확인", diseases: ["Ascites (Cancer)", "Ascites (Tuberculosis)"] });
  if (asciticPmn !== undefined && asciticPmn >= 250) add({ level: "urgent", title: "복수 PMN ≥250/mm³", summary: `Ascitic PMN ${asciticPmn}/mm³입니다. SBP/SBE 진단 기준에 해당하는 수치 범위입니다.`, next: "복수 배양을 포함한 감염 평가와 항균치료 필요성을 즉시 검토", diseases: ["Spontaneous Bacterial Peritonitis", "간경변"] });
  if (asciticTriglyceride !== undefined && asciticTriglyceride >= 200) add({ level: "attention", title: "유미성 복수 호환 triglyceride 범위", summary: `Ascitic triglyceride ${asciticTriglyceride} mg/dL입니다.`, next: "검체 외관·세포수 및 악성/림프계·간질환 원인 평가를 병행", diseases: ["Chylous Ascites"] });
  if (pleuralTriglyceride !== undefined && pleuralTriglyceride > 110) add({ level: "attention", title: "유미흉 호환 pleural triglyceride 범위", summary: `Pleural triglyceride ${pleuralTriglyceride} mg/dL입니다.`, next: "Chylomicron 확인과 외상·수술·악성/림프계 원인을 평가", diseases: ["Chylothorax"] });
  if (pleuralPh !== undefined && pleuralPh < 7.2 && pleuralGlucose !== undefined && pleuralGlucose < 60) add({ level: "urgent", title: "복잡성 부폐렴성 흉수 호환 조합", summary: `Pleural pH ${pleuralPh}, glucose ${pleuralGlucose} mg/dL입니다.`, next: "배양·Gram stain·영상과 함께 배액 필요성을 즉시 평가", diseases: ["Parapneumonic Effusion"] });
  if (pleuralAda !== undefined && pleuralAda > 40) add({ level: "attention", title: "흉수 ADA 상승 범위", summary: `Pleural ADA ${pleuralAda} U/L입니다. 결핵성 흉막염을 포함한 원인 감별에 사용합니다.`, next: "세포 분획, AFB/culture/PCR, 조직검사 및 유병률 맥락을 함께 평가", diseases: ["Tuberculous Pleurisy"] });
  const lightsPositive = [pleuralProteinRatio !== undefined && pleuralProteinRatio > 0.5, pleuralLdhRatio !== undefined && pleuralLdhRatio > 0.6, pleuralLdhUlnRatio !== undefined && pleuralLdhUlnRatio > 2 / 3].filter(Boolean).length;
  if (lightsPositive > 0) add({ level: "pattern", title: "Light 기준상 삼출성 흉수 패턴", summary: `Light 기준 3개 중 ${lightsPositive}개가 양성입니다. 이 기준은 삼출액 분류용이며 원인을 확정하지 않습니다.`, next: "세포수·배양·pH/glucose·cytology 및 영상으로 감염·악성·결핵·PE 등 원인을 평가", diseases: ["악성 흉수", "부폐렴성 흉수", "결핵성 흉막염"] });
  if (ceruloplasmin !== undefined && ceruloplasmin < 20 && urineCopper24h !== undefined && urineCopper24h > 100) add({ level: "attention", title: "Wilson disease 호환 구리 대사 조합", summary: `Ceruloplasmin ${ceruloplasmin} mg/dL, 24-h urine copper ${urineCopper24h} μg/24 h입니다.`, next: "안과 평가, 간·신경 소견, 유전자/Leipzig score 등으로 종합 평가", diseases: ["Wilson's Disease"] });
  if (hepaticCopper !== undefined && hepaticCopper > 250) add({ level: "attention", title: "간 조직 구리 상승 범위", summary: `Hepatic copper ${hepaticCopper} μg/g dry weight입니다.`, next: "검체 품질과 구리 대사 검사를 통합하여 Wilson disease를 포함한 원인을 평가", diseases: ["Wilson's Disease"] });
  if (alpBilirubinRatio !== undefined && alpBilirubinRatio < 4) add({ level: "pattern", title: "낮은 ALP/total bilirubin 비", summary: `ALP/total bilirubin ratio ${alpBilirubinRatio}입니다. 급성 간부전 맥락에서는 Wilson disease를 포함해 해석할 수 있습니다.`, next: "간기능·용혈·구리 대사 검사 및 전체 임상 상태를 함께 평가", diseases: ["Wilson's Disease", "급성 간부전"] });
  const tlsCriteria = [uricAcid !== undefined && uricAcid >= 8, potassium !== undefined && potassium >= 6, phosphate !== undefined && phosphate >= 4.5, calcium !== undefined && calcium <= 7].filter(Boolean).length;
  if (tlsCriteria >= 2) add({ level: "urgent", title: "종양 용해 증후군 호환 검사 조합", summary: `Uric acid·K·phosphate·Ca 중 ${tlsCriteria}개가 Cairo-Bishop 절대 수치 범위에 해당합니다.`, next: "creatinine, LDH, ECG 및 전해질 추세를 긴급 확인하고 종양 용해 증후군 프로토콜을 검토", diseases: ["Tumor Lysis Syndrome", "급성 신손상", "고칼륨혈증"] });
  if (postDexCortisol !== undefined && postDexCortisol > 1.8) add({ level: "attention", title: "1-mg DST 비억제 cortisol 패턴", summary: `1-mg overnight dexamethasone suppression 뒤 cortisol ${postDexCortisol} μg/dL입니다. 선별검사 이상으로, 단독으로 Cushing syndrome을 확정하지 않습니다.`, next: "동일/대체 선별검사 반복, 약물·검사간섭을 확인하고 내분비 평가로 원인 감별", diseases: ["Cushing's Syndrome", "Cushing's Disease"] });}
function resolveDiseases(diseases: DiseaseNote[], terms: string[]) {
  return terms.flatMap((term) => {
    const termKey = normalized(term).toLowerCase().replace(/[\s\-_/.,:;]+/g, "");
    const hit = diseases.find((note) => [note.title, ...note.aliases].some((candidate) => {
      const candidateKey = normalized(candidate).toLowerCase().replace(/[\s\-_/.,:;]+/g, "");
      return candidateKey === termKey || (termKey.length >= 3 && (candidateKey.includes(termKey) || termKey.includes(candidateKey)));
    }));
    return hit ? [{ slug: hit.slug, title: term }] : [];
  }).filter((value, index, array) => array.findIndex((item) => item.slug === value.slug) === index);
}

const SLIDER_RANGES: Record<string, SliderRange> = {
  wbc: { min: 0, max: 100, step: 0.5 }, hemoglobin: { min: 0, max: 25, step: 0.1 }, hemoglobinMale: { min: 0, max: 25, step: 0.1 }, mcv: { min: 40, max: 140, step: 1 }, platelet: { min: 0, max: 1500, step: 10 },
  na: { min: 110, max: 180, step: 1 }, k: { min: 1, max: 10, step: 0.1 }, cl: { min: 70, max: 140, step: 1 }, hco3: { min: 0, max: 50, step: 1 }, ca: { min: 4, max: 16, step: 0.1 }, mg: { min: 0.5, max: 6, step: 0.1 }, phos: { min: 0.5, max: 15, step: 0.1 }, bun: { min: 0, max: 150, step: 1 }, creatinine: { min: 0, max: 15, step: 0.1 }, egfr: { min: 0, max: 150, step: 1 },
  glucose: { min: 20, max: 700, step: 5 }, a1c: { min: 3, max: 16, step: 0.1 }, ast: { min: 0, max: 2000, step: 10 }, alt: { min: 0, max: 2000, step: 10 }, alp: { min: 0, max: 1500, step: 10 }, bilirubin: { min: 0, max: 30, step: 0.1 }, albumin: { min: 1, max: 6, step: 0.1 },
  crp: { min: 0, max: 300, step: 1 }, pct: { min: 0, max: 100, step: 0.1 }, lactate: { min: 0, max: 20, step: 0.1 }, inr: { min: 0.5, max: 10, step: 0.1 }, ddimer: { min: 0, max: 20, step: 0.1 }, tsh: { min: 0, max: 50, step: 0.1 }, freeT4: { min: 0.1, max: 5, step: 0.1 },
  ph: { min: 6.8, max: 7.8, step: 0.01 }, paco2: { min: 10, max: 120, step: 1 }, abgHco3: { min: 0, max: 50, step: 1 }, pao2: { min: 20, max: 500, step: 5 },
  cortisol8am: { min: 0, max: 60, step: 0.5 }, acth8am: { min: 0, max: 300, step: 1 }, pthIntact: { min: 0, max: 300, step: 1 }, prolactin: { min: 0, max: 300, step: 1 }, fsh: { min: 0, max: 200, step: 1 }, lh: { min: 0, max: 200, step: 1 }, estradiol: { min: 0, max: 1000, step: 10 }, testosterone: { min: 0, max: 1500, step: 10 }, betaHcg: { min: 0, max: 100000, step: 100 }, igf1Xuln: { min: 0, max: 5, step: 0.1 }, vitaminD25oh: { min: 0, max: 150, step: 1 }, totalIge: { min: 0, max: 2000, step: 10 }, aldosterone: { min: 0, max: 100, step: 1 }, reninPra: { min: 0, max: 30, step: 0.1 }, postDexCortisol: { min: 0, max: 20, step: 0.1 },
  urineSg: { min: 1, max: 1.06, step: 0.001 }, urinePh: { min: 4, max: 10, step: 0.1 }, urineRbc: { min: 0, max: 100, step: 1 }, urineWbc: { min: 0, max: 100, step: 1 }, uacr: { min: 0, max: 3000, step: 10 },
  totalCholesterol: { min: 50, max: 500, step: 5 }, ldl: { min: 0, max: 400, step: 5 }, hdl: { min: 0, max: 150, step: 1 }, triglyceride: { min: 0, max: 1500, step: 10 }, lipaseXuln: { min: 0, max: 20, step: 0.1 }, afp: { min: 0, max: 1000, step: 5 }, uricAcid: { min: 0, max: 20, step: 0.1 },
  ferritin: { min: 0, max: 2000, step: 10 }, transferrinSat: { min: 0, max: 100, step: 1 }, vitaminB12: { min: 0, max: 2000, step: 10 }, folate: { min: 0, max: 50, step: 0.1 }, reticulocytePct: { min: 0, max: 20, step: 0.1 }, ldh: { min: 0, max: 3000, step: 10 }, haptoglobin: { min: 0, max: 400, step: 5 }, absoluteLymphocyteCount: { min: 0, max: 20000, step: 100 }, eosinophilPct: { min: 0, max: 100, step: 1 }, adamts13Activity: { min: 0, max: 100, step: 1 },
  troponinXuln: { min: 0, max: 100, step: 0.1 }, ckXuln: { min: 0, max: 100, step: 0.1 }, betaHydroxybutyrate: { min: 0, max: 15, step: 0.1 }, serumOsmolality: { min: 240, max: 400, step: 1 }, upcr: { min: 0, max: 15, step: 0.1 }, fena: { min: 0, max: 10, step: 0.1 }, urineOsmolality: { min: 0, max: 1200, step: 10 }, urineSodium: { min: 0, max: 250, step: 1 }, feUrea: { min: 0, max: 100, step: 1 },
  csfWbc: { min: 0, max: 10000, step: 10 }, csfNeutrophilPct: { min: 0, max: 100, step: 1 }, csfProtein: { min: 0, max: 1000, step: 5 }, csfGlucose: { min: 0, max: 300, step: 1 }, csfLactate: { min: 0, max: 20, step: 0.1 }, balEosinophilPct: { min: 0, max: 100, step: 1 }, balLymphocytePct: { min: 0, max: 100, step: 1 }, balCd4Cd8Ratio: { min: 0, max: 10, step: 0.1 }, sputumEosinophilPct: { min: 0, max: 100, step: 1 },
  saag: { min: 0, max: 3, step: 0.1 }, asciticPmn: { min: 0, max: 5000, step: 10 }, asciticTriglyceride: { min: 0, max: 1000, step: 10 }, pleuralTriglyceride: { min: 0, max: 1000, step: 10 }, pleuralPh: { min: 6.8, max: 7.8, step: 0.01 }, pleuralGlucose: { min: 0, max: 300, step: 1 }, pleuralAda: { min: 0, max: 150, step: 1 }, pleuralProteinRatio: { min: 0, max: 2, step: 0.01 }, pleuralLdhRatio: { min: 0, max: 3, step: 0.01 }, pleuralLdhUlnRatio: { min: 0, max: 5, step: 0.01 },
  ceruloplasmin: { min: 0, max: 100, step: 1 }, urineCopper24h: { min: 0, max: 500, step: 5 }, hepaticCopper: { min: 0, max: 1000, step: 10 }, alpBilirubinRatio: { min: 0, max: 20, step: 0.1 }, anc: { min: 0, max: 20000, step: 100 }, fibrinogen: { min: 0, max: 1000, step: 10 }, apttRatio: { min: 0, max: 5, step: 0.1 },
  sbp: { min: 50, max: 250, step: 1 }, dbp: { min: 30, max: 160, step: 1 }, heartRate: { min: 20, max: 240, step: 1 }, respiratoryRate: { min: 4, max: 60, step: 1 }, temperature: { min: 32, max: 43, step: 0.1 },
};
function sliderConfig(field: NumericField) {
  const configured = SLIDER_RANGES[field.id];
  if (configured) return configured;
  const low = field.low;
  const high = field.high;
  let min: number;
  let max: number;

  if (low !== undefined && high !== undefined) {
    const span = Math.max(high - low, 0.01);
    min = Math.max(0, low - span * 2);
    max = high + span * 2;
  } else if (high !== undefined) {
    min = 0;
    max = Math.max(high * 5, high + 10);
  } else if (low !== undefined) {
    min = Math.max(0, low * 0.2);
    max = low * 2.5;
  } else {
    min = 0;
    max = 100;
  }

  const magnitude = max - min;
  const step = magnitude <= 1 ? 0.01 : magnitude <= 10 ? 0.1 : magnitude <= 100 ? 1 : magnitude <= 500 ? 5 : 10;
  return { min, max, step };
}

function sliderDefault(field: NumericField, min: number, max: number) {
  if (field.low !== undefined && field.high !== undefined) return (field.low + field.high) / 2;
  if (field.high !== undefined) return field.high / 2;
  if (field.low !== undefined) return field.low;
  return (min + max) / 2;
}

function formatSliderValue(value: number, step: number) {
  const digits = step < 0.1 ? 2 : step < 1 ? 1 : 0;
  return value.toFixed(digits).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function SliderFieldControl({ field, rawValue, onChange }: { field: NumericField; rawValue?: string; onChange: (value: string) => void }) {
  const { min, max, step } = sliderConfig(field);
  const hasValue = rawValue !== undefined && rawValue !== "";
  const parsed = Number(rawValue);
  const value = Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : sliderDefault(field, min, max);
  const formatted = formatSliderValue(value, step);

  return (
    <span className="mt-2 block">
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(event.target.value)} className="h-2 w-full cursor-pointer accent-teal-600" aria-label={`${field.label} slider`} />
      <span className="mt-1 flex items-center justify-between gap-1 text-[11px] text-slate-500"><strong className="text-sm text-slate-800">{hasValue ? formatted : "\uC120\uD0DD \uC804"}</strong><span className="shrink-0">{formatSliderValue(min, step)}–{formatSliderValue(max, step)} {field.unit}</span></span>
    </span>
  );
}
function VitalSignCard({ vital, values, inputMode, onChange }: { vital: typeof VITAL_SIGNS[number]; values: Record<string, string>; inputMode: "direct" | "slider"; onChange: (key: string, value: string) => void }) {
  return <article className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"><div className="mb-2 flex items-baseline justify-between gap-2"><h2 className="font-bold text-slate-950">{vital.label}</h2><span className="text-[11px] text-slate-500">{vital.note}</span></div><div className={`grid gap-2 ${vital.fields.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>{vital.fields.map((field) => { const numericValue = numberAt(values, field.id); const status = numericValue === undefined ? undefined : classify(field, numericValue); return <label key={field.id} className="min-w-0 rounded-lg bg-slate-50 px-2.5 py-2"><span className="flex items-center justify-between gap-1 text-xs font-semibold text-slate-800"><span>{field.label}</span>{status ? <StatusPill status={status} /> : null}</span>{inputMode === "direct" ? <span className="mt-1 flex min-w-0 items-center gap-1"><input inputMode="decimal" type="number" step="any" value={values[field.id] ?? ""} onChange={(event) => onChange(field.id, event.target.value)} className="min-w-0 flex-1 rounded border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-950 outline-none focus:border-teal-500" placeholder="입력" /><span className="shrink-0 text-[11px] text-slate-500">{field.unit}</span></span> : <SliderFieldControl field={field} rawValue={values[field.id]} onChange={(value) => onChange(field.id, value)} />}<span className="mt-1 block text-[11px] text-slate-500">{field.low}–{field.high} {field.unit}</span></label>; })}</div></article>;
}
export function NumericLabInput({ diseases }: { diseases: DiseaseNote[] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [inputMode, setInputMode] = useState<"direct" | "slider">("direct");
  const [itemScope, setItemScope] = useState<"core" | "detail">("core");
  const [showResetNotice, setShowResetNotice] = useState(false);
  const findings = useMemo(() => buildFindings(values), [values]);
  const setValue = (key: string, value: string) => { setShowResetNotice(false); setValues((previous) => ({ ...previous, [key]: value })); };
  const resetValues = () => { setValues({}); setShowResetNotice(true); };

  return <div className="space-y-6">
    <header className="rounded-xl border border-teal-200 bg-gradient-to-br from-white via-teal-50/70 to-cyan-50 p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Clinical interpretation aid</div><h1 className="mt-2 text-3xl font-bold text-slate-950">수치입력</h1><p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">혈액·소변·ABGA 값을 함께 입력해 개별 참고범위와 조합 패턴을 빠르게 봅니다. 결과는 확정 진단이나 처방 지시가 아니며, 실제 검사실 참고범위·연령·성별·임신·검체 상태·시간 추세를 우선합니다.</p><div className="mt-4 flex flex-wrap gap-2"><button type="button" onClick={resetValues} className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"><RotateCcw className="h-4 w-4" />입력 초기화</button>{showResetNotice ? <span className="inline-flex items-center rounded-lg bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">입력값을 초기화했습니다.</span> : null}<span className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900"><Info className="h-4 w-4" />위험 소견·증상은 도구 결과와 무관하게 즉시 임상 평가</span></div><div className="mt-4 inline-flex rounded-lg border border-teal-200 bg-white p-1" aria-label="수치 입력 방식">
      <button type="button" onClick={() => setInputMode("direct")} className={`rounded-md px-3 py-2 text-sm font-semibold ${inputMode === "direct" ? "bg-teal-600 text-white" : "text-slate-600"}`}>직접 입력</button>
      <button type="button" onClick={() => setInputMode("slider")} className={`rounded-md px-3 py-2 text-sm font-semibold ${inputMode === "slider" ? "bg-teal-600 text-white" : "text-slate-600"}`}>슬라이더</button>
    </div></header><div className="mt-3 inline-flex rounded-lg border border-slate-200 bg-white p-1" role="tablist" aria-label="표시 항목 범위">
      <button type="button" role="tab" aria-selected={itemScope === "core"} onClick={() => setItemScope("core")} className={`rounded-md px-3 py-2 text-sm font-semibold ${itemScope === "core" ? "bg-slate-800 text-white" : "text-slate-600"}`}>핵심 항목</button>
      <button type="button" role="tab" aria-selected={itemScope === "detail"} onClick={() => setItemScope("detail")} className={`rounded-md px-3 py-2 text-sm font-semibold ${itemScope === "detail" ? "bg-slate-800 text-white" : "text-slate-600"}`}>세부 항목</button>
    </div>

    <section aria-label="성인 활력징후 입력" className="rounded-xl border border-teal-200 bg-teal-50/60 p-4 shadow-sm sm:p-5"><div className="flex flex-wrap items-baseline justify-between gap-2"><div><div className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Vital signs</div><h2 className="mt-1 text-xl font-bold text-slate-950">활력징후</h2></div><p className="text-xs text-slate-600">성인 안정 시 빠른 참고범위 · 연령·임신·기저 상태와 추세를 우선</p></div><div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{VITAL_SIGNS.map((vital) => <VitalSignCard key={vital.id} vital={vital} values={values} inputMode={inputMode} onChange={setValue} />)}</div></section>
<section className="grid gap-4 xl:grid-cols-2">{NUMERIC_PANELS.filter((panel) => itemScope === "detail" || panel.fields.some((field) => CORE_FIELD_IDS.has(field.id))).map((panel) => <article key={panel.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-3"><h2 className="font-bold text-slate-950">{panel.title}</h2><p className="mt-1 text-xs text-slate-500">{panel.description}</p></div><div className="grid grid-cols-2 gap-2">{panel.fields.filter((field) => itemScope === "detail" || CORE_FIELD_IDS.has(field.id)).map((field) => { const value = numberAt(values, field.id); const status = value === undefined ? undefined : classify(field, value); return <label key={field.id} className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 sm:px-3"><span className="flex min-w-0 items-center justify-between gap-1.5 text-xs font-semibold text-slate-800 sm:text-sm"><span className="min-w-0 leading-4">{field.label}</span>{status ? <StatusPill status={status} /> : null}</span>{inputMode === "direct" ? <span className="mt-1 flex min-w-0 items-center gap-1.5"><input inputMode="decimal" type="number" step="any" value={values[field.id] ?? ""} onChange={(event) => setValue(field.id, event.target.value)} className="min-w-0 flex-1 rounded border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-950 outline-none focus:border-teal-500" placeholder="입력" /><span className="shrink-0 text-[11px] text-slate-500 sm:text-xs">{field.unit}</span></span> : <SliderFieldControl field={field} rawValue={values[field.id]} onChange={(value) => setValue(field.id, value)} />}<span className="mt-1 block text-[11px] text-slate-500">{field.low !== undefined || field.high !== undefined ? `${field.low ?? ""}${field.low !== undefined && field.high !== undefined ? "–" : ""}${field.high ?? ""} ${field.unit}` : field.note}</span></label>; })}</div></article>)}</section>

    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><h2 className="font-bold text-slate-950">요 dipstick</h2><p className="mt-1 text-xs text-slate-500">음성/trace/양성은 검사실·strip 판정과 검체 조건을 우선합니다.</p><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{QUALITATIVE.filter((field) => itemScope === "detail" || CORE_QUALITATIVE_IDS.has(field.id)).map((field) => <label key={field.id} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800"><span className="min-w-0 leading-4">{field.label}</span><select value={values[field.id] ?? "negative"} onChange={(event) => setValue(field.id, event.target.value)} className="mt-2 w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-sm font-normal text-slate-800 outline-none focus:border-teal-500"><option value="negative">negative</option><option value="trace">trace</option><option value="positive">positive</option></select></label>)}</div></section>

    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between gap-3"><div><h2 className="text-xl font-bold text-slate-950">통합 해석</h2><p className="mt-1 text-sm text-slate-600">입력된 조합에서 우선 확인할 패턴입니다. 여러 패턴이 함께 뜰 수 있습니다.</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{findings.length}개</span></div>{findings.length === 0 ? <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">수치를 입력하면 이상값과 조합 패턴이 표시됩니다. ABGA는 pH·PaCO₂·HCO₃⁻를 함께 입력하면 산염기 해석을 시작합니다.</div> : <div className="mt-4 space-y-3">{findings.map((finding) => <article key={`${finding.title}-${finding.summary}`} className={`rounded-lg border p-4 ${finding.level === "urgent" ? "border-rose-200 bg-rose-50" : finding.level === "attention" ? "border-amber-200 bg-amber-50" : "border-teal-200 bg-teal-50"}`}><div className="flex items-start gap-2"><AlertTriangle className={`mt-0.5 h-4 w-4 shrink-0 ${finding.level === "urgent" ? "text-rose-700" : finding.level === "attention" ? "text-amber-700" : "text-teal-700"}`} /><div><h3 className="font-bold text-slate-950">{finding.title}</h3><p className="mt-1 text-sm leading-6 text-slate-700">{finding.summary}</p><p className="mt-2 text-sm font-medium text-slate-800">다음 확인: {finding.next}</p><div className="mt-3 flex flex-wrap gap-2">{resolveDiseases(diseases, finding.diseases).map((disease) => <Link key={disease.slug} href={`/disease/${disease.slug}`} className="inline-flex items-center gap-1 rounded-full border border-white bg-white/80 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-800">{disease.title}<ChevronRight className="h-3.5 w-3.5" /></Link>)}</div></div></div></article>)}</div>}</section>

    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">근거 · 적용 범위</h2><ul className="mt-3 space-y-2 text-sm text-slate-600">{SOURCE_LINKS.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer" className="font-medium text-teal-700 hover:underline">{label}</a></li>)}</ul></section>
  </div>;
}

function StatusPill({ status }: { status: "low" | "high" | "normal" }) { const styles = status === "low" ? "bg-sky-100 text-sky-800" : status === "high" ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"; return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${styles}`}>{status === "normal" ? <CheckCircle2 className="h-3 w-3" /> : null}{status.toUpperCase()}</span>; }
