---
type: qbank
schema_version: 1
id: medqa-us-train-002644
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:813391d00ccce1eb24221088d2f8f9b6fc391d749e27042a7d4be55616a202e0
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "nasal foreign body"
  - "unilateral foul-smelling discharge"
  - "foreign body extraction"
  - "Nasal foreign body"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 아이가 장난감의 단추형 전지를 코에 넣은 지 한 시간 됐다. 전지가 한쪽 콧구멍 안쪽에 보인다. 가장 적절한 다음 조치는?

## 선택지

A. 즉시 이비인후과에 연결해 안전하게 제거한다
B. 액체로 코를 씻어 전지가 나오기를 기다린다
C. 점비제를 쓰고 다음 날까지 기다린다
D. 감염 예방 항생제만 투여하고 관찰한다

## 해설

비강의 단추형 전지는 짧은 시간에도 점막 손상을 일으킬 수 있다. 증상이 약해도 제거를 미루지 않고, 맹목적으로 반복해서 꺼내려 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 진단 확정된 비강 이물은 제거 B가 타당하나 모든 경우 다른 시술이 불필요하다는 단정을 제거.
- 공식/학회 근거: https://www.childrens.health.qld.gov.au/for-health-professionals/queensland-paediatric-emergency-care-qpec/queensland-paediatric-clinical-guidelines/foreign-body-nose

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002644
