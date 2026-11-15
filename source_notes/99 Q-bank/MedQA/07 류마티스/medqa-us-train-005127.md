---
type: qbank
schema_version: 1
id: medqa-us-train-005127
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca14f771f102392a5c9e3cc4522f2b9520d8a3a744075f6798dc4498273aa07e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "강직성 척추염"
  - "축성 척추관절염"
  - "HLA-B27"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성이 10개월간 지속된 허리 통증을 호소한다. 아침에 뻣뻣하고 움직이면 호전되며, 진찰에서 허리 굽힘이 제한된다. 골반 MRI에서 양측 천장관절의 활동성 염증이 보인다. 이 질환과 연관성이 높은 검사 소견은?

## 선택지

A. HLA-B27 양성 유전자형
B. 항이중가닥 DNA 항체 존재
C. 크레아틴인산화효소 수치 증가
D. 항Ro 및 항La 항체 존재

## 해설


운동으로 좋아지는 염증성 허리 통증과 양측 천장관절염은 축성 척추관절염에 합당하다. HLA-B27 양성이 연관되지만 진단의 필수조건이 아니며, 양성만으로 확진할 수도 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005127 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 32세 여성을 청소년 전방척추염으로 부른 오류를 축성 척추관절염의 HLA-B27 연관으로 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005127
