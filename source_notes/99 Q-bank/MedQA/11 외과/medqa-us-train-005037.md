---
type: qbank
schema_version: 1
id: medqa-us-train-005037
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8be9639bae64bda03c9ec901aae512f7e9a1feaf7a84c164ce7d9cc9b64809f8
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "손가락 절단"
  - "절단지 보존"
  - "미세혈관 재접합술"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: C
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

54세 남자 목수가30분 전 작업장에서 나무를 자르다 손이 기계에 끼어 오른쪽 엄지를 절단했다. 절단된 엄지를 어떻게 운반해야 하는지 응급의사에게 문의한다. 다음 중 가장 적절한 정보는?

## 선택지

A. 차가운 우유가 담긴 컵에 엄지를 넣는다
B. 멸균 거즈로 감싸 생리식염수 컵에 담근다
C. 생리식염수로 적신 멸균 거즈로 감싸 멸균 봉투에 넣는다
D. 엄지를 보존할 필요가 없다

## 해설


절단 엄지는 생리식염수로 살짝 적신 멸균 거즈로 감싸 밀폐된 방수 비닐봉지에 넣는다(C). 봉지를 얼음이 든 용기 등에 놓아 간접 냉각하되 조직을 얼음에 직접 대거나 얼리지 않으며 물·우유에 담그지 않는다. 환자와 절단 부위를 신속히 재접합 평가가 가능한 의료기관으로 이송한다. 적절한 보존은 재접합 가능성에 도움이 되지만 성공을 보장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005037 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 절단지 운반 C의 습윤·밀봉 이후 간접 냉각과 즉시 운반을 명확히 했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.orthoinfo.org/diseases--conditions/fingertip-injuries-and-amputations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005037
