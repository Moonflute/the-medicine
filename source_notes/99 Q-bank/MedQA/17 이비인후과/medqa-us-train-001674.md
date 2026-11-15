---
type: qbank
schema_version: 1
id: medqa-us-train-001674
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ae20f952971ee7d357b43178a7ea4a2089ebcba40cc2cff7790a41afb561973
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "juvenile nasopharyngeal angiofibroma"
  - "epistaxis"
  - "nasal mass"
question_type: investigation
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-u5hOy2nO2YiCAoRXBpc3RheGlzKS5tZA
difficulty: standard
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

13세 남아가 반복되는 심한 코피와 점점 심해지는 한쪽 코막힘으로 왔다. 비강 뒤쪽에 쉽게 피가 나는 종괴가 보인다. 혈관섬유종이 의심될 때 다음 조치는?

## 선택지

A. 외래에서 즉시 종괴를 펀치 생검한다
B. 고형물이므로 보이는 부분을 바로 제거한다
C. 항히스타민제로 수개월간 경과를 본다
D. 생검을 피하고 조영 CT나 MRI로 범위를 평가한다

## 해설

청소년 남아의 한쪽 코막힘과 반복 비출혈, 혈관성 종괴는 비인두 혈관섬유종을 시사한다. 심한 출혈 위험 때문에 먼저 영상으로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 청소년 남성의 출혈성 비강 종괴를 혈관육종으로 잘못 명명한 해설을 비인두 혈관섬유종으로 교정. 조영 CT D와 무분별한 생검의 출혈위험을 대조.
- 공식/학회 근거: https://medicine.uiowa.edu/iowaprotocols/juvenile-nasopharyngeal-angiofibroma

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001674
- https://iowaprotocols.medicine.uiowa.edu/protocols/juvenile-nasopharyngeal-angiofibroma
