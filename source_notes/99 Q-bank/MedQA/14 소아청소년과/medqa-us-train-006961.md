---
type: qbank
schema_version: 1
id: medqa-us-train-006961
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:002599536a0e949b4cd6ae134abd3ce5d7f4bcb399d21d35a5e6badad954cdb5
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "백혈구 접착 결핍증 1형"
  - "베타-2 인테그린"
  - "지연된 탯줄 분리"
  - "호중구증가증"
  - "Leukocyte adhesion deficiency type 1"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

생후 4개월 영아에게 탯줄이 한 달 넘게 떨어지지 않았고 배꼽염과 반복 세균감염이 있었다. 감염 부위에 고름이 거의 없는데 혈액 호중구는 현저히 많다. 의심 질환을 확인할 검사는?

## 선택지

A. 혈청 IgE 단독 측정
B. 호중구 산화폭발 검사만 시행
C. 림프구 수만 재검
D. 유세포분석으로 백혈구의 CD18 발현을 평가

## 해설


백혈구 접착 결핍증 1형에서는 호중구가 감염 조직으로 잘 이동하지 못해 고름이 적고 혈중 호중구는 늘어난다. CD18 발현과 관련 유전자 평가로 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006961
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/2025-Inborn-errors-of-immunity-pp.pdf
