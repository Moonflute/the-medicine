---
type: qbank
schema_version: 1
id: medqa-us-train-008860
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d2c700fe4bd8157460e3d3dbccdbcdf4193c12461bee3af8a20904a72c910ac7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "HSV encephalitis"
  - "herpes simplex virus"
  - "acyclovir"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64uo7Iic7Y-s7KeE67CU7J2065-s7IqkIOqwkOyXvCAoSGVycGVzIFNpbXBsZXggVmlydXMgSW5mZWN0aW9uKS5tZA
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 발열과 두통 뒤 혼돈과 이상행동을 보여 응급실에 왔다. 뇌 MRI에서 오른쪽 안쪽 측두엽에 고신호가 보인다. 뇌척수액은 림프구 우세 백혈구증가를 보이고 포도당은 정상이다. 뇌척수액 HSV PCR 결과를 기다리는 동안 우선 투여할 약제는?

## 선택지

A. 정맥 아시클로버
B. 고용량 스테로이드 단독
C. 정맥 면역글로불린 단독
D. 리툭시맙

## 해설

발열, 급성 행동변화, 측두엽 병변은 단순헤르페스 뇌염을 의심하게 한다. 핵산검사로 확인을 진행하되 결과가 나올 때까지 정맥 아시클로버를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 누락 MRI 소견을 본 것으로 단정하지 않고, 임상적 뇌염에서 경험적 acyclovir A를 선택하는 근거로 교정.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/encephalitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008860
