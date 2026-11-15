---
type: qbank
schema_version: 1
id: medqa-us-test-001103
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8e1b4cef5e113b872bf3d95f83c6567ae20f52ac9d74130b3008fb09d40da0d2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 B형간염"
  - "바이러스 간염"
  - "HBc 항체"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQu2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBCKS5tZA
  - MDgg6rCQ7Je8L-uwlOydtOufrOyKpC5tZA
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

성접촉 2개월 뒤 황달이 생긴 29세 환자에서 ALT가 1,820U/L이다. HBsAg와 항-HBs는 모두 음성이다. 급성 B형간염의 창기간을 확인하는 데 가장 도움이 되는 검사는?

## 선택지

A. 항-HBe 단독
B. IgG 항-HBs
C. IgM 항-HBc
D. IgG 항-HAV

## 해설


창기간에는 HBsAg가 사라지고 항-HBs가 아직 검출되지 않을 수 있다. 이때 IgM 항-HBc가 최근 감염을 뒷받침한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001103 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-HBc C가 선지상 HBV 감염 표지이나 total/IgM 구별 없이 급성간염 확진 최상검사라는 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001103
