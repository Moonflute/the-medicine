---
type: qbank
schema_version: 1
id: medqa-us-validation-000114
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:42810a7047dcb3d28f399e3668ad25e8f7310a47038a6d522d683b0da4fa30fb
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "다발성 골수종"
  - "경쇄"
  - "고칼슘혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

뼈 통증, 고칼슘혈증과 급성 신손상이 있는 환자에서 다발골수종을 의심한다. 일반 소변 시험지의 단백은 음성이었다. 경쇄 관련 신손상을 놓치지 않으려면 어떤 검사가 적절한가?

## 선택지

A. 소변 시험지만 반복
B. 혈청 유리경쇄 정량과 소변 단백 전기영동·면역고정
C. 요알부민 검사 단독
D. 혈청 항사구체기저막 항체

## 해설


소변 시험지는 주로 알부민에 반응하므로 단클론 유리경쇄를 놓칠 수 있다. 혈청 유리경쇄와 소변 단백 전기영동·면역고정은 경쇄 관련 신손상 평가에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000114 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CRAB 단서의 myeloma light chain B 유지. 시행되지 않은 SPEP 결과를 만들어낸 설명 제거하고 dipstick은 주로 albumin 검출임을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000114
- https://pubmed.ncbi.nlm.nih.gov/37414019/
