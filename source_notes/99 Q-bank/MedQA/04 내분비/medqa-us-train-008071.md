---
type: qbank
schema_version: 1
id: medqa-us-train-008071
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e9179752097570b6d798a3a5e6534840c9bd727822445dbc760466bccfe73b38
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Graves disease"
  - "thyroid-stimulating immunoglobulin"
  - "hyperthyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
---

# MedQA US 임상문제

## 문제

35세 여성이 두근거림과 체중 감소로 내원했다. 갑상선은 통증 없이 고르게 커져 있고 안구병증은 없다. TSH는 억제되고 유리 T4가 높다. 그레이브스병과 무통성 갑상선염을 구별하기 위해 우선 확인할 항체는?

## 선택지

A. 항갑상선 과산화효소 항체
B. TSH 수용체 항체
C. 항갑상선글로불린 항체
D. 항핵항체

## 해설


갑상선중독증이 확인된 상태에서 TSH 수용체 항체 양성은 그레이브스병을 뒷받침한다. 항갑상선 과산화효소 항체만으로는 파괴성 갑상선염과 구별하기 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008071 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 안구돌출을 동반한 항진 증상의 Graves 병인인 TSH수용체 자극항체 B 연결을 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008071
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3871036/
