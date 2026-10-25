---
type: qbank
schema_version: 1
id: medqa-us-train-005288
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:faa287ee6234be37fba85827e11228b33d5f38e5d4028b570cec24fc8c873fdb
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "탈수"
  - "신전성 급성신손상"
  - "저나트륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
  - MDUg7Iug7J6lL-y9qe2MpeyEsSDquInshLEg7L2p7YylIOyGkOyDgSAoSW50cmluc2ljIFJlbmFsIEFjdXRlIEtpZG5leSBJbmp1cnkpLm1k
question_type: mechanism
difficulty: complex
answer: "D"
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
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "인계 전 저장된 해설이 다른 문항의 사구체성 혈뇨·생검 내용으로 잘못 들어간 것을 발견하여 실제 사례로 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

27세 남자가 48시간 동안 지속된 구토와 설사, 고열 후 호전되어 내원했다. 혈청 나트륨 123 mEq/L, BUN 42 mg/dL, 크레아티닌 1.9 mg/dL이며 리튬과 이부프로펜을 복용한다. 다음 중 검사 이상을 가장 잘 설명하는 것은?

## 선택지

A. 알도스테론 분비 종괴
B. 신장 내 손상
C. 심인성 다갈
D. 혈액량 감소

## 해설

구토·설사 뒤 저나트륨혈증과 BUN/creatinine 상승은 혈액량 감소에 따른 신장 저관류를 지지한다. 선택지 중 D가 적합하다. Lithium 복용만으로 신성 요붕증을 확정하지 않으며 탈수 중 lithium 축적 가능성도 별도로 평가한다. 이 사례에는 적혈구원주·가시적혈구나 creatinine 2.4라는 값이 없다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 인계 전 저장된 해설이 다른 문항의 사구체성 혈뇨·생검 내용으로 잘못 들어간 것을 발견하여 실제 사례로 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005288

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
