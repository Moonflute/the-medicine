"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronRight, Info, RotateCcw } from "lucide-react";
import type { DiseaseNote } from "@/lib/webdb";

type NumericField = { id: string; label: string; unit: string; low?: number; high?: number; note?: string; sex?: "female" | "male" };
type QualitativeField = { id: string; label: string; options: Array<"negative" | "trace" | "positive"> };
type Finding = { level: "urgent" | "attention" | "pattern"; title: string; summary: string; next: string; diseases: string[] };

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
  ] },
  { title: "요검사 · 신장손상", description: "단일 검체는 반복·오염·농축 여부를 고려", fields: [
    { id: "urineSg", label: "Specific gravity", unit: "", low: 1.005, high: 1.03 }, { id: "urinePh", label: "Urine pH", unit: "", low: 5, high: 8 }, { id: "urineRbc", label: "Urine RBC", unit: "/HPF", high: 2 }, { id: "urineWbc", label: "Urine WBC", unit: "/HPF", high: 5 }, { id: "uacr", label: "UACR", unit: "mg/g", high: 30 },
  ] },
];

const QUALITATIVE: QualitativeField[] = [
  { id: "urineProtein", label: "Urine protein", options: ["negative", "trace", "positive"] }, { id: "urineBlood", label: "Urine blood", options: ["negative", "trace", "positive"] }, { id: "urineGlucose", label: "Urine glucose", options: ["negative", "trace", "positive"] }, { id: "urineKetone", label: "Urine ketone", options: ["negative", "trace", "positive"] }, { id: "urineNitrite", label: "Nitrite", options: ["negative", "trace", "positive"] }, { id: "urineLe", label: "Leukocyte esterase", options: ["negative", "trace", "positive"] },
];

