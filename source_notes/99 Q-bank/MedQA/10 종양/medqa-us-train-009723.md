---
type: qbank
schema_version: 1
id: medqa-us-train-009723
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20887d6748a7e97beda14fd23d6031900ed4a0824a216e3b9697c4a337715fbf
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "pancreatic cancer"
  - "췌장암"
  - "migratory thrombophlebitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

67세 남성이 체중 감소와 계속되는 명치 통증으로 왔다. 최근 몇 주 동안 서로 다른 부위에 아픈 피하 정맥줄이 반복됐고 초음파에서 표재성 정맥혈전이 확인됐다. 복부 증상과 반복 혈전을 함께 설명할 원인으로 특히 의심할 것은?

## 선택지

A. 복강 내 악성종양에 따른 과응고 상태
B. 단순 만성 정맥부전
C. 심장성 동맥 색전
D. 하지 림프부종

## 해설


위치가 바뀌는 표재성 혈전정맥염에 뚜렷한 복통과 체중 감소가 동반되면 췌장암 등 복강 내 악성종양을 고려한다. 모든 혈전 환자에서 증상과 관계없이 전신 CT를 찍는다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009723 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복부증상·체중감소를 동반한 이동성 혈전정맥염의 표적 CT B 유지; 모든 혈전에 광범위 암검사를 적용하는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng158/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009723
- https://www.cancer.gov/types/pancreatic/hp/pancreatic-treatment-pdq
