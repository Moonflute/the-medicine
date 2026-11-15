---
type: qbank
schema_version: 1
id: medqa-us-train-001362
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f494420611a9f991c1790c9a793f69713416beb3c766eb043679fa00ce47cbb
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "premature rupture of membranes"
  - "ascending infection"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 39주 산모에게 진통 전 양막파수가 확인됐다. 24시간이 지났지만 진통은 시작하지 않았다. 산모는 발열이 없고 태아는 두위, 심박 상태는 정상이다. 질식분만에 금기가 없다. 적절한 계획은?

## 선택지

A. 며칠 더 가정에서 자연 진통을 기다린다
B. 파수만으로 응급 제왕절개한다
C. 산모·태아를 관찰하며 유도분만을 진행한다
D. 조산을 막기 위해 자궁수축억제제를 투여한다

## 해설

만삭의 진통 전 파수에서 자연 진통이 하루 정도 지나도 시작되지 않으면 유도분만을 제안한다. 감염 여부와 GBS 예방 적응증을 확인하고, 파수만으로 제왕절개를 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 진통 전 양막파열의 선행 원인을 묻는데 해설이 파열 후 감염 위험으로 인과를 뒤집은 오류를 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001362
- https://www.nice.org.uk/guidance/ng207/chapter/recommendations
