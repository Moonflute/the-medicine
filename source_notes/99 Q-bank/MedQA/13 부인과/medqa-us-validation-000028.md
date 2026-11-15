---
type: qbank
schema_version: 1
id: medqa-us-validation-000028
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3b37a607fc04f91bc588ff2fadb205b21597233e0a354a69c59cb6f087e68ca4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "원발성 무월경"
  - "고성선자극성 성선기능저하증"
  - "터너 증후군"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 여아가 유방 발달과 초경이 모두 없다. 자궁은 있고 임신검사는 음성이다. 두 차례 FSH가 높고 에스트라디올은 낮았다. 뚜렷한 후천 원인이 없다면 어떤 검사로 원인을 평가하는가?

## 선택지

A. 갑상샘 초음파
B. 뇌하수체 조영 MRI
C. 자궁난관조영술
D. 염색체 핵형검사

## 해설

높은 FSH와 낮은 에스트라디올은 원발성 성선기능저하증을 시사한다. 핵형검사로 터너증후군 등 성선발생이상을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 높은 FSH와 이차성징 부재의 성선발생이상 평가 핵형 D 유지. 의미 없는 음역어 삭제.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000028
