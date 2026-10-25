---
type: qbank
schema_version: 1
id: medqa-us-train-000188
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a4cd7dd78025c3a7412efdb5d58184695665fe775829a5ed1bcdeb95619cb8c
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hypertension"
  - "diabetes"
  - "stroke"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 남성이 약 30분 전 저녁 식사 도중 발음이 어눌해지고 안면 비대칭이 나타난 것을 아내가 발견하여 구급차로 응급실에 내원하였다. 과거력상 고혈압과 당뇨병이 있다. 체온은 99.1°F(37.3°C), 혈압은 154/99 mmHg, 맥박은 89회/분, 호흡수는 12회/분, 실내 공기에서 산소 포화도는 98%이다. 신경학적 검사에서 우측 상하지 위약감과 비대칭적인 미소가 관찰된다. 다음 중 가장 적절한 다음 조치는 무엇인가?

## 선택지

A. 아스피린(Aspirin)
B. 뇌 CT(CT head)
C. 뇌 CT 혈관조영술(CTA head)
D. 뇌 MRI(MRI brain)

## 해설

갑작스러운 구음장애·편측 위약과 안면 비대칭은 급성 뇌졸중을 의심하게 한다. 먼저 비조영 두부 CT(B)로 두개내출혈 등을 평가하고 재관류치료 적격성을 판단한다. 초기 허혈성 뇌졸중은 CT가 정상일 수 있으므로 정상 CT만으로 뇌졸중을 배제하지 않는다. 대혈관폐색 의심 시 CTA 등 혈관영상이 추가되며 출혈 확인 전 aspirin을 먼저 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 비조영 CT B를 뇌혈관사고 배제 검사라고 한 표현과 초기 CT가 급성 경색을 항상 확인한다는 과장을 교정한다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/acute-stroke-management/triage-and-initial-diagnostic-evaluation-of-transient-ischemic-attack-and-non-disabling-stroke

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000188
