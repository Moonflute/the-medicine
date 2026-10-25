---
type: qbank
schema_version: 1
id: medqa-us-train-002630
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:520baf7ee893f66d7c595c9e7a037b54f0da43837d1143539225f7d8c8f53d1b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "lactose intolerance"
  - "lactose hydrogen breath test"
  - "osmotic diarrhea"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jyg64u5IOu2iOuCtOymnSAoTGFjdG9zZSBJbnRvbGVyYW5jZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shKTsgqwgKERpYXJyaGVhKS5tZA
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 3개월간 간헐적인 하복부 경련과 팽만으로 내원했다. 아이스크림, 치즈, 푸딩을 먹은 후 1~2시간 뒤 비혈성 수양성 거품변과 가스가 발생하고 배변 후에도 경련이 호전되지 않는다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 대변 지방검사
B. 공장 생검
C. 수소 호흡검사
D. 혈청 IgE 수치

## 해설

유제품 섭취 뒤 복통·가스·수양성 설사는 유당불내증을 시사한다. 선택지 중 C의 유당 수소호흡검사는 흡수되지 않은 유당의 장내 발효를 이용해 흡수장애를 평가하며 검사 중 증상도 함께 해석한다. IgE 알레르기 검사와 다르다. 식이 제한 후 호전 여부도 진단에 도움이 되며 모든 상황에서 가장 민감·특이한 검사라고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 유당 관련 증상의 수소호흡검사 C는 유지하되 가장 민감·특이하다는 과도한 단정 제거.
- https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/diagnosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002630
