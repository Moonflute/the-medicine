---
type: qbank
schema_version: 1
id: medqa-us-train-003143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:874d4a454d69d370c78614ec528fdd196802fc8747fdad0d5927ee034ed88713
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "vitamin K deficiency bleeding"
  - "newborn prophylaxis"
  - "exclusive breastfeeding"
  - "late vitamin K deficiency"
question_type: risk_factor
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEsg6rKw7ZWN7KadIChWaXRhbWluIEsgRGVmaWNpZW5jeSkubWQ
difficulty: standard
answer: A
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

생후 3주 남아가 건강검진을 위해 33세 어머니와 함께 내원했다. 만삭으로 태어났고 부모가 자연분만을 원해 가정분만했으며 산전 진료는 받지 않았다. 특별한 병력과 복용 약물은 없고 분만은 빠르고 합병증이 없었다고 한다. 모유만 먹고 건강해 보이며 키 35백분위수, 체중 40백분위수이다. 다음 중 현재 이 환자에서 발생 위험이 증가하는 합병증은?

## 선택지

A. 출혈
B. 철결핍성 빈혈
C. 당뇨병
D. 장중첩증

## 해설

신생아는 비타민 K 저장량이 낮고 모유의 비타민 K도 적다. 출생 시 예방적 근육주사를 받지 않았다면 생후 수주에도 비타민 K 결핍 출혈(A) 위험이 증가할 수 있다. 가정분만과 산전 진료 부재라는 사실만으로 실제 주사 미투여를 확정할 수는 없으므로 투여력을 확인해야 한다. 건강해 보인다는 이유만으로 이 위험이 없어지는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 가정분만 자체를 비타민 K 미투여의 확정 증거로 삼지 않으면서 실제 예방 여부가 출혈 위험 판단의 핵심임을 분리했다.
- https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/vitamin-k.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003143
