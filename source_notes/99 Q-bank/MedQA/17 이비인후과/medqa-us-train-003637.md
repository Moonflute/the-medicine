---
type: qbank
schema_version: 1
id: medqa-us-train-003637
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95ce98dac4ba924d004ba242cd17fcc28a7b46709ec710b8d155947cb287a3a6
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "petrous apicitis"
  - "Gradenigo syndrome"
  - "otitis media complication"
  - "abducens nerve palsy"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ykkeydtOyXvCAoT3RpdGlzIG1lZGlhKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 아이가 중이염으로 치료받던 중 발열과 심한 한쪽 눈 뒤 통증이 생겼다. 같은 쪽 눈이 가쪽으로 움직이지 않아 복시가 있다. 다음 평가로 적절한 것은?

## 선택지

A. 중이염이 번졌는지 응급 조영 MRI와 이비인후과 평가를 진행한다
B. 시력만 재고 안경을 처방한다
C. 중이 삼출이 사라질 때까지 영상은 미룬다
D. 편두통으로 보고 진통제만 사용한다

## 해설

중이염과 같은 쪽의 외전신경마비·깊은 얼굴 통증은 추체첨부염이나 두개내 전파의 경고다. 영상과 전문 평가를 서두르고 필요 시 전신 치료를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 중이염·두통·외전신경마비의 두개내 합병증 평가 필요. Gradenigo를 고막염/농양으로 단정한 해설 수정, 뇌 MRI C 유지하며 불안정 환자의 치료 지연 경고.
- 공식/학회 근거: https://acsearch.acr.org/docs/3195157/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003637
- https://pubmed.ncbi.nlm.nih.gov/40409884/
