---
type: qbank
schema_version: 1
id: medqa-us-train-009954
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7dd24fbd56a26d9e52e7be0f206b67d759d2ab908b543f722308f10916ac73d8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "백신 유발 발진"
  - "약독화 생백신"
  - "수두 백신"
  - "Varicella"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY65GQIChWYXJpY2VsbGEpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13개월 아이가 수두 백신을 맞은 지 2주 뒤 가벼운 수포성 발진을 보인다. 전신 상태는 양호하지만 집에는 수두 면역이 없는 중증 면역저하 가족이 있다. 진료와 함께 어떤 안내가 적절한가?

## 선택지

A. 예방접종 뒤 발진은 전파 가능성이 전혀 없으므로 평소대로 접촉
B. 발진이 소실될 때까지 면역저하 가족과 밀접 접촉을 피하도록 안내
C. 발진이 나았을 때까지 가족 전체에 항생제 투여
D. 아이에게 수두 백신을 즉시 다시 접종

## 해설

수두 백신 후 발진이 생긴 경우 백신 바이러스 전파는 드물지만 감수성이 높은 면역저하자와는 발진이 없어질 때까지 밀접 접촉을 피한다. 발진이 접종 때문인지 다른 감염인지도 임상적으로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 접종 16일 후 발생한 발진에 맞추어 수두백신 발진 시기를 공식 CDC의 대체로 3주 이내로 교정했다.
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-22-varicella.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009954
- https://www.cdc.gov/chickenpox/hcp/vaccine-considerations/specific-groups.html
