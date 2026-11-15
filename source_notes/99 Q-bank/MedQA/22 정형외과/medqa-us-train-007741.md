---
type: qbank
schema_version: 1
id: medqa-us-train-007741
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6be25d1b2c9e15089aec3336353497c820f500bfe94833ee402f83ce1829c839
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "stress fracture"
  - "fifth metatarsal fracture"
  - "overuse injury"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-2MlOq_iOy5mCDsmbjsuKEg7IOB6rO87Je8IChMYXRlcmFsIEVwaWNvbmR5bGl0aXMpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

26세 여성이 마라톤 훈련량을 늘린 뒤 2주간 가쪽 앞발 통증이 점점 심해졌다. 다친 기억은 없고 다섯째 중족골 몸통을 누르면 아프다. 가장 가능성 높은 진단은?

## 선택지

A. 다섯째 중족골 급성 견열골절
B. 다섯째 중족골 피로골절
C. 족저근막염
D. 비골건 건병증

## 해설

뚜렷한 외상 없이 반복 부하 뒤 통증이 진행하고 뼈 몸통에 한정된 압통이 있으면 피로골절을 의심한다. 급성 견열골절은 흔히 발목이 안쪽으로 접질린 뒤 다섯째 중족골 기저부가 아프다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 백일해 PCR 해설은 다른 케이스. 마라톤 훈련과 제5중족골 국소 압통을 피로골절로 설명. 원정답 B 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/stress-fractures-of-the-foot-and-ankle/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007741
