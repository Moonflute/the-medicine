---
type: qbank
schema_version: 1
id: medqa-us-validation-000379
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e0db4c236e04f3a96204894c47c3aef3849f480efb54b0267a4298ca987b0dcf
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 A형간염"
  - "급성 바이러스성 간염"
  - "항HAV IgM"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQe2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBBKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

37세 여성이 3일간 눈이 노랗게 변하고 소변이 짙어져 응급실에 왔다. 발열, 가려움, 심한 피로가 있으며 일주일 전 위장염 같은 증상이 일반의약품으로 호전되었다. 설사는 없지만 대변이 희다고 한다. 국제선 승무원으로 일하고, 체온 39.3°C, 공막 황달과 긁은 자국, 마른 입술, 간 압통이 있다. 총 빌리루빈 8 mg/dL(직접 4), AST 312, ALT 569 U/L이며 복부 초음파는 정상이다. 혈청검사에서 가장 가능성 높은 소견은?

## 선택지

A. 항미토콘드리아 항체
B. 핵주변 항호중구세포질항체
C. 항HAV IgM
D. 항HEV IgG

## 해설


갑작스러운 황달, 고열, AST/ALT 급상승 및 1주일 전 위장증상은 급성 A형 간염과 부합한다. 가장 확진이 유용한 검사는 항HAV IgM 항체이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000379 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 전구증상 뒤 황달·간세포효소 상승의 급성 HAV에서 IgM C. 자가면역 항체/과거 HEV IgG와 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000379
