---
type: qbank
schema_version: 1
id: medqa-us-validation-000143
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1165718329ceba6b0ee9f0cbc3919f1fd492644cb4e7a0cc3ece67626138b9cc
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "편평세포 폐암"
  - "PTHrP"
  - "악성 고칼슘혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
  - MDIg7Zi47Z2h6riwL-2PkCDtjrjtj4nsg4HtlLzslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

75세 여성이 구토, 복통, 변비, 다뇨, 갈증과 혼돈으로 응급실에 왔다. 흡연력 30갑년이고 탈수, 우중엽의 국소 수포음과 천명, 단축된 QT 간격이 있었다. CT가 제시되었다. 최근 상태의 가장 가능성 높은 원인은?

## 선택지

A. 선암
B. 기관지폐포암
C. 대세포암
D. 편평세포암

## 해설


갈증·다뇨·탈수·의식 변화와 짧은 QT는 고칼슘혈증을 시사하며, 흡연자의 폐 종양과 연결하면 PTHrP 분비성 편평상피암 D가 전형적 연관이다. 실제 칼슘·PTH/PTHrP 등의 검사로 확인해야 한다. 제공되지 않은 CT 이미지에서 종괴 형태를 관찰했다고 할 수 없고 저칼륨혈증이나 저마그네슘혈증도 본문에 없는 사실이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000143 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고칼슘혈증의 임상·짧은 QT에서 PTHrP 관련 편평상피암 D 추론 유지; 제시되지 않은 저칼륨·저마그네슘과 CT 소견 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000143
