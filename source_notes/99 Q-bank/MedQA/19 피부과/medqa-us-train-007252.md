---
type: qbank
schema_version: 1
id: medqa-us-train-007252
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41c2b84b14b8319a83f659dbc98c1cdd6268616c4eb2893157316f2af92f46be
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "지루피부염"
  - "HIV 감염"
  - "기름진 인설"
  - "말라세지아"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yngOujqCDtlLzrtoDsl7wgKFNlYm9ycmhlaWMgRGVybWF0aXRpcykubWQ
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
difficulty: standard
answer: A
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

28세 남성이 두피와 눈썹·코옆 주름의 가려운 발진이 반복돼 내원했다. 붉은 피부에 기름진 노란 인설이 있고 탈모는 없다. 가장 가능성 높은 진단은?

## 선택지

A. 지루피부염
B. 판상 건선
C. 두부백선
D. 주사

## 해설

기름진 인설이 두피, 눈썹, 코옆 주름처럼 피지 분비가 많은 부위에 반복되면 지루피부염을 시사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 지루피부염 D는 기름진 두피·눈꺼풀 인설로 판단 가능하며 제공되지 않은 사진을 확인했다는 표현을 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007252
