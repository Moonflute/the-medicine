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

60세 남성이 피로와 비장비대로 추적 진료를 받으러 왔다. 혈색소 10 g/dL, 백혈구 65,000/mm³, 혈소판 500,000/mm³이고 말초도말에서 호중구 계열의 다양한 미성숙 세포와 5% 미만의 모세포가 보인다. 분자검사에서 BCR-ABL1 재배열이 확인되었다. 현재 가장 적절한 약물치료는?

## 선택지

A. 전트랜스 레티노산
B. 아스피린
C. 이마티닙
D. 하이드록시우레아

## 해설


BCR::ABL1 재배열과 성숙 골수계 증가는 만성기 CML을 지지한다. 선택지 중 질환 표적 TKI인 imatinib(C)이 적절하다. 현재 1차 치료에는 여러 TKI가 있으며 위험도·동반질환·독성·치료목표와 접근성에 따라 선택하므로 imatinib만이 모든 환자에게 가장 효과적이라고 단정하지 않는다. Hydroxyurea는 필요 시 혈구수 조절에 쓰지만 BCR::ABL1 표적 치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001234 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BCR::ABL1 CML의 선택지 TKI imatinib C 유지. 현대 여러 TKI 중 유일/항상 가장 효과적인 1차제라는 과장 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12310532/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001234
