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
question_type: diagnosis
difficulty: simple
answer: B
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

63세 여성이 쇠약감, 어지러움, 두근거림, 혀의 통증을 호소했다. 하시모토 갑상선염 병력이 있고 헤마토크릿은 29%였다. 말초혈액도말에서 7엽 호중구와 큰 타원형 적혈구가 보였으며 하지의 위치감각과 진동감각이 감소했다. 가장 가능성 높은 소견은?

## 선택지

A. G세포 위축
B. 내인자 항체
C. 메틸말론산 감소
D. 항혈전 상태

## 해설


하시모토 갑상선염 병력과 거대적아구성 빈혈·후주 감각저하는 자가면역성 악성빈혈에 의한 B12 결핍을 시사한다. 이 경우 항내인자항체(B)가 나타날 수 있다. 모든 B12 결핍이 항내인자항체 때문인 것은 아니며 메틸말론산은 보통 증가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000974`와 직접 대조했다.
- 판정: 자가면역질환·거대적아구·후주 감각저하로 악성빈혈과 B 유지. 모든 B12 결핍이 내인자항체 때문이라는 일반화 제거.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000974
