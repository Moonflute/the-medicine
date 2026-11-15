---
type: qbank
schema_version: 1
id: medqa-us-train-008926
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bf3720c699b987785653c2590dc7d463d5df0b4bebbe457400c97494d32062f5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "opioid false positive"
  - "poppy seed ingestion"
  - "opioid intoxication"
question_type: investigation
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhO2OuOycoOyCrOygnCDspJHrj4UgKE9waW9pZCBQb2lzb25pbmcpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성통증으로 추적 중인 환자의 소변 오피오이드 선별검사에서 설명되지 않는 양성이 나왔다. 환자에게 급성 중독 소견은 없다. 중요한 치료 결정을 내리기 전에 할 일은?

## 선택지

A. 선별검사만으로 사용장애를 확진한다
B. 양성 농도로 최근 복용량을 추정한다
C. 같은 면역검사 결과가 두 번 양성이면 개별 약물이 확인된 것으로 본다
D. 약물 이력과 검사 한계를 검토하고 필요한 경우 특이적 확인검사를 한다

## 해설

면역 선별검사 양성만으로 특정 약물, 복용량, 기능 저하 또는 사용장애를 확정할 수 없다. 결과가 치료를 바꾸면 질량분석법 등 특이적 방법으로 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008926
- https://pubmed.ncbi.nlm.nih.gov/34780053/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 양귀비씨 섭취 후 양성이 곧 임상 중독·동공축소를 뜻하는 듯한 설명을 원문의 가정적 오피오이드 중독 소견 질문으로 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/medical-devices/drugs-abuse-tests/drugs-abuse-home-use-test
