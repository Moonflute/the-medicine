---
type: qbank
schema_version: 1
id: medqa-us-train-005543
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:150b386ebec9f1ee7e34a07d034fd37c43caab264530440e7ffc6cb5a7fb2e38
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "섬망"
  - "수술 후 섬망"
  - "할로페리돌"
  - "Delirium"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDquIjri6gg7ISs66edIChBbGNvaG9sIFdpdGhkcmF3YWwgRGVsaXJpdW0pLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고관절 골절 수술 5일 후 71세 남자가 초조하고 혼돈스러워졌다. 밤에 반복적으로 방을 나가려 하고 주의집중이 안 되며 지남력을 잃고 폭력적이어서 연성 억제대를 적용했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 흉부 X선
B. 두부 CT
C. 로라제팜
D. 할로페리돌

## 해설

언어적 재지시에도 불응하며 치료기구를 뽑고 폭력적인 섬망은 안전을 위해 단기 haloperidol(D)을 고려할 상황이다. 동시에 통증·약물·감염·저산소증 등 원인을 교정한다. Haloperidol은 부작용이 적은 약이 아니며 QT 연장과 추체외로계 위험, Parkinson/Lewy body 질환 여부 등을 확인하고 최소 필요 용량·기간으로 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Haloperidol의 부작용이 적다는 오류 제거. 비약물 접근 불응의 위험한 섬망에서 단기간 선택 D로 한정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg103/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005543
