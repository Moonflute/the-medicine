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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 여성이 처음으로 여러 개의 통증성 외음부 궤양과 배뇨통을 겪었다. 병변에서 채취한 검사로 단순포진이 확인됐다. 전신 상태는 안정적이고 경구 약을 복용할 수 있다. 적절한 항바이러스 치료는?

## 선택지

A. 경구 세팔렉신
B. 경구 아시클로버 또는 발라시클로버
C. 외용 스테로이드만 사용
D. 모든 초발 감염에서 입원해 정맥 항바이러스제만 사용

## 해설

처음 발생한 생식기 단순포진은 경구 항바이러스제로 치료한다. 아시클로버나 발라시클로버를 선택할 수 있다. 중증 전신 질환이나 경구 투여 불가 등은 별도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초발 생식기 HSV의 아시클로버 A 유지. 임상 소견만으로 HSV2형을 확정한 단정 수정.
- https://www.cdc.gov/std/treatment-guidelines/herpes.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000827
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10789539/
