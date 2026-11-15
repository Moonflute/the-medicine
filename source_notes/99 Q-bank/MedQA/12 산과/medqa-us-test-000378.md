---
type: qbank
schema_version: 1
id: medqa-us-test-000378
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:19f468185119375175a88817f40d8eae73d0c18280c3e16c17b14692eba786db
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "E형간염"
  - "임신 중 급성 간부전"
  - "바이러스성 간염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 22주 산모가 E형간염 유행지역에서 돌아온 뒤 황달과 혼돈을 보인다. 간수치는 크게 올랐고 INR은 2.0이다. 급성 간부전 대응과 이식센터 연락을 하면서, 최근 E형간염을 평가할 혈청 검사는?

## 선택지

A. A형간염 IgG
B. C형간염 IgG
C. E형간염 IgM
D. B형간염 표면항체

## 해설

급성 E형간염은 특이 IgM으로 평가하고 필요시 HEV RNA 등으로 확인한다. 임신에서는 중증화할 수 있으며, 의식 변화와 응고장애가 있으면 원인검사 결과를 기다리며 간부전 대응을 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 간수치 상승만으로 HEV가 흔하다고 일반화한 해설을 여행력·임신 중 중증화와 연결.
- https://www.who.int/news-room/fact-sheets/detail/hepatitis-E

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000378
