---
type: qbank
schema_version: 1
id: medqa-us-train-010008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:14f4bb4b32848691bddeb9ce7993d445cf5427684ea95580d79c08c15652f152
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "복압성 요실금"
  - "방광류"
  - "골반장기탈출"
  - "Stress urinary incontinence"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRm9zaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 G5P3 여성이 2년 동안 운동하거나 기침하거나 웃을 때 소변이 새는 증상으로 내원했다. 증상은 낮에만 있고 요절박, 야간뇨, 배뇨통은 없다. 월경 이상은 없다. 남편 외의 성 파트너는 없다. 12갑년의 흡연력, 3년간의 만성 기관지염과 동맥성 고혈압 병력이 있다. 포시노프릴 10mg, 메토프롤롤 50mg, 아토르바스타틴 10mg을 매일 복용한다. 체중 88kg, 키 160cm이다. 혈압 130/80 mmHg, 심박수 분당 78회, 호흡수 분당 14회, 체온 36.7℃이다. 폐 청진에서 양측 하엽 수포음이 들리고 늑골척추각이나 치골상부 압통은 없다. 부인과 진찰에서 다음 중 가장 가능성 높은 소견은?

## 선택지

A. 직장류
B. 난소 종괴
C. 화농성 자궁경부 분비물
D. 방광류

## 해설

기침·운동·웃음 때 새고 절박감이 없는 소변 누출은 복압성 요실금을 시사한다. 다산·비만·만성 기침은 골반저/요도 지지 장애와 관련되며 전질벽 방광류(D)가 동반될 수 있어 보기 중 가장 적절하다. 모든 복압성 요실금에 방광류가 있거나 방광류만이 원인이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 복압성 요실금을 방광류에서만 또는 가장 흔하게 나타나는 현상으로 단정한 해설을 공통 골반저 지지 장애로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010008
