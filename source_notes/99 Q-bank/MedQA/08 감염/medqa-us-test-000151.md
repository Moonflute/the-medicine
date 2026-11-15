---
type: qbank
schema_version: 1
id: medqa-us-test-000151
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bbe8da6670986874c3b4b469b9b1c2d4b1841b6bdda1ae66669f3f85ba23b658
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "레지오넬라 폐렴"
  - "비정형 폐렴"
  - "저나트륨혈증"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ugiOyngOyYpOuErOudvCAoTGVnaW9uZWxsYSkubWQ
  - MDIg7Zi47Z2h6riwL-u5hOygle2YlSDtj5DroLQgKEF0eXBpY2FsIFBuZXVtb25pYSkubWQ
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

입원한 폐렴 환자의 레지오넬라 소변 항원검사가 양성이다. 세프트리악손만 투여 중이었다. 금기가 없을 때 레지오넬라를 치료할 항생제는?

## 선택지

A. 세프트리악손
B. 레보플록사신
C. 피페라실린/타조박탐
D. 반코마이신

## 해설


레지오넬라 폐렴에는 레보플록사신 또는 적절한 마크롤라이드를 사용한다. 세프트리악손을 포함한 베타락탐 단독으로는 충분하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000151 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 폐렴+설사+저나트륨혈증에서 Legionella 치료 선지 A 유지. 가정용 에어컨 일반화와 유일한 1차 약제라는 표현을 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/legionella/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000151
- https://doi.org/10.3947/ic.2018.50.2.160
