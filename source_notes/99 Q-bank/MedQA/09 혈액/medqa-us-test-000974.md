---
type: qbank
schema_version: 1
id: medqa-us-test-000974
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:53d26853659e3b3ddedfcba8d463e2475bd6d9b655595b3f1d3e9986f36095ab
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "악성빈혈"
  - "비타민 B12 결핍"
  - "내인자 항체"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: investigation
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

하시모토 갑상선염 환자에게 대적혈구성 빈혈과 진동감각 저하가 생겼다. 비타민 B12 결핍이 확인됐고 자가면역 위염에 따른 흡수장애를 의심한다. 이 원인을 확인하는 데 우선 도움이 되는 검사는?

## 선택지

A. 항내인자 항체
B. 항사구체기저막 항체
C. 항미토콘드리아 항체
D. 항트랜스글루타미나아제 항체

## 해설


항내인자 항체가 양성이면 자가면역 위염에 의한 B12 흡수장애를 뒷받침한다. 음성으로 배제되지는 않아 의심이 높으면 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000974`와 직접 대조했다.
- 판정: 자가면역질환·거대적아구·후주 감각저하로 악성빈혈과 B 유지. 모든 B12 결핍이 내인자항체 때문이라는 일반화 제거.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000974
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations
