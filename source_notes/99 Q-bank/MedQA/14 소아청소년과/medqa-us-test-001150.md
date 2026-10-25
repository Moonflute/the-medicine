---
type: qbank
schema_version: 1
id: medqa-us-test-001150
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5b9cd0ab8ffc753a573671c2ceaed0eda65c19b96199df292b4160cccd1e528a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "생리적 외반슬"
  - "유아 다리 변형"
  - "정상 성장"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21개월 남아가 영유아 건강검진을 받으러 왔다. 혼자 걷기 시작한 뒤 양쪽 다리 변형을 어머니가 발견했다. 건강은 양호하고 발달은 정상이며 발과 발목을 모아도 무릎 사이가 벌어졌다. 보행은 정상이었고 어머니는 성장장애를 걱정했다. 가장 적절한 다음 처치는?

## 선택지

A. 비타민 D 보충
B. 안심시키고 추적관찰
C. 하지 X선
D. 하지 보조기

## 해설

발과 발목을 붙여도 무릎 사이가 벌어지는 것은 내반슬이다. 21개월에 대칭적이고 성장·보행이 정상이라 생리적 내반슬이 가능하여 안심과 추적(B)이 적절하다. 비대칭·진행·성장부진 또는 지속 시 병적 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생리적 내반슬 B 유지. 외반슬로 반대로 명명한 오류 교정.
- https://www.rch.org.au/uploadedFiles/Main/Content/ortho/factsheets/BOWLEGS.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001150
