---
type: qbank
schema_version: 1
id: medqa-us-validation-000068
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3e663b218bcdab9fd502eba97dc3adf6618c442012fb9b0b003b44952d3a3ee6
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 C형간염"
  - "A형간염 예방접종"
  - "HCV RNA"
question_type: prevention
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQe2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBBKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
difficulty: complex
answer: A
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

임신 28주인 34세 여성(임신 2회, 출산 0회)이 산전 진료를 받으러 왔다. B형간염 표면항체와 C형간염 항체가 양성이고 B형간염 핵심항체·표면항원과 A형간염 항체는 음성이며 HCV RNA 유전자형 1이 양성이었다. 현재 가장 적절한 권고는?

## 선택지

A. A형간염 예방접종
B. 신생아에게 분유 수유를 계획한다
C. 인터페론 α와 리바비린 병합치료를 시작한다
D. 간 생검을 시행한다

## 해설

HAV 항체가 음성이므로 A형간염에 면역이 없다. 만성 HCV 감염은 HAV 중증화 위험이 있어 A형간염 백신(A)을 임신 중에도 권고할 수 있다. HBV 표면항체 단독 양성은 보통 접종 면역 패턴이며 리바비린은 임신 중 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HAV 항체 음성을 양성으로 바꿔 설명한 오류 수정.
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-9-hepatitis-a.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000068
