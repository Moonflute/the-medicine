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

21개월 아이가 걸을 때 양쪽 다리가 대칭으로 휘어 보인다. 두 발목을 모으면 무릎 사이가 벌어지지만 성장과 보행은 정상이고, 통증도 없으며 변형은 악화하지 않았다. 처치는?

## 선택지

A. 당장 보조기를 맞춘다
B. 양쪽 무릎 수술을 예약한다
C. 구루병 검사 없이 고용량 비타민 D를 시작한다
D. 생리적 내반슬을 설명하고 정기 진료에서 호전 여부를 본다

## 해설

걸음마 시기의 대칭적인 내반슬은 생리적일 수 있다. 비대칭·악화·성장 이상이 있거나 나이가 들어도 교정되지 않으면 구루병이나 블라운트병 등을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생리적 내반슬 B 유지. 외반슬로 반대로 명명한 오류 교정.
- https://www.rch.org.au/uploadedFiles/Main/Content/ortho/factsheets/BOWLEGS.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001150
- https://www.orthoinfo.org/bodypart/kneelower-leg/bowed-legs-blounts-disease/
