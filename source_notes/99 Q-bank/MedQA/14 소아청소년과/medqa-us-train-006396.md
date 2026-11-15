---
type: qbank
schema_version: 1
id: medqa-us-train-006396
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bba183ebfc2bd625431f07d77339d3c8a1bb53857c9b9d6c30d4b40e19ebebeb
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "총담관 낭종"
  - "폐쇄성 황달"
  - "간외 담관 확장"
  - "choledochal cyst"
question_type: diagnosis
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzqtIAg64Kt7KKFIChDaG9sZWRvY2hhbCBDeXN0KS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 여아에게 황달, 짙은 소변과 회색 변이 생겼다. 직접 빌리루빈이 상승했고, 초음파에서 간외 총담관 전체가 방추형으로 확장돼 있다. 담석은 보이지 않는다. 가장 가능성 높은 진단은?

## 선택지

A. 담도폐쇄증
B. 췌장 가성낭종
C. 급성 바이러스간염
D. 총담관 낭종

## 해설

직접 고빌리루빈혈증과 간외 담관의 방추형 확장은 총담관 낭종에 합당하다. 담관염이나 췌장염이 동반될 수 있어 소아간담도 전문 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 2세 환자를 신생아로 부른 설명 오류 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006396
- https://pubmed.ncbi.nlm.nih.gov/39038350/
