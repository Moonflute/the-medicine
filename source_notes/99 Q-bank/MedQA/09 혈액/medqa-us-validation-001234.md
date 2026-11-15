---
type: qbank
schema_version: 1
id: medqa-us-validation-001234
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e87a676b3603edf8b3541bf7a1ed9a50d2be9b3424a60ed6dce0160da9a8f848
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성골수성백혈병"
  - "BCR-ABL1"
  - "이마티닙"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChDTUwpIChDaHJvbmljIE15ZWxvaWQgTGV1a2VtaWEpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

60세 환자의 만성기 만성 골수성 백혈병에서 BCR::ABL1이 확인됐다. 심각한 동반질환은 없고 이마티닙을 사용할 수 있다. 질환을 조절하기 위한 적절한 초기 약은?

## 선택지

A. 하이드록시우레아 단독 장기 치료
B. 저용량 아스피린
C. 이마티닙
D. 전트랜스 레티노산

## 해설


이마티닙은 BCR::ABL1을 억제하는 1차 치료 선택지 중 하나다. 다른 티로신키나제 억제제와 비교해 동반질환·독성·치료 목표 등을 고려하며, 치료 반응은 정량 BCR::ABL1로 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001234 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BCR::ABL1 CML의 선택지 TKI imatinib C 유지. 현대 여러 TKI 중 유일/항상 가장 효과적인 1차제라는 과장 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12310532/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001234
- https://doi.org/10.1038/s41375-025-02664-w
