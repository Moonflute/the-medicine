---
type: qbank
schema_version: 1
id: medqa-us-train-001821
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:327c76aa2aee85b30b21fec9b638dc0aedaab67ee05e9d5ebdcb3e2a80afa094
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "erythema nodosum"
  - "sarcoidosis"
  - "panniculitis"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-qysOygiCDtmY3rsJggKEVyeXRoZW1hIE5vZG9zdW0pLm1k
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

28세 여성에게 정강이 앞쪽 압통성 홍반 결절과 양쪽 발목 통증이 생겼다. 몇 주간 마른기침도 있어 폐 사르코이드증이나 결핵을 살피려 한다. 첫 영상검사는?

## 선택지

A. 복부 초음파
B. 양쪽 발목 초음파
C. 흉부 X선
D. 흉부 MRI

## 해설


결절홍반에는 폐 사르코이드증·결핵 등 원인이 있을 수 있다. 흉부 X선으로 폐문 림프절과 폐실질을 먼저 살피고 의심되는 원인에 맞춰 추가 검사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001821 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 결절홍반의 임상 단서와 흉부 X선 목적을 보존하고 폐양성 결절이라는 부정확한 표현을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.bad.org.uk/pils/erythema-nodosum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001821
- https://doi.org/10.1164/rccm.202002-0251ST
