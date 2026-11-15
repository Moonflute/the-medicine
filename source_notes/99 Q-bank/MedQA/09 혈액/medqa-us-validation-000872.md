---
type: qbank
schema_version: 1
id: medqa-us-validation-000872
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2aa66e1e0e252117055ead5e8f45f4e68d2f5ac05393969fe09228d257652c0f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "골수이형성증후군"
  - "고리철적아구"
  - "이형성 조혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qzqOyImO2YleyEseydtOyDgSDspp3tm4TqtbAgKE15ZWxvZHlzcGxhc3RpYyBTeW5kcm9tZSwgTURTKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
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

75세 환자의 대적혈구성 빈혈과 혈소판감소가 수개월간 지속된다. 비타민 B12·엽산·구리 검사는 정상이다. 말초도말에 저과립 혈소판과 저분절 호중구가 보이고, 골수에 여러 혈구 계열의 이형성이 있으며 모세포는 4%다. 가장 가능성 높은 진단은?

## 선택지

A. 재생불량성 빈혈
B. 골수형성이상종양
C. 급성 림프모구성 백혈병
D. 철결핍성 빈혈

## 해설


지속적인 혈구감소와 다계열 이형성은 골수형성이상종양을 시사한다. 가역적인 원인을 배제하고 골수의 염색체·분자 소견으로 세부 분류와 위험도를 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000872 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고령의 cytopenia·여러 계열 이형성·고리철적아구는 MDS C. 거대핵성 호중구라는 오기와 blast 정보 누락 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000872
- https://doi.org/10.1038/s41375-022-01613-1
