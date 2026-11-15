---
type: qbank
schema_version: 1
id: medqa-us-train-007428
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a052018ec8ef611407226348a3d8522d88c7823d58117c355f4233b760c09bd
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "메토트렉세이트 불충분 반응"
  - "TNF 억제제"
  - "인플릭시맙"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FkYWxpbXVtYWIubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NlbGVjb3hpYi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0luZmxpeGltYWIubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

34세 남성이 최대 내약 용량의 메토트렉세이트를 5개월간 규칙적으로 복용했지만 류마티스관절염 활막염이 지속되고 새로운 관절 미란이 보인다. 감염과 다른 통증 원인을 배제했다. 다음 치료 전략은?

## 선택지

A. 장기 경구 스테로이드 단독으로 바꾼다
B. 소염진통제만 증량한다
C. 질병조절제를 모두 중단한다
D. 금기와 감염을 확인하고 생물학적 질병조절제 추가를 검토한다

## 해설


적정 기간 메토트렉세이트를 사용했는데도 활동성 관절염이 지속되면 치료를 강화한다. 생물학적 제제 전에는 잠복결핵·B형간염 등 감염 위험을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007428 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MTX를 통증약으로만 표현한 맥락을 질병조절제로 설명하고 생물학제 증량의 조건·안전평가를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/9273041/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007428
- https://doi.org/10.1016/j.ard.2026.01.023
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6960050/
