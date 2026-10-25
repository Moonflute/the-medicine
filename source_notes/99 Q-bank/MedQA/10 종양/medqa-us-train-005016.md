---
type: qbank
schema_version: 1
id: medqa-us-train-005016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5cd48cf8abd11131c3f8708de60e66bec8371f6961282a78b455bebbaf30acdd
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "전이성 대장직장암"
  - "간 전이"
  - "간 종괴"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: diagnosis
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

64세 여자가 6개월 동안 7.2 kg 체중이 감소했고 최근 4주 동안 간헐적인 변비와 복부팽만이 있다. 4개월 전 딸과 멕시코에 2주간 다녀왔고 흡연하지 않으며 매일 와인 한 잔을 마신다. 체온 38.3°C, 맥박 80회/분, 혈압 136/78 mmHg이고 마른 모습이다. 복부가 팽창되고 간이 오른쪽 늑골 아래 4 cm에서 만져지며 왼쪽 엽에 단단하고 약간 압통이 있는 결절이 있다. 혈청 ALP 67 U/L, AST 65 U/L, ALT 68 U/L이며 HBsAg와 HCV 항체는 음성이다. 대변잠혈검사는 양성이고 복부 조영 CT가 제시되어 있다. 가장 가능성 높은 진단은?

## 선택지

A. 간 포충낭종
B. 담관암
C. 전이성 대장직장암
D. 간경변

## 해설


고령 환자의 체중감소, 새로운 변비·복부팽만과 대변잠혈 양성은 대장직장암을 의심하게 한다. 단단한 간 결절이 동반되어 보기 중 간전이가 있는 대장직장암 C가 가장 부합한다. CT 이미지는 제공되지 않아 다발성 간 병변이 보인다고 단정하지 않았다. 실제 확진에는 대장 병변과 간 병변 평가 및 조직 확인이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005016 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 제공되지 않은 CT의 다발결절을 창작하지 않고 배변변화·잠혈양성·간 결절의 임상 근거로 설명. 원문 여행력·발열·간검사 복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005016
