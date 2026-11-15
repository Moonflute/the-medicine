---
type: qbank
schema_version: 1
id: medqa-us-validation-000491
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4655d8631aaae6d262a077c909367839ec3a98d1b567bc7f84622db79b23779d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "심실중격결손"
  - "좌우 단락"
  - "폐혈관 저항 감소"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
difficulty: complex
answer: D
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

큰 심실중격결손이 있는 만삭아는 출생 직후에는 잘 먹었으나 생후 6주부터 수유 중 숨이 차고 땀이 나며 체중이 잘 늘지 않는다. 좌우 단락이 늘어난 이유는?

## 선택지

A. 출생 후 폐혈관 저항 상승
B. 동맥관이 열리며 폐혈관이 모두 수축
C. 심실중격이 두꺼워져 단락이 사라짐
D. 출생 뒤 폐혈관 저항이 떨어져 폐혈류가 증가

## 해설

폐혈관 저항이 출생 후 수주 동안 낮아지면 큰 심실중격결손에서 좌우 단락이 증가한다. 폐 과혈류와 좌심 용적 부담으로 수유 시 호흡곤란과 성장부진이 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VSD 때문에 폐혈관 저항이 감소한다는 역전된 인과를 출생 후 저항 감소가 좌우 단락을 증가시키는 순서로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000491
- https://www.jacc.org/doi/10.1016/j.jacc.2025.11.020
