---
type: qbank
schema_version: 1
id: medqa-us-train-002207
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37de5fccebefdb247f6f39553baaa3241341644f03c72701b41ce610d3cb5fef
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "developmental dysplasia of the hip"
  - "breech presentation"
  - "hip ultrasound"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cc64us7ISxIOqzoOq0gOygiCDsnbTtmJXshLHspp0gKERldmVsb3BtZW50YWwgRHlzcGxhc2lhIG9mIHRoZSBIaXApLm1k
  - MTIg7IKw6rO8L-uRlOychCAoQnJlZWNoIFByZXNlbnRhdGlvbikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

만삭 여아가 임신 후기 내내 둔위였고 제왕절개로 태어났다. 신생아 고관절 진찰은 정상이다. 생후 2개월 이내에 시행할 선별 영상으로 적절한 것은?

## 선택지

A. 생후 약 6주에 고관절 초음파
B. 생후 약 6주에 골반 MRI
C. 생후 약 6주에 골반 CT
D. 진찰이 정상이므로 선별 영상 없음

## 해설


임신 후기 둔위는 분만 방식과 무관하게 발달성 고관절 이형성증의 위험요인이다. 진찰이 정상이어도 생후 약 6주의 고관절 초음파를 고려한다. 이후 월령에는 골반 X선을 선택할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002207
- https://new.aaos.org/globalassets/quality-and-practice-resources/pddh/pddhcpg.pdf
- https://doi.org/10.1542/peds.2016-3107
