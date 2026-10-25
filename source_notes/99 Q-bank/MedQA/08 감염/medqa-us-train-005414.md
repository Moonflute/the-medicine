---
type: qbank
schema_version: 1
id: medqa-us-train-005414
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac968b2e6133275c5e3c633bf5c3ff329bf9232969dda240d6deff574035aec5
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "AIDS"
  - "두개내압 상승"
  - "기회감염성 수막염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: investigation
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

HIV 감염과 CD4 수 65 cells/μL인 33세 남자가 발열, 기면과 혼돈으로 응급실에 왔다. 질문에 반응하지 못하고 급성으로 아파 보인다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. CD4와 HIV 바이러스량 재검사
B. 요추천자
C. 조영제를 사용하지 않는 두부 CT
D. 안저검사를 포함한 신경학적 진찰

## 해설


급성 의식장애에서는 기도·호흡·순환·혈당 평가와 함께 신속한 신경진찰/안저평가 D로 국소결손·뇌압 관련 단서를 확인한다. 이 환자의 심한 면역저하와 의식저하는 요추천자 전 영상 평가를 고려할 중요한 조건이며 정상 안저가 모든 압력 위험을 배제하지 않는다. 수막염/뇌염이 의심되면 필요한 배양·경험적 치료를 CT나 LP 때문에 지연하지 않는다. CD4 재검 자체가 우선 응급 대응은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005414 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 초기 신경진찰 D 유지; 정상 안저로 두개내압 상승을 배제하거나 영상/감염치료를 지연할 수 없음을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005414
