---
type: qbank
schema_version: 1
id: medqa-us-train-004456
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a03c9080a1aac744e121631465675709a774246c576c225f4fb2c9086bded46
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "소구성 빈혈"
  - "구각염"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

20세 환자가 피로로 내원했다. 혈색소 10.3g/dL, MCV 74fL, 혈소판과 백혈구는 정상이다. 아직 빈혈 원인을 확인하지 않았다. 철결핍을 평가할 우선 검사는?

## 선택지

A. 혈청 비타민 B12
B. 골수 생검
C. 혈청 페리틴을 포함한 철검사
D. 염색체 검사

## 해설


소구성 빈혈에서 저장 철을 평가하는 페리틴은 초기 검사다. 염증이 있으면 페리틴이 정상 또는 높을 수 있어 트랜스페린 포화도 등 다른 지표도 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004456 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소구성 빈혈의 ferritin/철 대사 검사 A와 임상 단서가 부합함을 원문 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/clinical-guidance/management-of-iron-deficiency-anemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004456
- https://doi.org/10.1182/bloodadvances.2025015950
