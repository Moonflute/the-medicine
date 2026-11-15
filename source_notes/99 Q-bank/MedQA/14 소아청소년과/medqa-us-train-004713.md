---
type: qbank
schema_version: 1
id: medqa-us-train-004713
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d0b9fe85b5601366a7e74e740767e30903e18e3d9435a9405d99fabd1a0bbc4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "주의력결핍 과잉행동장애"
  - "행동치료"
  - "소아 ADHD"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOydmOugpSDqsrDtlY0g6rO864ukIO2WieuPmSDsnqXslaAgKEFESEQpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 아이가 가정과 유치원에서 주의력 저하와 충동성으로 일상 기능에 어려움을 겪는다. 평가를 통해 ADHD가 확인됐고 이전에 치료한 적은 없다. 우선 권할 치료는?

## 선택지

A. 메틸페니데이트 단독 치료
B. 아토목세틴 단독 치료
C. 아동의 개인 상담만 시행
D. 부모 행동관리 훈련과 유치원에서의 행동 지원

## 해설

학령전기 ADHD는 부모 행동관리 훈련과 교실 행동중재를 우선한다. 충분한 행동중재에도 중등도 이상의 기능 손상이 지속되면 약물 치료를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 5세의 행동중재 우선 권고를 연령별로 제한하고 모든 ADHD에서 약물이 보조에 불과하다는 과잉 일반화를 교정.
- https://doi.org/10.1542/peds.2019-2528

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004713
- https://eqipp.aap.org/courses/adhd/mn/clinical-guide/popups/key-action-statement-5a
