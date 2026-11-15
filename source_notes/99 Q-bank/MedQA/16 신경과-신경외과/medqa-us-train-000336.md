---
type: qbank
schema_version: 1
id: medqa-us-train-000336
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea1483ee789c211c079d2dd01943fc974f5c9e60de9cb1e60287d2608840538e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Alzheimer's disease"
  - "Frontotemporal dementia"
  - "Lewy body dementia"
  - "Serotonin syndrome"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghOuRkOy4oeuRkOyXvSDsuZjrp6QgKEZyb250b3RlbXBvcmFsIERlbWVudGlhKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 환자가 최근 수개월간 돈 관리와 일상 계획에 어려움을 겪는다. 집중이 날마다 크게 달라지고 실제로 없는 아이들이 반복해서 보인다. 비슷한 시기에 서동과 경직도 생겼다. 가장 가능성 높은 진단은?

## 선택지

A. 알츠하이머 치매
B. 루이소체 치매
C. 파킨슨병 치매
D. 저활동형 섬망

## 해설

인지 변동과 뚜렷한 반복 환시, 파킨슨증이 비슷한 시기에 나타나는 것은 루이소체 치매에 부합한다. 확립된 파킨슨병이 오래 선행한 뒤 생기는 치매와 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수개월 만성 증상을 급성 혼동, 주간졸음을 저녁졸음으로 바꾸고 청각환각을 창작한 해설 정정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000336
- https://pubmed.ncbi.nlm.nih.gov/28592453/
