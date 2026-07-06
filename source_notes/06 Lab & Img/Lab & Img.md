---
유형: index
preprocessing_required: x
---

# 06 Lab & Img

병원에서 시행하는 검사 문서를 정리하는 메인 루트입니다.

- **분류 원칙**: 검사 목적보다 **검체와 검사 방식**을 우선으로 분류합니다.
- **혈액으로 시행하는 항목**은 모두 `01 혈액검사` 하위에 배치합니다.
- **문서 내부 목차**는 한국어로 작성하고, 의학 용어는 English를 유지합니다.
- **정상범위**는 대표 성인 기준을 우선 제시하되, 실제 판독은 각 기관 reference range를 우선합니다.

## 검사군
- [[분류체계]]
- [[01 혈액검사/혈액검사]]
- [[02 소변검사/소변검사]]
- [[03 심전도/심전도]]
- [[04 영상검사/영상검사]]
- [[99 기타 검사/기타 검사]]

## 작성 원칙
- 검사 문서는 `검사 원리`, `검체 및 측정 방법`, `정상범위`, `이상 소견의 해석`, `임상적 활용`, `주의점 및 함정`, `관련 검사`, `참고문헌` 순서를 기본으로 사용합니다.
- 수치 하나만으로 진단을 확정하지 않고, 임상 맥락과 pretest probability를 함께 설명합니다.
- 신뢰 가능한 source만 사용하며, 가능하면 government, academic medical center, professional reference를 우선합니다.

## 혈액검사 정상범위 표

### CBC·Differential·Platelet
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `WBC` | `4.0 x10^9/L` | `10.0 x10^9/L` |
| `RBC` (여성) | `4.0 x10^12/L` | `5.4 x10^12/L` |
| `RBC` (남성) | `4.5 x10^12/L` | `6.1 x10^12/L` |
| `Hemoglobin` (여성) | `11.5 g/dL` | `15.5 g/dL` |
| `Hemoglobin` (남성) | `13.0 g/dL` | `17.0 g/dL` |
| `Hematocrit` (여성) | `36%` | `48%` |
| `Hematocrit` (남성) | `40%` | `55%` |
| `MCV` | `80 fL` | `100 fL` |
| `MCH` | `27 pg` | `31 pg` |
| `MCHC` | `32 g/dL` | `36 g/dL` |
| `RDW` | `12%` | `15%` |
| `Platelet` | `150 x10^9/L` | `400 x10^9/L` |
| `Neutrophil` | `2.5 x10^9/L` | `7.0 x10^9/L` |
| `Lymphocyte` | `1.0 x10^9/L` | `4.8 x10^9/L` |
| `Monocyte` | `0.2 x10^9/L` | `0.8 x10^9/L` |
| `Eosinophil` | `0 x10^9/L` | `0.5 x10^9/L` |
| `Basophil` | `0 x10^9/L` | `0.3 x10^9/L` |

### Electrolytes
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Sodium` | `135 mmol/L` | `145 mmol/L` |
| `Potassium` | `3.5 mmol/L` | `5.1 mmol/L` |
| `Chloride` | `98 mmol/L` | `107 mmol/L` |
| `HCO3 / Total CO2` | `22 mmol/L` | `29 mmol/L` |
| `Calcium` | `8.5 mg/dL` | `10.2 mg/dL` |
| `Magnesium` | `1.7 mg/dL` | `2.2 mg/dL` |
| `Phosphate` | `2.5 mg/dL` | `4.5 mg/dL` |
| `Serum Osmolality` | `275 mOsm/kg` | `295 mOsm/kg` |

### Renal
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Creatinine` | `0.6 mg/dL` | `1.3 mg/dL` |
| `eGFR` | `90 mL/min/1.73 m2` | `-` |
| `BUN` | `7 mg/dL` | `20 mg/dL` |

