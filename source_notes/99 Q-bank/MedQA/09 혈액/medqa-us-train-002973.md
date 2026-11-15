---
type: qbank
schema_version: 1
id: medqa-us-train-002973
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:adeadf0d0e56641d3d1c6434f8d2beed714482059fdf0baecdc67e935c42202a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "chronic myeloid leukemia"
  - "BCR-ABL fusion"
  - "Philadelphia chromosome"
  - "leukostasis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChDTUwpIChDaHJvbmljIE15ZWxvaWQgTGV1a2VtaWEpLm1k
question_type: monitoring
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

만성기 만성 골수성 백혈병 환자가 티로신키나제 억제제를 시작했고 3개월 뒤 혈구 수는 정상화됐다. 초기 분자 반응을 평가하는 추적검사는?

## 선택지

A. 정상 혈구 수만 확인
B. 말초혈액 호중구 알칼리인산분해효소 측정
C. 국제척도(IS)로 보고하는 정량 BCR::ABL1 검사
D. 혈청 단백 전기영동

## 해설


혈구 수가 회복돼도 BCR::ABL1 전사체가 남을 수 있다. 치료 초기에 국제척도 정량검사로 분자 반응을 추적해 치료 경과와 약제 변경 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002973 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BCR::ABL1이 급성 백혈병에는 없다는 오해를 방지하면서 이 사례의 CML 진단 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002973
- https://doi.org/10.1038/s41375-025-02664-w
