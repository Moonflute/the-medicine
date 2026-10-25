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
question_type: prognosis
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

유도 화학요법 3일 후 9세 남아가 발열과 호중구감소증으로 입원했다. 피로와 범혈구감소증을 평가한 결과 t(9;22) 양성 급성 T세포 림프모구성 백혈병으로 진단되었다. 의식은 명료했고 혈압 110/65 mmHg, 체온 39.5°C(103.1°F), 맥박 98회/분, 호흡 14회/분이었다. 중심정맥관을 포함한 진찰에서 감염원은 없었고 광범위 항생제를 시작했다. 다음 중 불량한 예후를 가장 강하게 시사하는 요인은?

## 선택지

A. 나이
B. 세포유전학
C. 발열과 호중구감소증
D. 최초 발현 양상

## 해설


선지 중 t(9;22)/BCR::ABL1이라는 세포유전학적 소견(B)이 중요한 위험·치료 결정 인자이다. 다만 현대의 TKI 병용 치료로 예후가 개선되어 이를 항상 가장 불량한 변이라고 단정할 수는 없다. Ph+ ALL은 보통 B계열이며 원문의 T계열 기술은 드문 조합이므로 면역표현형·분자검사 확인이 필요하다. 실제 예후는 MRD와 치료 반응도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000732`와 직접 대조했다.
- 판정: 세포유전학 B는 유지. Ph+ ALL이 언제나 가장 불량하다는 시대착오적 단정을 TKI 시대의 위험평가·MRD 맥락으로 제한. 원문 T계열 표현은 바꾸지 않고 희귀성/확인 필요 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/child-all-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000732
