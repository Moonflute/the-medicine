---
type: qbank
schema_version: 1
id: medqa-us-validation-000581
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0a4c51d8d01fae50a35f316d59294243893abe8cd10ce884242be6c4c8b39e1f
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "겐타마이신 이독성"
  - "전정기능 장애"
  - "양측 전정병증"
  - "Gentamicin ototoxicity"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

감염성 심내막염으로 입원한 64세 여성이 6일 후 양측 이명, 어지러움, 메스꺼움이 생겼다. 고개를 돌리면 천장 조명이 좌우로 흔들려 보이고, 현재 정맥 반코마이신과 겐타마이신을 투여 중이다. 머리를 빠르게 돌리면 교정성 단속운동이 나타나며 보행이 불안정하다. 현재 증상의 가장 가능성 높은 원인은?

## 선택지

A. 내림프 흡수 감소
B. 화농성 미로염
C. 약물 독성
D. 섬망

## 해설

Gentamicin은 양측 전정 기능 손상을 일으킬 수 있다. 머리를 움직일 때 시야가 흔들리는 동요시(oscillopsia), 양측 head impulse 검사에서 교정성 단속운동, 불안정한 보행은 전정안반사 저하를 지지하므로 C, 약물 독성이 가장 적절하다. 이 증상을 본문에 없는 회전성 안진으로 바꾸어 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 머리 움직임에 물체가 흔들려 보이는 oscillopsia를 회전성 안구진동으로 잘못 번역한 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000581
