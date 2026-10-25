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
question_type: investigation
difficulty: complex
answer: B
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

67세 남자가 한 달 동안 점점 악화되는 복통, 체중 감소, 전신 피로로 내원했다. 비만, 당뇨병, 고혈압이 있고 메트포르민, 인슐린, 리시노프릴을 복용한다. 흡연자이며 하루 술 3잔을 마신다. 하지에 선형으로 이어지는 여러 개의 압통성 만져지는 종괴가 있다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 대장내시경
B. 복부 CT
C. 흉부 CT
D. 하지 초음파

## 해설


양측 다리의 반복적 선형 압통성 정맥줄에 복통·체중감소가 동반되어 악성종양 연관 이동성 혈전정맥염을 의심한다. 복부 CT B는 이 환자의 복부·췌장 원인을 평가하는 선택지 중 적절하다. 모든 혈전 환자에서 임상 단서 없이 CT 암 선별을 실시한다는 의미가 아니며 CT만으로 조직학적 확진을 내릴 수도 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009723 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복부증상·체중감소를 동반한 이동성 혈전정맥염의 표적 CT B 유지; 모든 혈전에 광범위 암검사를 적용하는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng158/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009723
