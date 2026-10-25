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

15세 여아가 아직 초경을 하지 않아 어머니와 함께 진료를 받으러 왔다. 유방발달은 없고 외부 생식기는 Tanner 1단계이며 FSH가 38 mIU/mL였다. 다음 중 가장 적절한 진단 단계는?

## 선택지

A. CYP17 유전자 검사
B. 에스트로겐 농도
C. 성선자극호르몬 방출호르몬 자극검사
D. 핵형검사

## 해설

15세에 유방 발달과 초경이 없고 FSH가 높아 원발성 성선기능부전이 의심된다. 성선발생이상이나 Turner 증후군 등 염색체 원인을 확인하기 위해 핵형검사(D)를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 높은 FSH와 이차성징 부재의 성선발생이상 평가 핵형 D 유지. 의미 없는 음역어 삭제.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000028
