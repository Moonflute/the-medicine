---
type: qbank
schema_version: 1
id: medqa-us-train-006797
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7fd408d3ceca411de60374275f267b09827d5faf0b627f7df55603c4b857192
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신경모세포종"
  - "부신 종괴"
  - "눈 주위 반상출혈"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK966qo7IS47Y-s7KKFIChOZXVyb2JsYXN0b21hKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 3일 동안 지속된 다리 통증과 걷기 어려움으로 내원했다. 같은 기간 눈 주위에 홍반과 멍도 있었다. 활력징후는 정상이고 복부 상부가 부어 있다. 검사에서 적혈구 330만/mm³, 백혈구 3,000/mm³(호중구 54%, 호산구 1%, 호염기구 55%, 림프구 30%, 단핵구 3%), 혈소판 80,000/mm³이다. 복부 MRI에서 부신 기원의 종괴가 보인다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 망막모세포종
B. 빌름스 종양
C. 신경모세포종
D. 간모세포종

## 해설

부신 기원 종괴, 안와 주위 반상출혈과 골통·혈구감소는 신경모세포종(C)의 원발 및 전이 소견에 부합한다. 부신은 흔한 원발 부위이며 안와·골수 침범이 증상을 설명한다. 호산구 증가가 제시된 것은 아니다. 원문도 호염기구 55%로 기재해 분획 합계가 맞지 않으므로 이 수치를 정상 검사값처럼 해석하거나 임의로 다른 수치로 고치지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신경모세포종의 부신 원발·골/안와 전이 기전으로 교정. 원문 백혈구 분획 합계 오류는 임의 수치 수정 없이 명시.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006797
