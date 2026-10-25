---
type: qbank
schema_version: 1
id: medqa-us-train-000382
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b888bd01d4a67e5ec34ee67fbeb7c51084ebb4822bf3040821a15248c886d56e
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "house fire"
  - "unconscious"
  - "burns"
  - "soot"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 주택 화재 현장에서 의식을 잃은 채 발견되어 응급실로 이송되었습니다. 이용 가능한 과거 병력은 없습니다. 병원 도착 시 활력 징후는 혈압 110/70 mm Hg, 체온 36.0°C, 심박수 76회/분, 실내 공기 상태에서 산소 포화도 99%입니다. 신체 검진상 환자는 의식이 없습니다. 손과 얼굴 일부에 표재성 화상이 있습니다. 얼굴과 옷은 그을음으로 검게 변해 있습니다. 이 환자를 치료하는 데 있어 가장 우선적인 조치는 무엇입니까?

## 선택지

A. 페니실라민(Penicillamine)
B. 아질산나트륨(Sodium nitrite)
C. 100% 산소 투여
D. 피리독신(비타민 B6)

## 해설

밀폐 공간 화재 후 의식 변화와 얼굴의 그을음은 흡입 손상 및 일산화탄소 중독 위험을 시사한다. 일반 맥박산소측정기에서 99%여도 CO 중독을 배제할 수 없으므로 제시된 선택지 중 C, 100% 산소가 적절하다. 동시에 기도 손상과 동반 독성 노출을 평가한다. 화재 연기에는 시안화물도 포함될 수 있으므로 모든 증상을 CO 단독으로 확정하지 않는다. Sodium nitrite는 메트헤모글로빈을 유발하므로 이 상황의 산소 공급을 대체하는 보편적 초기 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 화재 후 정상 SpO2가 CO 중독을 배제한다는 오해를 막고 산소 치료·기도 평가와 동시 시안화물 가능성을 구분.
- 공식/학회 근거: https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000382
