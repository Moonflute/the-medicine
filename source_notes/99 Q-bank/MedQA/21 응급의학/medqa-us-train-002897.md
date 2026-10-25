---
type: qbank
schema_version: 1
id: medqa-us-train-002897
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1491736b80a1f847d1fc798393c2e6f41895265239805272d7bafc72e6c276a4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "rhabdomyolysis"
  - "prolonged immobilization"
  - "acute kidney injury prevention"
  - "aggressive intravenous fluids"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

과거 병력을 알 수 없는 58세 남성이 집 바닥에서 딸에게 발견되었다. 초기 평가에서 오른쪽 팔 근력저하와 이해할 수 없는 말이 있었다. 병원에서 허혈성 뇌졸중으로 진단되었고 MRI에서 오른쪽 중대뇌동맥 영역에 확산 제한이 보였다. 딸이 발견하기 전 약 2일 동안 바닥에 누워 있었던 것으로 확인되었다. 내원 시 혈압은 161/88 mmHg, 맥박은 규칙적으로 104회/분이다. BUN 40 mg/dL, 크레아티닌 1.9 mg/dL, 칼륨 5.3 mEq/dL, 나트륨 155 mEq/dL, 염소 100 mEq/L, 중탄산염 24 mmol/L, 혈색소 13.8 g/dL, 헤마토크리트 40%, 백혈구 11,000/mL, 혈소판 300,000/μL, 혈청 크레아틴키나아제 40,000 U/L이다. 다음 중 이 환자에게 가장 적절한 처치는?

## 선택지

A. 정맥 수액을 이용한 강제 이뇨
B. 부하 심초음파
C. 신선동결혈장 수혈
D. 메토프롤롤을 이용한 리듬 조절

## 해설

장시간 압박·부동 뒤 CK 40,000U/L와 신기능 저하는 횡문근융해와 AKI 위험에 합당하다. 보기 중 정맥 수액(A)을 체액량·소변량·전해질에 맞춰 투여하는 것이 적합하다. '강제 이뇨'를 무제한 수액이나 이뇨제 투여로 해석해서는 안 되며 체액과부하를 피한다. 원문과 번역 모두 우측 약화/우측 MCA 병변이 함께 있어 뇌졸중 좌우 국소화가 일치하지 않지만 이 문항의 CK 기반 수액 판단은 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 심한 반복 훼손 해설을 횡문근융해 케이스의 설명으로 교체. 우측 약화/우측 MCA라는 영어 원문의 좌우 모순은 수액 적응증과 구별하여 명시.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC8804685/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002897
