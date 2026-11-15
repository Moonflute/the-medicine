---
type: qbank
schema_version: 1
id: medqa-us-validation-001272
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7bf0bcbf810f9bb4f06375d1a9b423b1778614fdb26e9aa6f79e61c952f1a633
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "대동맥 박리"
  - "종격동 확장"
  - "사지 맥박 차이"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 갑작스러운 흉통과 등 통증으로 내원했다. 양팔 수축기혈압이 35 mmHg 차이 나고 오른쪽 대퇴 맥박이 약하다. 혈역학은 안정적이며 조영제 금기는 없다. 대동맥박리가 의심될 때 확진할 검사는?

## 선택지

A. D-이합체만 측정
B. 흉부 비조영 CT
C. 조영증강 대동맥 CT 혈관조영술
D. 하지 정맥 도플러

## 해설

갑자기 생긴 심한 흉배부 통증과 맥박 차이는 급성 대동맥증후군을 의심할 단서다. 안전하게 이송할 수 있으면 CT 혈관조영으로 박리 범위와 분지 혈류를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고확률 급성 대동맥증후군의 조영 CT A를 유지하되 모든 환경에서 가장 빠르고 가장 정확하다는 단정을 제거한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001272
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9860464/
