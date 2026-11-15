---
type: qbank
schema_version: 1
id: medqa-us-train-008627
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:148aae5ee8e519b700b658bf9d384703dd67126145d7cdaa4bb2b209735df129
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "trimethoprim-sulfamethoxazole adverse effect"
  - "drug-induced neutropenia"
  - "viral upper respiratory infection"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Zi47KSR6rWsIOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

아이가 요로감염으로 트리메토프림–설파메톡사졸을 복용 중이다. 투여 전 혈구 수는 정상이었는데, 열흘 뒤 절대 호중구 수가 480/μL로 떨어졌다. 혈색소와 혈소판은 정상이다. 가장 적절한 조치는?

## 선택지

A. 감염이 재발하지 않도록 같은 약을 더 오래 준다
B. 혈소판이 정상이므로 아무 추적 없이 투약을 계속한다
C. 먼저 철분을 주고 한 달 뒤 혈구 수를 확인한다
D. 원인 약을 중단하고, 감염 여부와 혈구 수를 신속히 평가한다

## 해설


새로운 중증 호중구감소가 약제 사용과 시간상 맞으면 의심 약제를 중단한다. 감염 징후와 다른 원인을 평가하고 혈구 수를 추적한다. 발열이 동반되면 응급 감염 평가가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008627
- https://pubmed.ncbi.nlm.nih.gov/29222255/
