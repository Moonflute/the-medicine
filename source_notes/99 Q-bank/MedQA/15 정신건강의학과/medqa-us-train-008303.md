---
type: qbank
schema_version: 1
id: medqa-us-train-008303
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:32bce40fd9f4ae2bcf506bd3dd383cf67df84a5487561e0d3a921ae2da0a77aa
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder in older adults"
  - "suicide risk assessment"
  - "bereavement"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-ygleyDgSDslaDrj4Qg67CY7J2RIChCZXJlYXZlbWVudCkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

82세 여성이 불면, 흥미 저하, 체중 감소로 내원했다. 가족에게 짐이 된다고 반복해 말하며 모임도 끊었다. 우울증 치료를 정하기 전에 면담에서 먼저 확인할 것은?

## 선택지

A. 죽고 싶은 생각이나 자살 의도가 있는지 직접 묻는다
B. 기억력 선별검사부터 시행한다
C. 갑상샘 검사 결과가 나올 때까지 위험 평가는 미룬다
D. 먼저 가족에게서 독립적으로 생활할 수 있는지 확인한다

## 해설


노년기 우울 증상에 부담감과 사회적 위축이 동반되면 자살사고와 의도를 직접 묻는다. 답에 따라 안전 확보나 응급 평가가 필요한지 결정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008303
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 노인 우울 증상에서 자살사고를 먼저 평가한다는 영한 본문·선지·답·해설 일치. 학대·이주를 근거 없이 먼저 단정하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
