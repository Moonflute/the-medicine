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

신장이식 후 수술병동에 있는 67세 남자가 회복 중이다. 과거 정맥주사 약물 사용, 당뇨병, 구순포진, 고혈압, 신부전이 있으며 사이클로스포린을 시작했다. 이 환자에게 추가로 시작해야 할 약물은?

## 선택지

A. 아지스로마이신
B. 저용량 아시클로버
C. 페니실린
D. 트리메토프림-설파메톡사졸

## 해설

신장이식 뒤 면역억제 상태에서는 Pneumocystis jirovecii 폐렴(PJP/PCP) 예방을 위해 TMP-SMX가 권고된다. 폐렴구균(Streptococcus pneumoniae) 예방이라는 뜻이 아니다. 이식 후 예방 기간과 다른 바이러스 예방은 면역억제 정도·혈청 상태·센터 지침에 맞춰 별도로 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: Pneumocystis를 폐렴구균으로 오역한 핵심 오류 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2022/09/KDIGO-2009-Transplant-Recipient-Guideline-English.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005194

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
