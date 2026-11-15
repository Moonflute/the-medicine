---
type: qbank
schema_version: 1
id: medqa-us-train-007971
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ee3cbc353a5f41b5b9cc5415c3b679ea58f46d002c98a77cac019cd0630a6f5
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "postoperative fever"
  - "inflammatory response to surgery"
  - "postoperative day 1"
related_disease_slugs:
  - MTEg7Jm46rO8L-yImOyIoCDtm4Qg67Cc7Je0IChQb3N0b3BlcmF0aXZlIEZldmVyKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

합병증 없이 수술을 마친 환자가 수술 16시간 뒤 한 번 38.1°C였다. 재측정한 체온과 활력은 안정적이며 호흡기·요로 증상이나 상처 이상은 없다. 현재 가장 적절한 대응은?

## 선택지

A. 진찰과 활력을 재평가하면서 경과를 본다
B. 수술 환자이므로 즉시 광범위 정맥 항생제를 투여한다
C. 증상과 무관하게 전신 CT와 여러 부위 배양을 시행한다
D. 무기폐 때문으로 단정하고 이후 발열이 지속돼도 검사하지 않는다

## 해설


수술 직후 짧게 나타나는 발열은 비감염성 염증 반응일 수 있다. 상태가 안정적이고 감염 단서가 없으면 지켜보며, 발열이 지속되거나 새 증상·불안정이 생기면 원인을 찾아 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007971 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술1일째 국소 감염 근거 없는 발열에서 수술 조직손상에 따른 염증자극 B가 가장 가능성 높다. 무기폐가 발열 원인이라는 오해로 바꾸지 않았고 실제 감염 가능성을 영구 배제한 검수는 아니다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007971
- https://www.idsociety.org/practice-guideline/new-fever-in-critically-ill-patients/
