---
type: qbank
schema_version: 1
id: medqa-us-train-006838
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff4b61f9e82278aa5dcb4d65a8f642defaf5baafdc968437d1a6487e93e4e17d
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "백혈병양 반응"
  - "호중구 증가"
  - "백혈구 알칼리성 인산분해효소 상승"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

폐렴으로 입원한 55세 환자의 백혈구가 58,000/μL였고 도말에서 미성숙 호중구와 독성과립이 보였다. 호염기구 증가와 모세포는 없었다. 치료로 감염이 호전되고 백혈구가 9,000/μL로 정상화됐다. 가장 가능성 높은 설명은?

## 선택지

A. 감염에 대한 백혈병모양 반응
B. 만성 골수성 백혈병
C. 급성 골수성 백혈병
D. 골수형성이상종양

## 해설


감염에 동반된 반응성 호중구 증가가 원인 치료에 따라 정상화되는 모습이다. 백혈구 증가가 지속되거나 호염기구·모세포가 증가하면 별도로 클론성 혈액질환을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006838 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 성숙 호중구 계열·LAP 증가의 반응 C 유지; 원인과 확진을 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006838
- https://doi.org/10.1038/s41375-025-02664-w
