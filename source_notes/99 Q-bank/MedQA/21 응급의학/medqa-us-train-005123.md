---
type: qbank
schema_version: 1
id: medqa-us-train-005123
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e1fafaeac77a7318abbf05bba742996868a1b175c861a595086f7787f4acc87
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "와파린 복용 중 낙상"
  - "두개내 출혈"
  - "외상 후 두부 CT"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 남자가 요양시설 방에서 넘어져 발견되었다. 알츠하이머 치매와 인공판막이 있으며 와파린을 복용한다. 처음 혈압 85/50 mmHg, 맥박 160회/분이었으나 수액 후 혈압 110/70 mmHg, 맥박 90회/분으로 정상화되었다. INR은 2.5이고 흉부 X선과 심전도는 정상이다. 다음 중 가장 적절한 처치는?

## 선택지

A. CT 스캔
B. 시험적 복강경검사
C. 시험적 개복술
D. 신선동결혈장

## 해설


와파린 복용 환자에서 외상 후 두개내 출혈 위험이 높으며, 증상이 없더라도 CT 스캔으로 출혈 여부를 확인해야 한다. 따라서 가장 적절한 처치는 두부 CT 스캔이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005123
