---
type: qbank
schema_version: 1
id: medqa-us-validation-000381
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4bf37736b10a9769b6716d6cfb931b44c71ee638348c94c16a1be9c149f4e255
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성 골수성 백혈병"
  - "필라델피아 염색체"
  - "BCR-ABL"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChDTUwpIChDaHJvbmljIE15ZWxvaWQgTGV1a2VtaWEpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

비장비대가 있는 환자의 백혈구가 116,000/μL다. 말초도말에는 여러 성숙 단계의 호중구와 호염기구 증가가 보이고 모세포는 적다. 만성 골수성 백혈병을 확인하는 핵심 검사는?

## 선택지

A. JAK2 V617F 검사
B. PML::RARA 검사
C. BCR::ABL1 융합 검출
D. 말초혈액 호중구 알칼리인산분해효소만 측정

## 해설


여러 단계의 골수계 세포와 호염기구 증가에서 CML을 의심한다. BCR::ABL1 융합으로 진단을 뒷받침하고 골수검사로 단계와 염색체 소견을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000381 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 현저 호중구증가·낮은 LAP·비장비대는 CML의 BCR::ABL1 t(9;22) B. 각 전좌 선지와 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000381
- https://doi.org/10.1038/s41375-025-02664-w
