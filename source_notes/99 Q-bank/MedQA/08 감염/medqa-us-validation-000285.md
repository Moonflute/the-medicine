---
type: qbank
schema_version: 1
id: medqa-us-validation-000285
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e33368e5c4b3c03a653fd77bfcd72d94d3d95b213487b83c8f5eb678420ba6b3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "아데노바이러스 인두결막열"
  - "육안적 혈뇨"
  - "결막염"
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
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

12세 여아가 3일간의 발열과 인후통, 그리고 오늘 아침부터 발생한 혈뇨로 어머니와 함께 진료를 받으러 왔다. 지난 3일간 최고 39.5°C의 발열과 심한 인후통이 있었으나 약간 호전되었다. 오늘 소변이 붉어진 것을 어머니가 발견했다. 체온 39.3°C, 맥박 89회/분, 호흡수 25회/분, 혈압 109/69 mmHg이다. 양쪽 편도가 크게 부어 있고 흰색 삼출물로 덮여 있으며 양쪽 결막염도 있다. 양쪽 고막은 회백색이다. 소변검사에서 비중 1.019, 포도당·케톤·단백질 없음, 아질산염·백혈구 에스터레이스 음성, 혈액 3+였다. 이 증상을 일으킨 가장 가능성 높은 미생물은?

## 선택지

A. 화농성 연쇄상구균
B. 아데노바이러스
C. 대장균 O157:H7
D. 프로테우스 미라빌리스

## 해설


발열·인두염·양측 결막염은 adenovirus의 인두결막열에 부합하고, 혈뇨는 동반 출혈성 방광염으로 설명할 수 있어 B가 가장 적절하다. 인두결막열의 조합은 발열·인두염·결막염이며 피부 소견이 필수인 삼징이 아니다. GAS 감염 후 사구체신염은 보통 인두염과 시간 간격이 있고 이 사례의 결막염·무단백뇨 양상과 덜 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000285 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인후결막열·출혈성 방광염의 adenovirus B 유지. 피부를 포함한 삼징이라는 오기 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000285
