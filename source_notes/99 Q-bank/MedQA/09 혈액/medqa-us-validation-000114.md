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
question_type: diagnosis
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

68세 여성이 피로, 호흡곤란, 소변량 감소, 아침 발 부종으로 진료를 받으러 왔다. 최근 인후통이 있었고 허리와 흉추 통증으로 이부프로펜을 매일 복용한다. 혈색소 9.8 g/dL, BUN 50 mg/dL, 크레아티닌 2.8 mg/dL, 칼슘 12.9 mg/dL이며 소변 단백과 혈액은 음성이었다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 신장 AL 아밀로이드 침착
B. 면역글로불린 경쇄
C. 심박출률 감소
D. 항연쇄구균 항체

## 해설


빈혈, 뼈 통증, 고칼슘혈증과 신기능 저하는 다발골수종을 의심하게 한다. 면역글로불린 경쇄(B)에 의한 cast nephropathy가 가장 부합한다. 일반 요시험지의 protein 검사는 albumin에 민감하므로 경쇄 단백이 있어도 음성일 수 있다. 원문에 단백전기영동 결과는 없으므로 확인된 결과로 덧붙이지 않는다. 칼슘·탈수·NSAID도 신손상에 기여할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000114 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CRAB 단서의 myeloma light chain B 유지. 시행되지 않은 SPEP 결과를 만들어낸 설명 제거하고 dipstick은 주로 albumin 검출임을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000114
