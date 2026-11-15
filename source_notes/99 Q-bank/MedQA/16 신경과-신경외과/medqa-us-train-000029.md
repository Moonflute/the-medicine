---
type: qbank
schema_version: 1
id: medqa-us-train-000029
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:efaacd97b13e06858438557877785a5f884473973d31336d6464ab3ec0b73071
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "double vision"
  - "ptosis"
  - "pupillary involvement"
  - "third nerve palsy"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
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

63세 환자에게 갑자기 심한 두통과 복시가 생겼다. 오른쪽 눈꺼풀이 처지고 오른눈은 가쪽과 아래를 향하며 동공이 크고 빛반사가 둔하다. 혈관영상에서 가장 먼저 배제할 원인은?

## 선택지

A. 오른쪽 전대뇌동맥 협착
B. 오른쪽 후교통동맥 동맥류
C. 왼쪽 중대뇌동맥 협착
D. 오른쪽 가로정맥동 혈전

## 해설

통증을 동반한 동공 침범 제3뇌신경마비는 후교통동맥 부위 동맥류가 신경을 누를 때 나타날 수 있다. 응급 혈관영상으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안구하수체마비라는 오역을 동공침범 제3뇌신경마비로 정정. MRA C 유지.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/cerebral-aneurysms

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000029
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8727561/
