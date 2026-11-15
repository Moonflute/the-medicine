---
type: qbank
schema_version: 1
id: medqa-us-train-009248
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8c791279907bddbae2427f9e070f77170ab4d12d1c0a0982e17bdb06e164fb20
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tertiary syphilis"
  - "3기 매독"
  - "syphilitic aortitis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: investigation
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

치료받지 않은 매독 혈청 양성 환자가 새로 보행 불안정과 감각저하를 보인다. 진찰에서 진동감각이 감소하고 롬베르그 검사가 양성이다. 신경매독을 평가하는 데 적절한 검사는?

## 선택지

A. 혈청 트레포네마 검사만 반복하고 신경계 검사는 중단한다
B. 혈청 RPR 역가만으로 신경매독을 확진한다
C. 요추천자로 뇌척수액 세포 수·단백·VDRL 등을 평가한다
D. 신경 증상이 있어도 요추천자는 하지 않고 잠복매독으로만 치료한다

## 해설


혈청 매독검사가 양성이면서 객관적인 신경학적 증상이 있으면 뇌척수액을 평가한다. 뇌척수액 VDRL이 양성이면 진단에 힘이 실리지만 음성 결과로 단독 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009248 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대동맥염·빛근접반사 해리·감각성 실조에서 매독 treponemal 검사 D 유지. RPR/VDRL을 treponemal 검사라고 부른 오류 수정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009248
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
- https://www.cdc.gov/std/treatment-guidelines/neurosyphilis.htm
