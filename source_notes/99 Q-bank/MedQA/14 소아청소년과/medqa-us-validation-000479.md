---
type: qbank
schema_version: 1
id: medqa-us-validation-000479
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7523f56b3bd500274ad1819f59131ba1f3533b54392b35c8e0978a1c4aea3ed8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "소아 요로감염"
  - "변비"
  - "요로감염 위험인자"
question_type: etiology
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67OA67mEIChDb25zdGlwYXRpb24pLm1k
difficulty: complex
answer: B
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

3세 남아가 1일간의 복통과 잦은 배뇨로 진료를 받으러 왔다. 밤에 이불에 오줌을 쌌고 아침 소변 냄새가 이상했으며 마지막 배변은 3일 전이었다. 소변검사에서 백혈구 에스터레이스, 아질산염, 혈액, 백혈구와 그람음성 막대균이 보인다. 이 상태의 가장 가능성 높은 소인 요인은?

## 선택지

A. 사회적 스트레스
B. 변비
C. 후부 요도판막
D. 호흡기 감염

## 해설

소변검사는 세균성 UTI를 시사하며 3일간 배변이 없었던 변비(B)는 방광 기능·배출 장애에 기여할 수 있다. 후부 요도판막도 UTI 소인이 될 수 있으나 이 사례에는 변비의 직접 병력이 제시된다. 이혼 같은 스트레스만으로 감염 소견을 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 변비의 핵심 원문 단서인 마지막 배변3일을 복원하고 없는 과거 UTI 문장을 제거.
- https://uroweb.org/guidelines/paediatric-urology/chapter/urinary-tract-infections-in-children

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000479
