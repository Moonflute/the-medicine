---
type: qbank
schema_version: 1
id: medqa-us-train-002065
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2c7abd62eea864651ed638f47cc9941ad19c05ff5b992fdf35eb6903087431dc
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "acoustic neuroma"
  - "vestibular schwannoma"
  - "sensorineural hearing loss"
  - "Weber test"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_si6Dqsr3stIjsooUgKFNjaHdhbm5vbWEpLm1k
  - MTcg7J2067mE7J247ZuE6rO8L-uPjOuwnOyEsSDrgpzssq0gKFN1ZGRlbiBzZW5zb3JpbmV1cmFsIGhlYXJpbmcgbG9zcykubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 환자의 왼쪽 이명과 청력저하가 6개월째 진행했다. 이경검사는 정상이고 순음청력검사에서 뚜렷한 왼쪽 감각신경성 난청이 확인됐다. 내이도 뒤쪽 원인을 평가할 검사는?

## 선택지

A. 측두골 단순 X선
B. 내이도와 소뇌교각을 포함한 MRI
C. 양쪽 고막운동성만 반복 측정
D. 부비동 초음파

## 해설

진행성 비대칭 감각신경성 난청이나 한쪽 이명이 있으면 전정신경초종 등 후미로 병변을 평가한다. 내이도·소뇌교각 MRI가 적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 왼쪽 감각신경성 난청에서는 Weber가 좋은 오른쪽으로 편위됨에도 해설이 좋은 귀를 왼쪽으로 잘못 표시한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002065
- https://www.nice.org.uk/guidance/ng98/chapter/recommendations
