---
type: qbank
schema_version: 1
id: medqa-us-train-007063
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8bae0055088bc208f1e74d88319e32f211a6f0175d16b74560f28cf3e9dbdc9
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 철결핍성 빈혈"
  - "소구성 빈혈"
  - "태아 철분 우선 공급"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 12주 산모의 혈색소가 9.5 g/dL, MCV가 75 fL다. 뚜렷한 출혈이나 염증은 없다. 임신 중 소구성 빈혈에서 먼저 철 저장량을 확인할 검사는?

## 선택지

A. 혈청 엽산
B. 직접항글로불린검사
C. 혈색소가 낮으므로 추가 검사 없이 태아 혈색소만 측정
D. 혈청 페리틴

## 해설

염증이 없다면 낮은 페리틴은 저장 철 결핍을 뒷받침한다. 소구성 빈혈이 있는데 페리틴이 정상이거나 철분 치료에 반응하지 않으면 지중해빈혈 등 다른 원인을 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 철분이모체에우선공급된다는거꾸로쓴해설교정. 태아의상대적철획득우선성B.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007063
- https://doi.org/10.1002/ijgo.70529
