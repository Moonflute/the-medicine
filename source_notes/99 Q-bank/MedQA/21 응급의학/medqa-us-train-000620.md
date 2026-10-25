---
type: qbank
schema_version: 1
id: medqa-us-train-000620
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca7960aafbdd9cef733b345d2acb5e8e83a844f5fc4dee845bf3db6f2a5929a9
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "blunt abdominal trauma"
  - "hypovolemic shock"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-uRlOyDgSDrs7XrtoDsmbjsg4EgKEJsdW50IEFiZG9taW5hbCBUcmF1bWEpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 정면 자동차 사고 직후 몇 분 만에 응급실에 도착했다. 그는 둔기 복부 외상과 얼굴의 여러 열상, 그리고 상하지의 열상을 입었다. 환자는 열이 없으며, 혈압은 45/25 mmHg, 맥박은 분당 160회이다. CBC(전혈구검사)를 시행했을 때 가장 나타날 가능성이 높은 결과는 무엇인가?

## 선택지

A. Hb 5 g/dL, Hct 20%
B. Hb 15 g/dL, Hct 45%
C. Hb 20 g/dL, Hct 60%
D. Hb 17 g/dL, Hct 20%

## 해설

급성 출혈 직후에는 적혈구와 혈장이 함께 소실되므로 순환 혈액량이 크게 줄어도 혈색소와 헤마토크릿의 농도는 처음에 정상 범위일 수 있다. 따라서 매우 이른 채혈에서 Hb 15 g/dL, Hct 45%인 B가 가능하며 이 수치로 출혈성 쇼크를 배제해서는 안 된다. 이후 조직액 이동이나 수액 투여로 혈액희석이 생기면 Hb/Hct가 감소한다. 초기 정상 수치의 원인을 이미 발생한 혈액희석이라고 설명하는 것은 반대이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 대량출혈 직후 정상 Hb/Hct는 혈액희석 때문이 아니라 적혈구와 혈장이 함께 소실되어 농도가 즉시 변하지 않기 때문으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000620
