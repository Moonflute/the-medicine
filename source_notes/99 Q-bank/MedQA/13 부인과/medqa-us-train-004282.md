---
type: qbank
schema_version: 1
id: medqa-us-train-004282
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ede4cf5372b70f2ed9aad9e4d458bf772a6c23657b4ae0a81a3977f34fd43823
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "단순 유방 낭종"
  - "유방 초음파"
  - "세침흡인"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqSDrgq3sooUgKEJyZWFzdCBDeXN0KS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 여성의 아픈 유방 종괴가 초음파에서 내부가 무에코이고 얇은 벽과 후방 음향증강을 보이는 단순 낭종으로 확인됐다. 영상과 진찰 소견은 일치한다. 통증을 줄이길 원할 때 적절한 방법은?

## 선택지

A. 악성이 확인되지 않아도 절제술 시행
B. 항생제를 처방해 낭종을 없앰
C. 지금 바로 조직을 얻기 위한 중심침생검
D. 초음파 유도 흡인으로 낭종을 배액

## 해설

전형적인 단순 낭종은 무증상이면 처치가 필요 없고 통증을 유발하면 흡인해 완화할 수 있다. 흡인액이 피가 섞였거나 종괴가 남으면 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초음파상 증상성 단순 낭종의 흡인 A 유지. 낭종을 비침습적이라고 표현한 오류 교정.
- https://www.nth.nhs.uk/services/breast-screening-services/one-stop-clinic/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004282
- https://associationofbreastsurgery.org.uk/media/wbkkbi5z/guidance-on-screening-and-symptomatic-breast-imaging-2025.pdf
