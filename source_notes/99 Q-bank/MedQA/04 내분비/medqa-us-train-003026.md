---
type: qbank
schema_version: 1
id: medqa-us-train-003026
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43b22b935d5b3aec73e65ae8bcf6c96717e5f7f3970e8b113a0406a3a81b21bb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypomagnesemia"
  - "alcohol use disorder"
  - "prolonged QT interval"
  - "malnutrition"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

장기간 음주와 영양불량이 있는 42세 남성이 손발 떨림으로 내원했다. 혈청 칼륨 2.8 mmol/L, 마그네슘 0.8 mg/dL이고 QT가 연장돼 있다. 칼륨을 보충해도 저칼륨혈증이 지속될 때 병행할 처치는?

## 선택지

A. 인산염 보충
B. 비타민 D 투여
C. 마그네슘 보충
D. 중탄산나트륨 투여

## 해설


저마그네슘혈증은 신장 칼륨 소실을 늘려 칼륨을 보충해도 교정이 잘 되지 않게 한다. 심전도를 감시하면서 마그네슘과 칼륨을 함께 교정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 영양결핍·알코올력에 신경근 과흥분·QT연장은 저Mg C; 금단 자체 평가와 별도로 묻는 결핍.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003026
- https://doi.org/10.1681/ASN.2007030320
