---
type: qbank
schema_version: 1
id: medqa-us-train-001836
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f28f287d81e722146d96c5bbaf0f58e1c5ae7adc131bacd728c442ae97b5bdc9
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Stevens-Johnson syndrome"
  - "toxic epidermal necrolysis"
  - "trimethoprim-sulfamethoxazole"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남성이 약을 새로 시작한 뒤 아픈 발진과 구강 미란, 피부 박리로 입원했다. 약은 중단했다. 양쪽 눈이 붉고 각막 상피 결손이 보인다. 추가로 가장 시급한 조치는?

## 선택지

A. 눈 증상은 피부가 회복된 뒤 평가한다
B. 응급 안과 평가를 요청한다
C. 안과 평가 없이 국소 항생제만 처방한다
D. 눈을 가린 채 외래로 추적한다

## 해설

스티븐스-존슨증후군에서 안구 표면 손상은 유착이나 시력 손상으로 이어질 수 있다. 약물 중단과 전신 치료에 더해 초기부터 안과 평가와 치료를 서두른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. SJS/TEN 의심에서 병변 조직검사 B를 유지하되 병리검사만으로 확진을 전적으로 결정한다는 표현을 제한한다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/174/6/1194/6617016?login=false

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001836
