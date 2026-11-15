---
type: qbank
schema_version: 1
id: medqa-us-validation-000382
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f471faa8e3a8919dc6c43a492195702f72b42b58902b04f4e3b883c454226fe7
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "메탄올 중독"
  - "고음이온차 대사성 산증"
  - "포메피졸"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXkO2LuOugjOq4gOumrOy9nCDspJHrj4UgKEV0aHlsZW5lIEdseWNvbCBQb2lzb25pbmcpLm1k
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

성분을 알 수 없는 알코올에 노출된 44세 남성이 시야가 급격히 흐려졌다고 한다. Na 141, Cl 102, HCO₃⁻ 14 mEq/L로 음이온차가 25다. 메탄올 중독이 의심될 때 해독 치료와 함께 무엇을 준비해야 하는가?

## 선택지

A. 외래 시야검사
B. 활성탄 단독 치료
C. 해독제 반응 확인 후 수일 뒤 재검
D. 응급 혈액투석

## 해설

급성 시각 이상과 큰 음이온차는 중증 메탄올 중독의 투석 적응증이다. 적절한 해독 치료를 지연하지 않으며 응급 투석이 가능하도록 독성학·신장팀과 협의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 메탄올 의심에서 즉시 ADH 억제 B를 유지하되 시력 장애와 음이온차 25가 있어 투석도 시급하다는 현행 기준을 추가한다.
- 공식/학회 근거: https://www.extrip-workgroup.org/methanol

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000382
