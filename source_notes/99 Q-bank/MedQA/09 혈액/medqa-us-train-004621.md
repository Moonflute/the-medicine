---
type: qbank
schema_version: 1
id: medqa-us-train-004621
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6098e4b0af906f5449f7911e776a8cb91462d9d821da9bda174edbbd1b4e36fc
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "적혈구 막 단백질 결함"
  - "용혈성 빈혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

3세 아이가 반복 황달과 빈혈로 진료받는다. 어머니도 비슷한 병력이 있다. 비장비대와 구형적혈구가 있고 용혈 지표는 증가했지만 직접항글로불린검사는 음성이다. 유전구형적혈구증을 확인하는 데 도움이 되는 검사는?

## 선택지

A. CD55·CD59 결핍 검사
B. 비타민 B12 농도
C. 에오신-5-말레이미드 결합 유세포분석
D. 직접항글로불린검사 양성 여부만 반복

## 해설


구형적혈구가 보이는 비면역성 용혈에 가족력이 있으면 유전구형적혈구증을 의심한다. 에오신-5-말레이미드 결합 검사의 형광 감소는 진단에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004621 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: EMA는 적혈구막 단백 자체가 아니라 결합하는 형광염료임을 교정; HS 확인 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004621
- https://pubmed.ncbi.nlm.nih.gov/35593002/
