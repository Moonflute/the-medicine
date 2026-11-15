---
type: qbank
schema_version: 1
id: medqa-us-train-001053
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0b0d95d640f972817aaaee2095e437274dcb9eda9766c02539f7b03bd133f44
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "bipolar disorder"
  - "schizophrenia"
  - "pulmonary embolism"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSDsiqTtjpntirjrn7wg7J6l7JWgIChTY2hpem9waHJlbmlhIFNwZWN0cnVtIGFuZCBPdGhlciBQc3ljaG90aWMgRGlzb3JkZXJzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주 여성이 흉막성 흉통과 저산소증으로 내원했다. 초기 평가에서 폐색전증을 배제하지 못했다. 혈압은 안정적이고 흉부 X선은 정상이다. 현재 CT 폐혈관조영술은 불가능하다. 가능한 대체 영상은?

## 선택지

A. 복부 초음파
B. 폐관류 스캔
C. 심전도 반복
D. 흉부 비조영 CT

## 해설

임신 중 폐색전증을 배제하지 못하면 필요한 영상검사를 미루지 않는다. CT 폐혈관조영술을 할 수 없고 흉부 X선이 정상이라면 폐관류 스캔이 대안이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 임신·저산소포화도·흉막성 통증의 PE 평가를 ARDS로 잘못 연결한 해설과 V/Q 무방사선 주장을 교정.
- 공식/학회 근거: https://member.thoracic.org/statements/resources/pvd/evaluation-of-suspected-pulmonary-embolism-in-pregnancy.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001053
- https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/cardiovascular-diseases-during-pregnancy-management-of/
