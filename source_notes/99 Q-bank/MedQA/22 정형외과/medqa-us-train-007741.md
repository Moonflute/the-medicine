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

26세 여성이 2주 동안 점점 심해지는 우측 발의 통증과 부종으로 내원했다. 처음에는 간헐적이었으나 현재는 지속되며 통증 강도는 10점 만점에 8점이다. 발 외상이나 관절 문제의 과거력은 없다. 통증 때문에 다가오는 마라톤 훈련을 계속할 수 없었다. 유일한 약물은 경구피임약이다. 모델이라 패션쇼에서 정기적으로 뾰족구두를 신는다. 건강해 보이며 활력징후는 정상이다. 우측 앞발이 부어 있고 제5중족골 간부를 누르면 압통이 있다. 제5발가락을 안쪽으로 밀면 통증이 유발된다. 나머지 진찰은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 골수염
B. 피로골절
C. 족저근막염
D. 프라이베르그병

## 해설

정답은 B, 피로골절이다. 반복적인 달리기 훈련 후 점진적으로 심해진 발 통증·부종과 제5중족골 간부의 국소 압통은 반복 부하에 의한 스트레스 손상을 지지한다. 급성 골수염을 지지하는 발열이나 감염 위험 단서가 없고, 족저근막염의 전형적인 압통은 종골의 발바닥 쪽이다. 프라이베르그병은 흔히 제2중족골두에 발생하므로 제5중족골 간부라는 위치와 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 백일해 PCR 해설은 다른 케이스. 마라톤 훈련과 제5중족골 국소 압통을 피로골절로 설명. 원정답 B 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/stress-fractures-of-the-foot-and-ankle/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007741
