---
type: qbank
schema_version: 1
id: medqa-us-train-002221
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c5cfc80cb2a7e928c13fcc826a5a94e98598ed747bad43f6a7772d3447c659f
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "ototoxicity"
  - "cisplatin"
  - "sensorineural hearing loss"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uPjOuwnOyEsSDrgpzssq0gKFN1ZGRlbiBzZW5zb3JpbmV1cmFsIGhlYXJpbmcgbG9zcykubWQ
difficulty: standard
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxMCDsooXslpEvQ2lzcGxhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

방광암으로 시스플라틴 병합치료를 받는 환자가 양쪽 이명과 고음 소리를 듣기 어려운 증상을 호소한다. 이경검사는 정상이다. 다음 조치는?

## 선택지

A. 고막이 정상이라 이독성을 배제하고 경과를 본다
B. 외이도 감염으로 보고 항균 점이제를 사용한다
C. 연령 관련 난청으로 판단하고 항암팀에는 알리지 않는다
D. 청력검사를 시행하고 항암팀과 이독성과 치료 계획을 검토한다

## 해설

시스플라틴은 양쪽 고주파 감각신경성 난청과 이명을 일으킬 수 있다. 이전 청력과 비교하고 항암 효과와 청각 위험을 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. AC>BC를 전도성 난청이라고 한 오류와 본문에 없는 방사선치료/시스플라틴 투여 단정 제거. 약물성 이독성은 치료 맥락상 추론임을 명시. 원정답 A 유지.
- 공식/학회 근거: https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8d170f6f-37d7-41ce-aae2-33307a6ef3ae
- 공식/학회 근거: https://www.nidcd.nih.gov/health/age-related-hearing-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002221
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8d170f6f-37d7-41ce-aae2-33307a6ef3ae
