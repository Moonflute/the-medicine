---
type: qbank
schema_version: 1
id: medqa-us-train-007841
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5f6ba1afcaed7d0430ceaa7a93a64345a8707647648582037c714c945719252
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "pernicious anemia"
  - "vitamin B12 deficiency"
  - "Schilling test"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: management
difficulty: complex
answer: A
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

63세 여성이 피로, 설사, 두통, 식욕부진으로 일차 진료기관에 내원했다. 혈전 병력은 없지만 어머니가 최근 폐색전증 치료를 받았다고 한다. 전자간증, 고혈압, 다낭성 난소증후군, 고콜레스테롤혈증 병력이 있다. 현재 하루 담배 한 갑을 피우고 매일 와인 한 잔을 마시며 불법 약물은 부인하지만 과거 헤로인 정맥주사 사용력이 있다. 체온 36.7°C(98.0°F), 혈압 126/74 mm Hg, 심박수 111회/분으로 불규칙하고 호흡수 17회/분이다. 맥박은 강하고 안색은 창백하지만 호흡음은 깨끗하다. 실내 공기 산소포화도는 91%였고 심전도에서 심방세동이 보인다. 인지 곤란도 호소한다. MCV 111 fL, 헤모글로빈 9.3 g/dL, 메틸말론산과 호모시스테인이 모두 상승했고 실링검사는 양성이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 평생 비타민 B12 보충
B. 4~6개월간 철분 보충
C. 쿰스 검사 시행
D. 코르티코스테로이드와 철분 보충

## 해설


높은 MMA·homocysteine과 거대적혈구·인지 변화는 B12 결핍에 부합하여 선택지 A의 B12 보충이 필요하다. 다만 Schilling은 현재 통상 사용하지 않는 검사이고 ‘양성’만으로 원인/단계를 특정할 수 없다. 자가면역 위염 등 비가역 흡수장애가 확인되면 평생 치료하며 원인에 따라 경로·기간을 정한다. 동반 AF·새 저산소증도 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007841 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B12 결핍 A의 치료 유지; Schilling 양성만으로 악성빈혈/평생 필요를 확정하는 해설 보정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007841
