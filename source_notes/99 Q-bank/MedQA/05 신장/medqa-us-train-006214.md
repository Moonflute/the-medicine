---
type: qbank
schema_version: 1
id: medqa-us-train-006214
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d79c52019dc921c49c4459b3a7bb0e839b410d88600aca9144363dc6352f25b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 세포매개 이식거부"
  - "신장이식"
  - "정맥 내 스테로이드"
  - "Acute cellular rejection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
curation_status: "revised"
curation_reason: "가장 빠른 치료라는 표현을 생검상 급성 세포성 거부의 초기 치료로 정밀화."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

신장이식 2개월 뒤 크레아티닌이 1.1에서 2.4 mg/dL로 올랐다. 생검에서 동맥염 없이 간질 염증과 세뇨관염이 보여 Banff IA 급성 T세포매개 거부반응이 확인됐다. 초기 치료는?

## 선택지

A. 혈장교환 단독
B. 마이코페놀레이트 중단
C. 응급 이식신 절제
D. 고용량 정맥 메틸프레드니솔론

## 해설

급성 T세포매개 거부반응의 기본 초기 치료는 고용량 스테로이드다. 반응과 조직 등급에 따라 추가 면역억제를 검토한다. 혈장교환은 일반적인 세포매개 거부반응의 1차 단독 치료가 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006214
- https://uroweb.org/guidelines/renal-transplantation/chapter/the-guideline

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 가장 빠른 치료라는 표현을 생검상 급성 세포성 거부의 초기 치료로 정밀화.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2022/09/KDIGO-2009-Transplant-Recipient-Guideline-English.pdf
