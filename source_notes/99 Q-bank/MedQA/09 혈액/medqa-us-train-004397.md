---
type: qbank
schema_version: 1
id: medqa-us-train-004397
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9eed2070eb50763901b1d12bb43df077ed646d2e7bac321e11522ce3cbc49d50
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "진성 적혈구증가증"
  - "JAK2 변이"
  - "골수증식성 신생물"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ynhOyEsSDsoIHtmIjqtazspp3qsIDspp0gKFBWKSAoUG9seWN5dGhlbWlhIFZlcmEgKFBWKSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

53세 환자가 온수 샤워 뒤 가려움, 두통과 시야 흐림을 겪는다. 반복 검사에서 혈색소 19g/dL, 헤마토크릿 58%이고 혈청 에리트로포이에틴은 낮다. 진성 적혈구증가증을 평가할 분자검사는?

## 선택지

A. BCR::ABL1 융합검사
B. PML::RARA 융합검사
C. JAK2 V617F 변이 검사
D. F8 유전자 검사

## 해설


지속적인 적혈구 증가와 낮은 에리트로포이에틴은 진성 적혈구증가증을 의심하게 한다. 먼저 JAK2 V617F를 확인하고 음성이지만 의심되면 JAK2 엑손 12 등을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004397 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 다계열 증가·홍조·비장비대·낮은 EPO와 JAK2 변이 A의 기전 연관을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004397
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
