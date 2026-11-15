---
type: qbank
schema_version: 1
id: medqa-us-train-008524
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d64954a22f2174242e8911558a137f1ba453592a0d3ee722a00209b0c05f45e3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "BRCA1 mutation"
  - "BRCA2 mutation"
  - "breast cancer screening"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성의 가족 내 병적 BRCA2 변이가 본인에게도 확인됐다. 유방암 과거력이나 증상은 없다. 고위험군에 해당하는 유방 영상 검진은?

## 선택지

A. 2년마다 유방촬영술
B. 매년 임상 유방검사와 유방초음파만
C. 매년 유방 MRI만
D. 매년 조영증강 유방 MRI와 유방촬영술

## 해설


병적 BRCA1/2 변이가 있는 30대 여성에게는 유방 MRI와 유방촬영술을 각각 매년 시행하는 고위험군 검진을 권고한다. 평균위험 여성 대상 국가암검진과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008524 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BRCA32세의annualMRI+mammography B유지, 월간자가검진을획일적검진의필수요건으로격상한설명완화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/publications/pdq/information-summaries/genetics/brca-genes-hp-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008524
- https://www.ncbi.nlm.nih.gov/books/NBK1247/
