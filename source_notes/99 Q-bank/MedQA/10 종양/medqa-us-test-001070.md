---
type: qbank
schema_version: 1
id: medqa-us-test-001070
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1c38a2d3bb7d2bb66d1af3f7270a5ec32f7da23dfcb2d36a2e3df571a4ff645a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "엽상종양"
  - "유방 종괴"
  - "간질성 종양"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yXveyDgSDsooXslpEgKFBoeWxsb2RlcyBUdW1vcikubWQ
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 여성이 3주 전 발견한 오른쪽 유방 종괴를 평가받으러 왔다. 빠르게 커졌지만 통증은 없었다. 오른쪽 외측에 5 cm의 압통 없는 다결절성 종괴가 만져졌고 피부나 유두 변화 및 림프절병증은 없었다. 유방촬영에서 매끈하고 다엽성인 종괴가 보였으며 생검에서 상피로 둘러싸인 간질의 유두상 돌기와 증식·비정형이 확인되었다. 가장 가능성 높은 진단은?

## 선택지

A. 엽상종양
B. 섬유선종
C. 유방 섬유낭성 질환
D. 침윤성 소엽암

## 해설


빠른 성장과 잎모양 상피-간질 구조는 엽상종양(A)을 지지한다. 엽상종양은 양성·경계성·악성으로 나뉘므로 이 명칭만으로 양성이라 단정하지 않는다. 정확한 등급은 간질 세포성·비정형·유사분열·경계 등 병리 기준으로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001070 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 빠른 성장·leaflike 상피/간질의 phyllodes A 유지. 모든 엽상종양이 양성이라는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/publications/dictionaries/cancer-terms/def/phyllodes-tumor

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001070
