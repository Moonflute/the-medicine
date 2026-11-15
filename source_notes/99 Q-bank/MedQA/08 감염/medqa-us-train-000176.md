---
type: qbank
schema_version: 1
id: medqa-us-train-000176
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89735340bb85f600b9c51a46c5d9a4cb0e0e926c356b820dd0769fcd5f4679f3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tuberculosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: adverse_effect
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

약제 감수성 폐결핵으로 이소니아지드·리팜핀·피라진아미드·에탐부톨을 시작한 지 3주 됐다. 오심과 황달이 새로 생기고 ALT가 정상 상한의 7배다. 지금 할 조치는?

## 선택지

A. 약제 관련 간손상을 의심해 간독성 항결핵제를 즉시 중단하고 원인을 평가한다
B. 리팜핀에 의한 정상적인 소변 변색으로 보고 약을 모두 유지한다
C. 에탐부톨만 중단하고 나머지 약은 그대로 유지한다
D. 황달이 더 심해질 때까지 약을 그대로 복용한다

## 해설


ALT가 정상 상한의 5배 이상이거나 간염 증상과 함께 3배 이상이면 간독성 약제를 중단하고 평가한다. 결핵치료 재개와 약제 조정은 간기능 회복과 질환 중증도에 맞춰 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000176 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항결핵약 간독성 A 유지. 무증상 경미 효소상승도 모두 중단하라는 잘못된 해설을 증상·배수 기준과 재평가로 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000176
- https://www.kdca.go.kr/bbs/kdca/55/259948/download.do
