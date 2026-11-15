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
question_type: management
difficulty: standard
answer: C
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

45세 환자의 유방 종괴가 6주 만에 5cm로 커졌다. 중심바늘생검에서는 세포성 섬유상피 병변으로 나오며 엽상종양을 배제할 수 없다. 영상과 성장 속도를 종합했을 때 다음 조치는?

## 선택지

A. 양성 섬유선종으로 단정하고 추적을 종료한다
B. 조직 등급을 확인하지 않고 항암치료를 시작한다
C. 완전 절제생검으로 병변 전체를 평가한다
D. 모든 엽상종양 의심 병변에서 먼저 전유방절제술을 시행한다

## 해설


빠르게 자라고 엽상종양이 의심되는 섬유상피 병변은 전체를 절제해 진단과 등급을 확인한다. 제한된 바늘 검체만으로 엽상종양과 섬유선종이 확실히 구분되지 않을 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001070 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 빠른 성장·leaflike 상피/간질의 phyllodes A 유지. 모든 엽상종양이 양성이라는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/publications/dictionaries/cancer-terms/def/phyllodes-tumor

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001070
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12374188/
