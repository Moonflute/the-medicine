---
type: qbank
schema_version: 1
id: medqa-us-train-000966
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8513724826975fed17b19d38b25f527dd0faa1ff9cb5df3907e581ad20dfe916
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "caustic ingestion"
  - "chemical burn"
question_type: investigation
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlO2VmeusvOyniO2ZlOyDgSAoQ2hlbWljYWwgQnVybikubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 부식성 세정제를 삼킨 뒤 침을 많이 흘리고 물도 삼키기 아파한다. 기도와 순환은 안정화했고 천공을 의심할 소견은 없다. 식도와 위 손상을 평가할 검사는?

## 선택지

A. 단순 복부촬영만 반복
B. 활성탄 투여 뒤 증상 확인
C. 위세척 뒤 세척액 검사
D. 조기 상부위장관 내시경

## 해설

부식성 물질을 삼킨 뒤 연하통과 침 흘림이 있으면 입안 화상이 뚜렷하지 않아도 손상을 배제할 수 없다. 안정화한 뒤 보통 24시간 안에 내시경으로 평가한다. 구토 유도와 위세척은 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 입안에 화상이 없다는 원문을 화학화상이 확인된 것처럼 바꾼 해설을 수정했다. 기도 확보 후 증상성 부식제 섭취의 내시경 A는 유지한다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Corrosives_-_Caustic_Poisoning/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000966
- https://doi.org/10.1097/mpg.0000000000001408
