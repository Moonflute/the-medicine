---
type: qbank
schema_version: 1
id: medqa-us-train-000434
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:599c6bee27fda81b195cbfa424be75f5ef491354f615d085037610cd62b745d3
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "supracondylar humerus fracture"
  - "Supracondylar humerus fracture"
question_type: diagnosis
related_disease_slugs: []
difficulty: simple
answer: B
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

5세 남아가 놀이터에서 손을 짚고 넘어진 뒤 오른쪽 팔꿈치의 통증과 부종으로 내원했다. X선에서 원위 상완골 과상부 골절이 보이고 원위 골편이 뒤로 밀려 있다. 이 골절에서 혈관 손상 여부를 확인할 중요한 원위부 소견은?

## 선택지

A. 팔꿈치 뒤쪽 피부의 홍반
B. 요골동맥 맥박의 소실 또는 감소
C. 견관절 수동 운동에서 통증
D. 팔꿈치 안쪽에 국한된 압통

## 해설

전위된 상완골 과상부 골절은 상완동맥을 손상하거나 눌러 손의 혈류를 떨어뜨릴 수 있다. 요골맥박, 모세혈관 재충전과 손의 온도·색을 확인하고 신경기능도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전형 소아 팔꿈치 골절의 혈관 합병증 B는 지지되지만 손상 부위를 상완골 상부, 혈관을 요골동맥으로 잘못 적은 설명을 원위상완골·상완동맥으로 교정한다.
- 공식/학회 근거: https://surgeryreference.aofoundation.org/orthopedic-trauma/pediatric-trauma/distal-humerus/further-reading/patient-examination

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000434
