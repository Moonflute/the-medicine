---
type: qbank
schema_version: 1
id: medqa-us-train-007259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d60cf330712b3096630b6d20691686794a6d72c8716a8b10054519ee3e6c1293
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "잠복결핵감염"
  - "이소니아지드"
  - "모유 수유"
  - "피리독신"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

33세 여성이 가족 내 결핵 접촉자 검진에서 인터페론감마 분비검사 양성으로 확인됐다. 증상이 없고 흉부 X선은 정상이며 활동성 결핵은 배제됐다. 잠복결핵 치료로 이소니아지드와 피리독신을 처방받은 뒤 모유 수유를 계속해도 되는지 묻는다. 가장 적절한 설명은?

## 선택지

A. 치료가 끝날 때까지 모유 수유를 중단한다
B. 수유 중에는 피리독신만 중단한다
C. 모유를 통해 약이 전달되므로 영아는 별도 평가가 필요 없다
D. 이소니아지드와 피리독신을 복용하면서 모유 수유를 계속할 수 있다

## 해설


활동성 결핵이 배제됐고, 수유 중 이소니아지드를 사용한다는 이유로 모유 수유를 중단할 필요는 없다. 산모는 피리독신을 함께 복용한다. 영아도 별도로 결핵에 노출되었다면 접촉자 평가와 예방치료 필요성을 따로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007259 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: INH+B6 복용 중 수유 D 유지; 어떤 상황에서도 절대 해가 없다는 일반화 및9개월 유일 요법 오해 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/clinical-care/pregnancy.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007259
- 질병관리청·대한결핵 및 호흡기학회, 결핵 진료지침 5판(2024), IV.1: https://new.lungkorea.org/common/fileDownload/only/board/eyJpdiI6IjZCYjR0SlI1dFJwdlJJSmVpMHlHWmc9PSIsInZhbHVlIjoiOGdrWXV0MCtWSjRwazY4aTJ4Y3Q0QT09IiwibWFjIjoiMWQzNjIwNjQzYmJkNmMzZTA4ZDI0NTJmM2Q2ZmVlMTIyNmU0MzFkMjBlMjU2ZTE0YTU2OWIwZWIxNmZlODM5MyIsInRhZyI6IiJ9?field=1
