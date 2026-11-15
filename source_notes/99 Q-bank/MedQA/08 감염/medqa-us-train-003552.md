---
type: qbank
schema_version: 1
id: medqa-us-train-003552
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c97f7c2e80134f258a2bf9f5760a5b39e1eb5dea5a1f80b28c9ebb62353ac08c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HSV esophagitis"
  - "HIV with low CD4 count"
  - "odynophagia"
  - "esophageal ulcers"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uLqOyInO2PrOynhCDqsJDsl7wgKEhlcnBlcyBTaW1wbGV4IEluZmVjdGlvbikubWQ
question_type: management
difficulty: standard
answer: C
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

HIV 환자가 삼킴통증으로 내시경을 받았다. 작고 얕은 원형 식도 궤양이 여러 개 보인다. 궤양 가장자리 조직에서 다핵세포와 핵내 봉입체가 보이고 HSV 면역염색은 양성이다. 적절한 약제는?

## 선택지

A. 플루코나졸
B. 간시클로버
C. 아시클로버
D. 니스타틴 현탁액

## 해설


HSV가 조직에서 확인된 식도염은 전신 아시클로버로 치료한다. 궤양 모양만으로 CMV를 확실히 구분하기 어려워 조직검사 결과가 치료 선택에 중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003552 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 작은 원형 표재성 식도궤양으로 HSV A 유지; CD4만으로 HSV가 모든 경우 가장 흔하다는 과장 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003552
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/herpes-simplex-virus
