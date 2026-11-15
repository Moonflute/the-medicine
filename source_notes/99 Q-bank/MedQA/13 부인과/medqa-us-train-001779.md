---
type: qbank
schema_version: 1
id: medqa-us-train-001779
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8766f0217de99f16a7339d0584a8e111f4a7d95beafeefa0464ec21a3867bf5
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "gonorrhea"
  - "chlamydia coinfection"
  - "partner treatment"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQmVuenlscGVuaWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성의 인두 임균 감염이 확인돼 권고 용량의 세프트리악손으로 치료했다. 클라미디아 검사는 음성이고 성 파트너 평가도 진행했다. 국내 진료지침에 따른 완치 확인은?

## 선택지

A. 인두 감염도 치료 뒤 확인 검사가 필요 없다
B. 치료 7–14일 뒤 인두에서 완치 확인 검사를 시행한다
C. 피부 발진이 있을 때만 확인한다
D. 3개월 뒤 소변검사만 하면 인두 감염 완치가 확인된다

## 해설

인두 임균 감염은 치료 후 7–14일에 같은 부위에서 완치를 확인한다. 이후 재감염을 찾는 재검과는 목적이 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 파트너의 임질·클라미디아 치료 범위 및 재검 조건 명시.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001779
- https://icurology.org/DOIx.php?id=10.4111%2Ficu.20230265
