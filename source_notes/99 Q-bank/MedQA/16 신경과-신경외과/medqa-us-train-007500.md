---
type: qbank
schema_version: 1
id: medqa-us-train-007500
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bfdd3b2712189dc9e4a5f458873b2fa4a8a977251ae9c4e8651d8afab0514904
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "총비골신경 마비"
  - "족하수"
  - "비골신경 압박"
  - "발 내번 보존"
  - "deep peroneal nerve palsy"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 환자가 다리를 오래 꼬고 앉은 뒤 발끝이 걸려 넘어진다. 발등굽힘과 가쪽번짐이 약하고 발등 감각이 떨어지지만 안쪽번짐과 엉덩관절 벌림은 보존된다. 가장 가능성 높은 병변은?

## 선택지

A. L5 신경근
B. 정강신경
C. 종아리뼈 머리 부근의 온종아리신경
D. 대퇴신경

## 해설

온종아리신경 손상은 발등굽힘과 가쪽번짐을 약화시킨다. 정강신경이 지배하는 안쪽번짐은 보존되므로 안쪽번짐·엉덩관절 벌림도 약해질 수 있는 L5 신경근병증과 감별에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 총비골신경병증에서 발 내번과 발가락 내전을 혼동한 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007500
- https://pubmed.ncbi.nlm.nih.gov/40609077/
