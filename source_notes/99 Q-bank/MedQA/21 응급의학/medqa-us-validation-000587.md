---
type: qbank
schema_version: 1
id: medqa-us-validation-000587
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f713bb982c947e118ff881e67fdaee37028146cee85042332b71791f7c1f6091
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심인성 쇼크"
  - "심장 타박상"
  - "낮은 심박출량"
  - "Cardiogenic shock"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 자동차 사고 현장에서 구급차로 이송되었다. 혼란스러워 질문에 답하지 못하고 혈압 75/44 mmHg, 맥박 120회/분이다. 흉골과 왼쪽 가슴에 멍과 압통, 뚜렷한 경정맥 팽창, 양측 폐기저부 수포음, 차고 땀나는 사지가 있다. 혈역학적 감시에서 PCWP 22 mmHg, CVP 12 cmH₂O, 심박출량 2.2 L/min, SVR 1800 dyn·s/cm⁵이다. 가장 잘 맞는 쇼크 유형은?

## 선택지

A. 심인성 쇼크
B. 아나필락시스성 쇼크
C. 신경성 쇼크
D. 폐쇄성 쇼크

## 해설

저심박출량, 높은 폐모세혈관쐐기압과 높은 전신혈관저항에 폐 수포음·차가운 사지가 동반되어 심인성 쇼크(A)에 가장 잘 부합한다. 흉부외상 뒤 심근 손상이 원인일 수 있으나 이 자료만으로 심장 타박상을 확진한 것은 아니다. CVP 12 cmH2O는 원문 정상 범위의 상한이며 수치 자체가 명백히 초과된 것은 아니다. 이 경우 판단의 핵심은 전체 혈역학과 폐 울혈의 조합이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 심인성 쇼크 A의 높은 PCWP·낮은 CO·높은 SVR 조합은 유지하고 CVP 12를 무조건 정상 초과로 표현하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000587
