---
type: qbank
schema_version: 1
id: medqa-us-train-005194
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6ccd7dd640fca642e4b88cc81327fb1cdd5bc9ead1d3c020cb523319ef4d7573
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신장이식"
  - "주폐포자충 폐렴 예방"
  - "트리메토프림-설파메톡사졸"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: prevention
difficulty: standard
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "Pneumocystis를 폐렴구균으로 오역한 핵심 오류 수정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

67세 남성이 신장이식 후 안정적으로 회복 중이며 유지 면역억제를 시작했다. 설폰아마이드 알레르기는 없다. 주폐포자충 폐렴을 예방하기 위해 우선 사용할 약제는?

## 선택지

A. 아지트로마이신
B. 아시클로버
C. 도시사이클린
D. 트리메토프림–설파메톡사졸

## 해설

신장이식 후 주폐포자충 폐렴 예방에 트리메토프림–설파메톡사졸을 우선 쓴다. 신기능과 칼륨 등을 확인하고, 기간은 이식팀이 면역억제 수준과 기관 지침에 맞춰 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: Pneumocystis를 폐렴구균으로 오역한 핵심 오류 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2022/09/KDIGO-2009-Transplant-Recipient-Guideline-English.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005194
- https://doi.org/10.1111/ctr.13587

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