const CORE_FIELD_IDS = new Set(["wbc", "hemoglobin", "hemoglobinMale", "platelet", "na", "k", "hco3", "creatinine", "glucose", "a1c", "ast", "alt", "crp", "lactate", "inr", "ph", "paco2", "abgHco3", "pao2", "urineSg", "urinePh", "urineWbc", "urineRbc", "uacr"]);
const CORE_QUALITATIVE_IDS = new Set(["urineProtein", "urineBlood", "urineKetone", "urineNitrite", "urineLe"]);
const SOURCE_LINKS = [
  ["MedlinePlus: CMP", "https://medlineplus.gov/lab-tests/comprehensive-metabolic-panel-cmp/"], ["MedlinePlus: Urinalysis", "https://medlineplus.gov/urinalysis.html"], ["NIDDK: urine albumin", "https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/kidney-disease/identify-manage-patients/evaluate-ckd/assess-urine-albumin"], ["MSD: acid-base", "https://www.msdmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders"], ["ADA Standards 2026: diabetes diagnosis", "https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes"], ["KDIGO 2024: CKD evaluation", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"], ["American Thyroid Association: thyroid function tests", "https://www.thyroid.org/thyroid-function-tests/"],
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
  if (lactate !== undefined && lactate >= 4) add({ level: "urgent", title: "고젖산혈증 범위", summary: `Lactate ${lactate} mmol/L입니다. 저관류·저산소증·sepsis 등 원인을 임상적으로 즉시 평가합니다.`, next: "vital sign, 관류, 산염기, 감염·저산소증·약물/독성 맥락과 serial lactate를 확인", diseases: ["패혈증", "쇼크"] });
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
  const na = value("na"), calcium = value("ca"), magnesium = value("mg"), phosphate = value("phos");
  const bun = value("bun"), creatinine = value("creatinine"), uacr = value("uacr");
  const glucose = value("glucose"), a1c = value("a1c"), pH = value("ph"), hco3 = value("abgHco3") ?? value("hco3");
  const ast = value("ast"), alt = value("alt"), alp = value("alp"), bilirubin = value("bilirubin"), albumin = value("albumin"), inr = value("inr");
  const tsh = value("tsh"), freeT4 = value("freeT4"), mcv = value("mcv"), hemoglobin = value("hemoglobin") ?? value("hemoglobinMale"), platelet = value("platelet");
  const urineSg = value("urineSg"), urineRbc = value("urineRbc");
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
  if (uacr !== undefined && uacr >= 300) add({ level: "attention", title: "중증 알부민뇨 범위", summary: `UACR ${uacr} mg/g으로 A3 범위입니다. 일회성 상승은 감염·운동·고혈당에도 생길 수 있습니다.`, next: "first-morning sample 반복, eGFR 추세·혈압·당대사 및 urine sediment를 확인", diseases: ["만성 콩팥병", "당뇨병성 콩팥병", "신증후군"] });
  if (uacr !== undefined && uacr >= 30 && glucose !== undefined && glucose >= 126) add({ level: "attention", title: "당뇨병-알부민뇨 조합", summary: "고혈당과 albuminuria가 함께 있어 당뇨병성 콩팥병을 포함한 신장 평가가 필요합니다.", next: "반복 UACR, eGFR, 혈압, 망막·신경병증 동반 여부와 다른 신질환 단서를 확인", diseases: ["당뇨병", "당뇨병성 콩팥병", "만성 콩팥병"] });

  if (glucose !== undefined && glucose >= 250 && ketonePositive && ((pH !== undefined && pH < 7.3) || (hco3 !== undefined && hco3 < 18))) add({ level: "urgent", title: "당뇨병성 케톤산증(DKA) 호환 패턴", summary: "고혈당·ketone과 산증이 함께 있습니다. 확정에는 혈중 β-hydroxybutyrate 등 전체 기준 확인이 필요합니다.", next: "ketone 정량, anion gap, 전해질·신기능, 유발 요인과 DKA 프로토콜을 즉시 확인", diseases: ["당뇨병성 케톤산증", "당뇨병"] });
  else if (glucose !== undefined && glucose >= 250 && ketonePositive) add({ level: "attention", title: "고혈당-케톤 조합", summary: "고혈당과 ketone이 함께 있으나 입력값만으로 DKA를 확정할 수 없습니다.", next: "VBG/ABG, HCO₃⁻, anion gap 및 혈중 ketone을 추가 확인", diseases: ["당뇨병", "당뇨병성 케톤산증"] });
  if (glucose !== undefined && glucose >= 600) add({ level: "urgent", title: "고삼투압성 고혈당 상태(HHS) 고려 범위", summary: `Glucose ${glucose} mg/dL입니다. HHS는 osmolality·탈수·의식 상태를 함께 평가해야 합니다.`, next: "effective osmolality, ketone, pH/HCO₃⁻, Na 보정치, 신기능 및 유발 요인을 즉시 확인", diseases: ["고삼투압성 고혈당 상태", "당뇨병"] });
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
  if (platelet !== undefined && platelet > 450) add({ level: "attention", title: "혈소판증가증 패턴", summary: `Platelet ${platelet} ×10³/μL입니다. 감염·염증·철결핍에 의한 반응성과 clonal 원인을 구분해야 합니다.`, next: "반복 CBC/smear, ferritin, CRP 및 혈전/출혈 증상을 확인", diseases: ["철결핍 빈혈"] });
  if ((bloodPositive || (urineRbc !== undefined && urineRbc > 2)) && !proteinPositive && (uacr === undefined || uacr < 30)) add({ level: "attention", title: "단독 혈뇨 패턴", summary: "혈뇨는 오염·운동·결석·감염·비뇨기계 원인 등으로 발생할 수 있습니다.", next: "월경/채뇨 상태를 배제해 반복 UA·microscopy를 시행하고 위험도에 따라 비뇨기 평가", diseases: ["혈뇨", "요로결석", "요로감염"] });
  if (urineSg !== undefined && urineSg >= 1.03) add({ level: "pattern", title: "농축뇨 패턴", summary: `Specific gravity ${urineSg}입니다. 탈수·당/단백 존재가 영향을 줄 수 있습니다.`, next: "수분 상태, 혈당, 단백뇨 및 반복 검체를 확인", diseases: ["탈수", "당뇨병"] });
  if (urineSg !== undefined && urineSg <= 1.005) add({ level: "pattern", title: "저비중뇨 패턴", summary: `Specific gravity ${urineSg}입니다. 수분 과다, 요붕증, concentrating defect 등과 함께 해석합니다.`, next: "serum/urine osmolality, urine output, Na와 약물·신기능을 확인", diseases: ["요붕증", "만성 콩팥병"] });
}
function resolveDiseases(diseases: DiseaseNote[], terms: string[]) {
  return terms.flatMap((term) => {
    const hit = diseases.find((note) => normalized(note.title).includes(term) || note.aliases.some((alias) => normalized(alias).includes(term)));
    return hit ? [{ slug: hit.slug, title: term }] : [];
  }).filter((value, index, array) => array.findIndex((item) => item.slug === value.slug) === index);
}

function sliderConfig(field: NumericField) {
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
  const parsed = Number(rawValue);
  const value = Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : sliderDefault(field, min, max);
  const formatted = formatSliderValue(value, step);

  return (
    <span className="mt-2 block">
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(event.target.value)} className="h-2 w-full cursor-pointer accent-teal-600" aria-label={`${field.label} slider`} />
      <span className="mt-1 flex items-center justify-between gap-1 text-[11px] text-slate-500"><strong className="text-sm text-slate-800">{formatted}</strong><span className="shrink-0">{field.unit}</span></span>
    </span>
  );
}
export function NumericLabInput({ diseases }: { diseases: DiseaseNote[] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [inputMode, setInputMode] = useState<"direct" | "slider">("direct");
  const [itemScope, setItemScope] = useState<"core" | "detail">("core");
  const findings = useMemo(() => buildFindings(values), [values]);
  const setValue = (key: string, value: string) => setValues((previous) => ({ ...previous, [key]: value }));

  return <div className="space-y-6">
    <header className="rounded-xl border border-teal-200 bg-gradient-to-br from-white via-teal-50/70 to-cyan-50 p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Clinical interpretation aid</div><h1 className="mt-2 text-3xl font-bold text-slate-950">수치입력</h1><p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">혈액·소변·ABGA 값을 함께 입력해 개별 참고범위와 조합 패턴을 빠르게 봅니다. 결과는 확정 진단이나 처방 지시가 아니며, 실제 검사실 참고범위·연령·성별·임신·검체 상태·시간 추세를 우선합니다.</p><div className="mt-4 flex flex-wrap gap-2"><button type="button" onClick={() => setValues({})} className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"><RotateCcw className="h-4 w-4" />입력 초기화</button><span className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900"><Info className="h-4 w-4" />위험 소견·증상은 도구 결과와 무관하게 즉시 임상 평가</span></div><div className="mt-4 inline-flex rounded-lg border border-teal-200 bg-white p-1" aria-label="수치 입력 방식">
      <button type="button" onClick={() => setInputMode("direct")} className={`rounded-md px-3 py-2 text-sm font-semibold ${inputMode === "direct" ? "bg-teal-600 text-white" : "text-slate-600"}`}>직접 입력</button>
      <button type="button" onClick={() => setInputMode("slider")} className={`rounded-md px-3 py-2 text-sm font-semibold ${inputMode === "slider" ? "bg-teal-600 text-white" : "text-slate-600"}`}>슬라이더</button>
    </div></header><div className="mt-3 inline-flex rounded-lg border border-slate-200 bg-white p-1" role="tablist" aria-label="표시 항목 범위">
      <button type="button" role="tab" aria-selected={itemScope === "core"} onClick={() => setItemScope("core")} className={`rounded-md px-3 py-2 text-sm font-semibold ${itemScope === "core" ? "bg-slate-800 text-white" : "text-slate-600"}`}>핵심 항목</button>
      <button type="button" role="tab" aria-selected={itemScope === "detail"} onClick={() => setItemScope("detail")} className={`rounded-md px-3 py-2 text-sm font-semibold ${itemScope === "detail" ? "bg-slate-800 text-white" : "text-slate-600"}`}>세부 항목</button>
    </div>

    <section className="grid gap-4 xl:grid-cols-2">{NUMERIC_PANELS.map((panel) => <article key={panel.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-3"><h2 className="font-bold text-slate-950">{panel.title}</h2><p className="mt-1 text-xs text-slate-500">{panel.description}</p></div><div className="grid grid-cols-2 gap-2">{panel.fields.filter((field) => itemScope === "detail" || CORE_FIELD_IDS.has(field.id)).map((field) => { const value = numberAt(values, field.id); const status = value === undefined ? undefined : classify(field, value); return <label key={field.id} className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 sm:px-3"><span className="flex min-w-0 items-center justify-between gap-1.5 text-xs font-semibold text-slate-800 sm:text-sm"><span className="min-w-0 leading-4">{field.label}</span>{status ? <StatusPill status={status} /> : null}</span>{inputMode === "direct" ? <span className="mt-1 flex min-w-0 items-center gap-1.5"><input inputMode="decimal" type="number" step="any" value={values[field.id] ?? ""} onChange={(event) => setValue(field.id, event.target.value)} className="min-w-0 flex-1 rounded border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-950 outline-none focus:border-teal-500" placeholder="입력" /><span className="shrink-0 text-[11px] text-slate-500 sm:text-xs">{field.unit}</span></span> : <SliderFieldControl field={field} rawValue={values[field.id]} onChange={(value) => setValue(field.id, value)} />}<span className="mt-1 block text-[11px] text-slate-500">{field.low !== undefined || field.high !== undefined ? `${field.low ?? ""}${field.low !== undefined && field.high !== undefined ? "–" : ""}${field.high ?? ""} ${field.unit}` : field.note}</span></label>; })}</div></article>)}</section>

    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><h2 className="font-bold text-slate-950">요 dipstick</h2><p className="mt-1 text-xs text-slate-500">음성/trace/양성은 검사실·strip 판정과 검체 조건을 우선합니다.</p><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{QUALITATIVE.filter((field) => itemScope === "detail" || CORE_QUALITATIVE_IDS.has(field.id)).map((field) => <label key={field.id} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800"><span className="min-w-0 leading-4">{field.label}</span><select value={values[field.id] ?? "negative"} onChange={(event) => setValue(field.id, event.target.value)} className="mt-2 w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-sm font-normal text-slate-800 outline-none focus:border-teal-500"><option value="negative">negative</option><option value="trace">trace</option><option value="positive">positive</option></select></label>)}</div></section>

    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between gap-3"><div><h2 className="text-xl font-bold text-slate-950">통합 해석</h2><p className="mt-1 text-sm text-slate-600">입력된 조합에서 우선 확인할 패턴입니다. 여러 패턴이 함께 뜰 수 있습니다.</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{findings.length}개</span></div>{findings.length === 0 ? <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">수치를 입력하면 이상값과 조합 패턴이 표시됩니다. ABGA는 pH·PaCO₂·HCO₃⁻를 함께 입력하면 산염기 해석을 시작합니다.</div> : <div className="mt-4 space-y-3">{findings.map((finding) => <article key={`${finding.title}-${finding.summary}`} className={`rounded-lg border p-4 ${finding.level === "urgent" ? "border-rose-200 bg-rose-50" : finding.level === "attention" ? "border-amber-200 bg-amber-50" : "border-teal-200 bg-teal-50"}`}><div className="flex items-start gap-2"><AlertTriangle className={`mt-0.5 h-4 w-4 shrink-0 ${finding.level === "urgent" ? "text-rose-700" : finding.level === "attention" ? "text-amber-700" : "text-teal-700"}`} /><div><h3 className="font-bold text-slate-950">{finding.title}</h3><p className="mt-1 text-sm leading-6 text-slate-700">{finding.summary}</p><p className="mt-2 text-sm font-medium text-slate-800">다음 확인: {finding.next}</p><div className="mt-3 flex flex-wrap gap-2">{resolveDiseases(diseases, finding.diseases).map((disease) => <Link key={disease.slug} href={`/disease/${disease.slug}`} className="inline-flex items-center gap-1 rounded-full border border-white bg-white/80 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-800">{disease.title}<ChevronRight className="h-3.5 w-3.5" /></Link>)}</div></div></div></article>)}</div>}</section>

    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">근거 · 적용 범위</h2><ul className="mt-3 space-y-2 text-sm text-slate-600">{SOURCE_LINKS.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer" className="font-medium text-teal-700 hover:underline">{label}</a></li>)}</ul></section>
  </div>;
}

function StatusPill({ status }: { status: "low" | "high" | "normal" }) { const styles = status === "low" ? "bg-sky-100 text-sky-800" : status === "high" ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"; return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${styles}`}>{status === "normal" ? <CheckCircle2 className="h-3 w-3" /> : null}{status.toUpperCase()}</span>; }
