---
type: qbank
schema_version: 1
id: medqa-us-validation-000827
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:41e1408dee71fdf9f0252622d88dd9569223386f3abe35afe2762ee851c662cf
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "생식기 헤르페스"
  - "HSV-2"
  - "통증성 외음부 궤양"
  - "Herpes simplex infection"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-uLqOyInO2PrOynhCDqsJDsl7wgKEhlcnBlcyBTaW1wbGV4IEluZmVjdGlvbikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여아가 4일간의 통증성 외음부 궤양, 피로, 권태감, 배뇨통으로 진료를 받으러 왔다. 양쪽 서혜부 림프절이 압통 있고 커져 있으며 대음순과 소음순에 얕은 궤양이 여러 개 있다. 가장 적절한 치료는?

## 선택지

A. 아시클로버 치료
B. 아지트로마이신 치료
C. 독시사이클린 치료
D. 페니실린 치료

## 해설

다발성 통증성 얕은 외음부 궤양·발열·압통성 림프절은 생식기 헤르페스를 시사한다. 아시클로버(A)가 적절하며 병변 NAAT 등으로 확인하고 형을 구별할 수 있다. 임상 양상만으로 HSV-1과 HSV-2를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초발 생식기 HSV의 아시클로버 A 유지. 임상 소견만으로 HSV2형을 확정한 단정 수정.
- https://www.cdc.gov/std/treatment-guidelines/herpes.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000827
