---
type: qbank
schema_version: 1
id: medqa-us-train-007273
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:42848212858336b8c48387abfd4ba3d5e31730ba2e74c5cc0558102bcb347a7d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "레지오넬라 폐렴"
  - "저나트륨혈증"
  - "소변 항원검사"
  - "집단발생"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ugiOyngOyYpOuErOudvCAoTGVnaW9uZWxsYSkubWQ
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: investigation
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

같은 숙박시설을 이용한 사람 여럿에게 폐렴이 생겼다. 그중 한 명이 고열과 호흡곤란으로 입원했다. 레지오넬라 폐렴을 신속히 확인하면서 소변 항원 단독의 한계를 보완할 검사 조합은?

## 선택지

A. 폐렴알균 소변 항원과 혈청 Mycoplasma 항체
B. 소변 항원검사와 소변 일반배양
C. 소변 항원검사만 시행하고 음성이면 배제
D. 소변 항원검사와 하기도 검체 레지오넬라 PCR

## 해설


레지오넬라 소변 항원은 주로 한 혈청군을 검출한다. 하기도 검체로 분자검사 등을 함께 하면 소변 항원 단독으로 놓치는 감염을 평가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007273 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Legionella UAT D 유지; 모든 종을 가장 민감하게 검출하는 단독검사라는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/legionella/php/laboratories/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007273
