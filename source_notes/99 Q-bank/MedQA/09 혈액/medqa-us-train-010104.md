---
type: qbank
schema_version: 1
id: medqa-us-train-010104
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41e7399a91d2488e1b3de0db7e946d7b9c98e1cb513e4d1c873878b9efed4d64
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 백혈병"
  - "다운증후군"
  - "골수 생검"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDrsLHtmIjrs5EgKEFjdXRlIExldWtlbWlhKS5tZA
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
question_type: investigation
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
---

# MedQA US 임상문제

## 문제

6세 남아가 일주일 동안 지속된 미열로 응급실에 내원했다. 한 달 동안 전신 쇠약과 피로가 있었고 양팔과 다리에 전반적인 통증을 호소한다. 다운증후군이 있으며 영아기에 선천성 심방중격결손을 수술로 교정했다. 체온 38.0°C, 맥박 분당 85회, 호흡수 분당 16회, 혈압 90/60 mmHg이다. 양측 경부 림프절이 커져 있으나 압통은 없고 나머지 진찰에는 협조하지 않는다. 혈색소 10.2 g/dL, 헤마토크릿 30.0%, 백혈구 50,000/mm³, 혈소판 20,000/mm³이다. 다음 중 진단을 확진하는 데 가장 도움이 되는 검사는?

## 선택지

A. 모노스팟 검사
B. 혈액배양
C. 골수 생검
D. 혈청 단백 전기영동

## 해설


빈혈, 심한 혈소판감소, 백혈구증가와 뼈 통증·림프절병증은 급성 백혈병을 의심하게 한다. Down 증후군에서는 ALL과 AML 위험이 모두 증가한다. 선택지 중 골수검사(C)가 진단에 가장 도움이 되며, 형태·유세포검사·유전학으로 계열을 분류해야 한다. 현재 CBC만으로 AML을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010104 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Down 소아 급성 백혈병 의심에서 골수 C 유지. 계열 정보 없이 AML이라고 확정한 설명 수정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/child-all-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010104
