---
type: qbank
schema_version: 1
id: medqa-us-train-008131
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd7163b04b5b1151bf5f04612f01dde1c12005ac7f70dec3b576a7ec75bf2ec8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "complex febrile seizure"
  - "focal seizure"
  - "epilepsy risk"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsoITspp0gKEVwaWxlcHN5KS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18개월 아이가 39℃ 열이 나던 중 오른쪽 팔과 얼굴만 4분간 떨었다. 당일 다른 발작은 없었고 현재 의식은 평소대로 돌아왔다. 발작을 어떻게 분류할까?

## 선택지

A. 15분 미만이므로 단순 열성경련
B. 당일 반복하지 않았으므로 단순 열성경련
C. 한 번의 열 동반 발작으로 뇌전증 확진
D. 한쪽에 국한됐으므로 복합 열성경련

## 해설

발열과 동반한 경련에 국소 시작, 15분 이상의 지속, 24시간 이내 재발 중 하나라도 있으면 복합 열성경련으로 분류한다. 국소 발작이면 짧고 한 번뿐이더라도 단순 열성경련과 다르게 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 다른 C를 지지한 해설 및 발열 시작 24시간 내이면 복합이라는 오류 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/Febrile_seizure/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008131
