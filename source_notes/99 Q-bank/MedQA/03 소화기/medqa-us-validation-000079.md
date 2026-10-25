---
type: qbank
schema_version: 1
id: medqa-us-validation-000079
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5c879470ffa79ac2d2133db9a2d5eb95d46a7395639560a88dff9340b7de7ff3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "췌장두부암"
  - "폐쇄성 황달"
  - "담도 폐쇄"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
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

64세 남성이 2주간 간헐적인 명치 불편감, 짙은 소변, 옅은 변, 식욕저하와 체중 감소로 진료를 받으러 왔다. 황달, 가려움, 오른쪽 상복부의 압통 없는 종괴가 있고 총 빌리루빈 6 mg/dL, 직접 빌리루빈 5.2 mg/dL, ALP 220 IU/L였다. 초음파에서 간외 담관과 췌관 확장, 담낭 팽창이 보였다. 가장 가능성 높은 원인은?

## 선택지

A. 악성 담도 폐쇄
B. 아세트아미노펜 유발 간손상
C. 용혈
D. 만성 췌장염

## 해설


정답 A. 직접 bilirubin 상승, 짙은 소변·옅은 변, 담관과 췌관의 동시 확장 및 압통 없는 팽창 담낭은 원위부 담도 폐쇄를 시사한다. 체중감소와 무통성 황달을 함께 고려하면 췌장두부/팽대부 종양 등 악성 폐쇄가 가장 우려된다. 이 소견만으로 담관암의 조직형이나 말기 병기를 확진하지 않는다. 용혈이나 acetaminophen 간손상은 제시된 담관 확장을 잘 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000079 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 직장성 황달/말기 폐쇄라는 오역 제거, double-duct·무통성 담낭 팽창의 악성 폐쇄 A를 진단 추론으로 한정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000079
