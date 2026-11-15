---
type: qbank
schema_version: 1
id: medqa-us-test-000991
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1f25403473dc72713d739a50b8bce2b7f21e5b61ddc1e4feeba6f00d06a74bc5
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "히르슈스프룽병"
  - "무신경절증"
  - "직장 흡인 생검"
  - "Hirschsprung disease"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISg7LKcIOqxsOuMgCDqsrDsnqXspp0gKENvbmdlbml0YWwgQWdhbmdsaW9uaWMgTWVnYWNvbG9uKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만삭 신생아가 생후 3일째 처음 태변을 봤다. 생후 3주에 복부팽만과 담즙성 구토가 생겼고, 초기 소생과 감압은 시작했다. 영상에서 좁은 직장과 근위부 대장 확장이 보인다. 의심되는 질환을 확진할 검사는?

## 선택지

A. 복부 CT
B. 조영 관장을 다른 날 반복
C. 항문직장 내압검사
D. 직장 흡인 생검

## 해설

태변 지연과 좁은 원위부 장은 히르슈스프룽병을 시사한다. 점막하층이 충분히 포함된 직장 생검에서 신경절세포 소실을 확인한다. 조영 관장과 내압검사는 생검을 대체하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Hirschsprung 확진 직장 흡인 생검 D 유지. 선천성 대장 협착이라는 오정의 교정.
- https://www.niddk.nih.gov/health-information/digestive-diseases/hirschsprung-disease/diagnosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000991
- https://doi.org/10.1002/jpn3.70442