### Glucose metabolism
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Fasting Glucose` | `70 mg/dL` | `99 mg/dL` |
| `HbA1c` | `-` | `5.6%` |

### Liver·Pancreas
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `AST` | `10 U/L` | `40 U/L` |
| `ALT` | `7 U/L` | `56 U/L` |
| `ALP` | `44 U/L` | `147 U/L` |
| `Albumin` | `3.5 g/dL` | `5.0 g/dL` |
| `Total Bilirubin` | `0.2 mg/dL` | `1.2 mg/dL` |
| `Lipase` | `0 U/L` | `160 U/L` |

### Inflammation marker
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `CRP` | `0 mg/dL` | `1.0 mg/dL` |
| `ESR` (남성) | `0 mm/hr` | `15 mm/hr` |
| `ESR` (여성) | `0 mm/hr` | `20 mm/hr` |
| `Procalcitonin` | `0 ng/mL` | `0.1 ng/mL` |

### Cardiac marker
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Troponin` | `-` | `assay-specific 99th percentile URL` |
| `BNP / NT-proBNP` | `-` | `age/sex/assay dependent` |

### Coagulation
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `PT` | `11 sec` | `13.5 sec` |
| `INR` | `0.8` | `1.1` |
| `aPTT` | `25 sec` | `35 sec` |
| `Fibrinogen` | `200 mg/dL` | `400 mg/dL` |
| `D-dimer` | `0` | `0.50 ug/mL FEU` |

### Hormones
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `TSH` | `0.4 uIU/mL` | `4.0 uIU/mL` |
| `Free T4` | `0.8 ng/dL` | `1.8 ng/dL` |
| `AM Cortisol` | `5 ug/dL` | `25 ug/dL` |
| `Prolactin` (여성 비임신) | `5 ng/mL` | `25 ng/mL` |
| `Prolactin` (남성) | `5 ng/mL` | `20 ng/mL` |
| `beta-hCG` (비임신) | `0 mIU/mL` | `5 mIU/mL` |

### Iron status
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Ferritin` (남성) | `24 ng/mL` | `336 ng/mL` |
| `Ferritin` (여성) | `11 ng/mL` | `307 ng/mL` |

### Lipid
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Total Cholesterol` | `-` | `<200 mg/dL` |
| `LDL` | `-` | `<100 mg/dL` |
| `HDL` | `40 mg/dL` | `-` |
| `Triglycerides` | `-` | `<150 mg/dL` |
| `Non-HDL Cholesterol` | `-` | `<130 mg/dL` |

### Immunology
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `IgG` | `700 mg/dL` | `1600 mg/dL` |
| `IgA` | `70 mg/dL` | `400 mg/dL` |
| `IgM` | `40 mg/dL` | `230 mg/dL` |
| `IgE` | `0 IU/mL` | `100 IU/mL` |
| `C3` | `90 mg/dL` | `180 mg/dL` |
| `C4` | `10 mg/dL` | `40 mg/dL` |

### Blood gas·Perfusion·General tissue injury
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `ABGA pH` | `7.38` | `7.42` |
| `ABGA PaCO2` | `38 mmHg` | `42 mmHg` |
| `ABGA PaO2` | `75 mmHg` | `100 mmHg` |
| `Lactate` | `0.5 mmol/L` | `2.2 mmol/L` |
| `LDH` | `140 U/L` | `280 U/L` |

## 소변검사 정상범위 표

### Urinalysis dipstick·basic chemistry
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Urine Specific Gravity` | `1.003` | `1.030` |
| `Urine pH` | `5.0` | `8.0` |
| `Urine Protein` | `negative` | `trace` |
| `Urine Glucose` | `negative` | `negative` |
| `Urine Ketone` | `negative` | `negative` |
| `Urine Bilirubin` | `negative` | `negative` |
| `Urine Urobilinogen` | `0.2 mg/dL` | `1.0 mg/dL` |
| `Urine Blood / Hemoglobin` | `negative` | `negative` |
| `Urine Leukocyte Esterase` | `negative` | `negative` |
| `Urine Nitrite` | `negative` | `negative` |

### Urine microscopy
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `Urine RBC` | `0 /HPF` | `2-3 /HPF` |
| `Urine WBC` | `0 /HPF` | `5 /HPF` |
| `Urinary Casts` | `none` | `hyaline cast small amount` |
| `Urinary Crystals` | `none` | `small physiologic amount possible` |

### Urine chemistry
| 항목명 | 하한치 | 상한치 |
|---|---:|---:|
| `UACR` | `0 mg/g creatinine` | `30 mg/g creatinine` |
| `UPCR` | `0 mg/g creatinine` | `150-200 mg/g creatinine` |
| `Urine Sodium` | `context dependent` | `context dependent` |
| `Urine Osmolality` | `50 mOsm/kg` | `1200 mOsm/kg` |
