---
type: qbank
schema_version: 1
id: medqa-us-train-007659
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9e9ef27c851760966f54a586157325c242b2d77aa084811c36459f91bd764cd8
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "multiple sclerosis"
  - "relapsing-remitting multiple sclerosis"
  - "disease-modifying therapy"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 환자가 재발형 다발성경화증으로 1년 동안 두 차례 입원했다. 스테로이드로 최근 재발에서 회복했으며 현재는 신경학적 증상이 없다. 이후 재발 위험을 줄이기 위한 계획은?

## 선택지

A. 활성도와 임신 계획 등을 고려해 질병조절치료를 시작한다
B. 증상이 없어 재발할 때만 스테로이드를 사용한다
C. 예방 목적으로 고용량 스테로이드를 매달 일률 투여한다
D. 신경 결손이 영구적으로 남을 때까지 장기 치료는 미룬다

## 해설

다발성경화증의 급성 재발 치료가 장기 재발 예방을 대신하지 않는다. 임상·MRI 활성도, 안전성, 동반 상태와 환자 선호에 맞춰 질병조절제를 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 재발완화형 MS의 DMT C 유지하되 interferon만 일률적 일차라는 단정 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations
- 공식/학회 근거: https://www.nice.org.uk/guidance/ta527/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007659
- https://ectrims.eu/app/uploads/2024/01/ECTRIMS-EAN-Guideline-on-the-pharmacological-treatment-of-people-with-multiple-sclerosis-1.pdf
