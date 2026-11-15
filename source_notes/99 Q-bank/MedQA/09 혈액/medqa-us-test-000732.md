---
type: qbank
schema_version: 1
id: medqa-us-test-000732
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2f84264dff378b7fbe4506142b850b0fad50213f899c6b57ae19e56f7d2c022f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 림프모구성 백혈병"
  - "t(9;22)"
  - "불량 예후"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChBTEwpIChBY3V0ZSBMeW1waG9ibGFzdGljIExldWtlbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

10세 아이의 골수 면역표현형에서 B세포 급성 림프모구성 백혈병이 확인됐고 BCR::ABL1 융합 양성이다. 표준 유도치료에 이 분자 소견을 반영할 방법은?

## 선택지

A. JAK 억제제를 일률적으로 추가한다
B. BCR::ABL1 티로신키나제 억제제를 프로토콜에 추가한다
C. 티로신키나제 억제제만 쓰고 다른 유도치료는 중단한다
D. PML::RARA를 표적으로 하는 전트랜스 레티노산을 추가한다

## 해설


BCR::ABL1 양성 급성 림프모구성 백혈병에서는 해당 키나제를 억제하는 약제를 소아 치료 프로토콜에 포함한다. 반드시 고정된 예후를 뜻하지 않으며 잔존질환과 반응도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000732`와 직접 대조했다.
- 판정: 세포유전학 B는 유지. Ph+ ALL이 언제나 가장 불량하다는 시대착오적 단정을 TKI 시대의 위험평가·MRD 맥락으로 제한. 원문 T계열 표현은 바꾸지 않고 희귀성/확인 필요 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/child-all-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000732
