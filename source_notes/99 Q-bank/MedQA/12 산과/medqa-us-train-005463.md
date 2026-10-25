---
type: qbank
schema_version: 1
id: medqa-us-train-005463
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7449f503512f7930dd02d5752dad3e7383d488a4876e19302515568e64b858d3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "둔위"
  - "임신 38주"
  - "외회전술"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-uRlOychCAoQnJlZWNoIFByZXNlbnRhdGlvbikubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 38주인 24세 초임부의 태아가 두 차례 초음파에서 지속적으로 둔위로 확인되었다. 태아심박수는 정상이고 자궁경부는 닫혀 있다. 환자는 질식분만을 시도하고 싶어 한다. 다음 중 가장 적절한 처치는?

## 선택지

A. 제왕절개 권고
B. 자연진통까지 관찰
C. 1주 후 초음파 반복
D. 외회전술 제안

## 해설

금기가 없는 단태 둔위 임신에서 외회전술(ECV, D)을 제안해 두위 전환을 시도할 수 있다. 태아 감시와 즉시 제왕절개가 가능한 환경에서 위험·성공률을 설명하고 환자 선택을 존중한다. 실패 시 계획 제왕절개 등이 적절할 수 있어 제왕절개를 단순히 최후 수단이라고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 외회전술 명칭과 상담·응급수술 가능 조건 및 제왕절개 폄하 수정.
- https://www.rmf.harvard.edu/Risk-Prevention-and-Education/Guidelines-and-Algorithms-Catalog-Page/Guidelines-Algorithms/2026/OB-Guideline-Files/Guideline20-Mgmnt-of-Breech-Presentations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005463
