---
type: qbank
schema_version: 1
id: medqa-us-train-008696
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a36927e5c3b18f4d2d8dbc41eda4fe0c43b4fc6026e5fdbc84efb52349f020c1
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "medication-induced erectile dysfunction"
  - "beta-blocker adverse effect"
  - "metoprolol"
  - "Erectile dysfunction"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u5hO2bhOyEsSDsi6zqt7zrs5Hspp0gKEh5cGVydHJvcGhpYyBDYXJkaW9teW9wYXRoeSkubWQ
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 한 달 동안 발기 유지가 어려워 내원했다. 그 밖에는 건강하다. 고혈압과 울혈성 심부전 병력이 있다. 현재 메토프롤롤, 암로디핀, 푸로세미드, 로사르탄, 아스피린을 복용한다. 3개월 전 간헐적 기침 때문에 리시노프릴을 로사르탄으로 바꾸었고, 2개월 전 고혈압과 부종 조절을 위해 메토프롤롤과 푸로세미드를 추가했으며 암로디핀 용량은 줄였다. 흡연은 하지 않는다. 혈압 125/70mmHg, 맥박 58회/분, 호흡수 14회/분이다. 폐음은 깨끗하고 이전에 진단된 수축기 심잡음과 양쪽 발등의 경미한 압흔성 부종이 있다. 다음 중 약물에 대한 가장 적절한 변경은 무엇인가?

## 선택지

A. 인다파미드 추가
B. 암로디핀 용량 증가
C. 메토프롤롤 용량 감소
D. 로사르탄을 리시노프릴로 변경

## 해설

메토프롤롤 추가 후 발생한 발기부전과 맥박 58회/분은 약물 기여를 검토할 근거가 되어 C가 선택지 중 적합하다. 다만 성기능장애는 다인성이며 이뇨제 등 다른 요인도 확인한다. 심부전에서 베타차단제의 이득을 고려해 제형, 용량, 증상과 심기능을 평가하며 감량 여부를 결정하고 갑자기 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 약물 관련 발기부전의 C를 유지하되 심부전 예후약을 임의 중단하는 오용을 제한.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008696
