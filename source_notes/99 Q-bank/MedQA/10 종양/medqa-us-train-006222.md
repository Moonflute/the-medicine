---
type: qbank
schema_version: 1
id: medqa-us-train-006222
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fdec029120a0cda69daab86de5b47786cb48a6d68a804697e1ebd7a981b4b177
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유관내 유두종"
  - "혈성 유두 분비물"
  - "유관 확장"
related_disease_slugs:
  - MTMg67aA7J246rO8L-q0gOuCtCDsnKDrkZDsooUgKEludHJhZHVjdGFsIFBhcGlsbG9tYSkubWQ
question_type: investigation
difficulty: complex
answer: B
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

42세 환자에게 한쪽 유두의 한 개 유관에서 저절로 혈성 분비물이 나온다. 눌러야만 나오는 분비물은 아니고 만져지는 종괴는 없다. 처음 시행할 유방 영상검사는?

## 선택지

A. 증상이 있어도 다음 국가검진 때까지 기다린다
B. 진단용 유방촬영과 해당 부위 표적 초음파
C. 유방 MRI만 먼저 시행한다
D. 비조영 흉부 CT로 유관을 평가한다

## 해설


한쪽 단일 유관의 자발성 혈성 분비물은 평가가 필요한 소견이다. 40세 이상에서 진단용 유방촬영과 표적 초음파로 유관내 유두종 등 양성·악성 원인을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006222 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 확장된 유관 안에 종괴가 있는 원문을 반대로 해설한 표현 교정 및 악성 배제 없이 안심시키는 표현 완화.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006222
- https://pubmed.ncbi.nlm.nih.gov/36436958/
