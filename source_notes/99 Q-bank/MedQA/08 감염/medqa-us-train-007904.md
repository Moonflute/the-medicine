---
type: qbank
schema_version: 1
id: medqa-us-train-007904
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69d3240079d4de3da5feb7b63f590bc5f1d41fe612a960efd9c12b824bceec15
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute pyelonephritis"
  - "aminoglycoside nephrotoxicity"
  - "acute tubular necrosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXp0cmVvbmFtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVG9icmFteWNpbi5tZA
---

# MedQA US 임상문제

## 문제

44세 여성이 악화되는 배뇨통, 혈뇨, 하복부 통증으로 내원했다. 약 2일 전 시작되어 점점 심해졌다. 두통, 오심, 구토, 설사는 없지만 열이 나는 느낌과 악취 나는 소변이 있다. 로마노-워드 증후군 병력이 있으나 치료는 받지 않는다. 카바페넴을 복용하면 심한 설사와 오심이 생기고 세팔로스포린에는 심한 발진이 발생한다. 체온 100.4°F(38°C), 혈압 138/93 mmHg, 맥박 100회/분, 호흡수 18회/분이다. 양측 옆구리와 늑골척추각에 압통이 있다. 소변검사와 배양을 시행하고 적절한 항생제를 투여했다. 다음 진료에서 크레아티닌 2.4 mg/dL, 소변에 상피세포 원주, FeNa 3%, 배양 예비 결과 E. coli 10,000 CFU/mL가 확인되었다. 다음 중 투여되었을 가능성이 가장 높은 항생제는?

## 선택지

A. 아즈트레오남
B. 클린다마이신
C. 레보플록사신
D. 토브라마이신

## 해설


상피세포 원주·FeNa3%·creatinine 상승은 신세뇨관 손상을 시사하며 선택지 D aminoglycoside tobramycin의 신독성과 부합한다. 환자는44세이고 신생아가 아니다. Epithelial cast는 백혈구 원주와 구별하며 약물 투여와의 시간·기저 신기능·감염/다른 원인도 실제로 확인한다. Romano–Ward는 QT 연장 위험이므로 levofloxacin의 부정맥 위험과도 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007904 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 44세를 신생아로 바꾸고 epithelial cast를 WBC cast와 혼동한 해설 교정; tobramycin D 독성 연관 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007904
