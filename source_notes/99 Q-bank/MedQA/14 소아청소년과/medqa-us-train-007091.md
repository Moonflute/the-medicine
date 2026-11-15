---
type: qbank
schema_version: 1
id: medqa-us-train-007091
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:749d566c28bc9aed95e6db2a1d8a49f53db4e988ae03254cc066a09566774d0d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "식품 단백질 유발 알레르기성 직결장염"
  - "모유 수유"
  - "우유 단백질 알레르기"
  - "Cow milk protein allergy"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 6주 완전 모유수유 영아가 잘 먹고 정상적으로 자라지만 변에 소량의 피와 점액이 반복해 섞인다. 발열·구토·복부팽만과 항문열상은 없다. 식품 단백질 유발 직결장염이 의심될 때 관리 계획은?

## 선택지

A. 모유수유를 끊고 바로 콩 분유로 바꾼다
B. 대변 잠혈이 음성이 될 때까지 부모에게 여러 식품을 제한한다
C. 모유수유를 지속하고 필요시 모체 식단에서 우유 단백을 짧게 제한한 뒤 재도입해 반응을 확인한다
D. 유제품과 콩을 이유식 이후에도 무기한 제한한다

## 해설

잘 자라는 영아의 반복 소량 혈변은 식품 단백질 유발 직결장염 가능성이 있다. 다른 원인을 살피고 제한식을 시험한다면 모유수유를 유지하면서 2–4주 반응을 확인한 뒤 재도입해 인과관계를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 혈변 일반화 대신 건강한 영아 FPIAP의 제한적 제거식·추적 원칙으로 교정.
- https://cps.ca/en/documents/position/cows-milk-protein-allergy
- https://www.allergy.org.au/patients/food-other-adverse-reactions/proctocolitis-fpiap

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007091
- https://doi.org/10.1097/MPG.0000000000003897
