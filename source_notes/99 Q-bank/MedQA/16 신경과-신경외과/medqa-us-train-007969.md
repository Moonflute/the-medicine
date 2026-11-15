---
type: qbank
schema_version: 1
id: medqa-us-train-007969
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ef5dd456a8dc933e7163f5ab1e69c836c8e16d098918ed75b6648bd541ebcf3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "acute low back pain"
  - "sciatica"
  - "conservative management"
question_type: management
related_disease_slugs: []
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 환자가 짐을 옮긴 뒤 일주일째 허리 통증과 한쪽 다리 방사통이 있다. 근력은 정상이고 발열, 암 병력, 안장 감각저하와 배뇨장애는 없다. 적절한 초기 계획은?

## 선택지

A. 침상안정을 1주 이상 권한다
B. 모든 환자에서 바로 조영 요추 MRI를 찍는다
C. 첫 진료에 장기 오피오이드 처방을 시작한다
D. 견딜 수 있는 활동을 유지하며 초기 보존치료를 하고 경고 증상을 안내한다

## 해설

위험징후 없는 급성 요통과 방사통은 일률적으로 즉시 영상검사를 하지 않는다. 가능한 활동을 유지하고, 새 배뇨장애나 진행하는 위약이 있으면 즉시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 후 저열 해설은 다른 케이스. 급성 요통/방사통의 활동 유지 및 위험을 고려한 단기간 NSAID로 교체. A 유지.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng59/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007969
