---
type: qbank
schema_version: 1
id: medqa-us-train-002494
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:526effcb15aabd2a27aa8c3450f50ca93458f6b073c81b87292c03021a6fb8ab
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Holt-Oram syndrome"
  - "atrial septal defect"
  - "radial ray anomaly"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
difficulty: standard
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

5세 아이의 한쪽 엄지가 없고 반대쪽 엄지는 저형성이다. 심초음파에서는 이차공 심방중격결손이 확인됐다. 이 두 소견을 함께 설명하는 진단은?

## 선택지

A. 알라질증후군
B. 윌리엄스증후군
C. 터너증후군
D. 홀트–오람증후군

## 해설

요골 쪽 상지 기형과 심방 또는 심실중격결손의 조합은 홀트–오람증후군을 시사한다. TBX5와 관련되며 심장 구조뿐 아니라 전도 이상도 평가할 필요가 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: radial 기형을 방사선 기형으로 잘못 쓴 해설을 요골측 상지 기형으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002494
- https://pubmed.ncbi.nlm.nih.gov/20301290/
