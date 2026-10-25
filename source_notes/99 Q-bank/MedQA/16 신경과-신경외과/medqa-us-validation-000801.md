---
type: qbank
schema_version: 1
id: medqa-us-validation-000801
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6d5d8d94d5eeb614cf39b9d51b9a4f4e75c6f38c0b80bd2f80a771e6140b8ff4
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "교통성 수두증"
  - "두개내압 상승"
  - "유두부종"
  - "Hydrocephalus"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 일주일 동안 점점 심해지는 아침의 심한 두통, 메스꺼움, 구토로 진료를 받으러 왔다. 한 달 전 세균성 수막염을 치료받았고 안저검사에서 양측 시신경유두 경계가 불분명하다. 두통의 가장 가능성 높은 원인은?

## 선택지

A. 유전
B. 수두증
C. 두개강 내 종괴
D. 감염

## 해설

수막염 치료 후 새로 진행하는 아침 두통·구토와 유두부종 의심 소견은 두개내압 상승을 우려하게 한다. 보기 중 감염 후 뇌척수액 순환/흡수 장애에 의한 수두증(B)이 가장 가능성 높다. 실제 뇌실확장이나 원인이 아직 영상으로 확인된 것은 아니므로 뇌영상을 포함한 신속한 평가가 필요하다. 가족성 편두통만으로 유두부종 의심 소견을 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수막염 후 수두증 B의 임상적 개연성을 유지하되 이미 뇌실 손상이 확인되었다는 서술 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000801
