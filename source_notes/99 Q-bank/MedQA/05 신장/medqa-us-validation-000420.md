---
type: qbank
schema_version: 1
id: medqa-us-validation-000420
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:bc3fd51f88e7c7594ad5ecffb5a834e276502713b9fcb6f5f0163206c413a10c
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신장이식"
  - "면역억제"
  - "폐포자충 폐렴 예방"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: prevention
difficulty: simple
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
curation_status: "revised"
curation_reason: "원문에 없는 고용량 steroid 조건을 추가하지 않고 이식 후 PCP 예방을 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

장기간 다낭성 신장질환으로 인한 말기 신장질환 때문에 50세 남성이 신장이식을 받았다. 수술 후 경과는 양호하고 현재 바실릭시맙, 미코페놀레이트 모페틸, 프레드니손을 복용한다. 퇴원 전에 투여할 약물로 가장 적절한 것은?

## 선택지

A. 아지트로마이신
B. 트리메토프림-설파메톡사졸
C. 아시클로버
D. 수두 백신

## 해설

신장이식 후 면역억제 치료를 받는 환자는 P. jirovecii 폐렴 위험이 있어 TMP-SMX 예방이 권고된다. 현재 prednisone 용량은 제시되지 않았다. 다른 병원체 예방은 혈청 상태와 위험에 따라 별도 판단하며 면역억제 중 생백신을 일률적으로 투여하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000420

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 원문에 없는 고용량 steroid 조건을 추가하지 않고 이식 후 PCP 예방을 설명.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2022/09/KDIGO-2009-Transplant-Recipient-Guideline-English.pdf
