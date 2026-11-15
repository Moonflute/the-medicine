---
type: qbank
schema_version: 1
id: medqa-us-train-006136
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8309f8b8065923ffe5ae117c4472f791c2bce5d37436a4d583a9dd518ab3c8f9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신장 아밀로이드증"
  - "아밀로이드 신증"
  - "연전 형성"
  - "Renal amyloidosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "연전 형성을 섬유소로 오역한 오류를 교정하고 AL 아밀로이드의 추론과 확진을 구별."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

73세 남성이 심한 단백뇨와 부종으로 검사를 받았다. 신장 생검의 콩고레드 염색에서 사과녹색 복굴절이 확인됐지만 아밀로이드 유형은 아직 검사 중이다. AL 아밀로이드증의 가능성을 평가할 혈액·소변 검사는?

## 선택지

A. 혈청·소변 면역고정 검사와 혈청 유리경쇄
B. 류마티스인자와 항CCP 항체
C. 혈청 C3·C4와 항핵항체
D. 항사구체기저막 항체와 ANCA

## 해설

콩고레드는 아밀로이드 침착을 확인하지만 유형을 구별하지 못한다. 면역고정과 혈청 유리경쇄로 단클론 단백을 찾되, 검출되더라도 조직 유형으로 AL인지 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006136
- https://doi.org/10.1093/ckj/sfag163

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 연전 형성을 섬유소로 오역한 오류를 교정하고 AL 아밀로이드의 추론과 확진을 구별.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
